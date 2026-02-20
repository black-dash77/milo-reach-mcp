/**
 * Enrichment MCP tools — email_find, email_verify, prospect_enrich
 */

import type { Tool } from "@modelcontextprotocol/sdk/types.js";
import {
  findEmail,
  verifyEmail,
  enrichLinkedInProfile,
  enrichCompanyProfile,
} from "../apis/enrichment.js";

export function getEnrichmentTools(): Tool[] {
  return [
    {
      name: "email_find",
      description:
        "Find the professional email address of a person using Hunter.io. Provide the person's full name and their company domain.",
      inputSchema: {
        type: "object" as const,
        properties: {
          full_name: { type: "string", description: "Person's full name (e.g. 'Jean Dupont')" },
          domain: { type: "string", description: "Company domain (e.g. 'example.com')" },
        },
        required: ["full_name", "domain"],
      },
    },
    {
      name: "email_verify",
      description:
        "Verify if an email address is valid and deliverable using Hunter.io. Returns status (valid/invalid/accept_all/unknown), score, and flags (disposable, webmail).",
      inputSchema: {
        type: "object" as const,
        properties: {
          email: { type: "string", description: "Email address to verify" },
        },
        required: ["email"],
      },
    },
    {
      name: "prospect_enrich",
      description:
        "Enrich a prospect's profile using ProxyCurl. Provide a LinkedIn URL to get full profile data (experience, education, skills) or a company domain/LinkedIn URL for company data.",
      inputSchema: {
        type: "object" as const,
        properties: {
          linkedin_url: {
            type: "string",
            description: "LinkedIn profile or company URL (e.g. 'https://www.linkedin.com/in/jean-dupont')",
          },
          domain: {
            type: "string",
            description: "Company domain for company enrichment (e.g. 'example.com')",
          },
          type: {
            type: "string",
            enum: ["person", "company"],
            description: "Enrichment type: 'person' for LinkedIn profile, 'company' for company data. Default: person",
          },
        },
      },
    },
  ];
}

export async function handleEnrichmentTool(
  name: string,
  args: Record<string, unknown>
): Promise<{ content: Array<{ type: "text"; text: string }> } | null> {
  switch (name) {
    case "email_find":
      return await handleEmailFind(args);
    case "email_verify":
      return await handleEmailVerify(args);
    case "prospect_enrich":
      return await handleProspectEnrich(args);
    default:
      return null;
  }
}

async function handleEmailFind(
  args: Record<string, unknown>
): Promise<{ content: Array<{ type: "text"; text: string }> }> {
  try {
    const fullName = args.full_name as string;
    const domain = args.domain as string;

    if (!fullName || !domain) {
      return errorResult("full_name et domain sont requis pour email_find.");
    }

    const result = await findEmail(fullName, domain);
    return jsonResult(result);
  } catch (err) {
    return errorResult(`email_find error: ${err instanceof Error ? err.message : String(err)}`);
  }
}

async function handleEmailVerify(
  args: Record<string, unknown>
): Promise<{ content: Array<{ type: "text"; text: string }> }> {
  try {
    const email = args.email as string;
    if (!email) {
      return errorResult("email est requis pour email_verify.");
    }

    const result = await verifyEmail(email);
    return jsonResult(result);
  } catch (err) {
    return errorResult(`email_verify error: ${err instanceof Error ? err.message : String(err)}`);
  }
}

async function handleProspectEnrich(
  args: Record<string, unknown>
): Promise<{ content: Array<{ type: "text"; text: string }> }> {
  try {
    const linkedinUrl = args.linkedin_url as string | undefined;
    const domain = args.domain as string | undefined;
    const type = (args.type as string) || "person";

    if (!linkedinUrl && !domain) {
      return errorResult("linkedin_url ou domain requis pour prospect_enrich.");
    }

    if (type === "company") {
      const result = await enrichCompanyProfile(linkedinUrl, domain);
      return jsonResult(result);
    }

    // Person enrichment
    if (!linkedinUrl) {
      return errorResult("linkedin_url requis pour l'enrichissement de profil (type: person).");
    }

    const result = await enrichLinkedInProfile(linkedinUrl);
    return jsonResult(result);
  } catch (err) {
    return errorResult(`prospect_enrich error: ${err instanceof Error ? err.message : String(err)}`);
  }
}

// ── Helpers ──

function jsonResult(data: unknown): { content: Array<{ type: "text"; text: string }> } {
  return { content: [{ type: "text", text: JSON.stringify(data, null, 2) }] };
}

function errorResult(message: string): { content: Array<{ type: "text"; text: string }> } {
  return { content: [{ type: "text", text: JSON.stringify({ error: message }) }] };
}
