from pathlib import Path

from fastapi import FastAPI, Request, HTTPException, Depends
from fastapi.middleware.cors import CORSMiddleware
from dotenv import load_dotenv
from .openai_client import chat_completion
from .agent_prompt import build_model_messages
from .db import init_db, get_session
from .auth import router as auth_router, get_current_user
from .models import Message, Conversation
from sqlmodel import Session, select

load_dotenv(Path(__file__).resolve().parent.parent / ".env")


app = FastAPI()
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_methods=["*"],
    allow_headers=["*"],
)


app.include_router(auth_router)


@app.on_event("startup")
def on_startup():
    init_db()


@app.post("/api/chat")
async def chat(request: Request, user=Depends(get_current_user), session: Session = Depends(get_session)):
    data = await request.json()
    messages = data.get("messages")
    conv_id = data.get("conversation_id")
    if not isinstance(messages, list) or not messages:
        raise HTTPException(status_code=400, detail="messages required")

    # Ignore client-supplied system prompts; backend owns agent behavior.
    chat_messages = [m for m in messages if m.get("role") != "system"]
    if not chat_messages:
        raise HTTPException(status_code=400, detail="at least one non-system message required")

    # ensure conversation exists or create
    if conv_id is None:
        first_user_content = next((m.get("content", "") for m in chat_messages if m.get("role") == "user"), "")
        conv = Conversation(title=(first_user_content[:50] if first_user_content else "New"), user_id=user.id)
        session.add(conv)
        session.commit()
        session.refresh(conv)
        conv_id = conv.id

    # persist incoming messages (only user role entries)
    for m in chat_messages:
        session.add(Message(conversation_id=conv_id, role=m.get("role"), content=m.get("content")))
    session.commit()

    try:
        reply = chat_completion(build_model_messages(chat_messages))
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

    # persist assistant reply
    session.add(Message(conversation_id=conv_id, role="assistant", content=reply))
    session.commit()
    return {"reply": reply, "conversation_id": conv_id}


@app.get("/api/conversations")
def list_conversations(user=Depends(get_current_user), session: Session = Depends(get_session)):
    convs = session.exec(
        select(Conversation)
        .where(Conversation.user_id == user.id)
        .order_by(Conversation.created_at)
    ).all()
    return {
        "conversations": [
            {"id": c.id, "title": c.title, "created_at": c.created_at}
            for c in convs
        ]
    }


@app.get("/api/conversations/{conv_id}")
def get_conversation(conv_id: int, user=Depends(get_current_user), session: Session = Depends(get_session)):
    conv = session.get(Conversation, conv_id)
    if not conv or conv.user_id != user.id:
        raise HTTPException(status_code=404, detail="Not found")
    msgs = session.exec(
        select(Message)
        .where(Message.conversation_id == conv_id)
        .order_by(Message.timestamp)
    ).all()
    return {
        "messages": [
            {"role": m.role, "content": m.content, "timestamp": m.timestamp}
            for m in msgs
        ],
        "conversation": {"id": conv.id, "title": conv.title},
    }
