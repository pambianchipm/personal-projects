from datetime import datetime
from typing import Optional
from pydantic import BaseModel


# ── Auth ──────────────────────────────────────────────────────────────────────

class TokenResponse(BaseModel):
    access_token: str
    token_type: str = "bearer"


class UserPublic(BaseModel):
    id: int
    username: str
    email: Optional[str]
    bio: Optional[str]
    is_creator: bool
    created_at: datetime


# ── Agents ────────────────────────────────────────────────────────────────────

ALLOWED_MODELS = ["gpt-3.5-turbo", "gpt-4o", "gpt-4o-mini"]
ALLOWED_CATEGORIES = [
    "Writing", "Coding", "Research", "Business",
    "Creative", "Education", "Support", "Other",
]


class AgentCreate(BaseModel):
    name: str
    description: str
    long_description: Optional[str] = None
    system_prompt: str
    model: str = "gpt-3.5-turbo"
    category: str
    tags: list[str] = []
    is_published: bool = False


class AgentUpdate(BaseModel):
    name: Optional[str] = None
    description: Optional[str] = None
    long_description: Optional[str] = None
    system_prompt: Optional[str] = None
    model: Optional[str] = None
    category: Optional[str] = None
    tags: Optional[list[str]] = None
    is_published: Optional[bool] = None


class AgentPublic(BaseModel):
    id: int
    creator_id: int
    creator_username: str
    name: str
    slug: str
    description: str
    long_description: Optional[str]
    system_prompt: str
    model: str
    category: str
    tags: list[str]
    is_published: bool
    created_at: datetime


# ── Chat ──────────────────────────────────────────────────────────────────────

class MessageCreate(BaseModel):
    content: str


class MessagePublic(BaseModel):
    id: int
    role: str
    content: str
    timestamp: datetime


class ConversationResponse(BaseModel):
    id: int
    agent_id: int
    agent_name: str
    agent_model: str
    title: Optional[str]
    created_at: datetime
    messages: list[MessagePublic]


# ── Users ─────────────────────────────────────────────────────────────────────

class UserProfileResponse(BaseModel):
    user: UserPublic
    agents: list[AgentPublic]
