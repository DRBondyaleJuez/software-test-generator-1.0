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
    }
];
