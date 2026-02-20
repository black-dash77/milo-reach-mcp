/**
 * Analysis MCP tools -- prospect_analyze, funnel_diagnose, market_analyze, copy_evaluate
 */

import type { Tool } from "@modelcontextprotocol/sdk/types.js";
import { COGNITIVE_BIASES, EMOTIONAL_STAGES, OBJECTION_HANDLERS } from "../knowledge/biases/index.js";

export function getAnalysisTools(): Tool[] {
  return [
    {
      name: "prospect_analyze",
      description:
        "Analyze a prospect's psychographic profile. Takes prospect data and returns emotional stage, applicable biases, objection strategies, and approach recommendations.",
      inputSchema: {
        type: "object" as const,
        properties: {
          name: { type: "string", description: "Prospect name" },
          company: { type: "string", description: "Company name" },
          industry: { type: "string", description: "Industry/sector" },
          role: { type: "string", description: "Job title/role" },
          signals: {
            type: "array",
            items: { type: "string" },
            description:
              "Observed signals: recently_founded, job_change, funding, active_on_linkedin, visited_pricing, opened_emails, replied, cold_lead, warm_lead, hot_lead",
          },
          company_size: { type: "string", description: "Company size: solo, small, medium, large" },
        },
        required: ["name"],
      },
    },
    {
      name: "funnel_diagnose",
      description:
        "Diagnose a marketing funnel. Takes funnel metrics and returns conversion rates per stage, diagnosis of where leads leak, and recommendations per emotional stage.",
      inputSchema: {
        type: "object" as const,
        properties: {
          visitors: { type: "number", description: "Total visitors/impressions at top of funnel" },
          leads: { type: "number", description: "Leads captured (email opt-ins, form fills)" },
          qualified: { type: "number", description: "Qualified leads (calls booked, proposals sent)" },
          closed: { type: "number", description: "Closed deals" },
          period: { type: "string", description: "Time period (e.g. 'last_month', 'last_quarter')" },
        },
        required: ["visitors", "leads", "qualified", "closed"],
      },
    },
    {
      name: "market_analyze",
      description:
        "Analyze a market niche. Returns positioning analysis, Blue Ocean opportunities, and differentiation axes.",
      inputSchema: {
        type: "object" as const,
        properties: {
          niche: { type: "string", description: "Market niche description" },
          competitors: {
            type: "array",
            items: { type: "string" },
            description: "Known competitor names or descriptions",
          },
          current_positioning: { type: "string", description: "Your current positioning statement" },
        },
        required: ["niche"],
      },
    },
    {
      name: "copy_evaluate",
      description:
        "Evaluate copy/text against neuromarketing principles. Scores 0-100 on CTA count, you-focus ratio, power words, structure, and emotional triggers.",
      inputSchema: {
        type: "object" as const,
        properties: {
          text: { type: "string", description: "The copy/text to evaluate" },
          format: {
            type: "string",
            enum: ["email", "landing_page", "linkedin_post", "cold_email", "proposal"],
            description: "Content format for context-appropriate evaluation",
          },
        },
        required: ["text"],
      },
    },
  ];
}

export async function handleAnalysisTool(
  name: string,
  args: Record<string, unknown>
): Promise<{ content: Array<{ type: "text"; text: string }> } | null> {
  switch (name) {
    case "prospect_analyze":
      return handleProspectAnalyze(args);
    case "funnel_diagnose":
      return handleFunnelDiagnose(args);
    case "market_analyze":
      return handleMarketAnalyze(args);
    case "copy_evaluate":
      return handleCopyEvaluate(args);
    default:
      return null;
  }
}

