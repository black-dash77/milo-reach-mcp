import type { SectorProfile } from "./types.js";

export const TRAINER_SECTOR: SectorProfile = {
  key: "trainer",
  labels: [
    "formateur", "enseignant", "professeur", "e-learning", "cours en ligne",
    "pedagogie", "formation", "workshop", "atelier", "masterclass",
  ],
  positioning: "Le formateur generique ('je forme aux competences digitales') est en competition avec YouTube et ChatGPT. Le positionnement gagnant est la transformation mesurable : 'En 8 semaines, vos equipes commerciales maitrisent le social selling et generent 3x plus de leads LinkedIn.' La methode proprietaire est encore plus critique ici — nommer son framework pedagogique ('La Methode 4A', 'Le Systeme Sprint') cree une propriete intellectuelle impossible a copier et justifie un premium.",
  offerStructure: "Offre d'entree : webinaire ou atelier gratuit de 45 min — demontre la pedagogie et cree un pipeline. Offre coeur : programme de formation en 4-8 sessions avec exercices pratiques, feedback individualise et certification. Offre premium : accompagnement post-formation (coaching individuel, communaute alumni, mise a jour annuelle du contenu). L'upsell ultime est le programme de formation de formateurs — former l'equipe interne multiplie l'impact et le CA.",
  priorityChannels: ["LinkedIn thought leadership", "webinaires gratuits comme funnel", "YouTube educatif", "partenariats avec organismes de formation et OPCO"],
  pricingStrategy: "Le formateur qui facture a la journee est une commodite. Le formateur qui facture a la transformation est un investisseur. 'Formation de 2 jours a 2000EUR' vs 'Programme qui augmente la productivite de votre equipe de 30% — investissement de 5000EUR avec garantie de resultat'. Toujours inclure le ROI projete dans la proposition. L'ancrage par le cout de l'ignorance : 'Chaque mois sans cette competence vous coute X en opportunites manquees.'",
  storytellingAngle: "Le praticien qui enseigne, pas le theoricien. Les meilleures formations viennent de ceux qui font encore le metier. Le recit type : 'J'ai decouvert cette methode en resolvant mon propre probleme de X. En 3 ans, je l'ai affinee avec 200 professionnels. Voici les resultats.' Les temoignages d'apprenants avec resultats concrets sont la preuve sociale la plus puissante. Montrer l'evolution : avant la formation vs 3 mois apres.",
  clientSizeAdaptation: {
    small: "Solopreneurs : cours en ligne accessibles (e-learning + communaute). Formats courts et actionnables. La valeur ajoutee est le feedback personalise qui differencie de YouTube.",
    medium: "PME : programmes intra-entreprise sur mesure. Diagnostic des besoins avant conception. Mix presentiel/distanciel adapte. Mesure d'impact a 30/60/90 jours pour prouver le ROI.",
    large: "Grands comptes : academie interne deployee en marque blanche. Parcours de certification avec niveaux. Integration LMS. Le formateur devient architecte pedagogique et forme des relais internes.",
  },
};
