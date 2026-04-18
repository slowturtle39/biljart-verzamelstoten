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
        "De speelbal maakt de korte carambole in de rechterbovenhoek. Bal 2 wordt via links en boven teruggestuurd naar de kleine verzamelzone.",
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
};
