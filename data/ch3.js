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
  },
  {
    "id": "ch3-mc-101",
    "chapter": 3,
    "section": "3.2 Dictionaries",
    "source": {
      "document": "SOTE2 Skript (Softwareentwicklung 2)",
      "section": "3.2 Dictionaries / Labor 2 (Dictionaries)"
    },
    "type": "mc",
    "difficulty": "easy",
    "question": {
      "de": "Welcher der folgenden Werte kann als Schlüssel in einem Dictionary verwendet werden?",
      "en": "Which of the following values can be used as a key in a dictionary?"
    },
    "clarification": {
      "de": "Gemeint ist ein einzelner Schlüssel in einem Dictionary-Literal.",
      "en": "This refers to a single key in a dictionary literal."
    },
    "code": null,
    "options": [
      {
        "id": "a",
        "text": {
          "de": "[1, 2]",
          "en": "[1, 2]"
        }
      },
      {
        "id": "b",
        "text": {
          "de": "{\"a\": 1}",
          "en": "{\"a\": 1}"
        }
      },
      {
        "id": "c",
        "text": {
          "de": "(1, 2)",
          "en": "(1, 2)"
        }
      },
      {
        "id": "d",
        "text": {
          "de": "{1, 2}",
          "en": "{1, 2}"
        }
      }
    ],
    "answer": "c",
    "explanation": {
      "de": "Schlüssel müssen unveränderlich (immutable) sein; ein Tupel aus Zahlen erfüllt das. Listen, Dictionaries und Mengen sind veränderlich und lösen beim Verwenden als Schlüssel einen TypeError aus.",
      "en": "Keys must be immutable; a tuple of numbers qualifies. Lists, dictionaries and sets are mutable and raise a TypeError when used as keys."
    },
    "tip": {
      "de": "Überlege, welche Datentypen nachträglich verändert werden können.",
      "en": "Think about which data types can be modified after creation."
    }
  },
  {
    "id": "ch3-mc-102",
    "chapter": 3,
    "section": "3.3 JSON",
    "source": {
      "document": "SOTE2 Skript (Softwareentwicklung 2)",
      "section": "3.3 JSON / Labor 3 (JSON)"
    },
    "type": "mc",
    "difficulty": "easy",
    "question": {
      "de": "Welche Ausgabe erzeugt der folgende Code?",
      "en": "What output does the following code produce?"
    },
    "clarification": {
      "de": "Der JSON-Text ist ein gültiges Array.",
      "en": "The JSON text is a valid array."
    },
    "code": "import json\ndata = json.loads('[1, 2, 3]')\nprint(type(data))",
    "options": [
      {
        "id": "a",
        "text": {
          "de": "<class 'list'>",
          "en": "<class 'list'>"
        }
      },
      {
        "id": "b",
        "text": {
          "de": "<class 'tuple'>",
          "en": "<class 'tuple'>"
        }
      },
      {
        "id": "c",
        "text": {
          "de": "<class 'str'>",
          "en": "<class 'str'>"
        }
      },
      {
        "id": "d",
        "text": {
          "de": "<class 'dict'>",
          "en": "<class 'dict'>"
        }
      }
    ],
    "answer": "a",
    "explanation": {
      "de": "Ein JSON-Array wird von json.loads in eine Python-Liste umgewandelt. Ein Tupel entsteht nie, und der Rückgabewert ist kein String, weil der Text geparst wird.",
      "en": "A JSON array is converted into a Python list by json.loads. A tuple is never produced, and the result is not a string because the text is parsed."
    },
    "tip": {
      "de": "Wie heißt das Python-Gegenstück zu einem JSON-Array?",
      "en": "What is the Python counterpart of a JSON array?"
    }
  },
  {
    "id": "ch3-mc-103",
    "chapter": 3,
    "section": "3.3 JSON",
    "source": {
      "document": "SOTE2 Skript (Softwareentwicklung 2)",
      "section": "3.3 JSON / Labor 3 (JSON)"
    },
    "type": "mc",
    "difficulty": "easy",
    "question": {
      "de": "Was gibt der folgende Code aus?",
      "en": "What does the following code print?"
    },
    "clarification": null,
    "code": "import json\nprint(json.loads(\"null\"))",
    "options": [
      {
        "id": "a",
        "text": {
          "de": "None",
          "en": "None"
        }
      },
      {
        "id": "b",
        "text": {
          "de": "null",
          "en": "null"
        }
      },
      {
        "id": "c",
        "text": {
          "de": "0",
          "en": "0"
        }
      },
      {
        "id": "d",
        "text": {
          "de": "Es wird ein Fehler ausgelöst.",
          "en": "An error is raised."
        }
      }
    ],
    "answer": "a",
    "explanation": {
      "de": "Der JSON-Wert null entspricht in Python None. Die Ausgabe zeigt daher None; ein Fehler tritt nicht auf, da null gültiges JSON ist.",
      "en": "The JSON value null corresponds to None in Python, so None is printed. No error occurs because null is valid JSON."
    },
    "tip": {
      "de": "Schlage nach, wie JSON den Wert „nichts“ ausdrückt und was Python daraus macht.",
      "en": "Look up how JSON expresses \"nothing\" and what Python turns it into."
    }
  },
  {
    "id": "ch3-mc-104",
    "chapter": 3,
    "section": "3.3 JSON",
    "source": {
      "document": "SOTE2 Skript (Softwareentwicklung 2)",
      "section": "3.3 JSON / Labor 3 (JSON)"
    },
    "type": "mc",
    "difficulty": "easy",
    "question": {
      "de": "Was gibt der folgende Code aus?",
      "en": "What does the following code print?"
    },
    "clarification": null,
    "code": "import json\nprint(json.dumps(True))",
    "options": [
      {
        "id": "a",
        "text": {
          "de": "True",
          "en": "True"
        }
      },
      {
        "id": "b",
        "text": {
          "de": "true",
          "en": "true"
        }
      },
      {
        "id": "c",
        "text": {
          "de": "\"true\"",
          "en": "\"true\""
        }
      },
      {
        "id": "d",
        "text": {
          "de": "1",
          "en": "1"
        }
      }
    ],
    "answer": "b",
    "explanation": {
      "de": "Der Python-Wert True wird als JSON-Literal true (kleingeschrieben) serialisiert. print zeigt den resultierenden String ohne Anführungszeichen an, daher erscheint true.",
      "en": "The Python value True is serialized as the lowercase JSON literal true. print shows the resulting string without quotes, so true appears."
    },
    "tip": {
      "de": "Vergleiche die Schreibweise von Wahrheitswerten in Python und JSON.",
      "en": "Compare how Boolean values are written in Python and in JSON."
    }
  },
  {
    "id": "ch3-mc-105",
    "chapter": 3,
    "section": "3.3 JSON",
    "source": {
      "document": "SOTE2 Skript (Softwareentwicklung 2)",
      "section": "3.3 JSON / Labor 3 (JSON)"
    },
    "type": "mc",
    "difficulty": "easy",
    "question": {
      "de": "Welche Funktion schreibt ein Python-Objekt direkt als JSON in eine geöffnete Datei?",
      "en": "Which function writes a Python object directly as JSON into an open file?"
    },
    "clarification": {
      "de": "Die Datei wurde bereits mit open(..., \"w\") geöffnet.",
      "en": "The file has already been opened with open(..., \"w\")."
    },
    "code": null,
    "options": [
      {
        "id": "a",
        "text": {
          "de": "json.dump",
          "en": "json.dump"
        }
      },
      {
        "id": "b",
        "text": {
          "de": "json.dumps",
          "en": "json.dumps"
        }
      },
      {
        "id": "c",
        "text": {
          "de": "json.load",
          "en": "json.load"
        }
      },
      {
        "id": "d",
        "text": {
          "de": "json.loads",
          "en": "json.loads"
        }
      }
    ],
    "answer": "a",
    "explanation": {
      "de": "json.dump(obj, f) schreibt direkt in ein Dateiobjekt. json.dumps liefert nur einen String, und load/loads lesen JSON ein, statt es zu schreiben.",
      "en": "json.dump(obj, f) writes directly to a file object. json.dumps only returns a string, and load/loads read JSON instead of writing it."
    },
    "tip": {
      "de": "Das s am Ende eines Funktionsnamens steht für „string“.",
      "en": "The trailing s in a function name stands for \"string\"."
    }
  },
  {
    "id": "ch3-mc-106",
    "chapter": 3,
    "section": "3.2 Dictionaries",
    "source": {
      "document": "SOTE2 Skript (Softwareentwicklung 2)",
      "section": "3.2 Dictionaries / Labor 2 (Dictionaries)"
    },
    "type": "mc",
    "difficulty": "medium",
    "question": {
      "de": "Welche Ausgabe erzeugt der folgende Code?",
      "en": "What output does the following code produce?"
    },
    "clarification": null,
    "code": "d = {\"a\": 1, \"b\": 2, \"c\": 3}\nv = d.pop(\"b\")\nprint(v, d)",
    "options": [
      {
        "id": "a",
        "text": {
          "de": "2 {'a': 1, 'c': 3}",
          "en": "2 {'a': 1, 'c': 3}"
        }
      },
      {
        "id": "b",
        "text": {
          "de": "2 {'a': 1, 'b': 2, 'c': 3}",
          "en": "2 {'a': 1, 'b': 2, 'c': 3}"
        }
      },
      {
        "id": "c",
        "text": {
          "de": "{'b': 2} {'a': 1, 'c': 3}",
          "en": "{'b': 2} {'a': 1, 'c': 3}"
        }
      },
      {
        "id": "d",
        "text": {
          "de": "None {'a': 1, 'c': 3}",
          "en": "None {'a': 1, 'c': 3}"
        }
      }
    ],
    "answer": "a",
    "explanation": {
      "de": "pop entfernt den Schlüssel aus dem Dictionary und gibt dessen Wert zurück, hier 2. Das Dictionary enthält danach nur noch a und c; zurückgegeben wird nur der Wert, nicht das Paar.",
      "en": "pop removes the key from the dictionary and returns its value, here 2. Afterwards the dictionary only contains a and c; only the value is returned, not the pair."
    },
    "tip": {
      "de": "Beachte sowohl den Rückgabewert von pop als auch den Zustand des Dictionaries danach.",
      "en": "Consider both the return value of pop and the state of the dictionary afterwards."
    }
  },
  {
    "id": "ch3-mc-107",
    "chapter": 3,
    "section": "3.2 Dictionaries",
    "source": {
      "document": "SOTE2 Skript (Softwareentwicklung 2)",
      "section": "3.2 Dictionaries / Labor 2 (Dictionaries)"
    },
    "type": "mc",
    "difficulty": "medium",
    "question": {
      "de": "Welche Ausgabe erzeugt der folgende Code?",
      "en": "What output does the following code produce?"
    },
    "clarification": null,
    "code": "d = {\"x\": 1, \"y\": 2}\nd.update({\"y\": 5, \"z\": 6})\nprint(d)",
    "options": [
      {
        "id": "a",
        "text": {
          "de": "{'x': 1, 'y': 5, 'z': 6}",
          "en": "{'x': 1, 'y': 5, 'z': 6}"
        }
      },
      {
        "id": "b",
        "text": {
          "de": "{'x': 1, 'y': 2, 'z': 6}",
          "en": "{'x': 1, 'y': 2, 'z': 6}"
        }
      },
      {
        "id": "c",
        "text": {
          "de": "{'y': 5, 'z': 6}",
          "en": "{'y': 5, 'z': 6}"
        }
      },
      {
        "id": "d",
        "text": {
          "de": "{'x': 1, 'y': 5}",
          "en": "{'x': 1, 'y': 5}"
        }
      }
    ],
    "answer": "a",
    "explanation": {
      "de": "update übernimmt alle Paare aus dem übergebenen Dictionary: bestehende Schlüssel (y) werden überschrieben, neue (z) hinzugefügt, nicht erwähnte (x) bleiben erhalten.",
      "en": "update takes over all pairs from the given dictionary: existing keys (y) are overwritten, new ones (z) are added, and keys not mentioned (x) are kept."
    },
    "tip": {
      "de": "Was passiert mit Schlüsseln, die in beiden Dictionaries vorkommen?",
      "en": "What happens to keys that occur in both dictionaries?"
    }
  },
  {
    "id": "ch3-mc-108",
    "chapter": 3,
    "section": "3.2 Dictionaries",
    "source": {
      "document": "SOTE2 Skript (Softwareentwicklung 2)",
      "section": "3.2 Dictionaries / Labor 2 (Dictionaries)"
    },
    "type": "mc",
    "difficulty": "medium",
    "question": {
      "de": "Welche Ausgabe erzeugt der folgende Code?",
      "en": "What output does the following code produce?"
    },
    "clarification": {
      "de": "setdefault(key, default) wird zweimal aufgerufen.",
      "en": "setdefault(key, default) is called twice."
    },
    "code": "d = {\"a\": 1}\nr = d.setdefault(\"b\", 7)\ns = d.setdefault(\"a\", 9)\nprint(r, s, d)",
    "options": [
      {
        "id": "a",
        "text": {
          "de": "7 1 {'a': 1, 'b': 7}",
          "en": "7 1 {'a': 1, 'b': 7}"
        }
      },
      {
        "id": "b",
        "text": {
          "de": "7 9 {'a': 9, 'b': 7}",
          "en": "7 9 {'a': 9, 'b': 7}"
        }
      },
      {
        "id": "c",
        "text": {
          "de": "None 1 {'a': 1}",
          "en": "None 1 {'a': 1}"
        }
      },
      {
        "id": "d",
        "text": {
          "de": "7 1 {'a': 1}",
          "en": "7 1 {'a': 1}"
        }
      }
    ],
    "answer": "a",
    "explanation": {
      "de": "setdefault legt einen fehlenden Schlüssel mit dem Standardwert an und gibt den Wert zurück (7). Existiert der Schlüssel bereits, wird nichts verändert und der vorhandene Wert 1 geliefert.",
      "en": "setdefault creates a missing key with the default value and returns it (7). If the key already exists, nothing is changed and the existing value 1 is returned."
    },
    "tip": {
      "de": "Unterscheide, ob der Schlüssel beim Aufruf schon existiert oder nicht.",
      "en": "Distinguish whether the key already exists at call time."
    }
  },
  {
    "id": "ch3-mc-109",
    "chapter": 3,
    "section": "3.2 Dictionaries",
    "source": {
      "document": "SOTE2 Skript (Softwareentwicklung 2)",
      "section": "3.2 Dictionaries / Labor 2 (Dictionaries)"
    },
    "type": "mc",
    "difficulty": "medium",
    "question": {
      "de": "Welche Ausgabe erzeugt der folgende Code?",
      "en": "What output does the following code produce?"
    },
    "clarification": null,
    "code": "d = {\"b\": 2, \"a\": 1}\nprint(list(d))",
    "options": [
      {
        "id": "a",
        "text": {
          "de": "['a', 'b']",
          "en": "['a', 'b']"
        }
      },
      {
        "id": "b",
        "text": {
          "de": "['b', 'a']",
          "en": "['b', 'a']"
        }
      },
      {
        "id": "c",
        "text": {
          "de": "[2, 1]",
          "en": "[2, 1]"
        }
      },
      {
        "id": "d",
        "text": {
          "de": "[('b', 2), ('a', 1)]",
          "en": "[('b', 2), ('a', 1)]"
        }
      }
    ],
    "answer": "b",
    "explanation": {
      "de": "list(d) iteriert über die Schlüssel, und seit Python 3.7 bleibt die Einfügereihenfolge erhalten, also b vor a. Es wird nicht sortiert, und Werte oder Paare erhält man nur über values() bzw. items().",
      "en": "list(d) iterates over the keys, and since Python 3.7 insertion order is preserved, so b comes before a. Nothing is sorted, and values or pairs are only obtained via values() or items()."
    },
    "tip": {
      "de": "Was liefert die Iteration über ein Dictionary, und in welcher Reihenfolge?",
      "en": "What does iterating over a dictionary yield, and in which order?"
    }
  },
  {
    "id": "ch3-mc-110",
    "chapter": 3,
    "section": "3.3 JSON",
    "source": {
      "document": "SOTE2 Skript (Softwareentwicklung 2)",
      "section": "3.3 JSON / Labor 3 (JSON)"
    },
    "type": "mc",
    "difficulty": "medium",
    "question": {
      "de": "Welche Ausgabe erzeugt der folgende Code?",
      "en": "What output does the following code produce?"
    },
    "clarification": null,
    "code": "import json\nprint(json.dumps({\"a\": None, \"b\": True, \"c\": \"x\"}))",
    "options": [
      {
        "id": "a",
        "text": {
          "de": "{\"a\": null, \"b\": true, \"c\": \"x\"}",
          "en": "{\"a\": null, \"b\": true, \"c\": \"x\"}"
        }
      },
      {
        "id": "b",
        "text": {
          "de": "{\"a\": None, \"b\": True, \"c\": \"x\"}",
          "en": "{\"a\": None, \"b\": True, \"c\": \"x\"}"
        }
      },
      {
        "id": "c",
        "text": {
          "de": "{'a': null, 'b': true, 'c': 'x'}",
          "en": "{'a': null, 'b': true, 'c': 'x'}"
        }
      },
      {
        "id": "d",
        "text": {
          "de": "{\"a\": \"null\", \"b\": \"true\", \"c\": \"x\"}",
          "en": "{\"a\": \"null\", \"b\": \"true\", \"c\": \"x\"}"
        }
      }
    ],
    "answer": "a",
    "explanation": {
      "de": "dumps erzeugt gültiges JSON: None wird zu null, True zu true, und Schlüssel sowie Strings stehen in doppelten Anführungszeichen. Einfache Anführungszeichen und Python-Literale wie None sind in JSON nicht erlaubt.",
      "en": "dumps produces valid JSON: None becomes null, True becomes true, and keys and strings use double quotes. Single quotes and Python literals such as None are not allowed in JSON."
    },
    "tip": {
      "de": "Prüfe jedes Element: Anführungszeichen und Schreibweise der Literale.",
      "en": "Check each element: quote characters and spelling of the literals."
    }
  },
  {
    "id": "ch3-mc-111",
    "chapter": 3,
    "section": "3.3 JSON",
    "source": {
      "document": "SOTE2 Skript (Softwareentwicklung 2)",
      "section": "3.3 JSON / Labor 3 (JSON)"
    },
    "type": "mc",
    "difficulty": "medium",
    "question": {
      "de": "Welche Ausgabe erzeugt der folgende Code?",
      "en": "What output does the following code produce?"
    },
    "clarification": null,
    "code": "import json\ntext = '{\"user\": {\"name\": \"Ada\", \"tags\": [\"x\", \"y\"]}}'\ndata = json.loads(text)\nprint(data[\"user\"][\"tags\"][-1])",
    "options": [
      {
        "id": "a",
        "text": {
          "de": "y",
          "en": "y"
        }
      },
      {
        "id": "b",
        "text": {
          "de": "x",
          "en": "x"
        }
      },
      {
        "id": "c",
        "text": {
          "de": "['x', 'y']",
          "en": "['x', 'y']"
        }
      },
      {
        "id": "d",
        "text": {
          "de": "Es wird ein KeyError ausgelöst.",
          "en": "A KeyError is raised."
        }
      }
    ],
    "answer": "a",
    "explanation": {
      "de": "json.loads liefert verschachtelte Dictionaries und Listen. data[\"user\"][\"tags\"] ist die Liste ['x', 'y'], und der Index -1 wählt das letzte Element, also y.",
      "en": "json.loads returns nested dictionaries and lists. data[\"user\"][\"tags\"] is the list ['x', 'y'], and index -1 selects the last element, i.e. y."
    },
    "tip": {
      "de": "Arbeite die Zugriffe von links nach rechts ab und notiere den Typ nach jedem Schritt.",
      "en": "Resolve the accesses from left to right and note the type after each step."
    }
  },
  {
    "id": "ch3-mc-112",
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
    "clarification": null,
    "code": "d = {\"a\": 1, \"b\": 2, \"c\": 3}\ntotal = 0\nfor k, v in d.items():\n    if k != \"b\":\n        total += v\nprint(total)",
    "options": [
      {
        "id": "a",
        "text": {
          "de": "4",
          "en": "4"
        }
      },
      {
        "id": "b",
        "text": {
          "de": "6",
          "en": "6"
        }
      },
      {
        "id": "c",
        "text": {
          "de": "3",
          "en": "3"
        }
      },
      {
        "id": "d",
        "text": {
          "de": "2",
          "en": "2"
        }
      }
    ],
    "answer": "a",
    "explanation": {
      "de": "items() liefert (Schlüssel, Wert)-Paare. Nur a (1) und c (3) erfüllen die Bedingung k != \"b\", daher ist total = 1 + 3 = 4; die 6 wäre die Summe ohne Bedingung.",
      "en": "items() yields (key, value) pairs. Only a (1) and c (3) satisfy k != \"b\", so total = 1 + 3 = 4; 6 would be the sum without the condition."
    },
    "tip": {
      "de": "Welche Paare erreichen die Zeile mit total += v?",
      "en": "Which pairs reach the line with total += v?"
    }
  },
  {
    "id": "ch3-mc-113",
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
      "de": "copy() erzeugt eine flache (shallow) Kopie.",
      "en": "copy() creates a shallow copy."
    },
    "code": "a = {\"l\": [1], \"n\": 0}\nb = a.copy()\nb[\"l\"].append(2)\nb[\"n\"] = 5\nprint(a)",
    "options": [
      {
        "id": "a",
        "text": {
          "de": "{'l': [1], 'n': 0}",
          "en": "{'l': [1], 'n': 0}"
        }
      },
      {
        "id": "b",
        "text": {
          "de": "{'l': [1, 2], 'n': 0}",
          "en": "{'l': [1, 2], 'n': 0}"
        }
      },
      {
        "id": "c",
        "text": {
          "de": "{'l': [1, 2], 'n': 5}",
          "en": "{'l': [1, 2], 'n': 5}"
        }
      },
      {
        "id": "d",
        "text": {
          "de": "{'l': [1], 'n': 5}",
          "en": "{'l': [1], 'n': 5}"
        }
      }
    ],
    "answer": "b",
    "explanation": {
      "de": "Die flache Kopie hat eigene Schlüssel-Wert-Zuordnungen, teilt sich aber die enthaltene Liste mit dem Original; append wirkt daher auch in a. Die Zuweisung b[\"n\"] = 5 ersetzt nur den Wert in b, a[\"n\"] bleibt 0.",
      "en": "The shallow copy has its own key-value mappings but shares the contained list with the original, so append also affects a. The assignment b[\"n\"] = 5 only replaces the value in b; a[\"n\"] stays 0."
    },
    "tip": {
      "de": "Unterscheide, ob ein Wert neu zugewiesen oder ein gemeinsames Objekt verändert wird.",
      "en": "Distinguish whether a value is reassigned or a shared object is mutated."
    }
  },
  {
    "id": "ch3-mc-114",
    "chapter": 3,
    "section": "3.3 JSON",
    "source": {
      "document": "SOTE2 Skript (Softwareentwicklung 2)",
      "section": "3.3 JSON / Labor 3 (JSON)"
    },
    "type": "mc",
    "difficulty": "hard",
    "question": {
      "de": "Was ist das Ergebnis von print(json.dumps({\"a\": 1}, indent=2))?",
      "en": "What is the result of print(json.dumps({\"a\": 1}, indent=2))?"
    },
    "clarification": {
      "de": "Das Modul json ist bereits importiert.",
      "en": "The json module has already been imported."
    },
    "code": null,
    "options": [
      {
        "id": "a",
        "text": {
          "de": "Eine einzige Zeile: {\"a\": 1}",
          "en": "A single line: {\"a\": 1}"
        }
      },
      {
        "id": "b",
        "text": {
          "de": "Drei Zeilen: öffnende Klammer, die Zeile \"a\": 1 mit zwei Leerzeichen Einrückung, schließende Klammer",
          "en": "Three lines: opening brace, the line \"a\": 1 indented by two spaces, closing brace"
        }
      },
      {
        "id": "c",
        "text": {
          "de": "Ein TypeError, weil dumps kein indent kennt",
          "en": "A TypeError because dumps does not know indent"
        }
      },
      {
        "id": "d",
        "text": {
          "de": "Ein String mit einfachen Anführungszeichen: {'a': 1}",
          "en": "A string with single quotes: {'a': 1}"
        }
      }
    ],
    "answer": "b",
    "explanation": {
      "de": "Der Parameter indent sorgt für eine formatierte, mehrzeilige Ausgabe mit der angegebenen Einrückung. Das Ergebnis bleibt gültiges JSON mit doppelten Anführungszeichen, und dumps akzeptiert indent problemlos.",
      "en": "The indent parameter produces formatted, multi-line output with the given indentation. The result is still valid JSON with double quotes, and dumps accepts indent without problems."
    },
    "tip": {
      "de": "Wofür wird indent in der Praxis verwendet?",
      "en": "What is indent used for in practice?"
    }
  },
  {
    "id": "ch3-mc-115",
    "chapter": 3,
    "section": "3.3 JSON",
    "source": {
      "document": "SOTE2 Skript (Softwareentwicklung 2)",
      "section": "3.3 JSON / Labor 3 (JSON)"
    },
    "type": "mc",
    "difficulty": "hard",
    "question": {
      "de": "Welche Ausgabe erzeugt der folgende Code?",
      "en": "What output does the following code produce?"
    },
    "clarification": {
      "de": "Die Konsole unterstützt UTF-8.",
      "en": "The console supports UTF-8."
    },
    "code": "import json\nprint(json.dumps({\"s\": \"ä\"}))",
    "options": [
      {
        "id": "a",
        "text": {
          "de": "{\"s\": \"\\u00e4\"}",
          "en": "{\"s\": \"\\u00e4\"}"
        }
      },
      {
        "id": "b",
        "text": {
          "de": "{\"s\": \"ä\"}",
          "en": "{\"s\": \"ä\"}"
        }
      },
      {
        "id": "c",
        "text": {
          "de": "{'s': 'ä'}",
          "en": "{'s': 'ä'}"
        }
      },
      {
        "id": "d",
        "text": {
          "de": "Ein UnicodeEncodeError wird ausgelöst.",
          "en": "A UnicodeEncodeError is raised."
        }
      }
    ],
    "answer": "a",
    "explanation": {
      "de": "Standardmäßig ist ensure_ascii=True, daher werden Nicht-ASCII-Zeichen als \\uXXXX-Escape ausgegeben. Erst mit ensure_ascii=False bliebe das ä im Text erhalten; ein Fehler tritt nicht auf.",
      "en": "By default ensure_ascii=True, so non-ASCII characters are output as \\uXXXX escapes. Only with ensure_ascii=False would the ä be kept in the text; no error occurs."
    },
    "tip": {
      "de": "Was ist der Standardwert des Parameters ensure_ascii?",
      "en": "What is the default value of the ensure_ascii parameter?"
    }
  },
  {
    "id": "ch3-mc-116",
    "chapter": 3,
    "section": "3.2 Dictionaries",
    "source": {
      "document": "SOTE2 Skript (Softwareentwicklung 2)",
      "section": "3.2 Dictionaries / Labor 2 (Dictionaries)"
    },
    "type": "mc",
    "difficulty": "hard",
    "question": {
      "de": "Was passiert beim Ausführen des folgenden Codes?",
      "en": "What happens when the following code is executed?"
    },
    "clarification": null,
    "code": "d = {\"a\": 1, \"b\": 2, \"c\": 3}\nfor k in d:\n    d[k + \"x\"] = 0\nprint(len(d))",
    "options": [
      {
        "id": "a",
        "text": {
          "de": "Es wird 6 ausgegeben.",
          "en": "6 is printed."
        }
      },
      {
        "id": "b",
        "text": {
          "de": "Es wird 3 ausgegeben.",
          "en": "3 is printed."
        }
      },
      {
        "id": "c",
        "text": {
          "de": "Es wird ein RuntimeError ausgelöst, weil sich das Dictionary während der Iteration ändert.",
          "en": "A RuntimeError is raised because the dictionary changes during iteration."
        }
      },
      {
        "id": "d",
        "text": {
          "de": "Es wird ein KeyError ausgelöst.",
          "en": "A KeyError is raised."
        }
      }
    ],
    "answer": "c",
    "explanation": {
      "de": "Das Hinzufügen neuer Schlüssel während der Iteration über das Dictionary ändert dessen Größe, was Python mit einem RuntimeError (dictionary changed size during iteration) quittiert. Man müsste über eine Kopie wie list(d) iterieren.",
      "en": "Adding new keys while iterating over the dictionary changes its size, which Python reports with a RuntimeError (dictionary changed size during iteration). One would have to iterate over a copy such as list(d)."
    },
    "tip": {
      "de": "Darf man ein Dictionary verändern, während man darüber iteriert?",
      "en": "May a dictionary be modified while it is being iterated?"
    }
  },
  {
    "id": "ch3-mc-117",
    "chapter": 3,
    "section": "3.3 JSON",
    "source": {
      "document": "SOTE2 Skript (Softwareentwicklung 2)",
      "section": "3.3 JSON / Labor 3 (JSON)"
    },
    "type": "mc",
    "difficulty": "ultra",
    "question": {
      "de": "Was passiert beim Ausführen des folgenden Codes?",
      "en": "What happens when the following code is executed?"
    },
    "clarification": null,
    "code": "import json\nd = json.loads(json.dumps({1: \"a\", 2: \"b\"}))\nprint(d[1])",
    "options": [
      {
        "id": "a",
        "text": {
          "de": "Es wird a ausgegeben.",
          "en": "a is printed."
        }
      },
      {
        "id": "b",
        "text": {
          "de": "Es wird ein KeyError ausgelöst.",
          "en": "A KeyError is raised."
        }
      },
      {
        "id": "c",
        "text": {
          "de": "dumps löst einen TypeError aus, weil Schlüssel Strings sein müssen.",
          "en": "dumps raises a TypeError because keys must be strings."
        }
      },
      {
        "id": "d",
        "text": {
          "de": "Es wird None ausgegeben.",
          "en": "None is printed."
        }
      }
    ],
    "answer": "b",
    "explanation": {
      "de": "JSON-Objekte haben ausschließlich String-Schlüssel, daher konvertiert dumps die Integer-Schlüssel automatisch zu \"1\" und \"2\". Nach loads enthält d die Schlüssel \"1\" und \"2\", sodass d[1] einen KeyError auslöst.",
      "en": "JSON objects only have string keys, so dumps automatically converts the integer keys to \"1\" and \"2\". After loads, d contains the keys \"1\" and \"2\", so d[1] raises a KeyError."
    },
    "tip": {
      "de": "Welche Typen dürfen Schlüssel in JSON-Objekten haben?",
      "en": "Which types may keys of JSON objects have?"
    }
  },
  {
    "id": "ch3-mc-118",
    "chapter": 3,
    "section": "3.2 Dictionaries",
    "source": {
      "document": "SOTE2 Skript (Softwareentwicklung 2)",
      "section": "3.2 Dictionaries / Labor 2 (Dictionaries)"
    },
    "type": "mc",
    "difficulty": "ultra",
    "question": {
      "de": "Welche Ausgabe erzeugt der folgende Code?",
      "en": "What output does the following code produce?"
    },
    "clarification": null,
    "code": "d = {}\nd[1] = \"a\"\nd[True] = \"b\"\nd[1.0] = \"c\"\nprint(d)",
    "options": [
      {
        "id": "a",
        "text": {
          "de": "{1: 'c'}",
          "en": "{1: 'c'}"
        }
      },
      {
        "id": "b",
        "text": {
          "de": "{1: 'a', True: 'b', 1.0: 'c'}",
          "en": "{1: 'a', True: 'b', 1.0: 'c'}"
        }
      },
      {
        "id": "c",
        "text": {
          "de": "{True: 'c'}",
          "en": "{True: 'c'}"
        }
      },
      {
        "id": "d",
        "text": {
          "de": "Ein TypeError wird ausgelöst.",
          "en": "A TypeError is raised."
        }
      }
    ],
    "answer": "a",
    "explanation": {
      "de": "1, True und 1.0 sind gleich und haben denselben Hashwert, daher gelten sie als derselbe Schlüssel. Der Schlüssel bleibt wie beim ersten Einfügen die Zahl 1, nur der Wert wird jeweils überschrieben, zuletzt zu 'c'.",
      "en": "1, True and 1.0 compare equal and have the same hash value, so they count as the same key. The key stays the number 1 from the first insertion, only the value is overwritten each time, finally to 'c'."
    },
    "tip": {
      "de": "Wann betrachtet ein Dictionary zwei Schlüssel als identisch?",
      "en": "When does a dictionary regard two keys as identical?"
    }
  },
  {
    "id": "ch3-ms-101",
    "chapter": 3,
    "section": "3.2 Dictionaries",
    "source": {
      "document": "SOTE2 Skript (Softwareentwicklung 2)",
      "section": "3.2 Dictionaries / Labor 2 (Dictionaries)"
    },
    "type": "ms",
    "difficulty": "easy",
    "question": {
      "de": "Welche der folgenden Werte sind als Dictionary-Schlüssel gültig? Wähle alle zutreffenden aus.",
      "en": "Which of the following values are valid dictionary keys? Select all that apply."
    },
    "clarification": null,
    "code": null,
    "options": [
      {
        "id": "a",
        "text": {
          "de": "\"name\"",
          "en": "\"name\""
        }
      },
      {
        "id": "b",
        "text": {
          "de": "42",
          "en": "42"
        }
      },
      {
        "id": "c",
        "text": {
          "de": "(1, 2)",
          "en": "(1, 2)"
        }
      },
      {
        "id": "d",
        "text": {
          "de": "[1, 2]",
          "en": "[1, 2]"
        }
      },
      {
        "id": "e",
        "text": {
          "de": "{\"a\": 1}",
          "en": "{\"a\": 1}"
        }
      }
    ],
    "answer": [
      "a",
      "b",
      "c"
    ],
    "explanation": {
      "de": "Strings, Zahlen und Tupel sind unveränderlich und daher als Schlüssel zulässig. Listen und Dictionaries sind veränderlich und können nicht als Schlüssel verwendet werden.",
      "en": "Strings, numbers and tuples are immutable and therefore valid as keys. Lists and dictionaries are mutable and cannot be used as keys."
    },
    "tip": {
      "de": "Nur unveränderliche Datentypen kommen infrage.",
      "en": "Only immutable data types qualify."
    }
  },
  {
    "id": "ch3-ms-102",
    "chapter": 3,
    "section": "3.2 Dictionaries",
    "source": {
      "document": "SOTE2 Skript (Softwareentwicklung 2)",
      "section": "3.2 Dictionaries / Labor 2 (Dictionaries)"
    },
    "type": "ms",
    "difficulty": "medium",
    "question": {
      "de": "Welche Aussagen über Dictionaries in Python 3 sind richtig? Wähle alle zutreffenden aus.",
      "en": "Which statements about dictionaries in Python 3 are correct? Select all that apply."
    },
    "clarification": null,
    "code": null,
    "options": [
      {
        "id": "a",
        "text": {
          "de": "Schlüssel sind innerhalb eines Dictionaries eindeutig.",
          "en": "Keys are unique within a dictionary."
        }
      },
      {
        "id": "b",
        "text": {
          "de": "Seit Python 3.7 bleibt die Einfügereihenfolge der Einträge erhalten.",
          "en": "Since Python 3.7 the insertion order of entries is preserved."
        }
      },
      {
        "id": "c",
        "text": {
          "de": "Werte dürfen selbst wieder Dictionaries sein.",
          "en": "Values may themselves be dictionaries."
        }
      },
      {
        "id": "d",
        "text": {
          "de": "d[0] liefert immer den ersten eingefügten Eintrag.",
          "en": "d[0] always returns the first inserted entry."
        }
      },
      {
        "id": "e",
        "text": {
          "de": "Bei doppelt definiertem Schlüssel im Literal bleibt der erste Eintrag erhalten.",
          "en": "If a key is defined twice in a literal, the first entry is kept."
        }
      }
    ],
    "answer": [
      "a",
      "b",
      "c"
    ],
    "explanation": {
      "de": "Eindeutige Schlüssel, erhaltene Reihenfolge und verschachtelte Werte sind Eigenschaften von Dictionaries. Der Zugriff erfolgt über Schlüssel, nicht über Positionen, und bei doppelten Schlüsseln überschreibt der letzte Eintrag die früheren.",
      "en": "Unique keys, preserved order and nested values are properties of dictionaries. Access is by key, not by position, and for duplicate keys the last entry overwrites the earlier ones."
    },
    "tip": {
      "de": "Denke an den Unterschied zwischen Listen (Index) und Dictionaries (Schlüssel).",
      "en": "Think about the difference between lists (index) and dictionaries (key)."
    }
  },
  {
    "id": "ch3-ms-103",
    "chapter": 3,
    "section": "3.3 JSON",
    "source": {
      "document": "SOTE2 Skript (Softwareentwicklung 2)",
      "section": "3.3 JSON / Labor 3 (JSON)"
    },
    "type": "ms",
    "difficulty": "medium",
    "question": {
      "de": "Bei welchen Umwandlungen durch json.dumps stimmt die Zuordnung? Wähle alle zutreffenden aus.",
      "en": "For which conversions by json.dumps is the mapping correct? Select all that apply."
    },
    "clarification": null,
    "code": null,
    "options": [
      {
        "id": "a",
        "text": {
          "de": "True wird zu true",
          "en": "True becomes true"
        }
      },
      {
        "id": "b",
        "text": {
          "de": "None wird zu null",
          "en": "None becomes null"
        }
      },
      {
        "id": "c",
        "text": {
          "de": "Das Tupel (1, 2) wird zum Array [1, 2]",
          "en": "The tuple (1, 2) becomes the array [1, 2]"
        }
      },
      {
        "id": "d",
        "text": {
          "de": "Die Menge {1, 2} wird zum Array [1, 2]",
          "en": "The set {1, 2} becomes the array [1, 2]"
        }
      },
      {
        "id": "e",
        "text": {
          "de": "Ein Dictionary wird zu einem Objekt mit einfachen Anführungszeichen",
          "en": "A dictionary becomes an object with single quotes"
        }
      }
    ],
    "answer": [
      "a",
      "b",
      "c"
    ],
    "explanation": {
      "de": "True, None und Tupel werden zu true, null und Arrays. Mengen sind nicht JSON-serialisierbar (TypeError), und JSON-Objekte verwenden immer doppelte Anführungszeichen.",
      "en": "True, None and tuples become true, null and arrays. Sets are not JSON serializable (TypeError), and JSON objects always use double quotes."
    },
    "tip": {
      "de": "Welche Python-Typen kennt das JSON-Format gar nicht?",
      "en": "Which Python types does the JSON format not know at all?"
    }
  },
  {
    "id": "ch3-ms-104",
    "chapter": 3,
    "section": "3.2 Dictionaries",
    "source": {
      "document": "SOTE2 Skript (Softwareentwicklung 2)",
      "section": "3.2 Dictionaries / Labor 2 (Dictionaries)"
    },
    "type": "ms",
    "difficulty": "hard",
    "question": {
      "de": "Gegeben ist d = {\"a\": 1, \"b\": 2}. Welche Ausdrücke ergeben ohne Fehler den Wert 2? Wähle alle zutreffenden aus.",
      "en": "Given d = {\"a\": 1, \"b\": 2}. Which expressions evaluate to 2 without an error? Select all that apply."
    },
    "clarification": null,
    "code": null,
    "options": [
      {
        "id": "a",
        "text": {
          "de": "d[\"b\"]",
          "en": "d[\"b\"]"
        }
      },
      {
        "id": "b",
        "text": {
          "de": "d.get(\"c\", 2)",
          "en": "d.get(\"c\", 2)"
        }
      },
      {
        "id": "c",
        "text": {
          "de": "d.get(\"b\", 0)",
          "en": "d.get(\"b\", 0)"
        }
      },
      {
        "id": "d",
        "text": {
          "de": "d[1]",
          "en": "d[1]"
        }
      },
      {
        "id": "e",
        "text": {
          "de": "d.get(\"c\")",
          "en": "d.get(\"c\")"
        }
      }
    ],
    "answer": [
      "a",
      "b",
      "c"
    ],
    "explanation": {
      "de": "d[\"b\"] und d.get(\"b\", 0) liefern den vorhandenen Wert 2, d.get(\"c\", 2) den Standardwert 2. d[1] löst einen KeyError aus (1 ist kein Schlüssel), und d.get(\"c\") ergibt None.",
      "en": "d[\"b\"] and d.get(\"b\", 0) return the existing value 2, d.get(\"c\", 2) returns the default 2. d[1] raises a KeyError (1 is not a key), and d.get(\"c\") yields None."
    },
    "tip": {
      "de": "Prüfe bei jedem Ausdruck, ob der Schlüssel existiert und was dann zurückgegeben wird.",
      "en": "For each expression check whether the key exists and what is returned then."
    }
  },
  {
    "id": "ch3-ms-105",
    "chapter": 3,
    "section": "3.3 JSON",
    "source": {
      "document": "SOTE2 Skript (Softwareentwicklung 2)",
      "section": "3.3 JSON / Labor 3 (JSON)"
    },
    "type": "ms",
    "difficulty": "medium",
    "question": {
      "de": "Welche der folgenden Zeichenketten sind gültiges JSON und werden von json.loads akzeptiert? Wähle alle zutreffenden aus.",
      "en": "Which of the following strings are valid JSON and accepted by json.loads? Select all that apply."
    },
    "clarification": null,
    "code": null,
    "options": [
      {
        "id": "a",
        "text": {
          "de": "{\"a\": 1}",
          "en": "{\"a\": 1}"
        }
      },
      {
        "id": "b",
        "text": {
          "de": "{'a': 1}",
          "en": "{'a': 1}"
        }
      },
      {
        "id": "c",
        "text": {
          "de": "{\"a\": true}",
          "en": "{\"a\": true}"
        }
      },
      {
        "id": "d",
        "text": {
          "de": "{\"a\": True}",
          "en": "{\"a\": True}"
        }
      },
      {
        "id": "e",
        "text": {
          "de": "[1, 2, 3]",
          "en": "[1, 2, 3]"
        }
      }
    ],
    "answer": [
      "a",
      "c",
      "e"
    ],
    "explanation": {
      "de": "Gültig sind Objekte mit doppelt zitierten Schlüsseln, das Literal true in Kleinschreibung und Arrays. Einfache Anführungszeichen und das Python-Literal True sind kein JSON und führen zu einem JSONDecodeError.",
      "en": "Valid are objects with double-quoted keys, the lowercase literal true, and arrays. Single quotes and the Python literal True are not JSON and lead to a JSONDecodeError."
    },
    "tip": {
      "de": "Vergleiche jede Zeichenkette mit den Syntaxregeln von JSON, nicht mit denen von Python.",
      "en": "Compare each string with JSON syntax rules, not Python's."
    }
  },
  {
    "id": "ch3-ms-106",
    "chapter": 3,
    "section": "3.3 JSON",
    "source": {
      "document": "SOTE2 Skript (Softwareentwicklung 2)",
      "section": "3.3 JSON / Labor 3 (JSON)"
    },
    "type": "ms",
    "difficulty": "ultra",
    "question": {
      "de": "Sei back = json.loads(json.dumps(x)). Bei welchen Werten x gilt back == x? Wähle alle zutreffenden aus.",
      "en": "Let back = json.loads(json.dumps(x)). For which values x does back == x hold? Select all that apply."
    },
    "clarification": null,
    "code": null,
    "options": [
      {
        "id": "a",
        "text": {
          "de": "{\"a\": [1, 2]}",
          "en": "{\"a\": [1, 2]}"
        }
      },
      {
        "id": "b",
        "text": {
          "de": "(1, 2)",
          "en": "(1, 2)"
        }
      },
      {
        "id": "c",
        "text": {
          "de": "{1: \"a\"}",
          "en": "{1: \"a\"}"
        }
      },
      {
        "id": "d",
        "text": {
          "de": "{\"a\": None}",
          "en": "{\"a\": None}"
        }
      },
      {
        "id": "e",
        "text": {
          "de": "[1, \"x\", 2.5]",
          "en": "[1, \"x\", 2.5]"
        }
      }
    ],
    "answer": [
      "a",
      "d",
      "e"
    ],
    "explanation": {
      "de": "Dictionaries mit String-Schlüsseln, None und Listen aus Zahlen und Strings überstehen den Round-Trip unverändert. Das Tupel kommt als Liste zurück ([1, 2] != (1, 2)), und der Integer-Schlüssel 1 wird zum String \"1\".",
      "en": "Dictionaries with string keys, None and lists of numbers and strings survive the round trip unchanged. The tuple comes back as a list ([1, 2] != (1, 2)), and the integer key 1 becomes the string \"1\"."
    },
    "tip": {
      "de": "Welche Python-Eigenschaften gehen im JSON-Format verloren?",
      "en": "Which Python properties are lost in the JSON format?"
    }
  },
  {
    "id": "ch3-ms-107",
    "chapter": 3,
    "section": "3.2 Dictionaries",
    "source": {
      "document": "SOTE2 Skript (Softwareentwicklung 2)",
      "section": "3.2 Dictionaries / Labor 2 (Dictionaries)"
    },
    "type": "ms",
    "difficulty": "ultra",
    "question": {
      "de": "Nach Ausführung des Codes: Welche Ausdrücke sind wahr? Wähle alle zutreffenden aus.",
      "en": "After the code has run: which expressions are true? Select all that apply."
    },
    "clarification": null,
    "code": "a = {\"k\": [1], \"n\": 1}\nb = a.copy()\nc = a\nb[\"n\"] = 2\nb[\"k\"].append(2)\nc[\"z\"] = 0",
    "options": [
      {
        "id": "a",
        "text": {
          "de": "a[\"n\"] == 1",
          "en": "a[\"n\"] == 1"
        }
      },
      {
        "id": "b",
        "text": {
          "de": "a[\"k\"] == [1]",
          "en": "a[\"k\"] == [1]"
        }
      },
      {
        "id": "c",
        "text": {
          "de": "\"z\" in a",
          "en": "\"z\" in a"
        }
      },
      {
        "id": "d",
        "text": {
          "de": "\"z\" in b",
          "en": "\"z\" in b"
        }
      },
      {
        "id": "e",
        "text": {
          "de": "a[\"k\"] is b[\"k\"]",
          "en": "a[\"k\"] is b[\"k\"]"
        }
      }
    ],
    "answer": [
      "a",
      "c",
      "e"
    ],
    "explanation": {
      "de": "a[\"n\"] bleibt 1, weil b eine eigene flache Kopie ist, und \"z\" steht in a, da c nur ein zweiter Name für a ist. Die Liste ist zwischen a und b geteilt (is ist True) und enthält nach append [1, 2]; b hat \"z\" nie erhalten.",
      "en": "a[\"n\"] stays 1 because b is its own shallow copy, and \"z\" is in a since c is just a second name for a. The list is shared between a and b (is is True) and contains [1, 2] after append; b never received \"z\"."
    },
    "tip": {
      "de": "Welche Namen zeigen auf dasselbe Dictionary, welche auf dasselbe innere Objekt?",
      "en": "Which names refer to the same dictionary, which to the same inner object?"
    }
  },
  {
    "id": "ch3-tf-101",
    "chapter": 3,
    "section": "3.2 Dictionaries",
    "source": {
      "document": "SOTE2 Skript (Softwareentwicklung 2)",
      "section": "3.2 Dictionaries / Labor 2 (Dictionaries)"
    },
    "type": "tf",
    "difficulty": "easy",
    "question": {
      "de": "Der folgende Code gibt 2 aus.",
      "en": "The following code prints 2."
    },
    "clarification": null,
    "code": "d = {\"a\": 1, \"a\": 2}\nprint(d[\"a\"])",
    "answer": true,
    "explanation": {
      "de": "Wird ein Schlüssel mehrfach definiert, überschreibt der letzte Eintrag die vorherigen. Das Dictionary enthält daher nur a mit dem Wert 2.",
      "en": "If a key is defined more than once, the last entry overwrites the previous ones. The dictionary therefore contains only a with the value 2."
    },
    "tip": {
      "de": "Wie viele Einträge hat das Dictionary nach dem Literal?",
      "en": "How many entries does the dictionary have after the literal?"
    }
  },
  {
    "id": "ch3-tf-102",
    "chapter": 3,
    "section": "3.2 Dictionaries",
    "source": {
      "document": "SOTE2 Skript (Softwareentwicklung 2)",
      "section": "3.2 Dictionaries / Labor 2 (Dictionaries)"
    },
    "type": "tf",
    "difficulty": "easy",
    "question": {
      "de": "Wahr oder falsch: Eine Liste kann als Schlüssel in einem Dictionary verwendet werden.",
      "en": "True or false: A list can be used as a key in a dictionary."
    },
    "clarification": null,
    "code": null,
    "answer": false,
    "explanation": {
      "de": "Schlüssel müssen unveränderlich sein. Listen sind veränderlich, daher löst die Verwendung als Schlüssel einen TypeError (unhashable type) aus.",
      "en": "Keys must be immutable. Lists are mutable, so using one as a key raises a TypeError (unhashable type)."
    },
    "tip": {
      "de": "Denke an die Anforderung an Schlüssel-Datentypen.",
      "en": "Think about the requirement for key data types."
    }
  },
  {
    "id": "ch3-tf-103",
    "chapter": 3,
    "section": "3.3 JSON",
    "source": {
      "document": "SOTE2 Skript (Softwareentwicklung 2)",
      "section": "3.3 JSON / Labor 3 (JSON)"
    },
    "type": "tf",
    "difficulty": "easy",
    "question": {
      "de": "Wahr oder falsch: JSON ist eine plattform- und sprachunabhängige Notation für strukturierte Daten.",
      "en": "True or false: JSON is a platform- and language-independent notation for structured data."
    },
    "clarification": {
      "de": "Der Name stammt von JavaScript Object Notation.",
      "en": "The name stems from JavaScript Object Notation."
    },
    "code": null,
    "answer": true,
    "explanation": {
      "de": "JSON ist ein weit verbreiteter Standard zum Datenaustausch, der von praktisch allen Programmiersprachen gelesen und geschrieben werden kann. Der Name verweist auf die Herkunft, nicht auf eine Beschränkung auf JavaScript.",
      "en": "JSON is a widespread standard for data exchange that can be read and written by practically all programming languages. The name refers to its origin, not to a restriction to JavaScript."
    },
    "tip": {
      "de": "Wofür wird JSON zwischen verschiedenen Systemen eingesetzt?",
      "en": "What is JSON used for between different systems?"
    }
  },
  {
    "id": "ch3-tf-104",
    "chapter": 3,
    "section": "3.2 Dictionaries",
    "source": {
      "document": "SOTE2 Skript (Softwareentwicklung 2)",
      "section": "3.2 Dictionaries / Labor 2 (Dictionaries)"
    },
    "type": "tf",
    "difficulty": "medium",
    "question": {
      "de": "Der Ausdruck gibt True aus.",
      "en": "The expression prints True."
    },
    "clarification": null,
    "code": "print(2 in {\"a\": 1, \"b\": 2})",
    "answer": false,
    "explanation": {
      "de": "Der in-Operator prüft bei Dictionaries nur die Schlüssel. 2 ist ein Wert, kein Schlüssel, daher wird False ausgegeben; für Werte bräuchte man 2 in d.values().",
      "en": "The in operator only checks the keys of dictionaries. 2 is a value, not a key, so False is printed; for values one would need 2 in d.values()."
    },
    "tip": {
      "de": "Worauf bezieht sich in bei einem Dictionary?",
      "en": "What does in refer to for a dictionary?"
    }
  },
  {
    "id": "ch3-tf-105",
    "chapter": 3,
    "section": "3.3 JSON",
    "source": {
      "document": "SOTE2 Skript (Softwareentwicklung 2)",
      "section": "3.3 JSON / Labor 3 (JSON)"
    },
    "type": "tf",
    "difficulty": "medium",
    "question": {
      "de": "Der folgende Code gibt {\"a\": [1, 2]} aus.",
      "en": "The following code prints {\"a\": [1, 2]}."
    },
    "clarification": null,
    "code": "import json\nprint(json.dumps({\"a\": (1, 2)}))",
    "answer": true,
    "explanation": {
      "de": "JSON kennt keine Tupel; sie werden als Arrays serialisiert, also in eckigen Klammern. Der Rest der Ausgabe folgt den JSON-Regeln mit doppelten Anführungszeichen.",
      "en": "JSON has no tuples; they are serialized as arrays, i.e. in square brackets. The rest of the output follows the JSON rules with double quotes."
    },
    "tip": {
      "de": "Welche JSON-Struktur entspricht einer Folge von Werten?",
      "en": "Which JSON structure corresponds to a sequence of values?"
    }
  },
  {
    "id": "ch3-tf-106",
    "chapter": 3,
    "section": "3.3 JSON",
    "source": {
      "document": "SOTE2 Skript (Softwareentwicklung 2)",
      "section": "3.3 JSON / Labor 3 (JSON)"
    },
    "type": "tf",
    "difficulty": "hard",
    "question": {
      "de": "Der folgende Code gibt {'a': 2} aus, ohne einen Fehler auszulösen.",
      "en": "The following code prints {'a': 2} without raising an error."
    },
    "clarification": null,
    "code": "import json\nprint(json.loads('{\"a\": 1, \"a\": 2}'))",
    "answer": true,
    "explanation": {
      "de": "Der Python-Parser akzeptiert doppelte Schlüssel in einem JSON-Objekt und behält wie bei Dictionary-Literalen den letzten Wert. Es tritt daher kein Fehler auf.",
      "en": "Python's parser accepts duplicate keys in a JSON object and, as with dictionary literals, keeps the last value. Therefore no error occurs."
    },
    "tip": {
      "de": "Wie verhält sich ein Dictionary bei wiederholtem Schlüssel?",
      "en": "How does a dictionary behave with a repeated key?"
    }
  },
  {
    "id": "ch3-tf-107",
    "chapter": 3,
    "section": "3.2 Dictionaries",
    "source": {
      "document": "SOTE2 Skript (Softwareentwicklung 2)",
      "section": "3.2 Dictionaries / Labor 2 (Dictionaries)"
    },
    "type": "tf",
    "difficulty": "hard",
    "question": {
      "de": "Der folgende Code gibt None aus.",
      "en": "The following code prints None."
    },
    "clarification": null,
    "code": "d = {}\nprint(d.pop(\"x\"))",
    "answer": false,
    "explanation": {
      "de": "pop ohne Standardwert löst bei einem fehlenden Schlüssel einen KeyError aus. None würde nur mit d.pop(\"x\", None) oder d.get(\"x\") zurückgegeben.",
      "en": "pop without a default raises a KeyError for a missing key. None would only be returned by d.pop(\"x\", None) or d.get(\"x\")."
    },
    "tip": {
      "de": "Hat pop hier ein zweites Argument?",
      "en": "Does pop have a second argument here?"
    }
  },
  {
    "id": "ch3-fib-101",
    "chapter": 3,
    "section": "3.3 JSON",
    "source": {
      "document": "SOTE2 Skript (Softwareentwicklung 2)",
      "section": "3.3 JSON / Labor 3 (JSON)"
    },
    "type": "fib",
    "difficulty": "easy",
    "question": {
      "de": "Ergänze die fehlende Funktion, um den JSON-Text in ein Python-Objekt umzuwandeln.",
      "en": "Fill in the missing function to convert the JSON text into a Python object."
    },
    "clarification": {
      "de": "Gesucht ist nur der Funktionsname, ohne Modulpräfix.",
      "en": "Only the function name without module prefix is expected."
    },
    "code": "import json\ntext = '[1, 2, 3]'\ndata = json.____(text)\nprint(data[0])  # prints 1",
    "answer": null,
    "blanks": [
      {
        "accepted": [
          "loads",
          ".loads"
        ],
        "caseSensitive": true
      }
    ],
    "explanation": {
      "de": "json.loads wandelt einen String mit JSON in ein Python-Objekt um; hier entsteht die Liste [1, 2, 3]. load wäre für Dateiobjekte gedacht.",
      "en": "json.loads converts a string containing JSON into a Python object; here the list [1, 2, 3] results. load is meant for file objects."
    },
    "tip": {
      "de": "Die Quelle ist ein String, keine Datei.",
      "en": "The source is a string, not a file."
    }
  },
  {
    "id": "ch3-fib-102",
    "chapter": 3,
    "section": "3.2 Dictionaries",
    "source": {
      "document": "SOTE2 Skript (Softwareentwicklung 2)",
      "section": "3.2 Dictionaries / Labor 2 (Dictionaries)"
    },
    "type": "fib",
    "difficulty": "easy",
    "question": {
      "de": "Ergänze das fehlende Schlüsselwort, das den Eintrag \"a\" löscht.",
      "en": "Fill in the missing keyword that deletes the entry \"a\"."
    },
    "clarification": null,
    "code": "d = {\"a\": 1, \"b\": 2}\n____ d[\"a\"]\nprint(d)  # prints {'b': 2}",
    "answer": null,
    "blanks": [
      {
        "accepted": [
          "del"
        ],
        "caseSensitive": true
      }
    ],
    "explanation": {
      "de": "Mit del d[key] wird ein Eintrag samt Wert aus dem Dictionary entfernt. Danach ist nur noch b enthalten.",
      "en": "With del d[key] an entry including its value is removed from the dictionary. Afterwards only b remains."
    },
    "tip": {
      "de": "Es handelt sich um ein Schlüsselwort, keine Methode.",
      "en": "It is a keyword, not a method."
    }
  },
  {
    "id": "ch3-fib-103",
    "chapter": 3,
    "section": "3.3 JSON",
    "source": {
      "document": "SOTE2 Skript (Softwareentwicklung 2)",
      "section": "3.3 JSON / Labor 3 (JSON)"
    },
    "type": "fib",
    "difficulty": "easy",
    "question": {
      "de": "Ergänze die Funktion, die ein Python-Objekt in einen JSON-String umwandelt.",
      "en": "Fill in the function that converts a Python object into a JSON string."
    },
    "clarification": null,
    "code": "import json\nprint(json.____({\"a\": 1}))  # prints {\"a\": 1}",
    "answer": null,
    "blanks": [
      {
        "accepted": [
          "dumps",
          ".dumps"
        ],
        "caseSensitive": true
      }
    ],
    "explanation": {
      "de": "json.dumps serialisiert ein Objekt zu einem JSON-formatierten String. Das Ergebnis lässt sich direkt ausgeben oder weiterverarbeiten.",
      "en": "json.dumps serializes an object to a JSON-formatted string. The result can be printed directly or processed further."
    },
    "tip": {
      "de": "Das Ergebnis soll ein String sein, keine Datei.",
      "en": "The result should be a string, not a file."
    }
  },
  {
    "id": "ch3-fib-104",
    "chapter": 3,
    "section": "3.2 Dictionaries",
    "source": {
      "document": "SOTE2 Skript (Softwareentwicklung 2)",
      "section": "3.2 Dictionaries / Labor 2 (Dictionaries)"
    },
    "type": "fib",
    "difficulty": "medium",
    "question": {
      "de": "Ergänze die Methode, sodass die Schleife über Schlüssel und Wert gleichzeitig iteriert.",
      "en": "Fill in the method so that the loop iterates over key and value at the same time."
    },
    "clarification": {
      "de": "Gesucht ist nur der Methodenname ohne Klammern.",
      "en": "Only the method name without parentheses is expected."
    },
    "code": "d = {\"a\": 1, \"b\": 2}\nfor k, v in d.____():\n    print(k, v)",
    "answer": null,
    "blanks": [
      {
        "accepted": [
          "items",
          ".items"
        ],
        "caseSensitive": true
      }
    ],
    "explanation": {
      "de": "items() liefert (Schlüssel, Wert)-Paare, die sich direkt in k und v entpacken lassen. keys() oder values() würden nur eine der beiden Komponenten liefern.",
      "en": "items() yields (key, value) pairs that can be unpacked directly into k and v. keys() or values() would only deliver one of the two components."
    },
    "tip": {
      "de": "Welche Methode liefert Paare?",
      "en": "Which method yields pairs?"
    }
  },
  {
    "id": "ch3-fib-105",
    "chapter": 3,
    "section": "3.2 Dictionaries",
    "source": {
      "document": "SOTE2 Skript (Softwareentwicklung 2)",
      "section": "3.2 Dictionaries / Labor 2 (Dictionaries)"
    },
    "type": "fib",
    "difficulty": "medium",
    "question": {
      "de": "Ergänze den Operator, der prüft, ob ein Schlüssel im Dictionary vorkommt.",
      "en": "Fill in the operator that checks whether a key exists in the dictionary."
    },
    "clarification": null,
    "code": "d = {\"a\": 1}\nprint(\"a\" ____ d)  # prints True",
    "answer": null,
    "blanks": [
      {
        "accepted": [
          "in"
        ],
        "caseSensitive": true
      }
    ],
    "explanation": {
      "de": "Der Operator in prüft die Mitgliedschaft eines Schlüssels im Dictionary und liefert True oder False. Er ersetzt einen riskanten Zugriff mit [] auf einen möglicherweise fehlenden Schlüssel.",
      "en": "The in operator checks whether a key is a member of the dictionary and returns True or False. It replaces a risky [] access to a possibly missing key."
    },
    "tip": {
      "de": "Ein Schlüsselwort aus zwei Buchstaben.",
      "en": "A keyword with two letters."
    }
  },
  {
    "id": "ch3-fib-106",
    "chapter": 3,
    "section": "3.3 JSON",
    "source": {
      "document": "SOTE2 Skript (Softwareentwicklung 2)",
      "section": "3.3 JSON / Labor 3 (JSON)"
    },
    "type": "fib",
    "difficulty": "medium",
    "question": {
      "de": "Ergänze die Funktion, die JSON aus der geöffneten Datei f einliest.",
      "en": "Fill in the function that reads JSON from the opened file f."
    },
    "clarification": {
      "de": "Gesucht ist nur der Funktionsname ohne Modulpräfix.",
      "en": "Only the function name without module prefix is expected."
    },
    "code": "import json\nwith open(\"data.json\") as f:\n    data = json.____(f)",
    "answer": null,
    "blanks": [
      {
        "accepted": [
          "load",
          ".load"
        ],
        "caseSensitive": true
      }
    ],
    "explanation": {
      "de": "json.load liest direkt aus einem Dateiobjekt und liefert das geparste Python-Objekt. Die Variante loads erwartet dagegen einen String.",
      "en": "json.load reads directly from a file object and returns the parsed Python object. The loads variant expects a string instead."
    },
    "tip": {
      "de": "Das Argument ist ein Dateiobjekt, kein String.",
      "en": "The argument is a file object, not a string."
    }
  },
  {
    "id": "ch3-fib-107",
    "chapter": 3,
    "section": "3.3 JSON",
    "source": {
      "document": "SOTE2 Skript (Softwareentwicklung 2)",
      "section": "3.3 JSON / Labor 3 (JSON)"
    },
    "type": "fib",
    "difficulty": "medium",
    "question": {
      "de": "Ergänze den Parameternamen, mit dem die Ausgabe mit zwei Leerzeichen eingerückt wird.",
      "en": "Fill in the parameter name that indents the output by two spaces."
    },
    "clarification": null,
    "code": "import json\nwith open(\"out.json\", \"w\") as f:\n    json.dump(data, f, ____=2)",
    "answer": null,
    "blanks": [
      {
        "accepted": [
          "indent"
        ],
        "caseSensitive": true
      }
    ],
    "explanation": {
      "de": "Der Parameter indent steuert die Einrückungstiefe der formatierten JSON-Ausgabe. Ohne ihn wird das JSON in einer einzigen Zeile geschrieben.",
      "en": "The indent parameter controls the indentation depth of the formatted JSON output. Without it the JSON is written on a single line."
    },
    "tip": {
      "de": "Welcher Parameter von json.dump steuert die Formatierung der Ausgabe?",
      "en": "Which parameter of json.dump controls the formatting of the output?"
    }
  },
  {
    "id": "ch3-fib-108",
    "chapter": 3,
    "section": "3.2 Dictionaries",
    "source": {
      "document": "SOTE2 Skript (Softwareentwicklung 2)",
      "section": "3.2 Dictionaries / Labor 2 (Dictionaries)"
    },
    "type": "fib",
    "difficulty": "hard",
    "question": {
      "de": "Ergänze die Methode (beide Lücken identisch), sodass ein fehlender Schlüssel mit einer leeren Liste angelegt wird.",
      "en": "Fill in the method (both blanks identical) so that a missing key is created with an empty list."
    },
    "clarification": {
      "de": "Gesucht ist nur der Methodenname ohne Klammern.",
      "en": "Only the method name without parentheses is expected."
    },
    "code": "groups = {}\ngroups.____(\"x\", []).append(1)\ngroups.____(\"x\", []).append(2)\nprint(groups)  # prints {'x': [1, 2]}",
    "answer": null,
    "blanks": [
      {
        "accepted": [
          "setdefault",
          ".setdefault"
        ],
        "caseSensitive": true
      },
      {
        "accepted": [
          "setdefault",
          ".setdefault"
        ],
        "caseSensitive": true
      }
    ],
    "explanation": {
      "de": "setdefault legt beim ersten Aufruf den Schlüssel mit [] an und gibt die Liste zurück; beim zweiten Aufruf wird die vorhandene Liste geliefert. So landen beide append-Aufrufe in derselben Liste.",
      "en": "On the first call setdefault creates the key with [] and returns the list; on the second call the existing list is returned. So both append calls land in the same list."
    },
    "tip": {
      "de": "Die Methode liefert den Wert zurück und legt ihn bei Bedarf an.",
      "en": "The method returns the value and creates it if necessary."
    }
  },
  {
    "id": "ch3-fib-109",
    "chapter": 3,
    "section": "3.3 JSON",
    "source": {
      "document": "SOTE2 Skript (Softwareentwicklung 2)",
      "section": "3.3 JSON / Labor 3 (JSON)"
    },
    "type": "fib",
    "difficulty": "hard",
    "question": {
      "de": "Ergänze das JSON-Literal, das für den Python-Wert None ausgegeben wird.",
      "en": "Fill in the JSON literal that is output for the Python value None."
    },
    "clarification": null,
    "code": "import json\nprint(json.dumps({\"a\": None, \"b\": True}))  # prints {\"a\": ____, \"b\": true}",
    "answer": null,
    "blanks": [
      {
        "accepted": [
          "null"
        ],
        "caseSensitive": true
      }
    ],
    "explanation": {
      "de": "None wird als JSON-Literal null serialisiert, in Kleinschreibung und ohne Anführungszeichen. True wird entsprechend zu true.",
      "en": "None is serialized as the JSON literal null, in lowercase and without quotes. True accordingly becomes true."
    },
    "tip": {
      "de": "Das Literal ist kleingeschrieben und kein String.",
      "en": "The literal is lowercase and not a string."
    }
  },
  {
    "id": "ch3-fe-101",
    "chapter": 3,
    "section": "3.2 Dictionaries",
    "source": {
      "document": "SOTE2 Skript (Softwareentwicklung 2)",
      "section": "3.2 Dictionaries / Labor 2 (Dictionaries)"
    },
    "type": "fe",
    "difficulty": "medium",
    "question": {
      "de": "In welcher Zeile liegt der Fehler, der zu einer Exception führt?",
      "en": "Which line contains the error that causes an exception?"
    },
    "clarification": null,
    "code": "1: words = [\"a\", \"b\", \"a\"]\n2: counts = {}\n3: for w in words:\n4:     counts[w] += 1\n5: print(counts)",
    "options": [
      {
        "id": "a",
        "text": {
          "de": "Zeile 2: Ein leeres Dictionary darf nicht erzeugt werden.",
          "en": "Line 2: An empty dictionary must not be created."
        }
      },
      {
        "id": "b",
        "text": {
          "de": "Zeile 3: Über eine Liste kann nicht iteriert werden.",
          "en": "Line 3: A list cannot be iterated over."
        }
      },
      {
        "id": "c",
        "text": {
          "de": "Zeile 4: Der Schlüssel existiert noch nicht, der Lesezugriff löst einen KeyError aus.",
          "en": "Line 4: The key does not exist yet, the read access raises a KeyError."
        }
      },
      {
        "id": "d",
        "text": {
          "de": "Zeile 5: print kann kein Dictionary ausgeben.",
          "en": "Line 5: print cannot output a dictionary."
        }
      }
    ],
    "answer": "c",
    "explanation": {
      "de": "Bei counts[w] += 1 wird zuerst counts[w] gelesen; da w beim ersten Durchlauf noch fehlt, tritt ein KeyError auf. Abhilfe schafft counts[w] = counts.get(w, 0) + 1.",
      "en": "counts[w] += 1 first reads counts[w]; since w is still missing in the first iteration, a KeyError occurs. counts[w] = counts.get(w, 0) + 1 fixes it."
    },
    "tip": {
      "de": "Was liest die Zeile, bevor sie schreibt?",
      "en": "What does the line read before it writes?"
    }
  },
  {
    "id": "ch3-fe-102",
    "chapter": 3,
    "section": "3.3 JSON",
    "source": {
      "document": "SOTE2 Skript (Softwareentwicklung 2)",
      "section": "3.3 JSON / Labor 3 (JSON)"
    },
    "type": "fe",
    "difficulty": "hard",
    "question": {
      "de": "In welcher Zeile liegt der Fehler, der zu einer Exception führt?",
      "en": "Which line contains the error that causes an exception?"
    },
    "clarification": null,
    "code": "1: import json\n2: raw = '{\"name\": \"Ada\", \"age\": 36}'\n3: data = json.load(raw)\n4: print(data[\"name\"])",
    "options": [
      {
        "id": "a",
        "text": {
          "de": "Zeile 2: JSON-Text darf nicht in einfachen Anführungszeichen stehen.",
          "en": "Line 2: JSON text must not be enclosed in single quotes."
        }
      },
      {
        "id": "b",
        "text": {
          "de": "Zeile 3: json.load erwartet ein Dateiobjekt; für einen String ist json.loads nötig.",
          "en": "Line 3: json.load expects a file object; json.loads is needed for a string."
        }
      },
      {
        "id": "c",
        "text": {
          "de": "Zeile 4: Der Schlüssel \"name\" existiert nicht.",
          "en": "Line 4: The key \"name\" does not exist."
        }
      },
      {
        "id": "d",
        "text": {
          "de": "Zeile 1: Das Modul json muss installiert werden.",
          "en": "Line 1: The json module has to be installed."
        }
      }
    ],
    "answer": "b",
    "explanation": {
      "de": "raw ist ein String, und json.load versucht, darauf read() aufzurufen, was einen AttributeError ergibt. Für Strings ist json.loads vorgesehen. Die einfachen Anführungszeichen gehören zum Python-String, nicht zum JSON-Text, und json ist Teil der Standardbibliothek.",
      "en": "raw is a string, and json.load tries to call read() on it, which gives an AttributeError. json.loads is meant for strings. The single quotes belong to the Python string, not to the JSON text, and json is part of the standard library."
    },
    "tip": {
      "de": "Vergleiche die Eingabetypen von load und loads.",
      "en": "Compare the input types of load and loads."
    }
  },
  {
    "id": "ch3-fe-103",
    "chapter": 3,
    "section": "3.2 Dictionaries",
    "source": {
      "document": "SOTE2 Skript (Softwareentwicklung 2)",
      "section": "3.2 Dictionaries / Labor 2 (Dictionaries)"
    },
    "type": "fe",
    "difficulty": "ultra",
    "question": {
      "de": "In welcher Zeile liegt der Fehler, der beim Ausführen zu einer Exception führt?",
      "en": "Which line contains the error that leads to an exception when run?"
    },
    "clarification": null,
    "code": "1: inventory = {\"apple\": 3, \"pear\": 5}\n2: for name in inventory:\n3:     if inventory[name] < 4:\n4:         del inventory[name]\n5: print(inventory)",
    "options": [
      {
        "id": "a",
        "text": {
          "de": "Zeile 2: Über ein Dictionary darf nicht direkt iteriert werden.",
          "en": "Line 2: A dictionary must not be iterated over directly."
        }
      },
      {
        "id": "b",
        "text": {
          "de": "Zeile 3: Ein Wert kann nicht mit einer Zahl verglichen werden.",
          "en": "Line 3: A value cannot be compared with a number."
        }
      },
      {
        "id": "c",
        "text": {
          "de": "Zeile 4: Das Dictionary wird während der Iteration verändert.",
          "en": "Line 4: The dictionary is modified during iteration."
        }
      },
      {
        "id": "d",
        "text": {
          "de": "Zeile 5: Das Dictionary ist leer und kann nicht ausgegeben werden.",
          "en": "Line 5: The dictionary is empty and cannot be printed."
        }
      }
    ],
    "answer": "c",
    "explanation": {
      "de": "Das Löschen in Zeile 4 ändert die Größe des Dictionaries, während darüber iteriert wird; beim nächsten Schleifendurchlauf folgt ein RuntimeError. Sicher wäre die Iteration über list(inventory). Iterieren und Vergleichen sind in Zeile 2 und 3 korrekt.",
      "en": "The deletion in line 4 changes the size of the dictionary while it is being iterated; a RuntimeError follows on the next loop pass. Iterating over list(inventory) would be safe. Iterating and comparing are correct in lines 2 and 3."
    },
    "tip": {
      "de": "Welche Operation ändert die Größe des Dictionaries, während die Schleife läuft?",
      "en": "Which operation changes the dictionary size while the loop is running?"
    }
  },
  {
    "id": "ch3-fe-104",
    "chapter": 3,
    "section": "3.3 JSON",
    "source": {
      "document": "SOTE2 Skript (Softwareentwicklung 2)",
      "section": "3.3 JSON / Labor 3 (JSON)"
    },
    "type": "fe",
    "difficulty": "easy",
    "question": {
      "de": "In welcher Zeile liegt der Fehler, der zu einer Exception führt?",
      "en": "Which line contains the error that causes an exception?"
    },
    "clarification": null,
    "code": "1: import json\n2: config = {\"debug\": True, \"ports\": [80, 443]}\n3: with open(\"config.json\", \"w\") as f:\n4:     json.dump(config)\n5: print(\"done\")",
    "options": [
      {
        "id": "a",
        "text": {
          "de": "Zeile 2: True muss in JSON klein geschrieben werden.",
          "en": "Line 2: True must be lowercase in JSON."
        }
      },
      {
        "id": "b",
        "text": {
          "de": "Zeile 3: Der Modus müsste \"r\" sein.",
          "en": "Line 3: The mode should be \"r\"."
        }
      },
      {
        "id": "c",
        "text": {
          "de": "Zeile 4: json.dump fehlt das Dateiobjekt f als zweites Argument.",
          "en": "Line 4: json.dump is missing the file object f as second argument."
        }
      },
      {
        "id": "d",
        "text": {
          "de": "Zeile 5: print darf keinen String ausgeben.",
          "en": "Line 5: print must not output a string."
        }
      }
    ],
    "answer": "c",
    "explanation": {
      "de": "json.dump benötigt zwei Argumente: das Objekt und die Datei, hier json.dump(config, f). Der Aufruf mit einem Argument löst einen TypeError aus. Zeile 2 ist gültiges Python, und zum Schreiben ist der Modus \"w\" richtig.",
      "en": "json.dump needs two arguments: the object and the file, here json.dump(config, f). The call with one argument raises a TypeError. Line 2 is valid Python, and mode \"w\" is right for writing."
    },
    "tip": {
      "de": "Zähle die Argumente von json.dump.",
      "en": "Count the arguments of json.dump."
    }
  },
  {
      "id": "ch3-mc-201",
      "chapter": 3,
      "section": "3.2 Dictionaries",
      "source": {
        "document": "SOTE2 Skript (Softwareentwicklung 2)",
        "section": "3.2 Dictionaries / Labor 2 (Dictionaries)"
      },
      "type": "mc",
      "difficulty": "easy",
      "question": {
        "de": "Welche Ausgabe erzeugt der folgende Code?",
        "en": "What does the following code print?"
      },
      "clarification": null,
      "code": "d = {\"a\": 1, \"b\": 2, \"c\": 3}\nprint(len(d))",
      "options": [
        {
          "id": "a",
          "text": {
            "de": "2",
            "en": "2"
          }
        },
        {
          "id": "b",
          "text": {
            "de": "3",
            "en": "3"
          }
        },
        {
          "id": "c",
          "text": {
            "de": "6",
            "en": "6"
          }
        },
        {
          "id": "d",
          "text": {
            "de": "Es wird ein KeyError ausgelöst.",
            "en": "A KeyError is raised."
          }
        }
      ],
      "answer": "b",
      "explanation": {
        "de": "len() zählt bei einem Dictionary die Schlüssel-Wert-Paare (Einträge), hier also drei. Es werden weder die Werte aufsummiert noch Schlüssel und Werte getrennt gezählt.",
        "en": "For a dictionary, len() counts the key-value pairs (entries), here three. It neither sums the values nor counts keys and values separately."
      },
      "tip": {
        "de": "Zähle die Einträge, nicht die einzelnen Elemente der Paare.",
        "en": "Count the entries, not the individual parts of each pair."
      }
    },
    {
      "id": "ch3-mc-202",
      "chapter": 3,
      "section": "3.2 Dictionaries",
      "source": {
        "document": "SOTE2 Skript (Softwareentwicklung 2)",
        "section": "3.2 Dictionaries"
      },
      "type": "mc",
      "difficulty": "easy",
      "question": {
        "de": "Welche Ausgabe erzeugt der folgende Code?",
        "en": "What does the following code print?"
      },
      "clarification": null,
      "code": "d = {\"x\": 10, \"y\": 20}\nprint(list(d.values()))",
      "options": [
        {
          "id": "a",
          "text": {
            "de": "['x', 'y']",
            "en": "['x', 'y']"
          }
        },
        {
          "id": "b",
          "text": {
            "de": "[10, 20]",
            "en": "[10, 20]"
          }
        },
        {
          "id": "c",
          "text": {
            "de": "[('x', 10), ('y', 20)]",
            "en": "[('x', 10), ('y', 20)]"
          }
        },
        {
          "id": "d",
          "text": {
            "de": "{10, 20}",
            "en": "{10, 20}"
          }
        }
      ],
      "answer": "b",
      "explanation": {
        "de": "d.values() liefert nur die Werte in Einfügereihenfolge, list() macht daraus eine Liste. Die Schlüssel lieferte d.keys(), die Paare d.items().",
        "en": "d.values() yields only the values in insertion order, and list() turns them into a list. The keys would come from d.keys(), the pairs from d.items()."
      },
      "tip": {
        "de": "Welche der Methoden keys, values, items passt zum Namen?",
        "en": "Which of keys, values, items matches the name?"
      }
    },
    {
      "id": "ch3-mc-203",
      "chapter": 3,
      "section": "3.2 Dictionaries",
      "source": {
        "document": "SOTE2 Skript (Softwareentwicklung 2)",
        "section": "3.2 Dictionaries / Labor 2 (Dictionaries)"
      },
      "type": "mc",
      "difficulty": "easy",
      "question": {
        "de": "Welche Ausgabe erzeugt der folgende Code?",
        "en": "What does the following code print?"
      },
      "clarification": null,
      "code": "d = {\"p\": {\"name\": \"Ada\", \"age\": 36}}\nprint(d[\"p\"][\"age\"])",
      "options": [
        {
          "id": "a",
          "text": {
            "de": "36",
            "en": "36"
          }
        },
        {
          "id": "b",
          "text": {
            "de": "Ada",
            "en": "Ada"
          }
        },
        {
          "id": "c",
          "text": {
            "de": "{'name': 'Ada', 'age': 36}",
            "en": "{'name': 'Ada', 'age': 36}"
          }
        },
        {
          "id": "d",
          "text": {
            "de": "Es wird ein KeyError ausgelöst.",
            "en": "A KeyError is raised."
          }
        }
      ],
      "answer": "a",
      "explanation": {
        "de": "d[\"p\"] liefert das innere Dictionary, und darauf liefert [\"age\"] den Wert 36. Zugriffe auf verschachtelte Strukturen werden einfach hintereinandergeschaltet.",
        "en": "d[\"p\"] returns the inner dictionary, and [\"age\"] on it returns 36. Accesses to nested structures are simply chained."
      },
      "tip": {
        "de": "Gehe von links nach rechts durch die Klammern, Schritt für Schritt.",
        "en": "Work through the brackets from left to right, one step at a time."
      }
    },
    {
      "id": "ch3-mc-204",
      "chapter": 3,
      "section": "3.3 JSON",
      "source": {
        "document": "SOTE2 Skript (Softwareentwicklung 2)",
        "section": "3.3 JSON / Labor 3 (JSON)"
      },
      "type": "mc",
      "difficulty": "easy",
      "question": {
        "de": "Welcher Aufruf öffnet die Datei so, dass json.dump dort ein Objekt neu schreiben kann?",
        "en": "Which call opens the file so that json.dump can write an object into it (replacing any old content)?"
      },
      "clarification": null,
      "code": null,
      "options": [
        {
          "id": "a",
          "text": {
            "de": "open(\"out.json\", \"w\")",
            "en": "open(\"out.json\", \"w\")"
          }
        },
        {
          "id": "b",
          "text": {
            "de": "open(\"out.json\", \"r\")",
            "en": "open(\"out.json\", \"r\")"
          }
        },
        {
          "id": "c",
          "text": {
            "de": "open(\"out.json\")",
            "en": "open(\"out.json\")"
          }
        },
        {
          "id": "d",
          "text": {
            "de": "open(\"out.json\", \"rb\")",
            "en": "open(\"out.json\", \"rb\")"
          }
        }
      ],
      "answer": "a",
      "explanation": {
        "de": "Der Modus \"w\" öffnet die Datei zum Schreiben und überschreibt vorhandenen Inhalt. \"r\" (auch der Standard) und \"rb\" öffnen nur zum Lesen, json.dump würde dann einen Fehler auslösen.",
        "en": "Mode \"w\" opens the file for writing and replaces existing content. \"r\" (also the default) and \"rb\" are read-only, so json.dump would raise an error."
      },
      "tip": {
        "de": "Welcher Modus ist nicht schreibgeschützt?",
        "en": "Which mode is not read-only?"
      }
    },
    {
      "id": "ch3-mc-205",
      "chapter": 3,
      "section": "3.3 JSON",
      "source": {
        "document": "SOTE2 Skript (Softwareentwicklung 2)",
        "section": "3.3 JSON"
      },
      "type": "mc",
      "difficulty": "easy",
      "question": {
        "de": "Welche Ausgabe erzeugt der folgende Code?",
        "en": "What does the following code print?"
      },
      "clarification": null,
      "code": "import json\nresult = json.dumps({\"name\": \"Ada\"})\nprint(type(result))",
      "options": [
        {
          "id": "a",
          "text": {
            "de": "<class 'str'>",
            "en": "<class 'str'>"
          }
        },
        {
          "id": "b",
          "text": {
            "de": "<class 'dict'>",
            "en": "<class 'dict'>"
          }
        },
        {
          "id": "c",
          "text": {
            "de": "<class 'bytes'>",
            "en": "<class 'bytes'>"
          }
        },
        {
          "id": "d",
          "text": {
            "de": "<class '_io.TextIOWrapper'>",
            "en": "<class '_io.TextIOWrapper'>"
          }
        }
      ],
      "answer": "a",
      "explanation": {
        "de": "json.dumps (\"dump string\") gibt den JSON-Text als str zurück. Ein dict würde json.loads liefern, und ein Dateiobjekt entsteht nur durch open().",
        "en": "json.dumps (\"dump string\") returns the JSON text as a str. A dict would come from json.loads, and a file object only comes from open()."
      },
      "tip": {
        "de": "Das s im Funktionsnamen steht für string.",
        "en": "The s in the function name stands for string."
      }
    },
    {
      "id": "ch3-mc-206",
      "chapter": 3,
      "section": "3.2 Dictionaries",
      "source": {
        "document": "SOTE2 Skript (Softwareentwicklung 2)",
        "section": "3.2 Dictionaries / Labor 2 (Dictionaries)"
      },
      "type": "mc",
      "difficulty": "medium",
      "question": {
        "de": "Welche Ausgabe erzeugt der folgende Code?",
        "en": "What does the following code print?"
      },
      "clarification": null,
      "code": "words = [\"a\", \"b\", \"a\", \"c\", \"a\"]\ncounts = {}\nfor w in words:\n    counts[w] = counts.get(w, 0) + 1\nprint(counts[\"a\"])",
      "options": [
        {
          "id": "a",
          "text": {
            "de": "1",
            "en": "1"
          }
        },
        {
          "id": "b",
          "text": {
            "de": "3",
            "en": "3"
          }
        },
        {
          "id": "c",
          "text": {
            "de": "5",
            "en": "5"
          }
        },
        {
          "id": "d",
          "text": {
            "de": "Es wird ein KeyError ausgelöst.",
            "en": "A KeyError is raised."
          }
        }
      ],
      "answer": "b",
      "explanation": {
        "de": "counts.get(w, 0) liefert beim ersten Auftreten 0 und danach den bisherigen Zähler, der um 1 erhöht wird. Das Wort \"a\" kommt dreimal vor, daher steht am Ende 3 im Dictionary; ein KeyError tritt wegen get nicht auf.",
        "en": "counts.get(w, 0) returns 0 on the first occurrence and the current counter afterwards, which is then incremented. The word \"a\" occurs three times, so 3 ends up in the dictionary; no KeyError occurs thanks to get."
      },
      "tip": {
        "de": "Wie oft kommt \"a\" in der Liste vor?",
        "en": "How often does \"a\" appear in the list?"
      }
    },
    {
      "id": "ch3-mc-207",
      "chapter": 3,
      "section": "3.2 Dictionaries",
      "source": {
        "document": "SOTE2 Skript (Softwareentwicklung 2)",
        "section": "3.2 Dictionaries"
      },
      "type": "mc",
      "difficulty": "medium",
      "question": {
        "de": "Welche Ausgabe erzeugt der folgende Code?",
        "en": "What does the following code print?"
      },
      "clarification": null,
      "code": "keys = [\"a\", \"b\", \"c\"]\nvalues = [1, 2, 3]\nd = dict(zip(keys, values))\nprint(d[\"b\"])",
      "options": [
        {
          "id": "a",
          "text": {
            "de": "1",
            "en": "1"
          }
        },
        {
          "id": "b",
          "text": {
            "de": "2",
            "en": "2"
          }
        },
        {
          "id": "c",
          "text": {
            "de": "('b', 2)",
            "en": "('b', 2)"
          }
        },
        {
          "id": "d",
          "text": {
            "de": "Es wird ein KeyError ausgelöst.",
            "en": "A KeyError is raised."
          }
        }
      ],
      "answer": "b",
      "explanation": {
        "de": "zip paart gleich lange Listen elementweise, dict() macht daraus Schlüssel-Wert-Paare: {\"a\": 1, \"b\": 2, \"c\": 3}. Der Wert zu \"b\" ist daher 2, nicht das Paar.",
        "en": "zip pairs up lists element by element and dict() turns the pairs into key-value pairs: {\"a\": 1, \"b\": 2, \"c\": 3}. The value for \"b\" is therefore 2, not the pair."
      },
      "tip": {
        "de": "Die erste Liste liefert die Schlüssel, die zweite die Werte.",
        "en": "The first list provides the keys, the second the values."
      }
    },
    {
      "id": "ch3-mc-208",
      "chapter": 3,
      "section": "3.2 Dictionaries",
      "source": {
        "document": "SOTE2 Skript (Softwareentwicklung 2)",
        "section": "3.2 Dictionaries"
      },
      "type": "mc",
      "difficulty": "easy",
      "question": {
        "de": "Welche Ausgabe erzeugt der folgende Code?",
        "en": "What does the following code print?"
      },
      "clarification": null,
      "code": "d = {\"a\": 1, \"b\": 2}\nprint(1 in d, \"b\" in d)",
      "options": [
        {
          "id": "a",
          "text": {
            "de": "True True",
            "en": "True True"
          }
        },
        {
          "id": "b",
          "text": {
            "de": "False True",
            "en": "False True"
          }
        },
        {
          "id": "c",
          "text": {
            "de": "True False",
            "en": "True False"
          }
        },
        {
          "id": "d",
          "text": {
            "de": "False False",
            "en": "False False"
          }
        }
      ],
      "answer": "b",
      "explanation": {
        "de": "Der Operator in prüft bei einem Dictionary die Schlüssel, nicht die Werte. 1 ist ein Wert und kein Schlüssel (False), \"b\" ist ein Schlüssel (True).",
        "en": "For a dictionary, the in operator checks the keys, not the values. 1 is a value and not a key (False), \"b\" is a key (True)."
      },
      "tip": {
        "de": "Worauf bezieht sich in bei Dictionaries?",
        "en": "What does in refer to for dictionaries?"
      }
    },
    {
      "id": "ch3-mc-209",
      "chapter": 3,
      "section": "3.2 Dictionaries",
      "source": {
        "document": "SOTE2 Skript (Softwareentwicklung 2)",
        "section": "3.2 Dictionaries"
      },
      "type": "mc",
      "difficulty": "medium",
      "question": {
        "de": "Welche Ausgabe erzeugt der folgende Code?",
        "en": "What does the following code print?"
      },
      "clarification": null,
      "code": "d = {\"a\": 1, \"b\": 2}\ne = {k: v * 2 for k, v in d.items()}\nprint(e[\"b\"], d[\"b\"])",
      "options": [
        {
          "id": "a",
          "text": {
            "de": "4 2",
            "en": "4 2"
          }
        },
        {
          "id": "b",
          "text": {
            "de": "4 4",
            "en": "4 4"
          }
        },
        {
          "id": "c",
          "text": {
            "de": "2 2",
            "en": "2 2"
          }
        },
        {
          "id": "d",
          "text": {
            "de": "2 4",
            "en": "2 4"
          }
        }
      ],
      "answer": "a",
      "explanation": {
        "de": "Die Dictionary Comprehension baut ein neues Dictionary e mit verdoppelten Werten, daher ist e[\"b\"] gleich 4. Das ursprüngliche d bleibt unverändert, d[\"b\"] ist also weiterhin 2.",
        "en": "The dictionary comprehension builds a new dictionary e with doubled values, so e[\"b\"] is 4. The original d is unchanged, so d[\"b\"] is still 2."
      },
      "tip": {
        "de": "Wird d verändert oder entsteht ein neues Objekt?",
        "en": "Is d modified, or is a new object created?"
      }
    },
    {
      "id": "ch3-mc-210",
      "chapter": 3,
      "section": "3.3 JSON",
      "source": {
        "document": "SOTE2 Skript (Softwareentwicklung 2)",
        "section": "3.3 JSON / Labor 3 (JSON)"
      },
      "type": "mc",
      "difficulty": "medium",
      "question": {
        "de": "Welche Ausgabe erzeugt der folgende Code?",
        "en": "What does the following code print?"
      },
      "clarification": null,
      "code": "import json\ndata = json.loads('{\"a\": [1, {\"b\": 2}]}')\nprint(data[\"a\"][1][\"b\"])",
      "options": [
        {
          "id": "a",
          "text": {
            "de": "1",
            "en": "1"
          }
        },
        {
          "id": "b",
          "text": {
            "de": "2",
            "en": "2"
          }
        },
        {
          "id": "c",
          "text": {
            "de": "{'b': 2}",
            "en": "{'b': 2}"
          }
        },
        {
          "id": "d",
          "text": {
            "de": "Es wird ein TypeError ausgelöst.",
            "en": "A TypeError is raised."
          }
        }
      ],
      "answer": "b",
      "explanation": {
        "de": "json.loads erzeugt ein Dictionary mit einer Liste unter \"a\". Index 1 der Liste ist das innere Dictionary, und darin liefert \"b\" den Wert 2.",
        "en": "json.loads creates a dictionary with a list under \"a\". Index 1 of the list is the inner dictionary, and \"b\" in it yields 2."
      },
      "tip": {
        "de": "Beachte den Index der Liste, er beginnt bei 0.",
        "en": "Mind the list index; it starts at 0."
      }
    },
    {
      "id": "ch3-mc-211",
      "chapter": 3,
      "section": "3.3 JSON",
      "source": {
        "document": "SOTE2 Skript (Softwareentwicklung 2)",
        "section": "3.3 JSON / Labor 3 (JSON)"
      },
      "type": "mc",
      "difficulty": "medium",
      "question": {
        "de": "Welche Ausgabe erzeugt der folgende Code?",
        "en": "What does the following code print?"
      },
      "clarification": null,
      "code": "import json\nprint(json.dumps({\"b\": 1, \"a\": 2}, sort_keys=True))",
      "options": [
        {
          "id": "a",
          "text": {
            "de": "{\"a\": 2, \"b\": 1}",
            "en": "{\"a\": 2, \"b\": 1}"
          }
        },
        {
          "id": "b",
          "text": {
            "de": "{\"b\": 1, \"a\": 2}",
            "en": "{\"b\": 1, \"a\": 2}"
          }
        },
        {
          "id": "c",
          "text": {
            "de": "{\"a\": 1, \"b\": 2}",
            "en": "{\"a\": 1, \"b\": 2}"
          }
        },
        {
          "id": "d",
          "text": {
            "de": "{'a': 2, 'b': 1}",
            "en": "{'a': 2, 'b': 1}"
          }
        }
      ],
      "answer": "a",
      "explanation": {
        "de": "sort_keys=True sortiert die Schlüssel alphabetisch, die zugehörigen Werte bleiben bei ihrem Schlüssel. Die Ausgabe verwendet außerdem immer doppelte Anführungszeichen, nie einfache.",
        "en": "sort_keys=True sorts the keys alphabetically while each value stays with its key. The output also always uses double quotes, never single quotes."
      },
      "tip": {
        "de": "Sortiert werden die Schlüssel, nicht die Werte.",
        "en": "The keys are sorted, not the values."
      }
    },
    {
      "id": "ch3-mc-212",
      "chapter": 3,
      "section": "3.3 JSON",
      "source": {
        "document": "SOTE2 Skript (Softwareentwicklung 2)",
        "section": "3.3 JSON"
      },
      "type": "mc",
      "difficulty": "medium",
      "question": {
        "de": "Was passiert beim Ausführen des folgenden Codes?",
        "en": "What happens when the following code is executed?"
      },
      "clarification": {
        "de": "Der String enthält einfache Anführungszeichen; die äußeren doppelten gehören zum Python-String.",
        "en": "The string contains single quotes; the outer double quotes belong to the Python string."
      },
      "code": "import json\ndata = json.loads(\"{'a': 1}\")",
      "options": [
        {
          "id": "a",
          "text": {
            "de": "Es wird ein json.JSONDecodeError ausgelöst, weil JSON doppelte Anführungszeichen verlangt.",
            "en": "A json.JSONDecodeError is raised because JSON requires double quotes."
          }
        },
        {
          "id": "b",
          "text": {
            "de": "Es entsteht das Dictionary {'a': 1}.",
            "en": "The dictionary {'a': 1} is created."
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
            "de": "Es wird None zurückgegeben.",
            "en": "None is returned."
          }
        }
      ],
      "answer": "a",
      "explanation": {
        "de": "In JSON müssen Schlüssel und Strings in doppelten Anführungszeichen stehen; der Text mit einfachen Anführungszeichen ist kein gültiges JSON. json.loads meldet das mit einem JSONDecodeError (einer Unterklasse von ValueError).",
        "en": "In JSON, keys and strings must be in double quotes; the text with single quotes is not valid JSON. json.loads reports this with a JSONDecodeError (a subclass of ValueError)."
      },
      "tip": {
        "de": "Der Text sieht wie ein Python-Dictionary aus, aber ist er auch JSON?",
        "en": "The text looks like a Python dictionary, but is it also JSON?"
      }
    },
    {
      "id": "ch3-mc-213",
      "chapter": 3,
      "section": "3.3 JSON",
      "source": {
        "document": "SOTE2 Skript (Softwareentwicklung 2)",
        "section": "3.3 JSON"
      },
      "type": "mc",
      "difficulty": "medium",
      "question": {
        "de": "Was passiert beim Ausführen des folgenden Codes?",
        "en": "What happens when the following code is executed?"
      },
      "clarification": null,
      "code": "import json\ntext = json.dumps({\"x\": {1, 2}})",
      "options": [
        {
          "id": "a",
          "text": {
            "de": "Es wird ein TypeError ausgelöst, da eine Menge (set) nicht JSON-serialisierbar ist.",
            "en": "A TypeError is raised because a set is not JSON serializable."
          }
        },
        {
          "id": "b",
          "text": {
            "de": "Die Menge wird automatisch in eine Liste umgewandelt.",
            "en": "The set is automatically converted to a list."
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
            "de": "Es wird ein json.JSONDecodeError ausgelöst.",
            "en": "A json.JSONDecodeError is raised."
          }
        }
      ],
      "answer": "a",
      "explanation": {
        "de": "JSON kennt nur Objekte, Arrays, Strings, Zahlen, true/false und null. Ein Python-set hat keine Entsprechung und löst daher beim Serialisieren einen TypeError aus; ein JSONDecodeError betrifft nur das Einlesen.",
        "en": "JSON only knows objects, arrays, strings, numbers, true/false and null. A Python set has no counterpart and therefore raises a TypeError when serialized; a JSONDecodeError only concerns parsing."
      },
      "tip": {
        "de": "Gibt es in JSON einen Typ für Mengen?",
        "en": "Does JSON have a type for sets?"
      }
    },
    {
      "id": "ch3-mc-214",
      "chapter": 3,
      "section": "3.2 Dictionaries",
      "source": {
        "document": "SOTE2 Skript (Softwareentwicklung 2)",
        "section": "3.2 Dictionaries"
      },
      "type": "mc",
      "difficulty": "hard",
      "question": {
        "de": "Welche Ausgabe erzeugt der folgende Code?",
        "en": "What does the following code print?"
      },
      "clarification": null,
      "code": "def add(d):\n    d[\"n\"] = d.get(\"n\", 0) + 1\n\nx = {}\nadd(x)\nadd(x)\nprint(x)",
      "options": [
        {
          "id": "a",
          "text": {
            "de": "{}",
            "en": "{}"
          }
        },
        {
          "id": "b",
          "text": {
            "de": "{'n': 1}",
            "en": "{'n': 1}"
          }
        },
        {
          "id": "c",
          "text": {
            "de": "{'n': 2}",
            "en": "{'n': 2}"
          }
        },
        {
          "id": "d",
          "text": {
            "de": "Es wird ein Fehler ausgelöst.",
            "en": "An error is raised."
          }
        }
      ],
      "answer": "c",
      "explanation": {
        "de": "Dictionaries sind veränderlich und werden als Referenz übergeben, die Funktion ändert also das Original x. Der erste Aufruf setzt n auf 1, der zweite auf 2.",
        "en": "Dictionaries are mutable and passed by reference, so the function modifies the original x. The first call sets n to 1, the second to 2."
      },
      "tip": {
        "de": "Arbeitet die Funktion auf einer Kopie oder auf dem Original?",
        "en": "Does the function work on a copy or on the original?"
      }
    },
    {
      "id": "ch3-mc-215",
      "chapter": 3,
      "section": "3.2 Dictionaries",
      "source": {
        "document": "SOTE2 Skript (Softwareentwicklung 2)",
        "section": "3.2 Dictionaries"
      },
      "type": "mc",
      "difficulty": "hard",
      "question": {
        "de": "Welche Ausgabe erzeugt der folgende Code?",
        "en": "What does the following code print?"
      },
      "clarification": null,
      "code": "d = {\"a\": 3, \"b\": 1, \"c\": 2}\nprint(max(d, key=d.get))",
      "options": [
        {
          "id": "a",
          "text": {
            "de": "a",
            "en": "a"
          }
        },
        {
          "id": "b",
          "text": {
            "de": "3",
            "en": "3"
          }
        },
        {
          "id": "c",
          "text": {
            "de": "b",
            "en": "b"
          }
        },
        {
          "id": "d",
          "text": {
            "de": "c",
            "en": "c"
          }
        }
      ],
      "answer": "a",
      "explanation": {
        "de": "max iteriert über die Schlüssel und vergleicht sie anhand von d.get, also anhand ihrer Werte. Der größte Wert 3 gehört zum Schlüssel \"a\"; zurückgegeben wird der Schlüssel, nicht der Wert.",
        "en": "max iterates over the keys and compares them by d.get, that is, by their values. The largest value 3 belongs to the key \"a\"; the key is returned, not the value."
      },
      "tip": {
        "de": "Was wird zurückgegeben: das Element mit dem größten key-Wert oder der key-Wert selbst?",
        "en": "What is returned: the element with the largest key value, or the key value itself?"
      }
    },
    {
      "id": "ch3-mc-216",
      "chapter": 3,
      "section": "3.2 Dictionaries",
      "source": {
        "document": "SOTE2 Skript (Softwareentwicklung 2)",
        "section": "3.2 Dictionaries"
      },
      "type": "mc",
      "difficulty": "hard",
      "question": {
        "de": "Welche Ausgabe erzeugt der folgende Code?",
        "en": "What does the following code print?"
      },
      "clarification": null,
      "code": "d = {\"b\": 2, \"a\": 1}\nd.pop(\"b\")\nd[\"b\"] = 3\nprint(list(d))",
      "options": [
        {
          "id": "a",
          "text": {
            "de": "['a', 'b']",
            "en": "['a', 'b']"
          }
        },
        {
          "id": "b",
          "text": {
            "de": "['b', 'a']",
            "en": "['b', 'a']"
          }
        },
        {
          "id": "c",
          "text": {
            "de": "['a']",
            "en": "['a']"
          }
        },
        {
          "id": "d",
          "text": {
            "de": "Es wird ein KeyError ausgelöst.",
            "en": "A KeyError is raised."
          }
        }
      ],
      "answer": "a",
      "explanation": {
        "de": "Nach pop ist nur noch \"a\" enthalten, und der neu gesetzte Schlüssel \"b\" wird als neuester Eintrag hinten angefügt. Dictionaries behalten die Einfügereihenfolge, ein gelöschter und neu angelegter Schlüssel rückt also ans Ende.",
        "en": "After pop only \"a\" remains, and the newly set key \"b\" is appended as the newest entry. Dictionaries keep insertion order, so a deleted and re-created key moves to the end."
      },
      "tip": {
        "de": "Der Schlüssel \"b\" ist zwischenzeitlich komplett weg.",
        "en": "The key \"b\" is completely gone for a moment."
      }
    },
    {
      "id": "ch3-mc-217",
      "chapter": 3,
      "section": "3.3 JSON",
      "source": {
        "document": "SOTE2 Skript (Softwareentwicklung 2)",
        "section": "3.3 JSON"
      },
      "type": "mc",
      "difficulty": "hard",
      "question": {
        "de": "Welche Ausgabe erzeugt der folgende Code?",
        "en": "What does the following code print?"
      },
      "clarification": null,
      "code": "import json\ndata = json.loads('{\"a\": 3, \"b\": 3.0}')\nprint(type(data[\"a\"]).__name__, type(data[\"b\"]).__name__)",
      "options": [
        {
          "id": "a",
          "text": {
            "de": "int float",
            "en": "int float"
          }
        },
        {
          "id": "b",
          "text": {
            "de": "float float",
            "en": "float float"
          }
        },
        {
          "id": "c",
          "text": {
            "de": "int int",
            "en": "int int"
          }
        },
        {
          "id": "d",
          "text": {
            "de": "float int",
            "en": "float int"
          }
        }
      ],
      "answer": "a",
      "explanation": {
        "de": "JSON-Zahlen ohne Dezimalpunkt werden als int, solche mit Dezimalpunkt als float eingelesen. 3 und 3.0 behalten daher ihre unterschiedlichen Typen.",
        "en": "JSON numbers without a decimal point are parsed as int, those with a decimal point as float. 3 and 3.0 therefore keep their different types."
      },
      "tip": {
        "de": "Entscheidend ist die Schreibweise der Zahl im JSON-Text.",
        "en": "What matters is how the number is written in the JSON text."
      }
    },
    {
      "id": "ch3-mc-218",
      "chapter": 3,
      "section": "3.3 JSON",
      "source": {
        "document": "SOTE2 Skript (Softwareentwicklung 2)",
        "section": "3.3 JSON"
      },
      "type": "mc",
      "difficulty": "hard",
      "question": {
        "de": "Welche Ausgabe erzeugt der folgende Code?",
        "en": "What does the following code print?"
      },
      "clarification": null,
      "code": "import json\ntry:\n    data = json.loads('{\"a\": 1,}')\nexcept json.JSONDecodeError:\n    print(\"invalid\")\nelse:\n    print(data)",
      "options": [
        {
          "id": "a",
          "text": {
            "de": "invalid",
            "en": "invalid"
          }
        },
        {
          "id": "b",
          "text": {
            "de": "{'a': 1}",
            "en": "{'a': 1}"
          }
        },
        {
          "id": "c",
          "text": {
            "de": "Das Programm bricht mit einer nicht abgefangenen Exception ab.",
            "en": "The program terminates with an uncaught exception."
          }
        },
        {
          "id": "d",
          "text": {
            "de": "Es wird nichts ausgegeben.",
            "en": "Nothing is printed."
          }
        }
      ],
      "answer": "a",
      "explanation": {
        "de": "JSON erlaubt kein Komma nach dem letzten Element, anders als Python. json.loads löst deshalb einen JSONDecodeError aus, der vom except-Zweig abgefangen wird, sodass \"invalid\" erscheint.",
        "en": "Unlike Python, JSON does not allow a comma after the last element. json.loads therefore raises a JSONDecodeError, which the except branch catches, so \"invalid\" is printed."
      },
      "tip": {
        "de": "Prüfe das Ende des JSON-Textes genau.",
        "en": "Look closely at the end of the JSON text."
      }
    },
    {
      "id": "ch3-mc-219",
      "chapter": 3,
      "section": "3.3 JSON",
      "source": {
        "document": "SOTE2 Skript (Softwareentwicklung 2)",
        "section": "3.3 JSON"
      },
      "type": "mc",
      "difficulty": "ultra",
      "question": {
        "de": "Welche Ausgabe erzeugt der folgende Code?",
        "en": "What does the following code print?"
      },
      "clarification": null,
      "code": "import json\ns = \"ü\"\nprint(len(json.dumps(s)), len(json.dumps(s, ensure_ascii=False)))",
      "options": [
        {
          "id": "a",
          "text": {
            "de": "8 3",
            "en": "8 3"
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
            "de": "8 8",
            "en": "8 8"
          }
        },
        {
          "id": "d",
          "text": {
            "de": "6 1",
            "en": "6 1"
          }
        }
      ],
      "answer": "a",
      "explanation": {
        "de": "Standardmäßig wird ü als Escape-Folge \\u00fc geschrieben, mit den Anführungszeichen ergeben das 8 Zeichen. Mit ensure_ascii=False bleibt das ü erhalten, also nur 3 Zeichen inklusive Anführungszeichen.",
        "en": "By default, ü is written as the escape sequence \\u00fc, which with the quotes makes 8 characters. With ensure_ascii=False the ü is kept, giving only 3 characters including the quotes."
      },
      "tip": {
        "de": "Zähle auch die Anführungszeichen mit.",
        "en": "Count the quotation marks too."
      }
    },
    {
      "id": "ch3-mc-220",
      "chapter": 3,
      "section": "3.2 Dictionaries",
      "source": {
        "document": "SOTE2 Skript (Softwareentwicklung 2)",
        "section": "3.2 Dictionaries"
      },
      "type": "mc",
      "difficulty": "ultra",
      "question": {
        "de": "Welche Ausgabe erzeugt der folgende Code?",
        "en": "What does the following code print?"
      },
      "clarification": null,
      "code": "e = dict.fromkeys([\"x\", \"y\"], [])\ne[\"x\"].append(1)\nprint(e[\"y\"])",
      "options": [
        {
          "id": "a",
          "text": {
            "de": "[1]",
            "en": "[1]"
          }
        },
        {
          "id": "b",
          "text": {
            "de": "[]",
            "en": "[]"
          }
        },
        {
          "id": "c",
          "text": {
            "de": "None",
            "en": "None"
          }
        },
        {
          "id": "d",
          "text": {
            "de": "Es wird ein KeyError ausgelöst.",
            "en": "A KeyError is raised."
          }
        }
      ],
      "answer": "a",
      "explanation": {
        "de": "dict.fromkeys verwendet für alle Schlüssel dasselbe Wert-Objekt, hier dieselbe Liste. Das Anhängen über \"x\" ändert deshalb auch die Liste unter \"y\".",
        "en": "dict.fromkeys uses the same value object for all keys, here the same list. Appending via \"x\" therefore also changes the list under \"y\"."
      },
      "tip": {
        "de": "Wie viele Listen werden in dieser Zeile tatsächlich erzeugt?",
        "en": "How many lists are actually created in that line?"
      }
    },
    {
      "id": "ch3-ms-201",
      "chapter": 3,
      "section": "3.2 Dictionaries",
      "source": {
        "document": "SOTE2 Skript (Softwareentwicklung 2)",
        "section": "3.2 Dictionaries / Labor 2 (Dictionaries)"
      },
      "type": "ms",
      "difficulty": "easy",
      "question": {
        "de": "Gegeben ist d = {\"a\": 1, \"b\": 2}. Welche Ausdrücke ergeben True? Wähle alle zutreffenden aus (drei sind richtig).",
        "en": "Given d = {\"a\": 1, \"b\": 2}. Which expressions evaluate to True? Select all that apply (three are correct)."
      },
      "clarification": null,
      "code": null,
      "options": [
        {
          "id": "a",
          "text": {
            "de": "\"a\" in d",
            "en": "\"a\" in d"
          }
        },
        {
          "id": "b",
          "text": {
            "de": "1 in d",
            "en": "1 in d"
          }
        },
        {
          "id": "c",
          "text": {
            "de": "2 in d.values()",
            "en": "2 in d.values()"
          }
        },
        {
          "id": "d",
          "text": {
            "de": "len(d) == 2",
            "en": "len(d) == 2"
          }
        },
        {
          "id": "e",
          "text": {
            "de": "\"b\" in d.values()",
            "en": "\"b\" in d.values()"
          }
        }
      ],
      "answer": [
        "a",
        "c",
        "d"
      ],
      "explanation": {
        "de": "in auf d prüft Schlüssel, daher ist \"a\" in d wahr, 1 in d aber falsch. d.values() enthält 1 und 2, deshalb ist 2 enthalten, \"b\" aber nicht; len(d) ist 2.",
        "en": "in on d checks keys, so \"a\" in d is true but 1 in d is false. d.values() contains 1 and 2, so 2 is in it but \"b\" is not; len(d) is 2."
      },
      "tip": {
        "de": "Unterscheide Schlüssel und Werte.",
        "en": "Distinguish keys from values."
      }
    },
    {
      "id": "ch3-ms-202",
      "chapter": 3,
      "section": "3.2 Dictionaries",
      "source": {
        "document": "SOTE2 Skript (Softwareentwicklung 2)",
        "section": "3.2 Dictionaries"
      },
      "type": "ms",
      "difficulty": "medium",
      "question": {
        "de": "Gegeben ist d = {\"a\": 1, \"b\": 2}. Welche Aufrufe verändern das Dictionary d selbst? Wähle alle zutreffenden aus (drei sind richtig).",
        "en": "Given d = {\"a\": 1, \"b\": 2}. Which calls modify the dictionary d itself? Select all that apply (three are correct)."
      },
      "clarification": null,
      "code": null,
      "options": [
        {
          "id": "a",
          "text": {
            "de": "d.update({\"c\": 3})",
            "en": "d.update({\"c\": 3})"
          }
        },
        {
          "id": "b",
          "text": {
            "de": "d.pop(\"a\")",
            "en": "d.pop(\"a\")"
          }
        },
        {
          "id": "c",
          "text": {
            "de": "d.setdefault(\"z\", 0)",
            "en": "d.setdefault(\"z\", 0)"
          }
        },
        {
          "id": "d",
          "text": {
            "de": "d.get(\"a\")",
            "en": "d.get(\"a\")"
          }
        },
        {
          "id": "e",
          "text": {
            "de": "d.copy()",
            "en": "d.copy()"
          }
        },
        {
          "id": "f",
          "text": {
            "de": "d.keys()",
            "en": "d.keys()"
          }
        }
      ],
      "answer": [
        "a",
        "b",
        "c"
      ],
      "explanation": {
        "de": "update fügt Einträge hinzu, pop entfernt einen und setdefault legt den fehlenden Schlüssel \"z\" an. get, copy und keys liefern nur einen Wert, eine Kopie bzw. eine Sicht und lassen d unverändert.",
        "en": "update adds entries, pop removes one, and setdefault creates the missing key \"z\". get, copy and keys only return a value, a copy or a view and leave d unchanged."
      },
      "tip": {
        "de": "Welche Methoden liefern lediglich Informationen oder neue Objekte?",
        "en": "Which methods merely return information or new objects?"
      }
    },
    {
      "id": "ch3-ms-203",
      "chapter": 3,
      "section": "3.3 JSON",
      "source": {
        "document": "SOTE2 Skript (Softwareentwicklung 2)",
        "section": "3.3 JSON / Labor 3 (JSON)"
      },
      "type": "ms",
      "difficulty": "medium",
      "question": {
        "de": "Welche Aussagen zu den Syntaxunterschieden zwischen Python und JSON sind richtig? Wähle alle zutreffenden aus (drei sind richtig).",
        "en": "Which statements about the syntax differences between Python and JSON are correct? Select all that apply (three are correct)."
      },
      "clarification": null,
      "code": null,
      "options": [
        {
          "id": "a",
          "text": {
            "de": "In JSON müssen Schlüssel in doppelten Anführungszeichen stehen.",
            "en": "In JSON, keys must be enclosed in double quotes."
          }
        },
        {
          "id": "b",
          "text": {
            "de": "Der Python-Wert True entspricht in JSON true.",
            "en": "The Python value True corresponds to true in JSON."
          }
        },
        {
          "id": "c",
          "text": {
            "de": "Der Python-Wert None entspricht in JSON null.",
            "en": "The Python value None corresponds to null in JSON."
          }
        },
        {
          "id": "d",
          "text": {
            "de": "JSON erlaubt einfache Anführungszeichen für Strings.",
            "en": "JSON allows single quotes for strings."
          }
        },
        {
          "id": "e",
          "text": {
            "de": "JSON erlaubt Kommentare, die mit # beginnen.",
            "en": "JSON allows comments starting with #."
          }
        }
      ],
      "answer": [
        "a",
        "b",
        "c"
      ],
      "explanation": {
        "de": "JSON verlangt doppelte Anführungszeichen und schreibt Wahrheitswerte klein (true/false) sowie null statt None. Einfache Anführungszeichen und Kommentare gibt es in JSON nicht.",
        "en": "JSON requires double quotes and writes booleans in lower case (true/false) as well as null instead of None. Single quotes and comments do not exist in JSON."
      },
      "tip": {
        "de": "Vergleiche die Schreibweise der Literale in beiden Sprachen.",
        "en": "Compare how the literals are written in both languages."
      }
    },
    {
      "id": "ch3-ms-204",
      "chapter": 3,
      "section": "3.3 JSON",
      "source": {
        "document": "SOTE2 Skript (Softwareentwicklung 2)",
        "section": "3.3 JSON"
      },
      "type": "ms",
      "difficulty": "medium",
      "question": {
        "de": "Welche Aussagen über die Funktionen des Moduls json sind richtig? Wähle alle zutreffenden aus (zwei sind richtig).",
        "en": "Which statements about the functions of the json module are correct? Select all that apply (two are correct)."
      },
      "clarification": null,
      "code": null,
      "options": [
        {
          "id": "a",
          "text": {
            "de": "json.dumps gibt den JSON-Text als String zurück.",
            "en": "json.dumps returns the JSON text as a string."
          }
        },
        {
          "id": "b",
          "text": {
            "de": "json.load erwartet ein geöffnetes Dateiobjekt.",
            "en": "json.load expects an open file object."
          }
        },
        {
          "id": "c",
          "text": {
            "de": "json.loads erwartet einen Dateinamen als Argument.",
            "en": "json.loads expects a file name as its argument."
          }
        },
        {
          "id": "d",
          "text": {
            "de": "json.dump schreibt direkt in eine Datei und braucht nur das Objekt als Argument.",
            "en": "json.dump writes directly to a file and only needs the object as an argument."
          }
        }
      ],
      "answer": [
        "a",
        "b"
      ],
      "explanation": {
        "de": "dumps und loads arbeiten mit Strings, dump und load mit Dateiobjekten. json.loads erwartet JSON-Text, keinen Dateinamen, und json.dump benötigt zusätzlich das Dateiobjekt als zweites Argument.",
        "en": "dumps and loads work with strings, dump and load with file objects. json.loads expects JSON text, not a file name, and json.dump additionally needs the file object as its second argument."
      },
      "tip": {
        "de": "Das s am Ende bedeutet string, ohne s geht es um Dateien.",
        "en": "The trailing s means string; without s it is about files."
      }
    },
    {
      "id": "ch3-ms-205",
      "chapter": 3,
      "section": "3.2 Dictionaries",
      "source": {
        "document": "SOTE2 Skript (Softwareentwicklung 2)",
        "section": "3.2 Dictionaries"
      },
      "type": "ms",
      "difficulty": "hard",
      "question": {
        "de": "Gegeben ist d = {(1, 2): \"a\", \"k\": \"b\"}. Welche Ausdrücke werden ohne Fehler ausgewertet? Wähle alle zutreffenden aus (drei sind richtig).",
        "en": "Given d = {(1, 2): \"a\", \"k\": \"b\"}. Which expressions evaluate without an error? Select all that apply (three are correct)."
      },
      "clarification": null,
      "code": null,
      "options": [
        {
          "id": "a",
          "text": {
            "de": "d[(1, 2)]",
            "en": "d[(1, 2)]"
          }
        },
        {
          "id": "b",
          "text": {
            "de": "d[1, 2]",
            "en": "d[1, 2]"
          }
        },
        {
          "id": "c",
          "text": {
            "de": "d[\"k\"]",
            "en": "d[\"k\"]"
          }
        },
        {
          "id": "d",
          "text": {
            "de": "d[[1, 2]]",
            "en": "d[[1, 2]]"
          }
        },
        {
          "id": "e",
          "text": {
            "de": "d[(2, 1)]",
            "en": "d[(2, 1)]"
          }
        }
      ],
      "answer": [
        "a",
        "b",
        "c"
      ],
      "explanation": {
        "de": "d[1, 2] ist dasselbe wie d[(1, 2)], denn Kommas ohne Klammern bilden ein Tupel. Eine Liste als Schlüssel löst einen TypeError aus (nicht hashbar), und das Tupel (2, 1) ist ein anderer, nicht vorhandener Schlüssel und führt zu einem KeyError.",
        "en": "d[1, 2] is the same as d[(1, 2)] because commas without parentheses form a tuple. A list as a key raises a TypeError (unhashable), and the tuple (2, 1) is a different, missing key and raises a KeyError."
      },
      "tip": {
        "de": "Tupel sind unveränderlich, Listen nicht; und die Reihenfolge im Tupel zählt.",
        "en": "Tuples are immutable, lists are not; and the order inside a tuple matters."
      }
    },
    {
      "id": "ch3-ms-206",
      "chapter": 3,
      "section": "3.3 JSON",
      "source": {
        "document": "SOTE2 Skript (Softwareentwicklung 2)",
        "section": "3.3 JSON"
      },
      "type": "ms",
      "difficulty": "hard",
      "question": {
        "de": "Bei welchen Python-Werten gelingt json.dumps ohne Fehler? Wähle alle zutreffenden aus (drei sind richtig).",
        "en": "For which Python values does json.dumps succeed without an error? Select all that apply (three are correct)."
      },
      "clarification": null,
      "code": null,
      "options": [
        {
          "id": "a",
          "text": {
            "de": "[1, \"a\", None]",
            "en": "[1, \"a\", None]"
          }
        },
        {
          "id": "b",
          "text": {
            "de": "(1, 2)",
            "en": "(1, 2)"
          }
        },
        {
          "id": "c",
          "text": {
            "de": "{\"a\": None}",
            "en": "{\"a\": None}"
          }
        },
        {
          "id": "d",
          "text": {
            "de": "{1, 2}",
            "en": "{1, 2}"
          }
        },
        {
          "id": "e",
          "text": {
            "de": "b\"abc\"",
            "en": "b\"abc\""
          }
        }
      ],
      "answer": [
        "a",
        "b",
        "c"
      ],
      "explanation": {
        "de": "Listen, Tupel (als Array), None (als null) und Dictionaries mit String-Schlüsseln lassen sich serialisieren. Mengen (set) und Bytes haben keine JSON-Entsprechung und lösen einen TypeError aus.",
        "en": "Lists, tuples (as arrays), None (as null) and dictionaries with string keys can be serialized. Sets and bytes have no JSON counterpart and raise a TypeError."
      },
      "tip": {
        "de": "Welche Typen haben ein Gegenstück in JSON (Objekt, Array, String, Zahl, Wahrheitswert, null)?",
        "en": "Which types have a counterpart in JSON (object, array, string, number, boolean, null)?"
      }
    },
    {
      "id": "ch3-ms-207",
      "chapter": 3,
      "section": "3.2 Dictionaries",
      "source": {
        "document": "SOTE2 Skript (Softwareentwicklung 2)",
        "section": "3.2 Dictionaries"
      },
      "type": "ms",
      "difficulty": "ultra",
      "question": {
        "de": "Nach Ausführung des folgenden Codes: Welche Ausdrücke sind wahr? Wähle alle zutreffenden aus (drei sind richtig).",
        "en": "After executing the following code: which expressions are true? Select all that apply (three are correct)."
      },
      "clarification": null,
      "code": "a = {\"x\": {\"y\": 1}}\nb = a.copy()\nb[\"x\"][\"y\"] = 2\nc = dict(a)\nc[\"z\"] = 0",
      "options": [
        {
          "id": "a",
          "text": {
            "de": "a[\"x\"][\"y\"] == 2",
            "en": "a[\"x\"][\"y\"] == 2"
          }
        },
        {
          "id": "b",
          "text": {
            "de": "\"z\" in a",
            "en": "\"z\" in a"
          }
        },
        {
          "id": "c",
          "text": {
            "de": "b[\"x\"] is a[\"x\"]",
            "en": "b[\"x\"] is a[\"x\"]"
          }
        },
        {
          "id": "d",
          "text": {
            "de": "c == a",
            "en": "c == a"
          }
        },
        {
          "id": "e",
          "text": {
            "de": "\"z\" in c",
            "en": "\"z\" in c"
          }
        }
      ],
      "answer": [
        "a",
        "c",
        "e"
      ],
      "explanation": {
        "de": "copy und dict() erzeugen flache Kopien: Das innere Dictionary wird geteilt, daher wirkt b[\"x\"][\"y\"] = 2 auch auf a. Der neue Schlüssel \"z\" landet nur in c, weshalb \"z\" in a falsch und c == a ebenfalls falsch ist.",
        "en": "copy and dict() create shallow copies: the inner dictionary is shared, so b[\"x\"][\"y\"] = 2 also affects a. The new key \"z\" only lands in c, which makes \"z\" in a false and c == a false as well."
      },
      "tip": {
        "de": "Unterscheide die äußere Ebene vom geteilten inneren Objekt.",
        "en": "Distinguish the outer level from the shared inner object."
      }
    },
    {
      "id": "ch3-ms-208",
      "chapter": 3,
      "section": "3.3 JSON",
      "source": {
        "document": "SOTE2 Skript (Softwareentwicklung 2)",
        "section": "3.3 JSON / Labor 3 (JSON)"
      },
      "type": "ms",
      "difficulty": "medium",
      "question": {
        "de": "Gegeben ist d = {\"b\": 1, \"a\": 2} und txt = json.dumps(d, indent=4, sort_keys=True). Welche Aussagen sind richtig? Wähle alle zutreffenden aus (drei sind richtig).",
        "en": "Given d = {\"b\": 1, \"a\": 2} and txt = json.dumps(d, indent=4, sort_keys=True). Which statements are correct? Select all that apply (three are correct)."
      },
      "clarification": null,
      "code": null,
      "options": [
        {
          "id": "a",
          "text": {
            "de": "txt ist ein String.",
            "en": "txt is a string."
          }
        },
        {
          "id": "b",
          "text": {
            "de": "In txt steht der Schlüssel \"a\" vor \"b\".",
            "en": "In txt, the key \"a\" comes before \"b\"."
          }
        },
        {
          "id": "c",
          "text": {
            "de": "txt enthält Zeilenumbrüche.",
            "en": "txt contains line breaks."
          }
        },
        {
          "id": "d",
          "text": {
            "de": "Die Schlüsselreihenfolge in d ist danach a, b.",
            "en": "The key order in d is a, b afterwards."
          }
        },
        {
          "id": "e",
          "text": {
            "de": "Die Werte werden sortiert, sodass \"a\" den Wert 1 erhält.",
            "en": "The values are sorted so that \"a\" gets the value 1."
          }
        }
      ],
      "answer": [
        "a",
        "b",
        "c"
      ],
      "explanation": {
        "de": "dumps liefert einen String; sort_keys ordnet die Schlüssel im Text alphabetisch, und indent erzeugt eine mehrzeilige Darstellung. Das Original d bleibt unverändert, und Werte werden nie umsortiert.",
        "en": "dumps returns a string; sort_keys orders the keys alphabetically in the text, and indent produces a multi-line layout. The original d stays unchanged, and values are never re-sorted."
      },
      "tip": {
        "de": "Betrifft die Aussage nur den erzeugten Text oder das Original?",
        "en": "Does the statement concern only the generated text or the original?"
      }
    },
    {
      "id": "ch3-tf-201",
      "chapter": 3,
      "section": "3.2 Dictionaries",
      "source": {
        "document": "SOTE2 Skript (Softwareentwicklung 2)",
        "section": "3.2 Dictionaries / Labor 2 (Dictionaries)"
      },
      "type": "tf",
      "difficulty": "easy",
      "question": {
        "de": "Der folgende Code gibt 1 aus.",
        "en": "The following code prints 1."
      },
      "clarification": null,
      "code": "d = {\"a\": 1}\nd[\"a\"] = 5\nprint(len(d))",
      "answer": true,
      "explanation": {
        "de": "Schlüssel sind eindeutig: Die Zuweisung überschreibt den vorhandenen Wert, statt einen zweiten Eintrag anzulegen. Das Dictionary hat daher weiterhin einen Eintrag.",
        "en": "Keys are unique: the assignment overwrites the existing value instead of adding a second entry. The dictionary therefore still has one entry."
      },
      "tip": {
        "de": "Kann ein Schlüssel zweimal vorkommen?",
        "en": "Can a key occur twice?"
      }
    },
    {
      "id": "ch3-tf-202",
      "chapter": 3,
      "section": "3.2 Dictionaries",
      "source": {
        "document": "SOTE2 Skript (Softwareentwicklung 2)",
        "section": "3.2 Dictionaries"
      },
      "type": "tf",
      "difficulty": "easy",
      "question": {
        "de": "Der folgende Code gibt 1 aus.",
        "en": "The following code prints 1."
      },
      "clarification": null,
      "code": "d = {\"a\": 1, \"b\": 2}\nprint(d[0])",
      "answer": false,
      "explanation": {
        "de": "Dictionaries werden über Schlüssel angesprochen, nicht über Positionen. Da 0 kein Schlüssel ist, wird ein KeyError ausgelöst.",
        "en": "Dictionaries are accessed via keys, not positions. Since 0 is not a key, a KeyError is raised."
      },
      "tip": {
        "de": "Welche Schlüssel hat dieses Dictionary?",
        "en": "Which keys does this dictionary have?"
      }
    },
    {
      "id": "ch3-tf-203",
      "chapter": 3,
      "section": "3.3 JSON",
      "source": {
        "document": "SOTE2 Skript (Softwareentwicklung 2)",
        "section": "3.3 JSON / Labor 3 (JSON)"
      },
      "type": "tf",
      "difficulty": "easy",
      "question": {
        "de": "Wahr oder falsch: In JSON müssen Schlüssel in doppelten Anführungszeichen stehen.",
        "en": "True or false: In JSON, keys must be enclosed in double quotes."
      },
      "clarification": null,
      "code": null,
      "answer": true,
      "explanation": {
        "de": "Gültiges JSON verlangt doppelte Anführungszeichen für alle Schlüssel und String-Werte. Das unterscheidet es von Python, wo auch einfache Anführungszeichen erlaubt sind.",
        "en": "Valid JSON requires double quotes for all keys and string values. This differs from Python, where single quotes are allowed as well."
      },
      "tip": {
        "de": "Denke an den Unterschied zu Python-Dictionaries.",
        "en": "Think about the difference to Python dictionaries."
      }
    },
    {
      "id": "ch3-tf-204",
      "chapter": 3,
      "section": "3.2 Dictionaries",
      "source": {
        "document": "SOTE2 Skript (Softwareentwicklung 2)",
        "section": "3.2 Dictionaries"
      },
      "type": "tf",
      "difficulty": "medium",
      "question": {
        "de": "Der folgende Code gibt die Zahlen 1 und 2 aus.",
        "en": "The following code prints the numbers 1 and 2."
      },
      "clarification": null,
      "code": "d = {\"a\": 1, \"b\": 2}\nfor x in d:\n    print(x)",
      "answer": false,
      "explanation": {
        "de": "Die Iteration über ein Dictionary liefert dessen Schlüssel. Es werden also a und b ausgegeben; für die Werte wäre d.values() nötig.",
        "en": "Iterating over a dictionary yields its keys. So a and b are printed; d.values() would be needed for the values."
      },
      "tip": {
        "de": "Was liefert eine Schleife direkt über das Dictionary?",
        "en": "What does a loop directly over the dictionary yield?"
      }
    },
    {
      "id": "ch3-tf-205",
      "chapter": 3,
      "section": "3.3 JSON",
      "source": {
        "document": "SOTE2 Skript (Softwareentwicklung 2)",
        "section": "3.3 JSON"
      },
      "type": "tf",
      "difficulty": "medium",
      "question": {
        "de": "Der folgende Code gibt hi ohne Anführungszeichen aus.",
        "en": "The following code prints hi without quotation marks."
      },
      "clarification": null,
      "code": "import json\nprint(json.dumps(\"hi\"))",
      "answer": false,
      "explanation": {
        "de": "json.dumps erzeugt JSON-Text, und ein JSON-String besteht aus Anführungszeichen. Die Ausgabe ist daher \"hi\" einschließlich der doppelten Anführungszeichen.",
        "en": "json.dumps produces JSON text, and a JSON string consists of quotation marks. The output is therefore \"hi\" including the double quotes."
      },
      "tip": {
        "de": "Wie sieht ein String in JSON-Text aus?",
        "en": "What does a string look like in JSON text?"
      }
    },
    {
      "id": "ch3-tf-206",
      "chapter": 3,
      "section": "3.3 JSON",
      "source": {
        "document": "SOTE2 Skript (Softwareentwicklung 2)",
        "section": "3.3 JSON"
      },
      "type": "tf",
      "difficulty": "hard",
      "question": {
        "de": "Der folgende Code gibt True aus.",
        "en": "The following code prints True."
      },
      "clarification": null,
      "code": "import json\nprint(json.loads('[1, 2]') == (1, 2))",
      "answer": false,
      "explanation": {
        "de": "JSON-Arrays werden zu Python-Listen. Eine Liste ist nie gleich einem Tupel, daher ist [1, 2] == (1, 2) falsch.",
        "en": "JSON arrays become Python lists. A list never equals a tuple, so [1, 2] == (1, 2) is False."
      },
      "tip": {
        "de": "Welchen Python-Typ liefert json.loads für ein Array?",
        "en": "Which Python type does json.loads return for an array?"
      }
    },
    {
      "id": "ch3-tf-207",
      "chapter": 3,
      "section": "3.2 Dictionaries",
      "source": {
        "document": "SOTE2 Skript (Softwareentwicklung 2)",
        "section": "3.2 Dictionaries"
      },
      "type": "tf",
      "difficulty": "hard",
      "question": {
        "de": "Der folgende Code löst einen RuntimeError aus.",
        "en": "The following code raises a RuntimeError."
      },
      "clarification": null,
      "code": "d = {\"a\": 1, \"b\": 2}\nfor k in d:\n    del d[k]",
      "answer": true,
      "explanation": {
        "de": "Ein Dictionary darf während der Iteration nicht in seiner Größe verändert werden. Nach dem ersten Löschen meldet Python \"dictionary changed size during iteration\" als RuntimeError.",
        "en": "A dictionary must not change its size during iteration. After the first deletion, Python reports \"dictionary changed size during iteration\" as a RuntimeError."
      },
      "tip": {
        "de": "Was passiert, wenn man das Objekt verändert, über das man gerade iteriert?",
        "en": "What happens when you modify the object you are currently iterating over?"
      }
    },
    {
      "id": "ch3-tf-208",
      "chapter": 3,
      "section": "3.2 Dictionaries",
      "source": {
        "document": "SOTE2 Skript (Softwareentwicklung 2)",
        "section": "3.2 Dictionaries"
      },
      "type": "tf",
      "difficulty": "ultra",
      "question": {
        "de": "Der folgende Code gibt False aus, weil die Reihenfolge der Schlüssel verschieden ist.",
        "en": "The following code prints False because the order of the keys is different."
      },
      "clarification": null,
      "code": "print({\"a\": 1, \"b\": 2} == {\"b\": 2, \"a\": 1})",
      "answer": false,
      "explanation": {
        "de": "Obwohl Dictionaries die Einfügereihenfolge merken, vergleicht == nur die Schlüssel-Wert-Paare. Die Reihenfolge spielt für die Gleichheit keine Rolle, daher wird True ausgegeben.",
        "en": "Although dictionaries remember insertion order, == only compares the key-value pairs. Order does not matter for equality, so True is printed."
      },
      "tip": {
        "de": "Wird bei == die Reihenfolge verglichen?",
        "en": "Does == compare the order?"
      }
    },
    {
      "id": "ch3-fib-201",
      "chapter": 3,
      "section": "3.2 Dictionaries",
      "source": {
        "document": "SOTE2 Skript (Softwareentwicklung 2)",
        "section": "3.2 Dictionaries"
      },
      "type": "fib",
      "difficulty": "easy",
      "question": {
        "de": "Ergänze die fehlende Methode, sodass die Werte aufsummiert werden.",
        "en": "Fill in the missing method so that the values are summed up."
      },
      "clarification": {
        "de": "Gesucht ist der reine Methodenname ohne Klammern.",
        "en": "The plain method name without parentheses is expected."
      },
      "code": "d = {\"a\": 1, \"b\": 2}\ntotal = sum(d.____())\nprint(total)  # prints 3",
      "answer": null,
      "blanks": [
        {
          "accepted": [
            "values",
            ".values"
          ],
          "caseSensitive": true
        }
      ],
      "explanation": {
        "de": "d.values() liefert die Werte 1 und 2, sum addiert sie zu 3. Mit keys wären es die Schlüssel, die sich nicht summieren ließen.",
        "en": "d.values() yields the values 1 and 2, and sum adds them to 3. keys would give the strings, which cannot be summed."
      },
      "tip": {
        "de": "Summiert werden sollen Werte, nicht Schlüssel.",
        "en": "Values are to be summed, not keys."
      }
    },
    {
      "id": "ch3-fib-202",
      "chapter": 3,
      "section": "3.2 Dictionaries",
      "source": {
        "document": "SOTE2 Skript (Softwareentwicklung 2)",
        "section": "3.2 Dictionaries / Labor 2 (Dictionaries)"
      },
      "type": "fib",
      "difficulty": "easy",
      "question": {
        "de": "Ergänze den Ausdruck, der ein leeres Dictionary erzeugt.",
        "en": "Fill in the expression that creates an empty dictionary."
      },
      "clarification": null,
      "code": "counts = ____\ncounts[\"a\"] = 1\nprint(counts)  # prints {'a': 1}",
      "answer": null,
      "blanks": [
        {
          "accepted": [
            "{}",
            "dict()"
          ],
          "caseSensitive": true
        }
      ],
      "explanation": {
        "de": "Ein leeres Dictionary schreibt man {} oder dict(). Anschließend können Einträge per Zuweisung hinzugefügt werden.",
        "en": "An empty dictionary is written {} or dict(). Entries can then be added by assignment."
      },
      "tip": {
        "de": "Geschweifte Klammern ohne Inhalt.",
        "en": "Curly braces without content."
      }
    },
    {
      "id": "ch3-fib-203",
      "chapter": 3,
      "section": "3.3 JSON",
      "source": {
        "document": "SOTE2 Skript (Softwareentwicklung 2)",
        "section": "3.3 JSON / Labor 3 (JSON)"
      },
      "type": "fib",
      "difficulty": "easy",
      "question": {
        "de": "Ergänze den Dateimodus, der zum Schreiben von JSON in eine Datei nötig ist.",
        "en": "Fill in the file mode needed for writing JSON into a file."
      },
      "clarification": {
        "de": "Gesucht ist nur der Buchstabe ohne Anführungszeichen.",
        "en": "Only the letter without quotation marks is expected."
      },
      "code": "import json\nwith open(\"data.json\", \"____\") as f:\n    json.dump({\"a\": 1}, f)",
      "answer": null,
      "blanks": [
        {
          "accepted": [
            "w"
          ],
          "caseSensitive": true
        }
      ],
      "explanation": {
        "de": "Zum Schreiben (mit Überschreiben) wird der Modus \"w\" verwendet. Ohne Modus würde die Datei nur zum Lesen geöffnet.",
        "en": "Writing (with overwriting) uses mode \"w\". Without a mode the file would be opened for reading only."
      },
      "tip": {
        "de": "Ein einzelner Buchstabe, der für write steht.",
        "en": "A single letter standing for write."
      }
    },
    {
      "id": "ch3-fib-204",
      "chapter": 3,
      "section": "3.3 JSON",
      "source": {
        "document": "SOTE2 Skript (Softwareentwicklung 2)",
        "section": "3.3 JSON / Labor 3 (JSON)"
      },
      "type": "fib",
      "difficulty": "medium",
      "question": {
        "de": "Ergänze den Wert, damit die Schlüssel in der JSON-Ausgabe alphabetisch sortiert werden.",
        "en": "Fill in the value so that the keys in the JSON output are sorted alphabetically."
      },
      "clarification": null,
      "code": "import json\nprint(json.dumps({\"b\": 1, \"a\": 2}, sort_keys=____))  # prints {\"a\": 2, \"b\": 1}",
      "answer": null,
      "blanks": [
        {
          "accepted": [
            "True"
          ],
          "caseSensitive": true
        }
      ],
      "explanation": {
        "de": "sort_keys=True aktiviert die alphabetische Sortierung der Schlüssel. Der Standardwert ist False.",
        "en": "sort_keys=True enables alphabetical sorting of the keys. The default is False."
      },
      "tip": {
        "de": "Der Parameter ist ein Wahrheitswert.",
        "en": "The parameter is a boolean."
      }
    },
    {
      "id": "ch3-fib-205",
      "chapter": 3,
      "section": "3.2 Dictionaries",
      "source": {
        "document": "SOTE2 Skript (Softwareentwicklung 2)",
        "section": "3.2 Dictionaries"
      },
      "type": "fib",
      "difficulty": "easy",
      "question": {
        "de": "Ergänze den Standardwert, der für einen fehlenden Schlüssel zurückgegeben wird.",
        "en": "Fill in the default value returned for a missing key."
      },
      "clarification": null,
      "code": "c = {\"a\": 1}\nprint(c.get(\"b\", ____))  # prints -1",
      "answer": null,
      "blanks": [
        {
          "accepted": [
            "-1"
          ],
          "caseSensitive": true
        }
      ],
      "explanation": {
        "de": "Das zweite Argument von get ist der Rückgabewert, falls der Schlüssel fehlt. Hier muss es -1 sein, damit -1 ausgegeben wird.",
        "en": "The second argument of get is the return value if the key is missing. It must be -1 here for -1 to be printed."
      },
      "tip": {
        "de": "Siehe den Kommentar hinter print.",
        "en": "See the comment after print."
      }
    },
    {
      "id": "ch3-fib-206",
      "chapter": 3,
      "section": "3.2 Dictionaries",
      "source": {
        "document": "SOTE2 Skript (Softwareentwicklung 2)",
        "section": "3.2 Dictionaries"
      },
      "type": "fib",
      "difficulty": "medium",
      "question": {
        "de": "Ergänze den Operator, sodass das Dictionary die Quadratzahlen enthält.",
        "en": "Fill in the operator so that the dictionary contains the square numbers."
      },
      "clarification": null,
      "code": "squares = {n: n ____ 2 for n in range(4)}\nprint(squares[3])  # prints 9",
      "answer": null,
      "blanks": [
        {
          "accepted": [
            "**"
          ],
          "caseSensitive": true
        }
      ],
      "explanation": {
        "de": "Der Potenzoperator ** berechnet n hoch 2, für n = 3 ergibt das 9. Die Comprehension erzeugt die Einträge 0:0, 1:1, 2:4, 3:9.",
        "en": "The power operator ** computes n squared, giving 9 for n = 3. The comprehension creates the entries 0:0, 1:1, 2:4, 3:9."
      },
      "tip": {
        "de": "Welcher Operator potenziert in Python?",
        "en": "Which operator raises to a power in Python?"
      }
    },
    {
      "id": "ch3-fib-207",
      "chapter": 3,
      "section": "3.3 JSON",
      "source": {
        "document": "SOTE2 Skript (Softwareentwicklung 2)",
        "section": "3.3 JSON"
      },
      "type": "fib",
      "difficulty": "medium",
      "question": {
        "de": "Ergänze den Index, um das letzte Element der Liste unter \"a\" auszugeben.",
        "en": "Fill in the index to print the last element of the list under \"a\"."
      },
      "clarification": null,
      "code": "import json\ndata = json.loads('{\"a\": [10, 20]}')\nprint(data[\"a\"][____])  # prints 20",
      "answer": null,
      "blanks": [
        {
          "accepted": [
            "1",
            "-1"
          ],
          "caseSensitive": true
        }
      ],
      "explanation": {
        "de": "Das Array wird zur Liste [10, 20]; das Element 20 steht an Index 1 beziehungsweise -1. Index 0 würde 10 liefern.",
        "en": "The array becomes the list [10, 20]; the element 20 is at index 1 or -1. Index 0 would give 10."
      },
      "tip": {
        "de": "Die Indizierung beginnt bei 0.",
        "en": "Indexing starts at 0."
      }
    },
    {
      "id": "ch3-fib-208",
      "chapter": 3,
      "section": "3.2 Dictionaries",
      "source": {
        "document": "SOTE2 Skript (Softwareentwicklung 2)",
        "section": "3.2 Dictionaries"
      },
      "type": "fib",
      "difficulty": "hard",
      "question": {
        "de": "Ergänze die Methode von dict, die aus einer Liste von Schlüsseln ein Dictionary mit einheitlichem Startwert erzeugt.",
        "en": "Fill in the dict method that creates a dictionary with a uniform initial value from a list of keys."
      },
      "clarification": {
        "de": "Gesucht ist der reine Methodenname ohne Klammern.",
        "en": "The plain method name without parentheses is expected."
      },
      "code": "d = dict.____([\"a\", \"b\"], 0)\nprint(d[\"b\"])  # prints 0",
      "answer": null,
      "blanks": [
        {
          "accepted": [
            "fromkeys",
            ".fromkeys"
          ],
          "caseSensitive": true
        }
      ],
      "explanation": {
        "de": "dict.fromkeys(keys, value) legt für jeden Schlüssel einen Eintrag mit demselben Startwert an. Hier entsteht {\"a\": 0, \"b\": 0}.",
        "en": "dict.fromkeys(keys, value) creates an entry with the same initial value for every key. Here {\"a\": 0, \"b\": 0} is created."
      },
      "tip": {
        "de": "Der Name beschreibt, woher die Schlüssel kommen.",
        "en": "The name describes where the keys come from."
      }
    },
    {
      "id": "ch3-fib-209",
      "chapter": 3,
      "section": "3.3 JSON",
      "source": {
        "document": "SOTE2 Skript (Softwareentwicklung 2)",
        "section": "3.3 JSON"
      },
      "type": "fib",
      "difficulty": "hard",
      "question": {
        "de": "Ergänze den Wert, damit das ä in der JSON-Ausgabe unverändert erscheint.",
        "en": "Fill in the value so that the ä appears unchanged in the JSON output."
      },
      "clarification": null,
      "code": "import json\nprint(json.dumps(\"ä\", ensure_ascii=____))  # prints \"ä\"",
      "answer": null,
      "blanks": [
        {
          "accepted": [
            "False"
          ],
          "caseSensitive": true
        }
      ],
      "explanation": {
        "de": "Standardmäßig (ensure_ascii=True) werden Nicht-ASCII-Zeichen als \\uXXXX-Folge geschrieben. Mit False bleibt das Zeichen erhalten.",
        "en": "By default (ensure_ascii=True) non-ASCII characters are written as \\uXXXX sequences. With False the character is preserved."
      },
      "tip": {
        "de": "Das ASCII-Escaping soll abgeschaltet werden.",
        "en": "ASCII escaping is to be switched off."
      }
    },
    {
      "id": "ch3-fib-210",
      "chapter": 3,
      "section": "3.2 Dictionaries",
      "source": {
        "document": "SOTE2 Skript (Softwareentwicklung 2)",
        "section": "3.2 Dictionaries"
      },
      "type": "fib",
      "difficulty": "ultra",
      "question": {
        "de": "Ergänze die Methode, die den zuletzt eingefügten Eintrag entfernt und als Paar zurückgibt.",
        "en": "Fill in the method that removes the most recently inserted entry and returns it as a pair."
      },
      "clarification": null,
      "code": "d = {\"a\": 1, \"b\": 2}\nremoved = d.____()\nprint(removed)  # prints ('b', 2)",
      "answer": null,
      "blanks": [
        {
          "accepted": [
            "popitem",
            ".popitem"
          ],
          "caseSensitive": true
        }
      ],
      "explanation": {
        "de": "popitem entfernt seit Python 3.7 den zuletzt eingefügten Eintrag (LIFO) und gibt ihn als Tupel aus Schlüssel und Wert zurück. pop bräuchte dagegen einen Schlüssel als Argument.",
        "en": "Since Python 3.7, popitem removes the most recently inserted entry (LIFO) and returns it as a (key, value) tuple. pop, in contrast, would need a key as an argument."
      },
      "tip": {
        "de": "Die Methode braucht kein Argument und liefert ein Paar.",
        "en": "The method takes no argument and returns a pair."
      }
    },
    {
      "id": "ch3-fe-201",
      "chapter": 3,
      "section": "3.2 Dictionaries",
      "source": {
        "document": "SOTE2 Skript (Softwareentwicklung 2)",
        "section": "3.2 Dictionaries"
      },
      "type": "fe",
      "difficulty": "medium",
      "question": {
        "de": "In welcher Zeile liegt der Fehler, der zu einer Exception führt?",
        "en": "Which line contains the error that leads to an exception?"
      },
      "clarification": {
        "de": "Das Programm soll die Mengen aufsummieren.",
        "en": "The program is supposed to sum up the quantities."
      },
      "code": "1: stock = {\"a\": 3, \"b\": 5}\n2: total = 0\n3: for name, qty in stock:\n4:     total += qty\n5: print(total)",
      "options": [
        {
          "id": "a",
          "text": {
            "de": "Zeile 1",
            "en": "Line 1"
          }
        },
        {
          "id": "b",
          "text": {
            "de": "Zeile 3",
            "en": "Line 3"
          }
        },
        {
          "id": "c",
          "text": {
            "de": "Zeile 4",
            "en": "Line 4"
          }
        },
        {
          "id": "d",
          "text": {
            "de": "Zeile 5",
            "en": "Line 5"
          }
        }
      ],
      "answer": "b",
      "explanation": {
        "de": "Die Iteration über stock liefert nur Schlüssel (Strings wie \"a\"), die sich nicht in zwei Variablen entpacken lassen; es folgt ein ValueError. Korrekt wäre for name, qty in stock.items().",
        "en": "Iterating over stock yields only keys (strings like \"a\"), which cannot be unpacked into two variables; a ValueError follows. The correct form is for name, qty in stock.items()."
      },
      "tip": {
        "de": "Was liefert eine for-Schleife direkt über ein Dictionary?",
        "en": "What does a for loop directly over a dictionary yield?"
      }
    },
    {
      "id": "ch3-fe-202",
      "chapter": 3,
      "section": "3.3 JSON",
      "source": {
        "document": "SOTE2 Skript (Softwareentwicklung 2)",
        "section": "3.3 JSON"
      },
      "type": "fe",
      "difficulty": "hard",
      "question": {
        "de": "In welcher Zeile liegt der Fehler, der zu einer Exception führt?",
        "en": "Which line contains the error that leads to an exception?"
      },
      "clarification": null,
      "code": "1: import json\n2: text = json.dumps({\"id\": 7, \"tags\": [\"a\", \"b\"]})\n3: data = json.loads(text)\n4: data[\"tags\"].add(\"c\")\n5: print(data)",
      "options": [
        {
          "id": "a",
          "text": {
            "de": "Zeile 2",
            "en": "Line 2"
          }
        },
        {
          "id": "b",
          "text": {
            "de": "Zeile 3",
            "en": "Line 3"
          }
        },
        {
          "id": "c",
          "text": {
            "de": "Zeile 4",
            "en": "Line 4"
          }
        },
        {
          "id": "d",
          "text": {
            "de": "Zeile 5",
            "en": "Line 5"
          }
        }
      ],
      "answer": "c",
      "explanation": {
        "de": "JSON-Arrays werden von json.loads zu Python-Listen, und Listen besitzen keine Methode add (diese gehört zu set). Zeile 4 löst deshalb einen AttributeError aus; richtig wäre append.",
        "en": "json.loads turns JSON arrays into Python lists, and lists have no add method (that belongs to set). Line 4 therefore raises an AttributeError; append would be correct."
      },
      "tip": {
        "de": "In welchen Python-Typ wird ein JSON-Array umgewandelt?",
        "en": "Into which Python type is a JSON array converted?"
      }
    },
    {
      "id": "ch3-fe-203",
      "chapter": 3,
      "section": "3.3 JSON",
      "source": {
        "document": "SOTE2 Skript (Softwareentwicklung 2)",
        "section": "3.3 JSON"
      },
      "type": "fe",
      "difficulty": "hard",
      "question": {
        "de": "In welcher Zeile liegt der Fehler, der zu einer Exception führt?",
        "en": "Which line contains the error that leads to an exception?"
      },
      "clarification": null,
      "code": "1: import json\n2: raw = '{\"items\": [{\"id\": 1}, {\"id\": 2}]}'\n3: data = json.loads(raw)\n4: ids = [x[\"id\"] for x in data]\n5: print(ids)",
      "options": [
        {
          "id": "a",
          "text": {
            "de": "Zeile 2",
            "en": "Line 2"
          }
        },
        {
          "id": "b",
          "text": {
            "de": "Zeile 3",
            "en": "Line 3"
          }
        },
        {
          "id": "c",
          "text": {
            "de": "Zeile 4",
            "en": "Line 4"
          }
        },
        {
          "id": "d",
          "text": {
            "de": "Zeile 5",
            "en": "Line 5"
          }
        }
      ],
      "answer": "c",
      "explanation": {
        "de": "data ist ein Dictionary, die Iteration liefert daher den Schlüssel \"items\" als String, und \"items\"[\"id\"] löst einen TypeError aus. Zu iterieren wäre über data[\"items\"].",
        "en": "data is a dictionary, so iterating yields the key \"items\" as a string, and \"items\"[\"id\"] raises a TypeError. The loop should iterate over data[\"items\"]."
      },
      "tip": {
        "de": "Welche Struktur steht auf oberster Ebene des JSON-Textes?",
        "en": "Which structure is at the top level of the JSON text?"
      }
    },
    {
      "id": "ch3-fe-204",
      "chapter": 3,
      "section": "3.3 JSON",
      "source": {
        "document": "SOTE2 Skript (Softwareentwicklung 2)",
        "section": "3.3 JSON"
      },
      "type": "fe",
      "difficulty": "ultra",
      "question": {
        "de": "In welcher Zeile liegt der Fehler, der beim Ausführen zu einer Exception führt?",
        "en": "Which line contains the error that leads to an exception when executed?"
      },
      "clarification": null,
      "code": "1: import json\n2: scores = {(\"a\", 1): 10, (\"b\", 2): 20}\n3: text = json.dumps(scores)\n4: print(text)",
      "options": [
        {
          "id": "a",
          "text": {
            "de": "Zeile 1",
            "en": "Line 1"
          }
        },
        {
          "id": "b",
          "text": {
            "de": "Zeile 2",
            "en": "Line 2"
          }
        },
        {
          "id": "c",
          "text": {
            "de": "Zeile 3",
            "en": "Line 3"
          }
        },
        {
          "id": "d",
          "text": {
            "de": "Zeile 4",
            "en": "Line 4"
          }
        }
      ],
      "answer": "c",
      "explanation": {
        "de": "Tupel sind in Python zwar gültige Dictionary-Schlüssel (Zeile 2 ist fehlerfrei), JSON-Objekte erlauben aber nur Strings als Schlüssel. json.dumps meldet in Zeile 3 deshalb einen TypeError (keys must be str, int, float, bool or None).",
        "en": "Tuples are valid dictionary keys in Python (line 2 is fine), but JSON objects only allow strings as keys. json.dumps therefore raises a TypeError in line 3 (keys must be str, int, float, bool or None)."
      },
      "tip": {
        "de": "Prüfe, welche Schlüsseltypen JSON zulässt.",
        "en": "Check which key types JSON allows."
      }
    }
];
