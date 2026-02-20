/**
 * Zefix — Swiss Central Business Name Index (Registre du Commerce Suisse)
 * Standalone version for MCP server — no Supabase, no Next.js.
 *
 * Endpoints:
 *   POST /api/v1/company/search — search companies
 *   GET  /api/v1/sogc/bydate/{date} — SOGC publications by date
 *
 * Auth: Basic (ZEFIX_USERNAME + ZEFIX_PASSWORD from env)
 * Fallback: Bright Data SERP (Google search) via discovery.ts
 */

import { searchBrightDataWeb } from "./discovery.js";

const BASE_URL = "https://www.zefix.admin.ch/ZefixPublicREST/api/v1";

// ── Public types ──

export interface ZefixCompany {
  name: string;
  uid: string;
  ehraid: number | null;
  legalSeat: string;
  canton: string;
  legalForm: string;
  status: string;
  sogcDate: string | null;
  purpose: string | null;
  url: string | null;
}

export interface ZefixSearchResult {
  query: string;
  total_found: number;
  companies: ZefixCompany[];
  source: "api" | "google";
}

export interface ZefixSogcPublication {
  sogcId: number;
  sogcDate: string;
  registryOfCommerceCanton: string;
  message: string;
  mutationTypes: string[];
  isNewRegistration: boolean;
  company: ZefixCompany | null;
}

export interface ZefixSogcResult {
  date: string;
  total_found: number;
  publications: ZefixSogcPublication[];
  source: "api" | "google";
}

// ── API response types ──

interface CompanyShortResponse {
  name: string;
  ehraid?: number;
  uid: string;
  chid?: string;
  legalSeat?: string;
  legalSeatId?: number;
  registryOfCommerceId?: number;
  legalForm?: {
    id?: number;
    uid?: string;
    name?: { fr?: string; de?: string };
    shortName?: { fr?: string; de?: string };
  };
  status?: string;
  sogcDate?: string;
  deletionDate?: string;
  cantonalExcerptWeb?: string;
  canton?: string;
  purpose?: string;
}

interface SogcPublicationResponse {
  sogcPublication: {
    sogcDate: string;
    sogcId: number;
    registryOfCommerceCanton?: string;
    message?: string;
    mutationTypes?: { id: number; key: string }[];
  };
  companyShort?: CompanyShortResponse;
}

// ── Auth (with 401 cache) ──

let authFailedUntil = 0;

function getZefixAuth(): string | null {
  if (authFailedUntil > Date.now()) return null;
  const username = process.env.ZEFIX_USERNAME;
  const password = process.env.ZEFIX_PASSWORD;
  if (!username || !password) return null;
  return `Basic ${Buffer.from(`${username}:${password}`).toString("base64")}`;
}

function markAuthFailed(): void {
  authFailedUntil = Date.now() + 30 * 60 * 1000;
  console.error("[Zefix] Auth failed (401) — disabling API calls for 30 min, using Google fallback");
}

// ── Smart filter: new registration classification ──

const NEW_MUTATION_KEYS = new Set([
  "hr01", "neueintragung", "neue-eintragung", "neue_eintragung",
  "new_registration", "new-registration", "inscription",
]);

const NEW_MSG_START_PATTERNS = [
  "nouvelle inscription", "neueintragung", "neue eintragung",
  "nuova iscrizione", "prima iscrizione",
];

const NEW_MSG_PATTERNS_FR = [
  "nouvelle inscription", "inscription au registre du commerce",
  "inscription au rc", "constitution de", "fondation de",
  "est inscrite au registre", "est inscrit au registre",
  "a ete inscrite", "a ete inscrit", "premiere inscription",
];
const NEW_MSG_PATTERNS_DE = [
  "neueintragung", "neue eintragung",
  "eintragung ins handelsregister", "eingetragen im handelsregister",
  "erstmalige eintragung",
];

