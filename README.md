# M347 Main Quest 1

Willkommen zur Main Quest 1 für das Modul M347!  
In dieser Aufgabe richtest du eine React-Applikation inklusive Backend mit Docker ein.

## Schritte

### 1. Repository klonen
```bash
git clone https://github.com/maroethlisberger/M347_Main_Quest.git
```

### 2. Abhängigkeiten installieren
```bash
npm install
```

### 3. Backend vorbereiten
- Erstelle ein `docker-compose.yml`
- Binde das `Dockerfile-json-server` als Service ein

### 4. Backend starten
```bash
docker compose up --build --force-recreate
```

### 5. Backend testen
Überprüfe, ob der GET-Endpoint korrekt funktioniert:
http://localhost:8080/users

### 6. Frontend (React) vorbereiten
Erstelle ein eigenes `Dockerfile` für die React-Applikation

### 7. Frontend-Service integrieren
Binde den React-Service ebenfalls in das `docker-compose.yml` ein

### 8. Frontend starten und testen
Starte die Applikation erneut und prüfe, ob alle User korrekt im Frontend angezeigt werden: http://localhost:3000

### 9. Hot-Reload aktivieren
Passe das `docker-compose.yml` an, sodass ein Hot-Reload möglich ist. \
`Hinweis:` Binde den Source-Code als Volume im `docker-compose.yml` ein.

## Weitere Tipps
- Achte auf die korrekte Zuordnung der Ports
- Für Hot-Reload empfiehlt sich die Nutzung von Volumes in Docker

## Ziel
Nach Abschluss dieser Aufgabe hast du:
- Ein vollständiges Setup von Backend und Frontend in Docker.
- Erfahrung im Erstellen von Dockerfiles und der Nutzung von docker-compose.
- Eine Entwicklungsumgebung mit funktionierendem Hot-Reload.