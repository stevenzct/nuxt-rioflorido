<template>
  <div>
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
          <div class="w-full">
            <button
              type="button"
              data-drawer-target="default-sidebar"
              data-drawer-toggle="default-sidebar"
              aria-controls="default-sidebar"
              aria-hidden="true"
              class="font-neue-montreal font-bold h-[55px] rounded-[4px] md:hidden text-gray-900 text-[16px] bg-white border border-gray-400 my-4 w-full transition ease-out duration-300 hover:bg-gray-900 hover:text-white"
            >
              Select Series
            </button>
          </div>

          <div class="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            <div>
              <aside
                id="default-sidebar"
                class="fixed md:static top-0 left-0 md:top-auto md:left-auto z-40 w-72 lg:w-80 h-screen transition-transform -translate-x-full md:translate-x-0"
                aria-label="Sidebar"
              >
                <div
                  class="h-full px-3 py-8 overflow-y-auto bg-[#ffffff] dark:bg-gray-800 lg:rounded-md"
                >
                  <div>
                    <h2
                      class="ms-5 text-xl py-4 font-semibold whitespace-nowrap dark:text-white"
                    >
                      Select Series
                    </h2>
                    <hr class="pb-3 w-full" />
                  </div>

                  <ul class="space-y-2 font-medium">
                    <li>
                      <a
                        href="#"
                        class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white bg-gray-100 dark:hover:bg-gray-700 group"
                      >
                        <span
                          class="ms-3 font-neue-montreal font-bold text-base tracking-wide"
                          >All Series</span
                        >
                      </a>
                    </li>
                    <div
                    v-for="(seriesData, index) in allSeries"
                    :key="seriesData.series.seriesTitle"
                    > 
                      <li
                        v-if="seriesData.series.seriesList.length === 0"
                        :key="'no-items-' + index"
                      >
                        <a
                          href="#"
                          class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
                        >
                          <span
                            class="ms-3 font-neue-montreal font-bold text-base tracking-wide"
                            >{{ seriesData.series.seriesTitle }}</span
                          >
                        </a>
                      </li>

                      <li
                        v-else-if="seriesData.series.seriesList.length >= 1"
                        :key="'with-items-' + index"
                      >
                        <button
                          type="button"
                          class="flex items-center w-full p-2 text-base text-gray-900 transition duration-75 rounded-lg group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                          @click="toggleDropdown(index)"
                        >
                       
                          <span
                            class="font-neue-montreal font-bold text-base tracking-wide flex-1 ms-3 text-left rtl:text-right whitespace-nowrap"
                          >
                            {{ seriesData.series.seriesTitle }}
                          </span>
                          <svg
                            class="w-3 h-3 me-3 transition-transform duration-300 ease-in-out"
                            :class="{ 'rotate-180': seriesData.isDropDownOpen }"
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
                            ></path>
                          </svg>
                        </button>

                        <!-- Dropdown Menu with Animation -->
                        <ul
                          v-if="seriesData.isDropDownOpen"
                          class="py-2 space-y-2 transition-all ease-in-out duration-300 transform origin-top"
                          :class="{
                            'opacity-0 translate-y-[-20px]':
                              !seriesData.isDropDownOpen,
                            'opacity-100 translate-y-0':
                            seriesData.isDropDownOpen,
                          }"
                        >
                          <li
                            v-for="(seriesList, innerIndex) in seriesData.series
                              .seriesList"
                            :key="'series-list-' + innerIndex"
                          >
                            <div
                              class="flex items-start leading-[1] w-full pl-5 p-2 text-gray-700 transition duration-75 rounded-lg group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                            >
                              <input
                                :id="seriesData.series.seriesTitle + innerIndex"
                                type="checkbox"
                                value=""
                                class="w-4 h-4 text-gray-500 bg-white border-gray-400 dark:bg-gray-600 dark:border-gray-500 dark:text-gray-400 focus:outline-none focus:ring-0"
                              />
                              <label
                                :for="seriesData.series.seriesTitle + innerIndex"
                                class="text-gray-700 font-medium transition duration-75 ms-2"
                                >{{ seriesList }}</label
                              >
                            </div>
                          </li>
                        </ul>
                      </li>
                    </div>
                  </ul>
                </div>
              </aside>
            </div>

            <!-- Gallery Section -->
            <div class="lg:col-span-2 ">
              <div class="pb-6">
                <h1
                class="font-neue-montreal font-bold text-[28px] md:text-4xl text-gray-900"
              >
                YC 38 Series New Panel
              </h1>
              <p
                class="font-neue-montreal font-normal text-gray-700 w-auto text-[20px] md:text-[24px]"
              >
                Fixed Casement Combination
              </p>
              </div>

              <div class="grid grid-cols-2 gap-4 lg:grid-cols-4 gallery pb-12">
                <a
                  href="/images/GlassAndAluminum/YC38SeriesNewPanel/FixedCasementCombination/IMG_6480.webp"
                >
                  <img
                    class="w-full h-60 lg:h-80 object-cover rounded-lg"
                    src="/images/GlassAndAluminum/YC38SeriesNewPanel/FixedCasementCombination/IMG_6480.webp"
                    alt="image-1"
                  />
                </a>
                <a href="/images/GlassAndAluminum/YC38SeriesNewPanel/FixedCasementCombination/IMG_6482.webp">
                  <img
                    class="w-full h-60 lg:h-80 object-cover rounded-lg"
                    src="/images/GlassAndAluminum/YC38SeriesNewPanel/FixedCasementCombination/IMG_6482.webp"
                    alt="image-2"
                  />
                </a>
                <a href="/images/GlassAndAluminum/YC38SeriesNewPanel/FixedCasementCombination/IMG_20220911_170857.webp">
                  <img
                    class="w-full h-60 lg:h-80 object-cover rounded-lg"
                    src="/images/GlassAndAluminum/YC38SeriesNewPanel/FixedCasementCombination/IMG_20220911_170857.webp"
                    alt="image-3"
                  />
                </a>
                <a href="/images/GlassAndAluminum/YC38SeriesNewPanel/FixedCasementCombination/IMG_20220911_170925.webp">
                  <img
                    class="w-full h-60 lg:h-80 object-cover rounded-lg"
                    src="/images/GlassAndAluminum/YC38SeriesNewPanel/FixedCasementCombination/IMG_20220911_170925.webp"
                    alt=""
                  />
                </a>
              </div>

              <hr class="pb-8 lg:pb-16 w-full" />


              <!--  -->
              <div class="pb-6">
                <h1
                class="font-neue-montreal font-bold text-[28px] md:text-4xl text-gray-900"
              >
                YC 38 Series New Panel
              </h1>
              <p
                class="font-neue-montreal font-normal text-gray-700 w-auto text-[20px] md:text-[24px]"
              >
                Fixed Casement or Awning Combination
              </p>
              </div>

              <div class="grid grid-cols-2 gap-4 lg:grid-cols-4 gallery pb-8">
                <a
                  href="/images/GlassAndAluminum/YC38SeriesNewPanel/FixedCasementCombination/IMG_6480.webp"
                >
                  <img
                    class="w-full h-60 lg:h-80 object-cover rounded-lg"
                    src="/images/GlassAndAluminum/YC38SeriesNewPanel/FixedCasementCombination/IMG_6480.webp"
                    alt="image-1"
                  />
                </a>
                <a href="/images/GlassAndAluminum/YC38SeriesNewPanel/FixedCasementCombination/IMG_6482.webp">
                  <img
                    class="w-full h-60 lg:h-80 object-cover rounded-lg"
                    src="/images/GlassAndAluminum/YC38SeriesNewPanel/FixedCasementCombination/IMG_6482.webp"
                    alt="image-2"
                  />
                </a>
                <a href="/images/GlassAndAluminum/YC38SeriesNewPanel/FixedCasementCombination/IMG_20220911_170857.webp">
                  <img
                    class="w-full h-60 lg:h-80 object-cover rounded-lg"
                    src="/images/GlassAndAluminum/YC38SeriesNewPanel/FixedCasementCombination/IMG_20220911_170857.webp"
                    alt="image-3"
                  />
                </a>
                <a href="/images/GlassAndAluminum/YC38SeriesNewPanel/FixedCasementCombination/IMG_20220911_170925.webp">
                  <img
                    class="w-full h-60 lg:h-80 object-cover rounded-lg"
                    src="/images/GlassAndAluminum/YC38SeriesNewPanel/FixedCasementCombination/IMG_20220911_170925.webp"
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

