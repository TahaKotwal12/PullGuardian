# ───────────────────────────────
# 🏗 Stage 1 — Base image
# ───────────────────────────────
FROM python:3.11-slim AS base

# Set environment variables
ENV PYTHONDONTWRITEBYTECODE=1
ENV PYTHONUNBUFFERED=1
ENV PATH="/root/.local/bin:$PATH"

# Install OS dependencies and pipx
RUN apt-get update && apt-get install -y curl git build-essential libpq-dev && \
    pip install --no-cache-dir pipx && \
    pipx ensurepath

# Install uv via pipx
RUN pipx install uv

# Set working directory
WORKDIR /app

# Copy only necessary files to install dependencies
COPY pyproject.toml requirements.txt* ./

# Create virtual environment and install dependencies
RUN uv venv && \
    . .venv/bin/activate && \
    uv pip install --upgrade pip && \
    uv pip install -r requirements.txt

# Copy app source code
COPY . .

# ───────────────────────────────
# 🚀 Stage 2 — Final runtime image
# ───────────────────────────────
FROM python:3.11-slim

WORKDIR /app

# Copy virtual env and app code from build stage
COPY --from=base /app/.venv /app/.venv
COPY --from=base /app /app

# Activate virtualenv
ENV PATH="/app/.venv/bin:$PATH"

EXPOSE 8000

CMD ["uvicorn", "app.main:app", "--host", "0.0.0.0", "--port", "8000"]
