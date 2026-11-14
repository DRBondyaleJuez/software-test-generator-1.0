// SOTE2 quiz engine: state, filtering, grading, timer and rendering.
// Depends on QUESTIONS (data/questions.js) and I18N (js/i18n.js).
(function () {
  "use strict";

  const QUIZ_SIZE = 10;
  const LANG_KEY = "sote2quiz.lang";
  const CHAPTERS = [1, 2, 3, 4, 5, 6];
  const DIFFICULTIES = ["easy", "medium", "hard", "ultra"];
  const TYPES = ["mc", "ms", "tf", "fib", "fe"];
  const BLANK = "____";
  const LETTERS = "ABCDEFGHIJ";

  const VOTES_KEY = "sote2quiz.votes";

  const bank = (typeof QUESTIONS !== "undefined" && Array.isArray(QUESTIONS)) ? QUESTIONS : [];
  const baseScores = (typeof QUESTION_SCORES !== "undefined" && QUESTION_SCORES) ? QUESTION_SCORES : {};

  const state = {
    lang: "de",
    view: "start", // "start" | "quiz" | "results"
    infoOpen: false,
    votes: {}, // question id -> 1 | -1 (this browser's own votes)
    filters: {
      chapters: new Set(),
      difficulties: new Set(),
      types: new Set(),
      chapterOrder: false, // false = random, true = by chapter
      difficultyOrder: false,
      display: "paged", // "paged" | "scroll"
      includeLowScore: false // false = skip questions whose score is below 0
    },
    quiz: null,
    results: null
  };

  const appEl = document.getElementById("app");

  // ---------------------------------------------------------------- helpers

  function lookup(obj, path) {
    return path.split(".").reduce(function (cur, key) {
      return cur !== undefined && cur !== null ? cur[key] : undefined;
    }, obj);
  }

  function t(key, params) {
    let value = lookup(I18N[state.lang], key);
    if (value === undefined) {
      value = lookup(I18N.de, key);
    }
    if (typeof value !== "string") {
      return value === undefined ? key : value;
    }
    return value.replace(/\{(\w+)\}/g, function (match, name) {
      return params && Object.prototype.hasOwnProperty.call(params, name) ? String(params[name]) : match;
    });
  }

  // Pick the current-language text of a {de, en} object.
  function loc(obj) {
    if (!obj) {
      return "";
    }
    return obj[state.lang] || obj.de || obj.en || "";
  }

  // Create an element. attrs: class, text, on* handlers, other attributes.
  function h(tag, attrs, children) {
    const node = document.createElement(tag);
    Object.keys(attrs || {}).forEach(function (key) {
      const value = attrs[key];
      if (value === null || value === undefined || value === false) {
        return;
      }
      if (key === "class") {
        node.className = value;
      } else if (key === "text") {
        node.textContent = value;
      } else if (key.slice(0, 2) === "on") {
        node.addEventListener(key.slice(2), value);
      } else {
        node.setAttribute(key, value === true ? "" : String(value));
      }
    });
    (children || []).forEach(function (child) {
      if (child === null || child === undefined || child === false) {
        return;
      }
      node.appendChild(typeof child === "string" ? document.createTextNode(child) : child);
    });
    return node;
  }

  // Fisher-Yates shuffle on a copy.
  function shuffle(list) {
    const arr = list.slice();
    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      const tmp = arr[i];
      arr[i] = arr[j];
      arr[j] = tmp;
    }
    return arr;
  }

  function formatTime(ms) {
    const total = Math.max(0, Math.round(ms / 1000));
    const mm = String(Math.floor(total / 60)).padStart(2, "0");
    const ss = String(total % 60).padStart(2, "0");
    return mm + ":" + ss;
  }

  function chapterLabel(n) {
    return n + " · " + t("chapterNames." + n);
  }

  function safeGetLang() {
    try {
      const stored = window.localStorage.getItem(LANG_KEY);
      return stored === "de" || stored === "en" ? stored : "de";
    } catch (e) {
      return "de";
    }
  }

  function safeSetLang(lang) {
    try {
      window.localStorage.setItem(LANG_KEY, lang);
    } catch (e) {
      // Storage unavailable: language simply is not persisted.
    }
  }

  function loadVotes() {
    try {
      const raw = window.localStorage.getItem(VOTES_KEY);
      const parsed = raw ? JSON.parse(raw) : {};
      return parsed && typeof parsed === "object" ? parsed : {};
    } catch (e) {
      return {};
    }
  }

  function saveVotes() {
    try {
      window.localStorage.setItem(VOTES_KEY, JSON.stringify(state.votes));
    } catch (e) {
      // Storage unavailable: votes only last until the page is closed.
    }
  }

  // ----------------------------------------------------------------- scores

  function getVote(id) {
    return state.votes[id] === 1 || state.votes[id] === -1 ? state.votes[id] : 0;
  }

  // Total score = maintainer baseline + this browser's own vote.
  function questionScore(q) {
    const base = typeof baseScores[q.id] === "number" ? baseScores[q.id] : 0;
    return base + getVote(q.id);
  }

  function setVote(id, vote) {
    if (vote === 0) {
      delete state.votes[id];
    } else {
      state.votes[id] = vote;
    }
    saveVotes();
  }

  // -------------------------------------------------------------- filtering

  function matchingQuestions() {
    const f = state.filters;
    return bank.filter(function (q) {
      return (f.chapters.size === 0 || f.chapters.has(q.chapter)) &&
        (f.difficulties.size === 0 || f.difficulties.has(q.difficulty)) &&
        (f.types.size === 0 || f.types.has(q.type)) &&
        (f.includeLowScore || questionScore(q) >= 0);
    });
  }

  function applyOrdering(list) {
    const f = state.filters;
    const comparators = [];
    if (f.chapterOrder) {
      comparators.push(function (a, b) { return a.chapter - b.chapter; });
    }
    if (f.difficultyOrder) {
      comparators.push(function (a, b) {
        return DIFFICULTIES.indexOf(a.difficulty) - DIFFICULTIES.indexOf(b.difficulty);
      });
    }
    if (comparators.length === 0) {
      return list;
    }
    // Array.prototype.sort is stable, so equal keys keep their random order.
    return list.slice().sort(function (a, b) {
      for (let i = 0; i < comparators.length; i++) {
        const diff = comparators[i](a, b);
        if (diff !== 0) {
          return diff;
        }
      }
      return 0;
    });
  }

  // ---------------------------------------------------------------- answers

  function blankCount(q) {
    return Array.isArray(q.blanks) ? q.blanks.length : 0;
  }

  function initialAnswer(q) {
    if (q.type === "ms") {
      return [];
    }
    if (q.type === "fib") {
      return new Array(blankCount(q)).fill("");
    }
    return null;
  }

  function isAnswered(item) {
    const a = item.answer;
    switch (item.q.type) {
      case "ms":
        return a.length > 0;
      case "fib":
        return a.some(function (v) { return v.trim() !== ""; });
      default:
        return a !== null;
    }
  }

  function gradeBlank(blank, value) {
    if (!blank || !Array.isArray(blank.accepted)) {
      return false;
    }
    const insensitive = blank.caseSensitive === false;
    const norm = function (s) {
      const trimmed = String(s).trim();
      return insensitive ? trimmed.toLowerCase() : trimmed;
    };
    const given = norm(value);
    return blank.accepted.some(function (acc) { return norm(acc) === given; });
  }

  function gradeItem(item) {
    const q = item.q;
    const a = item.answer;
    switch (q.type) {
      case "mc":
      case "fe":
        return a !== null && a === q.answer;
      case "tf":
        return a !== null && a === q.answer;
      case "ms": {
        const expected = Array.isArray(q.answer) ? q.answer : [];
        return a.length === expected.length && expected.every(function (id) { return a.indexOf(id) !== -1; });
      }
      case "fib":
        return blankCount(q) > 0 && q.blanks.every(function (blank, i) { return gradeBlank(blank, a[i] || ""); });
      default:
        return false;
    }
  }

  // ----------------------------------------------------------------- chrome

  function renderChrome() {
    document.documentElement.lang = state.lang;
    document.title = t("docTitle");
    document.getElementById("app-title").textContent = t("appTitle");
    document.getElementById("app-subtitle").textContent = t("appSubtitle");
    const toggle = document.getElementById("lang-toggle");
    toggle.setAttribute("aria-label", t("langLabel"));
    toggle.replaceChildren.apply(toggle, ["de", "en"].map(function (lang) {
      return h("button", {
        type: "button",
        class: "lang-btn" + (state.lang === lang ? " active" : ""),
        "aria-pressed": String(state.lang === lang),
        lang: lang,
        text: lang.toUpperCase(),
        onclick: function () { setLang(lang); }
      });
    }));
  }

  function setLang(lang) {
    if (lang === state.lang) {
      return;
    }
    state.lang = lang;
    safeSetLang(lang);
    render(true);
  }

  function render(keepScroll) {
    const scrollY = window.scrollY;
    renderChrome();
    appEl.replaceChildren();
    if (state.view === "quiz" && state.quiz) {
      renderQuiz();
    } else if (state.view === "results" && state.results) {
      renderResults();
    } else {
      state.view = "start";
      renderStart();
    }
    window.scrollTo(0, keepScroll ? scrollY : 0);
  }

  // ------------------------------------------------------------ start view

  function infoBlock(titleKey, itemsKey) {
    const items = t(itemsKey);
    return h("div", { class: "info-block" }, [
      h("h4", { text: t(titleKey) }),
      h("ul", {}, (Array.isArray(items) ? items : []).map(function (line) {
        return h("li", { text: line });
      }))
    ]);
  }

  function buildInfoSection() {
    const details = h("details", { class: "more-info" }, [
      h("summary", { text: t("start.moreInfo") }),
      h("div", { class: "more-info-body" }, [
        infoBlock("start.infoTypesTitle", "start.infoTypes"),
        infoBlock("start.infoDiffTitle", "start.infoDiff"),
        infoBlock("start.infoScoreTitle", "start.infoScore"),
        infoBlock("start.infoHintTitle", "start.infoHint"),
        infoBlock("start.infoTimeTitle", "start.infoTime")
      ])
    ]);
    details.open = state.infoOpen;
    details.addEventListener("toggle", function () { state.infoOpen = details.open; });
    return details;
  }

  function chipGroup(title, entries, selectedSet) {
    const group = h("div", { class: "chips", role: "group", "aria-label": title });
    entries.forEach(function (entry) {
      const chip = h("button", {
        type: "button",
        class: "chip " + (entry.cls || "") + (selectedSet.has(entry.value) ? " selected" : ""),
        "aria-pressed": String(selectedSet.has(entry.value)),
        onclick: function () {
          if (selectedSet.has(entry.value)) {
            selectedSet.delete(entry.value);
          } else {
            selectedSet.add(entry.value);
          }
          const on = selectedSet.has(entry.value);
          chip.classList.toggle("selected", on);
          chip.setAttribute("aria-pressed", String(on));
          updateMatchInfo();
        }
      }, [
        h("span", { class: "chip-check", "aria-hidden": "true", text: "✓" }),
        h("span", { text: entry.label })
      ]);
      group.appendChild(chip);
    });
    return h("fieldset", { class: "filter-group" }, [h("legend", { text: title }), group]);
  }

  function segmented(title, options, current, onPick) {
    const wrap = h("div", { class: "segmented", role: "group", "aria-label": title });
    const buttons = options.map(function (opt) {
      const btn = h("button", {
        type: "button",
        class: "seg" + (opt.value === current ? " active" : ""),
        "aria-pressed": String(opt.value === current),
        text: opt.label,
        onclick: function () {
          onPick(opt.value);
          buttons.forEach(function (b, i) {
            const active = options[i].value === opt.value;
            b.classList.toggle("active", active);
            b.setAttribute("aria-pressed", String(active));
          });
        }
      });
      return btn;
    });
    buttons.forEach(function (b) { wrap.appendChild(b); });
    return h("fieldset", { class: "filter-group" }, [h("legend", { text: title }), wrap]);
  }

  function updateMatchInfo() {
    const info = document.getElementById("match-info");
    const btn = document.getElementById("start-btn");
    if (!info || !btn) {
      return;
    }
    const n = matchingQuestions().length;
    info.classList.toggle("warn", n < QUIZ_SIZE);
    if (n === 0) {
      info.textContent = t("start.noMatch");
      btn.textContent = t("start.startButtonNone");
    } else {
      info.textContent = n < QUIZ_SIZE ? t("start.fewMatch", { n: n }) : t("start.matchCount", { n: n });
      btn.textContent = t("start.startButton", { n: Math.min(n, QUIZ_SIZE) });
    }
    btn.disabled = n === 0;
  }

  function renderStart() {
    appEl.appendChild(h("section", { class: "card hero" }, [
      h("h2", { text: t("start.heading") }),
      h("p", { text: t("start.intro") }),
      buildInfoSection()
    ]));

    if (bank.length === 0) {
      appEl.appendChild(h("section", { class: "card notice error", role: "alert" }, [
        h("h3", { text: t("bank.missingTitle") }),
        h("p", { text: t("bank.missingText") })
      ]));
      return;
    }

    const f = state.filters;
    const form = h("section", { class: "card filters" }, [
      h("h3", { text: t("start.filterHeading") }),
      h("p", { class: "muted", text: t("start.filterHint") }),
      chipGroup(t("start.chapters"), CHAPTERS.map(function (n) {
        return { value: n, label: chapterLabel(n), cls: "chip-chapter" };
      }), f.chapters),
      chipGroup(t("start.difficulty"), DIFFICULTIES.map(function (d) {
        return { value: d, label: t("difficulties." + d), cls: "chip-diff diff-" + d };
      }), f.difficulties),
      chipGroup(t("start.type"), TYPES.map(function (ty) {
        return { value: ty, label: t("types." + ty), cls: "chip-type" };
      }), f.types),
      segmented(t("start.chapterOrder"), [
        { value: false, label: t("start.orderRandom") },
        { value: true, label: t("start.orderSorted") }
      ], f.chapterOrder, function (v) { f.chapterOrder = v; }),
      segmented(t("start.difficultyOrder"), [
        { value: false, label: t("start.orderRandom") },
        { value: true, label: t("start.orderSorted") }
      ], f.difficultyOrder, function (v) { f.difficultyOrder = v; }),
      segmented(t("start.display"), [
        { value: "paged", label: t("start.displayPaged") },
        { value: "scroll", label: t("start.displayScroll") }
      ], f.display, function (v) { f.display = v; }),
      segmented(t("start.lowScore"), [
        { value: false, label: t("start.lowScoreHide") },
        { value: true, label: t("start.lowScoreInclude") }
      ], f.includeLowScore, function (v) {
        f.includeLowScore = v;
        updateMatchInfo();
      }),
      h("p", { id: "match-info", class: "match-info" }),
      h("button", { id: "start-btn", type: "button", class: "btn btn-primary btn-large", onclick: startQuiz })
    ]);
    appEl.appendChild(form);
    updateMatchInfo();
  }

  // -------------------------------------------------------------- quiz flow

  function startQuiz() {
    const pool = matchingQuestions();
    if (pool.length === 0) {
      return;
    }
    stopTimer();
    const picked = applyOrdering(shuffle(pool).slice(0, QUIZ_SIZE));
    const display = state.filters.display;
    const now = Date.now();
    state.quiz = {
      items: picked.map(function (q) {
        return {
          q: q,
          // Option order is shuffled once here and stays fixed for the whole run.
          order: Array.isArray(q.options) ? shuffle(q.options.map(function (o) { return o.id; })) : [],
          answer: initialAnswer(q),
          time: display === "paged" ? 0 : null
        };
      }),
      display: display,
      startTime: now,
      endTime: null,
      lastMark: now,
      shownSince: now,
      current: 0,
      timerId: null,
      shortNotice: pool.length < QUIZ_SIZE
    };
    state.results = null;
    state.view = "quiz";
    state.quiz.timerId = window.setInterval(tickTimer, 1000);
    render();
  }

  function stopTimer() {
    if (state.quiz && state.quiz.timerId !== null) {
      window.clearInterval(state.quiz.timerId);
      state.quiz.timerId = null;
    }
  }

  function tickTimer() {
    const el = document.getElementById("quiz-timer");
    if (el && state.quiz) {
      el.textContent = formatTime(Date.now() - state.quiz.startTime);
    }
  }

  // Add the visible time of the current card (paginated mode only).
  function flushShownTime() {
    const qz = state.quiz;
    if (qz.display !== "paged") {
      return;
    }
    const now = Date.now();
    qz.items[qz.current].time += now - qz.shownSince;
    qz.shownSince = now;
  }

  function goTo(index) {
    const qz = state.quiz;
    if (index < 0 || index >= qz.items.length || index === qz.current) {
      return;
    }
    flushShownTime();
    qz.current = index;
    qz.shownSince = Date.now();
    renderQuizBody();
    window.scrollTo(0, 0);
  }

  function answeredCount() {
    return state.quiz.items.filter(isAnswered).length;
  }

  function updateProgress() {
    const el = document.getElementById("quiz-progress");
    if (el) {
      el.textContent = t("quiz.progress", { a: answeredCount(), n: state.quiz.items.length });
    }
    document.querySelectorAll(".dot").forEach(function (dot, i) {
      dot.classList.toggle("answered", isAnswered(state.quiz.items[i]));
    });
  }

  // Called after every answer change.
  function onAnswerChanged(item) {
    const qz = state.quiz;
    if (qz.display === "scroll" && item.time === null && isAnswered(item)) {
      const now = Date.now();
      item.time = now - qz.lastMark;
      qz.lastMark = now;
    }
    updateProgress();
  }

  function finishQuiz() {
    const qz = state.quiz;
    const unanswered = qz.items.length - answeredCount();
    if (unanswered > 0 && !window.confirm(t("quiz.confirmUnanswered", { n: unanswered }))) {
      return;
    }
    flushShownTime();
    qz.endTime = Date.now();
    stopTimer();
    const graded = qz.items.map(function (item) {
      return { item: item, correct: gradeItem(item) };
    });
    state.results = {
      graded: graded,
      score: graded.filter(function (g) { return g.correct; }).length,
      total: graded.length,
      totalMs: qz.endTime - qz.startTime
    };
    state.view = "results";
    render();
  }

  function restart() {
    stopTimer();
    state.quiz = null;
    state.results = null;
    state.view = "start";
    render();
  }

  // ----------------------------------------------------- shared card pieces

  function badges(q) {
    return [
      h("span", { class: "badge badge-chapter", text: t("quiz.chapterShort", { n: q.chapter }) }),
      h("span", { class: "badge diff-" + q.difficulty, text: t("difficulties." + q.difficulty) }),
      h("span", { class: "type-label", text: t("types." + q.type) })
    ];
  }

  // Append `text` to `parent`, replacing the first blanks with inputs.
  // `startIndex` is the index of the first blank; returns the number of inputs created.
  function appendTextWithBlanks(parent, text, startIndex, total, makeInput) {
    const parts = String(text).split(BLANK);
    let used = 0;
    parts.forEach(function (part, i) {
      if (part !== "") {
        parent.appendChild(document.createTextNode(part));
      }
      if (i < parts.length - 1) {
        if (startIndex + used < total) {
          parent.appendChild(makeInput(startIndex + used));
          used++;
        } else {
          parent.appendChild(document.createTextNode(BLANK));
        }
      }
    });
    return used;
  }

  function codeBlock(code, fillFn) {
    const codeEl = h("code");
    if (fillFn) {
      fillFn(codeEl);
    } else {
      codeEl.textContent = code;
    }
    return h("pre", { class: "code-block", tabindex: "0" }, [codeEl]);
  }

  function infoBox(kind, label, text) {
    return h("div", { class: "box box-" + kind }, [
      h("strong", { class: "box-label", text: label + ": " }),
      h("span", { text: text })
    ]);
  }

  // Score display with like/dislike buttons. Clicking the active vote again removes it.
  function buildVoteBox(q) {
    const scoreEl = h("span", { class: "vote-score" });
    const up = h("button", {
      type: "button",
      class: "vote-btn vote-up",
      title: t("vote.like"),
      "aria-label": t("vote.like")
    }, [h("span", { "aria-hidden": "true", text: "👍" })]);
    const down = h("button", {
      type: "button",
      class: "vote-btn vote-down",
      title: t("vote.dislike"),
      "aria-label": t("vote.dislike")
    }, [h("span", { "aria-hidden": "true", text: "👎" })]);

    function sync() {
      const score = questionScore(q);
      const vote = getVote(q.id);
      scoreEl.textContent = t("vote.score") + ": " + (score > 0 ? "+" + score : String(score));
      scoreEl.classList.toggle("positive", score > 0);
      scoreEl.classList.toggle("negative", score < 0);
      up.classList.toggle("selected", vote === 1);
      up.setAttribute("aria-pressed", String(vote === 1));
      down.classList.toggle("selected", vote === -1);
      down.setAttribute("aria-pressed", String(vote === -1));
    }
    function cast(value) {
      setVote(q.id, getVote(q.id) === value ? 0 : value);
      sync();
    }
    up.addEventListener("click", function () { cast(1); });
    down.addEventListener("click", function () { cast(-1); });
    sync();
    return h("span", { class: "vote-box" }, [scoreEl, up, down]);
  }

  // Optional hint: collapsed until the student asks for it.
  function buildHint(item) {
    const tip = loc(item.q.tip);
    if (!tip) {
      return null;
    }
    const body = h("div", { class: "box box-tip hint-body", hidden: !item.hintOpen }, [
      h("span", { text: tip })
    ]);
    const toggle = h("button", {
      type: "button",
      class: "btn btn-small btn-hint",
      "aria-expanded": String(Boolean(item.hintOpen))
    });
    function sync() {
      toggle.textContent = "💡 " + t(item.hintOpen ? "quiz.hideHint" : "quiz.showHint");
      toggle.setAttribute("aria-expanded", String(Boolean(item.hintOpen)));
      body.hidden = !item.hintOpen;
    }
    toggle.addEventListener("click", function () {
      item.hintOpen = !item.hintOpen;
      sync();
    });
    sync();
    return h("div", { class: "hint-wrap" }, [toggle, body]);
  }

  // ------------------------------------------------------------ quiz render

  function renderQuiz() {
    const qz = state.quiz;
    appEl.appendChild(h("div", { class: "quiz-bar" }, [
      h("div", { class: "quiz-bar-item" }, [
        h("span", { class: "quiz-bar-label", text: t("quiz.time") }),
        h("span", { id: "quiz-timer", class: "quiz-timer", text: formatTime(Date.now() - qz.startTime) })
      ]),
      h("div", {
        id: "quiz-progress",
        class: "quiz-bar-item quiz-progress",
        text: t("quiz.progress", { a: answeredCount(), n: qz.items.length })
      }),
      h("button", { type: "button", class: "btn btn-small btn-secondary", text: t("quiz.finish"), onclick: finishQuiz })
    ]));
    if (qz.shortNotice) {
      appEl.appendChild(h("p", { class: "box box-info", text: t("quiz.fewNotice", { n: qz.items.length }) }));
    }
    appEl.appendChild(h("div", { id: "quiz-body" }));
    renderQuizBody();
  }

  function renderQuizBody() {
    const qz = state.quiz;
    const body = document.getElementById("quiz-body");
    body.replaceChildren();
    const n = qz.items.length;
    if (qz.display === "scroll") {
      qz.items.forEach(function (item, i) {
        body.appendChild(buildCard(item, i, n));
      });
      body.appendChild(h("div", { class: "quiz-nav quiz-nav-end" }, [
        h("button", { type: "button", class: "btn btn-primary btn-large", text: t("quiz.finishTest"), onclick: finishQuiz })
      ]));
    } else {
      body.appendChild(buildCard(qz.items[qz.current], qz.current, n));
      body.appendChild(buildPagerNav(n));
    }
    updateProgress();
  }

  function buildPagerNav(n) {
    const qz = state.quiz;
    const dots = h("div", { class: "dots" });
    for (let i = 0; i < n; i++) {
      dots.appendChild(h("button", {
        type: "button",
        class: "dot" + (i === qz.current ? " current" : "") + (isAnswered(qz.items[i]) ? " answered" : ""),
        "aria-label": t("quiz.goTo", { n: i + 1 }),
        "aria-current": i === qz.current ? "step" : null,
        onclick: (function (idx) { return function () { goTo(idx); }; })(i)
      }));
    }
    const last = qz.current === n - 1;
    return h("div", { class: "quiz-nav" }, [
      h("div", { class: "quiz-nav-buttons" }, [
        h("button", {
          type: "button",
          class: "btn btn-secondary",
          text: t("quiz.prev"),
          disabled: qz.current === 0,
          onclick: function () { goTo(qz.current - 1); }
        }),
        last
          ? h("button", { type: "button", class: "btn btn-primary", text: t("quiz.finishTest"), onclick: finishQuiz })
          : h("button", { type: "button", class: "btn btn-primary", text: t("quiz.next"), onclick: function () { goTo(qz.current + 1); } })
      ]),
      dots
    ]);
  }

  function buildCard(item, index, total) {
    const q = item.q;
    const card = h("article", { class: "card q-card" });
    card.appendChild(h("div", { class: "q-meta" }, [
      h("span", { class: "q-num", text: t("quiz.question", { i: index + 1, n: total }) })
    ].concat(badges(q), [buildVoteBox(q)])));

    const blanksTotal = blankCount(q);
    let blanksUsed = 0;
    const makeInput = function (i) { return buildBlankInput(item, i); };

    const qText = loc(q.question);
    if (q.type === "fib" && qText.indexOf(BLANK) !== -1) {
      const p = h("p", { class: "q-text" });
      blanksUsed += appendTextWithBlanks(p, qText, blanksUsed, blanksTotal, makeInput);
      card.appendChild(p);
    } else {
      card.appendChild(h("p", { class: "q-text", text: qText }));
    }

    const clar = loc(q.clarification);
    if (clar) {
      card.appendChild(infoBox("info", t("quiz.clarification"), clar));
    }

    if (q.code) {
      if (q.type === "fib" && q.code.indexOf(BLANK) !== -1) {
        card.appendChild(codeBlock(q.code, function (codeEl) {
          blanksUsed += appendTextWithBlanks(codeEl, q.code, blanksUsed, blanksTotal, makeInput);
        }));
      } else {
        card.appendChild(codeBlock(q.code));
      }
    }

    const hint = buildHint(item);
    if (hint) {
      card.appendChild(hint);
    }

    if (q.type === "fib") {
      // Any blanks that could not be placed inline get their own input row.
      if (blanksUsed < blanksTotal) {
        const extra = h("div", { class: "extra-blanks" });
        for (let i = blanksUsed; i < blanksTotal; i++) {
          extra.appendChild(buildBlankInput(item, i));
        }
        card.appendChild(extra);
      }
      card.appendChild(h("p", { class: "hint", text: t("quiz.fillBlanks") }));
    } else if (q.type === "tf") {
      card.appendChild(buildTrueFalse(item));
    } else if (q.type === "ms") {
      card.appendChild(h("p", { class: "hint", text: t("quiz.selectAll") }));
      card.appendChild(buildChoices(item, true));
    } else {
      card.appendChild(h("p", { class: "hint", text: t("quiz.chooseOne") }));
      card.appendChild(buildChoices(item, false));
    }
    return card;
  }

  function buildBlankInput(item, i) {
    const accepted = (item.q.blanks[i] && item.q.blanks[i].accepted) || [];
    const longest = accepted.reduce(function (max, s) { return Math.max(max, String(s).length); }, 0);
    const input = h("input", {
      type: "text",
      class: "blank-input",
      autocomplete: "off",
      autocapitalize: "none",
      autocorrect: "off",
      spellcheck: "false",
      "aria-label": t("quiz.blankLabel", { n: i + 1 })
    });
    input.style.width = Math.min(Math.max(longest + 3, 7), 32) + "ch";
    input.value = item.answer[i] || "";
    input.addEventListener("input", function () {
      item.answer[i] = input.value;
      onAnswerChanged(item);
    });
    return input;
  }

  function buildTrueFalse(item) {
    const wrap = h("div", { class: "tf-group", role: "radiogroup" });
    const buttons = [true, false].map(function (value) {
      return h("button", {
        type: "button",
        class: "tf-btn",
        role: "radio",
        "aria-checked": "false",
        onclick: function () {
          item.answer = value;
          sync();
          onAnswerChanged(item);
        }
      }, [
        h("span", { class: "option-mark", "aria-hidden": "true" }),
        h("span", { text: t(value ? "quiz.tfTrue" : "quiz.tfFalse") })
      ]);
    });
    function sync() {
      buttons.forEach(function (btn, i) {
        const selected = item.answer === (i === 0);
        btn.classList.toggle("selected", selected);
        btn.setAttribute("aria-checked", String(selected));
      });
    }
    buttons.forEach(function (b) { wrap.appendChild(b); });
    sync();
    return wrap;
  }

  function buildChoices(item, multi) {
    const q = item.q;
    const list = h("div", { class: "options", role: multi ? "group" : "radiogroup" });
    const entries = [];
    item.order.forEach(function (id, pos) {
      const opt = q.options.find(function (o) { return o.id === id; });
      if (!opt) {
        return;
      }
      const btn = h("button", {
        type: "button",
        class: "option " + (multi ? "multi" : "single"),
        role: multi ? "checkbox" : "radio",
        "aria-checked": "false"
      }, [
        h("span", { class: "option-mark", "aria-hidden": "true" }),
        h("span", { class: "option-letter", "aria-hidden": "true", text: LETTERS.charAt(pos) + "." }),
        h("span", { class: "option-text", text: loc(opt.text) })
      ]);
      btn.addEventListener("click", function () {
        if (multi) {
          const at = item.answer.indexOf(id);
          if (at === -1) {
            item.answer.push(id);
          } else {
            item.answer.splice(at, 1);
          }
        } else {
          item.answer = id;
        }
        sync();
        onAnswerChanged(item);
      });
      entries.push({ id: id, btn: btn });
      list.appendChild(btn);
    });
    function sync() {
      entries.forEach(function (e) {
        const selected = multi ? item.answer.indexOf(e.id) !== -1 : item.answer === e.id;
        e.btn.classList.toggle("selected", selected);
        e.btn.setAttribute("aria-checked", String(selected));
      });
    }
    sync();
    return list;
  }

  // ---------------------------------------------------------- results render

  function tierMessage(score, total) {
    const ratio = total === 0 ? 0 : score / total;
    if (ratio === 1) {
      return t("results.tier100");
    }
    if (ratio >= 0.8) {
      return t("results.tier80");
    }
    if (ratio >= 0.6) {
      return t("results.tier60");
    }
    if (ratio >= 0.4) {
      return t("results.tier40");
    }
    return t("results.tier0");
  }

  function renderResults() {
    const r = state.results;
    appEl.appendChild(h("section", { class: "card score-card" }, [
      h("h2", { text: t("results.heading") }),
      h("p", { class: "score-big", text: t("results.score", { s: r.score, n: r.total }) }),
      h("p", { class: "score-msg", text: tierMessage(r.score, r.total) }),
      h("p", { class: "muted", text: t("results.totalTime", { time: formatTime(r.totalMs) }) }),
      h("button", { type: "button", class: "btn btn-primary btn-large", text: t("results.restart"), onclick: restart })
    ]));
    r.graded.forEach(function (g, i) {
      appEl.appendChild(buildResultCard(g, i, r.total));
    });
    appEl.appendChild(h("div", { class: "quiz-nav quiz-nav-end" }, [
      h("button", { type: "button", class: "btn btn-primary btn-large", text: t("results.restart"), onclick: restart })
    ]));
  }

  function answerRow(kind, label, text) {
    return h("li", { class: "answer-row " + kind }, [
      h("span", { class: "answer-tag", text: label }),
      h("span", { class: "answer-text", text: text })
    ]);
  }

  function buildChoiceResult(item) {
    const q = item.q;
    const multi = q.type === "ms";
    const list = h("ul", { class: "answer-list" });
    item.order.forEach(function (id, pos) {
      const opt = q.options.find(function (o) { return o.id === id; });
      if (!opt) {
        return;
      }
      const isCorrect = multi ? q.answer.indexOf(id) !== -1 : q.answer === id;
      const picked = multi ? item.answer.indexOf(id) !== -1 : item.answer === id;
      const tags = [];
      if (picked) {
        tags.push((isCorrect ? "✓ " : "✗ ") + t("results.yourAnswer"));
      }
      if (isCorrect) {
        tags.push("✓ " + t("results.correctAnswer"));
      }
      const row = h("li", {
        class: "answer-row" + (isCorrect ? " is-correct" : picked ? " is-wrong" : "")
      }, [
        h("span", { class: "answer-text", text: LETTERS.charAt(pos) + ". " + loc(opt.text) })
      ]);
      if (tags.length > 0) {
        row.appendChild(h("span", { class: "answer-tag", text: tags.join(" · ") }));
      }
      list.appendChild(row);
    });
    return list;
  }

  function buildTrueFalseResult(item, correct) {
    const label = function (v) { return t(v ? "quiz.tfTrue" : "quiz.tfFalse"); };
    const list = h("ul", { class: "answer-list" });
    list.appendChild(answerRow(
      correct ? "is-correct" : "is-wrong",
      (correct ? "✓ " : "✗ ") + t("results.yourAnswer"),
      item.answer === null ? t("results.notAnswered") : label(item.answer)
    ));
    if (!correct) {
      list.appendChild(answerRow("is-correct", "✓ " + t("results.correctAnswer"), label(item.q.answer)));
    }
    return list;
  }

  function buildFibResult(item) {
    const list = h("ul", { class: "answer-list" });
    item.q.blanks.forEach(function (blank, i) {
      const value = (item.answer[i] || "").trim();
      const ok = gradeBlank(blank, value);
      const row = h("li", { class: "answer-row " + (ok ? "is-correct" : "is-wrong") }, [
        h("span", { class: "answer-tag", text: (ok ? "✓ " : "✗ ") + t("quiz.blankLabel", { n: i + 1 }) }),
        h("span", { class: "answer-text mono", text: value === "" ? t("results.emptyAnswer") : value })
      ]);
      if (!ok) {
        row.appendChild(h("span", { class: "answer-accepted" }, [
          h("span", { class: "answer-tag", text: "✓ " + t("results.acceptedAnswers") + ": " }),
          h("span", { class: "mono", text: blank.accepted.join("  |  ") })
        ]));
      }
      list.appendChild(row);
    });
    return list;
  }

  function buildResultCard(graded, index, total) {
    const item = graded.item;
    const q = item.q;
    const ok = graded.correct;
    const card = h("article", { class: "card q-card result-card " + (ok ? "result-ok" : "result-bad") });

    const timeText = item.time === null || (state.quiz.display === "scroll" && !isAnswered(item))
      ? "–"
      : formatTime(item.time);

    card.appendChild(h("div", { class: "result-head" }, [
      h("span", { class: "result-status", text: (ok ? "✓ " : "✗ ") + t(ok ? "results.correct" : "results.wrong") }),
      h("span", { class: "q-num", text: t("quiz.question", { i: index + 1, n: total }) }),
      h("span", { class: "result-time", text: t("results.timeSpent", { time: timeText }) })
    ]));
    card.appendChild(h("div", { class: "q-meta" }, badges(q).concat([buildVoteBox(q)])));
    card.appendChild(h("p", { class: "q-text", text: loc(q.question) }));

    const clar = loc(q.clarification);
    if (clar) {
      card.appendChild(infoBox("info", t("quiz.clarification"), clar));
    }
    if (q.code) {
      card.appendChild(codeBlock(q.code));
    }

    if (q.type === "tf") {
      card.appendChild(buildTrueFalseResult(item, ok));
    } else if (q.type === "fib") {
      card.appendChild(buildFibResult(item));
    } else {
      card.appendChild(buildChoiceResult(item));
      if (!isAnswered(item)) {
        card.appendChild(h("p", { class: "muted", text: t("results.notAnswered") }));
      }
    }

    const expl = loc(q.explanation);
    if (expl) {
      card.appendChild(infoBox("explain", t("results.explanation"), expl));
    }
    const tip = loc(q.tip);
    if (tip) {
      card.appendChild(infoBox("tip", "💡 " + t("results.tip"), tip));
    }

    const src = q.source || {};
    const parts = [t("quiz.chapterShort", { n: q.chapter }) + " (" + t("chapterNames." + q.chapter) + ")"];
    if (src.document) {
      parts.push(src.document);
    }
    if (src.section || q.section) {
      parts.push(src.section || q.section);
    }
    card.appendChild(infoBox("info", "📖 " + t("results.source"), parts.join(" — ")));
    return card;
  }

  // ------------------------------------------------------------------- init

  state.lang = safeGetLang();
  state.votes = loadVotes();
  render();
})();
