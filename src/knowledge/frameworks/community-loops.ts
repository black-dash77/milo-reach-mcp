/**
 * COMMUNITY LOOPS — Boucles d'engagement et de croissance communautaire.
 * Flywheels, rituels, gamification et pipelines communaute-client.
 */
export const COMMUNITY_LOOPS = {
  name: "community_loops",
  description:
    "Frameworks pour construire, engager et monetiser une communaute. Boucles de croissance, rituels d'engagement et conversion communaute-client.",

  growth_flywheel: {
    description:
      "Le flywheel communautaire — la boucle auto-renforcante qui fait croitre une communaute sans effort constant du fondateur.",
    boucle: [
      "Contenu de qualite attire de nouveaux membres (decouverte).",
      "Nouveaux membres posent des questions et lancent des discussions (engagement).",
      "Discussions generent du contenu organique cree par les membres (UGC).",
      "UGC attire plus de visiteurs via le SEO et le partage social (decouverte).",
      "Le cycle se repete et s'accelere a chaque iteration.",
    ] as const,
    amorcer_le_flywheel:
      "Les 30 premiers jours, le fondateur cree 100% du contenu et de l'engagement. Du jour 30 au jour 90, objectif : 50% du contenu vient des membres. Apres 90 jours, 80% du contenu doit etre genere par la communaute. Si ce ratio n'est pas atteint, le modele communautaire n'est peut-etre pas viable.",
    metriques: [
      "Ratio contenu fondateur vs contenu membres (objectif : <20% fondateur apres 90j)",
      "Taux de retention mensuel (objectif : >70% a M+3)",
      "Nombre de discussions initiees par des membres (objectif : >5/semaine)",
      "Taux de conversion visiteur → membre (objectif : >15%)",
    ] as const,
  },

  engagement_rituals: {
    description:
      "Les rituels creent l'habitude. Une communaute sans rituels est un groupe Facebook mort.",
    quotidiens: [
      "Prompt du jour : une question ou un defi quotidien qui invite a la participation. Poste a heure fixe (8h-9h) pour creer l'habitude.",
      "Win du jour : espace dedie ou les membres partagent leurs victoires (meme petites). Celebrer les wins renforce l'engagement.",
    ] as const,
    hebdomadaires: [
      "Live hebdomadaire : creneau fixe (ex: mardi 12h) pour un contenu educatif ou un Q&A. La regularite cree le rendez-vous.",
      "Hot seat : un membre presente son probleme, la communaute aide a resoudre. Cree de la valeur et de la connexion.",
      "Recap de la semaine : les meilleures contributions, les discussions les plus actives, les wins notables.",
    ] as const,
    mensuels: [
      "Defi mensuel : objectif mesurable sur 30 jours. Le defi cree l'urgence et la camaraderie.",
      "Masterclass invite : un expert externe apporte une perspective nouvelle et attire du trafic frais.",
      "Bilan et celebration : retrospective des accomplissements du mois avec mise en avant des membres les plus actifs.",
    ] as const,
  },

  membership_tiers: {
    description:
      "Structure de monetisation en 3 niveaux pour maximiser la valeur tout en gardant l'accessibilite.",
    gratuit: {
      acces:
        "Contenu public, discussions generales, acces au prompt du jour.",
      objectif:
        "Demontrer la valeur de la communaute. Le gratuit est la vitrine — il doit etre assez bon pour impressionner mais pas assez pour satisfaire completement.",
      conversion_attendue: "5-8% convertissent vers le tier payant dans les 60 premiers jours.",
    },
    standard: {
      prix_indicatif: "29-79 CHF/mois selon la niche",
      acces:
        "Tout le contenu, toutes les discussions, lives hebdomadaires, ressources exclusives, acces aux replays, defis mensuels.",
      objectif:
        "La majorite des membres payants. Le coeur de la communaute. La valeur doit etre tellement evidente que le prix semble derisoire.",
      retention_cible: "Retention mensuelle >85%. En dessous, la valeur percue est insuffisante.",
    },
    premium: {
      prix_indicatif: "199-499 CHF/mois selon la niche",
      acces:
        "Acces direct au fondateur (canal prive, coaching de groupe), sessions 1:1 mensuelles, contenu ultra-exclusif, acces anticipe a tout nouveau produit.",
      objectif:
        "Les membres les plus engages qui veulent l'acces maximum. 5-10% du tier standard convertit vers le premium.",
      valeur_cle:
        "Le premium se vend sur l'acces, pas sur le contenu. L'acces direct au fondateur est le differenciateur irreplacable.",
    },
  },

  onboarding_sequence: {
    description:
      "Les 7 premiers jours determinent si un membre reste ou part. 90% des membres inactifs apres J7 ne reviendront jamais.",
    jour_1: {
      objectif: "Accueil et orientation",
      actions: [
        "Message de bienvenue personnalise (automatise mais avec le prenom).",
        "Guide de demarrage : les 3 choses a faire en premier.",
        "Invitation a se presenter dans le canal dedie.",
      ] as const,
    },
    jour_2_3: {
      objectif: "Connexion avec les pairs",
      actions: [
        "Assigner un 'buddy' — un membre existant qui accueille le nouveau.",
        "Inviter a reagir a 2-3 discussions existantes.",
        "Partager les 3 contenus les plus populaires de la communaute.",
      ] as const,
    },
    jour_4_5: {
      objectif: "Premiere contribution",
      actions: [
        "Prompt incitatif : 'Partagez votre plus gros defi actuel sur [sujet].'",
        "Inviter a participer au defi en cours ou au prochain live.",
        "Email automatise : 'Voici ce que vous avez manque cette semaine.'",
      ] as const,
    },
    jour_6_7: {
      objectif: "Celebration et ancrage",
      actions: [
        "Celebrer publiquement la premiere contribution du nouveau membre.",
        "Check-in par message prive : 'Comment trouvez-vous la communaute ?'",
        "Presenter les ressources premium ou le prochain evenement.",
      ] as const,
    },
  },

  community_to_client_pipeline: {
    description:
      "Le pipeline en 4 etapes qui transforme un membre de communaute en client sans jamais vendre directement.",
    etapes: {
      membre_passif: {
        signal: "Inscrit, consomme du contenu, ne contribue pas encore.",
        action:
          "Valeur constante + onboarding soigne. Ne rien pousser. Laisser la qualite du contenu faire le travail.",
        duree_moyenne: "1-4 semaines",
      },
      participant_actif: {
        signal: "Pose des questions, reagit aux discussions, participe aux lives.",
        action:
          "Repondre avec une valeur exceptionnelle a ses questions. Montrer l'expertise par l'aide desinteressee.",
        duree_moyenne: "4-8 semaines",
      },
      beneficiaire_premium: {
        signal: "A consomme plusieurs ressources, mentionne des resultats obtenus, s'engage regulierement.",
        action:
          "Offrir une ressource exclusive ou un mini-audit gratuit. Creer une dette de reciprocite.",
        duree_moyenne: "2-4 semaines",
      },
      client: {
        signal: "Demande directe ('Tu fais du consulting ?') ou reponse naturelle a une offre.",
        action:
          "Proposer un appel decouverte. Le prospect est deja pre-convaincu par des semaines d'interactions de qualite.",
        taux_conversion: "30-50% (vs 2-5% pour un lead froid classique)",
      },
    },
    regle_dor:
      "Ne jamais pitcher dans la communaute. L'expertise demontre bat l'expertise proclamee. Les leads viendront par message prive quand la confiance sera etablie.",
  },

  platform_selection: {
    description:
      "Guide de selection de la plateforme communautaire en fonction du modele et de l'audience.",
    options: {
      discord: {
        ideal_pour: "Audiences tech, gaming, crypto, et communautes actives en temps reel.",
        avantages: "Gratuit, canaux structures, bots automatisables, vocal integre.",
        limites: "Courbe d'apprentissage, contenu ephemere (difficile a retrouver), peu adapte aux non-tech.",
      },
      slack: {
        ideal_pour: "B2B, professionnels, communautes de pratique metier.",
        avantages: "Familier pour les pros, integrations puissantes, recherche efficace.",
        limites: "Couteux a scale, limite de messages en version gratuite, pas de monetisation native.",
      },
      circle: {
        ideal_pour: "Communautes payantes, membership, cours en ligne + communaute.",
        avantages: "Monetisation integree, espaces structures, gamification, branding personnalisable.",
        limites: "Payant, dependance a la plateforme, moins d'integrations que Slack.",
      },
      groupe_prive: {
        ideal_pour: "Audiences non-tech, B2C, communautes debutantes.",
        avantages: "Audience deja presente sur la plateforme, zero friction d'inscription, algorithme de distribution.",
        limites: "Pas de monetisation native, dependance a l'algorithme, controle limite sur les donnees.",
      },
    },
    critere_decision:
      "Choisir la plateforme ou l'audience cible passe DEJA du temps. Pas la plateforme la plus tendance. Un freelance B2B a tout interet a utiliser Slack ou Circle. Un freelance B2C peut utiliser un groupe Facebook ou Discord.",
  },
} as const;
