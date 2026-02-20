/**
 * LAUNCH PLAYBOOKS — Frameworks de lancement de produits et services.
 * Sequences de lancement, pre-launch, post-launch et re-launch pour freelances.
 */
export const LAUNCH_PLAYBOOKS = {
  name: "launch_playbooks",
  description:
    "Playbooks complets pour lancer un produit, un service ou une offre. Couvre le pre-launch, le launch day et le post-launch.",

  product_launch: {
    description:
      "Framework de lancement en 5 phases pour un nouveau produit digital ou service freelance.",
    phases: {
      pre_buzz: {
        timing: "J-30 a J-21",
        objectif:
          "Creer la curiosite et commencer a construire l'anticipation. Le public doit sentir que quelque chose arrive sans savoir exactement quoi.",
        actions: [
          "Teasing sur les reseaux sociaux : indices visuels, questions provocantes, coulisses de creation.",
          "Stories/posts du type 'Je travaille sur quelque chose de different depuis 3 mois...'",
          "Partager le probleme que le produit va resoudre (sans reveler la solution).",
          "Collecter des temoignages early si des beta testeurs existent.",
        ] as const,
        biais_active: "Curiosite — le gap d'information cree le desir d'en savoir plus.",
      },
      waitlist: {
        timing: "J-21 a J-14",
        objectif:
          "Transformer la curiosite en engagement concret. L'inscription sur la waitlist est un micro-engagement qui augmente la probabilite d'achat de 300%.",
        actions: [
          "Creer une landing page de waitlist avec compteur d'inscrits visible.",
          "Offrir un bonus 'early bird' reserve aux inscrits (reduction, bonus, acces prioritaire).",
          "Systeme de parrainage viral : 'Invite 3 amis pour passer devant dans la file.'",
          "Emails de progression : 'Vous etes #234 sur 1200. Lancement dans 14 jours.'",
        ] as const,
        biais_active: "Engagement + rarete — une fois inscrit, le prospect defendra sa decision.",
      },
      pre_launch: {
        timing: "J-14 a J-1",
        objectif:
          "Eduquer et construire l'autorite. Prouver que la solution fonctionne AVANT de la vendre.",
        actions: [
          "Serie de contenu educatif gratuit (3-5 pieces) resolvant des sous-problemes du probleme principal.",
          "Etudes de cas ou resultats de beta testeurs avec chiffres concrets.",
          "Webinaire ou live de pre-lancement montrant le produit en action.",
          "Sequence d'emails de 'warming' : valeur, preuve sociale, anticipation.",
        ] as const,
        biais_active: "Autorite + reciprocite — la valeur gratuite cree l'obligation morale.",
      },
      launch_day: {
        timing: "J0 a J+3",
        objectif:
          "Convertir l'anticipation en ventes. Le jour J est le pic d'attention — chaque minute compte.",
        actions: [
          "Email de lancement a toute la liste a l'heure optimale (9h-10h en semaine).",
          "Posts coordonnes sur tous les canaux dans les 2 premieres heures.",
          "Activation des launch partners (influenceurs, partenaires, ambassadeurs).",
          "Offre de lancement a duree limitee (48-72h max) avec compteur.",
          "Live de Q&A le soir du jour J pour convertir les hesitants.",
        ] as const,
        biais_active: "Rarete + urgence + conformite sociale — tout le monde achete, le temps presse.",
      },
      post_launch: {
        timing: "J+3 a J+14",
        objectif:
          "Capitaliser sur le momentum avec la preuve sociale et convertir les retardataires.",
        actions: [
          "Publier les premiers temoignages et resultats des acheteurs du jour J.",
          "Sequence de relance pour les non-acheteurs : preuve sociale, urgence, FAQ.",
          "Contenu 'behind the scenes' du lancement (chiffres, lecons, surprises).",
          "Onboarding optimise pour les acheteurs (premier quick win en 48h).",
          "Retrospective : qu'est-ce qui a fonctionne, qu'est-ce qui doit etre ajuste ?",
        ] as const,
        biais_active: "Conformite sociale — les premiers acheteurs valident la decision pour les suivants.",
      },
    },
  },

  service_launch: {
    description:
      "Framework adapte au lancement d'une nouvelle offre de service freelance (pas un produit digital).",
    etapes: [
      "Valider la demande : 10 conversations avec des prospects cibles avant de construire quoi que ce soit.",
      "Offre pilote : proposer le service a 3-5 clients a tarif reduit (-30%) en echange de temoignages detailles.",
      "Documenter les resultats : avant/apres, chiffres, processus, timeline reelle.",
      "Creer la page de vente avec les preuves des pilotes.",
      "Annoncer officiellement avec une offre de lancement limitee dans le temps.",
      "Sequence de nurturing pour les prospects qui n'ont pas converti au lancement.",
    ] as const,
    avantage:
      "Un service valide par des clients pilotes se vend presque tout seul — la preuve sociale fait le travail de persuasion.",
  },

  re_launch_framework: {
    description:
      "Framework pour relancer un produit ou service existant avec un angle neuf.",
    declencheurs: [
      "Nouvelle fonctionnalite majeure ou refonte significative.",
      "Changement de positionnement ou de cible.",
      "Accumulation de nouvelles preuves sociales (temoignages, resultats).",
      "Evenement saisonnier ou contextuel (debut d'annee, rentree, fin de trimestre).",
      "Atteinte d'un milestone (100 clients, 1 an, certification).",
    ] as const,
    strategie:
      "Meme produit, nouveau message. Le re-launch ne necessite pas de modifier le produit — il suffit de le presenter sous un angle different a une audience qui ne l'a pas encore vu ou qui l'avait oublie.",
    execution: [
      "Identifier le nouvel angle (nouveau benefice, nouveau cas d'usage, nouveau temoignage).",
      "Creer du contenu frais qui presente cet angle (article, video, case study).",
      "Re-engager la liste email avec la 'nouvelle version' ou le 'nouveau resultat'.",
      "Offrir un incentive limite dans le temps pour les anciens prospects.",
    ] as const,
    roi_estime:
      "Un re-launch bien execute genere 50-70% du CA du lancement initial avec 20% de l'effort. Le ROI est maximal car le produit existe deja.",
  },

  launch_metrics: {
    description: "KPIs a tracker pour chaque phase du lancement.",
    pre_launch: [
      "Nombre d'inscrits a la waitlist",
      "Taux de croissance de la waitlist (par jour/semaine)",
      "Taux de referral (combien d'inscrits viennent du parrainage)",
      "Taux d'ouverture des emails de pre-launch",
    ] as const,
    launch_day: [
      "Nombre de ventes dans les premieres 24h",
      "CA genere le jour J",
      "Taux de conversion waitlist → achat",
      "Sources de trafic dominantes",
    ] as const,
    post_launch: [
      "CA total de la periode de lancement",
      "Nombre de temoignages collectes",
      "Taux de remboursement/annulation",
      "NPS des premiers acheteurs",
      "Ratio CA lancement / effort investi",
    ] as const,
  },
} as const;
