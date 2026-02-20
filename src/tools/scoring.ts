/**
 * Scoring MCP tools -- maturity_score, offer_evaluate, positioning_evaluate
 */

import type { Tool } from "@modelcontextprotocol/sdk/types.js";
import {
  calculateMaturityScore,
  type BusinessData,
  type MaturityScore,
} from "../knowledge/scoring/index.js";
import { getSector } from "../knowledge/sectors/index.js";

export function getScoringTools(): Tool[] {
  return [
    {
      name: "maturity_score",
      description:
        "Calculate an 8-pillar marketing maturity score from business data. Returns scores for positioning, offer, storytelling, credibility, acquisition, pricing, retention, mindset + global score + priority actions.",
      inputSchema: {
        type: "object" as const,
        properties: {
          business_data: {
            type: "object",
            description:
              "Business data object with optional fields: settings (company_name, business_niche, services_offered, target_audience, brand_voice, custom_instructions), leads[], campaigns[], sequences[], goals[], content[], emailStats, revenue",
          },
        },
        required: ["business_data"],
      },
    },
    {
      name: "offer_evaluate",
      description:
        "Evaluate a freelance offer using Hormozi's Value Equation (Dream Outcome x Perceived Likelihood / Time Delay x Effort & Sacrifice). Returns packaging recommendations, value gaps, and pricing alignment.",
      inputSchema: {
        type: "object" as const,
        properties: {
          offer_description: {
            type: "string",
            description: "Full description of the offer/service",
          },
          pricing: {
            type: "number",
            description: "Current price in EUR",
          },
          sector: {
            type: "string",
            description:
              "Business sector: developer, designer, consultant, photographer, writer, trainer, marketer, coach, saas_founder, general",
          },
          target_audience: {
            type: "string",
            description: "Who this offer is for",
          },
        },
        required: ["offer_description", "pricing"],
      },
    },
    {
      name: "positioning_evaluate",
      description:
        "Evaluate a positioning statement using Purple Cow test, ICP alignment, and category creation opportunities. Returns differentiation score, uniqueness analysis, and repositioning suggestions.",
      inputSchema: {
        type: "object" as const,
        properties: {
          positioning_statement: {
            type: "string",
            description:
              "The freelancer's positioning statement or tagline",
          },
          niche: {
            type: "string",
            description: "Business niche or market segment",
          },
          sector: {
            type: "string",
            description:
              "Business sector: developer, designer, consultant, photographer, writer, trainer, marketer, coach, saas_founder, general",
          },
          competitors: {
            type: "array",
            items: { type: "string" },
            description: "Known competitor positioning statements for comparison",
          },
        },
        required: ["positioning_statement"],
      },
    },
  ];
}

export async function handleScoringTool(
  name: string,
  args: Record<string, unknown>
): Promise<{ content: Array<{ type: "text"; text: string }> } | null> {
  switch (name) {
    case "maturity_score":
      return handleMaturityScore(args);
    case "offer_evaluate":
      return handleOfferEvaluate(args);
    case "positioning_evaluate":
      return handlePositioningEvaluate(args);
    default:
      return null;
  }
}

// ── maturity_score ──

function handleMaturityScore(
  args: Record<string, unknown>
): { content: Array<{ type: "text"; text: string }> } {
  const businessData = (args.business_data ?? {}) as BusinessData;
  const scores = calculateMaturityScore(businessData);

  // Identify the 3 weakest pillars as priority actions
  const pillars: Array<{ name: string; score: number; action: string }> = [
    {
      name: "positioning",
      score: scores.positioning,
      action:
        "Definir une niche precise avec un ICP clair. Un positionnement flou attire des leads mal qualifies et force la competition par le prix.",
    },
    {
      name: "offer",
      score: scores.offer,
      action:
        "Structurer l'offre en 3 tiers (starter, pro, premium) avec une proposition de valeur claire pour chaque niveau. L'offre doit etre 'no-brainer' pour le bon profil.",
    },
    {
      name: "storytelling",
      score: scores.storytelling,
      action:
        "Developper une voix de marque distinctive et un narratif coherent sur tous les canaux. Le client doit ressentir une personnalite, pas juste une competence.",
    },
    {
      name: "credibility",
      score: scores.credibility,
      action:
        "Accumuler des preuves sociales quantifiees (etudes de cas avec chiffres, temoignages specifiques, resultats mesurables). La credibilite se construit avec des preuves, pas des promesses.",
    },
    {
      name: "acquisition",
      score: scores.acquisition,
      action:
        "Mettre en place un systeme d'acquisition reproductible avec au moins 2 canaux actifs et des sequences automatisees. L'acquisition ne doit pas dependre de l'effort quotidien.",
    },
    {
      name: "pricing",
      score: scores.pricing,
      action:
        "Passer d'un pricing au temps a un pricing a la valeur. Ancrer le prix sur le resultat delivre, pas sur les heures passees. Tester une augmentation de 30%.",
    },
    {
      name: "retention",
      score: scores.retention,
      action:
        "Creer un parcours post-projet avec suivi a J+30, J+90. Mettre en place un programme de recommandation et des offres d'upsell pour les clients existants.",
    },
    {
      name: "mindset",
      score: scores.mindset,
      action:
        "Definir des objectifs chiffres et mesurer les KPIs chaque semaine. Un business sans metriques est un hobby. Tracker le pipeline, le taux de conversion, et la valeur moyenne.",
    },
  ];

  // Sort by score ascending to find weakest pillars
  const priorityActions = pillars
    .sort((a, b) => a.score - b.score)
    .slice(0, 3)
    .map((p) => ({
      pillar: p.name,
      score: p.score,
      priority_action: p.action,
    }));

  // Determine maturity level
  const level = getMaturityLevel(scores.global);

  return jsonResult({
    scores,
    maturity_level: level,
    priority_actions: priorityActions,
    interpretation: buildInterpretation(scores, level),
  });
}

