<template>
  <div>
    <AppHeader />
    <!-- <p v-if="project">ID: {{ project.id }}</p>
    <p v-if="project">Address: {{ project.address }}</p>
    <p v-if="project">Client: {{ project.client }}</p>
    <p v-if="project">Details: {{ project.details }}</p>
    <img v-if="project" :src="project.image" alt="Project Image">
    <p v-else>Loading...</p> -->

    

    <ProjectDetails :project= "project"/>

    
    <AppFooter /> <!-- This will render the footer component -->
  </div>
</template>

<script setup>
// Import the AppFooter and AppHeader component
import AppFooter from '~/components/AppFooter.vue'
import AppHeader from '~/components/AppHeader.vue';



const { id } = useRoute().params;

const uri = `https://673f046ca9bc276ec4b6cdac.mockapi.io/projects/projectsSample/${id}`;

// Fetch the project
const { data: project} = await useFetch(uri, { key: id });

if (!project.value) {
  throw createError({ statusCode: 404, statusMessage: 'Project not found', fatal: true })
}

definePageMeta({
  layout: 'projects'
})

// Dynamically set the Open Graph (OG) meta tags using `useHead()`
useHead(() => {
  if (!project.value) return {}

  return {
    title: project.value.title,
    meta: [
      { name: 'description', content: project.value.details || 'A project from our showcase.' },

      // Open Graph tags
      { property: 'og:title', content: project.value.title },
      { property: 'og:description', content: project.value.details || '' },
      { property: 'og:image', content: project.value.image || '/default.jpg' },
      { property: 'og:type', content: 'website' },
      { property: 'og:url', content: `https://rioflorido3213.netlify.app/projects/${id}` },

      // Twitter tags (optional)
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:title', content: project.value.title },
      { name: 'twitter:description', content: project.value.details || '' },
      { name: 'twitter:image', content: project.value.image || '/default.jpg' },
    ]
  }
})

</script>

<style scoped>
</style>
