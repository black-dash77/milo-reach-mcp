/**
 * SSRF-safe web scraper for MCP server.
 * Uses native fetch + basic HTML text extraction (no node-html-parser dependency).
 * Security: SSRF protection via validateExternalUrl.
 */

import { validateExternalUrl } from "./security.js";

const MAX_RESPONSE_SIZE = 5 * 1024 * 1024; // 5 MB

export interface ScrapedPage {
  url: string;
  title: string;
  description: string;
  headings: string[];
  textContent: string;
  links: Array<{ text: string; href: string }>;
}

/**
 * Scrape a website and extract structured text data.
 * SSRF-safe: blocks private/internal IPs, cloud metadata endpoints.
 * No ScrapingBee — uses native fetch only.
 */
export async function scrapeWebsite(url: string): Promise<ScrapedPage> {
  const validatedUrl = validateExternalUrl(url);
  const safeUrl = validatedUrl.toString();

  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), 15000);

  try {
    const response = await fetch(safeUrl, {
      signal: controller.signal,
      headers: {
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36",
        Accept: "text/html,application/xhtml+xml",
      },
      redirect: "follow",
    });

    clearTimeout(timeout);

    if (!response.ok) {
      throw new Error(`Le site a retourne une erreur HTTP ${response.status}`);
    }

    const contentType = response.headers.get("content-type") || "";
    if (!contentType.includes("text/html") && !contentType.includes("application/xhtml")) {
      throw new Error("Le contenu n'est pas du HTML");
    }

    const contentLength = response.headers.get("content-length");
    if (contentLength && parseInt(contentLength, 10) > MAX_RESPONSE_SIZE) {
      throw new Error("Page trop volumineuse (> 5 MB)");
    }

    const html = await response.text();
    if (html.length > MAX_RESPONSE_SIZE) {
      throw new Error("Page trop volumineuse (> 5 MB)");
    }

    // Validate final URL after redirects
    if (response.url) {
      try {
        validateExternalUrl(response.url);
      } catch {
        throw new Error("Redirection vers une adresse interne interdite");
      }
    }

    // Simple HTML parsing without external dependency
    const title = extractTag(html, "title")?.slice(0, 200) || "";
    const description =
      extractMetaContent(html, 'name="description"') ||
      extractMetaContent(html, 'property="og:description"') ||
      "";

    const headings = extractAllTags(html, "h1")
      .concat(extractAllTags(html, "h2"))
      .concat(extractAllTags(html, "h3"))
      .filter((h) => h.length < 200)
      .slice(0, 20);

    // Strip scripts, styles, and HTML tags for text content
    let textContent = html
      .replace(/<script[\s\S]*?<\/script>/gi, "")
      .replace(/<style[\s\S]*?<\/style>/gi, "")
      .replace(/<nav[\s\S]*?<\/nav>/gi, "")
      .replace(/<footer[\s\S]*?<\/footer>/gi, "")
      .replace(/<header[\s\S]*?<\/header>/gi, "")
      .replace(/<[^>]+>/g, " ")
      .replace(/&nbsp;/g, " ")
      .replace(/&amp;/g, "&")
      .replace(/&lt;/g, "<")
      .replace(/&gt;/g, ">")
      .replace(/&quot;/g, '"')
      .replace(/&#39;/g, "'")
      .replace(/\s+/g, " ")
      .trim()
      .slice(0, 5000);

    // Extract links
    const linkRegex = /<a\s[^>]*href=["']([^"']+)["'][^>]*>([\s\S]*?)<\/a>/gi;
    const links: Array<{ text: string; href: string }> = [];
    let linkMatch;
    while ((linkMatch = linkRegex.exec(html)) !== null && links.length < 30) {
      const href = linkMatch[1];
      const text = linkMatch[2].replace(/<[^>]+>/g, "").trim();
      if (href && text && !href.startsWith("#") && !href.startsWith("javascript:")) {
        let absoluteHref = href;
        if (href.startsWith("/")) {
          try {
            absoluteHref = new URL(href, safeUrl).toString();
          } catch {
            absoluteHref = href;
          }
        }
        links.push({ text: text.slice(0, 100), href: absoluteHref });
      }
    }

    return { url: safeUrl, title, description: description.slice(0, 500), headings, textContent, links };
  } catch (err) {
    clearTimeout(timeout);

    if (err instanceof DOMException && err.name === "AbortError") {
      throw new Error("Le site n'a pas repondu dans les 15 secondes");
    }

    if (
      err instanceof Error &&
      (err.message.includes("interne") ||
        err.message.includes("HTML") ||
        err.message.includes("volumineuse") ||
        err.message.includes("Redirection") ||
        err.message.includes("retourne"))
    ) {
      throw err;
    }

    throw new Error("Impossible de scraper ce site. Verifiez l'URL et reessayez.");
  }
}

// ── Simple HTML extraction helpers ──

function extractTag(html: string, tag: string): string | null {
  const regex = new RegExp(`<${tag}[^>]*>([\\s\\S]*?)<\\/${tag}>`, "i");
  const match = html.match(regex);
  return match ? match[1].replace(/<[^>]+>/g, "").trim() : null;
}

function extractAllTags(html: string, tag: string): string[] {
  const regex = new RegExp(`<${tag}[^>]*>([\\s\\S]*?)<\\/${tag}>`, "gi");
  const results: string[] = [];
  let match;
  while ((match = regex.exec(html)) !== null) {
    const text = match[1].replace(/<[^>]+>/g, "").trim();
    if (text) results.push(text);
  }
  return results;
}

function extractMetaContent(html: string, attr: string): string {
  const regex = new RegExp(`<meta\\s[^>]*${attr}[^>]*content=["']([^"']*)["']`, "i");
  const match = html.match(regex);
  if (match) return match[1].trim();

  // Try reverse order (content before attr)
  const regex2 = new RegExp(`<meta\\s[^>]*content=["']([^"']*)["'][^>]*${attr}`, "i");
  const match2 = html.match(regex2);
  return match2 ? match2[1].trim() : "";
}
