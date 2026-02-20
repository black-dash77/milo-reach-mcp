/**
 * ATTRIBUTION MODELS — Frameworks d'attribution marketing.
 * First-touch, last-touch, multi-touch, et modeles hybrides pour freelances.
 */
export const ATTRIBUTION_MODELS = {
  name: "attribution_models",
  description:
    "Modeles d'attribution marketing pour comprendre quels canaux et actions generent reellement des clients. Adapte aux freelances et petites structures.",

  modeles: {
    first_touch: {
      description:
        "100% du credit attribue au premier point de contact. Repond a la question : 'Comment le prospect m'a-t-il decouvert ?'",
      quand_utiliser:
        "Ideal pour comprendre quels canaux attirent de nouveaux prospects dans le pipeline. Utile en phase de croissance quand l'objectif est de maximiser la decouverte.",
      avantages: [
        "Simple a implementer — une seule question : 'Comment avez-vous entendu parler de moi ?'",
        "Aide a identifier les canaux d'awareness les plus performants.",
        "Permet de concentrer le budget sur la generation de nouveaux leads.",
      ] as const,
      limites: [
        "Ignore tout le parcours de nurturing qui a construit la confiance.",
        "Sur-evalue les canaux de decouverte et sous-evalue les canaux de conversion.",
        "Un prospect peut avoir decouvert via un article SEO mais converti grace a un email.",
      ] as const,
      implementation_freelance:
        "Ajouter le champ 'Source d'origine' dans tout formulaire de contact et poser systematiquement la question en premier appel. Creer un tableau de suivi mensuel par source.",
    },

    last_touch: {
      description:
        "100% du credit attribue au dernier point de contact avant la conversion. Repond a la question : 'Qu'est-ce qui a declenche la decision ?'",
      quand_utiliser:
        "Ideal pour comprendre les declencheurs de conversion. Utile quand l'objectif est d'optimiser le taux de conversion des leads existants.",
      avantages: [
        "Simple et directement lie a la conversion.",
        "Aide a identifier les actions qui declenchent le passage a l'acte.",
        "Facile a tracker avec les outils standards (UTM, formulaires).",
      ] as const,
      limites: [
        "Ignore les canaux qui ont cree l'awareness et la confiance.",
        "Risque de couper les investissements en TOFU qui alimentent le pipeline.",
        "Un prospect peut convertir apres un email mais la decision etait deja prise avant.",
      ] as const,
      implementation_freelance:
        "Tracker les UTM sur les liens de conversion (formulaire devis, prise de RDV). Analyser quel contenu, email ou page a precede la conversion.",
    },

    lineaire: {
      description:
        "Credit reparti egalement entre tous les points de contact du parcours. Chaque interaction a le meme poids.",
      quand_utiliser:
        "Utile pour avoir une vue d'ensemble quand tous les points de contact semblent importants. Bon point de depart avant de passer a un modele plus sophistique.",
      avantages: [
        "Equitable — ne favorise aucun canal artificiellement.",
        "Simple a comprendre et a expliquer.",
        "Encourage l'investissement sur l'ensemble du parcours.",
      ] as const,
      limites: [
        "Traite un tweet vu en passant au meme niveau qu'une demo personnalisee.",
        "Ne permet pas de prioriser les investissements par canal.",
        "Peut conduire a un saupoudrage de budget sans impact.",
      ] as const,
    },

    time_decay: {
      description:
        "Plus de credit aux touchpoints proches de la conversion, moins aux touchpoints anciens. Le poids diminue exponentiellement avec le temps.",
      quand_utiliser:
        "Ideal pour les cycles de vente courts (1-4 semaines). Reflete le fait que les actions recentes influencent davantage la decision finale.",
      avantages: [
        "Modele realiste pour les decisions recentes.",
        "Valorise les actions de conversion sans ignorer totalement l'awareness.",
        "Bon compromis entre first-touch et last-touch.",
      ] as const,
      limites: [
        "Sous-evalue les contenus de fond (articles SEO, livres blancs) qui travaillent sur le long terme.",
        "Necessite un tracking temporel precis de chaque interaction.",
        "Moins pertinent pour les cycles de vente longs (>3 mois).",
      ] as const,
    },

    position_based: {
      description:
        "40% du credit au first-touch, 40% au last-touch, 20% repartis entre les touchpoints intermediaires. Aussi appele modele 'en U'.",
      quand_utiliser:
        "Modele recommande pour les freelances avec un cycle de vente de 2-8 semaines et 3+ points de contact. Equilibre entre decouverte et conversion.",
      avantages: [
        "Reconnait l'importance de la decouverte ET de la conversion.",
        "Les touchpoints intermediaires restent visibles sans dominer.",
        "Le plus equilibre pour la plupart des parcours freelance.",
      ] as const,
      limites: [
        "La repartition 40/40/20 est arbitraire — elle peut ne pas refleter la realite de chaque business.",
        "Necessite un tracking multi-touch complet.",
        "Plus complexe a implementer que first/last touch.",
      ] as const,
    },
  },

  implementation_pratique: {
    description:
      "Guide d'implementation progressive de l'attribution pour un freelance.",
    niveau_1: {
      titre: "Attribution basique (semaine 1)",
      actions: [
        "Ajouter 'Comment avez-vous entendu parler de moi ?' dans le formulaire de contact.",
        "Poser la meme question en debut de chaque appel decouverte.",
        "Creer un spreadsheet simple : Lead | Source | Date | Converti (oui/non) | CA.",
        "Analyser mensuellement : quel canal genere le plus de leads ? Le plus de CA ?",
      ] as const,
      outils: "Google Sheets ou Notion + formulaire de contact.",
    },
    niveau_2: {
      titre: "UTM tracking (mois 2-3)",
      actions: [
        "Ajouter des UTM a tous les liens partages (utm_source, utm_medium, utm_campaign).",
        "Configurer Google Analytics pour tracker les conversions par source.",
        "Creer un dashboard mensuel : trafic par source, taux de conversion par source, CA par source.",
      ] as const,
      outils: "Google Analytics + UTM builder + CRM basique.",
    },
    niveau_3: {
      titre: "Multi-touch attribution (mois 4-6)",
      actions: [
        "Tracker les parcours complets : premiere visite → pages vues → formulaire → appel → devis → signature.",
        "Utiliser le modele position-based (40/40/20) pour attribuer la valeur.",
        "Analyser les parcours gagnants vs perdants : quels touchpoints differencient les deux ?",
        "Optimiser les investissements canal par canal en fonction de la contribution reelle.",
      ] as const,
      outils: "CRM avec tracking parcours (HubSpot, Pipedrive) + Analytics.",
    },
  },

  metriques_cles: {
    par_canal: [
      "Nombre de leads generes (volume d'entree).",
      "Cout par lead (CAC par canal).",
      "Taux de conversion lead → client (qualite du canal).",
      "CA moyen par client acquis via ce canal (valeur du canal).",
      "LTV des clients acquis via ce canal (valeur long terme).",
    ] as const,
    globales: [
      "Nombre moyen de touchpoints avant conversion.",
      "Duree moyenne du cycle de vente (de la decouverte a la signature).",
      "Canaux les plus frequents en first-touch vs last-touch.",
      "Parcours type du client ideal (sequence de touchpoints la plus frequente chez les meilleurs clients).",
    ] as const,
    regles:
      "Ne jamais couper un canal sur la base du last-touch seul. Un canal qui genere peu de conversions directes peut etre essentiel dans le parcours multi-touch. Toujours analyser la contribution de chaque canal dans les parcours complets avant de prendre une decision budgetaire.",
  },
} as const;
