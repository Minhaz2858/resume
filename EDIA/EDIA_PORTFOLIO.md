# EDIA — Enterprise Decision Intelligence Platform

> **AI Engineer / AI Infrastructure Engineer Portfolio Piece**  
> **Role:** AI Infrastructure & Forecasting Engineer (Intern, Solo Project)  
> **Organization:** Synexia AI · Ecisco Collaboration  
> **Period:** 2025 – 2026  
> **Status:** Production-deployed · On-premise A10 GPU + Cloud hybrid

---

## 1. What I Built (Engineering Summary)

Solo-built a production **17-node LangGraph multi-agent system** for petrochemical decision intelligence, deployed as a **FastAPI + React + MySQL + ChromaDB** stack with **dual-LLM security architecture** (local Qwen gatekeeper + external Claude/Kimi brain). Reduced end-to-end query latency **90%** (90–478s → 30–45s) through intent-driven query planning and pre-computed metric locking.

**Core systems I owned end-to-end:**
- 17-node LangGraph orchestration with conditional routing and parallel execution
- 5-tier agent architecture (15 agents, 57 atomic skills, skill registry)
- Hermes control layer for tracing, observability, and plan validation
- Multi-model forecasting engine (ARIMA + XGBoost + LSTM + STL ensemble)
- Dual-LLM security layer with PII sanitization and output validation
- Production ops: systemd, nginx, SSE streaming, health monitoring, auto-recovery

---

## 2. System Architecture

```
┌─────────────────────────────────────────────────────────────────────────────┐
│                              USER INTERFACE                                  │
│                         React 18 + Vite + Tailwind                          │
│                     Chat · Dashboard · Reports · Alerts                     │
└──────────────────────────────────┬──────────────────────────────────────────┘
                                   │ SSE Stream (JWT auth)
                                   ▼
┌─────────────────────────────────────────────────────────────────────────────┐
│                         FASTAPI BACKEND LAYER                              │
│  REST API Router · SSE Stream Handler · JWT Auth · Health Endpoints        │
└──────────────────────────────────┬──────────────────────────────────────────┘
                                   │
                                   ▼
┌─────────────────────────────────────────────────────────────────────────────┐
│                    LANGGRAPH DECISION ENGINE (17 NODES)                      │
│                                                                              │
│  parse_intent → extract_context → validate_context → perception            │
│       ↓                                                                      │
│  resolve_product → parallel_fetch → diagnosis → forecast → pricing         │
│       ↓                                                                      │
│  evidence_compile → decision_critic → tool_execution → assemble_prompt     │
│       ↓                                                                      │
│  generate_report → validation_agent → SSE_stream_to_user                   │
│                                                                              │
│  ┌─────────────────────────────────────────────────────────────────────┐    │
│  │  HERMES CONTROL LAYER                                               │    │
│  │  • Plan building (domain · capability · privacy · sequence)         │    │
│  │  • Tracing & observability per request                              │    │
│  │  • Validation gates (source · numbers · privacy · forecast quality) │    │
│  │  • Presenter selection (deterministic vs LLM-synthesized)           │    │
│  └─────────────────────────────────────────────────────────────────────┘    │
└──────────────────────────────────┬──────────────────────────────────────────┘
                                   │
              ┌────────────────────┼────────────────────┐
              ▼                    ▼                    ▼
┌──────────────────┐  ┌──────────────────┐  ┌──────────────────────────────┐
│    MySQL         │  │   ChromaDB       │  │      DUAL-LLM LAYER          │
│  (ERP + Market   │  │  (8 collections, │  │                              │
│   + App +        │  │   BAAI/bge-m3    │  │  ┌──────────────────────┐    │
│   Forecast       │  │   embeddings)    │  │  │ LOCAL LLM (Qwen3.5)  │    │
│   Snapshots)     │  │                  │  │  │ • Reads ERP data     │    │
│                  │  │                  │  │  │ • Sanitizes payloads │    │
│  38+ SQL views   │  │                  │  │  │ • Validates outputs  │    │
│  mapped to       │  │                  │  │  └──────────┬───────────┘    │
│  19 products     │  │                  │  │             │                │
└──────────────────┘  └──────────────────┘  │  Sanitized briefing          │
                                            │             │                │
                                            │  ┌──────────▼───────────┐    │
                                            │  │ EXTERNAL LLM (Brain) │    │
                                            │  │ Claude / Kimi API    │    │
                                            │  │ • Reasoning · Write  │    │
                                            │  └──────────────────────┘    │
                                            └──────────────────────────────┘
```