function getMaturityLevel(global: number): {
  level: string;
  label: string;
  description: string;
} {
  if (global < 20)
    return {
      level: "debutant",
      label: "Debutant",
      description:
        "Le business est en phase de lancement. Les fondations marketing sont a construire. Priorite absolue : positionnement + offre.",
    };
  if (global < 40)
    return {
      level: "emergent",
      label: "Emergent",
      description:
        "Les bases existent mais manquent de structure. Le business genere du CA mais pas de facon previsible. Focus : systematiser l'acquisition.",
    };
  if (global < 60)
    return {
      level: "structure",
      label: "Structure",
      description:
        "Le business a des fondations solides et des processus en place. L'enjeu : optimiser et scaler ce qui marche. Focus : retention + pricing.",
    };
  if (global < 80)
    return {
      level: "avance",
      label: "Avance",
      description:
        "Business mature avec des systemes qui tournent. L'enjeu : differenciation premium et automatisation avancee. Focus : storytelling + credibilite.",
    };
  return {
    level: "expert",
    label: "Expert",
    description:
      "Business d'elite. Tous les piliers sont solides. L'enjeu : innovation, thought leadership, et creation de categorie. Focus : maintien + experimentation.",
  };
}

function buildInterpretation(
  scores: MaturityScore,
  level: { level: string; label: string }
): string {
  const parts: string[] = [];
  parts.push(
    `Maturite globale : ${scores.global}/100 (${level.label}).`
  );

  // Identify strongest pillar
  const pillarEntries = Object.entries(scores).filter(
    ([k]) => k !== "global"
  ) as [string, number][];
  const strongest = pillarEntries.reduce((a, b) =>
    a[1] > b[1] ? a : b
  );
  const weakest = pillarEntries.reduce((a, b) =>
    a[1] < b[1] ? a : b
  );

  parts.push(
    `Point fort : ${strongest[0]} (${strongest[1]}/100). C'est un levier a capitaliser.`
  );
  parts.push(
    `Point faible : ${weakest[0]} (${weakest[1]}/100). C'est le bottleneck a debloquer en priorite.`
  );

  // Check for dangerous gaps
  const gap = strongest[1] - weakest[1];
  if (gap > 50) {
    parts.push(
      `Attention : ecart de ${gap} points entre le meilleur et le pire pilier. Un business desequilibre est fragile — la chaine est aussi forte que son maillon le plus faible.`
    );
  }

  return parts.join(" ");
}

// ── offer_evaluate ──

