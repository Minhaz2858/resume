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
        title: "Minhazul Islam | AI Researcher — Trustworthy AI, Human–AI Interaction & LLM Agents",
        description:
          "AI Researcher (M.Eng. candidate, Zhejiang University) studying trustworthy AI, human–AI interaction, and LLM agents. Peer-reviewed publications at ICEC 2025; conference presentations at HHME 2026 PCC.",
        libTitle: "Project Library — Minhazul Islam",
        libDescription:
          "Comprehensive details on all of Minhazul Islam's AI, ML, and embedded systems projects.",
      },

      nav: {
        about: "About",
        research: "Research",
        publications: "Publications",
        projects: "Selected Research",
        cv: "CV",
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
        role: "AI Researcher in Trustworthy Human–AI Systems",
        summary:
          "I study how language-model and agentic AI systems can support people in high-stakes settings while remaining grounded, verifiable, and under meaningful human control. My work spans AI-mediated mental-health communication, trustworthy LLM agents, and human-centered decision support.",
        research: "Research",
        publications: "Publications",
        downloadCv: "CV",
        contactMe: "Contact Me",
      },

      avail: {
        textStrong: "Seeking PhD positions (Fall 2027)",
        textRest:
          " — Research Interests: trustworthy human–AI systems, LLM/agent evaluation, and AI for high-stakes decision support.",
        areas: `
              <span class="avail-area"><strong>Human–AI Collaboration</strong> — AI-mediated communication, authorship, agency, trust, and decision support</span>
              <span class="avail-area"><strong>Trustworthy LLMs &amp; Agents</strong> — Grounded generation, agent evaluation, tool use, verification, reliability, and privacy</span>
              <span class="avail-area"><strong>AI for Health &amp; High-Stakes Decisions</strong> — Mental-health communication, digital health, longitudinal monitoring, and human-centered decision support</span>
            `,
        seeProjects: "See Projects",
        downloadCv: "Download CV (PDF)",
        researchSt: "Research Statement",
      },

      about: {
        eyebrow: "About Me",
        title: "Researcher in Trustworthy Human–AI Systems",
        p1: "I am an M.Eng. candidate at Zhejiang University with a B.Eng. in Computer Science from Yunnan University. My research examines how AI systems can augment human communication and decision-making while preserving grounding, human agency, safety, and accountability.",
        p2: "My master's research investigates AI-mediated communication in bipolar-disorder peer-support communities. In parallel, my work at Synexia AI has exposed me to reliability problems in deployed LLM-agent systems, including grounding, numerical hallucination, context management, privacy, and multi-agent verification. These experiences motivate my PhD interest in developing empirically evaluated, dependable human–AI systems for high-stakes domains.",
        pillarsTitle: "Three Research Threads",
      },

      rs: {
        eyebrow: "Research Statement",
        title: "Research Questions in Trustworthy Human–AI Systems",
        sub: "",
        p1: "My research examines how AI systems can support people in high-stakes settings while remaining grounded, verifiable, and under meaningful human control. Three questions organize my current and future work.",
        p2: "<strong>How should computation, retrieval, and validation be divided between probabilistic language models and deterministic components?</strong> My internship work at Synexia AI on EDIA and Zhanlu — enterprise decision-intelligence and agent platforms — used pre-call context-budget enforcement to reduce context-overflow failures and deterministic validation to keep numeric claims grounded in database results. These systems raise the general question of where the boundary between model and mechanism should sit.",
        p3: "<strong>How can tool-using agents be evaluated beyond final-task success — including grounding, recovery from failure, privacy, and human oversight?</strong> And <strong>when AI assists sensitive communication, how can it improve usefulness without displacing human authorship or introducing unsupported advice?</strong> My master's thesis, BEPSBot — a draft-grounded writing assistant for bipolar-disorder peer support, evaluated in a 24-participant within-subjects study (presented at HHME 2026 PCC) — is an initial empirical step on this question: suggestion adoption rose from 33.3% to 75.6% with SUS 86.98.",
        toolkitTitle: "Research Methods & Technical Skills",
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
        eyebrow: "Selected Research",
        title: "Research projects & engineering systems",
        sub: "Human-subjects research on one side; the research infrastructure that motivated it on the other.",
        researchTitle: "Research Projects",
        systemsTitle: "Research Engineering Systems",
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
        eyebrow: "Publications",
        reviewedTitle: "Peer-Reviewed Publications",
        presentedTitle: "Conference Presentations & Non-Archival Work",
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
        title: "明哈祖尔·伊斯兰 | AI 研究者 — 可信 AI、人机交互与大模型智能体",
        description:
          "AI 研究者（浙江大学硕士在读），研究可信 AI、人机交互与大模型智能体。ICEC 2025 同行评审论文；HHME 2026 PCC 会议报告。",
        libTitle: "项目库 — 明哈祖尔·伊斯兰",
        libDescription: "明哈祖尔·伊斯兰所有 AI、机器学习与嵌入式系统项目的详细介绍。",
      },

      nav: {
        about: "关于我",
        research: "研究",
        publications: "论文",
        projects: "代表研究",
        cv: "简历",
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
        role: "可信人机系统方向的 AI 研究者",
        summary:
          "我研究语言模型与智能体系统如何在高风险场景中支持人类，同时保持有据可依、可验证、并处于有意义的人类控制之下。工作涵盖 AI 介导的心理健康沟通、可信大模型智能体与以人为本的决策支持。",
        research: "研究",
        publications: "论文",
        downloadCv: "简历",
        contactMe: "联系我",
      },

      avail: {
        textStrong: "寻求 2027 年秋季博士岗位",
        textRest: " ——研究方向：可信人机系统、大模型/智能体评估、面向高风险决策的 AI。",
        areas: `
              <span class="avail-area"><strong>人机协同</strong> — AI 介导沟通、作者性、能动性、信任与决策支持</span>
              <span class="avail-area"><strong>可信大模型与智能体</strong> — 有据生成、智能体评估、工具使用、验证、可靠性与隐私</span>
              <span class="avail-area"><strong>面向健康与高风险决策的 AI</strong> — 心理健康沟通、数字健康、纵向监测与以人为本的决策支持</span>
            `,
        seeProjects: "查看项目",
        downloadCv: "下载简历 (PDF)",
        researchSt: "研究陈述",
      },

      about: {
        eyebrow: "关于我",
        title: "可信人机系统方向的 AI 研究者",
        p1: "我是浙江大学硕士研究生、云南大学计算机科学与技术工学学士。我的研究关注 AI 系统如何增强人类的沟通与决策，同时保有依据性、人的能动性、安全与可问责。",
        p2: "我的硕士研究关注双相障碍同伴支持社区中的 AI 介导沟通。与此同时，在 Synexia AI 的工作使我直面已部署大模型智能体系统的可靠性问题——包括依据性、数值幻觉、上下文管理、隐私与多智能体验证。这些经历塑造了我对博士阶段的兴趣：为高风险领域构建经过实证评估、可靠的人机系统。",
        pillarsTitle: "三条研究主线",
      },

      rs: {
        eyebrow: "研究陈述",
        title: "可信人机系统的研究问题",
        sub: "",
        p1: "我的研究关注 AI 系统如何在高风险场景中支持人类，同时保持有据可依、可验证、并处于有意义的人类控制之下。三个问题组织了我当前与未来的工作。",
        p2: "<strong>计算、检索与验证应如何在概率语言模型与确定性组件之间划分？</strong>我在 Synexia AI 参与 EDIA 与 Zhanlu（企业决策智能与智能体平台）的工作，使用调用前上下文预算控制来降低上下文溢出失败，并用确定性校验使数值结论以数据库结果为依据。这些系统引出一个一般性问题：模型与机制之间的边界应当划在哪里。",
        p3: "<strong>工具型智能体应如何在最终任务成功之外被评估——包括依据性、失败恢复、隐私与人类监督？</strong>以及<strong>当 AI 辅助敏感沟通时，如何在提升有用性的同时不取代人类作者性、不引入无依据的建议？</strong>我的硕士论文 BEPSBot——面向双相障碍同伴支持的草稿锚定写作助手，经 24 人被试内研究评估（报告于 HHME 2026 PCC）——是这一问题的初步实证：建议采纳率从 33.3% 升至 75.6%，SUS 86.98。",
        toolkitTitle: "研究方法与技术技能",
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
        eyebrow: "代表研究",
        title: "研究项目与工程系统",
        sub: "一侧是以人为被试的研究；另一侧是催生这些研究问题的研究基础设施。",
        researchTitle: "研究项目",
        systemsTitle: "研究工程系统",
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
        eyebrow: "论文",
        reviewedTitle: "同行评审论文",
        presentedTitle: "会议报告与非存档工作",
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
        title: "博士申请与研究合作",
        getInTouch: "保持联系",
        text: "我正在申请 2027 年秋季入学的博士项目，研究兴趣集中在可信 AI、人机交互、大模型/智能体评估以及面向高风险决策支持的 AI。欢迎就博士研究与合作交流探讨。",
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
