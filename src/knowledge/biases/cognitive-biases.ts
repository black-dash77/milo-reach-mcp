// ──────────────────────────────────────────────────────────────────────────────
// Cognitive Biases — Biases activated per emotional stage of the prospect
// ──────────────────────────────────────────────────────────────────────────────

/**
 * Biais cognitifs actives par stade emotionnel du prospect.
 * Chaque stade du parcours client correspond a des leviers psychologiques
 * specifiques qui maximisent l'impact du message.
 */
export const COGNITIVE_BIASES = {
  awareness: ["pattern_interrupt", "curiosity_gap"],
  curiosity: ["reciprocity", "mere_exposure"],
  interest: ["social_proof", "authority", "confirmation_bias"],
  desire: ["anchoring", "framing", "endowment_effect"],
  action: ["scarcity", "loss_aversion", "commitment_consistency"],
  loyalty: ["reciprocity", "sunk_cost", "community"],
} as const;

export type EmotionalStage = keyof typeof COGNITIVE_BIASES;
