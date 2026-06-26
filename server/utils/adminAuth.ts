import { createError, getHeader } from "h3";

const getBearerToken = (authorizationHeader = "") => {
  const [scheme, token] = authorizationHeader.trim().split(/\s+/);

  if (scheme?.toLowerCase() !== "bearer" || !token) {
    return "";
  }

  return token;
};

export const requireAdminUser = async (event) => {
  const token = getBearerToken(getHeader(event, "authorization") || "");

  if (!token) {
    throw createError({
      statusCode: 401,
      statusMessage: "Admin authentication is required.",
    });
  }

  const supabase = useSupabaseServerClient({ requireServiceRole: true });
  const {
    data: { user },
    error: authError,
  } = await supabase.auth.getUser(token);

  if (authError || !user) {
    throw createError({
      statusCode: 401,
      statusMessage: "Admin session is invalid or expired.",
    });
  }

  const { data: adminUser, error: adminError } = await supabase
    .from("admin_users")
    .select("user_id")
    .eq("user_id", user.id)
    .maybeSingle();

  if (adminError) {
    console.error("Admin permission check failed.", {
      code: adminError.code,
      message: adminError.message,
      details: adminError.details,
      hint: adminError.hint,
    });

    const errorMessage = String(adminError.message || "").toLowerCase();
    const missingAdminTable =
      adminError.code === "42P01" ||
      adminError.code === "PGRST205" ||
      errorMessage.includes("could not find the table") ||
      errorMessage.includes("relation") && errorMessage.includes("admin_users");
    const serviceRolePermissionIssue =
      adminError.code === "42501" ||
      errorMessage.includes("permission denied") ||
      errorMessage.includes("row-level security");

    throw createError({
      statusCode: 500,
      statusMessage: missingAdminTable
        ? "Admin permissions table is missing. Apply the admin_users Supabase migration."
        : serviceRolePermissionIssue
          ? "Could not read admin permissions. Check that SUPABASE_SERVICE_ROLE_KEY is set to the service_role key and restart Nuxt."
          : `Could not verify admin permissions: ${adminError.message}`,
    });
  }

  if (!adminUser) {
    throw createError({
      statusCode: 403,
      statusMessage: "Admin permission is required.",
    });
  }

  return user;
};

export const getOptionalAdminUser = async (event) => {
  const token = getBearerToken(getHeader(event, "authorization") || "");

  if (!token) {
    return null;
  }

  try {
    return await requireAdminUser(event);
  } catch (error) {
    return null;
  }
};
