// ──────────────────────────────────────────────────────────────────────────────
// Engram Router — Deterministic routing engine for contextual atom selection
// Adapted from dashboard engram-router.ts
// ──────────────────────────────────────────────────────────────────────────────

import { getAllAtoms } from "./atoms/index.js";
import type { BrainAtom } from "./atoms/types.js";

export interface EngramContext {
  sector: string;
  maturityGlobal: number;
  persona: string;
  messageKeywords: string[];
  learningBoosts?: Record<string, number>;
}

/**
 * French stop words filtered out during keyword extraction.
 * Keeps only meaningful content words for trigger matching.
 */
const STOP_WORDS = new Set([
  "le", "la", "les", "de", "du", "des", "un", "une", "et", "est", "en",
  "que", "qui", "dans", "pour", "pas", "sur", "ce", "il", "je", "tu",
  "nous", "vous", "mon", "ton", "son", "mes", "tes", "ses", "avec", "plus",
  "mais", "ou", "donc", "car", "ni", "ne", "se", "sa", "au", "aux", "par",
  "cette", "ces", "ete", "etre", "avoir", "faire", "dit", "comme", "tout",
  "aussi", "bien", "tres", "trop", "peu", "ici", "la", "quand", "comment",
  "quoi", "quel", "quelle", "quels", "quelles", "puis", "peut", "doit",
  "faut", "cela", "cet", "sont", "ont", "fait", "vais", "vas", "avez",
]);

/**
 * Normalize and extract meaningful keywords from a French message.
 * Strips accents, lowercases, removes stop words and short tokens.
 */
export function extractKeywords(message: string): string[] {
  const normalized = message
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase();

  return normalized
    .split(/[^a-z0-9]+/)
    .filter(word => word.length > 2 && !STOP_WORDS.has(word));
}

/**
 * Deterministic Engram routing engine.
 *
 * Scores each BrainAtom against the current context using a multi-gate system:
 * - Gate 1 (hard): maturity range — atom is discarded if outside range
 * - Gate 2 (soft): sector relevance — bonus/penalty but not elimination
 * - Boost: persona affinity
 * - Boost: keyword trigger matches (fuzzy substring matching)
 * - Boost: learning feedback
 *
 * Returns the top N atoms sorted by relevance score.
 */
export function routeEngram(context: EngramContext): BrainAtom[] {
  const MAX_ATOMS = 8;
  const allAtoms = getAllAtoms();

  const scored = allAtoms.map(atom => {
    let score = atom.weight;

    // Gate 1: Hard maturity filter
    if (
      context.maturityGlobal < atom.maturityRange[0] ||
      context.maturityGlobal > atom.maturityRange[1]
    ) {
      return { atom, score: -1 };
    }

    // Gate 2: Sector relevance (soft)
    if (atom.sectorRelevance && atom.sectorRelevance.length > 0) {
      if (atom.sectorRelevance.includes(context.sector)) {
        score += 2;
      } else {
        score -= 3;
      }
    }

    // Boost: Persona affinity
    if (atom.personaAffinity.includes(context.persona)) {
      score += 3;
    }

    // Boost: Keyword trigger matching (fuzzy substring)
    const triggerMatches = atom.triggers.filter(trigger => {
      const normalizedTrigger = trigger
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .toLowerCase();
      return context.messageKeywords.some(
        kw => normalizedTrigger.includes(kw) || kw.includes(normalizedTrigger)
      );
    });
    score += triggerMatches.length * 2;

    // Boost: Learning feedback (from nightly cron consolidation)
    if (context.learningBoosts?.[atom.category]) {
      score += context.learningBoosts[atom.category];
    }

    return { atom, score };
  });

  return scored
    .filter(item => item.score > 0)
    .sort((a, b) => b.score - a.score)
    .slice(0, MAX_ATOMS)
    .map(item => item.atom);
}
