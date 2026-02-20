/**
 * Sector profiles -- deep business sector intelligence for freelancers.
 * 10 sectors: 7 from dashboard + 3 new (marketer, coach, saas_founder).
 */
import type { SectorProfile } from "./types.js";
import { DEVELOPER_SECTOR } from "./developer.js";
import { DESIGNER_SECTOR } from "./designer.js";
import { CONSULTANT_SECTOR } from "./consultant.js";
import { PHOTOGRAPHER_SECTOR } from "./photographer.js";
import { WRITER_SECTOR } from "./writer.js";
import { TRAINER_SECTOR } from "./trainer.js";
import { MARKETER_SECTOR } from "./marketer.js";
import { COACH_SECTOR } from "./coach.js";
import { SAAS_FOUNDER_SECTOR } from "./saas-founder.js";
import { GENERAL_SECTOR } from "./general.js";

export type { SectorProfile } from "./types.js";

export {
  DEVELOPER_SECTOR,
  DESIGNER_SECTOR,
  CONSULTANT_SECTOR,
  PHOTOGRAPHER_SECTOR,
  WRITER_SECTOR,
  TRAINER_SECTOR,
  MARKETER_SECTOR,
  COACH_SECTOR,
  SAAS_FOUNDER_SECTOR,
  GENERAL_SECTOR,
};

/** All sector profiles keyed by sector name. */
export const SECTOR_PROFILES: Record<string, SectorProfile> = {
  developer: DEVELOPER_SECTOR,
  designer: DESIGNER_SECTOR,
  consultant: CONSULTANT_SECTOR,
  photographer: PHOTOGRAPHER_SECTOR,
  writer: WRITER_SECTOR,
  trainer: TRAINER_SECTOR,
  marketer: MARKETER_SECTOR,
  coach: COACH_SECTOR,
  saas_founder: SAAS_FOUNDER_SECTOR,
  general: GENERAL_SECTOR,
};

/** Get a sector profile by key. Falls back to 'general'. */
export function getSector(key: string): SectorProfile {
  return SECTOR_PROFILES[key] ?? GENERAL_SECTOR;
}

/** Get all sector profiles as an array. */
export function getAllSectors(): SectorProfile[] {
  return Object.values(SECTOR_PROFILES);
}

/** Get all sector keys. */
export function getAllSectorKeys(): string[] {
  return Object.keys(SECTOR_PROFILES);
}

/**
 * Detect the most relevant sector from a business niche string.
 * Returns the sector key for SECTOR_PROFILES lookup.
 */
export function detectSector(niche: string): { sector: string; confidence: number; matches: string[] } {
  if (!niche) return { sector: "general", confidence: 0, matches: [] };

  const lower = niche
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "");

  let bestMatch = "general";
  let bestScore = 0;
  let bestMatches: string[] = [];

  for (const [key, profile] of Object.entries(SECTOR_PROFILES)) {
    if (key === "general") continue;

    let score = 0;
    const matches: string[] = [];

    for (const label of profile.labels) {
      const normalizedLabel = label
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .toLowerCase();
      if (lower.includes(normalizedLabel)) {
        score++;
        matches.push(label);
      }
    }

    if (score > bestScore) {
      bestScore = score;
      bestMatch = key;
      bestMatches = matches;
    }
  }

  const confidence = Math.min(bestScore / 3, 1);
  return { sector: bestMatch, confidence, matches: bestMatches };
}
