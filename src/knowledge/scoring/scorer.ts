// ──────────────────────────────────────────────────────────────────────────────
// Maturity Scorer — 8-pillar business maturity scoring engine
// ──────────────────────────────────────────────────────────────────────────────

import type { BusinessData, MaturityScore } from "./types.js";

function clamp(value: number, min = 0, max = 100): number {
  return Math.max(min, Math.min(max, value));
}

function scorePositioning(data: BusinessData): number {
  let score = 0;
  const s = data.settings;
  if (!s) return 0;

  // Has business niche defined
  if (s.business_niche && s.business_niche.trim().length > 0) {
    score += 25;
    // Niche is specific (long enough with sector+audience depth)
    if (s.business_niche.trim().length > 30) {
      score += 25;
    }
  }

  // Has target audience
  if (s.target_audience && s.target_audience.trim().length > 0) {
    score += 25;
  }

  // Has services defined and specific
  if (s.services_offered && s.services_offered.trim().length > 0) {
    score += 25;
  }

  return clamp(score);
}

function scoreOffer(data: BusinessData): number {
  let score = 0;
  const campaigns = data.campaigns ?? [];
  const sequences = data.sequences ?? [];

  // Has campaigns/services defined
  if (campaigns.length > 0) {
    score += 25;
  }

  // Has multiple price tiers visible (different budget levels across campaigns)
  const uniqueBudgets = new Set(campaigns.map(c => c.budget).filter(Boolean));
  if (uniqueBudgets.size >= 2) {
    score += 25;
  }

  // Has recurring revenue model (active sequences suggest retainer model)
  const activeSequences = sequences.filter(s => s.status === "active");
  if (activeSequences.length > 0) {
    score += 25;
  }

  // Professional campaign naming (not generic: more than 1 word, varied names)
  const namedCampaigns = campaigns.filter(c => c.name && c.name.trim().split(/\s+/).length >= 2);
  if (namedCampaigns.length >= 2) {
    score += 25;
  }

  return clamp(score);
}

function scoreStorytelling(data: BusinessData): number {
  let score = 0;
  const s = data.settings;

  // Has brand voice set
  if (s?.brand_voice && s.brand_voice.trim().length > 0) {
    score += 33;
  }

  // Has custom instructions with narrative depth
  if (s?.custom_instructions && s.custom_instructions.trim().length > 20) {
    score += 33;
  }

  // Consistent messaging: multiple campaigns with similar platform strategy
  const campaigns = data.campaigns ?? [];
  if (campaigns.length >= 2) {
    const platforms = campaigns.map(c => c.platform).filter(Boolean);
    const uniquePlatforms = new Set(platforms);
    // Consistency = using fewer platforms relative to campaigns (focused strategy)
    if (uniquePlatforms.size <= Math.ceil(campaigns.length / 2)) {
      score += 34;
    }
  }

  return clamp(score);
}

function scoreCredibility(data: BusinessData): number {
  let score = 0;
  const campaigns = data.campaigns ?? [];
  const content = data.content ?? [];

  // Has content pieces (case studies, testimonials, articles)
  if (content.length > 0) {
    score += 25;
  }

  // Has quantified results in campaigns (revenue > 0 on at least one)
  const withRevenue = campaigns.filter(c => (c.revenue ?? 0) > 0);
  if (withRevenue.length > 0) {
    score += 25;
  }

  // Campaign count > 3
  if (campaigns.length > 3) {
    score += 25;
  }

  // Email open rate > 30%
  if ((data.emailStats?.openRate ?? 0) > 30) {
    score += 25;
  }

  return clamp(score);
}

function scoreAcquisition(data: BusinessData): number {
  let score = 0;
  const leads = data.leads ?? [];
  const sequences = data.sequences ?? [];
  const campaigns = data.campaigns ?? [];

  // Has active sequences
  const activeSequences = sequences.filter(s => s.status === "active");
  if (activeSequences.length > 0) {
    score += 25;
  }

  // Lead sources diverse (>2 unique sources)
  const uniqueSources = new Set(leads.map(l => l.source).filter(Boolean));
  if (uniqueSources.size > 2) {
    score += 25;
  }

  // Consistent lead inflow (leads created in last 30 days)
  const thirtyDaysAgo = new Date(Date.now() - 30 * 24 * 60 * 60 * 1000).toISOString();
  const recentLeads = leads.filter(l => l.created_at && l.created_at >= thirtyDaysAgo);
  if (recentLeads.length > 0) {
    score += 25;
  }

  // Documented funnel (sequences + campaigns aligned — both exist and active)
  const activeCampaigns = campaigns.filter(c => c.status === "active");
  if (activeSequences.length > 0 && activeCampaigns.length > 0) {
    score += 25;
  }

  return clamp(score);
}

