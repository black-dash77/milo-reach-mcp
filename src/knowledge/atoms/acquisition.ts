import type { BrainAtom } from "./types.js";

export const ACQUISITION_ATOMS: BrainAtom[] = [
  {
    id: "acq-001",
    category: "acquisition",
    principle:
      "Le Dream 100 de Chet Holmes : identifier les 100 prospects ideaux et les travailler en profondeur. 100 prospects bien cibles valent plus que 10K emails froids generiques. La qualite du ciblage determine 80% du resultat de la prospection.",
    application:
      "Aide a construire une liste Dream 100 avec criteres de qualification et plan d'approche personnalise pour chacun.",
    triggers: ["prospection", "trouver clients", "cibler", "liste", "outreach", "cible"],
    personaAffinity: ["Prospector"],
    maturityRange: [10, 60],
    weight: 9,
  },
  {
    id: "acq-002",
    category: "acquisition",
    principle:
      "Les 19 canaux de traction de Weinberg : ne jamais s'enfermer dans un seul canal. Tester 3 canaux en parallele pendant 30 jours, mesurer le CAC et le volume, puis doubler sur le gagnant. Le canal le plus sous-estime par les freelances : le referral systematise.",
    application:
      "Analyse les canaux actuels et propose un plan de test sur 3 canaux avec KPIs et budget.",
    triggers: ["canal", "acquisition", "traction", "diversifier", "source", "d'ou viennent"],
    personaAffinity: ["Strategist"],
    maturityRange: [10, 70],
    weight: 7,
  },
  {
    id: "acq-003",
    category: "acquisition",
    principle:
      "L'education-based selling : enseigner plutot que pitcher. Un article de blog qui resout un vrai probleme attire des prospects qualifies. Un webinaire gratuit qui donne de la valeur cree de la reciprocite. Le prospect qui a appris quelque chose de toi te fait confiance par defaut.",
    application:
      "Propose une strategie de contenu educatif alignee sur les problemes du client ideal du freelance.",
    triggers: ["contenu", "blog", "webinaire", "attirer", "inbound", "eduquer", "pedagogie"],
    personaAffinity: ["Strategist", "Writer"],
    maturityRange: [20, 70],
    weight: 7,
  },
  {
    id: "acq-004",
    category: "acquisition",
    principle:
      "Le funnel TOFU-MOFU-BOFU n'est pas lineaire — c'est un filtre. TOFU : attirer l'attention (contenu, social, ads). MOFU : construire la confiance (email, etudes de cas). BOFU : convertir (proposition, appel). Chaque etage a ses propres metriques et ses propres leviers.",
    application:
      "Diagnostique ou le funnel du freelance 'fuit' le plus et propose des interventions ciblees par etage.",
    triggers: ["funnel", "entonnoir", "parcours", "etape", "pipeline", "conversion"],
    personaAffinity: ["Strategist", "Analyst"],
    maturityRange: [20, 70],
    weight: 7,
  },
  {
    id: "acq-005",
    category: "acquisition",
    principle:
      "Le cold email efficace en 2024+ : ultra-personnalise (recherche visible), court (< 100 mots), une seule question, zero piece jointe. Le meilleur cold email ne ressemble pas a un cold email — il ressemble a un message naturel d'un pair qui a une observation pertinente.",
    application:
      "Redige des cold emails qui passent le test 'est-ce que ca pourrait etre un message LinkedIn naturel'.",
    triggers: ["email froid", "cold email", "premier contact", "prospecter", "approcher"],
    personaAffinity: ["Prospector", "Writer"],
    maturityRange: [10, 60],
    weight: 8,
  },
  {
    id: "acq-006",
    category: "acquisition",
    principle:
      "Le referral est le canal d'acquisition le plus rentable et le plus sous-exploite. Un client satisfait qui recommande a un taux de conversion de 30-50% (vs 1-3% en cold). Le referral doit etre DEMANDE systematiquement et facilite : 'Connaissez-vous 2 personnes qui ont le meme probleme que vous aviez ?'",
    application:
      "Met en place un systeme de referral systematique avec timing (apres un resultat positif), message et incentive.",
    triggers: ["recommandation", "referral", "bouche a oreille", "parrainage", "reseau"],
    personaAffinity: ["Strategist", "Automator"],
    maturityRange: [30, 90],
    weight: 8,
  },
  {
    id: "acq-007",
    category: "acquisition",
    principle:
      "LinkedIn est le canal B2B le plus puissant pour les freelances en 2024. La strategie gagnante : 80% contenu de valeur (posts, articles, commentaires pertinents), 20% promotion subtile. Le profil LinkedIn est une landing page — headline + banner + About = proposition de valeur en 3 secondes.",
    application:
      "Optimise le profil LinkedIn comme un funnel de conversion et propose un calendrier de contenu strategique.",
    triggers: ["linkedin", "reseau social", "profil", "visibilite", "post", "personal branding"],
    personaAffinity: ["Strategist", "Writer"],
    maturityRange: [0, 60],
    weight: 7,
  },
  {
    id: "acq-008",
    category: "acquisition",
    principle:
      "La landing page efficace suit une structure precis : headline (benefice #1) → sous-titre (comment) → preuve sociale → benefices (3 max) → CTA → FAQ/objections. Au-dessus de la ligne de flottaison : headline + CTA. Le visiteur decide en 5 secondes s'il reste.",
    application:
      "Redige ou optimise une landing page en suivant la structure prouvee avec un seul CTA clair.",
    triggers: ["landing page", "page de vente", "site", "conversion", "visiteurs"],
    personaAffinity: ["Writer"],
    maturityRange: [20, 70],
    weight: 7,
  },
  {
    id: "acq-009",
    category: "acquisition",
    principle:
      "Le lead magnet doit resoudre un probleme SPECIFIQUE en < 10 minutes de consommation. Checklist > ebook. Template > guide. Calculateur > webinaire. Le meilleur lead magnet donne un quick win immediat ET cree le besoin du service complet.",
    application:
      "Cree un lead magnet cible qui demontre l'expertise du freelance et alimente naturellement le pipeline.",
    triggers: ["lead magnet", "ressource gratuite", "telecharger", "attirer", "capturer leads"],
    personaAffinity: ["Strategist", "Writer"],
    maturityRange: [20, 60],
    weight: 6,
  },
  {
    id: "acq-010",
    category: "acquisition",
    principle:
      "Le suivi (follow-up) est ou la majorite des deals se gagnent ou se perdent. 80% des ventes necessitent 5 touchpoints minimum. 44% des vendeurs abandonnent apres 1 seul suivi. La persistance polie + valeur a chaque touchpoint = conversion.",
    application:
      "Structure un plan de suivi en 5 touchpoints avec un apport de valeur different a chaque etape.",
    triggers: ["relancer", "suivi", "follow up", "pas de reponse", "silence", "relance"],
    personaAffinity: ["Prospector", "Automator"],
    maturityRange: [10, 60],
    weight: 8,
  },
  {
    id: "acq-011",
    category: "acquisition",
    principle:
      "Les partenariats strategiques sont le multiplicateur d'acquisition le plus sous-estime. Un designer + un developpeur + un copywriter qui se recommandent mutuellement creent un ecosysteme ou chaque client de l'un devient un lead pour les autres.",
    application:
      "Identifie 3-5 partenaires complementaires et propose un systeme de recommandation mutuelle structure.",
    triggers: ["partenariat", "collaboration", "complementaire", "ecosysteme", "alliance"],
    personaAffinity: ["Strategist"],
    maturityRange: [30, 80],
    weight: 6,
  },
  {
    id: "acq-012",
    category: "acquisition",
    principle:
      "Le warm outreach bat le cold outreach 10x. Avant de contacter un prospect froid, chercher le lien : connexion LinkedIn commune, meme evenement, meme communaute. Le message 'on ne se connait pas mais...' est un handicap. 'On s'est croises a [evenement]' est un avantage.",
    application:
      "Avant chaque campagne de prospection, identifie les connexions existantes pour rechauffer les leads froids.",
    triggers: ["warm", "connexion", "commun", "introduction", "reseau", "evenement"],
    personaAffinity: ["Prospector"],
    maturityRange: [10, 60],
    weight: 7,
  },
  {
    id: "acq-013",
    category: "acquisition",
    principle:
      "Un lead enrichi convertit 3x plus vite qu'un lead brut. Premier reflexe sur un lead chaud : enrichir son profil pour personnaliser l'approche. L'information c'est le pouvoir de personnalisation.",
    application:
      "Quand un nouveau lead arrive chaud, lance immediatement l'enrichissement LinkedIn + email avant de rediger le premier message.",
    triggers: ["enrichir", "enrichissement", "linkedin", "profil", "information", "recherche", "prospect", "donnees"],
    personaAffinity: ["Prospector"],
    maturityRange: [0, 100],
    weight: 8,
  },
  {
    id: "acq-014",
    category: "acquisition",
    principle:
      "Le scraping de site concurrent revele leur positionnement, leur pricing et leurs failles. Analyse un concurrent avant de positionner une offre.",
    application:
      "Utilise analyzeCompetitor avant de rediger un pitch ou de positionner un service face a la concurrence.",
    triggers: ["concurrent", "concurrence", "analyse", "comparaison", "positionnement", "benchmark"],
    personaAffinity: ["Strategist", "Prospector"],
    maturityRange: [10, 100],
    weight: 7,
  },
  {
    id: "acq-015",
    category: "acquisition",
    principle:
      "L'email professionnel verifie est la cle d'acces directe au decideur. Un email generique (info@) a 5x moins de chances d'etre lu qu'un email nominatif.",
    application:
      "Trouve toujours l'email pro verifie avant d'envoyer un cold email. Utilise Hunter.io pour ca.",
    triggers: ["email", "trouver email", "cold email", "contact", "joindre", "adresse"],
    personaAffinity: ["Prospector", "Writer"],
    maturityRange: [0, 100],
    weight: 8,
  },
  {
    id: "acq-016",
    category: "acquisition",
    principle:
      "La prospection intelligente cible des criteres precis : industrie + role + taille d'entreprise + localisation. La quantite sans qualite est du bruit.",
    application:
      "Quand on cherche des prospects, toujours definir au moins 3 criteres de ciblage avant de lancer la recherche.",
    triggers: ["prospection", "prospects", "chercher", "trouver", "cibler", "cible", "ICP", "persona"],
    personaAffinity: ["Prospector", "Strategist"],
    maturityRange: [15, 100],
    weight: 7,
  },
  {
    id: "acq-017",
    category: "acquisition",
    principle:
      "Les posts LinkedIn recents d'un lead revelent ses preoccupations actuelles. Mentionner un post recent dans un message d'approche augmente le taux de reponse de 40%.",
    application:
      "Apres enrichissement LinkedIn, lis les posts recents du lead et integre une reference dans le message d'approche.",
    triggers: ["post linkedin", "posts", "activite", "publication", "approche personnalisee"],
    personaAffinity: ["Prospector", "Writer"],
    maturityRange: [10, 100],
    weight: 8,
  },
  {
    id: "acq-018",
    category: "acquisition",
    principle:
      "L'enrichissement batch sur les leads froids est un investissement a faible cout, haut rendement. 100 leads enrichis = 20 opportunites identifiees automatiquement.",
    application:
      "Lance un enrichissement batch sur les leads cold non enrichis une fois par semaine pour identifier les opportunites cachees.",
    triggers: ["batch", "masse", "automatique", "queue", "file", "enrichir tous"],
    personaAffinity: ["Automator", "Prospector"],
    maturityRange: [20, 100],
    weight: 7,
  },
  {
    id: "acq-019",
    category: "acquisition",
    principle:
      "Avant de contacter un lead, enrichis son profil : LinkedIn, entreprise, email verifie. Un message personnalise avec contexte convertit 3x plus qu'un message generique. L'information est le carburant de la personnalisation.",
    application:
      "Lance systematiquement un enrichissement complet (profil + entreprise + email) avant de rediger le premier message d'approche.",
    triggers: ["enrichir", "profil", "personnaliser", "contexte", "avant contact", "preparer"],
    personaAffinity: ["Prospector"],
    maturityRange: [0, 100],
    weight: 8,
  },
  {
    id: "acq-020",
    category: "acquisition",
    principle:
      "Le profil LinkedIn revele les pain points : headline = positionnement actuel, experiences = transitions, posts recents = preoccupations du moment. Chaque section est une mine d'insights pour personnaliser l'approche.",
    application:
      "Analyse le profil LinkedIn complet du lead (headline, experiences, posts) pour identifier les angles d'approche les plus pertinents.",
    triggers: ["linkedin", "profil", "analyser", "insights", "pain point", "headline"],
    personaAffinity: ["Prospector", "Writer"],
    maturityRange: [10, 100],
    weight: 7,
  },
  {
    id: "acq-021",
    category: "acquisition",
    principle:
      "Ne contacte jamais un email non verifie. Un bounce rate > 5% detruit ta delivrabilite pour des semaines. Verifier d'abord, contacter ensuite — c'est un investissement de 2 secondes qui protege ta reputation d'envoyeur.",
    application:
      "Verifie systematiquement chaque email avant envoi. Si le statut est 'risky' ou 'invalid', cherche une alternative.",
    triggers: ["email", "verifier", "bounce", "delivrabilite", "valide", "invalide"],
    personaAffinity: ["Prospector", "Automator"],
    maturityRange: [0, 100],
    weight: 6,
  },
  {
    id: "acq-022",
    category: "acquisition",
    principle:
      "Enrichis l'entreprise avant le lead : taille, industrie, techno stack, financement recent. Tu adaptes ton pitch au contexte business, pas au titre du poste. Une startup en Serie A et un grand groupe ont des besoins radicalement differents.",
    application:
      "Recupere les donnees entreprise (taille, industrie, technos) et adapte le pitch en fonction du contexte business specifique.",
    triggers: ["entreprise", "societe", "contexte", "industrie", "taille", "techno", "stack"],
    personaAffinity: ["Prospector", "Strategist"],
    maturityRange: [10, 100],
    weight: 7,
  },
  {
    id: "acq-023",
    category: "acquisition",
    principle:
      "Score tes prospects enrichis : decideur + industrie match + budget signal = priorite haute. Ne perds pas de temps sur les leads froids sans signal. La priorisation basee sur les donnees fait gagner des heures chaque semaine.",
    application:
      "Apres enrichissement, attribue un score de priorite base sur le role, l'industrie, la taille d'entreprise et les signaux d'achat.",
    triggers: ["scoring", "priorite", "qualifier", "score", "classer", "trier", "prioriser"],
    personaAffinity: ["Prospector", "Analyst"],
    maturityRange: [15, 100],
    weight: 8,
  },
];
