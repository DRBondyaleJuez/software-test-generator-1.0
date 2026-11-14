// SOTE2 question bank - chapter 5
const QUESTIONS_CH5 = [
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
      "de": "Die Maske df[\"score\"] > 60 ist nur für B (80) und C (65) wahr, daher bleiben diese beiden Zeilen. Danach wählt [\"name\"] die Namen aus, tolist() macht daraus eine Liste: ['B', 'C']. Die Scores [80, 65] wären die Ausgabe bei Auswahl der Spalte \"score\".",
      "en": "The mask df[\"score\"] > 60 is only true for B (80) and C (65), so these two rows remain. Then [\"name\"] selects the names and tolist() turns them into a list: ['B', 'C']. The scores [80, 65] would be the output if the column \"score\" were selected."
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
    "id": "ch5-mc-101",
    "chapter": 5,
    "section": "5.2 Überblick",
    "source": {
      "document": "SOTE2 Skript (Softwareentwicklung 2)",
      "section": "5.2 Überblick"
    },
    "type": "mc",
    "difficulty": "easy",
    "question": {
      "de": "Welches Paket wird in diesem Modul zur Visualisierung von Daten verwendet?",
      "en": "Which package is used in this module to visualize data?"
    },
    "clarification": null,
    "code": null,
    "options": [
      {
        "id": "a",
        "text": {
          "de": "Matplotlib",
          "en": "Matplotlib"
        }
      },
      {
        "id": "b",
        "text": {
          "de": "Pandas",
          "en": "Pandas"
        }
      },
      {
        "id": "c",
        "text": {
          "de": "JSON",
          "en": "JSON"
        }
      },
      {
        "id": "d",
        "text": {
          "de": "Numpy",
          "en": "Numpy"
        }
      }
    ],
    "answer": "a",
    "explanation": {
      "de": "Matplotlib dient der Visualisierung (Linien-, Balken-, Streudiagramme). Pandas lädt und verarbeitet Datensätze, JSON ist ein Datenformat und Numpy ist eine Bibliothek für numerische Arrays.",
      "en": "Matplotlib is used for visualization (line, bar and scatter plots). Pandas loads and processes datasets, JSON is a data format and Numpy is a library for numerical arrays."
    },
    "tip": {
      "de": "Das Modul trennt Verarbeiten und Darstellen der Daten.",
      "en": "The module separates processing data from displaying it."
    }
  },
  {
    "id": "ch5-tf-101",
    "chapter": 5,
    "section": "5.2 Überblick",
    "source": {
      "document": "SOTE2 Skript (Softwareentwicklung 2)",
      "section": "5.2 Überblick"
    },
    "type": "tf",
    "difficulty": "easy",
    "question": {
      "de": "Wahr oder falsch: In diesem Modul wird Pandas zum Laden und Verarbeiten von Datensätzen und Matplotlib zur Visualisierung verwendet.",
      "en": "True or false: In this module, Pandas is used to load and process datasets and Matplotlib is used to visualize them."
    },
    "clarification": null,
    "code": null,
    "answer": true,
    "explanation": {
      "de": "Genau diese Aufgabenteilung nennt der Überblick: Pandas für Laden und Verarbeiten, Matplotlib für die Visualisierung.",
      "en": "The overview names exactly this division of labor: Pandas for loading and processing, Matplotlib for visualization."
    },
    "tip": {
      "de": "Überlege, welche Bibliothek für Tabellen und welche für Diagramme bekannt ist.",
      "en": "Think about which library is known for tables and which for charts."
    }
  },
  {
    "id": "ch5-ms-101",
    "chapter": 5,
    "section": "5.2 Überblick",
    "source": {
      "document": "SOTE2 Skript (Softwareentwicklung 2)",
      "section": "5.2 Überblick"
    },
    "type": "ms",
    "difficulty": "medium",
    "question": {
      "de": "Welche der folgenden Quellen können strukturierte Datensätze liefern? Wähle alle zutreffenden Antworten.",
      "en": "Which of the following can be sources of structured datasets? Select all that apply."
    },
    "clarification": null,
    "code": null,
    "options": [
      {
        "id": "a",
        "text": {
          "de": "CSV-Dateien",
          "en": "CSV files"
        }
      },
      {
        "id": "b",
        "text": {
          "de": "Excel-Sheets",
          "en": "Excel sheets"
        }
      },
      {
        "id": "c",
        "text": {
          "de": "Web-APIs",
          "en": "Web APIs"
        }
      },
      {
        "id": "d",
        "text": {
          "de": "Datenbanken",
          "en": "Databases"
        }
      },
      {
        "id": "e",
        "text": {
          "de": "Eine kompilierte Programmdatei (.exe)",
          "en": "A compiled program file (.exe)"
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
      "de": "CSV-Dateien, Excel-Sheets, Web-APIs und Datenbanken werden im Skript als typische Quellen genannt. Eine kompilierte Programmdatei enthält Maschinencode und keine strukturierten Daten, die man mit Pandas einlesen würde.",
      "en": "CSV files, Excel sheets, web APIs and databases are named in the script as typical sources. A compiled program file contains machine code, not structured data you would read with Pandas."
    },
    "tip": {
      "de": "Frage dich bei jeder Option, ob darin Daten in Zeilen/Feldern oder Schlüsseln abgelegt sind.",
      "en": "For each option ask whether it stores data in rows/fields or keys."
    }
  },
  {
    "id": "ch5-mc-102",
    "chapter": 5,
    "section": "5.2 Überblick",
    "source": {
      "document": "SOTE2 Skript (Softwareentwicklung 2)",
      "section": "5.2 Überblick"
    },
    "type": "mc",
    "difficulty": "medium",
    "question": {
      "de": "Eine JSON-Datei enthält verschachtelte Objekte (Objekte in Objekten). Welche Art von Datensatz beschreibt das am besten?",
      "en": "A JSON file contains nested objects (objects inside objects). Which kind of dataset does this describe best?"
    },
    "clarification": null,
    "code": null,
    "options": [
      {
        "id": "a",
        "text": {
          "de": "Hierarchische Daten",
          "en": "Hierarchical data"
        }
      },
      {
        "id": "b",
        "text": {
          "de": "Zeitreihe",
          "en": "Time series"
        }
      },
      {
        "id": "c",
        "text": {
          "de": "Rein tabellarische Daten",
          "en": "Purely tabular data"
        }
      },
      {
        "id": "d",
        "text": {
          "de": "Matrix-Daten",
          "en": "Matrix data"
        }
      }
    ],
    "answer": "a",
    "explanation": {
      "de": "Verschachtelte Strukturen bilden eine Hierarchie (Baum), die der Überblick als eigene Art strukturierter Daten nennt. Tabellarische Daten bestehen aus Zeilen und Spalten, Zeitreihen sind nach der Zeit geordnet und Matrix-Daten sind zeilen-/spaltenweise Zahlenfelder.",
      "en": "Nested structures form a hierarchy (tree), which the overview lists as its own kind of structured data. Tabular data consists of rows and columns, time series are ordered by time and matrix data are row/column number grids."
    },
    "tip": {
      "de": "Denke an die Baumstruktur eines Dictionaries in einem Dictionary.",
      "en": "Think of the tree structure of a dictionary inside a dictionary."
    }
  },
  {
    "id": "ch5-mc-103",
    "chapter": 5,
    "section": "5.3 Pandas",
    "source": {
      "document": "SOTE2 Skript (Softwareentwicklung 2)",
      "section": "5.3 Pandas / Labor 4 (Dateien und Datensätze)"
    },
    "type": "mc",
    "difficulty": "easy",
    "question": {
      "de": "Welche Pandas-Datenstruktur ist zweidimensional und besitzt beschriftete Zeilen und Spalten?",
      "en": "Which Pandas data structure is two-dimensional and has labeled rows and columns?"
    },
    "clarification": null,
    "code": null,
    "options": [
      {
        "id": "a",
        "text": {
          "de": "DataFrame",
          "en": "DataFrame"
        }
      },
      {
        "id": "b",
        "text": {
          "de": "Series",
          "en": "Series"
        }
      },
      {
        "id": "c",
        "text": {
          "de": "Table",
          "en": "Table"
        }
      },
      {
        "id": "d",
        "text": {
          "de": "Matrix",
          "en": "Matrix"
        }
      }
    ],
    "answer": "a",
    "explanation": {
      "de": "Ein DataFrame ist die zweidimensionale Tabellenstruktur von Pandas. Eine Series ist eindimensional; Table und Matrix sind keine Pandas-Datenstrukturen.",
      "en": "A DataFrame is the two-dimensional table structure of Pandas. A Series is one-dimensional; Table and Matrix are not Pandas data structures."
    },
    "tip": {
      "de": "Pandas besitzt genau zwei wichtige Datenstrukturen.",
      "en": "Pandas has exactly two important data structures."
    }
  },
  {
    "id": "ch5-mc-104",
    "chapter": 5,
    "section": "5.3 Pandas",
    "source": {
      "document": "SOTE2 Skript (Softwareentwicklung 2)",
      "section": "5.3 Pandas / Labor 4 (Dateien und Datensätze)"
    },
    "type": "mc",
    "difficulty": "easy",
    "question": {
      "de": "Wie wählst du die Spalte \"age\" eines DataFrames df aus?",
      "en": "How do you select the column \"age\" of a DataFrame df?"
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
          "de": "df[\"age\"]",
          "en": "df[\"age\"]"
        }
      },
      {
        "id": "b",
        "text": {
          "de": "df.get_column(\"age\")",
          "en": "df.get_column(\"age\")"
        }
      },
      {
        "id": "c",
        "text": {
          "de": "df.column[\"age\"]",
          "en": "df.column[\"age\"]"
        }
      },
      {
        "id": "d",
        "text": {
          "de": "df(\"age\")",
          "en": "df(\"age\")"
        }
      }
    ],
    "answer": "a",
    "explanation": {
      "de": "Mit df[\"age\"] wählst du eine Spalte über ihren Namen aus und erhältst eine Series. Die übrigen Schreibweisen sind in Pandas nicht vorhanden bzw. ungültig.",
      "en": "df[\"age\"] selects a column by its name and returns a Series. The other notations do not exist or are invalid in Pandas."
    },
    "tip": {
      "de": "Spalten werden wie Dictionary-Schlüssel angesprochen.",
      "en": "Columns are addressed like dictionary keys."
    }
  },
  {
    "id": "ch5-mc-105",
    "chapter": 5,
    "section": "5.3 Pandas",
    "source": {
      "document": "SOTE2 Skript (Softwareentwicklung 2)",
      "section": "5.3 Pandas / Labor 4 (Dateien und Datensätze)"
    },
    "type": "mc",
    "difficulty": "easy",
    "question": {
      "de": "Welche Methode zeigt standardmäßig die ersten fünf Zeilen eines DataFrames df?",
      "en": "Which method shows the first five rows of a DataFrame df by default?"
    },
    "clarification": null,
    "code": null,
    "options": [
      {
        "id": "a",
        "text": {
          "de": "df.head()",
          "en": "df.head()"
        }
      },
      {
        "id": "b",
        "text": {
          "de": "df.start()",
          "en": "df.start()"
        }
      },
      {
        "id": "c",
        "text": {
          "de": "df.top()",
          "en": "df.top()"
        }
      },
      {
        "id": "d",
        "text": {
          "de": "df.first_rows()",
          "en": "df.first_rows()"
        }
      }
    ],
    "answer": "a",
    "explanation": {
      "de": "df.head() liefert standardmäßig die ersten fünf Zeilen, df.tail() die letzten fünf. Die anderen Namen existieren nicht.",
      "en": "df.head() returns the first five rows by default, df.tail() the last five. The other names do not exist."
    },
    "tip": {
      "de": "Denke an den Kopf einer Tabelle.",
      "en": "Think of the head of a table."
    }
  },
  {
    "id": "ch5-mc-106",
    "chapter": 5,
    "section": "5.3 Pandas",
    "source": {
      "document": "SOTE2 Skript (Softwareentwicklung 2)",
      "section": "5.3 Pandas / Labor 4 (Dateien und Datensätze)"
    },
    "type": "mc",
    "difficulty": "medium",
    "question": {
      "de": "Welche Ausgabe erzeugt der folgende Code?",
      "en": "What output does the following code produce?"
    },
    "clarification": null,
    "code": "import pandas as pd\ndf = pd.DataFrame({\"a\": [1, 2, 3], \"b\": [4, 5, 6]})\nprint(df.shape)",
    "options": [
      {
        "id": "a",
        "text": {
          "de": "(3, 2)",
          "en": "(3, 2)"
        }
      },
      {
        "id": "b",
        "text": {
          "de": "(2, 3)",
          "en": "(2, 3)"
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
          "de": "(3,)",
          "en": "(3,)"
        }
      }
    ],
    "answer": "a",
    "explanation": {
      "de": "shape gibt ein Tupel (Zeilen, Spalten) zurück. Der DataFrame hat 3 Zeilen und 2 Spalten, also (3, 2). (2, 3) vertauscht die Reihenfolge.",
      "en": "shape returns a tuple (rows, columns). The DataFrame has 3 rows and 2 columns, so (3, 2). (2, 3) swaps the order."
    },
    "tip": {
      "de": "Das Tupel nennt zuerst die Zeilen.",
      "en": "The tuple lists the rows first."
    }
  },
  {
    "id": "ch5-mc-107",
    "chapter": 5,
    "section": "5.3 Pandas",
    "source": {
      "document": "SOTE2 Skript (Softwareentwicklung 2)",
      "section": "5.3 Pandas / Labor 4 (Dateien und Datensätze)"
    },
    "type": "mc",
    "difficulty": "medium",
    "question": {
      "de": "Welchen Wert gibt der folgende Code aus?",
      "en": "Which value does the following code print?"
    },
    "clarification": null,
    "code": "import pandas as pd\ndf = pd.DataFrame({\"a\": [1, 2, 3, 4], \"b\": [5, 6, 7, 8]})\nprint(df[\"a\"].sum() + df[\"b\"].max())",
    "options": [
      {
        "id": "a",
        "text": {
          "de": "18",
          "en": "18"
        }
      },
      {
        "id": "b",
        "text": {
          "de": "12",
          "en": "12"
        }
      },
      {
        "id": "c",
        "text": {
          "de": "36",
          "en": "36"
        }
      },
      {
        "id": "d",
        "text": {
          "de": "15",
          "en": "15"
        }
      }
    ],
    "answer": "a",
    "explanation": {
      "de": "Die Summe der Spalte a ist 1+2+3+4 = 10, das Maximum der Spalte b ist 8; zusammen 18. 12 entspräche max+max, 36 sum+sum und 15 sum+min.",
      "en": "The sum of column a is 1+2+3+4 = 10, the maximum of column b is 8; together 18. 12 would be max+max, 36 sum+sum and 15 sum+min."
    },
    "tip": {
      "de": "Berechne beide Aggregationen getrennt, bevor du addierst.",
      "en": "Compute both aggregations separately before adding."
    }
  },
  {
    "id": "ch5-mc-108",
    "chapter": 5,
    "section": "5.3 Pandas",
    "source": {
      "document": "SOTE2 Skript (Softwareentwicklung 2)",
      "section": "5.3 Pandas / Labor 4 (Dateien und Datensätze)"
    },
    "type": "mc",
    "difficulty": "medium",
    "question": {
      "de": "Welchen Wert gibt der folgende Code aus?",
      "en": "Which value does the following code print?"
    },
    "clarification": null,
    "code": "import pandas as pd\ndf = pd.DataFrame({\"a\": [1, 2, 3]})\ndf[\"b\"] = df[\"a\"] * 2\nprint(df[\"b\"].sum())",
    "options": [
      {
        "id": "a",
        "text": {
          "de": "12",
          "en": "12"
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
          "de": "[2, 4, 6]",
          "en": "[2, 4, 6]"
        }
      },
      {
        "id": "d",
        "text": {
          "de": "3",
          "en": "3"
        }
      }
    ],
    "answer": "a",
    "explanation": {
      "de": "Die neue Spalte b enthält elementweise a * 2, also 2, 4, 6. Deren Summe ist 12. 6 ist die Summe von a, und print gibt hier eine Zahl und keine Liste aus.",
      "en": "The new column b contains a * 2 element-wise, i.e. 2, 4, 6. Their sum is 12. 6 is the sum of a, and print outputs a number here, not a list."
    },
    "tip": {
      "de": "Beim Multiplizieren einer Spalte mit einer Zahl wird jedes Element multipliziert.",
      "en": "Multiplying a column by a number multiplies every element."
    }
  },
  {
    "id": "ch5-mc-109",
    "chapter": 5,
    "section": "5.3 Pandas",
    "source": {
      "document": "SOTE2 Skript (Softwareentwicklung 2)",
      "section": "5.3 Pandas / Labor 4 (Dateien und Datensätze)"
    },
    "type": "mc",
    "difficulty": "hard",
    "question": {
      "de": "Welchen Wert gibt der folgende Code aus?",
      "en": "Which value does the following code print?"
    },
    "clarification": null,
    "code": "import pandas as pd\ndf = pd.DataFrame({\"x\": [10, 20, 30], \"y\": [1, 2, 3]})\nprint(df.loc[1, \"x\"] + df.iloc[1, 1])",
    "options": [
      {
        "id": "a",
        "text": {
          "de": "22",
          "en": "22"
        }
      },
      {
        "id": "b",
        "text": {
          "de": "21",
          "en": "21"
        }
      },
      {
        "id": "c",
        "text": {
          "de": "12",
          "en": "12"
        }
      },
      {
        "id": "d",
        "text": {
          "de": "31",
          "en": "31"
        }
      }
    ],
    "answer": "a",
    "explanation": {
      "de": "df.loc[1, \"x\"] ist der Wert in Zeile mit Label 1 und Spalte x, also 20. df.iloc[1, 1] ist Zeile 1, Spalte 1 (Position), also 2. Die Summe ist 22; die anderen Werte entstehen durch Verwechslung von Spalten oder Zeilen.",
      "en": "df.loc[1, \"x\"] is the value in the row with label 1 and column x, i.e. 20. df.iloc[1, 1] is row 1, column 1 (by position), i.e. 2. The sum is 22; the other values result from mixing up columns or rows."
    },
    "tip": {
      "de": "loc nutzt Labels, iloc Positionen; achte darauf, welche Spalte jeweils getroffen wird.",
      "en": "loc uses labels, iloc uses positions; mind which column each one hits."
    }
  },
  {
    "id": "ch5-mc-110",
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
    "clarification": null,
    "code": "import pandas as pd\ndf = pd.DataFrame({\"v\": [5, 6, 7]}, index=[\"a\", \"b\", \"c\"])\nprint(df.loc[\"b\":\"c\", \"v\"].tolist())",
    "options": [
      {
        "id": "a",
        "text": {
          "de": "[6, 7]",
          "en": "[6, 7]"
        }
      },
      {
        "id": "b",
        "text": {
          "de": "[6]",
          "en": "[6]"
        }
      },
      {
        "id": "c",
        "text": {
          "de": "[5, 6]",
          "en": "[5, 6]"
        }
      },
      {
        "id": "d",
        "text": {
          "de": "KeyError",
          "en": "KeyError"
        }
      }
    ],
    "answer": "a",
    "explanation": {
      "de": "Bei loc ist der Endwert eines Label-Slices eingeschlossen, also werden die Zeilen b und c ausgewählt: [6, 7]. [6] würde ein ausgeschlossenes Ende ergeben, und der Index enthält die Labels b und c, daher gibt es keinen Fehler.",
      "en": "With loc the end of a label slice is inclusive, so rows b and c are selected: [6, 7]. [6] would result from an exclusive end, and the index contains the labels b and c, so there is no error."
    },
    "tip": {
      "de": "Überlege, ob loc den Endwert des Slices mitnimmt.",
      "en": "Consider whether loc includes the end of the slice."
    }
  },
  {
    "id": "ch5-mc-111",
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
    "clarification": null,
    "code": "import pandas as pd\ndf = pd.DataFrame({\"n\": [\"A\", \"B\", \"C\"], \"s\": [3, 1, 2]})\nprint(df.sort_values(\"s\")[\"n\"].tolist())",
    "options": [
      {
        "id": "a",
        "text": {
          "de": "['B', 'C', 'A']",
          "en": "['B', 'C', 'A']"
        }
      },
      {
        "id": "b",
        "text": {
          "de": "['A', 'C', 'B']",
          "en": "['A', 'C', 'B']"
        }
      },
      {
        "id": "c",
        "text": {
          "de": "['A', 'B', 'C']",
          "en": "['A', 'B', 'C']"
        }
      },
      {
        "id": "d",
        "text": {
          "de": "[1, 2, 3]",
          "en": "[1, 2, 3]"
        }
      }
    ],
    "answer": "a",
    "explanation": {
      "de": "sort_values(\"s\") sortiert die Zeilen aufsteigend nach s: 1 (B), 2 (C), 3 (A). Danach liefert [\"n\"] die Namen in dieser Reihenfolge. [1, 2, 3] wären die sortierten Werte, nicht die Namen.",
      "en": "sort_values(\"s\") sorts the rows ascending by s: 1 (B), 2 (C), 3 (A). Then [\"n\"] returns the names in that order. [1, 2, 3] would be the sorted values, not the names."
    },
    "tip": {
      "de": "Sortiert werden ganze Zeilen, nicht nur die Spalte s.",
      "en": "Whole rows are sorted, not just column s."
    }
  },
  {
    "id": "ch5-mc-112",
    "chapter": 5,
    "section": "5.3 Pandas",
    "source": {
      "document": "SOTE2 Skript (Softwareentwicklung 2)",
      "section": "5.3 Pandas / Labor 4 (Dateien und Datensätze)"
    },
    "type": "mc",
    "difficulty": "ultra",
    "question": {
      "de": "Welche Ausgabe erzeugt der folgende Code?",
      "en": "What output does the following code produce?"
    },
    "clarification": null,
    "code": "import pandas as pd\ndf = pd.DataFrame({\"a\": [1, 2, 3, 4], \"b\": [10, 20, 30, 40]})\nprint(df[(df[\"a\"] > 1) & (df[\"b\"] < 40)][\"a\"].tolist())",
    "options": [
      {
        "id": "a",
        "text": {
          "de": "[2, 3]",
          "en": "[2, 3]"
        }
      },
      {
        "id": "b",
        "text": {
          "de": "[2, 3, 4]",
          "en": "[2, 3, 4]"
        }
      },
      {
        "id": "c",
        "text": {
          "de": "[1, 2, 3]",
          "en": "[1, 2, 3]"
        }
      },
      {
        "id": "d",
        "text": {
          "de": "[3]",
          "en": "[3]"
        }
      },
      {
        "id": "e",
        "text": {
          "de": "ValueError",
          "en": "ValueError"
        }
      }
    ],
    "answer": "a",
    "explanation": {
      "de": "a > 1 gilt für die Zeilen 1 bis 3 (Werte 2, 3, 4), b < 40 für die Zeilen 0 bis 2. Das logische Und lässt nur die Zeilen 1 und 2 übrig, also a-Werte [2, 3]. Wegen der Klammern entsteht kein Fehler.",
      "en": "a > 1 holds for rows 1 to 3 (values 2, 3, 4), b < 40 for rows 0 to 2. The logical AND leaves only rows 1 and 2, i.e. a values [2, 3]. Thanks to the parentheses there is no error."
    },
    "tip": {
      "de": "Bestimme beide Masken getrennt und schneide sie dann.",
      "en": "Determine both masks separately and then intersect them."
    }
  },
  {
    "id": "ch5-ms-102",
    "chapter": 5,
    "section": "5.3 Pandas",
    "source": {
      "document": "SOTE2 Skript (Softwareentwicklung 2)",
      "section": "5.3 Pandas"
    },
    "type": "ms",
    "difficulty": "medium",
    "question": {
      "de": "Welche drei der folgenden Aussagen beschreiben Features von Pandas? Wähle genau drei.",
      "en": "Which three of the following statements describe features of Pandas? Select exactly three."
    },
    "clarification": null,
    "code": null,
    "options": [
      {
        "id": "a",
        "text": {
          "de": "Umgang mit fehlenden Datenpunkten (NaN-Handling)",
          "en": "Handling of missing data points (NaN handling)"
        }
      },
      {
        "id": "b",
        "text": {
          "de": "Slicing und Fancy Indexing",
          "en": "Slicing and fancy indexing"
        }
      },
      {
        "id": "c",
        "text": {
          "de": "Einlesen von Daten aus CSV, Excel und SQL",
          "en": "Reading data from CSV, Excel and SQL"
        }
      },
      {
        "id": "d",
        "text": {
          "de": "Kompilieren von Python-Code zu Maschinencode",
          "en": "Compiling Python code to machine code"
        }
      },
      {
        "id": "e",
        "text": {
          "de": "Betrieb eines Webservers",
          "en": "Running a web server"
        }
      }
    ],
    "answer": [
      "a",
      "b",
      "c"
    ],
    "explanation": {
      "de": "Pandas bietet NaN-Handling, Slicing/Fancy Indexing und Werkzeuge zum Einlesen verschiedener Quellen. Kompilieren von Code und Webserver gehören nicht zu Pandas.",
      "en": "Pandas offers NaN handling, slicing/fancy indexing and tools for reading different sources. Compiling code and running web servers are not part of Pandas."
    },
    "tip": {
      "de": "Pandas ist eine Bibliothek zur Datenanalyse.",
      "en": "Pandas is a data analysis library."
    }
  },
  {
    "id": "ch5-ms-103",
    "chapter": 5,
    "section": "5.3 Pandas",
    "source": {
      "document": "SOTE2 Skript (Softwareentwicklung 2)",
      "section": "5.3 Pandas / Labor 4 (Dateien und Datensätze)"
    },
    "type": "ms",
    "difficulty": "hard",
    "question": {
      "de": "Welche Ausdrücke liefern eine Series (nicht einen DataFrame)? Wähle genau zwei.",
      "en": "Which expressions return a Series (not a DataFrame)? Select exactly two."
    },
    "clarification": null,
    "code": "import pandas as pd\ndf = pd.DataFrame({\"a\": [1, 2], \"b\": [3, 4]})",
    "options": [
      {
        "id": "a",
        "text": {
          "de": "df[\"a\"]",
          "en": "df[\"a\"]"
        }
      },
      {
        "id": "b",
        "text": {
          "de": "df[[\"a\"]]",
          "en": "df[[\"a\"]]"
        }
      },
      {
        "id": "c",
        "text": {
          "de": "df.loc[0]",
          "en": "df.loc[0]"
        }
      },
      {
        "id": "d",
        "text": {
          "de": "df.iloc[0:1]",
          "en": "df.iloc[0:1]"
        }
      },
      {
        "id": "e",
        "text": {
          "de": "df[[\"a\", \"b\"]]",
          "en": "df[[\"a\", \"b\"]]"
        }
      }
    ],
    "answer": [
      "a",
      "c"
    ],
    "explanation": {
      "de": "df[\"a\"] liefert eine Spalte als Series, df.loc[0] liefert die einzelne Zeile 0 ebenfalls als Series. df[[\"a\"]] (Liste im Index), df.iloc[0:1] (Slice) und df[[\"a\", \"b\"]] liefern wieder DataFrames.",
      "en": "df[\"a\"] returns a column as a Series, df.loc[0] returns the single row 0 also as a Series. df[[\"a\"]] (list inside the index), df.iloc[0:1] (slice) and df[[\"a\", \"b\"]] return DataFrames again."
    },
    "tip": {
      "de": "Ein einzelner Schlüssel oder eine einzelne Position reduziert die Dimension; Listen und Slices nicht.",
      "en": "A single key or single position reduces the dimension; lists and slices do not."
    }
  },
  {
    "id": "ch5-ms-104",
    "chapter": 5,
    "section": "5.3 Pandas",
    "source": {
      "document": "SOTE2 Skript (Softwareentwicklung 2)",
      "section": "5.3 Pandas / Labor 4 (Dateien und Datensätze)"
    },
    "type": "ms",
    "difficulty": "ultra",
    "question": {
      "de": "Welche Ausdrücke liefern die Liste [30, 40]? Wähle alle zutreffenden Antworten.",
      "en": "Which expressions produce the list [30, 40]? Select all that apply."
    },
    "clarification": null,
    "code": "import pandas as pd\ndf = pd.DataFrame({\"v\": [10, 20, 30, 40, 50]}, index=[5, 4, 3, 2, 1])",
    "options": [
      {
        "id": "a",
        "text": {
          "de": "df.iloc[2:4][\"v\"].tolist()",
          "en": "df.iloc[2:4][\"v\"].tolist()"
        }
      },
      {
        "id": "b",
        "text": {
          "de": "df.loc[3:2, \"v\"].tolist()",
          "en": "df.loc[3:2, \"v\"].tolist()"
        }
      },
      {
        "id": "c",
        "text": {
          "de": "df.loc[2:3, \"v\"].tolist()",
          "en": "df.loc[2:3, \"v\"].tolist()"
        }
      },
      {
        "id": "d",
        "text": {
          "de": "df.iloc[3:5][\"v\"].tolist()",
          "en": "df.iloc[3:5][\"v\"].tolist()"
        }
      },
      {
        "id": "e",
        "text": {
          "de": "df.loc[[3, 2], \"v\"].tolist()",
          "en": "df.loc[[3, 2], \"v\"].tolist()"
        }
      }
    ],
    "answer": [
      "a",
      "b",
      "e"
    ],
    "explanation": {
      "de": "Der Index ist absteigend: Label 3 liegt an Position 2 und Label 2 an Position 3. iloc[2:4], loc[3:2] (Endlabel eingeschlossen, Reihenfolge wie im Index) und loc[[3, 2]] ergeben [30, 40]. loc[2:3] ist leer, weil Label 2 hinter Label 3 liegt, und iloc[3:5] ergibt [40, 50].",
      "en": "The index is descending: label 3 is at position 2 and label 2 at position 3. iloc[2:4], loc[3:2] (end label inclusive, order as in the index) and loc[[3, 2]] give [30, 40]. loc[2:3] is empty because label 2 comes after label 3, and iloc[3:5] gives [40, 50]."
    },
    "tip": {
      "de": "Schreibe dir Label und Position jeder Zeile nebeneinander auf.",
      "en": "Write down label and position of every row side by side."
    }
  },
  {
    "id": "ch5-ms-105",
    "chapter": 5,
    "section": "5.3 Pandas",
    "source": {
      "document": "SOTE2 Skript (Softwareentwicklung 2)",
      "section": "5.3 Pandas / Labor 4 (Dateien und Datensätze)"
    },
    "type": "ms",
    "difficulty": "easy",
    "question": {
      "de": "Welche der folgenden Funktionen existieren in Pandas, um tabellarische Daten einzulesen? Wähle alle zutreffenden Antworten.",
      "en": "Which of the following functions exist in Pandas for reading tabular data? Select all that apply."
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
          "de": "pd.read_csv",
          "en": "pd.read_csv"
        }
      },
      {
        "id": "b",
        "text": {
          "de": "pd.read_excel",
          "en": "pd.read_excel"
        }
      },
      {
        "id": "c",
        "text": {
          "de": "pd.read_sql",
          "en": "pd.read_sql"
        }
      },
      {
        "id": "d",
        "text": {
          "de": "pd.load_table",
          "en": "pd.load_table"
        }
      },
      {
        "id": "e",
        "text": {
          "de": "pd.open_frame",
          "en": "pd.open_frame"
        }
      }
    ],
    "answer": [
      "a",
      "b",
      "c"
    ],
    "explanation": {
      "de": "read_csv, read_excel und read_sql lesen CSV-, Excel- bzw. SQL-Daten ein. load_table und open_frame gibt es in Pandas nicht.",
      "en": "read_csv, read_excel and read_sql read CSV, Excel and SQL data respectively. load_table and open_frame do not exist in Pandas."
    },
    "tip": {
      "de": "Einlesefunktionen beginnen mit read_.",
      "en": "Reading functions start with read_."
    }
  },
  {
    "id": "ch5-tf-102",
    "chapter": 5,
    "section": "5.3 Pandas",
    "source": {
      "document": "SOTE2 Skript (Softwareentwicklung 2)",
      "section": "5.3 Pandas"
    },
    "type": "tf",
    "difficulty": "easy",
    "question": {
      "de": "Wahr oder falsch: Eine Series ist in Pandas eindimensional, ein DataFrame zweidimensional.",
      "en": "True or false: In Pandas, a Series is one-dimensional and a DataFrame is two-dimensional."
    },
    "clarification": null,
    "code": null,
    "answer": true,
    "explanation": {
      "de": "Genau so definiert das Skript die beiden wichtigen Datenstrukturen: Series (1D) und DataFrame (2D).",
      "en": "This is exactly how the script defines the two important data structures: Series (1D) and DataFrame (2D)."
    },
    "tip": {
      "de": "Denke an eine Spalte gegenüber einer ganzen Tabelle.",
      "en": "Think of a single column versus a whole table."
    }
  },
  {
    "id": "ch5-tf-103",
    "chapter": 5,
    "section": "5.3 Pandas",
    "source": {
      "document": "SOTE2 Skript (Softwareentwicklung 2)",
      "section": "5.3 Pandas / Labor 4 (Dateien und Datensätze)"
    },
    "type": "tf",
    "difficulty": "medium",
    "question": {
      "de": "Wahr oder falsch: Der folgende Code gibt [1, 2, 3] aus.",
      "en": "True or false: The following code prints [1, 2, 3]."
    },
    "clarification": null,
    "code": "import pandas as pd\ndf = pd.DataFrame({\"a\": [3, 1, 2]})\ndf.sort_values(\"a\")\nprint(df[\"a\"].tolist())",
    "answer": false,
    "explanation": {
      "de": "sort_values gibt standardmäßig einen neuen sortierten DataFrame zurück und verändert df nicht. Da das Ergebnis nicht gespeichert wird, bleibt df unverändert und die Ausgabe ist [3, 1, 2].",
      "en": "By default, sort_values returns a new sorted DataFrame and does not modify df. Since the result is not stored, df stays unchanged and the output is [3, 1, 2]."
    },
    "tip": {
      "de": "Achte darauf, ob das Ergebnis von sort_values irgendwo gespeichert wird.",
      "en": "Check whether the result of sort_values is stored anywhere."
    }
  },
  {
    "id": "ch5-tf-104",
    "chapter": 5,
    "section": "5.3 Pandas",
    "source": {
      "document": "SOTE2 Skript (Softwareentwicklung 2)",
      "section": "5.3 Pandas / Labor 4 (Dateien und Datensätze)"
    },
    "type": "tf",
    "difficulty": "medium",
    "question": {
      "de": "Wahr oder falsch: Für den folgenden DataFrame gibt len(df) den Wert 4 zurück.",
      "en": "True or false: For the following DataFrame, len(df) returns 4."
    },
    "clarification": null,
    "code": "import pandas as pd\ndf = pd.DataFrame({\"a\": [1, 2, 3, 4], \"b\": [5, 6, 7, 8], \"c\": [9, 10, 11, 12]})",
    "answer": true,
    "explanation": {
      "de": "len(df) liefert die Anzahl der Zeilen. Der DataFrame hat 4 Zeilen und 3 Spalten, also ist len(df) gleich 4 (die Spaltenzahl wäre df.shape[1]).",
      "en": "len(df) returns the number of rows. The DataFrame has 4 rows and 3 columns, so len(df) is 4 (the number of columns would be df.shape[1])."
    },
    "tip": {
      "de": "Zähle Zeilen, nicht Spalten.",
      "en": "Count rows, not columns."
    }
  },
  {
    "id": "ch5-tf-105",
    "chapter": 5,
    "section": "5.3 Pandas",
    "source": {
      "document": "SOTE2 Skript (Softwareentwicklung 2)",
      "section": "5.3 Pandas / Labor 4 (Dateien und Datensätze)"
    },
    "type": "tf",
    "difficulty": "ultra",
    "question": {
      "de": "Wahr oder falsch: Der folgende Ausdruck löst einen ValueError aus, statt Zeilen zu filtern.",
      "en": "True or false: The following expression raises a ValueError instead of filtering rows."
    },
    "clarification": null,
    "code": "import pandas as pd\ndf = pd.DataFrame({\"a\": [1, 2, 3, 4], \"b\": [10, 20, 30, 40]})\nresult = df[df[\"a\"] > 1 & df[\"b\"] < 40]",
    "answer": true,
    "explanation": {
      "de": "Der Operator & bindet stärker als die Vergleiche, daher wird zuerst 1 & df[\"b\"] berechnet und es entsteht ein verketteter Vergleich. Dessen Wahrheitswert für eine ganze Series ist mehrdeutig und löst einen ValueError aus. Mit Klammern um jeden Vergleich würde das Filtern funktionieren.",
      "en": "The operator & binds more tightly than the comparisons, so 1 & df[\"b\"] is evaluated first and a chained comparison results. The truth value of a whole Series is ambiguous and raises a ValueError. With parentheses around each comparison the filtering would work."
    },
    "tip": {
      "de": "Prüfe die Rangfolge der Operatoren & und >.",
      "en": "Check the precedence of the operators & and >."
    }
  },
  {
    "id": "ch5-fib-101",
    "chapter": 5,
    "section": "5.3 Pandas",
    "source": {
      "document": "SOTE2 Skript (Softwareentwicklung 2)",
      "section": "5.3 Pandas / Labor 4 (Dateien und Datensätze)"
    },
    "type": "fib",
    "difficulty": "easy",
    "question": {
      "de": "Ergänze den Import und die Methode, die die ersten Zeilen anzeigt.",
      "en": "Fill in the import and the method that shows the first rows."
    },
    "clarification": {
      "de": "Gesucht sind Python-Bezeichner.",
      "en": "Python identifiers are expected."
    },
    "code": "import ____ as pd\ndf = pd.read_csv(\"data.csv\")\nprint(df.____())",
    "answer": null,
    "blanks": [
      {
        "accepted": [
          "pandas"
        ],
        "caseSensitive": true
      },
      {
        "accepted": [
          "head",
          "head()"
        ],
        "caseSensitive": true
      }
    ],
    "explanation": {
      "de": "Das Paket heißt pandas und wird üblicherweise als pd importiert. df.head() zeigt die ersten Zeilen.",
      "en": "The package is called pandas and is usually imported as pd. df.head() shows the first rows."
    },
    "tip": {
      "de": "Der Paketname steht ausgeschrieben im Import; die Methode zeigt den Kopf der Tabelle.",
      "en": "The package name is spelled out in the import; the method shows the top of the table."
    }
  },
  {
    "id": "ch5-fib-102",
    "chapter": 5,
    "section": "5.3 Pandas",
    "source": {
      "document": "SOTE2 Skript (Softwareentwicklung 2)",
      "section": "5.3 Pandas / Labor 4 (Dateien und Datensätze)"
    },
    "type": "fib",
    "difficulty": "easy",
    "question": {
      "de": "Ergänze die Methoden, sodass die Kommentare die jeweilige Ausgabe zeigen.",
      "en": "Fill in the methods so that the comments show the respective output."
    },
    "clarification": {
      "de": "Gesucht sind Methodennamen von Pandas.",
      "en": "Pandas method names are expected."
    },
    "code": "import pandas as pd\ndf = pd.DataFrame({\"a\": [4, 1, 7]})\nprint(df[\"a\"].____())  # 12\nprint(df[\"a\"].____())  # 7",
    "answer": null,
    "blanks": [
      {
        "accepted": [
          "sum",
          "sum()"
        ],
        "caseSensitive": true
      },
      {
        "accepted": [
          "max",
          "max()"
        ],
        "caseSensitive": true
      }
    ],
    "explanation": {
      "de": "Die Summe von 4, 1 und 7 ist 12 (sum), der größte Wert ist 7 (max).",
      "en": "The sum of 4, 1 and 7 is 12 (sum), the largest value is 7 (max)."
    },
    "tip": {
      "de": "Es sind zwei Aggregationsmethoden einer Series.",
      "en": "These are two aggregation methods of a Series."
    }
  },
  {
    "id": "ch5-fib-103",
    "chapter": 5,
    "section": "5.3 Pandas",
    "source": {
      "document": "SOTE2 Skript (Softwareentwicklung 2)",
      "section": "5.3 Pandas / Labor 4 (Dateien und Datensätze)"
    },
    "type": "fib",
    "difficulty": "medium",
    "question": {
      "de": "Sortiere den DataFrame absteigend nach der Spalte \"score\". Ergänze Methode und Argumentnamen.",
      "en": "Sort the DataFrame in descending order by the column \"score\". Fill in the method and the argument name."
    },
    "clarification": null,
    "code": "import pandas as pd\ndf = pd.DataFrame({\"score\": [50, 80, 65]})\ndf = df.____(\"score\", ____=False)\nprint(df[\"score\"].tolist())  # [80, 65, 50]",
    "answer": null,
    "blanks": [
      {
        "accepted": [
          "sort_values"
        ],
        "caseSensitive": true
      },
      {
        "accepted": [
          "ascending"
        ],
        "caseSensitive": true
      }
    ],
    "explanation": {
      "de": "sort_values sortiert nach einer Spalte; mit ascending=False wird absteigend sortiert. Das Ergebnis muss wieder df zugewiesen werden.",
      "en": "sort_values sorts by a column; ascending=False sorts in descending order. The result must be assigned back to df."
    },
    "tip": {
      "de": "Die Standardsortierung ist aufsteigend; das Argument dafür heißt wie das englische Wort.",
      "en": "The default order is ascending; the argument for it is named after that word."
    }
  },
  {
    "id": "ch5-fib-104",
    "chapter": 5,
    "section": "5.3 Pandas",
    "source": {
      "document": "SOTE2 Skript (Softwareentwicklung 2)",
      "section": "5.3 Pandas / Labor 4 (Dateien und Datensätze)"
    },
    "type": "fib",
    "difficulty": "medium",
    "question": {
      "de": "Wähle das Element in Zeile 2 und Spalte 0 über seine Position. Ergänze das Attribut.",
      "en": "Select the element in row 2 and column 0 by position. Fill in the attribute."
    },
    "clarification": null,
    "code": "import pandas as pd\ndf = pd.DataFrame({\"x\": [10, 20, 30], \"y\": [1, 2, 3]})\nprint(df.____[2, 0])  # 30",
    "answer": null,
    "blanks": [
      {
        "accepted": [
          "iloc",
          "iat"
        ],
        "caseSensitive": true
      }
    ],
    "explanation": {
      "de": "iloc adressiert Zeilen und Spalten über ganzzahlige Positionen. Zeile 2 und Spalte 0 ist der Wert 30. Auch iat ist für einzelne Elemente per Position möglich.",
      "en": "iloc addresses rows and columns by integer positions. Row 2 and column 0 is the value 30. iat also works for single elements by position."
    },
    "tip": {
      "de": "Das Attribut beginnt mit i für integer position.",
      "en": "The attribute starts with i for integer position."
    }
  },
  {
    "id": "ch5-fib-105",
    "chapter": 5,
    "section": "5.3 Pandas",
    "source": {
      "document": "SOTE2 Skript (Softwareentwicklung 2)",
      "section": "5.3 Pandas / Labor 4 (Dateien und Datensätze)"
    },
    "type": "fib",
    "difficulty": "ultra",
    "question": {
      "de": "Setze alle Werte der Spalte v, die größer als 20 sind, auf 0. Ergänze das Indexer-Attribut.",
      "en": "Set all values of column v that are greater than 20 to 0. Fill in the indexer attribute."
    },
    "clarification": null,
    "code": "import pandas as pd\ndf = pd.DataFrame({\"v\": [10, 20, 30, 40, 50]})\ndf.____[df[\"v\"] > 20, \"v\"] = 0\nprint(df[\"v\"].tolist())  # [10, 20, 0, 0, 0]",
    "answer": null,
    "blanks": [
      {
        "accepted": [
          "loc"
        ],
        "caseSensitive": true
      }
    ],
    "explanation": {
      "de": "loc akzeptiert eine Boolesche Maske für die Zeilen und einen Spaltennamen und erlaubt damit das gezielte Zuweisen. iloc erwartet Positionen und lehnt eine Boolesche Series als Zeilenindexer ab.",
      "en": "loc accepts a Boolean mask for the rows and a column name and thus allows targeted assignment. iloc expects positions and rejects a Boolean Series as row indexer."
    },
    "tip": {
      "de": "Der Indexer muss Maske und Spaltenlabel verstehen.",
      "en": "The indexer must understand a mask and a column label."
    }
  },
  {
    "id": "ch5-fe-101",
    "chapter": 5,
    "section": "5.3 Pandas",
    "source": {
      "document": "SOTE2 Skript (Softwareentwicklung 2)",
      "section": "5.3 Pandas / Labor 4 (Dateien und Datensätze)"
    },
    "type": "fe",
    "difficulty": "medium",
    "question": {
      "de": "Der Code soll die Spalten a und b ausgeben, enthält aber genau einen Fehler. In welcher Zeile liegt er?",
      "en": "The code should print the columns a and b but contains exactly one error. In which line is it?"
    },
    "clarification": null,
    "code": "1: import pandas as pd\n2: df = pd.DataFrame({\"a\": [1, 2, 3], \"b\": [4, 5, 6]})\n3: df[\"c\"] = df[\"a\"] + df[\"b\"]\n4: print(df[\"a\", \"b\"])",
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
    "answer": "d",
    "explanation": {
      "de": "Mehrere Spalten werden mit einer Liste ausgewählt: df[[\"a\", \"b\"]]. df[\"a\", \"b\"] übergibt ein Tupel als Schlüssel und löst einen KeyError aus. Die Zeilen 1 bis 3 sind korrekt, auch das Anlegen der Spalte c.",
      "en": "Several columns are selected with a list: df[[\"a\", \"b\"]]. df[\"a\", \"b\"] passes a tuple as the key and raises a KeyError. Lines 1 to 3 are correct, including the creation of column c."
    },
    "tip": {
      "de": "Wie viele Klammerpaare braucht die Auswahl mehrerer Spalten?",
      "en": "How many pairs of brackets does selecting several columns need?"
    }
  },
  {
    "id": "ch5-fe-102",
    "chapter": 5,
    "section": "5.3 Pandas",
    "source": {
      "document": "SOTE2 Skript (Softwareentwicklung 2)",
      "section": "5.3 Pandas / Labor 4 (Dateien und Datensätze)"
    },
    "type": "fe",
    "difficulty": "hard",
    "question": {
      "de": "Der Code soll den Namen der ersten Person über 25 ausgeben, enthält aber genau einen Fehler. In welcher Zeile liegt er?",
      "en": "The code should print the name of the first person older than 25 but contains exactly one error. In which line is it?"
    },
    "clarification": null,
    "code": "1: import pandas as pd\n2: df = pd.DataFrame({\"name\": [\"A\", \"B\"], \"age\": [20, 30]})\n3: older = df[df[\"age\"] > 25]\n4: print(older[\"name\"][0])",
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
    "answer": "d",
    "explanation": {
      "de": "Das Filtern behält den ursprünglichen Index: Die übrig gebliebene Zeile hat das Label 1, nicht 0. older[\"name\"][0] sucht daher das Label 0 und löst einen KeyError aus; korrekt wäre z.B. older[\"name\"].iloc[0]. Die Filterung in Zeile 3 ist selbst korrekt.",
      "en": "Filtering keeps the original index: the remaining row has label 1, not 0. older[\"name\"][0] therefore looks for label 0 and raises a KeyError; correct would be e.g. older[\"name\"].iloc[0]. The filtering in line 3 itself is correct."
    },
    "tip": {
      "de": "Welches Index-Label trägt die Zeile nach dem Filtern?",
      "en": "Which index label does the row carry after filtering?"
    }
  },
  {
    "id": "ch5-fe-103",
    "chapter": 5,
    "section": "5.3 Pandas",
    "source": {
      "document": "SOTE2 Skript (Softwareentwicklung 2)",
      "section": "5.3 Pandas / Labor 4 (Dateien und Datensätze)"
    },
    "type": "fe",
    "difficulty": "ultra",
    "question": {
      "de": "Der Code soll die Summe der drei mittleren Zeilen (Positionen 1 bis 3) ausgeben, also 90, enthält aber genau einen Fehler. In welcher Zeile liegt er?",
      "en": "The code should print the sum of the three middle rows (positions 1 to 3), i.e. 90, but contains exactly one error. In which line is it?"
    },
    "clarification": null,
    "code": "1: import pandas as pd\n2: df = pd.DataFrame({\"v\": [10, 20, 30, 40, 50]})\n3: part = df.iloc[1:3]\n4: print(part[\"v\"].sum())",
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
      "de": "iloc schließt wie normales Python-Slicing den Endwert aus, daher liefert iloc[1:3] nur die Positionen 1 und 2 (Summe 50). Für drei Zeilen braucht man iloc[1:4]. Alternativ würde loc[1:3] den Endwert einschließen.",
      "en": "iloc excludes the end value like normal Python slicing, so iloc[1:3] returns only positions 1 and 2 (sum 50). Three rows need iloc[1:4]. Alternatively, loc[1:3] would include the end value."
    },
    "tip": {
      "de": "Zähle, wie viele Zeilen der Slice tatsächlich enthält.",
      "en": "Count how many rows the slice actually contains."
    }
  },
  {
    "id": "ch5-mc-113",
    "chapter": 5,
    "section": "5.4 Visualisierung mit Matplotlib",
    "source": {
      "document": "SOTE2 Skript (Softwareentwicklung 2)",
      "section": "5.4 Visualisierung mit Matplotlib / Labor 5 (Datensätze und Visualisierung)"
    },
    "type": "mc",
    "difficulty": "easy",
    "question": {
      "de": "Welche Funktion zeigt das erstellte Diagramm an?",
      "en": "Which function displays the created plot?"
    },
    "clarification": {
      "de": "matplotlib.pyplot wurde als plt importiert.",
      "en": "matplotlib.pyplot was imported as plt."
    },
    "code": null,
    "options": [
      {
        "id": "a",
        "text": {
          "de": "plt.show()",
          "en": "plt.show()"
        }
      },
      {
        "id": "b",
        "text": {
          "de": "plt.open()",
          "en": "plt.open()"
        }
      },
      {
        "id": "c",
        "text": {
          "de": "plt.render()",
          "en": "plt.render()"
        }
      },
      {
        "id": "d",
        "text": {
          "de": "plt.display()",
          "en": "plt.display()"
        }
      }
    ],
    "answer": "a",
    "explanation": {
      "de": "Die Visualisierung endet laut Skript mit dem Anzeigen über show(). Die anderen Namen existieren in matplotlib.pyplot nicht.",
      "en": "According to the script, a visualization ends with displaying via show(). The other names do not exist in matplotlib.pyplot."
    },
    "tip": {
      "de": "Der letzte Schritt jeder Visualisierung hat einen sehr kurzen Namen.",
      "en": "The last step of every visualization has a very short name."
    }
  },
  {
    "id": "ch5-mc-114",
    "chapter": 5,
    "section": "5.4 Visualisierung mit Matplotlib",
    "source": {
      "document": "SOTE2 Skript (Softwareentwicklung 2)",
      "section": "5.4 Visualisierung mit Matplotlib / Labor 5 (Datensätze und Visualisierung)"
    },
    "type": "mc",
    "difficulty": "easy",
    "question": {
      "de": "Welche Funktion zeichnet ein Balkendiagramm?",
      "en": "Which function draws a bar chart?"
    },
    "clarification": {
      "de": "matplotlib.pyplot wurde als plt importiert.",
      "en": "matplotlib.pyplot was imported as plt."
    },
    "code": null,
    "options": [
      {
        "id": "a",
        "text": {
          "de": "plt.bar()",
          "en": "plt.bar()"
        }
      },
      {
        "id": "b",
        "text": {
          "de": "plt.barplot()",
          "en": "plt.barplot()"
        }
      },
      {
        "id": "c",
        "text": {
          "de": "plt.columns()",
          "en": "plt.columns()"
        }
      },
      {
        "id": "d",
        "text": {
          "de": "plt.histogram()",
          "en": "plt.histogram()"
        }
      }
    ],
    "answer": "a",
    "explanation": {
      "de": "plt.bar zeichnet Balken. plt.hist zeichnet ein Histogramm, die übrigen Namen gibt es nicht.",
      "en": "plt.bar draws bars. plt.hist draws a histogram, the other names do not exist."
    },
    "tip": {
      "de": "Der Name ist das englische Wort für Balken/Riegel.",
      "en": "The name is the English word for bar."
    }
  },
  {
    "id": "ch5-mc-115",
    "chapter": 5,
    "section": "5.4 Visualisierung mit Matplotlib",
    "source": {
      "document": "SOTE2 Skript (Softwareentwicklung 2)",
      "section": "5.4 Visualisierung mit Matplotlib / Labor 5 (Datensätze und Visualisierung)"
    },
    "type": "mc",
    "difficulty": "medium",
    "question": {
      "de": "Wofür dient das Argument label=\"A\" in plt.plot(x, y, label=\"A\")?",
      "en": "What is the argument label=\"A\" in plt.plot(x, y, label=\"A\") used for?"
    },
    "clarification": {
      "de": "matplotlib.pyplot wurde als plt importiert.",
      "en": "matplotlib.pyplot was imported as plt."
    },
    "code": null,
    "options": [
      {
        "id": "a",
        "text": {
          "de": "Es liefert den Text des Eintrags in der Legende (sichtbar nach plt.legend())",
          "en": "It provides the text of the entry in the legend (visible after plt.legend())"
        }
      },
      {
        "id": "b",
        "text": {
          "de": "Es beschriftet die x-Achse",
          "en": "It labels the x-axis"
        }
      },
      {
        "id": "c",
        "text": {
          "de": "Es setzt den Titel des Diagramms",
          "en": "It sets the title of the plot"
        }
      },
      {
        "id": "d",
        "text": {
          "de": "Es speichert das Diagramm unter dem Namen A",
          "en": "It saves the plot under the name A"
        }
      }
    ],
    "answer": "a",
    "explanation": {
      "de": "label benennt die Linie; der Text erscheint, sobald plt.legend() aufgerufen wird. Achsenbeschriftung und Titel setzt man mit xlabel/ylabel bzw. title, Speichern erfolgt mit savefig.",
      "en": "label names the line; the text appears once plt.legend() is called. Axis labels and the title are set with xlabel/ylabel and title, saving is done with savefig."
    },
    "tip": {
      "de": "Mehrere Linien müssen unterscheidbar sein.",
      "en": "Several lines have to be distinguishable."
    }
  },
  {
    "id": "ch5-mc-116",
    "chapter": 5,
    "section": "5.4 Visualisierung mit Matplotlib",
    "source": {
      "document": "SOTE2 Skript (Softwareentwicklung 2)",
      "section": "5.4 Visualisierung mit Matplotlib / Labor 5 (Datensätze und Visualisierung)"
    },
    "type": "mc",
    "difficulty": "medium",
    "question": {
      "de": "Welche Reihenfolge entspricht dem typischen Ablauf einer Visualisierung mit Matplotlib?",
      "en": "Which order corresponds to the typical workflow of a visualization with Matplotlib?"
    },
    "clarification": null,
    "code": null,
    "options": [
      {
        "id": "a",
        "text": {
          "de": "Zeichnen (z.B. plot) und Achsen/Titel anpassen, danach show()",
          "en": "Draw (e.g. plot) and adjust axes/title, then show()"
        }
      },
      {
        "id": "b",
        "text": {
          "de": "show() aufrufen, danach zeichnen",
          "en": "Call show(), then draw"
        }
      },
      {
        "id": "c",
        "text": {
          "de": "Zuerst zwingend plt.figure() aufrufen, dann show(), dann zeichnen",
          "en": "First call plt.figure() (mandatory), then show(), then draw"
        }
      },
      {
        "id": "d",
        "text": {
          "de": "Achsen beschriften, danach nur savefig(); show() ist nie erlaubt",
          "en": "Label axes, then only savefig(); show() is never allowed"
        }
      }
    ],
    "answer": "a",
    "explanation": {
      "de": "Das Zeichenfenster ist optional und wird automatisch erstellt; es wird gezeichnet, angepasst und mit show() angezeigt. show() steht am Ende, und es ist nicht verboten.",
      "en": "The figure is optional and created automatically; you draw, adjust and display with show(). show() comes at the end, and it is not forbidden."
    },
    "tip": {
      "de": "Das Anzeigen kommt zuletzt.",
      "en": "Displaying comes last."
    }
  },
  {
    "id": "ch5-mc-117",
    "chapter": 5,
    "section": "5.4 Visualisierung mit Matplotlib",
    "source": {
      "document": "SOTE2 Skript (Softwareentwicklung 2)",
      "section": "5.4 Visualisierung mit Matplotlib / Labor 5 (Datensätze und Visualisierung)"
    },
    "type": "mc",
    "difficulty": "hard",
    "question": {
      "de": "Was bewirkt der Aufruf plt.subplot(2, 1, 2)?",
      "en": "What does the call plt.subplot(2, 1, 2) do?"
    },
    "clarification": {
      "de": "matplotlib.pyplot wurde als plt importiert.",
      "en": "matplotlib.pyplot was imported as plt."
    },
    "code": null,
    "options": [
      {
        "id": "a",
        "text": {
          "de": "Er wählt das untere von zwei untereinander angeordneten Plots",
          "en": "It selects the lower of two plots arranged vertically"
        }
      },
      {
        "id": "b",
        "text": {
          "de": "Er wählt den rechten von zwei nebeneinander angeordneten Plots",
          "en": "It selects the right of two plots arranged side by side"
        }
      },
      {
        "id": "c",
        "text": {
          "de": "Er wählt den oberen von zwei untereinander angeordneten Plots",
          "en": "It selects the upper of two plots arranged vertically"
        }
      },
      {
        "id": "d",
        "text": {
          "de": "Er erzeugt zwei neue Zeichenfenster mit je einem Plot",
          "en": "It creates two new figures with one plot each"
        }
      }
    ],
    "answer": "a",
    "explanation": {
      "de": "subplot(Zeilen, Spalten, Index): 2 Zeilen und 1 Spalte ergeben zwei untereinander liegende Plots, Index 2 ist der zweite, also untere. Nebeneinander wäre subplot(1, 2, ...), und alle Plots gehören zum selben Zeichenfenster.",
      "en": "subplot(rows, columns, index): 2 rows and 1 column give two plots stacked vertically, index 2 is the second, i.e. the lower one. Side by side would be subplot(1, 2, ...), and all plots belong to the same figure."
    },
    "tip": {
      "de": "Die ersten beiden Zahlen geben das Raster an: Zeilen, dann Spalten.",
      "en": "The first two numbers define the grid: rows, then columns."
    }
  },
  {
    "id": "ch5-mc-118",
    "chapter": 5,
    "section": "5.4 Visualisierung mit Matplotlib",
    "source": {
      "document": "SOTE2 Skript (Softwareentwicklung 2)",
      "section": "5.4 Visualisierung mit Matplotlib / Labor 5 (Datensätze und Visualisierung)"
    },
    "type": "mc",
    "difficulty": "hard",
    "question": {
      "de": "An welchen Koordinaten liegen die Punkte, die der folgende Aufruf zeichnet?",
      "en": "At which coordinates are the points drawn by the following call?"
    },
    "clarification": null,
    "code": "import matplotlib.pyplot as plt\nplt.plot([5, 7, 9])",
    "options": [
      {
        "id": "a",
        "text": {
          "de": "(0, 5), (1, 7), (2, 9)",
          "en": "(0, 5), (1, 7), (2, 9)"
        }
      },
      {
        "id": "b",
        "text": {
          "de": "(5, 0), (7, 1), (9, 2)",
          "en": "(5, 0), (7, 1), (9, 2)"
        }
      },
      {
        "id": "c",
        "text": {
          "de": "(1, 5), (2, 7), (3, 9)",
          "en": "(1, 5), (2, 7), (3, 9)"
        }
      },
      {
        "id": "d",
        "text": {
          "de": "Es entsteht ein Fehler, weil x fehlt",
          "en": "An error occurs because x is missing"
        }
      }
    ],
    "answer": "a",
    "explanation": {
      "de": "Bei nur einer Liste werden die Werte als y-Werte interpretiert und die x-Werte automatisch als 0, 1, 2 vergeben. Die Punkte sind also (0, 5), (1, 7), (2, 9). Es ist kein Fehler und die Zählung beginnt bei 0.",
      "en": "With only one list, the values are interpreted as y-values and the x-values are assigned automatically as 0, 1, 2. The points are therefore (0, 5), (1, 7), (2, 9). It is not an error and counting starts at 0."
    },
    "tip": {
      "de": "Welche Achse bekommt die einzelne Liste, und wo beginnt die Zählung?",
      "en": "Which axis gets the single list, and where does counting start?"
    }
  },
  {
    "id": "ch5-ms-106",
    "chapter": 5,
    "section": "5.4 Visualisierung mit Matplotlib",
    "source": {
      "document": "SOTE2 Skript (Softwareentwicklung 2)",
      "section": "5.4 Visualisierung mit Matplotlib / Labor 5 (Datensätze und Visualisierung)"
    },
    "type": "ms",
    "difficulty": "medium",
    "question": {
      "de": "Welche der folgenden Funktionen zeichnen Diagramme in matplotlib.pyplot? Wähle alle zutreffenden Antworten.",
      "en": "Which of the following functions draw plots in matplotlib.pyplot? Select all that apply."
    },
    "clarification": {
      "de": "matplotlib.pyplot wurde als plt importiert.",
      "en": "matplotlib.pyplot was imported as plt."
    },
    "code": null,
    "options": [
      {
        "id": "a",
        "text": {
          "de": "plt.plot",
          "en": "plt.plot"
        }
      },
      {
        "id": "b",
        "text": {
          "de": "plt.bar",
          "en": "plt.bar"
        }
      },
      {
        "id": "c",
        "text": {
          "de": "plt.scatter",
          "en": "plt.scatter"
        }
      },
      {
        "id": "d",
        "text": {
          "de": "plt.hist",
          "en": "plt.hist"
        }
      },
      {
        "id": "e",
        "text": {
          "de": "plt.read_csv",
          "en": "plt.read_csv"
        }
      },
      {
        "id": "f",
        "text": {
          "de": "plt.groupby",
          "en": "plt.groupby"
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
      "de": "plot (Linien), bar (Balken), scatter (Streudiagramm) und hist (Histogramm) sind Zeichenfunktionen. read_csv und groupby gehören zu Pandas, nicht zu matplotlib.pyplot.",
      "en": "plot (lines), bar (bars), scatter (scatter plot) and hist (histogram) are drawing functions. read_csv and groupby belong to Pandas, not to matplotlib.pyplot."
    },
    "tip": {
      "de": "Vier der Namen stehen für Diagrammarten.",
      "en": "Four of the names stand for plot types."
    }
  },
  {
    "id": "ch5-ms-107",
    "chapter": 5,
    "section": "5.4 Visualisierung mit Matplotlib",
    "source": {
      "document": "SOTE2 Skript (Softwareentwicklung 2)",
      "section": "5.4 Visualisierung mit Matplotlib / Labor 5 (Datensätze und Visualisierung)"
    },
    "type": "ms",
    "difficulty": "hard",
    "question": {
      "de": "Welche Aussagen über Matplotlib sind korrekt? Wähle alle zutreffenden Antworten.",
      "en": "Which statements about Matplotlib are correct? Select all that apply."
    },
    "clarification": null,
    "code": null,
    "options": [
      {
        "id": "a",
        "text": {
          "de": "Ein Zeichenfenster wird automatisch erstellt, wenn man keines explizit anlegt",
          "en": "A figure is created automatically if none is created explicitly"
        }
      },
      {
        "id": "b",
        "text": {
          "de": "Ein Zeichenfenster kann mehrere Plots in einem Raster enthalten (subplot)",
          "en": "A figure can contain several plots arranged in a grid (subplot)"
        }
      },
      {
        "id": "c",
        "text": {
          "de": "Zeichenfenster bieten Zusatzfunktionen, z.B. zum Speichern der Grafik",
          "en": "Figures offer additional functions, e.g. for saving the graphic"
        }
      },
      {
        "id": "d",
        "text": {
          "de": "show() muss aufgerufen werden, bevor man zeichnet",
          "en": "show() must be called before drawing"
        }
      },
      {
        "id": "e",
        "text": {
          "de": "In Jupyter Notebooks öffnet sich standardmäßig ein separates Zeichenfenster",
          "en": "In Jupyter notebooks a separate figure window opens by default"
        }
      }
    ],
    "answer": [
      "a",
      "b",
      "c"
    ],
    "explanation": {
      "de": "Die ersten drei Aussagen stehen so im Skript. show() ist der letzte Schritt nach dem Zeichnen, und in Jupyter wird standardmäßig inline gezeichnet, ohne Fenster.",
      "en": "The first three statements are as stated in the script. show() is the last step after drawing, and in Jupyter plots are drawn inline by default, without a window."
    },
    "tip": {
      "de": "Denke an die Schritte: Fenster, Zeichnen, Anzeigen.",
      "en": "Think of the steps: figure, drawing, displaying."
    }
  },
  {
    "id": "ch5-tf-106",
    "chapter": 5,
    "section": "5.4 Visualisierung mit Matplotlib",
    "source": {
      "document": "SOTE2 Skript (Softwareentwicklung 2)",
      "section": "5.4 Visualisierung mit Matplotlib"
    },
    "type": "tf",
    "difficulty": "easy",
    "question": {
      "de": "Wahr oder falsch: Die Syntax von Matplotlib-Plots ist sehr ähnlich zu der von MATLAB (z.B. plot, subplot, figure).",
      "en": "True or false: The syntax of Matplotlib plots is very similar to that of MATLAB (e.g. plot, subplot, figure)."
    },
    "clarification": null,
    "code": null,
    "answer": true,
    "explanation": {
      "de": "Das Skript hebt diese Ähnlichkeit hervor und nennt plot, subplot und figure als Beispiele.",
      "en": "The script emphasizes this similarity and names plot, subplot and figure as examples."
    },
    "tip": {
      "de": "Es geht um den Ursprung der Funktionsnamen.",
      "en": "This is about the origin of the function names."
    }
  },
  {
    "id": "ch5-tf-107",
    "chapter": 5,
    "section": "5.4 Visualisierung mit Matplotlib",
    "source": {
      "document": "SOTE2 Skript (Softwareentwicklung 2)",
      "section": "5.4 Visualisierung mit Matplotlib / Labor 5 (Datensätze und Visualisierung)"
    },
    "type": "tf",
    "difficulty": "medium",
    "question": {
      "de": "Wahr oder falsch: Der folgende Code löst einen Fehler aus, weil vorher kein Zeichenfenster mit plt.figure() erstellt wurde.",
      "en": "True or false: The following code raises an error because no figure was created with plt.figure() beforehand."
    },
    "clarification": null,
    "code": "import matplotlib.pyplot as plt\nplt.plot([1, 2, 3], [4, 5, 6])\nplt.show()",
    "answer": false,
    "explanation": {
      "de": "Das Zeichenfenster ist optional und wird automatisch erstellt, wenn man es nicht explizit anlegt. Der Code läuft daher ohne Fehler und zeigt die Linie an.",
      "en": "The figure is optional and is created automatically if not created explicitly. The code therefore runs without error and displays the line."
    },
    "tip": {
      "de": "Ist der erste Schritt (figure) verpflichtend?",
      "en": "Is the first step (figure) mandatory?"
    }
  },
  {
    "id": "ch5-fib-106",
    "chapter": 5,
    "section": "5.4 Visualisierung mit Matplotlib",
    "source": {
      "document": "SOTE2 Skript (Softwareentwicklung 2)",
      "section": "5.4 Visualisierung mit Matplotlib / Labor 5 (Datensätze und Visualisierung)"
    },
    "type": "fib",
    "difficulty": "easy",
    "question": {
      "de": "Ergänze den Import-Alias und die Funktion für einen Linienplot.",
      "en": "Fill in the import alias and the function for a line plot."
    },
    "clarification": {
      "de": "Gesucht sind Python-Bezeichner.",
      "en": "Python identifiers are expected."
    },
    "code": "import matplotlib.pyplot as ____\nplt.____([1, 2, 3], [1, 4, 9])\nplt.show()",
    "answer": null,
    "blanks": [
      {
        "accepted": [
          "plt"
        ],
        "caseSensitive": true
      },
      {
        "accepted": [
          "plot"
        ],
        "caseSensitive": true
      }
    ],
    "explanation": {
      "de": "pyplot wird üblicherweise als plt importiert, und plt.plot zeichnet einen Linienplot.",
      "en": "pyplot is usually imported as plt, and plt.plot draws a line plot."
    },
    "tip": {
      "de": "Der Alias steht bereits im restlichen Code; die Funktion heißt wie das Ergebnis.",
      "en": "The alias already appears in the rest of the code; the function is named like the result."
    }
  },
  {
    "id": "ch5-fib-107",
    "chapter": 5,
    "section": "5.4 Visualisierung mit Matplotlib",
    "source": {
      "document": "SOTE2 Skript (Softwareentwicklung 2)",
      "section": "5.4 Visualisierung mit Matplotlib / Labor 5 (Datensätze und Visualisierung)"
    },
    "type": "fib",
    "difficulty": "medium",
    "question": {
      "de": "Zeichne ein Balkendiagramm und gib ihm einen Titel. Ergänze die beiden Funktionen.",
      "en": "Draw a bar chart and give it a title. Fill in the two functions."
    },
    "clarification": {
      "de": "matplotlib.pyplot wurde als plt importiert.",
      "en": "matplotlib.pyplot was imported as plt."
    },
    "code": "import matplotlib.pyplot as plt\nplt.____([\"A\", \"B\"], [3, 5])\nplt.____(\"Sales\")\nplt.show()",
    "answer": null,
    "blanks": [
      {
        "accepted": [
          "bar"
        ],
        "caseSensitive": true
      },
      {
        "accepted": [
          "title"
        ],
        "caseSensitive": true
      }
    ],
    "explanation": {
      "de": "plt.bar zeichnet die Balken und plt.title setzt die Überschrift des Diagramms.",
      "en": "plt.bar draws the bars and plt.title sets the heading of the plot."
    },
    "tip": {
      "de": "Die zweite Funktion heißt wie das englische Wort für Titel.",
      "en": "The second function is named like the English word for title."
    }
  },
  {
    "id": "ch5-fib-108",
    "chapter": 5,
    "section": "5.4 Visualisierung mit Matplotlib",
    "source": {
      "document": "SOTE2 Skript (Softwareentwicklung 2)",
      "section": "5.4 Visualisierung mit Matplotlib / Labor 5 (Datensätze und Visualisierung)"
    },
    "type": "fib",
    "difficulty": "hard",
    "question": {
      "de": "Zeichne Punkte mit der Beschriftung \"points\" und zeige die Legende an. Ergänze Argumentname und Funktion.",
      "en": "Draw points with the label \"points\" and display the legend. Fill in the argument name and the function."
    },
    "clarification": {
      "de": "matplotlib.pyplot wurde als plt importiert.",
      "en": "matplotlib.pyplot was imported as plt."
    },
    "code": "import matplotlib.pyplot as plt\nplt.scatter([1, 2, 3], [3, 1, 2], ____=\"points\")\nplt.____()\nplt.show()",
    "answer": null,
    "blanks": [
      {
        "accepted": [
          "label"
        ],
        "caseSensitive": true
      },
      {
        "accepted": [
          "legend"
        ],
        "caseSensitive": true
      }
    ],
    "explanation": {
      "de": "Mit dem Argument label erhält die Punktwolke einen Namen, und plt.legend() zeigt die Legende mit diesem Eintrag an.",
      "en": "The argument label gives the point cloud a name, and plt.legend() displays the legend with this entry."
    },
    "tip": {
      "de": "Das Argument heißt wie das Wort für Beschriftung, die Funktion wie das Wort für Legende.",
      "en": "The argument is named like the word for caption, the function like the word for legend."
    }
  },
  {
    "id": "ch5-fib-109",
    "chapter": 5,
    "section": "5.4 Visualisierung mit Matplotlib",
    "source": {
      "document": "SOTE2 Skript (Softwareentwicklung 2)",
      "section": "5.4 Visualisierung mit Matplotlib / Labor 5 (Datensätze und Visualisierung)"
    },
    "type": "fib",
    "difficulty": "hard",
    "question": {
      "de": "Wähle den linken von zwei nebeneinander liegenden Plots, zeichne ein Histogramm mit 5 Klassen und speichere die Grafik. Ergänze die drei fehlenden Namen.",
      "en": "Select the left of two plots side by side, draw a histogram with 5 bins and save the graphic. Fill in the three missing names."
    },
    "clarification": {
      "de": "matplotlib.pyplot wurde als plt importiert.",
      "en": "matplotlib.pyplot was imported as plt."
    },
    "code": "import matplotlib.pyplot as plt\ndata = [1, 2, 2, 3, 3, 3, 4, 4, 5]\nplt.____(1, 2, 1)\nplt.hist(data, ____=5)\nplt.____(\"hist.png\")",
    "answer": null,
    "blanks": [
      {
        "accepted": [
          "subplot"
        ],
        "caseSensitive": true
      },
      {
        "accepted": [
          "bins"
        ],
        "caseSensitive": true
      },
      {
        "accepted": [
          "savefig"
        ],
        "caseSensitive": true
      }
    ],
    "explanation": {
      "de": "plt.subplot(1, 2, 1) wählt den ersten Plot eines Rasters mit 1 Zeile und 2 Spalten. Das Argument bins legt die Anzahl der Klassen fest, und plt.savefig speichert die Grafik in einer Datei.",
      "en": "plt.subplot(1, 2, 1) selects the first plot of a grid with 1 row and 2 columns. The argument bins sets the number of classes, and plt.savefig saves the graphic to a file."
    },
    "tip": {
      "de": "Raster, Klassenanzahl, Speichern: drei verschiedene Namen.",
      "en": "Grid, number of classes, saving: three different names."
    }
  },
  {
    "id": "ch5-fe-104",
    "chapter": 5,
    "section": "5.4 Visualisierung mit Matplotlib",
    "source": {
      "document": "SOTE2 Skript (Softwareentwicklung 2)",
      "section": "5.4 Visualisierung mit Matplotlib / Labor 5 (Datensätze und Visualisierung)"
    },
    "type": "fe",
    "difficulty": "hard",
    "question": {
      "de": "Der Code soll y gegen x als Streudiagramm anzeigen, enthält aber genau einen Fehler. In welcher Zeile liegt er?",
      "en": "The code should display y against x as a scatter plot but contains exactly one error. In which line is it?"
    },
    "clarification": null,
    "code": "1: import matplotlib.pyplot as plt\n2: x = [1, 2, 3]\n3: y = [3, 1, 2]\n4: plt.scatter(x)\n5: plt.show()",
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
      },
      {
        "id": "e",
        "text": {
          "de": "Zeile 5",
          "en": "Line 5"
        }
      }
    ],
    "answer": "d",
    "explanation": {
      "de": "plt.scatter benötigt sowohl x- als auch y-Werte; mit nur x entsteht ein TypeError. Korrekt ist plt.scatter(x, y). Import, Daten und show() sind in Ordnung.",
      "en": "plt.scatter needs both x and y values; with only x a TypeError is raised. The correct call is plt.scatter(x, y). The import, the data and show() are fine."
    },
    "tip": {
      "de": "Wie viele Argumente braucht ein Streudiagramm mindestens?",
      "en": "How many arguments does a scatter plot need at least?"
    }
  },
  {
    "id": "ch5-mc-201",
    "chapter": 5,
    "section": "5.2 Überblick",
    "source": {
      "document": "SOTE2 Skript (Softwareentwicklung 2)",
      "section": "5.2 Überblick"
    },
    "type": "mc",
    "difficulty": "easy",
    "question": {
      "de": "Ein Sensor misst jeden Tag die Temperatur, die Werte sind nach Datum geordnet. Welche Art strukturierter Daten ist das?",
      "en": "A sensor measures the temperature every day, and the values are ordered by date. Which kind of structured data is this?"
    },
    "clarification": null,
    "code": null,
    "options": [
      {
        "id": "a",
        "text": {
          "de": "Binärdaten ohne Struktur",
          "en": "Unstructured binary data"
        }
      },
      {
        "id": "b",
        "text": {
          "de": "Zeitreihe",
          "en": "Time series"
        }
      },
      {
        "id": "c",
        "text": {
          "de": "Hierarchische Daten",
          "en": "Hierarchical data"
        }
      },
      {
        "id": "d",
        "text": {
          "de": "Quellcode",
          "en": "Source code"
        }
      }
    ],
    "answer": "b",
    "explanation": {
      "de": "Messwerte, die in zeitlicher Reihenfolge vorliegen, bilden eine Zeitreihe; der Überblick nennt sie als eigene Art strukturierter Daten. Hierarchische Daten sind verschachtelt, und Quellcode oder unstrukturierte Binärdaten sind keine strukturierten Datensätze.",
      "en": "Measurements that exist in chronological order form a time series; the overview lists it as its own kind of structured data. Hierarchical data is nested, and source code or unstructured binary data are not structured datasets."
    },
    "tip": {
      "de": "Achte auf das Ordnungskriterium der Werte.",
      "en": "Look at the ordering criterion of the values."
    }
  },
  {
    "id": "ch5-mc-202",
    "chapter": 5,
    "section": "5.2 Überblick",
    "source": {
      "document": "SOTE2 Skript (Softwareentwicklung 2)",
      "section": "5.2 Überblick"
    },
    "type": "mc",
    "difficulty": "medium",
    "question": {
      "de": "Welche Vorkenntnisse setzt das Modul zu Datensätzen laut Überblick voraus?",
      "en": "Which prior knowledge does the module on datasets assume according to the overview?"
    },
    "clarification": null,
    "code": null,
    "options": [
      {
        "id": "a",
        "text": {
          "de": "Erfahrung mit Webframeworks wie Flask",
          "en": "Experience with web frameworks such as Flask"
        }
      },
      {
        "id": "b",
        "text": {
          "de": "Kenntnisse in HTML und CSS",
          "en": "Knowledge of HTML and CSS"
        }
      },
      {
        "id": "c",
        "text": {
          "de": "Grundkenntnisse zu Listen, Dictionaries, JSON und Numpy",
          "en": "Basic knowledge of lists, dictionaries, JSON and Numpy"
        }
      },
      {
        "id": "d",
        "text": {
          "de": "Kenntnisse in SQL-Abfragen und Joins",
          "en": "Knowledge of SQL queries and joins"
        }
      }
    ],
    "answer": "c",
    "explanation": {
      "de": "Das Modul baut auf Datenstrukturen wie Listen und Dictionaries sowie JSON und Paketen wie Numpy auf. SQL, Flask oder HTML/CSS werden dafür nicht vorausgesetzt.",
      "en": "The module builds on data structures such as lists and dictionaries as well as JSON and packages such as Numpy. SQL, Flask or HTML/CSS are not assumed for it."
    },
    "tip": {
      "de": "Denke an die Themen, die in den Kapiteln vor Pandas behandelt wurden.",
      "en": "Think of the topics covered in the chapters before Pandas."
    }
  },
  {
    "id": "ch5-tf-201",
    "chapter": 5,
    "section": "5.2 Überblick",
    "source": {
      "document": "SOTE2 Skript (Softwareentwicklung 2)",
      "section": "5.2 Überblick"
    },
    "type": "tf",
    "difficulty": "easy",
    "question": {
      "de": "Wahr oder falsch: Laut Überblick können Datensätze in Python nicht nur mit Pandas, sondern auch mit Dictionaries oder JSON verarbeitet werden.",
      "en": "True or false: According to the overview, datasets in Python can be processed not only with Pandas but also with dictionaries or JSON."
    },
    "clarification": null,
    "code": null,
    "answer": true,
    "explanation": {
      "de": "Der Überblick nennt Dictionaries, JSON und Pandas als Möglichkeiten, mit strukturierten Daten zu arbeiten. Pandas ist der Schwerpunkt des Moduls, aber nicht die einzige Option.",
      "en": "The overview names dictionaries, JSON and Pandas as ways to work with structured data. Pandas is the focus of the module but not the only option."
    },
    "tip": {
      "de": "Überlege, welche Datenstrukturen du aus den vorherigen Kapiteln kennst.",
      "en": "Think of the data structures you know from the previous chapters."
    }
  },
  {
    "id": "ch5-mc-203",
    "chapter": 5,
    "section": "5.3 Pandas",
    "source": {
      "document": "SOTE2 Skript (Softwareentwicklung 2)",
      "section": "5.3 Pandas / Labor 4 (Dateien und Datensätze)"
    },
    "type": "mc",
    "difficulty": "easy",
    "question": {
      "de": "Welches Attribut eines DataFrames df liefert die Spaltennamen?",
      "en": "Which attribute of a DataFrame df returns the column names?"
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
          "de": "df.cols",
          "en": "df.cols"
        }
      },
      {
        "id": "b",
        "text": {
          "de": "df.names",
          "en": "df.names"
        }
      },
      {
        "id": "c",
        "text": {
          "de": "df.fields",
          "en": "df.fields"
        }
      },
      {
        "id": "d",
        "text": {
          "de": "df.columns",
          "en": "df.columns"
        }
      }
    ],
    "answer": "d",
    "explanation": {
      "de": "df.columns enthält die Spaltenbeschriftungen des DataFrames. cols, names und fields sind keine Attribute von DataFrames.",
      "en": "df.columns holds the column labels of the DataFrame. cols, names and fields are not DataFrame attributes."
    },
    "tip": {
      "de": "Das Attribut heißt wie das englische Wort für Spalten im Plural.",
      "en": "The attribute is named like the English word for columns in the plural."
    }
  },
  {
    "id": "ch5-mc-204",
    "chapter": 5,
    "section": "5.3 Pandas",
    "source": {
      "document": "SOTE2 Skript (Softwareentwicklung 2)",
      "section": "5.3 Pandas / Labor 4 (Dateien und Datensätze)"
    },
    "type": "mc",
    "difficulty": "medium",
    "question": {
      "de": "Welche Ausgabe erzeugt der folgende Code?",
      "en": "What output does the following code produce?"
    },
    "clarification": null,
    "code": "import pandas as pd\ndf = pd.DataFrame({\"a\": [1, 2, 3, 4, 5]})\nprint(df.tail(2)[\"a\"].tolist())",
    "options": [
      {
        "id": "a",
        "text": {
          "de": "[4, 5]",
          "en": "[4, 5]"
        }
      },
      {
        "id": "b",
        "text": {
          "de": "[1, 2]",
          "en": "[1, 2]"
        }
      },
      {
        "id": "c",
        "text": {
          "de": "[5, 4]",
          "en": "[5, 4]"
        }
      },
      {
        "id": "d",
        "text": {
          "de": "[3, 4, 5]",
          "en": "[3, 4, 5]"
        }
      }
    ],
    "answer": "a",
    "explanation": {
      "de": "tail(2) liefert die letzten zwei Zeilen in ihrer ursprünglichen Reihenfolge, also [4, 5]. [1, 2] entspräche head(2), und die Reihenfolge wird nicht umgekehrt.",
      "en": "tail(2) returns the last two rows in their original order, i.e. [4, 5]. [1, 2] would be head(2), and the order is not reversed."
    },
    "tip": {
      "de": "Das Argument gibt an, wie viele Zeilen vom Ende geholt werden.",
      "en": "The argument states how many rows are taken from the end."
    }
  },
  {
    "id": "ch5-mc-205",
    "chapter": 5,
    "section": "5.3 Pandas",
    "source": {
      "document": "SOTE2 Skript (Softwareentwicklung 2)",
      "section": "5.3 Pandas / Labor 4 (Dateien und Datensätze)"
    },
    "type": "mc",
    "difficulty": "easy",
    "question": {
      "de": "Welche Methode berechnet für numerische Spalten Kennzahlen wie count, mean, min und max auf einmal?",
      "en": "Which method computes figures such as count, mean, min and max for numeric columns at once?"
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
          "de": "df.stats()",
          "en": "df.stats()"
        }
      },
      {
        "id": "b",
        "text": {
          "de": "df.describe()",
          "en": "df.describe()"
        }
      },
      {
        "id": "c",
        "text": {
          "de": "df.info()",
          "en": "df.info()"
        }
      },
      {
        "id": "d",
        "text": {
          "de": "df.summary()",
          "en": "df.summary()"
        }
      }
    ],
    "answer": "b",
    "explanation": {
      "de": "describe() liefert eine statistische Zusammenfassung (count, mean, std, min, Quartile, max). info() zeigt dagegen nur Spaltentypen und Anzahl nicht-leerer Werte, summary() und stats() gibt es nicht.",
      "en": "describe() returns a statistical summary (count, mean, std, min, quartiles, max). info() only shows column types and non-null counts, while summary() and stats() do not exist."
    },
    "tip": {
      "de": "Das gesuchte englische Verb bedeutet beschreiben.",
      "en": "The English verb you are looking for means to portray something in words."
    }
  },
  {
    "id": "ch5-mc-206",
    "chapter": 5,
    "section": "5.3 Pandas",
    "source": {
      "document": "SOTE2 Skript (Softwareentwicklung 2)",
      "section": "5.3 Pandas / Labor 4 (Dateien und Datensätze)"
    },
    "type": "mc",
    "difficulty": "medium",
    "question": {
      "de": "Welche Ausgabe erzeugt der folgende Code?",
      "en": "What output does the following code produce?"
    },
    "clarification": null,
    "code": "import pandas as pd\ndf = pd.DataFrame({\"a\": [1, 2, 3], \"b\": [4, 5, 6], \"c\": [7, 8, 9]})\nprint(df.drop(columns=\"b\").columns.tolist())",
    "options": [
      {
        "id": "a",
        "text": {
          "de": "['a', 'b', 'c']",
          "en": "['a', 'b', 'c']"
        }
      },
      {
        "id": "b",
        "text": {
          "de": "['c']",
          "en": "['c']"
        }
      },
      {
        "id": "c",
        "text": {
          "de": "['a', 'c']",
          "en": "['a', 'c']"
        }
      },
      {
        "id": "d",
        "text": {
          "de": "['b']",
          "en": "['b']"
        }
      }
    ],
    "answer": "c",
    "explanation": {
      "de": "drop(columns=\"b\") liefert einen neuen DataFrame ohne die Spalte b, übrig bleiben a und c. ['b'] wäre die entfernte Spalte, und ['a', 'b', 'c'] die ursprüngliche Spaltenliste.",
      "en": "drop(columns=\"b\") returns a new DataFrame without column b, leaving a and c. ['b'] would be the removed column, and ['a', 'b', 'c'] the original column list."
    },
    "tip": {
      "de": "Überlege, welche Spalte entfernt wird und was übrig bleibt.",
      "en": "Consider which column is removed and what remains."
    }
  },
  {
    "id": "ch5-mc-207",
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
    "clarification": null,
    "code": "import pandas as pd\ndf = pd.DataFrame({\"a\": [3, 1, 2]})\ndf[\"a\"] = df[\"a\"].sort_values()\nprint(df[\"a\"].tolist())",
    "options": [
      {
        "id": "a",
        "text": {
          "de": "[1, 2, 3]",
          "en": "[1, 2, 3]"
        }
      },
      {
        "id": "b",
        "text": {
          "de": "[3, 2, 1]",
          "en": "[3, 2, 1]"
        }
      },
      {
        "id": "c",
        "text": {
          "de": "ValueError",
          "en": "ValueError"
        }
      },
      {
        "id": "d",
        "text": {
          "de": "[3, 1, 2]",
          "en": "[3, 1, 2]"
        }
      }
    ],
    "answer": "d",
    "explanation": {
      "de": "Beim Zuweisen einer Series an eine Spalte richtet Pandas die Werte nach dem Index aus, nicht nach der Position. Die sortierte Series behält ihre Index-Labels, daher landet jeder Wert wieder in seiner ursprünglichen Zeile und die Ausgabe bleibt [3, 1, 2]. Ein Fehler tritt nicht auf.",
      "en": "When assigning a Series to a column, Pandas aligns the values by index, not by position. The sorted Series keeps its index labels, so every value ends up in its original row again and the output stays [3, 1, 2]. No error occurs."
    },
    "tip": {
      "de": "Prüfe, woran Pandas beim Zuweisen einer Series die Zeilen zuordnet.",
      "en": "Check what Pandas uses to match rows when assigning a Series."
    }
  },
  {
    "id": "ch5-mc-208",
    "chapter": 5,
    "section": "5.3 Pandas",
    "source": {
      "document": "SOTE2 Skript (Softwareentwicklung 2)",
      "section": "5.3 Pandas / Labor 4 (Dateien und Datensätze)"
    },
    "type": "mc",
    "difficulty": "easy",
    "question": {
      "de": "Welchen Wert gibt der folgende Code aus?",
      "en": "Which value does the following code print?"
    },
    "clarification": null,
    "code": "import pandas as pd\ndf = pd.DataFrame({\"a\": [2, 4, 6, 8]})\nprint(df[\"a\"].mean())",
    "options": [
      {
        "id": "a",
        "text": {
          "de": "5.0",
          "en": "5.0"
        }
      },
      {
        "id": "b",
        "text": {
          "de": "20",
          "en": "20"
        }
      },
      {
        "id": "c",
        "text": {
          "de": "6.0",
          "en": "6.0"
        }
      },
      {
        "id": "d",
        "text": {
          "de": "8",
          "en": "8"
        }
      }
    ],
    "answer": "a",
    "explanation": {
      "de": "mean() berechnet den Durchschnitt: (2+4+6+8)/4 = 5.0. 20 wäre die Summe, 8 das Maximum.",
      "en": "mean() computes the average: (2+4+6+8)/4 = 5.0. 20 would be the sum, 8 the maximum."
    },
    "tip": {
      "de": "Teile die Summe durch die Anzahl der Werte.",
      "en": "Divide the sum by the number of values."
    }
  },
  {
    "id": "ch5-mc-209",
    "chapter": 5,
    "section": "5.3 Pandas",
    "source": {
      "document": "SOTE2 Skript (Softwareentwicklung 2)",
      "section": "5.3 Pandas / Labor 4 (Dateien und Datensätze)"
    },
    "type": "mc",
    "difficulty": "medium",
    "question": {
      "de": "Welchen Wert gibt der folgende Code aus?",
      "en": "Which value does the following code print?"
    },
    "clarification": null,
    "code": "import pandas as pd\ndf = pd.DataFrame({\"s\": [\"x\", \"y\", \"x\", \"x\", \"y\", \"z\"]})\nprint(df[\"s\"].value_counts()[\"y\"])",
    "options": [
      {
        "id": "a",
        "text": {
          "de": "6",
          "en": "6"
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
          "de": "3",
          "en": "3"
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
      "de": "value_counts() zählt, wie oft jeder Wert vorkommt (x: 3, y: 2, z: 1). Der Zugriff mit [\"y\"] liefert die Häufigkeit von y, also 2. 3 wäre die Häufigkeit von x, 6 die Gesamtzahl der Zeilen.",
      "en": "value_counts() counts how often each value occurs (x: 3, y: 2, z: 1). Accessing [\"y\"] returns the frequency of y, i.e. 2. 3 would be the frequency of x, 6 the total number of rows."
    },
    "tip": {
      "de": "Das Ergebnis ist eine Series, deren Index die gezählten Werte sind.",
      "en": "The result is a Series whose index consists of the counted values."
    }
  },
  {
    "id": "ch5-mc-210",
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
    "clarification": null,
    "code": "import pandas as pd\ndf = pd.DataFrame({\"g\": [\"A\", \"B\", \"A\", None]})\nprint(df[\"g\"].nunique(), len(df[\"g\"].unique()))",
    "options": [
      {
        "id": "a",
        "text": {
          "de": "2 2",
          "en": "2 2"
        }
      },
      {
        "id": "b",
        "text": {
          "de": "3 4",
          "en": "3 4"
        }
      },
      {
        "id": "c",
        "text": {
          "de": "2 3",
          "en": "2 3"
        }
      },
      {
        "id": "d",
        "text": {
          "de": "3 3",
          "en": "3 3"
        }
      }
    ],
    "answer": "c",
    "explanation": {
      "de": "nunique() zählt die verschiedenen Werte ohne fehlende Werte: A und B, also 2. unique() liefert dagegen alle verschiedenen Werte inklusive des fehlenden Werts (A, B, None), also Länge 3.",
      "en": "nunique() counts the distinct values excluding missing values: A and B, i.e. 2. unique() on the other hand returns all distinct values including the missing one (A, B, None), i.e. length 3."
    },
    "tip": {
      "de": "Überlege, ob fehlende Werte bei den beiden Methoden mitgezählt werden.",
      "en": "Consider whether missing values are counted by the two methods."
    }
  },
  {
    "id": "ch5-mc-211",
    "chapter": 5,
    "section": "5.3 Pandas",
    "source": {
      "document": "SOTE2 Skript (Softwareentwicklung 2)",
      "section": "5.3 Pandas / Labor 4 (Dateien und Datensätze)"
    },
    "type": "mc",
    "difficulty": "hard",
    "question": {
      "de": "Welchen Wert gibt der folgende Code aus?",
      "en": "Which value does the following code print?"
    },
    "clarification": null,
    "code": "import pandas as pd\ndf = pd.DataFrame({\"city\": [\"Bern\", \"Basel\", \"Zug\", \"Bern\"], \"v\": [1, 2, 3, 4]})\nprint(df[df[\"city\"].isin([\"Bern\", \"Zug\"])][\"v\"].sum())",
    "options": [
      {
        "id": "a",
        "text": {
          "de": "5",
          "en": "5"
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
          "de": "10",
          "en": "10"
        }
      },
      {
        "id": "d",
        "text": {
          "de": "8",
          "en": "8"
        }
      }
    ],
    "answer": "d",
    "explanation": {
      "de": "isin liefert eine Maske, die für Bern, Zug und Bern wahr ist, also bleiben die Zeilen mit v = 1, 3 und 4. Deren Summe ist 8. 5 wäre nur Bern, 3 nur Zug und 10 die Summe aller Zeilen.",
      "en": "isin returns a mask that is true for Bern, Zug and Bern, so the rows with v = 1, 3 and 4 remain. Their sum is 8. 5 would be Bern only, 3 Zug only and 10 the sum of all rows."
    },
    "tip": {
      "de": "Bestimme zuerst, welche Zeilen die Maske übrig lässt.",
      "en": "First determine which rows the mask leaves."
    }
  },
  {
    "id": "ch5-mc-212",
    "chapter": 5,
    "section": "5.3 Pandas",
    "source": {
      "document": "SOTE2 Skript (Softwareentwicklung 2)",
      "section": "5.3 Pandas / Labor 4 (Dateien und Datensätze)"
    },
    "type": "mc",
    "difficulty": "hard",
    "question": {
      "de": "Welche Ausgabe erzeugt der folgende Code, wenn die Datei zeilenweise gelesen wird?",
      "en": "What output does the following code produce when the file is read line by line?"
    },
    "clarification": {
      "de": "df.to_csv schreibt standardmäßig auch den Index in die Datei.",
      "en": "By default, df.to_csv also writes the index to the file."
    },
    "code": "import pandas as pd\ndf = pd.DataFrame({\"a\": [1, 2]})\ndf.to_csv(\"o.csv\")\nprint(open(\"o.csv\").read().splitlines())",
    "options": [
      {
        "id": "a",
        "text": {
          "de": "[',a', '0,1', '1,2']",
          "en": "[',a', '0,1', '1,2']"
        }
      },
      {
        "id": "b",
        "text": {
          "de": "['a', '1', '2']",
          "en": "['a', '1', '2']"
        }
      },
      {
        "id": "c",
        "text": {
          "de": "['a', '0,1', '1,2']",
          "en": "['a', '0,1', '1,2']"
        }
      },
      {
        "id": "d",
        "text": {
          "de": "[',a', '1', '2']",
          "en": "[',a', '1', '2']"
        }
      }
    ],
    "answer": "a",
    "explanation": {
      "de": "Ohne index=False wird der Index als erste Spalte mitgeschrieben; seine Kopfzelle ist leer, daher beginnt die Kopfzeile mit einem Komma. Die Datenzeilen lauten 0,1 und 1,2. Die Varianten ohne Indexspalte würden index=False voraussetzen.",
      "en": "Without index=False the index is written as the first column; its header cell is empty, so the header line starts with a comma. The data lines are 0,1 and 1,2. The variants without an index column would require index=False."
    },
    "tip": {
      "de": "Überlege, was to_csv standardmäßig mit dem Zeilenindex macht.",
      "en": "Consider what to_csv does with the row index by default."
    }
  },
  {
    "id": "ch5-mc-213",
    "chapter": 5,
    "section": "5.3 Pandas",
    "source": {
      "document": "SOTE2 Skript (Softwareentwicklung 2)",
      "section": "5.3 Pandas / Labor 4 (Dateien und Datensätze)"
    },
    "type": "mc",
    "difficulty": "ultra",
    "question": {
      "de": "Welche Ausgabe erzeugt der folgende Code?",
      "en": "What output does the following code produce?"
    },
    "clarification": null,
    "code": "import pandas as pd\ndf = pd.DataFrame({\"v\": [3, 9, 5]})\ns = df.sort_values(\"v\", ascending=False)\nprint(s.loc[0, \"v\"], s.iloc[0][\"v\"])",
    "options": [
      {
        "id": "a",
        "text": {
          "de": "3 3",
          "en": "3 3"
        }
      },
      {
        "id": "b",
        "text": {
          "de": "3 9",
          "en": "3 9"
        }
      },
      {
        "id": "c",
        "text": {
          "de": "9 9",
          "en": "9 9"
        }
      },
      {
        "id": "d",
        "text": {
          "de": "9 3",
          "en": "9 3"
        }
      }
    ],
    "answer": "b",
    "explanation": {
      "de": "Nach dem Sortieren behalten die Zeilen ihre alten Index-Labels; die Reihenfolge ist 1 (v=9), 2 (v=5), 0 (v=3). loc[0, \"v\"] sucht das Label 0 und liefert 3, iloc[0] nimmt die erste Zeile nach Position und liefert 9.",
      "en": "After sorting, the rows keep their old index labels; the order is 1 (v=9), 2 (v=5), 0 (v=3). loc[0, \"v\"] looks up label 0 and returns 3, while iloc[0] takes the first row by position and returns 9."
    },
    "tip": {
      "de": "Welche Labels stehen nach dem Sortieren an welcher Position?",
      "en": "Which labels sit at which position after sorting?"
    }
  },
  {
    "id": "ch5-ms-201",
    "chapter": 5,
    "section": "5.3 Pandas",
    "source": {
      "document": "SOTE2 Skript (Softwareentwicklung 2)",
      "section": "5.3 Pandas / Labor 4 (Dateien und Datensätze)"
    },
    "type": "ms",
    "difficulty": "easy",
    "question": {
      "de": "Welche drei der folgenden Attribute besitzt ein DataFrame df? Wähle genau drei.",
      "en": "Which three of the following attributes does a DataFrame df have? Select exactly three."
    },
    "clarification": null,
    "code": null,
    "options": [
      {
        "id": "a",
        "text": {
          "de": "df.shape",
          "en": "df.shape"
        }
      },
      {
        "id": "b",
        "text": {
          "de": "df.columns",
          "en": "df.columns"
        }
      },
      {
        "id": "c",
        "text": {
          "de": "df.index",
          "en": "df.index"
        }
      },
      {
        "id": "d",
        "text": {
          "de": "df.rowcount",
          "en": "df.rowcount"
        }
      },
      {
        "id": "e",
        "text": {
          "de": "df.colnames",
          "en": "df.colnames"
        }
      }
    ],
    "answer": [
      "a",
      "b",
      "c"
    ],
    "explanation": {
      "de": "shape (Zeilen- und Spaltenzahl), columns (Spaltennamen) und index (Zeilenbeschriftungen) sind echte Attribute. rowcount und colnames existieren in Pandas nicht.",
      "en": "shape (number of rows and columns), columns (column names) and index (row labels) are real attributes. rowcount and colnames do not exist in Pandas."
    },
    "tip": {
      "de": "Überlege, womit man Größe, Spalten und Zeilenbeschriftungen einer Tabelle abfragt.",
      "en": "Think about how to query size, columns and row labels of a table."
    }
  },
  {
    "id": "ch5-ms-202",
    "chapter": 5,
    "section": "5.3 Pandas",
    "source": {
      "document": "SOTE2 Skript (Softwareentwicklung 2)",
      "section": "5.3 Pandas / Labor 4 (Dateien und Datensätze)"
    },
    "type": "ms",
    "difficulty": "medium",
    "question": {
      "de": "Welche drei Anweisungen führen dazu, dass df anschließend eine Spalte total (Summe von a und b) enthält? Wähle genau drei.",
      "en": "Which three statements result in df containing a column total (sum of a and b) afterwards? Select exactly three."
    },
    "clarification": null,
    "code": "import pandas as pd\ndf = pd.DataFrame({\"a\": [1, 2], \"b\": [3, 4]})",
    "options": [
      {
        "id": "a",
        "text": {
          "de": "df[\"total\"] = df[\"a\"] + df[\"b\"]",
          "en": "df[\"total\"] = df[\"a\"] + df[\"b\"]"
        }
      },
      {
        "id": "b",
        "text": {
          "de": "df = df.assign(total=df[\"a\"] + df[\"b\"])",
          "en": "df = df.assign(total=df[\"a\"] + df[\"b\"])"
        }
      },
      {
        "id": "c",
        "text": {
          "de": "df.insert(2, \"total\", df[\"a\"] + df[\"b\"])",
          "en": "df.insert(2, \"total\", df[\"a\"] + df[\"b\"])"
        }
      },
      {
        "id": "d",
        "text": {
          "de": "df.add_column(\"total\", df[\"a\"] + df[\"b\"])",
          "en": "df.add_column(\"total\", df[\"a\"] + df[\"b\"])"
        }
      },
      {
        "id": "e",
        "text": {
          "de": "df.append(\"total\", df[\"a\"] + df[\"b\"])",
          "en": "df.append(\"total\", df[\"a\"] + df[\"b\"])"
        }
      }
    ],
    "answer": [
      "a",
      "b",
      "c"
    ],
    "explanation": {
      "de": "Eine neue Spalte entsteht durch Zuweisung an einen neuen Spaltennamen, durch assign (mit Zuweisung des Ergebnisses an df) oder durch insert an einer Position. add_column und append mit diesen Argumenten gibt es für DataFrames nicht.",
      "en": "A new column is created by assigning to a new column name, by assign (with the result assigned back to df) or by insert at a position. add_column and append with these arguments do not exist for DataFrames."
    },
    "tip": {
      "de": "Beachte, dass assign allein den ursprünglichen DataFrame nicht verändert.",
      "en": "Note that assign alone does not change the original DataFrame."
    }
  },
  {
    "id": "ch5-ms-203",
    "chapter": 5,
    "section": "5.3 Pandas",
    "source": {
      "document": "SOTE2 Skript (Softwareentwicklung 2)",
      "section": "5.3 Pandas / Labor 4 (Dateien und Datensätze)"
    },
    "type": "ms",
    "difficulty": "hard",
    "question": {
      "de": "Welche drei Ausdrücke liefern die Anzahl der Zeilen, in denen a größer als 2 ist (also 3)? Wähle genau drei.",
      "en": "Which three expressions return the number of rows where a is greater than 2 (i.e. 3)? Select exactly three."
    },
    "clarification": null,
    "code": "import pandas as pd\ndf = pd.DataFrame({\"a\": [1, 2, 3, 4, 5]})",
    "options": [
      {
        "id": "a",
        "text": {
          "de": "(df[\"a\"] > 2).sum()",
          "en": "(df[\"a\"] > 2).sum()"
        }
      },
      {
        "id": "b",
        "text": {
          "de": "len(df[df[\"a\"] > 2])",
          "en": "len(df[df[\"a\"] > 2])"
        }
      },
      {
        "id": "c",
        "text": {
          "de": "df[df[\"a\"] > 2].shape[0]",
          "en": "df[df[\"a\"] > 2].shape[0]"
        }
      },
      {
        "id": "d",
        "text": {
          "de": "(df[\"a\"] > 2).count()",
          "en": "(df[\"a\"] > 2).count()"
        }
      },
      {
        "id": "e",
        "text": {
          "de": "df[df[\"a\"] > 2].shape[1]",
          "en": "df[df[\"a\"] > 2].shape[1]"
        }
      }
    ],
    "answer": [
      "a",
      "b",
      "c"
    ],
    "explanation": {
      "de": "Die Summe der Maske zählt die wahren Werte; die Länge bzw. shape[0] des gefilterten DataFrames zählt die übrig gebliebenen Zeilen. count() auf der Maske zählt alle Einträge (5), und shape[1] ist die Spaltenzahl (1).",
      "en": "The sum of the mask counts the true values; the length or shape[0] of the filtered DataFrame counts the remaining rows. count() on the mask counts all entries (5), and shape[1] is the number of columns (1)."
    },
    "tip": {
      "de": "Wahrheitswerte lassen sich addieren; count() zählt dagegen nur nicht-leere Einträge.",
      "en": "Truth values can be added up; count() on the other hand only counts non-missing entries."
    }
  },
  {
    "id": "ch5-ms-204",
    "chapter": 5,
    "section": "5.3 Pandas",
    "source": {
      "document": "SOTE2 Skript (Softwareentwicklung 2)",
      "section": "5.3 Pandas / Labor 4 (Dateien und Datensätze)"
    },
    "type": "ms",
    "difficulty": "medium",
    "question": {
      "de": "Welche drei Methoden einer numerischen Series s liefern eine einzelne Zahl? Wähle genau drei.",
      "en": "Which three methods of a numeric Series s return a single number? Select exactly three."
    },
    "clarification": null,
    "code": "import pandas as pd\ns = pd.Series([4, 1, 7])",
    "options": [
      {
        "id": "a",
        "text": {
          "de": "s.mean()",
          "en": "s.mean()"
        }
      },
      {
        "id": "b",
        "text": {
          "de": "s.min()",
          "en": "s.min()"
        }
      },
      {
        "id": "c",
        "text": {
          "de": "s.count()",
          "en": "s.count()"
        }
      },
      {
        "id": "d",
        "text": {
          "de": "s.head()",
          "en": "s.head()"
        }
      },
      {
        "id": "e",
        "text": {
          "de": "s.sort_values()",
          "en": "s.sort_values()"
        }
      }
    ],
    "answer": [
      "a",
      "b",
      "c"
    ],
    "explanation": {
      "de": "mean, min und count aggregieren die Series zu einem einzelnen Wert. head und sort_values liefern wieder eine Series mit mehreren Werten.",
      "en": "mean, min and count aggregate the Series into a single value. head and sort_values return a Series with several values again."
    },
    "tip": {
      "de": "Aggregationen fassen viele Werte zusammen, die anderen Methoden wählen oder ordnen sie nur.",
      "en": "Aggregations condense many values, the others only select or order them."
    }
  },
  {
    "id": "ch5-ms-205",
    "chapter": 5,
    "section": "5.3 Pandas",
    "source": {
      "document": "SOTE2 Skript (Softwareentwicklung 2)",
      "section": "5.3 Pandas / Labor 4 (Dateien und Datensätze)"
    },
    "type": "ms",
    "difficulty": "ultra",
    "question": {
      "de": "Welche Aussagen sind wahr? Wähle alle zutreffenden Antworten.",
      "en": "Which statements are true? Select all that apply."
    },
    "clarification": null,
    "code": "import pandas as pd\ns = pd.Series([1, None, 3])",
    "options": [
      {
        "id": "a",
        "text": {
          "de": "s.isna().sum() ist 1",
          "en": "s.isna().sum() is 1"
        }
      },
      {
        "id": "b",
        "text": {
          "de": "s.count() ist 2",
          "en": "s.count() is 2"
        }
      },
      {
        "id": "c",
        "text": {
          "de": "len(s) ist 3",
          "en": "len(s) is 3"
        }
      },
      {
        "id": "d",
        "text": {
          "de": "s.mean() ist 2.0",
          "en": "s.mean() is 2.0"
        }
      },
      {
        "id": "e",
        "text": {
          "de": "s.sum() ist NaN",
          "en": "s.sum() is NaN"
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
      "de": "Es gibt einen fehlenden Wert, count zählt nur die zwei vorhandenen Werte, und len zählt alle drei Einträge. mean und sum überspringen fehlende Werte standardmäßig: mean ist (1+3)/2 = 2.0, sum ist 4.0 und nicht NaN.",
      "en": "There is one missing value, count only counts the two present values, and len counts all three entries. mean and sum skip missing values by default: mean is (1+3)/2 = 2.0, sum is 4.0 and not NaN."
    },
    "tip": {
      "de": "Überlege, wie Aggregationen und count mit NaN umgehen und wie len zählt.",
      "en": "Consider how aggregations and count deal with NaN and how len counts."
    }
  },
  {
    "id": "ch5-tf-202",
    "chapter": 5,
    "section": "5.3 Pandas",
    "source": {
      "document": "SOTE2 Skript (Softwareentwicklung 2)",
      "section": "5.3 Pandas / Labor 4 (Dateien und Datensätze)"
    },
    "type": "tf",
    "difficulty": "easy",
    "question": {
      "de": "Wahr oder falsch: df.head(3) liefert die ersten drei Zeilen eines DataFrames df.",
      "en": "True or false: df.head(3) returns the first three rows of a DataFrame df."
    },
    "clarification": {
      "de": "Pandas wurde mit import pandas as pd importiert.",
      "en": "Pandas was imported with import pandas as pd."
    },
    "code": null,
    "answer": true,
    "explanation": {
      "de": "head(n) liefert die ersten n Zeilen; ohne Argument sind es fünf. Mit 3 erhält man also die ersten drei Zeilen.",
      "en": "head(n) returns the first n rows; without an argument it is five. With 3 you therefore get the first three rows."
    },
    "tip": {
      "de": "Das Argument ersetzt den Standardwert von fünf Zeilen.",
      "en": "The argument replaces the default of five rows."
    }
  },
  {
    "id": "ch5-tf-203",
    "chapter": 5,
    "section": "5.3 Pandas",
    "source": {
      "document": "SOTE2 Skript (Softwareentwicklung 2)",
      "section": "5.3 Pandas / Labor 4 (Dateien und Datensätze)"
    },
    "type": "tf",
    "difficulty": "medium",
    "question": {
      "de": "Wahr oder falsch: Der folgende Code gibt nan aus.",
      "en": "True or false: The following code prints nan."
    },
    "clarification": null,
    "code": "import pandas as pd\ndf = pd.DataFrame({\"a\": [1, None, 3]})\nprint(df[\"a\"].mean())",
    "answer": false,
    "explanation": {
      "de": "mean überspringt fehlende Werte standardmäßig und berechnet den Durchschnitt der vorhandenen Werte: (1+3)/2 = 2.0. Die Ausgabe ist daher 2.0 und nicht nan.",
      "en": "mean skips missing values by default and averages the present values: (1+3)/2 = 2.0. The output is therefore 2.0, not nan."
    },
    "tip": {
      "de": "Überlege, ob Pandas fehlende Werte bei Aggregationen standardmäßig mitrechnet.",
      "en": "Consider whether Pandas includes missing values in aggregations by default."
    }
  },
  {
    "id": "ch5-tf-204",
    "chapter": 5,
    "section": "5.3 Pandas",
    "source": {
      "document": "SOTE2 Skript (Softwareentwicklung 2)",
      "section": "5.3 Pandas / Labor 4 (Dateien und Datensätze)"
    },
    "type": "tf",
    "difficulty": "hard",
    "question": {
      "de": "Wahr oder falsch: Für den folgenden Code ist df.shape gleich (1, 2).",
      "en": "True or false: For the following code, df.shape equals (1, 2)."
    },
    "clarification": {
      "de": "io.StringIO verhält sich wie eine Datei, die den angegebenen Text enthält.",
      "en": "io.StringIO behaves like a file that contains the given text."
    },
    "code": "import pandas as pd\nimport io\ntext = \"a;b\\n1;2\\n\"\ndf = pd.read_csv(io.StringIO(text))",
    "answer": false,
    "explanation": {
      "de": "read_csv trennt standardmäßig an Kommas. Im Text stehen Semikolons, daher wird jede Zeile als ein einziges Feld gelesen: eine Spalte namens \"a;b\" und eine Zeile, also (1, 1). Mit sep=\";\" erhielte man (1, 2).",
      "en": "By default, read_csv splits at commas. The text uses semicolons, so each line is read as a single field: one column named \"a;b\" and one row, i.e. (1, 1). With sep=\";\" you would get (1, 2)."
    },
    "tip": {
      "de": "Prüfe, welches Trennzeichen read_csv ohne weitere Angabe erwartet.",
      "en": "Check which separator read_csv expects without further arguments."
    }
  },
  {
    "id": "ch5-tf-205",
    "chapter": 5,
    "section": "5.3 Pandas",
    "source": {
      "document": "SOTE2 Skript (Softwareentwicklung 2)",
      "section": "5.3 Pandas / Labor 4 (Dateien und Datensätze)"
    },
    "type": "tf",
    "difficulty": "ultra",
    "question": {
      "de": "Wahr oder falsch: Das Ergebnis von s1 + s2 hat vier Einträge, davon genau zwei NaN.",
      "en": "True or false: The result of s1 + s2 has four entries, exactly two of which are NaN."
    },
    "clarification": null,
    "code": "import pandas as pd\ns1 = pd.Series([1, 2, 3])\ns2 = pd.Series([10, 20, 30], index=[1, 2, 3])",
    "answer": true,
    "explanation": {
      "de": "Pandas addiert Series nach Index-Labels. Die Labels 1 und 2 existieren in beiden (Ergebnis 22 und 33), Label 0 nur in s1 und Label 3 nur in s2 ergeben NaN. Insgesamt sind es also die Labels 0 bis 3, davon zwei NaN.",
      "en": "Pandas adds Series by index labels. Labels 1 and 2 exist in both (results 22 and 33), label 0 only in s1 and label 3 only in s2 give NaN. In total these are labels 0 to 3, two of them NaN."
    },
    "tip": {
      "de": "Vergleiche die Index-Labels der beiden Series, nicht ihre Positionen.",
      "en": "Compare the index labels of the two Series, not their positions."
    }
  },
  {
    "id": "ch5-fib-201",
    "chapter": 5,
    "section": "5.3 Pandas",
    "source": {
      "document": "SOTE2 Skript (Softwareentwicklung 2)",
      "section": "5.3 Pandas / Labor 4 (Dateien und Datensätze)"
    },
    "type": "fib",
    "difficulty": "easy",
    "question": {
      "de": "Ergänze das Attribut, das die Spaltennamen liefert.",
      "en": "Fill in the attribute that returns the column names."
    },
    "clarification": {
      "de": "Gesucht ist ein Python-Bezeichner.",
      "en": "A Python identifier is expected."
    },
    "code": "import pandas as pd\ndf = pd.DataFrame({\"a\": [1], \"b\": [2]})\nprint(df.____.tolist())  # ['a', 'b']",
    "answer": null,
    "blanks": [
      {
        "accepted": [
          "columns"
        ],
        "caseSensitive": true
      }
    ],
    "explanation": {
      "de": "df.columns enthält die Spaltennamen; tolist() macht daraus eine normale Liste.",
      "en": "df.columns holds the column names; tolist() turns them into a normal list."
    },
    "tip": {
      "de": "Das Attribut ist der englische Plural von Spalte.",
      "en": "The attribute is the English plural of column."
    }
  },
  {
    "id": "ch5-fib-202",
    "chapter": 5,
    "section": "5.3 Pandas",
    "source": {
      "document": "SOTE2 Skript (Softwareentwicklung 2)",
      "section": "5.3 Pandas / Labor 4 (Dateien und Datensätze)"
    },
    "type": "fib",
    "difficulty": "medium",
    "question": {
      "de": "Schreibe den DataFrame in eine CSV-Datei, ohne den Zeilenindex mitzuschreiben. Ergänze Methode und Argumentnamen.",
      "en": "Write the DataFrame to a CSV file without writing the row index. Fill in the method and the argument name."
    },
    "clarification": null,
    "code": "import pandas as pd\ndf = pd.DataFrame({\"a\": [1, 2]})\ndf.____(\"out.csv\", ____=False)",
    "answer": null,
    "blanks": [
      {
        "accepted": [
          "to_csv"
        ],
        "caseSensitive": true
      },
      {
        "accepted": [
          "index"
        ],
        "caseSensitive": true
      }
    ],
    "explanation": {
      "de": "to_csv schreibt einen DataFrame als CSV-Datei. Mit index=False entfällt die zusätzliche Indexspalte.",
      "en": "to_csv writes a DataFrame as a CSV file. With index=False the additional index column is omitted."
    },
    "tip": {
      "de": "Das Gegenstück zu read_csv beginnt mit to_.",
      "en": "The counterpart of read_csv starts with to_."
    }
  },
  {
    "id": "ch5-fib-203",
    "chapter": 5,
    "section": "5.3 Pandas",
    "source": {
      "document": "SOTE2 Skript (Softwareentwicklung 2)",
      "section": "5.3 Pandas / Labor 4 (Dateien und Datensätze)"
    },
    "type": "fib",
    "difficulty": "easy",
    "question": {
      "de": "Ergänze die Methoden: erst eine statistische Zusammenfassung, dann die Anzahl der nicht-leeren Werte.",
      "en": "Fill in the methods: first a statistical summary, then the number of non-missing values."
    },
    "clarification": {
      "de": "Gesucht sind Methodennamen von Pandas.",
      "en": "Pandas method names are expected."
    },
    "code": "import pandas as pd\ndf = pd.DataFrame({\"a\": [4, 4, 7]})\nprint(df.____())  # count, mean, std, min, ...\nprint(df[\"a\"].____())  # 3",
    "answer": null,
    "blanks": [
      {
        "accepted": [
          "describe",
          "describe()"
        ],
        "caseSensitive": true
      },
      {
        "accepted": [
          "count",
          "count()"
        ],
        "caseSensitive": true
      }
    ],
    "explanation": {
      "de": "describe() fasst numerische Spalten statistisch zusammen, count() zählt die vorhandenen (nicht fehlenden) Werte; hier sind es 3.",
      "en": "describe() summarizes numeric columns statistically, count() counts the present (non-missing) values; here that is 3."
    },
    "tip": {
      "de": "Die erste Methode beschreibt die Daten, die zweite zählt.",
      "en": "The first method describes the data, the second one counts."
    }
  },
  {
    "id": "ch5-fib-204",
    "chapter": 5,
    "section": "5.3 Pandas",
    "source": {
      "document": "SOTE2 Skript (Softwareentwicklung 2)",
      "section": "5.3 Pandas / Labor 4 (Dateien und Datensätze)"
    },
    "type": "fib",
    "difficulty": "medium",
    "question": {
      "de": "Ergänze die Methoden: erst die Zeilen auswählen, deren Stadt in der Liste vorkommt, dann die verschiedenen Städte auflisten.",
      "en": "Fill in the methods: first select the rows whose city is in the list, then list the distinct cities."
    },
    "clarification": null,
    "code": "import pandas as pd\ndf = pd.DataFrame({\"city\": [\"Bern\", \"Basel\", \"Zug\", \"Bern\"], \"v\": [1, 2, 3, 4]})\nmask = df[\"city\"].____([\"Bern\", \"Zug\"])\nprint(df[mask][\"v\"].sum())  # 8\nprint(df[\"city\"].____().tolist())  # ['Bern', 'Basel', 'Zug']",
    "answer": null,
    "blanks": [
      {
        "accepted": [
          "isin"
        ],
        "caseSensitive": true
      },
      {
        "accepted": [
          "unique",
          "unique()"
        ],
        "caseSensitive": true
      }
    ],
    "explanation": {
      "de": "isin prüft für jede Zeile, ob der Wert in der Liste vorkommt, und liefert die Maske. unique liefert jeden Wert nur einmal in der Reihenfolge des ersten Auftretens.",
      "en": "isin checks for each row whether the value is in the list and returns the mask. unique returns each value only once in order of first appearance."
    },
    "tip": {
      "de": "Die erste Methode fragt nach Zugehörigkeit zu einer Liste, die zweite nach einmaligen Werten.",
      "en": "The first method asks for membership in a list, the second for one-time values."
    }
  },
  {
    "id": "ch5-fib-205",
    "chapter": 5,
    "section": "5.3 Pandas",
    "source": {
      "document": "SOTE2 Skript (Softwareentwicklung 2)",
      "section": "5.3 Pandas / Labor 4 (Dateien und Datensätze)"
    },
    "type": "fib",
    "difficulty": "medium",
    "question": {
      "de": "Entferne die Spalte b aus dem DataFrame und weise das Ergebnis df zu. Ergänze Methode und Argumentnamen.",
      "en": "Remove column b from the DataFrame and assign the result to df. Fill in the method and the argument name."
    },
    "clarification": null,
    "code": "import pandas as pd\ndf = pd.DataFrame({\"a\": [1], \"b\": [2]})\ndf = df.____(____=[\"b\"])\nprint(df.columns.tolist())  # ['a']",
    "answer": null,
    "blanks": [
      {
        "accepted": [
          "drop"
        ],
        "caseSensitive": true
      },
      {
        "accepted": [
          "columns"
        ],
        "caseSensitive": true
      }
    ],
    "explanation": {
      "de": "drop entfernt Zeilen oder Spalten und gibt einen neuen DataFrame zurück; mit columns=[\"b\"] wird die Spalte b entfernt. Das Ergebnis muss df wieder zugewiesen werden.",
      "en": "drop removes rows or columns and returns a new DataFrame; columns=[\"b\"] removes column b. The result must be assigned back to df."
    },
    "tip": {
      "de": "Das englische Verb bedeutet fallen lassen; das Argument benennt, was entfernt wird.",
      "en": "The English verb means to let fall; the argument names what is removed."
    }
  },
  {
    "id": "ch5-fib-206",
    "chapter": 5,
    "section": "5.3 Pandas",
    "source": {
      "document": "SOTE2 Skript (Softwareentwicklung 2)",
      "section": "5.3 Pandas / Labor 4 (Dateien und Datensätze)"
    },
    "type": "fib",
    "difficulty": "hard",
    "question": {
      "de": "Lies den semikolongetrennten Text ein und berechne die Summe der Spalte b. Ergänze Argumentnamen und Methode.",
      "en": "Read the semicolon-separated text and compute the sum of column b. Fill in the argument name and the method."
    },
    "clarification": {
      "de": "io.StringIO verhält sich wie eine Datei, die den angegebenen Text enthält.",
      "en": "io.StringIO behaves like a file that contains the given text."
    },
    "code": "import pandas as pd\nimport io\ntext = \"a;b\\n1;2\\n3;4\\n\"\ndf = pd.read_csv(io.StringIO(text), ____=\";\")\nprint(df[\"b\"].____())  # 6",
    "answer": null,
    "blanks": [
      {
        "accepted": [
          "sep",
          "delimiter"
        ],
        "caseSensitive": true
      },
      {
        "accepted": [
          "sum",
          "sum()"
        ],
        "caseSensitive": true
      }
    ],
    "explanation": {
      "de": "Mit sep=\";\" (oder delimiter) teilt read_csv an Semikolons statt an Kommas. Die Summe der Spalte b ist 2 + 4 = 6.",
      "en": "With sep=\";\" (or delimiter) read_csv splits at semicolons instead of commas. The sum of column b is 2 + 4 = 6."
    },
    "tip": {
      "de": "Das Argument benennt das Trennzeichen (englisch separator, abgekürzt).",
      "en": "The argument names the separator (abbreviated)."
    }
  },
  {
    "id": "ch5-fib-207",
    "chapter": 5,
    "section": "5.3 Pandas",
    "source": {
      "document": "SOTE2 Skript (Softwareentwicklung 2)",
      "section": "5.3 Pandas / Labor 4 (Dateien und Datensätze)"
    },
    "type": "fib",
    "difficulty": "hard",
    "question": {
      "de": "Nach dem Filtern soll der Index wieder bei 0 beginnen und der alte Index verworfen werden. Ergänze Methode und Argumentnamen.",
      "en": "After filtering, the index should start at 0 again and the old index should be discarded. Fill in the method and the argument name."
    },
    "clarification": null,
    "code": "import pandas as pd\ndf = pd.DataFrame({\"a\": [1, 2, 3, 4]})\nclean = df[df[\"a\"] > 1].____(____=True)\nprint(clean.index.tolist())  # [0, 1, 2]",
    "answer": null,
    "blanks": [
      {
        "accepted": [
          "reset_index"
        ],
        "caseSensitive": true
      },
      {
        "accepted": [
          "drop"
        ],
        "caseSensitive": true
      }
    ],
    "explanation": {
      "de": "Das Filtern behält die alten Labels (1, 2, 3). reset_index nummeriert neu ab 0, und drop=True verwirft den alten Index, statt ihn als Spalte beizubehalten.",
      "en": "Filtering keeps the old labels (1, 2, 3). reset_index renumbers from 0, and drop=True discards the old index instead of keeping it as a column."
    },
    "tip": {
      "de": "Der Methodenname sagt, was mit dem Index passiert; das Argument verwirft die alte Spalte.",
      "en": "The method name says what happens to the index; the argument discards the old column."
    }
  },
  {
    "id": "ch5-fe-201",
    "chapter": 5,
    "section": "5.3 Pandas",
    "source": {
      "document": "SOTE2 Skript (Softwareentwicklung 2)",
      "section": "5.3 Pandas / Labor 4 (Dateien und Datensätze)"
    },
    "type": "fe",
    "difficulty": "medium",
    "question": {
      "de": "Der Code soll den Durchschnitt der Spalte score ausgeben, enthält aber genau einen Fehler. In welcher Zeile liegt er?",
      "en": "The code should print the average of the column score but contains exactly one error. In which line is it?"
    },
    "clarification": null,
    "code": "1: import pandas as pd\n2: df = pd.DataFrame({\"name\": [\"A\", \"B\", \"C\"], \"score\": [50, 80, 65]})\n3: df[\"bonus\"] = df[\"score\"] * 0.1\n4: print(df[\"score\"].mean)",
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
    "answer": "d",
    "explanation": {
      "de": "mean ist eine Methode; ohne Klammern wird nur das Methodenobjekt ausgegeben, nicht der Durchschnitt. Korrekt ist df[\"score\"].mean(). Die Zeilen 1 bis 3 sind in Ordnung, auch das Anlegen der Spalte bonus.",
      "en": "mean is a method; without parentheses only the method object is printed, not the average. The correct call is df[\"score\"].mean(). Lines 1 to 3 are fine, including the creation of the column bonus."
    },
    "tip": {
      "de": "Was fehlt, damit eine Methode tatsächlich ausgeführt wird?",
      "en": "What is missing for a method to actually be executed?"
    }
  },
  {
    "id": "ch5-fe-202",
    "chapter": 5,
    "section": "5.3 Pandas",
    "source": {
      "document": "SOTE2 Skript (Softwareentwicklung 2)",
      "section": "5.3 Pandas / Labor 4 (Dateien und Datensätze)"
    },
    "type": "fe",
    "difficulty": "hard",
    "question": {
      "de": "Der Code soll den Namen der Person mit dem höchsten Score ausgeben, enthält aber genau einen Fehler. In welcher Zeile liegt er?",
      "en": "The code should print the name of the person with the highest score but contains exactly one error. In which line is it?"
    },
    "clarification": null,
    "code": "1: import pandas as pd\n2: df = pd.DataFrame({\"name\": [\"A\", \"B\", \"C\"], \"score\": [50, 80, 65]})\n3: best_label = df[\"score\"].max()\n4: print(df.loc[best_label, \"name\"])",
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
      "de": "max() liefert den größten Wert (80), nicht das Label der Zeile. loc erwartet aber ein Zeilenlabel, sodass 80 einen KeyError auslöst. Das Label der Zeile mit dem Maximum liefert idxmax(); die Zeile 4 ist mit einem Label korrekt.",
      "en": "max() returns the largest value (80), not the label of the row. loc however expects a row label, so 80 raises a KeyError. idxmax() returns the label of the row with the maximum; line 4 is correct when given a label."
    },
    "tip": {
      "de": "Unterscheide zwischen dem größten Wert und der Zeile, in der er steht.",
      "en": "Distinguish between the largest value and the row in which it is located."
    }
  },
  {
    "id": "ch5-mc-214",
    "chapter": 5,
    "section": "5.4 Visualisierung mit Matplotlib",
    "source": {
      "document": "SOTE2 Skript (Softwareentwicklung 2)",
      "section": "5.4 Visualisierung mit Matplotlib / Labor 5 (Datensätze und Visualisierung)"
    },
    "type": "mc",
    "difficulty": "easy",
    "question": {
      "de": "Welcher Diagrammtyp eignet sich, um den Zusammenhang zweier numerischer Merkmale (z. B. Größe und Gewicht) als einzelne Punkte darzustellen?",
      "en": "Which chart type is suited to show the relationship of two numeric features (e.g. height and weight) as individual points?"
    },
    "clarification": null,
    "code": null,
    "options": [
      {
        "id": "a",
        "text": {
          "de": "Histogramm (hist)",
          "en": "Histogram (hist)"
        }
      },
      {
        "id": "b",
        "text": {
          "de": "Tortendiagramm",
          "en": "Pie chart"
        }
      },
      {
        "id": "c",
        "text": {
          "de": "Streudiagramm (scatter)",
          "en": "Scatter plot (scatter)"
        }
      },
      {
        "id": "d",
        "text": {
          "de": "Balkendiagramm (bar)",
          "en": "Bar chart (bar)"
        }
      }
    ],
    "answer": "c",
    "explanation": {
      "de": "Ein Streudiagramm zeichnet für jedes Wertepaar (x, y) einen Punkt und zeigt so Zusammenhänge zweier Merkmale. Ein Balkendiagramm vergleicht Kategorien, und ein Histogramm zeigt die Verteilung nur eines Merkmals.",
      "en": "A scatter plot draws a point for each pair (x, y) and thus shows relationships between two features. A bar chart compares categories, and a histogram shows the distribution of only one feature."
    },
    "tip": {
      "de": "Jeder Datenpunkt besteht aus zwei Werten und wird als Punkt gezeichnet.",
      "en": "Each data point consists of two values and is drawn as a dot."
    }
  },
  {
    "id": "ch5-mc-215",
    "chapter": 5,
    "section": "5.4 Visualisierung mit Matplotlib",
    "source": {
      "document": "SOTE2 Skript (Softwareentwicklung 2)",
      "section": "5.4 Visualisierung mit Matplotlib / Labor 5 (Datensätze und Visualisierung)"
    },
    "type": "mc",
    "difficulty": "easy",
    "question": {
      "de": "Welche Funktion speichert die aktuelle Grafik in eine Datei?",
      "en": "Which function saves the current figure to a file?"
    },
    "clarification": {
      "de": "Matplotlib wurde mit import matplotlib.pyplot as plt importiert.",
      "en": "Matplotlib was imported with import matplotlib.pyplot as plt."
    },
    "code": null,
    "options": [
      {
        "id": "a",
        "text": {
          "de": "plt.save(\"bild.png\")",
          "en": "plt.save(\"bild.png\")"
        }
      },
      {
        "id": "b",
        "text": {
          "de": "plt.write(\"bild.png\")",
          "en": "plt.write(\"bild.png\")"
        }
      },
      {
        "id": "c",
        "text": {
          "de": "plt.export(\"bild.png\")",
          "en": "plt.export(\"bild.png\")"
        }
      },
      {
        "id": "d",
        "text": {
          "de": "plt.savefig(\"bild.png\")",
          "en": "plt.savefig(\"bild.png\")"
        }
      }
    ],
    "answer": "d",
    "explanation": {
      "de": "plt.savefig schreibt die Grafik in eine Datei; das Format ergibt sich aus der Endung. save, write und export gibt es in matplotlib.pyplot nicht.",
      "en": "plt.savefig writes the figure to a file; the format follows from the extension. save, write and export do not exist in matplotlib.pyplot."
    },
    "tip": {
      "de": "Der Name setzt sich aus dem englischen Wort für Speichern und dem für Abbildung zusammen.",
      "en": "The name combines the English words for saving and for figure."
    }
  },
  {
    "id": "ch5-mc-216",
    "chapter": 5,
    "section": "5.4 Visualisierung mit Matplotlib",
    "source": {
      "document": "SOTE2 Skript (Softwareentwicklung 2)",
      "section": "5.4 Visualisierung mit Matplotlib / Labor 5 (Datensätze und Visualisierung)"
    },
    "type": "mc",
    "difficulty": "medium",
    "question": {
      "de": "Welche Funktion zeigt die Häufigkeitsverteilung einer einzelnen Messreihe, indem die Werte in Klassen eingeteilt werden?",
      "en": "Which function shows the frequency distribution of a single data series by dividing the values into classes?"
    },
    "clarification": {
      "de": "Matplotlib wurde mit import matplotlib.pyplot as plt importiert.",
      "en": "Matplotlib was imported with import matplotlib.pyplot as plt."
    },
    "code": null,
    "options": [
      {
        "id": "a",
        "text": {
          "de": "plt.hist",
          "en": "plt.hist"
        }
      },
      {
        "id": "b",
        "text": {
          "de": "plt.scatter",
          "en": "plt.scatter"
        }
      },
      {
        "id": "c",
        "text": {
          "de": "plt.plot",
          "en": "plt.plot"
        }
      },
      {
        "id": "d",
        "text": {
          "de": "plt.bar",
          "en": "plt.bar"
        }
      }
    ],
    "answer": "a",
    "explanation": {
      "de": "plt.hist teilt die Werte in Klassen (bins) und zeichnet, wie viele Werte in jede Klasse fallen. scatter benötigt Wertepaare, plot verbindet Punkte zu einer Linie, und bar zeichnet einen Balken pro vorgegebener Kategorie, ohne Werte zu klassieren.",
      "en": "plt.hist divides the values into classes (bins) and draws how many values fall into each class. scatter needs value pairs, plot connects points into a line, and bar draws one bar per given category without binning values."
    },
    "tip": {
      "de": "Gesucht ist das Diagramm, das selbst zählt, wie viele Werte in einen Bereich fallen.",
      "en": "You are looking for the chart that itself counts how many values fall into a range."
    }
  },
  {
    "id": "ch5-mc-217",
    "chapter": 5,
    "section": "5.4 Visualisierung mit Matplotlib",
    "source": {
      "document": "SOTE2 Skript (Softwareentwicklung 2)",
      "section": "5.4 Visualisierung mit Matplotlib / Labor 5 (Datensätze und Visualisierung)"
    },
    "type": "mc",
    "difficulty": "medium",
    "question": {
      "de": "Was zeigt das Fenster, das der folgende Code öffnet?",
      "en": "What does the window opened by the following code show?"
    },
    "clarification": null,
    "code": "import matplotlib.pyplot as plt\nx = [1, 2, 3]\nplt.plot(x, [1, 2, 3])\nplt.plot(x, [3, 2, 1])\nplt.show()",
    "options": [
      {
        "id": "a",
        "text": {
          "de": "Eine Fehlermeldung, weil plot nur einmal aufgerufen werden darf",
          "en": "An error because plot may only be called once"
        }
      },
      {
        "id": "b",
        "text": {
          "de": "Ein Diagramm mit zwei Linien",
          "en": "One plot with two lines"
        }
      },
      {
        "id": "c",
        "text": {
          "de": "Nur die zweite Linie",
          "en": "Only the second line"
        }
      },
      {
        "id": "d",
        "text": {
          "de": "Zwei getrennte Fenster mit je einer Linie",
          "en": "Two separate windows with one line each"
        }
      }
    ],
    "answer": "b",
    "explanation": {
      "de": "Mehrere plot-Aufrufe vor show zeichnen in dieselbe Grafik, sodass beide Linien im selben Diagramm erscheinen. Die erste Linie wird nicht überschrieben, und es ist kein neues Fenster oder ein Fehler nötig.",
      "en": "Several plot calls before show draw into the same figure, so both lines appear in the same plot. The first line is not overwritten, and no new window or error is involved."
    },
    "tip": {
      "de": "Das Anzeigen erfolgt erst mit show, nicht nach jedem Zeichnen.",
      "en": "Displaying happens only with show, not after each drawing call."
    }
  },
  {
    "id": "ch5-mc-218",
    "chapter": 5,
    "section": "5.4 Visualisierung mit Matplotlib",
    "source": {
      "document": "SOTE2 Skript (Softwareentwicklung 2)",
      "section": "5.4 Visualisierung mit Matplotlib / Labor 5 (Datensätze und Visualisierung)"
    },
    "type": "mc",
    "difficulty": "medium",
    "question": {
      "de": "Was bedeutet das Argument figsize=(8, 4) im folgenden Aufruf?",
      "en": "What does the argument figsize=(8, 4) mean in the following call?"
    },
    "clarification": {
      "de": "Matplotlib wurde mit import matplotlib.pyplot as plt importiert.",
      "en": "Matplotlib was imported with import matplotlib.pyplot as plt."
    },
    "code": "import matplotlib.pyplot as plt\nplt.figure(figsize=(8, 4))",
    "options": [
      {
        "id": "a",
        "text": {
          "de": "Ein Raster mit 8 Zeilen und 4 Spalten",
          "en": "A grid with 8 rows and 4 columns"
        }
      },
      {
        "id": "b",
        "text": {
          "de": "Die Grafik hat 8 mal 4 Pixel",
          "en": "The figure has 8 by 4 pixels"
        }
      },
      {
        "id": "c",
        "text": {
          "de": "Breite 8 und Höhe 4 (in Zoll)",
          "en": "Width 8 and height 4 (in inches)"
        }
      },
      {
        "id": "d",
        "text": {
          "de": "Höhe 8 und Breite 4 (in Zoll)",
          "en": "Height 8 and width 4 (in inches)"
        }
      }
    ],
    "answer": "c",
    "explanation": {
      "de": "figsize legt die Größe der Figure als (Breite, Höhe) in Zoll fest. Die Reihenfolge ist nicht vertauscht, es ist kein Raster (das wäre subplot) und es sind keine Pixel.",
      "en": "figsize sets the size of the figure as (width, height) in inches. The order is not swapped, it is not a grid (that would be subplot) and it is not pixels."
    },
    "tip": {
      "de": "Das Tupel nennt zuerst die horizontale Ausdehnung.",
      "en": "The tuple names the horizontal extent first."
    }
  },
  {
    "id": "ch5-mc-219",
    "chapter": 5,
    "section": "5.4 Visualisierung mit Matplotlib",
    "source": {
      "document": "SOTE2 Skript (Softwareentwicklung 2)",
      "section": "5.4 Visualisierung mit Matplotlib / Labor 5 (Datensätze und Visualisierung)"
    },
    "type": "mc",
    "difficulty": "hard",
    "question": {
      "de": "Was passiert beim Ausführen des folgenden Codes?",
      "en": "What happens when the following code is executed?"
    },
    "clarification": null,
    "code": "import matplotlib.pyplot as plt\nx = [1, 2, 3]\ny = [4, 5]\nplt.plot(x, y)\nplt.show()",
    "options": [
      {
        "id": "a",
        "text": {
          "de": "Es werden nur die ersten zwei Punkte gezeichnet",
          "en": "Only the first two points are drawn"
        }
      },
      {
        "id": "b",
        "text": {
          "de": "Der dritte y-Wert wird mit 0 aufgefüllt",
          "en": "The third y value is padded with 0"
        }
      },
      {
        "id": "c",
        "text": {
          "de": "Es wird eine leere Grafik angezeigt",
          "en": "An empty figure is displayed"
        }
      },
      {
        "id": "d",
        "text": {
          "de": "Ein ValueError, weil x und y unterschiedlich lang sind",
          "en": "A ValueError because x and y have different lengths"
        }
      }
    ],
    "answer": "d",
    "explanation": {
      "de": "plot erwartet für jeden x-Wert genau einen y-Wert. Bei unterschiedlicher Länge löst Matplotlib einen ValueError aus; es wird weder gekürzt noch aufgefüllt, und es erscheint auch keine leere Grafik.",
      "en": "plot expects exactly one y value for each x value. With different lengths Matplotlib raises a ValueError; nothing is truncated or padded, and no empty figure appears either."
    },
    "tip": {
      "de": "Zähle die Elemente von x und y.",
      "en": "Count the elements of x and y."
    }
  },
  {
    "id": "ch5-mc-220",
    "chapter": 5,
    "section": "5.4 Visualisierung mit Matplotlib",
    "source": {
      "document": "SOTE2 Skript (Softwareentwicklung 2)",
      "section": "5.4 Visualisierung mit Matplotlib / Labor 5 (Datensätze und Visualisierung)"
    },
    "type": "mc",
    "difficulty": "ultra",
    "question": {
      "de": "Welche Punkte zeichnet der folgende Code?",
      "en": "Which points does the following code draw?"
    },
    "clarification": null,
    "code": "import pandas as pd\nimport matplotlib.pyplot as plt\ndf = pd.DataFrame({\"x\": [1, 2, 3], \"y\": [2, 4, 6]})\nbig = df[df[\"y\"] > 2]\nplt.scatter(big[\"x\"], big[\"y\"])\nplt.show()",
    "options": [
      {
        "id": "a",
        "text": {
          "de": "(2, 4) und (3, 6)",
          "en": "(2, 4) and (3, 6)"
        }
      },
      {
        "id": "b",
        "text": {
          "de": "(1, 2), (2, 4) und (3, 6)",
          "en": "(1, 2), (2, 4) and (3, 6)"
        }
      },
      {
        "id": "c",
        "text": {
          "de": "Nur (3, 6)",
          "en": "Only (3, 6)"
        }
      },
      {
        "id": "d",
        "text": {
          "de": "(4, 2) und (6, 3)",
          "en": "(4, 2) and (6, 3)"
        }
      }
    ],
    "answer": "a",
    "explanation": {
      "de": "Der Filter y > 2 lässt die Zeilen mit y = 4 und y = 6 übrig, also die Zeilen mit x = 2 und x = 3. scatter zeichnet daraus die Punkte (2, 4) und (3, 6), wobei der erste Wert x und der zweite y ist.",
      "en": "The filter y > 2 leaves the rows with y = 4 and y = 6, i.e. the rows with x = 2 and x = 3. scatter draws the points (2, 4) and (3, 6) from them, where the first value is x and the second is y."
    },
    "tip": {
      "de": "Filtere zuerst die Tabelle und lies dann die Wertepaare ab.",
      "en": "First filter the table, then read off the value pairs."
    }
  },
  {
    "id": "ch5-ms-206",
    "chapter": 5,
    "section": "5.4 Visualisierung mit Matplotlib",
    "source": {
      "document": "SOTE2 Skript (Softwareentwicklung 2)",
      "section": "5.4 Visualisierung mit Matplotlib / Labor 5 (Datensätze und Visualisierung)"
    },
    "type": "ms",
    "difficulty": "easy",
    "question": {
      "de": "Welche drei Funktionen beschriften ein Diagramm? Wähle genau drei.",
      "en": "Which three functions label a plot? Select exactly three."
    },
    "clarification": {
      "de": "Matplotlib wurde mit import matplotlib.pyplot as plt importiert.",
      "en": "Matplotlib was imported with import matplotlib.pyplot as plt."
    },
    "code": null,
    "options": [
      {
        "id": "a",
        "text": {
          "de": "plt.xlabel",
          "en": "plt.xlabel"
        }
      },
      {
        "id": "b",
        "text": {
          "de": "plt.ylabel",
          "en": "plt.ylabel"
        }
      },
      {
        "id": "c",
        "text": {
          "de": "plt.title",
          "en": "plt.title"
        }
      },
      {
        "id": "d",
        "text": {
          "de": "plt.show",
          "en": "plt.show"
        }
      },
      {
        "id": "e",
        "text": {
          "de": "plt.savefig",
          "en": "plt.savefig"
        }
      }
    ],
    "answer": [
      "a",
      "b",
      "c"
    ],
    "explanation": {
      "de": "xlabel und ylabel beschriften die Achsen, title setzt die Überschrift. show zeigt die Grafik an und savefig speichert sie; beide beschriften nichts.",
      "en": "xlabel and ylabel label the axes, title sets the heading. show displays the figure and savefig saves it; neither of them labels anything."
    },
    "tip": {
      "de": "Zwei Funktionen gehören zu den Achsen, eine zur Überschrift.",
      "en": "Two functions belong to the axes, one to the heading."
    }
  },
  {
    "id": "ch5-ms-207",
    "chapter": 5,
    "section": "5.4 Visualisierung mit Matplotlib",
    "source": {
      "document": "SOTE2 Skript (Softwareentwicklung 2)",
      "section": "5.4 Visualisierung mit Matplotlib / Labor 5 (Datensätze und Visualisierung)"
    },
    "type": "ms",
    "difficulty": "medium",
    "question": {
      "de": "Welche drei Aussagen zu plt.show und plt.savefig sind richtig? Wähle genau drei.",
      "en": "Which three statements about plt.show and plt.savefig are correct? Select exactly three."
    },
    "clarification": {
      "de": "Matplotlib wurde mit import matplotlib.pyplot as plt importiert.",
      "en": "Matplotlib was imported with import matplotlib.pyplot as plt."
    },
    "code": null,
    "options": [
      {
        "id": "a",
        "text": {
          "de": "savefig schreibt die Grafik in eine Datei.",
          "en": "savefig schreibt die Grafik in eine Datei."
        }
      },
      {
        "id": "b",
        "text": {
          "de": "show zeigt die Grafik in einem Fenster (bzw. im Notebook) an.",
          "en": "show zeigt die Grafik in einem Fenster (bzw. im Notebook) an."
        }
      },
      {
        "id": "c",
        "text": {
          "de": "Das Dateiformat von savefig ergibt sich aus der Dateiendung, z. B. .png oder .pdf.",
          "en": "Das Dateiformat von savefig ergibt sich aus der Dateiendung, z. B. .png oder .pdf."
        }
      },
      {
        "id": "d",
        "text": {
          "de": "savefig funktioniert nur, wenn vorher show aufgerufen wurde.",
          "en": "savefig funktioniert nur, wenn vorher show aufgerufen wurde."
        }
      },
      {
        "id": "e",
        "text": {
          "de": "savefig kann ausschließlich PNG-Dateien erzeugen.",
          "en": "savefig kann ausschließlich PNG-Dateien erzeugen."
        }
      }
    ],
    "answer": [
      "a",
      "b",
      "c"
    ],
    "explanation": {
      "de": "savefig speichert in eine Datei, show zeigt an, und das Format folgt der Endung (z. B. .png oder .pdf). Beide Funktionen sind voneinander unabhängig, und savefig ist nicht auf PNG beschränkt.",
      "en": "savefig saves to a file, show displays, and the format follows the extension (e.g. .png or .pdf). The two functions are independent of each other, and savefig is not limited to PNG."
    },
    "tip": {
      "de": "Überlege, ob Speichern und Anzeigen voneinander abhängen.",
      "en": "Consider whether saving and displaying depend on each other."
    }
  },
  {
    "id": "ch5-ms-208",
    "chapter": 5,
    "section": "5.4 Visualisierung mit Matplotlib",
    "source": {
      "document": "SOTE2 Skript (Softwareentwicklung 2)",
      "section": "5.4 Visualisierung mit Matplotlib / Labor 5 (Datensätze und Visualisierung)"
    },
    "type": "ms",
    "difficulty": "hard",
    "question": {
      "de": "Welche zwei Aufrufe zeichnen beide Reihen y1 und y2 als Linien in dasselbe Diagramm? Wähle genau zwei.",
      "en": "Which two calls draw both series y1 and y2 as lines into the same plot? Select exactly two."
    },
    "clarification": {
      "de": "Alle Varianten stehen in einem Skript direkt vor einem einzelnen plt.show().",
      "en": "All variants appear in a script directly before a single plt.show()."
    },
    "code": "import matplotlib.pyplot as plt\nx = [1, 2, 3]\ny1 = [1, 2, 3]\ny2 = [3, 2, 1]",
    "options": [
      {
        "id": "a",
        "text": {
          "de": "plt.plot(x, y1); plt.plot(x, y2)",
          "en": "plt.plot(x, y1); plt.plot(x, y2)"
        }
      },
      {
        "id": "b",
        "text": {
          "de": "plt.plot(x, y1, x, y2)",
          "en": "plt.plot(x, y1, x, y2)"
        }
      },
      {
        "id": "c",
        "text": {
          "de": "plt.plot(y1, y2)",
          "en": "plt.plot(y1, y2)"
        }
      },
      {
        "id": "d",
        "text": {
          "de": "plt.subplot(2, 1, 1); plt.plot(x, y1); plt.subplot(2, 1, 2); plt.plot(x, y2)",
          "en": "plt.subplot(2, 1, 1); plt.plot(x, y1); plt.subplot(2, 1, 2); plt.plot(x, y2)"
        }
      }
    ],
    "answer": [
      "a",
      "b"
    ],
    "explanation": {
      "de": "Zwei plot-Aufrufe oder ein Aufruf mit zwei (x, y)-Paaren zeichnen beide Linien in dieselbe Grafik. plot(y1, y2) zeichnet nur eine Linie (y2 gegen y1), und die subplot-Variante verteilt die Reihen auf zwei getrennte Plots.",
      "en": "Two plot calls or one call with two (x, y) pairs draw both lines into the same plot. plot(y1, y2) draws only one line (y2 against y1), and the subplot variant spreads the series over two separate plots."
    },
    "tip": {
      "de": "Prüfe, was jedes Argument von plot bedeutet und ob subplot dasselbe Diagramm nutzt.",
      "en": "Check what each argument of plot means and whether subplot uses the same plot."
    }
  },
  {
    "id": "ch5-tf-206",
    "chapter": 5,
    "section": "5.4 Visualisierung mit Matplotlib",
    "source": {
      "document": "SOTE2 Skript (Softwareentwicklung 2)",
      "section": "5.4 Visualisierung mit Matplotlib / Labor 5 (Datensätze und Visualisierung)"
    },
    "type": "tf",
    "difficulty": "easy",
    "question": {
      "de": "Wahr oder falsch: Mit plt.scatter(x, y) wird für jedes Paar (x[i], y[i]) ein einzelner Punkt gezeichnet.",
      "en": "True or false: plt.scatter(x, y) draws a single point for each pair (x[i], y[i])."
    },
    "clarification": {
      "de": "Matplotlib wurde mit import matplotlib.pyplot as plt importiert.",
      "en": "Matplotlib was imported with import matplotlib.pyplot as plt."
    },
    "code": null,
    "answer": true,
    "explanation": {
      "de": "Ein Streudiagramm stellt jedes Wertepaar als eigenen Punkt dar, ohne die Punkte durch Linien zu verbinden.",
      "en": "A scatter plot represents each value pair as its own point without connecting the points by lines."
    },
    "tip": {
      "de": "Denke an den Namen des Diagrammtyps: verstreute Punkte.",
      "en": "Think of the name of the chart type: scattered points."
    }
  },
  {
    "id": "ch5-tf-207",
    "chapter": 5,
    "section": "5.4 Visualisierung mit Matplotlib",
    "source": {
      "document": "SOTE2 Skript (Softwareentwicklung 2)",
      "section": "5.4 Visualisierung mit Matplotlib / Labor 5 (Datensätze und Visualisierung)"
    },
    "type": "tf",
    "difficulty": "medium",
    "question": {
      "de": "Wahr oder falsch: plt.legend() zeigt nur dann Einträge an, wenn die Plots zuvor mit label=... beschriftet wurden.",
      "en": "True or false: plt.legend() only shows entries if the plots were previously labeled with label=...."
    },
    "clarification": {
      "de": "Matplotlib wurde mit import matplotlib.pyplot as plt importiert.",
      "en": "Matplotlib was imported with import matplotlib.pyplot as plt."
    },
    "code": null,
    "answer": true,
    "explanation": {
      "de": "Die Legende bezieht ihre Texte aus den label-Angaben der gezeichneten Plots. Ohne label gibt es keine Einträge, die angezeigt werden könnten.",
      "en": "The legend takes its texts from the label arguments of the drawn plots. Without a label there are no entries that could be shown."
    },
    "tip": {
      "de": "Woher soll die Legende wissen, wie eine Linie heißt?",
      "en": "How is the legend supposed to know what a line is called?"
    }
  },
  {
    "id": "ch5-tf-208",
    "chapter": 5,
    "section": "5.4 Visualisierung mit Matplotlib",
    "source": {
      "document": "SOTE2 Skript (Softwareentwicklung 2)",
      "section": "5.4 Visualisierung mit Matplotlib / Labor 5 (Datensätze und Visualisierung)"
    },
    "type": "tf",
    "difficulty": "ultra",
    "question": {
      "de": "Wahr oder falsch: Beim folgenden Aufruf ergeben die Höhen der drei Balken zusammen 6.",
      "en": "True or false: For the following call, the heights of the three bars add up to 6."
    },
    "clarification": null,
    "code": "import matplotlib.pyplot as plt\ndata = [1, 2, 2, 3, 3, 3]\nplt.hist(data, bins=3)",
    "answer": true,
    "explanation": {
      "de": "Ein Histogramm zählt, wie viele Werte in jede Klasse fallen; jeder Wert gehört zu genau einer Klasse. Hier sind es die Klassen mit 1, 2 und 3 Werten, zusammen 6, also so viele wie Datenpunkte.",
      "en": "A histogram counts how many values fall into each class; each value belongs to exactly one class. Here these are classes with 1, 2 and 3 values, together 6, i.e. as many as data points."
    },
    "tip": {
      "de": "Überlege, was die Balkenhöhe eines Histogramms bedeutet.",
      "en": "Consider what the bar height of a histogram means."
    }
  },
  {
    "id": "ch5-fib-208",
    "chapter": 5,
    "section": "5.4 Visualisierung mit Matplotlib",
    "source": {
      "document": "SOTE2 Skript (Softwareentwicklung 2)",
      "section": "5.4 Visualisierung mit Matplotlib / Labor 5 (Datensätze und Visualisierung)"
    },
    "type": "fib",
    "difficulty": "easy",
    "question": {
      "de": "Ergänze die Funktionen: erst eine Überschrift setzen, dann das Gitternetz einschalten.",
      "en": "Fill in the functions: first set a heading, then switch on the grid."
    },
    "clarification": {
      "de": "Gesucht sind Funktionsnamen von matplotlib.pyplot (als plt importiert).",
      "en": "Function names of matplotlib.pyplot (imported as plt) are expected."
    },
    "code": "import matplotlib.pyplot as plt\nplt.plot([1, 2, 3], [2, 4, 8])\nplt.____(\"Growth\")\nplt.____(True)\nplt.show()",
    "answer": null,
    "blanks": [
      {
        "accepted": [
          "title"
        ],
        "caseSensitive": true
      },
      {
        "accepted": [
          "grid"
        ],
        "caseSensitive": true
      }
    ],
    "explanation": {
      "de": "plt.title setzt die Überschrift, plt.grid(True) schaltet das Gitternetz ein.",
      "en": "plt.title sets the heading, plt.grid(True) switches the grid on."
    },
    "tip": {
      "de": "Beide Namen entsprechen einfachen englischen Wörtern.",
      "en": "Both names correspond to simple English words."
    }
  },
  {
    "id": "ch5-fib-209",
    "chapter": 5,
    "section": "5.4 Visualisierung mit Matplotlib",
    "source": {
      "document": "SOTE2 Skript (Softwareentwicklung 2)",
      "section": "5.4 Visualisierung mit Matplotlib / Labor 5 (Datensätze und Visualisierung)"
    },
    "type": "fib",
    "difficulty": "medium",
    "question": {
      "de": "Lege ein Zeichenfenster der Größe 6 mal 3 an und speichere die Grafik als PDF. Ergänze die beiden Funktionen.",
      "en": "Create a figure of size 6 by 3 and save the plot as a PDF. Fill in the two functions."
    },
    "clarification": {
      "de": "Gesucht sind Funktionsnamen von matplotlib.pyplot (als plt importiert).",
      "en": "Function names of matplotlib.pyplot (imported as plt) are expected."
    },
    "code": "import matplotlib.pyplot as plt\nplt.____(figsize=(6, 3))\nplt.plot([1, 2, 3], [3, 1, 2])\nplt.____(\"plot.pdf\")",
    "answer": null,
    "blanks": [
      {
        "accepted": [
          "figure"
        ],
        "caseSensitive": true
      },
      {
        "accepted": [
          "savefig"
        ],
        "caseSensitive": true
      }
    ],
    "explanation": {
      "de": "plt.figure legt das Zeichenfenster an und nimmt figsize entgegen. plt.savefig speichert die Grafik, hier wegen der Endung als PDF.",
      "en": "plt.figure creates the figure and accepts figsize. plt.savefig saves the plot, here as a PDF because of the extension."
    },
    "tip": {
      "de": "Das Zeichenfenster heißt auf Englisch genau wie die gesuchte Funktion.",
      "en": "The English word for the drawing window is exactly the function you want."
    }
  },
  {
    "id": "ch5-fib-210",
    "chapter": 5,
    "section": "5.4 Visualisierung mit Matplotlib",
    "source": {
      "document": "SOTE2 Skript (Softwareentwicklung 2)",
      "section": "5.4 Visualisierung mit Matplotlib / Labor 5 (Datensätze und Visualisierung)"
    },
    "type": "fib",
    "difficulty": "hard",
    "question": {
      "de": "Zeichne nur die Punkte mit y größer als 4 (also (1, 5) und (3, 8)) und zeige sie an. Ergänze Operator, Spaltenname und Funktion.",
      "en": "Draw only the points with y greater than 4 (i.e. (1, 5) and (3, 8)) and display them. Fill in the operator, the column name and the function."
    },
    "clarification": null,
    "code": "import pandas as pd\nimport matplotlib.pyplot as plt\ndf = pd.DataFrame({\"x\": [1, 2, 3, 4], \"y\": [5, 3, 8, 1]})\nbig = df[df[\"y\"] ____ 4]\nplt.scatter(big[\"x\"], big[\"____\"])\nplt.____()",
    "answer": null,
    "blanks": [
      {
        "accepted": [
          ">",
          ">="
        ],
        "caseSensitive": true
      },
      {
        "accepted": [
          "y"
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
      "de": "Die Maske df[\"y\"] > 4 behält die Zeilen mit y = 5 und y = 8. Danach zeichnet scatter x gegen y der gefilterten Tabelle, und show zeigt die Grafik an.",
      "en": "The mask df[\"y\"] > 4 keeps the rows with y = 5 and y = 8. Then scatter draws x against y of the filtered table, and show displays the figure."
    },
    "tip": {
      "de": "Erst filtern, dann dieselbe Spalte wie bei der Bedingung auf der y-Achse verwenden.",
      "en": "Filter first, then use on the y-axis the same column as in the condition."
    }
  },
  {
    "id": "ch5-fe-203",
    "chapter": 5,
    "section": "5.4 Visualisierung mit Matplotlib",
    "source": {
      "document": "SOTE2 Skript (Softwareentwicklung 2)",
      "section": "5.4 Visualisierung mit Matplotlib / Labor 5 (Datensätze und Visualisierung)"
    },
    "type": "fe",
    "difficulty": "hard",
    "question": {
      "de": "Der Code soll links ein Liniendiagramm und rechts ein Balkendiagramm nebeneinander anzeigen, enthält aber genau einen Fehler. In welcher Zeile liegt er?",
      "en": "The code should show a line plot on the left and a bar chart on the right next to each other but contains exactly one error. In which line is it?"
    },
    "clarification": null,
    "code": "1: import matplotlib.pyplot as plt\n2: plt.subplot(1, 2, 1)\n3: plt.plot([1, 2, 3], [1, 4, 9])\n4: plt.subplot(1, 2, 3)\n5: plt.bar([\"A\", \"B\"], [3, 5])\n6: plt.show()",
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
      },
      {
        "id": "e",
        "text": {
          "de": "Zeile 5",
          "en": "Line 5"
        }
      },
      {
        "id": "f",
        "text": {
          "de": "Zeile 6",
          "en": "Line 6"
        }
      }
    ],
    "answer": "d",
    "explanation": {
      "de": "Das Raster 1 x 2 hat nur die Plätze 1 und 2; plt.subplot(1, 2, 3) löst deshalb einen Fehler aus. Für den rechten Plot muss subplot(1, 2, 2) verwendet werden. Die übrigen Zeilen sind korrekt.",
      "en": "The 1 x 2 grid only has positions 1 and 2; plt.subplot(1, 2, 3) therefore raises an error. For the right plot subplot(1, 2, 2) must be used. The other lines are correct."
    },
    "tip": {
      "de": "Wie viele Plätze bietet ein Raster mit einer Zeile und zwei Spalten?",
      "en": "How many positions does a grid with one row and two columns offer?"
    }
  },
  {
    "id": "ch5-fe-204",
    "chapter": 5,
    "section": "5.4 Visualisierung mit Matplotlib",
    "source": {
      "document": "SOTE2 Skript (Softwareentwicklung 2)",
      "section": "5.4 Visualisierung mit Matplotlib / Labor 5 (Datensätze und Visualisierung)"
    },
    "type": "fe",
    "difficulty": "ultra",
    "question": {
      "de": "Der Code soll das Liniendiagramm der Umsätze mit der x-Achsenbeschriftung year anzeigen, enthält aber genau einen Fehler. In welcher Zeile liegt er?",
      "en": "The code should show the line plot of the sales with the x-axis label year but contains exactly one error. In which line is it?"
    },
    "clarification": null,
    "code": "1: import pandas as pd\n2: import matplotlib.pyplot as plt\n3: df = pd.DataFrame({\"year\": [2020, 2021, 2022], \"sales\": [10, 15, 12]})\n4: plt.plot(df[\"year\"], df[\"sales\"])\n5: plt.xlabel(df[\"year\"])\n6: plt.show()",
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
      },
      {
        "id": "e",
        "text": {
          "de": "Zeile 5",
          "en": "Line 5"
        }
      },
      {
        "id": "f",
        "text": {
          "de": "Zeile 6",
          "en": "Line 6"
        }
      }
    ],
    "answer": "e",
    "explanation": {
      "de": "plt.xlabel erwartet den Beschriftungstext als String, hier also \"year\". Wird die ganze Spalte df[\"year\"] übergeben, entsteht keine sinnvolle Beschriftung. Das Zeichnen mit zwei Spalten in Zeile 4 ist dagegen korrekt.",
      "en": "plt.xlabel expects the label text as a string, here \"year\". If the whole column df[\"year\"] is passed, no meaningful label results. Drawing with two columns in line 4, on the other hand, is correct."
    },
    "tip": {
      "de": "Welchen Datentyp hat ein Beschriftungstext, und was wird hier übergeben?",
      "en": "What data type is a label text, and what is passed here?"
    }
  }
];
