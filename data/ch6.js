// SOTE2 question bank - chapter 6
const QUESTIONS_CH6 = [
  {
    "id": "ch6-mc-001",
    "chapter": 6,
    "section": "6.3 NoSQL-Datenbanken",
    "source": {
      "document": "SOTE2 Skript (Softwareentwicklung 2)",
      "section": "6.3 NoSQL-Datenbanken / Labor 6 (MongoDB)"
    },
    "type": "mc",
    "difficulty": "easy",
    "question": {
      "de": "In welcher Form speichert MongoDB seine Daten?",
      "en": "In what form does MongoDB store its data?"
    },
    "clarification": {
      "de": "MongoDB ist eine dokumentenorientierte NoSQL-Datenbank.",
      "en": "MongoDB is a document-oriented NoSQL database."
    },
    "code": null,
    "options": [
      {
        "id": "a",
        "text": {
          "de": "Als JSON-ähnliche Dokumente (BSON), die in Collections gruppiert sind.",
          "en": "As JSON-like documents (BSON) grouped into collections."
        }
      },
      {
        "id": "b",
        "text": {
          "de": "Als Tabellen mit festem Schema aus Zeilen und Spalten.",
          "en": "As tables with a fixed schema of rows and columns."
        }
      },
      {
        "id": "c",
        "text": {
          "de": "Als reine Schlüssel-Wert-Paare ohne verschachtelte Strukturen.",
          "en": "As plain key-value pairs without nested structures."
        }
      },
      {
        "id": "d",
        "text": {
          "de": "Als Knoten und Kanten eines Graphen.",
          "en": "As nodes and edges of a graph."
        }
      }
    ],
    "answer": "a",
    "explanation": {
      "de": "MongoDB speichert Dokumente im JSON-ähnlichen BSON-Format, die in Collections liegen und verschachtelt sein dürfen. Tabellen mit festem Schema beschreiben RDBMS, Graphen beschreiben Graphdatenbanken.",
      "en": "MongoDB stores documents in the JSON-like BSON format, which live in collections and may be nested. Tables with a fixed schema describe RDBMS, graphs describe graph databases."
    },
    "tip": {
      "de": "Denke an die Verwandtschaft zu JSON.",
      "en": "Think of the relationship to JSON."
    }
  },
  {
    "id": "ch6-fib-001",
    "chapter": 6,
    "section": "6.4 NoSQL in Python",
    "source": {
      "document": "SOTE2 Skript (Softwareentwicklung 2)",
      "section": "6.4 NoSQL in Python / Labor 6 (MongoDB)"
    },
    "type": "fib",
    "difficulty": "medium",
    "question": {
      "de": "Ergänze die pymongo-Methoden: ein Dokument einfügen und alle Dokumente mit age größer als 20 abfragen.",
      "en": "Fill in the pymongo methods: insert one document and query all documents with age greater than 20."
    },
    "clarification": {
      "de": "Gesucht sind Methodennamen der Collection ohne Klammern.",
      "en": "Collection method names without parentheses are expected."
    },
    "code": "from pymongo import MongoClient\nclient = MongoClient(\"mongodb://localhost:27017/\")\ndb = client[\"school\"]\ndb[\"students\"].____({\"name\": \"Ada\", \"age\": 21})\nfor s in db[\"students\"].____({\"age\": {\"$gt\": 20}}):\n    print(s)",
    "answer": null,
    "blanks": [
      {
        "accepted": [
          "insert_one"
        ],
        "caseSensitive": true
      },
      {
        "accepted": [
          "find"
        ],
        "caseSensitive": true
      }
    ],
    "explanation": {
      "de": "insert_one fügt ein einzelnes Dokument in die Collection ein, find liefert einen Cursor über alle passenden Dokumente; der Operator $gt steht für \"größer als\". find_one würde nur ein Dokument liefern und wäre nicht iterierbar.",
      "en": "insert_one inserts a single document into the collection, find returns a cursor over all matching documents; the operator $gt means \"greater than\". find_one would only return one document and could not be iterated."
    },
    "tip": {
      "de": "Eine Methode schreibt genau ein Dokument, die andere liefert mehrere Treffer.",
      "en": "One method writes exactly one document, the other returns multiple matches."
    }
  },
  {
    "id": "ch6-mc-002",
    "chapter": 6,
    "section": "6.4 NoSQL in Python",
    "source": {
      "document": "SOTE2 Skript (Softwareentwicklung 2)",
      "section": "6.4 NoSQL in Python / Labor 6 (MongoDB)"
    },
    "type": "mc",
    "difficulty": "hard",
    "question": {
      "de": "Was passiert beim Ausführen des folgenden Codes (leere Collection, laufender MongoDB-Server)?",
      "en": "What happens when the following code is executed (empty collection, running MongoDB server)?"
    },
    "clarification": {
      "de": "Das Feld _id ist der Primärschlüssel eines Dokuments.",
      "en": "The field _id is the primary key of a document."
    },
    "code": "col.insert_one({\"_id\": 1, \"a\": 1})\ncol.insert_one({\"_id\": 1, \"a\": 2})",
    "options": [
      {
        "id": "a",
        "text": {
          "de": "Das zweite Dokument überschreibt das erste.",
          "en": "The second document overwrites the first."
        }
      },
      {
        "id": "b",
        "text": {
          "de": "Beide Dokumente werden gespeichert.",
          "en": "Both documents are stored."
        }
      },
      {
        "id": "c",
        "text": {
          "de": "Der zweite Aufruf löst einen DuplicateKeyError aus.",
          "en": "The second call raises a DuplicateKeyError."
        }
      },
      {
        "id": "d",
        "text": {
          "de": "Der erste Aufruf löst einen Fehler aus, weil _id nicht vorgegeben werden darf.",
          "en": "The first call raises an error because _id must not be specified."
        }
      }
    ],
    "answer": "c",
    "explanation": {
      "de": "_id muss innerhalb einer Collection eindeutig sein; ein zweites Dokument mit derselben _id wird von insert_one abgelehnt (DuplicateKeyError). Überschreiben würde z. B. replace_one erfordern, und eine eigene _id ist ausdrücklich erlaubt.",
      "en": "_id must be unique within a collection; a second document with the same _id is rejected by insert_one (DuplicateKeyError). Overwriting would require e.g. replace_one, and specifying your own _id is explicitly allowed."
    },
    "tip": {
      "de": "Was bedeutet es, dass _id ein Primärschlüssel ist?",
      "en": "What does it mean that _id is a primary key?"
    }
  }
];
