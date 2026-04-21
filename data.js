const seedPositions = [
  {
    id: "potje-open-1",
    title: "Openingsstoot: eerst voorbereiden",
    category: "voorbereiden",
    difficulty: 2,
    status: "bron controleren",
    tags: ["libre", "openingsstoot", "voorbereiden"],
    goal:
      "Maak de carambole en laat de ballen zo liggen dat de volgende stoot beter verzamelbaar wordt.",
    hint:
      "Denk eerst aan positie houden. De directe verzameling is hier minder belangrijk dan de volgende bal.",
    solution: {
      hitPoint: "links boven van het hart",
      thickness: "dun op de buitenkant van bal 2",
      speed: "rustig dwingend",
      explanation:
        "Deze oefening gaat om het voorbereiden van het verzamelbeeld. Speel bal 2 dun genoeg zodat de speelbal controleerbaar blijft en bal 2 richting de zone van bal 3 kan werken.",
    },
    balls: {
      cue: { x: 24, y: 32 },
      second: { x: 48, y: 23 },
      third: { x: 74, y: 30 },
    },
    paths: [
      { ball: "cue", points: [{ x: 24, y: 32 }, { x: 48, y: 23 }, { x: 72, y: 30 }] },
      { ball: "second", points: [{ x: 48, y: 23 }, { x: 66, y: 20 }, { x: 76, y: 27 }] },
    ],
    source: {
      type: "web",
      title: "Potje Biljart - Les 5 Openingsstoten",
      url: "https://potjebiljart.jouwweb.nl/les-5-openingsstoten",
      note: "Publieke uitleg als inspiratie; diagram is eigen schematische invoer.",
    },
    media: {
      videoUrl: "",
      videoStart: "",
      pdfFile: "",
      pdfPage: "",
      figure: "figuur 1, schematisch",
    },
  },
  {
    id: "potje-open-2",
    title: "Dwingender vervolgbeeld",
    category: "verzamelen",
    difficulty: 3,
    status: "bron controleren",
    tags: ["libre", "doorstoot", "verzamelen"],
    goal:
      "Maak de carambole en breng bal 2 dichter bij bal 3 zonder de speelbal in de weg te leggen.",
    hint:
      "Bij meer afstand naar bal 2 mag de stoot langer en dwingender worden uitgevoerd.",
    solution: {
      hitPoint: "links boven van het hart",
      thickness: "buitenkant bal 2",
      speed: "iets meer kracht dan de voorbereidende stoot",
      explanation:
        "De afstand vraagt om een vloeiende afstoot. Houd de keu los genoeg, speel door de bal heen en controleer vooral hoeveel energie naar bal 2 gaat.",
    },
    balls: {
      cue: { x: 20, y: 25 },
      second: { x: 43, y: 20 },
      third: { x: 72, y: 18 },
    },
    paths: [
      { ball: "cue", points: [{ x: 20, y: 25 }, { x: 43, y: 20 }, { x: 73, y: 18 }] },
      { ball: "second", points: [{ x: 43, y: 20 }, { x: 58, y: 17 }, { x: 70, y: 19 }] },
    ],
    source: {
      type: "web",
      title: "Potje Biljart - Les 5 Openingsstoten",
      url: "https://potjebiljart.jouwweb.nl/les-5-openingsstoten",
      note: "Publieke uitleg als inspiratie; diagram is eigen schematische invoer.",
    },
    media: {
      videoUrl: "",
      videoStart: "",
      pdfFile: "",
      pdfPage: "",
      figure: "figuur 2, schematisch",
    },
  },
  {
    id: "potje-open-3",
    title: "Korte felle stoot met links effect",
    category: "verzamelen",
    difficulty: 3,
    status: "bron controleren",
    tags: ["libre", "effect", "korte afstoot"],
    goal:
      "Verdeel de energie tussen speelbal en bal 2 zodat beide ballen in de verzamelzone blijven.",
    hint:
      "Kort en fel is niet hetzelfde als hard. De bal moet reageren, maar niet wegvliegen.",
    solution: {
      hitPoint: "net boven het hart met links effect",
      thickness: "buitenkant bal 2",
      speed: "kort, fel en ingehouden",
      explanation:
        "Door de korte afstand moet de actie snel in de speelbal zitten. Varieer in training met iets meer of minder effect om te voelen wanneer bal 2 vlak genoeg doorloopt.",
    },
    balls: {
      cue: { x: 30, y: 35 },
      second: { x: 42, y: 28 },
      third: { x: 65, y: 34 },
    },
    paths: [
      { ball: "cue", points: [{ x: 30, y: 35 }, { x: 42, y: 28 }, { x: 64, y: 34 }] },
      { ball: "second", points: [{ x: 42, y: 28 }, { x: 55, y: 31 }, { x: 66, y: 33 }] },
    ],
    source: {
      type: "web",
      title: "Potje Biljart - Les 5 Openingsstoten",
      url: "https://potjebiljart.jouwweb.nl/les-5-openingsstoten",
      note: "Publieke uitleg als inspiratie; diagram is eigen schematische invoer.",
    },
    media: {
      videoUrl: "",
      videoStart: "",
      pdfFile: "",
      pdfPage: "",
      figure: "figuur 3, schematisch",
    },
  },
  {
    id: "potje-open-4",
    title: "Trekstoot richting serie americaine",
    category: "serie-americaine",
    difficulty: 4,
    status: "bron controleren",
    tags: ["libre", "trekstoot", "serie americaine"],
    goal:
      "Bereid een bruikbare seriepositie voor door bal 2 vlakker van de band te laten komen.",
    hint:
      "Let op effectoverdracht: wat je aan de speelbal geeft, verandert ook de loop van bal 2.",
    solution: {
      hitPoint: "laag met rechts effect",
      thickness: "controleerbaar op bal 2",
      speed: "kort en fel",
      explanation:
        "Het rechtse effect op de speelbal kan bal 2 anders uit de band laten vertrekken. De speelbal mag bal 3 niet blokkeren; test beide passeerkanten tijdens training.",
    },
    balls: {
      cue: { x: 29, y: 18 },
      second: { x: 49, y: 29 },
      third: { x: 78, y: 36 },
    },
    paths: [
      { ball: "cue", points: [{ x: 29, y: 18 }, { x: 49, y: 29 }, { x: 76, y: 36 }] },
      { ball: "second", points: [{ x: 49, y: 29 }, { x: 91, y: 38 }, { x: 75, y: 35 }] },
    ],
    source: {
      type: "web",
      title: "Potje Biljart - Les 5 Openingsstoten",
      url: "https://potjebiljart.jouwweb.nl/les-5-openingsstoten",
      note: "Publieke uitleg als inspiratie; diagram is eigen schematische invoer.",
    },
    media: {
      videoUrl: "",
      videoStart: "",
      pdfFile: "",
      pdfPage: "",
      figure: "figuur 4, schematisch",
    },
  },
  {
    id: "cas-07-21",
    title: "Keerstoot over een of twee banden",
    category: "bandstoot",
    difficulty: 4,
    status: "bron controleren",
    tags: ["libre", "keerstoot", "band"],
    goal:
      "Maak de carambole, blijf dicht bij bal 3 en stuur bal 2 terug naar de korte-bandzone.",
    hint:
      "De aanloop naar bal 2 is ongunstig. Zuiver raken is belangrijker dan extra kracht.",
    solution: {
      hitPoint: "hartlijn, effect afhankelijk van passeerkant",
      thickness: "zuiver op bal 2",
      speed: "dwingend maar beheerst",
      explanation:
        "Speel de carambole met controle over de terugloop. Het doel is niet alleen scoren, maar dominantie houden: bal 2 en bal 3 blijven voor je uit richting korte band.",
    },
    balls: {
      cue: { x: 18, y: 42 },
      second: { x: 55, y: 11 },
      third: { x: 76, y: 34 },
    },
    paths: [
      { ball: "cue", points: [{ x: 18, y: 42 }, { x: 55, y: 11 }, { x: 92, y: 8 }, { x: 76, y: 34 }] },
      { ball: "second", points: [{ x: 55, y: 11 }, { x: 82, y: 8 }, { x: 78, y: 31 }] },
    ],
    source: {
      type: "web",
      title: "SBCO - Biljarttraining met Cas, 07. Verzamelen vervolg",
      url: "https://www.sbconew.nl/biljarten-met-cas-juffermans/biljarttraining-met-cas/07-verzamelen-vervolg/",
      note: "Gebaseerd op openbare richtlijnen; diagram is eigen schematische invoer.",
    },
    media: {
      videoUrl: "",
      videoStart: "",
      pdfFile: "",
      pdfPage: "",
      figure: "groep 21, schematisch",
    },
  },
  {
    id: "cas-07-22",
    title: "Kiezen tussen een-, twee- of driebander",
    category: "bandstoot",
    difficulty: 5,
    status: "bron controleren",
    tags: ["libre", "studiepositie", "keuze"],
    goal:
      "Blijf aan tafel en kies de route die de beste restpositie geeft, niet alleen de makkelijkste carambole.",
    hint:
      "Maak eerst een plan: waar moeten bal 2 en bal 3 na contact controleerbaar eindigen?",
    solution: {
      hitPoint: "afhankelijk van gekozen route",
      thickness: "route eerst bepalen, daarna pas dikte kiezen",
      speed: "tempo aanpassen aan de verzamelzone",
      explanation:
        "Deze positie is bedoeld als studie. Vergelijk meerdere routes en beoordeel na elke poging of de ballen dichter bij een seriebeeld komen.",
    },
    balls: {
      cue: { x: 33, y: 12 },
      second: { x: 62, y: 38 },
      third: { x: 82, y: 16 },
    },
    paths: [
      { ball: "cue", points: [{ x: 33, y: 12 }, { x: 62, y: 38 }, { x: 95, y: 33 }, { x: 82, y: 16 }] },
      { ball: "second", points: [{ x: 62, y: 38 }, { x: 74, y: 44 }, { x: 84, y: 18 }] },
    ],
    source: {
      type: "web",
      title: "SBCO - Biljarttraining met Cas, 07. Verzamelen vervolg",
      url: "https://www.sbconew.nl/biljarten-met-cas-juffermans/biljarttraining-met-cas/07-verzamelen-vervolg/",
      note: "Gebaseerd op openbare richtlijnen; diagram is eigen schematische invoer.",
    },
    media: {
      videoUrl: "",
      videoStart: "",
      pdfFile: "",
      pdfPage: "",
      figure: "groep 22, schematisch",
    },
  },
];

