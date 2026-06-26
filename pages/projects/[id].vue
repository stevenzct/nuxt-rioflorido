<template>
  <div>
    <ProjectDetails v-if="project" :project="project" />

    <section
      v-else-if="pending"
      class="flex min-h-screen items-center justify-center bg-[#f5f9fc] px-4 pt-24"
    >
      <div class="w-full max-w-screen-2xl">
        <div class="h-[60vh] animate-pulse rounded-lg bg-gray-200"></div>
        <div class="mt-8 grid gap-4 md:grid-cols-4">
          <div
            v-for="item in 4"
            :key="item"
            class="h-60 animate-pulse rounded-lg bg-gray-200"
          ></div>
        </div>
      </div>
    </section>

    <section
      v-else
      class="flex min-h-screen items-center justify-center bg-[#f5f9fc] px-4 text-center"
    >
      <div>
        <h1 class="text-3xl font-bold text-gray-950">Project unavailable</h1>
        <p class="mt-3 text-gray-600">
          We could not load this project right now.
        </p>
      </div>
    </section>
  </div>
</template>

<script setup>
// Import the AppFooter and AppHeader component
// import AppFooter from "~/components/AppFooter.vue";
// import AppHeader from "~/components/AppHeader.vue";

const { id } = useRoute().params;
const projectId = String(id || "");
const { getProjectDetail, isProjectDetailComplete, prefetchProjectDetail } =
  useProjectDetailCache();


// Fetch the project
const { data: project, pending, error } = useLazyAsyncData(
  `project-detail-${projectId}`,
  async () => {
    const cachedProject = getProjectDetail(projectId);

    if (isProjectDetailComplete(cachedProject)) {
      return cachedProject;
    }

    return await prefetchProjectDetail(projectId);
  },
  {
    default: () => getProjectDetail(projectId),
    getCachedData: () => {
      const cachedProject = getProjectDetail(projectId);

      return isProjectDetailComplete(cachedProject) ? cachedProject : null;
    },
  }
);

if (error.value) {
  throw createError({
    statusCode: error.value.statusCode || 404,
    statusMessage: error.value.statusMessage || "Project not found",
    fatal: true,
  });
}
useSeoMeta({
  description: () =>
    project.value
      ? `${project.value.details || ""} (${project.value.client || ""})`
      : "Project details from RV Rioflorido Construction",
  ogDescription: () =>
    project.value
      ? `${project.value.details || ""} (${project.value.client || ""})`
      : "Project details from RV Rioflorido Construction",
  ogImage: () => project.value?.image || "/default.jpg",
  twitterDescription: () =>
    project.value
      ? `${project.value.details || ""} (${project.value.client || ""})`
      : "Project details from RV Rioflorido Construction",
  twitterImage: () => project.value?.image || "/default.jpg",
  title: () =>
    project.value?.address
      ? `${project.value.address} - RV Rioflorido Construction`
      : "Projects - RV Rioflorido Construction",
  ogTitle: () =>
    project.value?.address
      ? `${project.value.address} - RV Rioflorido Construction`
      : "Projects - RV Rioflorido Construction",
});

useHead(() => ({
  link: project.value?.hero
    ? [
        {
          rel: "preload",
          as: "image",
          href: project.value.hero,
        },
      ]
    : [],
}));
</script>

<style scoped></style>
