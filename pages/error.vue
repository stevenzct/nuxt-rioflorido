<template>
  <main class="min-h-screen bg-[#f5f9fc] text-gray-950">
    <section class="flex min-h-screen items-center">
      <div class="mx-auto grid w-full max-w-screen-2xl gap-10 px-4 py-16 md:px-6 lg:grid-cols-[0.95fr_1.05fr] lg:px-8 xl:px-10 2xl:px-12">
        <div class="flex flex-col justify-between gap-12">
          <NuxtLink to="/" class="inline-flex w-fit items-center gap-3" aria-label="Back to home">
            <img src="/images/logo/main-logo.svg" alt="RV Rioflorido Construction" class="h-14 w-auto" />
          </NuxtLink>

          <div class="space-y-6">
            <div class="inline-flex items-center gap-3 rounded-md border border-gray-200 bg-white px-4 py-3 text-sm font-bold uppercase tracking-wide text-gray-700 shadow-sm">
              <span class="material-icons text-[20px] text-gray-950">construction</span>
              Site notice
            </div>

            <div class="space-y-4">
              <p class="font-neue-montreal text-sm font-bold uppercase tracking-[0.18em] text-gray-500">
                Error {{ error.statusCode }}
              </p>
              <h1 class="font-neue-montreal text-4xl font-bold leading-[105%] text-gray-950 md:text-6xl lg:text-7xl">
                This page is temporarily off plan.
              </h1>
              <p class="max-w-2xl font-neue-montreal text-lg leading-8 text-gray-600 md:text-2xl md:leading-9">
                The page you're looking for could not be found. Let us guide you back to the main site.
              </p>
              <p v-if="error.message" class="max-w-2xl rounded-md border border-gray-200 bg-white px-4 py-3 text-sm leading-6 text-gray-500">
                {{ error.message }}
              </p>
            </div>

            <div class="flex flex-col gap-3 sm:flex-row">
              <NuxtLink
                to="/"
                class="inline-flex h-12 items-center justify-center gap-2 rounded-[4px] bg-gray-950 px-6 font-neue-montreal text-sm font-bold text-white transition hover:bg-gray-800"
              >
                <span class="material-icons text-[18px]">home</span>
                Back to Home
              </NuxtLink>
              <NuxtLink
                to="/contact"
                class="inline-flex h-12 items-center justify-center gap-2 rounded-[4px] border border-gray-300 bg-white px-6 font-neue-montreal text-sm font-bold text-gray-950 transition hover:border-gray-950"
              >
                <span class="material-icons text-[18px]">support_agent</span>
                Contact Us
              </NuxtLink>
            </div>
          </div>
        </div>

        <div class="flex items-center justify-center lg:justify-end">
          <div class="w-full max-w-xl rounded-md border border-gray-200 bg-white p-6 shadow-sm md:p-8">
            <div class="flex items-start justify-between gap-6 border-b border-gray-200 pb-6">
              <div>
                <p class="font-neue-montreal text-sm font-bold uppercase tracking-[0.16em] text-gray-500">
                  Project status
                </p>
                <h2 class="mt-2 font-neue-montreal text-3xl font-bold text-gray-950">
                  Route unavailable
                </h2>
              </div>
              <span class="material-icons flex h-14 w-14 shrink-0 items-center justify-center rounded-md bg-[#f5f9fc] text-[30px] text-gray-700">
                engineering
              </span>
            </div>

            <div class="grid gap-4 py-6">
              <div class="flex items-center gap-4 rounded-md bg-[#f5f9fc] p-4">
                <span class="material-icons text-[22px] text-gray-600">task_alt</span>
                <p class="text-sm font-medium text-gray-700">Homepage and navigation are still available.</p>
              </div>
              <div class="flex items-center gap-4 rounded-md bg-[#f5f9fc] p-4">
                <span class="material-icons text-[22px] text-gray-600">foundation</span>
                <p class="text-sm font-medium text-gray-700">You can continue browsing projects and services.</p>
              </div>
              <div class="flex items-center gap-4 rounded-md bg-[#f5f9fc] p-4">
                <span class="material-icons text-[22px] text-gray-600">handyman</span>
                <p class="text-sm font-medium text-gray-700">If the issue persists, contact the RV Rioflorido team.</p>
              </div>
            </div>

            <div class="flex items-center justify-between border-t border-gray-200 pt-6">
              <p class="text-sm font-bold text-gray-500">RV Rioflorido Construction</p>
              <span class="font-neue-montreal text-3xl font-bold text-gray-300">{{ error.statusCode }}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<script setup>
defineProps({
  error: {
    type: Object,
    default: () => ({
      statusCode: 404,
      message: "",
    }),
  },
});
useHead({
  title: "404 error page not found",
  meta: [
    {
      name: "description",
      content: "Oops! The page you're looking for can't be found.",
    },
  ],
});
</script>