function handleProspectAnalyze(
  args: Record<string, unknown>
): { content: Array<{ type: "text"; text: string }> } {
  const prospectName = String(args.name ?? "Prospect");
  const company = (args.company as string) || null;
  const industry = (args.industry as string) || null;
  const role = (args.role as string) || null;
  const signals = (args.signals as string[]) || [];
  const companySize = (args.company_size as string) || "unknown";

  // Determine emotional stage from signals
  type Stage = "awareness" | "curiosity" | "interest" | "desire" | "action" | "loyalty";
  let stage: Stage = "awareness";
  const stageSignals: Record<Stage, string[]> = {
    awareness: ["cold_lead"],
    curiosity: ["opened_emails", "active_on_linkedin"],
    interest: ["replied", "warm_lead"],
    desire: ["visited_pricing", "hot_lead"],
    action: ["recently_founded", "job_change", "funding"],
    loyalty: [],
  };

  for (const s of signals) {
    for (const [stg, sigs] of Object.entries(stageSignals)) {
      if (sigs.includes(s)) {
        const stageOrder: Stage[] = ["awareness", "curiosity", "interest", "desire", "action"];
        const currentIdx = stageOrder.indexOf(stage);
        const newIdx = stageOrder.indexOf(stg as Stage);
        if (newIdx > currentIdx) stage = stg as Stage;
      }
    }
  }

  // Applicable biases for this stage
  const biases = COGNITIVE_BIASES[stage] || [];

  // Emotional stage info
  const stageInfo = EMOTIONAL_STAGES[stage === "awareness" ? "unconscious" : stage as keyof typeof EMOTIONAL_STAGES] || null;

  // Determine likely objections
  const likelyObjections: string[] = [];
  if (companySize === "solo" || companySize === "small") likelyObjections.push("price");
  if (signals.includes("cold_lead")) likelyObjections.push("trust", "no_need");
  if (signals.length === 0) likelyObjections.push("timing");
  if (!likelyObjections.includes("price")) likelyObjections.push("timing");

  const objectionStrategies = Object.fromEntries(
    likelyObjections.map((o) => [o, OBJECTION_HANDLERS[o as keyof typeof OBJECTION_HANDLERS] ?? "N/A"])
  );

  // Approach recommendations
  const recommendations: string[] = [];
  if (stage === "awareness") {
    recommendations.push("Utiliser un pattern interrupt ou une stat choquante pour capter l'attention.");
    recommendations.push("Premier contact = valeur pure, zero pitch.");
  }
  if (stage === "curiosity") {
    recommendations.push("Envoyer du contenu de valeur (case study, article pertinent).");
    recommendations.push("Poser une question ouverte qui fait reflechir.");
  }
  if (stage === "interest") {
    recommendations.push("Partager une etude de cas specifique a son secteur.");
    recommendations.push("Proposer un audit/diagnostic gratuit de 15 min.");
  }
  if (stage === "desire") {
    recommendations.push("Personnaliser fortement le message (mentionner son secteur/probleme).");
    recommendations.push("Presenter une solution specifique avec resultats projetes.");
  }
  if (stage === "action") {
    recommendations.push("Reduire les frictions : CTA simple, calendly direct.");
    recommendations.push("Urgence douce basee sur des faits reels.");
  }
  if (signals.includes("recently_founded")) {
    recommendations.push("TIMING IDEAL : entreprise recemment creee. Approche d'aide, pas de vente.");
  }
  if (signals.includes("funding")) {
    recommendations.push("SIGNAL FORT : levee de fonds recente. Budget disponible, besoin d'execution rapide.");
  }
  if (signals.includes("job_change")) {
    recommendations.push("OPPORTUNITE : changement de poste. Nouveau decideur qui veut faire ses preuves.");
  }

  return jsonResult({
    prospect: {
      name: prospectName,
      company,
      industry,
      role,
      company_size: companySize,
    },
    psychographic_profile: {
      emotional_stage: stage,
      stage_info: stageInfo,
      applicable_biases: biases,
      likely_objections: likelyObjections,
      objection_strategies: objectionStrategies,
    },
    signals_detected: signals,
    approach_recommendations: recommendations,
  });
}

