<template>
    <div class="h-screen bg-black">
        <div class="container mx-auto lg:grid grid-cols-5 gap-4 pt-32">
            <div class="bg-primary text-white p-4">
                <p class="mb-4">Brands</p>
                <div v-for="brand in brands" :key="brand.id" class="form-control">
                    <label class="cursor-pointer flex">
                        <input 
                            :value="brand.brand" 
                            v-model="filterBrands" 
                            type="checkbox"
                            class="checked:border-white checkbox-xs checkbox-primary" 
                        />
                        <span class="ml-4 text-white label-text">{{ brand.brand }}</span>
                    </label>
                </div>
                <button 
                    @click="resetFilter()"
                    class="my-6 px-4 w-fit btn bg-transparent border-white border-2 text-white hover:bg-primary hover:border-white rounded-full">
                    Reset Filter
                </button>
            </div>
            <div class="col-span-4">
                <div class="grid auto-rows-fr grid-cols-1 md:grid-cols-2 gap-8">
                    <!-- Display only selected brands if any are selected, else show all brands -->
                    <div v-for="brand in filteredBrands" :key="brand.id">
                        <div 
                            class="bg-white shadow-lg p-6 hover:bg-primary text-black hover:text-white hover:cursor-pointer">
                            <div class="card-body">
                                <h2 class="card-title">{{ brand.brand }}</h2>
                                <p>{{ brand.description }}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, computed } from 'vue';

const brands = ref([
    {
        id: 1,
        headline: "Nike Clothes",
        description: "Clothes from Nike",
        brand: "Nike"
    },
    {
        id: 2,
        headline: "Adidas Clothes",
        description: "Clothes from Adidas",
        brand: "Adidas"
    },
    {
        id: 3,
        headline: "Puma Clothes",
        description: "Clothes from Puma",
        brand: "Puma"
    },
    {
        id: 4,
        headline: "Lacoste Clothes",
        description: "Clothes from Lacoste",
        brand: "Lacoste"
    }
]);

const filterBrands = ref([]);

const resetFilter = () => {
    filterBrands.value = [];
};

// Computed property to handle the display of brands
const filteredBrands = computed(() => {
    // If no brands are selected, show all brands
    if (filterBrands.value.length === 0) {
        return brands.value;
    }
    
    // If some brands are selected, show only the selected brands
    return brands.value.filter(brand => filterBrands.value.includes(brand.brand));
});
</script>

<style lang="scss" scoped>
</style>
