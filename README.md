# Libre verzamelstoten

Mobiele browser-app voor het oefenen van libre verzamelstoten.

## Eerste versie

- Oefenmodus met biljartdiagram, hint, oplossing en resultaatknoppen.
- Mislukt-modus om alleen eerder mislukte stoten te herhalen.
- Bibliotheek met publieke voorbeeldposities en eigen conceptposities.
- 167 geimporteerde diagramposities uit de PDF `Over 160 collecting shots`.
- Lokale YouTube-tijdcodes per positie, zodat de video later per stoot gekoppeld kan worden.
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
- `diagramImage`: optionele afbeelding wanneer de positie uit een PDF-diagram komt.

De publieke seedposities zijn schematische concepten op basis van openbare
lessen. De PDF-import toont de originele diagrammen, maar bevat geen geschreven
uitleg per stoot. Controleer de inhoud met een echte libre-speler voordat ze als
definitieve oefenstof worden gebruikt.

## PDF-calibratie

Voor diagrammen uit de Dirk Acx-PDF staat een hulpmiddel in
`scripts/calibrate_pdf_diagrams.py`. Dat script rendert een positie opnieuw uit
de PDF, detecteert per diagram de witte railpunten en maakt daarmee een eigen
pixel-naar-tafelcalibratie. Daardoor hoeft een toekomstige conversie niet uit te
gaan van een vaste crop of vaste tabelmaat.

Voorbeeld:

```powershell
py scripts\calibrate_pdf_diagrams.py --pdf-position 1 --debug
```

De debug-afbeelding komt in `scratch/calibration/` terecht. Bij nieuwe PDF's is
waarschijnlijk een nieuw layoutprofiel nodig voor de juiste positie-crops; de
railpunt-calibratie zelf kan daarna opnieuw per diagram worden gebruikt.

## Gebruiken

Open `index.html` in een browser. Voor installatie op telefoon of offline cache
moet de map later via een gewone webserver of hosting draaien.

## Bronnen voor seedmateriaal

- https://potjebiljart.jouwweb.nl/les-5-openingsstoten
- https://www.sbconew.nl/biljarten-met-cas-juffermans/biljarttraining-met-cas/07-verzamelen-vervolg/
