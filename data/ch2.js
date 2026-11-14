// SOTE2 question bank - chapter 2
const QUESTIONS_CH2 = [
  {
    "id": "ch2-tf-001",
    "chapter": 2,
    "section": "2.5 Web-Technologien",
    "source": {
      "document": "SOTE2 Skript (Softwareentwicklung 2)",
      "section": "2.5 Web-Technologien"
    },
    "type": "tf",
    "difficulty": "easy",
    "question": {
      "de": "Wahr oder falsch: HTTP ist ein zustandsloses Protokoll, d. h. der Server speichert zwischen zwei Anfragen von sich aus keinen Zustand des Clients.",
      "en": "True or false: HTTP is a stateless protocol, i.e. the server does not by itself keep any client state between two requests."
    },
    "clarification": {
      "de": "Mechanismen wie Cookies oder Sessions werden hier bewusst nicht berücksichtigt.",
      "en": "Mechanisms such as cookies or sessions are deliberately not considered here."
    },
    "code": null,
    "answer": true,
    "explanation": {
      "de": "HTTP behandelt jede Anfrage unabhängig von früheren. Zustand (z. B. Logins) wird erst durch zusätzliche Mechanismen wie Cookies oder Sessions realisiert.",
      "en": "HTTP treats every request independently of earlier ones. State (e.g. logins) is only provided by additional mechanisms such as cookies or sessions."
    },
    "tip": {
      "de": "Überlege, was der Server nach der Antwort noch über den Client weiß.",
      "en": "Consider what the server still knows about the client after sending the response."
    }
  },
  {
    "id": "ch2-ms-001",
    "chapter": 2,
    "section": "2.7 URLs",
    "source": {
      "document": "SOTE2 Skript (Softwareentwicklung 2)",
      "section": "2.7 URLs"
    },
    "type": "ms",
    "difficulty": "medium",
    "question": {
      "de": "Welche drei der folgenden Angaben sind Bestandteile einer URL wie https://www.example.com:8080/info/seite.html?id=5? Wähle genau drei aus.",
      "en": "Which three of the following are components of a URL such as https://www.example.com:8080/info/seite.html?id=5? Select exactly three."
    },
    "clarification": {
      "de": "Es geht um die Bestandteile der Zeichenkette selbst.",
      "en": "This concerns the parts of the string itself."
    },
    "code": null,
    "options": [
      {
        "id": "a",
        "text": {
          "de": "Schema bzw. Protokoll (hier https)",
          "en": "Scheme or protocol (here https)"
        }
      },
      {
        "id": "b",
        "text": {
          "de": "Port (hier 8080)",
          "en": "Port (here 8080)"
        }
      },
      {
        "id": "c",
        "text": {
          "de": "Query-String (hier id=5)",
          "en": "Query string (here id=5)"
        }
      },
      {
        "id": "d",
        "text": {
          "de": "Primärschlüssel der Zieldatenbank",
          "en": "Primary key of the target database"
        }
      },
      {
        "id": "e",
        "text": {
          "de": "Dateiendung des Compilers",
          "en": "File extension of the compiler"
        }
      }
    ],
    "answer": [
      "a",
      "b",
      "c"
    ],
    "explanation": {
      "de": "Eine URL besteht u. a. aus Schema (https), Host, optionalem Port (8080), Pfad (/info/seite.html) und optionalem Query-String (id=5). Ein Primärschlüssel ist ein Datenbankbegriff, und ein Compiler hat mit dem Aufbau einer URL nichts zu tun.",
      "en": "A URL consists of a scheme (https), host, optional port (8080), path (/info/seite.html) and optional query string (id=5), among others. A primary key is a database term, and a compiler has nothing to do with the structure of a URL."
    },
    "tip": {
      "de": "Zerlege die Adresse von links nach rechts und benenne jedes Stück.",
      "en": "Split the address from left to right and name each piece."
    }
  },
  {
    "id": "ch2-mc-001",
    "chapter": 2,
    "section": "2.7 URLs",
    "source": {
      "document": "SOTE2 Skript (Softwareentwicklung 2)",
      "section": "2.7 URLs"
    },
    "type": "mc",
    "difficulty": "hard",
    "question": {
      "de": "Gegeben ist die URL im Codekommentar. Welcher Teil ist der Query-String (ohne das einleitende Fragezeichen)?",
      "en": "The URL is given in the code comment. Which part is the query string (without the leading question mark)?"
    },
    "clarification": {
      "de": "Das Fragment nach dem Zeichen # gehört nicht zum Query-String.",
      "en": "The fragment after the # character is not part of the query string."
    },
    "code": "# http://example.com:8080/a/b.html?x=1&y=2#top",
    "options": [
      {
        "id": "a",
        "text": {
          "de": "x=1&y=2",
          "en": "x=1&y=2"
        }
      },
      {
        "id": "b",
        "text": {
          "de": "x=1&y=2#top",
          "en": "x=1&y=2#top"
        }
      },
      {
        "id": "c",
        "text": {
          "de": "/a/b.html",
          "en": "/a/b.html"
        }
      },
      {
        "id": "d",
        "text": {
          "de": "8080",
          "en": "8080"
        }
      }
    ],
    "answer": "a",
    "explanation": {
      "de": "Der Query-String beginnt nach dem ? und endet vor dem optionalen Fragment (#top). Daher ist x=1&y=2 korrekt; die Variante mit #top schließt fälschlich das Fragment ein, /a/b.html ist der Pfad und 8080 der Port.",
      "en": "The query string starts after the ? and ends before the optional fragment (#top). Therefore x=1&y=2 is correct; the variant with #top wrongly includes the fragment, /a/b.html is the path and 8080 is the port."
    },
    "tip": {
      "de": "Achte auf die Zeichen ? und # als Trenner.",
      "en": "Look at the characters ? and # as separators."
    }
  }
];
