import { createClient } from "@supabase/supabase-js";
import { createError } from "h3";

type SupabaseServerClientOptions = {
  requireServiceRole?: boolean;
  preferServiceRole?: boolean;
};

export const useSupabaseServerClient = (
  options: SupabaseServerClientOptions = {}
) => {
  const config = useRuntimeConfig();

  if (!config.supabaseUrl || !config.supabaseAnonKey) {
    throw createError({
      statusCode: 500,
      statusMessage: "Supabase runtime config is missing.",
    });
  }

  if (options.requireServiceRole && !config.supabaseServiceRoleKey) {
    throw createError({
      statusCode: 500,
      statusMessage:
        "SUPABASE_SERVICE_ROLE_KEY is missing. Add it to .env and restart the Nuxt dev server to use admin CRUD without public RLS policies.",
    });
  }

  const shouldUseServiceRole =
    options.requireServiceRole ||
    (options.preferServiceRole && config.supabaseServiceRoleKey);
  const supabaseKey = shouldUseServiceRole
    ? config.supabaseServiceRoleKey
    : config.supabaseAnonKey;

  return createClient(config.supabaseUrl, supabaseKey, {
    auth: {
      autoRefreshToken: false,
      persistSession: false,
    },
  });
};
