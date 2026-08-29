# Zhanlu — Enterprise AI Agent Platform
## AI Engineer Deep-Dive

> Solo-built, end-to-end (backend + UI + tests), 2025–2026 · Synexia AI (Internship)
> Role: AI Platform / Full-stack Engineer
> Repo: private · Live stack: FastAPI :5002 · React/Vite :8088 · Postgres/Redis/MinIO · Docker

---

## 1. What It Is

Zhanlu is an industry-agnostic **enterprise AI operating system**: a multi-tenant platform
where every department (Marketing, R&D, Data Analysis, C5/C9, Global) runs its own projects,
agents, datasources, and knowledge bases with strict data isolation — on one deployment.

Users chat with a main agent that plans the request, delegates to purpose-built agents,
executes code in isolated Docker sandboxes, and produces real business artifacts
(data-driven PPT decks, DOCX, HTML, fullstack dashboards, mini-apps) that are validated,
versioned, and previewed inline.

---

## 2. AI Engineer Responsibilities (what I actually did)

- Designed the **agent harness/runtime**: FSM orchestration, Plan DAG, turn planning,
  goal contracts, self-correction (reflexion + smart retry), verification.
- Built **multi-agent orchestration**: main-agent / sub-agent delegation + swarm layer.
- Engineered **LLM infrastructure**: multi-provider routing, health checks, automatic
  fallback, per-agent/per-org model routes, caching, prompt A/B testing.
- Built **context engineering**: SafeContextGate (pre-flight context budget enforcement),
  proactive compaction, data-pointer spill layer, long-term semantic memory, hybrid RAG.
- Implemented **evaluation**: golden eval pipeline, LLM-as-judge artifact audit gates,
  regression + backtest testing.
- Built **MCP integration**: native MCP client + MCP server; CAD Agent driving Autodesk
  Fusion 360 over a socket MCP bridge.
- Implemented **sandbox security**: Docker-isolated skill execution, credentials never
  reach the sandbox, docker socket restricted to the worker.
- Built **enterprise governance**: multi-tenancy at the DB layer, per-agent column/row-level
  data bindings, RBAC resource policies, audit trail, JWT auth hardening.
- Shipped **realtime UX**: SSE step-streaming of agent runs, WebSocket-live dashboards.
- Ran **MLOps-style forecasting**: backtests with significance testing, conformal intervals,
  anomaly detection, accuracy tracking, nightly scheduled runs + human-in-the-loop review.
- Enforced engineering rigor: DB-agnostic hard rules, guard tests, pytest + CI, docs-first
  (specs + plans before implementation).

---

## 3. Architecture (7 layers, one governance pipeline)

| Layer | What it does |
|---|---|
| 1. Enterprise Interaction & Identity | UI, JWT auth (access 15min + rotating refresh 30d, OTP), sealed RequestEnvelope |
| 2. Synexia Cognitive Core | One governed plan-act-observe FSM, 7 capability engines (Goal, Context, Planning, Reasoning, Decision, Reflection, Learning), swappable LLM, emits Plan DAG |
| 3. Harness Agent Runtime | Every agent = Harness Agent: required confirmations, risk tier, model route, sandbox requirement, ready/warning/blocked status |
| 4. Memory & Knowledge | DataSnapshots, semantic memory (embedding vectors + cosine recall), KBs, knowledge graph |
| 5. Execution Layer | Sandboxed workflow / automation / artifact / notification / approval; sandbox-worker is the ONLY Docker-socket-bearing service |
| 6. Platform Services | Model routing policy, prompt versioning, policy evaluation, confirmation gates, budget limits, traces, AI governance registries |
| 7. Infrastructure | 14-service Docker stack: backend, worker, sandbox-worker, postgres, redis, minio+init, sandbox-python/pptx/office/webapp, prometheus, grafana |

All tool calls flow through the **Tool/Skill/MCP Gateway**:
`permission filter → schema validation → policy evaluation → execution → audit record`.
Agents never call MCP directly; the model never sees the full tool catalog.

---

## 4. AI Engineering Details

### 4.1 Agent Harness / Runtime
- **Plan-first turn planning**: every request is planned before execution; `turn_planner`
  emits `plan_step_added/completed` SSE events streamed to the chat UI as a visible
  checklist; step completion is driven by **real tool evidence**, not LLM claims.
