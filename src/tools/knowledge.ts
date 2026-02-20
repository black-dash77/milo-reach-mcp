/**
 * Knowledge MCP tools -- atoms_search, atoms_route, bias_lookup, framework_get
 */

import type { Tool } from "@modelcontextprotocol/sdk/types.js";
import {
  getAllAtoms,
  getAtomsByCategory,
  getAllCategories,
} from "../knowledge/atoms/index.js";
import type { BrainCategory } from "../knowledge/atoms/index.js";
import { routeEngram, extractKeywords } from "../knowledge/router.js";
import {
  COGNITIVE_BIASES,
  BIAS_TEMPLATES,
  EMOTIONAL_STAGES,
} from "../knowledge/biases/index.js";
import type { EmotionalStage, CognitiveBias } from "../knowledge/biases/index.js";
import { getFramework, getAllFrameworkKeys } from "../knowledge/frameworks/index.js";

export function getKnowledgeTools(): Tool[] {
  return [
    {
      name: "atoms_search",
      description:
        "Search Milo's ~250 marketing knowledge atoms by keyword or category. Returns atomic marketing intelligence units with principles, applications, and triggers.",
      inputSchema: {
        type: "object" as const,
        properties: {
          query: {
            type: "string",
            description: "Search keywords (French or English)",
          },
          category: {
            type: "string",
            description:
              "Filter by category: positioning, offer, storytelling, persuasion, pricing, acquisition, copywriting, branding, retention, mindset, ads, automation, sales_calls, seo_psychology, video_persuasion, events_webinars, community, partnerships, product_marketing, analytics_deep, competitive_intel",
          },
          limit: {
            type: "number",
            description: "Max results (default 10)",
          },
        },
        required: ["query"],
      },
    },
    {
      name: "atoms_route",
      description:
        "Contextual Engram routing: returns the top 8 most relevant marketing atoms for the given business context. Uses multi-gate scoring (maturity filter, sector bonus, persona affinity, keyword triggers).",
      inputSchema: {
        type: "object" as const,
        properties: {
          sector: {
            type: "string",
            description:
              "Business sector: developer, designer, consultant, photographer, writer, trainer, marketer, coach, saas_founder, general",
          },
          maturity_global: {
            type: "number",
            description: "Global maturity score 0-100",
          },
          persona: {
            type: "string",
            description:
              "Active persona: Prospector, Strategist, Writer, Analyst, Automator",
          },
          keywords: {
            type: "array",
            items: { type: "string" },
            description: "Context keywords from the user message",
          },
        },
        required: ["sector", "maturity_global", "persona", "keywords"],
      },
    },
    {
      name: "bias_lookup",
      description:
        "Look up cognitive biases and neuromarketing templates for a given emotional stage or bias name. Returns applicable biases, templates, and emotional stage data.",
      inputSchema: {
        type: "object" as const,
        properties: {
          stage: {
            type: "string",
            description:
              "Emotional stage: awareness, curiosity, interest, desire, action, loyalty",
          },
          bias_name: {
            type: "string",
            description:
              "Specific bias name: reciprocity, social_proof, scarcity, framing, anchoring, mere_exposure, commitment_consistency, loss_aversion, authority, confirmation_bias, endowment_effect, sunk_cost, community, curiosity_gap, pattern_interrupt",
          },
        },
      },
    },
    {
      name: "framework_get",
      description:
        "Get a complete marketing framework by name. Returns structured framework data.",
      inputSchema: {
        type: "object" as const,
        properties: {
          framework: {
            type: "string",
            description:
              "Framework name: objection_handlers, power_language, timing_intelligence, sales_call_scripts, seo_intent_mapping, launch_playbooks, webinar_funnels, community_loops, partnership_models, attribution_models, ltv_models, competitive_maps",
          },
        },
        required: ["framework"],
      },
    },
  ];
}

export async function handleKnowledgeTool(
  name: string,
  args: Record<string, unknown>
): Promise<{ content: Array<{ type: "text"; text: string }> } | null> {
  switch (name) {
    case "atoms_search":
      return handleAtomsSearch(args);
    case "atoms_route":
      return handleAtomsRoute(args);
    case "bias_lookup":
      return handleBiasLookup(args);
    case "framework_get":
      return handleFrameworkGet(args);
    default:
      return null;
  }
}

