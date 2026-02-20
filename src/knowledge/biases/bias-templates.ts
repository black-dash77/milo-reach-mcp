// ──────────────────────────────────────────────────────────────────────────────
// Bias Templates, Power Language, Timing Intelligence, Objection Handlers
// ──────────────────────────────────────────────────────────────────────────────

/**
 * Templates d'application pour chaque biais cognitif.
 * Instructions concretes sur comment utiliser chaque levier
 * de maniere ethique et efficace.
 */
export const BIAS_TEMPLATES = {
  reciprocity:
    "Donner de la valeur AVANT de demander. Premier email = conseil/ressource/aide, jamais un pitch.",
  social_proof:
    "Integrer naturellement : 'J'ai accompagne X [type] cette annee' ou 'Voici ce que j'ai fait pour [secteur]'.",
  scarcity:
    "Rarete REELLE basee sur les donnees dashboard (projets en cours, capacite restante). Jamais de faux FOMO.",
  framing:
    "Ne pas dire 'ca coute 5000EUR'. Dire 'pour 170EUR/jour sur un mois, vous avez X'. Meme prix, perception differente.",
  anchoring:
    "Ancrer avec valeur percue elevee AVANT de reveler le prix reel.",
  mere_exposure:
    "Calibrer la frequence pour maintenir la presence sans agacer. Sequences multi-touch = familiarite construite.",
  commitment_consistency:
    "Petit oui d'abord, puis moyen, puis grand. Chaque oui rend le suivant plus probable.",
  loss_aversion:
    "Formuler en perte plutot qu'en gain : 'Chaque mois sans X, vous perdez Y' > 'Vous pourriez gagner Y'.",
  authority:
    "Expertise demontree par resultats concrets, pas par titres. Chiffres, etudes de cas, methodologie.",
  confirmation_bias:
    "Valider d'abord ce que le prospect croit deja, puis elargir sa perspective avec de nouvelles donnees.",
  endowment_effect:
    "Faire 'posseder' mentalement le resultat avant l'achat. Essai, demo, preview personnalisee.",
  sunk_cost:
    "Rappeler les investissements deja faits dans la relation (temps, echanges, confiance construite).",
  community:
    "Creer un sentiment d'appartenance. Le client fait partie d'un groupe exclusif de professionnels.",
  curiosity_gap:
    "Ouvrir une boucle d'information sans la fermer immediatement. Le cerveau DOIT savoir la suite.",
  pattern_interrupt:
    "Briser les attentes. Un email qui ne ressemble pas a un email commercial capte l'attention.",
} as const;

/**
 * Intelligence temporelle pour optimiser le timing des interactions.
 */
export const TIMING_INTELLIGENCE = {
  individual_windows:
    "Analyser QUAND chaque lead ouvre ses emails. Envoyer dans sa fenetre d'attention personnelle.",
  adaptive_tempo:
    "Lead qui ouvre tout vite → step suivant plus tot. Lead lent → tempo espace.",
  post_interaction_window:
    "Lead qui ouvre 3x sans repondre → fenetre 24-48h optimale.",
  momentum:
    "Apres un premier 'oui', capitaliser VITE avec l'etape suivante.",
} as const;

/**
 * Strategies de gestion des objections par type.
 * Chaque objection a une approche psychologique specifique.
 */
export const OBJECTION_HANDLERS = {
  price:
    "Recadrage valeur + ancrage + etalement. 'Pour XEUR/jour, vous obtenez...'",
  timing:
    "Planted seed + maintien du lien sans pression. 'Je comprends. Quand le moment sera bon, voici ce qu'on pourra faire...'",
  competition:
    "Differenciation + preuve sociale specifique. Pas de critique — mise en valeur de l'approche unique.",
  no_need:
    "Education + aversion a la perte douce. Montrer le cout de l'inaction sans dramatiser.",
  trust:
    "Preuve sociale + garantie + petit engagement d'abord. Reduire le risque percu a zero.",
} as const;

/**
 * Patterns linguistiques a impact neurologique.
 * Ces regles optimisent l'impact de chaque mot sur le cerveau du lecteur.
 */
export const POWER_LANGUAGE = {
  action_verbs: [
    "decouvrez",
    "transformez",
    "obtenez",
    "imaginez",
    "accelerez",
    "liberez",
  ],
  specificity:
    "'47 leads en 3 semaines' > 'plus de leads'. Toujours specifique.",
  you_focus:
    "'vous/tu' plus que 'nous'. Centrage client.",
  present_tense:
    "Verbes au present, pas conditionnel.",
  contrast:
    "Avant/apres : le cerveau retient les contrastes.",
  sensory:
    "Faire visualiser le resultat quand pertinent.",
} as const;

export type CognitiveBias = keyof typeof BIAS_TEMPLATES;
export type ObjectionType = keyof typeof OBJECTION_HANDLERS;
