# Rezepttoren

## Beschreibung

Rezepttoren ist eine einfache Webanwendung, mit der Benutzer nach Rezepten über die Edamam API suchen, ihre Lieblingsrezepte als Lesezeichen speichern und ihren Body-Mass-Index (BMI) berechnen können. Diese App soll Benutzern helfen, neue Rezepte zu entdecken und gesunde Essensoptionen im Blick zu behalten, während sie ihren BMI überwachen.

## Funktionen

- **Rezeptsuche**: Suchen Sie nach Rezepten anhand von Zutaten oder Gerichtstypen mit Daten der Edamam API.
- **Lesezeichen**: Speichern Sie Lieblingsrezepte für den einfachen Zugriff in einem speziellen Lesezeichenbereich.
- **BMI-Rechner**: Berechnen Sie den BMI basierend auf Höhe und Gewicht.
- **Responsive Design**: Optimiert für die Anzeige auf Desktop und Mobilgeräten.

## Verwendete Technologien

- **HTML**: Zur Strukturierung des Inhalts.
- **CSS**: Für das Styling.
- **JavaScript**: Für die Verarbeitung von API-Interaktionen, Lesezeichen und die BMI-Berechnung.
- **Bootstrap**: Für das responsive layout und für die Komponente.
- **Edamam API**: Um Rezepte aus der Rezeptdatenbank von Edamam abzurufen.

## Einrichtung und Installation

### Voraussetzungen

- Ein moderner Webbrowser und Internetzugang.

### Installationsschritte

1. Klonen Sie das Repository:

   ```bash
   git clone https://github.com/dominicBurfeind/rezepttoren

   ```

2. Navigieren Sie zum Projektverzeichnis:

   ```bash
   cd rezepttoren

   ```

3. Öffnen Sie die `index.html`-Datei in Ihrem Browser, um die App zu starten.

## API-Einrichtung

Um Rezepte abzurufen, benötigen Sie einen API-Schlüssel und eine ID von Edamam:

1. Gehen Sie zur [Edamam Developer-Seite](https://developer.edamam.com/) und melden Sie sich für ein Konto an.
2. Erstellen Sie eine neue Anwendung, um Ihre API-Anmeldeinformationen zu erhalten.
3. Aktualisieren Sie die App mit Ihren Anmeldeinformationen in der JavaScript-Datei (z. B. `api.js`):
   ```javascript
   const APP_ID = "your-app-id";
   const APP_KEY = "your-app-key";
   ```

## Nutzung

- **Rezepte suchen**: Verwenden Sie die Suchleiste, um Rezepte zu finden, indem Sie Zutaten oder Gerichtsnamen eingeben.
- **Rezepte als Lesezeichen speichern**: Klicken Sie auf das Lesezeichen-Symbol, um ein Rezept in Ihrem Lesezeichenbereich zu speichern.
- **Gespeicherte Rezepte anzeigen**: Greifen Sie auf Ihre gespeicherten Rezepte im Abschnitt „Lesezeichen“ zu.
- **BMI berechnen**: Geben Sie Ihre Größe und Ihr Gewicht im BMI-Rechnerbereich ein, um Ihren BMI zu erhalten.

## Danksagungen

- **Edamam** für ihre kostenlose Rezept-API.
- **PixaBay** für ihre kostenlosen Bilder.