function handleFunnelDiagnose(
  args: Record<string, unknown>
): { content: Array<{ type: "text"; text: string }> } {
  const visitors = Number(args.visitors ?? 0);
  const leads = Number(args.leads ?? 0);
  const qualified = Number(args.qualified ?? 0);
  const closed = Number(args.closed ?? 0);
  const period = (args.period as string) || "non_specifie";

  // Conversion rates
  const visitorToLead = visitors > 0 ? (leads / visitors) * 100 : 0;
  const leadToQualified = leads > 0 ? (qualified / leads) * 100 : 0;
  const qualifiedToClosed = qualified > 0 ? (closed / qualified) * 100 : 0;
  const overallConversion = visitors > 0 ? (closed / visitors) * 100 : 0;

  // Benchmarks for freelancers
  const benchmarks = {
    visitor_to_lead: { good: 3, excellent: 8, label: "Taux de capture" },
    lead_to_qualified: { good: 20, excellent: 40, label: "Taux de qualification" },
    qualified_to_closed: { good: 25, excellent: 50, label: "Taux de closing" },
  };

  // Diagnose
  const diagnosis: Array<{ stage: string; rate: number; benchmark: string; status: string; fix: string }> = [];

  // Stage 1: TOFU (Visitors → Leads)
  const tofuStatus = visitorToLead >= benchmarks.visitor_to_lead.excellent ? "excellent"
    : visitorToLead >= benchmarks.visitor_to_lead.good ? "bon"
    : "problematique";
  diagnosis.push({
    stage: "TOFU (Visitors → Leads)",
    rate: Math.round(visitorToLead * 100) / 100,
    benchmark: `${benchmarks.visitor_to_lead.good}-${benchmarks.visitor_to_lead.excellent}%`,
    status: tofuStatus,
    fix: tofuStatus === "problematique"
      ? "Probleme de curiosite/attention. Ameliorer le headline, le lead magnet, ou le CTA. Le prospect ne voit pas assez de valeur pour donner son email."
      : "TOFU performant.",
  });

  // Stage 2: MOFU (Leads → Qualified)
  const mofuStatus = leadToQualified >= benchmarks.lead_to_qualified.excellent ? "excellent"
    : leadToQualified >= benchmarks.lead_to_qualified.good ? "bon"
    : "problematique";
  diagnosis.push({
    stage: "MOFU (Leads → Qualified)",
    rate: Math.round(leadToQualified * 100) / 100,
    benchmark: `${benchmarks.lead_to_qualified.good}-${benchmarks.lead_to_qualified.excellent}%`,
    status: mofuStatus,
    fix: mofuStatus === "problematique"
      ? "Probleme de confiance/credibilite. Les leads ne voient pas assez de preuve sociale ou de cas concrets. Ameliorer le nurturing avec des etudes de cas specifiques au secteur."
      : "MOFU performant.",
  });

  // Stage 3: BOFU (Qualified → Closed)
  const bofuStatus = qualifiedToClosed >= benchmarks.qualified_to_closed.excellent ? "excellent"
    : qualifiedToClosed >= benchmarks.qualified_to_closed.good ? "bon"
    : "problematique";
  diagnosis.push({
    stage: "BOFU (Qualified → Closed)",
    rate: Math.round(qualifiedToClosed * 100) / 100,
    benchmark: `${benchmarks.qualified_to_closed.good}-${benchmarks.qualified_to_closed.excellent}%`,
    status: bofuStatus,
    fix: bofuStatus === "problematique"
      ? "Probleme de conversion finale. Revoir le cadrage de valeur, la proposition, ou la gestion des objections. Si > 80% d'acceptation, c'est du sous-pricing."
      : bofuStatus === "excellent" && qualifiedToClosed > 80
        ? "ATTENTION: Taux de closing > 80% = signal fort de sous-pricing. Augmenter les prix de 20%."
        : "BOFU performant.",
  });

  // Find the weakest link
  const rates = [
    { stage: "TOFU", rate: visitorToLead, benchmark: benchmarks.visitor_to_lead.good },
    { stage: "MOFU", rate: leadToQualified, benchmark: benchmarks.lead_to_qualified.good },
    { stage: "BOFU", rate: qualifiedToClosed, benchmark: benchmarks.qualified_to_closed.good },
  ];
  const worstStage = rates.reduce((worst, current) => {
    const worstGap = worst.rate / worst.benchmark;
    const currentGap = current.rate / current.benchmark;
    return currentGap < worstGap ? current : worst;
  });

  return jsonResult({
    period,
    metrics: {
      visitors,
      leads,
      qualified,
      closed,
    },
    conversion_rates: {
      visitor_to_lead: `${Math.round(visitorToLead * 100) / 100}%`,
      lead_to_qualified: `${Math.round(leadToQualified * 100) / 100}%`,
      qualified_to_closed: `${Math.round(qualifiedToClosed * 100) / 100}%`,
      overall: `${Math.round(overallConversion * 1000) / 1000}%`,
    },
    diagnosis,
    biggest_leak: `${worstStage.stage} - C'est ici que le funnel perd le plus de prospects.`,
    priority_action: diagnosis.find((d) => d.status === "problematique")?.fix || "Funnel globalement sain.",
  });
}

