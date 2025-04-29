<template>
  <div class="">
    <!-- Hero Section -->
    <section id="projects-hero" class="h-[300px] lg:h-[494px]">
      <div class="h-full w-full flex flex-col justify-end">
        <div class="max-w-screen-2xl mx-auto px-4 py-8 w-full">
          <div class="text-left">
            <h1
              class="lg:py-8 text-black text-4xl md:text-7xl lg:text-8xl font-neue-montreal font-bold"
            >
              Our Projects
            </h1>
          </div>
        </div>
      </div>
    </section>

    <!-- All projects section -->
    <section id="projects-section" class="h-auto">
      <div class="h-full w-full">
        <div
          class="max-w-screen-2xl px-4 mx-auto grid md:grid-cols-2 lg:grid-cols-3 py-10 lg:py-32 gap-x-8 gap-y-10 lg:gap-y-32 justify-center"
        >
          <ProjectCard v-for="p in projects" :key="p.id" :project="p" />
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
// Fetch the projects
const { data: projects } = await useFetch(
  "https://673f046ca9bc276ec4b6cdac.mockapi.io/projects/projectsSample"
);
console.log(projects);

useDefaultHead("Projects - RV Rioflorido Construction");

</script>

<style scoped>
#projects-hero {
  background: url(/images/projects/abstract.webp);
  overflow: hidden;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: 8%;
}
</style>
