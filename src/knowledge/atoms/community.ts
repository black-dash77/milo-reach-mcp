import type { BrainAtom } from "./types.js";

/**
 * COMMUNITY — 12 atoms on community building and membership models.
 * Engagement loops, membership tiers, and community-led growth.
 */
export const COMMUNITY_ATOMS: BrainAtom[] = [
  {
    id: "com-001",
    category: "community",
    principle:
      "Le flywheel communautaire : contenu attire des membres → membres generent des discussions → discussions produisent du contenu → contenu attire de nouveaux membres. Le role du freelance n'est pas de creer tout le contenu, mais d'amorcer le flywheel et de le maintenir. Une communaute saine produit 80% de son contenu elle-meme.",
    application:
      "Amorce la communaute avec 30 jours de contenu quotidien, puis reduis progressivement en delegant l'animation aux membres les plus actifs.",
    triggers: ["communaute", "flywheel", "croissance organique", "membres", "engagement"],
    personaAffinity: ["Strategist"],
    maturityRange: [30, 100],
    weight: 9,
  },
  {
    id: "com-002",
    category: "community",
    principle:
      "La psychologie des tiers de membership : Gratuit (decouverte, valeur limitee), Standard (acces complet, prix accessible), Premium (contact direct, exclusivite). Le tier gratuit doit donner assez de valeur pour prouver la qualite, mais pas assez pour satisfaire. 5-8% des gratuits convertissent en payant quand le gap de valeur est bien calibre.",
    application:
      "Structure les tiers avec un gap clair : gratuit = contenu passif, standard = interaction + ressources, premium = acces direct + coaching.",
    triggers: ["membership", "abonnement", "tiers", "pricing communaute", "gratuit vs payant"],
    personaAffinity: ["Strategist"],
    maturityRange: [40, 100],
    weight: 8,
  },
  {
    id: "com-003",
    category: "community",
    principle:
      "Les 7 premiers jours determinent si un nouveau membre reste ou part. La sequence d'onboarding doit : presenter les regles (J1), connecter avec 3 membres (J2-3), guider vers une premiere contribution (J4-5), celebrer la premiere interaction (J6-7). Un membre qui ne poste pas dans les 7 premiers jours a 90% de chances de devenir inactif.",
    application:
      "Cree un parcours d'onboarding de 7 jours automatise avec des etapes claires et un membre-parrain assigne a chaque nouveau.",
    triggers: ["onboarding", "nouveau membre", "accueil", "premiers jours", "integration"],
    personaAffinity: ["Automator", "Strategist"],
    maturityRange: [30, 90],
    weight: 8,
  },
  {
    id: "com-004",
    category: "community",
    principle:
      "La gamification de l'engagement : badges, niveaux, classements, et defis activent le systeme de recompense dopaminergique. Mais attention — une gamification superficielle (points sans signification) irrite les professionnels. La gamification doit recompenser la VALEUR apportee (meilleure reponse, ressource partagee) pas l'ACTIVITE (nombre de posts).",
    application:
      "Implemente un systeme de reconnaissance qui recompense les contributions de valeur : expert badge, meilleur conseil du mois, mentor reconnu.",
    triggers: ["gamification", "badges", "recompense", "engagement", "motivation", "jeu"],
    personaAffinity: ["Automator"],
    maturityRange: [40, 100],
    weight: 6,
  },
  {
    id: "com-005",
    category: "community",
    principle:
      "Le community-led growth (CLG) : la communaute comme moteur d'acquisition. Les membres satisfaits sont les meilleurs ambassadeurs — leur recommandation a un taux de conversion 7x superieur au marketing classique. La strategie : cree une experience si bonne que les membres recrutent naturellement. Programme de parrainage avec benefice mutuel.",
    application:
      "Lance un programme de parrainage ou le membre qui invite ET le nouveau membre recoivent un bonus tangible (mois gratuit, contenu exclusif).",
    triggers: ["croissance", "acquisition", "parrainage", "recommandation", "bouche a oreille"],
    personaAffinity: ["Strategist", "Prospector"],
    maturityRange: [40, 100],
    weight: 8,
  },
  {
    id: "com-006",
    category: "community",
    principle:
      "Les ambassadeurs representent 2-5% des membres mais generent 50% de l'engagement. Identifie-les, reconnais-les publiquement, donne-leur un role officiel. Un programme ambassadeur structure (avantages exclusifs, acces anticipe, titre) transforme des fans en equipe de vente gratuite. Le cout : zero. Le ROI : incalculable.",
    application:
      "Identifie les 5% de membres les plus actifs et propose-leur un statut d'ambassadeur avec avantages exclusifs et role de co-animation.",
    triggers: ["ambassadeur", "super membre", "actif", "champion", "influent", "leader"],
    personaAffinity: ["Strategist", "Prospector"],
    maturityRange: [40, 100],
    weight: 7,
  },
  {
    id: "com-007",
    category: "community",
    principle:
      "La cadence de contenu communautaire : trop de contenu submerge, pas assez fait mourir. La regle : 1 contenu phare par semaine (live, article, masterclass), 2-3 discussions lancees, et des espaces ouverts pour les contributions membres. La previsibilite cree l'habitude — 'Chaque mardi a 12h, le live strategie' ancre le rituel.",
    application:
      "Etablis un calendrier editorial hebdomadaire fixe avec un contenu phare a heure fixe et des themes de discussion recurrents.",
    triggers: ["cadence", "frequence", "calendrier", "contenu communaute", "regulier", "planning"],
    personaAffinity: ["Writer", "Automator"],
    maturityRange: [30, 80],
    weight: 7,
  },
  {
    id: "com-008",
    category: "community",
    principle:
      "La moderation comme curation : la valeur d'une communaute est inversement proportionnelle a son bruit. Un moderation qui supprime le spam, recadre les hors-sujet et met en avant les contributions de qualite cree un espace premium. Les membres restent pour la qualite des echanges, pas la quantite. Tolerer le bruit fait fuir les experts.",
    application:
      "Definis 3-5 regles claires, applique-les systematiquement, et mets en avant chaque semaine les 3 meilleures contributions.",
    triggers: ["moderation", "qualite", "bruit", "spam", "regles", "curation"],
    personaAffinity: ["Strategist"],
    maturityRange: [30, 90],
    weight: 6,
  },
  {
    id: "com-009",
    category: "community",
    principle:
      "La communaute comme source de leads : chaque membre actif est un prospect potentiel ou un referent. La cl : ne jamais vendre directement dans la communaute, mais etre tellement utile que les membres viennent a toi. 'J'ai vu ta reponse sur X, tu fais du consulting ?' est le meilleur lead possible — il arrive deja pre-convaincu.",
    application:
      "Reponds aux questions avec une valeur exceptionnelle sans jamais pitcher. Les leads viendront naturellement par message prive.",
    triggers: ["lead", "prospect", "client", "vendre", "communaute", "conversion"],
    personaAffinity: ["Prospector"],
    maturityRange: [20, 80],
    weight: 8,
  },
  {
    id: "com-010",
    category: "community",
    principle:
      "Le defi mensuel est le format d'engagement le plus puissant : 30 jours, un objectif clair, un groupe de pairs. Le defi cree l'urgence (duree limitee), la preuve sociale (les autres avancent), et la reciprocite (le freelance donne, les participants se sentent redevables). Taux de conversion post-defi vers une offre payante : 15-25%.",
    application:
      "Lance un defi gratuit de 30 jours avec un objectif mesurable, un groupe dedie, et une offre payante proposee a la fin pour les participants engages.",
    triggers: ["defi", "challenge", "30 jours", "programme", "gratuit", "engagement"],
    personaAffinity: ["Strategist", "Writer"],
    maturityRange: [20, 80],
    weight: 7,
  },
  {
    id: "com-011",
    category: "community",
    principle:
      "Le showcasing d'expertise dans la communaute : les reponses detaillees aux questions complexes sont du marketing invisible. Chaque reponse de qualite est vue par des dizaines de membres silencieux — les 'lurkers' representent 80-90% d'une communaute et ils jugent ta competence par tes contributions publiques.",
    application:
      "Reponds a 2-3 questions complexes par semaine avec des reponses longues, structurees et concretes qui demontrent ton expertise.",
    triggers: ["expertise", "montrer", "credibilite", "repondre", "valeur", "autorite"],
    personaAffinity: ["Writer", "Strategist"],
    maturityRange: [20, 80],
    weight: 7,
  },
  {
    id: "com-012",
    category: "community",
    principle:
      "Le pipeline communaute-client en 4 etapes : Membre gratuit → Participant actif → Beneficiaire d'une ressource premium → Client. Chaque etape augmente l'engagement et la confiance. La conversion se fait naturellement sur 2-3 mois. Un membre qui a beneficie de 10+ interactions de valeur ne compare plus les prix — il achete la relation.",
    application:
      "Cartographie le parcours de chaque membre et identifie les signaux de passage d'une etape a l'autre pour declencher les actions appropriees.",
    triggers: ["pipeline", "parcours", "conversion", "etapes", "progression", "client"],
    personaAffinity: ["Strategist", "Automator"],
    maturityRange: [40, 100],
    weight: 8,
  },
];
