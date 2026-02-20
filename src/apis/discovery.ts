/**
 * Discovery API clients — Bright Data SERP.
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

