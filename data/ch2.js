// SOTE2 question bank - chapter 2
const QUESTIONS_CH2 = [
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
      "de": "Eine URL besteht u. a. aus Schema (https), Host, optionalem Port (8080), Pfad (/info/seite.html) und optionalem Query-String (id=5). Ein Primärschlüssel ist ein Datenbankbegriff, und ein Compiler hat mit dem Aufbau einer URL nichts zu tun.",
      "en": "A URL consists of a scheme (https), host, optional port (8080), path (/info/seite.html) and optional query string (id=5), among others. A primary key is a database term, and a compiler has nothing to do with the structure of a URL."
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
      "de": "Der Query-String beginnt nach dem ? und endet vor dem optionalen Fragment (#top). Daher ist x=1&y=2 korrekt; die Variante mit #top schließt fälschlich das Fragment ein, /a/b.html ist der Pfad und 8080 der Port.",
      "en": "The query string starts after the ? and ends before the optional fragment (#top). Therefore x=1&y=2 is correct; the variant with #top wrongly includes the fragment, /a/b.html is the path and 8080 is the port."
    },
    "tip": {
      "de": "Achte auf die Zeichen ? und # als Trenner.",
      "en": "Look at the characters ? and # as separators."
    }
  },
  {
    "id": "ch2-mc-101",
    "chapter": 2,
    "section": "2.2 Grundlagen von vernetzten Systemen",
    "source": {
      "document": "SOTE2 Skript (Softwareentwicklung 2)",
      "section": "2.2 Grundlagen von vernetzten Systemen"
    },
    "type": "mc",
    "difficulty": "easy",
    "question": {
      "de": "Welche der folgenden Technologien gehört nicht zu den Schwerpunkten, die in diesem Kapitel für vernetzte, intelligente Systeme genannt werden?",
      "en": "Which of the following technologies is not one of the focus areas named in this chapter for networked, intelligent systems?"
    },
    "clarification": {
      "de": "Gesucht ist das Thema, das im Kapitel nicht als Schwerpunkt vorkommt.",
      "en": "You are looking for the topic that does not appear as a focus area in the chapter."
    },
    "code": null,
    "options": [
      {
        "id": "a",
        "text": {
          "de": "Persistenz mit Dateien und Datenbanken",
          "en": "Persistence with files and databases"
        }
      },
      {
        "id": "b",
        "text": {
          "de": "Nebenläufigkeit",
          "en": "Concurrency"
        }
      },
      {
        "id": "c",
        "text": {
          "de": "Grundlagen der Web-Technologien (HTTP, HTML, JSON)",
          "en": "Basics of web technologies (HTTP, HTML, JSON)"
        }
      },
      {
        "id": "d",
        "text": {
          "de": "Compilerbau und Maschinencode-Optimierung",
          "en": "Compiler construction and machine-code optimisation"
        }
      }
    ],
    "answer": "d",
    "explanation": {
      "de": "Das Kapitel nennt Persistenz (Dateien und Datenbanken), Nebenläufigkeit, Grundlagen der Web-Technologien und Webanwendungen. Compilerbau und Maschinencode-Optimierung kommen als Schwerpunkt nicht vor.",
      "en": "The chapter names persistence (files and databases), concurrency, web technology basics and web applications. Compiler construction and machine-code optimisation are not a focus area."
    },
    "tip": {
      "de": "Gehe die vier Schwerpunkte durch, die am Anfang des Kapitels aufgezählt werden.",
      "en": "Go through the four focus areas listed at the beginning of the chapter."
    }
  },
  {
    "id": "ch2-mc-102",
    "chapter": 2,
    "section": "2.2 Grundlagen von vernetzten Systemen",
    "source": {
      "document": "SOTE2 Skript (Softwareentwicklung 2)",
      "section": "2.2 Grundlagen von vernetzten Systemen"
    },
    "type": "mc",
    "difficulty": "medium",
    "question": {
      "de": "Was kennzeichnet ein vernetztes System im Sinne dieses Kapitels am besten?",
      "en": "What best characterises a networked system in the sense of this chapter?"
    },
    "clarification": {
      "de": "Es geht um die Grundidee, nicht um ein bestimmtes Produkt.",
      "en": "This is about the basic idea, not a particular product."
    },
    "code": null,
    "options": [
      {
        "id": "a",
        "text": {
          "de": "Mehrere Programme bzw. Rechner kommunizieren über ein Netzwerk (z. B. das Internet) nach vereinbarten Protokollen.",
          "en": "Several programs or computers communicate over a network (e.g. the Internet) following agreed protocols."
        }
      },
      {
        "id": "b",
        "text": {
          "de": "Ein einzelnes Programm hält alle Daten ausschließlich im Arbeitsspeicher.",
          "en": "A single program keeps all its data exclusively in main memory."
        }
      },
      {
        "id": "c",
        "text": {
          "de": "Ein Programm liest und schreibt nur lokale Dateien auf demselben Rechner.",
          "en": "A program only reads and writes local files on the same computer."
        }
      },
      {
        "id": "d",
        "text": {
          "de": "Ein Rechner mit besonders vielen Prozessorkernen.",
          "en": "A computer with an especially large number of processor cores."
        }
      }
    ],
    "answer": "a",
    "explanation": {
      "de": "Bei einem vernetzten System kommunizieren mehrere Programme bzw. Rechner über ein Netzwerk wie das Internet und halten dazu vereinbarte Protokolle ein. Ein Programm, das nur lokale Dateien oder den Arbeitsspeicher nutzt, ist nicht vernetzt, und die Zahl der Prozessorkerne ist dafür unerheblich.",
      "en": "In a networked system several programs or computers communicate over a network such as the Internet and follow agreed protocols. A program that only uses local files or main memory is not networked, and the number of processor cores is irrelevant."
    },
    "tip": {
      "de": "Überlege, was für Kommunikation über das Internet nötig ist: Wer spricht mit wem, und nach welchen Regeln?",
      "en": "Think about what communication over the Internet requires: who talks to whom, and by which rules?"
    }
  },
  {
    "id": "ch2-mc-103",
    "chapter": 2,
    "section": "2.2 Grundlagen von vernetzten Systemen",
    "source": {
      "document": "SOTE2 Skript (Softwareentwicklung 2)",
      "section": "2.2 Grundlagen von vernetzten Systemen"
    },
    "type": "mc",
    "difficulty": "medium",
    "question": {
      "de": "Das folgende Programm sammelt Messwerte. Nach dem Beenden und erneuten Starten sind alle Werte verschwunden. Welche Basistechnologie fehlt dem Programm?",
      "en": "The following program collects measurements. After it is closed and started again, all values are gone. Which basic technology is the program missing?"
    },
    "clarification": {
      "de": "Das Programm wird komplett beendet und später neu gestartet.",
      "en": "The program is terminated completely and started again later."
    },
    "code": "readings = []\nreadings.append(21.5)\nreadings.append(22.1)\nprint(readings)",
    "options": [
      {
        "id": "a",
        "text": {
          "de": "Persistenz",
          "en": "Persistence"
        }
      },
      {
        "id": "b",
        "text": {
          "de": "Nebenläufigkeit",
          "en": "Concurrency"
        }
      },
      {
        "id": "c",
        "text": {
          "de": "HTML-Rendering",
          "en": "HTML rendering"
        }
      },
      {
        "id": "d",
        "text": {
          "de": "URL-Adressierung",
          "en": "URL addressing"
        }
      }
    ],
    "answer": "a",
    "explanation": {
      "de": "Die Werte liegen nur in einer Variablen im Arbeitsspeicher und gehen beim Programmende verloren. Erst Persistenz, also das Speichern in Dateien oder Datenbanken, lässt Daten über die Laufzeit hinaus bestehen. Nebenläufigkeit, HTML-Rendering und URL-Adressierung lösen dieses Problem nicht.",
      "en": "The values only live in a variable in main memory and are lost when the program ends. Only persistence, i.e. storing in files or databases, lets data outlive the runtime. Concurrency, HTML rendering and URL addressing do not solve this problem."
    },
    "tip": {
      "de": "Wo leben die Werte, solange das Programm läuft, und was passiert mit diesem Speicher beim Beenden?",
      "en": "Where do the values live while the program runs, and what happens to that memory when it ends?"
    }
  },
  {
    "id": "ch2-mc-104",
    "chapter": 2,
    "section": "2.2 Grundlagen von vernetzten Systemen",
    "source": {
      "document": "SOTE2 Skript (Softwareentwicklung 2)",
      "section": "2.2 Grundlagen von vernetzten Systemen"
    },
    "type": "mc",
    "difficulty": "ultra",
    "question": {
      "de": "Ein Online-Shop wird als Webanwendung betrieben. Welche Aussage über das Zusammenspiel der Technologien ist zutreffend?",
      "en": "An online shop is operated as a web application. Which statement about the interplay of the technologies is correct?"
    },
    "clarification": null,
    "code": null,
    "options": [
      {
        "id": "a",
        "text": {
          "de": "Der Browser überträgt Anfragen per HTTP; der Server muss mehrere Clients ohne gegenseitiges Blockieren bedienen (Nebenläufigkeit) und Bestellungen dauerhaft speichern (Persistenz).",
          "en": "The browser transmits requests via HTTP; the server has to serve several clients without blocking one another (concurrency) and store orders permanently (persistence)."
        }
      },
      {
        "id": "b",
        "text": {
          "de": "Weil HTTP die Daten überträgt, ist Persistenz überflüssig: Das Protokoll merkt sich alle Bestellungen.",
          "en": "Because HTTP transmits the data, persistence is unnecessary: the protocol remembers all orders."
        }
      },
      {
        "id": "c",
        "text": {
          "de": "Nebenläufigkeit wird nur benötigt, um Layout und Farben der Seiten mit CSS festzulegen.",
          "en": "Concurrency is only needed to define the layout and colours of the pages with CSS."
        }
      },
      {
        "id": "d",
        "text": {
          "de": "Persistenz bedeutet, dass der Server mehrere Anfragen gleichzeitig bearbeitet.",
          "en": "Persistence means that the server processes several requests at the same time."
        }
      }
    ],
    "answer": "a",
    "explanation": {
      "de": "Der Browser sendet Anfragen per HTTP, der Server muss viele Clients gleichzeitig bedienen (Nebenläufigkeit) und Bestellungen über das Programmende hinaus speichern (Persistenz). HTTP selbst speichert keine Bestellungen, CSS ist nur für die Gestaltung zuständig, und Persistenz bedeutet gerade nicht gleichzeitige Bearbeitung.",
      "en": "The browser sends requests via HTTP, the server has to serve many clients at the same time (concurrency) and store orders beyond program termination (persistence). HTTP itself does not store orders, CSS only handles presentation, and persistence does not mean simultaneous processing."
    },
    "tip": {
      "de": "Ordne jedem der Schwerpunkte (HTTP, Nebenläufigkeit, Persistenz) eine eigene Aufgabe zu.",
      "en": "Assign each focus area (HTTP, concurrency, persistence) its own task."
    }
  },
  {
    "id": "ch2-mc-105",
    "chapter": 2,
    "section": "2.3 Persistenz",
    "source": {
      "document": "SOTE2 Skript (Softwareentwicklung 2)",
      "section": "2.3 Persistenz"
    },
    "type": "mc",
    "difficulty": "easy",
    "question": {
      "de": "Wie nennt man die Speicherung von Daten über die Laufzeit eines Programms hinaus?",
      "en": "What is the storage of data beyond the runtime of a program called?"
    },
    "clarification": {
      "de": "Gemeint ist der Fachbegriff aus dem Skript.",
      "en": "The technical term from the script is meant."
    },
    "code": null,
    "options": [
      {
        "id": "a",
        "text": {
          "de": "Persistenz",
          "en": "Persistence"
        }
      },
      {
        "id": "b",
        "text": {
          "de": "Nebenläufigkeit",
          "en": "Concurrency"
        }
      },
      {
        "id": "c",
        "text": {
          "de": "Rendering",
          "en": "Rendering"
        }
      },
      {
        "id": "d",
        "text": {
          "de": "Adressierung",
          "en": "Addressing"
        }
      }
    ],
    "answer": "a",
    "explanation": {
      "de": "Persistenz bezeichnet, dass Daten auch nach dem Beenden des Programms erhalten bleiben, z. B. in Dateien oder Datenbanken. Nebenläufigkeit meint das gleichzeitige Erledigen mehrerer Aufgaben, Rendern die Darstellung von HTML und Adressierung die Benennung von Ressourcen.",
      "en": "Persistence means that data is kept after the program ends, e.g. in files or databases. Concurrency means doing several tasks at once, rendering is the display of HTML, and addressing is the naming of resources."
    },
    "tip": {
      "de": "Das Wort leitet sich von „bestehen bleiben“ ab.",
      "en": "The word is related to something that “persists”."
    }
  },
  {
    "id": "ch2-mc-106",
    "chapter": 2,
    "section": "2.3 Persistenz",
    "source": {
      "document": "SOTE2 Skript (Softwareentwicklung 2)",
      "section": "2.3 Persistenz"
    },
    "type": "mc",
    "difficulty": "medium",
    "question": {
      "de": "Welche der folgenden Möglichkeiten wird im Skript nicht als Weg der persistenten Speicherung genannt?",
      "en": "Which of the following is not named in the script as a way of persistent storage?"
    },
    "clarification": {
      "de": "Gesucht ist die Option, die Daten nicht über das Programmende hinaus bewahrt.",
      "en": "You are looking for the option that does not preserve data beyond program termination."
    },
    "code": null,
    "options": [
      {
        "id": "a",
        "text": {
          "de": "Dateien (z. B. Textdateien, CSV-Dateien)",
          "en": "Files (e.g. text files, CSV files)"
        }
      },
      {
        "id": "b",
        "text": {
          "de": "Datenbanken (z. B. relationale oder NoSQL-Datenbanken)",
          "en": "Databases (e.g. relational or NoSQL databases)"
        }
      },
      {
        "id": "c",
        "text": {
          "de": "Cloud-Speicher (z. B. Amazon S3)",
          "en": "Cloud storage (e.g. Amazon S3)"
        }
      },
      {
        "id": "d",
        "text": {
          "de": "Lokale Variablen im Arbeitsspeicher während der Laufzeit",
          "en": "Local variables in main memory during runtime"
        }
      }
    ],
    "answer": "d",
    "explanation": {
      "de": "Das Skript nennt Dateien (z. B. Textdateien, CSV), Datenbanken (relational, NoSQL) und Cloud-Speicher. Lokale Variablen im Arbeitsspeicher existieren nur während der Laufzeit des Programms und sind daher keine persistente Speicherung.",
      "en": "The script names files (e.g. text files, CSV), databases (relational, NoSQL) and cloud storage. Local variables in main memory only exist while the program runs and are therefore not persistent storage."
    },
    "tip": {
      "de": "Frage dich bei jeder Option, ob die Daten nach einem Programmende noch da wären.",
      "en": "For each option ask yourself whether the data would still exist after the program ended."
    }
  },
  {
    "id": "ch2-mc-107",
    "chapter": 2,
    "section": "2.3 Persistenz",
    "source": {
      "document": "SOTE2 Skript (Softwareentwicklung 2)",
      "section": "2.3 Persistenz"
    },
    "type": "mc",
    "difficulty": "ultra",
    "question": {
      "de": "Ein Programm schreibt seine Ergebnisse in eine CSV-Datei und beendet sich. Am nächsten Tag liest ein anderes Programm diese Datei. Welche Aussage ist zutreffend?",
      "en": "A program writes its results to a CSV file and terminates. The next day another program reads this file. Which statement is correct?"
    },
    "clarification": null,
    "code": null,
    "options": [
      {
        "id": "a",
        "text": {
          "de": "Die Daten bleiben über das Programmende hinaus erhalten und werden mit einem anderen Programm geteilt; das ist Persistenz mit Dateien.",
          "en": "The data is kept beyond program termination and shared with another program; this is persistence with files."
        }
      },
      {
        "id": "b",
        "text": {
          "de": "Persistenz liegt nur vor, wenn eine Datenbank verwendet wird; eine CSV-Datei genügt nicht.",
          "en": "Persistence only exists if a database is used; a CSV file is not sufficient."
        }
      },
      {
        "id": "c",
        "text": {
          "de": "Die Daten bleiben nur erhalten, solange das erste Programm weiterläuft.",
          "en": "The data is only kept as long as the first program keeps running."
        }
      },
      {
        "id": "d",
        "text": {
          "de": "Dafür wird zwingend Cloud-Speicher benötigt, weil Dateien nicht zwischen Programmen geteilt werden können.",
          "en": "Cloud storage is mandatory here because files cannot be shared between programs."
        }
      }
    ],
    "answer": "a",
    "explanation": {
      "de": "Die Daten überdauern das Programmende und werden mit einem anderen Programm geteilt; genau das ist Persistenz, und Dateien sind dafür ein vollwertiger Weg. Weder eine Datenbank noch Cloud-Speicher sind dafür zwingend nötig, und das erste Programm muss nicht weiterlaufen.",
      "en": "The data outlives program termination and is shared with another program; this is exactly persistence, and files are a fully valid way to achieve it. Neither a database nor cloud storage is required, and the first program does not have to keep running."
    },
    "tip": {
      "de": "Die Einleitung zur Persistenz nennt zwei Gründe, warum Daten erhalten bleiben sollen.",
      "en": "The introduction to persistence gives two reasons why data should be kept."
    }
  },
  {
    "id": "ch2-mc-108",
    "chapter": 2,
    "section": "2.4 Nebenläufigkeit",
    "source": {
      "document": "SOTE2 Skript (Softwareentwicklung 2)",
      "section": "2.4 Nebenläufigkeit"
    },
    "type": "mc",
    "difficulty": "easy",
    "question": {
      "de": "Wie nennt man Programme, die mehrere Aufgaben praktisch zeitgleich erledigen können?",
      "en": "What are programs called that can handle several tasks practically at the same time?"
    },
    "clarification": {
      "de": "Gemeint ist der Begriff aus dem Skript.",
      "en": "The term from the script is meant."
    },
    "code": null,
    "options": [
      {
        "id": "a",
        "text": {
          "de": "nebenläufig (concurrent)",
          "en": "concurrent"
        }
      },
      {
        "id": "b",
        "text": {
          "de": "zustandslos (stateless)",
          "en": "stateless"
        }
      },
      {
        "id": "c",
        "text": {
          "de": "persistent",
          "en": "persistent"
        }
      },
      {
        "id": "d",
        "text": {
          "de": "statisch (static)",
          "en": "static"
        }
      }
    ],
    "answer": "a",
    "explanation": {
      "de": "Solche Programme heißen nebenläufig. Zustandslos beschreibt eher ein Protokoll wie HTTP, persistent bezieht sich auf die Speicherung über die Laufzeit hinaus, und statisch ist hier kein Begriff für gleichzeitige Aufgaben.",
      "en": "Such programs are called concurrent. Stateless rather describes a protocol like HTTP, persistent refers to storage beyond the runtime, and static is not a term for simultaneous tasks here."
    },
    "tip": {
      "de": "Das Kapitel 2.4 trägt diesen Begriff im Titel.",
      "en": "Section 2.4 carries this term in its title."
    }
  },
  {
    "id": "ch2-mc-109",
    "chapter": 2,
    "section": "2.4 Nebenläufigkeit",
    "source": {
      "document": "SOTE2 Skript (Softwareentwicklung 2)",
      "section": "2.4 Nebenläufigkeit"
    },
    "type": "mc",
    "difficulty": "medium",
    "question": {
      "de": "Warum muss fast jedes Programm mit Benutzerschnittstelle nebenläufig sein?",
      "en": "Why does almost every program with a user interface have to be concurrent?"
    },
    "clarification": {
      "de": "Es geht um die Begründung aus dem Skript.",
      "en": "The reasoning from the script is asked for."
    },
    "code": null,
    "options": [
      {
        "id": "a",
        "text": {
          "de": "Um auf Benutzereingaben zu reagieren, während gleichzeitig andere Aufgaben (z. B. Datenverarbeitung) erledigt werden.",
          "en": "To react to user input while other tasks (e.g. data processing) are handled at the same time."
        }
      },
      {
        "id": "b",
        "text": {
          "de": "Damit die Daten nach dem Programmende gespeichert bleiben.",
          "en": "So that the data remains stored after the program ends."
        }
      },
      {
        "id": "c",
        "text": {
          "de": "Damit jede Ressource eine eindeutige URL erhält.",
          "en": "So that every resource gets a unique URL."
        }
      },
      {
        "id": "d",
        "text": {
          "de": "Damit HTML-Seiten schneller gerendert werden.",
          "en": "So that HTML pages are rendered faster."
        }
      }
    ],
    "answer": "a",
    "explanation": {
      "de": "Ein solches Programm muss auf Benutzereingaben reagieren, während es gleichzeitig andere Aufgaben wie Datenverarbeitung oder Kommunikation erledigt. Dauerhaftes Speichern ist Persistenz, und Adressierung oder HTML-Darstellung haben mit Nebenläufigkeit nichts zu tun.",
      "en": "Such a program has to react to user input while it simultaneously handles other tasks such as data processing or communication. Permanent storage is persistence, and addressing or HTML display have nothing to do with concurrency."
    },
    "tip": {
      "de": "Was soll passieren, wenn der Nutzer klickt, während das Programm gerade rechnet?",
      "en": "What should happen when the user clicks while the program is busy computing?"
    }
  },
  {
    "id": "ch2-mc-110",
    "chapter": 2,
    "section": "2.4 Nebenläufigkeit",
    "source": {
      "document": "SOTE2 Skript (Softwareentwicklung 2)",
      "section": "2.4 Nebenläufigkeit"
    },
    "type": "mc",
    "difficulty": "hard",
    "question": {
      "de": "Ein Webserver bearbeitet Anfragen strikt nacheinander. Anfrage A von Client 1 dauert sehr lange. Was passiert mit Anfrage B von Client 2, die währenddessen eintrifft?",
      "en": "A web server processes requests strictly one after another. Request A from client 1 takes very long. What happens to request B from client 2 that arrives in the meantime?"
    },
    "clarification": {
      "de": "Der Server ist in diesem Szenario nicht nebenläufig.",
      "en": "In this scenario the server is not concurrent."
    },
    "code": null,
    "options": [
      {
        "id": "a",
        "text": {
          "de": "B muss warten, bis A fertig ist (Blockierung) – genau das soll Nebenläufigkeit vermeiden.",
          "en": "B has to wait until A is finished (blocking) – exactly what concurrency is meant to avoid."
        }
      },
      {
        "id": "b",
        "text": {
          "de": "B wird automatisch parallel bearbeitet, weil HTTP zustandslos ist.",
          "en": "B is automatically processed in parallel because HTTP is stateless."
        }
      },
      {
        "id": "c",
        "text": {
          "de": "B wird abgelehnt, weil ein Server immer nur einen Client haben darf.",
          "en": "B is rejected because a server may only ever have one client."
        }
      },
      {
        "id": "d",
        "text": {
          "de": "B wird sofort beantwortet, weil Anfragen von verschiedenen Clients sich nie beeinflussen.",
          "en": "B is answered immediately because requests from different clients never affect each other."
        }
      }
    ],
    "answer": "a",
    "explanation": {
      "de": "B muss warten, bis A abgeschlossen ist, die Bearbeitung von A blockiert also B. Genau das soll Nebenläufigkeit verhindern. Dass HTTP zustandslos ist, ändert nichts an der sequentiellen Abarbeitung, und der Server lehnt B nicht automatisch ab.",
      "en": "B has to wait until A is finished, so processing A blocks B. This is exactly what concurrency is meant to prevent. HTTP being stateless does not change the sequential processing, and the server does not automatically reject B."
    },
    "tip": {
      "de": "Das Skript beschreibt, was ein Webserver können muss, ohne dass die Bearbeitung einer Anfrage eine andere blockiert.",
      "en": "The script describes what a web server must be able to do without one request blocking another."
    }
  },
  {
    "id": "ch2-mc-111",
    "chapter": 2,
    "section": "2.5 Web-Technologien",
    "source": {
      "document": "SOTE2 Skript (Softwareentwicklung 2)",
      "section": "2.5 Web-Technologien"
    },
    "type": "mc",
    "difficulty": "easy",
    "question": {
      "de": "Welches ist laut Skript das wichtigste Protokoll für die Kommunikation über das Internet?",
      "en": "According to the script, which is the most important protocol for communication over the Internet?"
    },
    "clarification": {
      "de": "Gefragt ist ein Protokoll, kein Dateiformat.",
      "en": "A protocol is asked for, not a file format."
    },
    "code": null,
    "options": [
      {
        "id": "a",
        "text": {
          "de": "HTTP",
          "en": "HTTP"
        }
      },
      {
        "id": "b",
        "text": {
          "de": "HTML",
          "en": "HTML"
        }
      },
      {
        "id": "c",
        "text": {
          "de": "CSS",
          "en": "CSS"
        }
      },
      {
        "id": "d",
        "text": {
          "de": "JSON",
          "en": "JSON"
        }
      }
    ],
    "answer": "a",
    "explanation": {
      "de": "Das wichtigste Protokoll ist HTTP (Hypertext Transfer Protocol), das Daten zwischen Client und Server überträgt. HTML, CSS und JSON sind keine Übertragungsprotokolle, sondern Auszeichnungs-, Gestaltungs- bzw. Datenformate.",
      "en": "The most important protocol is HTTP (Hypertext Transfer Protocol), which transfers data between client and server. HTML, CSS and JSON are not transfer protocols but a markup language, a styling language and a data format."
    },
    "tip": {
      "de": "Achte auf das Wort „Transfer“ in der Abkürzung.",
      "en": "Look at the word “Transfer” in the abbreviation."
    }
  },
  {
    "id": "ch2-mc-112",
    "chapter": 2,
    "section": "2.5 Web-Technologien",
    "source": {
      "document": "SOTE2 Skript (Softwareentwicklung 2)",
      "section": "2.5 Web-Technologien"
    },
    "type": "mc",
    "difficulty": "medium",
    "question": {
      "de": "Welche Aussage über HTML ist zutreffend?",
      "en": "Which statement about HTML is correct?"
    },
    "clarification": null,
    "code": null,
    "options": [
      {
        "id": "a",
        "text": {
          "de": "HTML ist die Sprache, in der Webseiten geschrieben werden (Texte, Bilder, Links).",
          "en": "HTML is the language in which web pages are written (text, images, links)."
        }
      },
      {
        "id": "b",
        "text": {
          "de": "HTML ist ein Protokoll, mit dem Client und Server Daten übertragen.",
          "en": "HTML is a protocol with which client and server transfer data."
        }
      },
      {
        "id": "c",
        "text": {
          "de": "HTML ist ein Datenbanksystem zur persistenten Speicherung von Daten.",
          "en": "HTML is a database system for persistent storage of data."
        }
      },
      {
        "id": "d",
        "text": {
          "de": "HTML ist ein Datenformat, das JSON zum Austausch strukturierter Daten ersetzt.",
          "en": "HTML is a data format that replaces JSON for exchanging structured data."
        }
      }
    ],
    "answer": "a",
    "explanation": {
      "de": "HTML ist die Sprache, in der Webseiten geschrieben werden, und beschreibt Texte, Bilder und Links. Die Übertragung übernimmt HTTP, Interaktivität liefert JavaScript, und HTML ist weder ein Datenbanksystem noch ein Austauschformat, das JSON ersetzt.",
      "en": "HTML is the language web pages are written in and describes text, images and links. HTTP handles the transfer, JavaScript provides interactivity, and HTML is neither a database system nor an exchange format replacing JSON."
    },
    "tip": {
      "de": "HTML steht für „Hypertext Markup Language“ – was wird damit ausgezeichnet?",
      "en": "HTML stands for “Hypertext Markup Language” – what is being marked up?"
    }
  },
  {
    "id": "ch2-mc-113",
    "chapter": 2,
    "section": "2.5 Web-Technologien",
    "source": {
      "document": "SOTE2 Skript (Softwareentwicklung 2)",
      "section": "2.5 Web-Technologien"
    },
    "type": "mc",
    "difficulty": "hard",
    "question": {
      "de": "Welche Zuordnung von Technologie und Aufgabe ist in allen drei Paarungen korrekt?",
      "en": "Which assignment of technology to task is correct in all three pairings?"
    },
    "clarification": {
      "de": "Jede Option nennt drei Zuordnungen; nur eine Option stimmt in allen dreien.",
      "en": "Each option names three pairings; only one option is right in all three."
    },
    "code": null,
    "options": [
      {
        "id": "a",
        "text": {
          "de": "HTTP: Übertragung zwischen Client und Server; CSS: Layout und Farben; JSON: Austausch strukturierter Daten",
          "en": "HTTP: transfer between client and server; CSS: layout and colours; JSON: exchange of structured data"
        }
      },
      {
        "id": "b",
        "text": {
          "de": "HTTP: Layout und Farben; CSS: Übertragung zwischen Client und Server; JSON: Interaktivität",
          "en": "HTTP: layout and colours; CSS: transfer between client and server; JSON: interactivity"
        }
      },
      {
        "id": "c",
        "text": {
          "de": "HTTP: Austausch strukturierter Daten; CSS: Interaktivität; JSON: Übertragung zwischen Client und Server",
          "en": "HTTP: exchange of structured data; CSS: interactivity; JSON: transfer between client and server"
        }
      },
      {
        "id": "d",
        "text": {
          "de": "HTTP: Übertragung zwischen Client und Server; CSS: Austausch strukturierter Daten; JSON: Layout und Farben",
          "en": "HTTP: transfer between client and server; CSS: exchange of structured data; JSON: layout and colours"
        }
      }
    ],
    "answer": "a",
    "explanation": {
      "de": "HTTP überträgt Daten zwischen Client und Server, CSS gestaltet Layouts und Farben, JSON tauscht strukturierte Daten aus. In den anderen Optionen sind mindestens zwei Aufgaben vertauscht, z. B. wird JSON mit Interaktivität oder Layout verwechselt.",
      "en": "HTTP transfers data between client and server, CSS styles layouts and colours, JSON exchanges structured data. In the other options at least two tasks are swapped, e.g. JSON is confused with interactivity or layout."
    },
    "tip": {
      "de": "Prüfe zuerst, welche Technologie überhaupt ein Datenformat und welche ein Protokoll ist.",
      "en": "First check which technology is a data format and which one is a protocol."
    }
  },
  {
    "id": "ch2-mc-114",
    "chapter": 2,
    "section": "2.5 Web-Technologien",
    "source": {
      "document": "SOTE2 Skript (Softwareentwicklung 2)",
      "section": "2.5 Web-Technologien"
    },
    "type": "mc",
    "difficulty": "ultra",
    "question": {
      "de": "Ein Browser fordert per HTTP Daten von einem Server an, der sie als JSON zurückliefert. Welche Aussage ist korrekt?",
      "en": "A browser requests data from a server via HTTP and the server returns it as JSON. Which statement is correct?"
    },
    "clarification": null,
    "code": null,
    "options": [
      {
        "id": "a",
        "text": {
          "de": "Der Browser ist der Client und sendet einen Request; der Server antwortet mit einer Response, deren Inhalt als JSON-Text vorliegt.",
          "en": "The browser is the client and sends a request; the server answers with a response whose content is JSON text."
        }
      },
      {
        "id": "b",
        "text": {
          "de": "JSON ist das Protokoll, über das der Server antwortet; HTTP ist das Datenformat der Antwort.",
          "en": "JSON is the protocol over which the server answers; HTTP is the data format of the answer."
        }
      },
      {
        "id": "c",
        "text": {
          "de": "HTTP ist ein binäres Protokoll, weil JSON textbasiert ist.",
          "en": "HTTP is a binary protocol because JSON is text-based."
        }
      },
      {
        "id": "d",
        "text": {
          "de": "Der Server sendet zuerst einen Request an den Browser, der Browser antwortet mit dem JSON.",
          "en": "The server first sends a request to the browser, and the browser answers with the JSON."
        }
      }
    ],
    "answer": "a",
    "explanation": {
      "de": "Der Browser ist der Client und sendet einen Request, der Server antwortet mit einer Response, deren Inhalt als JSON-Text vorliegt. JSON ist ein Datenformat und HTTP das Protokoll, nicht umgekehrt; HTTP ist textbasiert, und die Kommunikation beginnt immer mit der Anfrage des Clients.",
      "en": "The browser is the client and sends a request; the server answers with a response whose content is JSON text. JSON is a data format and HTTP is the protocol, not the other way round; HTTP is text-based, and communication always starts with the client's request."
    },
    "tip": {
      "de": "Trenne Transportprotokoll, Rollen und Format der Nutzdaten.",
      "en": "Separate the transport protocol, the roles and the format of the payload."
    }
  },
  {
    "id": "ch2-mc-115",
    "chapter": 2,
    "section": "2.6 Begriffe",
    "source": {
      "document": "SOTE2 Skript (Softwareentwicklung 2)",
      "section": "2.6 Begriffe"
    },
    "type": "mc",
    "difficulty": "easy",
    "question": {
      "de": "Was ist ein Client im Sinne des Skripts?",
      "en": "What is a client in the sense of the script?"
    },
    "clarification": null,
    "code": null,
    "options": [
      {
        "id": "a",
        "text": {
          "de": "Ein Programm, das über ein Netzwerk die Dienste eines Servers nutzt",
          "en": "A program that uses the services of a server over a network"
        }
      },
      {
        "id": "b",
        "text": {
          "de": "Der Rechner, auf dem ein Serverprogramm läuft",
          "en": "The computer on which a server program runs"
        }
      },
      {
        "id": "c",
        "text": {
          "de": "Ein Programm, das einen Dienst im Netzwerk bereitstellt",
          "en": "A program that provides a service in the network"
        }
      },
      {
        "id": "d",
        "text": {
          "de": "Eine Sprache, in der Webseiten geschrieben werden",
          "en": "A language in which web pages are written"
        }
      }
    ],
    "answer": "a",
    "explanation": {
      "de": "Ein Client („Kunde“) ist ein Programm, das über ein Netzwerk die Dienste eines Servers nutzt, z. B. ein Webbrowser. Das Programm, das den Dienst anbietet, ist der Server, und der Rechner, auf dem dieses läuft, ist der Host.",
      "en": "A client (“customer”) is a program that uses the services of a server over a network, e.g. a web browser. The program offering the service is the server, and the computer it runs on is the host."
    },
    "tip": {
      "de": "Das deutsche Wort in Klammern im Skript lautet „Kunde“.",
      "en": "The script gives a word in brackets that means “customer”."
    }
  },
  {
    "id": "ch2-mc-116",
    "chapter": 2,
    "section": "2.6 Begriffe",
    "source": {
      "document": "SOTE2 Skript (Softwareentwicklung 2)",
      "section": "2.6 Begriffe"
    },
    "type": "mc",
    "difficulty": "medium",
    "question": {
      "de": "Wie wird der Rechner bezeichnet, auf dem ein Serverprogramm läuft (also die Server-Hardware)?",
      "en": "What is the computer called on which a server program runs (i.e. the server hardware)?"
    },
    "clarification": {
      "de": "Gemeint ist die Hardware, nicht die Software.",
      "en": "The hardware is meant, not the software."
    },
    "code": null,
    "options": [
      {
        "id": "a",
        "text": {
          "de": "Host",
          "en": "Host"
        }
      },
      {
        "id": "b",
        "text": {
          "de": "Client",
          "en": "Client"
        }
      },
      {
        "id": "c",
        "text": {
          "de": "Webbrowser",
          "en": "Web browser"
        }
      },
      {
        "id": "d",
        "text": {
          "de": "Protokoll",
          "en": "Protocol"
        }
      }
    ],
    "answer": "a",
    "explanation": {
      "de": "Dieser Rechner heißt Host („Gastgeber“); auf ihm können mehrere Serverprogramme gleichzeitig laufen. Der Client ist ein Programm, das Dienste nutzt, ein Webbrowser ist ein spezieller Client, und ein Protokoll ist ein Regelwerk für die Kommunikation.",
      "en": "This computer is called a host; several server programs can run on it at the same time. The client is a program that uses services, a web browser is a specific client, and a protocol is a set of rules for communication."
    },
    "tip": {
      "de": "Das Wort bedeutet im Deutschen „Gastgeber“.",
      "en": "The word translates to “Gastgeber” in German."
    }
  },
  {
    "id": "ch2-mc-117",
    "chapter": 2,
    "section": "2.6 Begriffe",
    "source": {
      "document": "SOTE2 Skript (Softwareentwicklung 2)",
      "section": "2.6 Begriffe"
    },
    "type": "mc",
    "difficulty": "ultra",
    "question": {
      "de": "Auf einem Laptop läuft ein lokaler Webserver. Im Browser desselben Laptops wird http://127.0.0.1/ aufgerufen. Welche Aussage ist korrekt?",
      "en": "A local web server runs on a laptop. In the browser of the same laptop http://127.0.0.1/ is opened. Which statement is correct?"
    },
    "clarification": null,
    "code": null,
    "options": [
      {
        "id": "a",
        "text": {
          "de": "Der Laptop ist der Host; der Browser ist der Client und das Webserver-Programm der Server, obwohl beide auf demselben Rechner laufen.",
          "en": "The laptop is the host; the browser is the client and the web server program is the server, even though both run on the same computer."
        }
      },
      {
        "id": "b",
        "text": {
          "de": "Da alles auf einem Rechner läuft, findet keine Client-Server-Kommunikation statt; der Browser liest die Dateien direkt.",
          "en": "Since everything runs on one computer, no client-server communication takes place; the browser reads the files directly."
        }
      },
      {
        "id": "c",
        "text": {
          "de": "Der Webserver ist die Hardware (Host), der Browser läuft auf einem separaten Client-Rechner.",
          "en": "The web server is the hardware (host), the browser runs on a separate client computer."
        }
      },
      {
        "id": "d",
        "text": {
          "de": "Der Laptop ist gleichzeitig Client und Server; einen Host gibt es nur bei mehreren Rechnern.",
          "en": "The laptop is client and server at the same time; a host only exists with several computers."
        }
      }
    ],
    "answer": "a",
    "explanation": {
      "de": "Der Laptop ist der Host, der Browser der Client und das Webserver-Programm der Server; die Rollen bleiben auch auf demselben Rechner bestehen. Client-Server-Kommunikation per HTTP findet weiterhin statt, und der Server ist die Software, nicht die Hardware.",
      "en": "The laptop is the host, the browser the client and the web server program the server; the roles remain even on the same computer. Client-server communication via HTTP still takes place, and the server is the software, not the hardware."
    },
    "tip": {
      "de": "Unterscheide Hardware (Host) von den beiden beteiligten Programmen.",
      "en": "Distinguish the hardware (host) from the two programs involved."
    }
  },
  {
    "id": "ch2-mc-118",
    "chapter": 2,
    "section": "2.7 URLs",
    "source": {
      "document": "SOTE2 Skript (Softwareentwicklung 2)",
      "section": "2.7 URLs"
    },
    "type": "mc",
    "difficulty": "ultra",
    "question": {
      "de": "Welche Aussage über die URL im Codekommentar ist korrekt?",
      "en": "Which statement about the URL in the code comment is correct?"
    },
    "clarification": null,
    "code": "# http://127.0.0.1:5000/data.json?id=3",
    "options": [
      {
        "id": "a",
        "text": {
          "de": "Der Host ist der lokale PC, der Port 5000 ersetzt den Default-Port 80 von http, und id=3 ist ein Query-Parameter.",
          "en": "The host is the local PC, port 5000 replaces the default port 80 of http, and id=3 is a query parameter."
        }
      },
      {
        "id": "b",
        "text": {
          "de": "Port 5000 ist der Default-Port von http; ohne Angabe würde 443 verwendet.",
          "en": "Port 5000 is the default port of http; without it, 443 would be used."
        }
      },
      {
        "id": "c",
        "text": {
          "de": "127.0.0.1 adressiert einen Server im Internet; id=3 gehört zum Pfad.",
          "en": "127.0.0.1 addresses a server on the Internet; id=3 belongs to the path."
        }
      },
      {
        "id": "d",
        "text": {
          "de": "Die Query beginnt erst nach dem Zeichen #, daher ist id=3 das Fragment.",
          "en": "The query only starts after the # character, so id=3 is the fragment."
        }
      }
    ],
    "answer": "a",
    "explanation": {
      "de": "Das Schema ist http, 127.0.0.1 adressiert den lokalen PC, der Server lauscht auf Port 5000 statt auf dem Default-Port 80, und /data.json?id=3 besteht aus Pfad data.json und Query id=3. Der Default-Port von http ist 80 (443 gehört zu https), 127.0.0.1 ist kein Rechner im Internet, und die Query beginnt mit ?, nicht mit #.",
      "en": "The scheme is http, 127.0.0.1 addresses the local PC, the server listens on port 5000 instead of the default port 80, and /data.json?id=3 consists of path data.json and query id=3. The default port of http is 80 (443 belongs to https), 127.0.0.1 is not a computer on the Internet, and the query starts with ?, not #."
    },
    "tip": {
      "de": "Zerlege die URL in Schema, Host, Port, Pfad und Query und prüfe jede Option einzeln.",
      "en": "Split the URL into scheme, host, port, path and query and check each option individually."
    }
  },
  {
    "id": "ch2-tf-101",
    "chapter": 2,
    "section": "2.2 Grundlagen von vernetzten Systemen",
    "source": {
      "document": "SOTE2 Skript (Softwareentwicklung 2)",
      "section": "2.2 Grundlagen von vernetzten Systemen"
    },
    "type": "tf",
    "difficulty": "easy",
    "question": {
      "de": "Wahr oder falsch: Webanwendungen gehören zu den Themen, auf die sich die Vorlesung bei vernetzten Systemen fokussiert.",
      "en": "True or false: Web applications are among the topics the lecture focuses on for networked systems."
    },
    "clarification": null,
    "code": null,
    "answer": true,
    "explanation": {
      "de": "Wahr. Neben Persistenz, Nebenläufigkeit und den Grundlagen der Web-Technologien nennt das Skript ausdrücklich auch Webanwendungen als Schwerpunkt.",
      "en": "True. Besides persistence, concurrency and the basics of web technologies, the script explicitly names web applications as a focus."
    },
    "tip": {
      "de": "Lies die Aufzählung der Schwerpunkte am Anfang des Kapitels noch einmal.",
      "en": "Re-read the list of focus areas at the beginning of the chapter."
    }
  },
  {
    "id": "ch2-tf-102",
    "chapter": 2,
    "section": "2.2 Grundlagen von vernetzten Systemen",
    "source": {
      "document": "SOTE2 Skript (Softwareentwicklung 2)",
      "section": "2.2 Grundlagen von vernetzten Systemen"
    },
    "type": "tf",
    "difficulty": "medium",
    "question": {
      "de": "Wahr oder falsch: HTTP ist das einzige Protokoll, über das vernetzte Systeme kommunizieren können.",
      "en": "True or false: HTTP is the only protocol over which networked systems can communicate."
    },
    "clarification": {
      "de": "Gemeint ist die Kommunikation vernetzter Systeme allgemein.",
      "en": "Communication of networked systems in general is meant."
    },
    "code": null,
    "answer": false,
    "explanation": {
      "de": "Falsch. HTTP ist zwar das wichtigste Protokoll im Web, aber es gibt weitere Protokolle, z. B. FTP, wie schon die Schemas in URLs zeigen.",
      "en": "False. HTTP is the most important protocol on the web, but there are other protocols, e.g. FTP, as the schemes in URLs already show."
    },
    "tip": {
      "de": "Denke an die verschiedenen Schemas, die in URLs vorkommen.",
      "en": "Think of the different schemes that occur in URLs."
    }
  },
  {
    "id": "ch2-tf-103",
    "chapter": 2,
    "section": "2.3 Persistenz",
    "source": {
      "document": "SOTE2 Skript (Softwareentwicklung 2)",
      "section": "2.3 Persistenz"
    },
    "type": "tf",
    "difficulty": "hard",
    "question": {
      "de": "Wahr oder falsch: Wird der Inhalt einer Datei mit f.read() in eine Variable eingelesen, bleibt der Inhalt dieser Variablen auch nach dem Programmende erhalten.",
      "en": "True or false: If the content of a file is read into a variable with f.read(), the content of that variable is preserved after the program ends."
    },
    "clarification": {
      "de": "Es geht um die Variable selbst, nicht um die Datei.",
      "en": "This concerns the variable itself, not the file."
    },
    "code": "with open(\"data.txt\") as f:\n    content = f.read()",
    "answer": false,
    "explanation": {
      "de": "Falsch. Persistent ist die Datei auf dem Datenträger, nicht die Variable im Arbeitsspeicher. Mit dem Programmende geht die Variable verloren, die Datei bleibt aber bestehen.",
      "en": "False. The file on the storage medium is persistent, not the variable in main memory. The variable is lost when the program ends, whereas the file remains."
    },
    "tip": {
      "de": "Unterscheide, wo die Daten dauerhaft liegen und wo nur eine Kopie zur Laufzeit.",
      "en": "Distinguish where the data lives permanently and where there is only a runtime copy."
    }
  },
  {
    "id": "ch2-tf-104",
    "chapter": 2,
    "section": "2.3 Persistenz",
    "source": {
      "document": "SOTE2 Skript (Softwareentwicklung 2)",
      "section": "2.3 Persistenz"
    },
    "type": "tf",
    "difficulty": "hard",
    "question": {
      "de": "Wahr oder falsch: Cloud-Speicher wird in der Lehrveranstaltung nicht behandelt, weil er keine Persistenz bietet.",
      "en": "True or false: Cloud storage is not covered in the course because it does not provide persistence."
    },
    "clarification": {
      "de": "Beurteile, ob die Begründung im Skript steht.",
      "en": "Judge whether the reason is the one given in the script."
    },
    "code": null,
    "answer": false,
    "explanation": {
      "de": "Falsch. Cloud-Speicher ist eine Möglichkeit für persistente Speicherung. Er wird nur ausgelassen, weil er in der Regel auf denselben Technologien wie Dateien oder Datenbanken basiert.",
      "en": "False. Cloud storage is a way of persistent storage. It is only left out because it is generally based on the same technologies as files or databases."
    },
    "tip": {
      "de": "Achte auf die Begründung, nicht nur auf das Ergebnis der Aussage.",
      "en": "Look at the stated reason, not only at the conclusion."
    }
  },
  {
    "id": "ch2-tf-105",
    "chapter": 2,
    "section": "2.4 Nebenläufigkeit",
    "source": {
      "document": "SOTE2 Skript (Softwareentwicklung 2)",
      "section": "2.4 Nebenläufigkeit"
    },
    "type": "tf",
    "difficulty": "easy",
    "question": {
      "de": "Wahr oder falsch: Ein Webserver muss in der Lage sein, mehrere Anfragen verschiedener Clients gleichzeitig zu bearbeiten, ohne dass eine Anfrage die andere blockiert.",
      "en": "True or false: A web server must be able to process several requests from different clients at the same time without one request blocking another."
    },
    "clarification": null,
    "code": null,
    "answer": true,
    "explanation": {
      "de": "Wahr. Genau dieses Beispiel nennt das Skript für Nebenläufigkeit: Die Bearbeitung einer Anfrage darf die Bearbeitung einer anderen nicht blockieren.",
      "en": "True. This is exactly the example the script gives for concurrency: processing one request must not block the processing of another."
    },
    "tip": {
      "de": "Stell dir viele Nutzer vor, die gleichzeitig dieselbe Webseite aufrufen.",
      "en": "Imagine many users opening the same web page at once."
    }
  },
  {
    "id": "ch2-tf-106",
    "chapter": 2,
    "section": "2.5 Web-Technologien",
    "source": {
      "document": "SOTE2 Skript (Softwareentwicklung 2)",
      "section": "2.5 Web-Technologien"
    },
    "type": "tf",
    "difficulty": "easy",
    "question": {
      "de": "Wahr oder falsch: HTTP ist ein textbasiertes Protokoll, d. h. die Daten werden in Form von Text übertragen.",
      "en": "True or false: HTTP is a text-based protocol, i.e. the data is transferred in the form of text."
    },
    "clarification": null,
    "code": null,
    "answer": true,
    "explanation": {
      "de": "Wahr. Das Skript beschreibt HTTP ausdrücklich als textbasiertes Protokoll zwischen Client (z. B. Browser) und Server.",
      "en": "True. The script explicitly describes HTTP as a text-based protocol between client (e.g. browser) and server."
    },
    "tip": {
      "de": "Überlege, in welcher Form Anfragen und Antworten über die Leitung gehen.",
      "en": "Consider the form in which requests and responses travel over the wire."
    }
  },
  {
    "id": "ch2-tf-107",
    "chapter": 2,
    "section": "2.5 Web-Technologien",
    "source": {
      "document": "SOTE2 Skript (Softwareentwicklung 2)",
      "section": "2.5 Web-Technologien"
    },
    "type": "tf",
    "difficulty": "medium",
    "question": {
      "de": "Wahr oder falsch: JSON dient in erster Linie dazu, Layouts und Farben einer Webseite festzulegen.",
      "en": "True or false: JSON is primarily used to define the layout and colours of a web page."
    },
    "clarification": null,
    "code": null,
    "answer": false,
    "explanation": {
      "de": "Falsch. JSON ist ein Format zum Austausch strukturierter Daten zwischen Client und Server. Layouts und Farben werden mit CSS festgelegt.",
      "en": "False. JSON is a format for exchanging structured data between client and server. Layouts and colours are defined with CSS."
    },
    "tip": {
      "de": "Welche Aufgabe nennt das Skript für JSON, und welche Technologie ist fürs Aussehen zuständig?",
      "en": "Which task does the script give JSON, and which technology is responsible for appearance?"
    }
  },
  {
    "id": "ch2-tf-108",
    "chapter": 2,
    "section": "2.6 Begriffe",
    "source": {
      "document": "SOTE2 Skript (Softwareentwicklung 2)",
      "section": "2.6 Begriffe"
    },
    "type": "tf",
    "difficulty": "hard",
    "question": {
      "de": "Wahr oder falsch: Wenn auf einem Rechner sowohl ein Webserver als auch ein Mailserver laufen, handelt es sich um zwei Hosts.",
      "en": "True or false: If both a web server and a mail server run on one computer, there are two hosts."
    },
    "clarification": {
      "de": "Es handelt sich um denselben physischen Rechner.",
      "en": "It is the same physical computer."
    },
    "code": null,
    "answer": false,
    "explanation": {
      "de": "Falsch. Der Host ist der Rechner, auf dem Serverprogramme laufen, und ein Host kann mehrere Serverprogramme gleichzeitig ausführen. Hier gibt es also einen Host mit zwei Servern (Software).",
      "en": "False. The host is the computer on which server programs run, and one host can run several server programs at the same time. So there is one host with two servers (software)."
    },
    "tip": {
      "de": "Zähle getrennt: Wie viele Rechner und wie viele Serverprogramme sind beteiligt?",
      "en": "Count separately: how many computers and how many server programs are involved?"
    }
  },
  {
    "id": "ch2-ms-101",
    "chapter": 2,
    "section": "2.2 Grundlagen von vernetzten Systemen",
    "source": {
      "document": "SOTE2 Skript (Softwareentwicklung 2)",
      "section": "2.2 Grundlagen von vernetzten Systemen"
    },
    "type": "ms",
    "difficulty": "medium",
    "question": {
      "de": "Welche der folgenden Themen sind Schwerpunkte der Vorlesung für vernetzte, intelligente Systeme? Wähle alle zutreffenden aus.",
      "en": "Which of the following topics are focus areas of the lecture for networked, intelligent systems? Select all that apply."
    },
    "clarification": {
      "de": "Mehr als eine Option ist richtig.",
      "en": "More than one option is correct."
    },
    "code": null,
    "options": [
      {
        "id": "a",
        "text": {
          "de": "Persistenz mit Dateien und Datenbanken",
          "en": "Persistence with files and databases"
        }
      },
      {
        "id": "b",
        "text": {
          "de": "Nebenläufigkeit",
          "en": "Concurrency"
        }
      },
      {
        "id": "c",
        "text": {
          "de": "Grundlagen der Web-Technologien (HTTP, HTML, JSON)",
          "en": "Basics of web technologies (HTTP, HTML, JSON)"
        }
      },
      {
        "id": "d",
        "text": {
          "de": "Webanwendungen",
          "en": "Web applications"
        }
      },
      {
        "id": "e",
        "text": {
          "de": "Compilerbau",
          "en": "Compiler construction"
        }
      },
      {
        "id": "f",
        "text": {
          "de": "3D-Grafikprogrammierung",
          "en": "3D graphics programming"
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
      "de": "Schwerpunkte sind Persistenz mit Dateien und Datenbanken, Nebenläufigkeit, Grundlagen der Web-Technologien und Webanwendungen. Compilerbau und Grafikprogrammierung werden im Kapitel nicht als Schwerpunkt genannt.",
      "en": "The focus areas are persistence with files and databases, concurrency, basics of web technologies and web applications. Compiler construction and graphics programming are not named as focus areas in the chapter."
    },
    "tip": {
      "de": "Vier der sechs Optionen stehen in der Aufzählung des Kapitels.",
      "en": "Four of the six options appear in the chapter's list."
    }
  },
  {
    "id": "ch2-ms-102",
    "chapter": 2,
    "section": "2.2 Grundlagen von vernetzten Systemen",
    "source": {
      "document": "SOTE2 Skript (Softwareentwicklung 2)",
      "section": "2.2 Grundlagen von vernetzten Systemen"
    },
    "type": "ms",
    "difficulty": "hard",
    "question": {
      "de": "Ein Smart-Home-System empfängt laufend Sensordaten, analysiert sie währenddessen und trifft Entscheidungen; die Messwerte sollen auch nach einem Neustart des Systems noch verfügbar sein. Welche zwei der folgenden Basistechnologien sind dafür zentral? Wähle genau zwei aus.",
      "en": "A smart home system continuously receives sensor data, analyses it in the meantime and makes decisions; the measurements should still be available after a restart of the system. Which two of the following basic technologies are central for this? Select exactly two."
    },
    "clarification": {
      "de": "Genau zwei Optionen sind richtig.",
      "en": "Exactly two options are correct."
    },
    "code": null,
    "options": [
      {
        "id": "a",
        "text": {
          "de": "Nebenläufigkeit",
          "en": "Concurrency"
        }
      },
      {
        "id": "b",
        "text": {
          "de": "Persistenz",
          "en": "Persistence"
        }
      },
      {
        "id": "c",
        "text": {
          "de": "HTML-Rendering",
          "en": "HTML rendering"
        }
      },
      {
        "id": "d",
        "text": {
          "de": "URL-Schemas",
          "en": "URL schemes"
        }
      }
    ],
    "answer": [
      "a",
      "b"
    ],
    "explanation": {
      "de": "Das gleichzeitige Empfangen und Analysieren erfordert Nebenläufigkeit, das Weiterbestehen der Messwerte nach dem Neustart erfordert Persistenz. HTML-Rendering und URL-Schemas spielen für diese beiden Anforderungen keine Rolle.",
      "en": "Receiving and analysing at the same time requires concurrency, and keeping the measurements after the restart requires persistence. HTML rendering and URL schemes play no role for these two requirements."
    },
    "tip": {
      "de": "Ordne jeder Anforderung („gleichzeitig“, „auch nach Neustart“) eine Technologie zu.",
      "en": "Assign a technology to each requirement (“at the same time”, “even after restart”)."
    }
  },
  {
    "id": "ch2-ms-103",
    "chapter": 2,
    "section": "2.3 Persistenz",
    "source": {
      "document": "SOTE2 Skript (Softwareentwicklung 2)",
      "section": "2.3 Persistenz"
    },
    "type": "ms",
    "difficulty": "medium",
    "question": {
      "de": "Welche der folgenden Beispiele sind persistente Speicherung im Sinne des Skripts? Wähle alle zutreffenden aus.",
      "en": "Which of the following examples are persistent storage in the sense of the script? Select all that apply."
    },
    "clarification": {
      "de": "Mehr als eine Option ist richtig.",
      "en": "More than one option is correct."
    },
    "code": null,
    "options": [
      {
        "id": "a",
        "text": {
          "de": "Eine CSV-Datei auf der Festplatte",
          "en": "A CSV file on the hard disk"
        }
      },
      {
        "id": "b",
        "text": {
          "de": "Eine relationale Datenbank",
          "en": "A relational database"
        }
      },
      {
        "id": "c",
        "text": {
          "de": "Eine NoSQL-Datenbank",
          "en": "A NoSQL database"
        }
      },
      {
        "id": "d",
        "text": {
          "de": "Ein Objekt in Amazon S3 (Cloud-Speicher)",
          "en": "An object in Amazon S3 (cloud storage)"
        }
      },
      {
        "id": "e",
        "text": {
          "de": "Eine lokale Variable in einer Funktion",
          "en": "A local variable in a function"
        }
      },
      {
        "id": "f",
        "text": {
          "de": "Der Aufrufkontext (Call Stack) während der Laufzeit",
          "en": "The call context (call stack) during runtime"
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
      "de": "Dateien wie CSV, relationale und NoSQL-Datenbanken sowie Cloud-Speicher wie Amazon S3 halten Daten über die Laufzeit hinaus. Eine lokale Variable und ein Aufrufkontext existieren nur, solange das Programm läuft.",
      "en": "Files such as CSV, relational and NoSQL databases and cloud storage such as Amazon S3 keep data beyond the runtime. A local variable and a call context only exist while the program runs."
    },
    "tip": {
      "de": "Prüfe pro Option, ob die Daten das Programmende überstehen.",
      "en": "For each option check whether the data survives program termination."
    }
  },
  {
    "id": "ch2-ms-104",
    "chapter": 2,
    "section": "2.4 Nebenläufigkeit",
    "source": {
      "document": "SOTE2 Skript (Softwareentwicklung 2)",
      "section": "2.4 Nebenläufigkeit"
    },
    "type": "ms",
    "difficulty": "medium",
    "question": {
      "de": "Welche der folgenden Situationen sind typische Beispiele dafür, dass Nebenläufigkeit wichtig ist? Wähle alle zutreffenden aus.",
      "en": "Which of the following situations are typical examples of why concurrency matters? Select all that apply."
    },
    "clarification": {
      "de": "Mehr als eine Option ist richtig.",
      "en": "More than one option is correct."
    },
    "code": null,
    "options": [
      {
        "id": "a",
        "text": {
          "de": "Ein Webserver bedient mehrere Clients gleichzeitig.",
          "en": "A web server serves several clients at the same time."
        }
      },
      {
        "id": "b",
        "text": {
          "de": "Sensordaten werden in Echtzeit verarbeitet, während sie analysiert werden.",
          "en": "Sensor data is processed in real time while it is being analysed."
        }
      },
      {
        "id": "c",
        "text": {
          "de": "In einer Fabrik werden mehrere Maschinen gleichzeitig gesteuert.",
          "en": "Several machines are controlled simultaneously in a factory."
        }
      },
      {
        "id": "d",
        "text": {
          "de": "Eine kleine Liste wird einmalig sortiert.",
          "en": "A small list is sorted once."
        }
      },
      {
        "id": "e",
        "text": {
          "de": "Ein einzelner String wird formatiert und ausgegeben.",
          "en": "A single string is formatted and printed."
        }
      }
    ],
    "answer": [
      "a",
      "b",
      "c"
    ],
    "explanation": {
      "de": "Webserver mit mehreren Clients, Echtzeit-Sensordatenströme und die gleichzeitige Steuerung mehrerer Maschinen nennt das Skript als Beispiele. Das einmalige Sortieren einer kleinen Liste oder das Formatieren eines Strings erfordert keine gleichzeitigen Aufgaben.",
      "en": "The script names web servers with several clients, real-time sensor data streams and the simultaneous control of several machines as examples. Sorting a small list once or formatting a string does not require simultaneous tasks."
    },
    "tip": {
      "de": "Suche Situationen, in denen mehrere Dinge gleichzeitig passieren müssen.",
      "en": "Look for situations where several things have to happen at once."
    }
  },
  {
    "id": "ch2-ms-105",
    "chapter": 2,
    "section": "2.5 Web-Technologien",
    "source": {
      "document": "SOTE2 Skript (Softwareentwicklung 2)",
      "section": "2.5 Web-Technologien"
    },
    "type": "ms",
    "difficulty": "medium",
    "question": {
      "de": "Welche drei der folgenden Angaben sind HTTP-Methoden? Wähle genau drei aus.",
      "en": "Which three of the following are HTTP methods? Select exactly three."
    },
    "clarification": {
      "de": "Es sind genau drei Optionen richtig.",
      "en": "Exactly three options are correct."
    },
    "code": null,
    "options": [
      {
        "id": "a",
        "text": {
          "de": "GET",
          "en": "GET"
        }
      },
      {
        "id": "b",
        "text": {
          "de": "PUT",
          "en": "PUT"
        }
      },
      {
        "id": "c",
        "text": {
          "de": "DELETE",
          "en": "DELETE"
        }
      },
      {
        "id": "d",
        "text": {
          "de": "READ",
          "en": "READ"
        }
      },
      {
        "id": "e",
        "text": {
          "de": "SEND",
          "en": "SEND"
        }
      }
    ],
    "answer": [
      "a",
      "b",
      "c"
    ],
    "explanation": {
      "de": "GET, PUT und DELETE sind HTTP-Methoden (das Skript nennt außerdem POST). READ und SEND sind keine HTTP-Methoden, auch wenn sie sinngemäß ähnlich klingen.",
      "en": "GET, PUT and DELETE are HTTP methods (the script also names POST). READ and SEND are not HTTP methods, even though they sound similar in meaning."
    },
    "tip": {
      "de": "Das Skript listet vier Methoden auf – drei davon stehen hier.",
      "en": "The script lists four methods – three of them appear here."
    }
  },
  {
    "id": "ch2-ms-106",
    "chapter": 2,
    "section": "2.6 Begriffe",
    "source": {
      "document": "SOTE2 Skript (Softwareentwicklung 2)",
      "section": "2.6 Begriffe"
    },
    "type": "ms",
    "difficulty": "hard",
    "question": {
      "de": "Welche der folgenden Aussagen zu den Begriffen Client, Server und Host sind zutreffend? Wähle alle zutreffenden aus.",
      "en": "Which of the following statements about the terms client, server and host are correct? Select all that apply."
    },
    "clarification": {
      "de": "Mehr als eine Option ist richtig.",
      "en": "More than one option is correct."
    },
    "code": null,
    "options": [
      {
        "id": "a",
        "text": {
          "de": "Webserver sind in der Regel HTTP-Server.",
          "en": "Web servers are usually HTTP servers."
        }
      },
      {
        "id": "b",
        "text": {
          "de": "Ein Webbrowser kann HTML interpretieren und darstellen (rendern).",
          "en": "A web browser can interpret and display (render) HTML."
        }
      },
      {
        "id": "c",
        "text": {
          "de": "Der Server ist die Hardware, auf der der Dienst läuft.",
          "en": "The server is the hardware on which the service runs."
        }
      },
      {
        "id": "d",
        "text": {
          "de": "Ein Client ist immer ein Mensch, der vor dem Rechner sitzt.",
          "en": "A client is always a person sitting at the computer."
        }
      },
      {
        "id": "e",
        "text": {
          "de": "Beim Abruf einer Webseite ist der Webbrowser der Client.",
          "en": "When a web page is requested, the web browser is the client."
        }
      }
    ],
    "answer": [
      "a",
      "b",
      "e"
    ],
    "explanation": {
      "de": "Webserver sind in der Regel HTTP-Server, und beim Abruf einer Webseite ist der Browser der Client; ein Browser kann HTML interpretieren und rendern. Ein Server ist Software und nicht der Host, und ein Client ist ein Programm, nicht zwingend ein Mensch.",
      "en": "Web servers are usually HTTP servers, and when a web page is requested the browser is the client; a browser can interpret and render HTML. A server is software and not the host, and a client is a program, not necessarily a person."
    },
    "tip": {
      "de": "Unterscheide konsequent zwischen Software (Client, Server) und Hardware (Host).",
      "en": "Consistently distinguish between software (client, server) and hardware (host)."
    }
  },
  {
    "id": "ch2-ms-107",
    "chapter": 2,
    "section": "2.7 URLs",
    "source": {
      "document": "SOTE2 Skript (Softwareentwicklung 2)",
      "section": "2.7 URLs"
    },
    "type": "ms",
    "difficulty": "hard",
    "question": {
      "de": "Welche der folgenden Zuordnungen von Schema und Standard-Port sind korrekt? Wähle alle zutreffenden aus.",
      "en": "Which of the following assignments of scheme to default port are correct? Select all that apply."
    },
    "clarification": {
      "de": "Mehr als eine Option ist richtig.",
      "en": "More than one option is correct."
    },
    "code": null,
    "options": [
      {
        "id": "a",
        "text": {
          "de": "http: 80",
          "en": "http: 80"
        }
      },
      {
        "id": "b",
        "text": {
          "de": "https: 443",
          "en": "https: 443"
        }
      },
      {
        "id": "c",
        "text": {
          "de": "ftp: 21",
          "en": "ftp: 21"
        }
      },
      {
        "id": "d",
        "text": {
          "de": "https: 80",
          "en": "https: 80"
        }
      },
      {
        "id": "e",
        "text": {
          "de": "http: 443",
          "en": "http: 443"
        }
      }
    ],
    "answer": [
      "a",
      "b",
      "c"
    ],
    "explanation": {
      "de": "Standard-Ports sind http: 80, https: 443 und ftp: 21. Die Kombinationen https: 80 und http: 443 vertauschen die Ports.",
      "en": "Default ports are http: 80, https: 443 and ftp: 21. The combinations https: 80 and http: 443 swap the ports."
    },
    "tip": {
      "de": "Der unverschlüsselte Webverkehr nutzt die kleinere Portnummer.",
      "en": "Unencrypted web traffic uses the smaller port number."
    }
  },
  {
    "id": "ch2-fib-101",
    "chapter": 2,
    "section": "2.7 URLs",
    "source": {
      "document": "SOTE2 Skript (Softwareentwicklung 2)",
      "section": "2.7 URLs"
    },
    "type": "fib",
    "difficulty": "easy",
    "question": {
      "de": "Ergänze das Schema, sodass eine verschlüsselte Verbindung (Default-Port 443) zu www.thu.de aufgebaut wird.",
      "en": "Fill in the scheme so that an encrypted connection (default port 443) to www.thu.de is established."
    },
    "clarification": {
      "de": "Trage nur das Schema ohne :// ein.",
      "en": "Enter only the scheme without ://."
    },
    "code": "# ____://www.thu.de/",
    "blanks": [
      {
        "accepted": [
          "https"
        ],
        "caseSensitive": true
      }
    ],
    "explanation": {
      "de": "Das Schema https steht für verschlüsselte HTTP-Übertragung und verwendet standardmäßig Port 443. Das Schema http wäre unverschlüsselt und nutzt Port 80.",
      "en": "The scheme https stands for encrypted HTTP transfer and uses port 443 by default. The scheme http would be unencrypted and uses port 80."
    },
    "tip": {
      "de": "Das Schema bestimmt das Protokoll und damit den Default-Port.",
      "en": "The scheme determines the protocol and thus the default port."
    }
  },
  {
    "id": "ch2-fib-102",
    "chapter": 2,
    "section": "2.7 URLs",
    "source": {
      "document": "SOTE2 Skript (Softwareentwicklung 2)",
      "section": "2.7 URLs"
    },
    "type": "fib",
    "difficulty": "medium",
    "question": {
      "de": "Ergänze die beiden Trennzeichen der Query: das Zeichen, das die Query einleitet, und das Zeichen zwischen den beiden Parametern lat und lon.",
      "en": "Fill in the two separators of the query: the character introducing the query and the character between the two parameters lat and lon."
    },
    "clarification": {
      "de": "Trage in jede Lücke genau ein Zeichen ein.",
      "en": "Enter exactly one character in each blank."
    },
    "code": "# http://api.open-notify.org/iss-now.json____lat=48.418____lon=9.939",
    "blanks": [
      {
        "accepted": [
          "?"
        ],
        "caseSensitive": true
      },
      {
        "accepted": [
          "&"
        ],
        "caseSensitive": true
      }
    ],
    "explanation": {
      "de": "Die Query beginnt mit einem Fragezeichen, und zwischen zwei Schlüssel-Wert-Paaren steht ein Ampersand (&). Zwischen Schlüssel und Wert steht ein Gleichheitszeichen.",
      "en": "The query starts with a question mark, and an ampersand (&) separates two key-value pairs. An equals sign stands between key and value."
    },
    "tip": {
      "de": "Das erste Zeichen leitet die Query ein, das zweite trennt Paare.",
      "en": "The first character introduces the query, the second separates pairs."
    }
  },
  {
    "id": "ch2-fib-103",
    "chapter": 2,
    "section": "2.7 URLs",
    "source": {
      "document": "SOTE2 Skript (Softwareentwicklung 2)",
      "section": "2.7 URLs"
    },
    "type": "fib",
    "difficulty": "easy",
    "question": {
      "de": "Welche Portnummer kann man in der zweiten URL ergänzen, damit sie dasselbe Ziel adressiert wie die erste (ohne Port)?",
      "en": "Which port number can be filled in in the second URL so that it addresses the same target as the first one (without port)?"
    },
    "clarification": {
      "de": "Es geht um das Schema http, nicht https.",
      "en": "The scheme is http, not https."
    },
    "code": "# http://example.com/\n# same target:\n# http://example.com:____/",
    "blanks": [
      {
        "accepted": [
          "80"
        ],
        "caseSensitive": true
      }
    ],
    "explanation": {
      "de": "Ist kein Port angegeben, wird der Default-Port des Schemas verwendet; für http ist das Port 80. Deshalb adressiert http://example.com:80/ dasselbe wie http://example.com/.",
      "en": "If no port is given, the default port of the scheme is used; for http that is port 80. Therefore http://example.com:80/ addresses the same thing as http://example.com/."
    },
    "tip": {
      "de": "Der Default-Port von http ist ein Well-known Port.",
      "en": "The default port of http is a well-known port."
    }
  },
  {
    "id": "ch2-fib-104",
    "chapter": 2,
    "section": "2.7 URLs",
    "source": {
      "document": "SOTE2 Skript (Softwareentwicklung 2)",
      "section": "2.7 URLs"
    },
    "type": "fib",
    "difficulty": "hard",
    "question": {
      "de": "Der Benutzer anna mit dem Passwort secret soll in der URL vor dem Host angegeben werden. Ergänze die beiden Trennzeichen.",
      "en": "The user anna with the password secret is to be given in the URL before the host. Fill in the two separators."
    },
    "clarification": {
      "de": "Trage in jede Lücke genau ein Zeichen ein.",
      "en": "Enter exactly one character in each blank."
    },
    "code": "# https://anna____secret____www.example.com/",
    "blanks": [
      {
        "accepted": [
          ":"
        ],
        "caseSensitive": true
      },
      {
        "accepted": [
          "@"
        ],
        "caseSensitive": true
      }
    ],
    "explanation": {
      "de": "Die User-Info steht vor dem Host: Benutzername und Passwort werden durch einen Doppelpunkt getrennt, und ein @ trennt die User-Info vom Host. Das Passwort in der URL gilt aus Sicherheitsgründen als problematisch.",
      "en": "The user info comes before the host: user name and password are separated by a colon, and an @ separates the user info from the host. A password in the URL is considered problematic for security reasons."
    },
    "tip": {
      "de": "Das erste Zeichen trennt Name und Passwort, das zweite markiert das Ende der User-Info.",
      "en": "The first character separates name and password, the second marks the end of the user info."
    }
  },
  {
    "id": "ch2-fib-105",
    "chapter": 2,
    "section": "2.7 URLs",
    "source": {
      "document": "SOTE2 Skript (Softwareentwicklung 2)",
      "section": "2.7 URLs"
    },
    "type": "fib",
    "difficulty": "easy",
    "question": {
      "de": "Ergänze die IP-Adresse, die grundsätzlich immer den lokalen PC adressiert.",
      "en": "Fill in the IP address that always addresses the local PC."
    },
    "clarification": {
      "de": "Trage die IP-Adresse in Dezimalschreibweise ein.",
      "en": "Enter the IP address in dotted decimal notation."
    },
    "code": "# http://____/",
    "blanks": [
      {
        "accepted": [
          "127.0.0.1"
        ],
        "caseSensitive": true
      }
    ],
    "explanation": {
      "de": "Die IP-Adresse 127.0.0.1 adressiert immer den lokalen Rechner. Die Alternative localhost funktioniert fast immer genauso, das Skript empfiehlt aber 127.0.0.1.",
      "en": "The IP address 127.0.0.1 always addresses the local computer. The alternative localhost almost always works the same, but the script recommends 127.0.0.1."
    },
    "tip": {
      "de": "Es ist die bekannteste Loopback-Adresse mit vier Zahlen.",
      "en": "It is the best-known loopback address, consisting of four numbers."
    }
  },
  {
    "id": "ch2-fib-106",
    "chapter": 2,
    "section": "2.5 Web-Technologien",
    "source": {
      "document": "SOTE2 Skript (Softwareentwicklung 2)",
      "section": "2.5 Web-Technologien"
    },
    "type": "fib",
    "difficulty": "easy",
    "question": {
      "de": "Ergänze die HTTP-Methode, mit der ein Client die Ressource /index.html vom Server abruft.",
      "en": "Fill in the HTTP method with which a client retrieves the resource /index.html from the server."
    },
    "clarification": {
      "de": "Schreibe den Methodennamen in Großbuchstaben.",
      "en": "Write the method name in capital letters."
    },
    "code": "____ /index.html HTTP/1.1",
    "blanks": [
      {
        "accepted": [
          "GET"
        ],
        "caseSensitive": true
      }
    ],
    "explanation": {
      "de": "Mit GET werden Daten vom Server abgerufen. POST dient dem Senden von Daten, PUT dem Ersetzen oder Anlegen und DELETE dem Löschen einer Ressource.",
      "en": "GET is used to retrieve data from the server. POST is used to send data, PUT to replace or create and DELETE to remove a resource."
    },
    "tip": {
      "de": "Die Methode steht am Anfang der Request-Zeile und beschreibt, dass nur gelesen wird.",
      "en": "The method is at the start of the request line and indicates read-only access."
    }
  },
  {
    "id": "ch2-fib-107",
    "chapter": 2,
    "section": "2.5 Web-Technologien",
    "source": {
      "document": "SOTE2 Skript (Softwareentwicklung 2)",
      "section": "2.5 Web-Technologien"
    },
    "type": "fib",
    "difficulty": "medium",
    "question": {
      "de": "Ergänze die HTTP-Methode, mit der ein Client die Ressource /items/7 auf dem Server entfernen lässt.",
      "en": "Fill in the HTTP method with which a client has the resource /items/7 removed from the server."
    },
    "clarification": {
      "de": "Schreibe den Methodennamen in Großbuchstaben.",
      "en": "Write the method name in capital letters."
    },
    "code": "____ /items/7 HTTP/1.1",
    "blanks": [
      {
        "accepted": [
          "DELETE"
        ],
        "caseSensitive": true
      }
    ],
    "explanation": {
      "de": "DELETE ist die HTTP-Methode zum Löschen einer Ressource. GET ruft nur ab, POST sendet Daten, und PUT legt eine Ressource an oder ersetzt sie.",
      "en": "DELETE is the HTTP method for removing a resource. GET only retrieves, POST sends data, and PUT creates or replaces a resource."
    },
    "tip": {
      "de": "Der Methodenname sagt, was mit der Ressource passieren soll.",
      "en": "The method name says what is to happen to the resource."
    }
  },
  {
    "id": "ch2-fib-108",
    "chapter": 2,
    "section": "2.3 Persistenz",
    "source": {
      "document": "SOTE2 Skript (Softwareentwicklung 2)",
      "section": "2.3 Persistenz"
    },
    "type": "fib",
    "difficulty": "medium",
    "question": {
      "de": "Ergänze den Modus für open, sodass die neue Zeile an eine bestehende Datei angehängt wird (ohne ihren Inhalt zu löschen).",
      "en": "Fill in the mode for open so that the new line is appended to an existing file (without erasing its content)."
    },
    "clarification": {
      "de": "Trage nur den Modusbuchstaben ein.",
      "en": "Enter only the mode letter."
    },
    "code": "with open(\"log.txt\", \"____\") as f:\n    f.write(\"started\\n\")",
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
      "de": "Der Modus \"a\" (append) hängt Text ans Dateiende an und lässt den bisherigen Inhalt bestehen, die Daten werden so persistent gesammelt. Der Modus \"w\" würde die Datei dagegen überschreiben.",
      "en": "The mode \"a\" (append) adds text at the end of the file and keeps the previous content, so the data is collected persistently. The mode \"w\", in contrast, would overwrite the file."
    },
    "tip": {
      "de": "Es ist ein einzelner Buchstabe, der für „anhängen“ steht.",
      "en": "It is a single letter that stands for “append”."
    }
  },
  {
    "id": "ch2-fib-109",
    "chapter": 2,
    "section": "2.5 Web-Technologien",
    "source": {
      "document": "SOTE2 Skript (Softwareentwicklung 2)",
      "section": "2.5 Web-Technologien"
    },
    "type": "fib",
    "difficulty": "easy",
    "question": {
      "de": "Ergänze das Tag im schließenden HTML-Tag, sodass der Absatz korrekt geschlossen wird.",
      "en": "Fill in the tag name of the closing HTML tag so that the paragraph is closed correctly."
    },
    "clarification": {
      "de": "Trage nur den Tag-Namen ein, ohne spitze Klammern.",
      "en": "Enter only the tag name, without angle brackets."
    },
    "code": "<p>Hello world</____>",
    "blanks": [
      {
        "accepted": [
          "p"
        ],
        "caseSensitive": true
      }
    ],
    "explanation": {
      "de": "Ein HTML-Element wird mit dem passenden schließenden Tag beendet: Auf <p> folgt </p>. HTML ist die Sprache, in der Webseiten geschrieben werden.",
      "en": "An HTML element is ended with the matching closing tag: <p> is followed by </p>. HTML is the language in which web pages are written."
    },
    "tip": {
      "de": "Das schließende Tag trägt denselben Namen wie das öffnende, nur mit Schrägstrich.",
      "en": "The closing tag has the same name as the opening one, just with a slash."
    }
  },
  {
    "id": "ch2-fe-101",
    "chapter": 2,
    "section": "2.7 URLs",
    "source": {
      "document": "SOTE2 Skript (Softwareentwicklung 2)",
      "section": "2.7 URLs"
    },
    "type": "fe",
    "difficulty": "hard",
    "question": {
      "de": "In der folgenden Zerlegung der URL steckt genau ein Fehler. In welcher Zeile?",
      "en": "The following breakdown of the URL contains exactly one error. In which line?"
    },
    "clarification": {
      "de": "Die Zeilen 2 bis 5 beschreiben die URL aus Zeile 1.",
      "en": "Lines 2 to 5 describe the URL from line 1."
    },
    "code": "# 1  URL    = https://www.thu.de/info.html\n# 2  scheme = https\n# 3  host   = www.thu.de\n# 4  port   = 80   # not given, so the default port of the scheme\n# 5  path   = /info.html",
    "options": [
      {
        "id": "a",
        "text": {
          "de": "Zeile 2 (Schema)",
          "en": "Line 2 (scheme)"
        }
      },
      {
        "id": "b",
        "text": {
          "de": "Zeile 3 (Host)",
          "en": "Line 3 (host)"
        }
      },
      {
        "id": "c",
        "text": {
          "de": "Zeile 4 (Port)",
          "en": "Line 4 (port)"
        }
      },
      {
        "id": "d",
        "text": {
          "de": "Zeile 5 (Pfad)",
          "en": "Line 5 (path)"
        }
      }
    ],
    "answer": "c",
    "explanation": {
      "de": "Ist in einer https-URL kein Port angegeben, gilt der Default-Port 443, nicht 80; 80 ist der Default-Port von http. Schema, Host und Pfad sind in der Zerlegung richtig.",
      "en": "If no port is given in an https URL, the default port 443 applies, not 80; 80 is the default port of http. Scheme, host and path are correct in the breakdown."
    },
    "tip": {
      "de": "Prüfe, zu welchem Schema der genannte Default-Port gehört.",
      "en": "Check which scheme the stated default port belongs to."
    }
  },
  {
    "id": "ch2-fe-102",
    "chapter": 2,
    "section": "2.7 URLs",
    "source": {
      "document": "SOTE2 Skript (Softwareentwicklung 2)",
      "section": "2.7 URLs"
    },
    "type": "fe",
    "difficulty": "medium",
    "question": {
      "de": "In der folgenden Beschreibung einer URL steckt genau ein Fehler. In welcher Zeile?",
      "en": "The following description of a URL contains exactly one error. In which line?"
    },
    "clarification": {
      "de": "Zeile 4 beschreibt, was die URL in Zeile 3 eigentlich ausdrücken soll.",
      "en": "Line 4 describes what the URL in line 3 is actually meant to express."
    },
    "code": "# 1  scheme  = http\n# 2  host    = www.example.com\n# 3  url     = http://www.example.com/search&q=python?lang=de\n# 4  meaning = path /search, parameters q=python and lang=de",
    "options": [
      {
        "id": "a",
        "text": {
          "de": "Zeile 1 (Schema)",
          "en": "Line 1 (scheme)"
        }
      },
      {
        "id": "b",
        "text": {
          "de": "Zeile 2 (Host)",
          "en": "Line 2 (host)"
        }
      },
      {
        "id": "c",
        "text": {
          "de": "Zeile 3 (Trennzeichen von Pfad, Query und Parametern)",
          "en": "Line 3 (separators of path, query and parameters)"
        }
      },
      {
        "id": "d",
        "text": {
          "de": "Zeile 4 (Beschreibung)",
          "en": "Line 4 (description)"
        }
      }
    ],
    "answer": "c",
    "explanation": {
      "de": "In Zeile 3 sind die Trennzeichen vertauscht: Die Query wird mit ? eingeleitet und die Parameter werden mit & getrennt, korrekt wäre also /search?q=python&lang=de. Schema und Host in den Zeilen 1 und 2 sind in Ordnung.",
      "en": "In line 3 the separators are swapped: the query is introduced with ? and parameters are separated with &, so the correct form would be /search?q=python&lang=de. Scheme and host in lines 1 and 2 are fine."
    },
    "tip": {
      "de": "Welches Zeichen leitet die Query ein, und welches trennt zwei Parameter?",
      "en": "Which character introduces the query and which separates two parameters?"
    }
  },
  {
    "id": "ch2-fe-103",
    "chapter": 2,
    "section": "2.6 Begriffe",
    "source": {
      "document": "SOTE2 Skript (Softwareentwicklung 2)",
      "section": "2.6 Begriffe"
    },
    "type": "fe",
    "difficulty": "hard",
    "question": {
      "de": "In der folgenden Beschreibung eines Seitenaufrufs steckt genau ein inhaltlicher Fehler. In welcher Zeile?",
      "en": "The following description of a page request contains exactly one factual error. In which line?"
    },
    "clarification": {
      "de": "Die Zeilen beschreiben den Abruf einer Webseite.",
      "en": "The lines describe the retrieval of a web page."
    },
    "code": "# 1  host A runs a web server program and a mail server program\n# 2  the browser on host B is the client\n# 3  the browser sends a request to the web server\n# 4  the web server sends back a request containing the HTML page",
    "options": [
      {
        "id": "a",
        "text": {
          "de": "Zeile 1 (Host mit zwei Serverprogrammen)",
          "en": "Line 1 (host with two server programs)"
        }
      },
      {
        "id": "b",
        "text": {
          "de": "Zeile 2 (Browser ist der Client)",
          "en": "Line 2 (browser is the client)"
        }
      },
      {
        "id": "c",
        "text": {
          "de": "Zeile 3 (Browser sendet Request)",
          "en": "Line 3 (browser sends request)"
        }
      },
      {
        "id": "d",
        "text": {
          "de": "Zeile 4 (Server sendet „Request“ mit der Seite zurück)",
          "en": "Line 4 (server sends back a “request” with the page)"
        }
      }
    ],
    "answer": "d",
    "explanation": {
      "de": "Die Kommunikation läuft nach dem Muster Request und Response: Der Client sendet die Anfrage, der Server antwortet. In Zeile 4 ist das umgekehrt dargestellt, denn der Server sendet eine Response, keinen Request. Die Zeilen 1 bis 3 sind korrekt.",
      "en": "Communication follows the request and response pattern: the client sends the request, the server answers. Line 4 shows this the wrong way round, since the server sends a response, not a request. Lines 1 to 3 are correct."
    },
    "tip": {
      "de": "Wer beginnt die Kommunikation, und wie heißt die Antwort?",
      "en": "Who starts the communication and what is the answer called?"
    }
  }
];
