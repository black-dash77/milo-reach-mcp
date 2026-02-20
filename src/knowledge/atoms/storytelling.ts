import type { BrainAtom } from "./types.js";

export const STORYTELLING_ATOMS: BrainAtom[] = [
  {
    id: "sto-001",
    category: "storytelling",
    principle:
      "Le framework StoryBrand SB7 : le CLIENT est le heros, pas le freelance. Le freelance est le guide — celui qui a le plan, la credibilite et l'empathie. Le heros a un probleme (externe, interne, philosophique), rencontre le guide, recoit un plan, passe a l'action, evite l'echec, obtient le succes.",
    application:
      "Structure chaque message autour du parcours du client-heros : son probleme, son desir, et comment le freelance-guide l'aide a reussir.",
    triggers: ["histoire", "storytelling", "storybrand", "heros", "recit", "narratif"],
    personaAffinity: ["Writer", "Strategist"],
    maturityRange: [0, 60],
    weight: 9,
  },
  {
    id: "sto-002",
    category: "storytelling",
    principle:
      "Le Golden Circle de Sinek : les gens n'achetent pas CE QUE tu fais, ils achetent POURQUOI tu le fais. 'Pourquoi' (conviction) → 'Comment' (methode) → 'Quoi' (offre). Le 'pourquoi' cree l'adherence emotionnelle, le 'quoi' la confirme rationnellement.",
    application:
      "Aide le freelance a articuler son 'pourquoi' authentique et le tisse dans tous ses messages commerciaux.",
    triggers: ["pourquoi", "mission", "vision", "valeurs", "motivation", "raison"],
    personaAffinity: ["Writer", "Strategist"],
    maturityRange: [10, 60],
    weight: 8,
  },
  {
    id: "sto-003",
    category: "storytelling",
    principle:
      "La vulnerabilite strategique est le raccourci vers la confiance. Montrer qu'on est passe par les memes galeres que le prospect — et qu'on en est sorti — cree une connexion que les diplomes ne creent pas. L'echec surmonte est plus convaincant que le succes permanent.",
    application:
      "Identifie les moments d'echec ou de doute du freelance et les transforme en elements narratifs qui renforcent la credibilite.",
    triggers: ["echec", "difficulte", "galere", "erreur", "debut", "parcours"],
    personaAffinity: ["Writer"],
    maturityRange: [0, 50],
    weight: 7,
  },
  {
    id: "sto-004",
    category: "storytelling",
    principle:
      "L'elevator pitch parfait tient en 8 secondes et suit la formule : 'J'aide [cible precise] a [resultat desirable] grace a [methode unique].' Si tu ne peux pas le dire en une respiration, c'est trop complexe.",
    application:
      "Construit un elevator pitch percutant en testant chaque combinaison cible/resultat/methode.",
    triggers: ["elevator pitch", "me presenter", "en une phrase", "resumer", "pitch", "networking"],
    personaAffinity: ["Writer", "Strategist"],
    maturityRange: [0, 40],
    weight: 8,
  },
  {
    id: "sto-005",
    category: "storytelling",
    principle:
      "Le contraste avant/apres est le mecanisme narratif le plus puissant. Le cerveau retient les extremes et ignore le milieu. 'Avant : 2 clients par mois, stress permanent, pricing au rabais. Apres : pipeline plein, tarifs doubles, 3 mois de visibilite.' Le gap emotionnel fait le travail.",
    application:
      "Structure chaque etude de cas et chaque promesse autour du contraste avant/apres avec des details sensoriels.",
    triggers: ["avant apres", "transformation", "resultat", "changement", "etude de cas"],
    personaAffinity: ["Writer"],
    maturityRange: [10, 70],
    weight: 8,
  },
  {
    id: "sto-006",
    category: "storytelling",
    principle:
      "Les details specifiques rendent une histoire credible. '47 leads en 3 semaines' est 10x plus convaincant que 'plus de leads rapidement'. La specificite signal l'authenticite — les menteurs arrondissent, la verite a des angles.",
    application:
      "Remplace chaque affirmation generique par un chiffre specifique et verifiable dans les communications.",
    triggers: ["chiffre", "preuve", "concret", "specifique", "credible", "vague"],
    personaAffinity: ["Writer", "Analyst"],
    maturityRange: [10, 80],
    weight: 7,
  },
  {
    id: "sto-007",
    category: "storytelling",
    principle:
      "Chaque client satisfait est un cas d'etude en attente. La formule : Situation initiale (probleme) → Intervention (ce qui a ete fait) → Resultat (mesurable) → Temoignage (dans les mots du client). Une bonne etude de cas genere 5-10 contenus derives.",
    application:
      "Guide le freelance pour transformer ses projets passes en etudes de cas structurees et reutilisables.",
    triggers: ["temoignage", "reference", "portfolio", "cas client", "preuve sociale"],
    personaAffinity: ["Writer", "Strategist"],
    maturityRange: [20, 80],
    weight: 7,
  },
  {
    id: "sto-008",
    category: "storytelling",
    principle:
      "L'ennemi commun unit le freelance et le prospect. Ce n'est pas un concurrent — c'est un probleme systemique. 'Les agences qui facturent 50K pour un site WordPress' ou 'L'epoque ou les freelances devaient brader leur expertise' cree une alliance naturelle.",
    application:
      "Identifie l'ennemi commun credible et le tisse dans le narratif de marque sans negativite gratuite.",
    triggers: ["contre", "probleme", "frustration", "ennemi", "combat", "revolution"],
    personaAffinity: ["Writer", "Strategist"],
    maturityRange: [20, 70],
    weight: 6,
  },
  {
    id: "sto-009",
    category: "storytelling",
    principle:
      "Le 'open loop' ou boucle ouverte cree un besoin irresistible de connaitre la suite. Le cerveau deteste l'incompletude. 'J'ai fait une erreur qui m'a coute mon plus gros client... mais qui a triple mon CA l'annee suivante.' L'auditeur DOIT savoir la suite.",
    application:
      "Utilise les open loops dans les objets d'email, les debuts d'articles et les premieres lignes de posts LinkedIn.",
    triggers: ["curiosite", "accrocher", "attention", "hook", "captiver", "intrigue"],
    personaAffinity: ["Writer"],
    maturityRange: [10, 60],
    weight: 7,
  },
  {
    id: "sto-010",
    category: "storytelling",
    principle:
      "Le storytelling visuel : faire VOIR le resultat plutot que le decrire. 'Imaginez ouvrir votre boite mail lundi matin et voir 3 demandes de devis de clients qualifies' est plus puissant que 'obtenez plus de leads'. Le cerveau ne distingue pas l'experience imaginee de l'experience reelle.",
    application:
      "Integre des images mentales sensorielles dans chaque communication pour que le prospect VIVE le resultat promis.",
    triggers: ["imaginez", "visualiser", "concret", "tangible", "reel", "pratique"],
    personaAffinity: ["Writer"],
    maturityRange: [0, 50],
    weight: 6,
  },
  {
    id: "sto-011",
    category: "storytelling",
    principle:
      "Le 3 actes est la structure narrative universelle. Acte 1 : etablir le contexte et le probleme (25% du contenu). Acte 2 : la tension, les obstacles, la decouverte (50%). Acte 3 : la resolution et la transformation (25%). Cette structure fonctionne pour un email, un post, ou une page de vente.",
    application:
      "Structure les contenus longs (pages de vente, emails de nurture) selon le schema en 3 actes.",
    triggers: ["structure", "plan", "organiser", "contenu long", "page de vente", "landing"],
    personaAffinity: ["Writer"],
    maturityRange: [20, 70],
    weight: 6,
  },
  {
    id: "sto-012",
    category: "storytelling",
    principle:
      "Les temoignages dans les mots EXACTS du client sont 3x plus convaincants que les temoignages reformules. La langue naturelle, les hesitations, les expressions familieres — tout cela signale l'authenticite. Ne jamais polir un temoignage au point de le rendre generique.",
    application:
      "Collecte et utilise les verbatims clients sans les rewriter, en conservant le ton et le vocabulaire original.",
    triggers: ["avis", "temoignage", "recommandation", "review", "feedback client"],
    personaAffinity: ["Writer", "Prospector"],
    maturityRange: [20, 80],
    weight: 7,
  },
];
