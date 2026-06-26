<template>
  <div class="min-h-screen bg-[#f5f9fc] text-gray-950">
    <main class="grid min-h-screen lg:grid-cols-[1.05fr_0.95fr]">
      <section class="relative hidden overflow-hidden bg-gray-950 lg:block">
        <img
          src="/images/projects/abstract.webp"
          alt=""
          class="h-full w-full object-cover opacity-70"
        />
        <div class="absolute inset-0 bg-gradient-to-t from-gray-950 via-gray-950/40 to-gray-950/10"></div>
        <div class="absolute inset-x-0 bottom-0 p-10 text-white">
          <img src="/images/logo/main-logo.svg" alt="RV Rioflorido" class="h-16 w-auto brightness-0 invert" />
          <h1 class="mt-10 max-w-2xl font-neue-montreal text-5xl font-bold leading-none">
            Content Management Portal
          </h1>
          <p class="mt-5 max-w-xl text-base leading-7 text-white/80">
            Securely manage construction projects, portfolio records, and uploaded media through your authorized admin account.
          </p>
        </div>
      </section>

      <section class="flex min-h-screen items-center justify-center px-4 py-10">
        <div class="w-full max-w-md">
          <NuxtLink to="/" class="inline-flex items-center gap-2 text-sm font-bold text-gray-700 transition hover:text-gray-950">
            <span class="material-icons text-[18px]">arrow_back</span>
            Back to website
          </NuxtLink>

          <div class="mt-8 rounded-lg border border-gray-200 bg-white p-5 shadow-sm md:p-7">
            <div>
              <p class="text-sm font-medium text-gray-500">Secure admin login</p>
              <h2 class="mt-2 font-neue-montreal text-3xl font-bold">Sign in</h2>
              <p class="mt-3 text-sm leading-6 text-gray-600">
                Use Google or email credentials connected to Supabase Auth.
              </p>
            </div>

            <button
              type="button"
              class="mt-6 flex h-12 w-full items-center justify-center gap-3 rounded-md border border-gray-300 bg-white px-4 text-sm font-bold text-gray-950 transition hover:border-gray-950 disabled:cursor-not-allowed disabled:opacity-60"
              :disabled="isLoading"
              @click="signInWithGoogle"
            >
              <span class="flex h-5 w-5 items-center justify-center rounded-full border border-gray-300 text-xs font-bold">G</span>
              Continue with Google
            </button>

            <div class="my-6 flex items-center gap-3">
              <div class="h-px flex-1 bg-gray-200"></div>
              <span class="text-xs font-bold uppercase tracking-[0.18em] text-gray-400">or</span>
              <div class="h-px flex-1 bg-gray-200"></div>
            </div>

            <form class="space-y-4" @submit.prevent="signInWithEmail">
              <label class="block">
                <span class="mb-2 block text-sm font-bold text-gray-800">Email</span>
                <input
                  v-model.trim="email"
                  type="email"
                  autocomplete="email"
                  class="h-12 w-full rounded-md border border-gray-300 bg-white px-3 text-sm outline-none transition focus:border-gray-950 focus:ring-2 focus:ring-gray-950/10"
                  placeholder="admin@example.com"
                  required
                />
              </label>

              <label class="block">
                <span class="mb-2 block text-sm font-bold text-gray-800">Password</span>
                <div class="relative">
                  <input
                    v-model="password"
                    :type="showPassword ? 'text' : 'password'"
                    autocomplete="current-password"
                    class="h-12 w-full rounded-md border border-gray-300 bg-white px-3 pr-12 text-sm outline-none transition focus:border-gray-950 focus:ring-2 focus:ring-gray-950/10"
                    placeholder="Enter password"
                    required
                  />
                  <button
                    type="button"
                    class="absolute right-2 top-1/2 inline-flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-md text-gray-500 transition hover:bg-gray-100 hover:text-gray-950"
                    @click="showPassword = !showPassword"
                    :aria-label="showPassword ? 'Hide password' : 'Show password'"
                  >
                    <span class="material-icons text-[19px]">
                      {{ showPassword ? "visibility_off" : "visibility" }}
                    </span>
                  </button>
                </div>
              </label>

              <button
                type="submit"
                class="relative flex h-12 w-full items-center justify-center rounded-md bg-gray-950 px-4 text-sm font-bold text-white transition hover:bg-gray-800 disabled:cursor-not-allowed disabled:opacity-60"
                :disabled="isLoading"
              >
                <span v-if="isLoading" class="material-icons absolute left-[calc(50%-42px)] top-1/2 -translate-y-1/2 animate-spin text-[18px]">progress_activity</span>
                <span>Sign in</span>
              </button>
            </form>

            <div
              v-if="message"
              class="mt-5 rounded-md border p-3 text-sm leading-6"
              :class="messageType === 'error' ? 'border-red-200 bg-red-50 text-red-800' : 'border-gray-200 bg-[#f5f9fc] text-gray-700'"
            >
              {{ message }}
            </div>
          </div>

          <div class="mt-4 rounded-lg border border-gray-200 bg-white p-4 text-sm leading-6 text-gray-600">
            <p class="font-bold text-gray-950">Security setup checklist</p>
            <p class="mt-2">
              Keep admin writes behind Supabase RLS policies, restrict allowed Google accounts, and never expose the service role key in browser code.
            </p>
          </div>
        </div>
      </section>
    </main>
  </div>
