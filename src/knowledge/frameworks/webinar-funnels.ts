/**
 * WEBINAR FUNNELS — Funnels de conversion bases sur les webinaires.
 * De l'inscription a la vente, en passant par le live et le replay.
 */
export const WEBINAR_FUNNELS = {
  name: "webinar_funnels",
  description:
    "Frameworks complets pour les funnels de conversion bases sur les webinaires, du teasing a la conversion post-replay.",

  registration_funnel: {
    description:
      "Maximiser le nombre d'inscrits avec un funnel d'inscription optimise.",
    landing_page: {
      elements_critiques: [
        "Titre suivant la formule : [Resultat desire] + [Methode/Delai] + [Sans obstacle redoute].",
        "Sous-titre precisant les 3 apprentissages cles du webinaire.",
        "Preuve sociale : nombre d'inscrits en temps reel, temoignages de participants precedents.",
        "Photo et bio courte du speaker orientee resultats, pas CV.",
        "Formulaire court : prenom + email. Chaque champ supplementaire reduit les inscriptions de 10%.",
        "Urgence : 'Places limitees' ou 'Bonus pour les 100 premiers inscrits'.",
        "Date et heure claires avec conversion au fuseau horaire du visiteur.",
      ] as const,
      taux_conversion_cible:
        "Landing page optimisee : 30-50% de conversion. En dessous de 20%, le titre ou l'offre doit etre revu.",
    },
    sources_trafic: {
      organique: [
        "Post LinkedIn detaillant le probleme que le webinaire resout (pas le webinaire lui-meme).",
        "Serie de 3-5 contenus educatifs courts qui creent le besoin de la solution complete.",
        "Email a la liste existante avec un angle 'exclusivite' ou 'premiere'.",
        "Story Instagram/LinkedIn avec sondage sur le sujet du webinaire.",
      ] as const,
      payant: [
        "Facebook/Instagram Ads ciblees sur l'audience lookalike des clients existants.",
        "LinkedIn Ads pour le B2B avec ciblage par fonction et secteur.",
        "Retargeting sur les visiteurs du site qui n'ont pas encore converti.",
      ] as const,
    },
  },

  reminder_sequence: {
    description:
      "Sequence de rappels pour maximiser le taux de presence (objectif : 45-55% des inscrits).",
    emails: [
      {
        timing: "Immediatement apres inscription",
        objet: "Confirmation + ajout au calendrier",
        contenu:
          "Recap de ce que le participant va apprendre, lien calendrier (.ics), et un contenu de valeur a consulter avant le webinaire ('Preparez-vous avec cette ressource').",
      },
      {
        timing: "J-7 (si inscription anticipee)",
        objet: "Teasing de contenu",
        contenu:
          "Partage d'un insight ou une statistique surprenante qui sera developpee pendant le webinaire. Cree l'anticipation.",
      },
      {
        timing: "J-1",
        objet: "Rappel + urgence",
        contenu:
          "Rappel de la date et de l'heure. Mention du bonus reserve aux presents en direct. 'Les replays ne garantissent pas le meme niveau d'interaction.'",
      },
      {
        timing: "H-2",
        objet: "C'est bientot",
        contenu:
          "Email court : lien de connexion, rappel du sujet, teaser du contenu le plus impactant. 'Dans 2h, vous allez decouvrir pourquoi 87% des freelances...'",
      },
      {
        timing: "H0 (debut du live)",
        objet: "C'est en direct maintenant",
        contenu:
          "Lien direct. Sujet court et percutant. 'On demarre. Rejoignez-nous maintenant.'",
      },
    ] as const,
    sms_optionnel:
      "Un SMS 15 min avant le debut augmente le show rate de 10-15%. Utiliser avec parcimonie — reservez aux webinaires a fort enjeu.",
  },

  live_structure: {
    description:
      "Structure du webinaire en direct optimisee pour la conversion (ratio 40/40/20).",
    phases: {
      ouverture: {
        duree: "5 minutes",
        contenu: [
          "Accueil chaleureux et remerciement pour la presence.",
          "Promesse claire : 'A la fin de cette session, vous saurez exactement [resultat concret].'",
          "Cadrage : duree, format, quand poser les questions.",
          "Micro-engagement : 'Tapez [mot] dans le chat si [situation commune].'",
        ] as const,
      },
      valeur_pure: {
        duree: "20-25 minutes (40% du temps)",
        contenu: [
          "Enseignement reel et actionnable — pas de teasing vide.",
          "3 points cles maximum, bien structures et illustres.",
          "Chaque point doit etre utilisable immediatement apres le webinaire.",
          "Interactions regulieres : sondages, questions au chat, exercices rapides.",
        ] as const,
      },
      demonstration: {
        duree: "20-25 minutes (40% du temps)",
        contenu: [
          "Cas concrets et temoignages clients avec chiffres.",
          "Demo en direct du processus ou de l'outil si pertinent.",
          "Avant/apres de clients reels (anonymises si necessaire).",
          "Transition naturelle : 'Maintenant, comment obtenir ces resultats pour vous...'",
        ] as const,
      },
      offre: {
        duree: "10-15 minutes (20% du temps)",
        contenu: [
          "Presentation de l'offre comme la suite logique de l'enseignement.",
          "Recapitulatif de la valeur : tout ce qui est inclus, pas juste le prix.",
          "Bonus limites dans le temps pour les participants en direct.",
          "Urgence : 'Cette offre expire dans 48h' ou 'Seulement X places disponibles.'",
          "CTA clair et repete : lien dans le chat, bouton visible.",
        ] as const,
      },
      qa: {
        duree: "10-15 minutes",
        contenu: [
          "Repondre aux questions reelles en liant chaque reponse a la valeur de l'offre.",
          "Planter des questions strategiques si necessaire : 'On me demande souvent si...'",
          "Dernier rappel de l'offre et de la deadline apres le Q&A.",
        ] as const,
      },
    },
  },

  post_webinar_funnel: {
    description:
      "Sequence de suivi post-webinaire pour convertir les indecis. 60% des conversions arrivent apres le live.",
    sequence: [
      {
        timing: "H+1 apres le live",
        segment: "Tous les inscrits",
        contenu:
          "Email avec le replay + recap des 3 points cles + lien vers l'offre. Pour les presents : 'Merci d'avoir ete la.' Pour les absents : 'Vous avez manque quelque chose d'important.'",
      },
      {
        timing: "H+24",
        segment: "Tous les inscrits",
        contenu:
          "Temoignage client + rappel de l'offre. Focus sur la transformation, pas les features. 'Voici ce que [prenom] a obtenu en [delai]...'",
      },
      {
        timing: "H+48",
        segment: "Non-acheteurs uniquement",
        contenu:
          "Email d'urgence : l'offre expire bientot. FAQ des objections courantes. 'Si vous hesitez encore, voici les 3 questions les plus frequentes...'",
      },
      {
        timing: "H+72",
        segment: "Non-acheteurs uniquement",
        contenu:
          "Dernier rappel. Angle perte : 'Derniere chance avant que l'offre disparaisse.' Rappel du cout de l'inaction vs cout de l'investissement.",
      },
    ] as const,
    replay_strategie:
      "Le replay doit etre disponible pour une duree limitee (48-72h). Un replay 'disponible indefiniment' n'est jamais regarde. La rarete force l'action.",
  },

  evergreen_automation: {
    description:
      "Transformer un webinaire live en machine de conversion automatisee evergreen.",
    prerequis: [
      "Avoir fait au moins 3 sessions live pour optimiser le contenu et le taux de conversion.",
      "Taux de conversion live valide (minimum 5-8% des presents).",
      "Sequence email post-webinaire testee et optimisee.",
    ] as const,
    mise_en_place: [
      "Enregistrer la meilleure version du live (ou re-enregistrer en studio).",
      "Editer le replay : couper les temps morts, ajouter des chapitres, inserer des CTAs.",
      "Configurer un systeme de 'faux live' ou 'just-in-time' (le prochain creneau demarre dans 15 min).",
      "Automatiser la sequence de rappels et de suivi post-webinaire.",
      "Tester et optimiser en continu : landing page, emails, offre.",
    ] as const,
    metriques:
      "Taux d'inscription, show rate (meme pour l'evergreen), taux de visionnage du replay, taux de conversion, CA par inscription.",
  },
} as const;
