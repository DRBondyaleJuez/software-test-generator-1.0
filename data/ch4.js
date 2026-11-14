// SOTE2 question bank - chapter 4
const QUESTIONS_CH4 = [
  {
    "id": "ch4-mc-001",
    "chapter": 4,
    "section": "4.6 Syntax und Befehle für Dateien",
    "source": {
      "document": "SOTE2 Skript (Softwareentwicklung 2)",
      "section": "4.6 Syntax und Befehle für Dateien / Labor 4 (Dateien und Datensätze)"
    },
    "type": "mc",
    "difficulty": "easy",
    "question": {
      "de": "Welcher Modus von open() öffnet eine Textdatei zum Schreiben und überschreibt dabei vorhandenen Inhalt?",
      "en": "Which mode of open() opens a text file for writing and overwrites existing content?"
    },
    "clarification": {
      "de": "Die Datei soll bei Bedarf neu angelegt werden.",
      "en": "The file should be created if necessary."
    },
    "code": null,
    "options": [
      {
        "id": "a",
        "text": {
          "de": "\"r\"",
          "en": "\"r\""
        }
      },
      {
        "id": "b",
        "text": {
          "de": "\"w\"",
          "en": "\"w\""
        }
      },
      {
        "id": "c",
        "text": {
          "de": "\"a\"",
          "en": "\"a\""
        }
      },
      {
        "id": "d",
        "text": {
          "de": "\"rb\"",
          "en": "\"rb\""
        }
      }
    ],
    "answer": "b",
    "explanation": {
      "de": "Mit \"w\" wird die Datei angelegt oder ihr Inhalt gelöscht und neu geschrieben. \"r\" liest nur, \"a\" hängt am Ende an, und \"rb\" liest binär.",
      "en": "With \"w\" the file is created or its content is discarded and rewritten. \"r\" only reads, \"a\" appends at the end, and \"rb\" reads in binary mode."
    },
    "tip": {
      "de": "Welcher Buchstabe steht für write?",
      "en": "Which letter stands for write?"
    }
  },
  {
    "id": "ch4-tf-001",
    "chapter": 4,
    "section": "4.4 Pickles",
    "source": {
      "document": "SOTE2 Skript (Softwareentwicklung 2)",
      "section": "4.4 Pickles"
    },
    "type": "tf",
    "difficulty": "medium",
    "question": {
      "de": "Wahr oder falsch: Der folgende Code speichert das Dictionary erfolgreich per pickle in die Datei.",
      "en": "True or false: The following code successfully saves the dictionary to the file using pickle."
    },
    "clarification": {
      "de": "Es ist Python 3 gemeint; die Datei ist zuvor nicht vorhanden.",
      "en": "Python 3 is meant; the file does not exist beforehand."
    },
    "code": "import pickle\ndata = {\"a\": 1}\nwith open(\"data.pkl\", \"w\") as f:\n    pickle.dump(data, f)",
    "answer": false,
    "explanation": {
      "de": "pickle erzeugt Bytes und braucht daher eine im Binärmodus geöffnete Datei (\"wb\"). Mit dem Textmodus \"w\" wird beim Schreiben ein TypeError ausgelöst.",
      "en": "pickle produces bytes and therefore needs a file opened in binary mode (\"wb\"). With text mode \"w\" a TypeError is raised when writing."
    },
    "tip": {
      "de": "Welche Art von Daten schreibt pickle: Text oder Bytes?",
      "en": "What kind of data does pickle write: text or bytes?"
    }
  },
  {
    "id": "ch4-fib-001",
    "chapter": 4,
    "section": "4.5 Modul os",
    "source": {
      "document": "SOTE2 Skript (Softwareentwicklung 2)",
      "section": "4.5 Modul os / Labor 4 (Dateien und Datensätze)"
    },
    "type": "fib",
    "difficulty": "medium",
    "question": {
      "de": "Ergänze den Code so, dass die Datei nur gelöscht wird, wenn sie existiert.",
      "en": "Complete the code so that the file is only deleted if it exists."
    },
    "clarification": {
      "de": "Es werden die Namen von Funktionen des Moduls os bzw. os.path gesucht.",
      "en": "The names of functions of the os module and os.path are expected."
    },
    "code": "import os\nif os.path.____(\"data.txt\"):\n    os.____(\"data.txt\")",
    "answer": null,
    "blanks": [
      {
        "accepted": [
          "exists",
          "isfile"
        ],
        "caseSensitive": true
      },
      {
        "accepted": [
          "remove",
          "unlink"
        ],
        "caseSensitive": true
      }
    ],
    "explanation": {
      "de": "os.path.exists (alternativ isfile) prüft, ob der Pfad existiert; os.remove (alternativ os.unlink) löscht die Datei. Ohne die Prüfung würde ein FileNotFoundError entstehen, falls die Datei fehlt.",
      "en": "os.path.exists (alternatively isfile) checks whether the path exists; os.remove (alternatively os.unlink) deletes the file. Without the check a FileNotFoundError would occur if the file is missing."
    },
    "tip": {
      "de": "Eine Funktion prüft einen Pfad, die andere entfernt eine Datei.",
      "en": "One function checks a path, the other removes a file."
    }
  },
  {
    "id": "ch4-ms-001",
    "chapter": 4,
    "section": "4.6 Syntax und Befehle für Dateien",
    "source": {
      "document": "SOTE2 Skript (Softwareentwicklung 2)",
      "section": "4.6 Syntax und Befehle für Dateien / Labor 4 (Dateien und Datensätze)"
    },
    "type": "ms",
    "difficulty": "ultra",
    "question": {
      "de": "Die Datei a.txt enthält genau die drei Zeilen A, B und C (jeweils mit Zeilenumbruch \\n am Ende). Welche Aussagen über den Zustand nach Ausführung des Codes sind richtig? Wähle alle zutreffenden aus.",
      "en": "The file a.txt contains exactly the three lines A, B and C (each ending with a newline \\n). Which statements about the state after running the code are correct? Select all that apply."
    },
    "clarification": null,
    "code": "with open(\"a.txt\", \"r\") as f:\n    first = f.readline()\n    rest = f.read()\nprint(f.closed)",
    "options": [
      {
        "id": "a",
        "text": {
          "de": "first hat den Wert \"A\\n\".",
          "en": "first has the value \"A\\n\"."
        }
      },
      {
        "id": "b",
        "text": {
          "de": "rest hat den Wert \"B\\nC\\n\".",
          "en": "rest has the value \"B\\nC\\n\"."
        }
      },
      {
        "id": "c",
        "text": {
          "de": "print(f.closed) gibt True aus.",
          "en": "print(f.closed) prints True."
        }
      },
      {
        "id": "d",
        "text": {
          "de": "print(f.closed) löst einen ValueError aus.",
          "en": "print(f.closed) raises a ValueError."
        }
      },
      {
        "id": "e",
        "text": {
          "de": "first hat den Wert \"A\" ohne Zeilenumbruch.",
          "en": "first has the value \"A\" without a newline."
        }
      }
    ],
    "answer": [
      "a",
      "b",
      "c"
    ],
    "explanation": {
      "de": "readline() liefert die erste Zeile inklusive \\n, read() danach den Rest ab der aktuellen Position. Nach dem with-Block ist die Datei geschlossen, das Attribut closed ist aber weiterhin lesbar und True; ein ValueError tritt dabei nicht auf.",
      "en": "readline() returns the first line including \\n, read() then returns the rest from the current position. After the with block the file is closed, but the attribute closed can still be read and is True; no ValueError occurs."
    },
    "tip": {
      "de": "Überlege, wo der Dateizeiger nach readline() steht und was with am Ende tut.",
      "en": "Think about where the file pointer is after readline() and what with does at the end."
    }
  }
];
