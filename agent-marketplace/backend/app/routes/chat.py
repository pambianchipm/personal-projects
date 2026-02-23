from fastapi import APIRouter, Depends, HTTPException
from sqlmodel import Session, select

from ..auth import get_current_user
from ..db import get_session
from ..models import Agent, Conversation, Message
from ..openai_client import chat_completion
from ..schemas import ConversationResponse, MessageCreate, MessagePublic

router = APIRouter()


def _build_conversation_response(conv: Conversation, session: Session) -> ConversationResponse:
    agent = session.get(Agent, conv.agent_id)
    messages = session.exec(
        select(Message)
        .where(Message.conversation_id == conv.id)
        .order_by(Message.timestamp)
    ).all()
    return ConversationResponse(
        id=conv.id,
        agent_id=conv.agent_id,
        agent_name=agent.name if agent else "Unknown",
        agent_model=agent.model if agent else "gpt-3.5-turbo",
        title=conv.title,
        created_at=conv.created_at,
        messages=[
            MessagePublic(id=m.id, role=m.role, content=m.content, timestamp=m.timestamp)
            for m in messages
        ],
    )


@router.post("/api/agents/{agent_id}/conversations", response_model=ConversationResponse)
def start_conversation(
    agent_id: int,
    current_user=Depends(get_current_user),
    session: Session = Depends(get_session),
):
    agent = session.get(Agent, agent_id)
    if not agent or not agent.is_published:
        raise HTTPException(status_code=404, detail="Agent not found")
    conv = Conversation(user_id=current_user.id, agent_id=agent_id)
    session.add(conv)
    session.commit()
    session.refresh(conv)
    return _build_conversation_response(conv, session)


@router.get("/api/conversations/{conv_id}", response_model=ConversationResponse)
def get_conversation(
    conv_id: int,
    current_user=Depends(get_current_user),
    session: Session = Depends(get_session),
):
    conv = session.get(Conversation, conv_id)
    if not conv:
        raise HTTPException(status_code=404, detail="Conversation not found")
    if conv.user_id != current_user.id:
        raise HTTPException(status_code=403, detail="Not your conversation")
    return _build_conversation_response(conv, session)


@router.post("/api/conversations/{conv_id}/messages")
def send_message(
    conv_id: int,
    body: MessageCreate,
    current_user=Depends(get_current_user),
    session: Session = Depends(get_session),
):
    conv = session.get(Conversation, conv_id)
    if not conv:
        raise HTTPException(status_code=404, detail="Conversation not found")
    if conv.user_id != current_user.id:
        raise HTTPException(status_code=403, detail="Not your conversation")

    agent = session.get(Agent, conv.agent_id)
    if not agent:
        raise HTTPException(status_code=404, detail="Agent not found")

    # Set conversation title from first user message
    if not conv.title:
        conv.title = body.content[:60]
        session.add(conv)
        session.commit()

    # Build message history for OpenAI
    prior = session.exec(
        select(Message)
        .where(Message.conversation_id == conv_id)
        .order_by(Message.timestamp)
    ).all()

    openai_messages = [{"role": "system", "content": agent.system_prompt}]
    openai_messages += [{"role": m.role, "content": m.content} for m in prior]
    openai_messages.append({"role": "user", "content": body.content})

    # Get AI reply
    try:
        reply_content = chat_completion(openai_messages, model=agent.model)
    except Exception as e:
        raise HTTPException(status_code=502, detail=f"OpenAI error: {str(e)}")

    # Persist user message and assistant reply
    user_msg = Message(conversation_id=conv_id, role="user", content=body.content)
    assistant_msg = Message(conversation_id=conv_id, role="assistant", content=reply_content)
    session.add(user_msg)
    session.add(assistant_msg)
    session.commit()
    session.refresh(user_msg)
    session.refresh(assistant_msg)

    return {
        "reply": reply_content,
        "conversation_id": conv_id,
        "user_message": MessagePublic(
            id=user_msg.id, role=user_msg.role,
            content=user_msg.content, timestamp=user_msg.timestamp,
        ),
        "assistant_message": MessagePublic(
            id=assistant_msg.id, role=assistant_msg.role,
            content=assistant_msg.content, timestamp=assistant_msg.timestamp,
        ),
    }
