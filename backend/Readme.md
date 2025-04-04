# 🧠 CodeSentinel Backend

The **backend service** for **CodeSentinel** — an AI-powered code review and static security audit platform for modern developers.

This service powers the API layer, AI-based code inspection engine, rule-based security scans, and integrates with the VS Code extension and frontend dashboard.

---

## 🚀 Tech Stack

| Layer       | Technology        |
|-------------|-------------------|
| API         | FastAPI           |
| Language    | Python 3.11+      |
| Env Mgmt    | [`uv`](https://github.com/astral-sh/uv) |
| DBs         | PostgreSQL, ClickHouse |
| Linting     | Ruff, Black       |
| CI/CD       | GitHub Actions    |

---

## 📁 Project Structure
```
backend/
├── app/
│   ├── main.py             # FastAPI app instance
│   ├── api/                # Route definitions
│   ├── services/           # AI, rule engines, code analyzers
│   ├── models/             # Pydantic models & DB schemas
│   ├── core/               # Config, logging, utils
│   └── db/                 # DB session, migrations
├── tests/                  # Unit & integration tests
├── .env.example            # Sample env file
├── requirements.txt        # Locked dependencies (via uv)
└── README.md               # You're here
```

---

## ⚙️ Setup Instructions

### 1. 🔧 Install `uv`

> Fast Python package & environment manager (recommended over pip/venv)

```bash
curl -Ls https://astral.sh/uv/install.sh | sh
```

### 2. 📦 Create Virtual Environment & Install Deps
```
cd backend
uv venv
source .venv/bin/activate
uv pip install -r requirements.txt
uvicorn app.main:app --reload
```

### 3. 🚀 Run FastAPI App
```
uvicorn app.main:app --reload
```