function handleOfferEvaluate(
  args: Record<string, unknown>
): { content: Array<{ type: "text"; text: string }> } {
  const description = String(args.offer_description ?? "");
  const pricing = Number(args.pricing ?? 0);
  const sectorKey = String(args.sector ?? "general");
  const targetAudience = String(args.target_audience ?? "");

  const sector = getSector(sectorKey);
  const lower = description.toLowerCase();

  // ── Hormozi Value Equation Analysis ──
  // Value = (Dream Outcome x Perceived Likelihood) / (Time Delay x Effort & Sacrifice)

  // Dream Outcome: Is the result clearly articulated?
  const outcomeSignals = [
    "resultat",
    "objectif",
    "croissance",
    "revenue",
    "chiffre",
    "clients",
    "leads",
    "conversions",
    "impact",
    "transformation",
    "performance",
    "roi",
    "retour",
  ];
  const outcomeScore = scorePresence(lower, outcomeSignals);

  // Perceived Likelihood: Does the offer include proof elements?
  const proofSignals = [
    "garanti",
    "prouve",
    "temoignage",
    "etude de cas",
    "resultat",
    "certifie",
    "experience",
    "methode",
    "process",
    "framework",
    "accompagnement",
  ];
  const likelihoodScore = scorePresence(lower, proofSignals);

  // Time Delay: Does the offer promise speed?
  const speedSignals = [
    "rapide",
    "immediat",
    "jour",
    "semaine",
    "48h",
    "24h",
    "express",
    "accelere",
    "sprint",
    "quick",
    "fast",
  ];
  const speedScore = scorePresence(lower, speedSignals);

  // Effort & Sacrifice: Does the offer minimize client effort?
  const easeSignals = [
    "cle en main",
    "tout inclus",
    "simple",
    "facile",
    "sans effort",
    "automatise",
    "delegue",
    "pris en charge",
    "gere",
    "autonome",
    "formation",
    "support",
  ];
  const easeScore = scorePresence(lower, easeSignals);

  // Overall Hormozi value score
  const hormoziNumerator = (outcomeScore + likelihoodScore) / 2;
  const hormoziDenominator = Math.max(
    ((100 - speedScore) + (100 - easeScore)) / 2,
    10
  );
  const hormoziRatio = Math.round(
    (hormoziNumerator / hormoziDenominator) * 100
  );

  // ── Packaging Analysis ──
  const hasThreeTiers =
    lower.includes("starter") ||
    lower.includes("pro") ||
    lower.includes("premium") ||
    lower.includes("essentiel") ||
    lower.includes("avance") ||
    lower.includes("expert") ||
    (lower.includes("pack") && (lower.includes("1") || lower.includes("2") || lower.includes("3")));

  const hasGuarantee =
    lower.includes("garanti") ||
    lower.includes("rembours") ||
    lower.includes("satisfait");

  const hasDeliverables =
    lower.includes("livrable") ||
    lower.includes("deliverable") ||
    lower.includes("inclus") ||
    lower.includes("comprend");

  // ── Pricing signals ──
  const underPricingIndicators: string[] = [];
  if (pricing > 0 && pricing < 500) {
    underPricingIndicators.push(
      "Prix sous 500EUR : pour un service freelance B2B, c'est presque toujours un signal de sous-pricing. Le prospect percoit un prix bas comme un risque, pas comme une aubaine."
    );
  }
  if (pricing > 0 && pricing < 1000 && sectorKey !== "general") {
    const sectorPricing = sector.pricingStrategy;
    underPricingIndicators.push(
      `Strategie pricing recommandee pour le secteur ${sectorKey} : ${sectorPricing}`
    );
  }

  const recommendations: string[] = [];

  if (!hasThreeTiers) {
    recommendations.push(
      "Structurer l'offre en 3 tiers (Essentiel, Pro, Premium). Le tier du milieu sera choisi par 60% des clients (effet de compromis). Le tier haut ancre la valeur."
    );
  }
  if (!hasGuarantee) {
    recommendations.push(
      "Ajouter une garantie pour reduire le risque percu. Meme une garantie partielle ('satisfait ou on retravaille') augmente drastiquement la conversion."
    );
  }
  if (!hasDeliverables) {
    recommendations.push(
      "Lister explicitement les livrables. Le prospect doit savoir exactement ce qu'il recoit. La tangibilite augmente la valeur percue."
    );
  }
  if (outcomeScore < 40) {
    recommendations.push(
      "L'offre ne communique pas assez clairement le resultat final. Reformuler en 'Vous obtiendrez X en Y temps' plutot que lister des features."
    );
  }
  if (likelihoodScore < 40) {
    recommendations.push(
      "Ajouter des elements de preuve (temoignages, chiffres, etudes de cas). Le prospect doit croire que le resultat est atteignable, pas juste possible."
    );
  }
  if (easeScore < 40) {
    recommendations.push(
      "Mettre en avant la simplicite pour le client. Moins d'effort percu = plus de valeur percue. 'On gere tout' vaut plus que 'on vous forme'."
    );
  }

  return jsonResult({
    hormozi_value_equation: {
      dream_outcome: outcomeScore,
      perceived_likelihood: likelihoodScore,
      speed_of_result: speedScore,
      ease_of_use: easeScore,
      value_ratio: hormoziRatio,
      interpretation:
        hormoziRatio > 80
          ? "Offre a forte valeur percue. Le ratio valeur/effort est excellent."
          : hormoziRatio > 50
            ? "Offre correcte mais des leviers d'amelioration existent. Focus sur la preuve et la rapidite du resultat."
            : "Offre sous-optimisee. Le prospect ne percoit pas assez de valeur par rapport a l'investissement demande.",
    },
    packaging: {
      has_tiers: hasThreeTiers,
      has_guarantee: hasGuarantee,
      has_clear_deliverables: hasDeliverables,
    },
    pricing_analysis: {
      current_price: pricing,
      sector_strategy: sector.pricingStrategy,
      under_pricing_alerts: underPricingIndicators,
    },
    recommendations,
    sector_context: {
      key: sectorKey,
      offer_structure_advice: sector.offerStructure,
      storytelling_angle: sector.storytellingAngle,
    },
    target_audience_note: targetAudience
      ? `Audience cible declaree : ${targetAudience}. L'offre doit etre formulee dans le langage de cette audience, pas dans le jargon du prestataire.`
      : "Aucune audience cible declaree. Sans ICP clair, l'offre est generique et donc faible.",
  });
}

