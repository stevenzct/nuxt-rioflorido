<template>
  <div class="h-96 text-center pt-32">
    <p v-if="product">ID: {{ product.id }}</p>
    <p v-if="product">Address: {{ product.address }}</p>
    <p v-if="product">Client: {{ product.client }}</p>
    <p v-if="product">Details: {{ product.details }}</p>
  </div>
</template>

<script setup>
const { id } = useRoute().params;

const uri = `https://673f046ca9bc276ec4b6cdac.mockapi.io/projects/projectsSample/${id}`;

// Fetch the product
const { data: product } = await useFetch(uri, { key: id });

const fetchItem = async () => {
  if (!product.value) {
  navigateTo('/error')
  } 
};

onMounted(fetchItem());

</script>

<style scoped>
/* Add scoped styles if needed */
</style>
