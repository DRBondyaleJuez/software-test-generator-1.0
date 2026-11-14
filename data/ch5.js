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
  }
];
