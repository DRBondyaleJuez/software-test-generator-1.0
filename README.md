# software-test-generator-1.0

A free practice-quiz website for **Softwareentwicklung 2 (SOTE2)**, chapters 1–6: structured data (dictionaries, JSON), files, datasets (Pandas/Matplotlib), NoSQL/MongoDB, and basic technologies. Built for exam preparation — fully bilingual **Deutsch / English**.

🌐 **Live site: <https://drbondyalejuez.github.io/software-test-generator-1.0/>**

## Features

- 10-question quizzes drawn from a large question bank
- Filter by chapter, difficulty (easy → ultra) and question type (multiple choice, multiple select, true/false, fill-in-the-blank, find-the-error)
- Chapter/difficulty ordering or random; scrolling or paginated display
- Optional hint on every question: open it when you are stuck, ignore it when you are not
- Rate questions with 👍 / 👎 to flag ones that are wrong, unclear or irrelevant; questions with a negative score are left out of new quizzes unless you switch them back on
- Timer with per-question times; results with explanations, tips and source references to the course script
- No accounts, no tracking — a plain static site

## Run it

Open `index.html` in a browser, or visit the [live site](https://drbondyalejuez.github.io/software-test-generator-1.0/). No build step, no server required.

## Question scores

A question's score is its baseline score from `data/scores.js` plus your own vote (+1 for 👍, −1 for 👎, click again to undo). Your votes are stored in your own browser only, because the site is static and has no server to collect them. To share scores between students, add entries to `data/scores.js`, for example `"ch3-mc-101": -2`.

## Project structure

- `data/ch1.js` … `data/ch6.js` — the question bank, one file per chapter (see schema in [AGENTS.md](AGENTS.md)); `data/questions.js` joins them
- `data/scores.js` — baseline question scores
- `js/app.js`, `js/i18n.js`, `css/style.css`, `index.html` — the app
- `tools/validate_questions.py` — question-bank validator
- `AGENTS.md` — full project spec; `ROADMAP.md` — build plan and status

## License / scope

Student practice project. Course material itself is not included in this repository.