const EXCLUDE_MSG_PATTERNS = [
  "mutation", "modification", "radiation", "dissolution", "liquidation",
  "transfert", "changement de", "transformation", "renouvellement",
  "retablissement", "revocation", "changement de siege",
  "changement de raison sociale", "changement de but",
  "augmentation de capital", "reduction de capital",
  "changement d'adresse", "changement de domicile",
  "demission", "nomination", "fusion", "scission", "absorption",
  "conversion", "prorogation", "faillite", "concordat", "sursis",
  "inscription complementaire", "rectification", "mise a jour",
  "loeschung", "aenderung", "sitzverlegung", "firmenaenderung",
  "kapitalerhoehung", "kapitalherabsetzung", "umwandlung", "spaltung",
  "konkurs", "nachlassstundung", "berichtigung",
  "cancellazione", "modifica", "mutazione", "scioglimento", "liquidazione",
];

const TRANSFORMATION_PATTERNS = [
  "transformation", "transfert", "fusion", "scission", "absorption",
  "suite a la transformation", "par suite de transformation",
  "par suite de fusion", "par suite de scission", "par suite de transfert",
  "umwandlung", "sitzverlegung", "spaltung",
  "trasformazione", "trasferimento", "fusione", "scissione",
];

function classifyAsNewRegistration(
  mutationTypes: Array<{ id: number; key: string }> | undefined,
  message: string,
  company: CompanyShortResponse | undefined
): boolean {
  const msgLower = message.toLowerCase().trim();

  if (mutationTypes && mutationTypes.length > 0) {
    const keys = mutationTypes.map((mt) => mt.key.toLowerCase().replace(/[\s-_]/g, ""));
    const hasNewKey = keys.some(
      (k) => NEW_MUTATION_KEYS.has(k) || k.includes("neueintragung") || k.includes("hr01")
    );
    if (!hasNewKey) return false;
  }

  const startsWithExclude = EXCLUDE_MSG_PATTERNS.some((p) => msgLower.startsWith(p));
  if (startsWithExclude) return false;

  const startsWithNew = NEW_MSG_START_PATTERNS.some((p) => msgLower.startsWith(p));
  if (startsWithNew) {
    const isTransformation = TRANSFORMATION_PATTERNS.some((p) => msgLower.includes(p));
    if (isTransformation) return false;
    return checkCompanyStatus(company);
  }

  const hasExcludeInBody = EXCLUDE_MSG_PATTERNS.some((p) => msgLower.includes(p));
  if (hasExcludeInBody) return false;

  const hasNewInBody =
    NEW_MSG_PATTERNS_FR.some((p) => msgLower.includes(p)) ||
    NEW_MSG_PATTERNS_DE.some((p) => msgLower.includes(p));
  if (!hasNewInBody && !(mutationTypes && mutationTypes.length > 0)) return false;

  return checkCompanyStatus(company);
}

function checkCompanyStatus(company: CompanyShortResponse | undefined): boolean {
  if (!company) return true;
  const status = (company.status || "").toUpperCase();
  if (status === "CANCELLED" || status === "BEING_CANCELLED") return false;
  if (company.deletionDate) return false;
  return true;
}

function deduplicateByUid(publications: ZefixSogcPublication[]): ZefixSogcPublication[] {
  const seen = new Set<string>();
  return publications.filter((p) => {
    if (!p.company?.uid) return true;
    if (seen.has(p.company.uid)) return false;
    seen.add(p.company.uid);
    return true;
  });
}

