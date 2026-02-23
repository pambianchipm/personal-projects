import json
import re
from typing import Optional

from fastapi import APIRouter, Depends, HTTPException, Query
from fastapi.security import OAuth2PasswordBearer
from sqlmodel import Session, select

from ..auth import get_current_user, oauth2_scheme, SECRET_KEY, ALGORITHM
from ..db import get_session
from ..models import Agent, User
from ..schemas import AgentCreate, AgentPublic, AgentUpdate, ALLOWED_MODELS, ALLOWED_CATEGORIES

try:
    from jose import JWTError, jwt as _jwt
except ImportError:
    _jwt = None


def _optional_user(
    session: Session = Depends(get_session),
    token: str = Depends(OAuth2PasswordBearer(tokenUrl="/api/auth/login", auto_error=False)),
) -> Optional[User]:
    if not token:
        return None
    try:
        payload = _jwt.decode(token, SECRET_KEY, algorithms=[ALGORITHM])
        username = payload.get("sub")
        if not username:
            return None
        return session.exec(select(User).where(User.username == username)).first()
    except Exception:
        return None

router = APIRouter(prefix="/api/agents")


def _make_slug(name: str) -> str:
    slug = name.lower()
    slug = re.sub(r"[^a-z0-9\s-]", "", slug)
    slug = re.sub(r"[\s]+", "-", slug.strip())
    return slug


def _unique_slug(base: str, session: Session, exclude_id: Optional[int] = None) -> str:
    slug = base
    counter = 2
    while True:
        existing = session.exec(select(Agent).where(Agent.slug == slug)).first()
        if not existing or (exclude_id and existing.id == exclude_id):
            return slug
        slug = f"{base}-{counter}"
        counter += 1


def _agent_to_public(agent: Agent, session: Session) -> AgentPublic:
    creator = session.get(User, agent.creator_id)
    return AgentPublic(
        id=agent.id,
        creator_id=agent.creator_id,
        creator_username=creator.username if creator else "unknown",
        name=agent.name,
        slug=agent.slug,
        description=agent.description,
        long_description=agent.long_description,
        system_prompt=agent.system_prompt,
        model=agent.model,
        category=agent.category,
        tags=json.loads(agent.tags),
        is_published=agent.is_published,
        created_at=agent.created_at,
    )


# NOTE: /mine must be defined before /{id} to avoid FastAPI treating "mine" as an int
@router.get("/mine", response_model=list[AgentPublic])
def get_my_agents(
    current_user: User = Depends(get_current_user),
    session: Session = Depends(get_session),
):
    agents = session.exec(select(Agent).where(Agent.creator_id == current_user.id)).all()
    return [_agent_to_public(a, session) for a in agents]


@router.get("", response_model=list[AgentPublic])
def browse_agents(
    q: Optional[str] = Query(default=None),
    category: Optional[str] = Query(default=None),
    page: int = Query(default=0, ge=0),
    limit: int = Query(default=12, le=50),
    session: Session = Depends(get_session),
):
    query = select(Agent).where(Agent.is_published == True)
    if q:
        query = query.where(
            Agent.name.contains(q) | Agent.description.contains(q)
        )
    if category:
        query = query.where(Agent.category == category)
    query = query.offset(page * limit).limit(limit)
    agents = session.exec(query).all()
    return [_agent_to_public(a, session) for a in agents]


@router.get("/{agent_id}", response_model=AgentPublic)
def get_agent(
    agent_id: int,
    session: Session = Depends(get_session),
    current_user: Optional[User] = Depends(_optional_user),
):
    agent = session.get(Agent, agent_id)
    if not agent:
        raise HTTPException(status_code=404, detail="Agent not found")
    if not agent.is_published and (not current_user or agent.creator_id != current_user.id):
        raise HTTPException(status_code=404, detail="Agent not found")
    return _agent_to_public(agent, session)


