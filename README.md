# M347 Main Quest 1

Willkommen zur Main Quest 1 für das Modul M347!  
In dieser Aufgabe richtest du eine React-Applikation inklusive Backend mit Docker ein.

## Milestones

### Milestone 1 – JSON Server lokal über Docker starten
Ziel: Einen JSON Server als Docker-Container starten und über Postman darauf zugreifen.

#### Aufgaben
1. Suche im Repository nach der Datei `Dockerfile-json-server`
2. Build ein Image basierend auf diesem Dockerfile
3. Starte einen Container mit dem erstellten Image und exponiere den Service über den Port 8080
4. Öffne deinen Browser und teste, ob du alle User über http://localhost:8080/users einsehen kannst

#### AK's
1. Image zu Dockerfile `Dockerfile-json-server` erstellt
2. Container mit Image gestartet
3. User über http://localhost:8080/users einsehbar


### Milestone 2 – Frontend als Docker-Container starten
Ziel: Ein vorhandenes Frontend-Projekt über Docker starten und mit dem Backend verbinden

#### Aufgaben
1. Erstelle ein `Dockerfile` im Root des Projektes
2. Build das Docker-Image
3. Starte den JSON Server Container aus Milestone 1
4. Starte einen Container mit dem gebuildeten Frontend Image und gebe dabei die JSON Server URL über die environment variable `REACT_APP_BACKEND_BASE_URL` mit
5. Überprüfe, ob alle User korrekt im Frontend angezeigt werden: http://localhost:3000

#### AK's
1. Dockerfile `Dockerfile-frontend` erstellt
2. Image zu `Dockerfile-frontend` gebuildet
3. Frontend Container mit dem Frontend Image gestartet
4. User über http://localhost:3000 einsehbar


### Milestone 3 – docker-compose für beide Services
Ziel: Beide Services (Frontend & JSON Server) gleichzeitig über docker-compose starten

#### Aufgaben
1. Erstelle eine `docker-compose.yml` im Root des Projektes
2. Definiere darin zwei Services:
   - Backend: nutzt das `Dockerfile-json-server`
   - Frontend: nutzt das `Dockerfile-frontend`
3. Starte das docker-compose file und überprüfe, ob alle User korrekt im Frontend angezeigt werden: http://localhost:3000

#### AK's
1. `docker-compose.yml` erstellt
2. Beide Services laufen analog zu Milestone 1 und 2


### Milestone 4 – Hot-Reload im Frontend aktivieren
Ziel: Code-Änderungen im Frontend sollen automatisch im laufenden Container aktualisiert werden (Hot-Reload)

#### Aufgaben
1. Passe `docker-compose.yml` an, sodass die benötigten Ordner vom Host über Volumes in den Frontend Container gemountet werden
2. Nebst den Volumes müssen folgende environment variablen dem Frontend Service hinzugefügt werden:
```
environment:
- CHOKIDAR_USEPOLLING=true
- WATCHPACK_POLLING=true
```
3. Starte nun erneut beide Services und öffne das Frontend unter: http://localhost:3000
4. Nimm im laufendem Betrieb eine Änderung vor (z.b Titel `Users` im `Home.tsx` zu `Students` ändern), speichere das File und überprüfe, ob die Änderungen im Browser ersichtlich sind

#### AK's
1. Korrekte Volumes in den Frontend Service gemountet
2. Vorgegebene Variablen dem Frontend Service hinzugefügt
3. Änderungen auf dem Host werden automatisch im Container reflektiert