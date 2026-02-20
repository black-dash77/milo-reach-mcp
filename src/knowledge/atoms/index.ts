/**
 * Central index -- aggregates all atom arrays into a single ALL_ATOMS collection.
 */

import type { BrainAtom, BrainCategory } from "./types.js";
import { POSITIONING_ATOMS } from "./positioning.js";
import { OFFER_ATOMS } from "./offer.js";
import { STORYTELLING_ATOMS } from "./storytelling.js";
import { PERSUASION_ATOMS } from "./persuasion.js";
import { PRICING_ATOMS } from "./pricing.js";
import { ACQUISITION_ATOMS } from "./acquisition.js";
import { COPYWRITING_ATOMS } from "./copywriting.js";
import { BRANDING_ATOMS } from "./branding.js";
import { RETENTION_ATOMS } from "./retention.js";
import { MINDSET_ATOMS } from "./mindset.js";
import { ADS_ATOMS } from "./ads.js";
import { AUTOMATION_ATOMS } from "./automation.js";
import { SALES_CALLS_ATOMS } from "./sales-calls.js";
import { SEO_PSYCHOLOGY_ATOMS } from "./seo-psychology.js";
import { VIDEO_PERSUASION_ATOMS } from "./video-persuasion.js";
import { EVENTS_WEBINARS_ATOMS } from "./events-webinars.js";
import { COMMUNITY_ATOMS } from "./community.js";
import { PARTNERSHIPS_ATOMS } from "./partnerships.js";
import { PRODUCT_MARKETING_ATOMS } from "./product-marketing.js";
import { ANALYTICS_DEEP_ATOMS } from "./analytics-deep.js";
import { COMPETITIVE_INTEL_ATOMS } from "./competitive-intel.js";

export type { BrainAtom, BrainCategory } from "./types.js";

export {
  POSITIONING_ATOMS,
  OFFER_ATOMS,
  STORYTELLING_ATOMS,
  PERSUASION_ATOMS,
  PRICING_ATOMS,
  ACQUISITION_ATOMS,
  COPYWRITING_ATOMS,
  BRANDING_ATOMS,
  RETENTION_ATOMS,
  MINDSET_ATOMS,
  ADS_ATOMS,
  AUTOMATION_ATOMS,
  SALES_CALLS_ATOMS,
  SEO_PSYCHOLOGY_ATOMS,
  VIDEO_PERSUASION_ATOMS,
  EVENTS_WEBINARS_ATOMS,
  COMMUNITY_ATOMS,
  PARTNERSHIPS_ATOMS,
  PRODUCT_MARKETING_ATOMS,
  ANALYTICS_DEEP_ATOMS,
  COMPETITIVE_INTEL_ATOMS,
};

/** Lazy-cached flat array of all atoms. */
let _allAtoms: BrainAtom[] | null = null;

/** All brain atoms concatenated in category order. */
export function getAllAtoms(): BrainAtom[] {
  if (_allAtoms) return _allAtoms;
  _allAtoms = [
    ...POSITIONING_ATOMS,
    ...OFFER_ATOMS,
    ...STORYTELLING_ATOMS,
    ...PERSUASION_ATOMS,
    ...PRICING_ATOMS,
    ...ACQUISITION_ATOMS,
    ...COPYWRITING_ATOMS,
    ...BRANDING_ATOMS,
    ...RETENTION_ATOMS,
    ...MINDSET_ATOMS,
    ...ADS_ATOMS,
    ...AUTOMATION_ATOMS,
    ...SALES_CALLS_ATOMS,
    ...SEO_PSYCHOLOGY_ATOMS,
    ...VIDEO_PERSUASION_ATOMS,
    ...EVENTS_WEBINARS_ATOMS,
    ...COMMUNITY_ATOMS,
    ...PARTNERSHIPS_ATOMS,
    ...PRODUCT_MARKETING_ATOMS,
    ...ANALYTICS_DEEP_ATOMS,
    ...COMPETITIVE_INTEL_ATOMS,
  ];
  return _allAtoms;
}

/** Convenience alias. */
export const ALL_ATOMS = getAllAtoms;

/** Filter atoms by category. */
export function getAtomsByCategory(category: BrainCategory): BrainAtom[] {
  return getAllAtoms().filter((atom) => atom.category === category);
}

/** All unique categories. */
export function getAllCategories(): BrainCategory[] {
  return [...new Set(getAllAtoms().map((a) => a.category))];
}

/**
 * Extract keywords from a query string (normalize accents, lowercase, split).
 */
export function extractKeywords(query: string): string[] {
  return query
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .split(/[^a-z0-9]+/)
    .filter((w) => w.length > 2);
}

/** Search atoms by keyword (matches principle, application, or triggers). */
export function searchAtoms(query: string): BrainAtom[] {
  const keywords = extractKeywords(query);
  if (keywords.length === 0) return [];

  return getAllAtoms().filter((atom) => {
    const text = [atom.principle, atom.application, ...atom.triggers]
      .join(" ")
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .toLowerCase();

    return keywords.some((kw) => text.includes(kw));
  });
}
