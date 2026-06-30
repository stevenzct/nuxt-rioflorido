import { notifyAdminSignedOut } from "~/utils/adminAuthEvents";
import { getAdminSession } from "~/utils/adminSession";

export default defineNuxtRouteMiddleware(async (to) => {
  if (
    !to.path.startsWith("/admin") ||
    to.path === "/admin/login" ||
    to.path === "/admin/callback"
  ) {
    return;
  }

  const supabase = useSupabaseClient();
  const session = await getAdminSession(supabase, to);

  if (!session?.access_token) {
    return navigateTo({
      path: "/admin/login",
      query: { redirect: to.fullPath },
      replace: true,
    });
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

    if (!admin?.isAdmin) {
      await supabase.auth.signOut();
      notifyAdminSignedOut();

      return navigateTo({
        path: "/admin/login",
        query: { redirect: to.fullPath },
        replace: true,
      });
    }
  } catch (error) {
    await supabase.auth.signOut();
    notifyAdminSignedOut();

    return navigateTo({
      path: "/admin/login",
      query: { redirect: to.fullPath },
      replace: true,
    });
  }
});
