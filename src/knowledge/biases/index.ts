export { COGNITIVE_BIASES } from "./cognitive-biases.js";
export type { EmotionalStage } from "./cognitive-biases.js";

export {
  BIAS_TEMPLATES,
  TIMING_INTELLIGENCE,
  OBJECTION_HANDLERS,
  POWER_LANGUAGE,
} from "./bias-templates.js";
export type { CognitiveBias, ObjectionType } from "./bias-templates.js";

export { EMOTIONAL_STAGES } from "./emotional-stages.js";

import { COGNITIVE_BIASES, type EmotionalStage } from "./cognitive-biases.js";
import { BIAS_TEMPLATES, type CognitiveBias } from "./bias-templates.js";
import { EMOTIONAL_STAGES } from "./emotional-stages.js";

/** Get the list of cognitive biases activated at a given emotional stage. */
export function getBiasesForStage(stage: EmotionalStage): readonly string[] {
  return COGNITIVE_BIASES[stage] ?? [];
}

/** Get the application template for a specific cognitive bias. */
export function getBiasTemplate(bias: CognitiveBias): string {
  return BIAS_TEMPLATES[bias];
}

/** Get the emotional stage definition (emotion, technique, objective). */
export function getEmotionalStage(stage: keyof typeof EMOTIONAL_STAGES) {
  return EMOTIONAL_STAGES[stage];
}
