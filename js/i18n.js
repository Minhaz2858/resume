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
        title: "Minhazul Islam — AI Systems Engineer & Applied Researcher",
        description:
          "AI Systems Engineer building auditable multi-agent architectures, deterministic guardrails, and enterprise RAG platforms. M.E. from Zhejiang University, publications at ICEC 2025.",
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
        kicker: "M.E. Student, Zhejiang University | B.S. in Computer Science, Yunnan University",
        role: "AI Systems Engineer & Applied Researcher",
        summary:
          "Building auditable multi-agent architectures, deterministic guardrails, and enterprise agent runtimes. Researching human-AI co-decision and grounded RAG systems across high-stakes industrial & healthcare domains.",
        viewProjects: "View My Projects",
        downloadCv: "Download CV",
        contactMe: "Contact Me",
      },

      avail: {
        textStrong: "Open to AI Engineering, AI Infrastructure & PhD Positions",
        textRest:
          " — Building multi-agent systems, deterministic guardrails, enterprise Agent Harness, and human-AI co-decision research.",
        seeProjects: "See Projects",
        industryCv: "Industry CV",
        researchSt: "Research Statement",
      },

      about: {
        eyebrow: "About Me",
        title: "Engineer & Researcher at the Intersection of AI Systems, Product, and Impact",
        p1: "I design and deploy the full lifecycle of trustworthy AI products: bridging model research and fine-tuning (Transformers, PEFT/LoRA) with robust orchestration, context engineering, deterministic validation, and high-concurrency production infrastructure.",
        p2: "Combining a Master's in Industrial Design Engineering from Zhejiang University with a Bachelor's in Computer Science from Yunnan University, I build AI systems that are not just capable models, but <strong>reliable, auditable software platforms</strong>. My work spans enterprise multi-agent architectures (Zhanlu, EDIA), published affective computing research, and edge AI/IoT hardware.",
        pillarsTitle: "Core Systems & Research Pillars",
      },

      rs: {
        eyebrow: "Research Statement",
        title: "Building Trustworthy, Grounded, and Auditable AI Systems",
        sub: "Written for PhD Admissions Committees, Research Collaborators, and AI R&D Labs.",
        s1Title: "1. Research Vision",
        s1: "My research investigates how multi-agent architectures and large language models can support decision-making in high-stakes human contexts—ranging from industrial petrochemical supply chains to mental health peer-support communities. As LLMs transition from open-ended chat assistants to critical enterprise nodes, probabilistic generation introduces unacceptable variance and hallucination risks. I design and evaluate system architectures that combine foundation models with <strong>deterministic governance, dynamic retrieval, and human-in-the-loop validation</strong> to ensure AI outputs remain capable, auditable, and aligned with human values.",
        s2Title: "2. Methodological Framework",
        s2: "My research framework integrates three complementary methodologies:",
        s2a: "<strong>Governance-First System Design:</strong> Locking business-critical numbers and evidence prior to LLM narration via finite-state machine (FSM) pre-rendering, enforced by deterministic validation guardrails.",
        s2b: "<strong>Hybrid Context Grounding:</strong> Fusing structured enterprise truth (ERP databases, SQL views, time-series forecasts) with unstructured evidence through semantic RAG (ChromaDB, vector embeddings, entity linking).",
        s2c: "<strong>Empirical System Validation:</strong> Evaluating reliability through walk-forward MAPE backtesting against locked baselines, automated LLM-as-a-Judge audit gates, and domain-expert annotation studies.",
        s3Title: "3. Future Directions",
        s3: "My ongoing and prospective research focuses on three core frontiers:",
        s3a: "<strong>Causal Multi-Agent Reasoning:</strong> Extending state-machine orchestrators to perform counterfactual reasoning, temporal walk-forward backtesting, and self-correcting plan execution.",
        s3b: "<strong>Multimodal & Edge Context Grounding:</strong> Integrating embedded sensor streams (ESP32, IoT hardware) with lightweight edge models for real-time visual and environmental context grounding.",
        s3c: "<strong>Human-AI Co-Decision Dynamics:</strong> Quantifying trust, cognitive load, and safety alignment when domain experts collaborate with autonomous multi-agent systems in safety-critical workflows.",
        toolkitTitle: "Methodological & Technical Toolkit",
      },

      skills: {
        eyebrow: "Technical Skills",
        title: "Skills & technologies I work with",
        sub: "Organized by the systems I build — from agent orchestration and retrieval infrastructure to production deployment.",
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
        kicker: "浙江大学硕士 | 云南大学计算机科学学士",
        role: "AI 系统工程师与应用研究者",
        summary:
          "构建可审计的多智能体架构、确定性护栏与企业级智能体运行时。研究高风险工业与医疗场景中的人机协同决策与落地式 RAG 系统。",
        viewProjects: "查看我的项目",
        downloadCv: "下载简历",
        contactMe: "联系我",
      },

      avail: {
        textStrong: "欢迎 AI 工程、AI 基础设施与博士研究岗位",
        textRest: " ——构建多智能体系统、确定性护栏、企业级 Agent Harness，以及人机协同决策研究。",
        seeProjects: "查看项目",
        industryCv: "行业简历",
        researchSt: "研究陈述",
      },

      about: {
        eyebrow: "关于我",
        title: "AI 系统、产品与影响力交汇处的工程师与研究者",
        p1: "我设计并部署可信赖 AI 产品的完整生命周期：从模型研究与微调（Transformers、PEFT/LoRA）到健壮的编排、上下文工程、确定性校验，以及高并发生产基础设施。",
        p2: "浙江大学工业设计工程硕士 + 云南大学计算机科学学士。我构建的不仅是能力强大的模型，更是<strong>可靠、可审计的软件平台</strong>。我的工作覆盖企业级多智能体架构（Zhanlu、EDIA）、已发表的情感计算研究，以及边缘 AI/IoT 硬件。",
        pillarsTitle: "核心系统与研究支柱",
      },

      rs: {
        eyebrow: "研究陈述",
        title: "构建可信赖、落地式与可审计的 AI 系统",
        sub: "为博士招生委员会、研究合作者与 AI 研发实验室而写。",
        s1Title: "1. 研究愿景",
        s1: "我的研究探讨多智能体架构与大语言模型如何支持高风险人类场景中的决策——从工业石化供应链到心理健康新型支持社区。随着 LLM 从开放式聊天助手转变为关键企业节点，概率式生成引入了不可接受的方差与幻觉风险。我设计与评估将基础模型与<strong>确定性治理、动态检索和人机协同验证</strong>相结合的系统架构，确保 AI 输出保持强大、可审计且与人类价值观一致。",
        s2Title: "2. 方法论框架",
        s2: "我的研究框架整合三条互补方法论：",
        s2a: "<strong>治理优先的系统设计：</strong>通过有限状态机 (FSM) 预渲染，在 LLM 叙述前锁定业务关键数值与证据，并由确定性校验护栏强制执行。",
        s2b: "<strong>混合上下文落地：</strong>将结构化企业事实（ERP 数据库、SQL 视图、时间序列预测）与非结构化证据通过语义 RAG 融合（ChromaDB、向量嵌入、实体链接）。",
        s2c: "<strong>实证系统验证：</strong>通过针对锁定基线的前推 MAPE 回测、自动化 LLM-as-Judge 审计门禁和领域专家标注研究来评估可靠性。",
        s3Title: "3. 未来方向",
        s3: "我正在进行和规划的研究聚焦于三个核心前沿：",
        s3a: "<strong>因果多智能体推理：</strong>扩展状态机编排器以执行反事实推理、时序前推回测和自纠错计划执行。",
        s3b: "<strong>多模态与边缘上下文落地：</strong>将嵌入式传感器流（ESP32、IoT 硬件）与轻量级边缘模型集成，实现实时视觉与环境上下文落地。",
        s3c: "<strong>人机协同决策动态：</strong>量化领域专家在安全关键工作流中与自主多智能体系统协作时的信任度、认知负荷与安全对齐。",
        toolkitTitle: "方法论与技术工具箱",
      },

      skills: {
        eyebrow: "技术技能",
        title: "我使用的技能与技术",
        sub: "按我构建的系统组织——从智能体编排和检索基础设施到生产部署。",
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