function scorePricing(data: BusinessData): number {
  let score = 0;
  const leads = data.leads ?? [];
  const campaigns = data.campaigns ?? [];

  // Average estimated_value > 2000
  const leadsWithValue = leads.filter(l => (l.estimated_value ?? 0) > 0);
  if (leadsWithValue.length > 0) {
    const avgValue = leadsWithValue.reduce((sum, l) => sum + (l.estimated_value ?? 0), 0) / leadsWithValue.length;
    if (avgValue > 2000) {
      score += 25;
    }
  }

  // Has tiered pricing signals (different estimated_value levels)
  const uniqueValues = new Set(leadsWithValue.map(l => Math.round((l.estimated_value ?? 0) / 500) * 500));
  if (uniqueValues.size >= 2) {
    score += 25;
  }

  // Campaign ROI positive (revenue > spent on at least one)
  const profitableCampaigns = campaigns.filter(c => (c.revenue ?? 0) > (c.spent ?? 0) && (c.spent ?? 0) > 0);
  if (profitableCampaigns.length > 0) {
    score += 25;
  }

  // Value-based descriptions (services_offered mentions value/resultat/impact/ROI)
  const services = data.settings?.services_offered?.toLowerCase() ?? "";
  const valueTerms = ["valeur", "resultat", "impact", "roi", "retour", "performance", "croissance"];
  if (valueTerms.some(term => services.includes(term))) {
    score += 25;
  }

  return clamp(score);
}

function scoreRetention(data: BusinessData): number {
  let score = 0;
  const leads = data.leads ?? [];
  const sequences = data.sequences ?? [];
  const campaigns = data.campaigns ?? [];

  // Has post-project/follow-up sequences
  const followUpSeqs = sequences.filter(s => {
    const name = (s.name ?? "").toLowerCase();
    return name.includes("suivi") || name.includes("follow") || name.includes("relance") ||
      name.includes("post") || name.includes("fidel") || name.includes("onboard");
  });
  if (followUpSeqs.length > 0) {
    score += 25;
  }

  // Repeat leads (same company appearing multiple times)
  const companies = leads.map(l => l.company?.toLowerCase()).filter(Boolean) as string[];
  const companyCount = new Map<string, number>();
  for (const company of companies) {
    companyCount.set(company, (companyCount.get(company) ?? 0) + 1);
  }
  const hasRepeat = Array.from(companyCount.values()).some(count => count > 1);
  if (hasRepeat) {
    score += 25;
  }

  // Has referral tracking (leads with "referral" or "parrainage" source)
  const referralLeads = leads.filter(l => {
    const source = (l.source ?? "").toLowerCase();
    return source.includes("referral") || source.includes("parrainage") || source.includes("recommandation");
  });
  if (referralLeads.length > 0) {
    score += 25;
  }

  // Has upsell campaigns
  const upsellCampaigns = campaigns.filter(c => {
    const name = (c.name ?? "").toLowerCase();
    return name.includes("upsell") || name.includes("upgrade") || name.includes("premium") ||
      name.includes("complementaire") || name.includes("fidel");
  });
  if (upsellCampaigns.length > 0) {
    score += 25;
  }

  return clamp(score);
}

function scoreMindset(data: BusinessData): number {
  let score = 0;
  const leads = data.leads ?? [];
  const goals = data.goals ?? [];

  // Has goals set
  if (goals.length > 0) {
    score += 25;
  }

  // Has qualification criteria (lead scoring active — leads with non-zero scores)
  const scoredLeads = leads.filter(l => (l.score ?? 0) > 0);
  if (scoredLeads.length > 0) {
    score += 25;
  }

  // Regular activity (emails sent in last 7 days)
  if ((data.emailStats?.sent ?? 0) > 0) {
    score += 25;
  }

  // Growth trajectory (more leads this month vs last month)
  const now = new Date();
  const thisMonthStart = new Date(now.getFullYear(), now.getMonth(), 1).toISOString();
  const lastMonthStart = new Date(now.getFullYear(), now.getMonth() - 1, 1).toISOString();

  const thisMonthLeads = leads.filter(l => l.created_at && l.created_at >= thisMonthStart);
  const lastMonthLeads = leads.filter(
    l => l.created_at && l.created_at >= lastMonthStart && l.created_at < thisMonthStart
  );
  if (thisMonthLeads.length > lastMonthLeads.length && thisMonthLeads.length > 0) {
    score += 25;
  }

  return clamp(score);
}

/**
 * Calculate the 8-pillar maturity score from real business data.
 * Each pillar scores 0-100. Global is a weighted average where
 * positioning and offer count double (they're the foundation).
 */
export function calculateMaturityScore(businessData: BusinessData): MaturityScore {
  const positioning = scorePositioning(businessData);
  const offer = scoreOffer(businessData);
  const storytelling = scoreStorytelling(businessData);
  const credibility = scoreCredibility(businessData);
  const acquisition = scoreAcquisition(businessData);
  const pricing = scorePricing(businessData);
  const retention = scoreRetention(businessData);
  const mindset = scoreMindset(businessData);

  // Weighted average: positioning and offer count double
  const global = Math.round(
    (positioning * 2 + offer * 2 + storytelling + credibility + acquisition + pricing + retention + mindset) / 10
  );

  return {
    positioning,
    offer,
    storytelling,
    credibility,
    acquisition,
    pricing,
    retention,
    mindset,
    global,
  };
}
