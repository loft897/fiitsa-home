import { createClient } from "@supabase/supabase-js";
import type { Database } from "@/lib/supabaseTypes";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
const serviceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

let cachedServer: ReturnType<typeof createClient<Database>> | null = null;
let cachedAdmin: ReturnType<typeof createClient<Database>> | null = null;

export function getSupabaseServer() {
  if (!supabaseUrl || !supabaseAnonKey) {
    return null;
  }

  if (!cachedServer) {
    cachedServer = createClient<Database>(supabaseUrl, supabaseAnonKey, {
      auth: { persistSession: false },
    });
  }

  return cachedServer;
}

export function getSupabaseAdmin() {
  if (!supabaseUrl || !serviceRoleKey) {
    return null;
  }

  if (!cachedAdmin) {
    cachedAdmin = createClient<Database>(supabaseUrl, serviceRoleKey, {
      auth: { persistSession: false },
    });
  }

  return cachedAdmin;
}
