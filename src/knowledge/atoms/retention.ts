import type { BrainAtom } from "./types.js";

export const RETENTION_ATOMS: BrainAtom[] = [
  {
    id: "ret-001",
    category: "retention",
    principle:
      "Les 100 premiers jours apres la signature sont critiques. C'est la que le client forme son opinion definitive. Un onboarding structure, des quick wins rapides, et une communication proactive dans cette periode creent un client fidele. L'experience post-achat determine le referral.",
    application:
      "Structure un parcours d'onboarding client en 100 jours avec milestones de communication et de deliverables.",
    triggers: ["onboarding", "debut", "premier jour", "accueil", "demarrer", "lancer"],
    personaAffinity: ["Automator", "Strategist"],
    maturityRange: [30, 80],
    weight: 8,
  },
  {
    id: "ret-002",
    category: "retention",
    principle:
      "Acquerir un nouveau client coute 5 a 7 fois plus cher que retenir un existant. Pourtant, la plupart des freelances investissent 90% de leur energie en acquisition et 10% en retention. Inverser ce ratio quand on a 5+ clients actifs multiplie le ROI global.",
    application:
      "Analyse le ratio acquisition/retention des efforts et propose un reequilibrage si la base client le justifie.",
    triggers: ["fideliser", "garder", "retention", "client existant", "renouveler", "perdre client"],
    personaAffinity: ["Strategist", "Analyst"],
    maturityRange: [30, 90],
    weight: 8,
  },
  {
    id: "ret-003",
    category: "retention",
    principle:
      "L'upsell a un client existant a un taux de conversion de 60-70% (vs 5-20% pour un nouveau prospect). Apres chaque livraison reussie, le client est dans un etat emotionnel ideal pour un upsell — satisfaction + confiance + momentum.",
    application:
      "Identifie le moment optimal post-livraison pour proposer un upsell et propose un message adapte.",
    triggers: ["upsell", "vente complementaire", "plus", "continuer", "etendre", "elargir"],
    personaAffinity: ["Prospector", "Automator"],
    maturityRange: [30, 80],
    weight: 7,
  },
  {
    id: "ret-004",
    category: "retention",
    principle:
      "Le systeme de referral doit etre DEMANDE, pas espere. Le meilleur moment : juste apres un resultat positif ou un feedback enthousiaste. La formule : 'Je suis ravi que ca vous plaise. Est-ce que vous connaissez 2-3 personnes qui pourraient beneficier du meme resultat ?'",
    application:
      "Automatise la demande de referral a des moments strategiques du parcours client.",
    triggers: ["referral", "recommandation", "parrainage", "reseau", "bouche a oreille"],
    personaAffinity: ["Automator", "Prospector"],
    maturityRange: [20, 80],
    weight: 7,
  },
  {
    id: "ret-005",
    category: "retention",
    principle:
      "La surprise positive est le levier de fidelisation le plus sous-cote. Un email de check-in inattendu 3 mois apres la fin du projet, un conseil gratuit spontane, un petit extra non facture — ces micro-investissements generent un ROI massif en loyaute et en referrals.",
    application:
      "Programme des touchpoints de surprise positive dans le parcours post-client (3, 6, 12 mois).",
    triggers: ["surprise", "depasser attentes", "wow", "extra", "bonus", "cadeau"],
    personaAffinity: ["Automator"],
    maturityRange: [20, 70],
    weight: 6,
  },
  {
    id: "ret-006",
    category: "retention",
    principle:
      "Le feedback client est une mine d'or a deux niveaux. Niveau 1 : ameliorer le service (ce qui ne fonctionne pas). Niveau 2 : generer du contenu marketing (verbatims, temoignages, etudes de cas). Chaque feedback est a la fois un diagnostic ET un actif marketing.",
    application:
      "Met en place un systeme de collecte de feedback systematique et une process pour transformer les verbatims en contenus.",
    triggers: ["feedback", "avis", "satisfaction", "ameliorer", "retour", "evaluation"],
    personaAffinity: ["Analyst", "Automator"],
    maturityRange: [20, 70],
    weight: 6,
  },
  {
    id: "ret-007",
    category: "retention",
    principle:
      "La communication proactive anticipe les besoins du client avant qu'il ne les exprime. Un update hebdomadaire sur l'avancement, une alerte sur un risque potentiel, une suggestion d'optimisation — le client qui ne doit jamais demander 'ou en est-on ?' est un client fidele.",
    application:
      "Structure un rythme de communication proactive adapte au type de projet et aux attentes du client.",
    triggers: ["communication", "mise a jour", "suivi", "transparence", "reporting"],
    personaAffinity: ["Automator"],
    maturityRange: [10, 60],
    weight: 7,
  },
  {
    id: "ret-008",
    category: "retention",
    principle:
      "Le 'churn' a des signaux avant-coureurs : baisse de reactivite aux emails, diminution des demandes, reports de reunions, questions sur la facturation. Detecter ces signaux a 30 jours d'avance permet une intervention de sauvetage. Un appel proactif 'comment ca va ?' vaut 10 emails de retention.",
    application:
      "Identifie les signaux de churn dans le comportement client et declenche des alertes precoces.",
    triggers: ["churn", "perte", "desengagement", "insatisfait", "quitter", "arreter"],
    personaAffinity: ["Analyst", "Automator"],
    maturityRange: [30, 90],
    weight: 7,
  },
  {
    id: "ret-009",
    category: "retention",
    principle:
      "Le NPS (Net Promoter Score) simplifie en une question : 'Sur 10, quelle est la probabilite que vous recommandiez mes services ?' 9-10 = promoteurs (demander referral). 7-8 = passifs (comprendre ce qui manque). 0-6 = detracteurs (intervention urgente).",
    application:
      "Met en place une mesure NPS simple post-projet avec des actions automatisees par segment.",
    triggers: ["nps", "satisfaction", "mesurer", "recommander", "note", "score"],
    personaAffinity: ["Analyst", "Automator"],
    maturityRange: [30, 80],
    weight: 6,
  },
  {
    id: "ret-010",
    category: "retention",
    principle:
      "Le client dormant (pas de contact depuis 6+ mois) est un actif inexploite. Un email de reactivation avec un pretexte de valeur ('j'ai pense a vous en voyant [tendance du secteur]') a un taux de reponse 3x superieur a un cold email. L'historique de relation est un avantage enorme.",
    application:
      "Identifie les clients dormants et propose des campagnes de reactivation avec pretexte de valeur personalise.",
    triggers: ["ancien client", "recontacter", "reactivation", "dormant", "inactif"],
    personaAffinity: ["Prospector", "Automator"],
    maturityRange: [30, 80],
    weight: 7,
  },
  {
    id: "ret-011",
    category: "retention",
    principle:
      "Le contrat cadre ou retainer est l'outil de retention le plus puissant. Il transforme une relation transactionnelle en relation de partenariat. Le client a un acces prioritaire, le freelance a de la previsibilite. Le retainer doit inclure des deliverables reguliers ET de la disponibilite conseil.",
    application:
      "Propose la conversion des meilleurs clients projet en clients retainer avec une structure win-win.",
    triggers: ["retainer", "contrat long", "regulier", "mensuel", "abonnement", "partenariat"],
    personaAffinity: ["Strategist"],
    maturityRange: [40, 90],
    weight: 7,
  },
  {
    id: "ret-012",
    category: "retention",
    principle:
      "Le exit interview est la derniere chance de sauver la relation ET d'apprendre. Quand un client part, comprendre POURQUOI est plus precieux que essayer de le retenir. Les raisons de depart revelent les faiblesses systemiques de l'offre, du service ou de la communication.",
    application:
      "Structure un process de fin de mission avec feedback, enseignements et porte ouverte pour le futur.",
    triggers: ["fin de mission", "terminer", "separation", "fin contrat", "au revoir"],
    personaAffinity: ["Strategist"],
    maturityRange: [20, 70],
    weight: 5,
  },
];
