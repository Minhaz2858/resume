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
        title: "Minhazul Islam — AI Systems Researcher | Trustworthy Agentic AI & Human-AI Interaction",
        description:
          "AI Systems Researcher (M.Eng. candidate, Zhejiang University) working on trustworthy agentic AI, grounded decision intelligence, and human-AI interaction. Publications at ICEC 2025 and HHME 2026 PCC.",
        libTitle: "Project Library — Minhazul Islam",
        libDescription:
          "Comprehensive details on all of Minhazul Islam's AI, ML, and embedded systems projects.",
      },

      nav: {
        about: "About",
        research: "Research",
        publications: "Publications",
        projects: "Featured Work",
        earlier: "Earlier Projects",
        skills: "Skills",
        experience: "Experience",
        education: "Education",
        contact: "Contact",
        home: "Home",
      },

      mm: {
        about: "About",
        researchSt: "Research Statement",
        skills: "Skills",
        experience: "Experience",
        projects: "Featured Work",
        publications: "Publications",
        earlier: "Earlier Projects",
        education: "Education",
        achievements: "Achievements",
        contact: "Contact",
        library: "Project Library",
        home: "Home",
        featured: "Featured Projects",
        research: "Research",
      },

      hero: {
        kicker: "M.Eng. Candidate, Zhejiang University · B.Eng., Yunnan University",
        role: "AI Systems Researcher | Trustworthy Agentic AI & Human-AI Interaction",
        summary:
          "I build and study agentic AI systems that make complex decisions through structured planning, grounded tool use, verification, and human oversight. My work spans enterprise decision intelligence (EDIA, Zhanlu) and AI-mediated mental-health communication (BEPSBot).",
        viewProjects: "View Featured Work",
        downloadCv: "Download CV",
        contactMe: "Contact Me",
      },

      avail: {
        textStrong: "Seeking PhD positions (Fall 2027)",
        textRest:
          " — Research Interests: Human-centered agentic AI, interactive systems for high-stakes decisions, and trustworthy language technologies.",
        areas: `
              <span class="avail-area"><strong>Human-AI Collaboration</strong> — Co-decision interfaces, authorship preservation, cognitive load in AI-mediated workflows</span>
              <span class="avail-area"><strong>Agentic AI</strong> — Multi-agent orchestration, planning &amp; verification, tool-augmented language models</span>
              <span class="avail-area"><strong>HAI for Decision-Making</strong> — Trustworthy systems for industrial and healthcare domains, uncertainty-aware generation</span>
            `,
        seeProjects: "See Projects",
        downloadCv: "Download CV (PDF)",
        researchSt: "Research Statement",
      },

      about: {
        eyebrow: "About Me",
        title: "Researcher and Engineer in Trustworthy AI Systems",
        p1: "I am an M.Eng. candidate at Zhejiang University (M.Eng. in Industrial Design Engineering) with a B.Eng. in Computer Science from Yunnan University, working on three tightly connected research questions.",
        p2: "My work is grounded in production systems I built end-to-end at Synexia AI — <strong>EDIA</strong> (a 17-node LangGraph decision-intelligence platform for petrochemical forecasting) and <strong>Zhanlu</strong> (a governed multi-agent runtime with bounded delegation, verifiable outputs, and context-safe tool use) — and in empirical human-subjects research through my master's thesis, <strong>BEPSBot</strong> (a draft-grounded AI writing assistant for bipolar-disorder peer support, evaluated in a 24-participant within-subjects study, HHME 2026 PCC).",
        pillarsTitle: "Three Research Threads",
      },

      rs: {
        eyebrow: "Research Statement",
        title: "Trustworthy Agentic AI, Grounded Decision Intelligence, and Human-AI Collaboration",
        sub: "",
        p1: "I build and study agentic AI systems that make complex decisions through structured planning, grounded tool use, verification, and human oversight. My work spans enterprise decision intelligence and AI-mediated mental-health communication — three tightly connected threads.",
        p2: "<strong>Trustworthy agentic AI</strong> (Zhanlu). A governed multi-agent runtime where every plan is constructed, every tool call is permission-filtered and policy-checked, and every output is verified before reaching users. The research question: <em>how should execution be bounded so that probabilistic models become auditable enough to deploy in production?</em>",
        p3: "<strong>Grounded decision intelligence</strong> (EDIA) <strong>and human-AI collaboration in sensitive domains</strong> (BEPSBot). On the decision side, EDIA pre-computes every business-critical number in deterministic Python before any LLM sees it — the model narrates, never calculates. On the human-AI side, BEPSBot preserves authorship by retrieving grounded examples and transforming a supporter's own draft; a within-subjects study (N=24) showed suggestion adoption rise from 33.3% to 75.6% with SUS 86.98.",
        toolkitTitle: "Methodological & Technical Toolkit",
      },

      skills: {
        eyebrow: "Technical & Research Methods",
        title: "Skills organised by research and engineering domain",
        sub: "Grouped from agent systems and language technologies to systems engineering and research methodology.",
      },

      exp: {
        eyebrow: "Research Experience",
        title: "Research and applied engineering experience",
        sub: "Roles where I designed, built, and evaluated AI systems end-to-end.",
      },

      proj: {
        eyebrow: "Featured Work",
        title: "Selected research and AI systems",
        sub: "Three flagship systems anchoring my PhD trajectory: a draft-grounded writing assistant, an enterprise decision-intelligence platform, and a governed multi-agent runtime.",
        viewAll: "View all projects in the Project Library",
        viewDetails: "View full details →",
        all: "All",
      },

      earlier: {
        eyebrow: "Earlier Projects",
        title: "Earlier engineering work",
        sub: "Selected earlier engineering projects — CAD automation, assistive hardware, IoT, recommendation systems.",
      },

      pub: {
        eyebrow: "Publications & Presentations",
        published: "Published",
        presented: "Presented",
        pages: "Pages",
        conferencePage: "Conference page",
      },

      edu: {
        eyebrow: "Education",
        title: "Education",
        certsTitle: "Additional Training",
      },

      ach: {
        eyebrow: "Awards",
        title: "Selected awards",
      },

      contact: {
        eyebrow: "Contact",
        title: "Get in touch",
        getInTouch: "Get in touch",
        text: "I am seeking PhD opportunities for Fall 2027 in trustworthy agentic AI, human-AI interaction, and grounded LLM systems. I welcome research collaborations in these areas.",
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
        title: "明哈祖尔·伊斯兰 — AI 系统研究者 | 可信智能体 AI 与人机交互",
        description:
          "AI 系统研究者（浙江大学硕士在读），专注于可信智能体 AI、落地式决策智能与人机交互。ICEC 2025 论文作者，HHME 2026 PCC 报告人。",
        libTitle: "项目库 — 明哈祖尔·伊斯兰",
        libDescription: "明哈祖尔·伊斯兰所有 AI、机器学习与嵌入式系统项目的详细介绍。",
      },

      nav: {
        about: "关于我",
        research: "研究",
        publications: "论文",
        projects: "代表项目",
        earlier: "早期项目",
        skills: "技能",
        experience: "经历",
        education: "教育",
        contact: "联系",
        home: "首页",
      },

      mm: {
        about: "关于我",
        researchSt: "研究陈述",
        skills: "技能",
        experience: "经历",
        projects: "代表项目",
        publications: "论文",
        earlier: "早期项目",
        education: "教育",
        achievements: "荣誉成就",
        contact: "联系",
        library: "项目库",
        home: "首页",
        featured: "精选项目",
        research: "研究",
      },

      hero: {
        kicker: "浙江大学硕士在读 · 云南大学工学学士",
        role: "AI 系统研究者 | 可信智能体 AI 与人机交互",
        summary:
          "我构建并研究通过结构化规划、工具使用落地、验证与人机监督来处理复杂决策的智能体系统——覆盖企业决策智能（EDIA、Zhanlu）与 AI 介导的心理健康沟通（BEPSBot）。",
        viewProjects: "查看代表项目",
        downloadCv: "下载简历",
        contactMe: "联系我",
      },

      avail: {
        textStrong: "寻求 2027 年秋季博士岗位",
        textRest: " ——研究方向：以人为中心的智能体 AI、高风险决策交互系统与可信语言技术。",
        areas: `
              <span class="avail-area"><strong>人机协同</strong> — 协同决策界面、创作权保留、AI 介导工作流中的认知负荷</span>
              <span class="avail-area"><strong>智能体 AI</strong> — 多智能体编排、规划与验证、工具增强语言模型</span>
              <span class="avail-area"><strong>决策 HAI</strong> — 工业与医疗领域的可信系统、不确定性感知生成</span>
            `,
        seeProjects: "查看项目",
        downloadCv: "下载简历 (PDF)",
        researchSt: "研究陈述",
      },

      about: {
        eyebrow: "关于我",
        title: "可信 AI 系统中的研究者与工程师",
        p1: "我是浙江大学工业设计工程硕士研究生、云南大学计算机科学与技术工学学士，围绕三个紧密相连的研究问题展开工作。",
        p2: "我的工作根植于在 Synexia AI 端到端构建的生产系统——<strong>EDIA</strong>（面向石化预测的 17 节点 LangGraph 决策智能平台）与<strong>Zhanlu</strong>（受治理的多智能体运行时，配备有界委派、可验证输出与上下文安全的工具使用），以及硕士论文中的人因实证研究——<strong>BEPSBot</strong>（面向双相障碍同伴支持的草稿锚定 AI 写作助手，已在 24 人被试内研究中评估，口头报告于 HHME 2026 PCC）。",
        pillarsTitle: "三条研究主线",
      },

      rs: {
        eyebrow: "研究陈述",
        title: "可信智能体 AI、落地式决策智能与人机协同",
        sub: "",
        p1: "我构建并研究通过结构化规划、工具使用落地、验证与人机监督来处理复杂决策的智能体 AI 系统。研究覆盖企业决策智能与 AI 介导的心理健康沟通——三个紧密相连的研究主线。",
        p2: "<strong>可信智能体 AI</strong>（Zhanlu）：受治理的多智能体运行时——每个计划都被构造、每个工具调用都经过权限过滤与策略检查、每个输出在触达用户前都被验证。研究问题：<em>如何约束执行，让概率模型变得可审计、可安全部署到生产？</em>",
        p3: "<strong>落地式决策智能</strong>（EDIA）<strong>与人机协同（敏感领域）</strong>（BEPSBot）。在决策侧，EDIA 在任何 LLM 看到数据前用纯 Python 预计算并锁定业务关键数值——模型只叙述、绝不计算。在人机协同侧，BEPSBot 通过检索真实样例改写支持者自己的草稿来保留作者性；24 人被试内研究显示，建议采纳率从 33.3% 提升至 75.6%，SUS 86.98。",
        toolkitTitle: "方法论与技术工具箱",
      },

      skills: {
        eyebrow: "技术与研究方法",
        title: "按研究与工程领域组织的技能",
        sub: "从智能体系统、语言技术到系统工程与研究方法论。",
      },

      exp: {
        eyebrow: "研究经历",
        title: "研究与工程经历",
        sub: "我端到端设计、构建并评估 AI 系统的岗位。",
      },

      proj: {
        eyebrow: "代表项目",
        title: "代表研究与 AI 系统",
        sub: "支撑我博士路径的三套旗舰系统：一款草稿锚定写作助手、一套企业决策智能平台、一个受治理的多智能体运行时。",
        viewAll: "查看项目库中的全部项目",
        viewDetails: "查看详情 →",
        all: "全部",
      },

      earlier: {
        eyebrow: "早期项目",
        title: "早期工程项目",
        sub: "精选早期工程项目——CAD 自动化、辅助硬件、IoT、推荐系统。",
      },

      pub: {
        eyebrow: "论文与会议报告",
        published: "发表于",
        presented: "报告于",
        pages: "页码",
        conferencePage: "会议页面",
      },

      edu: {
        eyebrow: "教育",
        title: "教育",
        certsTitle: "其他培训",
      },

      ach: {
        eyebrow: "奖项",
        title: "精选奖项",
      },

      contact: {
        eyebrow: "联系我",
        title: "保持联系",
        getInTouch: "保持联系",
        text: "我寻求 2027 年秋季博士岗位，研究方向为可信智能体 AI、人机交互与落地式 LLM 系统。欢迎相关方向的研究合作。",
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
