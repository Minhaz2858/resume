/* ============================================================
   i18n — bilingual (EN / 中文) language switcher
   Load BEFORE data.js / data.zh.js and the page renderer scripts.
   Usage: window.I18N.getData() returns the active-language data,
   I18N.t("key") returns a UI string, I18N.onLangChange(cb) re-renders.
   ============================================================ */

(function () {
  "use strict";

  var STORAGE_KEY = "lang";

  /* ---------- UI strings (static text + JS-generated labels) ---------- */

  var UI = {
    en: {
      meta: {
        title: "Minhazul Islam — AI Engineer Portfolio",
        description:
          "AI Engineer specializing in generative AI, LLM agents, RAG, and production AI systems. Master's from Zhejiang University, publications at ICEC 2025.",
        libTitle: "Project Library — Minhazul Islam",
        libDescription:
          "Comprehensive details on all of Minhazul Islam's AI, ML, and embedded systems projects.",
      },

      nav: {
        about: "About",
        research: "Research",
        skills: "Skills",
        experience: "Experience",
        projects: "Projects",
        education: "Education",
        contact: "Contact",
        home: "Home",
      },

      mm: {
        about: "About",
        researchSt: "Research Statement",
        skills: "Skills",
        experience: "Experience",
        projects: "Projects",
        publications: "Publications",
        education: "Education",
        achievements: "Achievements",
        contact: "Contact",
        library: "Project Library",
        home: "Home",
        featured: "Featured Projects",
        research: "Research",
      },

      hero: {
        kicker: "Available for AI Engineering roles",
        role: "Artificial Intelligence Engineer",
        summary:
          "I design and ship production AI systems end-to-end. As a Synexia AI intern, I solo-built EDIA (17-node LangGraph multi-agent, 30s vs 8 min) and Zhanlu (7-layer enterprise agent platform with 14-service Docker + native MCP). My ZJU master's thesis — BepsBot — combined RAG, RoBERTa, and LIWC-2015 to help bipolar-disorder peer supporters, validated by a 24-participant study (SUS 88.0, κ=.78) and published as a PCC Oral at HHME 2026. 4 publications across ICEC 2025 and HHME 2026; 2023 UN Global Youth Talent.",
        viewProjects: "View My Projects",
        downloadCv: "Download CV",
        contactMe: "Contact Me",
      },

      avail: {
        textStrong: "Open to AI Engineering, AI Infrastructure, and PhD research positions",
        textRest:
          "— multi-agent LLM, RAG, AI infrastructure, production deployment, and applied research in generative AI & HCI.",
        seeProjects: "See Projects",
        industryCv: "Industry CV",
        researchSt: "Research Statement",
      },

      about: {
        eyebrow: "About Me",
        title: "Engineer at the intersection of AI, product, and impact",
        p1: "<strong>AI Engineer focused on production AI systems</strong> — LangGraph multi-agent workflows, a custom Synexia cognitive-orchestration layer (the brain of my Zhanlu platform), ChromaDB retrieval-augmented generation, LLM output guardrails, and FastAPI inference at scale.",
        p2: "Master's in Industrial Design Engineering from Zhejiang University, with a Bachelor's in Computer Science from Yunnan University. I design the <strong>full lifecycle of AI products</strong>: from model research and fine-tuning (RoBERTa, Transformers, PEFT/LoRA) through orchestration, retrieval infrastructure, deterministic validation, and high-concurrency production deployment.",
        p3: "I ship end-to-end AI systems, not just models — including <strong>LangGraph</strong> state-machine orchestration, <strong>LangChain + ChromaDB</strong> RAG pipelines, contract-style prompting, and Python guardrail layers that block hallucinated numbers before they reach users. I have built and deployed a full 7-layer enterprise AI agent platform solo (Zhanlu).",
        p4: "I also work at the <strong>AI + hardware frontier</strong>: Arduino/C++, ESP32-CAM, sensor fusion, IoT, and edge AI, with complete smart-device prototype deployments.",
        interestsTitle: "Research & technical interests",
        goalsTitle: "What I'm working toward",
      },

      rs: {
        eyebrow: "Research Statement",
        title: "Building trustworthy AI systems",
        sub: "A summary of my research direction, methodology, and goals — written for PhD admissions committees, research collaborators, and academic reviewers.",
        p1: "My research investigates how large language models and multi-agent systems can support <strong>decision-making in high-stakes human contexts</strong> — from petrochemical commercial teams to peer-support communities in mental health. I work at the intersection of generative AI, affective computing, and human–AI interaction, with the goal of building AI systems that are simultaneously capable, auditable, and aligned with human values.",
        p2: "At Zhejiang University I am building two production systems that test this thesis. <strong>EDIA</strong> is a multi-agent decision-intelligence platform for the C5/C9 petrochemical value chain — a 17-node LangGraph orchestrator that pre-computes and locks every business-critical number, then layers a deterministic guardrail on top of the LLM so the model narrates evidence rather than invents forecasts. <strong>Zhanlu</strong> is a 7-layer enterprise AI agent platform I designed and built solo — Synexia cognitive core, Harness Agents, sandboxed tool calling, per-agent model routing, and data-driven PPT artifact generation. My peer-reviewed work at ICEC 2025 addresses biomarkers in bipolar disorder and biofeedback interventions for depression and anxiety through entertainment computing.",
        p3: "Methodologically, I combine three threads that I believe are individually necessary and jointly insufficient for trustworthy AI: (1) <strong>governance-first system design</strong> — pre-rendering and locking business-critical values before LLM narration, then enforcing them with deterministic Python guardrails; (2) <strong>retrieval-augmented grounding</strong> that fuses structured enterprise truth (SQL, ERP, forecast views) with unstructured evidence (RAG over ChromaDB with semantic and product/date filters); and (3) <strong>empirical validation</strong> through live MAPE tracking, walk-forward backtests against locked regression baselines, and domain-expert annotation studies.",
        p4: "Looking forward, my PhD research will explore how multi-agent architectures can preserve enterprise-grade reliability while enabling richer causal reasoning, multimodal grounding, and human–AI co-decision in domain-critical workflows — particularly in contexts where AI outputs carry real consequences for safety, health, and economic outcomes.",
        areasTitle: "Research areas",
        areas: [
          "Generative AI & large language models",
          "Multi-agent systems & LLM orchestration",
          "Retrieval-augmented generation",
          "Human–AI interaction & affective computing",
          "Decision intelligence & human-AI co-decision",
          "AI for healthcare and social good",
        ],
        toolkitTitle: "Methodological toolkit",
        toolkit: [
          "Transfer learning & Transformer fine-tuning (RoBERTa, BERT)",
          "Retrieval-augmented generation (ChromaDB, LangChain)",
          "Deterministic pre-rendering & guardrail validation",
          "Walk-forward backtests & live MAPE evaluation",
          "Multi-agent orchestration (LangGraph, custom Synexia FSM)",
          "Expert annotation & human-in-the-loop evaluation",
        ],
      },

      skills: {
        eyebrow: "Technical Skills",
        title: "Skills & technologies I work with",
        sub: "Organized by the areas I build in every day — from model training to production LLM infrastructure.",
      },

      exp: {
        eyebrow: "Experience",
        title: "Professional experience",
        sub: "Roles where I designed, built, and deployed production AI systems.",
      },

      proj: {
        eyebrow: "Featured Projects",
        title: "Selected projects",
        sub: "From multi-agent LLM infrastructure to embedded assistive devices — each project solved a real problem end-to-end.",
        viewAll: "View all projects in the Project Library",
        viewDetails: "View full details →",
        all: "All",
      },

      pub: {
        eyebrow: "Research & Publications",
        published: "Published",
        presented: "Presented",
        pages: "Pages",
        conferencePage: "Conference page",
      },

      edu: {
        eyebrow: "Education & Certifications",
        title: "Education and professional training",
        certsTitle: "Certifications",
      },

      ach: {
        eyebrow: "Achievements",
        title: "Awards & accomplishments",
      },

      contact: {
        eyebrow: "Contact",
        title: "Let's build something together",
        getInTouch: "Get in touch",
        text: "I'm open to AI engineering roles, research collaborations, and interesting projects. Reach out any time.",
        nameLabel: "Name",
        namePh: "Your name",
        emailLabel: "Email",
        emailPh: "you@example.com",
        subjectLabel: "Subject",
        subjectPh: "What's this about?",
        messageLabel: "Message",
        messagePh: "Your message...",
        send: "Send Message",
        formStatus: "Opening your email client to send this message...",
        themeAria: "Toggle dark mode",
        langAria: "Switch language",
      },

      lib: {
        navHome: "Home",
        navProjects: "Projects",
        navResearch: "Research",
        navContact: "Contact",
        eyebrow: "Project Library",
        title: "All projects, in detail",
        sub: "Select a project from the sidebar to see its full story — problem, role, architecture, algorithm, methodology, features, impact, evaluation, and tech stack.",
        sidebarTitle: "Projects",
        backTo: "Back to",
        home: "home page",
        role: "Role: ",
        prev: "← Previous",
        next: "Next →",
        block: {
          problem: "Problem",
          role: "My Role",
          architecture: "Technical Architecture",
          algorithm: "Algorithm & Approach",
          methodology: "How It Works",
          features: "Key Features",
          impact: "Impact",
          evaluation: "Evaluation & Results",
          stack: "Tech Stack",
        },
      },

      footer: {
        tagline: "Built with a clean, professional design.",
      },
    },

    zh: {
      meta: {
        title: "明哈祖尔·伊斯兰 — 人工智能工程师作品集",
        description:
          "专注于生成式 AI、LLM 智能体、RAG 与生产级 AI 系统的人工智能工程师。浙江大学硕士，ICEC 2025 论文作者。",
        libTitle: "项目库 — 明哈祖尔·伊斯兰",
        libDescription: "明哈祖尔·伊斯兰所有 AI、机器学习与嵌入式系统项目的详细介绍。",
      },

      nav: {
        about: "关于我",
        research: "研究",
        skills: "技能",
        experience: "经历",
        projects: "项目",
        education: "教育",
        contact: "联系",
        home: "首页",
      },

      mm: {
        about: "关于我",
        researchSt: "研究陈述",
        skills: "技能",
        experience: "经历",
        projects: "项目",
        publications: "论文",
        education: "教育",
        achievements: "荣誉成就",
        contact: "联系",
        library: "项目库",
        home: "首页",
        featured: "精选项目",
        research: "研究",
      },

      hero: {
        kicker: "诚邀 AI 工程类职位机会",
        role: "人工智能工程师",
        summary:
          "我设计并交付端到端的生产级 AI 系统。在 Synexia AI 实习期间，我独立构建了 EDIA（17 节点 LangGraph 多智能体，将决策从 8 分钟缩短至 30 秒）与 Zhanlu（7 层企业级智能体平台，14 个服务的 Docker 技术栈，原生 MCP）。我的浙大硕士论文 BepsBot 结合 RAG、RoBERTa 与 LIWC-2015 帮助双相障碍同伴支持者，验证基于 24 人被试研究（SUS 88.0、κ=.78），并以 PCC 口头报告发表于 HHME 2026。已在 ICEC 2025 与 HHME 2026 发表 4 篇论文；2023 年入选联合国全球青年人才计划。",
        viewProjects: "查看我的项目",
        downloadCv: "下载简历",
        contactMe: "联系我",
      },

      avail: {
        textStrong: "欢迎 AI 工程、AI 基础设施与博士研究相关岗位",
        textRest: "——多智能体 LLM、RAG、AI 基础设施、生产部署，以及生成式 AI 与人机交互的应用研究。",
        seeProjects: "查看项目",
        industryCv: "行业简历",
        researchSt: "研究陈述",
      },

      about: {
        eyebrow: "关于我",
        title: "人工智能、产品与影响力交汇处的工程师",
        p1: "<strong>专注于生产级 AI 系统的 AI 工程师</strong>——LangGraph 多智能体工作流、自研 Synexia 认知编排层（我的 Zhanlu 平台的“大脑”）、基于 ChromaDB 的检索增强生成、LLM 输出护栏，以及大规模 FastAPI 推理。",
        p2: "我拥有浙江大学工业设计工程硕士学位，以及云南大学计算机科学学士学位。我设计 AI 产品的<strong>完整生命周期</strong>：从模型研究与微调（RoBERTa、Transformers、PEFT/LoRA），到编排、检索基础设施、确定性校验和高并发生产部署。",
        p3: "我交付的是端到端的 AI 系统，而不仅仅是模型——包括 <strong>LangGraph</strong> 状态机编排、<strong>LangChain + ChromaDB</strong> RAG 流水线、契约式提示词，以及在错误数字到达用户之前加以拦截的 Python 护栏层。我曾独立构建并部署了一整套七层企业级 AI 智能体平台（Zhanlu）。",
        p4: "我也深耕<strong>AI 与硬件结合的前沿领域</strong>：Arduino/C++、ESP32-CAM、传感器融合、IoT 与边缘 AI，并完成过完整的智能硬件原型部署。",
        interestsTitle: "研究兴趣与技术方向",
        goalsTitle: "我努力的方向",
      },

      rs: {
        eyebrow: "研究陈述",
        title: "构建可信赖的 AI 系统",
        sub: "对我研究方向、方法论与目标的总结——为博士招生委员会、研究合作者与学术评审人而写。",
        p1: "我的研究探讨大语言模型与多智能体系统如何支持<strong>高风险人类场景中的决策</strong>——从石化行业商务团队到心理健康领域的同伴支持社区。我工作在生成式 AI、情感计算与人机交互的交汇处，目标是构建既强大、可审计，又与人类价值观一致的 AI 系统。",
        p2: "在浙江大学，我正在构建两个生产系统来检验这一论点。<strong>EDIA</strong> 是面向 C5/C9 石化价值链的多智能体决策智能平台——一个 17 节点 LangGraph 编排器，预先计算并锁定每一项业务关键数据，再在 LLM 之上叠加确定性护栏，使模型转述证据而非凭空生成预测。<strong>Zhanlu</strong> 是我独立设计与构建的七层企业级 AI 智能体平台——包含 Synexia 认知核心、Harness 智能体、沙箱化工具调用、按智能体配置的模型路由，以及数据驱动的 PPT 产物生成。我在 ICEC 2025 发表的同行评审工作，探讨了双相情感障碍中的生物标志物，以及通过娱乐计算对抑郁与焦虑进行生物反馈干预。",
        p3: "在方法论上，我结合三条线索——我认为它们对可信赖 AI 而言各自必要、但单独不足：(1) <strong>治理优先的系统设计</strong>——在 LLM 叙述之前预渲染并锁定业务关键数值，再用确定性 Python 护栏强制校验；(2) <strong>检索增强的落地依据</strong>——将结构化企业事实（SQL、ERP、预测视图）与非结构化证据（基于 ChromaDB、带语义及产品/日期过滤的 RAG）相融合；(3) <strong>实证验证</strong>——通过实时 MAPE 跟踪、针对锁定回归基线的前推回测，以及领域专家标注研究。",
        p4: "展望未来，我的博士研究将探索多智能体架构如何在保持企业级可靠性的同时，支持更丰富的因果推理、多模态落地依据，以及领域关键工作流中的人机协同决策——尤其是在 AI 输出对安全、健康与经济结果产生真实影响的场景中。",
        areasTitle: "研究领域",
        areas: [
          "生成式 AI 与大语言模型",
          "多智能体系统与 LLM 编排",
          "检索增强生成",
          "人机交互与情感计算",
          "决策智能与人机协同决策",
          "医疗与社会公益领域的 AI",
        ],
        toolkitTitle: "方法论工具箱",
        toolkit: [
          "迁移学习与 Transformer 微调（RoBERTa、BERT）",
          "检索增强生成（ChromaDB、LangChain）",
          "确定性预渲染与护栏校验",
          "前推回测与实时 MAPE 评估",
          "多智能体编排（LangGraph、自研 Synexia FSM）",
          "专家标注与人机协同评估",
        ],
      },

      skills: {
        eyebrow: "技术技能",
        title: "我使用的技能与技术",
        sub: "按我日常工作的领域分类——从模型训练到生产级 LLM 基础设施。",
      },

      exp: {
        eyebrow: "工作经历",
        title: "职业经历",
        sub: "那些我设计、构建并部署生产级 AI 系统的岗位。",
      },

      proj: {
        eyebrow: "精选项目",
        title: "代表项目",
        sub: "从多智能体 LLM 基础设施到嵌入式辅助设备——每个项目都端到端地解决了一个真实问题。",
        viewAll: "查看项目库中的全部项目",
        viewDetails: "查看详情 →",
        all: "全部",
      },

      pub: {
        eyebrow: "研究与论文",
        published: "发表于",
        presented: "报告于",
        pages: "页码",
        conferencePage: "会议页面",
      },

      edu: {
        eyebrow: "教育与证书",
        title: "教育与专业培训",
        certsTitle: "证书",
      },

      ach: {
        eyebrow: "荣誉成就",
        title: "奖项与成就",
        note: "部分条目为占位符——请提供详细信息，我会为您补充。",
      },

      contact: {
        eyebrow: "联系我",
        title: "让我们一起创造",
        getInTouch: "保持联系",
        text: "我欢迎 AI 工程职位、研究合作和有趣的项目，随时联系我。",
        nameLabel: "姓名",
        namePh: "您的姓名",
        emailLabel: "邮箱",
        emailPh: "you@example.com",
        subjectLabel: "主题",
        subjectPh: "想聊点什么？",
        messageLabel: "消息",
        messagePh: "您的留言……",
        send: "发送消息",
        formStatus: "正在打开您的邮件客户端发送此消息……",
        themeAria: "切换深色模式",
        langAria: "切换语言",
      },

      lib: {
        navHome: "首页",
        navProjects: "项目",
        navResearch: "研究",
        navContact: "联系",
        eyebrow: "项目库",
        title: "全部项目详解",
        sub: "从侧边栏选择项目，查看完整介绍——问题、角色、架构、算法、方法论、功能、影响、评估与技术栈。",
        sidebarTitle: "项目",
        backTo: "返回",
        home: "首页",
        role: "角色：",
        prev: "← 上一个",
        next: "下一个 →",
        block: {
          problem: "问题",
          role: "我的角色",
          architecture: "技术架构",
          algorithm: "算法与方法",
          methodology: "实现原理",
          features: "核心功能",
          impact: "影响",
          evaluation: "评估与结果",
          stack: "技术栈",
        },
      },

      footer: {
        tagline: "以简洁、专业的设计构建。",
      },
    },
  };

  /* ---------- language state ---------- */

  var lang = localStorage.getItem(STORAGE_KEY);
  if (!lang) {
    lang = (navigator.language || "").toLowerCase().indexOf("zh") === 0 ? "zh" : "en";
  }
  if (lang !== "en" && lang !== "zh") lang = "en";

  function setLangAttr(l) {
    document.documentElement.setAttribute("lang", l);
    document.documentElement.setAttribute("data-lang", l);
  }
  setLangAttr(lang);

  /* ---------- lookup ---------- */

  function get(path, obj) {
    return path.split(".").reduce(function (o, k) {
      return o && o[k] !== undefined ? o[k] : undefined;
    }, obj);
  }

  function t(key) {
    var v = get(key, UI[lang]);
    if (v === undefined) v = get(key, UI.en);
    return v !== undefined ? v : key;
  }

  /* ---------- apply translations to static DOM ---------- */

  function applyUI() {
    var dict = UI[lang] || UI.en;

    document.querySelectorAll("[data-i18n]").forEach(function (el) {
      var key = el.getAttribute("data-i18n");
      var val = get(key, dict);
      if (val === undefined) val = get(key, UI.en);
      if (val === undefined) return;
      if (el.tagName === "META" && el.getAttribute("name") === "description") {
        el.setAttribute("content", val);
      } else if (el.hasAttribute("data-i18n-html")) {
        el.innerHTML = val;
      } else {
        el.textContent = val;
      }
    });

    document.querySelectorAll("[data-i18n-placeholder]").forEach(function (el) {
      var key = el.getAttribute("data-i18n-placeholder");
      var val = get(key, dict);
      if (val === undefined) val = get(key, UI.en);
      if (val !== undefined) el.setAttribute("placeholder", val);
    });

    document.querySelectorAll("[data-i18n-aria]").forEach(function (el) {
      var key = el.getAttribute("data-i18n-aria");
      var val = get(key, dict);
      if (val === undefined) val = get(key, UI.en);
      if (val !== undefined) el.setAttribute("aria-label", val);
    });
  }

  /* ---------- language switch ---------- */

  var listeners = [];
  function onLangChange(cb) {
    listeners.push(cb);
  }

  function setLang(next) {
    if (next === lang) return;
    lang = next;
    localStorage.setItem(STORAGE_KEY, lang);
    setLangAttr(lang);
    applyUI();
    updateToggleUI();
    listeners.forEach(function (cb) {
      try {
        cb();
      } catch (err) {
        console.error(err);
      }
    });
  }

  function updateToggleUI() {
    var wrap = document.getElementById("lang-switch");
    if (wrap) wrap.setAttribute("data-lang", lang);
    var track = document.getElementById("lang-track");
    if (track) {
      track.setAttribute("aria-pressed", lang === "zh" ? "true" : "false");
      if (track.hasAttribute("data-i18n-aria")) {
        track.setAttribute("aria-label", t("contact.langAria"));
      }
    }
  }

  /* ---------- active data ---------- */

  function getData() {
    if (lang === "zh" && window.PORTFOLIO_ZH) return window.PORTFOLIO_ZH;
    return window.PORTFOLIO;
  }

  /* ---------- init ---------- */

  function init() {
    var track = document.getElementById("lang-track");
    if (track) {
      track.addEventListener("click", function () {
        setLang(lang === "en" ? "zh" : "en");
      });
    }

    updateToggleUI();
    applyUI();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }

  window.I18N = {
    get lang() {
      return lang;
    },
    t: t,
    applyUI: applyUI,
    getData: getData,
    onLangChange: onLangChange,
    setLang: setLang,
  };
})();
