# BepsBot — Portfolio Update Design (2026-08-29) — v2 (paper-validated)

## v1 changes (morning)
See previous section of this file (or git log). v1 added: id `mental-health` → `bepsbot`, 3 visual sections, GitHub + paper + case-study links, removed broken Live Demo.

## v2 changes (this revision)
User added a `bepsbot/` resources folder containing the Springer LNCS LaTeX manuscript, the PDF, and 2 paper-quality figures (`fig5_architecture1.png` at 1825×862, `fig5_re_pipeline_1.png` at 1122×1402).

### New source material
- **Paper title (official)**: "BepsBot: A Dual-Mode Writing Assistant for Peer Support in Bipolar Disorder Communities" — Springer LNCS, in review
- **Affiliation**: Ningbo Global Innovation Center, Zhejiang University
- **Authors**: Minhazul Islam (1st), Mengru Xue (corresponding), Tasnim Afra
- **Real metrics** (from LaTeX body):
  - 24-participant within-subjects study (12F/12M, age 22–33, M=27.75)
  - 3 writing tasks T1–T3, counterbalanced Latin square
  - 3 posts authored by self-identified bipolar individuals from their own experience
  - 10-fold CV: IS F1=.62 (A=.64, P=.64, R=.62), ES F1=.68 (A=.68, P=.70, R=.68)
  - 100-comment held-out cross-verification: IS 65%, ES 75% accuracy
  - Cohen's κ=.78 (substantial, 2 independent coders)
  - SUS 88.0 (SD=11.4, Mdn=90), 70.8% Grade A, 0% below "OK" threshold
  - T3 IS × T3 confidence: Spearman rs=.552, p=.005 (Bonferroni-corrected)
  - Task completion: T1=11.21 min → T3=7.59 min (32.3% reduction)
  - 100% Assessment-first at T1; 87.5% at T3
  - User pattern archetypes: A Validation (26/39, 66.7%), B Selective Integration (8/39, 20.5%), C Full Replacement (5/39, 12.8%)
  - 48,148-comment r/bipolar pool; 450 gold-standard comments
  - 2-stage retrieval: ES More-Like-This (50 candidates) → 768-dim BERT cosine re-ranking
  - 3 transformations: Personal Pronouns, Family & Friends, Positive Words
  - LIWC-2015 dictionary; 12 related words seeded for serendipity

### Approved scope (user picked "All + 3 more sections")
1. ✅ Replace hero with `fig5_architecture1.png` (1.3 MB, paper-quality)
2. ✅ Add 4th section: "Recommendation Mode — 2-Stage Retrieval Pipeline" with `fig5_re_pipeline_1.png`
3. ✅ Add 5th section: "User Study — 24 Participants, SUS 88.0, κ=.78" with metrics from paper
4. ✅ Add 6th section: "Discussion — Voice Preservation, Confirmation, Autonomy"
5. ✅ Add 2nd new section: "Data Pipeline — 48K r/bipolar Pool + 3-Expert Annotation"
6. ✅ Add 3rd new section: "AS Mode — Conditional Feedback with LIWC Seeding" (richer than v1)
7. ✅ Update highlights: 24 / SUS 88.0 / κ=.78 / IS .62 + ES .68 F1
8. ✅ Inject paper metrics into `algorithm`, `impact`, `evaluation`
9. ✅ Fix `publications[]` PCC.1 title in BOTH `data.js` + `data.zh.js`
10. ✅ Mirror to `data.zh.js`
11. ✅ Bump cache-buster `?v=1015` → `?v=1016`

### Final sections (6)
1. System Architecture — `bepsbot_architecture.png` (fig5_architecture1)
2. Data Pipeline — 48K r/bipolar Pool + 3-Expert Annotation (no image, uses `pd-cards` grid)
3. Assessment (AS) Mode — Conditional Feedback with LIWC Seeding — `bepsbot_assessment.png`
4. Recommendation (RE) Mode — 2-Stage Retrieval Pipeline — `bepsbot_re_pipeline.png`
5. User Study — 24 Participants, SUS 88.0, κ=.78 (uses `pd-highlights` grid)
6. Discussion — Voice Preservation, Confirmation, Autonomy (uses `pd-callout`)

### Final highlights (4 chips)
- `24` / participants · within-subjects study
- `SUS 88.0` / Excellent (Bangor et al.) · 70.8% Grade A
- `κ=.78` / inter-coder agreement · 450 gold-standard comments
- `IS .62 / ES .68` / F1 · 10-fold CV · 100-comment holdout IS 65% / ES 75%

### Final stack (17 items, added `BERT (768-dim)`, `More-Like-This (tf-idf)`, `LIWC-2015`)

### Final links
- `GitHub` → `https://github.com/minhazulzju/BepsBot`
- `HHME 2026 PCC Paper` → `https://hhme.ccf.org.cn/PCC_paper.html`
- `Full Case Study` → `docs/bepsbot.html`

### Publications[] fix
PCC.1 title was: `"BEPSBot: Draft-Grounded AI Writing Assistance for Bipolar-Related Online Peer Support"` (wrong — was either a placeholder or from a different paper draft)
PCC.1 title now: `"BepsBot: A Dual-Mode Writing Assistant for Peer Support in Bipolar Disorder Communities"` (matches LaTeX `\title{}` in `bepsbot/BepsBot...tex`)

## Verification
- `curl http://localhost:3000/js/data.js?v=1016 | grep -c '"bepsbot"'` → 1
- `curl http://localhost:3000/js/data.zh.js?v=1016 | grep -c '"bepsbot"'` → 1
- `projects.html?p=bepsbot` → HTTP 200
- All 5 bepsbot assets in `assets/` (hero, architecture, assessment, post, re_pipeline)
- `pd-fig`, `pd-cards`, `pd-highlights`, `pd-callout` CSS classes used (already exist in `library.css` per EDIA)

## Not yet done (optional)
- Copy the PDF into `docs/bepsbot/` and add a "Manuscript PDF" link
- Build a docs/bepsbot.html that mirrors the same paper-validated metrics
- Cross-link the Springer LNCS submission status
