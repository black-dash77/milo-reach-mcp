import type { BrainAtom } from "./types.js";

/**
 * ANALYTICS DEEP — 12 atoms on advanced analytics frameworks.
 * Attribution, cohort analysis, LTV, forecasting, and data storytelling.
 */
export const ANALYTICS_DEEP_ATOMS: BrainAtom[] = [
  {
    id: "ad-001",
    category: "analytics_deep",
    principle:
      "L'attribution pour freelances n'a pas besoin d'etre complexe. Le modele simple : first-touch (comment le lead t'a decouvert) + last-touch (ce qui a declenche la conversion). 90% de la valeur analytique vient de ces 2 points. Demande systematiquement 'Comment avez-vous entendu parler de moi ?' en premier contact — cette donnee vaut de l'or.",
    application:
      "Ajoute le champ 'source d'origine' dans le formulaire de contact et pose systematiquement la question en premier appel. Analyse mensuellement.",
    triggers: ["attribution", "source", "comment trouve", "canal", "origine", "tracking"],
    personaAffinity: ["Analyst"],
    maturityRange: [10, 70],
    weight: 9,
  },
  {
    id: "ad-002",
    category: "analytics_deep",
    principle:
      "L'analyse de cohorte revele ce que les moyennes cachent. Segmenter les clients par mois d'acquisition montre l'evolution reelle : est-ce que les clients de janvier sont plus rentables que ceux de mars ? La cohorte revele les tendances saisonnieres, l'impact des changements de strategie, et la qualite reelle de chaque canal d'acquisition.",
    application:
      "Cree un tableau de cohorte mensuel avec CA genere par cohorte a M+3, M+6, M+12 pour detecter les tendances de rentabilite.",
    triggers: ["cohorte", "segmenter", "mensuel", "evolution", "tendance", "qualite clients"],
    personaAffinity: ["Analyst"],
    maturityRange: [30, 100],
    weight: 7,
  },
  {
    id: "ad-003",
    category: "analytics_deep",
    principle:
      "Le calcul LTV pour freelances : LTV = (Valeur moyenne d'un projet × Frequence d'achat annuelle × Duree de relation en annees) - Cout d'acquisition. Un freelance avec un LTV client de 15K CHF peut investir 1500 CHF en acquisition par client et rester tres rentable. Sans connaitre ton LTV, tu investis a l'aveugle.",
    application:
      "Calcule la LTV moyenne de tes 20 derniers clients et utilise-la pour definir un budget d'acquisition client maximum (10-15% de la LTV).",
    triggers: ["ltv", "lifetime value", "valeur client", "rentabilite", "investissement"],
    personaAffinity: ["Analyst", "Strategist"],
    maturityRange: [20, 90],
    weight: 9,
  },
  {
    id: "ad-004",
    category: "analytics_deep",
    principle:
      "Les signaux predictifs de churn pour freelances : absence de communication depuis 30+ jours, diminution de la frequence de projets, questions sur les tarifs (comparaison), demande de 'pause'. Detecter ces signaux 30 jours avant le churn permet d'intervenir — un appel proactif 'Comment ca va ?' au bon moment sauve 40% des clients a risque.",
    application:
      "Configure des alertes sur les signaux de churn (inactivite 30j, baisse de frequence) et declenche un appel proactif de check-in.",
    triggers: ["churn", "perdre client", "inactif", "depart", "retention", "risque"],
    personaAffinity: ["Analyst", "Automator"],
    maturityRange: [20, 90],
    weight: 8,
  },
  {
    id: "ad-005",
    category: "analytics_deep",
    principle:
      "Le revenue forecasting simple : pipeline × probabilite de conversion par stade. Prospect identifie (10%), premier contact (20%), devis envoye (50%), negociation (75%), signe (100%). Un pipeline de 100K CHF avec un mix equilibre = ~35K CHF previsionnel. Sans forecast, tu ne sais pas si tu dois accelerer la prospection ou la production.",
    application:
      "Calcule chaque semaine le CA previsionnel a 30/60/90 jours en multipliant la valeur de chaque deal par sa probabilite de stade.",
    triggers: ["forecast", "prevision", "pipeline", "projections", "revenus", "prediction"],
    personaAffinity: ["Analyst", "Strategist"],
    maturityRange: [20, 80],
    weight: 8,
  },
  {
    id: "ad-006",
    category: "analytics_deep",
    principle:
      "Les indicateurs avances (leading) predisent, les indicateurs retardes (lagging) constatent. CA = lagging, nombre de premiers appels cette semaine = leading. Pour un freelance : les leading indicators critiques sont le nombre de conversations initiees, le taux de reponse aux outreach, et le nombre de devis envoyes. Si ces chiffres baissent aujourd'hui, le CA baisse dans 2 mois.",
    application:
      "Identifie 3 leading indicators specifiques a ton activite et surveille-les hebdomadairement comme systeme d'alerte precoce.",
    triggers: ["indicateur", "leading", "lagging", "predire", "avance", "anticiper"],
    personaAffinity: ["Analyst"],
    maturityRange: [20, 80],
    weight: 8,
  },
  {
    id: "ad-007",
    category: "analytics_deep",
    principle:
      "La significativite statistique en A/B testing : avec moins de 100 conversions par variante, les resultats ne sont pas fiables. Pour un freelance avec peu de trafic, la solution : tester des variations extremes (pas +5% de changement, mais une refonte complete) et accumuler les donnees sur 4-8 semaines. Un test non significatif est pire qu'aucun test — il donne une fausse certitude.",
    application:
      "Ne conclue un A/B test qu'apres avoir atteint 100+ conversions par variante ou un niveau de confiance de 95%. Sinon, prolonge le test.",
    triggers: ["a/b test", "significatif", "statistique", "test", "fiable", "confiance"],
    personaAffinity: ["Analyst"],
    maturityRange: [30, 100],
    weight: 6,
  },
  {
    id: "ad-008",
    category: "analytics_deep",
    principle:
      "Le design de dashboard suit la hierarchie visuelle de l'information : en haut les 3-4 KPIs north star (CA, pipeline, taux conversion, leads ce mois), au milieu les tendances (graphiques temporels), en bas les details (tableaux). Un dashboard surcharge est un dashboard inutile — si tu ne peux pas prendre une decision en 10 secondes de lecture, le dashboard doit etre simplifie.",
    application:
      "Construis un dashboard avec maximum 4 KPIs en headline, 2-3 graphiques de tendance, et un tableau detaille en bas.",
    triggers: ["dashboard", "tableau de bord", "kpi", "visualisation", "metriques", "suivi"],
    personaAffinity: ["Analyst"],
    maturityRange: [20, 80],
    weight: 6,
  },
  {
    id: "ad-009",
    category: "analytics_deep",
    principle:
      "Le data storytelling : les chiffres seuls ne convainquent pas — c'est l'histoire autour des chiffres qui fait agir. Structure : Contexte ('Voici ou nous etions'), Insight ('Voici ce que les donnees revelent'), Action ('Voici ce que nous devons faire'). Un rapport qui dit 'Le taux de conversion a baisse de 15%' n'incite a rien. 'Nous perdons 3 clients par mois a cause du delai de reponse — si on reduit a 2h, on recupere 45K CHF annuels' incite a l'action.",
    application:
      "Presente chaque reporting en suivant le framework CIA : Contexte, Insight (ce que ca signifie), Action recommandee.",
    triggers: ["reporting", "rapport", "data", "presenter", "storytelling", "communiquer"],
    personaAffinity: ["Analyst", "Writer"],
    maturityRange: [20, 80],
    weight: 7,
  },
  {
    id: "ad-010",
    category: "analytics_deep",
    principle:
      "Les sources de benchmarking competitif accessibles a un freelance : SimilarWeb (trafic estimatif), LinkedIn (croissance equipe = croissance business), Glassdoor (salaires = CA proxy), Google Trends (tendances marche), ProductHunt/AppSumo (lancements concurrents). Le benchmarking n'a pas besoin d'etre exact pour etre utile — les ordres de grandeur suffisent pour prendre des decisions strategiques.",
    application:
      "Realise un benchmark trimestriel de 3-5 concurrents avec les outils gratuits disponibles et compare les tendances de croissance.",
    triggers: ["benchmark", "concurrent", "comparaison", "marche", "intelligence", "veille"],
    personaAffinity: ["Analyst", "Strategist"],
    maturityRange: [30, 90],
    weight: 6,
  },
  {
    id: "ad-011",
    category: "analytics_deep",
    principle:
      "Le customer health scoring combine 4 dimensions : engagement (frequence de contact), satisfaction (NPS/feedback), expansion (upsell potential), et risque (signaux de churn). Un score composite de 0-100 permet de prioriser : vert (80+) = upsell opportunity, jaune (50-79) = maintenir, rouge (<50) = intervention urgente. Le scoring transforme la gestion client de reactive en proactive.",
    application:
      "Cree un score de sante client combinant engagement, satisfaction, potentiel d'expansion et signaux de risque. Revise mensuellement.",
    triggers: ["sante client", "scoring", "note", "health", "risque", "priorite"],
    personaAffinity: ["Analyst", "Automator"],
    maturityRange: [30, 100],
    weight: 7,
  },
  {
    id: "ad-012",
    category: "analytics_deep",
    principle:
      "La hierarchie des metriques : 1 North Star Metric (la metrique qui capture le mieux la valeur delivree), 3-5 input metrics (les leviers actionnables qui influencent la NSM), et 10-15 health metrics (les indicateurs de stabilite). Pour un freelance : NSM = revenu mensuel recurrent. Input metrics = leads qualifies/semaine, taux de conversion devis, valeur moyenne par projet. Tout le reste est secondaire.",
    application:
      "Definis ta North Star Metric et les 3-5 input metrics qui l'influencent directement. Concentre 80% de ton attention analytique sur ces metriques.",
    triggers: ["north star", "metrique principale", "kpi", "focus", "priorite", "essentiel"],
    personaAffinity: ["Analyst", "Strategist"],
    maturityRange: [20, 90],
    weight: 9,
  },
];