function scorePresence(text: string, signals: string[]): number {
  let hits = 0;
  for (const signal of signals) {
    if (text.includes(signal)) hits++;
  }
  return Math.min(Math.round((hits / signals.length) * 100), 100);
}

// ── positioning_evaluate ──

function handlePositioningEvaluate(
  args: Record<string, unknown>
): { content: Array<{ type: "text"; text: string }> } {
  const statement = String(args.positioning_statement ?? "");
  const niche = String(args.niche ?? "");
  const sectorKey = String(args.sector ?? "general");
  const competitors = (args.competitors as string[]) ?? [];

  const sector = getSector(sectorKey);
  const lower = statement.toLowerCase();

  // ── Purple Cow Test ──
  // Is the positioning remarkable enough that someone would mention it to a friend?
  const purpleCowCriteria = {
    specificity: false,
    differentiation: false,
    memorability: false,
    clarity: false,
    emotion: false,
  };

  // Specificity: Does it mention a specific audience or outcome?
  const specificitySignals = [
    "pour les",
    "destine aux",
    "specialise",
    "expert en",
    "uniquement",
    "exclusivement",
    "freelance",
    "startup",
    "pme",
    "e-commerce",
    "saas",
  ];
  purpleCowCriteria.specificity = specificitySignals.some((s) =>
    lower.includes(s)
  );

  // Differentiation: Does it claim something unique?
  const diffSignals = [
    "seul",
    "unique",
    "premier",
    "different",
    "contrairement",
    "au lieu de",
    "pas comme",
    "nouvelle approche",
    "methode",
    "framework",
    "systeme",
  ];
  purpleCowCriteria.differentiation = diffSignals.some((s) =>
    lower.includes(s)
  );

  // Memorability: Is it short enough to remember? (Under 15 words)
  const wordCount = statement.trim().split(/\s+/).length;
  purpleCowCriteria.memorability = wordCount <= 15;

  // Clarity: Could a 12-year-old understand it?
  const complexWords = [
    "paradigme",
    "synergie",
    "holistique",
    "disruptif",
    "scalable",
    "leverage",
    "ecosystem",
    "best-in-class",
    "cutting-edge",
    "innovative",
  ];
  const hasJargon = complexWords.some((w) => lower.includes(w));
  purpleCowCriteria.clarity = !hasJargon && wordCount <= 20;

  // Emotion: Does it evoke a feeling?
  const emotionSignals = [
    "liberez",
    "transformez",
    "imaginez",
    "sans stress",
    "enfin",
    "revez",
    "meritez",
    "confiance",
    "serein",
    "ambitieux",
    "passion",
  ];
  purpleCowCriteria.emotion = emotionSignals.some((s) =>
    lower.includes(s)
  );

  const purpleCowScore = Object.values(purpleCowCriteria).filter(Boolean).length;
  const purpleCowTotal = Object.keys(purpleCowCriteria).length;

  // ── ICP Alignment ──
  const icpSignals: string[] = [];
  if (!purpleCowCriteria.specificity) {
    icpSignals.push(
      "Le positionnement ne mentionne pas d'audience specifique. 'Pour tout le monde' = pour personne. Ajouter 'pour [type de client] qui [probleme specifique]'."
    );
  }
  if (niche && !lower.includes(niche.toLowerCase().slice(0, 5))) {
    icpSignals.push(
      `Le positionnement ne mentionne pas explicitement la niche '${niche}'. Le prospect doit se reconnaitre immediatement.`
    );
  }
  if (wordCount > 20) {
    icpSignals.push(
      `Le positionnement fait ${wordCount} mots. Objectif : 10-15 mots max. Si tu ne peux pas le dire en une phrase, c'est que c'est pas assez clair.`
    );
  }

  // ── Category Creation Opportunities ──
  const categoryOpportunities: string[] = [];
  if (!purpleCowCriteria.differentiation) {
    categoryOpportunities.push(
      "Creer une categorie propre plutot que de se battre dans une categorie existante. Exemple : 'Je ne fais pas du design web, je fais du Revenue Design — du design qui genere du CA mesurable.'"
    );
  }
  categoryOpportunities.push(
    `Pour le secteur ${sectorKey}, positionnement recommande : ${sector.positioning}`
  );
  if (sector.storytellingAngle) {
    categoryOpportunities.push(
      `Angle storytelling a exploiter : ${sector.storytellingAngle}`
    );
  }

  // ── Competitor Comparison ──
  const competitorAnalysis =
    competitors.length > 0
      ? competitors.map((c) => {
          const similarity = computeWordOverlap(lower, c.toLowerCase());
          return {
            competitor_statement: c,
            word_overlap_percent: similarity,
            verdict:
              similarity > 50
                ? "DANGER : Positionnement trop similaire. Vous etes en Red Ocean — guerre des prix garantie."
                : similarity > 25
                  ? "Chevauchement partiel. Des elements communs existent — il faut renforcer la differenciation."
                  : "Bon ecart. Votre positionnement est suffisamment distinct.",
          };
        })
      : null;

  // ── Differentiation Score ──
  const diffScore = Math.round(
    ((purpleCowScore / purpleCowTotal) * 70 +
      (purpleCowCriteria.differentiation ? 15 : 0) +
      (purpleCowCriteria.specificity ? 15 : 0))
  );

  // ── Repositioning Suggestions ──
  const suggestions: string[] = [];
  if (!purpleCowCriteria.specificity) {
    suggestions.push(
      "Ajouter un ICP specifique : 'J'aide [qui] a [quoi] grace a [comment]'."
    );
  }
  if (!purpleCowCriteria.differentiation) {
    suggestions.push(
      "Ajouter un element differenciateur : methode proprietary, garantie de resultat, angle unique, format innovant."
    );
  }
  if (!purpleCowCriteria.memorability) {
    suggestions.push(
      "Raccourcir. Le meilleur positionnement tient sur un post-it. Couper tout ce qui n'est pas essentiel."
    );
  }
  if (hasJargon) {
    suggestions.push(
      "Eliminer le jargon. Remplacer les buzzwords par des mots simples que le client utilise lui-meme."
    );
  }
  if (!purpleCowCriteria.emotion) {
    suggestions.push(
      "Ajouter une dimension emotionnelle. Le cerveau decide avec l'emotion et justifie avec la logique. Quel sentiment le client veut-il ressentir ?"
    );
  }

  return jsonResult({
    positioning_statement: statement,
    niche: niche || null,
    sector: sectorKey,
    purple_cow_test: {
      score: `${purpleCowScore}/${purpleCowTotal}`,
      criteria: purpleCowCriteria,
      verdict:
        purpleCowScore >= 4
          ? "Positionnement remarquable. On en parle a ses amis."
          : purpleCowScore >= 2
            ? "Positionnement correct mais generique. Pas assez memorable pour creer du bouche-a-oreille."
            : "Positionnement faible. Interchangeable avec 80% des concurrents.",
    },
    differentiation_score: diffScore,
    icp_alignment: icpSignals,
    category_creation: categoryOpportunities,
    competitor_analysis: competitorAnalysis,
    repositioning_suggestions: suggestions,
    sector_recommendation: sector.positioning,
  });
}

function computeWordOverlap(a: string, b: string): number {
  const wordsA = new Set(
    a
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .split(/[^a-z0-9]+/)
      .filter((w) => w.length > 3)
  );
  const wordsB = new Set(
    b
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .split(/[^a-z0-9]+/)
      .filter((w) => w.length > 3)
  );

  if (wordsA.size === 0 || wordsB.size === 0) return 0;

  let overlap = 0;
  for (const w of wordsA) {
    if (wordsB.has(w)) overlap++;
  }

  return Math.round((overlap / Math.max(wordsA.size, wordsB.size)) * 100);
}

// ── Helpers ──

function jsonResult(data: unknown): {
  content: Array<{ type: "text"; text: string }>;
} {
  return { content: [{ type: "text", text: JSON.stringify(data, null, 2) }] };
}