---

## 3. Multi-Agent Orchestration (LangGraph)

### 3.1 17-Node State Machine

| Node | Function | Routing Logic |
|---|---|---|
| `parse_intent` | Classify query type | chat / analysis / report / deep_research |
| `extract_context` | Pull product, date range, signals | — |
| `validate_context` | Check data availability | sufficient / insufficient → clarify_intent |
| `perception` | Gather market snapshot | — |
| `parallel_fetch` | Concurrent ERP + market queries | ThreadPoolExecutor, 2–5 focused SQL |
| `diagnosis` | Root-cause analysis | cost chain / supply-demand / competitor / event |
| `forecast` | Run forecasting engine | 3 horizons × 3 scenarios |
| `pricing` | 9-step pricing ladder | cost-plus / competitor / benchmark |
| `evidence_compile` | Aggregate all signals | — |
| `decision_critic` | Auto-QA before delivery | passes / fails → regenerate or caveat |
| `tool_execution` | Run specialized skills | — |
| `assemble_prompt` | Build structured context | deterministic JSON payload |
| `generate_report` | LLM synthesis | streaming via SSE |
| `validation_agent` | Final guardrail check | compliant / blocked + logged |

### 3.2 5-Tier Agent Architecture

| Tier | Agents | Key Design |
|---|---|---|
| **Tier 0 — Data Sources** | ERP Connector, Market Connector, Longzhong Scraper | 4 source groups, ingestion pipelines |
| **Tier 1 — Data Layer** | ERP Data Agent, Market Data Agent, **Pre-Renderer** | Pre-renderer **locks all numbers before LLM sees them** |
| **Tier 2 — Analysis** | Cost Chain, Supply-Demand, Competitor, Contract, Causal Diagnosis | Ontology-driven upstream→downstream traversal |
| **Tier 3 — Decision** | Price Forecast, **Alert & Notification**, **Report Generator** | Threshold-based alerts with role-aware escalation |
| **Tier 4 — Interface** | Query Router, **RAG/Knowledge**, **Validation & Guardrail** | Guardrail blocks hallucinated numbers, enforces attribution |
| **Tier 5 — Orchestrator** | LangGraph State Machine | Session state, retries, conditional routing, parallel branches |

### 3.3 Hermes — Control & Observability Layer

Hermes is the request-level control plane I built for tracing and validation:

```python
# HermesPlan structure (per request)
{
  "domains": ["erp", "market", "forecast", "database"],
  "capabilities": ["verified_edia_tools_only"],
  "privacy_policy": "external_llm_allowed_or_blocked",
  "tool_sequence": ["retrieval", "policy", "presentation", "validation"],
  "validation_gates": ["source", "numbers", "privacy", "forecast_quality"]
}
```

**What Hermes does:**
- Builds a structured plan for every user request
- Enforces that only verified skills are called (no raw SQL, no free-form tools)
- Selects privacy policy per request (sensitive ERP data → local only)
- Routes to deterministic presenter or LLM presenter based on complexity
- Logs every decision for audit and regression analysis

---

## 4. AI Infrastructure & Performance Engineering

### 4.1 Latency Architecture (90% Reduction)

**Before:** Brute-force grounding → 77 SQL round-trips → 180K rows → LLM starts at 90–478s

**After (my design):**

```
User Query
    ↓
[Intent Planner] — LLM extracts {products, intents, time_range, needs_forecast}
                     Strict JSON schema, ~1–2s
    ↓
[SQL Generator] — Pure Python, <50ms, emits 2–5 focused queries
    ↓
[Parallel Fetch] — ThreadPoolExecutor, <2s, 50–200 rows
    ↓
[Pre-Renderer] — Pure Python, <500ms, locks all metrics
    ↓
[LLM Synthesis] — Streaming, TTFT <10s, full report 15–40s
    ↓
[SSE Stream] — User sees text appear live
```

**Key infra decisions:**
- Planner results cached to skip redundant LLM calls
- Pre-rendered metrics prevent LLM from doing arithmetic (saves tokens + time)
- Streaming SSE with query-string JWT auth
- Multi-tier caching: server snapshot (90s TTL) + browser localStorage (2–10 min)

### 4.2 Production Infrastructure

