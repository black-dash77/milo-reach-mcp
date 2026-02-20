/**
 * Enrichment API clients — Hunter.io + ProxyCurl (ScrapingBee).
 * Standalone for MCP server — env-based credentials.
 */

import { apiCall } from "./api-client.js";

// ══════════════════════════════════════════════════════════════
// Hunter.io — Email Finding & Verification
// ══════════════════════════════════════════════════════════════

export interface EmailFindResult {
  email: string;
  confidence: number;
  sources: Array<{ domain: string; uri: string }>;
  type: "personal" | "generic";
  first_name: string;
  last_name: string;
}

export interface EmailVerifyResult {
  email: string;
  status: "valid" | "invalid" | "accept_all" | "unknown";
  score: number;
  disposable: boolean;
  webmail: boolean;
  mx_records: boolean;
}

export interface DomainSearchResult {
  domain: string;
  emails: Array<{
    email: string;
    type: "personal" | "generic";
    confidence: number;
    first_name: string | null;
    last_name: string | null;
    position: string | null;
  }>;
  total: number;
}

// Hunter.io API response types
interface HunterEmailFinderResponse {
  data?: {
    email?: string;
    confidence?: number;
    first_name?: string;
    last_name?: string;
    type?: "personal" | "generic";
    sources?: Array<{ domain?: string; uri?: string }>;
  };
}

interface HunterEmailVerifierResponse {
  data?: {
    email?: string;
    status?: "valid" | "invalid" | "accept_all" | "unknown";
    score?: number;
    disposable?: boolean;
    webmail?: boolean;
    mx_records?: boolean;
  };
}

interface HunterDomainSearchResponse {
  data?: {
    domain?: string;
    emails?: Array<{
      value?: string;
      type?: "personal" | "generic";
      confidence?: number;
      first_name?: string;
      last_name?: string;
      position?: string;
    }>;
  };
  meta?: { results?: number };
}

function getHunterApiKey(): string {
  const key = process.env.HUNTER_API_KEY;
  if (!key) throw new Error("HUNTER_API_KEY non configure dans les variables d'environnement.");
  return key;
}

/**
 * Find the email address of a person given their full name and company domain.
 */
export async function findEmail(fullName: string, domain: string): Promise<EmailFindResult> {
  const apiKey = getHunterApiKey();
  const nameParts = fullName.trim().split(/\s+/);
  const firstName = nameParts[0] || "";
  const lastName = nameParts.slice(1).join(" ") || "";

  const params = new URLSearchParams({
    domain,
    first_name: firstName,
    last_name: lastName,
    api_key: apiKey,
  });

  const raw = await apiCall<HunterEmailFinderResponse>(
    `https://api.hunter.io/v2/email-finder?${params.toString()}`
  );

  if (!raw.data?.email) {
    throw new Error(`Aucun email trouve pour ${fullName} chez ${domain}`);
  }

  return {
    email: raw.data.email,
    confidence: raw.data.confidence || 0,
    sources: (raw.data.sources || []).map((s) => ({
      domain: s.domain || "",
      uri: s.uri || "",
    })),
    type: raw.data.type || "personal",
    first_name: raw.data.first_name || firstName,
    last_name: raw.data.last_name || lastName,
  };
}

/**
 * Verify if an email address is valid and deliverable.
 */
export async function verifyEmail(email: string): Promise<EmailVerifyResult> {
  const apiKey = getHunterApiKey();

  const params = new URLSearchParams({ email, api_key: apiKey });
  const raw = await apiCall<HunterEmailVerifierResponse>(
    `https://api.hunter.io/v2/email-verifier?${params.toString()}`
  );

  return {
    email: raw.data?.email || email,
    status: raw.data?.status || "unknown",
    score: raw.data?.score || 0,
    disposable: raw.data?.disposable || false,
    webmail: raw.data?.webmail || false,
    mx_records: raw.data?.mx_records || false,
  };
}

/**
 * Search all email addresses associated with a domain.
 */
export async function domainSearch(domain: string, limit: number = 10): Promise<DomainSearchResult> {
  const apiKey = getHunterApiKey();

  const params = new URLSearchParams({
    domain,
    limit: String(limit),
    api_key: apiKey,
  });

  const raw = await apiCall<HunterDomainSearchResponse>(
    `https://api.hunter.io/v2/domain-search?${params.toString()}`
  );

  return {
    domain: raw.data?.domain || domain,
    emails: (raw.data?.emails || []).map((e) => ({
      email: e.value || "",
      type: e.type || "personal",
      confidence: e.confidence || 0,
      first_name: e.first_name || null,
      last_name: e.last_name || null,
      position: e.position || null,
    })),
    total: raw.meta?.results || 0,
  };
}

