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
                Glass and Aluminum
              </h1>
            </div>
          </div>
        </div>
      </section>
  
      <!-- Windows Section -->
      <section class="h-auto">
        <div class="h-full w-full">
          <div class="max-w-screen-2xl px-4 mx-auto py-10 lg:py-16">
            <h1
              class="font-neue-montreal font-bold text-4xl md:text-7xl text-gray-900 py-8"
            >
              Series
            </h1>
  
            <div class="text-center">
              <button
  
                class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
                type="button"
                data-drawer-target="default-sidebar" data-drawer-toggle="default-sidebar" aria-controls="default-sidebar" 
                 aria-label="Sidebar"
              >
                Show sidebar
              </button>
            </div>
  
            <div class="grid lg:grid-cols-3 gap-x-32 ">
              <div>
                <div
                  id="default-sidebar"
                  class="z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0"
                  aria-label="Sidebar"
                >
                  <div class="h-full px-3 py-4 overflow-y-auto dark:bg-gray-800">
                    <ul class="space-y-2 font-medium">
                      <!-- Other Sidebar Items -->
  
                      <!-- E-commerce Dropdown -->
                      <li>
                        <button
                          type="button"
                          class="flex items-center w-full p-2 text-base text-gray-900 transition duration-75 rounded-lg group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                          @click="toggleDropdown"
                        >
                          <span
                            class="font-neue-montreal font-normal text-[16px] flex-1 ms-3 text-left rtl:text-right whitespace-nowrap"
                            >YC 38 Series New Panel</span
                          >
                          <!-- Dropdown Icon with Rotation -->
                          <svg
                            class="w-3 h-3 me-3 transition-transform duration-300 ease-in-out"
                            :class="{ 'rotate-180': isDropdownVisible }"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 10 6"
                          >
                            <path
                              stroke="currentColor"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="2"
                              d="m1 1 4 4 4-4"
                            />
                          </svg>
                        </button>
  
                        <!-- Dropdown Menu with Animation -->
                        <ul
                          v-if="isDropdownVisible"
                          class="py-2 space-y-2 transition-all ease-in-out duration-300 transform origin-top"
                          :class="{
                            'opacity-0 translate-y-[-20px]': !isDropdownVisible,
                            'opacity-100 translate-y-0': isDropdownVisible,
                          }"
                        >
                          <li>
                            <a
                              href="#"
                              class="flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                              >Fixed Casement Combination</a
                            >
                          </li>
                          <li>
                            <a
                              href="#"
                              class="flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                              >Fixed Casement or Awning Combination</a
                            >
                          </li>
                          <li>
                            <a
                              href="#"
                              class="flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                              >Fixed Casement or Awning Combination French Type</a
                            >
                          </li>
                        </ul>
                      </li>
                      <!-- Other Sidebar Items -->
                    </ul>
                  </div>
                </div>
              </div>
  
              <!-- Gallery Section -->
              <div class="lg:col-span-2">
                <div class="grid grid-cols-2 gap-8 lg:grid-cols-3 gallery">
                  <a
                    href="/images/GlassAndAluminum/YC38SeriesNewPanel/FixedCasementCombination/IMG_6480.webp"
                  >
                    <img
                      class="w-full h-60 lg:h-96 rounded-lg"
                      src="/images/GlassAndAluminum/YC38SeriesNewPanel/FixedCasementCombination/IMG_6480.webp"
                      alt=""
                    />
                  </a>
  
                  <a href="#">
                    <img
                      class="w-full h-60 lg:h-96 rounded-lg"
                      src="/images/GlassAndAluminum/YC38SeriesNewPanel/FixedCasementCombination/IMG_6480.webp"
                      alt=""
                    />
                  </a>
  
                  <a href="#">
                    <img
                      class="w-full h-60 lg:h-96 rounded-lg"
                      src="/images/GlassAndAluminum/YC38SeriesNewPanel/FixedCasementCombination/IMG_6480.webp"
                      alt=""
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  </template>
  
  <script setup>
  import { ref } from "vue";
  
  const isDropdownVisible = ref(false);
  
  function toggleDropdown() {
    isDropdownVisible.value = !isDropdownVisible.value;
  }
  </script>
  
  <style scoped>
  #projects-hero {
    background: url(../assets/images/projects/abstract.webp);
    overflow: hidden;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: 8%;
  }
  </style>
  