| Component | Implementation |
|---|---|
| **Backend** | FastAPI, Python, SQLAlchemy |
| **Frontend** | React 18, Vite, Tailwind, Recharts |
| **Database** | MySQL (ERP + market + app tables) |
| **Vector Store** | ChromaDB persistent, 8 collections |
| **Embeddings** | BAAI/bge-m3, sentence-transformers |
| **Local LLM** | Qwen 3.5 via Ollama on A10 GPU |
| **External LLM** | Claude / Kimi / Moonshot API with fallback |
| **Streaming** | SSE with EventSource compatibility |
| **Auth** | JWT access (15 min) + refresh tokens |
| **Ops** | systemd services, nginx reverse proxy, health endpoints |
| **Monitoring** | DB-fingerprint change detection, cache invalidation |

### 4.3 Data Pipeline Architecture

```
┌─────────────────────────────────────────────────────────────────────────────┐
│                         DATA PIPELINE                                        │
├─────────────────────────────────────────────────────────────────────────────┤
│                                                                              │
│  INGESTION                    TRANSFORMATION              CONSUMPTION       │
│  ───────────                  ─────────────              ───────────        │
│                                                                              │
│  LZ Views (lz_v_*)            market_prices table        Forecast Engine    │
│  ERP Views (erp_v_*)          REAL_DATA_MAP (19 prod)    Pricing Ladder     │
│  CSV Feeds                    Forward-fill (7d limit)    Chatbot            │
│  Longzhong Scraper            Backfill edge cases        Dashboard          │
│  News APIs                    Data quality checks        Reports            │
│                               Cadence classification       Alerts           │
│                                                                              │
│  ┌──────────────┐            ┌──────────────┐          ┌──────────────┐    │
│  │  Raw Sources │───────────▶│  Canonical   │─────────▶│  Services    │    │
│  │  4 groups    │  ETL       │  market_     │  Map     │  19 products │    │
│  │              │            │  prices      │          │              │    │
│  └──────────────┘            └──────────────┘          └──────────────┘    │
│                                                                              │
│  ChromaDB Ingestion:                                                         │
│  • Chunk → Embed (bge-m3) → Store with metadata (product, date, source)     │
│  • 8 collections: industry_reports, weekly_reports, past_decisions,          │
│    market_signals, causal_graph, news_events, decision_outcomes, catalog     │
│                                                                              │
└─────────────────────────────────────────────────────────────────────────────┘
```

---

## 5. Forecasting Engine (ML + Time Series)

### 5.1 Multi-Model Ensemble

| Horizon | Models | Weights | Features |
|---|---|---|---|
| **3d / 7d** | ARIMA(2,1,2) + XGBoost + LSTM + Mean-Reversion | Dynamic (see below) | 22 features: lags, MA, upstream, momentum, Kimi exogenous, calendar |
| **30d** | STL(40%) + Causal Chain(35%) + Seasonal + Weekly Nudge | Fixed layer blend | Trend + elasticity + seasonal rules + diagnosis signal |
| **Baseline** | Per-step ARIMA + Residual Daily Calibration | Champion model registry | Historical residual dampening |

### 5.2 Dynamic Weight Adjustment

```python
# Example rules from forecasting_engine.py
if diagnosis.primary_driver == "naphtha_cost_push":
    xgb_weight += 0.10
    arima_weight -= 0.05

if market_phase == "post_holiday_restart":
    lstm_weight += 0.10
    arima_weight -= 0.10

if len(price_series) < 180:
    xgb_weight += 0.15
    arima_weight -= 0.15
```

### 5.3 Quality Gates (ForecastSupervisor)

| Gate | Check | Failure Action |
|---|---|---|
| `latest_price_available` | price > 0 | Block, insufficient_data |
| `scenario_band_sanity` | bear ≤ base ≤ bull | Block, regenerate |
| `mape_disclosed` | recent_mape present or noted | Needs caveat |
| `confidence_matches_accuracy` | confidence ≥ 0.6 | Widen bands |

### 5.4 MLOps Practices

- **Adaptive policy:** Auto-bias correction from recent measured MAPE
- **Backtest runner:** Continuous validation vs. actuals, locked baselines
- **Regression guard:** 10% margin above locked MAPE threshold
- **Snapshot persistence:** Every approved forecast stored for reproducibility
- **Champion model registry:** Per-product, per-horizon model selection

