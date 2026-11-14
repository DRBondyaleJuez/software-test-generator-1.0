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
  },
    {
      "id": "ch6-mc-101",
      "chapter": 6,
      "section": "6.2 Datenbankmanagement-Systeme",
      "source": {
        "document": "SOTE2 Skript (Softwareentwicklung 2)",
        "section": "6.2 Datenbankmanagement-Systeme"
      },
      "type": "mc",
      "difficulty": "easy",
      "question": {
        "de": "Welche Zuordnung von CRUD-Operation und Bedeutung ist korrekt?",
        "en": "Which pairing of CRUD operation and meaning is correct?"
      },
      "clarification": {
        "de": "CRUD bezeichnet die Grundoperationen, die alle DBMS unterstützen.",
        "en": "CRUD denotes the basic operations that every DBMS supports."
      },
      "code": null,
      "options": [
        {
          "id": "a",
          "text": {
            "de": "Update: einen bestehenden Datensatz aktualisieren",
            "en": "Update: modify an existing record"
          }
        },
        {
          "id": "b",
          "text": {
            "de": "Create: einen Datensatz suchen und lesen",
            "en": "Create: search for and read a record"
          }
        },
        {
          "id": "c",
          "text": {
            "de": "Delete: einen Datensatz verändern",
            "en": "Delete: change a record"
          }
        },
        {
          "id": "d",
          "text": {
            "de": "Read: einen neuen Datensatz anlegen",
            "en": "Read: create a new record"
          }
        }
      ],
      "answer": "a",
      "explanation": {
        "de": "Update steht für das Aktualisieren bestehender Datensätze. Create legt Datensätze neu an, Read liest bzw. sucht sie und Delete entfernt sie; die anderen Zuordnungen vertauschen diese Bedeutungen.",
        "en": "Update stands for modifying existing records. Create adds new records, Read reads or searches them and Delete removes them; the other pairings mix up these meanings."
      },
      "tip": {
        "de": "Gehe die vier Buchstaben einzeln durch und überlege, was jeweils mit einem Datensatz passiert.",
        "en": "Go through the four letters one by one and think about what happens to a record in each case."
      }
    },
    {
      "id": "ch6-tf-101",
      "chapter": 6,
      "section": "6.2 Datenbankmanagement-Systeme",
      "source": {
        "document": "SOTE2 Skript (Softwareentwicklung 2)",
        "section": "6.2 Datenbankmanagement-Systeme"
      },
      "type": "tf",
      "difficulty": "easy",
      "question": {
        "de": "Alle Datenbankmanagement-Systeme unterstützen die Operationen Create, Read, Update und Delete (CRUD).",
        "en": "All database management systems support the operations Create, Read, Update and Delete (CRUD)."
      },
      "clarification": null,
      "code": null,
      "answer": true,
      "explanation": {
        "de": "Laut Skript unterstützen alle DBMS stets die CRUD-Operationen, unabhängig vom Datenbankmodell. Das gilt für relationale Systeme ebenso wie für NoSQL-Systeme wie MongoDB.",
        "en": "According to the script, all DBMS always support CRUD operations, regardless of the database model. This holds for relational systems as well as for NoSQL systems such as MongoDB."
      },
      "tip": {
        "de": "Überlege, ob die Operationen vom Datenbankmodell abhängen.",
        "en": "Consider whether the operations depend on the database model."
      }
    },
    {
      "id": "ch6-mc-102",
      "chapter": 6,
      "section": "6.2 Datenbankmanagement-Systeme",
      "source": {
        "document": "SOTE2 Skript (Softwareentwicklung 2)",
        "section": "6.2 Datenbankmanagement-Systeme"
      },
      "type": "mc",
      "difficulty": "easy",
      "question": {
        "de": "Welches der folgenden Systeme ist ein relationales Datenbankmanagement-System (RDBMS)?",
        "en": "Which of the following systems is a relational database management system (RDBMS)?"
      },
      "clarification": null,
      "code": null,
      "options": [
        {
          "id": "a",
          "text": {
            "de": "MongoDB",
            "en": "MongoDB"
          }
        },
        {
          "id": "b",
          "text": {
            "de": "PostgreSQL",
            "en": "PostgreSQL"
          }
        },
        {
          "id": "c",
          "text": {
            "de": "Neo4j",
            "en": "Neo4j"
          }
        },
        {
          "id": "d",
          "text": {
            "de": "Cassandra",
            "en": "Cassandra"
          }
        }
      ],
      "answer": "b",
      "explanation": {
        "de": "PostgreSQL ist wie MySQL, Microsoft SQL Server und Oracle Database ein relationales DBMS. MongoDB, Neo4j und Cassandra sind NoSQL-Systeme.",
        "en": "PostgreSQL is a relational DBMS, like MySQL, Microsoft SQL Server and Oracle Database. MongoDB, Neo4j and Cassandra are NoSQL systems."
      },
      "tip": {
        "de": "Drei der Namen stehen im Skript bei den NoSQL-Systemen.",
        "en": "Three of the names are listed under the NoSQL systems in the script."
      }
    },
    {
      "id": "ch6-ms-101",
      "chapter": 6,
      "section": "6.2 Datenbankmanagement-Systeme",
      "source": {
        "document": "SOTE2 Skript (Softwareentwicklung 2)",
        "section": "6.2 Datenbankmanagement-Systeme"
      },
      "type": "ms",
      "difficulty": "medium",
      "question": {
        "de": "Welche DREI der folgenden Punkte gehören zu den Aufgaben eines DBMS?",
        "en": "Which THREE of the following items are tasks of a DBMS?"
      },
      "clarification": null,
      "code": null,
      "options": [
        {
          "id": "a",
          "text": {
            "de": "Dauerhafte Speicherung von Daten (Persistenz)",
            "en": "Permanent storage of data (persistence)"
          }
        },
        {
          "id": "b",
          "text": {
            "de": "Behandlung von Mehrbenutzerzugriffen",
            "en": "Handling multi-user access"
          }
        },
        {
          "id": "c",
          "text": {
            "de": "Backup und Recovery",
            "en": "Backup and recovery"
          }
        },
        {
          "id": "d",
          "text": {
            "de": "Gestaltung der grafischen Benutzeroberfläche der Anwendung",
            "en": "Designing the graphical user interface of the application"
          }
        },
        {
          "id": "e",
          "text": {
            "de": "Übersetzung des Python-Codes der Anwendung in Maschinencode",
            "en": "Translating the application's Python code into machine code"
          }
        }
      ],
      "answer": [
        "a",
        "b",
        "c"
      ],
      "explanation": {
        "de": "Persistenz, Mehrbenutzerzugriff (Concurrency Control) sowie Backup und Recovery stehen in der Aufgabenliste eines DBMS. Das Gestalten von Benutzeroberflächen und das Übersetzen von Anwendungscode sind Aufgaben der Anwendungsentwicklung bzw. des Interpreters, nicht der Datenbank.",
        "en": "Persistence, multi-user access (concurrency control) and backup and recovery are on the list of DBMS tasks. Designing user interfaces and translating application code belong to application development and the interpreter, not to the database."
      },
      "tip": {
        "de": "Frage dich bei jedem Punkt: Betrifft er die Verwaltung der Daten selbst?",
        "en": "Ask yourself for each item: does it concern managing the data itself?"
      }
    },
    {
      "id": "ch6-mc-103",
      "chapter": 6,
      "section": "6.2 Datenbankmanagement-Systeme",
      "source": {
        "document": "SOTE2 Skript (Softwareentwicklung 2)",
        "section": "6.2 Datenbankmanagement-Systeme"
      },
      "type": "mc",
      "difficulty": "medium",
      "question": {
        "de": "Was beschreibt das \"V\" Velocity in den \"3 Vs\" von Big Data?",
        "en": "What does the \"V\" Velocity in the \"3 Vs\" of Big Data describe?"
      },
      "clarification": {
        "de": "Die 3 Vs sind Volume, Variety und Velocity.",
        "en": "The 3 Vs are Volume, Variety and Velocity."
      },
      "code": null,
      "options": [
        {
          "id": "a",
          "text": {
            "de": "Die Auswertung und Analyse von Datenströmen in Echtzeit",
            "en": "The evaluation and analysis of data streams in real time"
          }
        },
        {
          "id": "b",
          "text": {
            "de": "Datenmengen im Tera- bis Zettabyte-Bereich",
            "en": "Data volumes in the terabyte to zettabyte range"
          }
        },
        {
          "id": "c",
          "text": {
            "de": "Die Speicherung strukturierter, semi-strukturierter und unstrukturierter Daten",
            "en": "The storage of structured, semi-structured and unstructured data"
          }
        },
        {
          "id": "d",
          "text": {
            "de": "Die Geschwindigkeit, mit der ein einzelner Datensatz auf die Festplatte geschrieben wird",
            "en": "The speed at which a single record is written to disk"
          }
        }
      ],
      "answer": "a",
      "explanation": {
        "de": "Velocity bezieht sich auf die Geschwindigkeit, mit der Datenströme anfallen und in Echtzeit ausgewertet werden müssen. Der Datenumfang ist Volume, die Vielfalt der Datenarten ist Variety.",
        "en": "Velocity refers to the speed at which data streams arrive and must be analyzed in real time. The amount of data is Volume, the diversity of data kinds is Variety."
      },
      "tip": {
        "de": "Velocity heißt auf Deutsch Geschwindigkeit. Wessen Geschwindigkeit?",
        "en": "Velocity means speed. Think about what is moving fast."
      }
    },
    {
      "id": "ch6-tf-102",
      "chapter": 6,
      "section": "6.2 Datenbankmanagement-Systeme",
      "source": {
        "document": "SOTE2 Skript (Softwareentwicklung 2)",
        "section": "6.2 Datenbankmanagement-Systeme"
      },
      "type": "tf",
      "difficulty": "medium",
      "question": {
        "de": "Ein Zettabyte (ZB) entspricht 10^21 Byte und damit 1.000 Exabyte (EB).",
        "en": "A zettabyte (ZB) equals 10^21 bytes and therefore 1,000 exabytes (EB)."
      },
      "clarification": null,
      "code": null,
      "answer": true,
      "explanation": {
        "de": "Ein Exabyte sind 10^18 Byte, ein Zettabyte 10^21 Byte, also das Tausendfache. Die Dezimalpräfixe steigen jeweils in Schritten von Faktor 1.000.",
        "en": "An exabyte is 10^18 bytes and a zettabyte 10^21 bytes, i.e. a thousand times as much. The decimal prefixes grow by a factor of 1,000 each step."
      },
      "tip": {
        "de": "Vergleiche die Exponenten von Exabyte und Zettabyte.",
        "en": "Compare the exponents of exabyte and zettabyte."
      }
    },
    {
      "id": "ch6-mc-104",
      "chapter": 6,
      "section": "6.2 Datenbankmanagement-Systeme",
      "source": {
        "document": "SOTE2 Skript (Softwareentwicklung 2)",
        "section": "6.2 Datenbankmanagement-Systeme"
      },
      "type": "mc",
      "difficulty": "hard",
      "question": {
        "de": "Zwei Nutzer ändern gleichzeitig denselben Datensatz. Welche DBMS-Aufgabe verhindert dabei inkonsistente Daten?",
        "en": "Two users modify the same record at the same time. Which DBMS task prevents inconsistent data in this case?"
      },
      "clarification": null,
      "code": null,
      "options": [
        {
          "id": "a",
          "text": {
            "de": "Behandlung von Mehrbenutzerzugriffen (Concurrency Control)",
            "en": "Handling multi-user access (concurrency control)"
          }
        },
        {
          "id": "b",
          "text": {
            "de": "Backup und Recovery",
            "en": "Backup and recovery"
          }
        },
        {
          "id": "c",
          "text": {
            "de": "Zugriffskontrolle (Sicherheit)",
            "en": "Access control (security)"
          }
        },
        {
          "id": "d",
          "text": {
            "de": "Dauerhafte Speicherung (Persistenz)",
            "en": "Permanent storage (persistence)"
          }
        }
      ],
      "answer": "a",
      "explanation": {
        "de": "Concurrency Control koordiniert gleichzeitige Zugriffe mehrerer Nutzer, sodass die Daten konsistent bleiben. Zugriffskontrolle regelt nur, wer zugreifen darf, Backup stellt Daten nach einem Ausfall wieder her und Persistenz sorgt für dauerhafte Speicherung.",
        "en": "Concurrency control coordinates simultaneous access by several users so that data stays consistent. Access control only regulates who may access, backup restores data after a failure and persistence ensures permanent storage."
      },
      "tip": {
        "de": "Das Problem entsteht erst durch die Gleichzeitigkeit der Zugriffe.",
        "en": "The problem arises only because the accesses happen simultaneously."
      }
    },
    {
      "id": "ch6-ms-102",
      "chapter": 6,
      "section": "6.2 Datenbankmanagement-Systeme",
      "source": {
        "document": "SOTE2 Skript (Softwareentwicklung 2)",
        "section": "6.2 Datenbankmanagement-Systeme"
      },
      "type": "ms",
      "difficulty": "hard",
      "question": {
        "de": "Welche ZWEI Aussagen zu Big Data sind korrekt?",
        "en": "Which TWO statements about Big Data are correct?"
      },
      "clarification": null,
      "code": null,
      "options": [
        {
          "id": "a",
          "text": {
            "de": "Der Begriff besitzt keine allgemeingültige Definition.",
            "en": "The term has no universally accepted definition."
          }
        },
        {
          "id": "b",
          "text": {
            "de": "Oft werden die \"3 Vs\" Volume, Variety und Velocity zur Beschreibung genannt.",
            "en": "The \"3 Vs\" Volume, Variety and Velocity are often cited to describe it."
          }
        },
        {
          "id": "c",
          "text": {
            "de": "Big Data bezeichnet ausschließlich Datenmengen über einem Petabyte.",
            "en": "Big Data refers exclusively to data volumes above one petabyte."
          }
        },
        {
          "id": "d",
          "text": {
            "de": "Hadoop wurde 2018 als erstes Framework zur verteilten Verarbeitung großer Datenmengen eingeführt.",
            "en": "Hadoop was introduced in 2018 as the first framework for distributed processing of large data volumes."
          }
        }
      ],
      "answer": [
        "a",
        "b"
      ],
      "explanation": {
        "de": "Big Data hat keine feste Definition und wird häufig über Volume, Variety und Velocity beschrieben. Eine feste Petabyte-Grenze gibt es nicht, und Hadoop wurde bereits 2005 eingeführt.",
        "en": "Big Data has no fixed definition and is often described via Volume, Variety and Velocity. There is no fixed petabyte threshold, and Hadoop was introduced as early as 2005."
      },
      "tip": {
        "de": "Prüfe bei Zahlen und Jahresangaben besonders genau.",
        "en": "Check numbers and years especially carefully."
      }
    },
    {
      "id": "ch6-mc-105",
      "chapter": 6,
      "section": "6.3 NoSQL-Datenbanken",
      "source": {
        "document": "SOTE2 Skript (Softwareentwicklung 2)",
        "section": "6.3 NoSQL-Datenbanken"
      },
      "type": "mc",
      "difficulty": "easy",
      "question": {
        "de": "Welche Eigenschaft ist typisch für NoSQL-Datenbanken?",
        "en": "Which property is typical of NoSQL databases?"
      },
      "clarification": null,
      "code": null,
      "options": [
        {
          "id": "a",
          "text": {
            "de": "Kein festgelegtes Schema (schema-less)",
            "en": "No fixed schema (schema-less)"
          }
        },
        {
          "id": "b",
          "text": {
            "de": "SQL ist zwingend die Abfragesprache",
            "en": "SQL is the mandatory query language"
          }
        },
        {
          "id": "c",
          "text": {
            "de": "Alle Daten liegen in Tabellen mit festen Spalten",
            "en": "All data is stored in tables with fixed columns"
          }
        },
        {
          "id": "d",
          "text": {
            "de": "Es ist ausschließlich vertikale Skalierung möglich",
            "en": "Only vertical scaling is possible"
          }
        }
      ],
      "answer": "a",
      "explanation": {
        "de": "NoSQL-Systeme sind nicht-relational und schema-less, verzichten auf SQL und lassen sich gut horizontal skalieren. Feste Tabellen und SQL kennzeichnen dagegen relationale Systeme.",
        "en": "NoSQL systems are non-relational and schema-less, forgo SQL and scale well horizontally. Fixed tables and SQL characterize relational systems instead."
      },
      "tip": {
        "de": "Das Skript nennt als erste Merkmale: nicht-relational und ...",
        "en": "The script's first characteristics are: non-relational and ..."
      }
    },
    {
      "id": "ch6-mc-106",
      "chapter": 6,
      "section": "6.3 NoSQL-Datenbanken",
      "source": {
        "document": "SOTE2 Skript (Softwareentwicklung 2)",
        "section": "6.3 NoSQL-Datenbanken / Labor 6 (MongoDB)"
      },
      "type": "mc",
      "difficulty": "easy",
      "question": {
        "de": "Zu welchem Typ von NoSQL-Datenbanken gehört MongoDB?",
        "en": "Which type of NoSQL database does MongoDB belong to?"
      },
      "clarification": null,
      "code": null,
      "options": [
        {
          "id": "a",
          "text": {
            "de": "Graphenorientierte Datenbank",
            "en": "Graph database"
          }
        },
        {
          "id": "b",
          "text": {
            "de": "Key-value Store",
            "en": "Key-value store"
          }
        },
        {
          "id": "c",
          "text": {
            "de": "Dokumentenorientierte Datenbank",
            "en": "Document-oriented database"
          }
        },
        {
          "id": "d",
          "text": {
            "de": "Wide-column Store",
            "en": "Wide-column store"
          }
        }
      ],
      "answer": "c",
      "explanation": {
        "de": "MongoDB speichert JSON-ähnliche Dokumente und ist daher dokumentenorientiert. Graphdatenbanken wie Neo4j, Key-value Stores wie Riak und Wide-column Stores wie Cassandra nutzen andere Datenmodelle.",
        "en": "MongoDB stores JSON-like documents and is therefore document-oriented. Graph databases such as Neo4j, key-value stores such as Riak and wide-column stores such as Cassandra use other data models."
      },
      "tip": {
        "de": "Was ist die Grundeinheit, die MongoDB speichert?",
        "en": "What is the basic unit that MongoDB stores?"
      }
    },
    {
      "id": "ch6-mc-107",
      "chapter": 6,
      "section": "6.3 NoSQL-Datenbanken",
      "source": {
        "document": "SOTE2 Skript (Softwareentwicklung 2)",
        "section": "6.3 NoSQL-Datenbanken"
      },
      "type": "mc",
      "difficulty": "easy",
      "question": {
        "de": "Zu welchem NoSQL-Typ gehört Neo4j?",
        "en": "Which NoSQL type does Neo4j belong to?"
      },
      "clarification": null,
      "code": null,
      "options": [
        {
          "id": "a",
          "text": {
            "de": "Dokumentenorientierte Datenbank",
            "en": "Document-oriented database"
          }
        },
        {
          "id": "b",
          "text": {
            "de": "Graphenorientierte Datenbank",
            "en": "Graph database"
          }
        },
        {
          "id": "c",
          "text": {
            "de": "Key-value Store",
            "en": "Key-value store"
          }
        },
        {
          "id": "d",
          "text": {
            "de": "Wide-column Store",
            "en": "Wide-column store"
          }
        }
      ],
      "answer": "b",
      "explanation": {
        "de": "Neo4j ist ein Vertreter der graphenorientierten Datenbanken, die Daten als Knoten und Beziehungen modellieren. Dokumente (MongoDB), Key-value (Riak) und Wide-column (Cassandra, HBase) sind andere Typen.",
        "en": "Neo4j is a representative of graph databases, which model data as nodes and relationships. Documents (MongoDB), key-value (Riak) and wide-column (Cassandra, HBase) are other types."
      },
      "tip": {
        "de": "Der Name des Typs spiegelt wider, wie Beziehungen modelliert werden.",
        "en": "The name of the type reflects how relationships are modeled."
      }
    },
    {
      "id": "ch6-ms-103",
      "chapter": 6,
      "section": "6.3 NoSQL-Datenbanken",
      "source": {
        "document": "SOTE2 Skript (Softwareentwicklung 2)",
        "section": "6.3 NoSQL-Datenbanken"
      },
      "type": "ms",
      "difficulty": "medium",
      "question": {
        "de": "Welche VIER der folgenden Datenmodelle zählen zu den Haupttypen von NoSQL-Datenbanken?",
        "en": "Which FOUR of the following data models are main types of NoSQL databases?"
      },
      "clarification": null,
      "code": null,
      "options": [
        {
          "id": "a",
          "text": {
            "de": "Dokumentenorientiert",
            "en": "Document-oriented"
          }
        },
        {
          "id": "b",
          "text": {
            "de": "Graphenorientiert",
            "en": "Graph-oriented"
          }
        },
        {
          "id": "c",
          "text": {
            "de": "Key-value Store",
            "en": "Key-value store"
          }
        },
        {
          "id": "d",
          "text": {
            "de": "Wide-column Store",
            "en": "Wide-column store"
          }
        },
        {
          "id": "e",
          "text": {
            "de": "Relational mit festem Tabellenschema",
            "en": "Relational with a fixed table schema"
          }
        }
      ],
      "answer": [
        "a",
        "b",
        "c",
        "d"
      ],
      "explanation": {
        "de": "Dokumentenorientierte, graphenorientierte, Key-value- und Wide-column-Systeme sind die vier wichtigsten NoSQL-Typen. Das relationale Modell mit festem Tabellenschema ist gerade das Gegenstück zu NoSQL.",
        "en": "Document-oriented, graph-oriented, key-value and wide-column systems are the four main NoSQL types. The relational model with a fixed table schema is precisely the counterpart to NoSQL."
      },
      "tip": {
        "de": "Ein Eintrag gehört zum klassischen Modell, von dem sich NoSQL abgrenzt.",
        "en": "One entry belongs to the classic model that NoSQL distances itself from."
      }
    },
    {
      "id": "ch6-mc-108",
      "chapter": 6,
      "section": "6.3 NoSQL-Datenbanken",
      "source": {
        "document": "SOTE2 Skript (Softwareentwicklung 2)",
        "section": "6.3 NoSQL-Datenbanken"
      },
      "type": "mc",
      "difficulty": "medium",
      "question": {
        "de": "Cassandra und HBase sind Beispiele für welchen NoSQL-Typ?",
        "en": "Cassandra and HBase are examples of which NoSQL type?"
      },
      "clarification": null,
      "code": null,
      "options": [
        {
          "id": "a",
          "text": {
            "de": "Key-value Stores",
            "en": "Key-value stores"
          }
        },
        {
          "id": "b",
          "text": {
            "de": "Dokumentenorientierte Datenbanken",
            "en": "Document-oriented databases"
          }
        },
        {
          "id": "c",
          "text": {
            "de": "Graphenorientierte Datenbanken",
            "en": "Graph databases"
          }
        },
        {
          "id": "d",
          "text": {
            "de": "Wide-column Stores",
            "en": "Wide-column stores"
          }
        }
      ],
      "answer": "d",
      "explanation": {
        "de": "Cassandra und HBase sind Wide-column Stores. Key-value Stores werden im Skript durch Riak und Berkley DB, Dokumentendatenbanken durch MongoDB und Graphdatenbanken durch Neo4j vertreten.",
        "en": "Cassandra and HBase are wide-column stores. In the script, key-value stores are represented by Riak and Berkley DB, document databases by MongoDB and graph databases by Neo4j."
      },
      "tip": {
        "de": "Beide Namen stehen im Skript beim selben Typ, und der ist nicht Key-value.",
        "en": "Both names are listed in the script under the same type, and it is not key-value."
      }
    },
    {
      "id": "ch6-tf-103",
      "chapter": 6,
      "section": "6.3 NoSQL-Datenbanken",
      "source": {
        "document": "SOTE2 Skript (Softwareentwicklung 2)",
        "section": "6.3 NoSQL-Datenbanken"
      },
      "type": "tf",
      "difficulty": "medium",
      "question": {
        "de": "Zu den gemeinsamen Eigenschaften von NoSQL-Datenbanken gehört der Verzicht auf SQL als Abfragesprache.",
        "en": "Among the shared properties of NoSQL databases is the abandonment of SQL as the query language."
      },
      "clarification": null,
      "code": null,
      "answer": true,
      "explanation": {
        "de": "Das Skript nennt den Verzicht auf SQL als Abfragesprache ausdrücklich als Merkmal von NoSQL. MongoDB nutzt stattdessen eigene Abfragedokumente wie {\"age\": {\"$gt\": 20}}.",
        "en": "The script explicitly lists the abandonment of SQL as the query language as a NoSQL characteristic. MongoDB instead uses its own query documents such as {\"age\": {\"$gt\": 20}}."
      },
      "tip": {
        "de": "Denke an den Namen: \"No\" + \"SQL\".",
        "en": "Think about the name: \"No\" + \"SQL\"."
      }
    },
    {
      "id": "ch6-mc-109",
      "chapter": 6,
      "section": "6.3 NoSQL-Datenbanken",
      "source": {
        "document": "SOTE2 Skript (Softwareentwicklung 2)",
        "section": "6.3 NoSQL-Datenbanken"
      },
      "type": "mc",
      "difficulty": "medium",
      "question": {
        "de": "Was bedeutet \"gute horizontale Skalierung\" bei NoSQL-Systemen?",
        "en": "What does \"good horizontal scaling\" mean for NoSQL systems?"
      },
      "clarification": null,
      "code": null,
      "options": [
        {
          "id": "a",
          "text": {
            "de": "Daten und Last lassen sich auf mehrere Server verteilen",
            "en": "Data and load can be distributed across multiple servers"
          }
        },
        {
          "id": "b",
          "text": {
            "de": "Ein einzelner Server wird mit mehr CPU und RAM ausgestattet",
            "en": "A single server is equipped with more CPU and RAM"
          }
        },
        {
          "id": "c",
          "text": {
            "de": "Tabellen werden in zusätzliche Spalten aufgeteilt",
            "en": "Tables are split into additional columns"
          }
        },
        {
          "id": "d",
          "text": {
            "de": "Alle Daten werden nur im Hauptspeicher gehalten",
            "en": "All data is kept only in main memory"
          }
        }
      ],
      "answer": "a",
      "explanation": {
        "de": "Horizontale Skalierung heißt, die Kapazität durch zusätzliche Server (Verteilung auf mehrere Rechner) zu erhöhen. Stärkere Hardware in einem Server wäre vertikale Skalierung.",
        "en": "Horizontal scaling means increasing capacity by adding servers (distribution across several machines). More powerful hardware in one server would be vertical scaling."
      },
      "tip": {
        "de": "Horizontal heißt in die Breite, also mehr Rechner nebeneinander.",
        "en": "Horizontal means sideways, i.e. more machines side by side."
      }
    },
    {
      "id": "ch6-tf-104",
      "chapter": 6,
      "section": "6.3 NoSQL-Datenbanken",
      "source": {
        "document": "SOTE2 Skript (Softwareentwicklung 2)",
        "section": "6.3 NoSQL-Datenbanken"
      },
      "type": "tf",
      "difficulty": "easy",
      "question": {
        "de": "Berkley DB ist ein Beispiel für eine graphenorientierte Datenbank.",
        "en": "Berkley DB is an example of a graph database."
      },
      "clarification": null,
      "code": null,
      "answer": false,
      "explanation": {
        "de": "Berkley DB wird im Skript neben Riak als Key-value Store genannt. Graphenorientierte Beispiele sind Neo4j und Giraph.",
        "en": "Berkley DB is listed in the script as a key-value store alongside Riak. Graph database examples are Neo4j and Giraph."
      },
      "tip": {
        "de": "Erinnere dich an die Beispiele, die im Skript bei den Key-value Stores stehen.",
        "en": "Recall the examples listed under key-value stores in the script."
      }
    },
    {
      "id": "ch6-mc-110",
      "chapter": 6,
      "section": "6.3 NoSQL-Datenbanken",
      "source": {
        "document": "SOTE2 Skript (Softwareentwicklung 2)",
        "section": "6.3 NoSQL-Datenbanken"
      },
      "type": "mc",
      "difficulty": "medium",
      "question": {
        "de": "Warum unterstützt das fehlende feste Schema die agile Entwicklung?",
        "en": "Why does the lack of a fixed schema support agile development?"
      },
      "clarification": null,
      "code": null,
      "options": [
        {
          "id": "a",
          "text": {
            "de": "Die Datenstruktur kann sich weiterentwickeln, ohne vorab ein starres Schema der ganzen Datenbank anpassen zu müssen",
            "en": "The data structure can evolve without first having to adapt a rigid schema of the entire database"
          }
        },
        {
          "id": "b",
          "text": {
            "de": "SQL-Abfragen werden dadurch automatisch schneller",
            "en": "SQL queries automatically become faster as a result"
          }
        },
        {
          "id": "c",
          "text": {
            "de": "Die Datenbank prüft selbstständig die Anwendungslogik",
            "en": "The database checks the application logic by itself"
          }
        },
        {
          "id": "d",
          "text": {
            "de": "Es müssen keine Daten mehr dauerhaft gespeichert werden",
            "en": "Data no longer has to be stored permanently"
          }
        }
      ],
      "answer": "a",
      "explanation": {
        "de": "Ohne festes Schema können neue Felder oder Strukturen einfach hinzukommen, was schnelle Iterationen erlaubt. Mit Abfragegeschwindigkeit, Anwendungslogik oder Persistenz hat das nichts zu tun.",
        "en": "Without a fixed schema, new fields or structures can simply be added, which allows rapid iterations. This has nothing to do with query speed, application logic or persistence."
      },
      "tip": {
        "de": "Überlege, was in einem relationalen System bei einer neuen Spalte nötig wäre.",
        "en": "Consider what a relational system would require for a new column."
      }
    },
    {
      "id": "ch6-ms-104",
      "chapter": 6,
      "section": "6.3 NoSQL-Datenbanken",
      "source": {
        "document": "SOTE2 Skript (Softwareentwicklung 2)",
        "section": "6.3 NoSQL-Datenbanken"
      },
      "type": "ms",
      "difficulty": "hard",
      "question": {
        "de": "Welche DREI Eigenschaften werden NoSQL-Datenbanken laut Skript typischerweise zugeschrieben?",
        "en": "Which THREE properties are typically attributed to NoSQL databases according to the script?"
      },
      "clarification": null,
      "code": null,
      "options": [
        {
          "id": "a",
          "text": {
            "de": "Nicht-relational",
            "en": "Non-relational"
          }
        },
        {
          "id": "b",
          "text": {
            "de": "Meist Open Source",
            "en": "Mostly open source"
          }
        },
        {
          "id": "c",
          "text": {
            "de": "Häufig für große Datenmengen (Big Data) optimiert",
            "en": "Often optimized for large data volumes (Big Data)"
          }
        },
        {
          "id": "d",
          "text": {
            "de": "Pflicht zu Primär- und Fremdschlüsselbeziehungen",
            "en": "Mandatory primary and foreign key relationships"
          }
        },
        {
          "id": "e",
          "text": {
            "de": "Verbindliches Schema muss vor dem ersten Datensatz definiert werden",
            "en": "A binding schema must be defined before the first record"
          }
        }
      ],
      "answer": [
        "a",
        "b",
        "c"
      ],
      "explanation": {
        "de": "Nicht-relational, meist Open Source und häufig auf große Datenmengen optimiert sind laut Skript typische NoSQL-Merkmale. Pflichtschlüsselbeziehungen und ein vorab definiertes Schema sind dagegen Kennzeichen relationaler Systeme.",
        "en": "Non-relational, mostly open source and often optimized for large data volumes are typical NoSQL characteristics according to the script. Mandatory key relationships and a predefined schema characterize relational systems instead."
      },
      "tip": {
        "de": "Zwei Einträge beschreiben das relationale Gegenmodell.",
        "en": "Two entries describe the relational counter-model."
      }
    },
    {
      "id": "ch6-mc-111",
      "chapter": 6,
      "section": "6.3 NoSQL-Datenbanken",
      "source": {
        "document": "SOTE2 Skript (Softwareentwicklung 2)",
        "section": "6.3 NoSQL-Datenbanken"
      },
      "type": "mc",
      "difficulty": "hard",
      "question": {
        "de": "Eine Anwendung soll Beziehungen zwischen Personen (Freundschaften, Bekannte von Bekannten) über mehrere Stufen verfolgen. Welcher NoSQL-Typ passt am besten?",
        "en": "An application is to follow relationships between people (friendships, friends of friends) across several levels. Which NoSQL type fits best?"
      },
      "clarification": null,
      "code": null,
      "options": [
        {
          "id": "a",
          "text": {
            "de": "Key-value Store",
            "en": "Key-value store"
          }
        },
        {
          "id": "b",
          "text": {
            "de": "Graphenorientierte Datenbank",
            "en": "Graph database"
          }
        },
        {
          "id": "c",
          "text": {
            "de": "Wide-column Store",
            "en": "Wide-column store"
          }
        },
        {
          "id": "d",
          "text": {
            "de": "Dokumentenorientierte Datenbank",
            "en": "Document-oriented database"
          }
        }
      ],
      "answer": "b",
      "explanation": {
        "de": "Wenn die Beziehungen im Mittelpunkt stehen, modellieren Graphdatenbanken (z. B. Neo4j) Personen als Knoten und Beziehungen als Kanten und durchlaufen sie effizient. Die anderen Typen sind auf Werte, Spaltenfamilien oder in sich geschlossene Dokumente ausgelegt.",
        "en": "When relationships are the focus, graph databases (e.g. Neo4j) model people as nodes and relationships as edges and traverse them efficiently. The other types are designed around values, column families or self-contained documents."
      },
      "tip": {
        "de": "Was ist die zentrale Struktur: einzelne Werte oder Verbindungen zwischen Objekten?",
        "en": "What is the central structure: individual values or connections between objects?"
      }
    },
    {
      "id": "ch6-mc-112",
      "chapter": 6,
      "section": "6.3 NoSQL-Datenbanken",
      "source": {
        "document": "SOTE2 Skript (Softwareentwicklung 2)",
        "section": "6.3 NoSQL-Datenbanken"
      },
      "type": "mc",
      "difficulty": "ultra",
      "question": {
        "de": "Ein Online-Shop speichert Produkte, deren Attribute je nach Kategorie stark variieren (Bücher: Autor, ISBN; Laptops: CPU, RAM) und teils verschachtelt sind. Einzelne Felder sollen abgefragt werden können. Welcher NoSQL-Typ passt am besten?",
        "en": "An online shop stores products whose attributes vary strongly by category (books: author, ISBN; laptops: CPU, RAM) and are partly nested. Individual fields are to be queryable. Which NoSQL type fits best?"
      },
      "clarification": null,
      "code": null,
      "options": [
        {
          "id": "a",
          "text": {
            "de": "Graphenorientierte Datenbank",
            "en": "Graph database"
          }
        },
        {
          "id": "b",
          "text": {
            "de": "Key-value Store",
            "en": "Key-value store"
          }
        },
        {
          "id": "c",
          "text": {
            "de": "Wide-column Store",
            "en": "Wide-column store"
          }
        },
        {
          "id": "d",
          "text": {
            "de": "Dokumentenorientierte Datenbank",
            "en": "Document-oriented database"
          }
        }
      ],
      "answer": "d",
      "explanation": {
        "de": "Dokumentendatenbanken speichern variable, verschachtelte Strukturen pro Dokument und erlauben Abfragen auf einzelne Felder. Ein Key-value Store behandelt den Wert meist als undurchsichtig, ein Graph betont Beziehungen und Wide-column Stores setzen auf große, spaltenweise strukturierte Datenmengen.",
        "en": "Document databases store variable, nested structures per document and allow queries on individual fields. A key-value store usually treats the value as opaque, a graph emphasizes relationships and wide-column stores target large, column-structured data volumes."
      },
      "tip": {
        "de": "Welcher Typ kennt sowohl Felder als auch Verschachtelung ohne festes Schema?",
        "en": "Which type knows both fields and nesting without a fixed schema?"
      }
    },
    {
      "id": "ch6-tf-105",
      "chapter": 6,
      "section": "6.3 NoSQL-Datenbanken",
      "source": {
        "document": "SOTE2 Skript (Softwareentwicklung 2)",
        "section": "6.3 NoSQL-Datenbanken"
      },
      "type": "tf",
      "difficulty": "hard",
      "question": {
        "de": "Horizontale Skalierung bedeutet, einen einzelnen Server durch leistungsfähigere Hardware zu ersetzen.",
        "en": "Horizontal scaling means replacing a single server with more powerful hardware."
      },
      "clarification": null,
      "code": null,
      "answer": false,
      "explanation": {
        "de": "Das beschreibt vertikale Skalierung. Horizontale Skalierung verteilt Daten und Last auf mehrere Server, was NoSQL-Systeme gut unterstützen.",
        "en": "That describes vertical scaling. Horizontal scaling distributes data and load across multiple servers, which NoSQL systems support well."
      },
      "tip": {
        "de": "Unterscheide: stärkerer Rechner oder mehr Rechner?",
        "en": "Distinguish: a stronger machine or more machines?"
      }
    },
    {
      "id": "ch6-fib-101",
      "chapter": 6,
      "section": "6.4 NoSQL in Python",
      "source": {
        "document": "SOTE2 Skript (Softwareentwicklung 2)",
        "section": "6.4 NoSQL in Python / Labor 6 (MongoDB)"
      },
      "type": "fib",
      "difficulty": "easy",
      "question": {
        "de": "Ergänze den Klassennamen, mit dem pymongo die Verbindung zum MongoDB-Server aufbaut.",
        "en": "Fill in the class name pymongo uses to connect to the MongoDB server."
      },
      "clarification": {
        "de": "Gesucht ist ein Klassenname ohne Klammern.",
        "en": "A class name without parentheses is expected."
      },
      "code": "from pymongo import MongoClient\nclient = ____(\"mongodb://localhost:27017/\")\ndb = client[\"school\"]",
      "answer": null,
      "blanks": [
        {
          "accepted": [
            "MongoClient"
          ],
          "caseSensitive": true
        }
      ],
      "explanation": {
        "de": "MongoClient ist die Klasse des pymongo-Treibers, die mit der Verbindungs-URL den Zugriff auf den Server herstellt. Über das Client-Objekt werden danach Datenbanken und Collections angesprochen.",
        "en": "MongoClient is the class of the pymongo driver that establishes access to the server via the connection URL. Databases and collections are then accessed through the client object."
      },
      "tip": {
        "de": "Der Name steht schon in der import-Zeile.",
        "en": "The name already appears in the import line."
      }
    },
    {
      "id": "ch6-fib-102",
      "chapter": 6,
      "section": "6.4 NoSQL in Python",
      "source": {
        "document": "SOTE2 Skript (Softwareentwicklung 2)",
        "section": "6.4 NoSQL in Python / Labor 6 (MongoDB)"
      },
      "type": "fib",
      "difficulty": "medium",
      "question": {
        "de": "Ergänze die Methode, die mehrere Dokumente auf einmal einfügt.",
        "en": "Fill in the method that inserts several documents at once."
      },
      "clarification": {
        "de": "Gesucht ist der Methodenname ohne Klammern.",
        "en": "The method name without parentheses is expected."
      },
      "code": "from pymongo import MongoClient\ncol = MongoClient(\"mongodb://localhost:27017/\").shop.products\ncol.____([{\"name\": \"pen\"}, {\"name\": \"ink\"}])\nprint(col.count_documents({}))",
      "answer": null,
      "blanks": [
        {
          "accepted": [
            "insert_many"
          ],
          "caseSensitive": true
        }
      ],
      "explanation": {
        "de": "insert_many erwartet eine Liste von Dokumenten und fügt alle ein. insert_one würde mit einer Liste einen TypeError auslösen, weil es nur ein einzelnes Dokument (dict) akzeptiert.",
        "en": "insert_many expects a list of documents and inserts all of them. insert_one would raise a TypeError with a list because it only accepts a single document (dict)."
      },
      "tip": {
        "de": "Das Argument ist eine Liste mit zwei Dokumenten.",
        "en": "The argument is a list containing two documents."
      }
    },
    {
      "id": "ch6-fib-103",
      "chapter": 6,
      "section": "6.4 NoSQL in Python",
      "source": {
        "document": "SOTE2 Skript (Softwareentwicklung 2)",
        "section": "6.4 NoSQL in Python / Labor 6 (MongoDB)"
      },
      "type": "fib",
      "difficulty": "medium",
      "question": {
        "de": "Ergänze die Methode, die genau ein passendes Dokument als dict zurückgibt.",
        "en": "Fill in the method that returns exactly one matching document as a dict."
      },
      "clarification": {
        "de": "Gesucht ist der Methodenname ohne Klammern.",
        "en": "The method name without parentheses is expected."
      },
      "code": "from pymongo import MongoClient\ncol = MongoClient(\"mongodb://localhost:27017/\").school.students\nuser = col.____({\"name\": \"Ada\"})\nprint(user[\"age\"])",
      "answer": null,
      "blanks": [
        {
          "accepted": [
            "find_one"
          ],
          "caseSensitive": true
        }
      ],
      "explanation": {
        "de": "find_one liefert ein einzelnes Dokument als dict (oder None, falls nichts passt), sodass user[\"age\"] direkt funktioniert. find würde einen Cursor liefern, auf den man nicht mit einem Schlüssel zugreifen kann.",
        "en": "find_one returns a single document as a dict (or None if nothing matches), so user[\"age\"] works directly. find would return a cursor, which cannot be indexed with a key."
      },
      "tip": {
        "de": "Es wird mit einem Schlüssel auf das Ergebnis zugegriffen, nicht darüber iteriert.",
        "en": "The result is accessed with a key, not iterated over."
      }
    },
    {
      "id": "ch6-fib-104",
      "chapter": 6,
      "section": "6.4 NoSQL in Python",
      "source": {
        "document": "SOTE2 Skript (Softwareentwicklung 2)",
        "section": "6.4 NoSQL in Python / Labor 6 (MongoDB)"
      },
      "type": "fib",
      "difficulty": "medium",
      "question": {
        "de": "Ergänze die Methode, die das erste passende Dokument löscht.",
        "en": "Fill in the method that deletes the first matching document."
      },
      "clarification": {
        "de": "Gesucht ist der Methodenname ohne Klammern.",
        "en": "The method name without parentheses is expected."
      },
      "code": "from pymongo import MongoClient\ncol = MongoClient(\"mongodb://localhost:27017/\").school.students\nresult = col.____({\"name\": \"Ada\"})\nprint(result.deleted_count)",
      "answer": null,
      "blanks": [
        {
          "accepted": [
            "delete_one"
          ],
          "caseSensitive": true
        }
      ],
      "explanation": {
        "de": "delete_one entfernt höchstens ein Dokument, das dem Filter entspricht, und das Ergebnisobjekt liefert deleted_count (0 oder 1). delete_many würde alle passenden Dokumente löschen.",
        "en": "delete_one removes at most one document matching the filter, and the result object provides deleted_count (0 or 1). delete_many would delete all matching documents."
      },
      "tip": {
        "de": "Das \"D\" aus CRUD, aber nur für einen Treffer.",
        "en": "The \"D\" from CRUD, but only for a single match."
      }
    },
    {
      "id": "ch6-fib-105",
      "chapter": 6,
      "section": "6.4 NoSQL in Python",
      "source": {
        "document": "SOTE2 Skript (Softwareentwicklung 2)",
        "section": "6.4 NoSQL in Python / Labor 6 (MongoDB)"
      },
      "type": "fib",
      "difficulty": "hard",
      "question": {
        "de": "Ergänze den Update-Operator, der das Feld age auf 22 setzt.",
        "en": "Fill in the update operator that sets the field age to 22."
      },
      "clarification": {
        "de": "Gesucht ist der Operator inklusive $-Zeichen.",
        "en": "The operator including the $ sign is expected."
      },
      "code": "from pymongo import MongoClient\ncol = MongoClient(\"mongodb://localhost:27017/\").school.students\ncol.update_one({\"name\": \"Ada\"}, {\"____\": {\"age\": 22}})",
      "answer": null,
      "blanks": [
        {
          "accepted": [
            "$set"
          ],
          "caseSensitive": true
        }
      ],
      "explanation": {
        "de": "update_one benötigt als zweites Argument ein Dokument mit Update-Operatoren; $set setzt die genannten Felder auf neue Werte und lässt alle anderen Felder unverändert. Ohne Operator lehnt pymongo das Update mit einem ValueError ab.",
        "en": "update_one requires a document with update operators as its second argument; $set sets the given fields to new values and leaves all other fields unchanged. Without an operator pymongo rejects the update with a ValueError."
      },
      "tip": {
        "de": "MongoDB-Operatoren beginnen mit einem Dollarzeichen; dieser setzt Feldwerte.",
        "en": "MongoDB operators start with a dollar sign; this one sets field values."
      }
    },
    {
      "id": "ch6-fib-106",
      "chapter": 6,
      "section": "6.4 NoSQL in Python",
      "source": {
        "document": "SOTE2 Skript (Softwareentwicklung 2)",
        "section": "6.4 NoSQL in Python / Labor 6 (MongoDB)"
      },
      "type": "fib",
      "difficulty": "hard",
      "question": {
        "de": "Ergänze den Abfrageoperator, der Dokumente findet, deren age einem der Werte in der Liste entspricht.",
        "en": "Fill in the query operator that matches documents whose age equals one of the values in the list."
      },
      "clarification": {
        "de": "Gesucht ist der Operator inklusive $-Zeichen.",
        "en": "The operator including the $ sign is expected."
      },
      "code": "from pymongo import MongoClient\ncol = MongoClient(\"mongodb://localhost:27017/\").school.students\nfor s in col.find({\"age\": {\"____\": [20, 21, 22]}}):\n    print(s[\"name\"])",
      "answer": null,
      "blanks": [
        {
          "accepted": [
            "$in"
          ],
          "caseSensitive": true
        }
      ],
      "explanation": {
        "de": "$in trifft zu, wenn der Feldwert in der angegebenen Liste enthalten ist. $gt und $lt vergleichen dagegen mit einem einzelnen Wert.",
        "en": "$in matches when the field value is contained in the given list. $gt and $lt, in contrast, compare against a single value."
      },
      "tip": {
        "de": "Der Operator prüft die Zugehörigkeit zu einer Menge; sein Name ist eine kurze Präposition.",
        "en": "The operator tests membership in a set; its name is a short preposition."
      }
    },
    {
      "id": "ch6-fe-101",
      "chapter": 6,
      "section": "6.4 NoSQL in Python",
      "source": {
        "document": "SOTE2 Skript (Softwareentwicklung 2)",
        "section": "6.4 NoSQL in Python / Labor 6 (MongoDB)"
      },
      "type": "fe",
      "difficulty": "medium",
      "question": {
        "de": "Das folgende Programm soll zwei Produkte speichern und dann zählen, bricht aber mit einem Fehler ab. Welche Zeile enthält den Fehler?",
        "en": "The following program is supposed to store two products and then count them but aborts with an error. Which line contains the error?"
      },
      "clarification": {
        "de": "Genau eine Zeile ist fehlerhaft; Verbindung und Server sind in Ordnung.",
        "en": "Exactly one line is faulty; the connection and server are fine."
      },
      "code": "1: from pymongo import MongoClient\n2: client = MongoClient(\"mongodb://localhost:27017/\")\n3: col = client.shop.products\n4: col.insert_one([{\"name\": \"pen\"}, {\"name\": \"ink\"}])\n5: print(col.count_documents({}))",
      "options": [
        {
          "id": "a",
          "text": {
            "de": "Zeile 2: MongoClient benötigt zwingend Benutzername und Passwort",
            "en": "Line 2: MongoClient requires a username and password"
          }
        },
        {
          "id": "b",
          "text": {
            "de": "Zeile 3: client.shop.products ist keine gültige Schreibweise für eine Collection",
            "en": "Line 3: client.shop.products is not a valid way to access a collection"
          }
        },
        {
          "id": "c",
          "text": {
            "de": "Zeile 4: insert_one akzeptiert nur ein Dokument, für eine Liste wird insert_many benötigt",
            "en": "Line 4: insert_one only accepts a single document; a list requires insert_many"
          }
        },
        {
          "id": "d",
          "text": {
            "de": "Zeile 5: count_documents darf nicht mit einem leeren Filter aufgerufen werden",
            "en": "Line 5: count_documents must not be called with an empty filter"
          }
        }
      ],
      "answer": "c",
      "explanation": {
        "de": "insert_one erwartet ein einzelnes Dokument (dict); eine Liste führt zu einem TypeError. Für mehrere Dokumente ist insert_many richtig, während der Attributzugriff auf Datenbank und Collection sowie der leere Filter in count_documents korrekt sind.",
        "en": "insert_one expects a single document (dict); a list leads to a TypeError. insert_many is correct for several documents, whereas attribute access for database and collection and the empty filter in count_documents are valid."
      },
      "tip": {
        "de": "Vergleiche den Typ des Arguments mit dem, was die Methode erwartet.",
        "en": "Compare the type of the argument with what the method expects."
      }
    },
    {
      "id": "ch6-fe-102",
      "chapter": 6,
      "section": "6.4 NoSQL in Python",
      "source": {
        "document": "SOTE2 Skript (Softwareentwicklung 2)",
        "section": "6.4 NoSQL in Python / Labor 6 (MongoDB)"
      },
      "type": "fe",
      "difficulty": "medium",
      "question": {
        "de": "Das Alter von Ada soll auf 22 geändert werden, das Programm bricht aber mit einer Fehlermeldung ab. Welche Zeile ist fehlerhaft?",
        "en": "Ada's age is supposed to be changed to 22, but the program aborts with an error message. Which line is faulty?"
      },
      "clarification": {
        "de": "Genau eine Zeile ist fehlerhaft.",
        "en": "Exactly one line is faulty."
      },
      "code": "1: from pymongo import MongoClient\n2: col = MongoClient(DB_URL).school.students\n3: col.insert_one({\"name\": \"Ada\", \"age\": 21})\n4: col.update_one({\"name\": \"Ada\"}, {\"age\": 22})\n5: print(col.find_one({\"name\": \"Ada\"}))",
      "options": [
        {
          "id": "a",
          "text": {
            "de": "Zeile 2: Die Konstante DB_URL muss klein geschrieben werden",
            "en": "Line 2: The constant DB_URL must be written in lowercase"
          }
        },
        {
          "id": "b",
          "text": {
            "de": "Zeile 3: insert_one darf kein Feld namens age enthalten",
            "en": "Line 3: insert_one must not contain a field named age"
          }
        },
        {
          "id": "c",
          "text": {
            "de": "Zeile 4: Das Update-Dokument benötigt einen Operator wie $set",
            "en": "Line 4: The update document requires an operator such as $set"
          }
        },
        {
          "id": "d",
          "text": {
            "de": "Zeile 5: find_one darf nicht mit einem Filter aufgerufen werden",
            "en": "Line 5: find_one must not be called with a filter"
          }
        }
      ],
      "answer": "c",
      "explanation": {
        "de": "update_one verlangt als zweites Argument Update-Operatoren wie {\"$set\": {\"age\": 22}}; ein blankes Dokument löst einen ValueError aus. DB_URL ist als Konstante in Großbuchstaben korrekt, und Insert und find_one sind richtig verwendet.",
        "en": "update_one requires update operators such as {\"$set\": {\"age\": 22}} as its second argument; a plain document raises a ValueError. DB_URL is correctly written in capitals as a constant, and the insert and find_one are used properly."
      },
      "tip": {
        "de": "Schau, was das zweite Argument von update_one beschreiben muss.",
        "en": "Look at what the second argument of update_one has to describe."
      }
    },
    {
      "id": "ch6-fe-103",
      "chapter": 6,
      "section": "6.4 NoSQL in Python",
      "source": {
        "document": "SOTE2 Skript (Softwareentwicklung 2)",
        "section": "6.4 NoSQL in Python / Labor 6 (MongoDB)"
      },
      "type": "fe",
      "difficulty": "hard",
      "question": {
        "de": "Das Programm soll die Namen aller Studierenden über 20 ausgeben. Welche Zeile enthält den Fehler?",
        "en": "The program is supposed to print the names of all students over 20. Which line contains the error?"
      },
      "clarification": {
        "de": "Genau eine Zeile ist fehlerhaft; mehrere Treffer sind vorhanden.",
        "en": "Exactly one line is faulty; several matches exist."
      },
      "code": "1: from pymongo import MongoClient\n2: col = MongoClient(DB_URL).school.students\n3: result = col.find_one({\"age\": {\"$gt\": 20}})\n4: for student in result:\n5:     print(student[\"name\"])",
      "options": [
        {
          "id": "a",
          "text": {
            "de": "Zeile 2: Collections dürfen nicht per Attributzugriff angesprochen werden",
            "en": "Line 2: Collections must not be accessed via attribute access"
          }
        },
        {
          "id": "b",
          "text": {
            "de": "Zeile 3: find_one liefert nur ein Dokument; für alle Treffer wird find benötigt",
            "en": "Line 3: find_one returns only one document; find is needed for all matches"
          }
        },
        {
          "id": "c",
          "text": {
            "de": "Zeile 4: Eine for-Schleife kann nicht über Datenbankergebnisse laufen",
            "en": "Line 4: A for loop cannot iterate over database results"
          }
        },
        {
          "id": "d",
          "text": {
            "de": "Zeile 5: Felder müssen mit student.name statt student[\"name\"] gelesen werden",
            "en": "Line 5: Fields must be read with student.name instead of student[\"name\"]"
          }
        }
      ],
      "answer": "b",
      "explanation": {
        "de": "find_one gibt nur ein einzelnes Dokument (dict) zurück; die Schleife würde dessen Schlüssel durchlaufen und student[\"name\"] wäre ein Fehler. Für alle passenden Dokumente muss find verwendet werden, das einen Cursor liefert, über den die Schleife korrekt iteriert; dict-Zugriff mit [\"name\"] ist richtig.",
        "en": "find_one returns only a single document (dict); the loop would run over its keys and student[\"name\"] would fail. For all matching documents find must be used, which returns a cursor that the loop can iterate correctly; dict access with [\"name\"] is correct."
      },
      "tip": {
        "de": "Was liefert find_one im Vergleich zu find, und worüber iteriert die Schleife dann?",
        "en": "What does find_one return compared to find, and what does the loop then iterate over?"
      }
    },
    {
      "id": "ch6-fe-104",
      "chapter": 6,
      "section": "6.4 NoSQL in Python",
      "source": {
        "document": "SOTE2 Skript (Softwareentwicklung 2)",
        "section": "6.4 NoSQL in Python / Labor 6 (MongoDB)"
      },
      "type": "fe",
      "difficulty": "ultra",
      "question": {
        "de": "Das Programm soll alle Studierenden ausgeben, die älter als 17 sind, gibt aber obwohl passende Dokumente existieren nie etwas aus und löst keinen Fehler aus. Welche Zeile ist die Ursache?",
        "en": "The program is supposed to print all students older than 17 but never prints anything although matching documents exist, and it raises no error. Which line is the cause?"
      },
      "clarification": null,
      "code": "1: from pymongo import MongoClient\n2: col = MongoClient(DB_URL).school.students\n3: adults = col.find({\"age\": {\"gt\": 17}})\n4: for s in adults:\n5:     print(s[\"name\"])",
      "options": [
        {
          "id": "a",
          "text": {
            "de": "Zeile 2: Der Zugriff auf die Collection liefert zunächst keine Daten",
            "en": "Line 2: Accessing the collection initially returns no data"
          }
        },
        {
          "id": "b",
          "text": {
            "de": "Zeile 3: Dem Operator fehlt das $-Zeichen, daher wird kein Vergleich ausgeführt",
            "en": "Line 3: The operator lacks the $ sign, so no comparison is performed"
          }
        },
        {
          "id": "c",
          "text": {
            "de": "Zeile 4: Der Cursor muss vor der Schleife mit list() umgewandelt werden",
            "en": "Line 4: The cursor must be converted with list() before the loop"
          }
        },
        {
          "id": "d",
          "text": {
            "de": "Zeile 5: print kann keine Strings aus Dokumenten ausgeben",
            "en": "Line 5: print cannot output strings from documents"
          }
        }
      ],
      "answer": "b",
      "explanation": {
        "de": "Ohne $ wird gt als gewöhnlicher Feldname eines eingebetteten Dokuments behandelt, sodass nach age gleich {\"gt\": 17} gesucht wird und nichts passt. Ein Fehler wird nicht ausgelöst; ein Cursor kann direkt in einer Schleife durchlaufen werden.",
        "en": "Without $, gt is treated as an ordinary field name of an embedded document, so the query looks for age equal to {\"gt\": 17} and nothing matches. No error is raised; a cursor can be iterated directly in a loop."
      },
      "tip": {
        "de": "Wie unterscheidet MongoDB Operatoren von gewöhnlichen Feldnamen?",
        "en": "How does MongoDB distinguish operators from ordinary field names?"
      }
    },
    {
      "id": "ch6-mc-113",
      "chapter": 6,
      "section": "6.4 NoSQL in Python",
      "source": {
        "document": "SOTE2 Skript (Softwareentwicklung 2)",
        "section": "6.4 NoSQL in Python / Labor 6 (MongoDB)"
      },
      "type": "mc",
      "difficulty": "ultra",
      "question": {
        "de": "Was ist auf dem Server der Zustand nach diesen drei Zeilen (ohne weitere Aufrufe, Server läuft)?",
        "en": "What is the state on the server after these three lines (no further calls, server running)?"
      },
      "clarification": null,
      "code": "from pymongo import MongoClient\nclient = MongoClient(\"mongodb://localhost:27017/\")\ndb = client.new_db\ncol = db.new_col",
      "options": [
        {
          "id": "a",
          "text": {
            "de": "Weder die Datenbank noch die Collection sind physisch angelegt; das geschieht erst beim ersten Schreiben",
            "en": "Neither the database nor the collection is physically created; this happens only on the first write"
          }
        },
        {
          "id": "b",
          "text": {
            "de": "Beide sind angelegt, aber leer",
            "en": "Both are created but empty"
          }
        },
        {
          "id": "c",
          "text": {
            "de": "Die Datenbank ist angelegt, die Collection erst beim ersten insert",
            "en": "The database is created, the collection only on the first insert"
          }
        },
        {
          "id": "d",
          "text": {
            "de": "Es wird ein Fehler ausgelöst, weil new_db nicht existiert",
            "en": "An error is raised because new_db does not exist"
          }
        }
      ],
      "answer": "a",
      "explanation": {
        "de": "MongoDB legt Datenbanken und Collections \"lazy\" an: Der Zugriff erzeugt nur Python-Objekte, physisch entstehen sie erst beim ersten Schreiben eines Dokuments. Ein Fehler tritt nicht auf, weil nichts vorab existieren muss.",
        "en": "MongoDB creates databases and collections lazily: access only creates Python objects, they come into existence physically on the first write of a document. No error occurs because nothing has to exist beforehand."
      },
      "tip": {
        "de": "Wann werden Daten wirklich auf den Server geschrieben?",
        "en": "When is data actually written to the server?"
      }
    },
    {
      "id": "ch6-mc-114",
      "chapter": 6,
      "section": "6.4 NoSQL in Python",
      "source": {
        "document": "SOTE2 Skript (Softwareentwicklung 2)",
        "section": "6.4 NoSQL in Python / Labor 6 (MongoDB)"
      },
      "type": "mc",
      "difficulty": "ultra",
      "question": {
        "de": "Die Collection enthält kein Dokument mit name \"Nobody\" (Server läuft). Was gibt der Code aus?",
        "en": "The collection contains no document with name \"Nobody\" (server running). What does the code print?"
      },
      "clarification": null,
      "code": "doc = col.find_one({\"name\": \"Nobody\"})\ncur = col.find({\"name\": \"Nobody\"})\nprint(doc, len(list(cur)))",
      "options": [
        {
          "id": "a",
          "text": {
            "de": "{} 0",
            "en": "{} 0"
          }
        },
        {
          "id": "b",
          "text": {
            "de": "None 0",
            "en": "None 0"
          }
        },
        {
          "id": "c",
          "text": {
            "de": "None None",
            "en": "None None"
          }
        },
        {
          "id": "d",
          "text": {
            "de": "Ein Fehler tritt bei find_one auf, weil kein Treffer existiert",
            "en": "An error occurs at find_one because no match exists"
          }
        }
      ],
      "answer": "b",
      "explanation": {
        "de": "find_one liefert ohne Treffer None statt einer Exception, und find liefert einen leeren Cursor, der in eine leere Liste der Länge 0 umgewandelt wird. Ein leeres dict wird nie zurückgegeben, und len(list(cur)) ergibt eine Zahl, nicht None.",
        "en": "Without a match, find_one returns None instead of raising an exception, and find returns an empty cursor which converts to an empty list of length 0. An empty dict is never returned, and len(list(cur)) yields a number, not None."
      },
      "tip": {
        "de": "Überlege, was die beiden Methoden jeweils bei \"nichts gefunden\" zurückgeben.",
        "en": "Consider what each of the two methods returns when nothing is found."
      }
    },
    {
      "id": "ch6-ms-105",
      "chapter": 6,
      "section": "6.4 NoSQL in Python",
      "source": {
        "document": "SOTE2 Skript (Softwareentwicklung 2)",
        "section": "6.4 NoSQL in Python / Labor 6 (MongoDB)"
      },
      "type": "ms",
      "difficulty": "hard",
      "question": {
        "de": "Welche ZWEI Aussagen zum Aufbau von MongoDB sind korrekt?",
        "en": "Which TWO statements about the structure of MongoDB are correct?"
      },
      "clarification": null,
      "code": null,
      "options": [
        {
          "id": "a",
          "text": {
            "de": "Eine Datenbank enthält mehrere Collections, und eine Collection enthält mehrere Dokumente.",
            "en": "A database contains several collections, and a collection contains several documents."
          }
        },
        {
          "id": "b",
          "text": {
            "de": "Dokumente innerhalb einer Collection dürfen unterschiedliche Felder besitzen.",
            "en": "Documents within a collection may have different fields."
          }
        },
        {
          "id": "c",
          "text": {
            "de": "Alle Dokumente einer Collection müssen dieselben Felder mit denselben Datentypen besitzen.",
            "en": "All documents of a collection must have the same fields with the same data types."
          }
        },
        {
          "id": "d",
          "text": {
            "de": "Ein Dokument besteht aus mehreren Collections.",
            "en": "A document consists of several collections."
          }
        }
      ],
      "answer": [
        "a",
        "b"
      ],
      "explanation": {
        "de": "Die Hierarchie ist Datenbank, Collection, Dokument, und Dokumente sind schemalos, dürfen also unterschiedliche Felder haben. Ein festes Feld- und Typschema pro Collection gibt es nicht, und ein Dokument enthält Key-Value-Paare, keine Collections.",
        "en": "The hierarchy is database, collection, document, and documents are schema-less and may therefore have different fields. There is no fixed field and type schema per collection, and a document contains key-value pairs, not collections."
      },
      "tip": {
        "de": "Ordne Datenbank, Collection und Dokument nach Größe und denke an das Stichwort schemalos.",
        "en": "Order database, collection and document by size and keep the keyword schema-less in mind."
      }
    },
    {
      "id": "ch6-tf-106",
      "chapter": 6,
      "section": "6.4 NoSQL in Python",
      "source": {
        "document": "SOTE2 Skript (Softwareentwicklung 2)",
        "section": "6.4 NoSQL in Python / Labor 6 (MongoDB)"
      },
      "type": "tf",
      "difficulty": "medium",
      "question": {
        "de": "Die Installation mit pip install pymongo[srv] liefert zusätzlich dnspython, das für den Zugriff auf die MongoDB-Cloud benötigt wird.",
        "en": "Installing with pip install pymongo[srv] additionally provides dnspython, which is needed to access the MongoDB cloud."
      },
      "clarification": null,
      "code": null,
      "answer": true,
      "explanation": {
        "de": "Laut Skript sind pymongo (der Treiber) und dnspython (für den Cloud-Zugriff) notwendige Pakete, und der Zusatz [srv] installiert beides. Die mongodb+srv-URL des Cloud-Servers benötigt dnspython für die DNS-Auflösung.",
        "en": "According to the script, pymongo (the driver) and dnspython (for cloud access) are required packages, and the [srv] extra installs both. The mongodb+srv URL of the cloud server requires dnspython for DNS resolution."
      },
      "tip": {
        "de": "Beachte das +srv in der Verbindungs-URL der Cloud.",
        "en": "Note the +srv in the cloud connection URL."
      }
    },
    {
      "id": "ch6-ms-106",
      "chapter": 6,
      "section": "6.5 Im Vergleich: Relationale Datenbanksysteme (RDBMS)",
      "source": {
        "document": "SOTE2 Skript (Softwareentwicklung 2)",
        "section": "6.5 Im Vergleich: Relationale Datenbanksysteme (RDBMS)"
      },
      "type": "ms",
      "difficulty": "easy",
      "question": {
        "de": "Welche ZWEI Zuordnungen von RDBMS-Begriff zu MongoDB-Begriff sind korrekt?",
        "en": "Which TWO mappings of RDBMS term to MongoDB term are correct?"
      },
      "clarification": null,
      "code": null,
      "options": [
        {
          "id": "a",
          "text": {
            "de": "Tabelle entspricht Collection",
            "en": "Table corresponds to collection"
          }
        },
        {
          "id": "b",
          "text": {
            "de": "Datensatz / Zeile entspricht Dokument",
            "en": "Record / row corresponds to document"
          }
        },
        {
          "id": "c",
          "text": {
            "de": "Spalte entspricht Datenbank",
            "en": "Column corresponds to database"
          }
        },
        {
          "id": "d",
          "text": {
            "de": "Primärschlüssel entspricht Collection",
            "en": "Primary key corresponds to collection"
          }
        }
      ],
      "answer": [
        "a",
        "b"
      ],
      "explanation": {
        "de": "Eine Tabelle entspricht einer Collection und ein Datensatz bzw. eine Zeile einem Dokument. Eine Spalte entspricht einem Feld, der Primärschlüssel dem Feld _id.",
        "en": "A table corresponds to a collection and a record or row to a document. A column corresponds to a field, the primary key to the field _id."
      },
      "tip": {
        "de": "Gehe die Vergleichstabelle des Skripts Zeile für Zeile durch.",
        "en": "Go through the script's comparison table row by row."
      }
    },
    {
      "id": "ch6-mc-115",
      "chapter": 6,
      "section": "6.5 Im Vergleich: Relationale Datenbanksysteme (RDBMS)",
      "source": {
        "document": "SOTE2 Skript (Softwareentwicklung 2)",
        "section": "6.5 Im Vergleich: Relationale Datenbanksysteme (RDBMS)"
      },
      "type": "mc",
      "difficulty": "easy",
      "question": {
        "de": "Womit wird in einer relationalen Tabelle jeder Datensatz eindeutig identifiziert?",
        "en": "What uniquely identifies each record in a relational table?"
      },
      "clarification": null,
      "code": null,
      "options": [
        {
          "id": "a",
          "text": {
            "de": "Mit dem Spaltennamen",
            "en": "With the column name"
          }
        },
        {
          "id": "b",
          "text": {
            "de": "Mit einem Fremdschlüssel",
            "en": "With a foreign key"
          }
        },
        {
          "id": "c",
          "text": {
            "de": "Mit der Position in der Datei",
            "en": "With the position in the file"
          }
        },
        {
          "id": "d",
          "text": {
            "de": "Mit einem Primärschlüssel",
            "en": "With a primary key"
          }
        }
      ],
      "answer": "d",
      "explanation": {
        "de": "Jeder Datensatz muss über einen Primärschlüssel (ID) eindeutig identifizierbar sein. Ein Fremdschlüssel verweist auf einen Datensatz einer anderen Tabelle, Spaltennamen beschreiben Eigenschaften.",
        "en": "Every record must be uniquely identifiable via a primary key (ID). A foreign key refers to a record of another table, column names describe properties."
      },
      "tip": {
        "de": "Das Skript sagt, jeder Datensatz muss über eine ID eindeutig identifizierbar sein.",
        "en": "The script says every record must be uniquely identifiable via an ID."
      }
    },
    {
      "id": "ch6-tf-107",
      "chapter": 6,
      "section": "6.5 Im Vergleich: Relationale Datenbanksysteme (RDBMS)",
      "source": {
        "document": "SOTE2 Skript (Softwareentwicklung 2)",
        "section": "6.5 Im Vergleich: Relationale Datenbanksysteme (RDBMS)"
      },
      "type": "tf",
      "difficulty": "easy",
      "question": {
        "de": "Das Feld _id übernimmt in MongoDB die Rolle des Primärschlüssels.",
        "en": "The field _id takes the role of the primary key in MongoDB."
      },
      "clarification": null,
      "code": null,
      "answer": true,
      "explanation": {
        "de": "In der Vergleichstabelle des Skripts entspricht der Primärschlüssel des RDBMS dem Feld _id in MongoDB. Es muss innerhalb einer Collection eindeutig sein.",
        "en": "In the script's comparison table the RDBMS primary key corresponds to the field _id in MongoDB. It must be unique within a collection."
      },
      "tip": {
        "de": "Welche Eigenschaft eines Dokuments muss eindeutig sein?",
        "en": "Which property of a document has to be unique?"
      }
    },
    {
      "id": "ch6-tf-108",
      "chapter": 6,
      "section": "6.5 Im Vergleich: Relationale Datenbanksysteme (RDBMS)",
      "source": {
        "document": "SOTE2 Skript (Softwareentwicklung 2)",
        "section": "6.5 Im Vergleich: Relationale Datenbanksysteme (RDBMS)"
      },
      "type": "tf",
      "difficulty": "easy",
      "question": {
        "de": "ACID wird eher mit relationalen DBMS verbunden, BASE eher mit NoSQL-Systemen.",
        "en": "ACID is more associated with relational DBMS, BASE more with NoSQL systems."
      },
      "clarification": null,
      "code": null,
      "answer": true,
      "explanation": {
        "de": "Relationale DBMS bieten typischerweise das Konsistenzmodell ACID (Atomicity, Consistency, Isolation, Durability), NoSQL-Systeme eher BASE (Basically Available, Soft State, Eventually Consistent).",
        "en": "Relational DBMS typically offer the ACID consistency model (Atomicity, Consistency, Isolation, Durability), NoSQL systems rather BASE (Basically Available, Soft State, Eventually Consistent)."
      },
      "tip": {
        "de": "Das Skript stellt beide Konsistenzmodelle den beiden Datenbankmodellen gegenüber.",
        "en": "The script contrasts both consistency models with the two database models."
      }
    },
    {
      "id": "ch6-fib-107",
      "chapter": 6,
      "section": "6.5 Im Vergleich: Relationale Datenbanksysteme (RDBMS)",
      "source": {
        "document": "SOTE2 Skript (Softwareentwicklung 2)",
        "section": "6.5 Im Vergleich: Relationale Datenbanksysteme (RDBMS)"
      },
      "type": "fib",
      "difficulty": "easy",
      "question": {
        "de": "Ergänze die Methode des Cursors, die das SQL-Statement an die Datenbank schickt.",
        "en": "Fill in the cursor method that sends the SQL statement to the database."
      },
      "clarification": {
        "de": "Gesucht ist der Methodenname ohne Klammern.",
        "en": "The method name without parentheses is expected."
      },
      "code": "import sqlite3\nconnection = sqlite3.connect(\"personal.db\")\ncursor = connection.cursor()\ncursor.____(\"SELECT personal FROM Person WHERE id = 42\")\nresults = cursor.fetchall()",
      "answer": null,
      "blanks": [
        {
          "accepted": [
            "execute"
          ],
          "caseSensitive": true
        }
      ],
      "explanation": {
        "de": "cursor.execute führt das übergebene SQL-Statement aus, danach können mit fetchall die Ergebniszeilen abgeholt werden. Ohne diesen Aufruf gäbe es keine Ergebnisse zum Abholen.",
        "en": "cursor.execute runs the given SQL statement, after which fetchall can retrieve the result rows. Without this call there would be no results to fetch."
      },
      "tip": {
        "de": "Welcher Methodenname beschreibt das Ausführen eines Befehls?",
        "en": "Which method name describes carrying out a command?"
      }
    },
    {
      "id": "ch6-mc-116",
      "chapter": 6,
      "section": "6.5 Im Vergleich: Relationale Datenbanksysteme (RDBMS)",
      "source": {
        "document": "SOTE2 Skript (Softwareentwicklung 2)",
        "section": "6.5 Im Vergleich: Relationale Datenbanksysteme (RDBMS)"
      },
      "type": "mc",
      "difficulty": "medium",
      "question": {
        "de": "Was entspricht in MongoDB laut Skript dem Join (Verknüpfen von Tabellen) in relationalen Datenbanken?",
        "en": "According to the script, what corresponds in MongoDB to the join (linking tables) in relational databases?"
      },
      "clarification": null,
      "code": null,
      "options": [
        {
          "id": "a",
          "text": {
            "de": "Eingebettete Dokumente (Embedded Documents) und Verweise (Link, DBRef)",
            "en": "Embedded documents and links (DBRef)"
          }
        },
        {
          "id": "b",
          "text": {
            "de": "Collections mit identischem Namen in verschiedenen Datenbanken",
            "en": "Collections with identical names in different databases"
          }
        },
        {
          "id": "c",
          "text": {
            "de": "Ein spezieller $join-Operator in find",
            "en": "A special $join operator in find"
          }
        },
        {
          "id": "d",
          "text": {
            "de": "Es gibt keine Möglichkeit, Daten zu verknüpfen",
            "en": "There is no way to link data"
          }
        }
      ],
      "answer": "a",
      "explanation": {
        "de": "Zusammengehörige Daten werden in MongoDB entweder direkt im Dokument verschachtelt (Embedded Documents) oder über Verweise (DBRef) verbunden. Einen $join-Operator in find gibt es nicht, und Verknüpfungen sind nicht unmöglich.",
        "en": "In MongoDB related data is either nested directly in the document (embedded documents) or linked via references (DBRef). There is no $join operator in find, and linking data is not impossible."
      },
      "tip": {
        "de": "Zwei Lösungen: Daten ineinander schachteln oder per Verweis verbinden.",
        "en": "Two solutions: nest data inside each other or connect it via a reference."
      }
    },
    {
      "id": "ch6-fib-108",
      "chapter": 6,
      "section": "6.5 Im Vergleich: Relationale Datenbanksysteme (RDBMS)",
      "source": {
        "document": "SOTE2 Skript (Softwareentwicklung 2)",
        "section": "6.5 Im Vergleich: Relationale Datenbanksysteme (RDBMS)"
      },
      "type": "fib",
      "difficulty": "medium",
      "question": {
        "de": "Ergänze die Cursor-Methode, die alle Ergebniszeilen als Liste von Tupeln liefert.",
        "en": "Fill in the cursor method that returns all result rows as a list of tuples."
      },
      "clarification": {
        "de": "Gesucht ist der Methodenname ohne Klammern.",
        "en": "The method name without parentheses is expected."
      },
      "code": "cursor.execute(query)\nresults = cursor.____()\nprint(results[0][0])",
      "answer": null,
      "blanks": [
        {
          "accepted": [
            "fetchall"
          ],
          "caseSensitive": true
        }
      ],
      "explanation": {
        "de": "fetchall holt alle Zeilen des Ergebnisses als Liste von Tupeln, sodass results[0][0] den ersten Wert der ersten Zeile liefert. fetchone würde nur ein einzelnes Tupel liefern.",
        "en": "fetchall retrieves all rows of the result as a list of tuples, so results[0][0] gives the first value of the first row. fetchone would return only a single tuple."
      },
      "tip": {
        "de": "Der Index [0][0] setzt eine Liste von Zeilen voraus.",
        "en": "The index [0][0] presupposes a list of rows."
      }
    },
    {
      "id": "ch6-mc-117",
      "chapter": 6,
      "section": "6.5 Im Vergleich: Relationale Datenbanksysteme (RDBMS)",
      "source": {
        "document": "SOTE2 Skript (Softwareentwicklung 2)",
        "section": "6.5 Im Vergleich: Relationale Datenbanksysteme (RDBMS)"
      },
      "type": "mc",
      "difficulty": "hard",
      "question": {
        "de": "Ein System garantiert, dass nach einem Schreibvorgang alle Replikate irgendwann denselben Stand haben, aber nicht sofort. Welcher Eigenschaft von BASE entspricht das?",
        "en": "A system guarantees that after a write all replicas will eventually reach the same state, but not immediately. Which BASE property does this correspond to?"
      },
      "clarification": null,
      "code": null,
      "options": [
        {
          "id": "a",
          "text": {
            "de": "Basically Available",
            "en": "Basically Available"
          }
        },
        {
          "id": "b",
          "text": {
            "de": "Soft State",
            "en": "Soft State"
          }
        },
        {
          "id": "c",
          "text": {
            "de": "Eventually Consistent",
            "en": "Eventually Consistent"
          }
        },
        {
          "id": "d",
          "text": {
            "de": "Atomicity",
            "en": "Atomicity"
          }
        }
      ],
      "answer": "c",
      "explanation": {
        "de": "Dass alle Kopien irgendwann, aber nicht sofort konsistent werden, ist Eventually Consistent. Basically Available betrifft die grundsätzliche Verfügbarkeit, Soft State den sich ohne neue Eingaben ändernden Zustand, und Atomicity gehört zu ACID.",
        "en": "That all copies become consistent eventually but not immediately is Eventually Consistent. Basically Available concerns basic availability, Soft State the state changing without new input, and Atomicity belongs to ACID."
      },
      "tip": {
        "de": "Achte auf die Wörter \"irgendwann\" und \"nicht sofort\".",
        "en": "Pay attention to the words \"eventually\" and \"not immediately\"."
      }
    },
    {
      "id": "ch6-ms-107",
      "chapter": 6,
      "section": "6.5 Im Vergleich: Relationale Datenbanksysteme (RDBMS)",
      "source": {
        "document": "SOTE2 Skript (Softwareentwicklung 2)",
        "section": "6.5 Im Vergleich: Relationale Datenbanksysteme (RDBMS)"
      },
      "type": "ms",
      "difficulty": "hard",
      "question": {
        "de": "Welche ZWEI Aussagen zum Vergleich von RDBMS und MongoDB sind korrekt?",
        "en": "Which TWO statements comparing RDBMS and MongoDB are correct?"
      },
      "clarification": null,
      "code": null,
      "options": [
        {
          "id": "a",
          "text": {
            "de": "In einem RDBMS sind Daten in Tabellen mit einem festen Schema organisiert.",
            "en": "In an RDBMS, data is organized in tables with a fixed schema."
          }
        },
        {
          "id": "b",
          "text": {
            "de": "In MongoDB können Dokumente derselben Collection unterschiedliche Felder besitzen.",
            "en": "In MongoDB, documents of the same collection can have different fields."
          }
        },
        {
          "id": "c",
          "text": {
            "de": "In einem RDBMS können einzelne Zeilen beliebige zusätzliche Spalten besitzen, ohne dass die Tabelle geändert wird.",
            "en": "In an RDBMS, individual rows can have arbitrary additional columns without changing the table."
          }
        },
        {
          "id": "d",
          "text": {
            "de": "Relationale Datenbanken verzichten grundsätzlich auf SQL als Abfragesprache.",
            "en": "Relational databases fundamentally forgo SQL as a query language."
          }
        }
      ],
      "answer": [
        "a",
        "b"
      ],
      "explanation": {
        "de": "Relationale Systeme arbeiten mit festem Tabellenschema, MongoDB-Dokumente sind schemalos. Zusätzliche Spalten pro Zeile sind relational nicht möglich, und SQL ist gerade die Abfragesprache der RDBMS.",
        "en": "Relational systems work with a fixed table schema, MongoDB documents are schema-less. Additional columns per row are not possible relationally, and SQL is precisely the query language of RDBMS."
      },
      "tip": {
        "de": "Wo liegt das Schema: in der Tabelle oder im einzelnen Datensatz?",
        "en": "Where does the schema live: in the table or in the individual record?"
      }
    },
    {
      "id": "ch6-mc-118",
      "chapter": 6,
      "section": "6.5 Im Vergleich: Relationale Datenbanksysteme (RDBMS)",
      "source": {
        "document": "SOTE2 Skript (Softwareentwicklung 2)",
        "section": "6.5 Im Vergleich: Relationale Datenbanksysteme (RDBMS)"
      },
      "type": "mc",
      "difficulty": "ultra",
      "question": {
        "de": "Die Funktion baut ihre Query durch Zusammenfügen von Text. Welches Problem entsteht, wenn person_id aus einer Benutzereingabe stammt?",
        "en": "The function builds its query by concatenating text. What problem arises if person_id comes from user input?"
      },
      "clarification": null,
      "code": "def get_name(database_file, person_id):\n    query = \"SELECT personal FROM Person WHERE id='\" + person_id + \"';\"\n    connection = sqlite3.connect(database_file)\n    cursor = connection.cursor()\n    cursor.execute(query)\n    results = cursor.fetchall()\n    cursor.close()\n    connection.close()\n    return results[0][0]",
      "options": [
        {
          "id": "a",
          "text": {
            "de": "Die Query wird bei jedem Aufruf langsamer, weil sie nicht vorkompiliert werden kann",
            "en": "The query becomes slower on every call because it cannot be precompiled"
          }
        },
        {
          "id": "b",
          "text": {
            "de": "Eingeschleuster SQL-Code in der Eingabe kann mitausgeführt werden (SQL-Injection)",
            "en": "SQL code injected through the input can be executed as well (SQL injection)"
          }
        },
        {
          "id": "c",
          "text": {
            "de": "SQLite lehnt Strings als Wert für id grundsätzlich ab",
            "en": "SQLite fundamentally rejects strings as a value for id"
          }
        },
        {
          "id": "d",
          "text": {
            "de": "Die Verbindung wird nie geschlossen und läuft über",
            "en": "The connection is never closed and overflows"
          }
        }
      ],
      "answer": "b",
      "explanation": {
        "de": "Wird Benutzereingabe direkt in den SQL-Text eingefügt, kann sie eigene SQL-Fragmente enthalten und so die Query verändern (SQL-Injection). Die Verbindung wird hier korrekt geschlossen, und SQLite vergleicht Strings problemlos mit der Spalte id.",
        "en": "If user input is inserted directly into the SQL text, it can contain its own SQL fragments and thereby alter the query (SQL injection). The connection is closed correctly here, and SQLite compares strings with the id column without problems."
      },
      "tip": {
        "de": "Was passiert, wenn die Eingabe selbst Anführungszeichen und SQL-Schlüsselwörter enthält?",
        "en": "What happens if the input itself contains quotation marks and SQL keywords?"
      }
    },
    {
      "id": "ch6-mc-201",
      "chapter": 6,
      "section": "6.2 Datenbankmanagement-Systeme",
      "source": {
        "document": "SOTE2 Skript (Softwareentwicklung 2)",
        "section": "6.2 Datenbankmanagement-Systeme"
      },
      "type": "mc",
      "difficulty": "easy",
      "question": {
        "de": "Was ist ein Datenbankmanagement-System (DBMS) laut Skript?",
        "en": "What is a database management system (DBMS) according to the script?"
      },
      "clarification": null,
      "code": null,
      "options": [
        {
          "id": "a",
          "text": {
            "de": "Ein Software-System, das die Speicherung, Verwaltung, Abfrage und Manipulation von Daten in Datenbanken ermöglicht",
            "en": "A software system that enables the storage, management, querying and manipulation of data in databases"
          }
        },
        {
          "id": "b",
          "text": {
            "de": "Eine Programmiersprache, mit der Datenbanken abgefragt werden",
            "en": "A programming language used to query databases"
          }
        },
        {
          "id": "c",
          "text": {
            "de": "Ein physischer Server, der ausschließlich für Backups zuständig ist",
            "en": "A physical server responsible exclusively for backups"
          }
        },
        {
          "id": "d",
          "text": {
            "de": "Eine einzelne Tabelle mit festem Schema",
            "en": "A single table with a fixed schema"
          }
        }
      ],
      "answer": "a",
      "explanation": {
        "de": "Ein DBMS ist ein Software-System zur Verwaltung von Datenbanken mit Funktionen zum Speichern, Verwalten, Abfragen und Manipulieren der Daten. Es ist weder eine Programmiersprache noch ein bestimmter Server oder eine einzelne Tabelle.",
        "en": "A DBMS is a software system for managing databases with functions for storing, managing, querying and manipulating data. It is neither a programming language nor a specific server or a single table."
      },
      "tip": {
        "de": "Das Wort Management verrät, dass es um Software geht, die Datenbanken verwaltet.",
        "en": "The word management reveals that this is software that manages databases."
      }
    },
    {
      "id": "ch6-tf-201",
      "chapter": 6,
      "section": "6.2 Datenbankmanagement-Systeme",
      "source": {
        "document": "SOTE2 Skript (Softwareentwicklung 2)",
        "section": "6.2 Datenbankmanagement-Systeme"
      },
      "type": "tf",
      "difficulty": "easy",
      "question": {
        "de": "Persistenz bedeutet im Zusammenhang mit einem DBMS, dass Daten dauerhaft gespeichert werden und auch nach dem Beenden der Anwendung erhalten bleiben.",
        "en": "In the context of a DBMS, persistence means that data is stored permanently and is retained even after the application has ended."
      },
      "clarification": null,
      "code": null,
      "answer": true,
      "explanation": {
        "de": "Die dauerhafte Speicherung von Daten (Persistenz) ist die erste Aufgabe eines DBMS im Skript. Daten überleben dadurch das Programmende, anders als reine Variablen im Arbeitsspeicher.",
        "en": "Permanent storage of data (persistence) is the first DBMS task listed in the script. Data therefore survives the end of the program, unlike plain variables in main memory."
      },
      "tip": {
        "de": "Denke an den Unterschied zwischen einer Python-Variable und einem Datensatz in einer Datenbank.",
        "en": "Think about the difference between a Python variable and a record in a database."
      }
    },
    {
      "id": "ch6-mc-202",
      "chapter": 6,
      "section": "6.2 Datenbankmanagement-Systeme",
      "source": {
        "document": "SOTE2 Skript (Softwareentwicklung 2)",
        "section": "6.2 Datenbankmanagement-Systeme"
      },
      "type": "mc",
      "difficulty": "medium",
      "question": {
        "de": "Ein Administrator legt fest, dass ein Benutzer auf eine Datenbank nur lesend zugreifen darf. Welche Aufgabe eines DBMS wird hier genutzt?",
        "en": "An administrator specifies that a user may only read from a database. Which DBMS task is used here?"
      },
      "clarification": null,
      "code": null,
      "options": [
        {
          "id": "a",
          "text": {
            "de": "Zugriffskontrolle (Sicherheit)",
            "en": "Access control (security)"
          }
        },
        {
          "id": "b",
          "text": {
            "de": "Transaktionsmanagement",
            "en": "Transaction management"
          }
        },
        {
          "id": "c",
          "text": {
            "de": "Skalierbarkeit für große Datenmengen",
            "en": "Scalability for large data volumes"
          }
        },
        {
          "id": "d",
          "text": {
            "de": "Effiziente Suche nach Datensätzen",
            "en": "Efficient search for records"
          }
        }
      ],
      "answer": "a",
      "explanation": {
        "de": "Rechte pro Benutzer und Datenbank zu vergeben gehört zur Zugriffskontrolle. Transaktionsmanagement sichert zusammengehörige Änderungen, Skalierbarkeit betrifft die Datenmenge und die Suche betrifft das Finden von Datensätzen.",
        "en": "Assigning rights per user and database belongs to access control. Transaction management secures changes that belong together, scalability concerns data volume and search concerns finding records."
      },
      "tip": {
        "de": "Es geht darum, wer etwas tun darf, nicht darum, wie schnell oder wie viel.",
        "en": "It is about who is allowed to do something, not about how fast or how much."
      }
    },
    {
      "id": "ch6-ms-201",
      "chapter": 6,
      "section": "6.2 Datenbankmanagement-Systeme",
      "source": {
        "document": "SOTE2 Skript (Softwareentwicklung 2)",
        "section": "6.2 Datenbankmanagement-Systeme"
      },
      "type": "ms",
      "difficulty": "medium",
      "question": {
        "de": "Welche DREI der folgenden Systeme werden im Skript als relationale Datenbankmanagement-Systeme genannt?",
        "en": "Which THREE of the following systems does the script name as relational database management systems?"
      },
      "clarification": null,
      "code": null,
      "options": [
        {
          "id": "a",
          "text": {
            "de": "MySQL",
            "en": "MySQL"
          }
        },
        {
          "id": "b",
          "text": {
            "de": "Oracle Database",
            "en": "Oracle Database"
          }
        },
        {
          "id": "c",
          "text": {
            "de": "Microsoft SQL Server",
            "en": "Microsoft SQL Server"
          }
        },
        {
          "id": "d",
          "text": {
            "de": "HBase",
            "en": "HBase"
          }
        },
        {
          "id": "e",
          "text": {
            "de": "Neo4j",
            "en": "Neo4j"
          }
        }
      ],
      "answer": [
        "a",
        "b",
        "c"
      ],
      "explanation": {
        "de": "MySQL, Oracle Database und Microsoft SQL Server stehen im Skript bei den RDBMS (zusammen mit Postgres). HBase und Neo4j sind NoSQL-Systeme, nämlich ein Wide-column Store und eine Graphdatenbank.",
        "en": "MySQL, Oracle Database and Microsoft SQL Server are listed under RDBMS in the script (together with Postgres). HBase and Neo4j are NoSQL systems, namely a wide-column store and a graph database."
      },
      "tip": {
        "de": "Zwei der Namen tauchen im Skript bei NoSQL auf.",
        "en": "Two of the names appear under NoSQL in the script."
      }
    },
    {
      "id": "ch6-fib-201",
      "chapter": 6,
      "section": "6.2 Datenbankmanagement-Systeme",
      "source": {
        "document": "SOTE2 Skript (Softwareentwicklung 2)",
        "section": "6.2 Datenbankmanagement-Systeme"
      },
      "type": "fib",
      "difficulty": "medium",
      "question": {
        "de": "Das Transaktionsmanagement relationaler DBMS folgt dem Konsistenzmodell mit der Abkürzung ____ (Atomicity, Consistency, Isolation, Durability).",
        "en": "The transaction management of relational DBMS follows the consistency model with the abbreviation ____ (Atomicity, Consistency, Isolation, Durability)."
      },
      "clarification": {
        "de": "Gesucht ist die Abkürzung aus den vier Anfangsbuchstaben.",
        "en": "The abbreviation formed from the four initial letters is expected."
      },
      "code": null,
      "answer": null,
      "blanks": [
        {
          "accepted": [
            "ACID"
          ],
          "caseSensitive": false
        }
      ],
      "explanation": {
        "de": "ACID steht für Atomicity, Consistency, Isolation und Durability und beschreibt die Garantien von Transaktionen in relationalen DBMS. Das Gegenstück BASE wird eher bei NoSQL-Systemen genannt.",
        "en": "ACID stands for Atomicity, Consistency, Isolation and Durability and describes the guarantees of transactions in relational DBMS. The counterpart BASE is more often found in NoSQL systems."
      },
      "tip": {
        "de": "Die Abkürzung ist zugleich ein englisches Wort für 'sauer'.",
        "en": "The abbreviation is also an English word for a corrosive substance."
      }
    },
    {
      "id": "ch6-mc-203",
      "chapter": 6,
      "section": "6.2 Datenbankmanagement-Systeme",
      "source": {
        "document": "SOTE2 Skript (Softwareentwicklung 2)",
        "section": "6.2 Datenbankmanagement-Systeme"
      },
      "type": "mc",
      "difficulty": "medium",
      "question": {
        "de": "Wie viele Terabyte (TB) entsprechen einem Zettabyte (ZB)?",
        "en": "How many terabytes (TB) equal one zettabyte (ZB)?"
      },
      "clarification": {
        "de": "Es gelten die Dezimalpräfixe aus dem Skript: 1 TB = 10^12 Byte, 1 ZB = 10^21 Byte.",
        "en": "The decimal prefixes from the script apply: 1 TB = 10^12 bytes, 1 ZB = 10^21 bytes."
      },
      "code": null,
      "options": [
        {
          "id": "a",
          "text": {
            "de": "10^9 TB (eine Milliarde)",
            "en": "10^9 TB (one billion)"
          }
        },
        {
          "id": "b",
          "text": {
            "de": "10^6 TB (eine Million)",
            "en": "10^6 TB (one million)"
          }
        },
        {
          "id": "c",
          "text": {
            "de": "10^3 TB (tausend)",
            "en": "10^3 TB (one thousand)"
          }
        },
        {
          "id": "d",
          "text": {
            "de": "10^12 TB (eine Billion)",
            "en": "10^12 TB (one trillion)"
          }
        }
      ],
      "answer": "a",
      "explanation": {
        "de": "10^21 geteilt durch 10^12 ergibt 10^9, also eine Milliarde Terabyte. Die anderen Werte entstehen durch falsches Abzählen der Exponentenstufen (Tera, Peta, Exa, Zetta sind je ein Faktor 1.000).",
        "en": "10^21 divided by 10^12 gives 10^9, i.e. one billion terabytes. The other values come from miscounting the exponent steps (tera, peta, exa, zetta are a factor of 1,000 each)."
      },
      "tip": {
        "de": "Subtrahiere die Exponenten und überprüfe das Ergebnis mit der Zahl der Prefix-Stufen.",
        "en": "Subtract the exponents and check the result against the number of prefix steps."
      }
    },
    {
      "id": "ch6-tf-202",
      "chapter": 6,
      "section": "6.2 Datenbankmanagement-Systeme",
      "source": {
        "document": "SOTE2 Skript (Softwareentwicklung 2)",
        "section": "6.2 Datenbankmanagement-Systeme"
      },
      "type": "tf",
      "difficulty": "medium",
      "question": {
        "de": "Als Beispiel für ein objektrelationales Datenbankmodell nennt das Skript ein GIS-System (Geoinformationssystem).",
        "en": "As an example of an object-relational database model, the script names a GIS (geographic information system)."
      },
      "clarification": null,
      "code": null,
      "answer": true,
      "explanation": {
        "de": "Im Skript steht beim objektrelationalen Modell der Hinweis auf ein GIS-System. Das hierarchische Modell wird dagegen mit einem Dateisystem verglichen.",
        "en": "In the script, the object-relational model is accompanied by the note on a GIS. The hierarchical model, in contrast, is compared to a file system."
      },
      "tip": {
        "de": "Das Skript listet Datenbankmodelle mit je einem kurzen Beispiel oder Vergleich auf.",
        "en": "The script lists database models, each with a short example or comparison."
      }
    },
    {
      "id": "ch6-mc-204",
      "chapter": 6,
      "section": "6.2 Datenbankmanagement-Systeme",
      "source": {
        "document": "SOTE2 Skript (Softwareentwicklung 2)",
        "section": "6.2 Datenbankmanagement-Systeme"
      },
      "type": "mc",
      "difficulty": "hard",
      "question": {
        "de": "Ein Telekommunikationsunternehmen wertet Ereignisströme von Messstationen laufend in Echtzeit aus und sammelt dabei Datenmengen im Petabyte-Bereich. Alle Messwerte haben dasselbe einheitliche Format. Welche der 3 Vs sind hier am stärksten betroffen?",
        "en": "A telecommunications company continuously analyzes event streams from measuring stations in real time and collects data volumes in the petabyte range. All measurements have the same uniform format. Which of the 3 Vs are affected most?"
      },
      "clarification": null,
      "code": null,
      "options": [
        {
          "id": "a",
          "text": {
            "de": "Volume und Velocity",
            "en": "Volume and Velocity"
          }
        },
        {
          "id": "b",
          "text": {
            "de": "Variety und Velocity",
            "en": "Variety and Velocity"
          }
        },
        {
          "id": "c",
          "text": {
            "de": "Volume und Variety",
            "en": "Volume and Variety"
          }
        },
        {
          "id": "d",
          "text": {
            "de": "Keines davon, da es sich nicht um Big Data handelt",
            "en": "None of them, because this is not Big Data"
          }
        }
      ],
      "answer": "a",
      "explanation": {
        "de": "Große Mengen im Petabyte-Bereich sind Volume, die Auswertung von Datenströmen in Echtzeit ist Velocity. Variety spielt keine Rolle, weil alle Daten einheitlich aufgebaut sind.",
        "en": "Large amounts in the petabyte range are Volume, the real-time analysis of data streams is Velocity. Variety plays no role because all data is uniformly structured."
      },
      "tip": {
        "de": "Ordne jedes Detail der Beschreibung einem der drei Vs zu und prüfe, welches V gar nicht vorkommt.",
        "en": "Assign each detail of the description to one of the three Vs and check which V does not occur at all."
      }
    },
    {
      "id": "ch6-mc-205",
      "chapter": 6,
      "section": "6.2 Datenbankmanagement-Systeme",
      "source": {
        "document": "SOTE2 Skript (Softwareentwicklung 2)",
        "section": "6.2 Datenbankmanagement-Systeme"
      },
      "type": "mc",
      "difficulty": "ultra",
      "question": {
        "de": "Welche Zuordnung von Datenbankmodell und Merkmal ist laut Skript korrekt?",
        "en": "Which pairing of database model and characteristic is correct according to the script?"
      },
      "clarification": null,
      "code": null,
      "options": [
        {
          "id": "a",
          "text": {
            "de": "Hierarchisch: vergleichbar mit einem Dateisystem",
            "en": "Hierarchical: comparable to a file system"
          }
        },
        {
          "id": "b",
          "text": {
            "de": "NoSQL: festes Tabellenschema mit Fremdschlüsseln",
            "en": "NoSQL: fixed table schema with foreign keys"
          }
        },
        {
          "id": "c",
          "text": {
            "de": "Objektrelational: kein festgelegtes Schema, z. B. Cassandra",
            "en": "Object-relational: no fixed schema, e.g. Cassandra"
          }
        },
        {
          "id": "d",
          "text": {
            "de": "Relational: Beispiele sind Neo4j und HBase",
            "en": "Relational: examples are Neo4j and HBase"
          }
        }
      ],
      "answer": "a",
      "explanation": {
        "de": "Das Skript vergleicht das hierarchische Modell mit einem Dateisystem. Ein festes Tabellenschema kennzeichnet relationale Systeme, nicht NoSQL, und Cassandra, Neo4j und HBase sind NoSQL-Systeme.",
        "en": "The script compares the hierarchical model with a file system. A fixed table schema characterizes relational systems, not NoSQL, and Cassandra, Neo4j and HBase are NoSQL systems."
      },
      "tip": {
        "de": "Prüfe bei jeder Zeile beide Hälften: passt das Beispiel wirklich zum genannten Modell?",
        "en": "Check both halves of each entry: does the example really fit the named model?"
      }
    },
    {
      "id": "ch6-mc-206",
      "chapter": 6,
      "section": "6.3 NoSQL-Datenbanken",
      "source": {
        "document": "SOTE2 Skript (Softwareentwicklung 2)",
        "section": "6.3 NoSQL-Datenbanken"
      },
      "type": "mc",
      "difficulty": "easy",
      "question": {
        "de": "Welches der folgenden Systeme nennt das Skript als Beispiel für einen Key-value Store?",
        "en": "Which of the following systems does the script name as an example of a key-value store?"
      },
      "clarification": null,
      "code": null,
      "options": [
        {
          "id": "a",
          "text": {
            "de": "Riak",
            "en": "Riak"
          }
        },
        {
          "id": "b",
          "text": {
            "de": "Neo4j",
            "en": "Neo4j"
          }
        },
        {
          "id": "c",
          "text": {
            "de": "HBase",
            "en": "HBase"
          }
        },
        {
          "id": "d",
          "text": {
            "de": "MongoDB",
            "en": "MongoDB"
          }
        }
      ],
      "answer": "a",
      "explanation": {
        "de": "Riak (und Berkley DB) sind im Skript die Key-value Stores. Neo4j ist eine Graphdatenbank, HBase ein Wide-column Store und MongoDB eine Dokumentendatenbank.",
        "en": "Riak (and Berkley DB) are the key-value stores in the script. Neo4j is a graph database, HBase a wide-column store and MongoDB a document database."
      },
      "tip": {
        "de": "Rufe dir die vier Typen mit je ihren Beispielen in Erinnerung.",
        "en": "Recall the four types with their respective examples."
      }
    },
    {
      "id": "ch6-tf-203",
      "chapter": 6,
      "section": "6.3 NoSQL-Datenbanken",
      "source": {
        "document": "SOTE2 Skript (Softwareentwicklung 2)",
        "section": "6.3 NoSQL-Datenbanken"
      },
      "type": "tf",
      "difficulty": "easy",
      "question": {
        "de": "Giraph wird im Skript als Beispiel für eine graphenorientierte Datenbank genannt.",
        "en": "Giraph is named in the script as an example of a graph database."
      },
      "clarification": null,
      "code": null,
      "answer": true,
      "explanation": {
        "de": "Neben Neo4j nennt das Skript Giraph bei den graphenorientierten Datenbanken. Key-value Stores werden durch Riak und Berkley DB vertreten.",
        "en": "Besides Neo4j, the script names Giraph under graph databases. Key-value stores are represented by Riak and Berkley DB."
      },
      "tip": {
        "de": "Das Skript nennt für diesen Typ zwei Beispiele, eines davon beginnt mit Neo.",
        "en": "The script names two examples for this type, one of which starts with Neo."
      }
    },
    {
      "id": "ch6-mc-207",
      "chapter": 6,
      "section": "6.3 NoSQL-Datenbanken",
      "source": {
        "document": "SOTE2 Skript (Softwareentwicklung 2)",
        "section": "6.3 NoSQL-Datenbanken / Labor 6 (MongoDB)"
      },
      "type": "mc",
      "difficulty": "easy",
      "question": {
        "de": "Was bedeutet die NoSQL-Eigenschaft \"schema-less\" (kein festgelegtes Schema)?",
        "en": "What does the NoSQL property \"schema-less\" (no fixed schema) mean?"
      },
      "clarification": null,
      "code": null,
      "options": [
        {
          "id": "a",
          "text": {
            "de": "Die Datensätze müssen nicht alle einer vorab festgelegten Struktur folgen",
            "en": "The records do not all have to follow a structure defined in advance"
          }
        },
        {
          "id": "b",
          "text": {
            "de": "Es werden keine Daten dauerhaft gespeichert",
            "en": "No data is stored permanently"
          }
        },
        {
          "id": "c",
          "text": {
            "de": "Die Datenbank kann keine Abfragen auf Felder ausführen",
            "en": "The database cannot run queries on fields"
          }
        },
        {
          "id": "d",
          "text": {
            "de": "Dokumente dürfen keine Felder enthalten",
            "en": "Documents must not contain any fields"
          }
        }
      ],
      "answer": "a",
      "explanation": {
        "de": "Schema-less heißt, dass kein starres Schema für alle Datensätze erzwungen wird, die Strukturen können also variieren. Gespeichert und abgefragt wird weiterhin, und Felder sind in Dokumenten selbstverständlich erlaubt.",
        "en": "Schema-less means that no rigid schema is enforced for all records, so structures may vary. Data is still stored and queried, and fields are of course allowed in documents."
      },
      "tip": {
        "de": "Das Schema legt in relationalen Systemen die Spalten einer Tabelle fest.",
        "en": "In relational systems, the schema fixes the columns of a table."
      }
    },
    {
      "id": "ch6-ms-202",
      "chapter": 6,
      "section": "6.3 NoSQL-Datenbanken",
      "source": {
        "document": "SOTE2 Skript (Softwareentwicklung 2)",
        "section": "6.3 NoSQL-Datenbanken"
      },
      "type": "ms",
      "difficulty": "medium",
      "question": {
        "de": "Welche ZWEI der folgenden Systeme sind laut Skript graphenorientierte Datenbanken?",
        "en": "Which TWO of the following systems are graph databases according to the script?"
      },
      "clarification": null,
      "code": null,
      "options": [
        {
          "id": "a",
          "text": {
            "de": "Neo4j",
            "en": "Neo4j"
          }
        },
        {
          "id": "b",
          "text": {
            "de": "Giraph",
            "en": "Giraph"
          }
        },
        {
          "id": "c",
          "text": {
            "de": "Riak",
            "en": "Riak"
          }
        },
        {
          "id": "d",
          "text": {
            "de": "HBase",
            "en": "HBase"
          }
        }
      ],
      "answer": [
        "a",
        "b"
      ],
      "explanation": {
        "de": "Neo4j und Giraph stehen im Skript bei den graphenorientierten Datenbanken. Riak ist ein Key-value Store, HBase ein Wide-column Store.",
        "en": "Neo4j and Giraph are listed under graph databases in the script. Riak is a key-value store, HBase a wide-column store."
      },
      "tip": {
        "de": "Die beiden gesuchten Namen stehen im Skript gemeinsam in einer Zeile.",
        "en": "The two names you are looking for appear together in one line of the script."
      }
    },
    {
      "id": "ch6-mc-208",
      "chapter": 6,
      "section": "6.3 NoSQL-Datenbanken",
      "source": {
        "document": "SOTE2 Skript (Softwareentwicklung 2)",
        "section": "6.3 NoSQL-Datenbanken"
      },
      "type": "mc",
      "difficulty": "medium",
      "question": {
        "de": "Eine Web-Anwendung soll Sitzungsdaten schnell über eine eindeutige Sitzungs-ID ablegen und wieder abrufen. In die Daten selbst wird nie hineingesucht. Welcher NoSQL-Typ passt am besten?",
        "en": "A web application is to store and retrieve session data quickly via a unique session ID. The data itself is never searched. Which NoSQL type fits best?"
      },
      "clarification": null,
      "code": null,
      "options": [
        {
          "id": "a",
          "text": {
            "de": "Key-value Store",
            "en": "Key-value store"
          }
        },
        {
          "id": "b",
          "text": {
            "de": "Graphenorientierte Datenbank",
            "en": "Graph database"
          }
        },
        {
          "id": "c",
          "text": {
            "de": "Dokumentenorientierte Datenbank mit Abfragen auf verschachtelte Felder",
            "en": "Document-oriented database with queries on nested fields"
          }
        },
        {
          "id": "d",
          "text": {
            "de": "Wide-column Store für Spaltenfamilien mit Milliarden Zeilen",
            "en": "Wide-column store for column families with billions of rows"
          }
        }
      ],
      "answer": "a",
      "explanation": {
        "de": "Wenn der Zugriff nur über einen eindeutigen Schlüssel erfolgt, ist ein Key-value Store die einfachste und passende Lösung. Graphen betonen Beziehungen, Dokumente erlauben Feldabfragen, die hier nicht gebraucht werden, und Wide-column Stores zielen auf riesige spaltenweise strukturierte Datenmengen.",
        "en": "If access happens only through a unique key, a key-value store is the simplest fitting solution. Graphs emphasize relationships, documents allow field queries that are not needed here, and wide-column stores target huge column-structured data volumes."
      },
      "tip": {
        "de": "Wie wird auf die Daten zugegriffen: über Beziehungen, über Felder oder nur über einen Namen?",
        "en": "How is the data accessed: via relationships, via fields or only via a name?"
      }
    },
    {
      "id": "ch6-tf-204",
      "chapter": 6,
      "section": "6.3 NoSQL-Datenbanken",
      "source": {
        "document": "SOTE2 Skript (Softwareentwicklung 2)",
        "section": "6.3 NoSQL-Datenbanken"
      },
      "type": "tf",
      "difficulty": "medium",
      "question": {
        "de": "Da NoSQL-Datenbanken schema-less sind, können sie keine strukturierten Daten speichern.",
        "en": "Because NoSQL databases are schema-less, they cannot store structured data."
      },
      "clarification": null,
      "code": null,
      "answer": false,
      "explanation": {
        "de": "Kein festgelegtes Schema heißt nur, dass keine Struktur erzwungen wird. Dokumente dürfen trotzdem durchgehend gleich aufgebaut sein, NoSQL-Systeme sind nur oft auf unstrukturierte oder semi-strukturierte Daten optimiert.",
        "en": "No fixed schema only means that no structure is enforced. Documents may still all have the same structure; NoSQL systems are merely often optimized for unstructured or semi-structured data."
      },
      "tip": {
        "de": "Unterscheide zwischen 'nicht erzwungen' und 'nicht möglich'.",
        "en": "Distinguish between 'not enforced' and 'not possible'."
      }
    },
    {
      "id": "ch6-ms-203",
      "chapter": 6,
      "section": "6.3 NoSQL-Datenbanken",
      "source": {
        "document": "SOTE2 Skript (Softwareentwicklung 2)",
        "section": "6.3 NoSQL-Datenbanken"
      },
      "type": "ms",
      "difficulty": "hard",
      "question": {
        "de": "Welche DREI der folgenden Systeme sind NoSQL-Systeme, aber keine dokumentenorientierten Datenbanken?",
        "en": "Which THREE of the following systems are NoSQL systems but not document-oriented databases?"
      },
      "clarification": null,
      "code": null,
      "options": [
        {
          "id": "a",
          "text": {
            "de": "Neo4j",
            "en": "Neo4j"
          }
        },
        {
          "id": "b",
          "text": {
            "de": "Cassandra",
            "en": "Cassandra"
          }
        },
        {
          "id": "c",
          "text": {
            "de": "Riak",
            "en": "Riak"
          }
        },
        {
          "id": "d",
          "text": {
            "de": "MongoDB",
            "en": "MongoDB"
          }
        },
        {
          "id": "e",
          "text": {
            "de": "PostgreSQL",
            "en": "PostgreSQL"
          }
        }
      ],
      "answer": [
        "a",
        "b",
        "c"
      ],
      "explanation": {
        "de": "Neo4j (Graph), Cassandra (Wide-column) und Riak (Key-value) sind NoSQL, aber nicht dokumentenorientiert. MongoDB ist dokumentenorientiert und PostgreSQL ist ein relationales System.",
        "en": "Neo4j (graph), Cassandra (wide-column) and Riak (key-value) are NoSQL but not document-oriented. MongoDB is document-oriented and PostgreSQL is a relational system."
      },
      "tip": {
        "de": "Zwei Bedingungen müssen gleichzeitig gelten; zwei Einträge scheitern je an einer anderen.",
        "en": "Two conditions must hold at the same time; two entries each fail on a different one."
      }
    },
    {
      "id": "ch6-mc-209",
      "chapter": 6,
      "section": "6.3 NoSQL-Datenbanken",
      "source": {
        "document": "SOTE2 Skript (Softwareentwicklung 2)",
        "section": "6.3 NoSQL-Datenbanken"
      },
      "type": "mc",
      "difficulty": "ultra",
      "question": {
        "de": "Welche Aussage über NoSQL-Typen und ihre Beispiele ist korrekt?",
        "en": "Which statement about NoSQL types and their examples is correct?"
      },
      "clarification": null,
      "code": null,
      "options": [
        {
          "id": "a",
          "text": {
            "de": "Riak und Berkley DB sind Key-value Stores, Giraph ist graphenorientiert",
            "en": "Riak and Berkley DB are key-value stores, Giraph is graph-oriented"
          }
        },
        {
          "id": "b",
          "text": {
            "de": "Giraph und HBase sind Wide-column Stores, Riak ist ein Key-value Store",
            "en": "Giraph and HBase are wide-column stores, Riak is a key-value store"
          }
        },
        {
          "id": "c",
          "text": {
            "de": "Neo4j und Riak sind graphenorientiert, Cassandra ist dokumentenorientiert",
            "en": "Neo4j and Riak are graph-oriented, Cassandra is document-oriented"
          }
        },
        {
          "id": "d",
          "text": {
            "de": "Berkley DB und MongoDB sind dokumentenorientiert, HBase ist ein Key-value Store",
            "en": "Berkley DB and MongoDB are document-oriented, HBase is a key-value store"
          }
        }
      ],
      "answer": "a",
      "explanation": {
        "de": "Nur die erste Aussage stimmt vollständig mit dem Skript überein. In den anderen steckt jeweils mindestens ein falsch zugeordnetes Beispiel, etwa Giraph als Wide-column Store, Riak als Graph oder Cassandra als Dokumentendatenbank.",
        "en": "Only the first statement matches the script completely. The others each contain at least one wrongly assigned example, such as Giraph as a wide-column store, Riak as a graph or Cassandra as a document database."
      },
      "tip": {
        "de": "Jede Aussage enthält drei Zuordnungen; eine einzige falsche macht sie unbrauchbar.",
        "en": "Each statement contains three assignments; a single wrong one makes it unusable."
      }
    },
    {
      "id": "ch6-mc-210",
      "chapter": 6,
      "section": "6.3 NoSQL-Datenbanken",
      "source": {
        "document": "SOTE2 Skript (Softwareentwicklung 2)",
        "section": "6.3 NoSQL-Datenbanken"
      },
      "type": "mc",
      "difficulty": "medium",
      "question": {
        "de": "Bei welcher Art von Daten stoßen relationale Datenbanken laut Skript an ihre Grenzen?",
        "en": "With which kind of data do relational databases reach their limits according to the script?"
      },
      "clarification": null,
      "code": null,
      "options": [
        {
          "id": "a",
          "text": {
            "de": "Unstrukturierte oder semi-strukturierte Daten wie Text, Bilder, Audio oder Video",
            "en": "Unstructured or semi-structured data such as text, images, audio or video"
          }
        },
        {
          "id": "b",
          "text": {
            "de": "Strukturierte Daten in einem festen Schema",
            "en": "Structured data in a fixed schema"
          }
        },
        {
          "id": "c",
          "text": {
            "de": "Daten, die einen Primärschlüssel besitzen",
            "en": "Data that has a primary key"
          }
        },
        {
          "id": "d",
          "text": {
            "de": "Zahlen, die in Spalten gespeichert werden",
            "en": "Numbers stored in columns"
          }
        }
      ],
      "answer": "a",
      "explanation": {
        "de": "Relationale Systeme eignen sich sehr gut für strukturierte Daten in einem festen Schema, haben aber bei unstrukturierten oder semi-strukturierten Daten Schwierigkeiten. Primärschlüssel und Zahlenspalten sind dagegen ihr Normalfall.",
        "en": "Relational systems are very well suited for structured data in a fixed schema, but have difficulties with unstructured or semi-structured data. Primary keys and numeric columns are their normal case."
      },
      "tip": {
        "de": "Wofür sind Tabellen mit festen Spalten gemacht, und wofür nicht?",
        "en": "What are tables with fixed columns made for, and what are they not made for?"
      }
    },
    {
      "id": "ch6-tf-205",
      "chapter": 6,
      "section": "6.3 NoSQL-Datenbanken",
      "source": {
        "document": "SOTE2 Skript (Softwareentwicklung 2)",
        "section": "6.3 NoSQL-Datenbanken"
      },
      "type": "tf",
      "difficulty": "easy",
      "question": {
        "de": "NoSQL-Datenbanken sind meist Open Source.",
        "en": "NoSQL databases are mostly open source."
      },
      "clarification": null,
      "code": null,
      "answer": true,
      "explanation": {
        "de": "Das Skript nennt \"meist Open Source\" als gemeinsame Eigenschaft der NoSQL-Systeme. Bei MongoDB gilt seit 2018 allerdings die SSPL-Lizenz, was eine Ausnahme von der Regel ist.",
        "en": "The script lists \"mostly open source\" as a shared property of NoSQL systems. For MongoDB, however, the SSPL license has applied since 2018, which is an exception to the rule."
      },
      "tip": {
        "de": "Beachte das Wort 'meist' in der Eigenschaftsliste.",
        "en": "Note the word 'mostly' in the list of properties."
      }
    },
    {
      "id": "ch6-ms-204",
      "chapter": 6,
      "section": "6.3 NoSQL-Datenbanken",
      "source": {
        "document": "SOTE2 Skript (Softwareentwicklung 2)",
        "section": "6.3 NoSQL-Datenbanken"
      },
      "type": "ms",
      "difficulty": "easy",
      "question": {
        "de": "Wofür sind NoSQL-Datenbanken laut Skript häufig optimiert? Wähle die ZWEI zutreffenden Antworten.",
        "en": "What are NoSQL databases often optimized for according to the script? Select the TWO correct answers."
      },
      "clarification": null,
      "code": null,
      "options": [
        {
          "id": "a",
          "text": {
            "de": "Die Speicherung großer Datenmengen (Big Data)",
            "en": "Storing large data volumes (Big Data)"
          }
        },
        {
          "id": "b",
          "text": {
            "de": "Die Speicherung unstrukturierter oder semi-strukturierter Daten",
            "en": "Storing unstructured or semi-structured data"
          }
        },
        {
          "id": "c",
          "text": {
            "de": "Strikte Normalisierung der Daten in Tabellen",
            "en": "Strict normalization of data in tables"
          }
        },
        {
          "id": "d",
          "text": {
            "de": "Verknüpfung vieler Tabellen mit SQL-Joins",
            "en": "Linking many tables with SQL joins"
          }
        }
      ],
      "answer": [
        "a",
        "b"
      ],
      "explanation": {
        "de": "Das Skript nennt Big Data und unstrukturierte bzw. semi-strukturierte Daten als typische Optimierungsziele. Normalisierung und SQL-Joins gehören zur relationalen Welt.",
        "en": "The script names Big Data and unstructured or semi-structured data as typical optimization targets. Normalization and SQL joins belong to the relational world."
      },
      "tip": {
        "de": "Zwei Antworten beschreiben die relationale Welt.",
        "en": "Two answers describe the relational world."
      }
    },
    {
      "id": "ch6-fib-202",
      "chapter": 6,
      "section": "6.3 NoSQL-Datenbanken",
      "source": {
        "document": "SOTE2 Skript (Softwareentwicklung 2)",
        "section": "6.3 NoSQL-Datenbanken"
      },
      "type": "fib",
      "difficulty": "medium",
      "question": {
        "de": "Ergänze das zweite Beispiel für Wide-column Stores: Cassandra und ____.",
        "en": "Complete the second example of wide-column stores: Cassandra and ____."
      },
      "clarification": {
        "de": "Gesucht ist der Produktname.",
        "en": "The product name is expected."
      },
      "code": null,
      "answer": null,
      "blanks": [
        {
          "accepted": [
            "HBase"
          ],
          "caseSensitive": false
        }
      ],
      "explanation": {
        "de": "Cassandra und HBase sind die Beispiele für Wide-column Stores im Skript. Riak und Berkley DB gehören zu den Key-value Stores.",
        "en": "Cassandra and HBase are the examples of wide-column stores in the script. Riak and Berkley DB belong to the key-value stores."
      },
      "tip": {
        "de": "Der Name beginnt mit H und stammt wie Hadoop aus der Big-Data-Welt.",
        "en": "The name starts with an H and comes from the Big Data world like Hadoop."
      }
    },
    {
      "id": "ch6-tf-206",
      "chapter": 6,
      "section": "6.3 NoSQL-Datenbanken",
      "source": {
        "document": "SOTE2 Skript (Softwareentwicklung 2)",
        "section": "6.3 NoSQL-Datenbanken"
      },
      "type": "tf",
      "difficulty": "medium",
      "question": {
        "de": "Laut Skript ermöglichen die Eigenschaften von NoSQL-Systemen agile Entwicklung und die Speicherung großer Datenmengen, insbesondere unstrukturierter oder semi-strukturierter Daten.",
        "en": "According to the script, the properties of NoSQL systems enable agile development and the storage of large data volumes, especially unstructured or semi-structured data."
      },
      "clarification": null,
      "code": null,
      "answer": true,
      "explanation": {
        "de": "So fasst das Skript die Wirkung der NoSQL-Eigenschaften zusammen. Solche Daten sind in relationalen DBMS schwer zu handhaben.",
        "en": "This is how the script summarizes the effect of the NoSQL properties. Such data is hard to handle in relational DBMS."
      },
      "tip": {
        "de": "Lies das Ende des Abschnitts zur Begriffsdefinition noch einmal im Kopf durch.",
        "en": "Mentally reread the end of the section on the term definition."
      }
    },
    {
      "id": "ch6-mc-211",
      "chapter": 6,
      "section": "6.4 NoSQL in Python",
      "source": {
        "document": "SOTE2 Skript (Softwareentwicklung 2)",
        "section": "6.4 NoSQL in Python / Labor 6 (MongoDB)"
      },
      "type": "mc",
      "difficulty": "easy",
      "question": {
        "de": "Unter welcher Lizenz wird MongoDB seit 2018 angeboten?",
        "en": "Under which license has MongoDB been offered since 2018?"
      },
      "clarification": null,
      "code": null,
      "options": [
        {
          "id": "a",
          "text": {
            "de": "Server Side Public License (SSPL)",
            "en": "Server Side Public License (SSPL)"
          }
        },
        {
          "id": "b",
          "text": {
            "de": "GNU General Public License (GPL)",
            "en": "GNU General Public License (GPL)"
          }
        },
        {
          "id": "c",
          "text": {
            "de": "MongoDB ist ausschließlich kommerzielle Closed-Source-Software",
            "en": "MongoDB is exclusively commercial closed-source software"
          }
        },
        {
          "id": "d",
          "text": {
            "de": "Public Domain ohne jegliche Einschränkungen",
            "en": "Public domain without any restrictions"
          }
        }
      ],
      "answer": "a",
      "explanation": {
        "de": "Bis 2018 war MongoDB Open Source, seitdem gilt die Server Side Public License. Für die Lehrveranstaltung bringt das keine Einschränkung, wohl aber für Anbieter von Cloud-Diensten.",
        "en": "Until 2018 MongoDB was open source, since then the Server Side Public License applies. For the course this brings no restriction, but it does for providers of cloud services."
      },
      "tip": {
        "de": "Der Name der Lizenz erwähnt die Server-Seite.",
        "en": "The name of the license mentions the server side."
      }
    },
    {
      "id": "ch6-tf-207",
      "chapter": 6,
      "section": "6.4 NoSQL in Python",
      "source": {
        "document": "SOTE2 Skript (Softwareentwicklung 2)",
        "section": "6.4 NoSQL in Python / Labor 6 (MongoDB)"
      },
      "type": "tf",
      "difficulty": "easy",
      "question": {
        "de": "Auf dem gemeinsam genutzten MongoDB-Cloud-Server der Lehrveranstaltung können alle Teilnehmenden die Daten der anderen einsehen.",
        "en": "On the shared MongoDB cloud server used in the course, all participants can see each other's data."
      },
      "clarification": null,
      "code": null,
      "answer": true,
      "explanation": {
        "de": "Alle Teilnehmenden teilen sich denselben Server und können deshalb alle Daten einsehen; das Skript bittet darum, fremde Daten nicht zu löschen. Für eigene Daten sollte man daher eindeutige Datenbank- bzw. Collection-Namen wählen.",
        "en": "All participants share the same server and can therefore see all data; the script asks not to delete each other's data. For your own data you should therefore choose unique database or collection names."
      },
      "tip": {
        "de": "Das Skript ermahnt die Nutzer, sich nicht gegenseitig die Daten zu löschen.",
        "en": "The script reminds users not to delete each other's data."
      }
    },
    {
      "id": "ch6-mc-212",
      "chapter": 6,
      "section": "6.4 NoSQL in Python",
      "source": {
        "document": "SOTE2 Skript (Softwareentwicklung 2)",
        "section": "6.4 NoSQL in Python / Labor 6 (MongoDB)"
      },
      "type": "mc",
      "difficulty": "easy",
      "question": {
        "de": "Welcher Name für die Verbindungs-URL folgt der im Skript genannten Python-Konvention für Konstanten?",
        "en": "Which name for the connection URL follows the Python convention for constants named in the script?"
      },
      "clarification": null,
      "code": null,
      "options": [
        {
          "id": "a",
          "text": {
            "de": "DB_URL",
            "en": "DB_URL"
          }
        },
        {
          "id": "b",
          "text": {
            "de": "dbUrl",
            "en": "dbUrl"
          }
        },
        {
          "id": "c",
          "text": {
            "de": "DbUrl",
            "en": "DbUrl"
          }
        },
        {
          "id": "d",
          "text": {
            "de": "db-url",
            "en": "db-url"
          }
        }
      ],
      "answer": "a",
      "explanation": {
        "de": "Konstanten werden in Python ALL_CAPS geschrieben, im Skript z. B. DB_USER, DB_PASSWORD und DB_URL. dbUrl und DbUrl sind camelCase bzw. PascalCase, und db-url wäre kein gültiger Python-Bezeichner.",
        "en": "Constants are written ALL_CAPS in Python, in the script e.g. DB_USER, DB_PASSWORD and DB_URL. dbUrl and DbUrl are camelCase and PascalCase, and db-url would not be a valid Python identifier."
      },
      "tip": {
        "de": "Die Konvention verlangt Großbuchstaben mit Unterstrichen.",
        "en": "The convention requires capital letters with underscores."
      }
    },
    {
      "id": "ch6-fib-203",
      "chapter": 6,
      "section": "6.4 NoSQL in Python",
      "source": {
        "document": "SOTE2 Skript (Softwareentwicklung 2)",
        "section": "6.4 NoSQL in Python / Labor 6 (MongoDB)"
      },
      "type": "fib",
      "difficulty": "medium",
      "question": {
        "de": "Setze alle offenen Bestellungen auf den Status \"closed\" und gib die Zahl der geänderten Dokumente aus. Ergänze die Methode.",
        "en": "Set all open orders to the status \"closed\" and print the number of changed documents. Fill in the method."
      },
      "clarification": {
        "de": "DB_URL ist als Konstante bereits definiert. Gesucht ist ein Methodenname ohne Klammern.",
        "en": "DB_URL is already defined as a constant. A method name without parentheses is expected."
      },
      "code": "from pymongo import MongoClient\ncol = MongoClient(DB_URL).shop.orders\nres = col.____({\"status\": \"open\"}, {\"$set\": {\"status\": \"closed\"}})\nprint(res.modified_count)",
      "answer": null,
      "blanks": [
        {
          "accepted": [
            "update_many"
          ],
          "caseSensitive": true
        }
      ],
      "explanation": {
        "de": "update_many wendet den Update auf alle Dokumente an, die zum Filter passen. update_one würde nur das erste passende Dokument ändern.",
        "en": "update_many applies the update to all documents matching the filter. update_one would only change the first matching document."
      },
      "tip": {
        "de": "Das Wort 'alle' in der Aufgabe entscheidet über die Methode.",
        "en": "The word 'all' in the task decides the method."
      }
    },
    {
      "id": "ch6-fib-204",
      "chapter": 6,
      "section": "6.4 NoSQL in Python",
      "source": {
        "document": "SOTE2 Skript (Softwareentwicklung 2)",
        "section": "6.4 NoSQL in Python / Labor 6 (MongoDB)"
      },
      "type": "fib",
      "difficulty": "medium",
      "question": {
        "de": "Lösche alle erledigten Aufgaben aus der Collection und gib die Zahl der gelöschten Dokumente aus. Ergänze die Methode.",
        "en": "Delete all completed tasks from the collection and print the number of deleted documents. Fill in the method."
      },
      "clarification": {
        "de": "DB_URL ist als Konstante bereits definiert. Gesucht ist ein Methodenname ohne Klammern.",
        "en": "DB_URL is already defined as a constant. A method name without parentheses is expected."
      },
      "code": "from pymongo import MongoClient\ncol = MongoClient(DB_URL).todo.tasks\nres = col.____({\"done\": True})\nprint(res.deleted_count)",
      "answer": null,
      "blanks": [
        {
          "accepted": [
            "delete_many"
          ],
          "caseSensitive": true
        }
      ],
      "explanation": {
        "de": "delete_many entfernt alle Dokumente, die zum Filter passen, und das Ergebnis liefert deleted_count. delete_one würde nur ein einziges Dokument löschen.",
        "en": "delete_many removes all documents matching the filter, and the result provides deleted_count. delete_one would delete only a single document."
      },
      "tip": {
        "de": "Mehrere Dokumente sollen verschwinden, nicht nur eines.",
        "en": "Several documents are to disappear, not just one."
      }
    },
    {
      "id": "ch6-fib-205",
      "chapter": 6,
      "section": "6.4 NoSQL in Python",
      "source": {
        "document": "SOTE2 Skript (Softwareentwicklung 2)",
        "section": "6.4 NoSQL in Python / Labor 6 (MongoDB)"
      },
      "type": "fib",
      "difficulty": "medium",
      "question": {
        "de": "Zähle die Studierenden, die mindestens 18 Jahre alt sind. Ergänze Methode und Operator.",
        "en": "Count the students who are at least 18 years old. Fill in the method and the operator."
      },
      "clarification": {
        "de": "DB_URL ist als Konstante bereits definiert. Gesucht sind der Methodenname ohne Klammern und ein Abfrageoperator mit $.",
        "en": "DB_URL is already defined as a constant. The method name without parentheses and a query operator starting with $ are expected."
      },
      "code": "from pymongo import MongoClient\ncol = MongoClient(DB_URL).school.students\nn = col.____({\"age\": {\"____\": 18}})\nprint(n)",
      "answer": null,
      "blanks": [
        {
          "accepted": [
            "count_documents"
          ],
          "caseSensitive": true
        },
        {
          "accepted": [
            "$gte"
          ],
          "caseSensitive": true
        }
      ],
      "explanation": {
        "de": "count_documents zählt die zum Filter passenden Dokumente, und $gte bedeutet \"größer oder gleich\", sodass auch genau 18 mitzählt. $gt würde 18-Jährige ausschließen.",
        "en": "count_documents counts the documents matching the filter, and $gte means \"greater than or equal\", so exactly 18 is counted too. $gt would exclude 18-year-olds."
      },
      "tip": {
        "de": "Beim Operator zählt die Grenze selbst mit, 'mindestens' also.",
        "en": "For the operator, the boundary itself counts, i.e. 'at least'."
      }
    },
    {
      "id": "ch6-fib-206",
      "chapter": 6,
      "section": "6.4 NoSQL in Python",
      "source": {
        "document": "SOTE2 Skript (Softwareentwicklung 2)",
        "section": "6.4 NoSQL in Python / Labor 6 (MongoDB)"
      },
      "type": "fib",
      "difficulty": "hard",
      "question": {
        "de": "Die Liste tags von Ada soll am Ende um den Wert \"logic\" erweitert werden, auch wenn dieser schon vorkommt, sodass sie [\"math\", \"logic\", \"logic\"] enthält. Ergänze den Update-Operator.",
        "en": "The list tags of Ada is to be extended by the value \"logic\" at the end, even if it already occurs, so that it contains [\"math\", \"logic\", \"logic\"]. Fill in the update operator."
      },
      "clarification": {
        "de": "DB_URL ist als Konstante bereits definiert. Gesucht ist ein Operator mit $.",
        "en": "DB_URL is already defined as a constant. An operator starting with $ is expected."
      },
      "code": "from pymongo import MongoClient\ncol = MongoClient(DB_URL).school.students\ncol.insert_one({\"name\": \"Ada\", \"tags\": [\"math\", \"logic\"]})\ncol.update_one({\"name\": \"Ada\"}, {\"____\": {\"tags\": \"logic\"}})\nprint(col.find_one({\"name\": \"Ada\"})[\"tags\"])",
      "answer": null,
      "blanks": [
        {
          "accepted": [
            "$push"
          ],
          "caseSensitive": true
        }
      ],
      "explanation": {
        "de": "$push hängt den Wert unabhängig vom Inhalt ans Listenende an. $addToSet würde \"logic\" nicht noch einmal hinzufügen, und $set würde die ganze Liste durch den String ersetzen.",
        "en": "$push appends the value to the end of the list regardless of its content. $addToSet would not add \"logic\" again, and $set would replace the whole list with the string."
      },
      "tip": {
        "de": "Ein ähnlicher Operator vermeidet Duplikate; hier sind sie ausdrücklich gewünscht.",
        "en": "A similar operator avoids duplicates; here they are explicitly wanted."
      }
    },
    {
      "id": "ch6-mc-213",
      "chapter": 6,
      "section": "6.4 NoSQL in Python",
      "source": {
        "document": "SOTE2 Skript (Softwareentwicklung 2)",
        "section": "6.4 NoSQL in Python / Labor 6 (MongoDB)"
      },
      "type": "mc",
      "difficulty": "hard",
      "question": {
        "de": "Was gibt der folgende Code aus?",
        "en": "What does the following code print?"
      },
      "clarification": {
        "de": "Die Collection ist zu Beginn leer. Der Punkt in address.city greift auf ein Feld innerhalb eines eingebetteten Dokuments zu.",
        "en": "The collection is empty at the start. The dot in address.city accesses a field inside an embedded document."
      },
      "code": "col.insert_many([\n    {\"name\": \"A\", \"address\": {\"city\": \"Bern\"}},\n    {\"name\": \"B\", \"address\": {\"city\": \"Basel\"}},\n    {\"name\": \"C\", \"city\": \"Bern\"}\n])\nfor d in col.find({\"address.city\": \"Bern\"}):\n    print(d[\"name\"])",
      "options": [
        {
          "id": "a",
          "text": {
            "de": "Nur A",
            "en": "Only A"
          }
        },
        {
          "id": "b",
          "text": {
            "de": "A und C",
            "en": "A and C"
          }
        },
        {
          "id": "c",
          "text": {
            "de": "A, B und C",
            "en": "A, B and C"
          }
        },
        {
          "id": "d",
          "text": {
            "de": "Nichts, weil Punktnotation in Abfragen nicht unterstützt wird",
            "en": "Nothing, because dot notation is not supported in queries"
          }
        }
      ],
      "answer": "a",
      "explanation": {
        "de": "Die Punktnotation adressiert das Feld city im eingebetteten Dokument address, das nur bei A den Wert Bern hat. C hat city auf oberster Ebene, was ein anderes Feld ist, und B hat eine andere Stadt.",
        "en": "Dot notation addresses the field city inside the embedded document address, which has the value Bern only for A. C has city at the top level, which is a different field, and B has another city."
      },
      "tip": {
        "de": "Prüfe pro Dokument, ob das Feld an genau diesem Pfad existiert.",
        "en": "Check for each document whether the field exists at exactly this path."
      }
    },
    {
      "id": "ch6-mc-214",
      "chapter": 6,
      "section": "6.4 NoSQL in Python",
      "source": {
        "document": "SOTE2 Skript (Softwareentwicklung 2)",
        "section": "6.4 NoSQL in Python / Labor 6 (MongoDB)"
      },
      "type": "mc",
      "difficulty": "hard",
      "question": {
        "de": "Welchen Typ hat result.inserted_id im folgenden Code?",
        "en": "What is the type of result.inserted_id in the following code?"
      },
      "clarification": {
        "de": "Die Collection ist leer, der Server läuft.",
        "en": "The collection is empty and the server is running."
      },
      "code": "result = col.insert_one({\"name\": \"Ada\"})\nprint(type(result.inserted_id).__name__)",
      "options": [
        {
          "id": "a",
          "text": {
            "de": "ObjectId",
            "en": "ObjectId"
          }
        },
        {
          "id": "b",
          "text": {
            "de": "int",
            "en": "int"
          }
        },
        {
          "id": "c",
          "text": {
            "de": "str",
            "en": "str"
          }
        },
        {
          "id": "d",
          "text": {
            "de": "NoneType",
            "en": "NoneType"
          }
        }
      ],
      "answer": "a",
      "explanation": {
        "de": "Fehlt das Feld _id, erzeugt pymongo automatisch einen ObjectId-Wert und ergänzt ihn im Dokument. Eine fortlaufende Ganzzahl wie in manchen relationalen Systemen vergibt MongoDB nicht, und inserted_id ist nicht None.",
        "en": "If the field _id is missing, pymongo automatically generates an ObjectId value and adds it to the document. MongoDB does not assign a sequential integer as some relational systems do, and inserted_id is not None."
      },
      "tip": {
        "de": "Wer liefert den Wert für _id, wenn du ihn nicht angibst?",
        "en": "Who supplies the value for _id when you do not specify it?"
      }
    },
    {
      "id": "ch6-mc-215",
      "chapter": 6,
      "section": "6.4 NoSQL in Python",
      "source": {
        "document": "SOTE2 Skript (Softwareentwicklung 2)",
        "section": "6.4 NoSQL in Python / Labor 6 (MongoDB)"
      },
      "type": "mc",
      "difficulty": "hard",
      "question": {
        "de": "Die Collection enthält drei Dokumente mit role gleich \"user\" und ohne Feld active. Was gibt der folgende Code aus?",
        "en": "The collection contains three documents with role equal to \"user\" and without a field active. What does the following code print?"
      },
      "clarification": {
        "de": "matched_count ist die Zahl der gefundenen, modified_count die der tatsächlich geänderten Dokumente.",
        "en": "matched_count is the number of documents found, modified_count the number actually changed."
      },
      "code": "res = col.update_one({\"role\": \"user\"}, {\"$set\": {\"active\": True}})\nprint(res.matched_count, res.modified_count)",
      "options": [
        {
          "id": "a",
          "text": {
            "de": "1 1",
            "en": "1 1"
          }
        },
        {
          "id": "b",
          "text": {
            "de": "3 3",
            "en": "3 3"
          }
        },
        {
          "id": "c",
          "text": {
            "de": "1 0",
            "en": "1 0"
          }
        },
        {
          "id": "d",
          "text": {
            "de": "3 1",
            "en": "3 1"
          }
        }
      ],
      "answer": "a",
      "explanation": {
        "de": "update_one verarbeitet nur das erste passende Dokument, also wird eines gefunden und eines geändert, weil active neu hinzukommt. Alle drei zu ändern wäre Aufgabe von update_many.",
        "en": "update_one only processes the first matching document, so one is matched and one is modified, because active is newly added. Changing all three would be the job of update_many."
      },
      "tip": {
        "de": "Wie viele Dokumente verarbeitet update_one höchstens, egal wie viele passen?",
        "en": "How many documents does update_one process at most, no matter how many match?"
      }
    },
    {
      "id": "ch6-ms-205",
      "chapter": 6,
      "section": "6.4 NoSQL in Python",
      "source": {
        "document": "SOTE2 Skript (Softwareentwicklung 2)",
        "section": "6.4 NoSQL in Python / Labor 6 (MongoDB)"
      },
      "type": "ms",
      "difficulty": "hard",
      "question": {
        "de": "Welche ZWEI der folgenden Operatoren sind Update-Operatoren, die als zweites Argument von update_one verwendet werden können?",
        "en": "Which TWO of the following operators are update operators that can be used as the second argument of update_one?"
      },
      "clarification": null,
      "code": null,
      "options": [
        {
          "id": "a",
          "text": {
            "de": "$set",
            "en": "$set"
          }
        },
        {
          "id": "b",
          "text": {
            "de": "$inc",
            "en": "$inc"
          }
        },
        {
          "id": "c",
          "text": {
            "de": "$gt",
            "en": "$gt"
          }
        },
        {
          "id": "d",
          "text": {
            "de": "$in",
            "en": "$in"
          }
        }
      ],
      "answer": [
        "a",
        "b"
      ],
      "explanation": {
        "de": "$set setzt ein Feld auf einen Wert und $inc erhöht ein Zahlenfeld um einen Betrag; beides sind Update-Operatoren. $gt und $in sind Abfrageoperatoren für das Filter-Argument.",
        "en": "$set sets a field to a value and $inc increases a numeric field by an amount; both are update operators. $gt and $in are query operators for the filter argument."
      },
      "tip": {
        "de": "Zwei Operatoren vergleichen Werte in einem Filter, zwei verändern Dokumente.",
        "en": "Two operators compare values in a filter, two change documents."
      }
    },
    {
      "id": "ch6-ms-206",
      "chapter": 6,
      "section": "6.4 NoSQL in Python",
      "source": {
        "document": "SOTE2 Skript (Softwareentwicklung 2)",
        "section": "6.4 NoSQL in Python / Labor 6 (MongoDB)"
      },
      "type": "ms",
      "difficulty": "hard",
      "question": {
        "de": "Welche ZWEI der folgenden Aufrufe können mehr als ein Dokument verändern bzw. löschen?",
        "en": "Which TWO of the following calls can change or delete more than one document?"
      },
      "clarification": null,
      "code": null,
      "options": [
        {
          "id": "a",
          "text": {
            "de": "update_many",
            "en": "update_many"
          }
        },
        {
          "id": "b",
          "text": {
            "de": "delete_many",
            "en": "delete_many"
          }
        },
        {
          "id": "c",
          "text": {
            "de": "update_one",
            "en": "update_one"
          }
        },
        {
          "id": "d",
          "text": {
            "de": "delete_one",
            "en": "delete_one"
          }
        },
        {
          "id": "e",
          "text": {
            "de": "find_one",
            "en": "find_one"
          }
        }
      ],
      "answer": [
        "a",
        "b"
      ],
      "explanation": {
        "de": "update_many und delete_many wirken auf alle Dokumente, die zum Filter passen. update_one und delete_one betreffen höchstens ein Dokument, und find_one liest nur und ändert nichts.",
        "en": "update_many and delete_many act on all documents matching the filter. update_one and delete_one affect at most one document, and find_one only reads and changes nothing."
      },
      "tip": {
        "de": "Achte auf die Namensendung der Methoden.",
        "en": "Pay attention to the suffix of the method names."
      }
    },
    {
      "id": "ch6-fe-201",
      "chapter": 6,
      "section": "6.4 NoSQL in Python",
      "source": {
        "document": "SOTE2 Skript (Softwareentwicklung 2)",
        "section": "6.4 NoSQL in Python / Labor 6 (MongoDB)"
      },
      "type": "fe",
      "difficulty": "hard",
      "question": {
        "de": "Das Programm soll den Ort von Ada ausgeben, bricht aber mit einem KeyError ab. Welche Zeile ist fehlerhaft?",
        "en": "The program is supposed to print Ada's city but aborts with a KeyError. Which line is faulty?"
      },
      "clarification": {
        "de": "DB_URL ist als Konstante bereits definiert.",
        "en": "DB_URL is already defined as a constant."
      },
      "code": "1: from pymongo import MongoClient\n2: col = MongoClient(DB_URL).school.students\n3: col.insert_one({\"name\": \"Ada\", \"address\": {\"city\": \"Bern\"}})\n4: doc = col.find_one({\"name\": \"Ada\"})\n5: print(doc[\"city\"])",
      "options": [
        {
          "id": "a",
          "text": {
            "de": "Zeile 5: city liegt im eingebetteten Dokument address und muss über doc[\"address\"][\"city\"] gelesen werden",
            "en": "Line 5: city lives inside the embedded document address and must be read via doc[\"address\"][\"city\"]"
          }
        },
        {
          "id": "b",
          "text": {
            "de": "Zeile 4: find_one liefert nur ein Feld statt des ganzen Dokuments",
            "en": "Line 4: find_one returns only one field instead of the whole document"
          }
        },
        {
          "id": "c",
          "text": {
            "de": "Zeile 3: Dokumente mit eingebetteten Dokumenten dürfen nicht eingefügt werden",
            "en": "Line 3: documents with embedded documents must not be inserted"
          }
        },
        {
          "id": "d",
          "text": {
            "de": "Zeile 2: die Collection students muss vorher explizit angelegt werden",
            "en": "Line 2: the collection students must be created explicitly beforehand"
          }
        }
      ],
      "answer": "a",
      "explanation": {
        "de": "Das Feld city steht nicht auf oberster Ebene, sondern im eingebetteten Dokument address, daher löst doc[\"city\"] einen KeyError aus. find_one liefert das ganze Dokument, Verschachtelung ist erlaubt und Collections werden bei Bedarf automatisch angelegt.",
        "en": "The field city is not at the top level but inside the embedded document address, so doc[\"city\"] raises a KeyError. find_one returns the whole document, nesting is allowed and collections are created automatically when needed."
      },
      "tip": {
        "de": "Zeichne die Struktur des gespeicherten Dokuments auf und folge dem Pfad zum Wert.",
        "en": "Sketch the structure of the stored document and follow the path to the value."
      }
    },
    {
      "id": "ch6-fe-202",
      "chapter": 6,
      "section": "6.4 NoSQL in Python",
      "source": {
        "document": "SOTE2 Skript (Softwareentwicklung 2)",
        "section": "6.4 NoSQL in Python / Labor 6 (MongoDB)"
      },
      "type": "fe",
      "difficulty": "ultra",
      "question": {
        "de": "Das Programm soll die Namen und die Gesamtzahl der Studierenden über 17 ausgeben. Es gibt eine nicht leere Namensliste aus, die Gesamtzahl ist aber immer 0. Welche Zeile enthält den Fehler?",
        "en": "The program is supposed to print the names and the total number of students over 17. It prints a non-empty list of names, but the total is always 0. Which line contains the error?"
      },
      "clarification": null,
      "code": "1: from pymongo import MongoClient\n2: col = MongoClient(DB_URL).school.students\n3: cursor = col.find({\"age\": {\"$gt\": 17}})\n4: names = [s[\"name\"] for s in cursor]\n5: print(names, \"total:\", len(list(cursor)))",
      "options": [
        {
          "id": "a",
          "text": {
            "de": "Zeile 5: der Cursor ist durch Zeile 4 bereits aufgebraucht und liefert nichts mehr",
            "en": "Line 5: the cursor was already exhausted by line 4 and yields nothing more"
          }
        },
        {
          "id": "b",
          "text": {
            "de": "Zeile 3: $gt ist kein gültiger Operator für Zahlen",
            "en": "Line 3: $gt is not a valid operator for numbers"
          }
        },
        {
          "id": "c",
          "text": {
            "de": "Zeile 4: eine List Comprehension darf nicht über einen Cursor laufen",
            "en": "Line 4: a list comprehension must not iterate over a cursor"
          }
        },
        {
          "id": "d",
          "text": {
            "de": "Zeile 2: Die Collection muss vor find mit create_collection angelegt werden",
            "en": "Line 2: the collection must be created with create_collection before find"
          }
        }
      ],
      "answer": "a",
      "explanation": {
        "de": "Ein Cursor kann nur einmal durchlaufen werden; nach der List Comprehension in Zeile 4 ist er leer, daher ergibt list(cursor) in Zeile 5 eine leere Liste. Besser verwendet man len(names) oder führt find bzw. count_documents erneut aus.",
        "en": "A cursor can be iterated only once; after the list comprehension in line 4 it is empty, so list(cursor) in line 5 yields an empty list. It is better to use len(names) or to run find or count_documents again."
      },
      "tip": {
        "de": "Was geschieht mit einem Cursor, nachdem man ihn einmal bis zum Ende durchlaufen hat?",
        "en": "What happens to a cursor after it has been iterated once to the end?"
      }
    },
    {
      "id": "ch6-fe-203",
      "chapter": 6,
      "section": "6.4 NoSQL in Python",
      "source": {
        "document": "SOTE2 Skript (Softwareentwicklung 2)",
        "section": "6.4 NoSQL in Python / Labor 6 (MongoDB)"
      },
      "type": "fe",
      "difficulty": "ultra",
      "question": {
        "de": "Das Programm soll Adas Namen ausgeben, bricht aber mit einem TypeError ab, weil doc den Wert None hat. Welche Zeile enthält die eigentliche Ursache?",
        "en": "The program is supposed to print Ada's name but aborts with a TypeError because doc is None. Which line contains the actual cause?"
      },
      "clarification": null,
      "code": "1: from pymongo import MongoClient\n2: col = MongoClient(DB_URL).school.students\n3: result = col.insert_one({\"name\": \"Ada\"})\n4: doc_id = result.inserted_id\n5: doc = col.find_one({\"_id\": str(doc_id)})\n6: print(doc[\"name\"])",
      "options": [
        {
          "id": "a",
          "text": {
            "de": "Zeile 5: die _id wird als String statt als ObjectId verglichen und findet daher nichts",
            "en": "Line 5: the _id is compared as a string instead of an ObjectId and therefore matches nothing"
          }
        },
        {
          "id": "b",
          "text": {
            "de": "Zeile 6: ein Dokument darf nicht mit [\"name\"] gelesen werden",
            "en": "Line 6: a document must not be read with [\"name\"]"
          }
        },
        {
          "id": "c",
          "text": {
            "de": "Zeile 4: inserted_id ist erst nach einem zusätzlichen find verfügbar",
            "en": "Line 4: inserted_id is only available after an additional find"
          }
        },
        {
          "id": "d",
          "text": {
            "de": "Zeile 3: insert_one gibt kein Ergebnisobjekt zurück",
            "en": "Line 3: insert_one does not return a result object"
          }
        }
      ],
      "answer": "a",
      "explanation": {
        "de": "Eine ObjectId ist nicht gleich ihrer String-Darstellung, also trifft der Filter in Zeile 5 kein Dokument und find_one liefert None. Der Absturz zeigt sich erst in Zeile 6, die Ursache liegt aber im Filter; mit {\"_id\": doc_id} funktioniert es.",
        "en": "An ObjectId does not equal its string representation, so the filter in line 5 matches no document and find_one returns None. The crash only shows in line 6, but the cause lies in the filter; with {\"_id\": doc_id} it works."
      },
      "tip": {
        "de": "Vergleiche den Typ des gespeicherten _id-Werts mit dem Typ des Filterwerts.",
        "en": "Compare the type of the stored _id value with the type of the filter value."
      }
    },
    {
      "id": "ch6-fe-204",
      "chapter": 6,
      "section": "6.4 NoSQL in Python",
      "source": {
        "document": "SOTE2 Skript (Softwareentwicklung 2)",
        "section": "6.4 NoSQL in Python / Labor 6 (MongoDB)"
      },
      "type": "fe",
      "difficulty": "ultra",
      "question": {
        "de": "Das Programm soll zwei Dokumente mit demselben Inhalt speichern und die Anzahl ausgeben, bricht aber mit einem DuplicateKeyError ab. In welcher Zeile bricht es ab?",
        "en": "The program is supposed to store two documents with the same content and print the count, but aborts with a DuplicateKeyError. In which line does it abort?"
      },
      "clarification": null,
      "code": "1: from pymongo import MongoClient\n2: col = MongoClient(DB_URL).school.students\n3: template = {\"name\": \"Ada\", \"age\": 21}\n4: col.insert_one(template)\n5: col.insert_one(template)\n6: print(col.count_documents({\"name\": \"Ada\"}))",
      "options": [
        {
          "id": "a",
          "text": {
            "de": "Zeile 5: das Dict trägt nach Zeile 4 bereits die erzeugte _id und wird mit dieser _id erneut eingefügt",
            "en": "Line 5: after line 4 the dict already carries the generated _id and is inserted again with that _id"
          }
        },
        {
          "id": "b",
          "text": {
            "de": "Zeile 4: in eine leere Collection darf nur mit insert_many eingefügt werden",
            "en": "Line 4: into an empty collection, only insert_many may be used"
          }
        },
        {
          "id": "c",
          "text": {
            "de": "Zeile 3: Ein Dict mit zwei Feldern ist als Dokument zu groß",
            "en": "Line 3: a dict with two fields is too large as a document"
          }
        },
        {
          "id": "d",
          "text": {
            "de": "Zeile 6: count_documents darf nicht mit einem Filter aufgerufen werden",
            "en": "Line 6: count_documents must not be called with a filter"
          }
        }
      ],
      "answer": "a",
      "explanation": {
        "de": "insert_one ergänzt die automatisch erzeugte _id im übergebenen Dict. Beim zweiten Einfügen in Zeile 5 existiert diese _id schon in der Collection, daher der DuplicateKeyError; zwei Kopien erhält man z. B. mit dict(template) oder insert_many.",
        "en": "insert_one adds the automatically generated _id to the passed dict. With the second insert in line 5 this _id already exists in the collection, hence the DuplicateKeyError; two copies can be obtained e.g. with dict(template) or insert_many."
      },
      "tip": {
        "de": "Was könnte insert_one am übergebenen Dict verändert haben?",
        "en": "What might insert_one have changed about the dict that was passed in?"
      }
    },
    {
      "id": "ch6-mc-216",
      "chapter": 6,
      "section": "6.5 Im Vergleich: Relationale Datenbanksysteme (RDBMS)",
      "source": {
        "document": "SOTE2 Skript (Softwareentwicklung 2)",
        "section": "6.5 Im Vergleich: Relationale Datenbanksysteme (RDBMS)"
      },
      "type": "mc",
      "difficulty": "easy",
      "question": {
        "de": "Was entspricht in einem relationalen Datenbanksystem laut Skript einer Tabelle?",
        "en": "What does a table correspond to in a relational database system according to the script?"
      },
      "clarification": null,
      "code": null,
      "options": [
        {
          "id": "a",
          "text": {
            "de": "Einem Entitätentyp, z. B. \"Student\"",
            "en": "An entity type, e.g. \"Student\""
          }
        },
        {
          "id": "b",
          "text": {
            "de": "Einer einzelnen Entität, z. B. dem Studenten \"Max Müller\"",
            "en": "A single entity, e.g. the student \"Max Müller\""
          }
        },
        {
          "id": "c",
          "text": {
            "de": "Einem Attribut, z. B. dem Alter",
            "en": "An attribute, e.g. the age"
          }
        },
        {
          "id": "d",
          "text": {
            "de": "Einem Primärschlüssel",
            "en": "A primary key"
          }
        }
      ],
      "answer": "a",
      "explanation": {
        "de": "Eine Tabelle steht für einen Entitätentyp, ihre Zeilen für einzelne Entitäten und ihre Spalten für die Attribute. Der Primärschlüssel identifiziert eine Zeile eindeutig.",
        "en": "A table stands for an entity type, its rows for individual entities and its columns for the attributes. The primary key identifies a row uniquely."
      },
      "tip": {
        "de": "Eine Tabelle sammelt viele gleichartige Datensätze.",
        "en": "A table collects many records of the same kind."
      }
    },
    {
      "id": "ch6-tf-208",
      "chapter": 6,
      "section": "6.5 Im Vergleich: Relationale Datenbanksysteme (RDBMS)",
      "source": {
        "document": "SOTE2 Skript (Softwareentwicklung 2)",
        "section": "6.5 Im Vergleich: Relationale Datenbanksysteme (RDBMS)"
      },
      "type": "tf",
      "difficulty": "easy",
      "question": {
        "de": "Die Spalten einer relationalen Tabelle entsprechen den Eigenschaften (Attributen) der Entitäten, z. B. Name, Alter oder Matrikelnummer.",
        "en": "The columns of a relational table correspond to the properties (attributes) of the entities, e.g. name, age or student ID."
      },
      "clarification": null,
      "code": null,
      "answer": true,
      "explanation": {
        "de": "Laut Skript entsprechen Spalten den Entitäten-Eigenschaften, also den Attributen. In MongoDB heißt das Gegenstück Feld.",
        "en": "According to the script, columns correspond to the entity properties, i.e. the attributes. In MongoDB the counterpart is called a field."
      },
      "tip": {
        "de": "Denke an die Beispiele Name, Alter und Matrikelnummer einer Studentin.",
        "en": "Think of the examples name, age and student ID of a student."
      }
    },
    {
      "id": "ch6-fib-207",
      "chapter": 6,
      "section": "6.5 Im Vergleich: Relationale Datenbanksysteme (RDBMS)",
      "source": {
        "document": "SOTE2 Skript (Softwareentwicklung 2)",
        "section": "6.5 Im Vergleich: Relationale Datenbanksysteme (RDBMS)"
      },
      "type": "fib",
      "difficulty": "easy",
      "question": {
        "de": "Ergänze die beiden SQL-Schlüsselwörter, damit der Name der Person mit der id 42 aus der Tabelle Person gelesen wird.",
        "en": "Fill in the two SQL keywords so that the name of the person with id 42 is read from the table Person."
      },
      "clarification": {
        "de": "Die Schlüsselwörter dürfen groß- oder kleingeschrieben werden.",
        "en": "The keywords may be written in upper or lower case."
      },
      "code": "SELECT personal ____ Person ____ id = 42;",
      "answer": null,
      "blanks": [
        {
          "accepted": [
            "FROM"
          ],
          "caseSensitive": false
        },
        {
          "accepted": [
            "WHERE"
          ],
          "caseSensitive": false
        }
      ],
      "explanation": {
        "de": "FROM nennt die Tabelle, aus der gelesen wird, und WHERE schränkt die Zeilen auf die Bedingung id = 42 ein. SELECT wählt die Spalten aus.",
        "en": "FROM names the table to read from, and WHERE restricts the rows to the condition id = 42. SELECT chooses the columns."
      },
      "tip": {
        "de": "Erst kommt die Tabelle, dann die Bedingung.",
        "en": "First comes the table, then the condition."
      }
    },
    {
      "id": "ch6-fib-208",
      "chapter": 6,
      "section": "6.5 Im Vergleich: Relationale Datenbanksysteme (RDBMS)",
      "source": {
        "document": "SOTE2 Skript (Softwareentwicklung 2)",
        "section": "6.5 Im Vergleich: Relationale Datenbanksysteme (RDBMS)"
      },
      "type": "fib",
      "difficulty": "easy",
      "question": {
        "de": "Ergänze die Funktion des sqlite3-Moduls, die die Verbindung zur Datenbankdatei herstellt.",
        "en": "Fill in the function of the sqlite3 module that establishes the connection to the database file."
      },
      "clarification": {
        "de": "Gesucht ist ein Funktionsname ohne Klammern.",
        "en": "A function name without parentheses is expected."
      },
      "code": "import sqlite3\nconnection = sqlite3.____(\"personal.db\")\ncursor = connection.cursor()",
      "answer": null,
      "blanks": [
        {
          "accepted": [
            "connect"
          ],
          "caseSensitive": true
        }
      ],
      "explanation": {
        "de": "sqlite3.connect öffnet die Datenbankdatei und liefert ein Connection-Objekt, von dem man mit cursor() einen Cursor erhält. Wie bei MongoClient steht am Anfang immer der Verbindungsaufbau.",
        "en": "sqlite3.connect opens the database file and returns a connection object from which cursor() provides a cursor. As with MongoClient, the connection setup always comes first."
      },
      "tip": {
        "de": "Das Wort beschreibt das, was man mit einer Datenbank zuerst tut.",
        "en": "The word describes what you do first with a database."
      }
    },
    {
      "id": "ch6-fib-209",
      "chapter": 6,
      "section": "6.5 Im Vergleich: Relationale Datenbanksysteme (RDBMS)",
      "source": {
        "document": "SOTE2 Skript (Softwareentwicklung 2)",
        "section": "6.5 Im Vergleich: Relationale Datenbanksysteme (RDBMS)"
      },
      "type": "fib",
      "difficulty": "medium",
      "question": {
        "de": "Ergänze die Methode, mit der der Cursor nach dem Auslesen der Ergebnisse geschlossen wird.",
        "en": "Fill in the method that closes the cursor after the results have been read."
      },
      "clarification": {
        "de": "Gesucht ist ein Methodenname ohne Klammern.",
        "en": "A method name without parentheses is expected."
      },
      "code": "results = cursor.fetchall()\ncursor.____()\nconnection.close()",
      "answer": null,
      "blanks": [
        {
          "accepted": [
            "close"
          ],
          "caseSensitive": true
        }
      ],
      "explanation": {
        "de": "Cursor und Verbindung werden nach Gebrauch jeweils mit close() freigegeben, so wie im Beispiel des Skripts. Die Ergebnisse bleiben in der Variable results erhalten.",
        "en": "Cursor and connection are each released with close() after use, as in the example of the script. The results remain available in the variable results."
      },
      "tip": {
        "de": "Die letzte Zeile verwendet dieselbe Methode für die Verbindung.",
        "en": "The last line uses the same method for the connection."
      }
    },
    {
      "id": "ch6-fib-210",
      "chapter": 6,
      "section": "6.5 Im Vergleich: Relationale Datenbanksysteme (RDBMS)",
      "source": {
        "document": "SOTE2 Skript (Softwareentwicklung 2)",
        "section": "6.5 Im Vergleich: Relationale Datenbanksysteme (RDBMS)"
      },
      "type": "fib",
      "difficulty": "hard",
      "question": {
        "de": "Die Query soll den Wert nicht per Text-Konkatenation, sondern über einen Platzhalter ? übergeben. Ergänze das Argument, das für den Platzhalter eingesetzt wird.",
        "en": "The query is to pass the value via a placeholder ? instead of text concatenation. Fill in the argument that is substituted for the placeholder."
      },
      "clarification": {
        "de": "Gesucht ist ein Variablenname aus der Funktionssignatur.",
        "en": "A variable name from the function signature is expected."
      },
      "code": "def get_name(database_file, person_id):\n    connection = sqlite3.connect(database_file)\n    cursor = connection.cursor()\n    cursor.execute(\"SELECT personal FROM Person WHERE id = ?\", (____,))\n    return cursor.fetchall()[0][0]",
      "answer": null,
      "blanks": [
        {
          "accepted": [
            "person_id"
          ],
          "caseSensitive": true
        }
      ],
      "explanation": {
        "de": "Die Werte für die Platzhalter werden als Tupel übergeben, hier mit person_id als einzigem Element, und der Treiber setzt sie sicher ein. Die Konkatenation im Skript-Beispiel ist dagegen anfällig für SQL-Injection.",
        "en": "The values for the placeholders are passed as a tuple, here with person_id as its only element, and the driver inserts them safely. The concatenation in the script example, by contrast, is prone to SQL injection."
      },
      "tip": {
        "de": "Welcher Wert soll in der Bedingung id = ? stehen?",
        "en": "Which value is meant to appear in the condition id = ?"
      }
    },
    {
      "id": "ch6-mc-217",
      "chapter": 6,
      "section": "6.5 Im Vergleich: Relationale Datenbanksysteme (RDBMS)",
      "source": {
        "document": "SOTE2 Skript (Softwareentwicklung 2)",
        "section": "6.5 Im Vergleich: Relationale Datenbanksysteme (RDBMS)"
      },
      "type": "mc",
      "difficulty": "medium",
      "question": {
        "de": "Welche Eigenschaft von ACID garantiert, dass eine Transaktion entweder vollständig oder gar nicht ausgeführt wird?",
        "en": "Which property of ACID guarantees that a transaction is executed either completely or not at all?"
      },
      "clarification": null,
      "code": null,
      "options": [
        {
          "id": "a",
          "text": {
            "de": "Atomicity",
            "en": "Atomicity"
          }
        },
        {
          "id": "b",
          "text": {
            "de": "Consistency",
            "en": "Consistency"
          }
        },
        {
          "id": "c",
          "text": {
            "de": "Isolation",
            "en": "Isolation"
          }
        },
        {
          "id": "d",
          "text": {
            "de": "Durability",
            "en": "Durability"
          }
        }
      ],
      "answer": "a",
      "explanation": {
        "de": "Atomicity bedeutet alles oder nichts bei einer Transaktion. Consistency erhält die Gültigkeit der Daten, Isolation trennt parallele Transaktionen voneinander und Durability sichert die dauerhafte Speicherung nach dem Abschluss.",
        "en": "Atomicity means all or nothing for a transaction. Consistency preserves the validity of the data, isolation separates concurrent transactions from each other and durability ensures permanent storage after completion."
      },
      "tip": {
        "de": "Ein Atom gilt als unteilbar.",
        "en": "An atom is considered indivisible."
      }
    },
    {
      "id": "ch6-mc-218",
      "chapter": 6,
      "section": "6.5 Im Vergleich: Relationale Datenbanksysteme (RDBMS)",
      "source": {
        "document": "SOTE2 Skript (Softwareentwicklung 2)",
        "section": "6.5 Im Vergleich: Relationale Datenbanksysteme (RDBMS)"
      },
      "type": "mc",
      "difficulty": "medium",
      "question": {
        "de": "Welches der folgenden Beispiele ist eine Entität (nicht ein Entitätentyp oder Attribut)?",
        "en": "Which of the following examples is an entity (not an entity type or attribute)?"
      },
      "clarification": {
        "de": "Laut Skript ist eine Entität ein individuell identifizierbares Objekt.",
        "en": "According to the script, an entity is an individually identifiable object."
      },
      "code": null,
      "options": [
        {
          "id": "a",
          "text": {
            "de": "Der Student \"Max Müller\"",
            "en": "The student \"Max Müller\""
          }
        },
        {
          "id": "b",
          "text": {
            "de": "Student",
            "en": "Student"
          }
        },
        {
          "id": "c",
          "text": {
            "de": "Matrikelnummer",
            "en": "Student ID"
          }
        },
        {
          "id": "d",
          "text": {
            "de": "Name",
            "en": "Name"
          }
        }
      ],
      "answer": "a",
      "explanation": {
        "de": "Der konkrete Student Max Müller ist ein einzelnes, identifizierbares Objekt und damit eine Entität. \"Student\" ist der Entitätentyp, Matrikelnummer und Name sind Attribute.",
        "en": "The concrete student Max Müller is a single identifiable object and thus an entity. \"Student\" is the entity type, student ID and name are attributes."
      },
      "tip": {
        "de": "Suche den Eintrag, der genau eine bestimmte Person bezeichnet.",
        "en": "Look for the entry that denotes exactly one specific person."
      }
    },
    {
      "id": "ch6-mc-219",
      "chapter": 6,
      "section": "6.5 Im Vergleich: Relationale Datenbanksysteme (RDBMS)",
      "source": {
        "document": "SOTE2 Skript (Softwareentwicklung 2)",
        "section": "6.5 Im Vergleich: Relationale Datenbanksysteme (RDBMS)"
      },
      "type": "mc",
      "difficulty": "hard",
      "question": {
        "de": "Ein Zahlungssystem bucht Überweisungen zwischen Konten. Die Daten sind stark strukturiert, jede Überweisung muss vollständig und konsistent ausgeführt werden. Welche Datenbank liegt laut Konsistenzmodellen im Skript am nächsten?",
        "en": "A payment system books transfers between accounts. The data is highly structured, and every transfer must be executed completely and consistently. Which database is closest according to the consistency models in the script?"
      },
      "clarification": null,
      "code": null,
      "options": [
        {
          "id": "a",
          "text": {
            "de": "Ein relationales DBMS mit ACID-Transaktionen",
            "en": "A relational DBMS with ACID transactions"
          }
        },
        {
          "id": "b",
          "text": {
            "de": "Ein Key-value Store, weil BASE ohnehin immer sofort konsistent ist",
            "en": "A key-value store, because BASE is always immediately consistent anyway"
          }
        },
        {
          "id": "c",
          "text": {
            "de": "Eine Dokumentendatenbank, weil sie schema-less ist",
            "en": "A document database, because it is schema-less"
          }
        },
        {
          "id": "d",
          "text": {
            "de": "Eine Graphdatenbank, weil Konten Beziehungen haben",
            "en": "A graph database, because accounts have relationships"
          }
        }
      ],
      "answer": "a",
      "explanation": {
        "de": "ACID (Atomicity, Consistency, Isolation, Durability) wird bei relationalen DBMS genannt und passt zu strukturierten Daten mit strengen Konsistenzanforderungen. BASE bedeutet dagegen Eventually Consistent, und Schemalosigkeit oder Beziehungen ersetzen keine Transaktionsgarantien.",
        "en": "ACID (Atomicity, Consistency, Isolation, Durability) is named for relational DBMS and fits structured data with strict consistency requirements. BASE, by contrast, means eventually consistent, and schema-lessness or relationships do not replace transaction guarantees."
      },
      "tip": {
        "de": "Zwei Anforderungen im Text verweisen direkt auf eine der beiden Konsistenzabkürzungen.",
        "en": "Two requirements in the text point directly to one of the two consistency abbreviations."
      }
    },
    {
      "id": "ch6-mc-220",
      "chapter": 6,
      "section": "6.5 Im Vergleich: Relationale Datenbanksysteme (RDBMS)",
      "source": {
        "document": "SOTE2 Skript (Softwareentwicklung 2)",
        "section": "6.5 Im Vergleich: Relationale Datenbanksysteme (RDBMS)"
      },
      "type": "mc",
      "difficulty": "hard",
      "question": {
        "de": "Die Tabelle Person hat genau eine Zeile mit id 42. Was gibt der folgende Code aus?",
        "en": "The table Person has exactly one row with id 42. What does the following code print?"
      },
      "clarification": {
        "de": "fetchall liefert eine Liste von Tupeln, ein Tupel pro Ergebniszeile. Die Spalte personal enthält den Text Max Müller.",
        "en": "fetchall returns a list of tuples, one tuple per result row. The column personal contains the text Max Müller."
      },
      "code": "cursor.execute(\"SELECT personal FROM Person WHERE id = 42\")\nresults = cursor.fetchall()\nprint(results[0][0])",
      "options": [
        {
          "id": "a",
          "text": {
            "de": "Max Müller",
            "en": "Max Müller"
          }
        },
        {
          "id": "b",
          "text": {
            "de": "('Max Müller',)",
            "en": "('Max Müller',)"
          }
        },
        {
          "id": "c",
          "text": {
            "de": "[('Max Müller',)]",
            "en": "[('Max Müller',)]"
          }
        },
        {
          "id": "d",
          "text": {
            "de": "Einen IndexError",
            "en": "An IndexError"
          }
        }
      ],
      "answer": "a",
      "explanation": {
        "de": "results ist [('Max Müller',)]; results[0] ist das Tupel der ersten Zeile und results[0][0] dessen erste Spalte, also der reine Text. Ein IndexError träte nur bei leerem Ergebnis auf.",
        "en": "results is [('Max Müller',)]; results[0] is the tuple of the first row and results[0][0] its first column, i.e. the plain text. An IndexError would only occur for an empty result."
      },
      "tip": {
        "de": "Wende die beiden Indizes nacheinander an: erst die Zeile, dann die Spalte.",
        "en": "Apply the two indices one after the other: first the row, then the column."
      }
    },
    {
      "id": "ch6-ms-207",
      "chapter": 6,
      "section": "6.5 Im Vergleich: Relationale Datenbanksysteme (RDBMS)",
      "source": {
        "document": "SOTE2 Skript (Softwareentwicklung 2)",
        "section": "6.5 Im Vergleich: Relationale Datenbanksysteme (RDBMS)"
      },
      "type": "ms",
      "difficulty": "hard",
      "question": {
        "de": "Welche ZWEI der folgenden Begriffe gehören zum Konsistenzmodell BASE?",
        "en": "Which TWO of the following terms belong to the consistency model BASE?"
      },
      "clarification": null,
      "code": null,
      "options": [
        {
          "id": "a",
          "text": {
            "de": "Basically Available",
            "en": "Basically Available"
          }
        },
        {
          "id": "b",
          "text": {
            "de": "Soft State",
            "en": "Soft State"
          }
        },
        {
          "id": "c",
          "text": {
            "de": "Isolation",
            "en": "Isolation"
          }
        },
        {
          "id": "d",
          "text": {
            "de": "Durability",
            "en": "Durability"
          }
        }
      ],
      "answer": [
        "a",
        "b"
      ],
      "explanation": {
        "de": "BASE steht für Basically Available, Soft State und Eventually Consistent. Isolation und Durability sind Teile von ACID.",
        "en": "BASE stands for Basically Available, Soft State and Eventually Consistent. Isolation and durability are parts of ACID."
      },
      "tip": {
        "de": "Zwei Begriffe stammen aus der Abkürzung ACID.",
        "en": "Two terms come from the abbreviation ACID."
      }
    },
    {
      "id": "ch6-ms-208",
      "chapter": 6,
      "section": "6.5 Im Vergleich: Relationale Datenbanksysteme (RDBMS)",
      "source": {
        "document": "SOTE2 Skript (Softwareentwicklung 2)",
        "section": "6.5 Im Vergleich: Relationale Datenbanksysteme (RDBMS)"
      },
      "type": "ms",
      "difficulty": "ultra",
      "question": {
        "de": "Welche ZWEI der folgenden Aussagen zum Vergleich von RDBMS und MongoDB sind korrekt?",
        "en": "Which TWO of the following statements comparing RDBMS and MongoDB are correct?"
      },
      "clarification": null,
      "code": null,
      "options": [
        {
          "id": "a",
          "text": {
            "de": "Eine Collection kann Dokumente mit unterschiedlichen Feldern enthalten, während alle Zeilen einer Tabelle dieselben Spalten haben",
            "en": "A collection can contain documents with different fields, whereas all rows of a table have the same columns"
          }
        },
        {
          "id": "b",
          "text": {
            "de": "Gleichnamige Felder verschiedener Dokumente einer Collection müssen denselben Datentyp haben",
            "en": "Fields with the same name in different documents of a collection must have the same data type"
          }
        },
        {
          "id": "c",
          "text": {
            "de": "Eine Tabelle steht für einen Entitätentyp, jede Zeile entspricht einer Entität",
            "en": "A table stands for an entity type, each row corresponds to an entity"
          }
        },
        {
          "id": "d",
          "text": {
            "de": "Collections werden in MongoDB mit dem SQL-Schlüsselwort JOIN verknüpft",
            "en": "Collections in MongoDB are linked with the SQL keyword JOIN"
          }
        }
      ],
      "answer": [
        "a",
        "c"
      ],
      "explanation": {
        "de": "Tabellen haben ein festes Spaltenschema und stehen für einen Entitätentyp, Collections dagegen sind schemalos. Laut Skript können gleichnamige Felder sogar verschiedene Datentypen enthalten, und MongoDB verwendet statt Joins eingebettete Dokumente oder Links (DBRef).",
        "en": "Tables have a fixed column schema and stand for an entity type, whereas collections are schema-less. According to the script, fields with the same name can even contain different data types, and MongoDB uses embedded documents or links (DBRef) instead of joins."
      },
      "tip": {
        "de": "Prüfe jede Aussage getrennt gegen das, was du über Schema und Verknüpfung weißt.",
        "en": "Check each statement separately against what you know about schema and linking."
      }
    }
];
