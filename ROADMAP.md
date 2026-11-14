# ROADMAP — Software Test Generator (SOTE2 Quiz)

Goal: bilingual static quiz site (GitHub Pages) with 1000 questions for SOTE2 chapters 1–6.
Spec lives in [AGENTS.md](AGENTS.md). MVP-first strategy: 20 pilot questions + full website, then grow the bank.

## Phase 0 — Setup ✅
- [x] Collect course material in `RESOURCES/` (git-ignored, reference only)
- [x] Write AGENTS.md (spec) and this roadmap
- [x] Init git repo, connect to GitHub remote, first push

## Phase 1 — Pilot question bank (MVP data) ✅
- [x] `data/questions.js` with 20 questions (ch1:1, ch2:3, ch3:5, ch4:4, ch5:4, ch6:3)
- [x] All 5 types (mc, ms, tf, fib, fe) and all 4 difficulties represented
- [x] `tools/validate_questions.py` schema validator; pilot passes it
- [x] Commit: "Add pilot question bank (20 questions) and validator"

## Phase 2 — Website (MVP app) ✅
- [x] `index.html`, `css/style.css`, `js/i18n.js`, `js/app.js` per AGENTS.md §4
- [x] Start view: description, info section, filters (chapter/difficulty/type multi-select), order + display options, DE/EN toggle
- [x] Quiz engine: 10 random matching questions, option shuffling, timer, per-question timing, scroll + paginated modes
- [x] Results view: score, per-question time, correct answers, explanations, tips, sources
- [x] Mobile responsive + dark mode; works over file:// and GitHub Pages
- [x] Manual browser test of all question types and both display modes
- [x] Commit: "Add quiz website (MVP)"

## Phase 3 — MVP release
- [ ] Review pass (strong model): question quality, grading correctness, UI issues
- [ ] Push to GitHub; enable GitHub Pages (Settings → Pages → main branch, / root)
- [ ] Students test the MVP; collect feedback, fix issues

## Phase 4 — Scale the question bank to 1000
Batches of ~45 questions per chapter (cheap model + validator + spot review), committed per batch.
Wave 1 done (2026-11-14): bank at 264 (ch1:20 ✅ complete, ch2:48, ch3:50, ch4:49, ch5:49, ch6:48).
Wave 2 done (2026-11-14): bank at 514 (ch1:20, ch2:98, ch3:100, ch4:99, ch5:99, ch6:98).
Remaining to 1000: ch2 +62, ch3 +120, ch4 +101, ch5 +101, ch6 +102 (~2 more waves).
Targets (ch1 capped at 20 — thin source material; its share moved to ch2):
- [ ] Ch 3 Strukturierte Daten → 220 total
- [ ] Ch 4 Dateien → 200 total
- [ ] Ch 5 Datensätze (Pandas/Matplotlib) → 200 total
- [ ] Ch 6 NoSQL/MongoDB → 200 total
- [ ] Ch 2 Basistechnologien → 160 total
- [x] Ch 1 Einführung → 20 total (complete)
- [ ] Deduplicate/balance pass; final validator run; update site copy if needed

## Phase 5 — Polish (optional)
- [ ] Accessibility pass (keyboard navigation, contrast)
- [ ] Print-friendly results
- [ ] Question count display per current filter selection
