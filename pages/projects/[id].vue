<template>
  <div>
    <!-- <p v-if="project">ID: {{ project.id }}</p>
    <p v-if="project">Address: {{ project.address }}</p>
    <p v-if="project">Client: {{ project.client }}</p>
    <p v-if="project">Details: {{ project.details }}</p>
    <img v-if="project" :src="project.image" alt="Project Image">
    <p v-else>Loading...</p> -->

    

    <ProjectDetails :project= "project"/>

    
  </div>
</template>

<script setup>
const { id } = useRoute().params;

const uri = `https://673f046ca9bc276ec4b6cdac.mockapi.io/projects/projectsSample/${id}`;

// Fetch the project
const { data: project, error } = await useFetch(uri, { key: id });

const fetchItem = async () => {
  if (!project.value) {
    throw createError({
      statusCode: 404,
      statusMessage: "Project not found", fatal:true
    });
  }
};

onMounted(fetchItem); // Correctly pass the reference to fetchItem
</script>

<style scoped>
</style>
