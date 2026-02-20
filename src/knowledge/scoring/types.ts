// ──────────────────────────────────────────────────────────────────────────────
// Scoring Types — Maturity score and business data interfaces
// ──────────────────────────────────────────────────────────────────────────────

export interface MaturityScore {
  positioning: number;
  offer: number;
  storytelling: number;
  credibility: number;
  acquisition: number;
  pricing: number;
  retention: number;
  mindset: number;
  global: number;
}

/**
 * Business data shape matching what context-builder fetches from Supabase.
 * All fields optional — missing data = 0 points for that signal.
 */
export interface BusinessData {
  settings?: {
    company_name?: string;
    business_niche?: string;
    services_offered?: string;
    target_audience?: string;
    brand_voice?: string;
    custom_instructions?: string;
  };
  leads?: {
    id: string;
    name?: string;
    company?: string;
    status?: string;
    temperature?: string;
    score?: number;
    source?: string;
    estimated_value?: number;
    last_contacted_at?: string;
    created_at?: string;
  }[];
  campaigns?: {
    id: string;
    name?: string;
    platform?: string;
    status?: string;
    budget?: number;
    spent?: number;
    conversions?: number;
    revenue?: number;
    impressions?: number;
    clicks?: number;
  }[];
  sequences?: {
    id: string;
    name?: string;
    status?: string;
    trigger_type?: string;
  }[];
  goals?: {
    id: string;
    title?: string;
    current_value?: number;
    target_value?: number;
    status?: string;
  }[];
  content?: {
    id: string;
    title?: string;
    status?: string;
    content_type?: string;
    platform?: string;
  }[];
  emailStats?: {
    sent?: number;
    openRate?: number;
    clickRate?: number;
  };
  revenue?: {
    total?: number;
    monthly?: number;
  };
  playbooks?: {
    id: string;
    title?: string;
    category?: string;
    difficulty?: string;
    estimated_duration?: string;
  }[];
  campaignTemplates?: {
    id: string;
    name?: string;
    platform?: string;
    category?: string;
    target_audience?: string;
  }[];
  abTests?: {
    id: string;
    name?: string;
    status?: string;
    winner_variant?: string;
  }[];
}
