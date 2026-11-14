// SOTE2 question bank
const QUESTIONS = [
  {
    "id": "ch1-mc-001",
    "chapter": 1,
    "section": "1.1 Intelligente Systeme",
    "source": {
      "document": "SOTE2 Skript (Softwareentwicklung 2)",
      "section": "1.1 Intelligente Systeme"
    },
    "type": "mc",
    "difficulty": "easy",
    "question": {
      "de": "Welche Eigenschaft kennzeichnet laut Vorlesung sehr viele intelligente Systeme von heute?",
      "en": "According to the lecture, which property characterizes very many of today's intelligent systems?"
    },
    "clarification": {
      "de": "Denke an Beispiele wie Smartphones, Smart-Home-Geräte oder vernetzte Autos.",
      "en": "Think of examples such as smartphones, smart home devices or connected cars."
    },
    "code": null,
    "options": [
      {
        "id": "a",
        "text": {
          "de": "Es ist vernetzt und kommuniziert über ein Netzwerk (z. B. das Internet) mit anderen Systemen.",
          "en": "It is networked and communicates with other systems over a network (e.g. the internet)."
        }
      },
      {
        "id": "b",
        "text": {
          "de": "Es arbeitet grundsätzlich isoliert und tauscht keine Daten mit anderen Systemen aus.",
          "en": "It fundamentally works in isolation and does not exchange data with other systems."
        }
      },
      {
        "id": "c",
        "text": {
          "de": "Es besitzt immer einen Bildschirm und eine grafische Benutzeroberfläche.",
          "en": "It always has a screen and a graphical user interface."
        }
      },
      {
        "id": "d",
        "text": {
          "de": "Es speichert Daten ausschließlich in einer relationalen Datenbank.",
          "en": "It stores data exclusively in a relational database."
        }
      }
    ],
    "answer": "a",
    "explanation": {
      "de": "Das Skript betont in Abschnitt 1.1, dass sehr viele intelligente Systeme heute vernetzt sind: Sie kommunizieren über Netzwerke wie das Internet, lassen sich z. B. per App steuern oder tauschen Daten mit anderen Systemen aus. Isolation (b), eine grafische Oberfläche (c) oder eine relationale Datenbank (d) sind keine kennzeichnenden Merkmale.",
      "en": "Section 1.1 of the script emphasizes that very many intelligent systems today are networked: they communicate over networks such as the internet, can be controlled via apps, or exchange data with other systems. Isolation (b), a graphical interface (c) or a relational database (d) are not defining characteristics."
    },
    "tip": {
      "de": "Im Skript stehen Beispiele wie Smart-Home-Geräte und vernetzte Autos — was haben sie gemeinsam?",
      "en": "The script lists examples such as smart home devices and connected cars — what do they have in common?"
    }
  },
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
      "de": "Eine URL besteht u. a. aus Schema (https), Host, optionalem Port (8080), Pfad (/info/seite.html) und optionalem Query-String (id=5). Ein Primärschlüssel (d) ist ein Datenbankbegriff, und ein Compiler (e) hat mit dem Aufbau einer URL nichts zu tun.",
      "en": "A URL consists of a scheme (https), host, optional port (8080), path (/info/seite.html) and optional query string (id=5), among others. A primary key (d) is a database term, and a compiler (e) has nothing to do with the structure of a URL."
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
      "de": "Der Query-String beginnt nach dem ? und endet vor dem optionalen Fragment (#top). Daher ist x=1&y=2 korrekt; (b) schließt fälschlich das Fragment ein, (c) ist der Pfad und (d) der Port.",
      "en": "The query string starts after the ? and ends before the optional fragment (#top). Therefore x=1&y=2 is correct; (b) wrongly includes the fragment, (c) is the path and (d) is the port."
    },
    "tip": {
      "de": "Achte auf die Zeichen ? und # als Trenner.",
      "en": "Look at the characters ? and # as separators."
    }
  },
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
      "de": "JSON verlangt doppelte Anführungszeichen für Schlüssel und Strings, dumps gibt einen str zurück, und None wird zu null. Kommentare (c) sieht das Format nicht vor, und einfache Anführungszeichen (d) sind kein gültiges JSON.",
      "en": "JSON requires double quotes for keys and strings, dumps returns a str, and None becomes null. The format has no comments (c), and single quotes (d) are not valid JSON."
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
      "de": "readline() liefert die erste Zeile inklusive \\n, read() danach den Rest ab der aktuellen Position. Nach dem with-Block ist die Datei geschlossen, das Attribut closed ist aber weiterhin lesbar und True; ein Fehler (d) tritt nicht auf.",
      "en": "readline() returns the first line including \\n, read() then returns the rest from the current position. After the with block the file is closed, but the attribute closed can still be read and is True; no error (d) occurs."
    },
    "tip": {
      "de": "Überlege, wo der Dateizeiger nach readline() steht und was with am Ende tut.",
      "en": "Think about where the file pointer is after readline() and what with does at the end."
    }
  },
  {
    "id": "ch5-mc-001",
    "chapter": 5,
    "section": "5.3 Pandas",
    "source": {
      "document": "SOTE2 Skript (Softwareentwicklung 2)",
      "section": "5.3 Pandas / Labor 4 (Dateien und Datensätze)"
    },
    "type": "mc",
    "difficulty": "easy",
    "question": {
      "de": "Mit welcher Pandas-Funktion wird eine CSV-Datei in einen DataFrame geladen?",
      "en": "Which Pandas function loads a CSV file into a DataFrame?"
    },
    "clarification": {
      "de": "Pandas wurde mit import pandas as pd importiert.",
      "en": "Pandas was imported with import pandas as pd."
    },
    "code": null,
    "options": [
      {
        "id": "a",
        "text": {
          "de": "pd.read_csv(\"daten.csv\")",
          "en": "pd.read_csv(\"daten.csv\")"
        }
      },
      {
        "id": "b",
        "text": {
          "de": "pd.open_csv(\"daten.csv\")",
          "en": "pd.open_csv(\"daten.csv\")"
        }
      },
      {
        "id": "c",
        "text": {
          "de": "pd.load_frame(\"daten.csv\")",
          "en": "pd.load_frame(\"daten.csv\")"
        }
      },
      {
        "id": "d",
        "text": {
          "de": "pd.DataFrame.csv(\"daten.csv\")",
          "en": "pd.DataFrame.csv(\"daten.csv\")"
        }
      }
    ],
    "answer": "a",
    "explanation": {
      "de": "pd.read_csv liest eine CSV-Datei und gibt einen DataFrame zurück. Die übrigen Namen existieren in Pandas nicht.",
      "en": "pd.read_csv reads a CSV file and returns a DataFrame. The other names do not exist in Pandas."
    },
    "tip": {
      "de": "Pandas-Lesefunktionen beginnen mit read_.",
      "en": "Pandas reading functions start with read_."
    }
  },
  {
    "id": "ch5-mc-002",
    "chapter": 5,
    "section": "5.3 Pandas",
    "source": {
      "document": "SOTE2 Skript (Softwareentwicklung 2)",
      "section": "5.3 Pandas / Labor 4 (Dateien und Datensätze)"
    },
    "type": "mc",
    "difficulty": "hard",
    "question": {
      "de": "Welche Ausgabe erzeugt der folgende Code?",
      "en": "What output does the following code produce?"
    },
    "clarification": {
      "de": "Die Boolesche Maske filtert Zeilen; danach wird eine Spalte ausgewählt.",
      "en": "The Boolean mask filters rows; afterwards one column is selected."
    },
    "code": "import pandas as pd\ndf = pd.DataFrame({\"name\": [\"A\", \"B\", \"C\"], \"score\": [50, 80, 65]})\nprint(df[df[\"score\"] > 60][\"name\"].tolist())",
    "options": [
      {
        "id": "a",
        "text": {
          "de": "['B', 'C']",
          "en": "['B', 'C']"
        }
      },
      {
        "id": "b",
        "text": {
          "de": "['A']",
          "en": "['A']"
        }
      },
      {
        "id": "c",
        "text": {
          "de": "[80, 65]",
          "en": "[80, 65]"
        }
      },
      {
        "id": "d",
        "text": {
          "de": "['A', 'B', 'C']",
          "en": "['A', 'B', 'C']"
        }
      }
    ],
    "answer": "a",
    "explanation": {
      "de": "Die Maske df[\"score\"] > 60 ist nur für B (80) und C (65) wahr, daher bleiben diese beiden Zeilen. Danach wählt [\"name\"] die Namen aus, tolist() macht daraus eine Liste: ['B', 'C']. Die Scores (c) wären die Ausgabe bei Auswahl der Spalte \"score\".",
      "en": "The mask df[\"score\"] > 60 is only true for B (80) and C (65), so these two rows remain. Then [\"name\"] selects the names and tolist() turns them into a list: ['B', 'C']. The scores (c) would be the output if the column \"score\" were selected."
    },
    "tip": {
      "de": "Berechne zuerst die Maske, dann die gefilterten Zeilen, dann die Spalte.",
      "en": "First compute the mask, then the filtered rows, then the column."
    }
  },
  {
    "id": "ch5-fib-001",
    "chapter": 5,
    "section": "5.4 Visualisierung mit Matplotlib",
    "source": {
      "document": "SOTE2 Skript (Softwareentwicklung 2)",
      "section": "5.4 Visualisierung mit Matplotlib / Labor 5 (Datensätze und Visualisierung)"
    },
    "type": "fib",
    "difficulty": "easy",
    "question": {
      "de": "Ergänze die fehlenden Funktionen: erst die x-Achse beschriften, dann das Diagramm anzeigen.",
      "en": "Fill in the missing functions: first label the x-axis, then display the plot."
    },
    "clarification": {
      "de": "Gesucht sind Funktionsnamen von matplotlib.pyplot (als plt importiert).",
      "en": "Function names of matplotlib.pyplot (imported as plt) are expected."
    },
    "code": "import matplotlib.pyplot as plt\nplt.plot([1, 2, 3], [2, 4, 8])\nplt.____(\"x\")\nplt.____()",
    "answer": null,
    "blanks": [
      {
        "accepted": [
          "xlabel"
        ],
        "caseSensitive": true
      },
      {
        "accepted": [
          "show"
        ],
        "caseSensitive": true
      }
    ],
    "explanation": {
      "de": "plt.xlabel setzt die Beschriftung der x-Achse, plt.show öffnet das Fenster mit dem Diagramm. Analog beschriftet plt.ylabel die y-Achse.",
      "en": "plt.xlabel sets the label of the x-axis, plt.show opens the window with the plot. Analogously, plt.ylabel labels the y-axis."
    },
    "tip": {
      "de": "Die Namen setzen sich aus Achsenname und label bzw. aus dem Verb für Anzeigen zusammen.",
      "en": "The names are built from the axis name plus label, and from the verb for displaying."
    }
  },
  {
    "id": "ch5-tf-001",
    "chapter": 5,
    "section": "5.3 Pandas",
    "source": {
      "document": "SOTE2 Skript (Softwareentwicklung 2)",
      "section": "5.3 Pandas / Labor 4 (Dateien und Datensätze)"
    },
    "type": "tf",
    "difficulty": "ultra",
    "question": {
      "de": "Wahr oder falsch: Für den folgenden DataFrame liefert df.loc[1:3] drei Zeilen, df.iloc[1:3] aber nur zwei Zeilen.",
      "en": "True or false: For the following DataFrame, df.loc[1:3] returns three rows, but df.iloc[1:3] returns only two rows."
    },
    "clarification": null,
    "code": "import pandas as pd\ndf = pd.DataFrame({\"v\": [10, 20, 30, 40, 50]})",
    "answer": true,
    "explanation": {
      "de": "loc arbeitet mit Labels, und der Endwert des Slices ist eingeschlossen: Zeilen 1, 2 und 3. iloc arbeitet mit Positionen wie normale Python-Slices, Endwert ausgeschlossen: Zeilen 1 und 2. Beim Standardindex (0 bis 4) stimmen Label und Position überein.",
      "en": "loc works with labels and the end of the slice is inclusive: rows 1, 2 and 3. iloc works with positions like normal Python slices, end exclusive: rows 1 and 2. With the default index (0 to 4) labels and positions coincide."
    },
    "tip": {
      "de": "Vergleiche, ob der Endwert beim Slicing jeweils mitgezählt wird.",
      "en": "Compare whether the end value is counted for each kind of slicing."
    }
  },
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
      "de": "MongoDB speichert Dokumente im JSON-ähnlichen BSON-Format, die in Collections liegen und verschachtelt sein dürfen. Tabellen mit festem Schema (b) beschreiben RDBMS, Graphen (d) Graphdatenbanken.",
      "en": "MongoDB stores documents in the JSON-like BSON format, which live in collections and may be nested. Tables with a fixed schema (b) describe RDBMS, graphs (d) describe graph databases."
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
