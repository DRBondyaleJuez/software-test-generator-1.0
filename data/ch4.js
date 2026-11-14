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
  },
    {
      "id": "ch4-mc-101",
      "chapter": 4,
      "section": "4.2 Dateisysteme",
      "source": {
        "document": "SOTE2 Skript (Softwareentwicklung 2)",
        "section": "4.2 Dateisysteme"
      },
      "type": "mc",
      "difficulty": "easy",
      "question": {
        "de": "Was beschreibt ein Dateisystem am besten?",
        "en": "Which description fits a file system best?"
      },
      "clarification": null,
      "code": null,
      "options": [
        {
          "id": "a",
          "text": {
            "de": "Ein Teil des Betriebssystems, der Dateien und Verzeichnisse auf einem Speichermedium organisiert und verwaltet",
            "en": "A part of the operating system that organizes and manages files and directories on a storage medium"
          }
        },
        {
          "id": "b",
          "text": {
            "de": "Ein Programm zum Bearbeiten von Textdateien",
            "en": "A program for editing text files"
          }
        },
        {
          "id": "c",
          "text": {
            "de": "Ein Python-Modul zum Lesen von Dateien",
            "en": "A Python module for reading files"
          }
        },
        {
          "id": "d",
          "text": {
            "de": "Ein Dateiformat zur Speicherung binärer Daten",
            "en": "A file format for storing binary data"
          }
        }
      ],
      "answer": "a",
      "explanation": {
        "de": "Das Dateisystem ist Teil des Betriebssystems und organisiert und verwaltet Dateien und Verzeichnisse auf einem Speichermedium. Es ist weder ein Editor noch ein Python-Modul oder ein Dateiformat.",
        "en": "The file system is part of the operating system and organizes and manages files and directories on a storage medium. It is neither an editor, a Python module, nor a file format."
      },
      "tip": {
        "de": "Denke an die Aufgabe, Daten auf einem Speichermedium zu organisieren.",
        "en": "Think about organizing data on a storage medium."
      }
    },
    {
      "id": "ch4-mc-102",
      "chapter": 4,
      "section": "4.2 Dateisysteme",
      "source": {
        "document": "SOTE2 Skript (Softwareentwicklung 2)",
        "section": "4.2 Dateisysteme"
      },
      "type": "mc",
      "difficulty": "easy",
      "question": {
        "de": "Welches ist das Standard-Dateisystem von Windows?",
        "en": "Which is the standard file system of Windows?"
      },
      "clarification": null,
      "code": null,
      "options": [
        {
          "id": "a",
          "text": {
            "de": "NTFS",
            "en": "NTFS"
          }
        },
        {
          "id": "b",
          "text": {
            "de": "ext4",
            "en": "ext4"
          }
        },
        {
          "id": "c",
          "text": {
            "de": "HTTP",
            "en": "HTTP"
          }
        },
        {
          "id": "d",
          "text": {
            "de": "ZIP",
            "en": "ZIP"
          }
        }
      ],
      "answer": "a",
      "explanation": {
        "de": "NTFS ist das Standard-Dateisystem von Windows. ext4 wird unter Linux verwendet, HTTP ist ein Netzwerkprotokoll und ZIP ein Archivformat.",
        "en": "NTFS is the standard file system of Windows. ext4 is used on Linux, HTTP is a network protocol, and ZIP is an archive format."
      },
      "tip": {
        "de": "Die Abkürzung steht für New Technology File System.",
        "en": "The abbreviation stands for New Technology File System."
      }
    },
    {
      "id": "ch4-tf-101",
      "chapter": 4,
      "section": "4.2 Dateisysteme",
      "source": {
        "document": "SOTE2 Skript (Softwareentwicklung 2)",
        "section": "4.2 Dateisysteme"
      },
      "type": "tf",
      "difficulty": "easy",
      "question": {
        "de": "Wahr oder falsch: Windows und Linux verwenden standardmäßig dasselbe Dateisystem.",
        "en": "True or false: Windows and Linux use the same file system by default."
      },
      "clarification": null,
      "code": null,
      "answer": false,
      "explanation": {
        "de": "Windows nutzt typischerweise NTFS, Linux dagegen z.B. ext4. Verschiedene Betriebssysteme verwenden also unterschiedliche Dateisysteme.",
        "en": "Windows typically uses NTFS whereas Linux uses e.g. ext4. Different operating systems therefore use different file systems."
      },
      "tip": {
        "de": "Vergleiche NTFS und ext4.",
        "en": "Compare NTFS and ext4."
      }
    },
    {
      "id": "ch4-ms-101",
      "chapter": 4,
      "section": "4.2 Dateisysteme",
      "source": {
        "document": "SOTE2 Skript (Softwareentwicklung 2)",
        "section": "4.2 Dateisysteme"
      },
      "type": "ms",
      "difficulty": "medium",
      "question": {
        "de": "Welche drei Funktionen unterstützt das Dateisystem NTFS laut Skript? Wähle genau 3 aus.",
        "en": "Which three features does the NTFS file system support according to the script? Select exactly 3."
      },
      "clarification": null,
      "code": null,
      "options": [
        {
          "id": "a",
          "text": {
            "de": "Dateiberechtigungen",
            "en": "File permissions"
          }
        },
        {
          "id": "b",
          "text": {
            "de": "Verschlüsselung",
            "en": "Encryption"
          }
        },
        {
          "id": "c",
          "text": {
            "de": "Komprimierung",
            "en": "Compression"
          }
        },
        {
          "id": "d",
          "text": {
            "de": "Automatische Serialisierung von Python-Objekten",
            "en": "Automatic serialization of Python objects"
          }
        },
        {
          "id": "e",
          "text": {
            "de": "Automatische Umwandlung von Dateien in JSON",
            "en": "Automatic conversion of files to JSON"
          }
        }
      ],
      "answer": [
        "a",
        "b",
        "c"
      ],
      "explanation": {
        "de": "NTFS unterstützt Dateiberechtigungen, Verschlüsselung und Komprimierung. Serialisierung von Python-Objekten ist Aufgabe von pickle und die Umwandlung in JSON Aufgabe des Moduls json, nicht des Dateisystems.",
        "en": "NTFS supports file permissions, encryption, and compression. Serializing Python objects is the job of pickle and converting to JSON is the job of the json module, not of the file system."
      },
      "tip": {
        "de": "Es geht um Sicherheit und Speicherplatz.",
        "en": "Think about security and storage space."
      }
    },
    {
      "id": "ch4-mc-103",
      "chapter": 4,
      "section": "4.2 Dateisysteme",
      "source": {
        "document": "SOTE2 Skript (Softwareentwicklung 2)",
        "section": "4.2 Dateisysteme"
      },
      "type": "mc",
      "difficulty": "medium",
      "question": {
        "de": "Welche Zuordnung von Betriebssystem und typischem Dateisystem ist korrekt?",
        "en": "Which pairing of operating system and typical file system is correct?"
      },
      "clarification": null,
      "code": null,
      "options": [
        {
          "id": "a",
          "text": {
            "de": "Windows: NTFS, Linux: ext4",
            "en": "Windows: NTFS, Linux: ext4"
          }
        },
        {
          "id": "b",
          "text": {
            "de": "Windows: ext4, Linux: NTFS",
            "en": "Windows: ext4, Linux: NTFS"
          }
        },
        {
          "id": "c",
          "text": {
            "de": "Windows und Linux: NTFS",
            "en": "Windows and Linux: NTFS"
          }
        },
        {
          "id": "d",
          "text": {
            "de": "Windows und Linux: ext4",
            "en": "Windows and Linux: ext4"
          }
        }
      ],
      "answer": "a",
      "explanation": {
        "de": "Windows verwendet typischerweise NTFS, Linux typischerweise ext4. Die anderen Zuordnungen vertauschen die Systeme oder behaupten ein gemeinsames Dateisystem.",
        "en": "Windows typically uses NTFS and Linux typically ext4. The other pairings swap the systems or claim a shared file system."
      },
      "tip": {
        "de": "Merke dir je ein Beispiel für Windows und Linux.",
        "en": "Remember one example each for Windows and Linux."
      }
    },
    {
      "id": "ch4-tf-102",
      "chapter": 4,
      "section": "4.2 Dateisysteme",
      "source": {
        "document": "SOTE2 Skript (Softwareentwicklung 2)",
        "section": "4.2 Dateisysteme"
      },
      "type": "tf",
      "difficulty": "medium",
      "question": {
        "de": "Wahr oder falsch: Ein Dateisystem wird nur auf Festplatten verwendet; SSDs und USB-Sticks kommen ohne Dateisystem aus.",
        "en": "True or false: A file system is only used on hard disks; SSDs and USB sticks work without a file system."
      },
      "clarification": null,
      "code": null,
      "answer": false,
      "explanation": {
        "de": "Ein Dateisystem organisiert Daten auf jedem Speichermedium, also auch auf SSDs und USB-Sticks, nicht nur auf Festplatten.",
        "en": "A file system organizes data on any storage medium, including SSDs and USB sticks, not just hard disks."
      },
      "tip": {
        "de": "Überlege, welche Speichermedien das Skript als Beispiele nennt.",
        "en": "Consider which storage media the script names as examples."
      }
    },
    {
      "id": "ch4-ms-102",
      "chapter": 4,
      "section": "4.3 Arten von Dateien",
      "source": {
        "document": "SOTE2 Skript (Softwareentwicklung 2)",
        "section": "4.3 Arten von Dateien"
      },
      "type": "ms",
      "difficulty": "easy",
      "question": {
        "de": "Welche zwei der folgenden Dateiendungen gehören zu Textdateien? Wähle genau 2 aus.",
        "en": "Which two of the following file extensions belong to text files? Select exactly 2."
      },
      "clarification": null,
      "code": null,
      "options": [
        {
          "id": "a",
          "text": {
            "de": ".csv",
            "en": ".csv"
          }
        },
        {
          "id": "b",
          "text": {
            "de": ".png",
            "en": ".png"
          }
        },
        {
          "id": "c",
          "text": {
            "de": ".json",
            "en": ".json"
          }
        },
        {
          "id": "d",
          "text": {
            "de": ".exe",
            "en": ".exe"
          }
        },
        {
          "id": "e",
          "text": {
            "de": ".pdf",
            "en": ".pdf"
          }
        }
      ],
      "answer": [
        "a",
        "c"
      ],
      "explanation": {
        "de": "CSV und JSON sind als Zeichenfolge codierte, lesbare Textformate. PNG, EXE und PDF sind Binärdateien.",
        "en": "CSV and JSON are readable text formats encoded as character sequences. PNG, EXE, and PDF are binary files."
      },
      "tip": {
        "de": "Textdateien lassen sich mit einem Texteditor lesen.",
        "en": "Text files can be read with a text editor."
      }
    },
    {
      "id": "ch4-mc-104",
      "chapter": 4,
      "section": "4.3 Arten von Dateien",
      "source": {
        "document": "SOTE2 Skript (Softwareentwicklung 2)",
        "section": "4.3 Arten von Dateien"
      },
      "type": "mc",
      "difficulty": "easy",
      "question": {
        "de": "Mit welchem Modus schreibt man Daten in eine Binärdatei?",
        "en": "Which mode is used to write data to a binary file?"
      },
      "clarification": null,
      "code": null,
      "options": [
        {
          "id": "a",
          "text": {
            "de": "\"wb\"",
            "en": "\"wb\""
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
            "de": "\"rb\"",
            "en": "\"rb\""
          }
        },
        {
          "id": "d",
          "text": {
            "de": "\"r\"",
            "en": "\"r\""
          }
        }
      ],
      "answer": "a",
      "explanation": {
        "de": "Mit \"wb\" wird eine Datei binär zum Schreiben geöffnet. \"w\" schreibt Text, \"rb\" liest binär und \"r\" liest Text.",
        "en": "\"wb\" opens a file for writing in binary mode. \"w\" writes text, \"rb\" reads in binary, and \"r\" reads text."
      },
      "tip": {
        "de": "Das b steht für binary.",
        "en": "The b stands for binary."
      }
    },
    {
      "id": "ch4-ms-103",
      "chapter": 4,
      "section": "4.3 Arten von Dateien",
      "source": {
        "document": "SOTE2 Skript (Softwareentwicklung 2)",
        "section": "4.3 Arten von Dateien"
      },
      "type": "ms",
      "difficulty": "medium",
      "question": {
        "de": "Welche drei der folgenden Dateitypen sind Binärdateien? Wähle genau 3 aus.",
        "en": "Which three of the following file types are binary files? Select exactly 3."
      },
      "clarification": null,
      "code": null,
      "options": [
        {
          "id": "a",
          "text": {
            "de": ".jpg",
            "en": ".jpg"
          }
        },
        {
          "id": "b",
          "text": {
            "de": ".txt",
            "en": ".txt"
          }
        },
        {
          "id": "c",
          "text": {
            "de": ".pdf",
            "en": ".pdf"
          }
        },
        {
          "id": "d",
          "text": {
            "de": ".exe",
            "en": ".exe"
          }
        },
        {
          "id": "e",
          "text": {
            "de": ".xml",
            "en": ".xml"
          }
        }
      ],
      "answer": [
        "a",
        "c",
        "d"
      ],
      "explanation": {
        "de": "JPG-Bilder, PDF-Dokumente und ausführbare EXE-Dateien enthalten binär codierte Daten. TXT und XML sind Textformate.",
        "en": "JPG images, PDF documents, and EXE executables contain binary-coded data. TXT and XML are text formats."
      },
      "tip": {
        "de": "Bilder, ausführbare Programme und PDFs sind nicht als Text lesbar.",
        "en": "Images, executables, and PDFs are not readable as text."
      }
    },
    {
      "id": "ch4-fib-101",
      "chapter": 4,
      "section": "4.3 Arten von Dateien",
      "source": {
        "document": "SOTE2 Skript (Softwareentwicklung 2)",
        "section": "4.3 Arten von Dateien"
      },
      "type": "fib",
      "difficulty": "medium",
      "question": {
        "de": "Ergänze den Modus, damit die Bilddatei als Binärdatei gelesen wird.",
        "en": "Fill in the mode so the image file is read as a binary file."
      },
      "clarification": {
        "de": "Der Modus wird als String angegeben.",
        "en": "The mode is given as a string."
      },
      "code": "with open(\"photo.png\", \"____\") as f:\n    data = f.read()",
      "answer": null,
      "blanks": [
        {
          "accepted": [
            "rb",
            "\"rb\"",
            "'rb'",
            "br"
          ],
          "caseSensitive": true
        }
      ],
      "explanation": {
        "de": "Mit \"rb\" wird die Datei zum Lesen im Binärmodus geöffnet; read() liefert dann bytes statt str.",
        "en": "\"rb\" opens the file for reading in binary mode; read() then returns bytes instead of str."
      },
      "tip": {
        "de": "Lesen plus binär.",
        "en": "Reading plus binary."
      }
    },
    {
      "id": "ch4-mc-105",
      "chapter": 4,
      "section": "4.3 Arten von Dateien",
      "source": {
        "document": "SOTE2 Skript (Softwareentwicklung 2)",
        "section": "4.3 Arten von Dateien"
      },
      "type": "mc",
      "difficulty": "hard",
      "question": {
        "de": "Welche Ausgabe erzeugt der Code?",
        "en": "What output does the code produce?"
      },
      "clarification": {
        "de": "Die Datei a.bin existiert vorher nicht. ord(\"A\") ist 65.",
        "en": "The file a.bin does not exist beforehand. ord(\"A\") is 65."
      },
      "code": "with open(\"a.bin\", \"wb\") as f:\n    f.write(b\"AB\")\nwith open(\"a.bin\", \"rb\") as f:\n    data = f.read()\nprint(type(data).__name__, len(data), data[0])",
      "options": [
        {
          "id": "a",
          "text": {
            "de": "bytes 2 65",
            "en": "bytes 2 65"
          }
        },
        {
          "id": "b",
          "text": {
            "de": "str 2 A",
            "en": "str 2 A"
          }
        },
        {
          "id": "c",
          "text": {
            "de": "bytes 2 A",
            "en": "bytes 2 A"
          }
        },
        {
          "id": "d",
          "text": {
            "de": "bytes 2 b'A'",
            "en": "bytes 2 b'A'"
          }
        }
      ],
      "answer": "a",
      "explanation": {
        "de": "Im Binärmodus liefert read() ein bytes-Objekt mit 2 Bytes. Der Index auf bytes liefert eine ganze Zahl, hier 65, den Code von \"A\"; ein Zeichen oder b'A' würde nur bei Slicing bzw. Textmodus entstehen.",
        "en": "In binary mode read() returns a bytes object of 2 bytes. Indexing bytes yields an integer, here 65, the code of \"A\"; a character or b'A' would only result from slicing or text mode."
      },
      "tip": {
        "de": "Was liefert read() im Modus rb, und was ergibt data[0] bei bytes?",
        "en": "What does read() return in mode rb, and what does data[0] give for bytes?"
      }
    },
    {
      "id": "ch4-tf-103",
      "chapter": 4,
      "section": "4.3 Arten von Dateien",
      "source": {
        "document": "SOTE2 Skript (Softwareentwicklung 2)",
        "section": "4.3 Arten von Dateien"
      },
      "type": "tf",
      "difficulty": "medium",
      "question": {
        "de": "Wahr oder falsch: Eine .csv-Datei lässt sich sinnvoll mit einem Texteditor bearbeiten, weil ihr Inhalt als Zeichenfolge (z.B. UTF-8) codiert ist.",
        "en": "True or false: A .csv file can sensibly be edited with a text editor because its content is encoded as a character sequence (e.g. UTF-8)."
      },
      "clarification": null,
      "code": null,
      "answer": true,
      "explanation": {
        "de": "Textdateien wie CSV enthalten lesbaren, als Zeichenfolge codierten Text und können daher mit einem Texteditor geöffnet und bearbeitet werden.",
        "en": "Text files such as CSV contain readable text encoded as a character sequence and can therefore be opened and edited with a text editor."
      },
      "tip": {
        "de": "Vergleiche mit der Definition einer Textdatei.",
        "en": "Compare with the definition of a text file."
      }
    },
    {
      "id": "ch4-mc-106",
      "chapter": 4,
      "section": "4.4 Pickles",
      "source": {
        "document": "SOTE2 Skript (Softwareentwicklung 2)",
        "section": "4.4 Pickles"
      },
      "type": "mc",
      "difficulty": "easy",
      "question": {
        "de": "Was versteht man in Python unter \"Pickling\"?",
        "en": "What does \"pickling\" mean in Python?"
      },
      "clarification": null,
      "code": null,
      "options": [
        {
          "id": "a",
          "text": {
            "de": "Python-Objekte in einen Byte-Stream umwandeln und in einer Binärdatei speichern",
            "en": "Convert Python objects to a byte stream and store them in a binary file"
          }
        },
        {
          "id": "b",
          "text": {
            "de": "Dateien komprimieren, um Speicherplatz zu sparen",
            "en": "Compress files to save storage space"
          }
        },
        {
          "id": "c",
          "text": {
            "de": "Dateien aus dem Dateisystem löschen",
            "en": "Delete files from the file system"
          }
        },
        {
          "id": "d",
          "text": {
            "de": "Objekte als lesbaren JSON-Text speichern",
            "en": "Store objects as readable JSON text"
          }
        }
      ],
      "answer": "a",
      "explanation": {
        "de": "Beim Pickling wird ein Python-Objekt in eine Byte-Stream-Darstellung umgewandelt und in einer Binärdatei gespeichert, um es später wieder zu laden. Mit Komprimierung, Löschen oder JSON-Text hat das nichts zu tun.",
        "en": "Pickling converts a Python object to a byte stream representation and stores it in a binary file so it can be loaded later. It has nothing to do with compression, deleting, or JSON text."
      },
      "tip": {
        "de": "Es hat mit Serialisierung zu tun.",
        "en": "It has to do with serialization."
      }
    },
    {
      "id": "ch4-tf-104",
      "chapter": 4,
      "section": "4.4 Pickles",
      "source": {
        "document": "SOTE2 Skript (Softwareentwicklung 2)",
        "section": "4.4 Pickles"
      },
      "type": "tf",
      "difficulty": "easy",
      "question": {
        "de": "Wahr oder falsch: Pickle eignet sich gut für den Datenaustausch zwischen verschiedenen Programmiersprachen.",
        "en": "True or false: Pickle is well suited for exchanging data between different programming languages."
      },
      "clarification": null,
      "code": null,
      "answer": false,
      "explanation": {
        "de": "Pickle ist nur in Python verwendbar. Für den Austausch zwischen Sprachen oder Plattformen sind Formate wie JSON oder CSV besser geeignet.",
        "en": "Pickle can only be used in Python. For exchange between languages or platforms, formats such as JSON or CSV are better suited."
      },
      "tip": {
        "de": "Pickle ist ein Python-spezifisches Format.",
        "en": "Pickle is a Python-specific format."
      }
    },
    {
      "id": "ch4-fib-102",
      "chapter": 4,
      "section": "4.4 Pickles",
      "source": {
        "document": "SOTE2 Skript (Softwareentwicklung 2)",
        "section": "4.4 Pickles"
      },
      "type": "fib",
      "difficulty": "easy",
      "question": {
        "de": "Ergänze die Funktionsnamen des Moduls pickle zum Speichern und Laden.",
        "en": "Fill in the pickle function names for saving and loading."
      },
      "clarification": {
        "de": "data ist ein beliebiges Python-Objekt.",
        "en": "data is an arbitrary Python object."
      },
      "code": "import pickle\nwith open(\"d.pkl\", \"wb\") as f:\n    pickle.____(data, f)\nwith open(\"d.pkl\", \"rb\") as f:\n    loaded = pickle.____(f)",
      "answer": null,
      "blanks": [
        {
          "accepted": [
            "dump"
          ],
          "caseSensitive": true
        },
        {
          "accepted": [
            "load"
          ],
          "caseSensitive": true
        }
      ],
      "explanation": {
        "de": "pickle.dump(obj, f) schreibt das Objekt in die Datei, pickle.load(f) liest es wieder ein und stellt das ursprüngliche Objekt her.",
        "en": "pickle.dump(obj, f) writes the object to the file, pickle.load(f) reads it back and restores the original object."
      },
      "tip": {
        "de": "Das Skript nennt dump() und load().",
        "en": "The script mentions dump() and load()."
      }
    },
    {
      "id": "ch4-mc-107",
      "chapter": 4,
      "section": "4.4 Pickles",
      "source": {
        "document": "SOTE2 Skript (Softwareentwicklung 2)",
        "section": "4.4 Pickles"
      },
      "type": "mc",
      "difficulty": "medium",
      "question": {
        "de": "In welchem Modus muss die Datei geöffnet werden, um mit pickle.load() ein Objekt einzulesen?",
        "en": "In which mode must the file be opened to read an object with pickle.load()?"
      },
      "clarification": null,
      "code": null,
      "options": [
        {
          "id": "a",
          "text": {
            "de": "\"rb\"",
            "en": "\"rb\""
          }
        },
        {
          "id": "b",
          "text": {
            "de": "\"r\"",
            "en": "\"r\""
          }
        },
        {
          "id": "c",
          "text": {
            "de": "\"wb\"",
            "en": "\"wb\""
          }
        },
        {
          "id": "d",
          "text": {
            "de": "\"w\"",
            "en": "\"w\""
          }
        }
      ],
      "answer": "a",
      "explanation": {
        "de": "pickle.load() erwartet Bytes und braucht daher \"rb\". \"r\" öffnet im Textmodus, \"wb\" und \"w\" sind Schreibmodi.",
        "en": "pickle.load() expects bytes and therefore needs \"rb\". \"r\" opens in text mode, \"wb\" and \"w\" are write modes."
      },
      "tip": {
        "de": "Pickle-Dateien sind Binärdateien, und du willst lesen.",
        "en": "Pickle files are binary files, and you want to read."
      }
    },
    {
      "id": "ch4-ms-104",
      "chapter": 4,
      "section": "4.4 Pickles",
      "source": {
        "document": "SOTE2 Skript (Softwareentwicklung 2)",
        "section": "4.4 Pickles"
      },
      "type": "ms",
      "difficulty": "medium",
      "question": {
        "de": "Welche drei Aussagen über pickle sind richtig? Wähle genau 3 aus.",
        "en": "Which three statements about pickle are correct? Select exactly 3."
      },
      "clarification": null,
      "code": null,
      "options": [
        {
          "id": "a",
          "text": {
            "de": "Pickle ist ein Python-spezifisches Format.",
            "en": "Pickle is a Python-specific format."
          }
        },
        {
          "id": "b",
          "text": {
            "de": "Pickle speichert Objekte in Binärdateien.",
            "en": "Pickle stores objects in binary files."
          }
        },
        {
          "id": "c",
          "text": {
            "de": "Für den Datenaustausch zwischen Sprachen sind JSON oder CSV besser geeignet.",
            "en": "JSON or CSV are better suited for data exchange between languages."
          }
        },
        {
          "id": "d",
          "text": {
            "de": "Pickle-Dateien sind für Menschen lesbare Textdateien.",
            "en": "Pickle files are human-readable text files."
          }
        },
        {
          "id": "e",
          "text": {
            "de": "pickle.load() schreibt ein Objekt in eine Datei.",
            "en": "pickle.load() writes an object to a file."
          }
        }
      ],
      "answer": [
        "a",
        "b",
        "c"
      ],
      "explanation": {
        "de": "Pickle ist Python-spezifisch, speichert in Binärdateien, und für den Austausch zwischen Sprachen sind JSON oder CSV besser. Pickle-Dateien sind kein lesbarer Text, und load() liest Objekte ein, es schreibt keine.",
        "en": "Pickle is Python-specific, stores in binary files, and JSON or CSV are better for exchange between languages. Pickle files are not readable text, and load() reads objects, it does not write them."
      },
      "tip": {
        "de": "Denke an Format, Dateityp und Einsatzbereich.",
        "en": "Think about format, file type, and field of use."
      }
    },
    {
      "id": "ch4-mc-108",
      "chapter": 4,
      "section": "4.4 Pickles",
      "source": {
        "document": "SOTE2 Skript (Softwareentwicklung 2)",
        "section": "4.4 Pickles"
      },
      "type": "mc",
      "difficulty": "hard",
      "question": {
        "de": "Was gibt der Code aus?",
        "en": "What does the code print?"
      },
      "clarification": {
        "de": "Die Datei a.pkl existiert vorher nicht.",
        "en": "The file a.pkl does not exist beforehand."
      },
      "code": "import pickle\na = [1, [2, 3]]\nwith open(\"a.pkl\", \"wb\") as f:\n    pickle.dump(a, f)\nwith open(\"a.pkl\", \"rb\") as f:\n    b = pickle.load(f)\nprint(a == b, a is b)",
      "options": [
        {
          "id": "a",
          "text": {
            "de": "True False",
            "en": "True False"
          }
        },
        {
          "id": "b",
          "text": {
            "de": "True True",
            "en": "True True"
          }
        },
        {
          "id": "c",
          "text": {
            "de": "False False",
            "en": "False False"
          }
        },
        {
          "id": "d",
          "text": {
            "de": "False True",
            "en": "False True"
          }
        }
      ],
      "answer": "a",
      "explanation": {
        "de": "Das geladene Objekt wird aus den Bytes neu aufgebaut: Es hat denselben Inhalt (== ist True), ist aber ein anderes Objekt im Speicher (is ist False).",
        "en": "The loaded object is rebuilt from the bytes: it has the same content (== is True) but is a different object in memory (is is False)."
      },
      "tip": {
        "de": "Vergleiche Gleichheit (==) und Identität (is) eines geladenen Objekts.",
        "en": "Compare equality (==) and identity (is) of a loaded object."
      }
    },
    {
      "id": "ch4-fe-101",
      "chapter": 4,
      "section": "4.4 Pickles",
      "source": {
        "document": "SOTE2 Skript (Softwareentwicklung 2)",
        "section": "4.4 Pickles"
      },
      "type": "fe",
      "difficulty": "hard",
      "question": {
        "de": "Welche Zeile enthält den Fehler, der verhindert, dass settings gespeichert wird?",
        "en": "Which line contains the error that prevents settings from being saved?"
      },
      "clarification": {
        "de": "Das Dictionary soll in die Datei settings.pkl gespeichert werden.",
        "en": "The dictionary is supposed to be saved to the file settings.pkl."
      },
      "code": "1 import pickle\n2 settings = {\"theme\": \"dark\", \"size\": 12}\n3 with open(\"settings.pkl\", \"rb\") as f:\n4     pickle.dump(settings, f)\n5 print(\"saved\")",
      "options": [
        {
          "id": "a",
          "text": {
            "de": "Zeile 1: Das Modul wird falsch importiert.",
            "en": "Line 1: The module is imported incorrectly."
          }
        },
        {
          "id": "b",
          "text": {
            "de": "Zeile 2: Ein Dictionary kann nicht gepickelt werden.",
            "en": "Line 2: A dictionary cannot be pickled."
          }
        },
        {
          "id": "c",
          "text": {
            "de": "Zeile 3: Falscher Modus (rb statt wb).",
            "en": "Line 3: Wrong mode (rb instead of wb)."
          }
        },
        {
          "id": "d",
          "text": {
            "de": "Zeile 4: Die Funktion heißt pickle.save.",
            "en": "Line 4: The function is called pickle.save."
          }
        },
        {
          "id": "e",
          "text": {
            "de": "Zeile 5: print darf nicht nach with stehen.",
            "en": "Line 5: print must not come after with."
          }
        }
      ],
      "answer": "c",
      "explanation": {
        "de": "In Zeile 3 ist die Datei im Lesemodus \"rb\" geöffnet; zum Speichern per pickle.dump muss sie mit \"wb\" geöffnet werden. Zeile 4 verwendet mit dump die richtige Funktion, und Import und Dictionary sind korrekt.",
        "en": "In line 3 the file is opened in read mode \"rb\"; to save with pickle.dump it must be opened with \"wb\". Line 4 uses the right function dump, and the import and dictionary are correct."
      },
      "tip": {
        "de": "Prüfe, ob der Modus zur Operation passt.",
        "en": "Check whether the mode fits the operation."
      }
    },
    {
      "id": "ch4-mc-109",
      "chapter": 4,
      "section": "4.4 Pickles",
      "source": {
        "document": "SOTE2 Skript (Softwareentwicklung 2)",
        "section": "4.4 Pickles"
      },
      "type": "mc",
      "difficulty": "ultra",
      "question": {
        "de": "Welches Risiko besteht, wenn man mit pickle.load() eine Datei aus einer nicht vertrauenswürdigen Quelle einliest?",
        "en": "What risk exists when loading a file from an untrusted source with pickle.load()?"
      },
      "clarification": null,
      "code": null,
      "options": [
        {
          "id": "a",
          "text": {
            "de": "Beim Laden kann beliebiger Code ausgeführt werden.",
            "en": "Arbitrary code can be executed while loading."
          }
        },
        {
          "id": "b",
          "text": {
            "de": "Die Datei wird dauerhaft für andere Programme gesperrt.",
            "en": "The file is permanently locked for other programs."
          }
        },
        {
          "id": "c",
          "text": {
            "de": "Es lassen sich nur Zahlen laden, alle anderen Typen gehen verloren.",
            "en": "Only numbers can be loaded, all other types are lost."
          }
        },
        {
          "id": "d",
          "text": {
            "de": "Alle Werte werden unwiderruflich in Strings umgewandelt.",
            "en": "All values are irreversibly converted to strings."
          }
        }
      ],
      "answer": "a",
      "explanation": {
        "de": "Ein manipulierter Pickle-Stream kann beim Laden beliebigen Code ausführen, daher darf man nur vertrauenswürdige Pickles laden. Die Datei wird nicht gesperrt, und Typen sowie Werte werden nicht verändert.",
        "en": "A manipulated pickle stream can execute arbitrary code when loaded, so only trusted pickles should be loaded. The file is not locked, and types and values are not altered."
      },
      "tip": {
        "de": "Beim Entpickeln wird mehr rekonstruiert als reine Daten.",
        "en": "Unpickling reconstructs more than plain data."
      }
    },
    {
      "id": "ch4-mc-110",
      "chapter": 4,
      "section": "4.4 Pickles",
      "source": {
        "document": "SOTE2 Skript (Softwareentwicklung 2)",
        "section": "4.4 Pickles"
      },
      "type": "mc",
      "difficulty": "ultra",
      "question": {
        "de": "Was gibt der Code aus?",
        "en": "What does the code print?"
      },
      "clarification": null,
      "code": "import pickle\nd = {\"items\": [1]}\nwith open(\"s.pkl\", \"wb\") as f:\n    pickle.dump(d, f)\nd[\"items\"].append(2)\nwith open(\"s.pkl\", \"rb\") as f:\n    e = pickle.load(f)\nprint(e[\"items\"], d[\"items\"])",
      "options": [
        {
          "id": "a",
          "text": {
            "de": "[1] [1, 2]",
            "en": "[1] [1, 2]"
          }
        },
        {
          "id": "b",
          "text": {
            "de": "[1, 2] [1, 2]",
            "en": "[1, 2] [1, 2]"
          }
        },
        {
          "id": "c",
          "text": {
            "de": "[1] [1]",
            "en": "[1] [1]"
          }
        },
        {
          "id": "d",
          "text": {
            "de": "[1, 2] [1]",
            "en": "[1, 2] [1]"
          }
        }
      ],
      "answer": "a",
      "explanation": {
        "de": "dump schreibt den Zustand zum Zeitpunkt des Aufrufs (items = [1]). Die spätere Änderung von d betrifft nur das Objekt im Speicher, e enthält den gespeicherten Zustand.",
        "en": "dump writes the state at the time of the call (items = [1]). The later change of d only affects the in-memory object; e holds the stored state."
      },
      "tip": {
        "de": "Wann entsteht der Schnappschuss des Objekts?",
        "en": "When is the snapshot of the object taken?"
      }
    },
    {
      "id": "ch4-tf-105",
      "chapter": 4,
      "section": "4.5 Das Modul os",
      "source": {
        "document": "SOTE2 Skript (Softwareentwicklung 2)",
        "section": "4.5 Das Modul os / Labor 4 (Dateien und Datensätze)"
      },
      "type": "tf",
      "difficulty": "easy",
      "question": {
        "de": "Wahr oder falsch: Das Modul os stellt Funktionen für den Zugriff auf Betriebssystem-Funktionalitäten bereit, insbesondere auf das Dateisystem.",
        "en": "True or false: The os module provides functions for accessing operating system functionality, in particular the file system."
      },
      "clarification": null,
      "code": null,
      "answer": true,
      "explanation": {
        "de": "Genau dafür ist os da: Es bietet u.a. Funktionen zum Auflisten, Anlegen, Umbenennen und Löschen von Dateien und Verzeichnissen.",
        "en": "That is exactly what os is for: it offers functions for listing, creating, renaming, and deleting files and directories, among others."
      },
      "tip": {
        "de": "os steht für operating system.",
        "en": "os stands for operating system."
      }
    },
    {
      "id": "ch4-mc-111",
      "chapter": 4,
      "section": "4.5 Das Modul os",
      "source": {
        "document": "SOTE2 Skript (Softwareentwicklung 2)",
        "section": "4.5 Das Modul os / Labor 4 (Dateien und Datensätze)"
      },
      "type": "mc",
      "difficulty": "easy",
      "question": {
        "de": "Welche Funktion liefert das aktuelle Arbeitsverzeichnis?",
        "en": "Which function returns the current working directory?"
      },
      "clarification": null,
      "code": null,
      "options": [
        {
          "id": "a",
          "text": {
            "de": "os.getcwd()",
            "en": "os.getcwd()"
          }
        },
        {
          "id": "b",
          "text": {
            "de": "os.cwd()",
            "en": "os.cwd()"
          }
        },
        {
          "id": "c",
          "text": {
            "de": "os.listdir()",
            "en": "os.listdir()"
          }
        },
        {
          "id": "d",
          "text": {
            "de": "os.path.join()",
            "en": "os.path.join()"
          }
        }
      ],
      "answer": "a",
      "explanation": {
        "de": "os.getcwd() gibt den Pfad des aktuellen Arbeitsverzeichnisses als String zurück. Die anderen Namen existieren nicht oder haben andere Aufgaben: listdir listet Einträge, path.join setzt Pfade zusammen.",
        "en": "os.getcwd() returns the path of the current working directory as a string. The other names do not exist or do other things: listdir lists entries, path.join joins paths."
      },
      "tip": {
        "de": "get current working directory.",
        "en": "get current working directory."
      }
    },
    {
      "id": "ch4-fib-103",
      "chapter": 4,
      "section": "4.5 Das Modul os",
      "source": {
        "document": "SOTE2 Skript (Softwareentwicklung 2)",
        "section": "4.5 Das Modul os / Labor 4 (Dateien und Datensätze)"
      },
      "type": "fib",
      "difficulty": "easy",
      "question": {
        "de": "Ergänze die Funktion, die die Namen aller Einträge des aktuellen Verzeichnisses als Liste liefert.",
        "en": "Fill in the function that returns the names of all entries of the current directory as a list."
      },
      "clarification": null,
      "code": "import os\nnames = os.____(\".\")\nprint(names)",
      "answer": null,
      "blanks": [
        {
          "accepted": [
            "listdir"
          ],
          "caseSensitive": true
        }
      ],
      "explanation": {
        "de": "os.listdir(path) gibt eine Liste mit den Namen der Dateien und Unterverzeichnisse im angegebenen Verzeichnis zurück; \".\" steht für das aktuelle Verzeichnis.",
        "en": "os.listdir(path) returns a list with the names of the files and subdirectories in the given directory; \".\" stands for the current directory."
      },
      "tip": {
        "de": "list directory.",
        "en": "list directory."
      }
    },
    {
      "id": "ch4-mc-112",
      "chapter": 4,
      "section": "4.5 Das Modul os",
      "source": {
        "document": "SOTE2 Skript (Softwareentwicklung 2)",
        "section": "4.5 Das Modul os / Labor 4 (Dateien und Datensätze)"
      },
      "type": "mc",
      "difficulty": "medium",
      "question": {
        "de": "Was passiert beim Ausführen des Codes?",
        "en": "What happens when the code is run?"
      },
      "clarification": {
        "de": "Das Verzeichnis data existiert vor dem Start nicht.",
        "en": "The directory data does not exist before the start."
      },
      "code": "import os\nos.mkdir(\"data\")\nos.mkdir(\"data\")",
      "options": [
        {
          "id": "a",
          "text": {
            "de": "Beim zweiten os.mkdir wird ein FileExistsError ausgelöst.",
            "en": "A FileExistsError is raised by the second os.mkdir."
          }
        },
        {
          "id": "b",
          "text": {
            "de": "Das zweite os.mkdir tut nichts und läuft ohne Fehler durch.",
            "en": "The second os.mkdir does nothing and runs without error."
          }
        },
        {
          "id": "c",
          "text": {
            "de": "Das Verzeichnis wird neu angelegt und sein Inhalt gelöscht.",
            "en": "The directory is recreated and its content deleted."
          }
        },
        {
          "id": "d",
          "text": {
            "de": "Schon das erste os.mkdir löst einen FileNotFoundError aus.",
            "en": "The first os.mkdir already raises a FileNotFoundError."
          }
        }
      ],
      "answer": "a",
      "explanation": {
        "de": "Der zweite Aufruf von os.mkdir scheitert mit einem FileExistsError, weil das Verzeichnis schon existiert. Er ignoriert den Aufruf nicht und überschreibt auch nichts.",
        "en": "The second call of os.mkdir fails with a FileExistsError because the directory already exists. It neither ignores the call nor overwrites anything."
      },
      "tip": {
        "de": "Kann man ein bereits vorhandenes Verzeichnis nochmals anlegen?",
        "en": "Can you create an already existing directory again?"
      }
    },
    {
      "id": "ch4-fib-104",
      "chapter": 4,
      "section": "4.5 Das Modul os",
      "source": {
        "document": "SOTE2 Skript (Softwareentwicklung 2)",
        "section": "4.5 Das Modul os / Labor 4 (Dateien und Datensätze)"
      },
      "type": "fib",
      "difficulty": "medium",
      "question": {
        "de": "Ergänze die Funktion, die die Datei old.txt in new.txt umbenennt.",
        "en": "Fill in the function that renames the file old.txt to new.txt."
      },
      "clarification": null,
      "code": "import os\nos.____(\"old.txt\", \"new.txt\")",
      "answer": null,
      "blanks": [
        {
          "accepted": [
            "rename",
            "replace"
          ],
          "caseSensitive": true
        }
      ],
      "explanation": {
        "de": "os.rename(src, dst) benennt die Datei bzw. das Verzeichnis um. Alternativ funktioniert auch os.replace.",
        "en": "os.rename(src, dst) renames the file or directory. os.replace works as well."
      },
      "tip": {
        "de": "Die Funktion heißt wie die Aktion auf Englisch.",
        "en": "The function is named like the action in English."
      }
    },
    {
      "id": "ch4-ms-105",
      "chapter": 4,
      "section": "4.5 Das Modul os",
      "source": {
        "document": "SOTE2 Skript (Softwareentwicklung 2)",
        "section": "4.5 Das Modul os / Labor 4 (Dateien und Datensätze)"
      },
      "type": "ms",
      "difficulty": "medium",
      "question": {
        "de": "Welche drei der folgenden Funktionen gehören zum Modul os? Wähle genau 3 aus.",
        "en": "Which three of the following functions belong to the os module? Select exactly 3."
      },
      "clarification": null,
      "code": null,
      "options": [
        {
          "id": "a",
          "text": {
            "de": "os.listdir",
            "en": "os.listdir"
          }
        },
        {
          "id": "b",
          "text": {
            "de": "os.mkdir",
            "en": "os.mkdir"
          }
        },
        {
          "id": "c",
          "text": {
            "de": "os.remove",
            "en": "os.remove"
          }
        },
        {
          "id": "d",
          "text": {
            "de": "os.readline",
            "en": "os.readline"
          }
        },
        {
          "id": "e",
          "text": {
            "de": "os.append",
            "en": "os.append"
          }
        }
      ],
      "answer": [
        "a",
        "b",
        "c"
      ],
      "explanation": {
        "de": "os.listdir, os.mkdir und os.remove sind Funktionen des Moduls os. readline ist eine Methode von Dateiobjekten und os.append existiert nicht.",
        "en": "os.listdir, os.mkdir, and os.remove are functions of the os module. readline is a method of file objects and os.append does not exist."
      },
      "tip": {
        "de": "Zwei der Namen gehören zu Dateiobjekten bzw. existieren nicht.",
        "en": "Two of the names belong to file objects or do not exist."
      }
    },
    {
      "id": "ch4-mc-113",
      "chapter": 4,
      "section": "4.5 Das Modul os",
      "source": {
        "document": "SOTE2 Skript (Softwareentwicklung 2)",
        "section": "4.5 Das Modul os / Labor 4 (Dateien und Datensätze)"
      },
      "type": "mc",
      "difficulty": "medium",
      "question": {
        "de": "Warum verwendet man os.path.join(\"data\", \"a.txt\") statt \"data/a.txt\" zu schreiben?",
        "en": "Why use os.path.join(\"data\", \"a.txt\") instead of writing \"data/a.txt\"?"
      },
      "clarification": null,
      "code": null,
      "options": [
        {
          "id": "a",
          "text": {
            "de": "Es verwendet das zum Betriebssystem passende Trennzeichen.",
            "en": "It uses the separator that fits the operating system."
          }
        },
        {
          "id": "b",
          "text": {
            "de": "Es prüft, ob die Datei existiert.",
            "en": "It checks whether the file exists."
          }
        },
        {
          "id": "c",
          "text": {
            "de": "Es legt die Datei an, falls sie fehlt.",
            "en": "It creates the file if it is missing."
          }
        },
        {
          "id": "d",
          "text": {
            "de": "Es öffnet die Datei direkt zum Lesen.",
            "en": "It directly opens the file for reading."
          }
        }
      ],
      "answer": "a",
      "explanation": {
        "de": "os.path.join setzt Pfadteile mit dem Trennzeichen des jeweiligen Betriebssystems zusammen und ist damit portabel. Es prüft weder die Existenz noch legt es Dateien an oder öffnet sie.",
        "en": "os.path.join combines path parts with the separator of the respective operating system and is therefore portable. It neither checks existence nor creates or opens files."
      },
      "tip": {
        "de": "Unter Windows und Linux sind die Trennzeichen verschieden.",
        "en": "The separators differ between Windows and Linux."
      }
    },
    {
      "id": "ch4-tf-106",
      "chapter": 4,
      "section": "4.5 Das Modul os",
      "source": {
        "document": "SOTE2 Skript (Softwareentwicklung 2)",
        "section": "4.5 Das Modul os / Labor 4 (Dateien und Datensätze)"
      },
      "type": "tf",
      "difficulty": "hard",
      "question": {
        "de": "Wahr oder falsch: Wenn das Verzeichnis data die Datei a.txt enthält, liefert os.listdir(\"data\") die Liste [\"a.txt\"] und nicht [\"data/a.txt\"].",
        "en": "True or false: If the directory data contains the file a.txt, os.listdir(\"data\") returns the list [\"a.txt\"] and not [\"data/a.txt\"]."
      },
      "clarification": null,
      "code": null,
      "answer": true,
      "explanation": {
        "de": "os.listdir gibt nur die Namen der Einträge zurück, ohne das übergebene Verzeichnis voranzustellen. Für den Zugriff auf die Datei muss man den Pfad z.B. mit os.path.join zusammensetzen.",
        "en": "os.listdir returns only the names of the entries, without prepending the given directory. To access the file you need to build the path, e.g. with os.path.join."
      },
      "tip": {
        "de": "Was liefert listdir: Namen oder vollständige Pfade?",
        "en": "What does listdir return: names or full paths?"
      }
    },
    {
      "id": "ch4-fe-102",
      "chapter": 4,
      "section": "4.5 Das Modul os",
      "source": {
        "document": "SOTE2 Skript (Softwareentwicklung 2)",
        "section": "4.5 Das Modul os / Labor 4 (Dateien und Datensätze)"
      },
      "type": "fe",
      "difficulty": "hard",
      "question": {
        "de": "Das Skript liegt neben dem Verzeichnis data und soll alle .txt-Dateien darin ausgeben, bricht aber mit FileNotFoundError ab. Welche Zeile enthält den Fehler?",
        "en": "The script sits next to the directory data and is supposed to print all .txt files in it, but it aborts with FileNotFoundError. Which line contains the error?"
      },
      "clarification": {
        "de": "Das Verzeichnis data enthält mehrere .txt-Dateien; das Skript wird im übergeordneten Verzeichnis gestartet.",
        "en": "The directory data contains several .txt files; the script is started in the parent directory."
      },
      "code": "1 import os\n2 for name in os.listdir(\"data\"):\n3     if name.endswith(\".txt\"):\n4         with open(name) as f:\n5             print(f.read())",
      "options": [
        {
          "id": "a",
          "text": {
            "de": "Zeile 2: Es muss os.listdir(\".\") heißen.",
            "en": "Line 2: It must be os.listdir(\".\")."
          }
        },
        {
          "id": "b",
          "text": {
            "de": "Zeile 3: endswith gibt es für Strings nicht.",
            "en": "Line 3: endswith does not exist for strings."
          }
        },
        {
          "id": "c",
          "text": {
            "de": "Zeile 4: name enthält das Verzeichnis data nicht.",
            "en": "Line 4: name does not contain the directory data."
          }
        },
        {
          "id": "d",
          "text": {
            "de": "Zeile 5: read() darf nicht in print stehen.",
            "en": "Line 5: read() must not be used inside print."
          }
        },
        {
          "id": "e",
          "text": {
            "de": "Zeile 1: os muss mit from os import * geladen werden.",
            "en": "Line 1: os must be loaded with from os import *."
          }
        }
      ],
      "answer": "c",
      "explanation": {
        "de": "os.listdir liefert nur Dateinamen, die in Zeile 4 relativ zum Arbeitsverzeichnis gesucht werden. Dort muss open(os.path.join(\"data\", name)) stehen. Zeile 2 und 3 sind korrekt.",
        "en": "os.listdir returns only file names, which in line 4 are looked up relative to the working directory. There open(os.path.join(\"data\", name)) is needed. Lines 2 and 3 are correct."
      },
      "tip": {
        "de": "Was enthält name, und von wo aus wird open() gesucht?",
        "en": "What does name contain, and relative to where does open() search?"
      }
    },
    {
      "id": "ch4-ms-106",
      "chapter": 4,
      "section": "4.5 Das Modul os",
      "source": {
        "document": "SOTE2 Skript (Softwareentwicklung 2)",
        "section": "4.5 Das Modul os / Labor 4 (Dateien und Datensätze)"
      },
      "type": "ms",
      "difficulty": "hard",
      "question": {
        "de": "Das Verzeichnis x wurde soeben mit os.mkdir(\"x\") neu angelegt und ist leer. Welche Aussagen sind richtig? Wähle alle zutreffenden aus.",
        "en": "The directory x has just been newly created with os.mkdir(\"x\") and is empty. Which statements are correct? Select all that apply."
      },
      "clarification": null,
      "code": null,
      "options": [
        {
          "id": "a",
          "text": {
            "de": "os.path.exists(\"x\") ist True.",
            "en": "os.path.exists(\"x\") is True."
          }
        },
        {
          "id": "b",
          "text": {
            "de": "os.path.isdir(\"x\") ist True.",
            "en": "os.path.isdir(\"x\") is True."
          }
        },
        {
          "id": "c",
          "text": {
            "de": "os.path.isfile(\"x\") ist False.",
            "en": "os.path.isfile(\"x\") is False."
          }
        },
        {
          "id": "d",
          "text": {
            "de": "os.listdir(\"x\") liefert [].",
            "en": "os.listdir(\"x\") returns []."
          }
        },
        {
          "id": "e",
          "text": {
            "de": "os.path.isfile(\"x\") ist True.",
            "en": "os.path.isfile(\"x\") is True."
          }
        },
        {
          "id": "f",
          "text": {
            "de": "os.listdir(\"x\") löst einen FileNotFoundError aus.",
            "en": "os.listdir(\"x\") raises a FileNotFoundError."
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
        "de": "exists ist für Dateien und Verzeichnisse True, isdir ist True und isfile False, und listdir liefert für ein leeres Verzeichnis eine leere Liste. isfile True oder ein FileNotFoundError von listdir wäre nur bei einer Datei bzw. einem fehlenden Verzeichnis der Fall.",
        "en": "exists is True for files and directories, isdir is True and isfile False, and listdir returns an empty list for an empty directory. isfile being True or a FileNotFoundError from listdir would only occur for a file or a missing directory."
      },
      "tip": {
        "de": "Unterscheide exists, isdir und isfile.",
        "en": "Distinguish exists, isdir, and isfile."
      }
    },
    {
      "id": "ch4-mc-114",
      "chapter": 4,
      "section": "4.6 Syntax und Befehle für Dateien",
      "source": {
        "document": "SOTE2 Skript (Softwareentwicklung 2)",
        "section": "4.6 Syntax und Befehle für Dateien / Labor 4 (Dateien und Datensätze)"
      },
      "type": "mc",
      "difficulty": "easy",
      "question": {
        "de": "Was ist der wichtigste Vorteil der with-Anweisung beim Öffnen einer Datei?",
        "en": "What is the main advantage of the with statement when opening a file?"
      },
      "clarification": null,
      "code": null,
      "options": [
        {
          "id": "a",
          "text": {
            "de": "Die Datei wird automatisch geschlossen.",
            "en": "The file is closed automatically."
          }
        },
        {
          "id": "b",
          "text": {
            "de": "Die Datei wird schneller gelesen.",
            "en": "The file is read faster."
          }
        },
        {
          "id": "c",
          "text": {
            "de": "Die Datei kann gleichzeitig gelesen und binär geschrieben werden.",
            "en": "The file can be read and written in binary at the same time."
          }
        },
        {
          "id": "d",
          "text": {
            "de": "Die Datei wird automatisch komprimiert.",
            "en": "The file is compressed automatically."
          }
        }
      ],
      "answer": "a",
      "explanation": {
        "de": "Am Ende des with-Blocks wird die Datei automatisch geschlossen, auch wenn im Block ein Fehler auftritt. Schneller wird der Zugriff dadurch nicht, und der Modus bleibt unverändert.",
        "en": "At the end of the with block the file is closed automatically, even if an error occurs in the block. Access does not become faster, and the mode remains unchanged."
      },
      "tip": {
        "de": "Was muss man sonst am Ende manuell tun?",
        "en": "What would you otherwise have to do manually at the end?"
      }
    },
    {
      "id": "ch4-fib-105",
      "chapter": 4,
      "section": "4.6 Syntax und Befehle für Dateien",
      "source": {
        "document": "SOTE2 Skript (Softwareentwicklung 2)",
        "section": "4.6 Syntax und Befehle für Dateien / Labor 4 (Dateien und Datensätze)"
      },
      "type": "fib",
      "difficulty": "medium",
      "question": {
        "de": "Ergänze den Modus, damit neuer Text an eine vorhandene Datei angehängt wird, ohne den bisherigen Inhalt zu löschen.",
        "en": "Fill in the mode so new text is appended to an existing file without deleting the previous content."
      },
      "clarification": null,
      "code": "with open(\"log.txt\", \"____\") as f:\n    f.write(\"new entry\\n\")",
      "answer": null,
      "blanks": [
        {
          "accepted": [
            "a",
            "\"a\"",
            "'a'"
          ],
          "caseSensitive": true
        }
      ],
      "explanation": {
        "de": "Der Modus \"a\" öffnet zum Anhängen: Der vorhandene Inhalt bleibt erhalten, und geschriebener Text landet am Ende. \"w\" würde die Datei leeren.",
        "en": "Mode \"a\" opens for appending: existing content is kept and written text goes to the end. \"w\" would empty the file."
      },
      "tip": {
        "de": "append.",
        "en": "append."
      }
    },
    {
      "id": "ch4-tf-107",
      "chapter": 4,
      "section": "4.6 Syntax und Befehle für Dateien",
      "source": {
        "document": "SOTE2 Skript (Softwareentwicklung 2)",
        "section": "4.6 Syntax und Befehle für Dateien / Labor 4 (Dateien und Datensätze)"
      },
      "type": "tf",
      "difficulty": "easy",
      "question": {
        "de": "Wahr oder falsch: open(\"a.txt\") ohne Modusangabe öffnet die Datei im Textmodus zum Lesen.",
        "en": "True or false: open(\"a.txt\") without a mode argument opens the file in text mode for reading."
      },
      "clarification": null,
      "code": null,
      "answer": true,
      "explanation": {
        "de": "Ohne Angabe wird der Modus \"r\" verwendet, also Lesen im Textmodus. Existiert die Datei nicht, entsteht ein FileNotFoundError.",
        "en": "Without an argument mode \"r\" is used, i.e. reading in text mode. If the file does not exist, a FileNotFoundError is raised."
      },
      "tip": {
        "de": "Welcher Modus ist der Standard?",
        "en": "Which mode is the default?"
      }
    },
    {
      "id": "ch4-fib-106",
      "chapter": 4,
      "section": "4.6 Syntax und Befehle für Dateien",
      "source": {
        "document": "SOTE2 Skript (Softwareentwicklung 2)",
        "section": "4.6 Syntax und Befehle für Dateien / Labor 4 (Dateien und Datensätze)"
      },
      "type": "fib",
      "difficulty": "medium",
      "question": {
        "de": "Ergänze die fehlenden Teile, um den Text Hello in notes.txt zu schreiben.",
        "en": "Fill in the missing parts to write the text Hello to notes.txt."
      },
      "clarification": null,
      "code": "with ____(\"notes.txt\", \"w\") as f:\n    f.____(\"Hello\")",
      "answer": null,
      "blanks": [
        {
          "accepted": [
            "open"
          ],
          "caseSensitive": true
        },
        {
          "accepted": [
            "write"
          ],
          "caseSensitive": true
        }
      ],
      "explanation": {
        "de": "open() öffnet die Datei und liefert das Dateiobjekt f; f.write() schreibt einen String hinein.",
        "en": "open() opens the file and returns the file object f; f.write() writes a string into it."
      },
      "tip": {
        "de": "Eine eingebaute Funktion öffnet, eine Dateimethode schreibt.",
        "en": "A built-in function opens, a file method writes."
      }
    },
    {
      "id": "ch4-fib-107",
      "chapter": 4,
      "section": "4.6 Syntax und Befehle für Dateien",
      "source": {
        "document": "SOTE2 Skript (Softwareentwicklung 2)",
        "section": "4.6 Syntax und Befehle für Dateien / Labor 4 (Dateien und Datensätze)"
      },
      "type": "fib",
      "difficulty": "medium",
      "question": {
        "de": "Ergänze die Methode, die nur die erste Zeile der Datei liest.",
        "en": "Fill in the method that reads only the first line of the file."
      },
      "clarification": null,
      "code": "with open(\"a.txt\") as f:\n    first = f.____()",
      "answer": null,
      "blanks": [
        {
          "accepted": [
            "readline"
          ],
          "caseSensitive": true
        }
      ],
      "explanation": {
        "de": "readline() liest eine Zeile inklusive Zeilenumbruch und rückt den Dateizeiger vor. read() würde den ganzen Inhalt liefern, readlines() alle Zeilen als Liste.",
        "en": "readline() reads one line including the newline and advances the file pointer. read() would return the whole content, readlines() all lines as a list."
      },
      "tip": {
        "de": "Eine Zeile, nicht alle.",
        "en": "One line, not all."
      }
    },
    {
      "id": "ch4-fib-108",
      "chapter": 4,
      "section": "4.6 Syntax und Befehle für Dateien",
      "source": {
        "document": "SOTE2 Skript (Softwareentwicklung 2)",
        "section": "4.6 Syntax und Befehle für Dateien / Labor 4 (Dateien und Datensätze)"
      },
      "type": "fib",
      "difficulty": "hard",
      "question": {
        "de": "Ergänze die Methoden, um eine Liste von Zeilen in einem Aufruf zu schreiben und wieder einzulesen.",
        "en": "Fill in the methods to write a list of lines in one call and to read them back."
      },
      "clarification": {
        "de": "Die Datei o.txt wird neu angelegt.",
        "en": "The file o.txt is newly created."
      },
      "code": "rows = [\"a\\n\", \"b\\n\"]\nwith open(\"o.txt\", \"w\") as f:\n    f.____(rows)\nwith open(\"o.txt\") as f:\n    back = f.____()\nprint(back == rows)  # True",
      "answer": null,
      "blanks": [
        {
          "accepted": [
            "writelines"
          ],
          "caseSensitive": true
        },
        {
          "accepted": [
            "readlines"
          ],
          "caseSensitive": true
        }
      ],
      "explanation": {
        "de": "writelines() schreibt alle Strings der Liste, fügt aber selbst keine Zeilenumbrüche ein; deshalb enthalten die Strings \\n. readlines() liefert die Zeilen inklusive \\n als Liste, daher ist back == rows.",
        "en": "writelines() writes all strings of the list but does not add newlines itself; that is why the strings contain \\n. readlines() returns the lines including \\n as a list, so back == rows."
      },
      "tip": {
        "de": "Schreiben: mehrere Zeilen in einem Aufruf; Lesen: alle Zeilen als Liste.",
        "en": "Writing: several lines in one call; reading: all lines as a list."
      }
    },
    {
      "id": "ch4-fib-109",
      "chapter": 4,
      "section": "4.6 Syntax und Befehle für Dateien",
      "source": {
        "document": "SOTE2 Skript (Softwareentwicklung 2)",
        "section": "4.6 Syntax und Befehle für Dateien / Labor 4 (Dateien und Datensätze)"
      },
      "type": "fib",
      "difficulty": "medium",
      "question": {
        "de": "Ergänze die Methode, die den Dateizeiger an den Anfang zurücksetzt, damit die Datei ein zweites Mal gelesen werden kann.",
        "en": "Fill in the method that resets the file pointer to the beginning so the file can be read a second time."
      },
      "clarification": null,
      "code": "with open(\"a.txt\") as f:\n    f.read()\n    f.____(0)\n    again = f.read()",
      "answer": null,
      "blanks": [
        {
          "accepted": [
            "seek"
          ],
          "caseSensitive": true
        }
      ],
      "explanation": {
        "de": "seek(0) setzt den Zeiger auf das erste Byte. Ohne diesen Aufruf würde das zweite read() einen leeren String liefern.",
        "en": "seek(0) moves the pointer to the first byte. Without this call the second read() would return an empty string."
      },
      "tip": {
        "de": "Nach read() steht der Zeiger am Dateiende.",
        "en": "After read() the pointer is at the end of the file."
      }
    },
    {
      "id": "ch4-ms-107",
      "chapter": 4,
      "section": "4.6 Syntax und Befehle für Dateien",
      "source": {
        "document": "SOTE2 Skript (Softwareentwicklung 2)",
        "section": "4.6 Syntax und Befehle für Dateien / Labor 4 (Dateien und Datensätze)"
      },
      "type": "ms",
      "difficulty": "hard",
      "question": {
        "de": "Die Datei b.txt enthält genau \"A\\nB\\n\". Welche drei Aussagen sind richtig? Wähle genau 3 aus.",
        "en": "The file b.txt contains exactly \"A\\nB\\n\". Which three statements are correct? Select exactly 3."
      },
      "clarification": null,
      "code": null,
      "options": [
        {
          "id": "a",
          "text": {
            "de": "f.readlines() liefert [\"A\\n\", \"B\\n\"].",
            "en": "f.readlines() returns [\"A\\n\", \"B\\n\"]."
          }
        },
        {
          "id": "b",
          "text": {
            "de": "Ein zweites f.read() direkt nach einem ersten f.read() liefert \"\".",
            "en": "A second f.read() directly after a first f.read() returns \"\"."
          }
        },
        {
          "id": "c",
          "text": {
            "de": "for line in f liefert die Zeilen \"A\\n\" und \"B\\n\".",
            "en": "for line in f yields the lines \"A\\n\" and \"B\\n\"."
          }
        },
        {
          "id": "d",
          "text": {
            "de": "f.readline() liefert \"A\" ohne Zeilenumbruch.",
            "en": "f.readline() returns \"A\" without a newline."
          }
        },
        {
          "id": "e",
          "text": {
            "de": "f.readlines() liefert den einzelnen String \"A\\nB\\n\".",
            "en": "f.readlines() returns the single string \"A\\nB\\n\"."
          }
        }
      ],
      "answer": [
        "a",
        "b",
        "c"
      ],
      "explanation": {
        "de": "readlines() liefert eine Liste mit Zeilen inklusive \\n, ein zweites read() liefert am Dateiende \"\", und die Iteration über das Dateiobjekt liefert Zeilen mit \\n. readline() entfernt den Umbruch nicht, und readlines() gibt keinen einzelnen String zurück.",
        "en": "readlines() returns a list of lines including \\n, a second read() returns \"\" at the end of the file, and iterating over the file object yields lines with \\n. readline() does not strip the newline, and readlines() does not return a single string."
      },
      "tip": {
        "de": "Denke an den Dateizeiger und an die Zeilenumbrüche.",
        "en": "Think about the file pointer and the newlines."
      }
    },
    {
      "id": "ch4-mc-115",
      "chapter": 4,
      "section": "4.6 Syntax und Befehle für Dateien",
      "source": {
        "document": "SOTE2 Skript (Softwareentwicklung 2)",
        "section": "4.6 Syntax und Befehle für Dateien / Labor 4 (Dateien und Datensätze)"
      },
      "type": "mc",
      "difficulty": "hard",
      "question": {
        "de": "Was gibt der Code aus?",
        "en": "What does the code print?"
      },
      "clarification": {
        "de": "Die Datei c.txt existiert vorher nicht.",
        "en": "The file c.txt does not exist beforehand."
      },
      "code": "with open(\"c.txt\", \"w\") as f:\n    f.write(\"X\\n\")\nwith open(\"c.txt\", \"a\") as f:\n    f.write(\"Y\\n\")\nwith open(\"c.txt\", \"r\") as f:\n    print(len(f.read()))",
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
            "de": "6",
            "en": "6"
          }
        }
      ],
      "answer": "a",
      "explanation": {
        "de": "Nach dem ersten Block steht \"X\\n\" in der Datei, \"a\" hängt \"Y\\n\" an, es sind also vier Zeichen: \"X\\nY\\n\". Im Textmodus zählt \\n beim Lesen als ein Zeichen, auch unter Windows.",
        "en": "After the first block the file holds \"X\\n\"; \"a\" appends \"Y\\n\", giving four characters: \"X\\nY\\n\". In text mode \\n counts as one character when reading, even on Windows."
      },
      "tip": {
        "de": "Wie verhält sich \"a\" gegenüber \"w\" bei vorhandenem Inhalt?",
        "en": "How does \"a\" behave compared to \"w\" with existing content?"
      }
    },
    {
      "id": "ch4-mc-116",
      "chapter": 4,
      "section": "4.6 Syntax und Befehle für Dateien",
      "source": {
        "document": "SOTE2 Skript (Softwareentwicklung 2)",
        "section": "4.6 Syntax und Befehle für Dateien / Labor 4 (Dateien und Datensätze)"
      },
      "type": "mc",
      "difficulty": "hard",
      "question": {
        "de": "Was gibt der Code aus?",
        "en": "What does the code print?"
      },
      "clarification": {
        "de": "Die Datei u.txt existiert vorher nicht.",
        "en": "The file u.txt does not exist beforehand."
      },
      "code": "with open(\"u.txt\", \"w\", encoding=\"utf-8\") as f:\n    f.write(\"ä\")\nwith open(\"u.txt\", \"rb\") as f:\n    print(len(f.read()))",
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
            "de": "1",
            "en": "1"
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
            "de": "0",
            "en": "0"
          }
        }
      ],
      "answer": "a",
      "explanation": {
        "de": "Das Zeichen \"ä\" wird in UTF-8 mit zwei Bytes (0xC3 0xA4) codiert. Im Binärmodus liefert read() diese Bytes, daher ist die Länge 2 und nicht 1.",
        "en": "The character \"ä\" is encoded in UTF-8 with two bytes (0xC3 0xA4). In binary mode read() returns these bytes, so the length is 2 and not 1."
      },
      "tip": {
        "de": "Wie viele Bytes belegt das Zeichen ä in UTF-8?",
        "en": "How many bytes does the character ä occupy in UTF-8?"
      }
    },
    {
      "id": "ch4-mc-117",
      "chapter": 4,
      "section": "4.6 Syntax und Befehle für Dateien",
      "source": {
        "document": "SOTE2 Skript (Softwareentwicklung 2)",
        "section": "4.6 Syntax und Befehle für Dateien / Labor 4 (Dateien und Datensätze)"
      },
      "type": "mc",
      "difficulty": "ultra",
      "question": {
        "de": "Die Datei t.txt enthält genau ABC (ohne Zeilenumbruch). Was gibt der Code aus?",
        "en": "The file t.txt contains exactly ABC (without a newline). What does the code print?"
      },
      "clarification": null,
      "code": "with open(\"t.txt\", \"r+\") as f:\n    f.write(\"X\")\n    print(f.read())",
      "options": [
        {
          "id": "a",
          "text": {
            "de": "BC",
            "en": "BC"
          }
        },
        {
          "id": "b",
          "text": {
            "de": "XBC",
            "en": "XBC"
          }
        },
        {
          "id": "c",
          "text": {
            "de": "ABC",
            "en": "ABC"
          }
        },
        {
          "id": "d",
          "text": {
            "de": "C",
            "en": "C"
          }
        }
      ],
      "answer": "a",
      "explanation": {
        "de": "Im Modus \"r+\" wird nicht gekürzt. write(\"X\") überschreibt das Zeichen A an Position 0 und verschiebt den Zeiger auf Position 1, read() liefert daher den Rest \"BC\".",
        "en": "Mode \"r+\" does not truncate. write(\"X\") overwrites the character A at position 0 and moves the pointer to position 1, so read() returns the rest \"BC\"."
      },
      "tip": {
        "de": "Wo steht der Dateizeiger nach dem Schreiben?",
        "en": "Where is the file pointer after writing?"
      }
    },
    {
      "id": "ch4-mc-118",
      "chapter": 4,
      "section": "4.6 Syntax und Befehle für Dateien",
      "source": {
        "document": "SOTE2 Skript (Softwareentwicklung 2)",
        "section": "4.6 Syntax und Befehle für Dateien / Labor 4 (Dateien und Datensätze)"
      },
      "type": "mc",
      "difficulty": "ultra",
      "question": {
        "de": "Die Datei s.txt enthält genau AB. Was gibt der Code aus?",
        "en": "The file s.txt contains exactly AB. What does the code print?"
      },
      "clarification": null,
      "code": "with open(\"s.txt\", \"a\") as f:\n    f.seek(0)\n    f.write(\"X\")\nwith open(\"s.txt\") as f:\n    print(f.read())",
      "options": [
        {
          "id": "a",
          "text": {
            "de": "ABX",
            "en": "ABX"
          }
        },
        {
          "id": "b",
          "text": {
            "de": "XAB",
            "en": "XAB"
          }
        },
        {
          "id": "c",
          "text": {
            "de": "XB",
            "en": "XB"
          }
        },
        {
          "id": "d",
          "text": {
            "de": "X",
            "en": "X"
          }
        }
      ],
      "answer": "a",
      "explanation": {
        "de": "Im Anhängemodus wird jeder Schreibzugriff ans Dateiende gestellt, unabhängig von seek(0). Daher enthält die Datei danach ABX.",
        "en": "In append mode every write goes to the end of the file regardless of seek(0). The file therefore contains ABX afterwards."
      },
      "tip": {
        "de": "Hat seek im Modus a Einfluss darauf, wohin geschrieben wird?",
        "en": "Does seek influence where data is written in mode a?"
      }
    },
    {
      "id": "ch4-fe-103",
      "chapter": 4,
      "section": "4.6 Syntax und Befehle für Dateien",
      "source": {
        "document": "SOTE2 Skript (Softwareentwicklung 2)",
        "section": "4.6 Syntax und Befehle für Dateien / Labor 4 (Dateien und Datensätze)"
      },
      "type": "fe",
      "difficulty": "ultra",
      "question": {
        "de": "Die Datei nums.txt enthält die drei Zeilen 1, 2 und 3. Das Programm bricht mit ZeroDivisionError ab. Welche Zeile enthält die Ursache des Fehlers?",
        "en": "The file nums.txt contains the three lines 1, 2, and 3. The program aborts with ZeroDivisionError. Which line contains the cause of the error?"
      },
      "clarification": null,
      "code": "1 with open(\"nums.txt\") as f:\n2     total = 0\n3     for line in f:\n4         total += int(line)\n5     count = len(f.readlines())\n6     avg = total / count",
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
        },
        {
          "id": "e",
          "text": {
            "de": "Zeile 6",
            "en": "Line 6"
          }
        }
      ],
      "answer": "d",
      "explanation": {
        "de": "Die for-Schleife hat den Dateizeiger ans Ende bewegt, daher liefert f.readlines() in Zeile 5 eine leere Liste und count ist 0. Die Division in Zeile 6 löst nur die Folge aus; die Ursache ist Zeile 5.",
        "en": "The for loop moved the file pointer to the end, so f.readlines() in line 5 returns an empty list and count is 0. The division in line 6 only triggers the consequence; the cause is line 5."
      },
      "tip": {
        "de": "Was liefert readlines(), wenn die Datei schon komplett durchlaufen wurde?",
        "en": "What does readlines() return once the file has been fully traversed?"
      }
    },
    {
      "id": "ch4-fe-104",
      "chapter": 4,
      "section": "4.6 Syntax und Befehle für Dateien",
      "source": {
        "document": "SOTE2 Skript (Softwareentwicklung 2)",
        "section": "4.6 Syntax und Befehle für Dateien / Labor 4 (Dateien und Datensätze)"
      },
      "type": "fe",
      "difficulty": "hard",
      "question": {
        "de": "Der Code soll die Zahlen in nums.txt schreiben, löst aber einen Fehler aus. Welche Zeile ist die Ursache?",
        "en": "The code is supposed to write the numbers to nums.txt but raises an error. Which line is the cause?"
      },
      "clarification": null,
      "code": "1 numbers = [1, 2, 3]\n2 with open(\"nums.txt\", \"w\") as f:\n3     for n in numbers:\n4         f.write(n)",
      "options": [
        {
          "id": "a",
          "text": {
            "de": "Zeile 1: Listen können nicht in Dateien geschrieben werden.",
            "en": "Line 1: Lists cannot be written to files."
          }
        },
        {
          "id": "b",
          "text": {
            "de": "Zeile 2: Der Modus \"w\" erlaubt kein Schreiben.",
            "en": "Line 2: Mode \"w\" does not allow writing."
          }
        },
        {
          "id": "c",
          "text": {
            "de": "Zeile 3: Die for-Schleife darf nicht in with stehen.",
            "en": "Line 3: The for loop must not be inside with."
          }
        },
        {
          "id": "d",
          "text": {
            "de": "Zeile 4: write erwartet einen String, keinen int.",
            "en": "Line 4: write expects a string, not an int."
          }
        }
      ],
      "answer": "d",
      "explanation": {
        "de": "f.write() akzeptiert nur Strings; ein int führt zu einem TypeError. Richtig wäre f.write(str(n)). Der Modus \"w\" in Zeile 2 ist korrekt.",
        "en": "f.write() only accepts strings; an int causes a TypeError. Correct would be f.write(str(n)). Mode \"w\" in line 2 is correct."
      },
      "tip": {
        "de": "Welchen Typ erwartet write()?",
        "en": "Which type does write() expect?"
      }
    }
];
