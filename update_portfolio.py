import re

path = "/Users/minhazulislam/Desktop/resume/js/data.js"
with open(path, "r", encoding="utf-8") as f:
    content = f.read()

# Update short field for edia
old_short = '      short: "Multi-agent LLM platform for petrochemical forecasting, decision-making, and intelligence alerts.",'
new_short = '      short: "Production AI infrastructure for petrochemical decision intelligence: 17-node LangGraph, 90% latency reduction, dual-LLM security, multi-agent forecasting & alerts.",'
content = content.replace(old_short, new_short, 1)

# Update summary field for edia
old_summary = '''      summary:
        "A production AI engineering platform for petrochemical decision intelligence — multi-horizon price forecasting, intelligent alert systems, and causal decision support for C5/C9 commercial teams. Built around a 17-node LangGraph state-machine orchestrating 15 specialized agents and 57 atomic skills across 5 tiers, with deterministic pre-rendering, guardrails, ChromaDB RAG, and a Python validation layer that blocks hallucinated numbers before they reach users.",'''
new_summary = '''      summary:
        "Solo-built a production 17-node LangGraph multi-agent system that reduced end-to-end query latency 90% (90–478s → 30–45s) for petrochemical decision intelligence. Orchestrates 15 specialized agents and 57 atomic skills across 5 tiers with a Hermes control layer for tracing and plan validation. Features dual-LLM security (local Qwen gatekeeper + external Claude/Kimi brain), deterministic pre-rendering that locks all numbers before LLM narration, multi-horizon price forecasting (ensemble + STL), ChromaDB RAG, and a Python guardrail layer that blocks hallucinated outputs before they reach users. Deployed on-premise A10 GPU + cloud hybrid with SSE streaming, systemd/nginx ops, and health monitoring.",'''
content = content.replace(old_summary, new_summary, 1)

# Update highlights for edia
old_highlights = '''      highlights: [
        { num: "3×3", label: "forecast: 3 horizons (3d/7d/30d) × 3 scenarios (bear/base/bull)" },
        { num: "15", label: "specialized agents in 5 tiers" },
        { num: "57", label: "atomic skills mapped by ownership + data source" },
        { num: "4", label: "trust-tier badges (high / medium / directional / low)" },
      ],'''
new_highlights = '''      highlights: [
        { num: "90%", label: "latency reduction: 90–478s → 30–45s end-to-end" },
        { num: "17", label: "LangGraph nodes with conditional routing & parallel execution" },
        { num: "15", label: "specialized agents in 5 tiers + Hermes control layer" },
        { num: "57", label: "atomic skills with verified-tool-only policy" },
        { num: "3×3", label: "forecast: 3 horizons (3d/7d/30d) × 3 scenarios (bear/base/bull)" },
      ],'''
content = content.replace(old_highlights, new_highlights, 1)

# Update roleDetail for edia - add Hermes
old_roleDetail = '''      roleDetail:
        "Owned the AI infrastructure end-to-end: 17-node LangGraph orchestrator, deterministic pre-rendering pipeline, Python guardrail layer, multi-horizon forecasting system (ensemble + 4-layer STL), ChromaDB RAG ingestion and retrieval, Alert and Notification Agent with role-aware escalation, real-time SSE serving with DB-fingerprint change detection, multi-tier caching, and production operations (systemd / nginx, environment-gated routing, health endpoints, auto-recovery).",'''
new_roleDetail = '''      roleDetail:
        "Owned the AI infrastructure end-to-end: 17-node LangGraph orchestrator with Hermes control layer (plan building, tracing, validation gates, presenter selection), deterministic pre-rendering pipeline, Python guardrail layer, multi-horizon forecasting system (ensemble + 4-layer STL), ChromaDB RAG ingestion and retrieval, Alert and Notification Agent with role-aware escalation, real-time SSE serving with DB-fingerprint change detection, multi-tier caching, dual-LLM security with PII sanitization, and production operations (systemd / nginx, environment-gated routing, health endpoints, auto-recovery).",'''
content = content.replace(old_roleDetail, new_roleDetail, 1)

