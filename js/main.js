/* ============================================================
   Portfolio home page — rendering + interactions
   Language-aware: reads active-language data via window.I18N
   and re-renders on language change.
   ============================================================ */

(function () {
  "use strict";

  if (!window.I18N || !window.I18N.getData()) return;

  /* ---------- helpers ---------- */

  const $ = (sel, ctx) => (ctx || document).querySelector(sel);
  const $$ = (sel, ctx) => Array.from((ctx || document).querySelectorAll(sel));

  const esc = (s) =>
    String(s).replace(/[&<>"']/g, (c) => ({
      "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;",
    }[c]));

  const t = (key) => window.I18N.t(key);

  /* ---------- theme ---------- */

  const root = document.documentElement;
  const sunIcon = $("#icon-sun");
  const moonIcon = $("#icon-moon");

  function applyThemeIcon(theme) {
    if (!sunIcon || !moonIcon) return;
    sunIcon.style.display = theme === "dark" ? "none" : "";
    moonIcon.style.display = theme === "dark" ? "" : "none";
  }

  const themeToggle = $("#theme-toggle");
  if (themeToggle) {
    applyThemeIcon(root.getAttribute("data-theme"));
    themeToggle.addEventListener("click", () => {
      const next = root.getAttribute("data-theme") === "dark" ? "light" : "dark";
      root.setAttribute("data-theme", next);
      localStorage.setItem("theme", next);
      applyThemeIcon(next);
    });
  }

  /* ---------- mobile menu ---------- */

  const menuToggle = $("#menu-toggle");
  const mobileMenu = $("#mobile-menu");

  function setMenu(open) {
    if (!mobileMenu) return;
    mobileMenu.classList.toggle("open", open);
    if (menuToggle) {
      $("#icon-menu").style.display = open ? "none" : "";
      $("#icon-close").style.display = open ? "" : "none";
    }
  }

  if (menuToggle) {
    menuToggle.addEventListener("click", () => {
      setMenu(!mobileMenu.classList.contains("open"));
    });
  }

  if (mobileMenu) {
    $$("a", mobileMenu).forEach((a) =>
      a.addEventListener("click", () => setMenu(false))
    );
  }

  /* ---------- footer year ---------- */

  const yearEl = $("#year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  /* ---------- section renderers (language-aware) ---------- */

  function renderPillars() {
    const D = window.I18N.getData();
    const pillarsList = $("#pillars-list");
    if (pillarsList && D.profile.pillars) {
      pillarsList.innerHTML = D.profile.pillars
        .map(
          (p) => `
          <div class="pillar-item">
            <h4>${esc(p.title)}</h4>
            <p>${esc(p.desc)}</p>
          </div>`
        )
        .join("");
    }
  }

  function renderSkills() {
    const D = window.I18N.getData();
    const skillsGrid = $("#skills-grid");
    if (skillsGrid && D.skills) {
      skillsGrid.innerHTML = D.skills
        .map(
          (sk) => `
          <div class="skill-card reveal">
            <h3>${esc(sk.category)}</h3>
            <div class="chips">
              ${sk.items.map((i) => `<span class="chip">${esc(i)}</span>`).join("")}
            </div>
          </div>`
        )
        .join("");
    }
  }

  function renderExperience() {
    const D = window.I18N.getData();
    const expList = $("#experience-list");
    if (expList && D.experience) {
      expList.innerHTML = D.experience
        .map(
          (e) => `
          <div class="timeline-item reveal">
            <div class="tl-head">
              <div>
                <h3>${esc(e.role)}</h3>
                <span class="tl-org">${esc(e.company)}</span>
              </div>
              <span class="tl-period">${esc(e.period)}</span>
            </div>
            <p class="tl-location">${esc(e.location)}</p>
            ${e.projects
              ? e.projects
                  .map(
                    (pr) => `
              <h4 class="tl-project-name">${esc(pr.name)}</h4>
              <ul>
                ${pr.points.map((p) => `<li>${esc(p)}</li>`).join("")}
              </ul>`
                  )
                  .join("")
              : `<ul>
              ${e.points.map((p) => `<li>${esc(p)}</li>`).join("")}
            </ul>`}
            ${e.tech && e.tech.length ? `<div class="chips tl-tech">${e.tech.map((tch) => `<span class="chip">${esc(tch)}</span>`).join("")}</div>` : ""}
          </div>`
        )
        .join("");
    }
  }

  /* ---------- projects (home, filterable) ---------- */

  const filterBar = $("#filter-bar");
  const projectsGrid = $("#projects-grid");
  let activeFilter = null;

  function projectCard(p, filter) {
    const shown = filter === null || p.category === filter;
    const media = p.image
      ? `<div class="pc-media"><img src="${esc(p.image)}" alt="${esc(p.title)}" loading="lazy" /></div>`
      : `<div class="pc-media" style="display:flex;align-items:center;justify-content:center;background:var(--accent-soft)">
           <span style="font-size:.85rem;font-weight:600;color:var(--accent);letter-spacing:.02em">${esc(p.category)}</span>
         </div>`;
    return `
      <a class="project-card reveal" href="projects.html?p=${esc(p.id)}" style="text-decoration:none;color:inherit;${shown ? "" : "display:none"}">
        ${media}
        <div class="pc-body">
          <span class="pc-tag">${esc(p.category)}</span>
          <h3>${esc(p.title)}</h3>
          <p class="pc-desc">${esc(p.short)}</p>
          <div class="pc-links">
            <span style="font-size:.85rem;font-weight:600;color:var(--accent)">${esc(t("proj.viewDetails"))}</span>
          </div>
        </div>
      </a>`;
  }

  function renderFilters() {
    const D = window.I18N.getData();
    if (!filterBar || !D.projectFilters) return;
    if (!D.projectFilters.includes(activeFilter)) activeFilter = D.projectFilters[0];
    filterBar.innerHTML = D.projectFilters
      .map((f) => `<button class="filter-btn${f === activeFilter ? " active" : ""}" data-filter="${esc(f)}">${esc(f)}</button>`)
      .join("");
  }

  function renderProjects() {
    const D = window.I18N.getData();
    if (!projectsGrid || !D.projects) return;
    // The first filter option is the "show all" choice (e.g. "All" / "全部") —
    // normalize it to null so every card matches instead of requiring p.category === "All".
    const allLabel = D.projectFilters ? D.projectFilters[0] : null;
    const filter = activeFilter === allLabel ? null : activeFilter;
    projectsGrid.innerHTML = D.projects.map((p) => projectCard(p, filter)).join("");
    revealOnScroll();
  }

  if (filterBar) {
    filterBar.addEventListener("click", (e) => {
      const btn = e.target.closest(".filter-btn");
      if (!btn) return;
      activeFilter = btn.dataset.filter;
      $$(".filter-btn", filterBar).forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");
      renderProjects();
    });
  }

  /* ---------- publications ---------- */

  function renderRsToolkit() {
    const D = window.I18N.getData();
    const tbl = $("#rs-toolkit-table");
    if (tbl && D.profile.rsToolkit) {
      tbl.innerHTML =
        `<thead><tr><th>Domain</th><th>Core Frameworks & Methodologies</th></tr></thead>` +
        `<tbody>${D.profile.rsToolkit
          .map((r) => `<tr><td><strong>${esc(r.domain)}</strong></td><td>${esc(r.tools)}</td></tr>`)
          .join("")}</tbody>`;
    }
  }

  function renderPublications() {
    const D = window.I18N.getData();
    const pubsList = $("#publications-list");
    if (pubsList && D.publications) {
      pubsList.innerHTML = D.publications
        .map(
          (p) => {
            const type = p.type || (p.id && p.id.startsWith("PCC") ? "pcc" : "conf");
            const typeLabel = type === "pcc" ? "PCC Oral" : "Conference Paper";
            return `
          <article class="paper paper-${type} reveal">
            <div class="paper-head">
              <span class="paper-id">${esc(p.id)}</span>
              <span class="paper-type">${esc(typeLabel)}</span>
              <span class="paper-year">${esc(p.year || "")}</span>
            </div>
            <h3 class="paper-title">${esc(p.title)}</h3>
            <p class="paper-authors">${p.authors.map((a) =>
              a.me ? `<strong>${esc(a.name)}</strong>` : `<span>${esc(a.name)}</span>`
            ).join(", ")}</p>
            <p class="paper-venue">${esc(p.venueShort || p.venue)}</p>
            <div class="paper-detail">
              ${p.pages ? `<span>${esc(t("pub.pages"))} ${esc(p.pages)}</span>` : ""}
              ${p.published ? `<span>· ${esc(p.doi ? t("pub.published") : t("pub.presented"))} ${esc(p.published)}</span>` : ""}
            </div>
            <div class="paper-cta">
              ${p.doi
                ? `<a class="paper-btn" href="https://doi.org/${esc(p.doi)}" target="_blank" rel="noopener">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><path d="M15 3h6v6"/><path d="M10 14 21 3"/></svg>
                    doi.org/${esc(p.doi)}
                  </a>`
                : p.conferenceUrl
                ? `<a class="paper-btn" href="${esc(p.conferenceUrl)}" target="_blank" rel="noopener">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><path d="M15 3h6v6"/><path d="M10 14 21 3"/></svg>
                    ${esc(t("pub.conferencePage"))}
                  </a>`
                : ""}
            </div>
          </article>`;
          }
        )
        .join("");
    }
  }

  /* ---------- education ---------- */

  function renderEducation() {
    const D = window.I18N.getData();
    const eduList = $("#edu-list");
    if (eduList && D.education) {
      eduList.innerHTML = D.education
        .map(
          (e) => `
          <div class="edu-card reveal">
            <div class="edu-head">
              <h3>${esc(e.school)}</h3>
              <span class="edu-period">${esc(e.period)}</span>
            </div>
            <p class="edu-degree">${esc(e.degree)}</p>
            <p class="edu-school">${esc(e.location)}</p>
          </div>`
        )
        .join("");
    }
  }

  /* ---------- certifications ---------- */

  function renderCerts() {
    const D = window.I18N.getData();
    const certList = $("#cert-list");
    if (certList && D.certifications) {
      certList.innerHTML = D.certifications
        .map(
          (c) => `
          <div class="cert-item reveal">
            <div>
              <h4>${esc(c.title)}</h4>
              <p class="cert-issuer">${esc(c.issuer)}</p>
            </div>
            <div class="cert-meta">
              <span class="cert-date">${esc(c.date)}</span>
            </div>
          </div>`
        )
        .join("");
    }
  }

  /* ---------- achievements ---------- */

  function renderAchievements() {
    const D = window.I18N.getData();
    const achvGrid = $("#achv-grid");
    if (achvGrid && D.achievements) {
      const icons = [
        '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><circle cx="12" cy="8" r="6"/><path d="M15.5 13 17 22l-5-3-5 3 1.5-9"/></svg>',
        '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="m6 9 6-2 6 2v6l-6 2-6-2z"/><path d="M6 9v6"/><path d="M12 7v12"/><path d="M18 9v6"/></svg>',
        '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>',
      ];
      achvGrid.innerHTML = D.achievements
        .map(
          (a, i) => `
          <div class="achv-item reveal">
            <div class="achv-icon">${icons[i % icons.length]}</div>
            <h3>${esc(a.title)}</h3>
            <p>${esc(a.text)}</p>
          </div>`
        )
        .join("");
    }
  }

  /* ---------- render all (runs on load + language change) ---------- */

  function renderAll() {
    renderFilters();
    renderPillars();
    renderSkills();
    renderExperience();
    renderProjects();
    renderRsToolkit();
    renderPublications();
    renderEducation();
    renderCerts();
    renderAchievements();
    revealOnScroll();
  }

  window.I18N.onLangChange(renderAll);
  renderAll();

  /* ---------- reveal on scroll ---------- */

  function revealOnScroll() {
    const trigger = window.innerHeight - 40;
    $$(".reveal").forEach((el) => {
      if (!el.classList.contains("visible") && el.getBoundingClientRect().top < trigger) {
        el.classList.add("visible");
      }
    });
  }

  window.addEventListener("scroll", revealOnScroll, { passive: true });
  window.addEventListener("resize", revealOnScroll, { passive: true });
  document.addEventListener("DOMContentLoaded", revealOnScroll);

  /* ---------- active nav highlight ---------- */

  const navLinks = $$("#nav-links a");
  const sections = ["about", "research-st", "skills", "experience", "projects", "research", "education", "contact"]
    .map((id) => document.getElementById(id))
    .filter(Boolean);

  function onScroll() {
    let current = "";
    const y = window.scrollY + 120;
    sections.forEach((sec) => {
      if (sec.offsetTop <= y) current = sec.id;
    });
    navLinks.forEach((a) => {
      a.classList.toggle("active", a.getAttribute("href") === `#${current}`);
    });
  }
  if (navLinks.length && sections.length) {
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
  }

  /* ---------- contact form (removed — visitor uses contact info above) ---------- */
})();