function handleMarketAnalyze(
  args: Record<string, unknown>
): { content: Array<{ type: "text"; text: string }> } {
  const niche = String(args.niche ?? "");
  const competitors = (args.competitors as string[]) || [];
  const currentPositioning = (args.current_positioning as string) || null;

  // Generic analysis framework
  const analysis = {
    niche,
    positioning_analysis: {
      current: currentPositioning || "Non defini",
      purple_cow_test:
        "Est-ce que le positionnement est suffisamment remarquable pour qu'un prospect le repete a un ami en une phrase ?",
      category_creation:
        "Un generaliste se bat sur le prix. Un specialiste cree sa categorie. L'intersection de 3 dimensions (expertise + secteur + probleme) cree l'unicite.",
      three_circle_test: {
        circle_1: "Ce que tu fais mieux que quiconque",
        circle_2: "Ce pour quoi les gens sont prets a payer",
        circle_3: "Ce qui te passionne assez pour tenir 5 ans",
        instruction: "Le positionnement ideal vit a l'intersection des 3 cercles.",
      },
    },
    blue_ocean_opportunities: [
      "Identifier les facteurs de valeur que TOUS les concurrents offrent (zone de commodite).",
      "Trouver les facteurs que personne n'offre mais que les clients valorisent.",
      "Eliminer les facteurs sur-investis qui n'impactent pas la decision.",
      "Creer un facteur unique qui rend la comparaison impossible.",
    ],
    differentiation_axes: [
      { axis: "Specialisation sectorielle", example: "Au lieu de 'consultant digital', 'expert acquisition pour cabinets d'avocats'" },
      { axis: "Methode proprietaire", example: "Au lieu de 'coaching business', 'La Methode Sprint 90'" },
      { axis: "Garantie de resultat", example: "Au lieu de 'on fait de notre mieux', 'X leads en 90 jours ou on continue gratuitement'" },
      { axis: "Format innovant", example: "Au lieu de consulting classique, 'audit video en 48h' ou 'abonnement mensuel'" },
      { axis: "Niche geographique", example: "Au lieu de marche global, 'expert X pour le marche suisse romand'" },
    ],
    competitors: competitors.length > 0
      ? {
          listed: competitors,
          analysis_framework: "Pour chaque concurrent, evaluer : positionnement, prix, points forts, angles morts, type de clients.",
          zag_strategy: "Quand tous les concurrents zig (meme message, meme approche), identifier l'axe oppose credible.",
        }
      : { note: "Aucun concurrent fourni. Ajouter des noms pour une analyse comparative." },
  };

  return jsonResult(analysis);
}

