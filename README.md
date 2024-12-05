# Projekt Biztrips - by Andy, Denis, Yao

## Installation und Konfiguration

### Scripts

- npm start
Startet das Programm im Entwicklermodus. Öffne [http://localhost:3000](http://localhost:3000/) um das Projekt zu öffnen!
- npm test
Startet den Testrunner im interaktiven Modus
- npm run build
Builded die Applikation um sie für die produktive Plattform ready zu machen. 

## Testkonzept

Um die Qualität und Zuverlässigkeit des zu entwickelnden Produkts zu prüfen, sollen Tests durchgeführt werden. 

### Teststrategie

Die Teststrategie konzentriert sich auf folgende Bereiche:

- **Backend-Tests**: Überprüfung der REST-API-Schnittstellen für CRUD-Operationen mit Postman.
    - Endpunkte: `GET /trips/{id}`, `POST /trips`, `PUT /trips/{id}`, `DELETE /trips/{id}`.
- **Frontend-Tests**:
    - **Unit-Tests** mit Jest für React-Komponenten.
    - **User-Interaktions-Tests** mit der Testing Library oder Cypress.
    - **Rendering-Tests** für User Stories mit der Testing Library oder Cypress.
- **Automatisierte Tests** in der CI/CD-Pipeline (GitHub) integriert, um sicherzustellen, dass Tests bei jedem Push ausgeführt werden und auf keinen Fall ein Merge Request auf die Produktion ohne erfolgreiche Prüfung eingeht. 

### **Rollen und Verantwortlichkeiten**

- **Entwicklerteam (Team Agile)**: Implementierung und Durchführung der Tests.
- **Teamleiter/Testmanager**: Überprüfung der Testabdeckung und Koordination.
- **DevOps-Ingenieur**: Einrichtung und Wartung der CI/CD-Pipeline.

### **Infrastruktur**

- **Testumgebung**:
    - Backend: JSON-Server auf Port 3001.
    - Frontend: React-Anwendung lokal und auf Netlify.
    - Pipeline: GitLab oder GitHub Actions mit Stages für Build, Test und Deploy.
- **Testdaten**:
    - Bereitgestellt über den JSON-Server (`http://localhost:3001/trips`).
    - Simulierte Daten für verschiedene Szenarien.
    - In Unit Test arbeiten wir mit Mocking, um die Abhängigkeit möglichst zu reduzieren

### Testfälle

#### Unit Tests

|  | Unit Test GET Products |
| --- | --- |
| Testszenario | Geprüft wird, ob der Request der die Products abholen soll, auch wirklich korrekt in der Applikation integriert wurde. |
| Testvoraussetzung | - Grundvoraussetzungen\n- Mock Data |
| Testschritte | 1. Der Rückgabewert der Unit Response wird gemockt\n2. Die Methode, zum abholen der Products wird abgerufen\n3. Es wird verglichen, ob die richtige Response Value vorhanden ist |
| Erwartete Resultate | Der gesetzte Rückgabewert und der erhaltene Rückgabewert müssen übereinstimmen |

#### 

|  | Unit Test GET Cart Items |
| --- | --- |
| Testszenario | Geprüft wird, ob der Request die Items im Warenkorb abholen soll, auch wirklich korrekt in der Applikation integriert wurde. |
| Testvoraussetzung | - Grundvoraussetzungen\n- Mock Data |
| Testschritte | 1. Der Rückgabewert der Unit Response wird gemockt\n2. Die Methode, zum fetchen der Items im Warenkorb wird abgerufen\n3. Es wird verglichen, ob die richtige Response Value vorhanden ist |
| Erwartete Resultate | Der gesetzte Rückgabewert und der erhaltene Rückgabewert müssen übereinstimmen |