# Update architecture for edia - add Hermes
old_architecture = '''      architecture:
        "Five-tier agent architecture wired into a 17-node LangGraph state machine. Tier 0 — Data Sources (ERP / K3Cloud views, market CSV feeds, Longzhong reports, forecast views). Tier 1 — Data Layer Agents (ERP Data Agent, Market Data Agent, Pre-Renderer Agent that locks forecast ranges and confidence). Tier 2 — Analysis Agents (Cost Chain, Supply-Demand, Competitor Intelligence, Contract & Customer, Causal Diagnosis). Tier 3 — Decision Agents (Price Forecast Agent, Alert and Notification Agent, Report Generator Agent). Tier 4 — Interface Agents (Query Router for intent classification, RAG / Knowledge Agent for evidence retrieval, Validation and Guardrail Agent that blocks unsupported numbers). Tier 5 — Orchestrator managing execution graph, session state, retries, and output assembly. Two operating modes: Chat (low-latency lookup) and Agent (full multi-agent analytical path).",'''
new_architecture = '''      architecture:
        "Five-tier agent architecture wired into a 17-node LangGraph state machine, governed by the Hermes control layer for request-level tracing and plan validation. Tier 0 — Data Sources (ERP / K3Cloud views, market CSV feeds, Longzhong reports, forecast views). Tier 1 — Data Layer Agents (ERP Data Agent, Market Data Agent, Pre-Renderer Agent that locks forecast ranges and confidence). Tier 2 — Analysis Agents (Cost Chain, Supply-Demand, Competitor Intelligence, Contract & Customer, Causal Diagnosis). Tier 3 — Decision Agents (Price Forecast Agent, Alert and Notification Agent, Report Generator Agent). Tier 4 — Interface Agents (Query Router for intent classification, RAG / Knowledge Agent for evidence retrieval, Validation and Guardrail Agent that blocks unsupported numbers). Tier 5 — Orchestrator managing execution graph, session state, retries, and output assembly. Two operating modes: Chat (low-latency lookup) and Agent (full multi-agent analytical path). Dual-LLM bifurcation: local Qwen gatekeeper reads ERP and sanitizes; external Claude/Kimi brain reasons and writes.",'''
content = content.replace(old_architecture, new_architecture, 1)

# Update impact for edia - make metrics-driven
old_impact = '''      impact:
        "Replaces ad-hoc prompting with a governed execution plan: the LLM narrates pre-rendered evidence, the guardrail layer blocks unsupported numbers, and alerts flow through a role-aware escalation path. Delivered source-attributed weekly intelligence briefings, decision-quality forecasts across the C5/C9 chain (Isoprene, Piperylene, DCPD, Cracked C5, SIS, SBS, C5 petroleum resin, etc.), and a sub-second data-refresh experience with no manual reloads. Engineers, analysts, and commercial teams now operate against a single auditable intelligence layer instead of fragmented reports.",'''
new_impact = '''      impact:
        "90% latency reduction (90–478s → 30–45s) through intent-driven query planning and pre-computed metric locking. SQL round-trips reduced from 77 to 2–5; rows fetched from ~180K to 50–200. Replaced ad-hoc prompting with a governed execution plan: LLM narrates pre-rendered evidence, guardrail layer blocks unsupported numbers, and alerts flow through role-aware escalation. Delivered source-attributed weekly intelligence briefings, decision-quality forecasts across the C5/C9 chain (Isoprene, Piperylene, DCPD, Cracked C5, SIS, SBS, C5 petroleum resin, etc.), and a sub-second data-refresh experience with no manual reloads. Engineers, analysts, and commercial teams now operate against a single auditable intelligence layer instead of fragmented reports.",'''
content = content.replace(old_impact, new_impact, 1)

# Update profile title and roleLine
content = content.replace(
    'title: "Artificial Intelligence Engineer",',
    'title: "AI Engineer · AI Infrastructure Engineer",'
)
content = content.replace(
    'roleLine: "Generative AI · LLM Agents · NLP · AI Systems Engineering",',
    'roleLine: "LLM Agents · AI Infrastructure · MLOps · NLP · AI Systems Engineering",'
)

with open(path, "w", encoding="utf-8") as f:
    f.write(content)

print("Portfolio updated successfully.")
EOF

python3 /tmp/update_portfolio.py
