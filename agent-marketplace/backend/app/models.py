from datetime import datetime
from typing import Optional
from sqlmodel import Field, SQLModel


class User(SQLModel, table=True):
    id: Optional[int] = Field(default=None, primary_key=True)
    username: str = Field(index=True, unique=True)
    email: Optional[str] = Field(default=None)
    hashed_password: str
    bio: Optional[str] = None
    is_creator: bool = Field(default=True)  # all users can create agents
    created_at: datetime = Field(default_factory=datetime.utcnow)


class Agent(SQLModel, table=True):
    id: Optional[int] = Field(default=None, primary_key=True)
    creator_id: int = Field(foreign_key="user.id")
    name: str
    slug: str = Field(index=True, unique=True)
    description: str
    long_description: Optional[str] = None
    system_prompt: str
    model: str = Field(default="gpt-3.5-turbo")
    category: str
    tags: str = Field(default="[]")  # JSON-encoded list of strings
    is_published: bool = Field(default=False)
    created_at: datetime = Field(default_factory=datetime.utcnow)


class Conversation(SQLModel, table=True):
    id: Optional[int] = Field(default=None, primary_key=True)
    user_id: int = Field(foreign_key="user.id")
    agent_id: int = Field(foreign_key="agent.id")
    title: Optional[str] = None
    created_at: datetime = Field(default_factory=datetime.utcnow)


class Message(SQLModel, table=True):
    id: Optional[int] = Field(default=None, primary_key=True)
    conversation_id: int = Field(foreign_key="conversation.id")
    role: str  # "user" | "assistant"
    content: str
    timestamp: datetime = Field(default_factory=datetime.utcnow)
