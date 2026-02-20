/**
 * Standalone API client with retry + exponential backoff for MCP server.
 * Adapted from dashboard's BaseExternalApiClient — no Next.js dependencies.
 * Uses native fetch (Node 18+).
 */

export interface ApiCallOptions extends Omit<RequestInit, "signal"> {
  timeoutMs?: number;
  maxRetries?: number;
}

function sleep(ms: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

/**
 * Make an API call with retry (3x exponential backoff) and timeout (10s default).
 * Retries on 429 (rate limit) and 5xx (server error).
 */
export async function apiCall<T>(
  url: string,
  options: ApiCallOptions = {}
): Promise<T> {
  const { timeoutMs = 10000, maxRetries = 3, ...fetchOptions } = options;

  let lastError: Error | null = null;

  for (let attempt = 0; attempt < maxRetries; attempt++) {
    try {
      const controller = new AbortController();
      const timeout = setTimeout(() => controller.abort(), timeoutMs);

      const response = await fetch(url, {
        ...fetchOptions,
        signal: controller.signal,
      });

      clearTimeout(timeout);

      // Retry on 429 or 5xx
      if (response.status === 429 || response.status >= 500) {
        const backoffMs = Math.pow(2, attempt) * 1000;
        await sleep(backoffMs);
        lastError = new Error(`HTTP ${response.status}: ${response.statusText}`);
        continue;
      }

      if (!response.ok) {
        let errorDetail = "";
        try {
          const errBody = await response.json();
          if (typeof errBody?.error === "string" && errBody.error.length < 200) {
            errorDetail = errBody.error;
          } else if (typeof errBody?.message === "string" && errBody.message.length < 200) {
            errorDetail = errBody.message;
          }
        } catch {
          await response.text().catch(() => "");
        }

        throw new ApiError(
          errorDetail
            ? `HTTP ${response.status}: ${errorDetail}`
            : `HTTP ${response.status}: ${response.statusText}`,
          response.status
        );
      }

      return (await response.json()) as T;
    } catch (err) {
      if (err instanceof ApiError) throw err;

      if (err instanceof DOMException && err.name === "AbortError") {
        lastError = new Error(`Request timed out after ${timeoutMs / 1000}s`);
      } else {
        lastError = err instanceof Error ? err : new Error(String(err));
      }

      if (attempt < maxRetries - 1) {
        const backoffMs = Math.pow(2, attempt) * 1000;
        await sleep(backoffMs);
      }
    }
  }

  throw new ApiError(
    `Failed after ${maxRetries} attempts: ${lastError?.message || "Unknown error"}`,
    0
  );
}

export class ApiError extends Error {
  statusCode: number;

  constructor(message: string, statusCode: number) {
    super(message);
    this.name = "ApiError";
    this.statusCode = statusCode;
  }
}
