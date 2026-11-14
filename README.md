# software-test-generator-1.0

A free practice-quiz website for **Softwareentwicklung 2 (SOTE2)**, chapters 1–6: structured data (dictionaries, JSON), files, datasets (Pandas/Matplotlib), NoSQL/MongoDB, and basic technologies. Built for exam preparation — fully bilingual **Deutsch / English**.

## Features

- 10-question quizzes drawn from a large question bank
- Filter by chapter, difficulty (easy → ultra) and question type (multiple choice, multiple select, true/false, fill-in-the-blank, find-the-error)
- Chapter/difficulty ordering or random; scrolling or paginated display
- Timer with per-question times; results with explanations, tips and source references to the course script
- No accounts, no tracking — a plain static site

## Run it

Open `index.html` in a browser, or visit the GitHub Pages deployment. No build step, no server required.

## Project structure

- `data/questions.js` — the question bank (see schema in [AGENTS.md](AGENTS.md))
- `js/app.js`, `js/i18n.js`, `css/style.css`, `index.html` — the app
- `tools/validate_questions.py` — question-bank validator
- `AGENTS.md` — full project spec; `ROADMAP.md` — build plan and status

## License / scope

Student practice project. Course material itself is not included in this repository.
