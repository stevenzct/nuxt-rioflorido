<template>
    <div>
        <div class="grid grid-cols-4 gap-5 py-32 px-32">
            <div v-for="p in products" :key="p.id">
                <!-- <NuxtLink :to="`/products/${p.id}`">{{ p.address }}</NuxtLink> -->
                 <ProjectCard :project="p"/>
            </div>
        </div>
    </div>
</template>

<script setup>
    // Fetch the projects
    const { data: products } = await useFetch('https://673f046ca9bc276ec4b6cdac.mockapi.io/projects/projectsSample')

</script>

<style scoped>
/* You can add any scoped styles here if needed */
</style>