- **FSM + Plan DAG**: intent → typed TaskSpec → validated plan graph → gated execution →
  ObservationRecord audit entries; approval gates, retry/timeout isolation.
- **Goal contract** (GOAL_CONTRACT=true): deliverable completion is enforced; if the
  requested artifact isn't produced, the agent is re-prompted.
- **Self-correction**: reflexion, smart retry with backoff, iteration budgets, tool-result
  classification, sub-agent reliability guards.

### 4.2 Multi-Agent Orchestration
- Main agent delegates to domain agents (Finance, Report, Dashboard, Data Analyst,
  Document, Compliance, Mini-App, Review + user-created scenario agents).
- Swarm layer: mailbox, orchestrator, runtime for cross-agent collaboration.
- Per-agent bindings: model route, datasources, skills, MCP tools — each agent sees only
  its own scope.

### 4.3 LLM Infrastructure (LLMOps serving layer)
- Multi-provider routing + health checks + automatic fallback (cloud DeepSeek ↔ local).
- Validated **local vLLM serving (Qwen3-27B)** with a custom tool-call parser for
  on-prem deployments (customers refuse cloud).
- Hierarchical model config, per-org provider keys, prompt A/B testing, response cache,
  token tracking, provider health monitoring.

### 4.4 Context Engineering (rare, high-value)
- **SafeContextGate**: runs before EVERY LLM call — estimates tokens, compresses history,
  spills oversized tool payloads (>2000 chars / >20 items) to a data-pointer layer,
  guarantees 25% context headroom; context-window crashes become structurally impossible
  regardless of model.
- Proactive compaction + hierarchical history summarization; protects system prompt,
  current message, last 6 turns.
- Long-term semantic memory: `text-embedding-3-small` vectors stored portably (SQLite +
  Postgres), cosine-similarity recall, memory consolidation.

### 4.5 RAG / Knowledge
- Hybrid retrieval (semantic + keyword + KB access-policy filtering), project knowledge
  graph (entity linker, catalog indexer, schema linker), KB policy enforcement on queries,
  citation grounding for generated reports.

### 4.6 Evaluation / LLM-as-Judge
- Golden eval pipeline, quality eval, self-critic, answer verification.
- **Blocking artifact audit gates**: PPT/DOCX outputs are audited by an LLM judge
  (source-citation rule) before delivery — failed decks are not delivered
  (PPT_AUDIT_BLOCKING_ENABLED).
- Regression tests for skill routing, backtest significance for forecasting changes.

### 4.7 MCP
- Native **MCP client** (registers external tools) + **MCP server** (exposes platform
  capabilities).
- **CAD Agent**: natural language → parametric 3D models in Autodesk Fusion 360 over a
  socket MCP bridge (host.docker.internal:9876); intent-classified build/query/ambiguous,
  todo-based goal lock-in, validated typed Fusion ops + raw adsk fallback, live scene
  re-reads, persistent canvas.

### 4.8 Realtime & Observability
- SSE stream for agent run steps + artifacts; WebSocket for live dashboard data.
- OpenTelemetry tracing sink, run-step persistence, diagnostics + app-log endpoints,
  audit trail on every gated action.

### 4.9 Security & Governance
- Auth: JWT access + rotating refresh (SHA-256 hashed), JTI blacklist on logout, OTP
  registration, rate limiting, password policy.
- **Multi-tenancy at the DB layer**: org_id/app_id scoping on every resource; company vs
  personal visibility.
- **Per-agent data isolation**: datasource bindings with `access_mode` (read-only),
  `allowed_tables`, `allowed_columns`, `blocked_tables`, `row_filters`.
- Sandbox: ephemeral Docker containers, resource caps (memory/CPU/pids), no raw
  credentials ever reach the sandbox, DataSnapshot is the only data path agents see.

### 4.10 Forecasting / ML (secondary module)
- Multi-horizon ensemble (STL + statistical + ML), backtests with significance testing,
  conformal prediction intervals, anomaly detection, accuracy tracking, nightly scheduled
  runs, human-in-the-loop approval.

### 4.11 AI Infrastructure Engineering Details

