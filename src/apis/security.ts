/**
 * Security utilities for the MCP server — SSRF protection + input sanitization.
 * Adapted from dashboard's security.ts — no Next.js dependencies.
 */

// ─── SSRF Protection ───

const BLOCKED_HOSTNAMES = [
  /^localhost$/i,
  /^127\.\d+\.\d+\.\d+$/,
  /^10\.\d+\.\d+\.\d+$/,
  /^172\.(1[6-9]|2\d|3[01])\.\d+\.\d+$/,
  /^192\.168\.\d+\.\d+$/,
  /^169\.254\.\d+\.\d+$/,
  /^0\.\d+\.\d+\.\d+$/,
  /^\[::1\]$/,
  /^\[::\]$/,
  /^fc[0-9a-f]{2}:/i,
  /^fe[89a-f][0-9a-f]:/i,
  /^metadata\.google\.internal$/i,
];

/**
 * Validate that a URL is safe to fetch (no internal/private IPs).
 * Prevents SSRF attacks.
 */
export function validateExternalUrl(rawUrl: string): URL {
  let url: URL;
  try {
    url = new URL(rawUrl.startsWith("http") ? rawUrl : `https://${rawUrl}`);
  } catch {
    throw new Error("URL invalide");
  }

  if (!["http:", "https:"].includes(url.protocol)) {
    throw new Error("Protocole non autorise (http/https uniquement)");
  }

  const hostname = url.hostname;

  for (const pattern of BLOCKED_HOSTNAMES) {
    if (pattern.test(hostname)) {
      throw new Error("Acces aux adresses internes interdit");
    }
  }

  if (hostname === "169.254.169.254" || hostname === "metadata.google.internal") {
    throw new Error("Acces aux metadonnees cloud interdit");
  }

  return url;
}

// ─── Input Sanitization ───

/**
 * Sanitize a string for use in AI prompts.
 * Truncates, removes control characters, and trims.
 */
export function sanitizeForPrompt(
  text: string | null | undefined,
  maxLength: number = 3000
): string {
  if (!text) return "";
  return text
    .slice(0, maxLength)
    .replace(/[\x00-\x08\x0B\x0C\x0E-\x1F\x7F]/g, "")
    .replace(/\r\n/g, "\n")
    .trim();
}

// ─── Validation Helpers ───

const DOMAIN_REGEX =
  /^(?:[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?\.)+[a-z]{2,}$/i;

export function validateDomain(value: string): boolean {
  return DOMAIN_REGEX.test(value) && value.length <= 253;
}

const LINKEDIN_URL_REGEX =
  /^https?:\/\/(www\.)?linkedin\.com\/(in|company)\/[\w-]+\/?$/i;

export function validateLinkedInUrl(value: string): boolean {
  return LINKEDIN_URL_REGEX.test(value);
}
