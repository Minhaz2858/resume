/* ============================================================
   Project Library page — sidebar + comprehensive detail view
   Language-aware: reads active-language data via window.I18N
   and re-renders on language change (keeps ?p= selection).
   ============================================================ */

(function () {
  "use strict";

  if (!window.I18N || !window.I18N.getData()) return;

  const $ = (sel, ctx) => (ctx || document).querySelector(sel);
  const $$ = (sel, ctx) => Array.from((ctx || document).querySelectorAll(sel));

  const esc = (s) =>
    String(s).replace(/[&<>"']/g, (c) => ({
      "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;",
    }[c]));

  const t = (key) => window.I18N.t(key);

  const projects = () => {
    const D = window.I18N.getData();
    return (D && D.projects) || [];
  };

  let currentId = null;

  /* ---------- theme toggle (shared) ---------- */

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
    menuToggle.addEventListener("click", () => setMenu(!mobileMenu.classList.contains("open")));
  }
  if (mobileMenu) {
    $$("a", mobileMenu).forEach((a) => a.addEventListener("click", () => setMenu(false)));
  }

  /* ---------- footer year ---------- */

  const yearEl = $("#year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  /* ---------- render sidebar ---------- */

  function renderSidebar() {
    const nav = $("#lib-nav");
    if (!nav) return;
    nav.innerHTML = projects()
      .map(
        (p, i) => `
        <button data-id="${esc(p.id)}" data-index="${i}" class="${p.id === currentId ? "active" : ""}">
          <span class="lib-title">${esc(p.title)}</span>
          <span class="lib-sub">${esc(p.category)} · ${esc(p.period)}</span>
        </button>`
      )
      .join("");
  }

  /* ---------- build detail HTML ---------- */

  function linksHTML(links) {
    if (!links || !links.length) return "";
    return `
      <div class="pd-links">
        ${links
          .map(
            (l) => `
            <a class="btn btn-secondary" href="${esc(l.url)}" ${l.external ? 'target="_blank" rel="noopener"' : ""}>
              ${esc(l.label)}
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><path d="M15 3h6v6"/><path d="M10 14 21 3"/></svg>
            </a>`
          )
          .join("")}
      </div>`;
  }

  function block(title, inner) {
    // Strip HTML tags + collapse whitespace; skip the block if there's no real content.
    const stripped = String(inner || "").replace(/<[^>]*>/g, "").replace(/&nbsp;/g, " ").trim();
    if (!stripped) return "";
    return `
      <div class="pd-block">
        <h2>${title}</h2>
        ${inner}
      </div>`;
  }

  function detailHTML(p, index) {
    const list = projects();
    const prev = list[index - 1];
    const next = list[index + 1];

    const media = [
      p.image ? `<div class="pd-media"><img src="${esc(p.image)}" alt="${esc(p.title)}" /></div>` : "",
      p.video ? `<div class="pd-media"><video src="${esc(p.video)}" controls preload="metadata" muted playsinline></video></div>` : "",
    ].join("");

    const highlights = p.highlights
      ? `<div class="pd-highlights">${p.highlights
          .map(
            (h) => `
          <div class="pd-highlight">
            <div class="ph-num">${esc(h.num)}</div>
            <div class="ph-label">${esc(h.label)}</div>
          </div>`
          )
          .join("")}</div>`
      : "";

    return `
      <div class="pd-header">
        <span class="pd-tag">${esc(p.category)}</span>
        <h1>${esc(p.title)}</h1>
        <div class="pd-meta">
          <span class="pm-chip">${esc(p.org)}</span>
          <span class="pm-chip">${esc(p.period)}</span>
          <span class="pm-chip">${esc(t("lib.role"))}${esc(p.role)}</span>
        </div>
        <p class="pd-lead">${esc(p.summary)}</p>
      </div>

      ${media}
      ${highlights}

      ${block(t("lib.block.problem"), `<p>${esc(p.problem)}</p>`)}
      ${block(t("lib.block.role"), `<p>${esc(p.roleDetail)}</p>`)}
      ${
        p.architecture
          ? block(t("lib.block.architecture"), `<p>${esc(p.architecture)}</p>`)
          : ""
      }
      ${
        p.algorithm
          ? block(t("lib.block.algorithm"), `<div class="pd-algo"><p>${esc(p.algorithm)}</p></div>`)
          : ""
      }
      ${
        p.methodology
          ? block(
              t("lib.block.methodology"),
              `<ol class="pd-steps">${p.methodology
                .map((m) => `<li>${esc(m)}</li>`)
                .join("")}</ol>`
            )
          : ""
      }
      ${
        p.features && p.features.length
          ? block(
              t("lib.block.features"),
              `<ul>${p.features.map((f) => `<li>${esc(f)}</li>`).join("")}</ul>`
            )
          : ""
      }
      ${
        p.impact
          ? block(t("lib.block.impact"), `<div class="pd-impact"><p>${esc(p.impact)}</p></div>`)
          : ""
      }
      ${
        p.evaluation
          ? block(t("lib.block.evaluation"), `<p>${esc(p.evaluation)}</p>`)
          : ""
      }
      ${
        p.sections
          ? p.sections
              .map(
                (s) => `
        <div class="pd-block">
          <h2>${esc(s.title)}</h2>
          ${s.body}
        </div>`
              )
              .join("")
          : ""
      }
      ${linksHTML(p.links)}

      <div class="pd-nav">
        <button ${prev ? `data-id="${esc(prev.id)}"` : "disabled"}>
          <span>${esc(t("lib.prev"))}</span>
          ${prev ? esc(prev.title.split("—")[0].trim().slice(0, 40)) : ""}
        </button>
        <button ${next ? `data-id="${esc(next.id)}"` : "disabled"}>
          <span>${esc(t("lib.next"))}</span>
          ${next ? esc(next.title.split("—")[0].trim().slice(0, 40)) : ""}
        </button>
      </div>`;
  }

  /* ---------- select & render ---------- */

  function renderDetail(id) {
    const list = projects();
    const idx = list.findIndex((p) => p.id === id);
    if (idx === -1) return;
    currentId = id;

    const pd = $("#pd");
    if (pd) pd.innerHTML = detailHTML(list[idx], idx);
    $$("#lib-nav button").forEach((b) => b.classList.toggle("active", b.dataset.id === id));
  }

  function selectProject(id) {
    if (!projects().some((p) => p.id === id)) return;
    renderDetail(id);
    if (window.history && history.replaceState) {
      history.replaceState(null, "", `?p=${encodeURIComponent(id)}`);
    }
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  /* ---------- render all (runs on load + language change) ---------- */

  function renderAll() {
    const list = projects();
    if (!list.length) return;
    if (!list.some((p) => p.id === currentId)) currentId = null;

    renderSidebar();

    if (!currentId) {
      const params = new URLSearchParams(window.location.search);
      const initialId = params.get("p");
      currentId = list.some((p) => p.id === initialId) ? initialId : list[0].id;
    }
    renderDetail(currentId);
  }

  window.I18N.onLangChange(renderAll);

  /* ---------- click delegation ---------- */

  const nav = $("#lib-nav");
  if (nav) {
    nav.addEventListener("click", (e) => {
      const btn = e.target.closest("button[data-id]");
      if (btn) selectProject(btn.dataset.id);
    });
  }

  document.addEventListener("click", (e) => {
    const btn = e.target.closest("button[data-id]");
    if (btn) selectProject(btn.dataset.id);
  });

  /* ---------- image lightbox ---------- */

  const lightbox = $("#lightbox");
  const lightboxImg = $("#lightbox-img");
  const lightboxCap = $("#lightbox-cap");
  const lightboxClose = $("#lightbox-close");

  function openLightbox(src, alt, caption) {
    if (!lightbox || !lightboxImg) return;
    lightboxImg.src = src;
    lightboxImg.alt = alt || "";
    lightboxCap.textContent = caption || "";
    lightbox.classList.add("open");
    lightbox.setAttribute("aria-hidden", "false");
    document.body.style.overflow = "hidden";
  }

  function closeLightbox() {
    if (!lightbox || !lightbox.classList.contains("open")) return;
    lightbox.classList.remove("open");
    lightbox.setAttribute("aria-hidden", "true");
    document.body.style.overflow = "";
    // Defer src reset so the fade-out animation completes cleanly
    setTimeout(() => {
      if (!lightbox.classList.contains("open")) {
        lightboxImg.src = "";
        lightboxImg.alt = "";
      }
    }, 250);
  }

  // Click any in-detail image (hero or gallery screenshot) to open lightbox
  document.addEventListener("click", (e) => {
    const img = e.target.closest(".pd-media img, .pd-gallery .pd-screenshot img");
    if (!img) return;
    // Avoid hijacking clicks inside other interactive elements if any
    e.preventDefault();
    const figcap = img.closest("figure")?.querySelector("figcaption")?.textContent?.trim();
    openLightbox(img.currentSrc || img.src, img.alt, figcap || "");
  });

  if (lightboxClose) lightboxClose.addEventListener("click", closeLightbox);

  // Click on the backdrop (but not on the image itself) closes
  if (lightbox) {
    lightbox.addEventListener("click", (e) => {
      if (e.target === lightbox || e.target === lightboxImg) closeLightbox();
    });
  }

  // Escape closes
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") closeLightbox();
  });

  renderAll();
})();