async function verifyCompanyIsRecent(uid: string, auth: string, maxAgeMonths: number): Promise<boolean> {
  if (!uid) return true;
  try {
    const cleanUid = uid.replace(/[-.\s]/g, "");
    const response = await fetch(`${BASE_URL}/company/uid/${encodeURIComponent(cleanUid)}`, {
      method: "GET",
      headers: { Accept: "application/json", Authorization: auth },
      signal: AbortSignal.timeout(8000),
    });
    if (!response.ok) return true;
    const data = await response.json() as Record<string, unknown>;
    const cutoff = new Date();
    cutoff.setMonth(cutoff.getMonth() - maxAgeMonths);

    if (Array.isArray(data.sogcPublications) && (data.sogcPublications as unknown[]).length > 1) {
      const pubDates = (data.sogcPublications as Record<string, unknown>[])
        .map((p) => (p.sogcDate || (p.sogcPublication as Record<string, unknown>)?.sogcDate) as string)
        .filter(Boolean)
        .map((d) => new Date(d))
        .filter((d) => !isNaN(d.getTime()))
        .sort((a, b) => a.getTime() - b.getTime());
      if (pubDates.length > 0 && pubDates[0] < cutoff) return false;
    }

    const regDateStr = data.registrationDate || data.firstRegistrationDate || data.inscriptionDate;
    if (typeof regDateStr === "string") {
      const regDate = new Date(regDateStr);
      if (!isNaN(regDate.getTime()) && regDate < cutoff) return false;
    }

    return true;
  } catch {
    return true;
  }
}

async function batchVerifyAge(
  publications: ZefixSogcPublication[],
  auth: string,
  maxAgeMonths: number
): Promise<ZefixSogcPublication[]> {
  if (publications.length === 0) return publications;
  const verifications = await Promise.allSettled(
    publications.map((p) =>
      p.company?.uid ? verifyCompanyIsRecent(p.company.uid, auth, maxAgeMonths) : Promise.resolve(true)
    )
  );
  return publications.filter((_, i) => {
    const result = verifications[i];
    return result.status === "fulfilled" ? result.value : true;
  });
}

function mapCompany(c: CompanyShortResponse): ZefixCompany {
  const lf = c.legalForm;
  return {
    name: c.name,
    uid: c.uid,
    ehraid: c.ehraid ?? null,
    legalSeat: c.legalSeat || "",
    canton: c.canton || "",
    legalForm: lf?.shortName?.fr || lf?.shortName?.de || lf?.name?.fr || lf?.name?.de || "",
    status:
      c.status === "ACTIVE" ? "Actif"
        : c.status === "BEING_CANCELLED" ? "En liquidation"
        : c.status === "CANCELLED" ? "Radie"
        : c.status || "",
    sogcDate: c.sogcDate || null,
    purpose: c.purpose || null,
    url: c.cantonalExcerptWeb || null,
  };
}

// ── Company Search ──

export async function searchZefix(params: {
  name: string;
  canton?: string;
  activeOnly?: boolean;
  maxEntries?: number;
}): Promise<ZefixSearchResult> {
  const auth = getZefixAuth();
  if (auth) {
    try {
      return await searchViaApi(params, auth);
    } catch (err) {
      console.error("[Zefix] API failed, falling back to Google:", err instanceof Error ? err.message : err);
    }
  }
  return await searchViaGoogle(params);
}

async function searchViaApi(
  params: { name: string; canton?: string; activeOnly?: boolean; maxEntries?: number },
  auth: string
): Promise<ZefixSearchResult> {
  const body: Record<string, unknown> = {
    name: params.name,
    activeOnly: params.activeOnly !== false,
  };
  if (params.canton) body.canton = params.canton.toUpperCase();

  const response = await fetch(`${BASE_URL}/company/search`, {
    method: "POST",
    headers: { "Content-Type": "application/json", Accept: "application/json", Authorization: auth },
    body: JSON.stringify(body),
    signal: AbortSignal.timeout(15000),
  });

  if (!response.ok) {
    const errText = await response.text().catch(() => "");
    if (response.status === 401 || response.status === 403) markAuthFailed();
    throw new Error(`Zefix API HTTP ${response.status}: ${errText.slice(0, 200)}`);
  }

  const data = (await response.json()) as CompanyShortResponse[];
  const maxEntries = Math.min(params.maxEntries ?? 20, 50);

  return {
    query: params.name,
    total_found: data.length,
    companies: data.slice(0, maxEntries).map(mapCompany),
    source: "api",
  };
}