---

## 6. Dual-LLM Security Architecture

### 6.1 The Bifurcation

| Layer | Model | Role | Data Access |
|---|---|---|---|
| **Gatekeeper** | Local Qwen 3.5 (A10 GPU) | Read ERP, sanitize, validate | Full ERP + market + ontology |
| **Brain** | External Claude / Kimi | Reason, forecast, write | Sanitized briefing only |
| **Validator** | Local Qwen 3.5 | Check outputs, re-attach context | Full ERP + ontology constraints |

### 6.2 Sanitization Rules

| What Goes Out | What Stays Local |
|---|---|
| Market prices, % movements, trends | Company name, identity |
| Anonymized competitor prices | Customer names, contacts |
| Relative indices (inventory health 68/100) | Exact inventory quantities |
| Historical patterns, MAPE scores | Cost structures, margins |
| Public events, seasonal rules | Contract terms, ERP schema |

### 6.3 Security Gates

- `LLM_ENABLE_EXTERNAL_REASONING` — flag to enable/disable external routing
- `LLM_EXTERNAL_ALLOW_UNSANITIZED` — defaults to false, must explicitly override
- External routing blocked unless sanitization condition satisfied
- Local-only fallback on external API failure

---

## 7. Impact & Metrics

| Metric | Before | After |
|---|---|---|
| End-to-end latency | 90–478s | **30–45s** (90% reduction) |
| First token time | 5–10s | **<10s** |
| SQL round-trips | 77 | **2–5** |
| Rows fetched | ~180,000 | **50–200** |
| Analyst question volume | Baseline | **10× increase** |

**System scale:**
- 17 LangGraph nodes
- 15 specialized agents
- 57 atomic skills
- 19 products in forecast coverage
- 8 ChromaDB collections
- 38+ SQL views mapped
- 90s cache TTL with fingerprint invalidation

---

## 8. Tech Stack

```
Orchestration:     LangGraph, Hermes Agent Runtime
Backend:           FastAPI, Python, SQLAlchemy, Pydantic
Database:          MySQL (structured), ChromaDB (vector / RAG)
LLM:               Local: Ollama + Qwen 3.5 (A10 GPU)
                   External: Claude / Kimi / Moonshot API
Embeddings:        BAAI/bge-m3, sentence-transformers
Forecasting:       statsmodels (ARIMA, STL), XGBoost, PyTorch (LSTM)
Frontend:          React 18, TypeScript, Vite, Tailwind, Recharts
Streaming:         SSE (Server-Sent Events), EventSource
Auth:              JWT (access + refresh), OTP registration
Ops:               systemd, nginx, health endpoints, auto-restart
```

---

## 9. Job Posting Alignment

### AI Engineer / Agent Engineer

| What They Want | What I Did |
|---|---|
| LangChain / LangGraph agent orchestration | **17-node LangGraph** with conditional routing, parallel execution, session state |
| Multi-agent collaboration | **5-tier architecture**, 15 agents, Hermes plan validation |
| LLM-as-Judge / Agent evaluation | **DecisionCritic** auto-reviews every output; **ForecastSupervisor** enforces 5 quality gates |
| Tool use / skill registry | **57 atomic skills** with ownership mapping; verified-tool-only policy |
| RAG (vector search) | **ChromaDB**, 8 collections, bge-m3 embeddings, hybrid SQL + vector retrieval |
| Long context / long memory | Session state persistence, multi-turn context, hierarchical compression |

### AI Infrastructure Engineer

| What They Want | What I Did |
|---|---|
| MLOps / LLMOps pipelines | Forecast lifecycle: train → evaluate → deploy → monitor → adaptive policy correction |
| Model serving frameworks | **Ollama** local serving, external API routing, automatic fallback, timeout policies |
| Performance optimization | **90% latency reduction** via intent planning, parallel SQL, pre-rendering, streaming |
| Data pipelines | ETL from 4 source groups → canonical market_prices → 19-product REAL_DATA_MAP |
| Observability & tracing | **Hermes** request-level tracing; DB-fingerprint cache invalidation; health endpoints |
| Security & governance | **Dual-LLM bifurcation**, PII sanitization, role-based access, audit logging |
| Scalable inference | SSE streaming, multi-tier caching, cache invalidation, load balancing via nginx |

---

*Built solo by Minhazul Islam at Synexia AI · 2025–2026*
