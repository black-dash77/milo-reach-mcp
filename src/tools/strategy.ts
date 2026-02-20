/**
 * Strategy MCP tools -- strategy_recommend, campaign_plan, pricing_strategy, objection_handle
 */

import type { Tool } from "@modelcontextprotocol/sdk/types.js";
import { OBJECTION_HANDLERS, EMOTIONAL_STAGES, POWER_LANGUAGE } from "../knowledge/biases/index.js";
import type { ObjectionType } from "../knowledge/biases/index.js";
import { routeEngram, extractKeywords } from "../knowledge/router.js";

export function getStrategyTools(): Tool[] {
  return [
    {
      name: "strategy_recommend",
      description:
        "Get prioritized strategic recommendations based on maturity scores, sector, and challenge description. Returns tailored action plan with atoms.",
      inputSchema: {
        type: "object" as const,
        properties: {
          sector: {
            type: "string",
            description: "Business sector: developer, designer, consultant, photographer, writer, trainer, marketer, coach, saas_founder, general",
          },
          maturity_scores: {
            type: "object",
            description: "Maturity scores by pillar (positioning, offer, pricing, acquisition, branding, retention, storytelling, automation). Each 0-100.",
            properties: {
              positioning: { type: "number" },
              offer: { type: "number" },
              pricing: { type: "number" },
              acquisition: { type: "number" },
              branding: { type: "number" },
              retention: { type: "number" },
              storytelling: { type: "number" },
              automation: { type: "number" },
            },
          },
          challenge: { type: "string", description: "Description of the main challenge or goal" },
        },
        required: ["sector", "challenge"],
      },
    },
    {
      name: "campaign_plan",
      description:
        "Create a campaign plan with emotional journey stages, channels, content types, and timing. Based on neurofunnel principles.",
      inputSchema: {
        type: "object" as const,
        properties: {
          objective: { type: "string", description: "Campaign objective (e.g. 'generate 20 qualified leads')" },
          sector: { type: "string", description: "Business sector" },
          budget: { type: "string", description: "Budget range (e.g. '500-2000 EUR')" },
          timeline: { type: "string", description: "Timeline (e.g. '30 days', '3 months')" },
          target_audience: { type: "string", description: "Target audience description" },
        },
        required: ["objective", "sector"],
      },
    },
    {
      name: "pricing_strategy",
      description:
        "Get value-based pricing strategy with tiers, anchoring, and framing recommendations.",
      inputSchema: {
        type: "object" as const,
        properties: {
          service_type: { type: "string", description: "Type of service offered" },
          sector: { type: "string", description: "Business sector" },
          current_pricing: { type: "string", description: "Current pricing model (e.g. '500 EUR/jour', '3000 EUR/projet')" },
          acceptance_rate: { type: "number", description: "Current quote acceptance rate (0-100). If > 80%, signals under-pricing." },
          average_project_value: { type: "number", description: "Average project value in EUR" },
        },
        required: ["service_type", "sector"],
      },
    },
    {
      name: "objection_handle",
      description:
        "Get psychological strategy for handling a specific objection type. Returns OBJECTION_HANDLERS + relevant atoms and approach.",
      inputSchema: {
        type: "object" as const,
        properties: {
          objection_type: {
            type: "string",
            enum: ["price", "timing", "competition", "no_need", "trust"],
            description: "Type of objection to handle",
          },
          context: { type: "string", description: "Additional context about the situation" },
        },
        required: ["objection_type"],
      },
    },
  ];
}

export async function handleStrategyTool(
  name: string,
  args: Record<string, unknown>
): Promise<{ content: Array<{ type: "text"; text: string }> } | null> {
  switch (name) {
    case "strategy_recommend":
      return handleStrategyRecommend(args);
    case "campaign_plan":
      return handleCampaignPlan(args);
    case "pricing_strategy":
      return handlePricingStrategy(args);
    case "objection_handle":
      return handleObjectionHandle(args);
    default:
      return null;
  }
}

