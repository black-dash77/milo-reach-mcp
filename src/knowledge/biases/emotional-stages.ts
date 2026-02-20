// ──────────────────────────────────────────────────────────────────────────────
// Emotional Stages — Neurofunnel stages of the client journey
// ──────────────────────────────────────────────────────────────────────────────

/**
 * Stades emotionnels du parcours client (Neurofunnel).
 * Chaque stade definit l'emotion dominante, la technique a utiliser,
 * et l'objectif a atteindre avant de passer au stade suivant.
 */
export const EMOTIONAL_STAGES = {
  unconscious: {
    emotion: "neutralite → surprise",
    technique:
      "pattern_interrupt, question provocante, stat choquante",
    objective: "capter l'attention en 3 secondes",
  },
  curiosity: {
    emotion: "intrigue",
    technique:
      "sujets email provocants, emails courts, question qui fait reflechir",
    objective: "ouvrir et lire",
  },
  interest: {
    emotion: "espoir + scepticisme",
    technique:
      "etudes de cas, resultats concrets, temoignages, credibilite",
    objective: "de 'interessant' a 'competent'",
  },
  desire: {
    emotion: "projection",
    technique:
      "personnalisation forte, mentionner secteur/problemes, solutions specifiques",
    objective: "le lead se voit travaillant avec toi",
  },
  action: {
    emotion: "excitation + derniere hesitation",
    technique:
      "reduire frictions, CTA simple, urgence douce",
    objective: "passage a l'action sans effort",
  },
  loyalty: {
    emotion: "valorisation",
    technique:
      "check-in 30j, contenu pertinent, feedback, services complementaires",
    objective: "client considere, pas juste facture",
  },
} as const;