// ── SOGC by date ──

export async function getZefixSogcByDate(date: string, newOnly: boolean = false): Promise<ZefixSogcResult> {
  const auth = getZefixAuth();
  if (auth) {
    try {
      return await sogcByDateViaApi(date, auth, newOnly);
    } catch (err) {
      console.error("[Zefix] SOGC API failed, falling back to Google:", err instanceof Error ? err.message : err);
    }
  }
  return await sogcByDateViaGoogle(date);
}

async function sogcByDateViaApi(date: string, auth: string, newOnly: boolean = false): Promise<ZefixSogcResult> {
  const response = await fetch(`${BASE_URL}/sogc/bydate/${date}`, {
    method: "GET",
    headers: { Accept: "application/json", Authorization: auth },
    signal: AbortSignal.timeout(15000),
  });

  if (!response.ok) {
    const errText = await response.text().catch(() => "");
    if (response.status === 401 || response.status === 403) markAuthFailed();
    throw new Error(`Zefix SOGC API HTTP ${response.status}: ${errText.slice(0, 200)}`);
  }

  const data = (await response.json()) as SogcPublicationResponse[];

  let publications: ZefixSogcPublication[] = data.map((p) => {
    const mtKeys = (p.sogcPublication.mutationTypes || []).map((mt) => mt.key);
    const isNew = classifyAsNewRegistration(
      p.sogcPublication.mutationTypes,
      p.sogcPublication.message || "",
      p.companyShort
    );
    return {
      sogcId: p.sogcPublication.sogcId,
      sogcDate: p.sogcPublication.sogcDate,
      registryOfCommerceCanton: p.sogcPublication.registryOfCommerceCanton || "",
      message: p.sogcPublication.message || "",
      mutationTypes: mtKeys,
      isNewRegistration: isNew,
      company: p.companyShort ? mapCompany(p.companyShort) : null,
    };
  });

  if (newOnly) {
    publications = deduplicateByUid(publications.filter((p) => p.isNewRegistration));
    publications = await batchVerifyAge(publications, auth, 6);
  }

  return { date, total_found: publications.length, publications, source: "api" };
}

async function sogcByDateViaGoogle(date: string): Promise<ZefixSogcResult> {
  const results = await searchBrightDataWeb(
    `site:shab.ch OR site:zefix.admin.ch "nouvelle inscription" OR "Neueintragung" "${date}"`,
    15
  );

  const publications: ZefixSogcPublication[] = [];

  for (const r of results) {
    const name = r.title
      .replace(/\s*[-|]\s*(SHAB|Zefix|FOSC|SOGC|Moneyhouse|Registre).*$/i, "")
      .replace(/\s*[-|]\s*www\..*$/i, "")
      .trim();
    if (!name || name.length < 2) continue;

    const textLower = (r.title + " " + r.description).toLowerCase();
    const cantonMatch = textLower.match(/\b(ge|vd|zh|be|lu|sg|ag|bs|bl|ti|vs|fr|ne|ju|so|tg|sz|zg|gr|sh|ar|ai|ow|nw|ur|gl)\b/);

    const isNew = classifyAsNewRegistration(undefined, r.description, undefined);

    publications.push({
      sogcId: publications.length,
      sogcDate: date,
      registryOfCommerceCanton: cantonMatch ? cantonMatch[1].toUpperCase() : "",
      message: r.description,
      mutationTypes: [],
      isNewRegistration: isNew,
      company: {
        name,
        uid: "",
        ehraid: null,
        legalSeat: "",
        canton: cantonMatch ? cantonMatch[1].toUpperCase() : "",
        legalForm: "",
        status: "",
        sogcDate: date,
        purpose: r.description,
        url: r.url,
      },
    });
  }

  return { date, total_found: publications.length, publications, source: "google" };
}

// ── SOGC by date range ──

