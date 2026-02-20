/**
 * Discovery API clients — Bright Data SERP + Apollo.io fallback.
 * Standalone for MCP server — no class inheritance, env-based credentials.
 */

import { apiCall, ApiError } from "./api-client.js";

// ══════════════════════════════════════════════════════════════
// Bright Data — SERP Search
// ══════════════════════════════════════════════════════════════

interface BrightDataSerpOrganic {
  link?: string;
  title?: string;
  description?: string;
}

interface BrightDataSerpResponse {
  organic?: BrightDataSerpOrganic[];
}

export interface WebSearchResultItem {
  title: string;
  url: string;
  description: string;
}

export interface ProspectResult {
  name: string;
  headline: string;
  company: string | null;
  linkedin_url: string;
  snippet: string;
}

function getBrightDataCredentials(): { apiToken: string; serpZone: string } {
  const apiToken = process.env.BRIGHT_DATA_API_KEY;
  const serpZone = process.env.BRIGHT_DATA_SERP_ZONE || "serp";
  if (!apiToken) {
    throw new Error("BRIGHT_DATA_API_KEY non configure dans les variables d'environnement.");
  }
  return { apiToken, serpZone };
}

/**
 * Raw SERP web search via Bright Data (used internally and by zefix.ts).
 */
export async function searchBrightDataWeb(
  query: string,
  limit: number = 10
): Promise<WebSearchResultItem[]> {
  const { apiToken, serpZone } = getBrightDataCredentials();
  const numResults = Math.min(limit, 20);
  const googleUrl = `https://www.google.com/search?q=${encodeURIComponent(query)}&num=${numResults}&hl=fr`;

  const raw = await apiCall<BrightDataSerpResponse>(
    "https://api.brightdata.com/request",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${apiToken}`,
      },
      body: JSON.stringify({
        zone: serpZone,
        url: googleUrl,
        format: "raw",
        data_format: "parsed_light",
      }),
      timeoutMs: 15000,
    }
  );

  return (raw.organic || []).map((r) => ({
    title: (r.title || "").replace(/\s*[|\-–]\s*$/, "").trim(),
    url: r.link || "",
    description: r.description || "",
  }));
}

/**
 * Search for prospects via Bright Data SERP (Google LinkedIn X-ray search).
 */
export async function searchProspectsBrightData(params: {
  query?: string;
  role?: string;
  industry?: string;
  location?: string;
  keywords?: string;
  limit?: number;
}): Promise<{ query: string; total_found: number; prospects: ProspectResult[] }> {
  const parts = ["site:linkedin.com/in"];
  if (params.query) parts.push(params.query);
  if (params.role) parts.push(`"${params.role}"`);
  if (params.industry) parts.push(params.industry);
  if (params.location) parts.push(params.location);
  if (params.keywords) parts.push(params.keywords);
  const query = parts.join(" ");

  const results = await searchBrightDataWeb(query, params.limit ?? 10);

  const prospects = results
    .filter((r) => r.url.includes("linkedin.com/in/"))
    .map((r) => {
      const slugMatch = r.url.match(/linkedin\.com\/in\/([^/?]+)/);
      const slug = slugMatch?.[1] || "";
      const nameFromSlug = slug
        .replace(/-[a-f0-9]{6,}$/, "")
        .replace(/-/g, " ")
        .replace(/\b\w/g, (c) => c.toUpperCase());

      const title = r.title.replace(/\s*[|\-–]\s*LinkedIn.*$/i, "").trim();
      const titleParts = title.split(/\s*[-–]\s*/);
      const name = titleParts[0]?.trim() || nameFromSlug;
      const headline = titleParts.slice(1).join(" - ").trim();

      const atMatch = headline.match(/(?:at|chez|@)\s+(.+)/i);
      const company = atMatch?.[1]?.trim() || null;

      return { name, headline, company, linkedin_url: r.url, snippet: r.description };
    });

  return { query, total_found: prospects.length, prospects };
}

// ══════════════════════════════════════════════════════════════
// Apollo.io — People Search (fallback)
// ══════════════════════════════════════════════════════════════

interface ApolloRawPerson {
  id?: string;
  first_name?: string;
  last_name?: string;
  name?: string;
  title?: string;
  email?: string;
  email_status?: string;
  linkedin_url?: string;
  organization_name?: string;
  organization?: {
    website_url?: string;
    industry?: string;
    estimated_num_employees?: number;
  };
  city?: string;
  country?: string;
  photo_url?: string;
}

interface ApolloRawSearchResponse {
  people?: ApolloRawPerson[];
  pagination?: {
    page?: number;
    per_page?: number;
    total_entries?: number;
    total_pages?: number;
  };
}

export interface ApolloPersonProfile {
  id: string;
  name: string;
  title: string;
  email: string | null;
  linkedin_url: string | null;
  organization_name: string | null;
  organization_industry: string | null;
  city: string | null;
  country: string | null;
}

function getApolloApiKey(): string {
  const key = process.env.APOLLO_API_KEY;
  if (!key) throw new Error("APOLLO_API_KEY non configure dans les variables d'environnement.");
  return key;
}

/**
 * Search people on Apollo.io (fallback when Bright Data is unavailable).
 */
export async function searchProspectsApollo(params: {
  person_titles?: string[];
  person_locations?: string[];
  q_organization_keyword_tags?: string[];
  per_page?: number;
}): Promise<{ people: ApolloPersonProfile[]; total_entries: number }> {
  const apiKey = getApolloApiKey();

  const body = {
    ...params,
    per_page: Math.min(params.per_page ?? 25, 100),
    page: 1,
  };

  const raw = await apiCall<ApolloRawSearchResponse>(
    "https://api.apollo.io/api/v1/mixed_people/api_search",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-api-key": apiKey,
      },
      body: JSON.stringify(body),
    }
  );

  const people = (raw.people || []).map(mapApolloRawPerson);
  return { people, total_entries: raw.pagination?.total_entries ?? 0 };
}

function mapApolloRawPerson(raw: ApolloRawPerson): ApolloPersonProfile {
  return {
    id: raw.id ?? "",
    name: raw.name ?? `${raw.first_name ?? ""} ${raw.last_name ?? ""}`.trim(),
    title: raw.title ?? "",
    email: raw.email ?? null,
    linkedin_url: raw.linkedin_url ?? null,
    organization_name: raw.organization_name ?? null,
    organization_industry: raw.organization?.industry ?? null,
    city: raw.city ?? null,
    country: raw.country ?? null,
  };
}
