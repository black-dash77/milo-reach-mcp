/**
 * MCP Resources -- URI-based browsable knowledge for Milo Reach.
 *
 * Resources:
 *   milo://atoms       — All marketing knowledge atoms
 *   milo://personas    — 5 specialized personas
 *   milo://sectors     — 10 sector profiles
 *   milo://biases      — Cognitive biases + emotional stages
 *   milo://frameworks  — All marketing frameworks
 *   milo://dna         — Milo's core identity DNA
 */

import type { Server } from "@modelcontextprotocol/sdk/server/index.js";
import {
  ListResourcesRequestSchema,
  ReadResourceRequestSchema,
} from "@modelcontextprotocol/sdk/types.js";

import { getAllAtoms, getAllCategories } from "../knowledge/atoms/index.js";
import { PERSONAS, getAllPersonaKeys } from "../knowledge/personas/index.js";
import {
  SECTOR_PROFILES,
  getAllSectorKeys,
} from "../knowledge/sectors/index.js";
import {
  COGNITIVE_BIASES,
  BIAS_TEMPLATES,
  EMOTIONAL_STAGES,
  OBJECTION_HANDLERS,
  POWER_LANGUAGE,
  TIMING_INTELLIGENCE,
} from "../knowledge/biases/index.js";
import {
  getFramework,
  getAllFrameworkKeys,
} from "../knowledge/frameworks/index.js";
import { MILO_DNA } from "../knowledge/dna.js";

export function registerResources(server: Server): void {
  // ── List all available resources ──
  server.setRequestHandler(ListResourcesRequestSchema, async () => ({
    resources: [
      {
        uri: "milo://atoms",
        name: "Marketing Atoms",
        description: `~250 atomic marketing intelligence units across ${getAllCategories().length} categories. Each atom contains a principle, application, triggers, and persona affinity.`,
        mimeType: "application/json",
      },
      {
        uri: "milo://personas",
        name: "Milo Personas",
        description:
          "5 specialized neuromarketing personas (Prospector, Strategist, Writer, Analyst, Automator) with deep brain extensions.",
        mimeType: "application/json",
      },
      {
        uri: "milo://sectors",
        name: "Sector Profiles",
        description:
          "10 sector-specific marketing intelligence profiles with positioning, offer structure, pricing strategy, and storytelling angles.",
        mimeType: "application/json",
      },
      {
        uri: "milo://biases",
        name: "Cognitive Biases & Neuromarketing",
        description:
          "15 cognitive biases with application templates, 6 emotional stages, objection handlers, power language, and timing intelligence.",
        mimeType: "application/json",
      },
      {
        uri: "milo://frameworks",
        name: "Marketing Frameworks",
        description:
          "12 structured marketing frameworks: objection handlers, power language, timing intelligence, sales call scripts, SEO intent mapping, launch playbooks, webinar funnels, community loops, partnership models, attribution models, LTV models, competitive maps.",
        mimeType: "application/json",
      },
      {
        uri: "milo://dna",
        name: "Milo DNA",
        description:
          "Milo's core identity: senior growth strategist intuition, always-active inner voice guiding all recommendations.",
        mimeType: "text/plain",
      },
    ],
  }));

  // ── Read a specific resource by URI ──
  server.setRequestHandler(ReadResourceRequestSchema, async (request) => {
    const { uri } = request.params;

    switch (uri) {
      case "milo://atoms":
        return {
          contents: [
            {
              uri,
              mimeType: "application/json",
              text: JSON.stringify(
                {
                  total: getAllAtoms().length,
                  categories: getAllCategories(),
                  atoms: getAllAtoms(),
                },
                null,
                2
              ),
            },
          ],
        };

      case "milo://personas":
        return {
          contents: [
            {
              uri,
              mimeType: "application/json",
              text: JSON.stringify(
                {
                  total: getAllPersonaKeys().length,
                  personas: Object.values(PERSONAS).map((p) => ({
                    key: p.key,
                    name: p.name,
                    role: p.role,
                    brain_extension: p.brainExtension,
                  })),
                },
                null,
                2
              ),
            },
          ],
        };

      case "milo://sectors":
        return {
          contents: [
            {
              uri,
              mimeType: "application/json",
              text: JSON.stringify(
                {
                  total: getAllSectorKeys().length,
                  sectors: Object.entries(SECTOR_PROFILES).map(
                    ([key, profile]) => ({
                      key,
                      labels: profile.labels,
                      positioning: profile.positioning,
                      offer_structure: profile.offerStructure,
                      priority_channels: profile.priorityChannels,
                      pricing_strategy: profile.pricingStrategy,
                      storytelling_angle: profile.storytellingAngle,
                      client_size_adaptation: profile.clientSizeAdaptation,
                    })
                  ),
                },
                null,
                2
              ),
            },
          ],
        };

      case "milo://biases":
        return {
          contents: [
            {
              uri,
              mimeType: "application/json",
              text: JSON.stringify(
                {
                  cognitive_biases: COGNITIVE_BIASES,
                  bias_templates: BIAS_TEMPLATES,
                  emotional_stages: EMOTIONAL_STAGES,
                  objection_handlers: OBJECTION_HANDLERS,
                  power_language: POWER_LANGUAGE,
                  timing_intelligence: TIMING_INTELLIGENCE,
                },
                null,
                2
              ),
            },
          ],
        };

      case "milo://frameworks": {
        const allKeys = getAllFrameworkKeys();
        const frameworks: Record<string, unknown> = {};
        for (const key of allKeys) {
          frameworks[key] = getFramework(key);
        }
        return {
          contents: [
            {
              uri,
              mimeType: "application/json",
              text: JSON.stringify(
                {
                  total: allKeys.length,
                  framework_keys: allKeys,
                  frameworks,
                },
                null,
                2
              ),
            },
          ],
        };
      }

      case "milo://dna":
        return {
          contents: [
            {
              uri,
              mimeType: "text/plain",
              text: MILO_DNA,
            },
          ],
        };

      default:
        throw new Error(`Unknown resource URI: ${uri}`);
    }
  });

  console.error("[milo-reach] Registered 6 resources");
}