export async function getZefixSogcByDateRange(
  startDate: string,
  endDate: string,
  newOnly: boolean = true,
  canton?: string
): Promise<{ dates: string[]; total_found: number; publications: ZefixSogcPublication[]; source: "api" | "google" }> {
  const allDates: string[] = [];
  const start = new Date(startDate + "T00:00:00Z");
  const end = new Date(endDate + "T00:00:00Z");
  for (let d = new Date(start); d <= end; d.setUTCDate(d.getUTCDate() + 1)) {
    allDates.push(d.toISOString().slice(0, 10));
  }

  let useApi = getZefixAuth() !== null;
  if (useApi && allDates.length > 1) {
    try {
      const probeResult = await getZefixSogcByDate(allDates[allDates.length - 1], newOnly);
      if (probeResult.source === "google") useApi = false;
    } catch {
      useApi = false;
    }
  }

  const maxDates = useApi ? 14 : 5;
  const dates = allDates.length > maxDates ? allDates.slice(-maxDates) : allDates;
  const batchSize = useApi ? dates.length : 3;
  const allResults: PromiseSettledResult<ZefixSogcResult>[] = [];

  for (let i = 0; i < dates.length; i += batchSize) {
    const batch = dates.slice(i, i + batchSize);
    const batchResults = await Promise.allSettled(
      batch.map((date) => getZefixSogcByDate(date, newOnly))
    );
    allResults.push(...batchResults);
  }

  let allPublications: ZefixSogcPublication[] = [];
  let source: "api" | "google" = "api";

  for (const result of allResults) {
    if (result.status === "fulfilled") {
      allPublications.push(...result.value.publications);
      if (result.value.source === "google") source = "google";
    }
  }

  allPublications = deduplicateByUid(allPublications);

  if (canton) {
    const CANTON_MAP: Record<string, string> = {
      geneve: "GE", geneva: "GE", genf: "GE",
      vaud: "VD", lausanne: "VD",
      zurich: "ZH",
      berne: "BE", bern: "BE",
      lucerne: "LU", luzern: "LU",
      tessin: "TI", ticino: "TI",
      valais: "VS", wallis: "VS",
      fribourg: "FR", freiburg: "FR",
      neuchatel: "NE",
      jura: "JU", soleure: "SO", solothurn: "SO",
      bale: "BS", basel: "BS",
    };
    const cantonCode = CANTON_MAP[canton.toLowerCase()] || canton.toUpperCase();
    allPublications = allPublications.filter((p) => {
      const pubCanton = (p.registryOfCommerceCanton || p.company?.canton || "").toUpperCase();
      if (!pubCanton) return true;
      return pubCanton === cantonCode;
    });
  }

  return { dates, total_found: allPublications.length, publications: allPublications, source };
}

// ── Google SERP fallback for company search ──

async function searchViaGoogle(params: {
  name: string;
  canton?: string;
  maxEntries?: number;
}): Promise<ZefixSearchResult> {
  let query = `site:zefix.admin.ch "${params.name}"`;
  if (params.canton) query += ` ${params.canton}`;

  const limit = Math.min(params.maxEntries ?? 10, 20);
  const results = await searchBrightDataWeb(query, limit);

  const companies: ZefixCompany[] = results
    .filter((r) => r.url.includes("zefix.admin.ch"))
    .map((r) => {
      const uidMatch = (r.description + " " + r.title).match(/CHE-?[\d]{3}\.?[\d]{3}\.?[\d]{3}/);
      const name = r.title
        .replace(/\s*[-|]\s*Zefix.*$/i, "")
        .replace(/\s*[-|]\s*FOSC.*$/i, "")
        .trim() || r.title;
      return {
        name,
        uid: uidMatch?.[0] || "",
        ehraid: null,
        legalSeat: "",
        canton: params.canton || "",
        legalForm: "",
        status: "",
        sogcDate: null,
        purpose: r.description.slice(0, 200) || null,
        url: r.url,
      };
    });

  return { query: params.name, total_found: companies.length, companies, source: "google" };
}