const allSeries = ref([
  {
    isDropDownOpen: false,
    series: {
      seriesTitle: "YC 38 Series New Panel",
      seriesList: ["Fixed Casement Combination", "Fixed  Casement or Awning Combination", "Fixed  Casement or Awning Combination French Type"],
    },
  },
  {
    isDropDownOpen: false,
    series: {
      seriesTitle: "YC 50 Series Awning",
      seriesList: [],
      img: [""]
    },
  },
  {
    isDropDownOpen: false,
    series: {
      seriesTitle: "Sliding Window",
      seriesList: ["798 series", "868 Series Three (3) Tracks with Security Screen", "900 Series", "900 Series Three (3) Tracks"],
    }
  },
  {
    isDropDownOpen: false,
    series: {
      seriesTitle: "YC 50 Series Awning",
      seriesList: [],
      img: [""]
    },
  },
  {
    isDropDownOpen: false,
    series: {
      seriesTitle: "130 Series Sliding with Security Screen",
      seriesList: [],
      img: [""]
    },
  },
  {
    isDropDownOpen: false,
    series: {
      seriesTitle: "85 Series Awning Window with Security Screen",
      seriesList: [],
      img: [""]
    },
  },
  {
    isDropDownOpen: false,
    series: {
      seriesTitle: "Roll Up Screen",
      seriesList: [],
      img: [""]
    },
  },
  {
    isDropDownOpen: false,
    series: {
      seriesTitle: "Sliding Door",
      seriesList: ["900 Series"],
    }
  },
  

  
]);



function toggleDropdown(index) {
  allSeries.value[index].isDropDownOpen = !allSeries.value[index].isDropDownOpen
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
