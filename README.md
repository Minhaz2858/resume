# Minhazul Islam — AI Engineer Portfolio

A clean, professional, fully responsive portfolio website for **Minhazul Islam (Artificial Intelligence Engineer)**.

Built with plain HTML, CSS, and JavaScript — no build step, no dependencies. Easy to host on GitHub Pages, Netlify, or any static host.

## Pages

| Page | Description |
| --- | --- |
| `index.html` | Single-page portfolio: hero, about, skills, experience, featured projects (filterable), research & publications, education & certifications, achievements, contact. |
| `projects.html` | **Project Library** — sticky sidebar listing all 7 projects; the right panel shows comprehensive details for the selected project (problem, role, architecture, algorithm, methodology, key features, impact, evaluation, tech stack, links). Supports `?p=<project-id>` deep links. |

## Features

- **English / 中文 language switcher** — globe-button dropdown in the header on every page (opens EN / 中文 options); choice is persisted in `localStorage` and defaults to the visitor's browser language
- Dark / light mode (persisted in `localStorage`, respects system preference)
- Mobile-friendly navigation menu
- Smooth scrolling + subtle reveal-on-scroll animations (respects `prefers-reduced-motion`)
- Project filters on the home page
- Contact form that opens the visitor's email client (replace with a backend/form service for real delivery)

## Project structure

```
├── index.html          # Home page
├── projects.html       # Project Library page
├── css/
│   ├── style.css       # Design system + home page
│   └── library.css     # Project Library layout
├── js/
│   ├── i18n.js         # Language switcher: state, UI strings, data-i18n handling
│   ├── data.js         # ALL content lives here (English, single source of truth)
│   ├── data.zh.js      # Chinese mirror of data.js (same shape)
│   ├── main.js         # Home page rendering + interactions
│   └── projects.js     # Library page rendering + interactions
└── assets/             # profile.jpg, cv.pdf, project images/video
```

## Editing content

Everything (profile, skills, experience, projects, publications, education, certifications, achievements) is defined in `js/data.js` (English) and mirrored in `js/data.zh.js` (Chinese). Edit `js/data.js` for English content, then mirror the change into `js/data.zh.js` — both pages update automatically in either language.

The language switcher itself, plus all static page text (nav, section headings, hero, contact form, footer), lives in the UI dictionary at the top of `js/i18n.js` under `UI.en` / `UI.zh`. Add a key to both halves and hook it up in the HTML with a `data-i18n` attribute.

> **Note:** The Chinese translation is AI-generated. Review `js/data.zh.js` and the `UI.zh` strings in `js/i18n.js` before sharing your resume with employers.

## Running locally

```bash
python3 -m http.server 3000
# or: npx serve .
```

Then open http://localhost:3000.

## Placeholders to fill in

Items marked `[PLACEHOLDER]` in `data.js` / the pages:

- **Achievements** — awards, scholarships, competitions, leadership
- **Certifications** — add "View certificate" URLs if you have them
- **Research** — Google Scholar / citation profile link
- **Project links** — live-demo/case-study URLs where marked
- **Demo videos** — add real screenshots or video URLs to projects

## Deploying to GitHub Pages

1. Push this folder to a GitHub repo.
2. Settings → Pages → deploy from the branch root (or use a `gh-pages` branch).
