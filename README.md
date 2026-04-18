# Libre verzamelstoten

Mobiele browser-app voor het oefenen van libre verzamelstoten.

## Eerste versie

- Oefenmodus met biljartdiagram, hint, oplossing en resultaatknoppen.
- Mislukt-modus om alleen eerder mislukte stoten te herhalen.
- Bibliotheek met publieke voorbeeldposities en eigen conceptposities.
- Invoerhulp voor posities uit PDF's, boeken, websites of video's.
- Lokale opslag in de browser via `localStorage`.
- PWA-basis via `manifest.json` en `sw.js` zodra de app via een server draait.

## Contentmodel

Elke positie heeft:

- `balls`: coordinaten van speelbal, bal 2 en bal 3 op een 100 x 50 tafel.
- `paths`: optionele looplijnen voor uitleg.
- `source`: type, titel, URL en notitie.
- `media`: velden voor video, PDF-bestand, PDF-pagina en figuur.
- `solution`: raakpunt, aanspeeldikte, tempo en uitleg.

De publieke seedposities zijn schematische concepten op basis van openbare
lessen. Controleer ze met een echte libre-speler voordat ze als definitieve
oefenstof worden gebruikt.

## Gebruiken

Open `index.html` in een browser. Voor installatie op telefoon of offline cache
moet de map later via een gewone webserver of hosting draaien.

## Bronnen voor seedmateriaal

- https://potjebiljart.jouwweb.nl/les-5-openingsstoten
- https://www.sbconew.nl/biljarten-met-cas-juffermans/biljarttraining-met-cas/07-verzamelen-vervolg/