function handleAtomsSearch(
  args: Record<string, unknown>
): { content: Array<{ type: "text"; text: string }> } {
  const query = String(args.query ?? "");
  const category = args.category as string | undefined;
  const limit = Number(args.limit ?? 10);

  if (!query && !category) {
    return jsonResult({
      total_atoms: getAllAtoms().length,
      categories: getAllCategories(),
      message: "Fournir une query ou une category pour filtrer les atoms.",
    });
  }

  const keywords = extractKeywords(query || "");

  // If only category, return all atoms in that category
  if (category && keywords.length === 0) {
    const atoms = getAtomsByCategory(category as BrainCategory);
    return jsonResult({
      category,
      total: atoms.length,
      atoms: atoms.slice(0, limit),
    });
  }

  // Search with keyword scoring
  let filtered = getAllAtoms();
  if (category) {
    filtered = filtered.filter((a) => a.category === category);
  }

  const scored = filtered.map((atom) => {
    let score = 0;
    for (const kw of keywords) {
      for (const trigger of atom.triggers) {
        const normalizedTrigger = trigger
          .normalize("NFD")
          .replace(/[\u0300-\u036f]/g, "")
          .toLowerCase();
        if (normalizedTrigger.includes(kw) || kw.includes(normalizedTrigger)) {
          score++;
        }
      }
      // Also search in principle
      const principle = atom.principle
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .toLowerCase();
      if (principle.includes(kw)) score += 0.5;

      // Also search in application
      const application = atom.application
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .toLowerCase();
      if (application.includes(kw)) score += 0.3;
    }
    return { atom, score };
  });

  const results = scored
    .filter((s) => s.score > 0)
    .sort((a, b) => b.score - a.score)
    .slice(0, limit)
    .map((s) => s.atom);

  return jsonResult({
    query,
    category: category ?? null,
    total: results.length,
    atoms: results,
  });
}

function handleAtomsRoute(
  args: Record<string, unknown>
): { content: Array<{ type: "text"; text: string }> } {
  const sector = String(args.sector ?? "general");
  const maturityGlobal = Number(args.maturity_global ?? 50);
  const persona = String(args.persona ?? "Strategist");
  const rawKeywords = (args.keywords as string[]) ?? [];

  // Extract keywords from each provided keyword string
  const messageKeywords = rawKeywords.flatMap((kw) => extractKeywords(kw));

  const atoms = routeEngram({
    sector,
    maturityGlobal,
    persona,
    messageKeywords,
  });

  return jsonResult({
    context: { sector, maturityGlobal, persona, keywords: rawKeywords },
    total: atoms.length,
    routed_atoms: atoms,
  });
}

function handleBiasLookup(
  args: Record<string, unknown>
): { content: Array<{ type: "text"; text: string }> } {
  const stage = args.stage as string | undefined;
  const biasName = args.bias_name as string | undefined;

  const result: Record<string, unknown> = {};

  if (stage) {
    // Look up biases for this emotional stage
    const stageKey = stage as EmotionalStage;
    const biases = COGNITIVE_BIASES[stageKey];
    const stageInfo = EMOTIONAL_STAGES[stageKey as keyof typeof EMOTIONAL_STAGES];

    if (biases) {
      result.stage = stageKey;
      result.biases = biases;
      result.bias_templates = Object.fromEntries(
        biases.map((b: string) => [b, BIAS_TEMPLATES[b as CognitiveBias] ?? null])
      );
    }
    if (stageInfo) {
      result.stage_info = stageInfo;
    }
    if (!biases && !stageInfo) {
      result.error = `Stage inconnu: ${stage}. Stages valides: awareness, curiosity, interest, desire, action, loyalty`;
    }
  }

  if (biasName) {
    const template = BIAS_TEMPLATES[biasName as CognitiveBias];
    if (template) {
      result.bias_name = biasName;
      result.template = template;

      // Find which stages use this bias
      const stages: string[] = [];
      for (const [stageName, biases] of Object.entries(COGNITIVE_BIASES)) {
        if ((biases as readonly string[]).includes(biasName)) {
          stages.push(stageName);
        }
      }
      result.active_in_stages = stages;
    } else {
      result.error = `Biais inconnu: ${biasName}. Biais valides: ${Object.keys(BIAS_TEMPLATES).join(", ")}`;
    }
  }

  if (!stage && !biasName) {
    result.all_stages = Object.keys(COGNITIVE_BIASES);
    result.all_biases = Object.keys(BIAS_TEMPLATES);
    result.emotional_stages = EMOTIONAL_STAGES;
    result.message =
      "Fournir 'stage' et/ou 'bias_name' pour des resultats specifiques.";
  }

  return jsonResult(result);
}

function handleFrameworkGet(
  args: Record<string, unknown>
): { content: Array<{ type: "text"; text: string }> } {
  const frameworkName = String(args.framework ?? "");

  if (!frameworkName) {
    return jsonResult({
      available_frameworks: getAllFrameworkKeys(),
      message: "Fournir le nom du framework.",
    });
  }

  const framework = getFramework(frameworkName);
  if (!framework) {
    return jsonResult({
      error: `Framework inconnu: ${frameworkName}`,
      available_frameworks: getAllFrameworkKeys(),
    });
  }

  return jsonResult({
    framework: frameworkName,
    data: framework,
  });
}

// -- Helpers --

function jsonResult(data: unknown): {
  content: Array<{ type: "text"; text: string }>;
} {
  return { content: [{ type: "text", text: JSON.stringify(data, null, 2) }] };
}
