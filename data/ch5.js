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
  }
];
