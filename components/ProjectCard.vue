<template>
  <div>
    <div class="max-w-full bg-white rounded-lg"
    >
        <img
          class="rounded-t-lg w-full h-auto object-cover aspect-[774/718]"
          :src="project.image"
          :alt="project.address ? `${project.address} project` : 'Project image'"
          loading="lazy"
          decoding="async"
        />
      <div class="p-4 md:p-8 pb-12 md:pb-14">
        <div class="inline-flex items-center">
          <div class="my-auto">
            <span class="material-icons">location_on</span>
          </div>
          <h5
            class="ms-2 mb-2 text-2xl font-bold text-gray-900 dark:text-white font-neue-montreal text-[24px] leading-[122%]"
          >
            {{ project.address }}
          </h5>
        </div>

        <p
          class="mb-3 font-neue-montreal font-normal text-gray-700 dark:text-gray-400"
        >
        {{ project.details }}

        </p>

        <div class="flex items-start">
          <p class="my-auto font-neue-montreal font-normal">{{ project.client }}</p>
          <NuxtLink
            :to="projectPath"
            class="ms-auto"
            prefetch
            @focus="warmProjectDetail"
            @pointerenter="warmProjectDetail"
            @click="warmProjectDetail"
            @touchstart.passive="warmProjectDetail"
          >
            <button
              type="button"
              class="font-neue-montreal font-bold rounded-[4px] text-gray-900 bg-white border border-gray-400 px-8 py-3.5 transition ease-out duration-300 hover:bg-gray-900 hover:text-white"
              aria-label="View Rance's Residence Project"
            >
              View Project
            </button>
          </NuxtLink>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from "vue";

const { project } = defineProps(["project"]);
const { prefetchProjectDetail, setProjectSummary } = useProjectDetailCache();

const projectPath = computed(() => `/projects/${project.id}`);

setProjectSummary(project.id, project);

const warmProjectDetail = () => {
  if (!project?.id) {
    return;
  }

  preloadRouteComponents(projectPath.value);
  prefetchProjectDetail(project.id);
};
</script>

<style scoped></style>
