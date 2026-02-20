import type { BrainAtom } from "./types.js";

/**
 * COMPETITIVE INTEL — 12 atoms on market mapping and Blue Ocean methodology.
 * Competitive positioning, differentiation, and strategic analysis.
 */
export const COMPETITIVE_INTEL_ATOMS: BrainAtom[] = [
  {
    id: "ci-001",
    category: "competitive_intel",
    principle:
      "La carte de positionnement concurrentiel : place tes concurrents sur 2 axes strategiques (ex: prix vs specialisation, volume vs premium). Les espaces vides sur la carte sont des opportunites. Un quadrant vide ne signifie pas 'pas de marche' — ca peut signifier 'pas encore decouvert'. Le freelance qui occupe un espace vide n'a pas de concurrence directe.",
    application:
      "Dessine une carte de positionnement avec tes 5-7 concurrents principaux et identifie les espaces inoccupes les plus prometteurs.",
    triggers: ["positionnement", "carte", "concurrence", "comparaison", "placement", "mapping"],
    personaAffinity: ["Strategist", "Analyst"],
    maturityRange: [20, 80],
    weight: 9,
  },
  {
    id: "ci-002",
    category: "competitive_intel",
    principle:
      "La strategie Ocean Bleu en 4 actions : Eliminer (quels facteurs acceptes par le secteur eliminer ?), Reduire (quels facteurs reduire en dessous du standard ?), Augmenter (quels facteurs augmenter au-dessus du standard ?), Creer (quels facteurs jamais offerts par le secteur creer ?). Le but n'est pas d'etre meilleur — c'est d'etre different sur un axe qui compte pour le client.",
    application:
      "Applique le canvas ERRC a ton offre : liste ce que tu peux eliminer, reduire, augmenter et creer par rapport aux standards du secteur.",
    triggers: ["ocean bleu", "blue ocean", "differencier", "strategie", "innover", "creer"],
    personaAffinity: ["Strategist"],
    maturityRange: [30, 90],
    weight: 9,
  },
  {
    id: "ci-003",
    category: "competitive_intel",
    principle:
      "Le framework de monitoring concurrentiel : veille hebdomadaire (reseaux sociaux, publications), veille mensuelle (nouveaux clients, changements de prix, nouvelles offres), veille trimestrielle (positionnement, strategie globale). La veille concurrentielle ne sert pas a copier — elle sert a anticiper et a trouver des angles morts exploitables.",
    application:
      "Configure des alertes Google pour tes 5 concurrents principaux et consacre 30 min par semaine a analyser leurs mouvements.",
    triggers: ["veille", "surveillance", "concurrent", "monitoring", "alerte", "suivre"],
    personaAffinity: ["Analyst", "Strategist"],
    maturityRange: [20, 80],
    weight: 7,
  },
  {
    id: "ci-004",
    category: "competitive_intel",
    principle:
      "L'intelligence tarifaire : analyser les prix des concurrents revele leur positionnement. Un concurrent moins cher vise le volume ; un concurrent plus cher vise le premium. La cl n'est pas d'aligner tes prix sur les leurs, mais de comprendre POURQUOI ils facturent ce qu'ils facturent. Un prix 2x superieur au marche signifie soit une marque forte, soit un marche ignore, soit une mauvaise strategie.",
    application:
      "Collecte les tarifs visibles de 5 concurrents, analyse les ecarts, et positionne tes prix en fonction de la valeur unique que tu apportes.",
    triggers: ["prix concurrent", "tarif", "comparaison prix", "benchmark prix", "cher", "moins cher"],
    personaAffinity: ["Analyst", "Strategist"],
    maturityRange: [20, 80],
    weight: 8,
  },
  {
    id: "ci-005",
    category: "competitive_intel",
    principle:
      "L'analyse du messaging concurrent : etudie les 3 premiers ecrans du site de chaque concurrent. Quels mots utilisent-ils ? Quels pain points adressent-ils ? Quels benefices promettent-ils ? Si tout le monde dit 'sur-mesure, qualite, experience' — c'est du bruit. Le message qui differencie est celui que personne d'autre ne peut legitement revendiquer.",
    application:
      "Capture les headlines et propositions de valeur de 5 concurrents et identifie les claims uniques vs les claims generiques.",
    triggers: ["message", "communication", "site web", "proposition valeur", "promesse"],
    personaAffinity: ["Writer", "Strategist"],
    maturityRange: [20, 70],
    weight: 7,
  },
  {
    id: "ci-006",
    category: "competitive_intel",
    principle:
      "Detecter les canaux d'acquisition concurrents : ou publient-ils (LinkedIn, blog, YouTube) ? Quelle frequence ? Quel engagement ? Un concurrent avec beaucoup de followers mais peu d'engagement a une audience fantome. Un concurrent avec peu de followers mais des commentaires qualitatifs a une communaute engagee. La qualite bat la quantite en intelligence concurrentielle.",
    application:
      "Audite les canaux de 3 concurrents : presence, frequence, engagement, et type de contenu. Identifie les canaux sous-exploites.",
    triggers: ["canaux", "presence", "reseaux", "ou publient", "visibilite", "strategie contenu"],
    personaAffinity: ["Analyst", "Strategist"],
    maturityRange: [20, 70],
    weight: 6,
  },
  {
    id: "ci-007",
    category: "competitive_intel",
    principle:
      "L'identification des faiblesses concurrentielles : les avis clients negatifs des concurrents sont ta roadmap d'opportunites. 'Trop lent', 'Communication difficile', 'Prix caches' — chaque plainte recurrente est un avantage competitif que tu peux exploiter. Transforme les frustrations des clients de tes concurrents en promesses dans ton offre.",
    application:
      "Collecte les avis negatifs des concurrents (Google, Trustpilot, forums) et transforme les 3 plaintes les plus frequentes en arguments de vente.",
    triggers: ["faiblesse", "defaut", "avis negatif", "plainte", "frustration", "ameliorer"],
    personaAffinity: ["Strategist", "Prospector"],
    maturityRange: [20, 80],
    weight: 8,
  },
  {
    id: "ci-008",
    category: "competitive_intel",
    principle:
      "Les opportunites de differenciation se trouvent dans les marges : la ou les concurrents font le minimum (service client, onboarding, suivi post-projet). Un freelance qui excelle la ou les autres negligent cree un avantage competitif presque impossible a copier car il est enracine dans la culture de travail, pas dans une feature produit.",
    application:
      "Identifie les 3 points de contact ou tes concurrents font le strict minimum et investis pour y exceller.",
    triggers: ["differenciation", "avantage", "unique", "se demarquer", "excellence", "opportunite"],
    personaAffinity: ["Strategist"],
    maturityRange: [20, 80],
    weight: 8,
  },
  {
    id: "ci-009",
    category: "competitive_intel",
    principle:
      "Les signaux de timing marche : levee de fonds d'un concurrent (le marche est valide), depart d'employes cles (instabilite = opportunite), nouvelle reglementation (changement = besoin d'adaptation), buzz media (attention = demande accrue). Le freelance qui repere ces signaux en premier et agit vite capture une fenetre d'opportunite avant que le marche ne reagisse.",
    application:
      "Surveille les signaux de timing (levees, recrutements, actualites secteur) et prepare des actions rapides pour chaque type de signal.",
    triggers: ["timing", "opportunite", "marche", "tendance", "signal", "moment"],
    personaAffinity: ["Strategist", "Analyst"],
    maturityRange: [30, 90],
    weight: 7,
  },
  {
    id: "ci-010",
    category: "competitive_intel",
    principle:
      "L'evaluation des barrieres a l'entree : qu'est-ce qui empeche un nouveau concurrent d'entrer ? Expertise rare, relations etablies, brevets, effets de reseau, cout de switching. Un marche sans barrieres attire des concurrents — un marche avec des barrieres protege tes marges. Construis activement tes barrieres : specialisation profonde, communaute fidele, process proprietaire.",
    application:
      "Evalue tes barrieres actuelles sur 5 dimensions et identifie 2 barrieres supplementaires a construire dans les 12 prochains mois.",
    triggers: ["barriere", "entree", "protection", "moat", "defensible", "concurrence"],
    personaAffinity: ["Strategist"],
    maturityRange: [40, 100],
    weight: 7,
  },
  {
    id: "ci-011",
    category: "competitive_intel",
    principle:
      "L'analyse des menaces de substitution : ton concurrent n'est pas forcement un autre freelance — c'est tout ce qui resout le meme probleme. Un consultant en marketing est en competition avec les agences, les outils SaaS, les formations en ligne, et le 'je fais moi-meme'. Comprendre les substituts elargit ta vision et ta strategie de differenciation.",
    application:
      "Liste les 5 alternatives a ton offre (pas que les concurrents directs) et analyse pourquoi un prospect choisirait chacune. Positionne-toi en consequence.",
    triggers: ["substitut", "alternative", "remplacement", "autre option", "concurrence indirecte"],
    personaAffinity: ["Strategist"],
    maturityRange: [30, 90],
    weight: 7,
  },
  {
    id: "ci-012",
    category: "competitive_intel",
    principle:
      "Le strategic group mapping : regroupe les concurrents par strategie similaire (premium/local, volume/online, niche/generaliste). Les concurrents du meme groupe strategique sont en competition directe. Ceux d'un autre groupe servent de modele d'aspiration ou de repoussoir. Le mouvement strategique le plus puissant est de changer de groupe — passer du volume au premium, du generaliste au specialiste.",
    application:
      "Cartographie les groupes strategiques de ton marche et positionne-toi dans le groupe le moins sature avec le plus fort potentiel de marge.",
    triggers: ["groupe strategique", "classification", "type concurrent", "segment", "marche"],
    personaAffinity: ["Strategist", "Analyst"],
    maturityRange: [40, 100],
    weight: 7,
  },
];