const positionOverrides = {
  "dirk-acx-001": {
    title: "PDF-positie 1 - voorbeeld omgezet",
    status: "hoofdlijnen omgezet",
    renderMode: "table",
    generatedFromImage: true,
    lineStatus: "diamond",
    originalDiagramImage: "assets/positions/shot-001.jpg",
    lineOverlayImage: "",
    goal:
      "Maak de carambole vanuit de bovenste verzamelpositie en probeer de ballen richting rechter korte band bij elkaar te houden.",
    hint:
      "Speel krachtig maar controleerbaar. De PDF geeft een vlakke keuhoek, laag-links effect en ongeveer 8.6 power aan.",
    balls: {
      cue: { x: 50.4, y: 10.4 },
      second: { x: 72.6, y: 4.6 },
      third: { x: 95.2, y: 43.3 },
    },
    paths: [
      {
        ball: "stick",
        points: [
          { x: 3.1, y: 19.8 },
          { x: 50.4, y: 10.4 },
        ],
      },
      {
        ball: "cue",
        points: [
          { x: 50.4, y: 10.4 },
          { x: 72.6, y: 4.6 },
          { x: 95.2, y: 43.3 },
        ],
      },
      {
        ball: "second",
        points: [
          { x: 72.6, y: 4.6 },
          { x: 95.2, y: 16.7 },
          { x: 49.6, y: 44.1 },
          { x: 5.1, y: 19.3 },
          { x: 25.7, y: 5.1 },
          { x: 83.9, y: 39.0 },
        ],
      },
      {
        ball: "third",
        points: [
          { x: 95.2, y: 43.3 },
          { x: 89.8, y: 41.8 },
        ],
      },
    ],
    solution: {
      hitPoint: "ongeveer halfvol op de gele bal volgens het raakpuntbeeld",
      thickness: "ongeveer halfvol; controleer dit nog aan tafel",
      speed: "krachtig, ongeveer 8.6 / 10 op de powerbalk",
      explanation:
        "Dit is een voorbeeldconversie uit het PDF-diagram. De ballen en lijnen zijn overgenomen naar het vaste app-formaat. De techniekvelden zijn uit de simulatorbalk gelezen; laat je vader vooral controleren of de aanspeeldikte en looplijn logisch zijn.",
      technicalDetails: [
        "Keuhoek: vlak / bijna horizontaal.",
        "Effect: laag-links, ongeveer stand 3.",
        "Power: ongeveer 8.6 / 10.",
        "Raakpunt: ongeveer halfvol op geel.",
        "Lijnen: opnieuw gecalibreerd op de witte railpunten van dit specifieke PDF-diagram. De bruine lijn is de keu-/stootrichting.",
        "Bronbeeld: PDF-positie 1, zodat deze later ook aan exact dezelfde YouTube-stoot gekoppeld kan worden.",
      ],
    },
  },
  "dirk-acx-002": {
    title: "PDF-positie 2 - handmatig getraceerd",
    status: "handmatig getraceerd",
    renderMode: "table",
    generatedFromImage: true,
    lineStatus: "diamond",
    originalDiagramImage: "assets/positions/shot-002.jpg",
    lineOverlayImage: "",
    goal:
      "Maak de carambole en houd de drie ballen bij de rechter korte band onder controle.",
    hint:
      "Speel met links effect en stevig tempo. De route is handmatig uit het PDF-diagram overgezet; open het bronbeeld bij twijfel over het exacte raakpunt.",
    balls: {
      cue: { x: 80.6, y: 9.0 },
      second: { x: 94.5, y: 18.4 },
      third: { x: 95.2, y: 44.0 },
    },
    paths: [
      {
        ball: "stick",
        points: [
          { x: 72.8, y: 0.8 },
          { x: 80.6, y: 9.0 },
        ],
      },
      {
        ball: "cue",
        points: [
          { x: 80.6, y: 9.0 },
          { x: 94.5, y: 18.4 },
          { x: 96.2, y: 30.5 },
          { x: 95.2, y: 44.0 },
        ],
      },
      {
        ball: "second",
        points: [
          { x: 94.5, y: 18.4 },
          { x: 50.5, y: 43.0 },
          { x: 2.9, y: 12.5 },
          { x: 18.0, y: 3.0 },
          { x: 83.5, y: 43.0 },
          { x: 96.0, y: 35.0 },
        ],
      },
      {
        ball: "third",
        points: [
          { x: 95.2, y: 44.0 },
          { x: 94.6, y: 42.0 },
        ],
      },
    ],
    solution: {
      hitPoint: "links effect; exacte aanspeeldikte controleren in het bronbeeld",
      thickness: "dun tot halfvol op geel, afhankelijk van hoeveel tweede-bal-loop je wilt",
      speed: "ongeveer 7.7 / 10 op de powerbalk",
      explanation:
        "De speelbal loopt van wit naar geel en daarna naar rood langs de rechter korte-bandzone. De gele bal wordt over meerdere banden teruggestuurd zodat het verzamelbeeld rechts blijft.",
      technicalDetails: [
        "Effect: links, ongeveer stand 1.1.",
        "Power: ongeveer 7.7 / 10.",
        "Lijnen: handmatig getraceerd op de groene simulator en gecalibreerd op de raildiamonds.",
        "Bronbeeld: PDF-positie 2; gebruik het vergrote diagram als controle voor nuance.",
      ],
    },
  },
  "dirk-acx-003": {
    title: "PDF-positie 3 - handmatig getraceerd",
    status: "handmatig getraceerd",
    renderMode: "table",
    generatedFromImage: true,
    lineStatus: "diamond",
    originalDiagramImage: "assets/positions/shot-003.jpg",
    lineOverlayImage: "",
    goal:
      "Maak de carambole en stuur bal 2 via de lange route terug naar het rechter verzamelgebied.",
    hint:
      "Gebruik laag-links effect en een gecontroleerd stevige afstoot. Het bronbeeld blijft leidend voor de precieze dikte.",
    balls: {
      cue: { x: 75.7, y: 15.7 },
      second: { x: 85.8, y: 24.6 },
      third: { x: 91.6, y: 8.3 },
    },
    paths: [
      {
        ball: "stick",
        points: [
          { x: 66.0, y: 0.8 },
          { x: 75.7, y: 15.7 },
        ],
      },
      {
        ball: "cue",
        points: [
          { x: 75.7, y: 15.7 },
          { x: 85.8, y: 24.6 },
          { x: 74.8, y: 46.2 },
          { x: 94.5, y: 5.2 },
          { x: 91.6, y: 8.3 },
        ],
      },
      {
        ball: "second",
        points: [
          { x: 85.8, y: 24.6 },
          { x: 96.0, y: 26.8 },
          { x: 49.0, y: 43.0 },
          { x: 2.5, y: 31.0 },
          { x: 84.8, y: 4.0 },
        ],
      },
      {
        ball: "third",
        points: [
          { x: 91.6, y: 8.3 },
          { x: 89.5, y: 7.0 },
        ],
      },
    ],
    solution: {
      hitPoint: "laag-links; raakpunt nog controleren tegen het originele diagram",
      thickness: "eerder dun op geel om de lange tweede-bal-route ruimte te geven",
      speed: "ongeveer 6.9 / 10 op de powerbalk",
      explanation:
        "De speelbal gebruikt de rechter/bovenkant om rood te bereiken. Bal 2 gaat eerst naar rechts en daarna via links terug richting de verzamelzone.",
      technicalDetails: [
        "Effect: laag-links, ongeveer stand 1.4.",
        "Power: ongeveer 6.9 / 10.",
        "Lijnen: handmatig getraceerd op de groene simulator en gecalibreerd op de raildiamonds.",
        "Bronbeeld: PDF-positie 3; gebruik het vergrote diagram als controle voor nuance.",
      ],
    },
  },
  "dirk-acx-004": {
    title: "PDF-positie 4 - handmatig getraceerd",
    status: "handmatig getraceerd",
    renderMode: "table",
    generatedFromImage: true,
    lineStatus: "diamond",
    originalDiagramImage: "assets/positions/shot-004.jpg",
    lineOverlayImage: "",
    goal:
      "Maak de carambole rechtsboven en laat bal 2 via links teruglopen richting de korte band.",
    hint:
      "De keulijn is bijna vlak. Speel met laag effect en houd genoeg tempo voor de lange terugloop van bal 2.",
    balls: {
      cue: { x: 70.7, y: 8.7 },
      second: { x: 92.9, y: 9.7 },
      third: { x: 93.5, y: 39.7 },
    },
    paths: [
      {
        ball: "stick",
        points: [
          { x: 0.5, y: 8.5 },
          { x: 70.7, y: 8.7 },
        ],
      },
      {
        ball: "cue",
        points: [
          { x: 70.7, y: 8.7 },
          { x: 92.9, y: 9.7 },
          { x: 95.8, y: 34.0 },
          { x: 93.5, y: 39.7 },
        ],
      },
      {
        ball: "second",
        points: [
          { x: 92.9, y: 9.7 },
          { x: 2.2, y: 35.0 },
          { x: 38.0, y: 43.8 },
          { x: 93.0, y: 35.0 },
        ],
      },
      {
        ball: "third",
        points: [
          { x: 93.5, y: 39.7 },
          { x: 91.8, y: 41.8 },
        ],
      },
    ],
    solution: {
      hitPoint: "laag; exacte dikte controleren in het bronbeeld",
      thickness: "vrij dun op geel om de speelbal langs rechts naar rood te houden",
      speed: "ongeveer 7.5 / 10 op de powerbalk",
      explanation:
        "De speelbal loopt strak over geel naar rood. Bal 2 neemt de lange route naar links en komt daarna terug richting de rechterkant.",
      technicalDetails: [
        "Effect: laag, ongeveer stand 1.1.",
        "Power: ongeveer 7.5 / 10.",
        "Lijnen: handmatig getraceerd op de groene simulator en gecalibreerd op de raildiamonds.",
        "Bronbeeld: PDF-positie 4; gebruik het vergrote diagram als controle voor nuance.",
      ],
    },
  },
  "dirk-acx-005": {
    title: "PDF-positie 5 - handmatig getraceerd",
    status: "handmatig getraceerd",
    renderMode: "table",
    generatedFromImage: true,
    lineStatus: "diamond",
    originalDiagramImage: "assets/positions/shot-005.jpg",
    lineOverlayImage: "",
    goal:
      "Maak de carambole via de rechterkant en verzamel de loop van bal 2 terug naar beneden/rechts.",
    hint:
      "De stoot lijkt op positie 4, maar de hoek op geel is iets anders. Houd de afstoot vlak en beheerst.",
    balls: {
      cue: { x: 75.8, y: 12.2 },
      second: { x: 93.0, y: 12.1 },
      third: { x: 92.3, y: 42.6 },
    },
    paths: [
      {
        ball: "stick",
        points: [
          { x: 0.5, y: 8.3 },
          { x: 75.8, y: 12.2 },
        ],
      },
      {
        ball: "cue",
        points: [
          { x: 75.8, y: 12.2 },
          { x: 93.0, y: 12.1 },
          { x: 96.0, y: 30.5 },
          { x: 92.3, y: 42.6 },
        ],
      },
      {
        ball: "second",
        points: [
          { x: 93.0, y: 12.1 },
          { x: 70.0, y: 2.8 },
          { x: 2.5, y: 25.5 },
          { x: 87.0, y: 46.0 },
          { x: 94.0, y: 42.5 },
        ],
      },
      {
        ball: "third",
        points: [
          { x: 92.3, y: 42.6 },
          { x: 92.0, y: 46.0 },
        ],
      },
    ],
    solution: {
      hitPoint: "laag; exacte aanspeeldikte controleren in het bronbeeld",
      thickness: "dun tot halfvol op geel, met nadruk op bal 2 terug laten komen",
      speed: "ongeveer 7.2 / 10 op de powerbalk",
      explanation:
        "De speelbal blijft langs de rechterkant voor de carambole. De gele bal krijgt de lange route via links en onder, zodat hij terugkeert naar de buurt van rood.",
      technicalDetails: [
        "Effect: laag, ongeveer stand 1.1.",
        "Power: ongeveer 7.2 / 10.",
        "Lijnen: handmatig getraceerd op de groene simulator en gecalibreerd op de raildiamonds.",
        "Bronbeeld: PDF-positie 5; gebruik het vergrote diagram als controle voor nuance.",
      ],
    },
  },
  "dirk-acx-006": {
    title: "PDF-positie 6 - handmatig getraceerd",
    status: "handmatig getraceerd",
    renderMode: "table",
    generatedFromImage: true,
    lineStatus: "diamond",
    originalDiagramImage: "assets/positions/shot-006.jpg",
    lineOverlayImage: "",
    goal:
      "Speel de korte carambole rechts en laat bal 2 via een brede bandroute terugkomen.",
    hint:
      "Laag effect en middelste kracht. De korte rechterhoek is gevoelig: controleer de bronafbeelding voor de precieze eerste richting.",
    balls: {
      cue: { x: 88.0, y: 14.4 },
      second: { x: 80.5, y: 17.9 },
      third: { x: 93.9, y: 24.4 },
    },
    paths: [
      {
        ball: "cue",
        points: [
          { x: 88.0, y: 14.4 },
          { x: 80.5, y: 17.9 },
          { x: 87.0, y: 3.5 },
          { x: 93.9, y: 24.4 },
        ],
      },
      {
        ball: "second",
        points: [
          { x: 80.5, y: 17.9 },
          { x: 50.0, y: 2.8 },
          { x: 2.5, y: 27.0 },
          { x: 27.5, y: 44.0 },
          { x: 72.0, y: 18.5 },
          { x: 90.5, y: 24.5 },
        ],
      },
      {
        ball: "third",
        points: [
          { x: 93.9, y: 24.4 },
          { x: 94.5, y: 28.0 },
        ],
      },
    ],
    solution: {
      hitPoint: "laag; exacte aanspeeldikte controleren in het bronbeeld",
      thickness: "zuinig op bal 2, zodat de speelbal genoeg controle houdt",
      speed: "ongeveer 6.8 / 10 op de powerbalk",
      explanation:
        "De speelbal maakt de korte carambole in de rechterzone. Bal 2 loopt breed over de tafel en moet terug in dezelfde verzamelrichting komen.",
      technicalDetails: [
        "Effect: laag, ongeveer stand 1.4.",
        "Power: ongeveer 6.8 / 10.",
        "Lijnen: handmatig getraceerd op de groene simulator en gecalibreerd op de raildiamonds.",
        "Bronbeeld: PDF-positie 6; gebruik het vergrote diagram als controle voor nuance.",
      ],
    },
  },
  "dirk-acx-007": {
    title: "PDF-positie 7 - handmatig getraceerd",
    status: "handmatig getraceerd",
    renderMode: "table",
    generatedFromImage: true,
    lineStatus: "diamond",
    originalDiagramImage: "assets/positions/shot-007.jpg",
    lineOverlayImage: "",
    goal:
      "Maak de carambole rechts en laat bal 2 via links/top teruglopen naar de korte-bandzone.",
    hint:
      "Speel laag met voldoende tempo. Deze positie heeft weinig marge bij de rechter korte band.",
    balls: {
      cue: { x: 87.1, y: 12.9 },
      second: { x: 80.5, y: 17.9 },
      third: { x: 92.7, y: 42.4 },
    },
    paths: [
      {
        ball: "cue",
        points: [
          { x: 87.1, y: 12.9 },
          { x: 80.5, y: 17.9 },
          { x: 83.5, y: 2.8 },
          { x: 95.5, y: 41.0 },
          { x: 92.7, y: 42.4 },
        ],
      },
      {
        ball: "second",
        points: [
          { x: 80.5, y: 17.9 },
          { x: 2.5, y: 21.5 },
          { x: 27.5, y: 3.2 },
          { x: 88.0, y: 40.5 },
        ],
      },
      {
        ball: "third",
        points: [
          { x: 92.7, y: 42.4 },
          { x: 94.0, y: 44.0 },
        ],
      },
    ],
    solution: {
      hitPoint: "laag; controleer de exacte raaklijn bij de rechterkant",
      thickness: "dun op geel, met nadruk op de tweede-bal-route",
      speed: "ongeveer 7.5 / 10 op de powerbalk",
      explanation:
        "De speelbal moet rood halen zonder te veel snelheid te verliezen. Bal 2 gebruikt links en boven als verzamelroute terug naar rechts.",
      technicalDetails: [
        "Effect: laag, ongeveer stand 1.3.",
        "Power: ongeveer 7.5 / 10.",
        "Lijnen: handmatig getraceerd op de groene simulator en gecalibreerd op de raildiamonds.",
        "Bronbeeld: PDF-positie 7; gebruik het vergrote diagram als controle voor nuance.",
      ],
    },
  },
  "dirk-acx-008": {
    title: "PDF-positie 8 - handmatig getraceerd",
    status: "handmatig getraceerd",
    renderMode: "table",
    generatedFromImage: true,
    lineStatus: "diamond",
    originalDiagramImage: "assets/positions/shot-008.jpg",
    lineOverlayImage: "",
    goal:
      "Speel de korte carambole rechts en stuur bal 2 via links terug naar de onderzijde.",
    hint:
      "Deze wordt rustiger gespeeld dan de vorige posities. Let vooral op de richting van bal 2 naar links.",
    balls: {
      cue: { x: 87.5, y: 12.1 },
      second: { x: 80.0, y: 17.9 },
      third: { x: 92.7, y: 42.4 },
    },
    paths: [
      {
        ball: "stick",
        points: [
          { x: 99.0, y: 1.5 },
          { x: 87.5, y: 12.1 },
        ],
      },
      {
        ball: "cue",
        points: [
          { x: 87.5, y: 12.1 },
          { x: 80.0, y: 17.9 },
          { x: 92.7, y: 42.4 },
        ],
      },
      {
        ball: "second",
        points: [
          { x: 80.0, y: 17.9 },
          { x: 2.5, y: 32.0 },
          { x: 92.7, y: 42.4 },
        ],
      },
      {
        ball: "third",
        points: [
          { x: 92.7, y: 42.4 },
          { x: 94.3, y: 40.8 },
        ],
      },
    ],
    solution: {
      hitPoint: "laag-links; exacte dikte controleren in het bronbeeld",
      thickness: "dun op geel zodat bal 2 naar de linker lange band vertrekt",
      speed: "ongeveer 5.4 / 10 op de powerbalk",
      explanation:
        "De speelbal gaat kort naar rood, terwijl bal 2 breed naar links vertrekt en terug richting de rechter onderzone loopt.",
      technicalDetails: [
        "Effect: laag-links, ongeveer stand 1.1.",
        "Power: ongeveer 5.4 / 10.",
        "Lijnen: handmatig getraceerd op de groene simulator en gecalibreerd op de raildiamonds.",
        "Bronbeeld: PDF-positie 8; gebruik het vergrote diagram als controle voor nuance.",
      ],
    },
  },
  "dirk-acx-009": {
    title: "PDF-positie 9 - handmatig getraceerd",
    status: "handmatig getraceerd",
    renderMode: "table",
    generatedFromImage: true,
    lineStatus: "diamond",
    originalDiagramImage: "assets/positions/shot-009.jpg",
    lineOverlayImage: "",
    goal:
      "Maak de korte carambole in de rechterbovenhoek en laat bal 2 via links terugkomen.",
    hint:
      "Laag-rechts effect. De ballen liggen dicht bij elkaar, dus de eerste aanspeeldikte is hier extra belangrijk.",
    balls: {
      cue: { x: 87.6, y: 15.0 },
      second: { x: 80.4, y: 17.9 },
      third: { x: 94.1, y: 17.3 },
    },
    paths: [
      {
        ball: "cue",
        points: [
          { x: 87.6, y: 15.0 },
          { x: 80.4, y: 17.9 },
          { x: 84.0, y: 3.2 },
          { x: 94.1, y: 17.3 },
        ],
      },
      {
        ball: "second",
        points: [
          { x: 80.4, y: 17.9 },
          { x: 2.5, y: 32.0 },
          { x: 27.0, y: 44.0 },
          { x: 68.0, y: 3.0 },
          { x: 94.1, y: 17.3 },
        ],
      },
      {
        ball: "third",
        points: [
          { x: 94.1, y: 17.3 },
          { x: 95.0, y: 19.8 },
        ],
      },
    ],
    solution: {
      hitPoint: "laag-rechts; raakpunt in de bronafbeelding controleren",
      thickness: "heel gecontroleerd op geel, omdat de drie ballen dicht bij elkaar liggen",
      speed: "ongeveer 6.6 / 10 op de powerbalk",
      explanation:
        "De speelbal maakt de korte carambole in de rechterbovenhoek: na geel loopt wit eerst omhoog en daarna weer omlaag naar rood. Bal 2 wordt via links en boven teruggestuurd naar de kleine verzamelzone.",
      technicalDetails: [
        "Effect: laag-rechts, ongeveer stand 1.4.",
        "Power: ongeveer 6.6 / 10.",
        "Lijnen: handmatig getraceerd op de groene simulator en gecalibreerd op de raildiamonds.",
        "Bronbeeld: PDF-positie 9; gebruik het vergrote diagram als controle voor nuance.",
      ],
    },
  },
  "dirk-acx-010": {
    title: "PDF-positie 10 - handmatig getraceerd",
    status: "handmatig getraceerd",
    renderMode: "table",
    generatedFromImage: true,
    lineStatus: "diamond",
    originalDiagramImage: "assets/positions/shot-010.jpg",
    lineOverlayImage: "",
    goal:
      "Maak de carambole vanuit de compacte midden-rechter positie en houd de ballen bij elkaar.",
    hint:
      "Deze stoot is rustiger. Het bronbeeld geeft links effect en een duidelijk lagere power dan de vorige oefeningen.",
    balls: {
      cue: { x: 79.5, y: 32.3 },
      second: { x: 82.0, y: 29.6 },
      third: { x: 94.3, y: 20.3 },
    },
    paths: [
      {
        ball: "stick",
        points: [
          { x: 73.0, y: 49.5 },
          { x: 79.5, y: 32.3 },
        ],
      },
      {
        ball: "cue",
        points: [
          { x: 79.5, y: 32.3 },
          { x: 82.0, y: 29.6 },
          { x: 83.5, y: 2.8 },
          { x: 94.3, y: 20.3 },
        ],
      },
      {
        ball: "second",
        points: [
          { x: 82.0, y: 29.6 },
          { x: 96.0, y: 26.0 },
        ],
      },
      {
        ball: "third",
        points: [
          { x: 94.3, y: 20.3 },
          { x: 95.4, y: 21.9 },
        ],
      },
    ],
    solution: {
      hitPoint: "links effect; exacte aanspeeldikte controleren in het bronbeeld",
      thickness: "kort en beheerst op geel",
      speed: "ongeveer 3.6 / 10 op de powerbalk",
      explanation:
        "De speelbal wordt rustig gespeeld, raakt geel en loopt daarna via de bovenkant richting rood. De tweede bal blijft korter in de rechter zone.",
      technicalDetails: [
        "Effect: links, ongeveer stand 3.",
        "Power: ongeveer 3.6 / 10.",
        "Lijnen: handmatig getraceerd op de groene simulator en gecalibreerd op de raildiamonds.",
        "Bronbeeld: PDF-positie 10; gebruik het vergrote diagram als controle voor nuance.",
      ],
    },
  },
  "dirk-acx-011": {
    title: "PDF-positie 11 - handmatig getraceerd",
    status: "handmatig getraceerd",
    renderMode: "table",
    generatedFromImage: true,
    lineStatus: "diamond",
    originalDiagramImage: "assets/positions/shot-011.jpg",
    lineOverlayImage: "",
    goal:
      "Maak de carambole rechts en stuur bal 2 via de brede route terug naar het verzamelgebied.",
    hint:
      "Laag effect en stevig tempo. De eerste lijn blijft compact; de tweede bal maakt de grote beweging.",
    balls: {
      cue: { x: 80.2, y: 18.0 },
      second: { x: 73.3, y: 24.6 },
      third: { x: 92.9, y: 42.7 },
    },
    paths: [
      {
        ball: "stick",
        points: [
          { x: 97.0, y: 0.8 },
          { x: 80.2, y: 18.0 },
        ],
      },
      {
        ball: "cue",
        points: [
          { x: 80.2, y: 18.0 },
          { x: 73.3, y: 24.6 },
          { x: 92.9, y: 42.7 },
        ],
      },
      {
        ball: "second",
        points: [
          { x: 73.3, y: 24.6 },
          { x: 43.0, y: 41.5 },
          { x: 3.0, y: 17.0 },
          { x: 28.0, y: 3.0 },
          { x: 90.0, y: 40.0 },
        ],
      },
      {
        ball: "third",
        points: [
          { x: 92.9, y: 42.7 },
          { x: 94.8, y: 44.2 },
        ],
      },
    ],
    solution: {
      hitPoint: "laag; exacte aanspeeldikte controleren in het bronbeeld",
      thickness: "controleerbaar op geel, met nadruk op de lange loop van bal 2",
      speed: "ongeveer 7.4 / 10 op de powerbalk",
      explanation:
        "De speelbal maakt rechts de carambole. Bal 2 loopt eerst omlaag en daarna via de linkerzijde en bovenkant breed terug richting de rechter korte band.",
      technicalDetails: [
        "Effect: laag, ongeveer stand 0.8.",
        "Power: ongeveer 7.4 / 10.",
        "Lijnen: handmatig getraceerd op de groene simulator en gecalibreerd op de raildiamonds.",
        "Bronbeeld: PDF-positie 11; gebruik het vergrote diagram als controle voor nuance.",
      ],
    },
  },
  "dirk-acx-012": {
    title: "PDF-positie 12 - handmatig getraceerd",
    status: "handmatig getraceerd",
    renderMode: "table",
    generatedFromImage: true,
    lineStatus: "diamond",
    originalDiagramImage: "assets/positions/shot-012.jpg",
    lineOverlayImage: "",
    goal:
      "Maak de carambole vanuit de bovenste positie en laat de ballen rond de rechterhelft terugkomen.",
    hint:
      "De witte lijn loopt vrijwel verticaal omlaag na het eerste contact. Speel laag met middentempo.",
    balls: {
      cue: { x: 84.2, y: 6.2 },
      second: { x: 73.1, y: 6.1 },
      third: { x: 73.5, y: 44.2 },
    },
    paths: [
      {
        ball: "stick",
        points: [
          { x: 99.0, y: 5.0 },
          { x: 84.2, y: 6.2 },
        ],
      },
      {
        ball: "cue",
        points: [
          { x: 84.2, y: 6.2 },
          { x: 73.1, y: 6.1 },
          { x: 73.5, y: 44.2 },
        ],
      },
      {
        ball: "second",
        points: [
          { x: 73.1, y: 6.1 },
          { x: 2.5, y: 28.0 },
          { x: 55.0, y: 44.5 },
          { x: 73.5, y: 44.2 },
        ],
      },
      {
        ball: "third",
        points: [
          { x: 73.5, y: 44.2 },
          { x: 72.6, y: 45.8 },
        ],
      },
    ],
    solution: {
      hitPoint: "laag; raakpunt in het originele diagram controleren",
      thickness: "dun op geel om de speelbal vrijwel recht naar beneden te laten lopen",
      speed: "ongeveer 5.1 / 10 op de powerbalk",
      explanation:
        "De speelbal loopt na geel recht naar beneden richting rood. Bal 2 wordt via links en onder teruggebracht naar de onderste zone.",
      technicalDetails: [
        "Effect: laag, ongeveer stand 1.5.",
        "Power: ongeveer 5.1 / 10.",
        "Lijnen: handmatig getraceerd op de groene simulator en gecalibreerd op de raildiamonds.",
        "Bronbeeld: PDF-positie 12; gebruik het vergrote diagram als controle voor nuance.",
      ],
    },
  },
  "dirk-acx-013": {
    title: "PDF-positie 13 - handmatig getraceerd",
    status: "handmatig getraceerd",
    renderMode: "table",
    generatedFromImage: true,
    lineStatus: "diamond",
    originalDiagramImage: "assets/positions/shot-013.jpg",
    lineOverlayImage: "",
    goal:
      "Maak de carambole rechts en laat bal 2 over de brede driehoek teruglopen.",
    hint:
      "Speel laag met beheerst tempo. De tweede-bal-lijn gebruikt veel tafel, dus forceer het eerste contact niet.",
    balls: {
      cue: { x: 89.2, y: 20.4 },
      second: { x: 79.0, y: 18.5 },
      third: { x: 93.7, y: 42.8 },
    },
    paths: [
      {
        ball: "cue",
        points: [
          { x: 89.2, y: 20.4 },
          { x: 79.0, y: 18.5 },
          { x: 95.2, y: 35.6 },
          { x: 93.7, y: 42.8 },
        ],
      },
      {
        ball: "second",
        points: [
          { x: 79.0, y: 18.5 },
          { x: 39.0, y: 3.0 },
          { x: 2.5, y: 11.5 },
          { x: 93.7, y: 42.8 },
        ],
      },
      {
        ball: "third",
        points: [
          { x: 93.7, y: 42.8 },
          { x: 94.9, y: 40.6 },
        ],
      },
    ],
    solution: {
      hitPoint: "laag; exacte aanspeeldikte in het bronbeeld controleren",
      thickness: "dun tot halfvol, zodat bal 2 de brede route houdt",
      speed: "ongeveer 5.5 / 10 op de powerbalk",
      explanation:
        "De speelbal gaat van geel naar rood langs de rechterzijde. Bal 2 vertrekt eerst omhoog, gebruikt daarna de linker band en loopt terug naar het verzamelgebied.",
      technicalDetails: [
        "Effect: laag, ongeveer stand 1.4.",
        "Power: ongeveer 5.5 / 10.",
        "Lijnen: handmatig getraceerd op de groene simulator en gecalibreerd op de raildiamonds.",
        "Bronbeeld: PDF-positie 13; gebruik het vergrote diagram als controle voor nuance.",
      ],
    },
  },
  "dirk-acx-014": {
    title: "PDF-positie 14 - handmatig getraceerd",
    status: "handmatig getraceerd",
    renderMode: "table",
    generatedFromImage: true,
    lineStatus: "diamond",
    originalDiagramImage: "assets/positions/shot-014.jpg",
    lineOverlayImage: "",
    goal:
      "Maak de carambole via de rechterkant en houd bal 2 in de terugloop naar onder/rechts.",
    hint:
      "Gebruik laag-rechts effect. De witte lijn gaat eerst omhoog en daarna terug omlaag richting rood.",
    balls: {
      cue: { x: 89.1, y: 22.4 },
      second: { x: 78.3, y: 18.5 },
      third: { x: 92.4, y: 42.7 },
    },
    paths: [
      {
        ball: "stick",
        points: [
          { x: 99.0, y: 24.8 },
          { x: 89.1, y: 22.4 },
        ],
      },
      {
        ball: "cue",
        points: [
          { x: 89.1, y: 22.4 },
          { x: 78.3, y: 18.5 },
          { x: 78.0, y: 3.0 },
          { x: 96.5, y: 21.5 },
          { x: 92.4, y: 42.7 },
        ],
      },
      {
        ball: "second",
        points: [
          { x: 78.3, y: 18.5 },
          { x: 2.5, y: 24.0 },
          { x: 64.0, y: 43.0 },
          { x: 89.0, y: 39.0 },
        ],
      },
      {
        ball: "third",
        points: [
          { x: 92.4, y: 42.7 },
          { x: 91.0, y: 44.7 },
        ],
      },
    ],
    solution: {
      hitPoint: "laag-rechts; exacte raaklijn controleren in het bronbeeld",
      thickness: "dun genoeg om wit naar boven te laten vertrekken na geel",
      speed: "ongeveer 4.9 / 10 op de powerbalk",
      explanation:
        "De speelbal raakt geel, loopt eerst naar de bovenste lange band, daarna naar de rechter korte band en valt dan terug naar rood. Bal 2 wordt via links en onder terug naar rechts gestuurd.",
      technicalDetails: [
        "Effect: laag-rechts, ongeveer stand 1.2.",
        "Power: ongeveer 4.9 / 10.",
        "Lijnen: handmatig getraceerd op de groene simulator en gecalibreerd op de raildiamonds.",
        "Bronbeeld: PDF-positie 14; gebruik het vergrote diagram als controle voor nuance.",
      ],
    },
  },
  "dirk-acx-015": {
    title: "PDF-positie 15 - handmatig getraceerd",
    status: "handmatig getraceerd",
    renderMode: "table",
    generatedFromImage: true,
    lineStatus: "diamond",
    originalDiagramImage: "assets/positions/shot-015.jpg",
    lineOverlayImage: "",
    goal:
      "Werk vanuit linksboven naar de rode bal rechtsboven en houd bal 2 actief in de terugloop.",
    hint:
      "Dit is een langere, krachtigere positie. Gebruik laag-links effect en controleer de brede looplijnen in het bronbeeld.",
    balls: {
      cue: { x: 12.3, y: 7.8 },
      second: { x: 25.0, y: 7.8 },
      third: { x: 90.4, y: 7.7 },
    },
    paths: [
      {
        ball: "stick",
        points: [
          { x: 1.0, y: 5.5 },
          { x: 12.3, y: 7.8 },
        ],
      },
      {
        ball: "cue",
        points: [
          { x: 12.3, y: 7.8 },
          { x: 25.0, y: 7.8 },
          { x: 56.0, y: 48.5 },
          { x: 96.5, y: 37.0 },
          { x: 45.0, y: 3.0 },
          { x: 2.5, y: 28.0 },
          { x: 56.0, y: 48.5 },
          { x: 90.4, y: 7.7 },
        ],
      },
      {
        ball: "second",
        points: [
          { x: 25.0, y: 7.8 },
          { x: 58.5, y: 44.0 },
          { x: 84.0, y: 8.0 },
          { x: 90.4, y: 7.7 },
        ],
      },
      {
        ball: "third",
        points: [
          { x: 90.4, y: 7.7 },
          { x: 88.0, y: 8.8 },
        ],
      },
    ],
    solution: {
      hitPoint: "laag-links; exacte dikte controleren in het bronbeeld",
      thickness: "voldoende vol om de lange doorloop te dragen",
      speed: "ongeveer 8.3 / 10 op de powerbalk",
      explanation:
        "De speelbal vertrekt linksboven, raakt geel, loopt eerst naar de onderband net rechts van de tweede diamant, daarna naar de onderste diamant op de rechter korte band, vervolgens naar de bovenband links van het midden, naar de linker korte band net onder de tweede diamant, terug naar de onderband net rechts van de tweede diamant en vandaar richting rood. Bal 2 krijgt eveneens een brede terugloop.",
      technicalDetails: [
        "Effect: laag-links, ongeveer stand 1.3.",
        "Power: ongeveer 8.3 / 10.",
        "Lijnen: handmatig getraceerd op de groene simulator en gecalibreerd op de raildiamonds.",
        "Bronbeeld: PDF-positie 15; gebruik het vergrote diagram als controle voor nuance.",
      ],
    },
  },
  "dirk-acx-016": {
    title: "PDF-positie 16 - handmatig getraceerd",
    status: "handmatig getraceerd",
    renderMode: "table",
    generatedFromImage: true,
    lineStatus: "diamond",
    originalDiagramImage: "assets/positions/shot-016.jpg",
    lineOverlayImage: "",
    goal:
      "Maak de carambole onderin rechts en laat bal 2 vanuit de hoek terugkomen.",
    hint:
      "Laag effect met middeltempo. De tweede bal maakt de grote diagonale lus, de speelbal blijft compact onderin.",
    balls: {
      cue: { x: 76.5, y: 36.1 },
      second: { x: 66.2, y: 43.6 },
      third: { x: 93.2, y: 42.5 },
    },
    paths: [
      {
        ball: "stick",
        points: [
          { x: 99.0, y: 10.5 },
          { x: 76.5, y: 36.1 },
        ],
      },
      {
        ball: "cue",
        points: [
          { x: 76.5, y: 36.1 },
          { x: 66.2, y: 43.6 },
          { x: 84.0, y: 43.2 },
          { x: 93.2, y: 42.5 },
        ],
      },
      {
        ball: "second",
        points: [
          { x: 66.2, y: 43.6 },
          { x: 2.5, y: 9.5 },
          { x: 13.0, y: 3.0 },
          { x: 83.0, y: 42.0 },
        ],
      },
      {
        ball: "third",
        points: [
          { x: 93.2, y: 42.5 },
          { x: 95.0, y: 42.3 },
        ],
      },
    ],
    solution: {
      hitPoint: "laag; raakpunt in het bronbeeld controleren",
      thickness: "dun en beheerst, zodat de speelbal onderin blijft",
      speed: "ongeveer 5.2 / 10 op de powerbalk",
      explanation:
        "De speelbal maakt een korte carambole in de onderste rechterzone. Bal 2 loopt breed via linksboven en komt terug richting de rechter onderkant.",
      technicalDetails: [
        "Effect: laag, ongeveer stand 1.4.",
        "Power: ongeveer 5.2 / 10.",
        "Lijnen: handmatig getraceerd op de groene simulator en gecalibreerd op de raildiamonds.",
        "Bronbeeld: PDF-positie 16; gebruik het vergrote diagram als controle voor nuance.",
      ],
    },
  },
  "dirk-acx-017": {
    title: "PDF-positie 17 - handmatig getraceerd",
    status: "handmatig getraceerd",
    renderMode: "table",
    generatedFromImage: true,
    lineStatus: "diamond",
    originalDiagramImage: "assets/positions/shot-017.jpg",
    lineOverlayImage: "",
    goal:
      "Maak de lange carambole van boven/links naar rood rechtsonder en verzamel terug naar de rechterzijde.",
    hint:
      "Laag-rechts effect. De witte lijn valt na het eerste contact lang door naar de onderkant.",
    balls: {
      cue: { x: 56.6, y: 22.6 },
      second: { x: 38.4, y: 6.7 },
      third: { x: 92.6, y: 41.5 },
    },
    paths: [
      {
        ball: "stick",
        points: [
          { x: 73.0, y: 49.0 },
          { x: 56.6, y: 22.6 },
        ],
      },
      {
        ball: "cue",
        points: [
          { x: 56.6, y: 22.6 },
          { x: 38.4, y: 6.7 },
          { x: 42.0, y: 3.0 },
          { x: 84.0, y: 48.0 },
          { x: 92.6, y: 41.5 },
        ],
      },
      {
        ball: "second",
        points: [
          { x: 38.4, y: 6.7 },
          { x: 2.5, y: 10.0 },
          { x: 78.0, y: 48.0 },
          { x: 89.0, y: 41.0 },
        ],
      },
      {
        ball: "third",
        points: [
          { x: 92.6, y: 41.5 },
          { x: 89.0, y: 44.0 },
        ],
      },
    ],
    solution: {
      hitPoint: "laag-rechts; exacte dikte controleren in het bronbeeld",
      thickness: "voldoende dun om de speelbal lang te laten doorvallen",
      speed: "ongeveer 5.8 / 10 op de powerbalk",
      explanation:
        "De speelbal loopt na het contact met geel eerst duidelijk naar de bovenste lange band en komt daarna terug richting de onderband bij rood. Bal 2 vertrekt goed naar links en gaat na de linker band door naar de onderband bij de rode bal.",
      technicalDetails: [
        "Effect: laag-rechts, ongeveer stand 1.5.",
        "Power: ongeveer 5.8 / 10.",
        "Lijnen: handmatig getraceerd op de groene simulator en gecalibreerd op de raildiamonds.",
        "Bronbeeld: PDF-positie 17; gebruik het vergrote diagram als controle voor nuance.",
      ],
    },
  },
  "dirk-acx-018": {
    title: "PDF-positie 18 - handmatig getraceerd",
    status: "handmatig getraceerd",
    renderMode: "table",
    generatedFromImage: true,
    lineStatus: "diamond",
    originalDiagramImage: "assets/positions/shot-018.jpg",
    lineOverlayImage: "",
    goal:
      "Maak de carambole rechts en laat de speelbal via de onderhoek terug naar rood lopen.",
    hint:
      "Laag-rechts effect. De witte route gaat naar beneden en knikt daarna terug omhoog.",
    balls: {
      cue: { x: 79.9, y: 15.1 },
      second: { x: 84.2, y: 38.3 },
      third: { x: 92.9, y: 8.9 },
    },
    paths: [
      {
        ball: "stick",
        points: [
          { x: 72.0, y: 0.8 },
          { x: 79.9, y: 15.1 },
        ],
      },
      {
        ball: "cue",
        points: [
          { x: 79.9, y: 15.1 },
          { x: 96.0, y: 29.5 },
          { x: 89.5, y: 46.5 },
          { x: 84.2, y: 38.3 },
          { x: 92.9, y: 8.9 },
        ],
      },
      {
        ball: "second",
        points: [
          { x: 84.2, y: 38.3 },
          { x: 91.5, y: 3.0 },
          { x: 2.5, y: 24.5 },
          { x: 72.0, y: 46.0 },
          { x: 92.0, y: 41.5 },
        ],
      },
      {
        ball: "third",
        points: [
          { x: 92.9, y: 8.9 },
          { x: 90.6, y: 8.0 },
        ],
      },
    ],
    solution: {
      hitPoint: "laag-rechts; exacte aanspeeldikte controleren in het bronbeeld",
      thickness: "dun genoeg om de knik naar onder te krijgen",
      speed: "ongeveer 6.9 / 10 op de powerbalk",
      explanation:
        "De speelbal gaat eerst via de rechter korte band en de onderste lange band naar geel, en loopt daarna door naar rood. Bal 2 gaat eerst naar de bovenste lange band, daarna naar het midden van de linker korte band en vervolgens naar de onderste lange band.",
      technicalDetails: [
        "Effect: laag-rechts, ongeveer stand 1.2.",
        "Power: ongeveer 6.9 / 10.",
        "Lijnen: handmatig getraceerd op de groene simulator en gecalibreerd op de raildiamonds.",
        "Bronbeeld: PDF-positie 18; gebruik het vergrote diagram als controle voor nuance.",
      ],
    },
  },
  "dirk-acx-019": {
    title: "PDF-positie 19 - handmatig getraceerd",
    status: "handmatig getraceerd",
    renderMode: "table",
    generatedFromImage: true,
    lineStatus: "diamond",
    originalDiagramImage: "assets/positions/shot-019.jpg",
    lineOverlayImage: "",
    goal:
      "Maak de carambole vanuit de korte rechterhoek en laat bal 2 via links terugkomen.",
    hint:
      "Gebruik rechts effect. De witte lijn zakt langs de rechterkant omlaag richting rood.",
    balls: {
      cue: { x: 92.6, y: 7.2 },
      second: { x: 86.8, y: 12.5 },
      third: { x: 93.4, y: 42.5 },
    },
    paths: [
      {
        ball: "cue",
        points: [
          { x: 92.6, y: 7.2 },
          { x: 86.8, y: 12.5 },
          { x: 95.0, y: 22.0 },
          { x: 93.4, y: 42.5 },
        ],
      },
      {
        ball: "second",
        points: [
          { x: 86.8, y: 12.5 },
          { x: 43.5, y: 45.0 },
          { x: 2.5, y: 21.0 },
          { x: 24.0, y: 3.0 },
          { x: 88.0, y: 43.5 },
        ],
      },
      {
        ball: "third",
        points: [
          { x: 93.4, y: 42.5 },
          { x: 91.8, y: 40.6 },
        ],
      },
    ],
    solution: {
      hitPoint: "rechts effect; raakpunt in het bronbeeld controleren",
      thickness: "kort en zuiver, met controle over de rechter bandlijn",
      speed: "ongeveer 7.2 / 10 op de powerbalk",
      explanation:
        "De speelbal blijft in de rechterstrook: na geel zakt hij langs de korte band naar rood. Bal 2 loopt via de brede linkerkant terug.",
      technicalDetails: [
        "Effect: rechts, ongeveer stand 0.9.",
        "Power: ongeveer 7.2 / 10.",
        "Lijnen: handmatig getraceerd op de groene simulator en gecalibreerd op de raildiamonds.",
        "Bronbeeld: PDF-positie 19; gebruik het vergrote diagram als controle voor nuance.",
      ],
    },
  },
  "dirk-acx-020": {
    title: "PDF-positie 20 - handmatig getraceerd",
    status: "handmatig getraceerd",
    renderMode: "table",
    generatedFromImage: true,
    lineStatus: "diamond",
    originalDiagramImage: "assets/positions/shot-020.jpg",
    lineOverlayImage: "",
    goal:
      "Maak de carambole van onder/midden naar rood rechtsboven en verzamel via de linker route.",
    hint:
      "Laag-links effect met middeltempo. De witte lijn loopt vanaf onder naar rechtsboven.",
    balls: {
      cue: { x: 80.1, y: 30.5 },
      second: { x: 61.7, y: 43.6 },
      third: { x: 91.7, y: 7.1 },
    },
    paths: [
      {
        ball: "stick",
        points: [
          { x: 99.0, y: 22.0 },
          { x: 80.1, y: 30.5 },
        ],
      },
      {
        ball: "cue",
        points: [
          { x: 80.1, y: 30.5 },
          { x: 61.7, y: 43.6 },
          { x: 64.0, y: 47.0 },
          { x: 91.7, y: 7.1 },
        ],
      },
      {
        ball: "second",
        points: [
          { x: 61.7, y: 43.6 },
          { x: 2.5, y: 29.0 },
          { x: 88.5, y: 3.8 },
          { x: 91.7, y: 7.1 },
        ],
      },
      {
        ball: "third",
        points: [
          { x: 91.7, y: 7.1 },
          { x: 92.8, y: 6.2 },
        ],
      },
    ],
    solution: {
      hitPoint: "laag-links; exacte dikte controleren in het bronbeeld",
      thickness: "voldoende vol voor de lange witte doorloop",
      speed: "ongeveer 5.4 / 10 op de powerbalk",
      explanation:
        "De speelbal loopt via bal 2 eerst nog omlaag naar rechts en komt daarna omhoog naar rood rechtsboven. Bal 2 neemt de grote linker route en komt terug naar de bovenste rechterzone.",
      technicalDetails: [
        "Effect: laag-links, ongeveer stand 1.3.",
        "Power: ongeveer 5.4 / 10.",
        "Lijnen: handmatig getraceerd op de groene simulator en gecalibreerd op de raildiamonds.",
        "Bronbeeld: PDF-positie 20; gebruik het vergrote diagram als controle voor nuance.",
      ],
    },
  },
  "dirk-acx-021": {
    title: "PDF-positie 21 - handmatig getraceerd",
    status: "handmatig getraceerd - eerste lezing",
    renderMode: "table",
    generatedFromImage: true,
    lineStatus: "diamond",
    originalDiagramImage: "assets/positions/shot-021.jpg",
    lineOverlayImage: "",
    goal:
      "Laat de speelbal via de rechteronderhoek naar rood terugkomen terwijl bal 2 de linkerlus maakt.",
    hint:
      "Laag effect met behoorlijk tempo. Gebruik het vergrote bronbeeld als controle voor de precieze rechterterugloop.",
    balls: {
      cue: { x: 48.9, y: 24.6 },
      second: { x: 37.5, y: 6.2 },
      third: { x: 91.7, y: 7.1 },
    },
    paths: [
      {
        ball: "cue",
        points: [
          { x: 48.9, y: 24.6 },
          { x: 37.5, y: 6.2 },
          { x: 73.0, y: 47.0 },
          { x: 96.5, y: 25.0 },
          { x: 91.7, y: 7.1 },
        ],
      },
      {
        ball: "second",
        points: [
          { x: 37.5, y: 6.2 },
          { x: 2.5, y: 24.0 },
          { x: 48.0, y: 47.0 },
          { x: 79.0, y: 19.0 },
        ],
      },
    ],
    solution: {
      hitPoint: "laag; exacte dikte controleren in het bronbeeld",
      thickness: "voldoende vol om wit diep naar rechts te laten vallen",
      speed: "ongeveer 6.6 / 10 op de powerbalk",
      explanation:
        "De speelbal gaat via geel eerst naar de onderkant rechts en klimt daarna langs de rechterzijde naar rood. Bal 2 maakt intussen de brede linkerlus en keert terug naar de midden/rechterzone.",
      technicalDetails: [
        "Effect: laag, ongeveer stand 1.2.",
        "Power: ongeveer 6.6 / 10.",
        "Lijnen: handmatig eerste lezing op basis van de duidelijke PDF-render en de bron-overlay.",
        "Bronbeeld: PDF-positie 21; gebruik het vergrote diagram als controle voor nuance.",
      ],
    },
  },
  "dirk-acx-022": {
    title: "PDF-positie 22 - handmatig getraceerd",
    status: "handmatig getraceerd - eerste lezing",
    renderMode: "table",
    generatedFromImage: true,
    lineStatus: "diamond",
    originalDiagramImage: "assets/positions/shot-022.jpg",
    lineOverlayImage: "",
    goal:
      "Speel de korte carambole bovenin en laat bal 2 de grote linkerlijn afwerken.",
    hint:
      "Laag effect met middentempo. De witte lijn blijft compact, de gele lijn maakt de grote lus.",
    balls: {
      cue: { x: 37.1, y: 14.0 },
      second: { x: 29.0, y: 18.0 },
      third: { x: 91.5, y: 7.8 },
    },
    paths: [
      {
        ball: "cue",
        points: [
          { x: 37.1, y: 14.0 },
          { x: 29.0, y: 18.0 },
          { x: 84.0, y: 3.0 },
          { x: 91.5, y: 7.8 },
        ],
      },
      {
        ball: "second",
        points: [
          { x: 29.0, y: 18.0 },
          { x: 2.5, y: 24.0 },
          { x: 33.0, y: 47.0 },
          { x: 96.0, y: 8.0 },
        ],
      },
    ],
    solution: {
      hitPoint: "laag; exacte aanspeeldikte controleren in het bronbeeld",
      thickness: "kort en gecontroleerd, zodat wit hoog blijft",
      speed: "ongeveer 6.2 / 10 op de powerbalk",
      explanation:
        "De speelbal gaat na het contact compact via de bovenste zone naar rood. Bal 2 neemt de grote linkerlus en keert diagonaal terug naar rechts.",
      technicalDetails: [
        "Effect: laag, ongeveer stand 1.7.",
        "Power: ongeveer 6.2 / 10.",
        "Lijnen: handmatig eerste lezing op basis van de duidelijke PDF-render en de bron-overlay.",
        "Bronbeeld: PDF-positie 22; gebruik het vergrote diagram als controle voor nuance.",
      ],
    },
  },
  "dirk-acx-023": {
    title: "PDF-positie 23 - handmatig getraceerd",
    status: "handmatig bijgesteld op bronlijn",
    renderMode: "table",
    generatedFromImage: true,
    lineStatus: "diamond",
    originalDiagramImage: "assets/positions/shot-023.jpg",
    lineOverlayImage: "",
    goal:
      "Breng de speelbal via de rechterzijde en de onderband terug naar rood linksboven.",
    hint:
      "Laag effect met beheerst tempo. De witte lijn maakt de duidelijke knik rechts, de gele zakt eerst weg.",
    balls: {
      cue: { x: 90.3, y: 16.2 },
      second: { x: 89.4, y: 26.1 },
      third: { x: 27.8, y: 7.1 },
    },
    paths: [
      {
        ball: "cue",
        points: [
          { x: 90.3, y: 16.2 },
          { x: 89.4, y: 26.1 },
          { x: 96.5, y: 31.0 },
          { x: 76.0, y: 47.0 },
          { x: 27.8, y: 7.1 },
        ],
      },
      {
        ball: "second",
        points: [
          { x: 89.4, y: 26.1 },
          { x: 66.0, y: 47.5 },
          { x: 27.5, y: 12.0 },
        ],
      },
    ],
    solution: {
      hitPoint: "laag; exacte dikte controleren in het bronbeeld",
      thickness: "vrij dun, zodat de rechterknik open blijft",
      speed: "ongeveer 5.1 / 10 op de powerbalk",
      explanation:
        "De speelbal gaat via de rechter korte band en de onderband terug naar rood linksboven. Bal 2 zakt eerst naar de onderband en loopt daarna diagonaal terug richting rood.",
      technicalDetails: [
        "Effect: laag, ongeveer stand 1.4.",
        "Power: ongeveer 5.1 / 10.",
        "Lijnen: handmatig bijgesteld op de groene simulatorbron; klik het vergrote diagram open bij twijfel over de exacte raakpunten.",
        "Bronbeeld: PDF-positie 23; gebruik het vergrote diagram als controle voor nuance.",
      ],
    },
  },
  "dirk-acx-024": {
    title: "PDF-positie 24 - handmatig getraceerd",
    status: "handmatig getraceerd - eerste lezing",
    renderMode: "table",
    generatedFromImage: true,
    lineStatus: "diamond",
    originalDiagramImage: "assets/positions/shot-024.jpg",
    lineOverlayImage: "",
    goal:
      "Houd de speelbal kort richting rood en laat bal 2 de hogere terugweg nemen.",
    hint:
      "Laag effect, rustig tempo. Dit is een compactere positie dan de vorige paar.",
    balls: {
      cue: { x: 65.8, y: 21.7 },
      second: { x: 72.7, y: 16.3 },
      third: { x: 91.8, y: 41.9 },
    },
    paths: [
      {
        ball: "cue",
        points: [
          { x: 65.8, y: 21.7 },
          { x: 72.7, y: 16.3 },
          { x: 96.5, y: 36.0 },
          { x: 91.8, y: 41.9 },
        ],
      },
      {
        ball: "second",
        points: [
          { x: 72.7, y: 16.3 },
          { x: 79.0, y: 1.5 },
          { x: 96.5, y: 36.0 },
        ],
      },
    ],
    solution: {
      hitPoint: "laag; exacte dikte controleren in het bronbeeld",
      thickness: "kort genoeg om wit naar de rechterhoek te sturen",
      speed: "ongeveer 4.1 / 10 op de powerbalk",
      explanation:
        "De speelbal maakt na geel de korte rechterafslag naar rood. Bal 2 klimt eerst omhoog en loopt daarna langs de rechterzijde terug.",
      technicalDetails: [
        "Effect: laag, ongeveer stand 1.7.",
        "Power: ongeveer 4.1 / 10.",
        "Lijnen: handmatig eerste lezing op basis van de duidelijke PDF-render en de bron-overlay.",
        "Bronbeeld: PDF-positie 24; gebruik het vergrote diagram als controle voor nuance.",
      ],
    },
  },
  "dirk-acx-025": {
    title: "PDF-positie 25 - handmatig getraceerd",
    status: "handmatig getraceerd - eerste lezing",
    renderMode: "table",
    generatedFromImage: true,
    lineStatus: "diamond",
    originalDiagramImage: "assets/positions/shot-025.jpg",
    lineOverlayImage: "",
    goal:
      "Laat de speelbal lang via de onderband doorlopen naar rood rechtsboven.",
    hint:
      "Laag-links effect. Dit is een lange diagonale doorstoot waarin de bronzoom nuttig blijft.",
    balls: {
      cue: { x: 8.1, y: 20.3 },
      second: { x: 6.2, y: 29.5 },
      third: { x: 92.3, y: 7.1 },
    },
    paths: [
      {
        ball: "cue",
        points: [
          { x: 8.1, y: 20.3 },
          { x: 6.2, y: 29.5 },
          { x: 24.0, y: 47.0 },
          { x: 92.3, y: 7.1 },
        ],
      },
      {
        ball: "second",
        points: [
          { x: 6.2, y: 29.5 },
          { x: 2.5, y: 34.0 },
          { x: 16.0, y: 47.0 },
          { x: 95.0, y: 9.0 },
        ],
      },
    ],
    solution: {
      hitPoint: "laag-links; exacte aanspeeldikte controleren in het bronbeeld",
      thickness: "vrij dun om de lange diagonale witte lijn open te houden",
      speed: "ongeveer 4.6 / 10 op de powerbalk",
      explanation:
        "De speelbal vertrekt vanuit de linkerzijde, raakt geel en gaat via de onderband lang door naar rood rechtsboven. Bal 2 blijft eerst in de korte linkerhoek voordat hij de tafel oversteekt.",
      technicalDetails: [
        "Effect: laag-links, ongeveer stand 3.",
        "Power: ongeveer 4.6 / 10.",
        "Lijnen: handmatig eerste lezing op basis van de duidelijke PDF-render en de bron-overlay.",
        "Bronbeeld: PDF-positie 25; gebruik het vergrote diagram als controle voor nuance.",
      ],
    },
  },
  "dirk-acx-026": {
    title: "PDF-positie 26 - handmatig getraceerd",
    status: "handmatig bijgesteld op bronlijn",
    renderMode: "table",
    generatedFromImage: true,
    lineStatus: "diamond",
    originalDiagramImage: "assets/positions/shot-026.jpg",
    lineOverlayImage: "",
    goal:
      "Stuur de speelbal eerst weg naar links en laat hem daarna terugvallen op rood rechtsonder.",
    hint:
      "Rechts effect met veel tempo. De twee hoofdlijnen kruisen elkaar duidelijk in het midden.",
    balls: {
      cue: { x: 76.3, y: 16.2 },
      second: { x: 60.2, y: 18.7 },
      third: { x: 92.5, y: 42.3 },
    },
    paths: [
      {
        ball: "cue",
        points: [
          { x: 76.3, y: 16.2 },
          { x: 60.2, y: 18.7 },
          { x: 43.0, y: 2.0 },
          { x: 2.5, y: 22.0 },
          { x: 92.5, y: 42.3 },
        ],
      },
      {
        ball: "second",
        points: [
          { x: 60.2, y: 18.7 },
          { x: 24.0, y: 47.0 },
          { x: 2.5, y: 31.0 },
          { x: 43.0, y: 2.0 },
          { x: 95.0, y: 39.0 },
        ],
      },
    ],
    solution: {
      hitPoint: "rechts; exacte dikte controleren in het bronbeeld",
      thickness: "genoeg draagkracht voor de lange eerste witte lus",
      speed: "ongeveer 8.4 / 10 op de powerbalk",
      explanation:
        "De speelbal klimt na geel eerst naar de bovenkant, raakt links en valt daarna lang terug op rood rechtsonder. Bal 2 tekent de brede diamantlijn links uit voordat hij weer naar rechts opent.",
      technicalDetails: [
        "Effect: rechts, ongeveer stand 0.7.",
        "Power: ongeveer 8.4 / 10.",
        "Lijnen: handmatig bijgesteld op de groene simulatorbron; de zichtbare diamant links is leidend genomen.",
        "Bronbeeld: PDF-positie 26; gebruik het vergrote diagram als controle voor nuance.",
      ],
    },
  },
  "dirk-acx-027": {
    title: "PDF-positie 27 - handmatig getraceerd",
    status: "handmatig bijgesteld op bronlijn",
    renderMode: "table",
    generatedFromImage: true,
    lineStatus: "diamond",
    originalDiagramImage: "assets/positions/shot-027.jpg",
    lineOverlayImage: "",
    goal:
      "Verlaat geel naar links en laat de speelbal via de bovenband lang op rood rechtsonder landen.",
    hint:
      "Middeneffect met middeltempo. De witte hoofdlijn is hier de lange dalende terugkeer naar rechts.",
    balls: {
      cue: { x: 57.2, y: 41.5 },
      second: { x: 32.9, y: 42.5 },
      third: { x: 92.5, y: 42.3 },
    },
    paths: [
      {
        ball: "cue",
        points: [
          { x: 57.2, y: 41.5 },
          { x: 32.9, y: 42.5 },
          { x: 2.5, y: 24.0 },
          { x: 37.0, y: 1.5 },
          { x: 92.5, y: 42.3 },
        ],
      },
      {
        ball: "second",
        points: [
          { x: 32.9, y: 42.5 },
          { x: 30.0, y: 47.5 },
          { x: 2.5, y: 26.0 },
          { x: 34.5, y: 2.0 },
          { x: 83.0, y: 47.0 },
        ],
      },
    ],
    solution: {
      hitPoint: "midden; exacte dikte controleren in het bronbeeld",
      thickness: "kort genoeg om de lange witte bandlijn te openen",
      speed: "ongeveer 5.4 / 10 op de powerbalk",
      explanation:
        "De speelbal verlaat geel naar links, pakt de bovenste lange band en komt lang terug naar rood rechtsonder. Bal 2 maakt juist de lage linkerlus en klimt daarna via de top weer open naar rechts.",
      technicalDetails: [
        "Effect: midden, ongeveer stand 0.4.",
        "Power: ongeveer 5.4 / 10.",
        "Lijnen: handmatig bijgesteld op de groene simulatorbron; vooral de gele terugweg is opnieuw getraceerd.",
        "Bronbeeld: PDF-positie 27; gebruik het vergrote diagram als controle voor nuance.",
      ],
    },
  },
  "dirk-acx-027-bis": {
    title: "PDF-positie 27 bis - handmatig getraceerd",
    status: "handmatig getraceerd - bron sober",
    renderMode: "table",
    generatedFromImage: true,
    lineStatus: "diamond",
    originalDiagramImage: "assets/positions/shot-027-bis.jpg",
    lineOverlayImage: "",
    goal:
      "Houd de stoot uiterst vlak in de rechter onderhoek en gebruik het bronbeeld als controle voor de nuance.",
    hint:
      "Laag-rechts effect. Dit diagram is visueel sober: de lijnen blijven bijna horizontaal langs de onderzijde.",
    balls: {
      cue: { x: 87.5, y: 41.8 },
      second: { x: 81.3, y: 42.0 },
      third: { x: 92.8, y: 43.1 },
    },
    paths: [
      {
        ball: "cue",
        points: [
          { x: 87.5, y: 41.8 },
          { x: 81.3, y: 42.0 },
          { x: 92.8, y: 43.1 },
        ],
      },
      {
        ball: "second",
        points: [
          { x: 81.3, y: 42.0 },
          { x: 2.5, y: 43.0 },
        ],
      },
    ],
    solution: {
      hitPoint: "laag-rechts; controleer de exacte aanspeeldikte in het vergrote bronbeeld",
      thickness: "kort en dun; alles blijft laag over de onderzijde",
      speed: "ongeveer 5.6 / 10 op de powerbalk",
      explanation:
        "De positie blijft vrijwel volledig onderin de rechterhoek. Bal 2 loopt heel vlak weg langs de onderband; de speelbal zelf blijft kort bij de cluster en rood.",
      technicalDetails: [
        "Effect: laag-rechts, ongeveer stand 1.6.",
        "Power: ongeveer 5.6 / 10.",
        "Lijnen: handmatig getraceerd op de groene simulatorbron; dit bronbeeld geeft minder nuance dan de andere posities.",
        "Bronbeeld: PDF-positie 27 bis; klik het vergrote diagram open als je de precieze lijn wilt controleren.",
      ],
    },
  },
  "dirk-acx-028": {
    title: "PDF-positie 28 - handmatig getraceerd",
    status: "handmatig bijgesteld op bronlijn",
    renderMode: "table",
    generatedFromImage: true,
    lineStatus: "diamond",
    originalDiagramImage: "assets/positions/shot-028.jpg",
    lineOverlayImage: "",
    goal:
      "Speel de grote witte driehoek via links en boven terug naar rood rechtsonder.",
    hint:
      "Laag-rechts effect met stevig tempo. De witte en gele lijnen kruisen elkaar vroeg in de positie.",
    balls: {
      cue: { x: 68.0, y: 32.1 },
      second: { x: 46.0, y: 31.4 },
      third: { x: 92.9, y: 43.1 },
    },
    paths: [
      {
        ball: "cue",
        points: [
          { x: 68.0, y: 32.1 },
          { x: 46.0, y: 31.4 },
          { x: 30.0, y: 47.0 },
          { x: 2.5, y: 31.0 },
          { x: 92.9, y: 43.1 },
        ],
      },
      {
        ball: "second",
        points: [
          { x: 46.0, y: 31.4 },
          { x: 2.5, y: 22.0 },
          { x: 39.0, y: 2.0 },
          { x: 83.5, y: 47.0 },
          { x: 92.9, y: 43.1 },
        ],
      },
    ],
    solution: {
      hitPoint: "laag-rechts; exacte aanspeeldikte controleren in het bronbeeld",
      thickness: "genoeg vol om de lange witte terugkeer naar rechts te dragen",
      speed: "ongeveer 7.3 / 10 op de powerbalk",
      explanation:
        "De speelbal blijft in de lage linkerlus en valt van daaruit door naar rood. Bal 2 klimt juist via de top van de tafel en zakt daarna lang af naar de rechteronderhoek.",
      technicalDetails: [
        "Effect: laag-rechts, ongeveer stand 1.2.",
        "Power: ongeveer 7.3 / 10.",
        "Lijnen: handmatig bijgesteld op de groene simulatorbron; wit en geel zijn hier opnieuw als losse trajecten gelezen.",
        "Bronbeeld: PDF-positie 28; gebruik het vergrote diagram als controle voor nuance.",
      ],
    },
  },
  "dirk-acx-029": {
    title: "PDF-positie 29 - handmatig getraceerd",
    status: "handmatig bijgesteld op bronlijn",
    renderMode: "table",
    generatedFromImage: true,
    lineStatus: "diamond",
    originalDiagramImage: "assets/positions/shot-029.jpg",
    lineOverlayImage: "",
    goal:
      "Laat de speelbal via de linkerlus en de bovenkant op rood rechtsonder vallen.",
    hint:
      "Rechts effect met middeltempo. De twee routes liggen hier dicht bij elkaar maar lopen niet gelijk.",
    balls: {
      cue: { x: 60.5, y: 26.1 },
      second: { x: 31.2, y: 30.7 },
      third: { x: 92.8, y: 43.1 },
    },
    paths: [
      {
        ball: "cue",
        points: [
          { x: 60.5, y: 26.1 },
          { x: 31.2, y: 30.7 },
          { x: 2.5, y: 26.0 },
          { x: 92.8, y: 43.1 },
        ],
      },
      {
        ball: "second",
        points: [
          { x: 31.2, y: 30.7 },
          { x: 38.5, y: 2.0 },
          { x: 84.0, y: 47.0 },
        ],
      },
    ],
    solution: {
      hitPoint: "rechts; exacte dikte controleren in het bronbeeld",
      thickness: "kort en zuiver, zodat de witte bandlus open blijft",
      speed: "ongeveer 5.6 / 10 op de powerbalk",
      explanation:
        "De speelbal blijft laag: eerst kort naar de linker korte band en dan schuin door naar rood. Bal 2 neemt juist de hoge piek via de bovenband en zakt daarna terug naar rechts.",
      technicalDetails: [
        "Effect: rechts, ongeveer stand 0.6.",
        "Power: ongeveer 5.6 / 10.",
        "Lijnen: handmatig bijgesteld op de groene simulatorbron; vooral de gele bovenlijn is opnieuw gelegd.",
        "Bronbeeld: PDF-positie 29; gebruik het vergrote diagram als controle voor nuance.",
      ],
    },
  },
  "dirk-acx-030": {
    title: "PDF-positie 30 - handmatig getraceerd",
    status: "handmatig bijgesteld op bronlijn",
    renderMode: "table",
    generatedFromImage: true,
    lineStatus: "diamond",
    originalDiagramImage: "assets/positions/shot-030.jpg",
    lineOverlayImage: "",
    goal:
      "Speel bijna rechtstreeks door naar rood terwijl bal 2 de hoge boog via de bovenkant neemt.",
    hint:
      "Middeneffect met rustig middentempo. Dit is visueel eenvoudiger, maar het verschil tussen wit en geel blijft klein.",
    balls: {
      cue: { x: 32.7, y: 36.3 },
      second: { x: 8.0, y: 24.6 },
      third: { x: 92.8, y: 42.2 },
    },
    paths: [
      {
        ball: "cue",
        points: [
          { x: 32.7, y: 36.3 },
          { x: 8.0, y: 24.6 },
          { x: 2.5, y: 28.0 },
          { x: 92.8, y: 42.2 },
        ],
      },
      {
        ball: "second",
        points: [
          { x: 8.0, y: 24.6 },
          { x: 53.0, y: 2.0 },
          { x: 92.0, y: 41.0 },
        ],
      },
    ],
    solution: {
      hitPoint: "midden; exacte aanspeeldikte controleren in het bronbeeld",
      thickness: "vrij vol om wit direct door te laten lopen",
      speed: "ongeveer 5.7 / 10 op de powerbalk",
      explanation:
        "De speelbal tikt na geel eerst nog de linker korte band aan en loopt dan lang door naar rood rechtsonder. Bal 2 maakt de hoge lange boog via de bovenband en zakt daarna terug naar rechts.",
      technicalDetails: [
        "Effect: midden, ongeveer stand 0.5.",
        "Power: ongeveer 5.7 / 10.",
        "Lijnen: handmatig bijgesteld op de groene simulatorbron; de witte lijn bevat hier ook het korte tikje tegen de linker korte band.",
        "Bronbeeld: PDF-positie 30; gebruik het vergrote diagram als controle voor nuance.",
      ],
    },
  },
  "dirk-acx-031": {
    status: "handmatig getraceerd - eerste lezing",
    lineStatus: "diamond",
    lineOverlayImage: "",
    paths: [
      {
        ball: "cue",
        points: [
          { x: 15.8, y: 30.1 },
          { x: 29.3, y: 24.8 },
          { x: 39.5, y: 0.5 },
          { x: 93.5, y: 42.0 },
        ],
      },
      {
        ball: "second",
        points: [
          { x: 29.3, y: 24.8 },
          { x: 86.0, y: 38.5 },
        ],
      },
    ],
  },
  "dirk-acx-032": {
    status: "handmatig getraceerd - eerste lezing",
    lineStatus: "diamond",
    lineOverlayImage: "",
    paths: [
      {
        ball: "cue",
        points: [
          { x: 15.8, y: 30.1 },
          { x: 26.8, y: 24.7 },
          { x: 94.0, y: 42.0 },
        ],
      },
      {
        ball: "second",
        points: [
          { x: 26.8, y: 24.7 },
          { x: 46.5, y: 0.5 },
          { x: 94.0, y: 38.0 },
        ],
      },
    ],
  },
  "dirk-acx-033": {
    status: "handmatig getraceerd - eerste lezing",
    lineStatus: "diamond",
    lineOverlayImage: "",
    paths: [
      {
        ball: "stick",
        marker: false,
        points: [
          { x: 93.2, y: 16.3 },
          { x: 73.5, y: 3.6 },
        ],
      },
      {
        ball: "cue",
        points: [
          { x: 85.9, y: 28.4 },
          { x: 88.9, y: 43.2 },
          { x: 82.0, y: 46.0 },
          { x: 71.6, y: 43.6 },
        ],
      },
      {
        ball: "second",
        points: [
          { x: 88.9, y: 43.2 },
          { x: 98.5, y: 27.5 },
          { x: 94.5, y: 0.5 },
        ],
      },
    ],
  },
  "dirk-acx-034": {
    status: "handmatig getraceerd - eerste lezing",
    lineStatus: "diamond",
    lineOverlayImage: "",
    paths: [
      {
        ball: "stick",
        marker: false,
        points: [
          { x: 83.1, y: 3.0 },
          { x: 99.7, y: 17.3 },
        ],
      },
      {
        ball: "cue",
        points: [
          { x: 93.1, y: 28.4 },
          { x: 92.1, y: 43.6 },
          { x: 84.0, y: 46.0 },
          { x: 75.1, y: 43.3 },
        ],
      },
      {
        ball: "second",
        points: [
          { x: 92.1, y: 43.6 },
          { x: 77.0, y: 0.5 },
          { x: 61.5, y: 33.0 },
        ],
      },
    ],
  },
  "dirk-acx-035": {
    status: "handmatig getraceerd - eerste lezing",
    lineStatus: "diamond",
    lineOverlayImage: "",
    paths: [
      {
        ball: "stick",
        marker: false,
        points: [
          { x: 97.0, y: 8.6 },
          { x: 82.0, y: 6.4 },
        ],
      },
      {
        ball: "cue",
        points: [
          { x: 87.0, y: 10.1 },
          { x: 73.3, y: 6.7 },
          { x: 95.0, y: 16.0 },
        ],
      },
      {
        ball: "second",
        points: [
          { x: 73.3, y: 6.7 },
          { x: 1.0, y: 1.0 },
          { x: 93.8, y: 16.1 },
        ],
      },
    ],
  },
  "dirk-acx-036": {
    status: "handmatig getraceerd - eerste lezing",
    lineStatus: "diamond",
    lineOverlayImage: "",
    paths: [
      {
        ball: "cue",
        points: [
          { x: 88.1, y: 8.9 },
          { x: 80.9, y: 6.2 },
          { x: 88.0, y: 48.5 },
          { x: 97.0, y: 10.0 },
        ],
      },
      {
        ball: "second",
        points: [
          { x: 80.9, y: 6.2 },
          { x: 1.0, y: 1.0 },
          { x: 93.5, y: 7.7 },
        ],
      },
    ],
  },
  "dirk-acx-037": {
    status: "handmatig getraceerd - eerste lezing",
    lineStatus: "diamond",
    lineOverlayImage: "",
    paths: [
      {
        ball: "cue",
        points: [
          { x: 67.5, y: 14.1 },
          { x: 77.2, y: 20.8 },
          { x: 93.8, y: 43.1 },
        ],
      },
      {
        ball: "second",
        points: [
          { x: 77.2, y: 20.8 },
          { x: 1.0, y: 11.0 },
          { x: 14.0, y: 1.0 },
          { x: 98.5, y: 20.0 },
          { x: 86.0, y: 48.0 },
        ],
      },
    ],
  },
  "dirk-acx-038": {
    status: "handmatig getraceerd - eerste lezing",
    lineStatus: "diamond",
    lineOverlayImage: "",
    paths: [
      {
        ball: "stick",
        marker: false,
        points: [
          { x: 57.7, y: 8.4 },
          { x: 47.8, y: 3.8 },
        ],
      },
      {
        ball: "cue",
        points: [
          { x: 66.6, y: 19.7 },
          { x: 73.3, y: 24.6 },
          { x: 50.2, y: 24.8 },
        ],
      },
      {
        ball: "second",
        points: [
          { x: 73.3, y: 24.6 },
          { x: 98.5, y: 34.0 },
          { x: 84.0, y: 48.0 },
          { x: 50.2, y: 24.8 },
        ],
      },
    ],
  },
  "dirk-acx-039": {
    status: "handmatig getraceerd - eerste lezing",
    lineStatus: "diamond",
    lineOverlayImage: "",
    paths: [
      {
        ball: "stick",
        marker: false,
        points: [
          { x: 29.2, y: 31.8 },
          { x: 10.7, y: 45.0 },
        ],
      },
      {
        ball: "cue",
        points: [
          { x: 38.4, y: 34.7 },
          { x: 46.3, y: 26.8 },
          { x: 61.5, y: 34.7 },
        ],
      },
      {
        ball: "second",
        points: [
          { x: 46.3, y: 26.8 },
          { x: 52.0, y: 0.5 },
          { x: 61.0, y: 48.0 },
        ],
      },
    ],
  },
  "dirk-acx-040": {
    status: "handmatig getraceerd - eerste lezing",
    lineStatus: "diamond",
    lineOverlayImage: "",
    paths: [
      {
        ball: "cue",
        points: [
          { x: 42.3, y: 34.8 },
          { x: 46.7, y: 26.8 },
          { x: 65.0, y: 30.4 },
        ],
      },
      {
        ball: "second",
        points: [
          { x: 46.7, y: 26.8 },
          { x: 52.0, y: 0.5 },
          { x: 61.0, y: 48.0 },
          { x: 66.0, y: 31.0 },
        ],
      },
    ],
  },
  "dirk-acx-041": {
    status: "handmatig getraceerd - eerste lezing",
    lineStatus: "diamond",
    lineOverlayImage: "",
    paths: [
      {
        ball: "stick",
        marker: false,
        points: [
          { x: 87.2, y: 2.5 },
          { x: 79.9, y: 6.1 },
        ],
      },
      {
        ball: "cue",
        points: [
          { x: 80.3, y: 13.9 },
          { x: 69.1, y: 19.6 },
          { x: 75.0, y: 48.0 },
          { x: 98.0, y: 5.0 },
        ],
      },
      {
        ball: "second",
        points: [
          { x: 69.1, y: 19.6 },
          { x: 1.0, y: 6.0 },
          { x: 92.7, y: 6.8 },
        ],
      },
    ],
  },
  "dirk-acx-042": {
    status: "handmatig getraceerd - eerste lezing",
    lineStatus: "diamond",
    lineOverlayImage: "",
    paths: [
      {
        ball: "cue",
        points: [
          { x: 79.0, y: 22.3 },
          { x: 73.3, y: 24.6 },
          { x: 93.5, y: 24.5 },
        ],
      },
      {
        ball: "second",
        points: [
          { x: 73.3, y: 24.6 },
          { x: 1.0, y: 34.5 },
          { x: 98.5, y: 24.0 },
        ],
      },
    ],
  },
  "dirk-acx-043": {
    status: "handmatig getraceerd - eerste lezing",
    lineStatus: "diamond",
    lineOverlayImage: "",
    paths: [
      {
        ball: "cue",
        points: [
          { x: 81.1, y: 18.5 },
          { x: 73.3, y: 24.9 },
          { x: 80.0, y: 48.0 },
          { x: 98.0, y: 28.0 },
        ],
      },
      {
        ball: "second",
        points: [
          { x: 73.3, y: 24.9 },
          { x: 1.0, y: 35.5 },
          { x: 93.8, y: 26.1 },
        ],
      },
    ],
  },
  "dirk-acx-044": {
    status: "handmatig getraceerd - eerste lezing",
    lineStatus: "diamond",
    lineOverlayImage: "",
    paths: [
      {
        ball: "stick",
        marker: false,
        points: [
          { x: 94.0, y: 7.0 },
          { x: 61.1, y: 5.7 },
        ],
      },
      {
        ball: "cue",
        points: [
          { x: 58.7, y: 7.1 },
          { x: 49.7, y: 6.1 },
          { x: 93.2, y: 42.6 },
        ],
      },
      {
        ball: "second",
        points: [
          { x: 49.7, y: 6.1 },
          { x: 1.0, y: 17.0 },
          { x: 93.2, y: 42.6 },
        ],
      },
    ],
  },
  "dirk-acx-045": {
    status: "handmatig getraceerd - eerste lezing",
    lineStatus: "diamond",
    lineOverlayImage: "",
    paths: [
      {
        ball: "cue",
        points: [
          { x: 83.0, y: 39.7 },
          { x: 64.4, y: 44.0 },
          { x: 8.0, y: 7.2 },
        ],
      },
      {
        ball: "second",
        points: [
          { x: 64.4, y: 44.0 },
          { x: 10.0, y: 1.0 },
          { x: 1.0, y: 1.0 },
        ],
      },
    ],
  },
  "dirk-acx-046": {
    status: "handmatig getraceerd - eerste lezing",
    lineStatus: "diamond",
    lineOverlayImage: "",
    paths: [
      {
        ball: "cue",
        points: [
          { x: 85.1, y: 15.2 },
          { x: 77.4, y: 13.8 },
          { x: 92.7, y: 7.7 },
        ],
      },
      {
        ball: "second",
        points: [
          { x: 77.4, y: 13.8 },
          { x: 1.0, y: 3.5 },
          { x: 98.0, y: 1.0 },
        ],
      },
    ],
  },
  "dirk-acx-047": {
    status: "handmatig getraceerd - eerste lezing",
    lineStatus: "diamond",
    lineOverlayImage: "",
    paths: [
      {
        ball: "stick",
        marker: false,
        points: [
          { x: 52.0, y: 16.5 },
          { x: 33.9, y: 4.1 },
        ],
      },
      {
        ball: "cue",
        points: [
          { x: 53.0, y: 25.6 },
          { x: 68.5, y: 43.2 },
          { x: 58.6, y: 7.3 },
        ],
      },
      {
        ball: "second",
        points: [
          { x: 68.5, y: 43.2 },
          { x: 98.0, y: 27.0 },
          { x: 58.6, y: 7.3 },
        ],
      },
    ],
  },
  "dirk-acx-048": {
    status: "handmatig getraceerd - eerste lezing",
    lineStatus: "diamond",
    lineOverlayImage: "",
    paths: [
      {
        ball: "cue",
        points: [
          { x: 78.9, y: 13.8 },
          { x: 67.5, y: 6.6 },
          { x: 98.5, y: 20.0 },
          { x: 84.6, y: 43.1 },
        ],
      },
      {
        ball: "second",
        points: [
          { x: 67.5, y: 6.6 },
          { x: 1.0, y: 16.5 },
          { x: 84.6, y: 43.1 },
        ],
      },
    ],
  },
  "dirk-acx-049": {
    status: "handmatig getraceerd - eerste lezing",
    lineStatus: "diamond",
    lineOverlayImage: "",
    paths: [
      {
        ball: "cue",
        points: [
          { x: 93.2, y: 26.5 },
          { x: 86.5, y: 20.0 },
          { x: 18.0, y: 1.0 },
          { x: 1.0, y: 3.0 },
          { x: 89.3, y: 42.0 },
        ],
      },
      {
        ball: "second",
        points: [
          { x: 86.5, y: 20.0 },
          { x: 87.5, y: 0.5 },
          { x: 92.0, y: 39.0 },
        ],
      },
    ],
  },
  "dirk-acx-050": {
    status: "handmatig getraceerd - eerste lezing",
    lineStatus: "diamond",
    lineOverlayImage: "",
    paths: [
      {
        ball: "cue",
        points: [
          { x: 92.5, y: 24.8 },
          { x: 84.7, y: 18.2 },
          { x: 1.0, y: 17.0 },
          { x: 70.0, y: 48.5 },
          { x: 82.2, y: 42.0 },
        ],
      },
      {
        ball: "second",
        points: [
          { x: 84.7, y: 18.2 },
          { x: 87.5, y: 0.5 },
          { x: 92.0, y: 39.0 },
        ],
      },
    ],
  },
  "dirk-acx-051": {
    status: "handmatig getraceerd - eerste lezing",
    lineStatus: "diamond",
    lineOverlayImage: "",
    paths: [
      {
        ball: "cue",
        points: [
          { x: 61.7, y: 21.8 },
          { x: 49.9, y: 24.6 },
          { x: 91.9, y: 42.7 },
        ],
      },
      {
        ball: "second",
        points: [
          { x: 49.9, y: 24.6 },
          { x: 1.0, y: 24.5 },
          { x: 91.0, y: 42.0 },
        ],
      },
    ],
  },
  "dirk-acx-052": {
    status: "handmatig getraceerd - eerste lezing",
    lineStatus: "diamond",
    lineOverlayImage: "",
    paths: [
      {
        ball: "cue",
        points: [
          { x: 89.4, y: 24.2 },
          { x: 80.4, y: 17.9 },
          { x: 95.0, y: 0.5 },
          { x: 91.7, y: 42.5 },
        ],
      },
      {
        ball: "second",
        points: [
          { x: 80.4, y: 17.9 },
          { x: 1.0, y: 16.0 },
          { x: 53.0, y: 0.5 },
          { x: 91.7, y: 42.5 },
        ],
      },
    ],
  },
  "dirk-acx-053": {
    status: "handmatig getraceerd - eerste lezing",
    lineStatus: "diamond",
    lineOverlayImage: "",
    paths: [
      {
        ball: "cue",
        points: [
          { x: 73.1, y: 12.3 },
          { x: 80.4, y: 17.9 },
          { x: 19.5, y: 17.9 },
        ],
      },
      {
        ball: "second",
        points: [
          { x: 80.4, y: 17.9 },
          { x: 98.5, y: 20.0 },
          { x: 67.0, y: 48.5 },
          { x: 1.0, y: 16.0 },
        ],
      },
    ],
  },
  "dirk-acx-054": {
    status: "handmatig getraceerd - eerste lezing",
    lineStatus: "diamond",
    lineOverlayImage: "",
    paths: [
      {
        ball: "cue",
        points: [
          { x: 10.9, y: 22.6 },
          { x: 38.4, y: 41.2 },
          { x: 74.0, y: 46.0 },
          { x: 92.4, y: 37.9 },
        ],
      },
      {
        ball: "second",
        points: [
          { x: 38.4, y: 41.2 },
          { x: 42.0, y: 48.5 },
          { x: 76.0, y: 0.5 },
          { x: 98.5, y: 30.0 },
          { x: 92.4, y: 37.9 },
        ],
      },
    ],
  },
  "dirk-acx-055": {
    status: "handmatig getraceerd - eerste lezing",
    lineStatus: "diamond",
    lineOverlayImage: "",
    paths: [
      {
        ball: "stick",
        marker: false,
        points: [
          { x: 97.5, y: 2.3 },
          { x: 100.0, y: 47.6 },
        ],
      },
      {
        ball: "cue",
        points: [
          { x: 23.8, y: 41.2 },
          { x: 18.2, y: 23.7 },
          { x: 1.0, y: 36.0 },
          { x: 10.0, y: 48.5 },
          { x: 67.0, y: 0.5 },
          { x: 96.0, y: 38.0 },
        ],
      },
      {
        ball: "second",
        points: [
          { x: 18.2, y: 23.7 },
          { x: 40.0, y: 0.5 },
          { x: 98.0, y: 34.0 },
        ],
      },
    ],
  },
  "dirk-acx-056": {
    status: "handmatig getraceerd - eerste lezing",
    lineStatus: "diamond",
    lineOverlayImage: "",
    paths: [
      {
        ball: "stick",
        marker: false,
        points: [
          { x: 37.1, y: 4.1 },
          { x: 29.2, y: 17.6 },
        ],
      },
      {
        ball: "cue",
        points: [
          { x: 31.3, y: 28.4 },
          { x: 26.3, y: 42.4 },
          { x: 37.0, y: 48.0 },
          { x: 59.3, y: 42.4 },
        ],
      },
      {
        ball: "second",
        points: [
          { x: 26.3, y: 42.4 },
          { x: 1.0, y: 18.0 },
          { x: 18.0, y: 0.5 },
          { x: 43.0, y: 48.5 },
        ],
      },
    ],
  },
  "dirk-acx-057": {
    status: "handmatig getraceerd - eerste lezing",
    lineStatus: "diamond",
    lineOverlayImage: "",
    paths: [
      {
        ball: "cue",
        points: [
          { x: 93.8, y: 24.6 },
          { x: 87.8, y: 19.3 },
          { x: 98.0, y: 19.0 },
          { x: 98.0, y: 42.0 },
          { x: 91.6, y: 42.9 },
        ],
      },
      {
        ball: "second",
        points: [
          { x: 87.8, y: 19.3 },
          { x: 1.0, y: 11.0 },
          { x: 56.0, y: 0.5 },
          { x: 91.6, y: 42.9 },
        ],
      },
    ],
  },
  "dirk-acx-058": {
    status: "handmatig getraceerd - eerste lezing",
    lineStatus: "diamond",
    lineOverlayImage: "",
    paths: [
      {
        ball: "cue",
        points: [
          { x: 82.0, y: 10.2 },
          { x: 74.5, y: 12.0 },
          { x: 86.0, y: 0.5 },
          { x: 93.7, y: 14.4 },
        ],
      },
      {
        ball: "second",
        points: [
          { x: 74.5, y: 12.0 },
          { x: 1.0, y: 45.0 },
          { x: 10.0, y: 48.5 },
          { x: 88.0, y: 1.0 },
          { x: 98.0, y: 6.0 },
        ],
      },
    ],
  },
  "dirk-acx-059": {
    status: "handmatig getraceerd - eerste lezing",
    lineStatus: "diamond",
    lineOverlayImage: "",
    paths: [
      {
        ball: "stick",
        marker: false,
        points: [
          { x: 83.4, y: 3.0 },
          { x: 69.7, y: 6.0 },
        ],
      },
      {
        ball: "cue",
        points: [
          { x: 70.6, y: 12.4 },
          { x: 63.0, y: 14.8 },
          { x: 73.0, y: 0.5 },
          { x: 80.5, y: 16.0 },
        ],
      },
      {
        ball: "second",
        points: [
          { x: 63.0, y: 14.8 },
          { x: 1.0, y: 46.0 },
          { x: 7.0, y: 48.5 },
          { x: 98.0, y: 18.0 },
        ],
      },
    ],
  },
  "dirk-acx-060": {
    status: "handmatig getraceerd - eerste lezing",
    lineStatus: "diamond",
    lineOverlayImage: "",
    paths: [
      {
        ball: "stick",
        marker: false,
        points: [
          { x: 88.2, y: 3.2 },
          { x: 70.8, y: 5.8 },
        ],
      },
      {
        ball: "cue",
        points: [
          { x: 70.4, y: 10.0 },
          { x: 63.0, y: 11.2 },
          { x: 72.0, y: 0.5 },
          { x: 80.5, y: 12.4 },
        ],
      },
      {
        ball: "second",
        points: [
          { x: 63.0, y: 11.2 },
          { x: 1.0, y: 26.0 },
          { x: 29.0, y: 48.5 },
          { x: 98.0, y: 21.0 },
        ],
      },
    ],
  },
  "dirk-acx-061": {
    status: "handmatig getraceerd - eerste lezing",
    lineStatus: "diamond",
    lineOverlayImage: "",
    paths: [
      {
        ball: "cue",
        points: [
          { x: 91.3, y: 24.6 },
          { x: 84.6, y: 25.9 },
          { x: 87.2, y: 16.1 },
        ],
      },
      {
        ball: "second",
        points: [
          { x: 84.6, y: 25.9 },
          { x: 1.0, y: 29.0 },
          { x: 30.0, y: 48.5 },
          { x: 87.2, y: 16.1 },
        ],
      },
    ],
  },
  "dirk-acx-062": {
    status: "handmatig getraceerd - eerste lezing",
    lineStatus: "diamond",
    lineOverlayImage: "",
    paths: [
      {
        ball: "cue",
        points: [
          { x: 86.9, y: 22.8 },
          { x: 89.1, y: 14.8 },
          { x: 82.6, y: 21.8 },
        ],
      },
      {
        ball: "second",
        points: [
          { x: 89.1, y: 14.8 },
          { x: 95.0, y: 0.5 },
          { x: 98.0, y: 10.0 },
          { x: 91.0, y: 48.0 },
          { x: 84.0, y: 21.0 },
        ],
      },
    ],
  },
  "dirk-acx-063": {
    status: "handmatig getraceerd - eerste lezing",
    lineStatus: "diamond",
    lineOverlayImage: "",
    paths: [
      {
        ball: "stick",
        marker: false,
        points: [
          { x: 70.4, y: 47.3 },
          { x: 57.2, y: 23.1 },
        ],
      },
      {
        ball: "cue",
        points: [
          { x: 51.8, y: 24.9 },
          { x: 49.1, y: 8.0 },
          { x: 1.0, y: 22.0 },
          { x: 25.0, y: 48.5 },
          { x: 92.4, y: 8.9 },
        ],
      },
      {
        ball: "second",
        points: [
          { x: 49.1, y: 8.0 },
          { x: 79.0, y: 48.5 },
          { x: 92.4, y: 8.9 },
        ],
      },
    ],
  },
  "dirk-acx-064": {
    status: "handmatig getraceerd - eerste lezing",
    lineStatus: "diamond",
    lineOverlayImage: "",
    paths: [
      {
        ball: "cue",
        points: [
          { x: 84.5, y: 9.2 },
          { x: 80.5, y: 15.4 },
          { x: 1.0, y: 21.0 },
          { x: 23.0, y: 48.5 },
          { x: 96.0, y: 9.0 },
          { x: 92.7, y: 7.3 },
        ],
      },
      {
        ball: "second",
        points: [
          { x: 80.5, y: 15.4 },
          { x: 92.0, y: 48.5 },
          { x: 98.0, y: 8.0 },
        ],
      },
    ],
  },
  "dirk-acx-065": {
    status: "handmatig getraceerd - eerste lezing",
    lineStatus: "diamond",
    lineOverlayImage: "",
    paths: [
      {
        ball: "cue",
        points: [
          { x: 82.1, y: 11.8 },
          { x: 76.1, y: 17.7 },
          { x: 98.0, y: 48.5 },
          { x: 92.9, y: 9.4 },
        ],
      },
      {
        ball: "second",
        points: [
          { x: 76.1, y: 17.7 },
          { x: 1.0, y: 40.0 },
          { x: 17.0, y: 48.5 },
          { x: 75.0, y: 0.5 },
        ],
      },
    ],
  },
  "dirk-acx-066": {
    status: "handmatig getraceerd - eerste lezing",
    lineStatus: "diamond",
    lineOverlayImage: "",
    paths: [
      {
        ball: "cue",
        points: [
          { x: 78.9, y: 16.1 },
          { x: 73.1, y: 26.0 },
          { x: 98.0, y: 48.0 },
          { x: 92.9, y: 8.6 },
        ],
      },
      {
        ball: "second",
        points: [
          { x: 73.1, y: 26.0 },
          { x: 1.0, y: 32.0 },
          { x: 28.0, y: 48.5 },
          { x: 92.9, y: 8.6 },
        ],
      },
    ],
  },
  "dirk-acx-067": {
    status: "handmatig getraceerd - eerste lezing",
    lineStatus: "diamond",
    lineOverlayImage: "",
    paths: [
      {
        ball: "cue",
        points: [
          { x: 51.7, y: 11.1 },
          { x: 61.5, y: 18.6 },
          { x: 80.8, y: 27.6 },
        ],
      },
      {
        ball: "second",
        points: [
          { x: 61.5, y: 18.6 },
          { x: 98.0, y: 43.0 },
          { x: 92.0, y: 48.5 },
        ],
      },
    ],
  },
  "dirk-acx-068": {
    status: "handmatig getraceerd - eerste lezing",
    lineStatus: "diamond",
    lineOverlayImage: "",
    paths: [
      {
        ball: "cue",
        points: [
          { x: 11.0, y: 41.6 },
          { x: 19.5, y: 31.6 },
          { x: 91.8, y: 12.2 },
        ],
      },
      {
        ball: "second",
        points: [
          { x: 19.5, y: 31.6 },
          { x: 44.0, y: 0.5 },
          { x: 63.0, y: 48.5 },
          { x: 98.0, y: 4.0 },
        ],
      },
    ],
  },
  "dirk-acx-069": {
    status: "handmatig getraceerd - eerste lezing",
    lineStatus: "diamond",
    lineOverlayImage: "",
    paths: [
      {
        ball: "cue",
        points: [
          { x: 13.0, y: 41.9 },
          { x: 5.5, y: 35.8 },
          { x: 91.9, y: 8.6 },
        ],
      },
      {
        ball: "second",
        points: [
          { x: 5.5, y: 35.8 },
          { x: 17.0, y: 0.5 },
          { x: 56.0, y: 48.5 },
          { x: 92.0, y: 8.6 },
        ],
      },
    ],
  },
  "dirk-acx-070": {
    status: "handmatig getraceerd - eerste lezing",
    lineStatus: "diamond",
    lineOverlayImage: "",
    paths: [
      {
        ball: "cue",
        points: [
          { x: 91.4, y: 9.1 },
          { x: 94.0, y: 16.7 },
          { x: 1.0, y: 15.0 },
          { x: 57.0, y: 48.5 },
          { x: 93.4, y: 42.0 },
        ],
      },
      {
        ball: "second",
        points: [
          { x: 94.0, y: 16.7 },
          { x: 1.0, y: 6.0 },
          { x: 12.0, y: 0.5 },
          { x: 84.0, y: 48.5 },
          { x: 93.4, y: 42.0 },
        ],
      },
    ],
  },
  "dirk-acx-071": {
    status: "handmatig getraceerd - eerste lezing",
    lineStatus: "diamond",
    lineOverlayImage: "",
    paths: [
      {
        ball: "cue",
        points: [
          { x: 91.4, y: 16.3 },
          { x: 94.2, y: 26.1 },
          { x: 78.0, y: 43.0 },
          { x: 4.0, y: 20.0 },
          { x: 29.0, y: 5.0 },
          { x: 77.0, y: 33.0 },
          { x: 93.5, y: 42.0 },
        ],
      },
      {
        ball: "second",
        points: [
          { x: 94.2, y: 26.1 },
          { x: 98.0, y: 29.5 },
          { x: 68.5, y: 44.5 },
          { x: 4.5, y: 14.5 },
          { x: 15.5, y: 5.0 },
          { x: 85.0, y: 44.5 },
        ],
      },
    ],
  },
  "dirk-acx-072": {
    status: "handmatig getraceerd - eerste lezing",
    lineStatus: "diamond",
    lineOverlayImage: "",
    paths: [
      {
        ball: "cue",
        points: [
          { x: 78.2, y: 8.8 },
          { x: 70.4, y: 11.3 },
          { x: 58.7, y: 8.1 },
        ],
      },
      {
        ball: "second",
        points: [
          { x: 70.4, y: 11.3 },
          { x: 3.5, y: 42.0 },
          { x: 8.8, y: 47.0 },
          { x: 58.7, y: 8.1 },
        ],
      },
    ],
  },
  "dirk-acx-073": {
    status: "handmatig getraceerd - eerste lezing",
    lineStatus: "diamond",
    lineOverlayImage: "",
    paths: [
      {
        ball: "cue",
        points: [
          { x: 84.3, y: 7.1 },
          { x: 74.4, y: 9.6 },
          { x: 63.2, y: 6.1 },
        ],
      },
      {
        ball: "second",
        points: [
          { x: 74.4, y: 9.6 },
          { x: 3.5, y: 42.5 },
          { x: 9.0, y: 47.0 },
          { x: 63.2, y: 6.1 },
        ],
      },
    ],
  },
  "dirk-acx-074": {
    status: "handmatig getraceerd - eerste lezing",
    lineStatus: "diamond",
    lineOverlayImage: "",
    paths: [
      {
        ball: "stick",
        marker: false,
        points: [
          { x: 43.6, y: 20.8 },
          { x: 31.3, y: 2.8 },
        ],
      },
      {
        ball: "cue",
        points: [
          { x: 46.6, y: 24.6 },
          { x: 61.9, y: 43.9 },
          { x: 61.8, y: 7.0 },
          { x: 63.2, y: 6.1 },
        ],
      },
      {
        ball: "second",
        points: [
          { x: 61.9, y: 43.9 },
          { x: 96.0, y: 24.5 },
          { x: 63.2, y: 6.1 },
        ],
      },
    ],
  },
  "dirk-acx-075": {
    status: "handmatig getraceerd - eerste lezing",
    lineStatus: "diamond",
    lineOverlayImage: "",
    paths: [
      {
        ball: "stick",
        marker: false,
        points: [
          { x: 33.6, y: 14.0 },
          { x: 17.8, y: 2.9 },
        ],
      },
      {
        ball: "cue",
        points: [
          { x: 36.6, y: 17.4 },
          { x: 50.1, y: 24.9 },
          { x: 53.0, y: 45.0 },
          { x: 73.4, y: 24.5 },
        ],
      },
      {
        ball: "second",
        points: [
          { x: 50.1, y: 24.9 },
          { x: 66.0, y: 23.0 },
          { x: 73.4, y: 24.5 },
        ],
      },
    ],
  },
  "dirk-acx-076": {
    status: "handmatig getraceerd - eerste lezing",
    lineStatus: "diamond",
    lineOverlayImage: "",
    paths: [
      {
        ball: "stick",
        marker: false,
        points: [
          { x: 30.8, y: 15.6 },
          { x: 3.0, y: 3.0 },
        ],
      },
      {
        ball: "cue",
        points: [
          { x: 36.6, y: 18.5 },
          { x: 50.1, y: 24.9 },
          { x: 73.4, y: 24.5 },
        ],
      },
      {
        ball: "second",
        points: [
          { x: 50.1, y: 24.9 },
          { x: 82.0, y: 45.0 },
          { x: 97.0, y: 36.0 },
          { x: 76.0, y: 23.0 },
        ],
      },
    ],
  },
  "dirk-acx-077": {
    status: "handmatig getraceerd - eerste lezing",
    lineStatus: "diamond",
    lineOverlayImage: "",
    paths: [
      {
        ball: "cue",
        points: [
          { x: 93.6, y: 24.5 },
          { x: 89.6, y: 18.1 },
          { x: 85.0, y: 7.6 },
        ],
      },
      {
        ball: "second",
        points: [
          { x: 89.6, y: 18.1 },
          { x: 83.5, y: 0.5 },
          { x: 93.0, y: 26.0 },
          { x: 96.0, y: 47.0 },
        ],
      },
    ],
  },
  "dirk-acx-078": {
    status: "handmatig getraceerd - eerste lezing",
    lineStatus: "diamond",
    lineOverlayImage: "",
    paths: [
      {
        ball: "cue",
        points: [
          { x: 91.4, y: 15.5 },
          { x: 94.3, y: 21.7 },
          { x: 88.0, y: 6.3 },
        ],
      },
      {
        ball: "second",
        points: [
          { x: 94.3, y: 21.7 },
          { x: 98.0, y: 29.0 },
          { x: 100.0, y: 35.0 },
        ],
      },
    ],
  },
  "dirk-acx-079": {
    status: "handmatig getraceerd - eerste lezing",
    lineStatus: "diamond",
    lineOverlayImage: "",
    paths: [
      {
        ball: "cue",
        points: [
          { x: 86.1, y: 19.8 },
          { x: 86.9, y: 28.4 },
          { x: 91.2, y: 43.1 },
        ],
      },
      {
        ball: "second",
        points: [
          { x: 86.9, y: 28.4 },
          { x: 87.0, y: 46.0 },
          { x: 94.5, y: 4.5 },
          { x: 95.0, y: 39.0 },
        ],
      },
    ],
  },
  "dirk-acx-080": {
    status: "handmatig getraceerd - eerste lezing",
    lineStatus: "diamond",
    lineOverlayImage: "",
    paths: [
      {
        ball: "cue",
        points: [
          { x: 80.3, y: 7.0 },
          { x: 80.6, y: 10.7 },
          { x: 92.9, y: 9.2 },
        ],
      },
      {
        ball: "second",
        points: [
          { x: 80.6, y: 10.7 },
          { x: 97.5, y: 49.0 },
        ],
      },
    ],
  },
  "dirk-acx-081": {
    status: "handmatig getraceerd - eerste lezing",
    lineStatus: "diamond",
    lineOverlayImage: "",
    paths: [
      {
        ball: "cue",
        points: [
          { x: 92.9, y: 33.5 },
          { x: 94.4, y: 30.8 },
          { x: 90.0, y: 27.0 },
          { x: 92.9, y: 8.1 },
        ],
      },
      {
        ball: "second",
        points: [
          { x: 94.4, y: 30.8 },
          { x: 100.0, y: 44.0 },
          { x: 94.5, y: 8.0 },
          { x: 96.0, y: 25.0 },
        ],
      },
    ],
  },
  "dirk-acx-082": {
    status: "handmatig getraceerd - eerste lezing",
    lineStatus: "diamond",
    lineOverlayImage: "",
    paths: [
      {
        ball: "stick",
        marker: false,
        points: [
          { x: 85.1, y: 40.7 },
          { x: 49.6, y: 22.1 },
        ],
      },
      {
        ball: "cue",
        points: [
          { x: 88.8, y: 30.6 },
          { x: 94.8, y: 35.0 },
          { x: 80.5, y: 31.2 },
        ],
      },
      {
        ball: "second",
        points: [
          { x: 94.8, y: 35.0 },
          { x: 87.0, y: 45.5 },
          { x: 80.5, y: 31.2 },
        ],
      },
    ],
  },
  "dirk-acx-083": {
    status: "handmatig getraceerd - eerste lezing",
    lineStatus: "diamond",
    lineOverlayImage: "",
    paths: [
      {
        ball: "cue",
        points: [
          { x: 94.6, y: 32.3 },
          { x: 94.6, y: 26.1 },
          { x: 73.3, y: 24.6 },
        ],
      },
      {
        ball: "second",
        points: [
          { x: 94.6, y: 26.1 },
          { x: 85.6, y: 4.0 },
          { x: 89.5, y: 45.5 },
          { x: 73.3, y: 24.6 },
        ],
      },
    ],
  },
  "dirk-acx-084": {
    status: "handmatig getraceerd - eerste lezing",
    lineStatus: "diamond",
    lineOverlayImage: "",
    paths: [
      {
        ball: "stick",
        marker: false,
        points: [
          { x: 88.7, y: 0.5 },
          { x: 93.6, y: 17.3 },
        ],
      },
      {
        ball: "cue",
        points: [
          { x: 93.6, y: 17.3 },
          { x: 94.6, y: 25.7 },
          { x: 89.3, y: 34.9 },
        ],
      },
      {
        ball: "second",
        points: [
          { x: 94.6, y: 25.7 },
          { x: 95.0, y: 42.0 },
          { x: 93.0, y: 47.0 },
          { x: 91.0, y: 35.0 },
        ],
      },
    ],
  },
  "dirk-acx-085": {
    status: "handmatig getraceerd - eerste lezing",
    lineStatus: "diamond",
    lineOverlayImage: "",
    paths: [
      {
        ball: "stick",
        marker: false,
        points: [
          { x: 89.7, y: 29.7 },
          { x: 70.8, y: 4.4 },
        ],
      },
      {
        ball: "cue",
        points: [
          { x: 92.4, y: 33.1 },
          { x: 91.3, y: 37.8 },
          { x: 93.5, y: 45.5 },
          { x: 98.0, y: 36.0 },
          { x: 82.2, y: 37.7 },
        ],
      },
      {
        ball: "second",
        points: [
          { x: 91.3, y: 37.8 },
          { x: 87.5, y: 45.0 },
          { x: 82.2, y: 37.7 },
        ],
      },
    ],
  },
  "dirk-acx-086": {
    status: "handmatig getraceerd - eerste lezing",
    lineStatus: "diamond",
    lineOverlayImage: "",
    paths: [
      {
        ball: "stick",
        marker: false,
        points: [
          { x: 99.0, y: 14.8 },
          { x: 80.3, y: 18.8 },
        ],
      },
      {
        ball: "cue",
        points: [
          { x: 80.3, y: 18.8 },
          { x: 73.2, y: 19.9 },
          { x: 73.3, y: 29.4 },
        ],
      },
      {
        ball: "second",
        points: [
          { x: 73.2, y: 19.9 },
          { x: 4.5, y: 17.5 },
          { x: 73.3, y: 29.4 },
        ],
      },
    ],
  },
  "dirk-acx-087": {
    status: "handmatig getraceerd - eerste lezing",
    lineStatus: "diamond",
    lineOverlayImage: "",
    paths: [
      {
        ball: "stick",
        marker: false,
        points: [
          { x: 74.0, y: 20.3 },
          { x: 63.9, y: 2.5 },
        ],
      },
      {
        ball: "cue",
        points: [
          { x: 75.7, y: 27.7 },
          { x: 88.1, y: 42.8 },
          { x: 62.7, y: 7.2 },
        ],
      },
      {
        ball: "second",
        points: [
          { x: 88.1, y: 42.8 },
          { x: 96.0, y: 38.5 },
          { x: 90.0, y: 45.5 },
          { x: 52.0, y: 16.0 },
        ],
      },
    ],
  },
  "dirk-acx-088": {
    status: "handmatig getraceerd - eerste lezing",
    lineStatus: "diamond",
    lineOverlayImage: "",
    paths: [
      {
        ball: "stick",
        marker: false,
        points: [
          { x: 98.7, y: 24.5 },
          { x: 76.0, y: 12.0 },
        ],
      },
      {
        ball: "cue",
        points: [
          { x: 66.4, y: 8.7 },
          { x: 61.3, y: 6.9 },
          { x: 71.9, y: 15.6 },
        ],
      },
      {
        ball: "second",
        points: [
          { x: 61.3, y: 6.9 },
          { x: 4.0, y: 10.0 },
          { x: 70.0, y: 21.0 },
        ],
      },
    ],
  },
  "dirk-acx-089": {
    status: "handmatig getraceerd - eerste lezing",
    lineStatus: "diamond",
    lineOverlayImage: "",
    paths: [
      {
        ball: "stick",
        marker: false,
        points: [
          { x: 99.8, y: 43.1 },
          { x: 68.7, y: 33.2 },
        ],
      },
      {
        ball: "cue",
        points: [
          { x: 67.9, y: 31.4 },
          { x: 59.9, y: 28.2 },
          { x: 10.0, y: 5.0 },
          { x: 4.0, y: 8.0 },
          { x: 76.1, y: 43.2 },
        ],
      },
      {
        ball: "second",
        points: [
          { x: 59.9, y: 28.2 },
          { x: 4.5, y: 8.5 },
          { x: 100.0, y: 43.0 },
        ],
      },
    ],
  },
  "dirk-acx-090": {
    status: "handmatig getraceerd - eerste lezing",
    lineStatus: "diamond",
    lineOverlayImage: "",
    paths: [
      {
        ball: "stick",
        marker: false,
        points: [
          { x: 99.6, y: 39.8 },
          { x: 76.9, y: 34.0 },
        ],
      },
      {
        ball: "cue",
        points: [
          { x: 73.1, y: 29.4 },
          { x: 65.2, y: 28.2 },
          { x: 10.5, y: 4.5 },
          { x: 4.0, y: 8.8 },
          { x: 81.7, y: 40.9 },
        ],
      },
      {
        ball: "second",
        points: [
          { x: 65.2, y: 28.2 },
          { x: 4.0, y: 9.0 },
          { x: 97.0, y: 34.5 },
          { x: 91.0, y: 38.0 },
          { x: 100.0, y: 42.0 },
        ],
      },
    ],
  },
  "dirk-acx-091": {
    status: "handmatig getraceerd - eerste lezing",
    lineStatus: "diamond",
    lineOverlayImage: "",
    paths: [
      {
        ball: "cue",
        points: [
          { x: 10.1, y: 8.2 },
          { x: 18.2, y: 8.4 },
          { x: 92.8, y: 41.9 },
        ],
      },
      {
        ball: "second",
        points: [
          { x: 18.2, y: 8.4 },
          { x: 78.0, y: 43.0 },
          { x: 91.0, y: 39.0 },
          { x: 92.8, y: 41.9 },
        ],
      },
    ],
  },
  "dirk-acx-092": {
    status: "handmatig getraceerd - eerste lezing",
    lineStatus: "diamond",
    lineOverlayImage: "",
    paths: [
      {
        ball: "stick",
        marker: false,
        points: [
          { x: 33.9, y: 18.8 },
          { x: 18.6, y: 3.4 },
        ],
      },
      {
        ball: "cue",
        points: [
          { x: 38.2, y: 21.9 },
          { x: 61.9, y: 41.4 },
          { x: 71.0, y: 45.0 },
          { x: 92.8, y: 41.4 },
        ],
      },
      {
        ball: "second",
        points: [
          { x: 61.9, y: 41.4 },
          { x: 83.0, y: 5.0 },
          { x: 96.0, y: 30.0 },
          { x: 92.8, y: 41.4 },
        ],
      },
    ],
  },
  "dirk-acx-093": {
    status: "handmatig getraceerd - eerste lezing",
    lineStatus: "diamond",
    lineOverlayImage: "",
    paths: [
      {
        ball: "stick",
        marker: false,
        points: [
          { x: 44.5, y: 24.6 },
          { x: 20.3, y: 3.3 },
        ],
      },
      {
        ball: "cue",
        points: [
          { x: 46.3, y: 29.2 },
          { x: 61.9, y: 42.2 },
          { x: 92.7, y: 42.1 },
        ],
      },
      {
        ball: "second",
        points: [
          { x: 61.9, y: 42.2 },
          { x: 74.0, y: 4.5 },
          { x: 86.0, y: 42.5 },
          { x: 92.7, y: 42.1 },
        ],
      },
    ],
  },
  "dirk-acx-094": {
    status: "handmatig getraceerd - eerste lezing",
    lineStatus: "diamond",
    lineOverlayImage: "",
    paths: [
      {
        ball: "stick",
        marker: false,
        points: [
          { x: 26.2, y: 13.4 },
          { x: 2.8, y: 19.4 },
        ],
      },
      {
        ball: "cue",
        points: [
          { x: 30.3, y: 15.9 },
          { x: 45.1, y: 9.8 },
          { x: 52.0, y: 5.0 },
          { x: 73.2, y: 10.0 },
        ],
      },
      {
        ball: "second",
        points: [
          { x: 45.1, y: 9.8 },
          { x: 72.0, y: 5.0 },
          { x: 96.0, y: 6.0 },
          { x: 73.2, y: 10.0 },
        ],
      },
    ],
  },
  "dirk-acx-095": {
    status: "handmatig getraceerd - eerste lezing",
    lineStatus: "diamond",
    lineOverlayImage: "",
    paths: [
      {
        ball: "stick",
        marker: false,
        points: [
          { x: 70.5, y: 19.4 },
          { x: 4.5, y: 9.2 },
        ],
      },
      {
        ball: "cue",
        points: [
          { x: 76.4, y: 21.1 },
          { x: 92.4, y: 24.6 },
          { x: 96.0, y: 20.0 },
          { x: 78.5, y: 5.0 },
          { x: 49.9, y: 24.5 },
        ],
      },
      {
        ball: "second",
        points: [
          { x: 92.4, y: 24.6 },
          { x: 96.0, y: 27.0 },
          { x: 78.0, y: 45.0 },
          { x: 49.9, y: 24.5 },
        ],
      },
    ],
  },
  "dirk-acx-096": {
    status: "handmatig getraceerd - eerste lezing",
    lineStatus: "diamond",
    lineOverlayImage: "",
    paths: [
      {
        ball: "stick",
        marker: false,
        points: [
          { x: 62.8, y: 17.4 },
          { x: 47.1, y: 2.7 },
        ],
      },
      {
        ball: "cue",
        points: [
          { x: 68.7, y: 25.5 },
          { x: 72.6, y: 28.9 },
          { x: 72.7, y: 19.9 },
        ],
      },
      {
        ball: "second",
        points: [
          { x: 72.6, y: 28.9 },
          { x: 77.5, y: 5.0 },
          { x: 96.0, y: 30.0 },
          { x: 87.0, y: 45.0 },
          { x: 72.7, y: 19.9 },
        ],
      },
    ],
  },
  "dirk-acx-097": {
    status: "handmatig getraceerd - eerste lezing",
    lineStatus: "diamond",
    lineOverlayImage: "",
    paths: [
      {
        ball: "stick",
        marker: false,
        points: [
          { x: 55.1, y: 19.8 },
          { x: 18.6, y: 1.1 },
        ],
      },
      {
        ball: "cue",
        points: [
          { x: 53.9, y: 27.8 },
          { x: 71.4, y: 37.5 },
          { x: 2.5, y: 37.5 },
          { x: 10.5, y: 46.0 },
          { x: 73.0, y: 6.0 },
          { x: 93.7, y: 11.0 },
        ],
      },
      {
        ball: "second",
        points: [
          { x: 71.4, y: 37.5 },
          { x: 78.0, y: 44.0 },
          { x: 86.5, y: 6.0 },
          { x: 93.0, y: 44.0 },
          { x: 98.5, y: 11.0 },
        ],
      },
    ],
  },
  "dirk-acx-098": {
    status: "handmatig getraceerd - eerste lezing",
    lineStatus: "diamond",
    lineOverlayImage: "",
    paths: [
      {
        ball: "cue",
        points: [
          { x: 17.3, y: 15.1 },
          { x: 26.6, y: 17.1 },
          { x: 63.0, y: 5.0 },
          { x: 93.3, y: 8.8 },
        ],
      },
      {
        ball: "second",
        points: [
          { x: 26.6, y: 17.1 },
          { x: 97.0, y: 32.0 },
          { x: 57.0, y: 45.0 },
          { x: 4.0, y: 33.5 },
          { x: 93.3, y: 8.8 },
        ],
      },
    ],
  },
  "dirk-acx-099": {
    status: "handmatig getraceerd - eerste lezing",
    lineStatus: "diamond",
    lineOverlayImage: "",
    paths: [
      {
        ball: "stick",
        marker: false,
        points: [
          { x: 78.6, y: 8.1 },
          { x: 11.3, y: 14.8 },
        ],
      },
      {
        ball: "cue",
        points: [
          { x: 81.4, y: 9.4 },
          { x: 93.3, y: 7.3 },
          { x: 96.0, y: 10.5 },
          { x: 73.3, y: 19.9 },
        ],
      },
      {
        ball: "second",
        points: [
          { x: 93.3, y: 7.3 },
          { x: 78.0, y: 17.0 },
          { x: 73.3, y: 19.9 },
        ],
      },
    ],
  },
  "dirk-acx-100": {
    status: "handmatig getraceerd - eerste lezing",
    lineStatus: "diamond",
    lineOverlayImage: "",
    paths: [
      {
        ball: "stick",
        marker: false,
        points: [
          { x: 79.7, y: 5.7 },
          { x: 66.9, y: 2.5 },
        ],
      },
      {
        ball: "cue",
        points: [
          { x: 88.4, y: 8.6 },
          { x: 93.7, y: 12.4 },
          { x: 91.5, y: 4.5 },
          { x: 73.3, y: 19.8 },
        ],
      },
      {
        ball: "second",
        points: [
          { x: 93.7, y: 12.4 },
          { x: 96.0, y: 17.0 },
          { x: 88.0, y: 44.0 },
          { x: 75.5, y: 24.5 },
        ],
      },
    ],
  },
  "dirk-acx-101": {
    status: "handmatig getraceerd - eerste lezing",
    lineStatus: "diamond",
    lineOverlayImage: "",
    paths: [
      {
        ball: "stick",
        marker: false,
        points: [
          { x: 99.3, y: 33.3 },
          { x: 80.3, y: 18.6 },
        ],
      },
      {
        ball: "cue",
        points: [
          { x: 75.6, y: 15.9 },
          { x: 66.0, y: 7.8 },
          { x: 79.0, y: 5.0 },
          { x: 96.0, y: 25.0 },
          { x: 79.9, y: 41.5 },
        ],
      },
      {
        ball: "second",
        points: [
          { x: 66.0, y: 7.8 },
          { x: 4.5, y: 18.0 },
          { x: 79.9, y: 41.5 },
        ],
      },
    ],
  },
  "dirk-acx-102": {
    status: "handmatig getraceerd - eerste lezing",
    lineStatus: "diamond",
    lineOverlayImage: "",
    paths: [
      {
        ball: "stick",
        marker: false,
        points: [
          { x: 84.0, y: 45.0 },
          { x: 47.6, y: 23.1 },
        ],
      },
      {
        ball: "cue",
        points: [
          { x: 40.4, y: 22.2 },
          { x: 49.9, y: 24.6 },
          { x: 49.8, y: 8.7 },
        ],
      },
      {
        ball: "second",
        points: [
          { x: 49.8, y: 8.7 },
          { x: 100.0, y: 34.0 },
          { x: 84.0, y: 45.0 },
          { x: 49.9, y: 24.6 },
        ],
      },
    ],
  },
  "dirk-acx-103": {
    status: "handmatig getraceerd - eerste lezing",
    lineStatus: "diamond",
    lineOverlayImage: "",
    paths: [
      {
        ball: "stick",
        marker: false,
        points: [
          { x: 92.7, y: 22.2 },
          { x: 25.9, y: 5.7 },
        ],
      },
      {
        ball: "cue",
        points: [
          { x: 10.7, y: 8.8 },
          { x: 30.3, y: 6.8 },
          { x: 56.1, y: 19.9 },
        ],
      },
      {
        ball: "second",
        points: [
          { x: 56.1, y: 19.9 },
          { x: 64.0, y: 24.0 },
        ],
      },
    ],
  },
  "dirk-acx-104": {
    status: "handmatig getraceerd - eerste lezing",
    lineStatus: "diamond",
    lineOverlayImage: "",
    paths: [
      {
        ball: "stick",
        marker: false,
        points: [
          { x: 49.7, y: 14.6 },
          { x: 29.5, y: 2.8 },
        ],
      },
      {
        ball: "cue",
        points: [
          { x: 55.0, y: 17.4 },
          { x: 61.6, y: 24.7 },
          { x: 89.8, y: 24.8 },
        ],
      },
      {
        ball: "second",
        points: [
          { x: 61.6, y: 24.7 },
          { x: 84.0, y: 45.0 },
          { x: 96.0, y: 32.0 },
          { x: 90.0, y: 25.0 },
        ],
      },
    ],
  },
  "dirk-acx-105": {
    status: "handmatig getraceerd - eerste lezing",
    lineStatus: "diamond",
    lineOverlayImage: "",
    paths: [
      {
        ball: "stick",
        marker: false,
        points: [
          { x: 90.8, y: 33.8 },
          { x: 84.1, y: 47.8 },
        ],
      },
      {
        ball: "cue",
        points: [
          { x: 91.4, y: 29.6 },
          { x: 93.5, y: 24.9 },
          { x: 89.7, y: 22.8 },
        ],
      },
      {
        ball: "second",
        points: [
          { x: 93.5, y: 24.9 },
          { x: 90.2, y: 5.0 },
          { x: 93.0, y: 24.0 },
          { x: 89.7, y: 22.8 },
        ],
      },
    ],
  },
  "dirk-acx-106": {
    status: "handmatig getraceerd - eerste lezing",
    lineStatus: "diamond",
    lineOverlayImage: "",
    paths: [
      {
        ball: "stick",
        marker: false,
        points: [
          { x: 89.8, y: 21.8 },
          { x: 72.4, y: 47.1 },
        ],
      },
      {
        ball: "cue",
        points: [
          { x: 91.6, y: 24.6 },
          { x: 93.3, y: 20.0 },
          { x: 88.9, y: 20.9 },
        ],
      },
      {
        ball: "second",
        points: [
          { x: 93.3, y: 20.0 },
          { x: 93.5, y: 5.0 },
          { x: 96.0, y: 11.0 },
          { x: 92.0, y: 20.5 },
        ],
      },
    ],
  },
  "dirk-acx-107": {
    status: "handmatig getraceerd - eerste lezing",
    lineStatus: "diamond",
    lineOverlayImage: "",
    paths: [
      {
        ball: "cue",
        points: [
          { x: 90.8, y: 22.6 },
          { x: 77.3, y: 18.2 },
          { x: 52.0, y: 5.0 },
          { x: 4.0, y: 27.5 },
          { x: 38.5, y: 45.0 },
          { x: 87.1, y: 23.9 },
        ],
      },
      {
        ball: "second",
        points: [
          { x: 77.3, y: 18.2 },
          { x: 95.0, y: 27.0 },
          { x: 88.0, y: 24.0 },
          { x: 87.1, y: 23.9 },
        ],
      },
    ],
  },
  "dirk-acx-108": {
    status: "handmatig getraceerd - eerste lezing",
    lineStatus: "diamond",
    lineOverlayImage: "",
    paths: [
      {
        ball: "stick",
        marker: false,
        points: [
          { x: 9.8, y: 7.5 },
          { x: 9.9, y: 15.4 },
        ],
      },
      {
        ball: "cue",
        points: [
          { x: 7.9, y: 25.0 },
          { x: 9.9, y: 15.4 },
          { x: 92.2, y: 24.0 },
        ],
      },
      {
        ball: "second",
        points: [
          { x: 9.9, y: 15.4 },
          { x: 14.5, y: 44.0 },
          { x: 56.0, y: 5.0 },
          { x: 84.0, y: 23.0 },
          { x: 92.2, y: 24.0 },
        ],
      },
    ],
  },
  "dirk-acx-109": {
    status: "handmatig getraceerd - eerste lezing",
    lineStatus: "diamond",
    lineOverlayImage: "",
    paths: [
      {
        ball: "cue",
        points: [
          { x: 81.3, y: 21.4 },
          { x: 73.1, y: 19.7 },
          { x: 62.0, y: 5.0 },
          { x: 4.0, y: 22.0 },
          { x: 28.0, y: 42.3 },
        ],
      },
      {
        ball: "second",
        points: [
          { x: 73.1, y: 19.7 },
          { x: 96.0, y: 14.0 },
          { x: 4.0, y: 39.0 },
          { x: 32.0, y: 45.5 },
          { x: 98.0, y: 42.0 },
        ],
      },
    ],
  },
  "dirk-acx-110": {
    status: "handmatig getraceerd - eerste lezing",
    lineStatus: "diamond",
    lineOverlayImage: "",
    paths: [
      {
        ball: "stick",
        marker: false,
        points: [
          { x: 34.5, y: 6.4 },
          { x: 2.9, y: 4.8 },
        ],
      },
      {
        ball: "cue",
        points: [
          { x: 47.0, y: 7.9 },
          { x: 61.5, y: 9.2 },
          { x: 95.5, y: 16.0 },
          { x: 61.6, y: 42.6 },
        ],
      },
      {
        ball: "second",
        points: [
          { x: 61.5, y: 9.2 },
          { x: 96.0, y: 16.0 },
          { x: 4.0, y: 31.0 },
          { x: 50.0, y: 44.0 },
          { x: 56.0, y: 43.5 },
        ],
      },
    ],
  },
  "dirk-acx-111": {
    status: "handmatig getraceerd - eerste lezing",
    lineStatus: "diamond",
    lineOverlayImage: "",
    paths: [
      {
        ball: "stick",
        marker: false,
        points: [
          { x: 74.7, y: 39.3 },
          { x: 65.4, y: 47.6 },
        ],
      },
      {
        ball: "cue",
        points: [
          { x: 80.8, y: 31.4 },
          { x: 92.6, y: 22.7 },
          { x: 90.0, y: 5.5 },
          { x: 96.0, y: 11.0 },
          { x: 90.5, y: 22.5 },
          { x: 75.0, y: 37.0 },
          { x: 66.4, y: 24.6 },
        ],
      },
      {
        ball: "second",
        points: [
          { x: 92.6, y: 22.7 },
          { x: 96.0, y: 20.0 },
          { x: 35.0, y: 5.0 },
          { x: 5.0, y: 9.5 },
          { x: 66.4, y: 24.6 },
        ],
      },
    ],
  },
  "dirk-acx-112": {
    status: "handmatig getraceerd - eerste lezing",
    lineStatus: "diamond",
    lineOverlayImage: "",
    paths: [
      {
        ball: "stick",
        marker: false,
        points: [
          { x: 73.6, y: 47.4 },
          { x: 62.8, y: 36.9 },
        ],
      },
      {
        ball: "cue",
        points: [
          { x: 57.0, y: 30.8 },
          { x: 49.9, y: 24.9 },
          { x: 4.5, y: 18.5 },
          { x: 25.0, y: 5.0 },
          { x: 57.0, y: 30.8 },
          { x: 73.1, y: 24.8 },
        ],
      },
      {
        ball: "second",
        points: [
          { x: 49.9, y: 24.9 },
          { x: 39.0, y: 45.0 },
          { x: 58.0, y: 32.0 },
          { x: 73.1, y: 24.8 },
          { x: 75.0, y: 49.0 },
        ],
      },
    ],
  },
  "dirk-acx-113": {
    status: "handmatig getraceerd - eerste lezing",
    lineStatus: "diamond",
    lineOverlayImage: "",
    paths: [
      {
        ball: "stick",
        marker: false,
        points: [
          { x: 52.0, y: 4.5 },
          { x: 30.4, y: 26.0 },
        ],
      },
      {
        ball: "cue",
        points: [
          { x: 30.4, y: 26.0 },
          { x: 19.9, y: 41.9 },
          { x: 55.0, y: 5.0 },
          { x: 92.4, y: 24.3 },
        ],
      },
      {
        ball: "second",
        points: [
          { x: 92.4, y: 24.3 },
          { x: 51.0, y: 5.0 },
          { x: 12.0, y: 42.0 },
          { x: 19.9, y: 41.9 },
        ],
      },
    ],
  },
  "dirk-acx-114": {
    status: "handmatig getraceerd - eerste lezing",
    lineStatus: "diamond",
    lineOverlayImage: "",
    paths: [
      {
        ball: "stick",
        marker: false,
        points: [
          { x: 96.8, y: 40.7 },
          { x: 90.8, y: 24.0 },
        ],
      },
      {
        ball: "cue",
        points: [
          { x: 92.8, y: 28.3 },
          { x: 84.8, y: 24.8 },
          { x: 35.5, y: 5.0 },
          { x: 4.5, y: 18.3 },
          { x: 65.0, y: 45.0 },
          { x: 87.6, y: 35.0 },
        ],
      },
      {
        ball: "second",
        points: [
          { x: 84.8, y: 24.8 },
          { x: 96.0, y: 22.0 },
          { x: 100.0, y: 18.0 },
          { x: 98.0, y: 11.0 },
        ],
      },
    ],
  },
  "dirk-acx-115": {
    status: "handmatig getraceerd - eerste lezing",
    lineStatus: "diamond",
    lineOverlayImage: "",
    paths: [
      {
        ball: "cue",
        points: [
          { x: 93.3, y: 40.3 },
          { x: 91.8, y: 26.4 },
          { x: 86.4, y: 42.8 },
        ],
      },
      {
        ball: "second",
        points: [
          { x: 91.8, y: 26.4 },
          { x: 99.0, y: 25.0 },
          { x: 100.0, y: 37.5 },
        ],
      },
    ],
  },
  "dirk-acx-116": {
    status: "handmatig getraceerd - eerste lezing",
    lineStatus: "diamond",
    lineOverlayImage: "",
    paths: [
      {
        ball: "stick",
        marker: false,
        points: [
          { x: 99.2, y: 33.5 },
          { x: 82.8, y: 37.8 },
        ],
      },
      {
        ball: "cue",
        points: [
          { x: 77.0, y: 38.5 },
          { x: 26.5, y: 44.0 },
          { x: 4.5, y: 25.0 },
          { x: 39.0, y: 5.0 },
          { x: 92.9, y: 41.7 },
        ],
      },
      {
        ball: "second",
        points: [
          { x: 26.5, y: 44.0 },
          { x: 25.0, y: 5.0 },
          { x: 84.0, y: 40.0 },
          { x: 92.9, y: 41.7 },
          { x: 100.0, y: 34.0 },
        ],
      },
    ],
  },
  "dirk-acx-117": {
    status: "handmatig getraceerd - eerste lezing",
    lineStatus: "diamond",
    lineOverlayImage: "",
    paths: [
      {
        ball: "stick",
        marker: false,
        points: [
          { x: 100.0, y: 46.0 },
          { x: 91.6, y: 31.8 },
        ],
      },
      {
        ball: "cue",
        points: [
          { x: 89.2, y: 25.8 },
          { x: 72.5, y: 7.9 },
          { x: 44.0, y: 5.0 },
          { x: 4.5, y: 34.0 },
          { x: 20.0, y: 45.0 },
          { x: 92.9, y: 41.7 },
        ],
      },
      {
        ball: "second",
        points: [
          { x: 72.5, y: 7.9 },
          { x: 91.5, y: 31.5 },
          { x: 97.5, y: 44.0 },
        ],
      },
    ],
  },
  "dirk-acx-118": {
    status: "handmatig getraceerd - eerste lezing",
    lineStatus: "diamond",
    lineOverlayImage: "",
    paths: [
      {
        ball: "stick",
        marker: false,
        points: [
          { x: 92.4, y: 49.0 },
          { x: 92.4, y: 16.9 },
        ],
      },
      {
        ball: "cue",
        points: [
          { x: 90.4, y: 16.9 },
          { x: 92.9, y: 7.7 },
          { x: 82.3, y: 17.5 },
        ],
      },
      {
        ball: "second",
        points: [
          { x: 92.9, y: 7.7 },
          { x: 92.7, y: 45.0 },
        ],
      },
    ],
  },
  "dirk-acx-119": {
    status: "handmatig getraceerd - eerste lezing",
    lineStatus: "diamond",
    lineOverlayImage: "",
    paths: [
      {
        ball: "cue",
        points: [
          { x: 76.6, y: 7.0 },
          { x: 66.1, y: 20.0 },
          { x: 96.0, y: 15.0 },
          { x: 73.3, y: 24.7 },
        ],
      },
      {
        ball: "second",
        points: [
          { x: 66.1, y: 20.0 },
          { x: 31.0, y: 0.5 },
          { x: 55.0, y: 13.0 },
          { x: 73.3, y: 24.7 },
        ],
      },
    ],
  },
  "dirk-acx-120": {
    status: "handmatig getraceerd - eerste lezing",
    lineStatus: "diamond",
    lineOverlayImage: "",
    paths: [
      {
        ball: "stick",
        marker: false,
        points: [
          { x: 3.0, y: 5.0 },
          { x: 62.1, y: 20.8 },
        ],
      },
      {
        ball: "cue",
        points: [
          { x: 62.1, y: 20.8 },
          { x: 73.3, y: 24.7 },
          { x: 49.9, y: 7.2 },
        ],
      },
      {
        ball: "second",
        points: [
          { x: 73.3, y: 24.7 },
          { x: 96.0, y: 33.0 },
          { x: 84.0, y: 45.0 },
          { x: 4.5, y: 20.0 },
          { x: 37.0, y: 5.0 },
          { x: 49.9, y: 7.2 },
        ],
      },
    ],
  },
  "dirk-acx-121": {
    status: "handmatig getraceerd - eerste lezing",
    lineStatus: "diamond",
    lineOverlayImage: "",
    paths: [
      {
        ball: "stick",
        marker: false,
        points: [
          { x: 88.1, y: 48.0 },
          { x: 62.6, y: 32.9 },
        ],
      },
      {
        ball: "cue",
        points: [
          { x: 60.9, y: 30.8 },
          { x: 50.3, y: 24.6 },
          { x: 26.8, y: 29.5 },
        ],
      },
      {
        ball: "second",
        points: [
          { x: 50.3, y: 24.6 },
          { x: 33.0, y: 5.0 },
          { x: 4.0, y: 32.0 },
          { x: 26.8, y: 29.5 },
        ],
      },
    ],
  },
  "dirk-acx-122": {
    status: "handmatig getraceerd - eerste lezing",
    lineStatus: "diamond",
    lineOverlayImage: "",
    paths: [
      {
        ball: "cue",
        points: [
          { x: 35.6, y: 6.2 },
          { x: 27.0, y: 6.3 },
          { x: 38.1, y: 6.1 },
        ],
      },
      {
        ball: "second",
        points: [
          { x: 27.0, y: 6.3 },
          { x: 3.0, y: 5.0 },
          { x: 82.0, y: 5.0 },
        ],
      },
    ],
  },
  "dirk-acx-123": {
    status: "handmatig getraceerd - eerste lezing",
    lineStatus: "diamond",
    lineOverlayImage: "",
    paths: [
      {
        ball: "cue",
        points: [
          { x: 84.9, y: 25.9 },
          { x: 86.6, y: 21.1 },
          { x: 89.5, y: 5.0 },
          { x: 96.0, y: 12.0 },
          { x: 86.0, y: 45.0 },
          { x: 79.4, y: 27.8 },
        ],
      },
      {
        ball: "second",
        points: [
          { x: 86.6, y: 21.1 },
          { x: 74.0, y: 50.0 },
          { x: 79.4, y: 27.8 },
        ],
      },
    ],
  },
  "dirk-acx-124": {
    status: "handmatig getraceerd - eerste lezing",
    lineStatus: "diamond",
    lineOverlayImage: "",
    paths: [
      {
        ball: "cue",
        points: [
          { x: 76.9, y: 39.6 },
          { x: 78.6, y: 35.1 },
          { x: 85.0, y: 5.0 },
          { x: 91.5, y: 4.0 },
          { x: 82.0, y: 44.0 },
          { x: 72.7, y: 43.2 },
        ],
      },
      {
        ball: "second",
        points: [
          { x: 78.6, y: 35.1 },
          { x: 59.0, y: 45.0 },
          { x: 72.7, y: 43.2 },
        ],
      },
    ],
  },
  "dirk-acx-125": {
    status: "handmatig getraceerd - eerste lezing",
    lineStatus: "diamond",
    lineOverlayImage: "",
    paths: [
      {
        ball: "stick",
        marker: false,
        points: [
          { x: 3.0, y: 3.0 },
          { x: 19.3, y: 25.6 },
        ],
      },
      {
        ball: "cue",
        points: [
          { x: 19.3, y: 25.6 },
          { x: 38.3, y: 41.3 },
          { x: 35.0, y: 45.0 },
          { x: 92.6, y: 40.2 },
        ],
      },
      {
        ball: "second",
        points: [
          { x: 38.3, y: 41.3 },
          { x: 58.0, y: 5.0 },
          { x: 84.0, y: 43.0 },
          { x: 86.5, y: 37.0 },
          { x: 92.6, y: 40.2 },
        ],
      },
    ],
  },
  "dirk-acx-126": {
    status: "handmatig getraceerd - eerste lezing",
    lineStatus: "diamond",
    lineOverlayImage: "",
    paths: [
      {
        ball: "cue",
        points: [
          { x: 12.4, y: 7.7 },
          { x: 15.4, y: 7.4 },
          { x: 42.0, y: 44.0 },
          { x: 92.2, y: 10.5 },
        ],
      },
      {
        ball: "second",
        points: [
          { x: 15.4, y: 7.4 },
          { x: 25.0, y: 5.0 },
          { x: 96.0, y: 8.0 },
          { x: 92.2, y: 10.5 },
        ],
      },
    ],
  },
  "dirk-acx-127": {
    status: "handmatig getraceerd - eerste lezing",
    lineStatus: "diamond",
    lineOverlayImage: "",
    paths: [
      {
        ball: "stick",
        marker: false,
        points: [
          { x: 88.5, y: 27.9 },
          { x: 58.1, y: 23.4 },
        ],
      },
      {
        ball: "cue",
        points: [
          { x: 49.9, y: 21.2 },
          { x: 19.4, y: 17.8 },
          { x: 82.0, y: 45.0 },
          { x: 90.1, y: 41.7 },
        ],
      },
      {
        ball: "second",
        points: [
          { x: 19.4, y: 17.8 },
          { x: 4.5, y: 14.0 },
          { x: 35.0, y: 5.0 },
          { x: 96.0, y: 14.0 },
          { x: 40.0, y: 29.0 },
          { x: 4.0, y: 34.0 },
          { x: 83.0, y: 43.0 },
        ],
      },
    ],
  },
  "dirk-acx-128": {
    status: "handmatig getraceerd - eerste lezing",
    lineStatus: "diamond",
    lineOverlayImage: "",
    paths: [
      {
        ball: "stick",
        marker: false,
        points: [
          { x: 97.9, y: 9.8 },
          { x: 82.6, y: 28.0 },
        ],
      },
      {
        ball: "cue",
        points: [
          { x: 80.0, y: 31.5 },
          { x: 67.8, y: 43.6 },
          { x: 59.4, y: 6.5 },
        ],
      },
      {
        ball: "second",
        points: [
          { x: 67.8, y: 43.6 },
          { x: 4.5, y: 16.0 },
          { x: 40.0, y: 5.0 },
          { x: 51.0, y: 7.0 },
          { x: 59.4, y: 6.5 },
        ],
      },
    ],
  },
  "dirk-acx-129": {
    status: "handmatig getraceerd - eerste lezing",
    lineStatus: "diamond",
    lineOverlayImage: "",
    paths: [
      {
        ball: "stick",
        marker: false,
        points: [
          { x: 25.9, y: 47.1 },
          { x: 21.6, y: 32.0 },
        ],
      },
      {
        ball: "cue",
        points: [
          { x: 22.6, y: 28.8 },
          { x: 19.5, y: 18.3 },
          { x: 32.0, y: 5.0 },
          { x: 91.6, y: 41.9 },
        ],
      },
      {
        ball: "second",
        points: [
          { x: 19.5, y: 18.3 },
          { x: 24.0, y: 34.0 },
          { x: 25.0, y: 50.0 },
        ],
      },
    ],
  },
  "dirk-acx-130": {
    status: "handmatig getraceerd - eerste lezing",
    lineStatus: "diamond",
    lineOverlayImage: "",
    paths: [
      {
        ball: "cue",
        points: [
          { x: 19.5, y: 17.5 },
          { x: 26.8, y: 24.6 },
          { x: 4.0, y: 42.0 },
          { x: 50.0, y: 5.0 },
          { x: 96.0, y: 35.0 },
          { x: 92.0, y: 7.8 },
        ],
      },
      {
        ball: "second",
        points: [
          { x: 26.8, y: 24.6 },
          { x: 4.0, y: 36.0 },
          { x: 20.0, y: 45.0 },
          { x: 65.0, y: 5.0 },
          { x: 96.0, y: 24.0 },
          { x: 92.0, y: 7.8 },
        ],
      },
    ],
  },
  "dirk-acx-131": {
    status: "handmatig getraceerd - eerste lezing",
    lineStatus: "diamond",
    lineOverlayImage: "",
    paths: [
      {
        ball: "cue",
        points: [
          { x: 90.8, y: 33.5 },
          { x: 77.5, y: 43.7 },
          { x: 4.0, y: 38.0 },
          { x: 74.5, y: 6.6 },
        ],
      },
      {
        ball: "second",
        points: [
          { x: 77.5, y: 43.7 },
          { x: 74.5, y: 6.6 },
          { x: 90.8, y: 33.5 },
          { x: 100.0, y: 23.0 },
        ],
      },
    ],
  },
  "dirk-acx-132": {
    status: "handmatig getraceerd - eerste lezing",
    lineStatus: "diamond",
    lineOverlayImage: "",
    paths: [
      {
        ball: "cue",
        points: [
          { x: 71.7, y: 26.0 },
          { x: 35.6, y: 24.9 },
          { x: 3.5, y: 6.0 },
          { x: 62.0, y: 43.0 },
          { x: 80.2, y: 8.1 },
        ],
      },
      {
        ball: "second",
        points: [
          { x: 35.6, y: 24.9 },
          { x: 4.0, y: 42.0 },
          { x: 92.0, y: 24.0 },
          { x: 100.0, y: 16.0 },
        ],
      },
    ],
  },
  "dirk-acx-133": {
    status: "handmatig getraceerd - eerste lezing",
    lineStatus: "diamond",
    lineOverlayImage: "",
    paths: [
      {
        ball: "cue",
        points: [
          { x: 50.3, y: 43.9 },
          { x: 84.6, y: 44.0 },
          { x: 22.0, y: 5.0 },
          { x: 4.0, y: 12.0 },
          { x: 82.0, y: 39.0 },
          { x: 99.0, y: 32.0 },
        ],
      },
      {
        ball: "second",
        points: [
          { x: 84.6, y: 44.0 },
          { x: 50.3, y: 43.9 },
          { x: 27.0, y: 42.0 },
          { x: 4.0, y: 25.0 },
          { x: 22.0, y: 5.0 },
          { x: 95.0, y: 28.0 },
        ],
      },
    ],
  },
  "dirk-acx-134": {
    status: "handmatig getraceerd - eerste lezing",
    lineStatus: "diamond",
    lineOverlayImage: "",
    paths: [
      {
        ball: "stick",
        marker: false,
        points: [
          { x: 5.0, y: 5.0 },
          { x: 38.5, y: 42.6 },
        ],
      },
      {
        ball: "cue",
        points: [
          { x: 53.1, y: 43.8 },
          { x: 70.9, y: 44.0 },
          { x: 6.0, y: 13.0 },
          { x: 18.0, y: 5.0 },
          { x: 36.0, y: 42.0 },
        ],
      },
      {
        ball: "second",
        points: [
          { x: 70.9, y: 44.0 },
          { x: 5.0, y: 5.0 },
          { x: 38.0, y: 28.0 },
        ],
      },
    ],
  },
  "dirk-acx-135": {
    status: "handmatig getraceerd - eerste lezing",
    lineStatus: "diamond",
    lineOverlayImage: "",
    paths: [
      {
        ball: "stick",
        marker: false,
        points: [
          { x: 98.4, y: 18.6 },
          { x: 56.3, y: 19.1 },
        ],
      },
      {
        ball: "cue",
        points: [
          { x: 49.9, y: 18.8 },
          { x: 19.4, y: 17.7 },
          { x: 4.0, y: 48.0 },
          { x: 39.0, y: 5.0 },
          { x: 91.4, y: 42.8 },
        ],
      },
      {
        ball: "second",
        points: [
          { x: 19.4, y: 17.7 },
          { x: 6.0, y: 8.0 },
          { x: 25.0, y: 5.0 },
          { x: 50.0, y: 43.0 },
          { x: 96.0, y: 25.0 },
        ],
      },
    ],
  },
  "dirk-acx-136": {
    status: "handmatig getraceerd - eerste lezing",
    lineStatus: "diamond",
    lineOverlayImage: "",
    paths: [
      {
        ball: "stick",
        marker: false,
        points: [
          { x: 97.9, y: 10.1 },
          { x: 58.6, y: 13.4 },
        ],
      },
      {
        ball: "cue",
        points: [
          { x: 49.9, y: 15.5 },
          { x: 6.1, y: 17.2 },
          { x: 33.0, y: 43.0 },
          { x: 96.0, y: 7.0 },
        ],
      },
      {
        ball: "second",
        points: [
          { x: 6.1, y: 17.2 },
          { x: 28.0, y: 6.0 },
          { x: 42.0, y: 44.0 },
          { x: 96.0, y: 24.0 },
          { x: 92.7, y: 7.0 },
        ],
      },
    ],
  },
  "dirk-acx-137": {
    status: "handmatig getraceerd - eerste lezing",
    lineStatus: "diamond",
    lineOverlayImage: "",
    paths: [
      {
        ball: "cue",
        points: [
          { x: 88.4, y: 16.3 },
          { x: 79.8, y: 15.2 },
          { x: 4.0, y: 44.0 },
          { x: 20.0, y: 5.0 },
          { x: 50.0, y: 43.0 },
          { x: 78.0, y: 6.8 },
        ],
      },
      {
        ball: "second",
        points: [
          { x: 79.8, y: 15.2 },
          { x: 59.0, y: 5.0 },
          { x: 38.0, y: 43.0 },
          { x: 4.0, y: 44.0 },
        ],
      },
    ],
  },
  "dirk-acx-138": {
    status: "handmatig getraceerd - eerste lezing",
    lineStatus: "diamond",
    lineOverlayImage: "",
    paths: [
      {
        ball: "stick",
        marker: false,
        points: [
          { x: 58.2, y: 47.1 },
          { x: 50.3, y: 29.6 },
        ],
      },
      {
        ball: "cue",
        points: [
          { x: 49.4, y: 23.6 },
          { x: 36.7, y: 7.7 },
          { x: 4.0, y: 30.0 },
          { x: 32.0, y: 43.0 },
          { x: 82.0, y: 5.0 },
          { x: 96.0, y: 18.0 },
          { x: 19.1, y: 42.7 },
        ],
      },
      {
        ball: "second",
        points: [
          { x: 36.7, y: 7.7 },
          { x: 9.0, y: 39.0 },
          { x: 49.4, y: 23.6 },
          { x: 96.0, y: 5.0 },
        ],
      },
    ],
  },
  "dirk-acx-139": {
    status: "handmatig getraceerd - eerste lezing",
    lineStatus: "diamond",
    lineOverlayImage: "",
    paths: [
      {
        ball: "stick",
        marker: false,
        points: [
          { x: 48.0, y: 20.6 },
          { x: 2.9, y: 6.0 },
        ],
      },
      {
        ball: "cue",
        points: [
          { x: 53.7, y: 22.6 },
          { x: 73.3, y: 29.6 },
          { x: 82.0, y: 47.0 },
          { x: 93.9, y: 34.5 },
        ],
      },
      {
        ball: "second",
        points: [
          { x: 73.3, y: 29.6 },
          { x: 53.7, y: 22.6 },
          { x: 2.0, y: 7.0 },
          { x: 50.0, y: 43.0 },
          { x: 91.0, y: 32.0 },
        ],
      },
    ],
  },
  "dirk-acx-140": {
    status: "handmatig getraceerd - eerste lezing",
    lineStatus: "diamond",
    lineOverlayImage: "",
    paths: [
      {
        ball: "stick",
        marker: false,
        points: [
          { x: 51.4, y: 17.7 },
          { x: 13.7, y: 1.8 },
        ],
      },
      {
        ball: "cue",
        points: [
          { x: 55.9, y: 24.7 },
          { x: 73.0, y: 30.3 },
          { x: 85.0, y: 45.0 },
          { x: 93.9, y: 33.1 },
        ],
      },
      {
        ball: "second",
        points: [
          { x: 73.0, y: 30.3 },
          { x: 55.9, y: 24.7 },
          { x: 4.0, y: 17.0 },
          { x: 22.0, y: 5.0 },
          { x: 84.0, y: 43.0 },
          { x: 98.0, y: 36.0 },
        ],
      },
    ],
  },
  "dirk-acx-141": {
    status: "handmatig getraceerd - eerste lezing",
    lineStatus: "diamond",
    lineOverlayImage: "",
    paths: [
      {
        ball: "stick",
        marker: false,
        points: [
          { x: 25.3, y: 15.1 },
          { x: 2.5, y: 12.7 },
        ],
      },
      {
        ball: "cue",
        points: [
          { x: 35.8, y: 16.4 },
          { x: 45.8, y: 18.2 },
          { x: 45.0, y: 7.1 },
        ],
      },
      {
        ball: "second",
        points: [
          { x: 45.8, y: 18.2 },
          { x: 98.0, y: 37.0 },
          { x: 74.0, y: 47.0 },
          { x: 4.0, y: 13.0 },
          { x: 45.0, y: 7.1 },
        ],
      },
    ],
  },
  "dirk-acx-142": {
    status: "handmatig getraceerd - eerste lezing",
    lineStatus: "diamond",
    lineOverlayImage: "",
    paths: [
      {
        ball: "cue",
        points: [
          { x: 13.9, y: 42.7 },
          { x: 26.5, y: 43.1 },
          { x: 4.0, y: 23.0 },
          { x: 60.0, y: 6.0 },
          { x: 96.0, y: 29.0 },
        ],
      },
      {
        ball: "second",
        points: [
          { x: 26.5, y: 43.1 },
          { x: 4.0, y: 44.0 },
          { x: 39.0, y: 43.5 },
          { x: 96.0, y: 36.0 },
          { x: 4.0, y: 23.0 },
          { x: 61.4, y: 7.5 },
        ],
      },
    ],
  },
  "dirk-acx-143": {
    status: "handmatig getraceerd - eerste lezing",
    lineStatus: "diamond",
    lineOverlayImage: "",
    paths: [
      {
        ball: "cue",
        points: [
          { x: 13.9, y: 39.5 },
          { x: 26.5, y: 43.1 },
          { x: 72.0, y: 7.6 },
        ],
      },
      {
        ball: "second",
        points: [
          { x: 26.5, y: 43.1 },
          { x: 15.0, y: 43.0 },
          { x: 4.0, y: 42.0 },
          { x: 13.9, y: 39.5 },
          { x: 73.2, y: 7.6 },
        ],
      },
    ],
  },
  "dirk-acx-144": {
    status: "handmatig getraceerd - eerste lezing",
    lineStatus: "diamond",
    lineOverlayImage: "",
    paths: [
      {
        ball: "cue",
        points: [
          { x: 13.9, y: 39.5 },
          { x: 27.2, y: 43.3 },
          { x: 57.0, y: 5.0 },
          { x: 96.0, y: 5.0 },
          { x: 71.1, y: 7.7 },
        ],
      },
      {
        ball: "second",
        points: [
          { x: 27.2, y: 43.3 },
          { x: 6.0, y: 42.5 },
          { x: 13.9, y: 39.5 },
          { x: 75.0, y: 18.0 },
          { x: 71.1, y: 7.7 },
        ],
      },
    ],
  },
  "dirk-acx-145": {
    status: "handmatig getraceerd - eerste lezing",
    lineStatus: "diamond",
    lineOverlayImage: "",
    paths: [
      {
        ball: "cue",
        points: [
          { x: 62.6, y: 9.5 },
          { x: 61.3, y: 18.7 },
          { x: 61.4, y: 43.2 },
        ],
      },
      {
        ball: "second",
        points: [
          { x: 61.3, y: 18.7 },
          { x: 16.0, y: 43.0 },
          { x: 3.0, y: 12.0 },
          { x: 14.0, y: 5.0 },
          { x: 58.0, y: 43.0 },
          { x: 96.0, y: 35.0 },
        ],
      },
    ],
  },
  "dirk-acx-146": {
    status: "handmatig getraceerd - eerste lezing",
    lineStatus: "diamond",
    lineOverlayImage: "",
    paths: [
      {
        ball: "stick",
        marker: false,
        points: [
          { x: 17.6, y: 17.6 },
          { x: 2.3, y: 15.8 },
        ],
      },
      {
        ball: "cue",
        points: [
          { x: 29.1, y: 17.9 },
          { x: 73.1, y: 24.8 },
          { x: 83.0, y: 4.0 },
          { x: 93.8, y: 24.7 },
        ],
      },
      {
        ball: "second",
        points: [
          { x: 73.1, y: 24.8 },
          { x: 4.0, y: 18.0 },
          { x: 35.0, y: 5.0 },
          { x: 75.0, y: 43.0 },
          { x: 96.0, y: 25.0 },
        ],
      },
    ],
  },
  "dirk-acx-147": {
    status: "handmatig getraceerd - eerste lezing",
    lineStatus: "diamond",
    lineOverlayImage: "",
    paths: [
      {
        ball: "cue",
        points: [
          { x: 91.8, y: 35.1 },
          { x: 72.4, y: 43.6 },
          { x: 76.0, y: 6.0 },
          { x: 94.5, y: 36.2 },
        ],
      },
      {
        ball: "second",
        points: [
          { x: 72.4, y: 43.6 },
          { x: 4.0, y: 46.0 },
          { x: 93.0, y: 35.0 },
        ],
      },
    ],
  },
  "dirk-acx-148": {
    status: "handmatig getraceerd - eerste lezing",
    lineStatus: "diamond",
    lineOverlayImage: "",
    paths: [
      {
        ball: "cue",
        points: [
          { x: 91.8, y: 35.1 },
          { x: 72.4, y: 43.6 },
          { x: 77.0, y: 6.0 },
          { x: 96.0, y: 47.0 },
          { x: 94.5, y: 36.2 },
        ],
      },
      {
        ball: "second",
        points: [
          { x: 72.4, y: 43.6 },
          { x: 4.0, y: 46.0 },
          { x: 91.8, y: 35.1 },
        ],
      },
    ],
  },
  "dirk-acx-149": {
    status: "handmatig getraceerd - eerste lezing",
    lineStatus: "diamond",
    lineOverlayImage: "",
    paths: [
      {
        ball: "stick",
        marker: false,
        points: [
          { x: 63.1, y: 47.5 },
          { x: 45.6, y: 37.1 },
        ],
      },
      {
        ball: "cue",
        points: [
          { x: 34.3, y: 36.0 },
          { x: 19.6, y: 24.7 },
          { x: 4.0, y: 28.0 },
          { x: 58.0, y: 5.0 },
          { x: 93.5, y: 11.8 },
        ],
      },
      {
        ball: "second",
        points: [
          { x: 19.6, y: 24.7 },
          { x: 9.0, y: 5.0 },
          { x: 35.0, y: 42.0 },
          { x: 88.0, y: 9.0 },
          { x: 93.5, y: 11.8 },
        ],
      },
    ],
  },
  "dirk-acx-150": {
    status: "handmatig getraceerd - eerste lezing",
    lineStatus: "diamond",
    lineOverlayImage: "",
    paths: [
      {
        ball: "cue",
        points: [
          { x: 22.0, y: 24.3 },
          { x: 34.3, y: 36.0 },
          { x: 4.0, y: 30.0 },
          { x: 50.0, y: 5.0 },
          { x: 88.0, y: 16.0 },
          { x: 92.2, y: 19.6 },
        ],
      },
      {
        ball: "second",
        points: [
          { x: 34.3, y: 36.0 },
          { x: 28.0, y: 46.0 },
          { x: 4.0, y: 5.0 },
          { x: 28.0, y: 40.0 },
          { x: 50.0, y: 24.0 },
          { x: 62.0, y: 5.0 },
          { x: 78.0, y: 41.0 },
        ],
      },
    ],
  },
};
