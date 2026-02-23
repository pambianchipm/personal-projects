import json

from fastapi import APIRouter, Depends, HTTPException
from sqlmodel import Session, select

from ..db import get_session
from ..models import Agent, User
from ..schemas import AgentPublic, UserProfileResponse, UserPublic

router = APIRouter(prefix="/api/users")


@router.get("/{username}", response_model=UserProfileResponse)
def get_user_profile(username: str, session: Session = Depends(get_session)):
    user = session.exec(select(User).where(User.username == username)).first()
    if not user:
        raise HTTPException(status_code=404, detail="User not found")

    published_agents = session.exec(
        select(Agent).where(Agent.creator_id == user.id, Agent.is_published == True)
    ).all()

    agent_list = [
        AgentPublic(
            id=a.id,
            creator_id=a.creator_id,
            creator_username=user.username,
            name=a.name,
            slug=a.slug,
            description=a.description,
            long_description=a.long_description,
            system_prompt=a.system_prompt,
            model=a.model,
            category=a.category,
            tags=json.loads(a.tags),
            is_published=a.is_published,
            created_at=a.created_at,
        )
        for a in published_agents
    ]

    return UserProfileResponse(
        user=UserPublic(
            id=user.id,
            username=user.username,
            email=user.email,
            bio=user.bio,
            is_creator=user.is_creator,
            created_at=user.created_at,
        ),
        agents=agent_list,
    )
