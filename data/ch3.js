// SOTE2 question bank - chapter 3
const QUESTIONS_CH3 = [
  {
    "id": "ch3-mc-001",
    "chapter": 3,
    "section": "3.2 Dictionaries",
    "source": {
      "document": "SOTE2 Skript (Softwareentwicklung 2)",
      "section": "3.2 Dictionaries / Labor 2 (Dictionaries)"
    },
    "type": "mc",
    "difficulty": "easy",
    "question": {
      "de": "Was passiert bei Ausführung des folgenden Codes?",
      "en": "What happens when the following code is executed?"
    },
    "clarification": {
      "de": "Das Dictionary enthält nur den Schlüssel \"a\".",
      "en": "The dictionary only contains the key \"a\"."
    },
    "code": "d = {\"a\": 1}\nprint(d[\"b\"])",
    "options": [
      {
        "id": "a",
        "text": {
          "de": "Es wird None ausgegeben.",
          "en": "None is printed."
        }
      },
      {
        "id": "b",
        "text": {
          "de": "Es wird 0 ausgegeben.",
          "en": "0 is printed."
        }
      },
      {
        "id": "c",
        "text": {
          "de": "Es wird ein KeyError ausgelöst.",
          "en": "A KeyError is raised."
        }
      },
      {
        "id": "d",
        "text": {
          "de": "Der Schlüssel \"b\" wird automatisch mit leerem Wert angelegt.",
          "en": "The key \"b\" is automatically created with an empty value."
        }
      }
    ],
    "answer": "c",
    "explanation": {
      "de": "Der Zugriff mit eckigen Klammern auf einen nicht vorhandenen Schlüssel löst einen KeyError aus. None würde nur bei d.get(\"b\") zurückgegeben; Python legt Schlüssel beim Lesen nie automatisch an.",
      "en": "Accessing a missing key with square brackets raises a KeyError. None would only be returned by d.get(\"b\"); Python never creates keys automatically when reading."
    },
    "tip": {
      "de": "Vergleiche den Zugriff mit [] und die Methode get.",
      "en": "Compare access with [] and the get method."
    }
  },
  {
    "id": "ch3-fib-001",
    "chapter": 3,
    "section": "3.2 Dictionaries",
    "source": {
      "document": "SOTE2 Skript (Softwareentwicklung 2)",
      "section": "3.2 Dictionaries / Labor 2 (Dictionaries)"
    },
    "type": "fib",
    "difficulty": "medium",
    "question": {
      "de": "Ergänze die fehlende Methode, sodass für einen fehlenden Schlüssel der Wert 0 statt eines Fehlers verwendet wird.",
      "en": "Fill in the missing method so that the value 0 is used instead of an error when the key is missing."
    },
    "clarification": {
      "de": "Gesucht ist der reine Methodenname ohne Klammern.",
      "en": "The plain method name without parentheses is expected."
    },
    "code": "counts = {\"apple\": 3}\nn = counts.____(\"pear\", 0)\nprint(n)  # prints 0",
    "answer": null,
    "blanks": [
      {
        "accepted": [
          "get",
          ".get"
        ],
        "caseSensitive": true
      }
    ],
    "explanation": {
      "de": "dict.get(key, default) liefert den Wert zum Schlüssel oder den angegebenen Standardwert, wenn der Schlüssel fehlt. So wird kein KeyError ausgelöst und das Dictionary bleibt unverändert.",
      "en": "dict.get(key, default) returns the value for the key or the given default if the key is missing. No KeyError is raised and the dictionary stays unchanged."
    },
    "tip": {
      "de": "Welche Dictionary-Methode nimmt als zweites Argument einen Rückfallwert?",
      "en": "Which dictionary method takes a fallback value as its second argument?"
    }
  },
  {
    "id": "ch3-mc-002",
    "chapter": 3,
    "section": "3.2 Dictionaries",
    "source": {
      "document": "SOTE2 Skript (Softwareentwicklung 2)",
      "section": "3.2 Dictionaries / Labor 2 (Dictionaries)"
    },
    "type": "mc",
    "difficulty": "hard",
    "question": {
      "de": "Welche Ausgabe erzeugt der folgende Code?",
      "en": "What output does the following code produce?"
    },
    "clarification": {
      "de": "Beachte den Unterschied zwischen Zuweisung und Kopie.",
      "en": "Note the difference between assignment and copy."
    },
    "code": "a = {\"x\": 1, \"y\": 2}\nb = a\nb[\"z\"] = 3\nc = a.copy()\nc[\"x\"] = 99\nprint(len(a), a[\"x\"])",
    "options": [
      {
        "id": "a",
        "text": {
          "de": "2 1",
          "en": "2 1"
        }
      },
      {
        "id": "b",
        "text": {
          "de": "3 1",
          "en": "3 1"
        }
      },
      {
        "id": "c",
        "text": {
          "de": "3 99",
          "en": "3 99"
        }
      },
      {
        "id": "d",
        "text": {
          "de": "2 99",
          "en": "2 99"
        }
      }
    ],
    "answer": "b",
    "explanation": {
      "de": "b = a erzeugt keine Kopie, sondern einen zweiten Namen für dasselbe Dictionary; daher enthält a nach b[\"z\"] = 3 drei Einträge. c = a.copy() ist eine eigenständige (flache) Kopie, die Änderung c[\"x\"] = 99 betrifft a nicht, also bleibt a[\"x\"] gleich 1.",
      "en": "b = a does not create a copy but a second name for the same dictionary; therefore a has three entries after b[\"z\"] = 3. c = a.copy() is an independent (shallow) copy, so c[\"x\"] = 99 does not affect a and a[\"x\"] stays 1."
    },
    "tip": {
      "de": "Frage dich bei jeder Zeile, welches Dictionary-Objekt tatsächlich verändert wird.",
      "en": "For each line, ask which dictionary object is actually modified."
    }
  },
  {
    "id": "ch3-ms-001",
    "chapter": 3,
    "section": "3.3 JSON",
    "source": {
      "document": "SOTE2 Skript (Softwareentwicklung 2)",
      "section": "3.3 JSON / Labor 3 (JSON)"
    },
    "type": "ms",
    "difficulty": "medium",
    "question": {
      "de": "Welche der folgenden Aussagen über JSON und das Python-Modul json sind richtig? Wähle alle zutreffenden aus.",
      "en": "Which of the following statements about JSON and the Python module json are correct? Select all that apply."
    },
    "clarification": {
      "de": "Gemeint ist das Standardformat JSON, wie es das Modul json verarbeitet.",
      "en": "This refers to the standard JSON format as processed by the json module."
    },
    "code": null,
    "options": [
      {
        "id": "a",
        "text": {
          "de": "Schlüssel in JSON-Objekten sind Zeichenketten in doppelten Anführungszeichen.",
          "en": "Keys in JSON objects are strings in double quotes."
        }
      },
      {
        "id": "b",
        "text": {
          "de": "json.dumps(obj) liefert eine Zeichenkette (str).",
          "en": "json.dumps(obj) returns a string (str)."
        }
      },
      {
        "id": "c",
        "text": {
          "de": "JSON erlaubt Kommentare mit #.",
          "en": "JSON allows comments starting with #."
        }
      },
      {
        "id": "d",
        "text": {
          "de": "Zeichenketten dürfen in JSON wahlweise in einfachen Anführungszeichen stehen.",
          "en": "Strings in JSON may optionally be written in single quotes."
        }
      },
      {
        "id": "e",
        "text": {
          "de": "Der Python-Wert None wird als null serialisiert.",
          "en": "The Python value None is serialized as null."
        }
      }
    ],
    "answer": [
      "a",
      "b",
      "e"
    ],
    "explanation": {
      "de": "JSON verlangt doppelte Anführungszeichen für Schlüssel und Strings, dumps gibt einen str zurück, und None wird zu null. Kommentare sieht das Format nicht vor, und einfache Anführungszeichen sind kein gültiges JSON.",
      "en": "JSON requires double quotes for keys and strings, dumps returns a str, and None becomes null. The format has no comments, and single quotes are not valid JSON."
    },
    "tip": {
      "de": "Vergleiche die JSON-Syntax mit Python-Dictionary-Literalen, wo sie sich unterscheidet.",
      "en": "Compare JSON syntax with Python dictionary literals where they differ."
    }
  },
  {
    "id": "ch3-fe-001",
    "chapter": 3,
    "section": "3.3 JSON",
    "source": {
      "document": "SOTE2 Skript (Softwareentwicklung 2)",
      "section": "3.3 JSON / Labor 3 (JSON)"
    },
    "type": "fe",
    "difficulty": "ultra",
    "question": {
      "de": "In welcher Zeile liegt der Fehler, der beim Ausführen zu einer Exception führt?",
      "en": "Which line contains the error that leads to an exception when run?"
    },
    "clarification": null,
    "code": "1: import json\n2: data = {\"name\": \"Ada\", \"langs\": [\"Python\", \"C\"]}\n3: text = json.dumps(data)\n4: with open(\"out.json\", \"w\") as f:\n5:     f.write(json.loads(text))\n6: print(\"saved\")",
    "options": [
      {
        "id": "a",
        "text": {
          "de": "Zeile 2: Eine Liste darf nicht in einem Dictionary stehen.",
          "en": "Line 2: A list must not be inside a dictionary."
        }
      },
      {
        "id": "b",
        "text": {
          "de": "Zeile 3: Es müsste json.dump statt json.dumps heißen.",
          "en": "Line 3: It should be json.dump instead of json.dumps."
        }
      },
      {
        "id": "c",
        "text": {
          "de": "Zeile 4: Der Modus müsste \"wb\" sein.",
          "en": "Line 4: The mode should be \"wb\"."
        }
      },
      {
        "id": "d",
        "text": {
          "de": "Zeile 5: json.loads liefert ein Dictionary, aber write erwartet einen String.",
          "en": "Line 5: json.loads returns a dictionary, but write expects a string."
        }
      }
    ],
    "answer": "d",
    "explanation": {
      "de": "text ist bereits ein JSON-String; json.loads(text) wandelt ihn zurück in ein Dictionary, und f.write(dict) löst einen TypeError aus. Zeile 3 ist korrekt (dumps liefert einen String), und für Textdateien mit JSON ist der Modus \"w\" richtig.",
      "en": "text is already a JSON string; json.loads(text) converts it back into a dictionary, and f.write(dict) raises a TypeError. Line 3 is correct (dumps returns a string), and mode \"w\" is right for JSON text files."
    },
    "tip": {
      "de": "Verfolge den Datentyp des Arguments von write von Zeile 2 bis Zeile 5.",
      "en": "Trace the data type of the argument passed to write from line 2 to line 5."
    }
  }
];