</template>

<script setup>
import { computed, onMounted, ref } from "vue";
import { notifyAdminSignedOut } from "~/utils/adminAuthEvents";
import { getAdminSession } from "~/utils/adminSession";

definePageMeta({
  layout: false,
  middleware: "admin-login-redirect-client",
});

useHead({
  title: "Admin Login | RV Rioflorido",
});

const route = useRoute();
const supabase = useSupabaseClient();

const email = ref("");
const password = ref("");
const showPassword = ref(false);
const isLoading = ref(false);
const message = ref("");
const messageType = ref("info");

const redirectPath = computed(() => {
  const redirect = route.query.redirect;
  return typeof redirect === "string" && redirect.startsWith("/admin")
    ? redirect
    : "/admin/projects";
});

const setMessage = (type, text) => {
  messageType.value = type;
  message.value = text;
};

const withTimeout = (promise, timeoutMessage, timeoutMs = 12000) =>
  Promise.race([
    promise,
    new Promise((_, reject) => {
      setTimeout(() => reject(new Error(timeoutMessage)), timeoutMs);
    }),
  ]);

const verifyAdminSession = async (session) => {
  if (!session?.access_token) {
    throw new Error("Could not start an admin session. Please sign in again.");
  }

  const admin = await withTimeout(
    $fetch("/api/admin/me", {
      headers: {
        Authorization: `Bearer ${session.access_token}`,
      },
    }),
    "Admin verification is taking too long. Check SUPABASE_SERVICE_ROLE_KEY, admin_users migration, and restart the Nuxt server."
  );

  if (!admin?.isAdmin) {
    throw new Error("This account is signed in, but it is not assigned as an admin.");
  }
};

const signInWithGoogle = async () => {
  isLoading.value = true;
  setMessage("info", "");

  const callbackUrl = new URL("/admin/callback", window.location.origin);
  callbackUrl.searchParams.set("redirect", redirectPath.value);

  const { error } = await supabase.auth.signInWithOAuth({
    provider: "google",
    options: {
      redirectTo: callbackUrl.toString(),
      queryParams: {
        access_type: "offline",
        prompt: "consent",
      },
    },
  });

  if (error) {
    setMessage("error", error.message);
    isLoading.value = false;
  }
};

const signInWithEmail = async () => {
  isLoading.value = true;
  setMessage("info", "Signing in...");

  try {
    const {
      data: { session },
      error,
    } = await withTimeout(
      supabase.auth.signInWithPassword({
        email: email.value,
        password: password.value,
      }),
      "Supabase sign in is taking too long. Please check your Supabase URL/anon key and network connection."
    );

    if (error) {
      throw error;
    }

    setMessage("info", "Checking admin access...");
    await verifyAdminSession(session);
    await navigateTo(redirectPath.value);
  } catch (error) {
    await supabase.auth.signOut();
    notifyAdminSignedOut();
    setMessage("error", error?.message || "Could not sign in. Please try again.");
    isLoading.value = false;
  }
};

onMounted(async () => {
  if (route.query.fresh === "1") {
    await supabase.auth.signOut();
    notifyAdminSignedOut();
    return;
  }

  if (typeof route.query.authMessage === "string") {
    setMessage("error", route.query.authMessage);
  }

  const session = await getAdminSession(supabase, route);

  if (session) {
    try {
      isLoading.value = true;
      setMessage("info", "Checking admin access...");
      await verifyAdminSession(session);
      await navigateTo(redirectPath.value);
    } catch (error) {
      await supabase.auth.signOut();
      notifyAdminSignedOut();
      setMessage("error", error?.message || "Please sign in again.");
      isLoading.value = false;
    }
  }
});
</script>
