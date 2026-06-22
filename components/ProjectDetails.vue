<template>
  <div>
    <!-- Hero Section -->
    <section
      v-if="project"
      id="hero-section"
      class="h-screen bg-white"
      :style="{
        backgroundImage: `linear-gradient(180deg, rgba(0, 0, 0, 0.20) 15.94%, rgba(0, 0, 0, 0.00) 48.14%),
                        linear-gradient(180deg, rgba(0, 0, 0, 0.00) 43.11%, rgba(0, 0, 0, 0.20) 68.98%, rgba(0, 0, 0, 0.20) 100%),
                        linear-gradient(180deg, rgba(0, 0, 0, 0.00) 57.63%, rgba(0, 0, 0, 0.20) 70.1%),
                        linear-gradient(219deg, rgba(0, 0, 0, 0.00) 44.54%, rgba(0, 0, 0, 0.20) 89.98%),
                        linear-gradient(212deg, rgba(0, 0, 0, 0.00) 47.21%, rgba(0, 0, 0, 0.20) 89.01%),
                        linear-gradient(180deg, rgba(0, 0, 0, 0.00) 59.79%, rgba(0, 0, 0, 0.20) 77.9%),
                        url(${project.hero})`,
      }"
    >
      <div
        class="h-full w-full flex flex-col items-end justify-end"
        id="container-text"
      >
        <div class="w-full">
          <div class="max-w-screen-2xl mx-auto px-4 py-8">
            <h1
              v-if="project"
              class="tracking-wide text-white text-4xl md:text-7xl lg:text-8xl font-neue-montreal font-bold leading-[100%] lg:leading-[94%]"
            >
              {{ project.address }}
            </h1>
          </div>
          <div class="w-auto border-b border-[#F3F4F654]"></div>
        </div>
        <div class="w-full">
          <div
            class="max-w-screen-2xl mx-auto px-4 py-8 grid lg:grid-cols-2 sm:grid-cols-1 lg:flex justify-between"
          >
            <p
              v-if="project"
              class="font-neue-montreal font-normal text-white pb-2 w-auto md:w-[706px] text-[20px] md:text-[24px]"
            >
              {{ project.details }} ({{ project.client }})
            </p>
            <button
              type="button"
              @click="scrollToImages"
              class="font-neue-montreal font-bold h-[55px] rounded-[4px] text-gray-900 text-[16px] bg-white border border-gray-400 px-8 py-3.5 my-4 md:w-[200px] transition ease-out duration-300 hover:bg-gray-900 hover:text-white"
            >
              Scroll
            </button>
          </div>
        </div>
      </div>
    </section>

    <!-- Section Gallery -->
    <section id="images-section" ref="imagesSection">
      <div class="h-auto w-full py-16 lg:py-32">
        <div class="max-w-screen-2xl mx-auto px-4">
          <div class="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-8 gallery">
            <!-- Loop through the gallery array -->
            <a
              v-for="(imageObj, index) in project.gallery"
              :key="index"
              :href="imageObj.image"
            >
              <img
                loading="lazy"
                :src="imageObj.image"
                class="w-full h-60 lg:h-96 object-cover rounded-lg"
                :alt="'Gallery Image ' + (index + 1)"
              />
            </a>
          </div>
        </div>
      </div>
    </section>

    <!-- projects section -->
    <section id="projects-section" ref="projectsSection" class="h-auto bg-[#f5f9fc]">
      <div class="h-full w-full py-8 lg:py-16">
        <div
          class="max-w-screen-2xl mx-auto px-4 py-4 pt-10 md:py-16 grid lg:grid-cols-2 sm:grid-cols-1 lg:flex justify-between"
        >
          <h1
            class="font-neue-montreal font-bold leading-[137%] text-4xl md:text-7xl text-gray-900"
          >
            Our Projects
          </h1>

          <NuxtLink to="/projects">
            <button
              type="button"
              id="explore-projects"
              class="text-gray-900 font-neue-montreal font-bold h-[55px] rounded-[4px] text-[16px] w-full md:w-[200px] bg-white border border-gray-400 px-8 my-3 md:my-6 transition ease-out duration-300 hover:bg-gray-900 hover:text-white"
            >
              View All
            </button>
          </NuxtLink>
        </div>

        <div class="max-w-screen-2xl px-4 mx-auto">
          <swiper
            :key="project?.id"
            :slidesPerView="3"
            :spaceBetween="32"
            :navigation="{
              nextEl: '.next-projects',
              prevEl: '.prev-projects',
            }"
            :pagination="{
              clickable: true,
            }"
            :breakpoints="breakpoints"
            :modules="[Navigation]"
            class="mySwiper"
          >
            <!-- swiper slide 1 -->
            <swiper-slide v-for="p in suggestedProjects" :key="p.id">
              <ProjectCard :project="p" />
            </swiper-slide>
          </swiper>
        </div>
        <div class="max-w-screen-2xl mx-auto py-4 md:py-12 px-4">
          <div class="flex justify-end gap-2">
            <button
              class="text-black bg-white font-medium rounded-full text-lg p-4 text-center inline-flex items-center prev-projects"
            >
              <!-- SVG Icon -->
              <svg
                class="w-6 h-6"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 10"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="1"
                  d="M13 5H1m0 0L5 1m-4 4L5 9"
                />
              </svg>
              <span class="sr-only">Icon description</span>
            </button>

            <button
              class="text-black bg-white font-medium rounded-full text-lg p-4 text-center inline-flex items-center next-projects"
            >
              <!-- SVG Icon -->
              <svg
                class="w-6 h-6"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 10"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="1"
                  d="M1 5h12m0 0L9 1m4 4L9 9"
                />
              </svg>
              <span class="sr-only">Icon description</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { computed, ref, onMounted, watch, nextTick } from "vue";
