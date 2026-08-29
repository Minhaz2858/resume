/* ============================================================
   Portfolio content — all real data for Minhazul Islam
   Fields marked [PLACEHOLDER] need to be filled by the owner.
   ============================================================ */

window.PORTFOLIO = {
  profile: {
    name: "Minhazul Islam",
    monogram: "MI",
    title: "AI Engineer · AI Infrastructure Engineer",
    roleLine: "LLM Agents · AI Infrastructure · MLOps · NLP · AI Systems Engineering",
    location: "Ningbo, Zhejiang, China",
    email: "minhaz1396@zju.edu.cn",
    phone: "+86 15990259205",
    github: "https://github.com/Minhazul249602",
    linkedin: "https://www.linkedin.com/in/minhazul-islam-43b3a4221/",
    facebook: "https://www.facebook.com/minhazul.islam.827809",
    cv: "assets/Islam_Minhazul_CV.pdf",
    photo: "assets/profile.jpg",
    summary:
      "AI Engineer and Algorithm Engineer with a Master of Industrial Design Engineering from Zhejiang University and a Bachelor of Computer Science from Yunnan University. I specialize in generative AI and NLP — LLMs, RAG, prompt engineering, LangChain, and Transformer fine-tuning (RoBERTa) with PyTorch. I build end-to-end AI systems, from model development to high-concurrency production deployment with FastAPI, and I bring hands-on experience in AI + hardware (Arduino, ESP32-CAM, sensor fusion, edge AI).",
    bio: [
      "I combine algorithmic capability with engineering rigor and user understanding to drive AI products through the full lifecycle — from model research to system deployment.",
      "My work spans multi-agent LLM orchestration for production decision-intelligence platforms, retrieval-augmented generation systems for mental-health support, Transformer fine-tuning for domain-specific scoring, and embedded AI prototypes for accessibility.",
      "I enjoy solving problems where the answer requires both deep technical work and a clear view of the user: grounding LLMs in evidence, making AI output verifiable, and shipping systems that perform under real load.",
    ],
    pillars: [
      { title: "Human-AI Co-Decision & HCI", desc: "Empirical research on peer-support writing assistance in mental-health communities, biofeedback interventions, and affective computing — published at ICEC 2025 and HHME 2026 PCC." },
      { title: "Multi-Agent Orchestration & Harness Runtime", desc: "State-machine execution (17-node LangGraph FSMs), plan-first turn planning, sub-agent delegation, and custom Harness Agent runtimes with Model Context Protocol (MCP) bridges." },
      { title: "Context Engineering & Grounded RAG", desc: "Hybrid retrieval (ChromaDB vector search + structured SQL data grounding), context budget enforcement with payload spill management, and long-term semantic memory." },
      { title: "Governance-First System Safety", desc: "Deterministic Python validation layers that pre-compute and lock business-critical data before LLM narration — eliminating a class of numerical hallucination by pre-rendering metrics." },
      { title: "Sandboxed Execution & LLMOps", desc: "Docker-isolated skill execution (sandbox-python, sandbox-pptx), LLM-as-a-judge blocking quality gates, multi-provider model routing, and SSE streaming APIs." },
    ],
    rsToolkit: [
      { domain: "Orchestration & Runtimes", tools: "LangGraph, Custom Synexia FSM, Harness Agent Runtimes, Model Context Protocol (MCP), ReAct / CoT Planning" },
      { domain: "Context & Retrieval Infra", tools: "Hybrid Vector + SQL RAG, ChromaDB, BAAI/bge-m3, Context Budgeting, Context Compaction" },
      { domain: "Validation & Evaluation", tools: "Deterministic Python Guardrails, Pre-rendering, LLM-as-a-Judge Audit Gates, Walk-Forward MAPE Backtesting" },
      { domain: "Production LLMOps & Infra", tools: "Docker Microservices (14-service stacks), FastAPI, Redis, MinIO, SSE Streaming, Prometheus/Grafana" },
      { domain: "Machine Learning & NLP", tools: "PyTorch, Hugging Face Transformers, PEFT/LoRA, STL + Time-Series Ensembles, RoBERTa / BERT Fine-Tuning" },
      { domain: "Edge AI & Embedded HCI", tools: "Arduino, C/C++, ESP32-CAM, Sensor Fusion, Edge AI Prototyping" },
    ],
    stats: [
      { num: "0", label: "hallucinated numbers reaching users (EDIA)" },
      { num: "17", label: "node LangGraph FSM orchestrator" },
      { num: "5m→30s", label: "query latency reduction (EDIA)" },
      { num: "4", label: "peer-reviewed publications (ICEC 2025, HHME 2026)" },
    ],
  },

  skills: [
    {
      category: "Multi-Agent Systems & Agent Runtimes",
      items: [
        "LangGraph (17-Node FSM)", "Agent Harness", "Model Context Protocol (MCP)",
        "Plan-First Turn Planning", "Sub-Agent Workflows", "Goal Contracts & Self-Correction",
        "Control & Observability Layer", "LLM-as-a-Judge Eval", "Tool/Skill/MCP Gateway",
      ],
    },
    {
      category: "Context Engineering & Retrieval Infrastructure",
      items: [
        "Context Budget & Spill Management", "Hybrid Vector + SQL RAG", "ChromaDB / BAAI/bge-m3 Embeddings",
        "Deterministic Guardrails", "Output Validation", "Context Trimming & Isolation",
      ],
    },
    {
      category: "AI Infrastructure & LLMOps",
      items: [
        "Docker Stack (14 Services)", "FastAPI / SSE Streaming", "Local vLLM (Qwen3-27B) / Ollama",
        "Redis Queues / Lock / SSE", "PostgreSQL / MinIO Storage", "Prometheus & Grafana Observability",
        "Multi-Provider Routing", "Dual-LLM Security Gates", "Systemd / Nginx / Auto-Recovery",
      ],
    },
    {
      category: "Languages & AI Development Tools",
      items: [
        "Python (Asyncio)", "C / C++", "SQL / JavaScript",
        "PyTorch / Transformers", "Cursor / Claude Code", "Git / GitHub Actions CI/CD",
      ],
    },
  ],

  experience: [
    {
      role: "AI Infrastructure & Systems Engineer (Internship)",
      company: "Synexia AI",
      period: "2025 – 2026",
      location: "Zhejiang, China",
      projects: [
        {
          name: "Project 1: EDIA — Enterprise Decision Intelligence Platform",
          points: [
            "Multi-Agent Orchestration: Architected a 17-node LangGraph state machine coordinating 15 specialized agents and 57 atomic skills across 5 execution tiers, incorporating parallel branching, sequential quality gates, and multi-turn session state.",
            "Deterministic Guardrail Pipeline: Designed a pre-rendering pipeline that locks all business-critical numerical forecasts before LLM narration, coupled with a Python validation engine that enforces exact-value compliance, language consistency, and strict source attribution.",
            "Hybrid Retrieval Architecture: Integrated ChromaDB vector search with structured SQL views to fuse unstructured market intelligence with ERP historical data, driving 5-minute decision workflows down to under 30 seconds.",
            "Production Operations: Deployed high-concurrency SSE streaming endpoints using FastAPI, Nginx, systemd, and multi-horizon time-series forecasting models (Ensemble + STL) with automated MAPE backtesting.",
          ],
        },
        {
          name: "Project 2: Zhanlu — Enterprise Multi-Agent AI Platform",
          points: [
            "Platform Architecture: Solo-designed and deployed an 11-service containerized architecture (FastAPI, PostgreSQL, Redis, MinIO) with multi-tenant workspace isolation and OAuth2/JWT security.",
            "Sandboxed Execution & Agent Harness Core: Built 4 dedicated sandbox execution runtimes (Python / PPTX / WebApp / Office) that isolate dynamic code execution from the core, plus a custom Harness Agent runtime (plan → act → verify FSM) with a 100+ tool registry, per-agent allow/deny filtering, and 8 agent archetypes (general-purpose, explore, plan, worker, verification, data_agent, forecast_agent, report_agent).",
            "Dynamic Model & Tool Gateway: Enterprise Model/Tool/MCP Gateway with hierarchical per-task model routing, provider circuit-breaker/failover, Fernet-encrypted API-key storage, native MCP client + OAuth, and complete access audit trails.",
          ],
        },
      ],
      tech: [
        "LangGraph", "Agent Harness", "ChromaDB", "FastAPI", "SSE Streaming",
        "LLM Guardrails", "Multi-Horizon Forecasting", "MAPE / Backtest",
        "MCP Gateway", "Model Routing", "Docker", "systemd", "nginx",
      ],
    },
    {
      role: "Software Automation Engineer",
      company: "ProFabx",
      period: "Jun 2024 – Sep 2024",
      location: "Ningbo, China",
      points: [
        "Parametric Pipeline Automation: Programmed custom Python drivers using the Autodesk Inventor API (win32com.client) to automate dynamic 3D CAD modeling, cutting engineering iteration time for custom fabrications.",
        "Interactive Configuration Interface: Built a lightweight web interface (JavaScript, Python) enabling real-time parametric model updates directly driven by client specification changes.",
      ],
      tech: ["Python", "Autodesk Inventor API", "win32com.client", "JavaScript", "Fusion 360"],
    },
  ],

  projectFilters: ["All", "AI Infrastructure", "Generative AI", "Machine Learning", "Embedded & IoT", "Automation"],

  projects: [
    {
      id: "edia",
      title: "EDIA — Enterprise Decision Intelligence Platform",
      short: "Solo-built AI infrastructure that turned 5-minute queries into 30-second decisions for petrochemical teams — 17-node LangGraph orchestrator, multi-model forecasting, and a dual-LLM security architecture that keeps ERP data on-premise.",
      category: "AI Infrastructure",
      period: "2025 – 2026",
      org: "Synexia AI (Internship) · Ecisco Collaboration · Petrochemical Industry (C5/C9 Value Chain)",
      role: "AI Infrastructure",
      image: "assets/edia_landing.png",
      video: "assets/edia_demo.mp4",
      summary:
        "Petrochemical commercial teams were drowning in fragmented data — ERP, market feeds, competitor intel scattered across systems. Generic chatbots hallucinated forecasts and exposed raw data. I built EDIA: a 17-node LangGraph multi-agent system that plans queries, locks numbers before the LLM touches them, and delivers source-attributed decisions in 30 seconds instead of 8 minutes. The key insight was deterministic pre-rendering — compute all metrics in Python first, then let the LLM narrate, never calculate. This cut SQL round-trips from 77 to 2–5, reduced fetched rows from 180K to 200, and eliminated hallucinated numbers at the architectural level.",
      highlights: [
        { num: "90%", label: "latency cut — 90–478s → 30–45s" },
        { num: "3×3", label: "forecast grid: 3 horizons × 3 scenarios" },
        { num: "15", label: "specialized agents across 5 tiers" },
        { num: "0", label: "hallucinated numbers reaching users" },
      ],
      problem: "",
      roleDetail: "",
      architecture: "",
      architectureDiagram: "",
      algorithm: "",
      methodology: [],
      features: [],
      impact: "",
      evaluation: "",
      stack: [],
      sections: [
        {
          title: "The Problem",
          body: `
            <p class="pd-lead">Petrochemical teams make million-dollar pricing and procurement decisions daily, but their data lives in fragmented systems — ERP, market feeds, competitor databases — none of which talk to each other. When a senior manager asks <em>"Why is isoprene dropping?"</em>, an analyst spends 5–8 minutes manually pulling data from 3+ systems before they can even start reasoning.</p>
            <div class="pd-cards">
              <div class="pd-card"><h4>Data Fragmentation</h4><p>ERP, market feeds, competitor data, contracts — each in its own silo. No unified query interface.</p></div>
              <div class="pd-card"><h4>Hallucinating Chatbots</h4><p>Generic LLMs invent price numbers, can't access real ERP data, and have no concept of source attribution.</p></div>
              <div class="pd-card"><h4>No Actionable Alerts</h4><p>Teams react to market shifts late. No system monitors thresholds and proactively notifies the right people.</p></div>
            </div>
          `,
        },
        {
          title: "The Insight: Pre-Render, Don't Let the LLM Calculate",
          body: `
            <p class="pd-lead">The breakthrough was realizing that LLMs are narrators, not calculators. Every hallucinated number comes from the LLM doing arithmetic it can't reliably perform. The fix isn't better prompting — it's <strong>architectural</strong>: compute every metric in deterministic Python <em>before</em> the LLM ever sees the data, then hand it a locked briefing it can only narrate.</p>
            <div class="pd-highlights">
              <div class="pd-highlight"><div class="ph-num">77 → 2–5</div><div class="ph-label">SQL round-trips — intent planning generates focused queries</div></div>
              <div class="pd-highlight"><div class="ph-num">180K → 200</div><div class="ph-label">rows fetched — parallel fetch targets only what's needed</div></div>
              <div class="pd-highlight"><div class="ph-num">0</div><div class="ph-label">hallucinated numbers — pre-rendering locks metrics before LLM access</div></div>
            </div>
            <div class="pd-pipeline">
              <div class="pd-pipe-step"><div class="pd-pipe-box"><div class="name">User Query</div></div></div>
              <div class="pd-pipe-arrow"></div>
              <div class="pd-pipe-step"><div class="pd-pipe-box"><div class="name">Intent Planner</div><div class="desc">Strict JSON · products, intents, time_range, needs_forecast · ~1–2s</div></div></div>
              <div class="pd-pipe-arrow"></div>
              <div class="pd-pipe-step"><div class="pd-pipe-box"><div class="name">SQL Generator</div><div class="desc">Pure Python · &lt;50ms · 2–5 focused queries</div></div></div>
              <div class="pd-pipe-arrow"></div>
              <div class="pd-pipe-step"><div class="pd-pipe-box"><div class="name">Parallel Fetch</div><div class="desc">ThreadPoolExecutor · &lt;2s · 50–200 rows</div></div></div>
              <div class="pd-pipe-arrow"></div>
              <div class="pd-pipe-step"><div class="pd-pipe-box"><div class="name">Pre-Renderer</div><div class="desc">Pure Python · &lt;500ms · locks all metrics</div></div></div>
              <div class="pd-pipe-arrow"></div>
              <div class="pd-pipe-step"><div class="pd-pipe-box"><div class="name">LLM Synthesis</div><div class="desc">Streaming · TTFT &lt;10s · full report 15–40s</div></div></div>
              <div class="pd-pipe-arrow"></div>
              <div class="pd-pipe-step"><div class="pd-pipe-box"><div class="name">SSE Stream</div><div class="desc">Text appears live in the UI</div></div></div>
            </div>
            <div class="pd-callout"><b>Why this matters:</b> The pre-renderer is a pure Python function that computes every percentage change, trend direction, and ranking deterministically. The LLM receives a "briefing document" — it can only describe what's already computed, never invent a number. This is a <em>structural</em> guardrail, not a prompt-based one.</div>
          `,
        },
        {
          title: "The Architecture: Why 17 Nodes?",
          body: `
            <p>A layered architecture separates user interaction, orchestration, data retrieval, decision intelligence, and LLM reasoning. The 17 nodes aren't arbitrary — each exists because a specific routing decision, validation gate, or parallel execution point requires it.</p>
            <div class="pd-arch">
              <div class="pd-arch-layer">
                <div class="pd-arch-row">
                  <div class="pd-arch-box tier-ui">
                    <div class="pd-arch-title">User Interface</div>
                    <div class="pd-arch-sub">React 18 · Vite · Tailwind</div>
                    <div class="pd-arch-stack">
                      <span>Chat</span><span>Dashboard</span><span>Reports</span><span>Alerts</span>
                    </div>
                  </div>
                </div>
              </div>
              <div class="pd-arch-arrow"><span class="pd-arch-arrow-label">SSE Stream · JWT auth</span></div>
              <div class="pd-arch-layer">
                <div class="pd-arch-row">
                  <div class="pd-arch-box tier-be">
                    <div class="pd-arch-title">FastAPI Backend</div>
                    <div class="pd-arch-sub">REST API · SSE · JWT · Health</div>
                  </div>
                </div>
              </div>
              <div class="pd-arch-arrow"></div>
              <div class="pd-arch-layer">
                <div class="pd-arch-row">
                  <div class="pd-arch-box tier-engine">
                    <div class="pd-arch-title">LangGraph Decision Engine · 17 Nodes</div>
                    <div class="pd-arch-inline-flow">
                      <span class="step">parse_intent</span><span class="arr">→</span>
                      <span class="step">extract_context</span><span class="arr">→</span>
                      <span class="step">validate_context</span><span class="arr">→</span>
                      <span class="step">perception</span><span class="arr">→</span>
                      <span class="step">resolve_product</span><span class="arr">→</span>
                      <span class="step">parallel_fetch</span><span class="arr">→</span>
                      <span class="step">diagnosis</span><span class="arr">→</span>
                      <span class="step">forecast</span><span class="arr">→</span>
                      <span class="step">pricing</span><span class="arr">→</span>
                      <span class="step">evidence_compile</span><span class="arr">→</span>
                      <span class="step">decision_critic</span><span class="arr">→</span>
                      <span class="step">tool_execution</span><span class="arr">→</span>
                      <span class="step">assemble_prompt</span><span class="arr">→</span>
                      <span class="step">generate_report</span><span class="arr">→</span>
                      <span class="step">validation_agent</span>
                    </div>
                    <div class="pd-arch-sub" style="margin-top:8px;color:var(--accent-strong);"><b>Control & Observability Layer</b></div>
                    <div class="pd-arch-sub">Plan · Tracing · Validation Gates · Presenter · Audit</div>
                  </div>
                </div>
              </div>
              <div class="pd-arch-arrow"></div>
              <div class="pd-arch-layer">
                <div class="pd-arch-fan-row">
                  <div class="pd-arch-box tier-data">
                    <div class="pd-arch-title">MySQL</div>
                    <div class="pd-arch-sub">ERP + Market + App + Forecast</div>
                    <div class="pd-arch-sub" style="color:var(--accent-strong);">38+ SQL views</div>
                  </div>
                  <div class="pd-arch-box tier-data">
                    <div class="pd-arch-title">ChromaDB</div>
                    <div class="pd-arch-sub">8 collections · bge-m3 embeddings</div>
                  </div>
                  <div class="pd-arch-box tier-llm">
                    <div class="pd-arch-title">Dual-LLM Layer</div>
                    <div class="pd-arch-sub">Local Qwen gatekeeper → Claude / Kimi brain → Local Qwen validator</div>
                  </div>
                </div>
              </div>
            </div>
            <table class="pd-table">
              <tr><th>Node</th><th>Why It Exists</th><th>Routing Logic</th></tr>
              <tr><td>parse_intent</td><td>Classify what the user actually wants</td><td>chat / analysis / report / deep research</td></tr>
              <tr><td>validate_context</td><td>Fail fast if data is missing</td><td>sufficient / insufficient → clarify intent</td></tr>
              <tr><td>parallel_fetch</td><td>Fetch independent data sources concurrently</td><td>ThreadPoolExecutor, 2–5 focused SQL queries</td></tr>
              <tr><td>diagnosis</td><td>Identify root cause before forecasting</td><td>Cost chain / supply-demand / competitor / event</td></tr>
              <tr><td>decision_critic</td><td>Auto-QA before output reaches user</td><td>Pass / fail → regenerate or caveat</td></tr>
              <tr><td>validation_agent</td><td>Final guardrail — blocks hallucinated numbers</td><td>Compliant / blocked + logged</td></tr>
            </table>
          `,
        },
        {
          title: "The Agent System: 5 Tiers of Specialization",
          body: `
            <p>15 agents organized in 5 tiers, each with a clear responsibility boundary. The key design principle: <strong>agents own data, not just logic</strong>. Each tier's agents are mapped to specific SQL views and data sources, preventing cross-contamination and enabling parallel execution.</p>
            <table class="pd-table">
              <tr><th>Tier</th><th>Agents</th><th>Why This Tier Exists</th></tr>
              <tr><td>Tier 0 — Sources</td><td>ERP Connector, Market Connector, Longzhong Scraper</td><td>Isolate ingestion — 4 source groups, each with its own schema and cadence</td></tr>
              <tr><td>Tier 1 — Data</td><td>ERP Data Agent, Market Data Agent, Pre-Renderer</td><td>The Pre-Renderer <em>locks</em> all numbers before LLM access — the anti-hallucination gate</td></tr>
              <tr><td>Tier 2 — Analysis</td><td>Cost Chain, Supply-Demand, Competitor, Contract, Causal Diagnosis</td><td>Ontology-driven traversal — upstream → downstream cost chain reasoning</td></tr>
              <tr><td>Tier 3 — Decision</td><td>Price Forecast, Alert & Notification, Report Generator</td><td>Threshold alerts with role-aware escalation to the right person</td></tr>
              <tr><td>Tier 4 — Interface</td><td>Query Router, RAG/Knowledge, Validation & Guardrail</td><td>Blocks hallucinated numbers, enforces source attribution, audit trail</td></tr>
              <tr><td>Tier 5 — Orchestrator</td><td>LangGraph State Machine</td><td>Session state, retries, conditional routing, parallel branches</td></tr>
            </table>
            <h3 class="pd-subh">Hermes: The Control Layer</h3>
            <div class="pd-cards">
              <div class="pd-card"><h4>Every Request Gets a Plan</h4><p><code>domains</code>: ERP, market, forecast, database</p><p><code>capabilities</code>: verified EDIA tools only</p><p><code>privacy_policy</code>: external LLM allowed or blocked</p><p><code>tool_sequence</code>: retrieval → policy → presentation → validation</p></div>
              <div class="pd-card"><h4>What Hermes Enforces</h4><ul><li>Structured plan for every request</li><li>Verified skills only — no raw SQL/free-form tools</li><li>Per-request privacy policy</li><li>Deterministic vs. LLM presenter selection</li><li>Request-level tracing and audit logs</li></ul></div>
            </div>
          `,
        },
        {
          title: "In Action: The System at Work",
          body: `
            <p class="pd-lead">EDIA isn't a prototype — it's a production system serving real commercial teams. Here's what they see.</p>
            <div class="pd-gallery">
              <figure class="pd-screenshot">
                <img src="assets/edia_decision.png" alt="AI Decision Interface" />
                <figcaption>AI Decision Support — causal diagnosis with source-attributed evidence and trust-tier badges</figcaption>
              </figure>
              <figure class="pd-screenshot">
                <img src="assets/edia_forecasting.png" alt="AI Forecasting" />
                <figcaption>Multi-horizon forecasting — 3×3 scenario grid (bear/base/bull × 3d/7d/30d)</figcaption>
              </figure>
              <figure class="pd-screenshot">
                <img src="assets/edia_alerts.png" alt="Inventory Alert System" />
                <figcaption>Inventory alert system — threshold monitoring with role-aware escalation</figcaption>
              </figure>
              <figure class="pd-screenshot">
                <img src="assets/edia_recommendation.png" alt="AI Recommendation" />
                <figcaption>AI recommendations — contextual suggestions grounded in real data, not LLM speculation</figcaption>
              </figure>
              <figure class="pd-screenshot">
                <img src="assets/edia_market.png" alt="Market Chain Analysis" />
                <figcaption>Market chain analysis — upstream/downstream cost chain traversal</figcaption>
              </figure>
              <figure class="pd-screenshot">
                <img src="assets/edia_report.png" alt="Weekly Report" />
                <figcaption>Weekly intelligence report — auto-generated with auditable sources</figcaption>
              </figure>
            </div>
          `,
        },
        {
          title: "Forecasting Engine: Multi-Model Ensemble",
          body: `
            <p>Not one model — an ensemble that adapts to market conditions. When naphtha costs are driving prices, XGBoost gets more weight. When the market is restarting after a holiday, LSTM captures the pattern better. The <code>ForecastSupervisor</code> blocks any forecast that fails sanity checks.</p>
            <table class="pd-table">
              <tr><th>Horizon</th><th>Models</th><th>When This Wins</th></tr>
              <tr><td>3d / 7d</td><td>ARIMA(2,1,2) + XGBoost + LSTM + Mean-Reversion</td><td>22 features with dynamic weights — XGBoost leads when cost-push dominates, LSTM leads on post-holiday restarts</td></tr>
              <tr><td>30d</td><td>STL 40% + Causal Chain 35% + Seasonal + Weekly Nudge</td><td>Structural decomposition + cost-chain elasticity — better when trend matters more than noise</td></tr>
              <tr><td>Baseline</td><td>Per-step ARIMA + Residual Daily Calibration</td><td>Champion model registry with historical residual dampening</td></tr>
            </table>
            <h3 class="pd-subh">Dynamic Weight Adjustment</h3>
            <pre class="pd-code"><span class="kw">if</span> diagnosis.primary_driver == <span class="str">"naphtha_cost_push"</span>:
    xgb_weight += <span class="num">0.10</span>
    arima_weight -= <span class="num">0.05</span>

<span class="kw">if</span> market_phase == <span class="str">"post_holiday_restart"</span>:
    lstm_weight += <span class="num">0.10</span>
    arima_weight -= <span class="num">0.10</span>

<span class="kw">if</span> <span class="fn">len</span>(price_series) &lt; <span class="num">180</span>:
    xgb_weight += <span class="num">0.15</span>
    arima_weight -= <span class="num">0.15</span></pre>
            <h3 class="pd-subh">ForecastSupervisor Quality Gates</h3>
            <table class="pd-table">
              <tr><th>Gate</th><th>Check</th><th>Failure Action</th></tr>
              <tr><td>latest_price_available</td><td>price &gt; 0</td><td>Block, insufficient_data</td></tr>
              <tr><td>scenario_band_sanity</td><td>bear ≤ base ≤ bull</td><td>Block, regenerate</td></tr>
              <tr><td>mape_disclosed</td><td>Recent MAPE present or noted</td><td>Needs caveat</td></tr>
              <tr><td>confidence_matches_accuracy</td><td>Confidence ≥ 0.6</td><td>Widen bands</td></tr>
            </table>
            <div class="pd-callout"><b>MLOps:</b> adaptive MAPE-based bias correction · continuous backtesting · regression guard with 10% margin · snapshot persistence · per-product/per-horizon champion model registry.</div>
          `,
        },
        {
          title: "Security: Keep ERP Data On-Premise",
          body: `
            <p class="pd-lead">The business constraint was non-negotiable: ERP data cannot leave the company. The dual-LLM architecture makes this possible — a local Qwen model on an A10 GPU handles all sensitive data, while external models only see sanitized briefings.</p>
            <div class="pd-cards">
              <div class="pd-card"><h4>Gatekeeper — Qwen 3.5</h4><p>Local on A10 GPU. Reads ERP, sanitizes payloads and validates outputs.</p></div>
              <div class="pd-card"><h4>Brain — Claude / Kimi</h4><p>External reasoning and writing. Receives sanitized briefing only.</p></div>
              <div class="pd-card"><h4>Validator — Local Qwen</h4><p>Checks generated output and re-attaches allowed business context.</p></div>
            </div>
            <table class="pd-table">
              <tr><th>What Goes Out</th><th>What Stays Local</th></tr>
              <tr><td>Market prices, % movements, trends</td><td>Company identity and names</td></tr>
              <tr><td>Anonymized competitor prices</td><td>Customer names and contacts</td></tr>
              <tr><td>Relative indices and historical patterns</td><td>Exact inventory quantities</td></tr>
              <tr><td>MAPE scores, public events, seasonal rules</td><td>Cost structures, margins, contracts, ERP schema</td></tr>
            </table>
            <div class="pd-callout"><b>Security gates:</b> <code>LLM_ENABLE_EXTERNAL_REASONING</code> controls external routing; <code>LLM_EXTERNAL_ALLOW_UNSANITIZED</code> defaults to false. External routing is blocked until sanitization succeeds, with local-only fallback on API failure.</div>
          `,
        },
        {
          title: "Data Pipeline: From Chaos to Canonical",
          body: `
            <p>4 raw source groups feeding into a canonical <code>market_prices</code> table covering 19 petrochemical products. The ETL handles forward-fill (7-day limit), backfill edge cases, data quality checks, and cadence classification — because market data arrives at different frequencies for different products.</p>
            <div class="pd-pipeline">
              <div class="pd-pipe-step"><div class="pd-pipe-box"><div class="name">Raw Sources · 4 groups</div><div class="desc">LZ Views (lz_v_*) · ERP Views (erp_v_*) · CSV Feeds · Longzhong Scraper · News APIs</div></div></div>
              <div class="pd-pipe-arrow"></div>
              <div class="pd-pipe-step"><div class="pd-pipe-box"><div class="name">ETL → Canonical <code>market_prices</code></div><div class="desc">REAL_DATA_MAP · 19 products · Forward-fill (7d limit) · Backfill edge cases · Data quality checks · Cadence classification</div></div></div>
              <div class="pd-pipe-arrow"></div>
              <div class="pd-pipe-step"><div class="pd-pipe-box"><div class="name">Service Map → 19 products</div><div class="desc">Forecast Engine · Pricing Ladder · Chatbot · Dashboard · Reports · Alerts</div></div></div>
              <div class="pd-pipe-arrow"></div>
              <div class="pd-pipe-step"><div class="pd-pipe-box"><div class="name">ChromaDB RAG</div><div class="desc">Chunk → Embed (bge-m3) → Store with product/date/source metadata</div><div class="desc" style="color:var(--accent-strong);margin-top:6px;">8 collections: industry_reports · weekly_reports · past_decisions · market_signals · causal_graph · news_events · decision_outcomes · catalog</div></div></div>
            </div>
          `,
        },
        {
          title: "Impact: Before & After",
          body: `
            <div class="pd-highlights">
              <div class="pd-highlight"><div class="ph-num">90%</div><div class="ph-label">latency reduction — 90–478s → 30–45s</div></div>
              <div class="pd-highlight"><div class="ph-num">10×</div><div class="ph-label">increase in analyst question volume</div></div>
              <div class="pd-highlight"><div class="ph-num">0</div><div class="ph-label">hallucinated numbers reaching users</div></div>
              <div class="pd-highlight"><div class="ph-num">19</div><div class="ph-label">products covered by forecast engine</div></div>
            </div>
            <table class="pd-table">
              <tr><th>Metric</th><th>Before</th><th>After</th></tr>
              <tr><td>End-to-end latency</td><td>90–478s</td><td>30–45s</td></tr>
              <tr><td>First token time</td><td>5–10s</td><td>&lt;10s (streaming)</td></tr>
              <tr><td>SQL round-trips</td><td>77</td><td>2–5</td></tr>
              <tr><td>Rows fetched</td><td>~180,000</td><td>50–200</td></tr>
              <tr><td>Number hallucinations</td><td>Common</td><td>Architecturally blocked</td></tr>
              <tr><td>Analyst adoption</td><td>Baseline</td><td>10× increase in daily queries</td></tr>
            </table>
          `,
        },
        {
          title: "Tech Stack",
          body: `
            <p class="pd-lead">5 categories · 28 tools · spans the full AI engineering stack from agent orchestration to production ops.</p>
            <div class="pd-stack-grid">
              <div class="pd-stack-card">
                <div class="pd-stack-head">
                  <div class="pd-stack-icon" aria-hidden="true">◐</div>
                  <h4>Agent & LLM Orchestration</h4>
                  <span class="pd-stack-role-badge role-ai">AI Engineer</span>
                </div>
                <p class="pd-stack-purpose">Multi-agent runtime, RAG, tool calling, guardrails, context engineering</p>
                <div class="chips"><span class="chip">LangGraph</span><span class="chip">Hermes Agent Runtime</span><span class="chip">Ollama</span><span class="chip">Claude</span><span class="chip">Kimi / Moonshot</span><span class="chip">Qwen 3.5</span><span class="chip">RAG</span><span class="chip">ChromaDB</span><span class="chip">BAAI/bge-m3</span><span class="chip">sentence-transformers</span><span class="chip">Tool Calling / Function Calling</span><span class="chip">Guardrails</span><span class="chip">Agent Evaluation</span><span class="chip">Multi-model routing</span><span class="chip">MCP-style context gateway</span><span class="chip">Self-adaptive weights</span><span class="chip">Prompt Engineering</span><span class="chip">Context Engineering</span></div>
              </div>
              <div class="pd-stack-card">
                <div class="pd-stack-head">
                  <div class="pd-stack-icon" aria-hidden="true">∿</div>
                  <h4>ML & Forecasting</h4>
                  <span class="pd-stack-role-badge role-both">Both</span>
                </div>
                <p class="pd-stack-purpose">Time-series ensemble + adaptive weights + agentic signals</p>
                <div class="chips"><span class="chip">ARIMA</span><span class="chip">STL</span><span class="chip">XGBoost</span><span class="chip">PyTorch / LSTM</span><span class="chip">statsmodels</span><span class="chip">Kimi exogenous</span><span class="chip">MLOps registry</span><span class="chip">MAPE bias correction</span></div>
              </div>
              <div class="pd-stack-card">
                <div class="pd-stack-head">
                  <div class="pd-stack-icon" aria-hidden="true">▣</div>
                  <h4>Backend & Data</h4>
                  <span class="pd-stack-role-badge role-infra">Infrastructure</span>
                </div>
                <p class="pd-stack-purpose">API, streaming, auth, data pipelines, ETL</p>
                <div class="chips"><span class="chip">FastAPI</span><span class="chip">Python</span><span class="chip">SQLAlchemy</span><span class="chip">Pydantic</span><span class="chip">MySQL</span><span class="chip">SSE</span><span class="chip">JWT</span><span class="chip">ETL pipelines</span><span class="chip">Data lineage</span><span class="chip">Time-series processing</span></div>
              </div>
              <div class="pd-stack-card">
                <div class="pd-stack-head">
                  <div class="pd-stack-icon" aria-hidden="true">▤</div>
                  <h4>Frontend</h4>
                  <span class="pd-stack-role-badge role-infra">Infrastructure</span>
                </div>
                <p class="pd-stack-purpose">Dashboard, charts, real-time streaming UI — full-stack</p>
                <div class="chips"><span class="chip">React 18</span><span class="chip">TypeScript</span><span class="chip">Vite</span><span class="chip">Tailwind</span><span class="chip">Recharts</span><span class="chip">Full-stack</span></div>
              </div>
              <div class="pd-stack-card">
                <div class="pd-stack-head">
                  <div class="pd-stack-icon" aria-hidden="true">⬡</div>
                  <h4>Ops & Security</h4>
                  <span class="pd-stack-role-badge role-infra">Infrastructure</span>
                </div>
                <p class="pd-stack-purpose">Deployment, local LLM serving, security & governance</p>
                <div class="chips"><span class="chip">systemd</span><span class="chip">nginx</span><span class="chip">A10 GPU</span><span class="chip">PII sanitization</span><span class="chip">audit logging</span><span class="chip">RBAC</span><span class="chip">auto-recovery</span><span class="chip">Hermes tracing</span></div>
              </div>
            </div>
          `,
        },
        {
          title: "What This Project Demonstrates",
          body: `
            <div class="pd-cards">
              <div class="pd-card">
                <h4>AI Agent Engineer</h4>
                <ul>
                  <li><b>LangGraph orchestration</b> — 17 nodes with conditional routing, parallel branches, and session state</li>
                  <li><b>Multi-agent architecture</b> — 15 agents across 5 tiers with ownership boundaries and Hermes validation gates</li>
                  <li><b>Tool use & skills</b> — 57 atomic skills with verified-tool-only policy; no raw SQL or free-form tools</li>
                  <li><b>Agent evaluation</b> — DecisionCritic auto-QA + ForecastSupervisor quality gates on every request</li>
                  <li><b>RAG & long memory</b> — ChromaDB (8 collections, bge-m3), session state, hierarchical context compression</li>
                  <li><b>Context engineering</b> — Hermes context assembler: 180K rows → 200-row briefing before LLM synthesis</li>
                </ul>
              </div>
              <div class="pd-card">
                <h4>AI Infrastructure Engineer</h4>
                <ul>
                  <li><b>MLOps pipeline</b> — Champion model registry, continuous backtesting, MAPE bias correction, regression guard</li>
                  <li><b>Model serving</b> — Ollama local + external routing + automatic fallback on API failure</li>
                  <li><b>Data pipelines</b> — 4 source groups → ETL → canonical <code>market_prices</code> → 19-product service map</li>
                  <li><b>Performance engineering</b> — 90% latency reduction via intent planning, parallel SQL, pre-rendering, SSE streaming</li>
                  <li><b>Observability</b> — Hermes request tracing, DB fingerprints, cache invalidation, health endpoints</li>
                  <li><b>Security & privacy</b> — Dual-LLM PII sanitization, JWT auth, role-aware escalation, audit logging</li>
                </ul>
              </div>
            </div>
          `,
        },
      ],
    },
    {
      id: "zhanlu",
      title: "Zhanlu — Enterprise AI Agent Platform",
      short: "Multi-tenant AI agent platform with Planner planning, Harness Agents, sandboxed tool calling, model routing, and PPT-with-data artifact generation.",
      category: "AI Infrastructure",
      period: "2025 – 2026",
      org: "Synexia AI (Internship) — Solo project, designed, built, and shipped entirely by me",
      role: "AI Platform / Full-stack Engineer (Internship · Solo)",
      image: "assets/zhanlu_dashboard.png",
      video: null,
      summary:
        "A production multi-tenant AI agent platform I built entirely on my own. Users create projects (Apps) and agents, pick capabilities from a curated registry, and chat with a main agent that delegates to domain-specific Harness Agents. Planner plans with a governed Plan DAG, routes through a Tool/Skill/MCP Gateway for tool calling, applies model routing per agent and per org, executes code in isolated Docker sandboxes (sandbox-python, sandbox-pptx, sandbox-office, sandbox-webapp), and generates real business artifacts — including data-driven PPT presentations — that are validated, stored, and previewed inline. Deployed as a 14-service Docker stack with PostgreSQL, Redis, MinIO, Prometheus, and Grafana. The current build goes beyond the MVP: plan-first turn planning streams every agent step to the chat UI, agents generate fullstack dashboards from live bound data (WebSocket refresh), the PPT pipeline is audited by an LLM judge that blocks failed decks, and a native MCP client/server exposes and consumes external tools.",
      highlights: [
        { num: "7", label: "layer enterprise architecture (Identity → Planner → Harness → Memory → Execution → Platform → Infra)" },
        { num: "14", label: "container services in the Docker stack" },
        { num: "Harness", label: "Agent runtime — plan-execute loop, sandboxed tool calling, per-agent model routing" },
        { num: "8+", label: "starter Harness Agents (Finance, Report, Dashboard, Data Analyst, Document, Compliance, Mini App, Review)" },
        { num: "15+", label: "starter skills across PPT, DOCX, HTML, Dashboard, Markdown, Mini-App, governed NL2SQL, and DataSnapshot" },
      ],
      problem:
        "Enterprises want AI agents they can actually deploy: users need to create their own projects (Apps) and assemble their own agents from real capabilities, but every step must stay governed. Raw tool pickers leak implementation details, agents holding raw credentials create security and audit gaps, multi-agent systems need consistent orchestration, generated files should be versioned business artifacts (Markdown, dashboards, data-driven PowerPoints) — not chat attachments — and code execution must be safely isolated. A sandbox runtime is required to host code skills and data-driven artifact generation without exposing the host or any enterprise credentials.",
      roleDetail:
        `<p>Solo-designed and deployed an <strong>11-service containerized platform</strong>: FastAPI backend, PostgreSQL + Redis + MinIO state, and <strong>4 dedicated sandbox execution runtimes</strong> (Python / PPTX / WebApp / Office) that isolate dynamic code execution from the core.</p>
        <p><strong>Agent Harness & Orchestration:</strong> Built a custom FSM agent runtime (plan → act → verify phases) with a 100+ tool registry, per-agent allow/deny tool filtering, iteration budgets, and tool-loop guardrails. Implemented a swarm tier — 8 agent archetypes (general-purpose, explore, plan, worker, verification, data_agent, forecast_agent, report_agent) with team creation, parallel spawn, message-passing, and retry/escalation orchestration.</p>
        <p><strong>Dynamic Model & Tool Gateway:</strong> Enterprise gateway with hierarchical per-task model routing, provider circuit-breaker/failover, Fernet-encrypted API-key storage, native MCP client + OAuth, and full access audit trails.</p>
        <p><strong>Data Execution:</strong> NL2SQL data agents with automatic schema discovery, a ChromaDB semantic catalog for retrieval, and multi-source (MySQL/PostgreSQL) bindings.</p>
        <p><strong>Artifact Pipeline:</strong> Institutional-grade PPTX generation (auto-plan → render → audit → polish), full-stack live dashboards (SSE streaming, 4 design languages), and multi-horizon sales forecasting with MAPE scoring and backtest validation.</p>
        <p><strong>Security & Reliability:</strong> LLM guardrails, path/URL safety, OSV + Tirith dependency scanning, SSE-streamed run observability, and per-app multi-tenant isolation (own memory, DB bindings, state).</p>`,
      architecture:
        "Seven layers wired into a single governance pipeline: (1) Enterprise Interaction & Identity producing a sealed RequestEnvelope; (2) Planner Cognitive Core — one governed plan-act-observe FSM with seven capability engines (Goal, Context, Planning, Reasoning, Decision, Reflection, Learning) around a swappable LLM, exposing Plan DAGs to the rest of the system; (3) Harness Agent Runtime — every agent is a Harness Agent with required-confirmations, risk tier, model route, sandbox requirement, missing-permission schema, dangerous-side-effect list, and a ready/warning/blocked status; (4) Memory & Knowledge (DataSnapshots and curated stores); (5) Execution Layer — sandboxed workflow / automation / artifact / notification / approval execution, with the sandbox-worker as the only service allowed to create temporary Docker sandboxes; (6) Platform Services — model routing policy, prompt versioning, policy evaluation, confirmation risk levels, budget limits, traces, and AI governance registries; (7) Docker / PostgreSQL / Redis / MinIO infrastructure. All tool calling goes through the Tool / Skill / MCP Gateway — agents do not call MCP directly, skills do not call MCP without the gateway, and the model never sees the complete tool catalog.",
      algorithm:
        "Planner is the only cognitive controller. For each user request it converts intent into a typed TaskSpec, assembles project-isolated context from Memory and DataSnapshots, and builds a validated Plan DAG. Each Plan node is filtered through a Tool/Skill/MCP Gateway that runs permission filter → schema validation → policy evaluation → execution, and the ObservationRecord is written back to the audit trail. Tool calling is bounded: agents see only the tools and skills they have permission to call, never the full MCP catalog. Model routing is per-agent and per-org: restricted data requires an approved model route, expensive routes trigger confirmation gates, and a per-org model provider key can pin dedicated deployments. Data flow is gated: every database call goes through the Datasource Gateway and produces an immutable DataSnapshot — the sandbox never receives raw credentials. Code and artifact skills (including pptx-generation with data) run inside the sandbox-worker, which streams stdout/stderr events, validates outputs, persists artifacts through the backend, and tears down the container when the job completes.",
      methodology: [
        "Mapped the existing UI file tree and component structure before touching the backend.",
        "Added the FastAPI skeleton, PostgreSQL schema (source of truth), Redis (queues, locks, events), and configuration.",
        "Added multi-tenant Org/App/Workspace models with JWT auth (access + refresh, OTP registration) and per-conversation privacy.",
        "Added the Harness Agent data model: required confirmations, risk tier, model route, sandbox requirement, missing-permission and missing-schema tracking, dangerous-side-effect list, and ready/warning/blocked status.",
        "Added the capability registry — users pick high-level capabilities, not raw skills — backed by starter agents (Finance, Report, Dashboard, Data Analyst, Document, Compliance, Mini App, Review) and starter skills.",
        "Added the Datasource Connector and per-agent datasource bindings; all reads go through the Datasource Gateway and produce immutable DataSnapshots.",
        "Built Planner as a plan-act-observe FSM with Plan DAG records, policy gates, and ObservationRecord audit entries.",
        "Added the skill registry and the slash `/ action picker for inline skill use; user-created skills stay untrusted until reviewed and approved.",
        "Built the Tool / Skill / MCP Gateway: permission filter → schema validation → policy evaluation → execution, with audit logging. Agents and skills never call MCP directly.",
        "Implemented the sandbox-worker as the only Docker-socket-bearing service, with dedicated sandbox-python, sandbox-pptx, sandbox-office, and sandbox-webapp containers.",
        "Built the data-driven PPT artifact flow: Report Agent invokes the pptx-generation skill in sandbox-pptx, using DataSnapshots as input; outputs are validated, stored as artifacts, and previewed inline.",
        "Implemented Markdown, HTML, dashboard, DOCX, and mini-app artifact generators with versioned storage and permission-checked inline preview APIs.",
        "Implemented the live execution timeline event stream for the chat UI so every plan step is observable.",
        "Deployed the full 14-service Docker stack: backend, worker, sandbox-worker, postgres, redis, minio + minio-init, sandbox-python, sandbox-office, sandbox-pptx, sandbox-webapp, prometheus, grafana.",
      ],
      features: [
        "Multi-tenant Org / App / Workspace isolation with per-conversation privacy and per-agent datasource / skill / MCP bindings",
        "Users can create projects (Apps) and Harness Agents, then pick high-level capabilities from a curated registry (system agents and user-created agents live side-by-side)",
        "Planner cognitive core with seven capability engines: Goal, Context, Planning, Reasoning, Decision, Reflection, Learning",
        "Plan DAG execution with approval gates, retry / timeout isolation, and multi-turn session state",
        "Harness Agent Runtime: every agent is a Harness Agent with explicit required confirmations, risk tier, model route, sandbox requirement, and ready / warning / blocked status",
        "Per-agent model routing — restricted data requires an approved route, expensive routes trigger confirmation, per-org model provider keys can pin dedicated deployments",
        "Tool / Skill / MCP Gateway: agents do not call MCP directly; permission filter, schema validation, policy evaluation, and audit are enforced before every call",
        "Sandbox-worker with isolated Docker execution and ephemeral filesystems — the only service that may mount the Docker socket",
        "Dedicated sandbox containers for Python, PPT, Office, and web-app workloads (sandbox-python, sandbox-pptx, sandbox-office, sandbox-webapp)",
        "Data-driven PPT generation: the Report Agent invokes the pptx-generation skill in sandbox-pptx with DataSnapshots as input and produces versioned business presentations",
        "Artifact pipeline for Markdown, HTML, PPT, DOCX, dashboards, and mini-apps, each validated and stored as a versioned Artifact with inline preview APIs",
        "Datasource Gateway with immutable DataSnapshots — agents read data through DataSnapshots, the sandbox never receives raw credentials",
        "Capability registry + slash `/ action picker for inline skill use; user-created skills stay untrusted until reviewed and approved",
        "Live execution timeline events streamed to the chat UI so every plan step is observable",
        "Email / password auth with OTP registration, JWT access (15 min) + refresh tokens (30 days, SHA-256 hashed)",
        "Rate-limited auth endpoints and access-token JTI blacklisting on logout",
        "Full 14-service Docker stack: backend, worker, sandbox-worker, postgres, redis, minio + minio-init, sandbox-python, sandbox-office, sandbox-pptx, sandbox-webapp, prometheus, grafana",
      ],
      impact:
        "Delivered a production-grade AI agent platform that turns raw LLM capability into a governed enterprise service. Users can now create their own projects (Apps), assemble their own Harness Agents from a curated capability registry, and rely on Planner to plan across tool calling, model routing, and sandbox execution — including data-driven PPT generation that takes real DataSnapshots and outputs a versioned business artifact. Every step is gated by the Tool / Skill / MCP Gateway, every database read is an immutable DataSnapshot, every code run is in an ephemeral sandbox, and every action is auditable.",
      evaluation:
        "Validated end-to-end against the MVP testing checklist: existing-UI integration, multi-tenant Org / App / Workspace setup, users creating projects and Harness Agents, capability selection, central Datasource Connector and agent-specific datasource bindings, Planner FSM chat, Tool / Skill / MCP Gateway routing, sandboxed execution (sandbox-worker + dedicated sandbox containers), Markdown / HTML / PPT / DOCX / dashboard artifact generation, inline preview card, live execution timeline, PostgreSQL + Redis, and the full Docker stack. Phase-2 hardening — rootless Docker, Docker socket proxy, gVisor, dedicated sandbox host — is documented for future work.",
      stack: [
        "FastAPI", "React (Vite)", "PostgreSQL", "Redis", "MinIO",
        "Docker", "Docker Compose", "Prometheus", "Grafana",
        "Planner FSM (7 capability engines)", "Plan DAG",
        "Harness Agent Runtime", "Tool / Skill / MCP Gateway",
        "Model Routing (per-agent, per-org)", "Sandbox Worker",
        "Sandbox Containers (pptx, python, office, webapp)",
        "Datasource Gateway + DataSnapshots",
        "JWT Auth (access + refresh)", "OTP",
        "PPT / DOCX / HTML / Dashboard / Markdown / Mini-App Generation",
      ],
      sections: [
        {
          title: "In Action: The Platform at Work",
          body: `
            <p class="pd-lead">Screenshots from the live platform — not mockups. Every view below is the running system with real bound data.</p>
            <div class="pd-gallery">
              <figure class="pd-screenshot">
                <img src="assets/zhanlu_chat.png" alt="Zhanlu main agent chat" />
                <figcaption>Main agent chat — plan-first turn planning streams every agent step as a live checklist</figcaption>
              </figure>
              <figure class="pd-screenshot">
                <img src="assets/zhanlu_dashboard.png" alt="Zhanlu agent-generated live dashboard" />
                <figcaption>Agent-generated fullstack dashboard — Financial Overview with live ERP data refreshed over WebSocket</figcaption>
              </figure>
              <figure class="pd-screenshot">
                <img src="assets/zhanlu_space.png" alt="Zhanlu My Space" />
                <figcaption>My Space — multi-tenant projects (Apps), agents, datasources, and knowledge bases</figcaption>
              </figure>
              <figure class="pd-screenshot">
                <img src="assets/zhanlu_agent_builder.png" alt="Zhanlu Agent Builder" />
                <figcaption>Agent Builder — create scenario agents from templates or scratch, each with its own model route, datasources, skills, and MCP tools</figcaption>
              </figure>
            </div>
          `,
        },
        {
          title: "What's Live Today: Beyond the MVP",
          body: `
            <p class="pd-lead">The platform keeps evolving. On top of the original architecture, the current build ships production-grade systems that were only sketched in the MVP:</p>
            <div class="pd-cards">
              <div class="pd-card"><h4>Turn Planning (Plan-First)</h4><p>Every request is planned before execution — the turn planner emits plan-step events streamed live to the chat UI as a visible checklist, so users see what the agent will do before it does it. Step completion is driven by real tool evidence, not LLM claims.</p></div>
              <div class="pd-card"><h4>Fullstack Dashboard Generation</h4><p>Agents generate complete React dashboards from bound datasources. A DB-agnostic profiler inspects real data before design, so chart types are driven by data shape; widget SQL is validated at build time; dashboards refresh live over WebSocket.</p></div>
              <div class="pd-card"><h4>Audited PPT Pipeline</h4><p>Decks render through an HTML design stage, are audited by an LLM judge with source-citation rules, and failed decks are blocked from delivery — hallucinated slides never reach users. Market intents ground decks in the project knowledge base.</p></div>
              <div class="pd-card"><h4>MCP Client + Server</h4><p>A native MCP client registers external tools, and an MCP server exposes Zhanlu capabilities. A CAD agent drives Autodesk Fusion 360 over a socket MCP bridge.</p></div>
              <div class="pd-card"><h4>Context-Window Safety</h4><p>A context budget check runs before every LLM call — compresses history and spills oversized tool payloads to a data-pointer layer, guaranteeing context headroom regardless of which model is serving.</p></div>
              <div class="pd-card"><h4>LLM Routing with Fallback</h4><p>Multi-provider routing with health checks and automatic fallback. Validated local vLLM serving (Qwen3-27B) with a custom tool-call parser alongside cloud models, so customers can keep data on-premise.</p></div>
            </div>
          `,
        },
        {
          title: "Enterprise Multi-Tenancy: One Platform, the Whole Enterprise",
          body: `
            <p class="pd-lead">One deployment, every department. Every project, agent, datasource, and knowledge base is scoped to an Org / App / Workspace and marked company-wide or personal — so Marketing, R&D, Data Analysis, and C5/C9 run side-by-side with strict data isolation.</p>
            <div class="pd-cards">
              <div class="pd-card"><h4>Org / App / Workspace Scoping</h4><p>Every resource row carries org_id + app_id. Company resources are shared across the org; personal resources stay with their owner. No cross-tenant data leaks by construction.</p></div>
              <div class="pd-card"><h4>Department Projects</h4><p>Marketing, R&D, Data Analysis, C5/C9, Global — each team runs as its own project with its own agents, knowledge bases, and conversation history, visible in the sidebar as department groups.</p></div>
              <div class="pd-card"><h4>Per-Agent Data Isolation</h4><p>Each agent binds datasources explicitly: read-only access mode, allowed / blocked tables, allowed columns, and row filters. An agent literally cannot see data outside its binding.</p></div>
              <div class="pd-card"><h4>Scenario Agents</h4><p>Users create purpose-built agents from templates or scratch — Customer Support, Production Efficiency, Research Assistant, Report Writer — each with its own model route, datasources, skills, and MCP tools.</p></div>
              <div class="pd-card"><h4>Realtime, Per Tenant</h4><p>Dashboards stream live data over WebSocket and agent runs stream step-by-step over SSE — always scoped to the tenant that owns them.</p></div>
              <div class="pd-card"><h4>Governance & Audit</h4><p>Resource access policies, controlled sharing, and an audit trail on every gated action — enterprise-ready accountability.</p></div>
            </div>
            <div class="pd-callout"><b>Why this matters:</b> Most AI demos work in one tenant. Zhanlu's multi-tenancy is enforced at the database layer — org_id/app_id scoping on every resource plus column- and row-level agent bindings — which is exactly what an enterprise platform needs before it can touch production data.</div>
          `,
        },
        {
          title: "CAD Agent: Natural-Language 3D Modeling in Fusion 360",
          body: `
            <p class="pd-lead">Most agents write text. This one builds things. CAD Agent takes natural-language requests — "build an M6 screw", "make the bracket taller" — and drives Autodesk Fusion 360 over a live socket MCP bridge to create real 3D models, parameter by parameter.</p>
            <video src="assets/cad_agent_demo.mp4" controls preload="metadata" muted playsinline></video>
            <div class="pd-cards">
              <div class="pd-card"><h4>Build / Query / Ambiguous</h4><p>The agent classifies intent before touching Fusion: BUILD creates or changes geometry, QUERY answers from the live scene without rebuilding, AMBIGUOUS asks instead of guessing — it never substitutes a part the user didn't ask for.</p></div>
              <div class="pd-card"><h4>Goal Lock-In + Todo Planning</h4><p>Every build starts with a one-line goal statement, then a todo plan — one todo per sub-part — checked off as geometry lands. Plan-first, exactly like the rest of the platform.</p></div>
              <div class="pd-card"><h4>Granular Tools + Raw Fallback</h4><p>Validated, typed Fusion operations (sketch, extrude, fillet, chamfer, holes) cover most work; raw adsk Python handles revolve, loft, sweep, mirror, and patterns when the granular set doesn't.</p></div>
              <div class="pd-card"><h4>Live Scene Awareness</h4><p>fusion360_info re-reads the live model — bodies, sketches, planes, features, parameters — so the agent reconciles against reality instead of guessing; it never clear-and-restarts to "recover".</p></div>
              <div class="pd-card"><h4>Persistent Canvas</h4><p>The model stays on the Fusion canvas across turns. Updates modify the SAME geometry in place — add a sketch at the right height, join/cut extrude — never wiping the user's work.</p></div>
              <div class="pd-card"><h4>Company-Scoped Agent</h4><p>Seeded as a company resource in the agent catalog, so any team in the org can spawn a design-automation agent with the same isolation and audit as every other agent.</p></div>
            </div>
            <div class="pd-callout"><b>Why this matters:</b> It's the full loop — natural language → agent planning → validated tool calls → real parametric geometry in a professional CAD tool. The same harness, routing, gateway, and audit machinery as the data agents, applied to a completely different domain: design engineering.</div>
          `,
        },
      ],
      links: [
        { label: "GitHub Repository", url: "https://github.com/Minhaz2858/EDIA", external: true },
      ],
    },
    {
      id: "bepsbot",
      title: "BepsBot — AI-Powered Mental Health Peer Support Platform",
      short: "My master's thesis research at ZJU — a dual-mode LLM writing assistant for bipolar-disorder peer support (HHME 2026 PCC, Springer LNCS).",
      category: "Generative AI",
      period: "2024 – 2025",
      org: "Zhejiang University · Master's Thesis Research · HHME 2026 PCC Oral · Springer LNCS",
      role: "Master's Thesis Researcher / AI Engineer",
      image: "assets/bepsbot_hero.png",
      video: "assets/bepsbot_demo.mp4",
      summary:
        "My master's thesis research at Zhejiang University: a production-grade dual-mode AI writing assistant for online peer support in bipolar-disorder communities. AS (Assessment) mode provides real-time ES/IS scoring with a fine-tuned RoBERTa regressor grounded in LIWC-2015 features. RE (Recommendation) mode performs a 2-stage retrieval over a 48K-comment r/bipolar pool and returns 3 linguistically transformed drafts. Validated through a 24-participant within-subjects study (SUS 88.0, κ=.78, IS F1=.62 / ES F1=.68) and presented as a PCC Oral at HHME 2026.",
      highlights: [
        { num: "24", label: "participants · within-subjects study" },
        { num: "SUS 88.0", label: "Excellent (Bangor et al.) · 70.8% Grade A" },
        { num: "κ=.78", label: "inter-coder agreement · 450 gold-standard comments" },
        { num: "IS .62 / ES .68", label: "F1 · 10-fold CV · 100-comment holdout IS 65% / ES 75%" },
      ],
      problem:
        "Peer supporters in online bipolar-disorder communities write replies that can be unintentionally unsupportive, factually wrong, or unsafe. There was no real-time way to measure support quality, no way to ground generative suggestions in evidence, and LLM outputs risked hallucinations and harmful suggestions in a high-stakes clinical context.",
      roleDetail:
        "Designed the dual-mode microservice architecture; led dataset construction and 3-expert annotation; built the RoBERTa + LIWC-2015 scoring pipeline; built the 2-stage Elasticsearch + BERT retrieval pipeline; deployed the FastAPI inference service; implemented the LLM-based safety-filter middleware; ran the 24-participant within-subjects study; published as PCC Oral at HHME 2026.",
      architecture:
        "Decoupled microservices: a Flask frontend (UI host + orchestration) talks to a high-concurrency FastAPI inference backend. Two modes share infrastructure: (1) AS (Assessment) — fine-tuned RoBERTa regression on LIWC-2015 features returns ES/IS scores and one improvement suggestion conditioned on the current draft; (2) RE (Recommendation) — Elasticsearch More-Like-This selects 50 tf-idf candidates, then 768-dim BERT cosine re-ranks them, and the LLM returns 3 transformed drafts (Personal Pronouns / Family-Friends / Positive Words). Asynchronous processing runs LLM generation and safety checks in parallel via ThreadPoolExecutor.",
      algorithm:
        "Transfer learning on RoBERTa with a custom regression head, trained on 450 expert-annotated comments across 4 LIWC-2015 feature groups (length, personal pronouns, social, positive emotion). 10-fold CV baselines: IS best = Random Forest (F1=.62), ES best = XGBoost (F1=.68). 100-comment held-out cross-verification: IS 65%, ES 75%. AS-mode design rules — (1) utterance conditioned on current scores; (2) length issue raised only at first occurrence, groups 2–4 sampled with random factor to prevent feature dominance; (3) 12 related LIWC-2015 words seeded for serendipity. RE-mode pipeline — ES More-Like-This → BERT cosine → 3 transformations preserving the draft's communicative intention. Safety gate: LLM-based content moderation (self-harm, harmful medical advice).",
      methodology: [
        "Crawled and preprocessed a 48,148-comment r/bipolar pool and a 6-year corpus of general mental-health discussions from Reddit via Pushshift.",
        "Led 3 domain experts to label 450 comments on a 1–3 IS/ES scale (Cohen's κ > 0.85), producing a gold-standard training set.",
        "Fine-tuned RoBERTa on LIWC-2015 features for ES/IS regression; benchmarked against SVM, Multinomial Logistic Regression, Random Forest (best IS), and XGBoost (best ES).",
        "Built the 2-stage RE pipeline: Elasticsearch More-Like-This (50 candidates) → 768-dim BERT cosine re-ranking → LLM-generated 3 transformed drafts.",
        "Implemented AS-mode design rules: conditional utterances, anti-dominance sampling, 12-word LIWC seeding.",
        "Deployed the dual-mode service through a FastAPI backend decoupled from the Flask frontend, with parallel LLM + safety-check inference.",
        "Closed the loop with active learning: filter, pseudo-label, and fold new submissions back into the training set.",
        "Ran a 24-participant within-subjects study (12F/12M, 3 writing tasks, counterbalanced Latin square) with SUS, 5-point Likert confidence + satisfaction, IS/ES rubric, and 15–25 min semi-structured exit interviews.",
      ],
      features: [
        "Dual-mode UX: AS (assessment + one suggestion) and RE (3 transformed drafts), with non-intrusive preview-then-hide flow",
        "Real-time ES/IS scoring with feature-grounded feedback (length, personal pronouns, social, positive emotion)",
        "Retrieval grounded in a 48K-comment r/bipolar pool — two generations: ES More-Like-This → BERT cosine (paper) and ChromaDB RAG (current code)",
        "Three targeted transformations: Personal Pronouns, Family & Friends (LIWC social), Positive Words (LIWC positive emotion)",
        "Real-time LLM-based safety filter — blocks self-harm, harmful advice, and dangerous content",
        "Automated active-learning loop — the model improves continuously without manual intervention",
        "Decoupled Flask + FastAPI microservice architecture for high concurrency",
      ],
      impact:
        "Achieved SUS 88.0 (SD=11.4) with 70.8% Grade A — substantially above the 68-point industry average. 14/24 (58.3%) participants improved on ES, 15/24 (62.5%) on IS. T3 IS × T3 confidence Spearman rs=.552 (p=.005, Bonferroni-corrected). Task completion dropped 32.3% from T1 (11.21 min) to T3 (7.59 min). Identified 3 user-pattern archetypes — Pattern A Validation (26/39, 66.7%), Pattern B Selective Integration (8/39, 20.5%), Pattern C Full Replacement (5/39, 12.8%, raises autonomy concerns). Presented as PCC Oral at HHME 2026 (Springer LNCS in review).",
      evaluation:
        "ES/IS predictions benchmarked against expert labels across SVM, Multinomial Logistic Regression, Random Forest, XGBoost, and the fine-tuned RoBERTa (10-fold CV; IS F1=.62, ES F1=.68; 100-comment cross-verification: IS 65%, ES 75%). Content changes coded by 2 independent coders (κ=.78, substantial). User study: 24 participants, 3 writing tasks (counterbalanced Latin square), 5-point Likert confidence + satisfaction, SUS 88.0 (Excellent), and 15–25 min semi-structured exit interviews. Validated through a PCC Oral presentation at HHME 2026 and a Springer LNCS manuscript.",
      stack: [
        "Python", "Flask", "FastAPI", "PyTorch", "RoBERTa", "BERT (768-dim)",
        "LangChain", "DeepSeek LLM", "Sentence Transformers", "ChromaDB", "RAG",
        "Elasticsearch", "More-Like-This (tf-idf)", "LIWC-2015", "spaCy", "NLTK",
        "all-MiniLM-L6-v2", "Pushshift API", "ThreadPoolExecutor",
      ],
      sections: [
        {
          title: "System Architecture",
          body: `
            <p class="pd-lead">A decoupled, dual-mode inference stack — RoBERTa + LIWC scorer and Elasticsearch + BERT retrieval — coordinated through a Flask orchestration layer. The same safety gate wraps both modes so the LLM never surfaces un-moderated text.</p>
          `,
        },
        {
          title: "Engineering Brief — Three Hard Requirements",
          body: `
            <p class="pd-lead">Engineering brief: build a system that measurably improves supportive communication in mental-health communities — without trusting the LLM to be safe or factual on its own. The brief produced three hard engineering requirements.</p>
            <div class="pd-cards">
              <div class="pd-card"><h4>R1 · Measurable</h4><p>Support quality is scored, not guessed — a regression model over psycholinguistic features, benchmarked against expert labels (10-fold CV, F1, R²).</p></div>
              <div class="pd-card"><h4>R2 · Grounded</h4><p>Generation is retrieval-augmented — the LLM writes with real, high-quality examples in context, never from hallucination.</p></div>
              <div class="pd-card"><h4>R3 · Safe</h4><p>Every input and every generated candidate passes an LLM safety moderator — dangerous advice, self-harm encouragement, and toxicity are blocked or masked.</p></div>
              <div class="pd-card"><h4>Constraint-driven</h4><p>Scoring runs on local transformers (fast, private, free at inference); the LLM is reserved for generation + moderation where fluency matters. Every component degrades gracefully — the UI never crashes.</p></div>
            </div>
          `,
        },
        {
          title: "System Design — Layered Stack & API Surface",
          body: `
            <p class="pd-lead">Two processes, two modes, one safety gate: Flask owns UX and orchestration; FastAPI owns models, retrieval, generation, and moderation.</p>
            <ol>
              <li><strong>Client layer</strong> — browser templates (index.html, analyse.js) with preview / accept / submit flow.</li>
              <li><strong>Orchestration (Flask :5000)</strong> — <code>app.py</code> serves /assess and /recommend; feedback engine with threshold tiers + LIWC vectors; in-memory session store → record/*.json.</li>
              <li><strong>Model service (FastAPI :8000)</strong> — <code>backend_api.py</code> exposes /predict_scores and /recommend_candidates; TransformerPredictor (roberta_is, roberta_es), GenerativeRecommender (LLM + retrieval + threads), SafetyFilter (LLM moderation, in + out).</li>
              <li><strong>Models &amp; retrieval</strong> — RoBERTa IS/ES regressors, all-MiniLM-L6-v2 (384-d, code), BERT 768-d (paper), LIWC-2015 + NRC psycholinguistic lexicons.</li>
              <li><strong>Data layer</strong> — chroma_db vector store (RAG), record/*.json interaction logs, Elasticsearch (paper), dataset.csv rated comments.</li>
            </ol>
            <table style="width:100%;border-collapse:collapse;font-size:.85rem;margin:1.2rem 0">
              <thead><tr style="border-bottom:2px solid #8892b0"><th style="text-align:left;padding:.45rem .6rem">Endpoint</th><th style="text-align:left;padding:.45rem .6rem">Request</th><th style="text-align:left;padding:.45rem .6rem">Response</th></tr></thead>
              <tbody>
                <tr style="border-bottom:1px solid rgba(136,146,176,.25)"><td style="padding:.45rem .6rem"><code>Flask POST /assess</code></td><td style="padding:.45rem .6rem">{comment, click_event, op_text, is_final}</td><td style="padding:.45rem .6rem">{mode:"AF", IS_score, ES_score, feedback_1, feedback_2, details}</td></tr>
                <tr style="border-bottom:1px solid rgba(136,146,176,.25)"><td style="padding:.45rem .6rem"><code>Flask POST /recommend</code></td><td style="padding:.45rem .6rem">{comment, click_event, op_text, is_final}</td><td style="padding:.45rem .6rem">{mode:"RE", 0, 1, 2, descriptions}</td></tr>
                <tr style="border-bottom:1px solid rgba(136,146,176,.25)"><td style="padding:.45rem .6rem"><code>FastAPI POST /predict_scores</code></td><td style="padding:.45rem .6rem">{comment}</td><td style="padding:.45rem .6rem">{IS_score: 2.43, ES_score: 3.03}</td></tr>
                <tr><td style="padding:.45rem .6rem"><code>FastAPI POST /recommend_candidates</code></td><td style="padding:.45rem .6rem">{op_text, comment}</td><td style="padding:.45rem .6rem">{is_safe, reason?, candidates{1,2,3}}</td></tr>
              </tbody>
            </table>
          `,
        },
        {
          title: "Core Pipeline — Safety-Gated Control Flow",
          body: `
            <p class="pd-lead">The exact control flow from the codebase — safety-gated, constrained, parallel generation.</p>
            <pre style="background:#0d1117;color:#c9d1d9;padding:1rem;border-radius:8px;font-size:.78rem;line-height:1.5;overflow-x:auto"># backend_api.py → /recommend_candidates
def recommend_candidates(req):
    is_safe, reason = safety_filter.is_safe(req.comment)   # LLM gate · temp=0
    if not is_safe:
        return {"is_safe": False, "reason": reason}
    candidates = gen_recommender.generate_candidates(req.op_text, req.comment)  # 3 × LLM, parallel
    # per-candidate moderation, parallel
    with ThreadPoolExecutor(max_workers=3) as ex:
        for future in as_completed({ex.submit(check, k, v): k for k, v in candidates.items()}):
            key, safe, why = future.result()
            if not safe:
                candidates[key] = f"[Content Filtered: {why}]"
    return {"is_safe": True, "candidates": candidates}</pre>
            <ul>
              <li><strong>Mode A · Assessment</strong> — RoBERTa IS + ES regression → float scores; LIWC-2015 vector + TextBlob → explainable features; threshold tiers select the feedback opener; the weakest of ppron / social / posemo gets the targeted suggestion with 12 sampled LIWC words.</li>
              <li><strong>Mode B · Recommendation</strong> — LLM safety gate on the user's input; 3 constrained rewrites in parallel, each RAG-grounded; parallel safety check on all 3 outputs, unsafe ones masked; dedupe + rule-based fallback guarantees 3 distinct candidates.</li>
            </ul>
          `,
        },
        {
          title: "LLM & RAG Engineering — Two Temperatures, Double Moderation, Two Retrieval Generations",
          body: `
            <p class="pd-lead">One model (deepseek-chat via OpenAI SDK), two engineered jobs with deliberately different temperatures — creative generation at 0.7, deterministic moderation at 0.0.</p>
            <div class="pd-cards">
              <div class="pd-card"><h4>LLM · Two jobs</h4><p>Generation (temp 0.7) rewrites drafts; moderation (temp 0.0) decides safety. "Return ONLY the text" keeps LLM output clean for the UI.</p></div>
              <div class="pd-card"><h4>Double moderation</h4><p>Two passes per recommendation: an input gate before generation + a parallel per-candidate gate after — up to 4 moderation calls + 3 generations in two thread-pool waves. Fail-open on API errors so moderation never blocks valid traffic during an outage.</p></div>
              <div class="pd-card"><h4>RAG · Two generations</h4><p>The current codebase ships a ChromaDB RAG pipeline; the HHME 2026 paper documents the earlier two-stage Elasticsearch + BERT pipeline. Same principle — prove it with examples before you generate.</p></div>
            </div>
          `,
        },
        {
          title: "In Action — Live UI",
          body: `
            <p class="pd-lead">Real screenshots from the running application — the dual-mode writing assistant embedded in a mental-health forum task flow.</p>
            <div class="pd-gallery">
              <figure class="pd-screenshot"><img src="assets/bepsbot_ui_forum.png" alt="BepsBot forum post and reply flow" /><figcaption>Forum post context — the reply composer the assistant sits inside, with the preview-then-hide interaction.</figcaption></figure>
            </div>
          `,
        },
        {
          title: "Data Pipeline — 48K r/bipolar Pool + 3-Expert Annotation",
          body: `
            <p class="pd-lead">The data foundation is a 48,148-comment r/bipolar pool plus a 6-year general mental-health corpus from Reddit. From the bipolar pool, 450 comments were labeled on a 1–3 IS/ES scale by 3 domain experts with substantial inter-rater agreement (Cohen's κ > 0.85). LIWC-2015 was used for feature engineering; four feature groups — <em>length</em>, <em>personal pronouns</em>, <em>social</em>, and <em>positive emotion</em> — drive both the model and the AS-mode feedback logic.</p>
            <div class="pd-cards">
              <div class="pd-card"><h4>48,148</h4><p>comments in the r/bipolar data lake used for RE retrieval</p></div>
              <div class="pd-card"><h4>450</h4><p>gold-standard comments labeled by 3 domain experts (κ > 0.85)</p></div>
              <div class="pd-card"><h4>4</h4><p>LIWC-2015 feature groups: length · pronouns · social · positive emotion</p></div>
              <div class="pd-card"><h4>IS .62 / ES .68</h4><p>F1 score across 10-fold CV (best of SVM, MLR, RF, XGBoost, RoBERTa)</p></div>
            </div>
          `,
        },
        {
          title: "Assessment (AS) Mode — Conditional Feedback with LIWC Seeding",
          body: `
            <p class="pd-lead">AS mode surfaces one improvement suggestion at a time, conditioned on the current draft's predicted scores. Three design rules shape the flow: (1) the utterance reflects the current IS/ES scores; (2) the length-based issue is raised only at its first occurrence, and feature groups 2–4 are sampled with a random factor so no single feature dominates; (3) when promoting groups 2, 3, or 4, BepsBot randomly suggests 12 related words from the LIWC-2015 dictionary to seed serendipity for writing inspiration.</p>
            <figure class="pd-fig">
              <img src="assets/bepsbot_assessment.png" alt="BepsBot AS mode" />
              <figcaption>Figure 2 — AS mode: (i) IS/ES report and (ii) one feature-grounded improvement suggestion.</figcaption>
            </figure>
          `,
        },
        {
          title: "Recommendation (RE) Mode — 2-Stage Retrieval Pipeline",
          body: `
            <p class="pd-lead">RE mode returns three linguistically transformed versions of the user's current draft, each foregrounding a different supportive strategy. Retrieval is two-stage for near-real-time response: an Elasticsearch <em>More-Like-This</em> query selects 50 tf-idf-relevant candidates from the 48K-comment r/bipolar pool, which are then re-ranked by cosine similarity over 768-dimensional BERT embeddings. From the top candidates, BepsBot generates three revisions of the user's own draft, each applying one targeted transformation: (1) Personal Pronouns (<em>I, you, we, your</em>); (2) Family and Friends (LIWC <em>social</em>: <em>friend, family, together, community</em>); (3) Positive Words (LIWC <em>positive emotion</em>: <em>hope, care, brave, courage</em>).</p>
            <figure class="pd-fig">
              <img src="assets/bepsbot_re_pipeline.png" alt="BepsBot RE mode 2-stage retrieval" />
              <figcaption>Figure 3 — RE mode: 2-stage retrieval pipeline (Elasticsearch More-Like-This → BERT cosine) and the three targeted transformations.</figcaption>
            </figure>
          `,
        },
        {
          title: "User Study — 24 Participants, SUS 88.0, κ=.78",
          body: `
            <p class="pd-lead">A within-subjects longitudinal study with 24 participants (12F/12M, age 22–33, M=27.75, SD=3.40) recruited from online mental-health peer-support platforms. Each participant completed three writing tasks (T1–T3) in a counterbalanced Latin square, composing supportive comments in response to three posts authored by self-identified individuals with bipolar disorder.</p>
            <div class="pd-highlights">
              <div class="pd-highlight"><div class="ph-num">SUS 88.0</div><div class="ph-label">SD=11.4 · 70.8% Grade A (vs 68 industry avg)</div></div>
              <div class="pd-highlight"><div class="ph-num">32.3%</div><div class="ph-label">task time reduction T1→T3 (11.21→7.59 min)</div></div>
              <div class="pd-highlight"><div class="ph-num">100% / 87.5%</div><div class="ph-label">Assessment-first rate at T1 / T3</div></div>
              <div class="pd-highlight"><div class="ph-num">rs=.552</div><div class="ph-label">T3 IS × T3 confidence (p=.005, Bonferroni)</div></div>
            </div>
            <p>Communication quality was coded by 2 independent coders (Cohen's κ=.78, substantial) on a 1–3 IS/ES rubric. Behavioral logs and 15–25 minute semi-structured exit interviews were analyzed via reflexive thematic analysis. Three user-pattern archetypes emerged: Pattern A Validation (26/39, 66.7% — used AS as a confirmation signal, submitted unchanged), Pattern B Selective Integration (8/39, 20.5%), and Pattern C Full Replacement (5/39, 12.8% — raised autonomy concerns about authorship).</p>
          `,
        },
        {
          title: "Engineering Stack & Reliability",
          body: `
            <p class="pd-lead">The full stack, plus the reliability and security engineering around it.</p>
            <div class="pd-cards">
              <div class="pd-card"><h4>Services</h4><p>Python · Flask · FastAPI · uvicorn · Pydantic</p></div>
              <div class="pd-card"><h4>Models</h4><p>PyTorch · Transformers · RoBERTa · BERT · sentence-transformers</p></div>
              <div class="pd-card"><h4>Retrieval</h4><p>Elasticsearch More-Like-This · ChromaDB · LangChain</p></div>
              <div class="pd-card"><h4>LLM</h4><p>DeepSeek (deepseek-chat) · OpenAI SDK · prompt engineering</p></div>
              <div class="pd-card"><h4>NLP features</h4><p>LIWC-2015 · NRC · spaCy · NLTK · TextBlob</p></div>
              <div class="pd-card"><h4>ML tooling</h4><p>scikit-learn · XGBoost · pandas · datasets · evaluate</p></div>
              <div class="pd-card"><h4>Concurrency</h4><p>ThreadPoolExecutor — parallel generation + moderation</p></div>
              <div class="pd-card"><h4>Frontend</h4><p>HTML · Bootstrap 3 · jQuery · vanilla JS</p></div>
            </div>
            <p><strong>Reliability &amp; security</strong> — all credentials via environment variables (.env gitignored); LLM moderation on both input and output (self-harm, harmful medical advice, toxicity); Elasticsearch over HTTPS + basic auth + CA verification; sensitive data (record/, chroma_db/, models/) excluded from git. <strong>MLOps loop</strong> — record/ → clean &amp; safety-filter → pseudo-label with current models → append CSV → retrain RoBERTa → validate (MSE / R² / safety pass rate) → promote to serving path → monitor drift (score shift, fallback rate, block rate).</p>
          `,
        },
        {
          title: "Discussion — Voice Preservation, Confirmation, Autonomy",
          body: `
            <p class="pd-lead">The study surfaced a non-obvious finding: evaluative feedback primarily functions as a <em>confirmation mechanism</em>, not a revision trigger. Most participants (66.7%) submitted comments identical to their pre-AI draft after using AS as a validation checkpoint. Five participants actively refused RE mode on identity grounds, arguing the suggestions felt "too robotic" or threatened their experiential authority. Rather than a failure, this represents a legitimate user position: <em>voice preservation</em>.</p>
            <div class="pd-callout"><b>Design implication:</b> AI writing support in mental-health communities should move beyond automation toward augmenting reflection and expression. Future systems should emphasize evaluative transparency, contextual sensitivity, and preservation of user authorship. The 12.8% Full-Replacement pattern shows that retrieval-based, non-contextual exemplars are occasionally perceived as contextually limited — motivating adaptive, context-aware generation as the next step.</div>
            <p class="pd-lead">Open limitations: 24 participants limits generalizability; 3 sessions captures only early-stage adaptation; RE relies on retrieval-based exemplars (not generative). Future work should also examine how support <em>recipients</em> perceive AI-assisted peer responses in terms of authenticity, trust, and emotional impact.</p>
          `,
        },
      ],
      links: [
        { label: "GitHub", url: "https://github.com/Minhaz2858/Bepsbot", external: true },
        { label: "HHME 2026 PCC Paper", url: "https://hhme.ccf.org.cn/PCC_paper.html", external: true },
        { label: "Interactive Presentation", url: "bepsbot/Bepsbot_Portfolio_Presentation.html", external: false },
      ],
    },
    {
      id: "sprout",
      title: "SPROUTH — Shape-changing Meditation Device",
      short: "Bio-inspired shape-changing device that helps students transform fear of failure into growth mindset (5-person team, ITDP course).",
      category: "Embedded & IoT",
      period: "Sep 2023 – Dec 2023",
      org: "Zhejiang University · ITDP Final Project",
      role: "System & Embedded Designer (System · Coding · Circuit · Testing · Docs)",
      image: "assets/sprout_hero.png",
      video: null,
      summary:
        "A bio-inspired, shape-changing interactive device that helps university students transform three linked psychological stressors — high academic self-expectations, fear of failure (FOF), and difficulty cultivating a growth mindset — into reflection and resilience. Built as a 5-person team final project for the Interaction Technology and Design Practice course at Zhejiang University. The system integrates an Arduino Mega 2560 with an RFID reader, stepper motor + linear slider, DFPlayer Mini sound module, 8 LEDs, an HC-SR04 ultrasonic sensor, a 3D-printed PLA housing, and a laser-cut 80 GSM paper grass pattern — all orchestrated into a 4-stage meditation workflow.",
      highlights: [
        { num: "3", label: "target stressors · FOF · self-expectations · growth mindset" },
        { num: "10", label: "hardware components · Arduino Mega 2560 + 9 peripherals" },
        { num: "4", label: "stage meditation workflow · place seed → meditate → water → grow" },
        { num: "3", label: "hardware + 3 pattern + 3 material iterations to final" },
      ],
      problem:
        "University students face three linked psychological stressors — high academic self-expectations, fear of failure (FOF), and difficulty cultivating a growth mindset. Existing interventions are either intrusive, disconnected from daily campus life, or treat the problem as a single deficit rather than as a connected mindset loop. SPROUTH intervenes at the dorm desk or workstation lab — the places students actually live and work — through a non-intrusive, private, bio-inspired ritual.",
      roleDetail:
        "Designed the end-to-end system workflow and selected all sensors. Implemented the full Arduino Mega 2560 firmware in C/C++: RFID scan (MFRC522, SPI on pins 50–52), 8-LED sequencing on pins 15–18 and 22–25, stepper motor at 60 RPM on pins 4–7, DFPlayer Mini audio over SoftwareSerial on pins 10–11, HC-SR04 proximity detection, and the reset handler on pin 14. Built the complete circuit diagram. Led final assembly and functional integration testing. Authored the technical sections of the 71-page final report.",
      architecture:
        "Arduino Mega 2560 (ATmega2560, 54 digital I/O, 16 analog inputs) as the central controller. (1) Input layer — RFID-RC522 (13.56 MHz, SPI on pins 50–52) for user identity; HC-SR04 ultrasonic sensor for watering-cup proximity. (2) Output layer — a 200 steps/revolution stepper motor + linear slider at 60 RPM (pins 4–7) drives a 3D-printed plant tray; DFPlayer Mini MP3 module (SoftwareSerial on pins 10–11) plays wind + water-flow audio at volume 30; 8 LEDs (4 blue on pins 22–25 for meditation loading, 4 green on pins 15–18 for grass growth). (3) Reset — push button on pin 14 returns the system to the initial state. (4) Enclosure — 3D-printed PLA housing designed in Fusion 360 with cable management and a user interaction panel; laser-cut 80 GSM paper grass pattern (3rd pattern iteration) at 400 units/min, 10% power, vectorized in Adobe Illustrator.",
      algorithm:
        "Non-blocking 4-stage state machine: (1) IDLE — user places the seed-shaped RFID card on the reader; (2) MEDITATE — timer starts, the 4 blue LEDs (22/23/24/25) light up sequentially, and ambient wind-blowing audio plays on the DFPlayer Mini; (3) WATER — the user brings the watering cup close (HC-SR04 proximity detected), the 4 green LEDs (15/16/17/18) light up sequentially, water-flowing audio plays, and the stepper motor moves the plant tray to simulate grass growth; (4) COMPLETE — the user presses the reset push-button (pin 14) to restart. Each stage uses non-blocking timing so the workflow remains responsive and meditative.",
      methodology: [
        "Conducted contextual inquiry as a 5-person team to identify 3 target stressors: high academic self-expectations, fear of failure (FOF), and lack of growth mindset.",
        "Iterated 3 hardware concepts: (i) growing plant + seed, (ii) plant + 3 sliders for growth stages, (iii) plant + watering cup with HC-SR04 ultrasonic sensor + audio feedback.",
        "Tested 3 grass pattern iterations in Adobe Illustrator (varying leaf-unit count); the 3rd with the fewest units gave the lowest motor resistance.",
        "Tested 3 paper materials (250 GSM, 180 GSM, 80 GSM); 80 GSM was the only material flexible enough for the motor to bend it cleanly.",
        "Prototyped the enclosure in Fusion 360, 3D-printed it in PLA, and laser-cut the grass pattern at 400 units/min on 10% power.",
        "Wired the full circuit (RFID SPI bus, stepper control pins 4–7, sound on pins 10–11, 8 LEDs on 15–18/22–25, push button on 14).",
        "Implemented the firmware in C/C++ on Arduino IDE using SPI, MFRC522, Stepper, and DFRobotDFPlayerMini + SoftwareSerial libraries.",
        "Ran end-to-end functional tests on the assembled prototype: LED sequence, stepper precision, audio playback, reset reliability.",
      ],
      features: [
        "Bio-inspired shape-changing interaction — laser-cut paper grass bends via a stepper-driven linear slider",
        "RFID-RC522 (13.56 MHz) card activation — physical seed metaphor for the meditation trigger",
        "8-LED sequential feedback — 4 blue for meditation loading, 4 green for grass growth",
        "HC-SR04 ultrasonic proximity detection — simulates watering when the cup approaches the seed",
        "DFPlayer Mini audio feedback — wind-blowing and water-flowing ambient sounds at volume 30",
        "Non-blocking 4-stage state machine — place seed → meditate → water → grow",
        "Reset push-button on pin 14 — restores initial state without manual intervention",
        "Privacy-conscious, dorm-friendly form factor — fits on a study desk, used alone or socially",
      ],
      impact:
        "Delivered a working bio-inspired meditation prototype integrating 10 hardware components into a 3D-printed + laser-cut enclosure. The 4-stage workflow was validated end-to-end through functional testing: LEDs illuminated in the correct sequence, the stepper motor moved precisely with no stalling or misalignment, the DFPlayer Mini played audio without delay or distortion, and the reset switch reliably returned the system to its default state across 5 test cycles. Published as a 5-person team final report for the Interaction Technology and Design Practice course at Zhejiang University (Jan 2, 2024).",
      evaluation:
        "End-to-end functional testing of the assembled prototype confirmed all subsystems operated in synchronization: 8 LEDs illuminated in the correct sequence, the stepper motor moved precisely with no stalling or misalignment, the DFPlayer Mini played audio without delay or distortion, and the reset switch reliably returned the system to its default state. The 3D-printed housing and laser-cut grass pattern were seamlessly integrated with the electronics, enhancing both aesthetic appeal and operational performance. Validated as a 5-person team final project for the ITDP course at Zhejiang University, January 2, 2024.",
      stack: [
        "Arduino Mega 2560 (ATmega2560)", "C/C++ (Arduino IDE)",
        "RFID-RC522 (13.56 MHz, SPI)", "HC-SR04 Ultrasonic Sensor",
        "Stepper Motor + Linear Slider (200 steps/rev, 60 RPM)",
        "DFPlayer Mini MP3 Module", "8 LEDs + 220Ω Resistors", "Push Button (Reset)",
        "SPI (RFID)", "SoftwareSerial (DFPlayer)", "Digital I/O (LEDs + stepper + sound + button)",
        "Fusion 360 (3D)", "Adobe Illustrator (2D)",
        "3D Printing (PLA)", "Laser Cutting (80 GSM paper, 400 units/min, 10% power)",
      ],
      sections: [
        {
          title: "Bio-Inspiration — Seed Navigating Rocky Soil",
          body: `
            <p class="pd-lead">SPROUTH draws its metaphor from a seed navigating rocky soil to grow into a plant — reframing academic obstacles as opportunities for growth and learning. The emotional design creates a tangible connection between the user and the narrative of resilience, providing a sense of empowerment and hope. The "planting a seed" interaction is the literal activation of the device: the user places the seed in its pocket, triggering the system.</p>
            <figure class="pd-fig">
              <img src="assets/sprout_emotional.jpg" alt="Emotional design rationale" />
              <figcaption>Figure 1 — Why "emotional"? The bio-inspired metaphor is what turns a hardware demo into a mindset tool.</figcaption>
            </figure>
          `,
        },
        {
          title: "Design Iterations — From Seed to Watering Cup",
          body: `
            <p class="pd-lead">Three hardware concepts were prototyped before finalizing SPROUTH: (1) a growing plant + seed that activates grass growth; (2) the same seed mechanism plus three sliders for growth stages; (3) the seed plus a <em>watering cup</em> that uses an HC-SR04 ultrasonic sensor to detect proximity, plus audio feedback. Only the third concept aligned the system with the user's mindfulness loop. In parallel, three grass pattern iterations were tested in Adobe Illustrator (varying leaf-unit count) and three paper materials (250 GSM, 180 GSM, 80 GSM) — the 3rd pattern with the fewest leaves on 80 GSM paper was the only combination that let the stepper motor bend the paper cleanly.</p>
            <figure class="pd-fig">
              <img src="assets/sprout_intro.png" alt="Design iteration introduction" />
              <figcaption>Figure 2 — Iterative concept exploration; only the watering-cup design resolved the system-vs-purpose mismatch.</figcaption>
            </figure>
          `,
        },
        {
          title: "System Architecture — Arduino Mega 2560 + 9 Peripherals",
          body: `
            <p class="pd-lead">The Arduino Mega 2560 (ATmega2560, 54 digital I/O, 16 analog inputs) is the central controller. Input layer: an <b>RFID-RC522</b> (13.56 MHz, SPI on pins 50–52) reads user identity; an <b>HC-SR04 ultrasonic sensor</b> detects watering-cup proximity. Output layer: a <b>stepper motor + linear slider</b> (200 steps/rev, 60 RPM, pins 4–7) drives a 3D-printed plant tray; a <b>DFPlayer Mini MP3 module</b> (SoftwareSerial on pins 10–11) plays ambient wind + water-flow audio; <b>8 LEDs</b> (4 blue on pins 22–25 for meditation, 4 green on pins 15–18 for growth) provide sequential feedback. A <b>push button on pin 14</b> resets the system. The enclosure is a 3D-printed PLA housing designed in Fusion 360 with cable management and a user interaction panel; the grass is laser-cut from 80 GSM paper at 400 units/min, 10% power.</p>
            <figure class="pd-fig">
              <img src="assets/sprout_structure.png" alt="Internal product structure" />
              <figcaption>Figure 3 — Internal structure: Arduino Mega 2560 + RFID + stepper + sound module + 8 LEDs in a 3D-printed PLA housing.</figcaption>
            </figure>
          `,
        },
        {
          title: "The 4-Stage Meditation Workflow",
          body: `
            <p class="pd-lead">A non-blocking state machine drives the user through four meditative stages:</p>
            <ol>
              <li><b>IDLE</b> — the user places the seed-shaped RFID card on the reader; the system activates.</li>
              <li><b>MEDITATE</b> — a timer starts, the 4 blue LEDs (22/23/24/25) light up sequentially, and ambient wind-blowing audio plays on the DFPlayer Mini.</li>
              <li><b>WATER</b> — the user brings the watering cup close to the seed; the HC-SR04 ultrasonic sensor detects proximity, the 4 green LEDs (15/16/17/18) light up sequentially, water-flowing audio plays, and the stepper motor moves the plant tray to "grow" the grass.</li>
              <li><b>COMPLETE</b> — the user presses the reset push-button (pin 14) to restart the session.</li>
            </ol>
            <figure class="pd-fig">
              <img src="assets/sprout_views.png" alt="Final prototype, general views" />
              <figcaption>Figure 4 — Final SPROUTH prototype in its intended dorm/lab scenario.</figcaption>
            </figure>
          `,
        },
        {
          title: "Code & Circuit — Full Firmware Implementation",
          body: `
            <p class="pd-lead">The firmware is written in C/C++ on Arduino IDE and uses four libraries: <b>SPI</b> (RFID), <b>MFRC522</b> (RFID protocol), <b>Stepper</b> (motor control), and <b>DFRobotDFPlayerMini + SoftwareSerial</b> (audio). The complete pin map: <code>RST_PIN=9, RFID_CS_PIN=8, LED1–4 on 22/23/25/24, LED5–8 on 15/17/16/18, SWITCH_PIN=14, STEPPER_PIN1–4 on 4/5/6/7, SOUND_RX_PIN=10, SOUND_TX_PIN=11</code>. The main loop continuously monitors the reset switch and the RFID reader; the reset handler turns off all 8 LEDs, steps the motor back +450 steps to the start, stops audio, and clears state.</p>
            <figure class="pd-fig">
              <img src="assets/sprout_coding.png" alt="Coding / firmware" />
              <figcaption>Figure 5 — Firmware structure: pin definitions, RFID scan, sequential LED activation, stepper movement, audio playback, reset.</figcaption>
            </figure>
          `,
        },
        {
          title: "Dimensions & Form Factor",
          body: `
            <p class="pd-lead">SPROUTH is sized to fit comfortably on a university dorm desk or workstation lab — compact enough to be unobtrusive during study sessions, rest periods, and social interactions, yet large enough to house the Arduino Mega 2560, the RFID reader, the stepper motor + slider, the sound module, and the LED array. The 3D-printed enclosure includes a guide rail and platform that work seamlessly with the stepper motor's linear slider, plus cable management channels to keep wiring clean.</p>
            <figure class="pd-fig">
              <img src="assets/sprout_dimensions.png" alt="Dimensions" />
              <figcaption>Figure 6 — Physical dimensions of the SPROUTH prototype.</figcaption>
            </figure>
          `,
        },
        {
          title: "Bio-Inspired Form & Aesthetic",
          body: `
            <p class="pd-lead">The enclosure emulates the journey of a seed through soil, with the laser-cut paper grass pattern providing a vibrant green texture that abstracts the look of real grass. Cutting was performed at 400 units/min on only 10% of the laser's total power — a configuration that maximized cutting speed while minimizing material waste and improving finished-edge quality.</p>
            <figure class="pd-fig">
              <img src="assets/sprout_bio.jpg" alt="Bio-inspired form" />
              <figcaption>Figure 7 — Bio-inspired form factor: the seed, the soil, the growing grass.</figcaption>
            </figure>
          `,
        },
        {
          title: "Testing & Integration — Functional Validation",
          body: `
            <p class="pd-lead">End-to-end functional testing of the assembled prototype confirmed all subsystems operated in synchronization:</p>
            <ul>
              <li>8 LEDs illuminated in the correct sequence with no flicker or race conditions.</li>
              <li>The stepper motor moved precisely (no stalling or misalignment) at 60 RPM.</li>
              <li>The DFPlayer Mini played audio files without delay or distortion at volume 30.</li>
              <li>The reset switch reliably returned the system to its default state across all 5 test cycles.</li>
              <li>The 3D-printed housing and laser-cut grass pattern integrated seamlessly with the electronics, enhancing both aesthetic appeal and operational performance.</li>
            </ul>
            <div class="pd-callout"><b>Team contribution:</b> Minhazul Islam — system design, firmware, circuit diagram, prototype testing, technical documentation, media documentation. Tasnim Afra — literature review, 85% of the report, media documentation. Mathule Makoma — background research, 3D sketching, CAD/3D-printing/laser-cutting. Gabriela Sanchez — concept visualisation, graphics, presentation. Fahim Rana — soldering, assembly, MP3 file editing, connection verification.</div>
          `,
        },
      ],
      links: [
        { label: "GitHub", url: "https://github.com/Minhazul249602/SPROUT", external: true },
        { label: "Final Report (PDF)", url: "docs/sprout/Final_Report.pdf", external: false },
      ],
    },
    {
      id: "inventor",
      title: "Autodesk Inventor API — Parametric CAD Automation",
      short: "Python system that drives Autodesk Inventor models from key dimensions.",
      category: "Automation",
      period: "Apr 2024 – Aug 2024",
      org: "ProFabx",
      role: "Software Engineer",
      image: null,
      video: "assets/api.mp4",
      summary:
        "Created a parametric modeling system using Python to dynamically update Autodesk Inventor 3D models by modifying key dimensions — automating repetitive CAD tasks and dramatically reducing design time and manual errors.",
      highlights: [
        { num: "40%", label: "design-process time saved" },
        { num: "0", label: "manual dimension edits needed" },
        { num: "2", label: "CAD platforms automated (Inventor + Fusion)" },
        { num: "100%", label: "repetitive task automation" },
      ],
      problem:
        "Manual CAD modeling is slow and error-prone: every design revision requires engineers to redraw or re-dimension models, and repetitive modeling tasks consume significant design time.",
      roleDetail:
        "Designed and built the parametric modeling system, wrote the Python/win32com automation layer, and integrated a JavaScript web interface for real-time parameter-driven updates.",
      architecture:
        "Python scripting layer communicating with Autodesk Inventor through its COM API (win32com.client). Key dimensions are exposed as parameters; a JavaScript web interface lets users modify parameters and see the 3D model update dynamically.",
      algorithm:
        "Parametric constraint propagation: model dimensions are bound to named parameters; updating a parameter triggers automatic propagation of changes through the entire design via Inventor's parametric engine.",
      methodology: [
        "Mapped Inventor model dimensions to a parametric schema.",
        "Built Python scripts using win32com.client to read/write dimensions and rebuild geometry.",
        "Created a JavaScript web interface for real-time parameter changes.",
        "Integrated automation into mechanical design workflows to eliminate repetitive tasks.",
        "Measured and validated the time savings across design iterations.",
      ],
      features: [
        "Dynamic 3D model updates driven by parameter changes",
        "Web interface for real-time dimension editing",
        "Automation of repetitive CAD modeling tasks",
        "Seamless Python ↔ Inventor API integration",
      ],
      impact:
        "Reduced design time by ~40% by automating repetitive modeling tasks and eliminating manual dimension errors across complex projects.",
      evaluation:
        "Design iterations benchmarked before/after automation; the parametric system propagated dimension changes reliably with zero manual rework.",
      stack: ["Python", "Autodesk Inventor", "win32com.client", "JavaScript", "Fusion 360"],
      links: [
        { label: "GitHub", url: "https://minhazulzju.github.io/Autodesk-Inventor-API-with-Python-/", external: true },
      ],
    },
    {
      id: "inclusivevision",
      title: "InclusiveVision — Smart Glasses for the Visually Impaired",
      short: "Wearable ultrasonic obstacle-detection glasses with voice alerts.",
      category: "Embedded & IoT",
      period: "Dec 2023",
      org: "Zhejiang University",
      role: "Embedded Developer & Designer",
      image: "assets/smart_glass.jpg",
      video: null,
      summary:
        "Developed a functional prototype of smart glasses using an Arduino UNO and ultrasonic sensors, achieving real-time obstacle detection up to 50 cm with an immediate voice alert system — enhancing independence and safety for visually impaired users.",
      highlights: [
        { num: "50cm", label: "real-time obstacle detection" },
        { num: "5", label: "sensors integrated" },
        { num: "3D", label: "printed optimized frame" },
        { num: "Instant", label: "auditory voice feedback" },
      ],
      problem:
        "Visually impaired individuals need a safe, comfortable, and affordable way to detect obstacles while moving — traditional canes and guide dogs have limitations in coverage and availability.",
      roleDetail:
        "Designed the wearable system, developed the embedded firmware, 3D-modeled the glasses frame, and integrated the ultrasonic sensor array.",
      architecture:
        "Arduino UNO with an integrated array of ultrasonic sensors for obstacle detection; a Talkie-library voice system provides immediate auditory feedback based on sensor data. The frame was 3D-modeled in Fusion 360 and fabricated via Flashforge 3D printing and laser cutting.",
      algorithm:
        "Multi-sensor distance thresholding: each ultrasonic sensor continuously measures distance; when an obstacle enters a set range (up to 50 cm), the system prioritizes the nearest reading and triggers a corresponding spoken alert through the Talkie library.",
      methodology: [
        "Selected and integrated ultrasonic sensors for wide spatial coverage.",
        "Implemented distance-sensing logic with the Arduino UNO.",
        "Built a voice-alert system with the Talkie library for immediate feedback.",
        "Designed the wearable glasses frame in Fusion 360, optimizing comfort.",
        "Fabricated and assembled the integrated multi-sensor component.",
      ],
      features: [
        "Real-time obstacle detection up to 50 cm",
        "Immediate auditory voice alerts",
        "Multi-sensor array for wide coverage",
        "Optimized wearable 3D-printed frame",
      ],
      impact:
        "Produced a working assistive prototype that enhances the independence and safety of visually impaired users with a lightweight, low-cost wearable form factor.",
      evaluation:
        "Obstacle detection range and alert reliability validated across multiple distances and angles in real environments.",
      stack: ["Arduino UNO", "Ultrasonic Sensors", "Talkie Library", "Fusion 360", "Flashforge 3D Printing", "Laser Cutting"],
      links: [
        { label: "Project Page", url: "https://nexmaker-fab.github.io/2023zjudem-The-Dynamic-Seven/#/FINALPROJECT/final", external: true },
      ],
    },
    {
      id: "recommendation",
      title: "Product Recommendation System — Collaborative Filtering",
      short: "Matrix-factorization recommendations on the goodbooks-10k dataset.",
      category: "Machine Learning",
      period: "2022 – 2023",
      org: "Yunnan University",
      role: "Machine Learning Developer",
      image: null,
      video: null,
      summary:
        "Developed a collaborative filtering recommendation strategy for the goodbooks-10k dataset using matrix factorization, with Python data analysis and visualization to generate accurate, personalized book recommendations.",
      highlights: [
        { num: "10k", label: "books in the dataset" },
        { num: "MF", label: "matrix-factorization model" },
        { num: "Euclidean", label: "similarity analysis" },
        { num: "4", label: "libraries: NumPy · Pandas · Matplotlib · Flask" },
      ],
      problem:
        "Users need accurate, personalized book recommendations from sparse, high-dimensional rating data — naive popularity-based approaches fail to capture individual taste.",
      roleDetail:
        "Implemented the full pipeline: data analysis, similarity computation, matrix-factorization modeling, and a Flask demo serving recommendations.",
      architecture:
        "Python data pipeline (NumPy, Pandas, Matplotlib) feeding a matrix-factorization recommendation model, exposed through a Flask web interface backed by MongoDB.",
      algorithm:
        "Collaborative filtering via matrix factorization: latent user and item factors learned from the rating matrix produce personalized predictions. Euclidean distance measures book similarity to support recommendation quality and explainability.",
      methodology: [
        "Explored and preprocessed the goodbooks-10k dataset with Pandas.",
        "Applied Euclidean distance to analyze similarity between books.",
        "Trained a matrix-factorization model for personalized suggestions.",
        "Visualized data and results with Matplotlib.",
        "Exposed recommendations through a Flask application with MongoDB storage.",
      ],
      features: [
        "Personalized collaborative-filtering recommendations",
        "Matrix-factorization latent-factor model",
        "Similarity-based analysis with Euclidean distance",
        "Data analysis and result visualization",
      ],
      impact:
        "Produced accurate, personalized suggestions validated on the goodbooks-10k dataset, demonstrating the full data-science lifecycle from exploration to a deployed recommendation service.",
      evaluation:
        "Recommendation quality assessed via similarity coherence and qualitative inspection of generated suggestions against user reading patterns.",
      stack: ["Python", "NumPy", "Pandas", "MongoDB", "Matplotlib", "Flask"],
      links: [
        { label: "GitHub", url: "https://github.com/Minhazul249602/Product-Recommendation-System-Based-on-collaborative-algorithm/tree/main/20193290764%20Minhazul%20islam", external: true },
      ],
    },
    {
      id: "iot-attendance",
      title: "IoT-based Smart Attendance System with Face Recognition",
      short: "Contact-free ESP32-CAM attendance with secure IoT-cloud storage.",
      category: "Embedded & IoT",
      period: "2022",
      org: "Yunnan University",
      role: "Embedded Systems Developer",
      image: null,
      video: null,
      summary:
        "Developed a smart, IoT-based attendance system using an ESP32-CAM for facial recognition — automatically detecting, recognizing, and registering students, storing data in an IoT cloud via HTTPS with a secure, proxy-proof workflow.",
      highlights: [
        { num: "LBPH", label: "face-recognition algorithm" },
        { num: "100%", label: "contact-free workflow" },
        { num: "HTTPS", label: "secure cloud storage" },
        { num: "0", label: "proxy attendance allowed" },
      ],
      problem:
        "Traditional manual and contact-based biometric attendance systems are slow, unsafe (COVID-19 era), and vulnerable to proxy attendance.",
      roleDetail:
        "Developed the embedded facial-recognition system, secure authentication workflow, IoT-cloud data storage, and proxy-prevention logic.",
      architecture:
        "ESP32-CAM captures and processes faces on the edge; registered students are validated and their attendance stored in an IoT cloud database over HTTPS. A web layer lets managers monitor records and generate reports.",
      algorithm:
        "LBPH (Local Binary Patterns Histogram) face recognition with OpenCV-style detection on the ESP32-CAM: faces are enrolled as registered users, and attendance is only accepted for validated registrations, blocking proxy attendance.",
      methodology: [
        "Configured ESP32-CAM for real-time facial capture and recognition.",
        "Implemented a secure authentication workflow that detects, recognizes, and registers students.",
        "Stored attendance records in the IoT cloud via HTTPS.",
        "Designed a contact-free flow to address COVID-19 safety concerns.",
        "Validated registered users only — eliminating proxy attendance.",
      ],
      features: [
        "Automated face-based attendance capture",
        "Secure HTTPS IoT-cloud storage",
        "Contact-free, COVID-safe design",
        "Proxy-attendance prevention via registration validation",
      ],
      impact:
        "Delivered a reliable, secure attendance system that removed manual processes and contact-based biometrics while preventing proxy attendance.",
      evaluation:
        "Recognition accuracy and workflow reliability validated in a live dormitory environment.",
      stack: ["ESP32-CAM", "Arduino IDE/C++", "Embedded Systems", "HTTPS", "IoT Cloud"],
      links: [
        { label: "Project Page", url: "https://minhazulzju.github.io/IOT-Based-Dormitory-Attendance-System/#conclusion", external: true },
      ],
    },
  ],

  publications: [
    {
      id: "C.1",
      title: "Exploring Psychologist-Applied Biomarkers in Bipolar Disorder: A Systematic Framework",
      venue: "Entertainment Computing – ICEC 2025 IFIP TC 14 Workshops: Tokyo, Japan, August 27–30, 2025, Proceedings",
      venueShort: "ICEC 2025 · Tokyo, Japan · Aug 2025",
      type: "conference",
      authors: [
        { name: "Minhazul Islam", me: true },
        { name: "Mengru Xue", me: false },
        { name: "Tasnim Afra", me: false },
      ],
      impact: "Systematic review mapping psychologist-applied biomarkers (sleep, activity, mood) to bipolar-disorder state changes — informing digital-phenotyping designs for peer-support tools.",
      doi: "10.1007/978-3-032-02534-0_8",
      pages: "61–75",
      published: "27 August 2025",
      year: 2025,
    },
    {
      id: "C.2",
      title: "Enhancing Biofeedback Interventions for Depression and Anxiety Through Entertainment Computing: A Systematic Review",
      venue: "Entertainment Computing – ICEC 2025 IFIP TC 14 Workshops: Tokyo, Japan, August 27–30, 2025, Proceedings",
      venueShort: "ICEC 2025 · Tokyo, Japan · Aug 2025",
      type: "conference",
      authors: [
        { name: "Tasnim Afra", me: false },
        { name: "Mengru Xue", me: false },
        { name: "Minhazul Islam", me: true },
      ],
      impact: "Systematic review of biofeedback interventions delivered through entertainment computing — identifying design patterns that improve engagement and clinical outcomes.",
      doi: "10.1007/978-3-032-02534-0_6",
      pages: "37–51",
      published: "27 August 2025",
      year: 2025,
    },
    {
      id: "PCC.1",
      title: "BepsBot: A Dual-Mode Writing Assistant for Peer Support in Bipolar Disorder Communities",
      venue: "HHME 2026 — PCC Paper Presentation · Zhejiang University",
      venueShort: "HHME 2026 · Zhejiang University",
      type: "pcc",
      authors: [
        { name: "Minhazul Islam", me: true },
        { name: "Mengru Xue", me: false },
        { name: "Tasnim Afra", me: false },
      ],
      impact: "Within-subjects study (N=24): draft-grounded generation more than doubled suggestion adoption (33.3% → 75.6%) while preserving usability (SUS 86.98).",
      status: "PCC Oral Presentation · 17 August 2026",
      conferenceUrl: "https://hhme.ccf.org.cn/PCC_paper.html",
      doi: null,
      pages: null,
      published: "17 August 2026",
      year: 2026,
    },
    {
      id: "PCC.2",
      title: "How Should Voice Agents Respond to Anger and Sadness? A Comparison of Empathic Response, Affect-Neutral Acknowledgment, and Cognitive Reappraisal",
      venue: "HHME 2026 — PCC Paper Presentation · Zhejiang University",
      venueShort: "HHME 2026 · Zhejiang University",
      type: "pcc",
      authors: [
        { name: "Tasnim Afra", me: false },
        { name: "Mengru Xue", me: false },
        { name: "Minhazul Islam", me: true },
      ],
      impact: "Comparative study across three response strategies identifies the conditions under which empathic responses outperform affect-neutral and cognitive-reappraisal framings for distressed users.",
      status: "PCC Oral Presentation · 17 August 2026",
      conferenceUrl: "https://hhme.ccf.org.cn/PCC_paper.html",
      doi: null,
      pages: null,
      published: "17 August 2026",
      year: 2026,
    },
  ],

  education: [
    {
      degree: "Masters in Industrial Design Engineering",
      school: "Zhejiang University",
      period: "Sep 2023 – Dec 2026 (Expected)",
      location: "Zhejiang, China",
    },
    {
      degree: "Bachelor in Computer Science and Technology",
      school: "Yunnan University",
      period: "2019 – 2023",
      location: "Kunming, China",
    },
  ],

  certifications: [
    {
      title: "Generative AI with Large Language Models",
      issuer: "DeepLearning.AI",
      date: "Nov 2025",
      note: "LLM lifecycle, scaling laws, PEFT & LoRA, RLHF for human alignment.",
      url: null,
    },
    {
      title: "Mastering Generative AI: Fine-Tuning Transformers",
      issuer: "IBM",
      date: "Oct 2025",
      note: "BERT/RoBERTa fine-tuning, quantization (QLoRA), custom tokenization.",
      url: null,
    },
    {
      title: "Developing Generative AI Applications with Python",
      issuer: "IBM",
      date: "Oct 2025",
      note: "Flask + IBM Watson + OpenAI APIs, containerized voice assistants with Docker and Gradio.",
      url: null,
    },
    {
      title: "Python for AI & Development Project",
      issuer: "IBM",
      date: "Sep 2025",
      note: "Pytest, static code analysis, packaging, data cleaning and feature engineering.",
      url: null,
    },
  ],

  achievements: [
    {
      title: "United Nations Technology Bank — Global Youth Talent Program 2023",
      text: "Selected among top young designers worldwide for a prestigious UN program, recognized for innovative 3D design and engineering solutions. Participated in a curriculum focused on bridging advanced design with sustainable development goals. Featured on the official UN Technology Bank website.",
      link: "https://www.un.org/technologybank/news/global-youth-talent-empower-design-new-era-admission-international-design-education-program",
    },
  ],
};
