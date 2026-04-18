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
    status: "voorbeeld omgezet",
    renderMode: "table",
    generatedFromImage: true,
    originalDiagramImage: "assets/positions/shot-001.jpg",
    goal:
      "Maak de carambole vanuit de bovenste verzamelpositie en probeer de ballen richting rechter korte band bij elkaar te houden.",
    hint:
      "Speel krachtig maar controleerbaar. De PDF geeft een vlakke keuhoek, laag-links effect en ongeveer 8.6 power aan.",
    balls: {
      cue: { x: 53.5, y: 9.2 },
      second: { x: 74.4, y: 4.7 },
      third: { x: 93.0, y: 45.7 },
    },
    paths: [
      {
        ball: "cue",
        points: [
          { x: 53.5, y: 9.2 },
          { x: 74.4, y: 4.7 },
          { x: 96.0, y: 20.0 },
          { x: 93.0, y: 45.7 },
        ],
      },
      {
        ball: "second",
        points: [
          { x: 74.4, y: 4.7 },
          { x: 96.0, y: 20.0 },
          { x: 49.0, y: 43.0 },
          { x: 4.0, y: 23.0 },
          { x: 23.0, y: 7.0 },
          { x: 78.0, y: 29.0 },
        ],
      },
      {
        ball: "third",
        points: [
          { x: 93.0, y: 45.7 },
          { x: 88.0, y: 42.0 },
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
        "Bronbeeld: PDF-positie 1, zodat deze later ook aan exact dezelfde YouTube-stoot gekoppeld kan worden.",
      ],
    },
  },
};