function handleStrategyRecommend(
  args: Record<string, unknown>
): { content: Array<{ type: "text"; text: string }> } {
  const sector = String(args.sector ?? "general");
  const challenge = String(args.challenge ?? "");
  const scores = (args.maturity_scores as Record<string, number>) || {};

  // Calculate global maturity
  const pillarKeys = ["positioning", "offer", "pricing", "acquisition", "branding", "retention", "storytelling", "automation"];
  const validScores = pillarKeys.filter((k) => typeof scores[k] === "number");
  const global = validScores.length > 0
    ? Math.round(validScores.reduce((sum, k) => sum + (scores[k] ?? 50), 0) / validScores.length)
    : 50;

  // Find weakest pillars
  const weakest = pillarKeys
    .map((k) => ({ pillar: k, score: scores[k] ?? 50 }))
    .sort((a, b) => a.score - b.score)
    .slice(0, 3);

  // Route atoms based on challenge keywords
  const keywords = extractKeywords(challenge);
  const atoms = routeEngram({
    sector,
    maturityGlobal: global,
    persona: "Strategist",
    messageKeywords: keywords,
  });

  // Build recommendations
  const recommendations: Array<{ priority: number; pillar: string; action: string; timeframe: string }> = [];

  for (let i = 0; i < weakest.length; i++) {
    const w = weakest[i];
    recommendations.push({
      priority: i + 1,
      pillar: w.pillar,
      action: getPillarAction(w.pillar, w.score),
      timeframe: w.score < 25 ? "Cette semaine" : "Ce mois",
    });
  }

  return jsonResult({
    sector,
    challenge,
    global_maturity: global,
    maturity_level: global < 25 ? "debutant" : global < 50 ? "en_progression" : global < 75 ? "performant" : "expert",
    weakest_pillars: weakest,
    prioritized_recommendations: recommendations,
    relevant_atoms: atoms.slice(0, 5),
    quick_wins: [
      "Definir le positionnement en UNE phrase qui passe le test du diner.",
      "Calculer le cout de l'inaction pour les 3 derniers prospects perdus.",
      "Envoyer un cold email de valeur (pas de pitch) a 5 prospects ideaux.",
    ],
  });
}

function getPillarAction(pillar: string, score: number): string {
  const actions: Record<string, Record<string, string>> = {
    positioning: {
      low: "URGENT: Definir un positionnement specialise. Exercice des 3 cercles + test ICP avec 20 prospects.",
      mid: "Affiner le claim avec chiffres specifiques. Valider via taux de reponse cold email > 5%.",
    },
    offer: {
      low: "Creer une offre productisee : scope fixe + prix fixe + timeline. Arreter le TJM.",
      mid: "Structurer en 3 paliers avec effet de leurre. Ajouter une garantie de resultat.",
    },
    pricing: {
      low: "Passer au value-based pricing. Calculer le ROI client, fixer le prix a 10-20% de cette valeur.",
      mid: "Si taux d'acceptation > 80%, augmenter de 20%. Implementer l'ancrage de valeur avant le prix.",
    },
    acquisition: {
      low: "Dream 100 : lister les 100 prospects ideaux. Lancer 5 cold emails personnalises par jour.",
      mid: "Optimiser le canal principal. Ajouter un canal secondaire. Mesurer le CAC par canal.",
    },
    branding: {
      low: "Definir brand voice en 3 adjectifs. Optimiser le profil LinkedIn comme une landing page.",
      mid: "Lancer le thought leadership : 1 post LinkedIn/semaine. Standardiser les micro-interactions.",
    },
    retention: {
      low: "Mettre en place suivi J+7, J+30, J+90. Creer un systeme de referral avec message pre-redige.",
      mid: "Creer une offre de retainer. Automatiser la demande de temoignage post-projet.",
    },
    storytelling: {
      low: "Creer 3 etudes de cas (Situation-Intervention-Resultat). Preparer l'elevator pitch en 8 secondes.",
      mid: "Enrichir avec verbatims clients. Utiliser le contraste avant/apres dans chaque communication.",
    },
    automation: {
      low: "Mettre en place un CRM basique. Automatiser les relances avec 5 touchpoints.",
      mid: "Creer des sequences trigger-based. Automatiser le scoring et la qualification.",
    },
  };

  const level = score < 40 ? "low" : "mid";
  return actions[pillar]?.[level] ?? "Ameliorer ce pilier en priorite.";
}

