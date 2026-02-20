/**
 * SALES CALL SCRIPTS — Scripts et frameworks pour appels commerciaux et reunions de decouverte.
 * Structures, questions, objections et sequences de suivi pour freelances.
 */
export const SALES_CALL_SCRIPTS = {
  name: "sales_call_scripts",
  description:
    "Scripts et frameworks pour les appels commerciaux, appels decouverte et reunions de vente freelance.",

  discovery_call: {
    structure: [
      "Phase 1 — Ouverture (3 min) : Question de contexte ouverte. Ne jamais pitcher en premier. 'Racontez-moi votre situation actuelle concernant [domaine].'",
      "Phase 2 — Diagnostic SPIN (10 min) : Situation (contexte factuel), Probleme (douleur identifiee), Implication (cout de l'inaction), Need-payoff (valeur de la resolution).",
      "Phase 3 — Reformulation (2 min) : 'Si je comprends bien, votre enjeu principal est [X], et cela vous coute environ [Y] par mois/trimestre. C'est bien ca ?'",
      "Phase 4 — Solution (5 min) : Presenter la solution comme la reponse directe au probleme reformule. Pas plus de 3 points cles.",
      "Phase 5 — Prochaine etape (2 min) : Fixer une date concrete pour le devis et le prochain appel. Ne jamais laisser la suite 'a definir'.",
    ] as const,
    questions: [
      "Quelle est votre situation actuelle concernant [domaine] ?",
      "Qu'est-ce qui vous a pousse a explorer des solutions maintenant ?",
      "Quel serait l'impact si ce probleme n'etait pas resolu dans les 6 prochains mois ?",
      "Si nous resolvions ce probleme, quel resultat concret attendriez-vous ?",
      "Quel est votre processus de decision pour ce type de projet ?",
      "Avez-vous un budget defini ou une fourchette en tete ?",
      "Qui d'autre est implique dans cette decision ?",
      "Quel est votre calendrier ideal pour demarrer ?",
    ] as const,
    closing:
      "Je vous envoie une proposition detaillee [jour] a [heure]. Je bloque un creneau [jour+3] a [heure] pour en discuter ensemble. Ca vous convient ?",
  },

  objection_handling_live: {
    trop_cher: {
      reponse:
        "Je comprends que l'investissement soit un facteur. Si on met de cote le budget un instant — est-ce que cette solution vous semble la bonne pour resoudre votre probleme ?",
      technique: "Isoler l'objection prix pour verifier s'il y a une objection cachee (confiance, timing, decision partagee).",
      relance:
        "Si le prix est le seul frein, explorons ensemble comment adapter le perimetre pour rester dans votre budget tout en resolvant le probleme principal.",
    },
    je_dois_reflechir: {
      reponse:
        "Tout a fait. Pour vous aider a reflechir efficacement — y a-t-il un point specifique sur lequel vous aimeriez plus de clarte ?",
      technique: "Identifier le vrai blocage sous le 'je dois reflechir' — souvent un manque de confiance ou une decision partagee.",
      relance:
        "Je vous propose de fixer un point rapide de 15 min [jour] pour repondre aux questions qui auront emerge entre-temps.",
    },
    pas_le_moment: {
      reponse:
        "Je comprends le timing. Puis-je vous demander — qu'est-ce qui changerait pour que ce soit le bon moment ?",
      technique: "Transformer l'objection de timing en identification du declencheur futur. Creer un rappel contextuel.",
      relance:
        "Je note de vous recontacter dans [delai mentionne]. D'ici la, je vous envoie un contenu qui pourrait deja vous faire avancer sur [sujet].",
    },
    on_a_deja_un_prestataire: {
      reponse:
        "C'est une bonne chose. Qu'est-ce qui fonctionne bien avec votre prestataire actuel ? Et y a-t-il des aspects que vous aimeriez ameliorer ?",
      technique: "Ne jamais critiquer le concurrent. Identifier les frustrations latentes et se positionner sur les manques.",
      relance:
        "Si je peux apporter de la valeur sur [point de frustration identifie], je suis disponible pour un test sans engagement.",
    },
  },

  follow_up_sequence: {
    post_appel_immediat: {
      delai: "5 minutes apres l'appel",
      contenu:
        "Email de recap structuree : 3 points cles discutes, le probleme identifie, la solution proposee, et la prochaine etape avec date fixee.",
      micro_engagement:
        "Inclure une micro-action : 'Pouvez-vous me confirmer [email de facturation / acces au dashboard / brief existant] ?'",
    },
    relance_j2: {
      delai: "48h apres l'appel",
      contenu:
        "Partage d'une ressource de valeur liee au probleme discute (article, etude de cas, outil). Pas de pitch — pure valeur ajoutee.",
    },
    relance_j5: {
      delai: "5 jours apres l'appel",
      contenu:
        "Check-in leger : 'J'ai reflechi a notre echange et j'ai une idee supplementaire concernant [point specifique]. Un moment pour en discuter ?'",
    },
    relance_j10: {
      delai: "10 jours apres l'appel",
      contenu:
        "Derniere relance avec urgence douce : 'Je tenais a revenir vers vous car [raison contextuelle]. Mon planning se remplit — si vous souhaitez avancer, les prochaines disponibilites sont [dates].'",
    },
  },

  pricing_presentation: {
    structure:
      "Toujours presenter le prix APRES avoir ancre la valeur. Jamais en premier.",
    sandwich_method: [
      "Rappel du probleme : 'Vous m'avez dit que ce probleme vous coute [X] par [periode].'",
      "Presentation de la solution : 'Ma solution vous permet de [benefice concret avec chiffre].'",
      "Annonce du prix : 'L'investissement pour ce projet est de [montant].'",
      "Silence : Laisser 5-7 secondes de silence apres l'annonce du prix.",
    ] as const,
    trois_options: {
      description:
        "Presenter 3 options (Essential, Pro, Premium) pour ancrer le prix moyen comme choix naturel. L'option Premium sert d'ancrage haut, l'option Essential sert de plancher. 60-70% des prospects choisissent l'option du milieu.",
      essential: "Perimetre reduit, probleme principal resolu, sans extras.",
      pro: "Perimetre complet, suivi inclus, resultats garantis. C'est l'option recommandee.",
      premium:
        "Tout inclus + accompagnement etendu + priorite + bonus exclusifs.",
    },
  },
} as const;
