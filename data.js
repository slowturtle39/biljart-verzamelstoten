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
        "De speelbal maakt rechts de carambole. Bal 2 loopt via de linkerzijde en bovenkant breed terug richting de rechter korte band.",
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
          { x: 2.5, y: 11.5 },
          { x: 39.0, y: 3.0 },
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
        "De speelbal gaat van geel naar rood langs de rechterzijde. Bal 2 gebruikt de linker en bovenste band om terug naar het verzamelgebied te komen.",
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
        "De speelbal raakt geel, loopt eerst omhoog en valt daarna terug naar rood. Bal 2 wordt via links en onder terug naar rechts gestuurd.",
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
          { x: 62.0, y: 44.0 },
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
        "De speelbal vertrekt linksboven en gebruikt een lange route om rood rechtsboven te bereiken. Bal 2 krijgt eveneens een brede terugloop; de extra hulplijn markeert de lange bandroute uit het bronbeeld.",
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
          { x: 88.0, y: 15.0 },
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
          { x: 72.0, y: 49.0 },
          { x: 92.6, y: 41.5 },
        ],
      },
      {
        ball: "second",
        points: [
          { x: 38.4, y: 6.7 },
          { x: 2.5, y: 10.0 },
          { x: 30.0, y: 3.0 },
          { x: 88.0, y: 42.0 },
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
        "De speelbal loopt na het contact met bal 2 naar de onderkant en vervolgens richting rood. Bal 2 gebruikt links en boven om terug naar rechts te komen.",
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
          { x: 84.2, y: 38.3 },
          { x: 89.0, y: 48.0 },
          { x: 96.0, y: 36.0 },
          { x: 92.9, y: 8.9 },
        ],
      },
      {
        ball: "second",
        points: [
          { x: 84.2, y: 38.3 },
          { x: 2.5, y: 23.5 },
          { x: 33.0, y: 3.0 },
          { x: 85.0, y: 39.0 },
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
        "De speelbal gaat na het eerste contact naar de onderste rechterzone en komt daarna terug omhoog naar rood. Bal 2 loopt breed over links en boven terug.",
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
        "De speelbal loopt vanuit de onderste middenzone via bal 2 naar rood rechtsboven. Bal 2 neemt de grote linker route en komt terug naar de bovenste rechterzone.",
      technicalDetails: [
        "Effect: laag-links, ongeveer stand 1.3.",
        "Power: ongeveer 5.4 / 10.",
        "Lijnen: handmatig getraceerd op de groene simulator en gecalibreerd op de raildiamonds.",
        "Bronbeeld: PDF-positie 20; gebruik het vergrote diagram als controle voor nuance.",
      ],
    },
  },
};