@router.post("", response_model=AgentPublic)
def create_agent(
    body: AgentCreate,
    current_user: User = Depends(get_current_user),
    session: Session = Depends(get_session),
):
    if body.model not in ALLOWED_MODELS:
        raise HTTPException(status_code=422, detail=f"Model must be one of {ALLOWED_MODELS}")
    if body.category not in ALLOWED_CATEGORIES:
        raise HTTPException(status_code=422, detail=f"Category must be one of {ALLOWED_CATEGORIES}")

    base_slug = _make_slug(body.name)
    slug = _unique_slug(base_slug, session)

    agent = Agent(
        creator_id=current_user.id,
        name=body.name,
        slug=slug,
        description=body.description,
        long_description=body.long_description,
        system_prompt=body.system_prompt,
        model=body.model,
        category=body.category,
        tags=json.dumps(body.tags),
        is_published=body.is_published,
    )
    session.add(agent)
    session.commit()
    session.refresh(agent)
    return _agent_to_public(agent, session)


@router.put("/{agent_id}", response_model=AgentPublic)
def update_agent(
    agent_id: int,
    body: AgentUpdate,
    current_user: User = Depends(get_current_user),
    session: Session = Depends(get_session),
):
    agent = session.get(Agent, agent_id)
    if not agent:
        raise HTTPException(status_code=404, detail="Agent not found")
    if agent.creator_id != current_user.id:
        raise HTTPException(status_code=403, detail="Not your agent")

    if body.model is not None and body.model not in ALLOWED_MODELS:
        raise HTTPException(status_code=422, detail=f"Model must be one of {ALLOWED_MODELS}")
    if body.category is not None and body.category not in ALLOWED_CATEGORIES:
        raise HTTPException(status_code=422, detail=f"Category must be one of {ALLOWED_CATEGORIES}")

    if body.name is not None:
        agent.name = body.name
        base_slug = _make_slug(body.name)
        agent.slug = _unique_slug(base_slug, session, exclude_id=agent.id)
    if body.description is not None:
        agent.description = body.description
    if body.long_description is not None:
        agent.long_description = body.long_description
    if body.system_prompt is not None:
        agent.system_prompt = body.system_prompt
    if body.model is not None:
        agent.model = body.model
    if body.category is not None:
        agent.category = body.category
    if body.tags is not None:
        agent.tags = json.dumps(body.tags)
    if body.is_published is not None:
        agent.is_published = body.is_published

    session.add(agent)
    session.commit()
    session.refresh(agent)
    return _agent_to_public(agent, session)


@router.delete("/{agent_id}")
def delete_agent(
    agent_id: int,
    current_user: User = Depends(get_current_user),
    session: Session = Depends(get_session),
):
    agent = session.get(Agent, agent_id)
    if not agent:
        raise HTTPException(status_code=404, detail="Agent not found")
    if agent.creator_id != current_user.id:
        raise HTTPException(status_code=403, detail="Not your agent")
    session.delete(agent)
    session.commit()
    return {"ok": True}


@router.post("/{agent_id}/publish", response_model=AgentPublic)
def publish_agent(
    agent_id: int,
    current_user: User = Depends(get_current_user),
    session: Session = Depends(get_session),
):
    agent = session.get(Agent, agent_id)
    if not agent:
        raise HTTPException(status_code=404, detail="Agent not found")
    if agent.creator_id != current_user.id:
        raise HTTPException(status_code=403, detail="Not your agent")
    agent.is_published = True
    session.add(agent)
    session.commit()
    session.refresh(agent)
    return _agent_to_public(agent, session)


@router.post("/{agent_id}/unpublish", response_model=AgentPublic)
def unpublish_agent(
    agent_id: int,
    current_user: User = Depends(get_current_user),
    session: Session = Depends(get_session),
):
    agent = session.get(Agent, agent_id)
    if not agent:
        raise HTTPException(status_code=404, detail="Agent not found")
    if agent.creator_id != current_user.id:
        raise HTTPException(status_code=403, detail="Not your agent")
    agent.is_published = False
    session.add(agent)
    session.commit()
    session.refresh(agent)
    return _agent_to_public(agent, session)
