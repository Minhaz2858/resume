/* ============================================================
   Portfolio content — Chinese (简体中文) mirror of js/data.js
   Same shape as window.PORTFOLIO. Tech terms, tool names, URLs,
   and publication titles/venues are intentionally kept in English.
   Translations are AI-generated — review before sharing externally.
   ============================================================ */

window.PORTFOLIO_ZH = {
  profile: {
    name: "Minhazul Islam",
    monogram: "MI",
    title: "人工智能工程师",
    roleLine: "生成式 AI · LLM 智能体 · NLP · AI 系统工程",
    location: "中国浙江宁波",
    email: "minhaz1396@zju.edu.cn",
    phone: "+86 15990259205",
    github: "https://github.com/Minhazul249602",
    linkedin: "https://www.linkedin.com/in/minhazul-islam-43b3a4221/",
    facebook: "https://www.facebook.com/minhazul.islam.827809",
    cv: "assets/cv.pdf",
    photo: "assets/profile.jpg",
    summary:
      "AI 工程师与算法工程师，拥有浙江大学工业设计工程硕士学位和云南大学计算机科学学士学位。我专注于生成式 AI 与 NLP——LLM、RAG、提示词工程、LangChain，以及基于 PyTorch 的 Transformer 微调（RoBERTa）。我构建端到端的 AI 系统，从模型开发到基于 FastAPI 的高并发生产部署，并拥有丰富的 AI 与硬件结合经验（Arduino、ESP32-CAM、传感器融合、边缘 AI）。",
    bio: [
      "我将算法能力、工程严谨性与对用户的理解相结合，推动 AI 产品走完完整生命周期——从模型研究到系统部署。",
      "我的工作涵盖：面向生产级决策智能平台的多智能体 LLM 编排、面向心理健康支持的检索增强生成系统、面向领域打分的 Transformer 微调，以及面向无障碍场景的嵌入式 AI 原型。",
      "我乐于解决那些既需要深厚技术、又需要清晰用户视角的问题：让 LLM 扎根于证据、让 AI 输出可验证，并交付在真实负载下稳定运行的系统。",
    ],
    interests: [
      "大语言模型与 AI 智能体",
      "检索增强生成（RAG）与扎根式 LLM 系统",
      "多智能体编排与 LLM 基础设施",
      "人机交互与情感计算",
      "面向医疗与社会公益的应用 NLP",
      "边缘 AI 与嵌入式智能",
    ],
    goals: [
      "构建准确、可验证、生产级水准的 AI 系统",
      "连接研究与应用工程——把模型想法变成已部署的服务",
      "为具有可量化人类价值与商业价值的 AI 应用做出贡献",
    ],
    stats: [
      { num: "4", label: "论文（2 篇 ICEC 2025，2 篇 PCC 2026）" },
      { num: "7", label: "已交付项目，覆盖 Web 到嵌入式" },
      { num: "15", label: "生产环境中编排的 AI 智能体" },
      { num: "40%", label: "通过自动化节省的流程时间" },
    ],
  },

  skills: [
    {
      category: "生成式 AI 与自然语言处理",
      items: [
        "LLMs (GPT, DeepSeek)", "RAG", "LangChain", "LlamaIndex",
        "Transformers (BERT, RoBERTa)", "Fine-tuning (PEFT, LoRA, QLoRA)",
        "Prompt Engineering", "Hugging Face", "Gradio", "NER",
      ],
    },
    {
      category: "机器学习与运维",
      items: [
        "PyTorch", "TensorFlow", "Scikit-learn", "XGBoost",
        "Model Quantization", "Model Evaluation", "Docker", "Kubernetes",
        "ONNX Runtime", "CI/CD", "Git", "Pytest",
      ],
    },
    {
      category: "数据科学与数据库",
      items: [
        "Elasticsearch", "MongoDB", "ChromaDB", "Pinecone", "PostgreSQL",
        "NumPy", "Pandas", "Matplotlib", "Seaborn",
        "ETL Pipelines (Apache Airflow)", "Feature Engineering",
      ],
    },
    {
      category: "语言与性能",
      items: [
        "Python (Asyncio)", "C/C++", "JavaScript", "CUDA",
        "REST API Integration", "ThreadPoolExecutor (Concurrency)", "Win32com", "Static Code Analysis",
      ],
    },
    {
      category: "全栈开发",
      items: [
        "FastAPI", "Flask", "Node.js", "React.js", "Tailwind CSS",
        "D3.js", "HTML5/CSS3", "IBM Watson Integration",
      ],
    },
    {
      category: "嵌入式与自动化",
      items: [
        "IoT (ESP32, Arduino)", "Edge AI", "Sensor Fusion", "Fusion 360",
        "Autodesk Inventor API", "Parametric Design", "Python-CAD Integration",
      ],
    },
    {
      category: "AI 基础设施与 LLM 运维",
      items: [
        "LLM Orchestration (LangGraph)", "ChromaDB RAG", "LLM Guardrails / Output Validation",
        "Model Routing", "SSE / Real-time Streaming", "Evaluation & Backtesting",
        "Chroma/SQL Data Grounding", "systemd", "nginx", "MySQL",
      ],
    },
  ],

  experience: [
    {
      role: "AI 工程师实习生 — Zhanlu 平台（独立开发）",
      company: "Synexia AI",
      period: "2025 – 2026",
      location: "中国浙江",
      points: [
        "完全独立地设计并构建了 Zhanlu——一个七层企业级 AI 智能体平台：规划器认知核心、Harness 智能体运行时、工具/技能/MCP 网关、多租户 Org/App/Workspace 隔离，以及配备专用 sandbox-python / sandbox-pptx / sandbox-office / sandbox-webapp 容器的沙箱工作节点。",
        "交付了数据驱动的 PPT 产物生成：报告智能体以 DataSnapshot 为输入，在 sandbox-pptx 中调用 pptx 生成技能，产出带版本管理的商务演示文稿。",
        "实现了按智能体的模型路由与按组织的模型供应商密钥（昂贵路由触发确认门禁，受限数据需要已批准的路径），并构建了带权限过滤、模式校验、策略评估与完整审计日志的工具/技能/MCP 网关。",
        "构建了由 14 个服务组成的 Docker 技术栈（后端、worker、sandbox-worker、postgres、redis、minio + minio-init、沙箱容器、prometheus、grafana），以及带访问令牌 + 刷新令牌 + OTP 注册的 JWT 认证。",
      ],
      tech: [
        "规划器 (Custom)", "Harness Agents", "Sandbox Worker",
        "FastAPI", "PostgreSQL", "Redis", "MinIO",
        "Tool / Skill / MCP Gateway", "Model Routing", "Docker",
      ],
    },
    {
      role: "AI 基础设施 / 预测实习生 — EDIA",
      company: "Synexia AI · Ecisco Collaboration",
      period: "2025 – 2026",
      location: "中国浙江 · 石化行业（C5/C9）",
      points: [
        "设计了 LLM 编排层：一个 LangGraph 状态机，在 5 个层级中协调 15 个专业智能体与 57 项原子技能——条件路由、独立分支并行执行、顺序质量门禁、重试/超时隔离，以及多轮会话持久化。",
        "构建了 planner/router 架构（规划、路由、NLU）：意图分类与基于模式注册表的技能选择，将即兴提示转变为受治理、可审计的执行计划。",
        "工程化了一条确定性预渲染流水线——所有业务关键数字在 LLM 叙述之前计算并锁定——因此模型充当证据的转述者，而非事实的生成者。这消除了生产中的预测幻觉。",
        "用确定性 Python 实现了护栏/校验层：对预渲染数值做数字精确性校验、强制数据来源归属，以及语言一致性约束。不合规输出被拦截并记录审计。",
        "构建了多时间尺度价格预测系统：集成 + 4 层 STL 预测器，产出 3 天 / 7 天 / 30 天时间尺度 × 看跌 / 基准 / 看涨情景，并配备自适应预测策略、信任层级徽章，以及用于可复现性和 MAPE 回测的快照。",
        "交付了实时服务：带查询字符串 JWT 认证的 SSE 流式通道、DB 指纹监听器（跨 10+ 市场/ERP 表的亚秒级轮询）触发热运行时重载与客户端推送，以及多级缓存（服务端快照缓存 + 浏览器 localStorage 层，2–10 分钟 TTL）。",
        "创建了评估基础设施：一个 7 指标预测精度框架（MAPE、MAE、偏差、方向准确率、命中率、相对朴素模型能力、区间覆盖率），实时计算、用于自动偏差校正，并通过带锁定回归基线的前推回测强制执行。",
      ],
      tech: [
        "LangGraph", "FastAPI", "ChromaDB", "MySQL", "SSE Streaming",
        "LLM Guardrails", "Multi-Horizon Forecasting (Ensemble + STL)",
        "Adaptive Forecast Policy", "MAPE / Backtest Validation",
        "systemd", "nginx", "Model Routing",
      ],
    },
    {
      role: "软件工程师",
      company: "ProFabx",
      period: "2024 年 6 月 – 2024 年 9 月",
      location: "中国宁波",
      points: [
        "使用 Autodesk Fusion 360 与 Inventor 开发高级 3D 模型，从手动设计转向自动化工作流。",
        "通过 Autodesk Inventor API（win32com.client）编写稳健的 Python 脚本，实现复杂 3D 建模的自动化。",
        "设计了一个直观的 JavaScript Web 界面，可根据实时参数变化动态更新 3D 模型。",
        "实现了一套成熟的参数化建模系统，使尺寸修改能自动传播到整个设计中。",
        "通过策略性地自动化重复建模任务，将设计流程精简了 40%。",
      ],
      tech: ["Python", "Autodesk Inventor API", "win32com.client", "JavaScript", "Fusion 360"],
    },
  ],

  projectFilters: ["全部", "AI 基础设施「, 」生成式 AI", "机器学习「, 」嵌入式与物联网「, 」自动化"],

  projects: [
    {
      id: "edia",
      title: "EDIA — 企业决策智能平台",
      short: "面向石化预测、决策与智能告警的多智能体 LLM 平台。",
      category: "AI 基础设施",
      period: "2025 – 2026",
      org: "Synexia AI（实习）· Ecisco 合作 · 石化行业（C5/C9 价值链）",
      role: "AI 基础设施 / 预测工程师（实习生）",
      image: null,
      video: null,
      summary:
        "面向石化决策智能的生产级 AI 工程平台——为 C5/C9 商务团队提供多时间尺度价格预测、智能告警系统与因果决策支持。平台围绕一个 17 节点 LangGraph 状态机构建，在 5 个层级中编排 15 个专业智能体与 57 项原子技能，并配备确定性预渲染、护栏、ChromaDB RAG，以及一个在幻觉数字到达用户之前将其拦截的 Python 校验层。",
      highlights: [
        { num: "3×3", label: "预测：3 个时间尺度（3 天/7 天/30 天）× 3 种情景（看跌/基准/看涨）" },
        { num: "15", label: "分布于 5 个层级的专业智能体" },
        { num: "57", label: "按归属与数据源映射的原子技能" },
        { num: "4", label: "信任层级徽章（高 / 中 / 方向性 / 低）" },
      ],
      problem:
        "石化商务团队处于高波动环境中：原料与衍生品价格在不同地区和竞争者之间快速变动；销售、库存、合同与运营分散在碎片化的 ERP 与市场系统中；高层领导需要简明、可溯源且数字可审计的叙述。通用聊天机器人会凭空生成预测，缺乏一致的编排，暴露原始数据，也无法提供可执行的告警——这直接威胁到利润率、客户信任与战略敏捷性。",
      roleDetail:
        "端到端负责 AI 基础设施：17 节点 LangGraph 编排器、确定性预渲染流水线、Python 护栏层、多时间尺度预测系统（集成 + 4 层 STL）、ChromaDB RAG 摄取与检索、带角色感知升级的告警与通知智能体、基于 DB 指纹变更检测的实时 SSE 服务、多级缓存，以及生产运维（systemd / nginx、按环境路由、健康检查端点、自动恢复）。",
      architecture:
        "五层智能体架构，接入一个 17 节点 LangGraph 状态机。第 0 层——数据源（ERP / K3Cloud 视图、市场 CSV 数据源、隆众资讯报告、预测视图）。第 1 层——数据层智能体（ERP 数据智能体、市场数据智能体、负责锁定预测区间与置信度的预渲染智能体）。第 2 层——分析智能体（成本链、供需、竞对情报、合同与客户、因果诊断）。第 3 层——决策智能体（价格预测智能体、告警与通知智能体、报告生成智能体）。第 4 层——接口智能体（用于意图分类的查询路由器、用于证据检索的 RAG / 知识智能体、拦截不支持数字的校验与护栏智能体）。第 5 层——编排器，负责管理执行图、会话状态、重试与输出组装。两种运行模式：Chat（低延迟查询）与 Agent（完整多智能体分析路径）。",
      algorithm:
        "数字优先、LLM 充当解释器的流水线。(1) 提取意图并路由到 Chat 或 Agent 模式。(2) 第 1 层数据智能体收集 ERP、市场与预测锚点。(3) 预渲染器在任何语言生成之前计算并锁定每一项业务关键数值。(4) 分析与决策智能体运行确定性与推理技能，由集成 + 4 层 STL 为每个产品产出 3 个时间尺度 × 3 种情景。(5) 自适应预测策略根据近期实测精度进行偏差校正与波动率缩放。(6) ChromaDB RAG 通过语义 + 产品/日期过滤检索情境证据，并注入带来源链接的上下文。(7) LLM 使用契约式提示词与结构化 JSON 载荷转述已锁定的证据。(8) 校验与护栏智能体强制数字精确性、预测路径合规、强制数据来源归属与语言一致性——拦截并记录任何不合规输出。置信度由数据新鲜度、历史预测误差、供应事件确定性与竞对数据完整度以确定性方式计算；LLM 可以解释，但绝不设定置信度。",
      methodology: [
        "在生成任何预测文本之前，确认产品、时间尺度以及最近可用的价格/历史日期。",
        "使用基于模式注册表的意图提取（意图 → 产品 / 时间范围 / 是否需要预测），因此只查询相关数据表与时间窗口。",
        "针对 ERP 与市场数据源并行执行 SQL，只拉取用户意图所需的行。",
        "以纯 Python 预渲染所有加权平均、预测增量与对比指标（<500 ms），并在任何外部 LLM 调用之前可选地进行 PII 清洗。",
        "通过多模型集成生成 3 天 / 7 天预测，通过 4 层 STL 预测器生成 30 天预测；应用自适应偏差校正与波动率缩放。",
        "流式生成 LLM 综合结果（首字延迟低于 2 秒，完整报告 15–40 秒），并在启用净化器时将真实名称回填到相应位置。",
        "对照预渲染数值校验每一个数字输出，并以审计日志拦截不合规载荷。",
        "在阈值被突破时触发告警与通知智能体，进行角色感知的升级（创建告警规则 → 触发 → 确认 → 解决）。",
        "通过 SSE 流式传输实时执行事件；当源表变化时，通过 DB 指纹监听器刷新 UI 状态。",
      ],
      features: [
        "多时间尺度价格预测：每个产品 3 天、7 天、30 天时间尺度 × 看跌 / 基准 / 看涨情景",
        "短期预测采用多模型集成；月度预测采用 4 层 STL 预测器",
        "自适应预测策略，根据近期实测精度进行偏差校正与波动率缩放",
        "带质量门禁与信任层级徽章（高 / 中 / 方向性 / 低）的预测监督器",
        "持久化预测快照，用于可复现性、回测，以及针对锁定回归基线的 MAPE 校验",
        "告警与通知智能体：基于阈值的触发与角色感知升级（创建规则 → 触发 → 确认 → 解决）",
        "高管智能简报：以固定企业商务格式生成每周市场报告",
        "决策支持：方向性与区间建议、驱动因素分解（成本、供需、竞对、事件），以及带置信度标注的因果链",
        "市场情报与价格可见性：带来源归属与时间上下文、跨产品标准化的快照",
        "ERP 感知的商务上下文：库存压力、可销天数、销售流动、合同状态、客户级视角",
        "RAG / 知识智能体，通过 ChromaDB 结合语义 + 产品/日期过滤器检索情境证据",
        "校验与护栏智能体，强制数字精确性、来源归属、预测路径与语言一致性",
        "带查询字符串 JWT 认证（兼容 EventSource）的 SSE 流式通道，用于实时报告合成",
        "DB 指纹变更检测（跨 10+ 市场/ERP 表的亚秒级轮询），支持热运行时重载与客户端推送",
        "多级缓存（服务端快照缓存 + 浏览器 localStorage 层，2–10 分钟 TTL），带后台调度器与过期兜底",
        "按环境路由的模型路由（仅外部推理模式、本地 LLM 紧急开关、离线模型中心）",
        "健康 / 智能状态端点、systemd 自动重启崩溃恢复、nginx 发布流水线",
        "契约式提示词：系统角色约束 + 面向模式的 JSON 载荷 + 强制 N/A 兜底",
      ],
      impact:
        "用受治理的执行计划取代即兴提示：LLM 转述预渲染的证据，护栏层拦截不受支持的数字，告警通过角色感知的升级路径流转。交付了带来源归属的每周情报简报、覆盖 C5/C9 价值链（异戊二烯、间戊二烯、双环戊二烯、裂解 C5、SIS、SBS、C5 石油树脂等）的决策级预测，以及无需手动刷新即可实现的亚秒级数据更新体验。工程师、分析师与商务团队如今面对统一的、可审计的情报层，而非碎片化的报告。",
      evaluation:
        "自适应预测策略利用近期实测精度（MAPE、偏差、方向准确率、命中率、相对朴素模型能力、区间覆盖率）驱动自动偏差校正；前推回测针对锁定回归基线强制执行，以保证模型变更无回归。信任层级徽章按产品校准预期精度，校验与护栏智能体以时间戳 + 载荷上下文记录每条被拦截的载荷，用于审计与持续改进。",
      stack: [
        "LangGraph (17-node state machine)", "FastAPI", "ChromaDB (RAG)",
        "MySQL", "SSE Streaming", "LLM Guardrails",
        "Multi-horizon Forecasting (Ensemble + STL)",
        "Adaptive Forecast Policy", "MAPE / Backtest Validation",
        "Python Validation Layer", "systemd", "nginx",
        "Model Routing", "Intent-Driven Query Planner",
      ],
      links: [
        { label: "案例研究", url: "#", external: true },
      ],
    },
    {
      id: "zhanlu",
      title: "Zhanlu — 企业级 AI 智能体平台",
      short: "多租户 AI 智能体平台，具备规划器规划、Harness 智能体、沙箱化工具调用、模型路由，以及带数据的 PPT 产物生成。",
      category: "AI 基础设施",
      period: "2025 – 2026",
      org: "Synexia AI（实习）——独立项目，由我完全自主设计、构建并交付",
      role: "AI 平台 / 全栈工程师（实习 · 独立）",
      image: "assets/zhanlu_dashboard.png",
      video: null,
      summary:
        "一个完全由我自主构建的生产级多租户 AI 智能体平台。用户创建项目（App）与智能体，从精选注册表中挑选能力，并与一个委托给各领域 Harness 智能体的主智能体对话。规划器以受治理的 Plan DAG 进行规划，通过工具/技能/MCP 网关路由工具调用，按智能体与按组织应用模型路由，在隔离的 Docker 沙箱（sandbox-python、sandbox-pptx、sandbox-office、sandbox-webapp）中执行代码，并生成真实的商务产物——包括数据驱动的 PPT 演示文稿——经过校验、存储并内联预览。平台以 14 个服务的 Docker 技术栈部署，包含 PostgreSQL、Redis、MinIO、Prometheus 与 Grafana。当前构建已超越 MVP：计划优先的回合规划（turn planning）将每一步智能体执行实时推送到聊天界面；智能体可从绑定的实时数据源生成全栈仪表盘（WebSocket 刷新）；PPT 流水线由 LLM 裁判审计并拦截不合格演示文稿；原生 MCP 客户端/服务端可接入与暴露外部工具。",
      highlights: [
        { num: "7", label: "层企业架构（身份 → Planner → Harness → 记忆 → 执行 → 平台 → 基础设施）" },
        { num: "14", label: "个 Docker 技术栈容器服务" },
        { num: "8+", label: "个入门 Harness 智能体（财务、报告、仪表盘、数据分析、文档、合规、小程序、评审）" },
        { num: "15+", label: "项入门技能，覆盖 PPT、DOCX、HTML、仪表盘、Markdown、小程序、受治理 NL2SQL 与 DataSnapshot" },
        { num: "6", label: "个部门项目，含公司/个人隔离——市场部、研发、数据分析、C5/C9、Global" },
      ],
      problem:
        "企业需要真正可以部署的 AI 智能体：用户需要能创建自己的项目（App），从真实能力中组装自己的智能体，但每一步都必须保持受治理。原始工具选择器会泄露实现细节；持有原始凭证的智能体会造成安全与审计缺口；多智能体系统需要一致的编排；生成的文件应是有版本管理的商务产物（Markdown、仪表盘、数据驱动的 PowerPoint），而非聊天附件；代码执行必须被安全隔离。需要一套沙箱运行时来承载代码技能与数据驱动的产物生成，同时不暴露宿主或任何企业凭证。",
      roleDetail:
        "完全独立、端到端构建：七层架构；带七个能力引擎的规划器 plan-act-observe 状态机；多租户 Org/App/Workspace 隔离与按会话隐私；用户可创建项目（App）、创建 Harness 智能体，并为每个智能体绑定数据源 + 技能 + MCP 工具；按智能体配置的 model_route 与按组织的模型供应商密钥；带权限过滤、模式校验与策略评估的工具/技能/MCP 网关；带隔离 Docker 执行与专用 Python、PPT、Office、Web 应用沙箱容器的 sandbox-worker；通过 pptx 生成技能 + 报告智能体实现带数据的 PPT 生成；DataSnapshot 作为智能体唯一可见的数据路径；Markdown、HTML、PPT、DOCX、仪表盘与小程序的产物流水线；带权限校验的内联预览 API；带访问 + 刷新令牌的 JWT 认证；由 PostgreSQL、Redis、MinIO、Prometheus 与 Grafana 组成的完整 14 服务 Docker 技术栈。",
      architecture:
        "七层结构，接入统一治理流水线：(1) 企业交互与身份层，产出密封的 RequestEnvelope；(2) 规划器认知核心——一个带七个能力引擎（目标、上下文、规划、推理、决策、反思、学习）的受治理 plan-act-observe 状态机，围绕可替换 LLM 构建，向系统其余部分暴露 Plan DAG；(3) Harness 智能体运行时——每个智能体都是 Harness 智能体，具备必需确认、风险层级、模型路由、沙箱要求、缺失权限模式、危险副作用清单，以及 ready/warning/blocked 状态；(4) 记忆与知识（DataSnapshot 与精选存储）；(5) 执行层——沙箱化的工作流 / 自动化 / 产物 / 通知 / 审批执行，sandbox-worker 是唯一允许创建临时 Docker 沙箱的服务；(6) 平台服务——模型路由策略、提示词版本管理、策略评估、确认风险等级、预算限制、追踪与 AI 治理注册表；(7) Docker / PostgreSQL / Redis / MinIO 基础设施。所有工具调用都经过工具/技能/MCP 网关——智能体不直接调用 MCP，技能不经网关不调用 MCP，模型永远看不到完整工具目录。",
      algorithm:
        "规划器是唯一的认知控制器。对每个用户请求，它将意图转换为类型化 TaskSpec，从记忆与 DataSnapshot 组装项目隔离的上下文，并构建经过校验的 Plan DAG。每个 Plan 节点通过工具/技能/MCP 网关过滤——该网关执行权限过滤 → 模式校验 → 策略评估 → 执行——并将 ObservationRecord 写回审计追踪。工具调用有边界：智能体只能看到其有权调用的工具与技能，绝看不到完整的 MCP 目录。模型路由按智能体与按组织执行：受限数据要求已批准的模型路径，昂贵路由触发确认门禁，按组织的模型供应商密钥可锁定专用部署。数据流有门禁：每次数据库调用都经过数据源网关并产生不可变的 DataSnapshot——沙箱永远不会收到原始凭证。代码与产物技能（包括带数据的 pptx 生成）在 sandbox-worker 中运行，后者流式传输 stdout/stderr 事件、校验输出、通过后端持久化产物，并在任务完成时销毁容器。",
      methodology: [
        "在动后端之前先梳理现有 UI 文件树与组件结构。",
        "添加 FastAPI 骨架、PostgreSQL 模式（事实来源）、Redis（队列、锁、事件）与配置。",
        "添加多租户 Org/App/Workspace 模型，带 JWT 认证（访问 + 刷新、OTP 注册）与按会话隐私。",
        "添加 Harness 智能体数据模型：必需确认、风险层级、模型路由、沙箱要求、缺失权限与缺失模式追踪、危险副作用清单，以及 ready/warning/blocked 状态。",
        "添加能力注册表——用户选择高层能力而非原始技能——由入门智能体（财务、报告、仪表盘、数据分析、文档、合规、小程序、评审）与入门技能支撑。",
        "添加数据源连接器与按智能体的数据源绑定；所有读取都经过数据源网关并产生不可变的 DataSnapshot。",
        "将规划器构建为 plan-act-observe 状态机，带 Plan DAG 记录、策略门禁与 ObservationRecord 审计条目。",
        "添加技能注册表与斜杠 / 操作选择器，用于内联技能使用；用户创建的技能在评审与批准前保持不受信。",
        "构建工具/技能/MCP 网关：权限过滤 → 模式校验 → 策略评估 → 执行，并带审计日志。智能体与技能绝不直接调用 MCP。",
        "将 sandbox-worker 实现为唯一持有 Docker socket 的服务，配备专用 sandbox-python、sandbox-pptx、sandbox-office 与 sandbox-webapp 容器。",
        "构建数据驱动的 PPT 产物流程：报告智能体以 DataSnapshot 为输入，在 sandbox-pptx 中调用 pptx 生成技能；输出经过校验、以产物形式存储并内联预览。",
        "实现 Markdown、HTML、仪表盘、DOCX 与小程序产物生成器，带版本化存储与权限校验的内联预览 API。",
        "为聊天 UI 实现实时执行时间线事件流，使每个计划步骤都可观测。",
        "部署完整 14 服务 Docker 技术栈：backend、worker、sandbox-worker、postgres、redis、minio + minio-init、sandbox-python、sandbox-office、sandbox-pptx、sandbox-webapp、prometheus、grafana。",
      ],
      features: [
        "多租户 Org / App / Workspace 隔离，带按会话隐私与按智能体的数据源 / 技能 / MCP 绑定",
        "用户可创建项目（App）与 Harness 智能体，再从精选注册表选择高层能力（系统智能体与用户创建智能体并存）",
        "规划器认知核心，带七个能力引擎：目标、上下文、规划、推理、决策、反思、学习",
        "Plan DAG 执行，带审批门禁、重试 / 超时隔离与多轮会话状态",
        "Harness 智能体运行时：每个智能体都是 Harness 智能体，具备明确的必需确认、风险层级、模型路由、沙箱要求，以及 ready / warning / blocked 状态",
        "按智能体模型路由——受限数据要求已批准的路径，昂贵路径触发确认，按组织的模型供应商密钥可锁定专用部署",
        "工具/技能/MCP 网关：智能体不直接调用 MCP；每次调用前强制权限过滤、模式校验、策略评估与审计",
        "带隔离 Docker 执行与临时文件系统的 sandbox-worker——唯一可挂载 Docker socket 的服务",
        "面向 Python、PPT、Office 与 Web 应用工作负载的专用沙箱容器（sandbox-python、sandbox-pptx、sandbox-office、sandbox-webapp）",
        "数据驱动的 PPT 生成：报告智能体以 DataSnapshot 为输入，在 sandbox-pptx 中调用 pptx 生成技能，产出带版本管理的商务演示文稿",
        "Markdown、HTML、PPT、DOCX、仪表盘与小程序的产物流水线，每项都经校验并作为版本化 Artifact 存储，带内联预览 API",
        "数据源网关与不可变 DataSnapshot——智能体通过 DataSnapshot 读取数据，沙箱永远不会收到原始凭证",
        "能力注册表 + 斜杠 / 操作选择器，用于内联技能使用；用户创建的技能在评审与批准前保持不受信",
        "实时执行时间线事件流式传输到聊天 UI，使每个计划步骤都可观测",
        "邮箱 / 密码认证 + OTP 注册、JWT 访问令牌（15 分钟）+ 刷新令牌（30 天，SHA-256 哈希）",
        "限流的认证端点与登出时访问令牌 JTI 加入黑名单",
        "完整 14 服务 Docker 技术栈：backend、worker、sandbox-worker、postgres、redis、minio + minio-init、sandbox-python、sandbox-office、sandbox-pptx、sandbox-webapp、prometheus、grafana",
      ],
      impact:
        "交付了生产级 AI 智能体平台，将原始 LLM 能力转变为受治理的企业服务。用户现在可以创建自己的项目（App），从精选能力注册表组装自己的 Harness 智能体，并依靠规划器在工具调用、模型路由与沙箱执行之间规划——包括接收真实 DataSnapshot 并输出带版本管理商务产物的数据驱动 PPT 生成。每一步都由工具/技能/MCP 网关把关，每次数据库读取都是不可变 DataSnapshot，每次代码运行都在临时沙箱中，每个动作都可审计。",
      evaluation:
        "对照 MVP 测试清单进行了端到端验证：现有 UI 集成、多租户 Org/App/Workspace 设置、用户创建项目与 Harness 智能体、能力选择、中央数据源连接器与智能体专属数据源绑定、规划器FSM聊天、工具/技能/MCP 网关路由、沙箱化执行（sandbox-worker + 专用沙箱容器）、Markdown / HTML / PPT / DOCX / 仪表盘产物生成、内联预览卡片、实时执行时间线、PostgreSQL + Redis，以及完整 Docker 技术栈。第二阶段加固——rootless Docker、Docker socket 代理、gVisor、专用沙箱主机——已记录为后续工作。",
      stack: [
        "FastAPI", "React (Vite)", "PostgreSQL", "Redis", "MinIO",
        "Docker", "Docker Compose", "Prometheus", "Grafana",
        "规划器FSM (7 capability engines)", "Plan DAG",
        "Harness Agent Runtime", "Tool / Skill / MCP Gateway",
        "Model Routing (per-agent, per-org)", "Sandbox Worker",
        "Sandbox Containers (pptx, python, office, webapp)",
        "Datasource Gateway + DataSnapshots",
        "JWT Auth (access + refresh)", "OTP",
        "PPT / DOCX / HTML / Dashboard / Markdown / Mini-App Generation",
      ],
      sections: [
        {
          title: "实机运行：平台工作实况",
          body: `
            <p class="pd-lead">以下截图来自正在运行的系统——不是原型图。每个界面都是连接了真实数据的线上平台。</p>
            <div class="pd-gallery">
              <figure class="pd-screenshot">
                <img src="assets/zhanlu_chat.png" alt="Zhanlu 主智能体聊天" />
                <figcaption>主智能体聊天——计划优先的回合规划将每一步执行以实时清单形式推送到界面</figcaption>
              </figure>
              <figure class="pd-screenshot">
                <img src="assets/zhanlu_dashboard.png" alt="Zhanlu 智能体生成的全栈实时仪表盘" />
                <figcaption>智能体生成的全栈仪表盘——财务总览，通过 WebSocket 实时刷新 ERP 数据</figcaption>
              </figure>
              <figure class="pd-screenshot">
                <img src="assets/zhanlu_space.png" alt="Zhanlu My Space" />
                <figcaption>My Space——多租户项目（App）、智能体、数据源与知识库</figcaption>
              </figure>
              <figure class="pd-screenshot">
                <img src="assets/zhanlu_agent_builder.png" alt="Zhanlu Agent Builder" />
                <figcaption>智能体构建器——从模板或空白创建场景智能体，各自拥有独立的模型路由、数据源、技能与 MCP 工具</figcaption>
              </figure>
            </div>
          `,
        },
        {
          title: "今日已上线：超越 MVP 的生产能力",
          body: `
            <p class="pd-lead">平台持续演进。在原有架构之上，当前版本已交付 MVP 阶段仅有雏形的生产级系统：</p>
            <div class="pd-cards">
              <div class="pd-card"><h4>回合规划（计划优先）</h4><p>每个请求在执行前先生成计划——turn planner 将计划步骤以 SSE 事件流式推送到聊天界面，形成可见清单，用户能在执行前看到智能体将要做什么；步骤完成由真实工具证据驱动，而非 LLM 自述。</p></div>
              <div class="pd-card"><h4>全栈仪表盘生成</h4><p>智能体从绑定的数据源生成完整 React 仪表盘。DB 无关的分析器在设计前检查真实数据，图表类型由数据形态决定；组件 SQL 在构建时验证；仪表盘通过 WebSocket 实时刷新。</p></div>
              <div class="pd-card"><h4>带审计的 PPT 流水线</h4><p>演示文稿先经过 HTML 设计阶段渲染，再由 LLM 裁判按来源引用规则审计，不合格文稿被拦截交付——幻觉幻灯片永远不会到达用户。市场类需求会基于项目知识库为文稿提供依据。</p></div>
              <div class="pd-card"><h4>MCP 客户端 + 服务端</h4><p>原生 MCP 客户端注册外部工具，MCP 服务端对外暴露 Zhanlu 能力。CAD 智能体通过 socket MCP 桥接驱动 Autodesk Fusion 360。</p></div>
              <div class="pd-card"><h4>上下文窗口安全</h4><p>SafeContextGate 在每次 LLM 调用前进行预检——压缩历史记录、将超大数据载荷转移到数据指针层，无论使用哪个模型都保证上下文余量。</p></div>
              <div class="pd-card"><h4>带故障切换的 LLM 路由</h4><p>多提供商路由 + 健康检查 + 自动回退。验证了本地 vLLM 服务（Qwen3-27B）与自定义工具调用解析器，与云端模型并行，客户可将数据保留在本地。</p></div>
            </div>
          `,
        },
        {
          title: "企业级多租户：一个平台，覆盖整个企业",
          body: `
            <p class="pd-lead">一次部署，服务所有部门。每个项目、智能体、数据源与知识库都归属于 Org / App / Workspace，并标记为公司级或个人级——市场部、研发、数据分析与 C5/C9 并排运行，数据严格隔离。</p>
            <div class="pd-cards">
              <div class="pd-card"><h4>Org / App / Workspace 作用域</h4><p>每条资源记录都携带 org_id + app_id。公司级资源在整个组织内共享；个人级资源只属于所有者。从架构上杜绝跨租户数据泄露。</p></div>
              <div class="pd-card"><h4>部门项目</h4><p>市场部、研发、数据分析、C5/C9、Global——每个团队作为独立项目运行，拥有自己的智能体、知识库与会话历史，在侧边栏以部门分组展示。</p></div>
              <div class="pd-card"><h4>按智能体的数据隔离</h4><p>每个智能体显式绑定数据源：只读访问模式、允许/阻止的表、允许的列与行级过滤。智能体在架构上无法看到绑定范围之外的数据。</p></div>
              <div class="pd-card"><h4>场景智能体</h4><p>用户从模板或空白创建专用智能体——客户支持、生产效率、研究助理、报告撰写——每个都拥有独立的模型路由、数据源、技能与 MCP 工具。</p></div>
              <div class="pd-card"><h4>按租户实时</h4><p>仪表盘通过 WebSocket 流式刷新实时数据，智能体运行通过 SSE 逐步流式推送——始终限定在所属租户范围内。</p></div>
              <div class="pd-card"><h4>治理与审计</h4><p>资源访问策略、受控共享，以及对每个受门禁操作的审计追踪——企业级问责能力。</p></div>
            </div>
            <div class="pd-callout"><b>为何重要：</b>大多数 AI 演示只运行在单一租户中。Zhanlu 的多租户在数据库层强制实施——每条资源上的 org_id/app_id 作用域，加上列级与行级的智能体绑定——这正是企业平台在触碰生产数据前必须具备的能力。</div>
          `,
        },
        {
          title: "CAD 智能体：用自然语言在 Fusion 360 中完成 3D 建模",
          body: `
            <p class="pd-lead">大多数智能体只写文字，这个智能体真正「造东西」。CAD 智能体接收自然语言请求——「建一个 M6 螺丝」、「把支架加高」——通过实时 socket MCP 桥接驱动 Autodesk Fusion 360，逐步创建真实的 3D 参数化模型。</p>
            <video src="assets/cad_agent_demo.mp4" controls preload="metadata" muted playsinline></video>
            <div class="pd-cards">
              <div class="pd-card"><h4>构建 / 查询 / 歧义识别</h4><p>智能体在触碰 Fusion 之前先判断意图：BUILD 创建或修改几何，QUERY 直接根据实时场景回答而不重建，AMBIGUOUS 提问而非猜测——绝不会替换用户未要求的零件。</p></div>
              <div class="pd-card"><h4>目标锁定 + 待办规划</h4><p>每次构建都以一行目标声明开始，然后是待办计划——每个子部件一个待办——随着几何落地逐步勾选。与平台其余部分一样采用计划优先。</p></div>
              <div class="pd-card"><h4>细粒度工具 + 原生兜底</h4><p>经过验证的、带类型的 Fusion 操作（草图、拉伸、圆角、倒角、孔）覆盖大多数工作；revolve、loft、sweep、mirror 与阵列等操作由原始 adsk Python 处理。</p></div>
              <div class="pd-card"><h4>实时场景感知</h4><p>fusion360_info 重新读取实时模型——实体、草图、平面、特征与参数——让智能体对照现实校准而非猜测；它从不通过清空重建来"恢复"。</p></div>
              <div class="pd-card"><h4>持久画布</h4><p>模型在多轮对话中始终保留在 Fusion 画布上。更新就地修改同一几何——在正确高度添加草图、联合/切割拉伸——绝不抹掉用户的工作。</p></div>
              <div class="pd-card"><h4>公司级智能体</h4><p>作为公司资源预置在智能体目录中，组织内任何团队都可以创建设计自动化智能体，并获得与其他智能体相同的隔离与审计。</p></div>
            </div>
            <div class="pd-callout"><b>为何重要：</b>这是完整的闭环——自然语言 → 智能体规划 → 经过验证的工具调用 → 专业 CAD 工具中的真实参数化几何。与数据智能体相同的 harness、路由、网关与审计机制，应用到完全不同的领域：设计工程。</div>
          `,
        },
      ],
      links: [
        { label: "[私有仓库]", url: "#", external: false },
      ],
    },
    {
      id: "bepsbot",
      title: "BepsBot — AI 驱动的心理健康同伴支持平台",
      short: "我在浙江大学的硕士论文研究——面向双相障碍同伴支持的双模式 LLM 写作助手（HHME 2026 PCC 口头报告 · Springer LNCS）。",
      category: "生成式 AI",
      period: "2024 – 2025",
      org: "浙江大学 · 硕士论文研究 · HHME 2026 PCC 口头报告 · Springer LNCS",
      role: "硕士论文研究者 / AI 工程师",
      image: "assets/bepsbot_ui_assessment.png",
      video: "assets/bepsbot_demo.mp4",
      summary:
        "我在浙江大学的硕士论文研究：面向双相障碍在线同伴支持社区的高质量回复双模式 AI 写作助手。AS（评估）模式基于 LIWC-2015 特征微调的 RoBERTa 回归模型实时给出 ES/IS 评分；RE（建议）模式在 48K 帖 r/bipolar 语料上做两阶段检索，返回 3 份语言学改写草稿。经 24 人被试内研究验证（SUS 88.0、κ=.78、IS F1=.62 / ES F1=.68），并以 PCC 口头报告形式发表于 HHME 2026。",
      highlights: [
        { num: "24", label: "被试 · 被试内研究" },
        { num: "SUS 88.0", label: "优秀（Bangor 等）· 70.8% A 级" },
        { num: "κ=.78", label: "编码员一致性 · 450 条金标准评论" },
        { num: "IS .62 / ES .68", label: "F1 · 10 折 CV · 100 条留一验证 IS 65% / ES 75%" },
      ],
      problem:
        "在线双相障碍社区中的同伴支持者所写回复，可能无意中缺乏支持性、事实错误，甚至不安全。当时没有实时衡量支持质量的方法，也没有将生成式建议扎根于证据的手段，LLM 输出在临床高风险场景下存在幻觉与有害建议的风险。",
      roleDetail:
        "设计了双模式微服务架构；主导数据集构建与 3 位专家标注；构建 RoBERTa + LIWC-2015 评分流水线；构建 Elasticsearch + BERT 两阶段检索流水线；部署 FastAPI 推理服务；实现基于 LLM 的安全过滤中间件；开展 24 人被试内研究；以 PCC 口头报告发表于 HHME 2026。",
      architecture:
        "解耦微服务：Flask 前端（UI 宿主 + 编排层）与高并发 FastAPI 推理后端通信。两模式共享基础设施：(1) AS（评估）——基于 LIWC-2015 特征的微调 RoBERTa 回归模型返回 ES/IS 分数与一条与当前草稿相关联的改进建议；(2) RE（建议）——Elasticsearch More-Like-This 选出 50 个 tf-idf 候选，再以 768 维 BERT 余弦相似度重排，LLM 返回 3 份改写草稿（人称代词 / 家人朋友 / 积极词汇）。异步处理通过 ThreadPoolExecutor 并行运行 LLM 生成与安全检查。",
      algorithm:
        "在 450 条专家标注评论上，使用自定义回归头对 RoBERTa 做迁移学习，覆盖 4 个 LIWC-2015 特征组（长度、人称代词、社交、积极情感）。10 折 CV 基线：IS 最优 = 随机森林（F1=.62），ES 最优 = XGBoost（F1=.68）。100 条留一交叉验证：IS 65%、ES 75%。AS 模式设计规则——(1) 反馈语句与当前分数相关联；(2) 长度问题仅在首次出现时提出，第 2–4 组以随机因子采样以避免单一特征主导；(3) 在引出第 2、3、4 组时，从 LIWC-2015 词典中随机推荐 12 个相关词以激发灵感。RE 模式流水线——ES More-Like-This → BERT 余弦 → 三种保留草稿交际意图的改写。安全闸口：基于 LLM 的内容审核（拦截自伤、有害医疗建议）。",
      methodology: [
        "通过 Pushshift 爬取并预处理 48,148 条 r/bipolar 语料以及覆盖六年的通用心理健康 Reddit 语料。",
        "主导 3 位领域专家按 1–3 IS/ES 量表标注 450 条评论（Cohen's κ > 0.85），构建金标准训练集。",
        "在 LIWC-2015 特征上微调 RoBERTa 进行 ES/IS 回归；与 SVM、多项式逻辑回归、随机森林（IS 最优）、XGBoost（ES 最优）进行基线对比。",
        "构建两阶段 RE 流水线：Elasticsearch More-Like-This（50 个候选）→ 768 维 BERT 余弦重排 → LLM 生成 3 份改写草稿。",
        "实现 AS 模式设计规则：条件性反馈语句、反特征主导采样、12 词 LIWC 启发。",
        "通过与 Flask 前端解耦的 FastAPI 后端部署双模式服务，并行运行 LLM 与安全检查。",
        "以主动学习流水线收尾：过滤、伪标注新提交并折叠回训练集。",
        "开展 24 人被试内研究（12 女 / 12 男，3 个写作任务，Latin square 平衡），采集 SUS、5 点 Likert 信心与满意度、IS/ES 量表，以及 15–25 分钟半结构化退出访谈。",
      ],
      features: [
        "双模式 UX：AS（评估 + 一条建议）与 RE（3 份改写草稿），采用非打扰式「先预览后隐藏」流程",
        "基于特征的实时 ES/IS 评分反馈（长度、人称代词、社交、积极情感）",
        "扎根 48K 条 r/bipolar 语料的检索——两代实现：ES More-Like-This → BERT 余弦（论文版）与 ChromaDB RAG（当前代码）",
        "三种定向改写：人称代词、家人朋友（LIWC 社交）、积极词汇（LIWC 积极情感）",
        "实时 LLM 安全过滤器——拦截自伤、有害建议与危险内容",
        "自动化主动学习闭环——模型持续自我改进，无需人工干预",
        "解耦的 Flask + FastAPI 微服务架构，支持高并发",
      ],
      impact:
        "SUS 达到 88.0（SD=11.4），70.8% 评为 A 级——显著高于 68 分的行业平均水平。14/24（58.3%）被试 ES 提升，15/24（62.5%）被试 IS 提升。T3 IS × T3 信心 Spearman rs=.552（p=.005，Bonferroni 校正）。任务完成时间从 T1（11.21 分钟）降至 T3（7.59 分钟），减少 32.3%。识别出三种用户行为模式——A 校验（26/39，66.7%）、B 选择性整合（8/39，20.5%）、C 完全替换（5/39，12.8%，涉及自主性顾虑）。以 PCC 口头报告发表于 HHME 2026（Springer LNCS 在投）。",
      evaluation:
        "ES/IS 预测在 SVM、多项式逻辑回归、随机森林、XGBoost 与微调 RoBERTa 之间进行基准对比（10 折 CV；IS F1=.62、ES F1=.68；100 条交叉验证：IS 65%、ES 75%）。内容改动由 2 名独立编码员标注（Cohen's κ=.78，substantial 级）。用户研究：24 被试、3 个写作任务（Latin square 平衡）、5 点 Likert 信心与满意度、SUS 88.0（优秀级），以及 15–25 分钟半结构化退出访谈。通过 HHME 2026 PCC 口头报告与 Springer LNCS 稿件获得验证。",
      stack: [
        "Python", "Flask", "FastAPI", "PyTorch", "RoBERTa", "BERT (768-dim)",
        "LangChain", "DeepSeek LLM", "Sentence Transformers", "ChromaDB", "RAG",
        "Elasticsearch", "More-Like-This (tf-idf)", "LIWC-2015", "spaCy", "NLTK",
        "all-MiniLM-L6-v2", "Pushshift API", "ThreadPoolExecutor",
      ],
      sections: [
        {
          title: "系统架构",
          body: `
            <p class="pd-lead">解耦的双模式推理栈——RoBERTa + LIWC 评分器与 Elasticsearch + BERT 检索器——通过 Flask 编排层协调。同一道安全闸口同时包裹两种模式，LLM 永远不会返回未审核的文本。</p>
            <figure class="pd-fig">
              <img src="assets/bepsbot_architecture.png" alt="BepsBot 系统架构" />
              <figcaption>图 1 — 系统架构：Flask 前端、FastAPI 推理、RoBERTa + LIWC-2015 评分器、Elasticsearch + BERT 检索、DeepSeek LLM、并行安全过滤器。</figcaption>
            </figure>
          `,
        },
        {
          title: "工程简报 — 三条硬性要求",
          body: `
            <p class="pd-lead">工程简报：构建一个能切实改善心理健康社区支持性沟通质量的系统——同时绝不依赖 LLM 自身来保证安全与事实正确。这份简报产生了三条硬性工程要求。</p>
            <div class="pd-cards">
              <div class="pd-card"><h4>R1 · 可度量</h4><p>支持质量必须「被打分」而非"靠猜"——基于心理语言学特征的回归模型，并以专家标注为基准（10 折交叉验证、F1、R²）。</p></div>
              <div class="pd-card"><h4>R2 · 有依据</h4><p>生成必须检索增强——LLM 在真实高质量示例的上下文里写作，绝不凭空臆造。</p></div>
              <div class="pd-card"><h4>R3 · 安全</h4><p>每条输入与每个生成的候选都必须经过 LLM 安全审核——危险建议、自伤怂恿与有害内容一律拦截或打码。</p></div>
              <div class="pd-card"><h4>约束驱动设计</h4><p>评分由本地 transformer 完成（快速、私密、推理零成本）；LLM 只留给生成与审核等依赖语言流畅度的环节。每个组件都能优雅降级——界面永不崩溃。</p></div>
            </div>
          `,
        },
        {
          title: "系统设计 — 分层架构与 API 接口面",
          body: `
            <p class="pd-lead">两个进程、两种模式、一道安全闸门：Flask 负责 UX 与编排；FastAPI 负责模型、检索、生成与审核。</p>
            <ol>
              <li><strong>客户端层</strong> —— 浏览器模板（index.html、analyse.js），含预览 / 接受 / 提交流程。</li>
              <li><strong>编排层（Flask :5000）</strong> —— <code>app.py</code> 提供 /assess 与 /recommend；阈值分层 + LIWC 向量的反馈引擎；内存会话存储 → record/*.json。</li>
              <li><strong>模型服务（FastAPI :8000）</strong> —— <code>backend_api.py</code> 暴露 /predict_scores 与 /recommend_candidates；TransformerPredictor（roberta_is、roberta_es）、GenerativeRecommender（LLM + 检索 + 线程）、SafetyFilter（LLM 输入输出双向审核）。</li>
              <li><strong>模型与检索</strong> —— RoBERTa IS/ES 回归器、all-MiniLM-L6-v2（384 维，代码版）、BERT 768 维（论文版）、LIWC-2015 + NRC 心理语言学词典。</li>
              <li><strong>数据层</strong> —— chroma_db 向量库（RAG）、record/*.json 交互日志、Elasticsearch（论文版）、dataset.csv 评分评论。</li>
            </ol>
            <table style="width:100%;border-collapse:collapse;font-size:.85rem;margin:1.2rem 0">
              <thead><tr style="border-bottom:2px solid #8892b0"><th style="text-align:left;padding:.45rem .6rem">接口</th><th style="text-align:left;padding:.45rem .6rem">请求</th><th style="text-align:left;padding:.45rem .6rem">响应</th></tr></thead>
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
          title: "核心流水线 — 安全闸门控制流",
          body: `
            <p class="pd-lead">来自代码库的真实控制流——安全闸门、约束生成、并行推理。</p>
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
              <li><strong>A 模式 · 评估</strong> —— RoBERTa IS + ES 回归 → 浮点分数；LIWC-2015 向量 + TextBlob → 可解释特征；阈值分层选择反馈开场白；ppron / social / posemo 中最弱的一项获得针对性建议，并附带 12 个采样的 LIWC 词。</li>
              <li><strong>B 模式 · 推荐</strong> —— 先对用户输入过 LLM 安全闸门；3 份受约束改写并行生成、每份均有 RAG 依据；3 份输出并行安全审核、不安全的打码；去重 + 规则兜底保证 3 份候选各不相同。</li>
            </ul>
          `,
        },
        {
          title: "LLM 与 RAG 工程 — 双温度 · 双重审核 · 两代检索",
          body: `
            <p class="pd-lead">同一个模型（deepseek-chat，经 OpenAI SDK 调用），两个精心设计的任务、两种刻意不同的温度——创意生成 0.7，确定性审核 0.0。</p>
            <div class="pd-cards">
              <div class="pd-card"><h4>LLM · 两个任务</h4><p>生成（temp 0.7）负责改写草稿；审核（temp 0.0）负责安全判定。"只返回文本"让 LLM 输出保持干净、可直接交给 UI。</p></div>
              <div class="pd-card"><h4>双重审核</h4><p>每条推荐两次审核：生成前的输入闸门 + 生成后的并行逐候选审核——最多 4 次审核调用 + 3 次生成，分两波线程池完成。API 出错时采取 fail-open 策略，保证审核服务故障不会阻断正常流量。</p></div>
              <div class="pd-card"><h4>RAG · 两代实现</h4><p>当前代码库采用 ChromaDB RAG 流水线；HHME 2026 论文记录的是更早的两阶段 Elasticsearch + BERT 流水线。原则一致——生成之前先用真实示例做依据。</p></div>
            </div>
          `,
        },
        {
          title: "实际运行界面",
          body: `
            <p class="pd-lead">运行中应用的真实截图 —— 嵌入心理健康论坛任务流程的双模式写作助手。</p>
            <div class="pd-gallery">
              <figure class="pd-screenshot"><img src="assets/bepsbot_ui_assessment.png" alt="BepsBot 评估模式界面" /><figcaption>评估（AS）模式 —— 实时 IS/ES 评分报告与基于 LIWC 的针对性改进建议。</figcaption></figure>
              <figure class="pd-screenshot"><img src="assets/bepsbot_ui_forum.png" alt="BepsBot 论坛帖子与回复流程「 /><figcaption>论坛帖子上下文 —— 助手所在的回复编辑器，以及」先预览后隐藏"的交互方式。</figcaption></figure>
            </div>
          `,
        },
        {
          title: "数据流水线 — 48K r/bipolar 语料 + 3 位专家标注",
          body: `
            <p class="pd-lead">数据底座是一个 48,148 条 r/bipolar 语料池，加上覆盖六年的通用心理健康 Reddit 语料。从双相语料中，由 3 位领域专家按 1–3 IS/ES 量表标注 450 条评论，标注员间一致性较高（Cohen's κ > 0.85）。特征工程使用 LIWC-2015；四个特征组——<em>长度</em>、<em>人称代词</em>、<em>社交</em>、<em>积极情感</em>——同时驱动模型与 AS 模式反馈逻辑。</p>
            <div class="pd-cards">
              <div class="pd-card"><h4>48,148</h4><p>条 r/bipolar 数据湖中的评论，用于 RE 检索</p></div>
              <div class="pd-card"><h4>450</h4><p>条金标准评论，由 3 位领域专家标注（κ > 0.85）</p></div>
              <div class="pd-card"><h4>4</h4><p>个 LIWC-2015 特征组：长度 · 人称代词 · 社交 · 积极情感</p></div>
              <div class="pd-card"><h4>IS .62 / ES .68</h4><p>F1（10 折 CV，SVM/MLR/RF/XGBoost/RoBERTa 中最优）</p></div>
            </div>
          `,
        },
        {
          title: "AS 模式 — 条件性反馈 + LIWC 启发",
          body: `
            <p class="pd-lead">AS 模式每次预览只浮现一条与当前草稿分数相关联的改进建议。三条设计规则决定了反馈流程：(1) 反馈语句与当前 IS/ES 分数相挂钩；(2) 长度问题仅在首次出现时提出，第 2–4 组以随机因子采样，避免单一特征主导；(3) 在引出第 2、3、4 组时，BepsBot 从 LIWC-2015 词典中随机推荐 12 个相关词，激发写作灵感。</p>
            <figure class="pd-fig">
              <img src="assets/bepsbot_assessment.png" alt="BepsBot AS 模式" />
              <figcaption>图 2 — AS 模式：(i) IS/ES 报告与 (ii) 一条基于特征的改进建议。</figcaption>
            </figure>
          `,
        },
        {
          title: "RE 模式 — 两阶段检索流水线",
          body: `
            <p class="pd-lead">RE 模式返回用户当前草稿的 3 种语言学改写版本，每种侧重一种支持策略。检索为两阶段以保证近实时响应：先用 Elasticsearch <em>More-Like-This</em> 查询从 48K 条 r/bipolar 语料中选出 50 个 tf-idf 候选，再以 768 维 BERT 嵌入的余弦相似度重排。从重排靠前的候选中，BepsBot 针对用户原草稿生成 3 份改写，每份应用一种定向改写：(1) 人称代词（<em>I, you, we, your</em>）；(2) 家人与朋友（LIWC <em>社交</em>：<em>friend, family, together, community</em>）；(3) 积极词汇（LIWC <em>积极情感</em>：<em>hope, care, brave, courage</em>）。</p>
            <figure class="pd-fig">
              <img src="assets/bepsbot_re_pipeline.png" alt="BepsBot RE 模式两阶段检索" />
              <figcaption>图 3 — RE 模式：两阶段检索流水线（Elasticsearch More-Like-This → BERT 余弦）与三种定向改写。</figcaption>
            </figure>
          `,
        },
        {
          title: "用户研究 — 24 被试 · SUS 88.0 · κ=.78",
          body: `
            <p class="pd-lead">24 名被试（12 女 / 12 男，年龄 22–33，M=27.75，SD=3.40）通过在线心理健康同伴支持平台招募，参与被试内纵向研究。每位被试在 Latin square 平衡下完成 3 个写作任务（T1–T3），分别针对 3 篇由自述双相障碍患者从自身经历撰写的求助帖撰写支持性回复。</p>
            <div class="pd-highlights">
              <div class="pd-highlight"><div class="ph-num">SUS 88.0</div><div class="ph-label">SD=11.4 · 70.8% A 级（行业均值 68）</div></div>
              <div class="pd-highlight"><div class="ph-num">32.3%</div><div class="ph-label">T1→T3 任务耗时下降（11.21→7.59 分钟）</div></div>
              <div class="pd-highlight"><div class="ph-num">100% / 87.5%</div><div class="ph-label">T1 / T3 首选 AS 模式的比例</div></div>
              <div class="pd-highlight"><div class="ph-num">rs=.552</div><div class="ph-label">T3 IS × T3 信心（p=.005，Bonferroni）</div></div>
            </div>
            <p>通信质量由 2 名独立编码员按 1–3 IS/ES 量表标注（Cohen's κ=.78，substantial 级）。行为日志与 15–25 分钟半结构化退出访谈以反思性主题分析。归纳出三种用户行为模式：A 校验（26/39，66.7%——把 AS 当作确认信号、原样提交）、B 选择性整合（8/39，20.5%）、C 完全替换（5/39，12.8%——引发对作者性的关注）。</p>
          `,
        },
        {
          title: "工程栈与可靠性",
          body: `
            <p class="pd-lead">完整技术栈，以及围绕它的可靠性与安全工程。</p>
            <div class="pd-cards">
              <div class="pd-card"><h4>服务层</h4><p>Python · Flask · FastAPI · uvicorn · Pydantic</p></div>
              <div class="pd-card"><h4>模型</h4><p>PyTorch · Transformers · RoBERTa · BERT · sentence-transformers</p></div>
              <div class="pd-card"><h4>检索</h4><p>Elasticsearch More-Like-This · ChromaDB · LangChain</p></div>
              <div class="pd-card"><h4>LLM</h4><p>DeepSeek（deepseek-chat）· OpenAI SDK · 提示词工程</p></div>
              <div class="pd-card"><h4>NLP 特征</h4><p>LIWC-2015 · NRC · spaCy · NLTK · TextBlob</p></div>
              <div class="pd-card"><h4>ML 工具</h4><p>scikit-learn · XGBoost · pandas · datasets · evaluate</p></div>
              <div class="pd-card"><h4>并发</h4><p>ThreadPoolExecutor —— 并行生成与审核</p></div>
              <div class="pd-card"><h4>前端</h4><p>HTML · Bootstrap 3 · jQuery · vanilla JS</p></div>
            </div>
            <p><strong>可靠性与安全</strong> —— 所有凭据经环境变量注入（.env 已加入 .gitignore）；LLM 对输入与输出双向审核（自伤、有害医疗建议、毒性内容）；Elasticsearch 走 HTTPS + 基础认证 + CA 校验；敏感数据（record/、chroma_db/、models/）排除在 git 之外。<strong>MLOps 闭环</strong> —— record/ → 清洗与安全过滤 → 用当前模型伪标注 → 追加 CSV → 重训 RoBERTa → 验证（MSE / R² / 安全通过率）→ 提升至服务路径 → 监控漂移（分数偏移、兜底率、拦截率）。</p>
          `,
        },
        {
          title: "讨论 — 声音保留 · 确认 vs 修改 · 自主性",
          body: `
            <p class="pd-lead">研究揭示了一个反直觉的发现：评估性反馈主要起到<em>确认机制</em>，而非修改触发器。多数被试（66.7%）在使用 AS 作为校验节点后，原样提交了 AI 介入前的草稿。5 名被试以身份认同为由主动拒绝 RE 模式，认为建议「过于机械」或威胁到自身经验权威。这并非系统失败，而是一种合理的用户立场：<em>声音保留</em>。</p>
            <div class="pd-callout"><b>设计启示：</b>面向心理健康社区的 AI 写作支持，应从自动化走向增强反思与表达。未来的系统应强调评估透明、情境敏感与对用户作者性的尊重。12.8% 的完全替换模式表明，基于检索的、非情境化的样例偶而被视为语境不足——这驱动我们下一步研究自适应的、情境感知的生成机制。</div>
            <p class="pd-lead">开放性局限：24 名被试限制了结论的可推广性；3 次会话仅捕捉到早期适应；RE 模式依赖基于检索的样例（而非生成式）。未来工作还应考察支持<em>接收方</em>如何看待 AI 协助的同伴回复——真实性、信任感与情感影响。</p>
          `,
        },
      ],
      links: [
        { label: "GitHub 仓库", url: "https://github.com/Minhazul249602/Bepsbot-Comment-Analysis", external: true },
        { label: "HHME 2026 PCC 论文", url: "https://hhme.ccf.org.cn/PCC_paper.html", external: true },
        { label: "交互式演示文稿", url: "bepsbot/Bepsbot_Portfolio_Presentation.html", external: false },
      ],
    },
    {
      id: "sprout",
      title: "SPROUTH — 变形式冥想设备",
      short: "受生物启发的形变设备，帮助学生将『害怕失败』转化为成长型思维（5 人团队，ITDP 课程）。",
      category: "嵌入式与物联网",
      period: "2023 年 9 月 – 2023 年 12 月",
      org: "浙江大学 · ITDP 期末项目",
      role: "系统与嵌入式设计师（系统 · 编码 · 电路 · 测试 · 文档）",
      image: "assets/sprout_hero.png",
      video: null,
      summary:
        "一款受生物启发、可变形体的互动设备，帮助大学生将三个相互关联的心理压力源——高学业自我期待、害怕失败（FOF）以及难以养成成长型思维——转化为反思与韧性。浙江大学《交互技术与设计实践》课程 5 人团队期末项目。系统以 Arduino Mega 2560 为核心，集成了 RFID 读卡器、步进电机 + 直线滑台、DFPlayer Mini 音频模块、8 颗 LED、HC-SR04 超声波传感器、3D 打印 PLA 外壳与激光切割 80 GSM 纸草——共同编排为一段 4 阶段冥想流程。",
      highlights: [
        { num: "3", label: "个目标压力源 · FOF · 自我期待 · 成长型思维" },
        { num: "10", label: "个硬件组件 · Arduino Mega 2560 + 9 个外设" },
        { num: "4", label: "阶段冥想流程 · 放种子 → 冥想 → 浇水 → 生长" },
        { num: "3", label: "轮硬件 + 3 轮草图 + 3 轮材料迭代才定稿" },
      ],
      problem:
        "大学生面临三个相互关联的心理压力源——高学业自我期待、害怕失败（FOF）、以及难以养成成长型思维。现有干预要么打扰性强，要么与日常校园生活脱节，要么把问题当成单点缺陷而非一个完整的心态循环。SPROUTH 介入大学生真正生活与学习的宿舍桌面与工作站实验室——通过一种非打扰、私密、受生物启发的仪式。",
      roleDetail:
        "端到端设计整套系统工作流并选定所有传感器。完整实现 Arduino Mega 2560 固件（C/C++）：RFID 扫描（MFRC522，SPI 50–52 号引脚）、8 颗 LED 顺序点亮（15–18 与 22–25 号引脚）、60 RPM 步进电机（4–7 号引脚）、DFPlayer Mini 音频（SoftwareSerial 10–11 号引脚）、HC-SR04 接近检测、14 号引脚复位处理。绘制完整电路图，主导最终装配与功能集成测试，并撰写 71 页最终报告中的技术章节。",
      architecture:
        "以 Arduino Mega 2560（ATmega2560，54 路数字 I/O，16 路模拟输入）作为中央控制器。(1) 输入层——RFID-RC522（13.56 MHz，SPI 50–52 号引脚）识别用户身份；HC-SR04 超声波传感器检测浇水杯接近。(2) 输出层——200 步/转 步进电机 + 直线滑台，60 RPM（4–7 号引脚）驱动 3D 打印植物托盘；DFPlayer Mini MP3 模块（SoftwareSerial 10–11 号引脚）播放风声与水声，音量 30；8 颗 LED（4 颗蓝色 22–25 号引脚用于冥想加载，4 颗绿色 15–18 号引脚用于草生长）。(3) 复位——14 号引脚的按键将系统恢复至初始态。(4) 外壳——3D 打印 PLA 盒体，Fusion 360 设计，带走线槽与用户交互面板；激光切割 80 GSM 纸草（第 3 轮图样），400 单位/分钟、10% 功率，Adobe Illustrator 矢量化。",
      algorithm:
        "非阻塞 4 阶段状态机：(1) IDLE——用户将种子形 RFID 卡片放在读卡器上；(2) MEDITATE——计时器启动，4 颗蓝灯（22/23/24/25）顺序点亮，DFPlayer Mini 播放环境风声；(3) WATER——用户将浇水杯靠近（HC-SR04 检测到接近），4 颗绿灯（15/16/17/18）顺序点亮，播放流水声，步进电机移动植物托盘模拟草生长；(4) COMPLETE——用户按复位按键（14 号引脚）重启会话。各阶段采用非阻塞计时，使流程保持响应与冥想感。",
      methodology: [
        "5 人团队开展情境调查，识别 3 个目标压力源：高学业自我期待、害怕失败（FOF）、缺乏成长型思维。",
        "迭代 3 轮硬件概念：(i) 生长植物 + 种子；(ii) 植物 + 3 个滑块代表生长阶段；(iii) 植物 + 配 HC-SR04 超声波传感器 + 音频反馈的浇水杯。",
        "在 Adobe Illustrator 中测试 3 轮草图（叶片单元数量不同）；第 3 轮叶片最少，电机阻力最低。",
        "测试 3 种纸张材料（250 GSM、180 GSM、80 GSM）；只有 80 GSM 具备足够的柔韧性供电机干净弯折。",
        "在 Fusion 360 中原型设计外壳，PLA 3D 打印，并以 400 单位/分钟、10% 功率激光切割草图。",
        "完成完整电路接线（RFID SPI 总线、步进 4–7 号引脚、音频 10–11 号引脚、8 颗 LED 15–18/22–25 号引脚、按键 14 号引脚）。",
        "在 Arduino IDE 上用 C/C++ 实现固件，依赖 SPI、MFRC522、Stepper 与 DFRobotDFPlayerMini + SoftwareSerial 库。",
        "对装配好的原型开展端到端功能测试：LED 顺序、步进精度、音频播放、复位可靠性。",
      ],
      features: [
        "受生物启发的形变互动——激光切割纸草由步进电机驱动的直线滑台弯折",
        "RFID-RC522（13.56 MHz）卡片激活——物理的『种子』隐喻作为冥想触发器",
        "8 颗 LED 顺序反馈——4 蓝用于冥想加载，4 绿用于草生长",
        "HC-SR04 超声波接近检测——浇水杯靠近种子时模拟浇水",
        "DFPlayer Mini 音频反馈——风声与流水声环境音，音量 30",
        "非阻塞 4 阶段状态机——放种子 → 冥想 → 浇水 → 生长",
        "14 号引脚复位按键——无需人工干预即可恢复初始态",
        "私密、适合宿舍的形态——可放在书桌前，单人使用或与同伴共处",
      ],
      impact:
        "交付一台可工作的受生物启发的冥想原型，将 10 个硬件组件集成于 3D 打印 + 激光切割的外壳。4 阶段工作流经功能测试端到端验证：LED 顺序点亮正确、步进电机在 60 RPM 下无失步无卡顿、DFPlayer Mini 播放无延迟无失真、复位按键在 5 轮测试中可靠将系统恢复至初始态。作为浙江大学《交互技术与设计实践》课程 5 人团队期末报告发表（2024 年 1 月 2 日）。",
      evaluation:
        "对装配好的原型进行端到端功能测试，所有子系统同步工作：8 颗 LED 顺序点亮正确、步进电机在 60 RPM 下精确移动、无失步与错位、DFPlayer Mini 播放无延迟无失真、复位按键可靠将系统恢复至初始态。3D 打印外壳与激光切割草图与电子系统无缝集成，提升了审美与运行表现。作为浙江大学 ITDP 课程的 5 人团队期末项目获得验证（2024 年 1 月 2 日）。",
      stack: [
        "Arduino Mega 2560 (ATmega2560)", "C/C++ (Arduino IDE)",
        "RFID-RC522 (13.56 MHz, SPI)", "HC-SR04 超声波传感器",
        "步进电机 + 直线滑台 (200 步/转, 60 RPM)",
        "DFPlayer Mini MP3 模块", "8 颗 LED + 220Ω 电阻「, 」按键（复位）",
        "SPI (RFID)", "SoftwareSerial (DFPlayer)", "数字 I/O（LED + 步进 + 音频 + 按键）",
        "Fusion 360 (3D)", "Adobe Illustrator (2D)",
        "3D 打印 (PLA)", "激光切割 (80 GSM 纸, 400 单位/分钟, 10% 功率)",
      ],
      sections: [
        {
          title: "生物灵感 —— 穿越岩石土壤的种子",
          body: `
            <p class="pd-lead">SPROUTH 的隐喻取自一颗种子穿越岩石土壤长成植物——将学业中的障碍重新解读为成长与学习的机会。情绪化设计在用户与「韧性与发展」叙事之间建立具象连接，传递赋能与希望感。"种下一粒种子"正是设备的字面激活：用户将种子放入口袋，触发系统。</p>
            <figure class="pd-fig">
              <img src="assets/sprout_emotional.jpg" alt="情绪化设计" />
              <figcaption>图 1 — 为什么"情绪化"？正是受生物启发的隐喻，把一台硬件 demo 变成了心态工具。</figcaption>
            </figure>
          `,
        },
        {
          title: "设计迭代 —— 从种子到浇水杯",
          body: `
            <p class="pd-lead">在定型 SPROUTH 之前共迭代了 3 轮硬件概念：(1) 生长植物 + 种子，激活草生长；(2) 同样的种子机制 + 3 个滑块代表生长阶段；(3) 种子 + 配 HC-SR04 超声波传感器 + 音频反馈的<em>浇水杯</em>。只有第 3 个方案让系统与用户的正念循环对齐。同时，在 Adobe Illustrator 中测试了 3 轮草图（叶片单元数量不同），并测试了 3 种纸张（250 GSM、180 GSM、80 GSM）——第 3 轮叶片最少的草图 + 80 GSM 纸是唯一能让步进电机干净弯折的组合。</p>
            <figure class="pd-fig">
              <img src="assets/sprout_intro.png" alt="设计迭代" />
              <figcaption>图 2 — 迭代式概念探索；只有浇水杯设计解决了"系统 vs 目的"的错位。</figcaption>
            </figure>
          `,
        },
        {
          title: "系统架构 —— Arduino Mega 2560 + 9 个外设",
          body: `
            <p class="pd-lead">中央控制器为 Arduino Mega 2560（ATmega2560，54 路数字 I/O，16 路模拟输入）。输入层：<b>RFID-RC522</b>（13.56 MHz，SPI 50–52 号引脚）读取用户身份；<b>HC-SR04 超声波传感器</b>检测浇水杯接近。输出层：<b>步进电机 + 直线滑台</b>（200 步/转、60 RPM，4–7 号引脚）驱动 3D 打印植物托盘；<b>DFPlayer Mini MP3 模块</b>（SoftwareSerial 10–11 号引脚）播放风声与水声；<b>8 颗 LED</b>（4 颗蓝色 22–25 号引脚用于冥想、4 颗绿色 15–18 号引脚用于生长）提供顺序反馈。<b>14 号引脚的按键</b>复位系统。外壳为 3D 打印 PLA 盒体（Fusion 360 设计，带走线槽与用户交互面板）；草图为 80 GSM 纸，激光切割，400 单位/分钟、10% 功率。</p>
            <figure class="pd-fig">
              <img src="assets/sprout_structure.png" alt="内部产品结构" />
              <figcaption>图 3 — 内部结构：Arduino Mega 2560 + RFID + 步进 + 音频 + 8 颗 LED，集成在 3D 打印 PLA 外壳内。</figcaption>
            </figure>
          `,
        },
        {
          title: "4 阶段冥想工作流",
          body: `
            <p class="pd-lead">一台非阻塞状态机驱动用户依次完成 4 个冥想阶段：</p>
            <ol>
              <li><b>IDLE</b>——用户将种子形 RFID 卡片放在读卡器上；系统激活。</li>
              <li><b>MEDITATE</b>——计时器启动，4 颗蓝灯（22/23/24/25）顺序点亮，DFPlayer Mini 播放环境风声。</li>
              <li><b>WATER</b>——用户将浇水杯靠近种子；HC-SR04 检测到接近，4 颗绿灯（15/16/17/18）顺序点亮，播放流水声，步进电机移动植物托盘"长"出草。</li>
              <li><b>COMPLETE</b>——用户按复位按键（14 号引脚）重启会话。</li>
            </ol>
            <figure class="pd-fig">
              <img src="assets/sprout_views.png" alt="最终原型，整体视图" />
              <figcaption>图 4 — 最终 SPROUTH 原型，部署在宿舍/实验室的真实场景中。</figcaption>
            </figure>
          `,
        },
        {
          title: "代码与电路 —— 完整固件实现",
          body: `
            <p class="pd-lead">固件以 C/C++ 编写，运行于 Arduino IDE，依赖 4 个库：<b>SPI</b>（RFID）、<b>MFRC522</b>（RFID 协议）、<b>Stepper</b>（电机控制）、<b>DFRobotDFPlayerMini + SoftwareSerial</b>（音频）。完整引脚映射：<code>RST_PIN=9, RFID_CS_PIN=8, LED1–4 on 22/23/25/24, LED5–8 on 15/17/16/18, SWITCH_PIN=14, STEPPER_PIN1–4 on 4/5/6/7, SOUND_RX_PIN=10, SOUND_TX_PIN=11</code>。主循环持续监测复位按键与 RFID 读卡器；复位处理函数关闭全部 8 颗 LED、步进电机回退 +450 步至起点、停止音频并清空状态。</p>
            <figure class="pd-fig">
              <img src="assets/sprout_coding.png" alt="代码 / 固件" />
              <figcaption>图 5 — 固件结构：引脚定义、RFID 扫描、LED 顺序点亮、步进移动、音频播放、复位。</figcaption>
            </figure>
          `,
        },
        {
          title: "尺寸与形态",
          body: `
            <p class="pd-lead">SPROUTH 的尺寸可舒适放置于大学宿舍桌面或工作站实验室——在自习、休息、社交等场景下足够低调，又能容纳 Arduino Mega 2560、RFID 读卡器、步进电机 + 滑台、音频模块与 LED 阵列。3D 打印外壳包含导轨与平台，与步进电机的直线滑台无缝配合；并设有走线槽，让布线整洁。</p>
            <figure class="pd-fig">
              <img src="assets/sprout_dimensions.png" alt="尺寸" />
              <figcaption>图 6 — SPROUTH 原型的物理尺寸。</figcaption>
            </figure>
          `,
        },
        {
          title: "生物启发的造型与美学",
          body: `
            <p class="pd-lead">外壳模拟种子穿越土壤的旅程，激光切割的纸草以鲜亮的绿色纹理呈现真实草的抽象质感。切割参数为 400 单位/分钟、激光器总功率的 10%——这一配置最大化切割速度，同时最小化材料浪费并提升成品边缘质量。</p>
            <figure class="pd-fig">
              <img src="assets/sprout_bio.jpg" alt="生物启发造型" />
              <figcaption>图 7 — 生物启发的造型：种子、土壤、生长中的草。</figcaption>
            </figure>
          `,
        },
        {
          title: "测试与集成 —— 功能验证",
          body: `
            <p class="pd-lead">对装配好的原型开展端到端功能测试，所有子系统同步工作：</p>
            <ul>
              <li>8 颗 LED 顺序点亮正确，无闪烁与竞态。</li>
              <li>步进电机在 60 RPM 下精确移动，无失步、无错位。</li>
              <li>DFPlayer Mini 播放音频无延迟、无失真，音量 30。</li>
              <li>复位按键在全部 5 轮测试中可靠将系统恢复至默认状态。</li>
              <li>3D 打印外壳与激光切割草图与电子系统无缝集成，提升了审美与运行表现。</li>
            </ul>
            <div class="pd-callout"><b>团队分工：</b>Minhazul Islam——系统设计、固件、电路图、原型测试、技术文档、影像记录。Tasnim Afra——文献综述、报告 85%、影像记录。Mathule Makoma——背景研究、3D 草图、CAD / 3D 打印 / 激光切割。Gabriela Sanchez——概念可视化、图形、答辩。Fahim Rana——焊接、装配、MP3 文件编辑、接线核对。</div>
          `,
        },
      ],
      links: [
        { label: "GitHub 仓库", url: "https://github.com/Minhazul249602/SPROUT", external: true },
        { label: "完整报告 (PDF)", url: "docs/sprout/Final_Report.pdf", external: false },
      ],
    },
    {
      id: "inventor",
      title: "Autodesk Inventor API — 参数化 CAD 自动化",
      short: "通过关键尺寸驱动 Autodesk Inventor 模型的 Python 系统。",
      category: "自动化",
      period: "2024 年 4 月 – 2024 年 8 月",
      org: "ProFabx",
      role: "软件工程师",
      image: null,
      video: "assets/api.mp4",
      summary:
        "创建了一个使用 Python 的参数化建模系统，通过修改关键尺寸动态更新 Autodesk Inventor 3D 模型——自动化重复性 CAD 任务，显著缩短设计时间并减少手动错误。",
      highlights: [
        { num: "40%", label: "设计流程耗时节省" },
        { num: "0", label: "次需要的手动尺寸编辑" },
        { num: "2", label: "个实现自动化的 CAD 平台（Inventor + Fusion）" },
        { num: "100%", label: "重复性任务自动化" },
      ],
      problem:
        "手动 CAD 建模缓慢且易出错：每次设计修订都需要工程师重绘或重新标注模型，重复性建模任务消耗大量设计时间。",
      roleDetail:
        "设计并构建了参数化建模系统，编写了 Python/win32com 自动化层，并集成了用于实时参数驱动更新的 JavaScript Web 界面。",
      architecture:
        "通过 COM API（win32com.client）与 Autodesk Inventor 通信的 Python 脚本层。关键尺寸作为参数暴露；JavaScript Web 界面让用户修改参数并动态看到 3D 模型更新。",
      algorithm:
        "参数化约束传播：模型尺寸绑定到命名参数；更新参数会通过 Inventor 的参数化引擎触发整个设计的自动变更传播。",
      methodology: [
        "将 Inventor 模型尺寸映射到参数化模式。",
        "使用 win32com.client 编写 Python 脚本，读写尺寸并重建几何。",
        "创建用于实时参数变更的 JavaScript Web 界面。",
        "将自动化集成到机械设计工作流中，消除重复性任务。",
        "衡量并验证跨设计迭代的耗时节省。",
      ],
      features: [
        "由参数变更驱动的动态 3D 模型更新",
        "用于实时尺寸编辑的 Web 界面",
        "重复性 CAD 建模任务的自动化",
        "Python ↔ Inventor API 的无缝集成",
      ],
      impact:
        "通过自动化重复性建模任务并消除复杂项目中的手动尺寸错误，将设计时间缩短约 40%。",
      evaluation:
        "对自动化前后的设计迭代进行基准测试；参数化系统可靠地传播尺寸变更，零手动返工。",
      stack: ["Python", "Autodesk Inventor", "win32com.client", "JavaScript", "Fusion 360"],
      links: [
        { label: "GitHub", url: "https://minhazulzju.github.io/Autodesk-Inventor-API-with-Python-/", external: true },
      ],
    },
    {
      id: "inclusivevision",
      title: "InclusiveVision — 视障人士智能眼镜",
      short: "带语音告警的可穿戴超声波避障眼镜。",
      category: "嵌入式与物联网",
      period: "2023 年 12 月",
      org: "浙江大学",
      role: "嵌入式开发与设计",
      image: "assets/smart_glass.jpg",
      video: null,
      summary:
        "使用 Arduino UNO 与超声波传感器开发了智能眼镜功能原型，实现最远 50 cm 的实时障碍物检测，并配备即时语音告警系统——提升视障用户的独立性与安全性。",
      highlights: [
        { num: "50cm", label: "实时障碍物检测" },
        { num: "5", label: "个集成传感器" },
        { num: "3D", label: "打印优化镜架" },
        { num: "即时「, label: 」语音反馈" },
      ],
      problem:
        "视障人士需要一种安全、舒适且负担得起的方式在移动中检测障碍物——传统手杖与导盲犬在覆盖范围与可得性上存在局限。",
      roleDetail:
        "设计了可穿戴系统，开发了嵌入式固件，对眼镜镜架进行 3D 建模，并集成了超声波传感器阵列。",
      architecture:
        "Arduino UNO 集成超声波传感器阵列用于障碍物检测；基于 Talkie 库的语音系统根据传感器数据提供即时听觉反馈。镜架在 Fusion 360 中建模，并通过 Flashforge 3D 打印与激光切割制造。",
      algorithm:
        "多传感器距离阈值判断：每个超声波传感器持续测量距离；当障碍物进入设定范围（最远 50 cm）时，系统优先处理最近的读数，并通过 Talkie 库触发相应的语音告警。",
      methodology: [
        "选择并集成超声波传感器，获得宽广的空间覆盖。",
        "使用 Arduino UNO 实现距离感知逻辑。",
        "使用 Talkie 库构建即时反馈的语音告警系统。",
        "在 Fusion 360 中设计可穿戴眼镜镜架，优化舒适度。",
        "制造并组装集成多传感器组件。",
      ],
      features: [
        "最远 50 cm 的实时障碍物检测",
        "即时语音告警",
        "覆盖宽广的多传感器阵列",
        "优化的可穿戴 3D 打印镜架",
      ],
      impact:
        "产出了一个可用的辅助原型，以轻量、低成本的可穿戴形态提升视障用户的独立性与安全性。",
      evaluation:
        "在真实环境中跨多个距离与角度验证了障碍物检测范围与告警可靠性。",
      stack: ["Arduino UNO", "Ultrasonic Sensors", "Talkie Library", "Fusion 360", "Flashforge 3D Printing", "Laser Cutting"],
      links: [
        { label: "项目页面", url: "https://nexmaker-fab.github.io/2023zjudem-The-Dynamic-Seven/#/FINALPROJECT/final", external: true },
      ],
    },
    {
      id: "recommendation",
      title: "产品推荐系统 — 协同过滤",
      short: "基于 goodbooks-10k 数据集、使用矩阵分解的推荐系统。",
      category: "机器学习",
      period: "2022 – 2023",
      org: "云南大学",
      role: "机器学习开发",
      image: null,
      video: null,
      summary:
        "使用矩阵分解为 goodbooks-10k 数据集开发了协同过滤推荐策略，并借助 Python 数据分析与可视化，生成准确、个性化的图书推荐。",
      highlights: [
        { num: "1 万「, label: 」本数据集中的图书" },
        { num: "MF", label: "矩阵分解模型" },
        { num: "欧氏「, label: 」相似度分析" },
        { num: "4", label: "个库：NumPy · Pandas · Matplotlib · Flask" },
      ],
      problem:
        "用户需要从稀疏、高维的评分数据中获得准确、个性化的图书推荐——基于流行度的朴素方法无法捕捉个人品味。",
      roleDetail:
        "实现了完整流水线：数据分析、相似度计算、矩阵分解建模，以及提供推荐服务的 Flask 演示。",
      architecture:
        "Python 数据流水线（NumPy、Pandas、Matplotlib）为矩阵分解推荐模型提供数据，并通过由 MongoDB 支撑的 Flask Web 界面对外提供服务。",
      algorithm:
        "通过矩阵分解进行协同过滤：从评分矩阵中学习用户与物品的潜在因子，产生个性化预测。欧氏距离衡量图书之间的相似度，以支持推荐质量与可解释性。",
      methodology: [
        "使用 Pandas 探索并预处理 goodbooks-10k 数据集。",
        "应用欧氏距离分析图书之间的相似度。",
        "训练矩阵分解模型，生成个性化建议。",
        "使用 Matplotlib 可视化数据与结果。",
        "通过带 MongoDB 存储的 Flask 应用对外提供推荐服务。",
      ],
      features: [
        "个性化的协同过滤推荐",
        "矩阵分解潜在因子模型",
        "基于欧氏距离的相似度分析",
        "数据分析与结果可视化",
      ],
      impact:
        "产出了在 goodbooks-10k 数据集上验证的准确、个性化建议，展示了从探索到部署推荐服务的完整数据科学生命周期。",
      evaluation:
        "通过相似度一致性以及对生成建议与用户阅读模式的定性检查，评估推荐质量。",
      stack: ["Python", "NumPy", "Pandas", "MongoDB", "Matplotlib", "Flask"],
      links: [
        { label: "GitHub", url: "https://github.com/Minhazul249602/Product-Recommendation-System-Based-on-collaborative-algorithm/tree/main/20193290764%20Minhazul%20islam", external: true },
      ],
    },
    {
      id: "iot-attendance",
      title: "基于人脸识别的物联网智能考勤系统",
      short: "免接触的 ESP32-CAM 考勤系统，配备安全的物联网云存储。",
      category: "嵌入式与物联网",
      period: "2022",
      org: "云南大学",
      role: "嵌入式系统开发",
      image: null,
      video: null,
      summary:
        "使用 ESP32-CAM 开发了基于人脸识别的智能物联网考勤系统——自动检测、识别并登记学生，通过 HTTPS 将数据安全地存储在物联网云中，并具备安全、防代签的工作流。",
      highlights: [
        { num: "LBPH", label: "人脸识别算法" },
        { num: "100%", label: "免接触工作流" },
        { num: "HTTPS", label: "安全云存储" },
        { num: "0", label: "杜绝代签" },
      ],
      problem:
        "传统的手动与接触式生物识别考勤系统速度慢、不安全（新冠疫情时期），且容易被代签。",
      roleDetail:
        "开发了嵌入式人脸识别系统、安全认证工作流、物联网云数据存储与防代签逻辑。",
      architecture:
        "ESP32-CAM 在边缘捕获并处理人脸；已登记学生经过校验，其考勤记录通过 HTTPS 存储在物联网云数据库中。Web 层让管理人员监控记录并生成报告。",
      algorithm:
        "LBPH（局部二值模式直方图）人脸识别，在 ESP32-CAM 上采用 OpenCV 风格检测：人脸注册为已登记用户，考勤只对通过校验的登记生效，从而阻止代签。",
      methodology: [
        "配置 ESP32-CAM 进行实时人脸捕获与识别。",
        "实现安全认证工作流，检测、识别并登记学生。",
        "通过 HTTPS 将考勤记录存储在物联网云中。",
        "设计免接触流程，以应对新冠疫情安全顾虑。",
        "仅校验已登记用户——杜绝代签。",
      ],
      features: [
        "自动化的基于人脸考勤捕获",
        "安全的 HTTPS 物联网云存储",
        "免接触、疫期安全的设计",
        "通过登记校验防止代签",
      ],
      impact:
        "交付了一套可靠、安全的考勤系统，移除了手动流程与接触式生物识别，同时防止代签。",
      evaluation:
        "在真实宿舍环境中验证了识别准确率与工作流可靠性。",
      stack: ["ESP32-CAM", "Arduino IDE/C++", "Embedded Systems", "HTTPS", "IoT Cloud"],
      links: [
        { label: "项目页面", url: "https://minhazulzju.github.io/IOT-Based-Dormitory-Attendance-System/#conclusion", external: true },
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
      doi: "10.1007/978-3-032-02534-0_8",
      pages: "61–75",
      published: "2025 年 8 月 27 日",
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
      doi: "10.1007/978-3-032-02534-0_6",
      pages: "37–51",
      published: "2025 年 8 月 27 日",
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
      status: "PCC 口头报告 · 2026 年 8 月 17 日",
      conferenceUrl: "https://hhme.ccf.org.cn/PCC_paper.html",
      doi: null,
      pages: null,
      published: "2026 年 8 月 17 日",
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
      status: "PCC 口头报告 · 2026 年 8 月 17 日",
      conferenceUrl: "https://hhme.ccf.org.cn/PCC_paper.html",
      doi: null,
      pages: null,
      published: "2026 年 8 月 17 日",
      year: 2026,
    },
  ],

  education: [
    {
      degree: "工业设计工程硕士",
      school: "浙江大学",
      period: "2023 年 9 月 – 至今",
      location: "中国浙江",
    },
    {
      degree: "计算机科学与技术学士",
      school: "云南大学",
      period: "2019 – 2023",
      location: "中国昆明",
    },
  ],

  certifications: [
    {
      title: "Generative AI with Large Language Models",
      issuer: "DeepLearning.AI",
      date: "2025 年 11 月",
      note: "LLM 生命周期、扩展定律、PEFT 与 LoRA、用于人类对齐的 RLHF。",
      url: null,
    },
    {
      title: "Mastering Generative AI: Fine-Tuning Transformers",
      issuer: "IBM",
      date: "2025 年 10 月",
      note: "BERT/RoBERTa 微调、量化（QLoRA）、自定义分词。",
      url: null,
    },
    {
      title: "Developing Generative AI Applications with Python",
      issuer: "IBM",
      date: "2025 年 10 月",
      note: "Flask + IBM Watson + OpenAI API，使用 Docker 与 Gradio 构建容器化语音助手。",
      url: null,
    },
    {
      title: "Python for AI & Development Project",
      issuer: "IBM",
      date: "2025 年 9 月",
      note: "Pytest、静态代码分析、打包、数据清洗与特征工程。",
      url: null,
    },
  ],

  achievements: [
    {
      title: "联合国技术银行 — 2023 全球青年人才计划",
      text: "从全球顶尖青年设计师中脱颖而出，入选联合国重点培养项目，作品在创新 3D 设计与工程解决方案方面获得认可。项目课程聚焦先进设计与可持续发展目标的结合，相关内容被联合国技术银行官方网站收录。",
      link: "https://www.un.org/technologybank/news/global-youth-talent-empower-design-new-era-admission-international-design-education-program",
    },
  ],
};