#### a) Deployment topology & lifecycle
- Docker Compose stack (services): backend, sandbox-worker, postgres, redis, minio +
  minio-init, sandbox-python / sandbox-office / sandbox-pptx / sandbox-webapp, frontend
  (nginx); Prometheus + Grafana designed in the infra spec for metric collection.
- **Prestart contract** (`scripts/prestart.sh`): wait for PostgreSQL/Redis/MinIO → run
  Alembic migrations → idempotent seed → start uvicorn.
- **Restart discipline**: both `zhanlu-backend` and `zhanlu-sandbox-worker` must restart
  together after a deploy — bind-mounts never reload a running process's imported modules;
  the worker BRPOPs the Redis `sandbox:queue` and spawns disposable Docker containers.
- Frontend served as a bind-mounted `:ro` dist behind nginx — frontend-only changes need
  no container restart.

#### b) LLM serving ops (LLMOps)
- Multi-provider routing with health checks + automatic fallback (`provider_fallback`,
  `provider_health`); hierarchical LLM config (per-org / per-agent overrides).
- Validated **local vLLM serving (Qwen3-27B)** with a custom tool-call parser — on-prem
  option for customers who refuse cloud; seamless switch to cloud DeepSeek.
- Caching tiers: semantic response cache, prompt caching, per-session caches; token
  tracking + iteration budgets to bound spend.

#### c) Sandbox resource management
- Every code/artifact run executes in an ephemeral Docker container with configurable
  resource caps: memory MB, CPU count, pids limit, timeout seconds, max output MB,
  always-cleanup.
- Docker socket is restricted to the sandbox-worker — the API never touches Docker.
- Sandbox never receives raw datasource credentials; agents read only immutable
  DataSnapshots.

#### d) Observability & operations
- OpenTelemetry tracing sink + per-run-step persistence (agent_run_step) → full execution
  timeline per request; `/healthz` endpoint; app-log + diagnostics routers; audit trail
  on every gated action.
- SSE event stream (plan steps, artifact progress) and WebSocket channels (live dashboards)
  with JWT auth; rate-limited auth endpoints.

#### e) Data infrastructure
- PostgreSQL as source of truth: 76 Alembic migrations; Redis for queues, locks, and event
  fanout; MinIO for versioned artifacts and uploads.
- Connection-fingerprint schema cache (keyed per datasource, invalidated on KB connect) —
  schema discovery without hammering the DB.
- DB-agnostic connector: standard SQL only, dialect-safe identifier quoting, row/column
  filters enforced at query build time.

#### f) Reliability engineering
- `llm_retry` with backoff, provider fallback, smart retry with tool-evidence re-planning,
  iteration budgets, sub-agent reliability guards; deterministic fallback path when the
  LLM fails (reports built from cached profiles).
- Scheduled tasks (20+ cron/schedule hooks) for forecasts, digests, and automation.

#### g) CI/CD & testing
- GitHub Actions CI: backend (ruff lint + import smoke + tests), frontend (`npm ci`,
  typecheck, build); 832 Python test files across app + test suites; E2E scripts
  (`smoke_e2e.sh`, e2e UI/contract/artifact runs); guard tests enforcing DB-agnostic rules
  (no hardcoded identifiers).
- Docs-first workflow: approved specs in `docs/superpowers/specs/`, implementation plans
  in `docs/superpowers/plans/`, post-change verification before completion.

#### h) Security hardening (infra view)
- Auth: JWT access (15 min) + rotating refresh (30 days, SHA-256 hashed), JTI blacklist
  on logout, OTP registration, rate limits, password policy.
- Multi-tenancy at the DB layer: org_id/app_id on every resource; per-agent datasource
  bindings with allowed/blocked tables, allowed columns, row filters; RBAC resource
  access policies + controlled sharing; PII sanitization layer.
- Sandbox isolation: ephemeral containers, resource caps, no host exposure, no credentials.

#### i) Performance & scale levers
- Parallel tool execution, async FastAPI, SSE/WebSocket streaming, multi-tier caching
  (server + browser), connection-pooled DB access, bounded payloads via data-pointer spill.

---

## 5. Verified Scale (live system, Aug 2026)