function handleCopyEvaluate(
  args: Record<string, unknown>
): { content: Array<{ type: "text"; text: string }> } {
  const text = String(args.text ?? "");
  const format = (args.format as string) || "email";

  if (!text || text.length < 10) {
    return jsonResult({ error: "Texte trop court pour evaluation. Fournir au moins quelques phrases." });
  }

  const lowerText = text.toLowerCase();
  const words = text.split(/\s+/);
  const wordCount = words.length;

  // 1. CTA analysis (0-20 points)
  const ctaPatterns = [
    /r[ée]pondez/i, /cliquez/i, /r[ée]servez/i, /t[ée]l[ée]chargez/i,
    /contactez/i, /d[ée]couvrez/i, /inscrivez/i, /planifiez/i,
    /reply/i, /click/i, /book/i, /schedule/i, /download/i, /sign up/i,
  ];
  const ctaCount = ctaPatterns.filter((p) => p.test(text)).length;
  let ctaScore: number;
  if (ctaCount === 1) ctaScore = 20;
  else if (ctaCount === 0) ctaScore = 5;
  else if (ctaCount === 2) ctaScore = 12;
  else ctaScore = 5; // too many CTAs

  // 2. You-focus ratio (0-20 points)
  const youPatterns = /\b(vous|tu|ton|ta|tes|votre|vos|your|you|your)\b/gi;
  const iPatterns = /\b(je|j'|nous|notre|nos|mon|ma|mes|i|we|our|my)\b/gi;
  const youCount = (text.match(youPatterns) || []).length;
  const iCount = (text.match(iPatterns) || []).length;
  const youRatio = youCount + iCount > 0 ? youCount / (youCount + iCount) : 0.5;
  const youScore = Math.min(20, Math.round(youRatio * 30));

  // 3. Power words (0-20 points)
  const powerWords = [
    "decouvrez", "transformez", "obtenez", "imaginez", "accelerez", "liberez",
    "garanti", "exclusif", "gratuit", "resultat", "secret", "erreur", "prouve",
    "concret", "immediat", "simple", "efficace",
    "discover", "transform", "proven", "free", "exclusive", "guaranteed", "result",
  ];
  const powerWordCount = powerWords.filter((pw) => lowerText.includes(pw)).length;
  const powerScore = Math.min(20, powerWordCount * 5);

  // 4. Structure (0-20 points)
  let structureScore = 0;
  const paragraphs = text.split(/\n\s*\n/).filter((p) => p.trim().length > 0);
  if (paragraphs.length >= 2) structureScore += 5;
  if (paragraphs.length >= 3) structureScore += 5;
  const hasQuestion = /\?/.test(text);
  if (hasQuestion) structureScore += 5;
  const shortParagraphs = paragraphs.filter((p) => p.split(/\s+/).length <= 50);
  if (shortParagraphs.length === paragraphs.length) structureScore += 5;

  // 5. Emotional triggers (0-20 points)
  let emotionalScore = 0;
  if (/imagin(ez|e)/i.test(text)) emotionalScore += 5;
  if (/avant.*apr[eè]s|before.*after/i.test(text)) emotionalScore += 5;
  if (/\d+\s*(%|euros?|EUR|CHF|\$|leads?|clients?)/i.test(text)) emotionalScore += 5;
  if (/parce que|because/i.test(text)) emotionalScore += 3;
  if (hasQuestion) emotionalScore += 2;
  emotionalScore = Math.min(20, emotionalScore);

  const totalScore = ctaScore + youScore + powerScore + structureScore + emotionalScore;

  // Format-specific feedback
  const formatFeedback: Record<string, string> = {
    cold_email: wordCount > 120
      ? "Cold email trop long. Viser < 100 mots. L'objectif est une reponse, pas un pitch complet."
      : "Longueur adaptee pour un cold email.",
    email: wordCount > 300
      ? "Email long. Verifier que chaque paragraphe fait avancer vers le CTA."
      : "Longueur acceptable.",
    linkedin_post: wordCount < 50
      ? "Post trop court. Developper avec un hook + histoire + lecon."
      : "Longueur correcte pour LinkedIn.",
    landing_page: paragraphs.length < 4
      ? "Landing page trop courte. Structure recommandee : headline + sous-titre + benefices + preuve sociale + CTA."
      : "Structure adequate.",
    proposal: ctaCount === 0
      ? "Proposition sans CTA clair. Terminer par une action concrete (date de RDV, signature)."
      : "CTA present.",
  };

  return jsonResult({
    score: totalScore,
    max_score: 100,
    grade: totalScore >= 80 ? "A" : totalScore >= 60 ? "B" : totalScore >= 40 ? "C" : "D",
    format,
    word_count: wordCount,
    breakdown: {
      cta: { score: ctaScore, max: 20, detail: `${ctaCount} CTA detecte(s). Ideal = 1 seul CTA clair.` },
      you_focus: { score: youScore, max: 20, detail: `Ratio vous/je: ${Math.round(youRatio * 100)}%. Objectif: 'vous' 3x plus que 'je'.` },
      power_words: { score: powerScore, max: 20, detail: `${powerWordCount} power words detectes.` },
      structure: { score: structureScore, max: 20, detail: `${paragraphs.length} paragraphe(s), ${hasQuestion ? "question presente" : "pas de question"}.` },
      emotional_triggers: { score: emotionalScore, max: 20, detail: "Chiffres specifiques, visualisation, contraste, raison." },
    },
    format_feedback: formatFeedback[format] || "Format standard.",
    top_recommendations: getTopRecommendations(ctaScore, youScore, powerScore, structureScore, emotionalScore),
  });
}

function getTopRecommendations(
  cta: number,
  youFocus: number,
  power: number,
  structure: number,
  emotional: number
): string[] {
  const recs: Array<{ score: number; rec: string }> = [
    { score: cta, rec: "Ajouter UN seul CTA clair et sans friction (ex: 'Repondez OUI a cet email')." },
    { score: youFocus, rec: "Recentrer sur le 'vous' du lecteur. Transformer chaque 'je/nous' en benefice pour le prospect." },
    { score: power, rec: "Integrer 2-3 power words strategiques : decouvrez, transformez, resultat, prouve." },
    { score: structure, rec: "Structurer en paragraphes courts. Ajouter une question pour engager le lecteur." },
    { score: emotional, rec: "Ajouter des chiffres specifiques et un contraste avant/apres pour activer le cerveau emotionnel." },
  ];
  return recs
    .sort((a, b) => a.score - b.score)
    .slice(0, 3)
    .map((r) => r.rec);
}

// -- Helpers --

function jsonResult(data: unknown): {
  content: Array<{ type: "text"; text: string }>;
} {
  return { content: [{ type: "text", text: JSON.stringify(data, null, 2) }] };
}
