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
    },
    {
      "id": "ch4-mc-201",
      "chapter": 4,
      "section": "4.2 Dateisysteme",
      "source": {
        "document": "SOTE2 Skript (Softwareentwicklung 2)",
        "section": "4.2 Dateisysteme"
      },
      "type": "mc",
      "difficulty": "easy",
      "question": {
        "de": "Wie sind Dateien und Verzeichnisse in einem Dateisystem wie NTFS organisiert?",
        "en": "How are files and directories organized in a file system such as NTFS?"
      },
      "clarification": null,
      "code": null,
      "options": [
        {
          "id": "a",
          "text": {
            "de": "In einer hierarchischen Struktur",
            "en": "In a hierarchical structure"
          }
        },
        {
          "id": "b",
          "text": {
            "de": "Als flache Liste ohne Verzeichnisse",
            "en": "As a flat list without directories"
          }
        },
        {
          "id": "c",
          "text": {
            "de": "Als Python-Dictionary im Arbeitsspeicher",
            "en": "As a Python dictionary in main memory"
          }
        },
        {
          "id": "d",
          "text": {
            "de": "Getrennt nach Dateiendung auf je einem eigenen Laufwerk",
            "en": "Separated by file extension, each on its own drive"
          }
        }
      ],
      "answer": "a",
      "explanation": {
        "de": "NTFS organisiert Dateien und Verzeichnisse hierarchisch, d.h. Verzeichnisse können wieder Verzeichnisse und Dateien enthalten. Eine flache Liste, ein Dictionary im Arbeitsspeicher oder eine Trennung nach Endungen auf Laufwerke beschreibt kein Dateisystem.",
        "en": "NTFS organizes files and directories hierarchically, i.e. directories can contain further directories and files. A flat list, an in-memory dictionary or a split of drives by extension does not describe a file system."
      },
      "tip": {
        "de": "Denke an einen Baum aus Ordnern.",
        "en": "Think of a tree of folders."
      }
    },
    {
      "id": "ch4-tf-201",
      "chapter": 4,
      "section": "4.2 Dateisysteme",
      "source": {
        "document": "SOTE2 Skript (Softwareentwicklung 2)",
        "section": "4.2 Dateisysteme"
      },
      "type": "tf",
      "difficulty": "easy",
      "question": {
        "de": "Wahr oder falsch: In einem hierarchischen Dateisystem darf ein Verzeichnis nur Dateien enthalten, aber keine weiteren Verzeichnisse.",
        "en": "True or false: In a hierarchical file system a directory may only contain files, but no further directories."
      },
      "clarification": null,
      "code": null,
      "answer": false,
      "explanation": {
        "de": "Verzeichnisse können Unterverzeichnisse enthalten; genau das macht die Struktur hierarchisch. Ohne verschachtelte Verzeichnisse gäbe es keine Baumstruktur.",
        "en": "Directories can contain subdirectories; this is exactly what makes the structure hierarchical. Without nested directories there would be no tree structure."
      },
      "tip": {
        "de": "Was bedeutet \"hierarchisch\" für Ordner?",
        "en": "What does \"hierarchical\" mean for folders?"
      }
    },
    {
      "id": "ch4-mc-202",
      "chapter": 4,
      "section": "4.2 Dateisysteme",
      "source": {
        "document": "SOTE2 Skript (Softwareentwicklung 2)",
        "section": "4.2 Dateisysteme"
      },
      "type": "mc",
      "difficulty": "easy",
      "question": {
        "de": "Welcher der folgenden Pfade ist ein relativer Pfad?",
        "en": "Which of the following paths is a relative path?"
      },
      "clarification": null,
      "code": null,
      "options": [
        {
          "id": "a",
          "text": {
            "de": "/home/anna/a.txt",
            "en": "/home/anna/a.txt"
          }
        },
        {
          "id": "b",
          "text": {
            "de": "C:\\Users\\anna\\a.txt",
            "en": "C:\\Users\\anna\\a.txt"
          }
        },
        {
          "id": "c",
          "text": {
            "de": "data/a.txt",
            "en": "data/a.txt"
          }
        },
        {
          "id": "d",
          "text": {
            "de": "C:/Users/anna/a.txt",
            "en": "C:/Users/anna/a.txt"
          }
        }
      ],
      "answer": "c",
      "explanation": {
        "de": "Ein relativer Pfad beginnt weder mit einem Wurzelverzeichnis noch mit einem Laufwerksbuchstaben und wird vom aktuellen Arbeitsverzeichnis aus gedeutet. Die anderen drei Pfade starten an der Wurzel bzw. am Laufwerk C: und sind daher absolut.",
        "en": "A relative path starts neither with a root directory nor with a drive letter and is interpreted from the current working directory. The other three paths start at the root or at drive C: and are therefore absolute."
      },
      "tip": {
        "de": "Wo beginnt der Pfad: an der Wurzel oder beim aktuellen Verzeichnis?",
        "en": "Where does the path start: at the root or at the current directory?"
      }
    },
    {
      "id": "ch4-ms-201",
      "chapter": 4,
      "section": "4.2 Dateisysteme",
      "source": {
        "document": "SOTE2 Skript (Softwareentwicklung 2)",
        "section": "4.2 Dateisysteme"
      },
      "type": "ms",
      "difficulty": "medium",
      "question": {
        "de": "Welche zwei der folgenden Pfade sind absolute Pfade? Wähle genau 2 aus.",
        "en": "Which two of the following paths are absolute paths? Select exactly 2."
      },
      "clarification": null,
      "code": null,
      "options": [
        {
          "id": "a",
          "text": {
            "de": "/home/anna/a.txt",
            "en": "/home/anna/a.txt"
          }
        },
        {
          "id": "b",
          "text": {
            "de": "data/a.txt",
            "en": "data/a.txt"
          }
        },
        {
          "id": "c",
          "text": {
            "de": "C:\\Users\\anna\\a.txt",
            "en": "C:\\Users\\anna\\a.txt"
          }
        },
        {
          "id": "d",
          "text": {
            "de": "../a.txt",
            "en": "../a.txt"
          }
        },
        {
          "id": "e",
          "text": {
            "de": "a.txt",
            "en": "a.txt"
          }
        }
      ],
      "answer": [
        "a",
        "c"
      ],
      "explanation": {
        "de": "Absolute Pfade legen den Ort vollständig ab der Wurzel bzw. dem Laufwerk fest. data/a.txt, ../a.txt und a.txt sind relativ und hängen vom Arbeitsverzeichnis ab.",
        "en": "Absolute paths specify the location completely starting at the root or drive. data/a.txt, ../a.txt and a.txt are relative and depend on the working directory."
      },
      "tip": {
        "de": "Absolute Pfade hängen nicht vom Arbeitsverzeichnis ab.",
        "en": "Absolute paths do not depend on the working directory."
      }
    },
    {
      "id": "ch4-tf-202",
      "chapter": 4,
      "section": "4.2 Dateisysteme",
      "source": {
        "document": "SOTE2 Skript (Softwareentwicklung 2)",
        "section": "4.2 Dateisysteme"
      },
      "type": "tf",
      "difficulty": "easy",
      "question": {
        "de": "Wahr oder falsch: Auch unter Windows (Trennzeichen \\) funktioniert open(\"data/a.txt\") mit Schrägstrich, sofern das Verzeichnis data existiert.",
        "en": "True or false: Even on Windows (separator \\) open(\"data/a.txt\") works with a forward slash, provided the directory data exists."
      },
      "clarification": {
        "de": "Die Datei a.txt existiert in data.",
        "en": "The file a.txt exists in data."
      },
      "code": "with open(\"data/a.txt\") as f:\n    text = f.read()",
      "answer": true,
      "explanation": {
        "de": "Python und die Windows-Dateifunktionen akzeptieren den Schrägstrich als Pfadtrenner, daher funktioniert dieser Aufruf auch unter Windows. Für portablen Code ist os.path.join dennoch die sauberere Wahl.",
        "en": "Python and the Windows file functions accept the forward slash as a path separator, so this call works on Windows too. For portable code os.path.join is still the cleaner choice."
      },
      "tip": {
        "de": "Unterstützt Python beide Trennzeichen unter Windows?",
        "en": "Does Python support both separators on Windows?"
      }
    },
    {
      "id": "ch4-mc-203",
      "chapter": 4,
      "section": "4.2 Dateisysteme",
      "source": {
        "document": "SOTE2 Skript (Softwareentwicklung 2)",
        "section": "4.2 Dateisysteme"
      },
      "type": "mc",
      "difficulty": "hard",
      "question": {
        "de": "Das aktuelle Arbeitsverzeichnis ist /home/u/proj. Welche Datei wird mit dem folgenden Aufruf geöffnet?",
        "en": "The current working directory is /home/u/proj. Which file is opened by the following call?"
      },
      "clarification": {
        "de": "In Pfaden steht .. für das übergeordnete Verzeichnis.",
        "en": "In paths, .. stands for the parent directory."
      },
      "code": "f = open(\"../data/a.txt\")",
      "options": [
        {
          "id": "a",
          "text": {
            "de": "/home/u/proj/data/a.txt",
            "en": "/home/u/proj/data/a.txt"
          }
        },
        {
          "id": "b",
          "text": {
            "de": "/home/u/data/a.txt",
            "en": "/home/u/data/a.txt"
          }
        },
        {
          "id": "c",
          "text": {
            "de": "/home/data/a.txt",
            "en": "/home/data/a.txt"
          }
        },
        {
          "id": "d",
          "text": {
            "de": "/data/a.txt",
            "en": "/data/a.txt"
          }
        }
      ],
      "answer": "b",
      "explanation": {
        "de": "Ausgehend von /home/u/proj führt .. nach /home/u, danach folgt data/a.txt. Der Pfad endet also bei /home/u/data/a.txt; die anderen Pfade gehen eine Ebene zu wenig oder zu viel nach oben bzw. bleiben in proj.",
        "en": "Starting from /home/u/proj, .. leads to /home/u, followed by data/a.txt. The path therefore ends at /home/u/data/a.txt; the other paths go one level too few or too many upwards or stay inside proj."
      },
      "tip": {
        "de": "Gehe vom Arbeitsverzeichnis genau eine Ebene nach oben.",
        "en": "Go up exactly one level from the working directory."
      }
    },
    {
      "id": "ch4-fib-201",
      "chapter": 4,
      "section": "4.2 Dateisysteme",
      "source": {
        "document": "SOTE2 Skript (Softwareentwicklung 2)",
        "section": "4.2 Dateisysteme"
      },
      "type": "fib",
      "difficulty": "medium",
      "question": {
        "de": "Ergänze das Präfix vor dem String-Literal, damit \\n und \\t im Windows-Pfad nicht als Zeilenumbruch bzw. Tabulator gedeutet werden.",
        "en": "Fill in the prefix before the string literal so that \\n and \\t in the Windows path are not interpreted as newline and tab."
      },
      "clarification": {
        "de": "Gesucht ist ein einzelner Buchstabe.",
        "en": "A single letter is expected."
      },
      "code": "path = ____\"C:\\new\\table.txt\"\nf = open(path)",
      "answer": null,
      "blanks": [
        {
          "accepted": [
            "r",
            "R"
          ],
          "caseSensitive": true
        }
      ],
      "explanation": {
        "de": "Ein Raw-String (Präfix r) behandelt Backslashes als normale Zeichen. Ohne r würden \\n und \\t im Pfad Steuerzeichen ergeben und der Pfad wäre ungültig.",
        "en": "A raw string (prefix r) treats backslashes as ordinary characters. Without r, \\n and \\t in the path would become control characters and the path would be invalid."
      },
      "tip": {
        "de": "Das Präfix steht für raw.",
        "en": "The prefix stands for raw."
      }
    },
    {
      "id": "ch4-mc-204",
      "chapter": 4,
      "section": "4.3 Arten von Dateien",
      "source": {
        "document": "SOTE2 Skript (Softwareentwicklung 2)",
        "section": "4.3 Arten von Dateien"
      },
      "type": "mc",
      "difficulty": "medium",
      "question": {
        "de": "Eine Bilddatei photo.png wird in photo.txt umbenannt; der Dateiinhalt wird nicht verändert. Was gilt danach?",
        "en": "An image file photo.png is renamed to photo.txt; the file content is not changed. What applies afterwards?"
      },
      "clarification": null,
      "code": null,
      "options": [
        {
          "id": "a",
          "text": {
            "de": "Der Inhalt ist weiterhin binär codiert und lässt sich mit einem Texteditor nicht sinnvoll bearbeiten.",
            "en": "The content is still binary-coded and cannot sensibly be edited with a text editor."
          }
        },
        {
          "id": "b",
          "text": {
            "de": "Die Datei ist nun eine Textdatei, weil die Endung .txt lautet.",
            "en": "The file is now a text file because the extension is .txt."
          }
        },
        {
          "id": "c",
          "text": {
            "de": "Python wandelt den Inhalt beim Öffnen automatisch in lesbaren Text um.",
            "en": "Python automatically converts the content to readable text when opening."
          }
        },
        {
          "id": "d",
          "text": {
            "de": "Die Datei wird beim Umbenennen automatisch gelöscht.",
            "en": "The file is deleted automatically when renamed."
          }
        }
      ],
      "answer": "a",
      "explanation": {
        "de": "Die Endung ist nur Teil des Namens und ändert den Inhalt nicht; die Bytes bleiben die eines Bildes. Weder das Betriebssystem noch Python machen daraus Text, und gelöscht wird beim Umbenennen nichts.",
        "en": "The extension is only part of the name and does not change the content; the bytes remain those of an image. Neither the operating system nor Python turns it into text, and nothing is deleted when renaming."
      },
      "tip": {
        "de": "Was bestimmt, ob eine Datei Text oder Binärdaten enthält: der Name oder der Inhalt?",
        "en": "What decides whether a file contains text or binary data: the name or the content?"
      }
    },
    {
      "id": "ch4-tf-203",
      "chapter": 4,
      "section": "4.3 Arten von Dateien",
      "source": {
        "document": "SOTE2 Skript (Softwareentwicklung 2)",
        "section": "4.3 Arten von Dateien"
      },
      "type": "tf",
      "difficulty": "easy",
      "question": {
        "de": "Wahr oder falsch: Wird eine Textdatei im Modus \"rb\" geöffnet, liefert read() einen String vom Typ str.",
        "en": "True or false: If a text file is opened in mode \"rb\", read() returns a string of type str."
      },
      "clarification": null,
      "code": "with open(\"a.txt\", \"rb\") as f:\n    data = f.read()",
      "answer": false,
      "explanation": {
        "de": "Im Binärmodus liefert read() immer ein bytes-Objekt, auch wenn die Datei Text enthält. Einen str erhält man erst im Textmodus (\"r\").",
        "en": "In binary mode read() always returns a bytes object, even if the file contains text. A str is only obtained in text mode (\"r\")."
      },
      "tip": {
        "de": "Welche Bedeutung hat das b im Modus?",
        "en": "What does the b in the mode mean?"
      }
    },
    {
      "id": "ch4-mc-205",
      "chapter": 4,
      "section": "4.3 Arten von Dateien",
      "source": {
        "document": "SOTE2 Skript (Softwareentwicklung 2)",
        "section": "4.3 Arten von Dateien"
      },
      "type": "mc",
      "difficulty": "medium",
      "question": {
        "de": "Warum gibt man beim Öffnen von Textdateien mit Umlauten besser encoding=\"utf-8\" an?",
        "en": "Why is it better to pass encoding=\"utf-8\" when opening text files that contain umlauts?"
      },
      "clarification": null,
      "code": null,
      "options": [
        {
          "id": "a",
          "text": {
            "de": "Weil die Standardkodierung vom Betriebssystem abhängen kann und die Datei sonst auf anderen Systemen anders gelesen oder geschrieben würde.",
            "en": "Because the default encoding can depend on the operating system, so the file could otherwise be read or written differently on other systems."
          }
        },
        {
          "id": "b",
          "text": {
            "de": "Weil Python Umlaute ohne diese Angabe grundsätzlich löscht.",
            "en": "Because Python deletes umlauts without this argument."
          }
        },
        {
          "id": "c",
          "text": {
            "de": "Weil encoding=\"utf-8\" die Datei in eine Binärdatei umwandelt.",
            "en": "Because encoding=\"utf-8\" converts the file into a binary file."
          }
        },
        {
          "id": "d",
          "text": {
            "de": "Weil Textdateien sonst nur mit dem Modus \"wb\" geschrieben werden können.",
            "en": "Because text files could otherwise only be written with mode \"wb\"."
          }
        }
      ],
      "answer": "a",
      "explanation": {
        "de": "Eine Textdatei besteht aus Bytes, die erst über eine Kodierung zu Zeichen werden; ohne Angabe wird eine plattformabhängige Standardkodierung verwendet. Mit encoding=\"utf-8\" ist das Verhalten überall gleich. Umlaute werden nicht gelöscht, und die Datei bleibt eine Textdatei.",
        "en": "A text file consists of bytes that only become characters through an encoding; without the argument a platform-dependent default encoding is used. With encoding=\"utf-8\" the behavior is the same everywhere. Umlauts are not deleted and the file remains a text file."
      },
      "tip": {
        "de": "Überlege, was bei unterschiedlichen Standardkodierungen auf verschiedenen Rechnern passiert.",
        "en": "Think about what happens with different default encodings on different machines."
      }
    },
    {
      "id": "ch4-fib-202",
      "chapter": 4,
      "section": "4.3 Arten von Dateien",
      "source": {
        "document": "SOTE2 Skript (Softwareentwicklung 2)",
        "section": "4.3 Arten von Dateien"
      },
      "type": "fib",
      "difficulty": "medium",
      "question": {
        "de": "Ergänze das Schlüsselwort-Argument, mit dem die Textkodierung UTF-8 festgelegt wird.",
        "en": "Fill in the keyword argument that sets the text encoding to UTF-8."
      },
      "clarification": null,
      "code": "with open(\"gruss.txt\", \"w\", ____=\"utf-8\") as f:\n    f.write(\"Grüße\")",
      "answer": null,
      "blanks": [
        {
          "accepted": [
            "encoding"
          ],
          "caseSensitive": true
        }
      ],
      "explanation": {
        "de": "open() besitzt den Parameter encoding, mit dem die Kodierung für den Textmodus bestimmt wird. Im Binärmodus ist er nicht erlaubt.",
        "en": "open() has the parameter encoding that determines the encoding for text mode. It is not allowed in binary mode."
      },
      "tip": {
        "de": "Der Parametername nennt das, was eingestellt wird.",
        "en": "The parameter name states what is being set."
      }
    },
    {
      "id": "ch4-mc-206",
      "chapter": 4,
      "section": "4.3 Arten von Dateien",
      "source": {
        "document": "SOTE2 Skript (Softwareentwicklung 2)",
        "section": "4.3 Arten von Dateien"
      },
      "type": "mc",
      "difficulty": "ultra",
      "question": {
        "de": "Was gibt der folgende Code aus?",
        "en": "What does the following code print?"
      },
      "clarification": null,
      "code": "raw = \"ä\".encode(\"utf-8\")\nprint(raw.decode(\"latin-1\"))",
      "options": [
        {
          "id": "a",
          "text": {
            "de": "ä",
            "en": "ä"
          }
        },
        {
          "id": "b",
          "text": {
            "de": "Ã¤",
            "en": "Ã¤"
          }
        },
        {
          "id": "c",
          "text": {
            "de": "UnicodeDecodeError",
            "en": "UnicodeDecodeError"
          }
        },
        {
          "id": "d",
          "text": {
            "de": "b'\\xc3\\xa4'",
            "en": "b'\\xc3\\xa4'"
          }
        }
      ],
      "answer": "b",
      "explanation": {
        "de": "In UTF-8 besteht ä aus den zwei Bytes C3 A4. Latin-1 ordnet jedem Byte genau ein Zeichen zu (Ã und ¤), daher entsteht Ã¤ ohne Fehler. Ein ä entsteht nur, wenn mit derselben Kodierung dekodiert wird, mit der kodiert wurde.",
        "en": "In UTF-8, ä consists of the two bytes C3 A4. Latin-1 maps every byte to exactly one character (Ã and ¤), so Ã¤ results without an error. An ä only results if decoding uses the same encoding that was used for encoding."
      },
      "tip": {
        "de": "Wie viele Bytes hat ä in UTF-8, und was macht Latin-1 mit jedem einzelnen Byte?",
        "en": "How many bytes does ä have in UTF-8, and what does Latin-1 do with each single byte?"
      }
    },
    {
      "id": "ch4-ms-202",
      "chapter": 4,
      "section": "4.3 Arten von Dateien",
      "source": {
        "document": "SOTE2 Skript (Softwareentwicklung 2)",
        "section": "4.3 Arten von Dateien"
      },
      "type": "ms",
      "difficulty": "easy",
      "question": {
        "de": "Welche drei Aussagen über Text- und Binärdateien sind richtig? Wähle genau 3 aus.",
        "en": "Which three statements about text and binary files are correct? Select exactly 3."
      },
      "clarification": null,
      "code": null,
      "options": [
        {
          "id": "a",
          "text": {
            "de": "Eine .json-Datei ist eine Textdatei.",
            "en": "A .json file is a text file."
          }
        },
        {
          "id": "b",
          "text": {
            "de": "Eine .png-Datei ist eine Textdatei.",
            "en": "A .png file is a text file."
          }
        },
        {
          "id": "c",
          "text": {
            "de": "Binärdateien öffnet man in Python mit den Modi \"rb\" bzw. \"wb\".",
            "en": "Binary files are opened in Python with modes \"rb\" or \"wb\"."
          }
        },
        {
          "id": "d",
          "text": {
            "de": "Textdateien lassen sich mit einem Texteditor bearbeiten.",
            "en": "Text files can be edited with a text editor."
          }
        },
        {
          "id": "e",
          "text": {
            "de": "Im Modus \"rb\" liefert read() einen str.",
            "en": "In mode \"rb\" read() returns a str."
          }
        }
      ],
      "answer": [
        "a",
        "c",
        "d"
      ],
      "explanation": {
        "de": "JSON ist ein Textformat, Binärdateien werden mit rb/wb bearbeitet, und Textdateien kann man in einem Texteditor ändern. PNG ist ein Bildformat und damit binär, und rb liefert bytes statt str.",
        "en": "JSON is a text format, binary files are handled with rb/wb, and text files can be changed in a text editor. PNG is an image format and therefore binary, and rb returns bytes instead of str."
      },
      "tip": {
        "de": "Ordne jede Endung einer der beiden Dateiarten zu.",
        "en": "Assign each extension to one of the two file types."
      }
    },
    {
      "id": "ch4-tf-204",
      "chapter": 4,
      "section": "4.3 Arten von Dateien",
      "source": {
        "document": "SOTE2 Skript (Softwareentwicklung 2)",
        "section": "4.3 Arten von Dateien"
      },
      "type": "tf",
      "difficulty": "hard",
      "question": {
        "de": "Wahr oder falsch: Läuft der Code unter Windows mit Standardeinstellungen, gibt er 3 aus.",
        "en": "True or false: If the code runs on Windows with default settings, it prints 3."
      },
      "clarification": {
        "de": "n.txt existiert vorher nicht. Der Zeilenumbruch \\n zählt als ein Zeichen im String.",
        "en": "n.txt does not exist beforehand. The newline \\n counts as one character in the string."
      },
      "code": "import os\nwith open(\"n.txt\", \"w\") as f:\n    f.write(\"A\\n\")\nprint(os.path.getsize(\"n.txt\"))",
      "answer": true,
      "explanation": {
        "de": "Im Textmodus wandelt Python unter Windows beim Schreiben jedes \\n in \\r\\n um, die Datei enthält also A, CR und LF: 3 Bytes. Unter Linux wären es 2 Bytes; im Binärmodus findet keine Umwandlung statt.",
        "en": "In text mode on Windows Python converts every \\n to \\r\\n when writing, so the file contains A, CR and LF: 3 bytes. On Linux it would be 2 bytes; in binary mode no conversion takes place."
      },
      "tip": {
        "de": "Wie wird ein Zeilenumbruch unter Windows in der Datei abgelegt?",
        "en": "How is a line break stored in the file on Windows?"
      }
    },
    {
      "id": "ch4-mc-207",
      "chapter": 4,
      "section": "4.4 Pickles",
      "source": {
        "document": "SOTE2 Skript (Softwareentwicklung 2)",
        "section": "4.4 Pickles"
      },
      "type": "mc",
      "difficulty": "easy",
      "question": {
        "de": "Wie nennt man das Wiederherstellen eines Python-Objekts aus einer Pickle-Datei?",
        "en": "What is restoring a Python object from a pickle file called?"
      },
      "clarification": null,
      "code": null,
      "options": [
        {
          "id": "a",
          "text": {
            "de": "Pickling",
            "en": "Pickling"
          }
        },
        {
          "id": "b",
          "text": {
            "de": "Unpickling",
            "en": "Unpickling"
          }
        },
        {
          "id": "c",
          "text": {
            "de": "Parsen von JSON",
            "en": "Parsing JSON"
          }
        },
        {
          "id": "d",
          "text": {
            "de": "Komprimieren",
            "en": "Compressing"
          }
        }
      ],
      "answer": "b",
      "explanation": {
        "de": "Das Laden mit pickle.load() heißt Unpickling; es stellt das ursprüngliche Objekt aus dem Byte-Stream wieder her. Pickling ist die Gegenrichtung, also das Speichern mit pickle.dump().",
        "en": "Loading with pickle.load() is called unpickling; it restores the original object from the byte stream. Pickling is the opposite direction, i.e. saving with pickle.dump()."
      },
      "tip": {
        "de": "Die Gegenrichtung zu Pickling.",
        "en": "The opposite direction of pickling."
      }
    },
    {
      "id": "ch4-tf-205",
      "chapter": 4,
      "section": "4.4 Pickles",
      "source": {
        "document": "SOTE2 Skript (Softwareentwicklung 2)",
        "section": "4.4 Pickles"
      },
      "type": "tf",
      "difficulty": "medium",
      "question": {
        "de": "Wahr oder falsch: Der Code löst beim zweiten pickle.load einen Fehler aus, weil eine Pickle-Datei nur ein einziges Objekt enthalten darf.",
        "en": "True or false: The code raises an error at the second pickle.load because a pickle file may contain only a single object."
      },
      "clarification": {
        "de": "Die Datei p.pkl existiert vorher nicht.",
        "en": "The file p.pkl does not exist beforehand."
      },
      "code": "import pickle\nwith open(\"p.pkl\", \"wb\") as f:\n    pickle.dump(1, f)\n    pickle.dump(\"a\", f)\nwith open(\"p.pkl\", \"rb\") as f:\n    x = pickle.load(f)\n    y = pickle.load(f)\nprint(x, y)",
      "answer": false,
      "explanation": {
        "de": "Mehrere dump-Aufrufe hängen die Objekte hintereinander in dieselbe Datei; mehrere load-Aufrufe lesen sie in derselben Reihenfolge wieder aus. Der Code gibt daher 1 a aus.",
        "en": "Several dump calls store the objects one after another in the same file; several load calls read them back in the same order. The code therefore prints 1 a."
      },
      "tip": {
        "de": "Wo steht der Dateizeiger nach dem ersten load?",
        "en": "Where is the file pointer after the first load?"
      }
    },
    {
      "id": "ch4-fib-203",
      "chapter": 4,
      "section": "4.4 Pickles",
      "source": {
        "document": "SOTE2 Skript (Softwareentwicklung 2)",
        "section": "4.4 Pickles"
      },
      "type": "fib",
      "difficulty": "easy",
      "question": {
        "de": "Ergänze Anweisung und Modus, damit die Liste per pickle gespeichert werden kann.",
        "en": "Fill in the statement and mode so that the list can be saved with pickle."
      },
      "clarification": null,
      "code": "____ pickle\nwith open(\"d.pkl\", \"____\") as f:\n    pickle.dump([1, 2], f)",
      "answer": null,
      "blanks": [
        {
          "accepted": [
            "import"
          ],
          "caseSensitive": true
        },
        {
          "accepted": [
            "wb",
            "\"wb\"",
            "'wb'",
            "bw"
          ],
          "caseSensitive": true
        }
      ],
      "explanation": {
        "de": "Das Modul pickle muss zuerst importiert werden. Zum Schreiben der Bytes wird die Datei im Binärmodus mit wb geöffnet.",
        "en": "The module pickle must be imported first. To write the bytes the file is opened in binary mode with wb."
      },
      "tip": {
        "de": "Modul laden, dann Schreiben plus binär.",
        "en": "Load the module, then writing plus binary."
      }
    },
    {
      "id": "ch4-mc-208",
      "chapter": 4,
      "section": "4.4 Pickles",
      "source": {
        "document": "SOTE2 Skript (Softwareentwicklung 2)",
        "section": "4.4 Pickles"
      },
      "type": "mc",
      "difficulty": "medium",
      "question": {
        "de": "Ein Python-Skript soll verschachtelte Daten (Listen und Dictionaries mit Strings und Zahlen) speichern, die auch ein JavaScript-Programm lesen muss. Welches Format ist am besten geeignet?",
        "en": "A Python script is to store nested data (lists and dictionaries with strings and numbers) that a JavaScript program must also read. Which format is best suited?"
      },
      "clarification": null,
      "code": null,
      "options": [
        {
          "id": "a",
          "text": {
            "de": "Pickle",
            "en": "Pickle"
          }
        },
        {
          "id": "b",
          "text": {
            "de": "JSON",
            "en": "JSON"
          }
        },
        {
          "id": "c",
          "text": {
            "de": "Eine mit \"wb\" geschriebene Binärdatei mit eigenem Format nur für Python",
            "en": "A binary file written with \"wb\" in a custom Python-only format"
          }
        },
        {
          "id": "d",
          "text": {
            "de": "Eine .exe-Datei",
            "en": "An .exe file"
          }
        }
      ],
      "answer": "b",
      "explanation": {
        "de": "JSON ist ein sprachunabhängiges Textformat und für den Datenaustausch zwischen Programmiersprachen geeignet. Pickle ist Python-spezifisch und deshalb für andere Sprachen ungeeignet; eine eigene Python-Binärdatei oder eine .exe-Datei ist ebenso wenig austauschbar.",
        "en": "JSON is a language-independent text format suited for exchanging data between programming languages. Pickle is Python-specific and therefore unsuitable for other languages; a custom Python binary file or an .exe file is not interchangeable either."
      },
      "tip": {
        "de": "Welches Format verstehen mehrere Programmiersprachen?",
        "en": "Which format do several programming languages understand?"
      }
    },
    {
      "id": "ch4-mc-209",
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
        "de": "Die Datei k.pkl existiert vorher nicht.",
        "en": "The file k.pkl does not exist beforehand."
      },
      "code": "import pickle\ndata = {\"t\": (1, 2), \"s\": {3}}\nwith open(\"k.pkl\", \"wb\") as f:\n    pickle.dump(data, f)\nwith open(\"k.pkl\", \"rb\") as f:\n    back = pickle.load(f)\nprint(type(back[\"t\"]).__name__, type(back[\"s\"]).__name__)",
      "options": [
        {
          "id": "a",
          "text": {
            "de": "list list",
            "en": "list list"
          }
        },
        {
          "id": "b",
          "text": {
            "de": "tuple set",
            "en": "tuple set"
          }
        },
        {
          "id": "c",
          "text": {
            "de": "tuple list",
            "en": "tuple list"
          }
        },
        {
          "id": "d",
          "text": {
            "de": "list set",
            "en": "list set"
          }
        }
      ],
      "answer": "b",
      "explanation": {
        "de": "Pickle stellt Python-Objekte samt ihrem Typ wieder her, ein Tupel bleibt also ein tuple und eine Menge ein set. Bei JSON würde das Tupel dagegen zur Liste, und Mengen ließen sich gar nicht direkt serialisieren.",
        "en": "Pickle restores Python objects including their type, so a tuple remains a tuple and a set remains a set. With JSON the tuple would become a list instead, and sets could not be serialized directly at all."
      },
      "tip": {
        "de": "Bleiben die Python-Typen beim Roundtrip erhalten?",
        "en": "Are the Python types preserved in the round trip?"
      }
    },
    {
      "id": "ch4-ms-203",
      "chapter": 4,
      "section": "4.4 Pickles",
      "source": {
        "document": "SOTE2 Skript (Softwareentwicklung 2)",
        "section": "4.4 Pickles"
      },
      "type": "ms",
      "difficulty": "hard",
      "question": {
        "de": "Welche drei Aussagen über den Vergleich von pickle und JSON sind richtig? Wähle genau 3 aus.",
        "en": "Which three statements about comparing pickle and JSON are correct? Select exactly 3."
      },
      "clarification": null,
      "code": null,
      "options": [
        {
          "id": "a",
          "text": {
            "de": "Ein Tupel bleibt nach einem pickle-Roundtrip ein Tupel.",
            "en": "A tuple remains a tuple after a pickle round trip."
          }
        },
        {
          "id": "b",
          "text": {
            "de": "Nach json.dump und json.load ist aus einem Tupel eine Liste geworden.",
            "en": "After json.dump and json.load a tuple has become a list."
          }
        },
        {
          "id": "c",
          "text": {
            "de": "JSON-Dateien sind Textdateien, Pickle-Dateien sind Binärdateien.",
            "en": "JSON files are text files, pickle files are binary files."
          }
        },
        {
          "id": "d",
          "text": {
            "de": "Pickle-Dateien lassen sich ohne Weiteres von Java-Programmen lesen.",
            "en": "Pickle files can be read by Java programs without further ado."
          }
        },
        {
          "id": "e",
          "text": {
            "de": "Eine Pickle-Datei aus unbekannter Quelle kann bedenkenlos geladen werden.",
            "en": "A pickle file from an unknown source can be loaded without concern."
          }
        }
      ],
      "answer": [
        "a",
        "b",
        "c"
      ],
      "explanation": {
        "de": "Pickle erhält Python-Typen, ist aber binär und Python-spezifisch; JSON ist ein lesbares Textformat, kennt jedoch keine Tupel und liefert beim Laden Listen. Pickle ist weder für Java gedacht noch für unbekannte Quellen sicher, da beim Laden Code ausgeführt werden kann.",
        "en": "Pickle preserves Python types but is binary and Python-specific; JSON is a readable text format but has no tuples and returns lists when loading. Pickle is neither meant for Java nor safe for unknown sources, since code can be executed when loading."
      },
      "tip": {
        "de": "Denke an Typtreue, Dateiart und Austauschbarkeit.",
        "en": "Think about type fidelity, file kind and interchangeability."
      }
    },
    {
      "id": "ch4-tf-206",
      "chapter": 4,
      "section": "4.4 Pickles",
      "source": {
        "document": "SOTE2 Skript (Softwareentwicklung 2)",
        "section": "4.4 Pickles"
      },
      "type": "tf",
      "difficulty": "hard",
      "question": {
        "de": "Wahr oder falsch: Der Code löst einen EOFError aus.",
        "en": "True or false: The code raises an EOFError."
      },
      "clarification": {
        "de": "Die Datei e.pkl existiert vorher nicht. open(...).close() legt sie an und schließt sie sofort.",
        "en": "The file e.pkl does not exist beforehand. open(...).close() creates it and closes it immediately."
      },
      "code": "import pickle\nopen(\"e.pkl\", \"wb\").close()\nwith open(\"e.pkl\", \"rb\") as f:\n    obj = pickle.load(f)",
      "answer": true,
      "explanation": {
        "de": "Die Datei ist leer, daher findet pickle.load keine Daten mehr und löst einen EOFError aus. Das ist derselbe Fehler, den man nutzen kann, um das Ende mehrerer hintereinander gespeicherter Objekte zu erkennen.",
        "en": "The file is empty, so pickle.load finds no data and raises an EOFError. This is the same error that can be used to detect the end of several objects stored one after another."
      },
      "tip": {
        "de": "Was liest load aus einer leeren Datei?",
        "en": "What does load read from an empty file?"
      }
    },
    {
      "id": "ch4-fe-201",
      "chapter": 4,
      "section": "4.4 Pickles",
      "source": {
        "document": "SOTE2 Skript (Softwareentwicklung 2)",
        "section": "4.4 Pickles"
      },
      "type": "fe",
      "difficulty": "medium",
      "question": {
        "de": "Welche Zeile verhindert, dass settings korrekt gespeichert wird?",
        "en": "Which line prevents settings from being saved correctly?"
      },
      "clarification": {
        "de": "Das Dictionary soll in die Datei s.pkl gespeichert werden.",
        "en": "The dictionary is supposed to be saved to the file s.pkl."
      },
      "code": "1 import pickle\n2 settings = {\"theme\": \"dark\"}\n3 with open(\"s.pkl\", \"wb\") as f:\n4     pickle.dump(f, settings)\n5 print(\"saved\")",
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
            "de": "Zeile 3: Der Modus wb ist falsch, es müsste w sein.",
            "en": "Line 3: The mode wb is wrong, it should be w."
          }
        },
        {
          "id": "c",
          "text": {
            "de": "Zeile 4: Die Argumente von pickle.dump stehen in der falschen Reihenfolge.",
            "en": "Line 4: The arguments of pickle.dump are in the wrong order."
          }
        },
        {
          "id": "d",
          "text": {
            "de": "Zeile 2: Ein Dictionary lässt sich nicht picklen.",
            "en": "Line 2: A dictionary cannot be pickled."
          }
        },
        {
          "id": "e",
          "text": {
            "de": "Zeile 5: print darf nicht nach dem with-Block stehen.",
            "en": "Line 5: print must not come after the with block."
          }
        }
      ],
      "answer": "c",
      "explanation": {
        "de": "pickle.dump erwartet zuerst das Objekt und danach die Datei. Mit vertauschten Argumenten wird das Dictionary als Datei behandelt, und es entsteht ein TypeError. Der Modus wb ist für Pickle gerade richtig, und Import und Dictionary sind in Ordnung.",
        "en": "pickle.dump expects the object first and the file second. With swapped arguments the dictionary is treated as a file and a TypeError results. The mode wb is exactly right for pickle, and the import and dictionary are fine."
      },
      "tip": {
        "de": "Vergleiche die Reihenfolge der Argumente mit pickle.dump(obj, f).",
        "en": "Compare the order of the arguments with pickle.dump(obj, f)."
      }
    },
    {
      "id": "ch4-mc-210",
      "chapter": 4,
      "section": "4.4 Pickles",
      "source": {
        "document": "SOTE2 Skript (Softwareentwicklung 2)",
        "section": "4.4 Pickles"
      },
      "type": "mc",
      "difficulty": "ultra",
      "question": {
        "de": "Was passiert beim Ausführen des Codes?",
        "en": "What happens when the code is run?"
      },
      "clarification": null,
      "code": "import pickle\nlog = open(\"log.txt\", \"w\")\nstate = {\"name\": \"app\", \"handle\": log}\nwith open(\"state.pkl\", \"wb\") as f:\n    pickle.dump(state, f)\nprint(\"done\")",
      "options": [
        {
          "id": "a",
          "text": {
            "de": "Ein TypeError wird ausgelöst, done wird nicht ausgegeben.",
            "en": "A TypeError is raised, done is not printed."
          }
        },
        {
          "id": "b",
          "text": {
            "de": "done wird ausgegeben; die offene Datei wird mitgespeichert.",
            "en": "done is printed; the open file is saved along with it."
          }
        },
        {
          "id": "c",
          "text": {
            "de": "done wird ausgegeben; handle wird als None gespeichert.",
            "en": "done is printed; handle is saved as None."
          }
        },
        {
          "id": "d",
          "text": {
            "de": "Ein FileNotFoundError wird ausgelöst, weil log.txt fehlt.",
            "en": "A FileNotFoundError is raised because log.txt is missing."
          }
        }
      ],
      "answer": "a",
      "explanation": {
        "de": "Ein offenes Dateiobjekt lässt sich nicht serialisieren, daher scheitert pickle.dump mit einem TypeError, bevor print ausgeführt wird. Pickle ersetzt solche Objekte nicht durch None, und log.txt wird durch den Modus w angelegt, sodass kein FileNotFoundError entsteht.",
        "en": "An open file object cannot be serialized, so pickle.dump fails with a TypeError before print is executed. Pickle does not replace such objects with None, and log.txt is created by mode w, so no FileNotFoundError occurs."
      },
      "tip": {
        "de": "Nicht jedes Python-Objekt lässt sich in Bytes umwandeln.",
        "en": "Not every Python object can be converted to bytes."
      }
    },
    {
      "id": "ch4-fib-204",
      "chapter": 4,
      "section": "4.4 Pickles",
      "source": {
        "document": "SOTE2 Skript (Softwareentwicklung 2)",
        "section": "4.4 Pickles"
      },
      "type": "fib",
      "difficulty": "hard",
      "question": {
        "de": "Ergänze den Fehlertyp, mit dem die Schleife endet, sobald keine weiteren Objekte in der Pickle-Datei stehen.",
        "en": "Fill in the error type that ends the loop as soon as no more objects remain in the pickle file."
      },
      "clarification": {
        "de": "Es wird der Name der Exception-Klasse gesucht.",
        "en": "The name of the exception class is expected."
      },
      "code": "import pickle\nitems = []\nwith open(\"p.pkl\", \"rb\") as f:\n    while True:\n        try:\n            items.append(pickle.load(f))\n        except ____:\n            break",
      "answer": null,
      "blanks": [
        {
          "accepted": [
            "EOFError"
          ],
          "caseSensitive": true
        }
      ],
      "explanation": {
        "de": "Wenn pickle.load am Dateiende nichts mehr lesen kann, wird ein EOFError (end of file) ausgelöst. Er wird hier abgefangen, um die Schleife zu beenden.",
        "en": "When pickle.load cannot read anything at the end of the file, an EOFError (end of file) is raised. It is caught here to end the loop."
      },
      "tip": {
        "de": "Die Abkürzung steht für end of file.",
        "en": "The abbreviation stands for end of file."
      }
    },
    {
      "id": "ch4-mc-211",
      "chapter": 4,
      "section": "4.5 Das Modul os",
      "source": {
        "document": "SOTE2 Skript (Softwareentwicklung 2)",
        "section": "4.5 Das Modul os / Labor 4 (Dateien und Datensätze)"
      },
      "type": "mc",
      "difficulty": "easy",
      "question": {
        "de": "Welche Funktion wechselt das aktuelle Arbeitsverzeichnis?",
        "en": "Which function changes the current working directory?"
      },
      "clarification": null,
      "code": null,
      "options": [
        {
          "id": "a",
          "text": {
            "de": "os.cd(path)",
            "en": "os.cd(path)"
          }
        },
        {
          "id": "b",
          "text": {
            "de": "os.setcwd(path)",
            "en": "os.setcwd(path)"
          }
        },
        {
          "id": "c",
          "text": {
            "de": "os.chdir(path)",
            "en": "os.chdir(path)"
          }
        },
        {
          "id": "d",
          "text": {
            "de": "os.listdir(path)",
            "en": "os.listdir(path)"
          }
        }
      ],
      "answer": "c",
      "explanation": {
        "de": "os.chdir(path) (change directory) setzt das Arbeitsverzeichnis neu; relative Pfade beziehen sich danach darauf. os.cd und os.setcwd gibt es nicht, und listdir wechselt nichts, sondern listet nur Einträge auf.",
        "en": "os.chdir(path) (change directory) sets a new working directory; relative paths refer to it afterwards. os.cd and os.setcwd do not exist, and listdir changes nothing but only lists entries."
      },
      "tip": {
        "de": "Der Name leitet sich von change directory ab.",
        "en": "The name derives from change directory."
      }
    },
    {
      "id": "ch4-fib-205",
      "chapter": 4,
      "section": "4.5 Das Modul os",
      "source": {
        "document": "SOTE2 Skript (Softwareentwicklung 2)",
        "section": "4.5 Das Modul os / Labor 4 (Dateien und Datensätze)"
      },
      "type": "fib",
      "difficulty": "easy",
      "question": {
        "de": "Ergänze die Funktion, die ein leeres Verzeichnis löscht.",
        "en": "Fill in the function that deletes an empty directory."
      },
      "clarification": {
        "de": "Das Verzeichnis empty_dir existiert und ist leer.",
        "en": "The directory empty_dir exists and is empty."
      },
      "code": "import os\nos.____(\"empty_dir\")",
      "answer": null,
      "blanks": [
        {
          "accepted": [
            "rmdir",
            "removedirs"
          ],
          "caseSensitive": true
        }
      ],
      "explanation": {
        "de": "os.rmdir entfernt ein leeres Verzeichnis (remove directory). Für Dateien ist stattdessen os.remove zuständig.",
        "en": "os.rmdir removes an empty directory (remove directory). For files os.remove is used instead."
      },
      "tip": {
        "de": "remove directory.",
        "en": "remove directory."
      }
    },
    {
      "id": "ch4-mc-212",
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
        "de": "Das Verzeichnis a existiert nicht.",
        "en": "The directory a does not exist."
      },
      "code": "import os\nos.mkdir(\"a/b\")",
      "options": [
        {
          "id": "a",
          "text": {
            "de": "Es werden a und darin b angelegt.",
            "en": "a and inside it b are created."
          }
        },
        {
          "id": "b",
          "text": {
            "de": "Es wird ein FileNotFoundError ausgelöst.",
            "en": "A FileNotFoundError is raised."
          }
        },
        {
          "id": "c",
          "text": {
            "de": "Es wird nur a angelegt.",
            "en": "Only a is created."
          }
        },
        {
          "id": "d",
          "text": {
            "de": "Es wird ein FileExistsError ausgelöst.",
            "en": "A FileExistsError is raised."
          }
        }
      ],
      "answer": "b",
      "explanation": {
        "de": "os.mkdir legt nur ein einzelnes Verzeichnis an und setzt voraus, dass das übergeordnete Verzeichnis bereits existiert; sonst entsteht ein FileNotFoundError. Zum Anlegen der ganzen Kette dient os.makedirs.",
        "en": "os.mkdir only creates a single directory and requires that the parent directory already exists; otherwise a FileNotFoundError occurs. os.makedirs is used to create the whole chain."
      },
      "tip": {
        "de": "Welche Voraussetzung hat mkdir für den übergeordneten Ordner?",
        "en": "What does mkdir require of the parent folder?"
      }
    },
    {
      "id": "ch4-mc-213",
      "chapter": 4,
      "section": "4.5 Das Modul os",
      "source": {
        "document": "SOTE2 Skript (Softwareentwicklung 2)",
        "section": "4.5 Das Modul os / Labor 4 (Dateien und Datensätze)"
      },
      "type": "mc",
      "difficulty": "medium",
      "question": {
        "de": "Was gibt der Code aus?",
        "en": "What does the code print?"
      },
      "clarification": {
        "de": "Das Verzeichnis out existiert vor dem Start nicht.",
        "en": "The directory out does not exist before the start."
      },
      "code": "import os\nos.makedirs(\"out/2026\", exist_ok=True)\nos.makedirs(\"out/2026\", exist_ok=True)\nprint(os.path.isdir(\"out/2026\"))",
      "options": [
        {
          "id": "a",
          "text": {
            "de": "FileExistsError beim zweiten Aufruf",
            "en": "FileExistsError at the second call"
          }
        },
        {
          "id": "b",
          "text": {
            "de": "True",
            "en": "True"
          }
        },
        {
          "id": "c",
          "text": {
            "de": "False",
            "en": "False"
          }
        },
        {
          "id": "d",
          "text": {
            "de": "FileNotFoundError, weil out fehlt",
            "en": "FileNotFoundError because out is missing"
          }
        }
      ],
      "answer": "b",
      "explanation": {
        "de": "os.makedirs legt auch fehlende Zwischenverzeichnisse an, und exist_ok=True unterdrückt den Fehler, wenn das Zielverzeichnis schon existiert. Beide Aufrufe laufen daher durch, und isdir liefert True.",
        "en": "os.makedirs also creates missing intermediate directories, and exist_ok=True suppresses the error if the target directory already exists. Both calls therefore run through, and isdir returns True."
      },
      "tip": {
        "de": "Was bewirkt exist_ok=True beim zweiten Aufruf?",
        "en": "What does exist_ok=True do at the second call?"
      }
    },
    {
      "id": "ch4-tf-207",
      "chapter": 4,
      "section": "4.5 Das Modul os",
      "source": {
        "document": "SOTE2 Skript (Softwareentwicklung 2)",
        "section": "4.5 Das Modul os / Labor 4 (Dateien und Datensätze)"
      },
      "type": "tf",
      "difficulty": "medium",
      "question": {
        "de": "Wahr oder falsch: os.listdir liefert die Namen stets in alphabetischer Reihenfolge.",
        "en": "True or false: os.listdir always returns the names in alphabetical order."
      },
      "clarification": null,
      "code": "import os\nnames = os.listdir(\".\")",
      "answer": false,
      "explanation": {
        "de": "Die Reihenfolge der Einträge ist beliebig und vom System abhängig. Wer eine feste Reihenfolge braucht, sortiert das Ergebnis selbst, z.B. mit sorted(os.listdir(...)).",
        "en": "The order of the entries is arbitrary and system-dependent. Anyone who needs a fixed order sorts the result themselves, e.g. with sorted(os.listdir(...))."
      },
      "tip": {
        "de": "Die Dokumentation von listdir verspricht keine Sortierung.",
        "en": "The documentation of listdir does not promise any sorting."
      }
    },
    {
      "id": "ch4-mc-214",
      "chapter": 4,
      "section": "4.5 Das Modul os",
      "source": {
        "document": "SOTE2 Skript (Softwareentwicklung 2)",
        "section": "4.5 Das Modul os / Labor 4 (Dateien und Datensätze)"
      },
      "type": "mc",
      "difficulty": "hard",
      "question": {
        "de": "Was gibt der Code aus?",
        "en": "What does the code print?"
      },
      "clarification": null,
      "code": "import os\nprint(os.path.join(\"data\", \"/tmp/x.txt\"))",
      "options": [
        {
          "id": "a",
          "text": {
            "de": "data/tmp/x.txt",
            "en": "data/tmp/x.txt"
          }
        },
        {
          "id": "b",
          "text": {
            "de": "data//tmp/x.txt",
            "en": "data//tmp/x.txt"
          }
        },
        {
          "id": "c",
          "text": {
            "de": "/tmp/x.txt",
            "en": "/tmp/x.txt"
          }
        },
        {
          "id": "d",
          "text": {
            "de": "data/x.txt",
            "en": "data/x.txt"
          }
        }
      ],
      "answer": "c",
      "explanation": {
        "de": "Ist ein späterer Teil von os.path.join ein absoluter Pfad, werden alle vorherigen Teile verworfen. Das Ergebnis ist deshalb /tmp/x.txt; es wird nichts zusammengeklebt und auch kein Teil gekürzt.",
        "en": "If a later part of os.path.join is an absolute path, all previous parts are discarded. The result is therefore /tmp/x.txt; nothing is glued together and no part is shortened."
      },
      "tip": {
        "de": "Was macht join, wenn ein Argument mit dem Wurzelverzeichnis beginnt?",
        "en": "What does join do when an argument starts with the root directory?"
      }
    },
    {
      "id": "ch4-fib-206",
      "chapter": 4,
      "section": "4.5 Das Modul os",
      "source": {
        "document": "SOTE2 Skript (Softwareentwicklung 2)",
        "section": "4.5 Das Modul os / Labor 4 (Dateien und Datensätze)"
      },
      "type": "fib",
      "difficulty": "medium",
      "question": {
        "de": "Ergänze die Funktion aus os.path, die einen Dateinamen in Name und Endung aufteilt.",
        "en": "Fill in the os.path function that splits a file name into name and extension."
      },
      "clarification": {
        "de": "ext soll den Wert \".txt\" erhalten.",
        "en": "ext is supposed to receive the value \".txt\"."
      },
      "code": "import os\nroot, ext = os.path.____(\"report.txt\")\nprint(ext)",
      "answer": null,
      "blanks": [
        {
          "accepted": [
            "splitext"
          ],
          "caseSensitive": true
        }
      ],
      "explanation": {
        "de": "os.path.splitext teilt den Pfad am letzten Punkt in ein Tupel aus Wurzel und Endung, hier (\"report\", \".txt\"). Das Tupel wird auf root und ext entpackt.",
        "en": "os.path.splitext splits the path at the last dot into a tuple of root and extension, here (\"report\", \".txt\"). The tuple is unpacked into root and ext."
      },
      "tip": {
        "de": "split + extension.",
        "en": "split + extension."
      }
    },
    {
      "id": "ch4-mc-215",
      "chapter": 4,
      "section": "4.5 Das Modul os",
      "source": {
        "document": "SOTE2 Skript (Softwareentwicklung 2)",
        "section": "4.5 Das Modul os / Labor 4 (Dateien und Datensätze)"
      },
      "type": "mc",
      "difficulty": "hard",
      "question": {
        "de": "Was gibt der Code aus?",
        "en": "What does the code print?"
      },
      "clarification": null,
      "code": "import os\nprint(os.path.splitext(\"archive.tar.gz\"))",
      "options": [
        {
          "id": "a",
          "text": {
            "de": "('archive', '.tar.gz')",
            "en": "('archive', '.tar.gz')"
          }
        },
        {
          "id": "b",
          "text": {
            "de": "('archive.tar', '.gz')",
            "en": "('archive.tar', '.gz')"
          }
        },
        {
          "id": "c",
          "text": {
            "de": "('archive.tar.gz', '')",
            "en": "('archive.tar.gz', '')"
          }
        },
        {
          "id": "d",
          "text": {
            "de": "('archive', '.tar')",
            "en": "('archive', '.tar')"
          }
        }
      ],
      "answer": "b",
      "explanation": {
        "de": "splitext trennt nur die letzte Endung ab, hier .gz; der Rest archive.tar bleibt als Name stehen. Mehrfachendungen wie .tar.gz werden also nicht als Einheit behandelt.",
        "en": "splitext only splits off the last extension, here .gz; the rest archive.tar remains as the name. Multiple extensions such as .tar.gz are therefore not treated as a unit."
      },
      "tip": {
        "de": "An welchem Punkt wird getrennt?",
        "en": "At which dot is the split made?"
      }
    },
    {
      "id": "ch4-ms-204",
      "chapter": 4,
      "section": "4.5 Das Modul os",
      "source": {
        "document": "SOTE2 Skript (Softwareentwicklung 2)",
        "section": "4.5 Das Modul os / Labor 4 (Dateien und Datensätze)"
      },
      "type": "ms",
      "difficulty": "medium",
      "question": {
        "de": "Welche drei Aussagen über Funktionen aus os.path sind richtig? Wähle genau 3 aus.",
        "en": "Which three statements about functions from os.path are correct? Select exactly 3."
      },
      "clarification": null,
      "code": null,
      "options": [
        {
          "id": "a",
          "text": {
            "de": "os.path.isdir(p) ist True, wenn p ein existierendes Verzeichnis ist.",
            "en": "os.path.isdir(p) is True if p is an existing directory."
          }
        },
        {
          "id": "b",
          "text": {
            "de": "os.path.isfile(p) ist True, wenn p eine existierende Datei ist.",
            "en": "os.path.isfile(p) is True if p is an existing file."
          }
        },
        {
          "id": "c",
          "text": {
            "de": "os.path.getsize(p) liefert die Dateigröße in Bytes.",
            "en": "os.path.getsize(p) returns the file size in bytes."
          }
        },
        {
          "id": "d",
          "text": {
            "de": "os.path.getsize(p) liefert die Anzahl der Zeilen der Datei.",
            "en": "os.path.getsize(p) returns the number of lines of the file."
          }
        },
        {
          "id": "e",
          "text": {
            "de": "os.path.exists(p) ist für Verzeichnisse immer False.",
            "en": "os.path.exists(p) is always False for directories."
          }
        }
      ],
      "answer": [
        "a",
        "b",
        "c"
      ],
      "explanation": {
        "de": "isdir und isfile unterscheiden Verzeichnisse und Dateien, getsize liefert die Größe in Bytes. Zeilen zählt getsize nicht, und exists ist auch für Verzeichnisse True, wenn sie vorhanden sind.",
        "en": "isdir and isfile distinguish directories from files, and getsize returns the size in bytes. getsize does not count lines, and exists is also True for directories if they are present."
      },
      "tip": {
        "de": "Worin unterscheiden sich exists, isfile und isdir?",
        "en": "How do exists, isfile and isdir differ?"
      }
    },
    {
      "id": "ch4-fe-202",
      "chapter": 4,
      "section": "4.5 Das Modul os",
      "source": {
        "document": "SOTE2 Skript (Softwareentwicklung 2)",
        "section": "4.5 Das Modul os / Labor 4 (Dateien und Datensätze)"
      },
      "type": "fe",
      "difficulty": "hard",
      "question": {
        "de": "Das Skript soll a.txt in das neue Verzeichnis backup verschieben, bricht aber mit einem Fehler ab. Welche Zeile enthält die Ursache?",
        "en": "The script is supposed to move a.txt into the new directory backup, but it aborts with an error. Which line contains the cause?"
      },
      "clarification": {
        "de": "a.txt liegt im Arbeitsverzeichnis, backup existiert vorher nicht.",
        "en": "a.txt is located in the working directory, backup does not exist beforehand."
      },
      "code": "1 import os\n2 os.mkdir(\"backup\")\n3 os.rename(\"a.txt\", \"backup\")\n4 print(os.listdir(\"backup\"))",
      "options": [
        {
          "id": "a",
          "text": {
            "de": "Zeile 2: mkdir darf nur für vorhandene Verzeichnisse verwendet werden.",
            "en": "Line 2: mkdir may only be used for existing directories."
          }
        },
        {
          "id": "b",
          "text": {
            "de": "Zeile 3: Als Ziel fehlt der Dateiname, z.B. os.path.join(\"backup\", \"a.txt\").",
            "en": "Line 3: The target lacks the file name, e.g. os.path.join(\"backup\", \"a.txt\")."
          }
        },
        {
          "id": "c",
          "text": {
            "de": "Zeile 4: listdir kann nur das Arbeitsverzeichnis auflisten.",
            "en": "Line 4: listdir can only list the working directory."
          }
        },
        {
          "id": "d",
          "text": {
            "de": "Zeile 1: os muss mit from os import * importiert werden.",
            "en": "Line 1: os must be imported with from os import *."
          }
        }
      ],
      "answer": "b",
      "explanation": {
        "de": "os.rename erwartet als Ziel den vollständigen neuen Pfad der Datei, nicht nur das Zielverzeichnis. Da backup schon existiert, scheitert das Umbenennen auf diesen Namen mit einem Fehler. mkdir, listdir und der Import sind korrekt verwendet.",
        "en": "os.rename expects the complete new path of the file as the target, not just the target directory. Since backup already exists, renaming to that name fails with an error. mkdir, listdir and the import are used correctly."
      },
      "tip": {
        "de": "Was muss der zweite Parameter von rename enthalten?",
        "en": "What must the second parameter of rename contain?"
      }
    },
    {
      "id": "ch4-mc-216",
      "chapter": 4,
      "section": "4.5 Das Modul os",
      "source": {
        "document": "SOTE2 Skript (Softwareentwicklung 2)",
        "section": "4.5 Das Modul os / Labor 4 (Dateien und Datensätze)"
      },
      "type": "mc",
      "difficulty": "ultra",
      "question": {
        "de": "Das Verzeichnis sub existiert vor dem Start nicht. Was gibt der Code aus?",
        "en": "The directory sub does not exist before the start. What does the code print?"
      },
      "clarification": null,
      "code": "import os\nos.mkdir(\"sub\")\nos.chdir(\"sub\")\nwith open(\"n.txt\", \"w\") as f:\n    f.write(\"x\")\nprint(os.path.exists(\"n.txt\"), os.path.exists(\"sub/n.txt\"))",
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
      "answer": "c",
      "explanation": {
        "de": "Nach os.chdir(\"sub\") beziehen sich relative Pfade auf sub, daher liegt n.txt dort und exists(\"n.txt\") ist True. Der Pfad sub/n.txt würde nun als sub/sub/n.txt gedeutet, den es nicht gibt, also False.",
        "en": "After os.chdir(\"sub\") relative paths refer to sub, so n.txt is located there and exists(\"n.txt\") is True. The path sub/n.txt would now be interpreted as sub/sub/n.txt, which does not exist, hence False."
      },
      "tip": {
        "de": "Wovon hängen relative Pfade ab, und was hat chdir geändert?",
        "en": "What do relative paths depend on, and what did chdir change?"
      }
    },
    {
      "id": "ch4-tf-208",
      "chapter": 4,
      "section": "4.5 Das Modul os",
      "source": {
        "document": "SOTE2 Skript (Softwareentwicklung 2)",
        "section": "4.5 Das Modul os / Labor 4 (Dateien und Datensätze)"
      },
      "type": "tf",
      "difficulty": "easy",
      "question": {
        "de": "Wahr oder falsch: os.listdir() ohne Argument listet die Einträge des aktuellen Arbeitsverzeichnisses auf.",
        "en": "True or false: os.listdir() without an argument lists the entries of the current working directory."
      },
      "clarification": null,
      "code": "import os\nprint(os.listdir())",
      "answer": true,
      "explanation": {
        "de": "Ohne Pfadangabe verwendet listdir den Standardwert \".\", also das aktuelle Arbeitsverzeichnis. Das Ergebnis ist eine Liste mit Namen.",
        "en": "Without a path argument listdir uses the default \".\", i.e. the current working directory. The result is a list of names."
      },
      "tip": {
        "de": "Welcher Standardpfad gilt ohne Argument?",
        "en": "Which default path applies without an argument?"
      }
    },
    {
      "id": "ch4-mc-217",
      "chapter": 4,
      "section": "4.6 Syntax und Befehle für Dateien",
      "source": {
        "document": "SOTE2 Skript (Softwareentwicklung 2)",
        "section": "4.6 Syntax und Befehle für Dateien / Labor 4 (Dateien und Datensätze)"
      },
      "type": "mc",
      "difficulty": "medium",
      "question": {
        "de": "Wie verarbeitet man eine sehr große Textdatei zeilenweise, ohne sie komplett in den Speicher zu laden?",
        "en": "How do you process a very large text file line by line without loading it completely into memory?"
      },
      "clarification": null,
      "code": null,
      "options": [
        {
          "id": "a",
          "text": {
            "de": "Mit for line in f: innerhalb von with open(...) as f",
            "en": "With for line in f: inside with open(...) as f"
          }
        },
        {
          "id": "b",
          "text": {
            "de": "Mit lines = f.readlines() und anschließender Schleife über lines",
            "en": "With lines = f.readlines() followed by a loop over lines"
          }
        },
        {
          "id": "c",
          "text": {
            "de": "Mit text = f.read() und anschließendem text.split(\"\\n\")",
            "en": "With text = f.read() followed by text.split(\"\\n\")"
          }
        },
        {
          "id": "d",
          "text": {
            "de": "Mit f.seek(0) vor jeder einzelnen Zeile",
            "en": "With f.seek(0) before every single line"
          }
        }
      ],
      "answer": "a",
      "explanation": {
        "de": "Die Iteration über das Dateiobjekt liefert jeweils eine Zeile und hält nicht die ganze Datei im Speicher. readlines() und read() laden dagegen alles auf einmal, und seek(0) springt nur an den Dateianfang zurück.",
        "en": "Iterating over the file object yields one line at a time and does not keep the whole file in memory. readlines() and read(), by contrast, load everything at once, and seek(0) merely jumps back to the start of the file."
      },
      "tip": {
        "de": "Welche Variante liest immer nur eine Zeile?",
        "en": "Which variant reads only one line at a time?"
      }
    },
    {
      "id": "ch4-mc-218",
      "chapter": 4,
      "section": "4.6 Syntax und Befehle für Dateien",
      "source": {
        "document": "SOTE2 Skript (Softwareentwicklung 2)",
        "section": "4.6 Syntax und Befehle für Dateien / Labor 4 (Dateien und Datensätze)"
      },
      "type": "mc",
      "difficulty": "easy",
      "question": {
        "de": "Was passiert, wenn man eine nicht vorhandene Datei mit open(\"new.txt\", \"a\") öffnet?",
        "en": "What happens if you open a non-existent file with open(\"new.txt\", \"a\")?"
      },
      "clarification": null,
      "code": null,
      "options": [
        {
          "id": "a",
          "text": {
            "de": "Es wird ein FileNotFoundError ausgelöst.",
            "en": "A FileNotFoundError is raised."
          }
        },
        {
          "id": "b",
          "text": {
            "de": "Die Datei wird neu angelegt, und es kann angehängt werden.",
            "en": "The file is created and appending is possible."
          }
        },
        {
          "id": "c",
          "text": {
            "de": "Python öffnet die Datei nur zum Lesen.",
            "en": "Python opens the file for reading only."
          }
        },
        {
          "id": "d",
          "text": {
            "de": "Es wird ein FileExistsError ausgelöst.",
            "en": "A FileExistsError is raised."
          }
        }
      ],
      "answer": "b",
      "explanation": {
        "de": "Der Modus a legt die Datei an, falls sie nicht existiert, und schreibt sonst am Ende weiter. Einen FileNotFoundError gäbe es im Lesemodus r, einen FileExistsError im Modus x bei vorhandener Datei.",
        "en": "Mode a creates the file if it does not exist and otherwise continues writing at the end. A FileNotFoundError would occur in read mode r, a FileExistsError in mode x if the file exists."
      },
      "tip": {
        "de": "Vergleiche das Verhalten von a mit dem von r.",
        "en": "Compare the behavior of a with that of r."
      }
    },
    {
      "id": "ch4-mc-219",
      "chapter": 4,
      "section": "4.6 Syntax und Befehle für Dateien",
      "source": {
        "document": "SOTE2 Skript (Softwareentwicklung 2)",
        "section": "4.6 Syntax und Befehle für Dateien / Labor 4 (Dateien und Datensätze)"
      },
      "type": "mc",
      "difficulty": "medium",
      "question": {
        "de": "Was bewirkt der Modus \"x\" in open(\"report.txt\", \"x\")?",
        "en": "What does mode \"x\" do in open(\"report.txt\", \"x\")?"
      },
      "clarification": null,
      "code": null,
      "options": [
        {
          "id": "a",
          "text": {
            "de": "Die Datei wird zum Anhängen geöffnet.",
            "en": "The file is opened for appending."
          }
        },
        {
          "id": "b",
          "text": {
            "de": "Die Datei wird zum Schreiben neu angelegt; existiert sie schon, wird ein FileExistsError ausgelöst.",
            "en": "The file is newly created for writing; if it already exists, a FileExistsError is raised."
          }
        },
        {
          "id": "c",
          "text": {
            "de": "Die Datei wird exklusiv gelesen und danach gelöscht.",
            "en": "The file is read exclusively and then deleted."
          }
        },
        {
          "id": "d",
          "text": {
            "de": "Die Datei wird im Binärmodus gelesen.",
            "en": "The file is read in binary mode."
          }
        }
      ],
      "answer": "b",
      "explanation": {
        "de": "Der Modus x steht für exklusives Anlegen: Er schützt vorhandene Dateien vor dem Überschreiben, indem er einen FileExistsError auslöst. Anhängen ist a, Binärmodus wird mit b gekennzeichnet, und eine Datei wird dabei nicht gelöscht.",
        "en": "Mode x stands for exclusive creation: it protects existing files from being overwritten by raising a FileExistsError. Appending is a, binary mode is marked with b, and no file is deleted."
      },
      "tip": {
        "de": "Der Modus verhindert ein versehentliches Überschreiben.",
        "en": "The mode prevents accidental overwriting."
      }
    },
    {
      "id": "ch4-mc-220",
      "chapter": 4,
      "section": "4.6 Syntax und Befehle für Dateien",
      "source": {
        "document": "SOTE2 Skript (Softwareentwicklung 2)",
        "section": "4.6 Syntax und Befehle für Dateien / Labor 4 (Dateien und Datensätze)"
      },
      "type": "mc",
      "difficulty": "ultra",
      "question": {
        "de": "Was gibt der Code aus?",
        "en": "What does the code print?"
      },
      "clarification": null,
      "code": "with open(\"d.txt\", \"w\") as f:\n    f.write(\"1\\n2\\n3\")\nwith open(\"d.txt\") as f:\n    lines = f.readlines()\nprint(len(lines), repr(lines[-1]), len(lines[0]))",
      "options": [
        {
          "id": "a",
          "text": {
            "de": "3 '3' 2",
            "en": "3 '3' 2"
          }
        },
        {
          "id": "b",
          "text": {
            "de": "3 '3\\n' 2",
            "en": "3 '3\\n' 2"
          }
        },
        {
          "id": "c",
          "text": {
            "de": "3 '3' 1",
            "en": "3 '3' 1"
          }
        },
        {
          "id": "d",
          "text": {
            "de": "4 '' 2",
            "en": "4 '' 2"
          }
        }
      ],
      "answer": "a",
      "explanation": {
        "de": "Der Text hat nach der 3 keinen Zeilenumbruch, also gibt es drei Zeilen, und die letzte ist \"3\" ohne \\n. Die erste Zeile \"1\\n\" enthält den Umbruch und hat die Länge 2. Eine leere vierte Zeile entsteht nicht.",
        "en": "The text has no line break after the 3, so there are three lines, and the last one is \"3\" without \\n. The first line \"1\\n\" contains the line break and has length 2. No empty fourth line arises."
      },
      "tip": {
        "de": "Welche Zeilen enden mit \\n, und welche nicht?",
        "en": "Which lines end with \\n, and which do not?"
      }
    },
    {
      "id": "ch4-ms-205",
      "chapter": 4,
      "section": "4.6 Syntax und Befehle für Dateien",
      "source": {
        "document": "SOTE2 Skript (Softwareentwicklung 2)",
        "section": "4.6 Syntax und Befehle für Dateien / Labor 4 (Dateien und Datensätze)"
      },
      "type": "ms",
      "difficulty": "easy",
      "question": {
        "de": "Welche drei der folgenden Namen sind Methoden eines geöffneten Textdatei-Objekts? Wähle genau 3 aus.",
        "en": "Which three of the following names are methods of an opened text file object? Select exactly 3."
      },
      "clarification": null,
      "code": null,
      "options": [
        {
          "id": "a",
          "text": {
            "de": "read",
            "en": "read"
          }
        },
        {
          "id": "b",
          "text": {
            "de": "readline",
            "en": "readline"
          }
        },
        {
          "id": "c",
          "text": {
            "de": "writelines",
            "en": "writelines"
          }
        },
        {
          "id": "d",
          "text": {
            "de": "append",
            "en": "append"
          }
        },
        {
          "id": "e",
          "text": {
            "de": "readall",
            "en": "readall"
          }
        }
      ],
      "answer": [
        "a",
        "b",
        "c"
      ],
      "explanation": {
        "de": "read, readline und writelines sind Methoden von Dateiobjekten. append ist eine Listenmethode, und readall gibt es bei Python-Dateiobjekten nicht.",
        "en": "read, readline and writelines are methods of file objects. append is a list method, and readall does not exist on Python file objects."
      },
      "tip": {
        "de": "Welche dieser Namen kennst du von open()-Dateien, welche von Listen?",
        "en": "Which of these names do you know from open() files, which from lists?"
      }
    },
    {
      "id": "ch4-ms-206",
      "chapter": 4,
      "section": "4.6 Syntax und Befehle für Dateien",
      "source": {
        "document": "SOTE2 Skript (Softwareentwicklung 2)",
        "section": "4.6 Syntax und Befehle für Dateien / Labor 4 (Dateien und Datensätze)"
      },
      "type": "ms",
      "difficulty": "hard",
      "question": {
        "de": "Welche der folgenden Modi erlauben im Textmodus das Lesen aus der Datei? Wähle genau 3 aus.",
        "en": "Which of the following modes allow reading from the file in text mode? Select exactly 3."
      },
      "clarification": {
        "de": "Gemeint ist, ob auf dem geöffneten Objekt read() erlaubt ist.",
        "en": "This refers to whether read() is permitted on the opened object."
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
            "de": "\"r+\"",
            "en": "\"r+\""
          }
        },
        {
          "id": "c",
          "text": {
            "de": "\"w\"",
            "en": "\"w\""
          }
        },
        {
          "id": "d",
          "text": {
            "de": "\"w+\"",
            "en": "\"w+\""
          }
        },
        {
          "id": "e",
          "text": {
            "de": "\"a\"",
            "en": "\"a\""
          }
        }
      ],
      "answer": [
        "a",
        "b",
        "d"
      ],
      "explanation": {
        "de": "r liest nur, r+ liest und schreibt, und w+ schreibt (nach dem Leeren der Datei) und erlaubt zusätzlich Lesen. Reines w und a sind reine Schreibmodi, bei denen read() einen Fehler auslöst.",
        "en": "r only reads, r+ reads and writes, and w+ writes (after emptying the file) and additionally allows reading. Plain w and a are write-only modes in which read() raises an error."
      },
      "tip": {
        "de": "Das Pluszeichen erweitert einen Modus um die jeweils andere Richtung.",
        "en": "The plus sign extends a mode by the respective other direction."
      }
    },
    {
      "id": "ch4-ms-207",
      "chapter": 4,
      "section": "4.6 Syntax und Befehle für Dateien",
      "source": {
        "document": "SOTE2 Skript (Softwareentwicklung 2)",
        "section": "4.6 Syntax und Befehle für Dateien / Labor 4 (Dateien und Datensätze)"
      },
      "type": "ms",
      "difficulty": "hard",
      "question": {
        "de": "Die Datei t.txt enthält die Zeilen A, B und C (jeweils mit \\n am Ende). Direkt nach dem ersten f.readline() soll ein Ausdruck die Liste ['B\\n', 'C\\n'] ergeben. Welche drei Ausdrücke tun das, wenn man sie einzeln an dieser Stelle auswertet? Wähle genau 3 aus.",
        "en": "The file t.txt contains the lines A, B and C (each ending with \\n). Directly after the first f.readline(), an expression is supposed to yield the list ['B\\n', 'C\\n']. Which three expressions do that when evaluated individually at this point? Select exactly 3."
      },
      "clarification": null,
      "code": "with open(\"t.txt\") as f:\n    f.readline()\n    result = ...  # expression to evaluate here",
      "options": [
        {
          "id": "a",
          "text": {
            "de": "f.readlines()",
            "en": "f.readlines()"
          }
        },
        {
          "id": "b",
          "text": {
            "de": "list(f)",
            "en": "list(f)"
          }
        },
        {
          "id": "c",
          "text": {
            "de": "[line for line in f]",
            "en": "[line for line in f]"
          }
        },
        {
          "id": "d",
          "text": {
            "de": "f.read()",
            "en": "f.read()"
          }
        },
        {
          "id": "e",
          "text": {
            "de": "f.readline()",
            "en": "f.readline()"
          }
        }
      ],
      "answer": [
        "a",
        "b",
        "c"
      ],
      "explanation": {
        "de": "Nach dem ersten readline() steht der Dateizeiger vor B; readlines(), list(f) und die Listen-Abkürzung lesen von dort aus alle restlichen Zeilen als Liste. read() liefert einen einzigen String, readline() nur die Zeile B.",
        "en": "After the first readline() the file pointer is before B; readlines(), list(f) and the list comprehension read all remaining lines from there as a list. read() returns a single string, readline() only the line B."
      },
      "tip": {
        "de": "Wo steht der Dateizeiger, und welcher Typ kommt jeweils heraus?",
        "en": "Where is the file pointer, and which type does each expression return?"
      }
    },
    {
      "id": "ch4-ms-208",
      "chapter": 4,
      "section": "4.6 Syntax und Befehle für Dateien",
      "source": {
        "document": "SOTE2 Skript (Softwareentwicklung 2)",
        "section": "4.6 Syntax und Befehle für Dateien / Labor 4 (Dateien und Datensätze)"
      },
      "type": "ms",
      "difficulty": "ultra",
      "question": {
        "de": "Die Dateien a.txt und b.txt enthalten beide den Text old. Welche Aussagen über den Zustand nach Ausführung des Codes sind richtig? Wähle alle zutreffenden aus.",
        "en": "The files a.txt and b.txt both contain the text old. Which statements about the state after running the code are correct? Select all that apply."
      },
      "clarification": null,
      "code": "with open(\"a.txt\", \"a\") as f:\n    pass\nwith open(\"b.txt\", \"w\") as g:\n    pass",
      "options": [
        {
          "id": "a",
          "text": {
            "de": "a.txt enthält weiterhin old.",
            "en": "a.txt still contains old."
          }
        },
        {
          "id": "b",
          "text": {
            "de": "b.txt existiert und ist leer.",
            "en": "b.txt exists and is empty."
          }
        },
        {
          "id": "c",
          "text": {
            "de": "b.txt enthält weiterhin old, da nichts geschrieben wurde.",
            "en": "b.txt still contains old because nothing was written."
          }
        },
        {
          "id": "d",
          "text": {
            "de": "Der Code löst einen Fehler aus, weil nichts in die Dateien geschrieben wird.",
            "en": "The code raises an error because nothing is written to the files."
          }
        }
      ],
      "answer": [
        "a",
        "b"
      ],
      "explanation": {
        "de": "Der Modus a verändert vorhandenen Inhalt nicht, während w die Datei schon beim Öffnen leert, auch wenn danach nie geschrieben wird. Ein leerer with-Block ist erlaubt und löst keinen Fehler aus.",
        "en": "Mode a does not change existing content, whereas w empties the file already when opening, even if nothing is written afterwards. An empty with block is allowed and raises no error."
      },
      "tip": {
        "de": "Wann genau wird der Inhalt im Modus w gelöscht?",
        "en": "When exactly is the content deleted in mode w?"
      }
    },
    {
      "id": "ch4-fib-207",
      "chapter": 4,
      "section": "4.6 Syntax und Befehle für Dateien",
      "source": {
        "document": "SOTE2 Skript (Softwareentwicklung 2)",
        "section": "4.6 Syntax und Befehle für Dateien / Labor 4 (Dateien und Datensätze)"
      },
      "type": "fib",
      "difficulty": "easy",
      "question": {
        "de": "Ergänze die String-Methode, die den Zeilenumbruch am Ende jeder Zeile entfernt.",
        "en": "Fill in the string method that removes the line break at the end of each line."
      },
      "clarification": {
        "de": "Es gibt zwei übliche Methoden; eine genügt.",
        "en": "There are two common methods; one is enough."
      },
      "code": "with open(\"a.txt\") as f:\n    for line in f:\n        print(line.____())",
      "answer": null,
      "blanks": [
        {
          "accepted": [
            "strip",
            "rstrip"
          ],
          "caseSensitive": true
        }
      ],
      "explanation": {
        "de": "Jede gelesene Zeile endet mit \\n; strip() bzw. rstrip() entfernt dieses Zeichen (strip auch Leerzeichen am Anfang). Ohne diesen Schritt würde print zusätzlich zur Zeile einen eigenen Zeilenumbruch ausgeben.",
        "en": "Every line read ends with \\n; strip() or rstrip() removes this character (strip also removes whitespace at the beginning). Without this step print would output its own line break in addition to the line."
      },
      "tip": {
        "de": "Es geht um das Entfernen von Whitespace am Zeilenende.",
        "en": "It is about removing whitespace at the end of the line."
      }
    },
    {
      "id": "ch4-fib-208",
      "chapter": 4,
      "section": "4.6 Syntax und Befehle für Dateien",
      "source": {
        "document": "SOTE2 Skript (Softwareentwicklung 2)",
        "section": "4.6 Syntax und Befehle für Dateien / Labor 4 (Dateien und Datensätze)"
      },
      "type": "fib",
      "difficulty": "medium",
      "question": {
        "de": "Ergänze die Funktion, die die Zahl in einen String umwandelt, damit write() sie schreiben kann.",
        "en": "Fill in the function that converts the number to a string so that write() can write it."
      },
      "clarification": null,
      "code": "with open(\"n.txt\", \"w\") as f:\n    f.write(____(42))",
      "answer": null,
      "blanks": [
        {
          "accepted": [
            "str"
          ],
          "caseSensitive": true
        }
      ],
      "explanation": {
        "de": "write() erwartet im Textmodus einen String, mit einer Zahl entsteht ein TypeError. str(42) liefert \"42\", das geschrieben werden kann.",
        "en": "In text mode write() expects a string; passing a number raises a TypeError. str(42) returns \"42\", which can be written."
      },
      "tip": {
        "de": "Welchen Typ erwartet write()?",
        "en": "Which type does write() expect?"
      }
    },
    {
      "id": "ch4-fib-209",
      "chapter": 4,
      "section": "4.6 Syntax und Befehle für Dateien",
      "source": {
        "document": "SOTE2 Skript (Softwareentwicklung 2)",
        "section": "4.6 Syntax und Befehle für Dateien / Labor 4 (Dateien und Datensätze)"
      },
      "type": "fib",
      "difficulty": "medium",
      "question": {
        "de": "Ergänze die String-Methode, die den gesamten Dateiinhalt an den Zeilenumbrüchen in eine Liste zerlegt.",
        "en": "Fill in the string method that splits the entire file content at the line breaks into a list."
      },
      "clarification": {
        "de": "Die Datei a.txt enthält \"x\\ny\\nz\".",
        "en": "The file a.txt contains \"x\\ny\\nz\"."
      },
      "code": "with open(\"a.txt\") as f:\n    parts = f.read().____(\"\\n\")\nprint(parts)  # ['x', 'y', 'z']",
      "answer": null,
      "blanks": [
        {
          "accepted": [
            "split"
          ],
          "caseSensitive": true
        }
      ],
      "explanation": {
        "de": "split(\"\\n\") zerlegt den String an jedem Zeilenumbruch und liefert ['x', 'y', 'z']; die Umbrüche selbst bleiben nicht erhalten. Im Gegensatz zu readlines() enthalten die Elemente kein \\n.",
        "en": "split(\"\\n\") splits the string at every line break and returns ['x', 'y', 'z']; the line breaks themselves are not kept. Unlike readlines() the elements contain no \\n."
      },
      "tip": {
        "de": "Die Methode zerlegt einen String an einem Trennzeichen.",
        "en": "The method splits a string at a separator."
      }
    },
    {
      "id": "ch4-fib-210",
      "chapter": 4,
      "section": "4.6 Syntax und Befehle für Dateien",
      "source": {
        "document": "SOTE2 Skript (Softwareentwicklung 2)",
        "section": "4.6 Syntax und Befehle für Dateien / Labor 4 (Dateien und Datensätze)"
      },
      "type": "fib",
      "difficulty": "hard",
      "question": {
        "de": "Ergänze den Schlüsselwort-Parameter von print, mit dem die Ausgabe in die Datei statt auf den Bildschirm geschrieben wird.",
        "en": "Fill in the keyword parameter of print that writes the output to the file instead of the screen."
      },
      "clarification": null,
      "code": "with open(\"o.txt\", \"w\") as f:\n    print(\"hello\", ____=f)",
      "answer": null,
      "blanks": [
        {
          "accepted": [
            "file"
          ],
          "caseSensitive": true
        }
      ],
      "explanation": {
        "de": "print besitzt den Parameter file, der ein Objekt mit write()-Methode erwartet; standardmäßig ist das sys.stdout. print hängt am Ende automatisch einen Zeilenumbruch an, o.txt enthält also hello und \\n.",
        "en": "print has the parameter file, which expects an object with a write() method; by default this is sys.stdout. print automatically appends a line break at the end, so o.txt contains hello and \\n."
      },
      "tip": {
        "de": "Der Parameter benennt das Ziel der Ausgabe.",
        "en": "The parameter names the destination of the output."
      }
    },
    {
      "id": "ch4-fe-203",
      "chapter": 4,
      "section": "4.6 Syntax und Befehle für Dateien",
      "source": {
        "document": "SOTE2 Skript (Softwareentwicklung 2)",
        "section": "4.6 Syntax und Befehle für Dateien / Labor 4 (Dateien und Datensätze)"
      },
      "type": "fe",
      "difficulty": "hard",
      "question": {
        "de": "Das Programm soll die drei Wörter zeilenweise in out.txt schreiben und zeigt am Ende ['abc'] statt ['a', 'b', 'c']. Welche Zeile enthält die Ursache?",
        "en": "The program is supposed to write the three words line by line to out.txt and ends up showing ['abc'] instead of ['a', 'b', 'c']. Which line contains the cause?"
      },
      "clarification": null,
      "code": "1 words = [\"a\", \"b\", \"c\"]\n2 with open(\"out.txt\", \"w\") as f:\n3     f.writelines(words)\n4 with open(\"out.txt\") as f:\n5     print(f.read().splitlines())",
      "options": [
        {
          "id": "a",
          "text": {
            "de": "Zeile 1: Die Liste enthält Strings statt Zahlen.",
            "en": "Line 1: The list contains strings instead of numbers."
          }
        },
        {
          "id": "b",
          "text": {
            "de": "Zeile 2: Der Modus w ist hier falsch.",
            "en": "Line 2: The mode w is wrong here."
          }
        },
        {
          "id": "c",
          "text": {
            "de": "Zeile 3: writelines fügt keine Zeilenumbrüche hinzu.",
            "en": "Line 3: writelines does not add line breaks."
          }
        },
        {
          "id": "d",
          "text": {
            "de": "Zeile 5: splitlines kann nur mit einem Argument verwendet werden.",
            "en": "Line 5: splitlines can only be used with an argument."
          }
        }
      ],
      "answer": "c",
      "explanation": {
        "de": "writelines schreibt die Elemente unverändert hintereinander und ergänzt keine Zeilenumbrüche, in der Datei steht also abc in einer Zeile. Die Elemente müssten \\n enthalten, oder man schreibt sie einzeln mit \"\\n\". Modus w und splitlines sind richtig verwendet.",
        "en": "writelines writes the elements unchanged one after another and adds no line breaks, so the file contains abc on one line. The elements would have to contain \\n, or they would be written individually with \"\\n\". Mode w and splitlines are used correctly."
      },
      "tip": {
        "de": "Prüfe, was writelines zwischen die Elemente setzt.",
        "en": "Check what writelines puts between the elements."
      }
    },
    {
      "id": "ch4-fe-204",
      "chapter": 4,
      "section": "4.6 Syntax und Befehle für Dateien",
      "source": {
        "document": "SOTE2 Skript (Softwareentwicklung 2)",
        "section": "4.6 Syntax und Befehle für Dateien / Labor 4 (Dateien und Datensätze)"
      },
      "type": "fe",
      "difficulty": "ultra",
      "question": {
        "de": "Die Datei log.txt enthält fünf Zeilen, das Programm soll die Zeilen zählen, gibt aber 0 aus. Welche Zeile enthält die Ursache?",
        "en": "The file log.txt contains five lines, the program is supposed to count the lines but prints 0. Which line contains the cause?"
      },
      "clarification": null,
      "code": "1 count = 0\n2 with open(\"log.txt\") as f:\n3     f.read()\n4     for line in f:\n5         count += 1\n6 print(count)",
      "options": [
        {
          "id": "a",
          "text": {
            "de": "Zeile 1: count muss ein String sein.",
            "en": "Line 1: count must be a string."
          }
        },
        {
          "id": "b",
          "text": {
            "de": "Zeile 3: read() verbraucht die Datei, die Schleife findet danach nichts mehr.",
            "en": "Line 3: read() consumes the file, the loop finds nothing afterwards."
          }
        },
        {
          "id": "c",
          "text": {
            "de": "Zeile 4: Man darf nicht direkt über ein Dateiobjekt iterieren.",
            "en": "Line 4: One must not iterate directly over a file object."
          }
        },
        {
          "id": "d",
          "text": {
            "de": "Zeile 5: += funktioniert nicht mit Variablen aus dem with-Block.",
            "en": "Line 5: += does not work with variables from the with block."
          }
        }
      ],
      "answer": "b",
      "explanation": {
        "de": "f.read() liest bis zum Dateiende, der Dateizeiger steht danach hinter dem letzten Zeichen, und die Schleife in Zeile 4 erhält keine Zeilen mehr. Die Iteration über ein Dateiobjekt ist erlaubt, und count lässt sich im with-Block ändern.",
        "en": "f.read() reads up to the end of the file, the file pointer is then behind the last character, and the loop in line 4 receives no more lines. Iterating over a file object is allowed, and count can be changed inside the with block."
      },
      "tip": {
        "de": "Wo steht der Dateizeiger nach Zeile 3?",
        "en": "Where is the file pointer after line 3?"
      }
    }
];