// ══════════════════════════════════════════════════════════════
// ProxyCurl — LinkedIn Profile Enrichment (via native fetch)
// ══════════════════════════════════════════════════════════════

export interface LinkedInProfile {
  full_name: string;
  headline: string;
  summary: string;
  location: string;
  connections: number;
  profile_url: string;
  profile_pic_url: string | null;
  experience: Array<{
    title: string;
    company: string;
    start_date: string;
    end_date: string | null;
    description: string | null;
  }>;
  education: Array<{ school: string; degree: string; field: string }>;
  skills: string[];
}

export interface CompanyInfo {
  name: string;
  domain: string;
  industry: string;
  company_size: string;
  founded: number | null;
  description: string;
  linkedin_url: string | null;
  website: string;
  specialities: string[];
}

function getProxycurlApiKey(): string {
  const key = process.env.PROXYCURL_API_KEY;
  if (!key) throw new Error("PROXYCURL_API_KEY non configure dans les variables d'environnement.");
  return key;
}

/**
 * Enrich a LinkedIn profile using ProxyCurl API.
 */
export async function enrichLinkedInProfile(linkedinUrl: string): Promise<LinkedInProfile> {
  const apiKey = getProxycurlApiKey();

  const params = new URLSearchParams({
    url: linkedinUrl,
    use_cache: "if-present",
    skills: "include",
    inferred_salary: "false",
    personal_email: "false",
    personal_contact_number: "false",
    twitter_profile_id: "false",
    facebook_profile_id: "false",
    github_profile_id: "false",
    extra: "false",
  });

  const raw = await apiCall<Record<string, unknown>>(
    `https://nubela.co/proxycurl/api/v2/linkedin?${params.toString()}`,
    {
      headers: { Authorization: `Bearer ${apiKey}` },
      timeoutMs: 30000,
    }
  );

  return {
    full_name: (raw.full_name as string) || "",
    headline: (raw.headline as string) || "",
    summary: (raw.summary as string) || "",
    location: [raw.city, raw.country_full_name].filter(Boolean).join(", "),
    connections: (raw.connections as number) || 0,
    profile_url: linkedinUrl,
    profile_pic_url: (raw.profile_pic_url as string) || null,
    experience: Array.isArray(raw.experiences)
      ? (raw.experiences as Record<string, unknown>[]).map((exp) => ({
          title: (exp.title as string) || "",
          company: (exp.company as string) || "",
          start_date: (exp.starts_at as string) || "",
          end_date: (exp.ends_at as string) || null,
          description: (exp.description as string) || null,
        }))
      : [],
    education: Array.isArray(raw.education)
      ? (raw.education as Record<string, unknown>[]).map((edu) => ({
          school: (edu.school as string) || "",
          degree: (edu.degree_name as string) || "",
          field: (edu.field_of_study as string) || "",
        }))
      : [],
    skills: Array.isArray(raw.skills) ? (raw.skills as string[]) : [],
  };
}

/**
 * Enrich a company profile using ProxyCurl API.
 */
export async function enrichCompanyProfile(
  linkedinUrl?: string,
  domain?: string
): Promise<CompanyInfo> {
  const apiKey = getProxycurlApiKey();

  const params = new URLSearchParams();
  if (linkedinUrl) {
    params.set("url", linkedinUrl);
  } else if (domain) {
    params.set("url", `https://www.linkedin.com/company/${domain.split(".")[0]}`);
  } else {
    throw new Error("URL LinkedIn ou domaine requis pour l'enrichissement entreprise.");
  }
  params.set("use_cache", "if-present");

  const raw = await apiCall<Record<string, unknown>>(
    `https://nubela.co/proxycurl/api/linkedin/company?${params.toString()}`,
    {
      headers: { Authorization: `Bearer ${apiKey}` },
      timeoutMs: 30000,
    }
  );

  return {
    name: (raw.name as string) || "",
    domain: domain || "",
    industry: (raw.industry as string) || "Non detecte",
    company_size: (raw.company_size_on_linkedin as string) || (raw.company_size as string) || "Non detecte",
    founded: (raw.founded_year as number) || null,
    description: (raw.description as string) || "",
    linkedin_url: linkedinUrl || null,
    website: (raw.website as string) || domain || "",
    specialities: Array.isArray(raw.specialities) ? (raw.specialities as string[]) : [],
  };
}
