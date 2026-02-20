import type { BrainAtom } from "./types.js";

export const POSITIONING_ATOMS: BrainAtom[] = [
  {
    id: "pos-001",
    category: "positioning",
    principle:
      "Un generaliste se bat sur le prix, un specialiste se bat sur la valeur. Le test ultime : peux-tu dire 'Je suis le seul qui...' ? Si non, le positionnement doit etre affine.",
    application:
      "Analyse l'historique des projets pour detecter les patterns caches de specialisation et propose un statement de positionnement en une phrase.",
    triggers: ["positionnement", "niche", "specialisation", "differenciation", "concurrence", "marche"],
    personaAffinity: ["Strategist", "Prospector"],
    maturityRange: [0, 60],
    weight: 9,
  },
  {
    id: "pos-002",
    category: "positioning",
    principle:
      "La meilleure strategie n'est pas de battre la concurrence — c'est de rendre la concurrence irrelevante en creant sa propre categorie. Un 'Developpeur React' est en competition avec 100K devs. Un 'Architecte de plateformes SaaS B2B pour la fintech' est seul.",
    application:
      "Aide a identifier l'intersection unique entre expertise technique, secteur cible et probleme resolu pour creer un positionnement de categorie.",
    triggers: ["categorie", "ocean bleu", "unique", "different", "concurrent", "marche sature"],
    personaAffinity: ["Strategist"],
    maturityRange: [20, 80],
    weight: 8,
  },
  {
    id: "pos-003",
    category: "positioning",
    principle:
      "Le positionnement n'est pas ce que tu fais — c'est ce que le client PERCOIT que tu fais de different. La differenciation perceptuelle compte plus que la differenciation reelle. Si le client ne peut pas expliquer ta difference en 10 secondes, tu n'en as pas.",
    application:
      "Teste le positionnement avec le 'test du diner' : le client peut-il decrire ce que fait le freelance a un ami en une phrase ?",
    triggers: ["perception", "image", "reputation", "comment me presenter", "elevator pitch"],
    personaAffinity: ["Strategist", "Writer"],
    maturityRange: [0, 50],
    weight: 7,
  },
  {
    id: "pos-004",
    category: "positioning",
    principle:
      "La 'Vache Pourpre' de Godin : dans un champ de vaches brunes, seule la vache pourpre attire l'attention. L'ordinaire est invisible. Le freelance doit etre remarquable dans au moins UNE dimension — methode, garantie, format, specialisation, ton.",
    application:
      "Identifie la dimension ou le freelance peut etre remarquable et construis le positionnement autour de cette singularite.",
    triggers: ["remarquable", "visible", "attention", "se demarquer", "sortir du lot", "original"],
    personaAffinity: ["Strategist"],
    maturityRange: [10, 70],
    weight: 7,
  },
  {
    id: "pos-005",
    category: "positioning",
    principle:
      "Le framework de Dunford : le contexte de marche determine la valeur percue. Un meme service presente comme 'conseil en strategie digitale' ou comme 'systeme d'acquisition de clients pour cabinets d'avocats' a une valeur percue radicalement differente.",
    application:
      "Recadre l'offre existante dans un contexte de marche qui maximise la valeur percue aupres de la cible ideale.",
    triggers: ["contexte", "cadrage", "repositionner", "valeur percue", "marche cible"],
    personaAffinity: ["Strategist"],
    maturityRange: [30, 80],
    weight: 8,
  },
  {
    id: "pos-006",
    category: "positioning",
    principle:
      "Le positionnement ideal vit a l'intersection de trois cercles : ce que tu fais mieux que quiconque, ce pour quoi les gens sont prets a payer, et ce qui te passionne assez pour tenir 5 ans.",
    application:
      "Guide le freelance a travers l'exercice des 3 cercles pour trouver son sweet spot de positionnement durable.",
    triggers: ["passion", "expertise", "rentable", "long terme", "motivation", "burnout"],
    personaAffinity: ["Strategist"],
    maturityRange: [0, 40],
    weight: 6,
  },
  {
    id: "pos-007",
    category: "positioning",
    principle:
      "Le 'Zag' de Neumeier : quand tout le monde zig, tu zag. Si tous les concurrents communiquent sur la qualite, communique sur la rapidite. S'ils sont tous serieux, sois accessible. La differenciation la plus simple est souvent de faire l'inverse du consensus.",
    application:
      "Analyse les messages des concurrents directs et identifie l'axe de differenciation contraire le plus credible.",
    triggers: ["differencier", "concurrent", "meme chose", "banal", "comme les autres"],
    personaAffinity: ["Strategist", "Writer"],
    maturityRange: [20, 70],
    weight: 6,
  },
  {
    id: "pos-008",
    category: "positioning",
    principle:
      "Un positionnement trop large attire tout le monde et ne convainc personne. Un positionnement trop etroit exclut trop de monde. La regle : assez precis pour que le client ideal dise 'c'est exactement pour moi', assez large pour avoir un marche viable.",
    application:
      "Evalue la taille du marche adressable et ajuste la precision du positionnement pour equilibrer specialisation et viabilite.",
    triggers: ["trop large", "trop etroit", "niche trop petite", "pas assez de clients", "marche"],
    personaAffinity: ["Strategist", "Analyst"],
    maturityRange: [10, 60],
    weight: 7,
  },
  {
    id: "pos-009",
    category: "positioning",
    principle:
      "Le positionnement se valide par le marche, pas par la reflexion. Tester avec 50 prospects reels vaut mieux que 50 heures de brainstorming. Les signaux : taux de reponse aux emails froids > 5%, questions sur le process/tarifs, et recommandations spontanees.",
    application:
      "Propose un plan de validation rapide du positionnement avec des metriques de succes claires.",
    triggers: ["valider", "tester", "ca marche", "retour", "feedback", "ajuster"],
    personaAffinity: ["Strategist", "Analyst"],
    maturityRange: [20, 60],
    weight: 7,
  },
  {
    id: "pos-010",
    category: "positioning",
    principle:
      "Le 'claim' de positionnement doit etre specifique, mesurable et verifiable. 'Le meilleur designer' est vide. 'J'ai concu 47 interfaces SaaS qui ont augmente le taux de conversion de 30% en moyenne' est incontestable.",
    application:
      "Transforme le positionnement generique en claim specifique base sur les resultats reels du freelance.",
    triggers: ["prouver", "credible", "resultats", "chiffres", "portfolio", "references"],
    personaAffinity: ["Strategist", "Writer"],
    maturityRange: [30, 80],
    weight: 8,
  },
  {
    id: "pos-011",
    category: "positioning",
    principle:
      "Le ICP (Ideal Client Profile) est le miroir du positionnement. Si tu ne peux pas decrire ton client ideal en 5 criteres (secteur, taille, probleme, budget, maturite), ton positionnement est flou.",
    application:
      "Construit un ICP detaille et verifie que le positionnement et les messages s'alignent parfaitement.",
    triggers: ["client ideal", "cible", "icp", "persona", "avatar", "qui cibler"],
    personaAffinity: ["Strategist", "Prospector"],
    maturityRange: [0, 50],
    weight: 8,
  },
  {
    id: "pos-012",
    category: "positioning",
    principle:
      "Un bon positionnement repousse autant qu'il attire. S'il plait a tout le monde, c'est qu'il ne dit rien. Les meilleurs freelances perdent volontairement 70% des prospects pour convertir les 30% restants a un tarif 3x superieur.",
    application:
      "Aide le freelance a assumer un positionnement clivant et a voir les prospects perdus comme un filtre, pas un echec.",
    triggers: ["trop restrictif", "peur de perdre", "tout le monde", "generaliste", "specialiser"],
    personaAffinity: ["Strategist"],
    maturityRange: [10, 60],
    weight: 7,
  },
];
