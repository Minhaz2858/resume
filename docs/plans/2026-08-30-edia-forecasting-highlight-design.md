# EDIA Forecasting Highlight — Design (2026-08-30)

## Decision
Full 3-placement highlight of EDIA's forecasting system across homepage card, project card strip, and project detail page. Approved by user ("ok do it").

## Rationale
The forecasting engine is EDIA's most differentiated, falsifiable, and impressive work — yet it's buried in the broader 15-agent story. The user wants it surfaced with the same prominence as BepsBot got after Prof. Wang's review.

## Placements

### 1. Main EDIA card (homepage) — Add MAPE stat
- **Before**: 4 highlights including "0 hallucinated numbers"
- **After**: Keep 4 highlights but replace one with `"MAPE 1.4%" (best case — SIS rubber forecast)` — concrete, falsifiable, recruiter-friendly
- Implementation: edit `js/data.js` line ~146, replace the last highlight.

### 2. Homepage card — Add "Forecasting Highlights" strip
A 3-card strip inside the EDIA card showing the 3 most impressive forecasting facts:
1. **Multi-horizon** — "3d · 7d · 30d × bear / base / bull — 9 scenarios per product"
2. **Adaptive policy** — "Bias correction + volatility scaling — adjusts every forecast from recent accuracy"
3. **Auditable** — "5 supervisor gates + 7-day snapshot persistence — every forecast is traceable"

- Implementation: add `forecastingHighlights` field to EDIA project, render with `renderForecastingHighlights()` in `main.js`, style with `.forecast-strip` in CSS.

### 3. Project detail page — Dedicated "Forecasting Engine" section
New section between "Multi-Model Forecasting" and "Talent Deployment". Contains:

**A. Architecture diagram** — 5-layer pipeline (Data Ingestion → Forecasting Engine → Orchestration → Quality Gates → Persistence)

**B. Per-product MAPE table** — Real numbers:
| Product | MAPE | Tier |
|---|---|---|
| SIS rubber | 1.4% | high |
| Isoprene | 2.2% | high |
| DCPD | 4.2% | high |
| Cracked C5 | 4.7% | high |
| Styrene | 5.2% | medium |
| Piperylene | 6.1% | high |

**C. Ensemble breakdown** — Two columns:
- Short-term (3d/7d): ARIMA(2,1,2) + XGBoost + LSTM + Mean-Reversion with dynamic weights
- Monthly (30d): 4-layer STL (Trend 40% + Causal 35% + Seasonal + Weekly nudge)

**D. 3 mechanism callouts**:
1. Adaptive policy — bias correction from last 45 days of measured MAPE
2. Quality gates — 5 supervisor checks
3. Trust tier system — per-product calibration

**E. Production proof** — "Serving Ecisco's commercial team on C5/C9 products with 19 product nodes"

- Implementation: add `forecastingSection` HTML block to EDIA project in `data.js`, render with existing `block()` helper in `projects.js`, add CSS for new components (table, ensemble columns, mechanism cards).

## Trade-offs

| Choice | Pro | Con |
|---|---|---|
| Lead with MAPE table | Most falsifiable | Too quantitative for designer audience |
| Lead with architecture | Shows depth | Less immediately impressive |
| Lead with innovations | Novel, research-worthy | Requires context |
| **Recommended: MAPE table first, then architecture** | Concrete proof + depth | — |

## Files to modify
- `js/data.js` (EDIA project data)
- `js/data.zh.js` (mirror)
- `js/main.js` (rendering)
- `js/projects.js` (project page rendering)
- `css/style.css` (homepage strip styles)
- `css/library.css` (project page styles)
- `docs/plans/2026-08-30-edia-forecasting-highlight-design.md` (this doc)

## Status
- [x] Design approved by user
- [ ] Implementation in progress