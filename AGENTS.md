# AGENTS.md — Software Test Generator (SOTE2 Quiz)

Authoritative spec for every agent/model working on this project. Read this file fully before writing any code or questions.

## 1. Project goal

A static, bilingual (German/English) quiz website for students of the course **Softwareentwicklung 2 (SOTE2)** to practice for an exam covering **chapters 1–6 only**. Deployable on GitHub Pages with zero build step. No accounts, no server, no persistence of scores.

Source material lives in `RESOURCES/` (course HTML export, script PDF, lab PDFs 1–6). It is reference material only — **never commit or modify it** (it is git-ignored).

## 2. Exam scope (chapters and sections)

| Ch | Title (DE) | Title (EN) | Key sections |
|----|------------|------------|--------------|
| 1 | Einführung | Introduction | 1.1 Intelligente Systeme |
| 2 | Basistechnologien | Basic technologies | 2.2 Vernetzte Systeme, 2.3 Persistenz, 2.4 Nebenläufigkeit (overview only), 2.5 Web-Technologien, 2.6 Begriffe, 2.7 URLs |
| 3 | Strukturierte Daten | Structured data | 3.2 Dictionaries, 3.3 JSON |
| 4 | Dateien | Files | 4.2 Dateisysteme, 4.3 Arten von Dateien, 4.4 Pickles, 4.5 Modul os, 4.6 Syntax und Befehle für Dateien |
| 5 | Umgang mit Datensätzen | Working with datasets | 5.3 Pandas, 5.4 Visualisierung mit Matplotlib |
| 6 | NoSQL-Datenbanken | NoSQL databases | 6.2 DBMS, 6.3 NoSQL-Datenbanken, 6.4 NoSQL in Python (pymongo), 6.5 Vergleich mit RDBMS |

Labs reinforce these: Labor 1 Zahlenraten (Python basics), 2 Dictionaries, 3 JSON, 4 Dateien/Datensätze, 5 Visualisierung, 6 MongoDB. Chapters 7–9 (threads in depth, HTML/CSS, Flask) are **out of scope**. Organizational content (grading, dates) is out of scope.

All coding questions use **Python**.

## 3. Question data format

Questions live in `data/questions.js` (not `.json`, so the site works over `file://` without fetch/CORS issues):

```js
// data/questions.js
const QUESTIONS = [ /* question objects */ ];
```

### Question object schema

```js
{
  id: "ch3-mc-001",            // unique: ch<chapter>-<type-abbrev>-<running number>
  chapter: 3,                   // 1..6
  section: "3.2 Dictionaries", // section heading from the course material
  source: {                     // where to look up the answer
    document: "SOTE2 Skript (Softwareentwicklung 2)",
    section: "3.2 Dictionaries" // optionally "Labor 2 (Dictionaries)"
  },
  type: "mc",                   // "mc" | "ms" | "tf" | "fib" | "fe"
  difficulty: "easy",          // "easy" | "medium" | "hard" | "ultra"
  question: { de: "…", en: "…" },
  clarification: { de: "…", en: "…" } | null, // REQUIRED null for "ultra"; optional otherwise
  code: "python code or null",  // identical in both languages; comments in English
  options: [                    // mc/ms/fe only, 3–6 entries; omit for tf/fib
    { id: "a", text: { de: "…", en: "…" } }
  ],
  answer: /* see grading rules */,
  blanks: [                     // fib only: one entry per ____ in code/question
    { accepted: ["append", ".append"], caseSensitive: true }
  ],
  explanation: { de: "…", en: "…" },
  tip: { de: "…", en: "…" }    // a hint that helps FIND the answer without giving it away
}
```

### Question types and grading (all auto-gradable)

- **mc** (multiple choice, one correct): `answer: "b"` (option id). 3–6 options. Options are shuffled at display time (never pre-shuffle; never make option text depend on position like "both a and b").
- **ms** (multiple select): `answer: ["a","c"]`. Graded as exact set match. Question text must say how many to pick or "select all that apply".
- **tf** (true/false): `answer: true` or `false`. No `options` array.
- **fib** (fill in the blank): code or text contains `____` (4 underscores) per blank; `blanks[i].accepted` lists all accepted strings. Grader trims whitespace; `caseSensitive: true` for Python identifiers/keywords. Keep blanks short (one identifier, method, keyword, or literal) so exact match is fair.
- **fe** (find the error): `code` has numbered logical lines; options name the faulty line/aspect; graded like mc.

### Quality rules for questions

