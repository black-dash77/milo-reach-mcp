/**
 * Discovery MCP tools — prospect_search, sogc_search, web_scrape
 */

import type { Tool } from "@modelcontextprotocol/sdk/types.js";
import { searchProspectsBrightData } from "../apis/discovery.js";
import { searchZefix, getZefixSogcByDateRange } from "../apis/zefix.js";
import { scrapeWebsite } from "../apis/scraper.js";

export function getDiscoveryTools(): Tool[] {
  return [
    {
      name: "prospect_search",
      description:
        "Search for prospects by sector, location, keywords using Bright Data SERP (Google LinkedIn X-ray). Returns names, headlines, companies, LinkedIn URLs.",
      inputSchema: {
        type: "object" as const,
        properties: {
          query: { type: "string", description: "Free-text search query" },
          role: { type: "string", description: "Job title/role filter (e.g. 'CEO', 'Marketing Director')" },
          industry: { type: "string", description: "Industry filter" },
          location: { type: "string", description: "Location filter (e.g. 'Geneva', 'Suisse romande')" },
          keywords: { type: "string", description: "Additional keywords" },
          limit: { type: "number", description: "Max results (default 10, max 20)" },
        },
        required: ["query"],
      },
    },
    {
      name: "sogc_search",
      description:
        "Search the Swiss Official Gazette of Commerce (SOGC/FOSC) via Zefix for newly registered companies. Can filter by date range, canton, and new-only registrations.",
      inputSchema: {
        type: "object" as const,
        properties: {
          name: {
            type: "string",
            description: "Company name to search (for company lookup). If provided, searches by name instead of SOGC date.",
          },
          start_date: {
            type: "string",
            description: "Start date for SOGC publications (YYYY-MM-DD). Required if no name provided.",
          },
          end_date: {
            type: "string",
            description: "End date for SOGC publications (YYYY-MM-DD). Defaults to start_date if not provided.",
          },
          canton: { type: "string", description: "Canton filter (e.g. 'GE', 'VD', 'ZH')" },
          new_only: {
            type: "boolean",
            description: "Only return genuinely new company registrations (smart 4-layer filter). Default: true",
          },
        },
      },
    },
    {
      name: "web_scrape",
      description:
        "Scrape a public website and extract structured text data (title, description, headings, text content, links). SSRF-safe: blocks private/internal IPs.",
      inputSchema: {
        type: "object" as const,
        properties: {
          url: { type: "string", description: "URL to scrape (must be public, http/https only)" },
        },
        required: ["url"],
      },
    },
  ];
}

export async function handleDiscoveryTool(
  name: string,
  args: Record<string, unknown>
): Promise<{ content: Array<{ type: "text"; text: string }> } | null> {
  switch (name) {
    case "prospect_search":
      return await handleProspectSearch(args);
    case "sogc_search":
      return await handleSogcSearch(args);
    case "web_scrape":
      return await handleWebScrape(args);
    default:
      return null;
  }
}

async function handleProspectSearch(
  args: Record<string, unknown>
): Promise<{ content: Array<{ type: "text"; text: string }> }> {
  try {
    const query = (args.query as string) || "";
    const limit = Math.min((args.limit as number) || 10, 20);

    const result = await searchProspectsBrightData({
      query,
      role: args.role as string | undefined,
      industry: args.industry as string | undefined,
      location: args.location as string | undefined,
      keywords: args.keywords as string | undefined,
      limit,
    });

    return jsonResult(result);
  } catch (err) {
    return errorResult(`prospect_search error: ${err instanceof Error ? err.message : String(err)}`);
  }
}

async function handleSogcSearch(
  args: Record<string, unknown>
): Promise<{ content: Array<{ type: "text"; text: string }> }> {
  try {
    const name = args.name as string | undefined;

    // Company search by name
    if (name) {
      const result = await searchZefix({
        name,
        canton: args.canton as string | undefined,
        activeOnly: true,
        maxEntries: 20,
      });
      return jsonResult(result);
    }

    // SOGC search by date range
    const startDate = args.start_date as string;
    if (!startDate) {
      return errorResult("Veuillez fournir soit 'name' (recherche entreprise) soit 'start_date' (publications SOGC).");
    }

    const endDate = (args.end_date as string) || startDate;
    const newOnly = args.new_only !== false;
    const canton = args.canton as string | undefined;

    const result = await getZefixSogcByDateRange(startDate, endDate, newOnly, canton);
    return jsonResult(result);
  } catch (err) {
    return errorResult(`sogc_search error: ${err instanceof Error ? err.message : String(err)}`);
  }
}

async function handleWebScrape(
  args: Record<string, unknown>
): Promise<{ content: Array<{ type: "text"; text: string }> }> {
  try {
    const url = args.url as string;
    if (!url) {
      return errorResult("URL requise pour web_scrape.");
    }

    const result = await scrapeWebsite(url);
    return jsonResult(result);
  } catch (err) {
    return errorResult(`web_scrape error: ${err instanceof Error ? err.message : String(err)}`);
  }
}

// ── Helpers ──

function jsonResult(data: unknown): { content: Array<{ type: "text"; text: string }> } {
  return { content: [{ type: "text", text: JSON.stringify(data, null, 2) }] };
}

function errorResult(message: string): { content: Array<{ type: "text"; text: string }> } {
  return { content: [{ type: "text", text: JSON.stringify({ error: message }) }] };
}
