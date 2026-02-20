/**
 * Marketing Frameworks -- consolidated registry of all frameworks.
 * Re-exports from biases module + imports all detailed framework files.
 */

import {
  OBJECTION_HANDLERS,
  POWER_LANGUAGE,
  TIMING_INTELLIGENCE,
} from "../biases/index.js";

import { SALES_CALL_SCRIPTS } from "./sales-call-scripts.js";
import { SEO_INTENT_MAPPING } from "./seo-intent-mapping.js";
import { LAUNCH_PLAYBOOKS } from "./launch-playbooks.js";
import { WEBINAR_FUNNELS } from "./webinar-funnels.js";
import { COMMUNITY_LOOPS } from "./community-loops.js";
import { PARTNERSHIP_MODELS } from "./partnership-models.js";
import { ATTRIBUTION_MODELS } from "./attribution-models.js";
import { LTV_MODELS } from "./ltv-models.js";
import { COMPETITIVE_MAPS } from "./competitive-maps.js";

// ── Re-exports ──

export {
  OBJECTION_HANDLERS,
  POWER_LANGUAGE,
  TIMING_INTELLIGENCE,
  SALES_CALL_SCRIPTS,
  SEO_INTENT_MAPPING,
  LAUNCH_PLAYBOOKS,
  WEBINAR_FUNNELS,
  COMMUNITY_LOOPS,
  PARTNERSHIP_MODELS,
  ATTRIBUTION_MODELS,
  LTV_MODELS,
  COMPETITIVE_MAPS,
};

export type { ObjectionType } from "../biases/index.js";

// ── Central lookup ──

const ALL_FRAMEWORKS: Record<string, unknown> = {
  objection_handlers: OBJECTION_HANDLERS,
  power_language: POWER_LANGUAGE,
  timing_intelligence: TIMING_INTELLIGENCE,
  sales_call_scripts: SALES_CALL_SCRIPTS,
  seo_intent_mapping: SEO_INTENT_MAPPING,
  launch_playbooks: LAUNCH_PLAYBOOKS,
  webinar_funnels: WEBINAR_FUNNELS,
  community_loops: COMMUNITY_LOOPS,
  partnership_models: PARTNERSHIP_MODELS,
  attribution_models: ATTRIBUTION_MODELS,
  ltv_models: LTV_MODELS,
  competitive_maps: COMPETITIVE_MAPS,
};

export function getFramework(name: string): unknown | null {
  return ALL_FRAMEWORKS[name] ?? null;
}

export function getAllFrameworkKeys(): string[] {
  return Object.keys(ALL_FRAMEWORKS);
}
