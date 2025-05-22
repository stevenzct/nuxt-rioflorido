<template>
  <div>
    <Head>
        <Title> Projects | {{ project.address }} </Title>
        <Meta name="description" :content="project.details"/>
    </Head>
    <!-- <AppHeader /> -->
    <!-- <p v-if="project">ID: {{ project.id }}</p>
    <p v-if="project">Address: {{ project.address }}</p>
    <p v-if="project">Client: {{ project.client }}</p>
    <p v-if="project">Details: {{ project.details }}</p>
    <img v-if="project" :src="project.image" alt="Project Image">
    <p v-else>Loading...</p> -->

    <ProjectDetails :project="project" />
    <!-- <AppFooter /> -->
    <!-- This will render the footer component -->
  </div>
</template>

<script setup>
// Import the AppFooter and AppHeader component
// import AppFooter from "~/components/AppFooter.vue";
// import AppHeader from "~/components/AppHeader.vue";

const { id } = useRoute().params;


// Fetch the project
const { data: project } = await useFetch(`/api/projects/${id}`, { key: id });

if (!project.value) {
  throw createError({
    statusCode: 404,
    statusMessage: "Project not found",
    fatal: true,
  });
}
onMounted(() => {
  // console.log(project.value, "test");
});

// useDefaultHead(project.value.address + " - " + "RV Rioflorido Construction");
useSeoMeta({
  description: project.value.details + " (" + project.value.client + ")",
  ogDescription: project.value.details + " (" + project.value.client + ")",
  ogImage: project.value.image || "/default.jpg",
  twitterDescription: project.value.details + " (" + project.value.client + ")",
  twitterImage: project.value.image || "/default.jpg",
  title: project.value.address + " - " + "RV Rioflorido Construction",
  ogTitle: project.value.address + " - " + "RV Rioflorido Construction",
});
</script>

<style scoped></style>
