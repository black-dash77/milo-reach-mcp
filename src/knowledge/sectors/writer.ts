import type { SectorProfile } from "./types.js";

export const WRITER_SECTOR: SectorProfile = {
  key: "writer",
  labels: [
    "redacteur", "copywriter", "content", "seo", "blogueur", "journaliste",
    "redaction", "contenu", "editorial", "ghostwriter",
  ],
  positioning: "Le redacteur qui se vend 'au mot' est en course vers le bas avec l'IA generative. Le positionnement gagnant est strategique : 'Je cree des systemes de contenu qui generent du trafic qualifie et des leads' bat 'Redacteur web freelance'. La specialisation par verticale (SaaS, finance, sante) ou par expertise (SEO technique, conversion copywriting, thought leadership) cree une barriere a l'entree que l'IA ne franchira pas — parce que le client achete le jugement editorial, pas les mots.",
  offerStructure: "Offre d'entree : audit editorial avec recommandations SEO — montre l'expertise analytique, pas juste la plume. Offre coeur : strategie de contenu mensuelle avec calendrier editorial, X articles optimises SEO, et reporting de performance. Offre premium : direction editoriale complete (strategie + production + distribution + mesure) avec retainer annuel. L'upsell naturel est la formation de l'equipe interne a la creation de contenu.",
  priorityChannels: ["LinkedIn articles et posts", "blog personnel comme preuve de competence", "referral clients satisfaits", "reseaux de freelances complementaires"],
  pricingStrategy: "Tarifer au livrable strategique, pas au mot. '500 mots a 0.15EUR' est une commodite. 'Un article SEO positionne en page 1 qui genere 200 visites/mois pendant 2 ans' est un actif. Calculer la valeur vie du contenu : un article qui genere 200 visites/mois x 24 mois x 2% conversion x 1000EUR panier moyen = 96K de valeur potentielle — l'investissement de 800EUR est ridicule en comparaison. La structure par package mensuel cree du recurring et fidele.",
  storytellingAngle: "Le stratege de contenu qui pense ROI, pas just qualite editoriale. Les etudes de cas montrent des courbes de trafic, des positions Google, des leads generes — pas des extraits bien ecrits. Le recit type : 'Le client etait invisible sur Google. En 6 mois de strategie editoriale, trafic organique x5, 30 leads/mois.' La vulnerabilite strategique : partager les echecs et les apprentissages dans sa propre strategie de contenu.",
  clientSizeAdaptation: {
    small: "Solopreneurs : packages de lancement (page About + 3 pages services + 5 articles fondamentaux). Templates editoriaux personnalises pour leur autonomie future. Coaching sur le ton de voix et la strategie de contenu.",
    medium: "PME : strategie editoriale complete avec calendrier, workflow de validation, et guidelines de brand voice. Formation des contributeurs internes. Retainer mensuel avec volume flexible.",
    large: "Grands comptes : direction editoriale externalisee avec equipe de redacteurs coordonnee. Charte editoriale exhaustive. Reporting mensuel de performance SEO et conversion. Integration avec les equipes marketing et produit.",
  },
};
