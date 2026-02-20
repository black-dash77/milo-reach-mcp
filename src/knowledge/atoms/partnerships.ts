import type { BrainAtom } from "./types.js";

/**
 * PARTNERSHIPS — 12 atoms on co-marketing, referrals, and alliances.
 * Partner strategies, referral structures, and collaborative growth.
 */
export const PARTNERSHIPS_ATOMS: BrainAtom[] = [
  {
    id: "par-001",
    category: "partnerships",
    principle:
      "La matrice des competences complementaires : un bon partenaire est celui dont l'expertise complete la tienne sans la chevaucher. Un developpeur web + un designer UX = une offre complete. Un developpeur web + un autre developpeur web = une competition deguisee. Dessine ta matrice : tes competences sur un axe, les besoins clients non couverts sur l'autre.",
    application:
      "Identifie 3 competences complementaires a la tienne que tes clients demandent regulierement et trouve des partenaires experts dans ces domaines.",
    triggers: ["partenaire", "complementaire", "collaboration", "alliance", "associer"],
    personaAffinity: ["Strategist"],
    maturityRange: [20, 80],
    weight: 9,
  },
  {
    id: "par-002",
    category: "partnerships",
    principle:
      "La structure de commission de referral optimale pour freelances : 10-15% du premier projet pour les referrals simples, 5-8% recurrent pour les partenaires strategiques. La commission doit etre suffisante pour motiver (>500 CHF) mais pas si elevee qu'elle mange ta marge. Un referral qui coute 10% mais arrive pre-qualifie vaut mieux qu'un lead froid qui coute 0%.",
    application:
      "Mets en place un programme de referral avec une grille claire : 10% pour les referrals ponctuels, 5% recurrent pour les partenaires actifs.",
    triggers: ["referral", "commission", "parrainage", "recommandation", "apporteur"],
    personaAffinity: ["Strategist", "Prospector"],
    maturityRange: [20, 80],
    weight: 8,
  },
  {
    id: "par-003",
    category: "partnerships",
    principle:
      "Le co-webinaire est le format de partenariat a ROI le plus rapide. Chaque partenaire amene son audience, la credibilite croisee augmente la confiance, et le contenu est cree a 50% de l'effort. Un co-webinaire bien execute genere 2-3x plus d'inscrits qu'un solo et les leads sont pre-qualifies par la confiance du partenaire.",
    application:
      "Propose un co-webinaire a un partenaire complementaire avec un sujet qui touche les deux audiences et un partage clair des leads generes.",
    triggers: ["co-webinaire", "webinaire commun", "collaboration contenu", "joint venture"],
    personaAffinity: ["Strategist", "Writer"],
    maturityRange: [20, 80],
    weight: 7,
  },
  {
    id: "par-004",
    category: "partnerships",
    principle:
      "Le contenu co-cree multiplie la portee avec moins d'effort. Un article co-ecrit, un podcast commun, un guide a 4 mains — chaque partenaire partage avec son audience. La regle du 1+1=3 : l'audience combinee est toujours plus grande que la somme des parties car chaque audience recrute dans le reseau de l'autre.",
    application:
      "Planifie un contenu co-cree trimestriel avec un partenaire cle : article, guide, etude de cas croisee ou podcast invite.",
    triggers: ["contenu commun", "co-creation", "article commun", "podcast invite", "guest"],
    personaAffinity: ["Writer", "Strategist"],
    maturityRange: [20, 70],
    weight: 6,
  },
  {
    id: "par-005",
    category: "partnerships",
    principle:
      "Le programme d'affiliation pour freelances : cree une offre digitale (formation, template, outil) et recrute des affilies qui la recommandent contre 20-30% de commission. Un programme d'affiliation bien concu tourne en automatique — les affilies vendent pendant que tu dors. Mais la condition : un produit excellent qui se recommande naturellement.",
    application:
      "Cree un produit digital (cours, template pack) et un programme d'affiliation avec landing page dediee, tracking, et commission automatique.",
    triggers: ["affiliation", "affilier", "revenu passif", "programme affilies", "automatiser vente"],
    personaAffinity: ["Automator", "Strategist"],
    maturityRange: [50, 100],
    weight: 7,
  },
  {
    id: "par-006",
    category: "partnerships",
    principle:
      "Le white-label est le partenariat le plus profitable mais le plus risque. Fournir tes services sous la marque d'une agence te donne du volume garanti, mais te rend invisible et dependant. Regle de securite : jamais plus de 40% de ton CA en white-label. Le white-label est un tremplin, pas une destination — utilise-le pour financer ta croissance propre.",
    application:
      "Negocie des contrats white-label avec des agences complementaires, mais plafonne a 40% de ton CA et investis le reste en marque propre.",
    triggers: ["white label", "sous-traitance", "agence", "marque blanche", "partenaire agence"],
    personaAffinity: ["Strategist"],
    maturityRange: [30, 80],
    weight: 7,
  },
  {
    id: "par-007",
    category: "partnerships",
    principle:
      "La relation agence-freelance saine repose sur 3 piliers : communication transparente (pas de surprises), qualite constante (le freelance est le reflet de l'agence), et respect des delais. Un freelance fiable pour une agence recoit des projets recurrents sans effort de prospection. La fiabilite bat le talent dans les relations agence-freelance.",
    application:
      "Traite chaque projet agence comme une vitrine : livre tot, communique proactivement les risques, et depasse les attentes sur la qualite.",
    triggers: ["agence", "freelance", "sous-traitant", "prestataire", "fiabilite"],
    personaAffinity: ["Strategist"],
    maturityRange: [10, 60],
    weight: 7,
  },
  {
    id: "par-008",
    category: "partnerships",
    principle:
      "Les introductions strategiques sont la monnaie du networking professionnel. Connecte deux contacts qui gagneraient a se connaitre sans rien demander en retour. La loi de la reciprocite fait le reste : celui qui introduit sans arriere-pensee recoit 3x plus d'introductions en retour. Le 'connecteur' est le role le plus puissant d'un ecosysteme.",
    application:
      "Fais une introduction strategique par semaine en connectant deux contacts avec une presentation personnalisee des deux cotes.",
    triggers: ["introduction", "connecter", "mettre en relation", "reseau", "networking"],
    personaAffinity: ["Prospector"],
    maturityRange: [20, 80],
    weight: 6,
  },
  {
    id: "par-009",
    category: "partnerships",
    principle:
      "L'accord de partenariat ecrit est non-negociable, meme entre amis. Les elements essentiels : perimetre (qui fait quoi), remuneration (commissions, delais de paiement), propriete intellectuelle, non-sollicitation des clients, duree, et conditions de sortie. 80% des partenariats qui echouent auraient survecu avec un accord clair des le depart.",
    application:
      "Redige un modele d'accord de partenariat standard avec les 6 clauses essentielles et propose-le des le debut de chaque collaboration.",
    triggers: ["accord", "contrat", "partenariat formel", "clauses", "proteger", "juridique"],
    personaAffinity: ["Strategist"],
    maturityRange: [30, 90],
    weight: 8,
  },
  {
    id: "par-010",
    category: "partnerships",
    principle:
      "Le ROI du co-marketing se mesure en leads generes, pas en 'visibilite'. Un partenariat qui genere 50 leads qualifies en 3 mois a un ROI mesurable. Un partenariat qui donne de la 'visibilite' sans metriques est un investissement flou. Definis des KPIs partages AVANT de lancer : leads generes, CA attribuable, taux de conversion croise.",
    application:
      "Avant chaque partenariat, definis 3 KPIs mesurables, un calendrier de suivi mensuel, et un seuil de rentabilite minimum.",
    triggers: ["roi", "mesurer", "kpi", "performance", "rentabilite", "co-marketing"],
    personaAffinity: ["Analyst", "Strategist"],
    maturityRange: [30, 90],
    weight: 7,
  },
  {
    id: "par-011",
    category: "partnerships",
    principle:
      "Le tiering des partenaires : Bronze (referrals occasionnels), Silver (projets communs reguliers), Gold (co-marketing actif + revenue share). Chaque tier a des avantages proportionnels : Bronze = visibilite dans ton repertoire, Silver = co-branding, Gold = commission elevee + acces prioritaire. Le tiering motive l'investissement progressif.",
    application:
      "Cree une grille de 3 tiers avec des criteres de qualification clairs et des avantages progressifs pour chaque niveau.",
    triggers: ["tiers", "niveau", "classification", "partenaire", "programme"],
    personaAffinity: ["Strategist"],
    maturityRange: [40, 100],
    weight: 6,
  },
  {
    id: "par-012",
    category: "partnerships",
    principle:
      "La dissolution propre d'un partenariat est aussi importante que sa creation. Un partenariat qui ne fonctionne plus doit etre arrete avant qu'il ne devienne toxique. La regle : bilan trimestriel, et si les KPIs ne sont pas atteints 2 trimestres consecutifs, conversation honnete et sortie elegante. La reputation dans un ecosysteme est plus precieuse qu'un partenariat mediocre.",
    application:
      "Planifie un bilan trimestriel pour chaque partenariat actif et applique la regle des 2 trimestres pour decider de continuer ou d'arreter.",
    triggers: ["arreter", "fin partenariat", "dissolution", "separer", "ne marche plus"],
    personaAffinity: ["Strategist"],
    maturityRange: [40, 100],
    weight: 6,
  },
];
