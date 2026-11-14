// UI strings for the quiz. Question content has its own {de, en} fields.
// Placeholders use {name} syntax and are replaced by t() in app.js.
const I18N = {
  de: {
    docTitle: "SOTE2 Quiz",
    appTitle: "SOTE2 Quiz",
    appSubtitle: "Übungstest zu Softwareentwicklung 2 (Kapitel 1–6)",
    langLabel: "Sprache",
    chapterNames: {
      1: "Einführung",
      2: "Basistechnologien",
      3: "Strukturierte Daten",
      4: "Dateien",
      5: "Umgang mit Datensätzen",
      6: "NoSQL-Datenbanken"
    },
    difficulties: {
      easy: "Leicht",
      medium: "Mittel",
      hard: "Schwer",
      ultra: "Ultra"
    },
    types: {
      mc: "Multiple Choice",
      ms: "Mehrfachauswahl",
      tf: "Wahr/Falsch",
      fib: "Lückentext",
      fe: "Fehler finden"
    },
    start: {
      heading: "Teste dein Wissen",
      intro: "Übe für die Prüfung in Softwareentwicklung 2 (Kapitel 1–6). Wähle optional Filter, starte einen Test mit 10 zufälligen Fragen und erhalte danach Erklärungen, Tipps und Quellenangaben zum Nachschlagen.",
      moreInfo: "Mehr Infos",
      infoTypesTitle: "Fragetypen",
      infoTypes: [
        "Multiple Choice: genau eine Antwort ist richtig.",
        "Mehrfachauswahl: eine oder mehrere Antworten sind richtig; die Auswahl muss exakt stimmen.",
        "Wahr/Falsch: Die Aussage ist entweder wahr oder falsch.",
        "Lückentext: Fülle jede Lücke (____) mit einem kurzen Begriff. Leerzeichen am Rand werden ignoriert; bei Python-Namen zählt die Groß-/Kleinschreibung.",
        "Fehler finden: Im Code steckt ein Fehler; wähle die passende Beschreibung."
      ],
      infoDiffTitle: "Schwierigkeitsgrade",
      infoDiff: [
        "Leicht: Wissen abrufen und wiedererkennen.",
        "Mittel: Verstehen und einen Schritt anwenden.",
        "Schwer: mehrstufiges Denken, Code-Ausgaben lesen, Sonderfälle.",
        "Ultra: feine Details und kombinierte Konzepte, ohne zusätzliche Erklärung."
      ],
      infoScoreTitle: "Bewertung",
      infoScore: [
        "Jede Frage zählt 1 Punkt, wenn sie vollständig richtig beantwortet ist, sonst 0 (keine Teilpunkte). Bei Mehrfachauswahl muss die Auswahl exakt stimmen, bei Lückentexten müssen alle Lücken stimmen.",
        "Unbeantwortete Fragen zählen als falsch."
      ],
      infoTimeTitle: "Zeitmessung",
      infoTime: [
        "Oben läuft die Gesamtzeit. Die Zeit pro Frage wird so gemessen:",
        "Seitenweise Anzeige: Die Zeit wird addiert, solange die jeweilige Frage angezeigt wird.",
        "Scroll-Anzeige: Gemessen wird das Intervall zwischen zwei aufeinanderfolgenden ersten Antworten (bei der ersten Frage ab Teststart). Unbeantwortete Fragen zeigen „–“."
      ],
      filterHeading: "Filter",
      filterHint: "Keine Auswahl in einer Gruppe bedeutet: alle.",
      chapters: "Kapitel",
      difficulty: "Schwierigkeit",
      type: "Fragetyp",
      chapterOrder: "Reihenfolge nach Kapitel",
      difficultyOrder: "Reihenfolge nach Schwierigkeit",
      orderRandom: "Zufällig",
      orderSorted: "Aufsteigend",
      display: "Anzeige",
      displayScroll: "Scrollen (alle Fragen)",
      displayPaged: "Seitenweise (eine Frage)",
      matchCount: "{n} passende Fragen verfügbar.",
      fewMatch: "Nur {n} passende Fragen verfügbar: Es werden alle verwendet.",
      noMatch: "Keine Frage passt zu diesen Filtern.",
      startButton: "Test starten ({n} Fragen)",
      startButtonNone: "Test starten",
      lowScore: "Schlecht bewertete Fragen",
      lowScoreHide: "Ausblenden (Score < 0)",
      lowScoreInclude: "Einbeziehen",
      infoHintTitle: "Tipps und Bewertung",
      infoHint: [
        "Tipp: Bei jeder Frage kannst du optional einen Tipp aufklappen. Er führt dich zur Antwort, ohne sie zu verraten. Probiere erst selbst, dann hilft der Tipp beim Nachschlagen.",
        "Score: Mit 👍 und 👎 bewertest du, ob eine Frage gut formuliert und relevant ist. Dein Votum zählt +1 bzw. −1 zum Score der Frage. Fragen mit negativem Score werden standardmäßig nicht gezogen; mit dem Schalter „Schlecht bewertete Fragen“ kannst du sie wieder einbeziehen.",
        "Deine Stimmen werden nur in diesem Browser gespeichert. Ein Basis-Score kann vom Betreuer in data/scores.js gepflegt werden."
      ]
    },
    bank: {
      missingTitle: "Fragenkatalog nicht geladen",
      missingText: "Die Datei data/questions.js fehlt oder enthält keine Fragen. Bitte prüfe die Installation und lade die Seite neu."
    },
    quiz: {
      time: "Zeit",
      progress: "Beantwortet {a}/{n}",
      question: "Frage {i}/{n}",
      chapterShort: "Kapitel {n}",
      clarification: "Hinweis",
      selectAll: "Wähle alle zutreffenden Antworten aus.",
      chooseOne: "Wähle eine Antwort.",
      fillBlanks: "Fülle alle Lücken aus.",
      blankLabel: "Lücke {n}",
      tfTrue: "Wahr",
      tfFalse: "Falsch",
      prev: "← Zurück",
      next: "Weiter →",
      finish: "Beenden",
      finishTest: "Test beenden",
      goTo: "Zu Frage {n}",
      fewNotice: "Es passen nur {n} Fragen zu deinen Filtern, daher besteht der Test aus {n} Fragen.",
      confirmUnanswered: "{n} Frage(n) sind unbeantwortet und zählen als falsch. Trotzdem beenden?",
      showHint: "Tipp anzeigen",
      hideHint: "Tipp ausblenden",
      hintLabel: "Tipp"
    },
    vote: {
      score: "Score",
      like: "Gute Frage: Score +1",
      dislike: "Schlechte oder fehlerhafte Frage: Score −1"
    },
    results: {
      heading: "Dein Ergebnis",
      score: "{s}/{n}",
      totalTime: "Gesamtzeit: {time}",
      tier100: "Perfekt! Du beherrschst den Stoff hervorragend.",
      tier80: "Sehr gut! Nur noch kleine Lücken.",
      tier60: "Gut gemacht! Mit etwas Wiederholung sitzt es sicher.",
      tier40: "Ein solider Anfang. Schau dir die Erklärungen an und versuche es nochmal.",
      tier0: "Nicht aufgeben! Nutze die Tipps und Quellen, dann klappt es beim nächsten Mal besser.",
      correct: "Richtig",
      wrong: "Falsch",
      timeSpent: "Zeit: {time}",
      yourAnswer: "Deine Antwort",
      correctAnswer: "Richtige Antwort",
      notAnswered: "Nicht beantwortet",
      acceptedAnswers: "Akzeptiert",
      explanation: "Erklärung",
      tip: "Tipp",
      source: "Quelle",
      restart: "Neuer Test",
      emptyAnswer: "(leer)"
    }
  },
  en: {
    docTitle: "SOTE2 Quiz",
    appTitle: "SOTE2 Quiz",
    appSubtitle: "Practice test for Software Development 2 (chapters 1–6)",
    langLabel: "Language",
    chapterNames: {
      1: "Introduction",
      2: "Basic technologies",
      3: "Structured data",
      4: "Files",
      5: "Working with datasets",
      6: "NoSQL databases"
    },
    difficulties: {
      easy: "Easy",
      medium: "Medium",
      hard: "Hard",
      ultra: "Ultra"
    },
    types: {
      mc: "Multiple choice",
      ms: "Multiple select",
      tf: "True/False",
      fib: "Fill in the blank",
      fe: "Find the error"
    },
    start: {
      heading: "Test your knowledge",
      intro: "Practice for the Software Development 2 exam (chapters 1–6). Optionally set filters, start a test with 10 random questions and get explanations, tips and sources to look things up afterwards.",
      moreInfo: "More info",
      infoTypesTitle: "Question types",
      infoTypes: [
        "Multiple choice: exactly one answer is correct.",
        "Multiple select: one or more answers are correct; your selection must match exactly.",
        "True/False: the statement is either true or false.",
        "Fill in the blank: fill each blank (____) with a short term. Surrounding whitespace is ignored; Python names are case-sensitive.",
        "Find the error: the code contains an error; pick the matching description."
      ],
      infoDiffTitle: "Difficulty levels",
      infoDiff: [
        "Easy: recall and recognition.",
        "Medium: understanding and one-step application.",
        "Hard: multi-step reasoning, reading code output, edge cases.",
        "Ultra: subtle details and combined concepts, with no extra clarification."
      ],
      infoScoreTitle: "Scoring",
      infoScore: [
        "Each question is worth 1 point if answered completely correctly, otherwise 0 (no partial credit). For multiple select the selection must match exactly; for fill-in-the-blank all blanks must be correct.",
        "Unanswered questions count as wrong."
      ],
      infoTimeTitle: "Time measurement",
      infoTime: [
        "The total time runs at the top. The time per question is measured as follows:",
        "Paginated display: time is accumulated while the respective question is shown.",
        "Scroll display: the interval between two consecutive first answers is measured (for the first question, from the start of the test). Unanswered questions show “–”."
      ],
      filterHeading: "Filters",
      filterHint: "No selection in a group means: all.",
      chapters: "Chapter",
      difficulty: "Difficulty",
      type: "Question type",
      chapterOrder: "Order by chapter",
      difficultyOrder: "Order by difficulty",
      orderRandom: "Random",
      orderSorted: "Ascending",
      display: "Display",
      displayScroll: "Scroll (all questions)",
      displayPaged: "Paginated (one question)",
      matchCount: "{n} matching questions available.",
      fewMatch: "Only {n} matching questions available: all of them will be used.",
      noMatch: "No question matches these filters.",
      startButton: "Start test ({n} questions)",
      startButtonNone: "Start test",
      lowScore: "Low-rated questions",
      lowScoreHide: "Hide (score < 0)",
      lowScoreInclude: "Include",
      infoHintTitle: "Hints and rating",
      infoHint: [
        "Hint: every question has an optional hint you can open. It points you towards the answer without giving it away. Try on your own first, then use the hint to know where to look.",
        "Score: use 👍 and 👎 to rate whether a question is well worded and relevant. Your vote adds +1 or −1 to the question's score. Questions with a negative score are not drawn by default; the \"Low-rated questions\" switch lets you include them again.",
        "Your votes are stored in this browser only. A baseline score can be maintained by the maintainer in data/scores.js."
      ]
    },
    bank: {
      missingTitle: "Question bank not loaded",
      missingText: "The file data/questions.js is missing or contains no questions. Please check the installation and reload the page."
    },
    quiz: {
      time: "Time",
      progress: "Answered {a}/{n}",
      question: "Question {i}/{n}",
      chapterShort: "Chapter {n}",
      clarification: "Note",
      selectAll: "Select all that apply.",
      chooseOne: "Choose one answer.",
      fillBlanks: "Fill in all blanks.",
      blankLabel: "Blank {n}",
      tfTrue: "True",
      tfFalse: "False",
      prev: "← Previous",
      next: "Next →",
      finish: "Finish",
      finishTest: "Finish test",
      goTo: "Go to question {n}",
      fewNotice: "Only {n} questions match your filters, so the test consists of {n} questions.",
      confirmUnanswered: "{n} question(s) are unanswered and will count as wrong. Finish anyway?",
      showHint: "Show hint",
      hideHint: "Hide hint",
      hintLabel: "Hint"
    },
    vote: {
      score: "Score",
      like: "Good question: score +1",
      dislike: "Poor or incorrect question: score −1"
    },
    results: {
      heading: "Your result",
      score: "{s}/{n}",
      totalTime: "Total time: {time}",
      tier100: "Perfect! You master the material.",
      tier80: "Very good! Only small gaps left.",
      tier60: "Well done! A bit of review and it will stick.",
      tier40: "A solid start. Read the explanations and try again.",
      tier0: "Don't give up! Use the tips and sources and the next run will go better.",
      correct: "Correct",
      wrong: "Wrong",
      timeSpent: "Time: {time}",
      yourAnswer: "Your answer",
      correctAnswer: "Correct answer",
      notAnswered: "Not answered",
      acceptedAnswers: "Accepted",
      explanation: "Explanation",
      tip: "Tip",
      source: "Source",
      restart: "New test",
      emptyAnswer: "(empty)"
    }
  }
};
