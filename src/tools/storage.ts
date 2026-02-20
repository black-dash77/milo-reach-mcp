/**
 * Storage MCP tools — lead_save, lead_list
 */

import type { Tool } from "@modelcontextprotocol/sdk/types.js";
import { getSupabaseClient } from "../apis/supabase.js";

export function getStorageTools(): Tool[] {
  return [
    {
      name: "lead_save",
      description:
        "Save a new lead to the Supabase leads table. Provide at minimum a name and source. Returns the created lead ID.",
      inputSchema: {
        type: "object" as const,
        properties: {
          name: { type: "string", description: "Lead's full name" },
          company: { type: "string", description: "Company name" },
          email: { type: "string", description: "Email address" },
          phone: { type: "string", description: "Phone number" },
          linkedin_url: { type: "string", description: "LinkedIn profile URL" },
          website: { type: "string", description: "Company website" },
          source: {
            type: "string",
            description: "Lead source (e.g. 'mcp_prospect_search', 'mcp_sogc', 'mcp_manual')",
          },
          notes: { type: "string", description: "Additional notes about the lead" },
          score: { type: "number", description: "Lead score 0-100 (optional)" },
          temperature: {
            type: "string",
            enum: ["cold", "warm", "hot"],
            description: "Lead temperature. Default: cold",
          },
          sector: { type: "string", description: "Business sector/industry" },
          location: { type: "string", description: "Lead location (city, country)" },
          user_id: { type: "string", description: "Owner user ID (UUID). Required." },
        },
        required: ["name", "source", "user_id"],
      },
    },
    {
      name: "lead_list",
      description:
        "List leads from the Supabase leads table with optional filters. Returns up to 50 leads sorted by creation date (newest first).",
      inputSchema: {
        type: "object" as const,
        properties: {
          user_id: { type: "string", description: "Owner user ID (UUID). Required." },
          temperature: {
            type: "string",
            enum: ["cold", "warm", "hot"],
            description: "Filter by temperature",
          },
          min_score: { type: "number", description: "Minimum score filter (0-100)" },
          source: { type: "string", description: "Filter by source" },
          search: { type: "string", description: "Search by name or company (case-insensitive)" },
          limit: { type: "number", description: "Max results (default 20, max 50)" },
        },
        required: ["user_id"],
      },
    },
  ];
}

export async function handleStorageTool(
  name: string,
  args: Record<string, unknown>
): Promise<{ content: Array<{ type: "text"; text: string }> } | null> {
  switch (name) {
    case "lead_save":
      return await handleLeadSave(args);
    case "lead_list":
      return await handleLeadList(args);
    default:
      return null;
  }
}

async function handleLeadSave(
  args: Record<string, unknown>
): Promise<{ content: Array<{ type: "text"; text: string }> }> {
  try {
    const name = args.name as string;
    const source = args.source as string;
    const userId = args.user_id as string;

    if (!name || !source || !userId) {
      return errorResult("name, source, et user_id sont requis pour lead_save.");
    }

    const supabase = getSupabaseClient();

    const leadData: Record<string, unknown> = {
      name,
      source,
      user_id: userId,
      company: (args.company as string) || null,
      email: (args.email as string) || null,
      phone: (args.phone as string) || null,
      linkedin_url: (args.linkedin_url as string) || null,
      website: (args.website as string) || null,
      notes: (args.notes as string) || null,
      score: typeof args.score === "number" ? args.score : 0,
      temperature: (args.temperature as string) || "cold",
      sector: (args.sector as string) || null,
      location: (args.location as string) || null,
    };

    const { data, error } = await supabase.from("leads").insert(leadData).select("id, name").single();

    if (error) {
      return errorResult(`Supabase insert error: ${error.message}`);
    }

    return jsonResult({
      success: true,
      lead_id: data.id,
      name: data.name,
      message: `Lead "${data.name}" sauvegarde avec succes.`,
    });
  } catch (err) {
    return errorResult(`lead_save error: ${err instanceof Error ? err.message : String(err)}`);
  }
}

async function handleLeadList(
  args: Record<string, unknown>
): Promise<{ content: Array<{ type: "text"; text: string }> }> {
  try {
    const userId = args.user_id as string;
    if (!userId) {
      return errorResult("user_id est requis pour lead_list.");
    }

    const supabase = getSupabaseClient();
    const limit = Math.min((args.limit as number) || 20, 50);

    let query = supabase
      .from("leads")
      .select("id, name, company, email, phone, linkedin_url, website, source, score, temperature, sector, location, notes, created_at")
      .eq("user_id", userId)
      .order("created_at", { ascending: false })
      .limit(limit);

    if (args.temperature) {
      query = query.eq("temperature", args.temperature as string);
    }
    if (typeof args.min_score === "number") {
      query = query.gte("score", args.min_score);
    }
    if (args.source) {
      query = query.eq("source", args.source as string);
    }
    if (args.search) {
      const search = args.search as string;
      query = query.or(`name.ilike.%${search}%,company.ilike.%${search}%`);
    }

    const { data, error } = await query;

    if (error) {
      return errorResult(`Supabase query error: ${error.message}`);
    }

    return jsonResult({
      total: data?.length || 0,
      leads: data || [],
    });
  } catch (err) {
    return errorResult(`lead_list error: ${err instanceof Error ? err.message : String(err)}`);
  }
}

// ── Helpers ──

function jsonResult(data: unknown): { content: Array<{ type: "text"; text: string }> } {
  return { content: [{ type: "text", text: JSON.stringify(data, null, 2) }] };
}

function errorResult(message: string): { content: Array<{ type: "text"; text: string }> } {
  return { content: [{ type: "text", text: JSON.stringify({ error: message }) }] };
}
