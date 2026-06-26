<template>
  <div class="flex min-h-screen items-center justify-center bg-[#f5f9fc] px-4 text-gray-950">
    <div class="w-full max-w-md rounded-lg border border-gray-200 bg-white p-6 text-center shadow-sm">
      <img src="/images/logo/main-logo.svg" alt="RV Rioflorido" class="mx-auto h-14 w-auto" />
      <div class="mt-6 flex justify-center">
        <span class="material-icons animate-spin text-[30px] text-gray-500">progress_activity</span>
      </div>
      <h1 class="mt-4 font-neue-montreal text-2xl font-bold">Signing you in</h1>
      <p class="mt-2 text-sm leading-6 text-gray-600">
        Checking your Google account and admin access.
      </p>
    </div>
  </div>
</template>

<script setup>
import { computed, onMounted } from "vue";
import { notifyAdminSignedOut } from "~/utils/adminAuthEvents";
import { getAdminSession } from "~/utils/adminSession";

definePageMeta({
  layout: false,
});

useHead({
  title: "Admin Login | RV Rioflorido",
});

const route = useRoute();
const supabase = useSupabaseClient();

const redirectPath = computed(() => {
  const redirect = route.query.redirect;

  return typeof redirect === "string" &&
    redirect.startsWith("/admin") &&
    redirect !== "/admin/login" &&
    redirect !== "/admin/callback"
    ? redirect
    : "/admin/projects";
});

const redirectToLogin = async (message = "Please sign in again.") => {
  await supabase.auth.signOut();
  notifyAdminSignedOut();

  await navigateTo({
    path: "/admin/login",
    query: {
      redirect: redirectPath.value,
      authMessage: message,
    },
    replace: true,
  });
};

const verifyAdminSession = async (session) => {
  if (!session?.access_token) {
    throw new Error(
      "Could not start an admin session. Check that this exact callback URL is allowed in Supabase Auth redirects."
    );
  }

  const admin = await $fetch("/api/admin/me", {
    headers: {
      Authorization: `Bearer ${session.access_token}`,
    },
  });

  if (!admin?.isAdmin) {
    throw new Error("This Google account is not assigned as an admin.");
  }
};

onMounted(async () => {
  try {
    const session = await getAdminSession(supabase, route);

    await verifyAdminSession(session);
    await navigateTo(redirectPath.value, { replace: true });
  } catch (error) {
    await redirectToLogin(error?.message || "Could not complete Google sign in.");
  }
});
</script>