1. Unambiguous: exactly one defensibly correct answer (or exact set for ms). No trick wording.
2. Self-contained: everything needed is in the question + code. Add `clarification` whenever a term or setup could confuse — except for `ultra` difficulty, which gets none.
3. Difficulty meaning: `easy` = recall/recognition; `medium` = understanding/one-step application; `hard` = multi-step reasoning, reading code output, edge cases; `ultra` = subtle semantics, combined concepts, no clarification given.
4. `tip` guides the search ("Think about what `dict.get` returns when the key is missing"), never states the answer.
5. `explanation` states why the correct answer is right and, for plausible distractors, why they are wrong. 2–4 sentences.
6. German is the primary wording (exam language); English is a faithful translation, not a paraphrase. Code identifiers/comments stay English in both.
7. Distractors must be plausible (common student mistakes), never joke options.
8. Every question's content must be consistent with the SOTE2 course material; `source.section` must name a real section from the table above (or a lab).
9. Python 3 semantics throughout; prefer the style used in the course (f-strings, `with open(...)`, `json.load/dump`, `pickle`, `os` module, `pandas as pd`, `matplotlib.pyplot as plt`, `pymongo`).

## 4. Website spec

Plain **HTML + CSS + vanilla JS**, no frameworks, no build step. Files:

```
index.html
css/style.css
js/i18n.js        // UI strings de/en
js/app.js         // state, filtering, quiz engine, grading, timer, rendering
data/questions.js // question bank (QUESTIONS const)
```

### Pages/views (single page, JS-switched views)

1. **Start view**: short description of the site; a collapsible "More info / Mehr Infos" section explaining scoring, types, difficulties; the filter form:
   - Chapter (1–6, multi-select chips), Difficulty (4 levels, multi-select), Type (5 types, multi-select). Empty selection = all.
   - Order: questions by chapter order or random; by difficulty order or random (both toggles combinable; random is the default).
   - Display: *scroll* (all questions on one page) or *paginated* (one per page).
   - Language toggle DE/EN in the header (persists via localStorage, wrapped in try/catch; default DE).
   - **Start** button: picks **10 random questions** matching filters (if fewer than 10 match, use all and say so), resets and starts the timer.
2. **Quiz view**: timer visible; question cards show chapter + difficulty badges; code in `<pre><code>` blocks; mc/ms/fe as buttons/checkboxes, tf as two buttons, fib as inline text inputs. Options shuffled per run (Fisher–Yates). Paginated mode: Prev/Next + progress (3/10); scroll mode: all cards, scroll. **Finish** button after the last question (always reachable; unanswered questions count as wrong after a confirm dialog).
3. **Results view**: score X/10, total time, then per question: user answer vs correct answer (color-coded), time spent on that question, explanation, tip, and source (chapter, document, section). **Restart** button returns to the start view keeping the previous filter settings.

Per-question time: in paginated mode, accumulate time while the question is shown; in scroll mode, attribute the interval between consecutive first-answer events (first question measured from quiz start). Document this in the info section.

### Design

- Calming, didactic: soft teal/blue-green palette on a warm light background; colors as CSS custom properties on `:root`; dark mode via `prefers-color-scheme` override.
- Color semantics: green = correct, rose/red = wrong, amber = tips, blue = info/source. Use color + icon/text (not color alone) for accessibility.
- Mobile-first responsive (works at 360px width, 16px side gutters, no horizontal scroll); touch-friendly targets (min 44px).
- Clean typography; monospace font for code; difficulty shown as colored badges (green/yellow/orange/purple for easy/medium/hard/ultra).

### Code rules

- All code, identifiers and comments in **English**. UI strings only via `js/i18n.js`.
- No external dependencies, no CDNs (offline-capable). Semantic HTML, `const`/`let`, strict equality, no globals beyond the few top-level app objects.
- Must work when opened directly as a file (`file://`) and on GitHub Pages (relative paths only).
- Escape question text with `textContent` (no raw innerHTML for data) to keep code snippets safe.

## 5. Workflow and model usage

- Planning/review: strongest available model. Bulk question generation and site implementation: cheaper models (Sonnet class) following this spec.
- Pilot: 20 questions (ch1:1, ch2:3, ch3:5, ch4:4, ch5:4, ch6:3) with a mix of all 5 types and all 4 difficulties.
- Full bank target: 1000 questions (ch1:40, ch2:140, ch3:220, ch4:200, ch5:200, ch6:200), generated in batches of ~50 per chapter/section, each batch validated before commit.
- Validation: `tools/validate_questions.py` (added with the pilot) checks schema, unique ids, option/answer consistency, blank counts, bilingual completeness. Run it after every batch.
- Commit style: small, descriptive commits in English ("Add pilot question bank (20 questions)"), so progress is traceable.
