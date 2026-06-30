import { notifyAdminSignedOut } from "~/utils/adminAuthEvents";
import { getAdminSession } from "~/utils/adminSession";

export default defineNuxtRouteMiddleware(async (to) => {
  const supabase = useSupabaseClient();
  const shouldForceFreshLogin = to.query.fresh === "1";
  const session = await getAdminSession(supabase, to);
  const redirect =
    typeof to.query.redirect === "string" && to.query.redirect.startsWith("/admin")
      ? to.query.redirect
      : "/admin/projects";

  if (!session?.access_token) {
    return;
  }

  if (shouldForceFreshLogin) {
    await supabase.auth.signOut();
    notifyAdminSignedOut();
    return;
  }

  try {
    const admin = await Promise.race([
      $fetch("/api/admin/me", {
        headers: {
          Authorization: `Bearer ${session.access_token}`,
        },
      }),
      new Promise((_, reject) => {
        setTimeout(() => reject(new Error("Admin verification timed out.")), 12000);
      }),
    ]);

    if (admin?.isAdmin) {
      return navigateTo(redirect);
    }
  } catch (error) {
    await supabase.auth.signOut();
    notifyAdminSignedOut();
  }
});