import BaguetteBox from "baguettebox.js";
import "baguettebox.js/dist/baguetteBox.min.css";
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import { Navigation } from "swiper/modules";

const { project } = defineProps(["project"]);
const imagesSection = ref(null);

const projectData = ref([]);

const suggestedProjects = computed(() => {
  if (!Array.isArray(projectData.value) || !project?.id) {
    return [];
  }

  const currentProjectIndex = projectData.value.findIndex((p) => p.id === project.id);

  if (currentProjectIndex === -1) {
    return projectData.value.filter((p) => p.id !== project.id);
  }

  return [
    ...projectData.value.slice(currentProjectIndex + 1),
    ...projectData.value.slice(0, currentProjectIndex + 1),
  ];
});

// Function to scroll to the gallery section
const scrollToImages = () => {
  if (imagesSection.value) {
    imagesSection.value.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }
};

// Preload images using `useHead` once the gallery is fetched
// useHead({
//   link:
//     project?.gallery?.map((imageObj) => ({
//       rel: "preload",
//       as: "image",
//       href: imageObj.image,
//     })) || [],
// });
// useDefaultHead('Projects - RV Rioflorido Construction')

// Swiper setup for breakpoints
const breakpoints = {
  100: {
    slidesPerView: 1,
  },
  360: {
    slidesPerView: 1,
  },
  640: {
    slidesPerView: 1,
  },
  768: {
    slidesPerView: 2,
  },
  1024: {
    slidesPerView: 3,
  },
};

// Fetch project data
const getProjects = async () =>{

  const { data } = await useFetch('/api/projects');

  projectData.value = Array.isArray(data.value) ? data.value : [];

}



// Initialize BaguetteBox once the gallery is ready
const initializeGallery = () => {
  if (process.client) { // Ensure this only runs in the client-side
    nextTick(() => {
      // BaguetteBox depends on the document, which is only available client-side
      BaguetteBox.run(".gallery");
    });
  }
};

// Watch for changes to the gallery (in case project prop updates dynamically)
watch(
  () => project?.gallery,
  (newGallery) => {
    if (newGallery && newGallery.length > 0) {
      initializeGallery(); // Initialize gallery only when images are available
    }
  },
  { immediate: true }
);

// Also initialize on mount to handle the case when the gallery is loaded at the start
onMounted(() => {
  if (process.client && project?.gallery && project.gallery.length > 0) {
    initializeGallery(); // Initialize gallery after mount
  }

  setTimeout(() => {
    getProjects();
  }, 300);
});
</script>

<style scoped>
#hero-section {
  overflow: hidden;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: 50%;
}
</style>
