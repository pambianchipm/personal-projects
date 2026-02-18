# ChatGPT Agent (FastAPI backend + React frontend)

Quick scaffold to run a local ChatGPT-backed agent.

Prerequisites
- Python 3.10+ and `pip`
- Node 18+ and `npm` or `pnpm`
- An OpenAI API key

Setup

1. Backend

```bash
cd agent-backend
python -m venv .venv
source .venv/bin/activate
pip install -r requirements.txt
cp .env.example .env
# edit .env and add your OPENAI_API_KEY + SECRET_KEY
# run the backend
uvicorn app.main:app --reload --port 8000
```

2. Frontend

```bash
cd frontend
npm install
npm run dev
```

Usage
- Open the Vite dev server URL (usually http://localhost:5173) and chat.

Notes
- The backend auto-loads `agent-backend/.env` (via python-dotenv).
- The backend expects `OPENAI_API_KEY` and talks to OpenAI's Chat Completions API.
- Agent behavior is controlled by `agent-backend/app/agent_instructions.md`.
- Optional: set `AGENT_INSTRUCTIONS_PATH` in `.env` to load instructions from another file.
- The backend also supports user registration/login (JWT) and persists conversations to `agent.db`.
- Register or login via `/api/register` and `/api/login` (form-encoded POST: `username`, `password`).
- The frontend sends JWT as `Authorization: Bearer <token>`.
- For production, secure the API key and add rate-limiting / auth.