function handleCampaignPlan(
  args: Record<string, unknown>
): { content: Array<{ type: "text"; text: string }> } {
  const objective = String(args.objective ?? "");
  const sector = String(args.sector ?? "general");
  const budget = (args.budget as string) || "Non defini";
  const timeline = (args.timeline as string) || "30 jours";
  const targetAudience = (args.target_audience as string) || "Non defini";

  const plan = {
    objective,
    sector,
    budget,
    timeline,
    target_audience: targetAudience,
    neurofunnel_stages: Object.entries(EMOTIONAL_STAGES).map(([key, stage]) => ({
      stage: key,
      emotion: stage.emotion,
      technique: stage.technique,
      objective: stage.objective,
    })),
    channel_strategy: {
      primary: "LinkedIn (organic + DM)",
      secondary: "Cold email personnalise",
      support: "Contenu de valeur (articles, etudes de cas)",
    },
    week_by_week: [
      {
        week: 1,
        stage: "Preparation",
        actions: [
          "Definir l'ICP et les criteres de qualification",
          "Preparer le Dream 100 (liste de prospects ideaux)",
          "Creer les templates d'emails personnalises",
          "Optimiser le profil LinkedIn",
        ],
      },
      {
        week: 2,
        stage: "Activation",
        actions: [
          "Lancer les premiers cold emails (5-10/jour)",
          "Connexions LinkedIn ciblees",
          "Publier un post de valeur (etude de cas ou insight)",
          "Tracker les ouvertures et reponses",
        ],
      },
      {
        week: 3,
        stage: "Nurturing",
        actions: [
          "Relancer les leads qui ont ouvert sans repondre",
          "Envoyer du contenu de valeur aux leads engages",
          "Commenter les posts des prospects cibles",
          "Proposer des appels decouverte aux leads chauds",
        ],
      },
      {
        week: 4,
        stage: "Conversion",
        actions: [
          "Appels decouverte avec les leads qualifies",
          "Envoyer les propositions personnalisees",
          "Relance des propositions envoyees",
          "Analyse des resultats et ajustement",
        ],
      },
    ],
    kpis: [
      { metric: "Emails envoyes", target: "100-200" },
      { metric: "Taux d'ouverture", target: "> 40%" },
      { metric: "Taux de reponse", target: "> 5%" },
      { metric: "Appels decouverte", target: "5-10" },
      { metric: "Propositions envoyees", target: "3-5" },
      { metric: "Deals fermes", target: "1-2" },
    ],
  };

  return jsonResult(plan);
}

function handlePricingStrategy(
  args: Record<string, unknown>
): { content: Array<{ type: "text"; text: string }> } {
  const serviceType = String(args.service_type ?? "");
  const sector = String(args.sector ?? "general");
  const currentPricing = (args.current_pricing as string) || "Non defini";
  const acceptanceRate = args.acceptance_rate as number | undefined;
  const avgValue = args.average_project_value as number | undefined;

  // Under-pricing detection
  const underPricingWarning = acceptanceRate !== undefined && acceptanceRate > 80
    ? {
        alert: "SIGNAL DE SOUS-PRICING",
        detail: `Taux d'acceptation de ${acceptanceRate}% > 80%. Un taux eleve signifie que les prospects ne voient meme pas le prix comme un facteur de decision. Augmenter de 20-30% immediatement.`,
        action: "Augmenter les prix de 20% pour les prochains devis. Mesurer l'impact sur 10 prochains devis.",
      }
    : null;

  return jsonResult({
    service_type: serviceType,
    sector,
    current_pricing: currentPricing,
    under_pricing_warning: underPricingWarning,
    strategy: {
      principle: "Le prix est un signal, pas un chiffre. Il communique ton positionnement au marche.",
      value_based_approach: {
        step_1: "Calculer le ROI client : quel resultat financier ton service genere pour le client ?",
        step_2: "Fixer le prix a 10-20% du ROI projete",
        step_3: "Ne jamais mentionner le temps passe. Vendre la transformation, pas les heures.",
      },
    },
    recommended_tiers: {
      essential: {
        name: "Essentiel",
        positioning: "Probleme principal resolu, perimetre reduit, sans extras",
        pricing_rule: "50-60% du prix cible",
        psychological_role: "Fait paraitre le tier Pro raisonnable",
      },
      pro: {
        name: "Pro (recommande)",
        positioning: "Perimetre complet, suivi inclus, resultats garantis",
        pricing_rule: "Prix cible (10-20% du ROI client)",
        psychological_role: "C'est l'offre que tu veux vendre. 60-70% des clients la choisissent.",
      },
      premium: {
        name: "Premium",
        positioning: "Tout inclus + accompagnement etendu + priorite",
        pricing_rule: "180-250% du prix Pro",
        psychological_role: "Ancrage haut qui rend le Pro accessible. 10-20% choisissent ce tier.",
      },
    },
    presentation_rules: [
      "Toujours montrer la valeur totale AVANT le prix (ancrage)",
      "Decomposer en value stack : lister chaque composante avec sa valeur",
      "Prix en fin de phrase, jamais en debut",
      "Chiffres ronds en B2B (5000 EUR, pas 4997 EUR)",
      "Proposer un echeancier pour les projets > 3000 EUR",
    ],
    power_language: POWER_LANGUAGE,
    average_project_value: avgValue
      ? {
          current: `${avgValue} EUR`,
          suggested_minimum: `${Math.round(avgValue * 1.2)} EUR (+20%)`,
          value_based_target: "10-20% du ROI client annuel",
        }
      : null,
  });
}

