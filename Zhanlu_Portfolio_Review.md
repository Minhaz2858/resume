# Zhanlu portfolio review

Reviewed: 10 September 2026

The page should introduce Zhanlu as an enterprise AI agent platform, show what users can accomplish, and then explain the engineering behind those capabilities. Your agent configuration, document RAG, Skills/MCP, automation, model integration, and business-output work deserves more prominence.

The most urgent correction is consistency between the English and Chinese versions. They currently describe materially different implementation states.

## What was checked

- Live [Zhanlu project page](https://minhaz2858.github.io/resume/projects.html?p=zhanlu), including its English and Chinese content sources.
- Live [English project data](https://minhaz2858.github.io/resume/js/data.js?v=1039), [Chinese project data](https://minhaz2858.github.io/resume/js/data.zh.js?v=1039), and [page renderer](https://minhaz2858.github.io/resume/js/projects.js?v=1050).
- Your supplied `zhanlu_overview(2).md` and `Zhanlu_AI_Engineer_Details(2).md`, especially their runtime, retrieval, skills, automation, infrastructure, and known-limitations sections.
- The published chat and Agent Builder screenshot assets.
- Your explicit correction that the forecasting engine belongs to EDIA.

Implementation-status recommendations reflect those documents and the published page. If later engineering work has closed a documented gap, update its status together with evidence from that revision.

## 1. Correct the English–Chinese disagreements first

| Issue | Current page evidence | Recommended correction |
|---|---|---|
| Parallel swarm execution | The Chinese contribution section describes implemented parallel spawning, messaging, and swarm orchestration. The English limitations section says general fork/join orchestration remains planned. | Describe implemented main/sub-agent delegation. Keep general parallel swarm execution marked as planned unless a newer implementation and test demonstrate it. |
| One universal harness | Chinese architecture text says every agent is a harness agent and all tool calls use the gateway. English explicitly distinguishes the main chat dispatcher from structured programmatic/delegated runs. | Describe the actual runtime paths and the controls applied to each. Update both languages when migration is complete. |
| Universal sandbox isolation | Chinese impact text claims every code run uses a temporary sandbox. English identifies full-stack dashboard generation as an in-process exception. | State that selected Python and document workloads use Docker sandboxes; retain the dashboard exception next to the execution description. |
| PPT correctness guarantee | Chinese capability text promises hallucinated slides never reach users. English correctly describes configured checks that can block failed outputs and acknowledges detection limits. | Say that deterministic and configurable LLM checks assess artifacts and can block outputs that fail configured criteria. Remove the universal correctness guarantee. |
| Context guarantees | Chinese text guarantees context headroom regardless of model. English acknowledges tokenizer-coverage limits. | Describe token estimation, context budgets, history compression, and oversized-output references. Avoid an unconditional guarantee across all models. |
| Deployment count | Chinese summary/highlights use 14 services; its contribution paragraph uses 11. | Use a topology description until there is one dated deployment inventory with a clear definition of what is counted. Distinguish running services, one-shot initialization jobs, and task-specific sandbox images. |
| Monitoring status | Prometheus/Grafana appear as deployed technologies, while an infrastructure detail passage describes them as designed in the specification. | Confirm deployment from the actual configuration and running system. Until then, describe implemented request/run logging and mark the monitoring stack according to its verified status. |
| DataSnapshot coverage | Chinese text says every database read creates an immutable DataSnapshot. English limits snapshot-backed behavior to particular workflows. | Distinguish query/result provenance on the structured-data path from immutable snapshots used by snapshot-backed artifact workflows. |
| Forecasting ownership | Chinese contribution text includes multi-horizon forecasting and MAPE/backtesting under Zhanlu. | Present core forecasting engineering under EDIA. If Zhanlu exposes that capability through a tool, describe the integration separately. |

The supplied technical overview itself contains optimistic overview statements alongside more restrictive implementation notes. A specification establishes intended behavior; current implementation evidence should determine the public status label.

## 2. Replace the opening with a clearer product and ownership statement

### Suggested English header

**Zhanlu: Enterprise AI Agent Platform**

Agent Harness · RAG · Skills & MCP · Automation · LLMOps

**Role:** AI Platform Engineer, Internship, Solo Project  
**Organization:** Synexia AI  
**Period:** 2025–2026

### Suggested English introduction

Zhanlu is an enterprise AI agent platform where users configure agents, connect authorized databases and uploaded documents, and use conversations to analyze data, create dashboards, generate business documents, and schedule tasks.

As the sole developer during my Synexia AI internship, I built the agent configuration and execution components, document retrieval, structured-data analysis, Skills/MCP integrations, context and memory management, model routing, and full-stack interfaces. The platform combines hosted LLM APIs with validated local model-serving integrations and includes execution controls, sandboxed workloads, and evaluation tooling.

### Suggested Chinese header

**Zhanlu（湛卢）：企业AI智能体平台**

Agent Harness · RAG · Skills与MCP · 自动化 · LLMOps

### Suggested Chinese introduction

Zhanlu是面向企业的AI智能体平台。用户可以创建和配置Agent，接入授权数据库与上传文档，通过对话开展数据分析、生成业务看板和办公文档，并设置定时任务。

在Synexia AI实习期间，我独立负责Agent配置与执行组件、文档检索、结构化数据分析、Skills/MCP工具集成、上下文与记忆管理、模型路由及前后端开发。平台支持外部LLM API与经过验证的本地模型接入，并提供执行控制、沙箱任务和评估工具。

## 3. Make the strongest AI engineering work visible

The English page concentrates its main contribution section on source selection, SQL correctness, and execution controls. Expand the contribution section with the following capability-to-implementation mappings.

| Capability | Engineering to explain | Evidence to show |
|---|---|---|
| Agent Builder and runtime | Agent instructions, model routes, data/knowledge bindings, tools, bounded loops, delegated runs, persisted state. | A completed agent configuration and a run that uses its selected capabilities. |
| Document RAG | Upload, parsing, chunking, local embeddings, ChromaDB indexing, retrieval, source references, and indexing failure states. | An uploaded document, a question, retrieved evidence, and a cited answer. |
| Structured business-data analysis | Authorized SourceDescriptors, active-agent source choice, schema-aware planning, SQL compilation/validation, temporal and aggregation checks. | A question, chosen source, compiled query, returned rows, and a traceable answer. |
| Skills and MCP | Discovery, routing, progressive loading, parameter validation, permission filtering, external tool connections. | A skill/tool invocation with its parameters and output; Fusion 360 is a concrete integration example. |
| Context and memory | Project-scoped semantic recall, history compression, context budgeting, references to large tool results. | A multi-turn task showing what context is retained and how a large result remains available. |
| Automation and artifacts | Scheduled agent execution, run history, progress, generated dashboards/documents, version history, preview and download checks. | A configured schedule, completed run, and its resulting artifact. |
| Model integrations and evaluation | vLLM/Qwen3-27B integration validation, model routes, provider fallback, configurable artifact checks, regression tests, run traces. | Configuration plus a dated evaluation or trace showing the tested behavior. |

Document RAG and automation deserve dedicated descriptions. The uploaded overview documents both, but the English page gives much more space to SQL controls and general failure scenarios.

## 4. Change the first four highlight cards

The current English cards describe architectural qualities: dynamic, deterministic, policy-gated, and traceable. Use the first cards to make the product understandable, then demonstrate those qualities in the engineering sections.

| Card | Supporting text |
|---|---|
| Build agents | Configure instructions, models, knowledge, tools, and reusable skills. |
| Connect enterprise data | Query authorized databases and retrieve evidence from uploaded documents. |
| Automate business tasks | Schedule agent runs and inspect execution history and results. |
| Deliver usable outputs | Generate dashboards and business documents with version history and inline previews. |

Keep the central architecture invariant: the active agent selects sources and tools from the authorized capabilities exposed by the harness. Explain it beside the source-selection design and show it in a concrete example.

## 5. Reorder the page

1. Product introduction, role, ownership, and project period.
2. Four capability highlights and a short demonstration of a completed task.
3. What I built: the principal AI engineering contributions.
4. One representative workflow, from user request to checked output.
5. Architecture: runtime, model access, data/retrieval, tools, state, and execution services.
6. Evaluation evidence and measured results, with dates and test conditions.
7. Implementation status and remaining work.
8. Technology stack and the CAD integration example.

Consolidate repeated failure-control and limitation descriptions into one status section. Retain material implementation qualifications beside the relevant feature claims, so the opening and technical detail remain consistent.

Replace broad claims about why all enterprise buyers reject agents with the actual project problem: enabling business users to work with company documents, databases, and tools through configurable agents, while maintaining authorization, traceability, and execution controls.

## 6. Replace screenshots that do not demonstrate their captions

The published `zhanlu_chat.png` shows an empty start screen. Its caption describes a streamed execution checklist, but no request, tool call, checklist, or completed answer appears in that image.

The published `zhanlu_agent_builder.png` shows the Agent Builder welcome screen and existing agent shortcuts. It establishes that the interface exists, but does not show an agent being configured or saved.

Capture evidence from actual completed workflows:

- **Agent configuration:** selected model, data/knowledge bindings, tools or skills, and the saved agent.
- **Document question answering:** uploaded source, question, answer, and source reference.
- **Database analysis:** request, selected source, query/result evidence, and answer or dashboard.
- **Automation:** schedule, completed execution record, and generated report.
- **Execution and evaluation:** run steps, tool results, a check outcome, and the delivered artifact.

Use captions that describe only what is visible. If a complete task cannot be demonstrated in one screenshot, use a short sequence or recording from the application.

## 7. Add evaluation evidence with defined scope

The English `evaluation` and `impact` data fields are empty. A failure-control table communicates design coverage, but it does not show the results of a particular evaluation run.

Add a dated evaluation summary covering the scenarios you actually tested, for example source selection, time-range interpretation, aggregation grain, permission filtering, repeated tool calls, provider failure, and artifact checks.

For each result, record:

- Revision or test date and enabled runtime path/flags.
- Dataset/source scope and number of cases.
- Expected behavior and observed outcome.
- Failures and exclusions.
- Latency or token measurements only when recorded under stated conditions.

A count of Python test files is not a passed-test count. A count of available tools or containers is not evidence of reliability or business impact. Use existing measurements when available; otherwise show a reproducible demonstration and state its scope.

## 8. Practical content-maintenance changes

- Update the Zhanlu entry in both `js/data.js` and `js/data.zh.js`. The language switch selects separate data objects, so changing English does not update Chinese.
- Keep identical feature status, project ownership, counts, and deployment claims across languages.
- Keep architecture detail below the initial product explanation. Describe internal names such as GroundedPlan and CanonicalResultSet when first introduced.
- State model-serving integration at the level supported by the work. The documented vLLM validation supports local serving integration; it does not establish custom KV-cache, CUDA-kernel, or distributed-training optimization.
- Keep forecasting-engine development attributed to EDIA across the website and resume.

The highest-value next edit is a coordinated English/Chinese rewrite of the opening, contribution section, status claims, and screenshot captions, followed by one concrete end-to-end demo and a dated evaluation summary.
