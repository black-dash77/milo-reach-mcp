/**
 * FRAMEWORK: Competitive Maps
 * Blue Ocean canvas + positioning map methodology for freelancers.
 */
export const COMPETITIVE_MAPS = {
  id: "competitive-maps",
  name: "Cartographie Concurrentielle",
  description: "Blue Ocean Canvas + carte de positionnement + methodologie d'analyse concurrentielle",

  blueOceanCanvas: {
    name: "Canvas ERRC (Eliminer-Reduire-Renforcer-Creer)",
    description: "Framework pour creer un espace de marche non conteste en redefinissant les facteurs de competition",
    axes: [
      {
        action: "Eliminer",
        question: "Quels facteurs acceptes par le secteur doivent etre elimines ?",
        examples: [
          "Les appels de decouverte de 60 min (remplacer par un audit video asynchrone de 15 min)",
          "Les devis de 10 pages (remplacer par une proposition d'une page)",
          "Les rapports mensuels PDF que personne ne lit",
          "Les reunions de suivi hebdomadaires (remplacer par un dashboard en temps reel)",
        ],
        impact: "Reduit les couts et la complexite, differencie immediatement",
      },
      {
        action: "Reduire",
        question: "Quels facteurs doivent etre reduits en dessous du standard du secteur ?",
        examples: [
          "Le temps entre premier contact et debut du projet (de 4 semaines a 1 semaine)",
          "Le nombre d'options dans les devis (3 options max au lieu de sur-mesure illimite)",
          "La dependance aux plateformes freelance (reduire sans eliminer completement)",
          "Le temps de communication par rapport au temps de production",
        ],
        impact: "Optimise le ratio valeur/effort",
      },
      {
        action: "Renforcer",
        question: "Quels facteurs doivent etre augmentes au-dessus du standard du secteur ?",
        examples: [
          "La transparence du process (dashboard client en temps reel)",
          "La rapidite de livraison (engagement sur des delais precis avec penalite)",
          "La qualite du support post-projet (suivi proactif a J+30, J+90, J+180)",
          "La profondeur du diagnostic initial (audit gratuit plus detaille que ce que les concurrents facturent)",
        ],
        impact: "Cree un avantage competitif tangible et communicable",
      },
      {
        action: "Creer",
        question: "Quels facteurs jamais offerts par le secteur doivent etre crees ?",
        examples: [
          "Garantie de resultat (rembourse si l'objectif n'est pas atteint)",
          "Formation incluse pour rendre le client autonome apres le projet",
          "Communaute exclusive de clients pour le networking croise",
          "Audit concurrent gratuit avant chaque projet (pour prouver la valeur)",
          "SLA de temps de reponse (reponse sous 4h garanti)",
        ],
        impact: "Cree une categorie propre ou la concurrence est irrelevante",
      },
    ],
    process: [
      {
        step: 1,
        action: "Lister les 8-12 facteurs de competition de ton secteur",
        description: "Prix, qualite, rapidite, specialisation, suivi, flexibilite, garantie, portfolio, communication, etc.",
      },
      {
        step: 2,
        action: "Noter chaque facteur sur une echelle de 1-10 pour toi et tes 3 principaux concurrents",
        description: "Cree un tableau comparatif objectif base sur des observations reelles, pas des suppositions.",
      },
      {
        step: 3,
        action: "Dessiner la courbe de valeur",
        description: "Graphique en radar ou en ligne montrant les scores de chaque acteur par facteur. La ou les courbes se chevauchent = Red Ocean (guerre des prix).",
      },
      {
        step: 4,
        action: "Appliquer le canvas ERRC",
        description: "Pour chaque facteur, decider si tu dois l'eliminer, le reduire, le renforcer ou creer quelque chose de nouveau.",
      },
      {
        step: 5,
        action: "Dessiner ta nouvelle courbe de valeur",
        description: "La nouvelle courbe doit avoir une forme DIFFERENTE de celles des concurrents. Si elle est parallele, tu n'es pas en Blue Ocean.",
      },
    ],
  },

  positioningMap: {
    name: "Carte de Positionnement a 2 Axes",
    description: "Visualisation du paysage concurrentiel sur 2 dimensions strategiques",
    axesPossibles: [
      {
        paire: ["Prix", "Specialisation"],
        insight: "Revele si le marche offre de la place pour un specialiste premium ou un generaliste accessible",
        bestFor: "Freelances en phase de repositionnement",
      },
      {
        paire: ["Volume/Equipe", "Personnalisation"],
        insight: "Montre le spectre agence (volume, process) vs artisan (personnalise, sur-mesure)",
        bestFor: "Freelances qui veulent se differencier des agences",
      },
      {
        paire: ["Execution", "Strategie"],
        insight: "Positionne les acteurs sur un axe 'mains' (executants) vs 'cerveaux' (strategistes)",
        bestFor: "Freelances qui veulent monter en valeur (de l'execution vers la strategie)",
      },
      {
        paire: ["Local/Proximity", "Digital/Remote"],
        insight: "Revele les opportunites geographiques non exploitees",
        bestFor: "Freelances dans des marches a forte composante locale (Suisse romande, etc.)",
      },
      {
        paire: ["Experience/Track Record", "Innovation/Approche Nouvelle"],
        insight: "Montre si le marche valorise l'experience ou la nouveaute",
        bestFor: "Freelances juniors cherchant a se positionner face a des seniors",
      },
    ],
    process: [
      {
        step: 1,
        action: "Choisir les 2 axes les plus strategiques pour ton marche",
        tip: "Les axes doivent etre importants pour le CLIENT, pas pour toi. Demande a tes clients ce qu'ils comparent.",
      },
      {
        step: 2,
        action: "Lister 5-7 concurrents et les positionner sur la carte",
        tip: "Inclure des concurrents indirects (agences, outils SaaS, formations DIY) pour une vue complete.",
      },
      {
        step: 3,
        action: "Identifier les zones vides",
        tip: "Un espace vide n'est pas toujours une opportunite — il peut etre vide parce que personne ne le veut. Valide avec 5-10 prospects reels.",
      },
      {
        step: 4,
        action: "Te positionner dans l'espace le plus prometteur",
        tip: "Le meilleur espace est celui qui est : (1) desire par ton ICP, (2) credible pour toi, (3) defensible contre les imitateurs.",
      },
    ],
  },

  competitorAnalysisTemplate: {
    name: "Template d'Analyse Concurrentielle",
    dimensions: [
      {
        dimension: "Positionnement",
        questions: [
          "Quelle est leur promesse principale (headline du site) ?",
          "Quelle est leur specialisation affichee ?",
          "Quels secteurs/profils ciblent-ils ?",
        ],
      },
      {
        dimension: "Offre",
        questions: [
          "Quels services/produits proposent-ils ?",
          "Comment structurent-ils leurs offres (packages, sur-mesure, retainer) ?",
          "Quels sont leurs prix affichés (si visibles) ?",
        ],
      },
      {
        dimension: "Communication",
        questions: [
          "Sur quels canaux sont-ils actifs ?",
          "Quelle est leur frequence de publication ?",
          "Quel est leur ton (expert, accessible, provocant, institutionnel) ?",
        ],
      },
      {
        dimension: "Preuve Sociale",
        questions: [
          "Combien de temoignages/etudes de cas affichent-ils ?",
          "Quels logos clients mettent-ils en avant ?",
          "Quelle est leur reputation sur les plateformes d'avis ?",
        ],
      },
      {
        dimension: "Forces",
        questions: [
          "Qu'est-ce qu'ils font mieux que toi objectivement ?",
          "Quel est leur avantage concurrentiel principal ?",
          "Pourquoi un client les choisirait plutot que toi ?",
        ],
      },
      {
        dimension: "Faiblesses",
        questions: [
          "Quels sont les plaintes recurrentes dans leurs avis ?",
          "Qu'est-ce qu'ils ne font pas du tout ?",
          "Ou leur communication est-elle faible ou absente ?",
        ],
      },
    ],
    reviewFrequency: "Analyse complete trimestrielle, veille continue hebdomadaire",
  },

  strategicGroupMapping: {
    name: "Cartographie des Groupes Strategiques",
    description: "Regrouper les concurrents par strategie similaire pour identifier les mouvements possibles",
    typicalGroups: [
      {
        group: "Premium/Boutique",
        characteristics: "Prix eleve, forte specialisation, peu de clients, relation proche, marque personnelle forte",
        examples: "Consultant senior, expert reconnu dans une niche",
        margins: "Elevees (60-80%)",
      },
      {
        group: "Generaliste/Volume",
        characteristics: "Prix moyen, large spectre de services, beaucoup de clients, process standardise",
        examples: "Freelance polyvalent, petite agence",
        margins: "Moyennes (30-50%)",
      },
      {
        group: "Low-cost/Platforme",
        characteristics: "Prix bas, competition par le volume, dependance aux plateformes, peu de differenciation",
        examples: "Freelance sur Upwork/Fiverr, debutant",
        margins: "Faibles (10-30%)",
      },
      {
        group: "Innovation/Disrupteur",
        characteristics: "Modele nouveau, pricing atypique, approche non conventionnelle, communication audacieuse",
        examples: "Freelance productise, modele d'abonnement, garantie de resultat",
        margins: "Variables (potentiellement tres elevees si valide)",
      },
    ],
    movementStrategy: {
      description: "Le mouvement strategique le plus rentable est de passer d'un groupe sature a un groupe moins sature",
      commonMoves: [
        {
          from: "Generaliste/Volume",
          to: "Premium/Boutique",
          how: "Specialiser progressivement, augmenter les prix, reduire le nombre de clients, investir dans la marque personnelle",
          duration: "12-24 mois",
          risk: "Moyen — perte de revenus temporaire pendant la transition",
        },
        {
          from: "Low-cost/Platforme",
          to: "Generaliste/Volume",
          how: "Construire un site propre, creer du contenu, developper un reseau direct, augmenter les prix de 50%",
          duration: "6-12 mois",
          risk: "Faible — peu a perdre",
        },
        {
          from: "Generaliste/Volume",
          to: "Innovation/Disrupteur",
          how: "Productiser un service, creer un modele d'abonnement, lancer un produit digital, adopter un pricing novateur",
          duration: "6-18 mois",
          risk: "Eleve — necessite de tester et iterer",
        },
      ],
    },
  },
} as const;