function handleObjectionHandle(
  args: Record<string, unknown>
): { content: Array<{ type: "text"; text: string }> } {
  const objectionType = String(args.objection_type ?? "price") as ObjectionType;
  const context = (args.context as string) || "";

  const handler = OBJECTION_HANDLERS[objectionType];
  if (!handler) {
    return jsonResult({
      error: `Type d'objection inconnu: ${objectionType}`,
      valid_types: Object.keys(OBJECTION_HANDLERS),
    });
  }

  // Get related atoms
  const keywords = extractKeywords(objectionType + " " + context);
  const atoms = routeEngram({
    sector: "general",
    maturityGlobal: 50,
    persona: "Strategist",
    messageKeywords: keywords.length > 0 ? keywords : [objectionType],
  });

  const strategies: Record<string, unknown> = {
    price: {
      psychological_principle: "L'objection prix est rarement sur le prix -- c'est un deficit de valeur percue.",
      handler,
      response_framework: [
        "1. Valider : 'Je comprends que l'investissement soit un facteur important.'",
        "2. Recadrer : 'Si on regarde la valeur que ca represente pour votre business...'",
        "3. Ancrer : 'La valeur totale de ce que vous recevez est de X EUR.'",
        "4. Proposer : 'Pour X EUR par jour sur Y semaines, vous obtenez...'",
        "5. Alternatives : 'On peut aussi adapter le perimetre pour rester dans votre budget.'",
      ],
      never_do: "Ne JAMAIS baisser le prix sans reduire le scope. Ca detruit la valeur percue.",
    },
    timing: {
      psychological_principle: "'Pas le bon moment' signifie souvent 'pas assez de raisons d'agir maintenant'.",
      handler,
      response_framework: [
        "1. Valider : 'Je comprends parfaitement.'",
        "2. Planter la graine : 'Quand le moment sera bon, voici ce qu'on pourra faire ensemble...'",
        "3. Cout de l'inaction : 'Chaque mois de retard, c'est environ X EUR d'opportunites manquees.'",
        "4. Maintenir le lien : 'Je vous envoie un contenu pertinent d'ici la.'",
        "5. Rappel contextuel : Fixer un check-in dans 30-60 jours.",
      ],
      never_do: "Ne JAMAIS forcer le timing. Respecter le cycle de decision du prospect.",
    },
    competition: {
      psychological_principle: "Ne jamais critiquer un concurrent -- mettre en valeur ce qui vous rend unique.",
      handler,
      response_framework: [
        "1. Apprecier : 'C'est bien d'avoir explore les options.'",
        "2. Questionner : 'Qu'est-ce qui est le plus important pour vous dans ce choix ?'",
        "3. Differencier : 'Ce qui me distingue, c'est [avantage unique avec preuve].'",
        "4. Preuve : 'Voici un cas similaire ou j'ai obtenu [resultat specifique].'",
      ],
      never_do: "Ne JAMAIS denigrer la concurrence. Ca diminue votre credibilite.",
    },
    no_need: {
      psychological_principle: "Le prospect ne voit pas encore le probleme ou sous-estime son impact.",
      handler,
      response_framework: [
        "1. Valider : 'Si tout fonctionne bien, c'est parfait.'",
        "2. Question diagnostic : 'Sur une echelle de 1 a 10, comment evaluez-vous [domaine] ?'",
        "3. Cout de l'inaction : 'Les entreprises similaires qui n'optimisent pas X perdent en moyenne Y.'",
        "4. Preuve sociale : '80% de mes clients pensaient la meme chose avant de voir les resultats.'",
      ],
      never_do: "Ne JAMAIS insister si le prospect ne voit vraiment pas le besoin. Passer au suivant.",
    },
    trust: {
      psychological_principle: "La confiance se construit par les preuves, pas par les promesses.",
      handler,
      response_framework: [
        "1. Preuve sociale : '[Nombre] de [type similaire] m'ont fait confiance cette annee.'",
        "2. Etude de cas : 'Voici un cas similaire au votre avec les resultats obtenus.'",
        "3. Reduction de risque : 'Je propose une garantie de satisfaction / un premier projet test.'",
        "4. Petit engagement : 'On peut commencer par un audit de 2h pour voir si ca matche.'",
      ],
      never_do: "Ne JAMAIS sur-promettre pour compenser le manque de confiance.",
    },
  };

  return jsonResult({
    objection_type: objectionType,
    context: context || null,
    strategy: strategies[objectionType] || { handler },
    relevant_atoms: atoms.slice(0, 3),
  });
}

// -- Helpers --

function jsonResult(data: unknown): {
  content: Array<{ type: "text"; text: string }>;
} {
  return { content: [{ type: "text", text: JSON.stringify(data, null, 2) }] };
}
