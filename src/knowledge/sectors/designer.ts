import type { SectorProfile } from "./types.js";

export const DESIGNER_SECTOR: SectorProfile = {
  key: "designer",
  labels: [
    "designer", "graphiste", "ux", "ui", "directeur artistique", "branding",
    "identite visuelle", "webdesign", "figma", "design system",
  ],
  positioning: "Le design est invisible quand il est bon — le positionnement doit rendre cette valeur visible. 'Je cree des interfaces qui convertissent' est 10x plus puissant que 'UI/UX Designer'. La specialisation par resultat (conversion, retention, accessibilite) ou par secteur (luxe, tech, sante) transforme le designer d'executant en stratege. Le test : si le client peut trouver le meme service sur Fiverr, le positionnement est trop generique.",
  offerStructure: "Offre d'entree : audit UX express avec 5 recommandations actionnables — montre l'expertise et cree l'urgence ('vous perdez X conversions par mois'). Offre coeur : refonte complete avec wireframes, prototypes et tests utilisateurs — forfait avec livrables definis. Offre premium : design system complet + formation equipe + retainer creatif mensuel. L'upsell naturel du designer est la maintenance de l'identite visuelle dans le temps.",
  priorityChannels: ["Dribbble/Behance portfolio", "Instagram visuel", "LinkedIn avec etudes de cas visuelles", "referral et bouche-a-oreille"],
  pricingStrategy: "Ne jamais vendre du temps de design — vendre la transformation visuelle et son impact business. Un logo a 500EUR est 'cher', une identite de marque qui augmente la confiance client de 40% est un investissement. Toujours presenter le avant/apres avec metriques. Le palier milieu inclut les revisions illimitees sur un scope defini — ca rassure et ca evite le scope creep.",
  storytellingAngle: "Le designer qui pense business, pas juste esthetique. Chaque choix visuel a une raison strategique. Les etudes de cas racontent : probleme business → solution design → resultat mesurable. Montrer le process (recherche → wireframe → iteration → final) humanise le travail et justifie le prix. Le portfolio n'est pas une galerie, c'est une collection de preuves de ROI.",
  clientSizeAdaptation: {
    small: "Solopreneurs et TPE : packages identite visuelle tout-en-un (logo + charte + templates). Simplifier les choix — proposer 2-3 directions, pas 10. Le delivrable doit etre utilisable immediatement sans competence design.",
    medium: "PME : design system modulaire qui evolue avec l'entreprise. Workshops de co-creation pour impliquer les equipes. Le retainer creatif mensuel pour garder la coherence visuelle sur tous les supports.",
    large: "Grands comptes : processus structure avec comite de validation. Se positionner comme expert externe qui apporte un regard neuf. Documentation exhaustive et formation des equipes internes. Les rebranding progressifs reduisent le risque percu.",
  },
};
