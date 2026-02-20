/**
 * Core types for Brain Atoms — the atomic knowledge units of Milo's marketing intelligence.
 */

export type BrainCategory =
  | "positioning"
  | "offer"
  | "storytelling"
  | "persuasion"
  | "pricing"
  | "acquisition"
  | "copywriting"
  | "branding"
  | "retention"
  | "mindset"
  | "ads"
  | "automation"
  | "sales_calls"
  | "seo_psychology"
  | "video_persuasion"
  | "events_webinars"
  | "community"
  | "partnerships"
  | "product_marketing"
  | "analytics_deep"
  | "competitive_intel";

export interface BrainAtom {
  id: string;
  category: BrainCategory;
  principle: string;
  application: string;
  triggers: string[];
  personaAffinity: string[];
  maturityRange: [number, number];
  sectorRelevance?: string[];
  weight: number;
}
