import type { BrainAtom } from "./types.js";

export const ADS_ATOMS: BrainAtom[] = [
  {
    id: "ads-001",
    category: "ads",
    principle:
      "Teste toujours 3+ creatives par audience. Le visuel fait 80% de la performance pub. Itere sur les gagnants, coupe les perdants vite. La creative fatigue est reelle — renouvelle toutes les 2-3 semaines.",
    application:
      "Lance chaque campagne avec minimum 3 variantes de creative et coupe celles sous-performantes apres 1000 impressions.",
    triggers: ["creative", "visuel", "pub", "publicite", "ad", "variante", "tester"],
    personaAffinity: ["Analyst", "Writer"],
    maturityRange: [10, 80],
    weight: 8,
  },
  {
    id: "ads-002",
    category: "ads",
    principle:
      "Scale le budget des pubs avec ROAS > 2x. Pause celles avec CPC > 2x la moyenne apres 1000 impressions. Le data guide, pas l'intuition. Un euro mal investi en ads est un euro perdu — pas investi.",
    application:
      "Analyse les metriques ROAS et CPC quotidiennement et ajuste les budgets en fonction des seuils definis.",
    triggers: ["roas", "budget", "cpc", "performance", "scale", "optimiser", "depense"],
    personaAffinity: ["Analyst"],
    maturityRange: [20, 100],
    weight: 9,
  },
  {
    id: "ads-003",
    category: "ads",
    principle:
      "Commence avec des audiences etroites et specifiques. Elargis seulement quand tu as valide le message. Large = cher, cible = rentable. Une audience de 50K bien ciblee bat une audience de 5M generique.",
    application:
      "Demarre les campagnes avec des audiences narrowes (<100K) basees sur des criteres precis, puis elargis progressivement.",
    triggers: ["audience", "ciblage", "cible", "segment", "large", "etroit", "specifique"],
    personaAffinity: ["Strategist", "Analyst"],
    maturityRange: [10, 80],
    weight: 7,
  },
  {
    id: "ads-004",
    category: "ads",
    principle:
      "Les 3 premieres secondes decident tout. Accroche avec un chiffre, une question provocante, ou un pain point universel de ton audience. Le scroll est impitoyable — si tu ne captes pas l'attention immediatement, ton budget est gaspille.",
    application:
      "Redige des hooks publicitaires qui captent l'attention en moins de 3 secondes avec un element de curiosite ou de douleur.",
    triggers: ["hook", "accroche", "attention", "scroll", "premiere impression", "capter"],
    personaAffinity: ["Writer"],
    maturityRange: [10, 80],
    weight: 8,
  },
  {
    id: "ads-005",
    category: "ads",
    principle:
      "Le retargeting des visiteurs site + leads warm est 5-10x plus rentable que le cold. Cree des audiences custom a partir de tes leads CRM. Le prospect qui te connait deja est infiniment plus receptif a ta pub.",
    application:
      "Cree des audiences de retargeting a partir des visiteurs du site et des leads CRM pour maximiser le ROAS.",
    triggers: ["retargeting", "remarketing", "audience custom", "warm", "visiteurs", "crm"],
    personaAffinity: ["Strategist", "Automator"],
    maturityRange: [20, 100],
    weight: 9,
  },
  {
    id: "ads-006",
    category: "ads",
    principle:
      "Un A/B test par semaine minimum. Teste une seule variable a la fois : creative, texte, audience, ou placement. Mesure apres 48h minimum. Les decisions basees sur trop peu de donnees sont pires que pas de decision du tout.",
    application:
      "Structure un calendrier de tests A/B hebdomadaires avec une seule variable par test et un seuil de significativite defini.",
    triggers: ["a/b test", "test", "split", "comparer", "variante", "optimisation"],
    personaAffinity: ["Analyst"],
    maturityRange: [20, 100],
    weight: 7,
  },
  {
    id: "ads-007",
    category: "ads",
    principle:
      "Le retargeting sequentiel segmente les audiences par temperature : froide (jamais interagi), tiede (visite site ou engagement social), chaude (formulaire rempli, email ouvert). Chaque temperature recoit un message different — decouverte pour les froids, preuve sociale pour les tiedes, offre directe pour les chauds. Envoyer le mauvais message a la mauvaise temperature gaspille le budget.",
    application:
      "Structure les campagnes de retargeting en 3 paliers de temperature avec des creatives et messages adaptes a chaque stade du parcours.",
    triggers: ["retargeting", "sequentiel", "froid", "tiede", "chaud", "temperature"],
    personaAffinity: ["Strategist", "Automator"],
    maturityRange: [20, 90],
    weight: 8,
  },
  {
    id: "ads-008",
    category: "ads",
    principle:
      "Le framework de test creatif decompose chaque pub en 4 variables independantes : le hook (3 premieres secondes), le visuel (image/video), le copy (texte d'accompagnement), et le CTA (bouton d'action). Tester une variable a la fois isole l'impact reel. Un hook fort avec un mauvais CTA gaspille le clic. Un bon CTA avec un hook faible n'est jamais vu.",
    application:
      "Lance chaque nouvelle campagne avec une matrice de test : 3 hooks x 1 visuel, puis itere sur le gagnant en testant les autres variables.",
    triggers: ["creative testing", "framework test", "hook", "visuel", "copy", "cta", "matrice"],
    personaAffinity: ["Writer", "Analyst"],
    maturityRange: [20, 90],
    weight: 7,
  },
  {
    id: "ads-009",
    category: "ads",
    principle:
      "La regle 70/20/10 pour l'allocation budget pub : 70% sur les campagnes prouvees (ROAS valide), 20% sur les tests prometteurs (premiers signaux positifs), 10% sur l'experimental (nouvelles audiences, nouveaux formats, nouveaux angles). Cette repartition protege la rentabilite tout en alimentant le pipeline d'innovation. Ne jamais mettre 100% sur le 'safe' — les gagnants d'aujourd'hui fatiguent demain.",
    application:
      "Repartis le budget publicitaire selon la regle 70/20/10 et reequilibre chaque semaine en fonction des resultats.",
    triggers: ["budget", "allocation", "repartition", "depense", "investir", "scale"],
    personaAffinity: ["Analyst", "Strategist"],
    maturityRange: [20, 100],
    weight: 7,
  },
  {
    id: "ads-010",
    category: "ads",
    principle:
      "La fatigue publicitaire se detecte par 3 signaux : baisse du CTR de plus de 20% sur 7 jours, augmentation du CPC sans changement d'audience, et baisse du taux de conversion malgre un volume stable. Quand ces signaux apparaissent, la solution n'est pas d'augmenter le budget — c'est de rafraichir les creatives. Rotation planifiee toutes les 2-3 semaines pour les audiences chaudes, 4-6 semaines pour les froides.",
    application:
      "Monitore les indicateurs de fatigue (CTR, CPC, conversion) et declenche un renouvellement creatif des que 2 signaux sur 3 apparaissent.",
    triggers: ["fatigue", "rotation", "baisse performance", "ctr", "renouveler", "rafraichir"],
    personaAffinity: ["Analyst", "Automator"],
    maturityRange: [20, 100],
    weight: 6,
  },
  {
    id: "ads-011",
    category: "ads",
    principle:
      "Les audiences lookalike construites a partir des meilleurs clients (top 20% en LTV) surperforment celles basees sur tous les clients. La qualite de la source determine la qualite du lookalike. Commencer avec un lookalike 1% (le plus similaire), puis elargir a 3-5% seulement si le 1% sature. Un lookalike de mauvais clients attire... de mauvais prospects.",
    application:
      "Cree des audiences lookalike basees exclusivement sur les meilleurs clients (plus haut panier, plus fideles) et commence par le pourcentage le plus etroit.",
    triggers: ["lookalike", "similaire", "audience", "meilleurs clients", "source", "expansion"],
    personaAffinity: ["Strategist", "Analyst"],
    maturityRange: [30, 100],
    weight: 7,
  },
  {
    id: "ads-012",
    category: "ads",
    principle:
      "L'attribution multi-touch revele le vrai parcours d'achat. Le dernier clic attribue 100% de la conversion au dernier touchpoint — mais le prospect a peut-etre vu 3 pubs, lu 2 emails et visite le site 4 fois avant de convertir. Analyser le parcours complet evite de couper les campagnes de haut de funnel qui alimentent les conversions de bas de funnel.",
    application:
      "Analyse les parcours de conversion multi-touch pour comprendre la contribution reelle de chaque canal et eviter de couper les campagnes d'awareness qui alimentent le pipeline.",
    triggers: ["attribution", "multi-touch", "parcours", "conversion", "analyse", "canal"],
    personaAffinity: ["Analyst"],
    maturityRange: [30, 100],
    weight: 6,
  },
];