| Metric | Value |
|---|---|
| Backend API routers | 34 |
| SQLAlchemy models | ~80 |
| Department projects (company + personal) | 6 (C5_C9, Data Analysis, Global, Marketing Team, R&D, + archived) |
| Agents (system + scenario) | 12 (incl. CAD Agent, Customer Support, Production Efficiency, Research Assistant, Report Writer, Data Analyst) |
| Conversations | 160 |
| Knowledge bases | 6 |
| Live dashboards | 6 (agent-generated, WebSocket refresh) |
| Docker services | 14 |
| Running environments | Postgres :5400 · Redis :6300 · MinIO :9400 · backend :5002 · frontend :8088 |
| Alembic migrations | 76 |
| Python test files | 832 |
| Health endpoint | /healthz |
| Sandbox resource caps | memory MB, CPUs, pids, timeout, max output, always-cleanup |

---

## 6. Tech Stack

FastAPI · React (Vite) · PostgreSQL · Redis · MinIO · Docker / Compose ·
Prometheus + Grafana · Python 3.11 · OpenAI-compatible LLM SDKs (DeepSeek, vLLM) ·
OpenTelemetry · pytest · GitHub Actions CI

---

## 7. How It Maps to AI-Engineer Job Requirements

| Hot requirement | Zhanlu evidence |
|---|---|
| Agent harness / runtime | FSM + Plan DAG + turn planner + goal contract + run-step persistence + tracing |
| Multi-agent orchestration | main/sub-agent delegation, swarm layer, per-agent scoping |
| MCP | native client + server; CAD Agent → Fusion 360 socket bridge |
| LLM-as-Judge / eval | golden eval pipeline, blocking artifact audit gates, regression tests |
| Long context / long memory | SafeContextGate, compaction, data-pointer spill, semantic memory |
| RAG / vector search | hybrid retrieval, knowledge graph, embedding recall |
| LLMOps / serving | multi-provider routing + fallback, local vLLM (Qwen3-27B) validation |
| Context engineering | pre-flight context budgets, deterministic fallback on LLM failure |
| Observability | OTel tracing, run-step timeline, audit trail, health endpoints |
| Security / governance | JWT hardening, RBAC, per-agent column/row data isolation, sandbox isolation |
| Realtime systems | SSE agent streaming, WebSocket dashboards |
| AI-assisted coding | entire project built with Claude Code / Codex workflows |
| Deployment & containerization | 14-service Docker Compose, prestart contract, restart discipline, nginx frontend |
| Observability & monitoring | OTel tracing, run-step timeline, /healthz, app logs, audit trail |
| CI/CD for AI | GitHub Actions (backend lint+smoke, frontend typecheck+build), 832 test files, E2E scripts |
| Inference serving ops | local vLLM (Qwen3-27B) validation + tool-call parser, cloud fallback, provider health |
| Resource management | sandbox CPU/memory/pids/timeout caps, always-cleanup, docker socket isolation |
| Database operations | 76 migrations, Redis queues/locks/events, MinIO artifact storage, schema cache |
| Reliability engineering | retry/backoff, provider fallback, deterministic fallback, scheduled tasks |
| Cost & capacity control | token tracking, iteration budgets, rate limiting, caching tiers |

---

## 8. Honest Boundaries (what this project is NOT)

- No GPU training / fine-tuning at scale (no FSDP, DeepSpeed, FlashAttention, Triton).
- No production vector DB (embeddings stored as JSON vectors + cosine recall).
- No Kubernetes (Docker Compose deployment).
- Golang: none (Python/TS only).

---

## 9. One-Paragraph Summary (interview opener)

"I built Zhanlu, a production multi-tenant enterprise AI agent platform, entirely solo —
an agent harness with plan-first turn planning and goal contracts, main-agent/sub-agent
delegation with a swarm layer, a Tool/Skill/MCP gateway that gates every call, per-agent
model routing with automatic provider fallback (including validated local vLLM serving),
a context-safety layer that makes context-window crashes structurally impossible,
LLM-as-judge artifact audit gates that block hallucinated decks from delivery, Docker
sandboxed execution that never sees credentials, and database-level multi-tenancy with
per-agent column/row data isolation. It's deployed as a 14-service Docker stack serving
6 departments, and it generates real business artifacts — data-driven PPTs, dashboards,
DOCX — from live bound data."
