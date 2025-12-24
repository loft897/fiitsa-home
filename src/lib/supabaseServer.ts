import { type SupabaseClient, createClient } from "@supabase/supabase-js";
import type { Database } from "@/lib/supabaseTypes";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
const serviceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

let cachedServer: SupabaseClient<Database> | null = null;
let cachedAdmin: SupabaseClient<Database> | null = null;

export function getSupabaseServer(): SupabaseClient<Database> | null {
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

export function getSupabaseAdmin(): SupabaseClient<Database> | null {
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
