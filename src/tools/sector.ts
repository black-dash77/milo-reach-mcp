/**
 * Sector MCP tools -- sector_guide, sector_detect, persona_guide
 */

import type { Tool } from "@modelcontextprotocol/sdk/types.js";
import {
  getSector,
  getAllSectorKeys,
  detectSector,
} from "../knowledge/sectors/index.js";
import {
  PERSONAS,
  getPersonaProfile,
  getAllPersonaKeys,
} from "../knowledge/personas/index.js";

export function getSectorTools(): Tool[] {
  return [
    {
      name: "sector_guide",
      description:
        "Get the complete sector-specific marketing intelligence for a freelancer's sector. Returns positioning advice, offer structure, priority channels, pricing strategy, storytelling angle, and client size adaptation.",
      inputSchema: {
        type: "object" as const,
        properties: {
          sector: {
            type: "string",
            description:
              "Business sector key: developer, designer, consultant, photographer, writer, trainer, marketer, coach, saas_founder, general",
          },
        },
        required: ["sector"],
      },
    },
    {
      name: "sector_detect",
      description:
        "Detect the most relevant business sector from a niche description. Uses keyword matching against sector labels to identify the best fit with confidence score.",
      inputSchema: {
        type: "object" as const,
        properties: {
          niche: {
            type: "string",
            description:
              "Business niche or activity description (French or English)",
          },
        },
        required: ["niche"],
      },
    },
    {
      name: "persona_guide",
      description:
        "Get the deep brain extension for a Milo persona. Returns the persona's specialized reasoning framework and neuromarketing approach for the given role.",
      inputSchema: {
        type: "object" as const,
        properties: {
          persona: {
            type: "string",
            description:
              "Persona name: Prospector, Strategist, Writer, Analyst, Automator",
          },
        },
        required: ["persona"],
      },
    },
  ];
}

export async function handleSectorTool(
  name: string,
  args: Record<string, unknown>
): Promise<{ content: Array<{ type: "text"; text: string }> } | null> {
  switch (name) {
    case "sector_guide":
      return handleSectorGuide(args);
    case "sector_detect":
      return handleSectorDetect(args);
    case "persona_guide":
      return handlePersonaGuide(args);
    default:
      return null;
  }
}

// ── sector_guide ──

function handleSectorGuide(
  args: Record<string, unknown>
): { content: Array<{ type: "text"; text: string }> } {
  const sectorKey = String(args.sector ?? "");

  if (!sectorKey) {
    return jsonResult({
      available_sectors: getAllSectorKeys(),
      message: "Fournir le nom du secteur pour obtenir le guide complet.",
    });
  }

  const profile = getSector(sectorKey);

  // Check if we fell back to general (sector not found)
  const knownKeys = getAllSectorKeys();
  const isExactMatch = knownKeys.includes(sectorKey);

  return jsonResult({
    sector: isExactMatch ? sectorKey : "general",
    fallback_used: !isExactMatch,
    profile: {
      key: profile.key,
      labels: profile.labels,
      positioning: profile.positioning,
      offer_structure: profile.offerStructure,
      priority_channels: profile.priorityChannels,
      pricing_strategy: profile.pricingStrategy,
      storytelling_angle: profile.storytellingAngle,
      client_size_adaptation: profile.clientSizeAdaptation,
    },
    all_sectors: knownKeys,
  });
}

// ── sector_detect ──

function handleSectorDetect(
  args: Record<string, unknown>
): { content: Array<{ type: "text"; text: string }> } {
  const niche = String(args.niche ?? "");

  if (!niche) {
    return jsonResult({
      error: "Fournir une description de niche pour la detection automatique.",
      available_sectors: getAllSectorKeys(),
    });
  }

  const detection = detectSector(niche);
  const profile = getSector(detection.sector);

  return jsonResult({
    input_niche: niche,
    detected_sector: detection.sector,
    confidence: detection.confidence,
    matched_labels: detection.matches,
    sector_profile: {
      key: profile.key,
      labels: profile.labels,
      positioning: profile.positioning,
      offer_structure: profile.offerStructure,
      priority_channels: profile.priorityChannels,
      pricing_strategy: profile.pricingStrategy,
      storytelling_angle: profile.storytellingAngle,
    },
    recommendation:
      detection.confidence >= 0.66
        ? `Detection forte (${Math.round(detection.confidence * 100)}%). Le secteur '${detection.sector}' correspond bien a la niche '${niche}'.`
        : detection.confidence >= 0.33
          ? `Detection partielle (${Math.round(detection.confidence * 100)}%). Le secteur '${detection.sector}' est le plus proche mais la niche pourrait chevaucher plusieurs secteurs.`
          : `Detection faible (${Math.round(detection.confidence * 100)}%). La niche '${niche}' ne correspond clairement a aucun secteur. Utilisation du profil '${detection.sector}' par defaut.`,
    all_sectors: getAllSectorKeys(),
  });
}

// ── persona_guide ──

function handlePersonaGuide(
  args: Record<string, unknown>
): { content: Array<{ type: "text"; text: string }> } {
  const personaName = String(args.persona ?? "");

  if (!personaName) {
    return jsonResult({
      available_personas: getAllPersonaKeys().map((key) => ({
        name: key,
        role: PERSONAS[key]?.role ?? "",
      })),
      message:
        "Fournir le nom de la persona pour obtenir son guide complet.",
    });
  }

  const persona = getPersonaProfile(personaName);

  if (!persona) {
    return jsonResult({
      error: `Persona inconnue : ${personaName}`,
      available_personas: getAllPersonaKeys().map((key) => ({
        name: key,
        role: PERSONAS[key]?.role ?? "",
      })),
    });
  }

  return jsonResult({
    persona: {
      key: persona.key,
      name: persona.name,
      role: persona.role,
      brain_extension: persona.brainExtension,
    },
    usage:
      "Le brainExtension est le prompt de raisonnement profond de cette persona. Il doit etre injecte dans le system prompt quand cette persona est active pour guider la qualite de chaque recommandation.",
    all_personas: getAllPersonaKeys(),
  });
}

// ── Helpers ──

function jsonResult(data: unknown): {
  content: Array<{ type: "text"; text: string }>;
} {
  return { content: [{ type: "text", text: JSON.stringify(data, null, 2) }] };
}
