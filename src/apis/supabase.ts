/**
 * Supabase client singleton for MCP server.
 * Credentials from env: SUPABASE_URL, SUPABASE_ANON_KEY
 */

import { createClient, type SupabaseClient } from "@supabase/supabase-js";

let client: SupabaseClient | null = null;

/**
 * Get the Supabase client (singleton — created once, reused).
 */
export function getSupabaseClient(): SupabaseClient {
  if (client) return client;

  const url = process.env.SUPABASE_URL;
  const key = process.env.SUPABASE_ANON_KEY;

  if (!url || !key) {
    throw new Error(
      "SUPABASE_URL et SUPABASE_ANON_KEY doivent etre configures dans les variables d'environnement."
    );
  }

  client = createClient(url, key, {
    auth: { persistSession: false },
  });

  return client;
}
