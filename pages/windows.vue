<template>
  <div>
    <!-- Hero Section -->
    <section id="projects-hero" class="h-[300px] lg:h-[494px]">
      <div class="h-full w-full flex flex-col justify-end">
        <div class="max-w-screen-2xl mx-auto px-4 py-8 w-full">
          <div class="text-left">
            <h1 class="lg:py-8 text-black text-4xl md:text-7xl lg:text-8xl font-neue-montreal font-bold">
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
                class="fixed md:static top-0 left-0 md:top-auto md:left-auto z-40 w-72 lg:w-80 h-full transition-transform -translate-x-full md:translate-x-0"
                aria-label="Sidebar"
              >
                <div class="h-full px-3 py-8 overflow-y-auto bg-[#ffffff] dark:bg-gray-800 lg:rounded-md">
                  <div>
                    <h2 class="ms-5 text-xl py-4 font-semibold whitespace-nowrap dark:text-white">
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
                        <span class="ms-3 font-neue-montreal font-bold text-base tracking-wide">
                          All Series
                        </span>
                      </a>
                    </li>
                    <div v-for="(seriesData, index) in allSeries" :key="seriesData.series.seriesTitle">
                      <li
                        v-if="seriesData.series.seriesList.length === 0"
                        :key="'no-items-' + index"
                      >
                        <a
                          href="#"
                          class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
                          @click="showSeriesData(seriesData)"
                        >
                          <span class="ms-3 font-neue-montreal font-bold text-base tracking-wide">
                            {{ seriesData.series.seriesTitle }}
                          </span>
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
                          <span class="font-neue-montreal font-bold text-base tracking-wide flex-1 ms-3 text-left rtl:text-right whitespace-nowrap">
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
                            'opacity-0 translate-y-[-20px]': !seriesData.isDropDownOpen,
                            'opacity-100 translate-y-0': seriesData.isDropDownOpen,
                          }"
                        >
                          <li
                            v-for="(seriesList, innerIndex) in seriesData.series.seriesList"
                            :key="'series-list' + innerIndex"
                          >
                            <div
                              class="flex items-start leading-[1] w-full pl-5 p-2 text-gray-700 transition duration-75 rounded-lg group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                              @click="showSeriesData(seriesList)"
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
                              >
                                {{ seriesList.name }}
                              </label>
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
            <div class="lg:col-span-2">
              <div class="pb-6">
                <h1 v-if="selectedSeries" class="font-neue-montreal font-bold text-[28px] md:text-4xl text-gray-900">
                  {{ selectedSeries.seriesTitle }}
                </h1>
                <p v-if="selectedSeries" class="font-neue-montreal font-normal text-gray-700 w-auto text-[20px] md:text-[24px]">
                  {{ selectedSeries.description || 'Description unavailable.' }}
                </p>
              </div>

              <div class="grid grid-cols-2 gap-4 lg:grid-cols-4 gallery pb-12">
                <div v-for="(image, index) in selectedSeriesImages" :key="index">
                  <img
                    class="w-full h-60 lg:h-80 object-cover rounded-lg"
                    :src="image"
                    alt="image"
                  />
                </div>
              </div>

              <hr class="pb-8 lg:pb-16 w-full" />
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
      // seriesList: ["Fixed Casement Combination", 
      //              "Fixed  Casement or Awning Combination", 
      //              "Fixed  Casement or Awning Combination French Type"],
      seriesList: [{
        name: "Fixed Casement Combination",
        img: [
          "/images/GlassAndAluminum/YC38SeriesNewPanel/FixedCasementCombination/IMG_6480.webp",
          "/images/GlassAndAluminum/YC38SeriesNewPanel/FixedCasementCombination/IMG_6482.webp",
          "/images/GlassAndAluminum/YC38SeriesNewPanel/FixedCasementCombination/IMG_20220911_170857.webp",
          "/images/GlassAndAluminum/YC38SeriesNewPanel/FixedCasementCombination/IMG_20220911_170925.webp"
        ]
      },
      {
        name: "Fixed  Casement or Awning Combination",
        img: [
          "/images/GlassAndAluminum/YC38SeriesNewPanel/FixedCasementOrAwningCombination/IMG_20220911_133706.webp",
          "/images/GlassAndAluminum/YC38SeriesNewPanel/FixedCasementOrAwningCombination/IMG_20220911_133804.webp",
          "/images/GlassAndAluminum/YC38SeriesNewPanel/FixedCasementOrAwningCombination/IMG_20220911_134308.webp",
          "/images/GlassAndAluminum/YC38SeriesNewPanel/FixedCasementOrAwningCombination/IMG_20220911_170832.webp"
        ]
      },
      {
        name: "Fixed Casement or Awning Combination French Type",
        img: [
          "/images/GlassAndAluminum/YC38SeriesNewPanel/FixedCasementOrAwningCombinationFrenchType/D2F4BCA9-81C2-4CC6-B2A7-997A22B7BDF0.webp",
          "/images/GlassAndAluminum/YC38SeriesNewPanel/FixedCasementOrAwningCombinationFrenchType/F1.webp",
          "/images/GlassAndAluminum/YC38SeriesNewPanel/FixedCasementOrAwningCombinationFrenchType/F2.webp",
        ]
      },
      
    ]
    },
  },
  {
    isDropDownOpen: false,
    series: {
      seriesTitle: "Sliding Window",
      // seriesList: ["798 series", "868 Series Three (3) Tracks with Security Screen", "900 Series", "900 Series Three (3) Tracks"],
      seriesList:[
        {
        name: "798 series",
        img: [
          "/images/GlassAndAluminum/SlidingWindow/798Series/IMG_6471.webp"
        ]
      },
      {
        name: "868 Series Three (3) Tracks with Security Screen",
        img: [
          "/images/GlassAndAluminum/SlidingWindow/868SeriesThree(3)TracksWithSecurityScreen/IMG_6455.webp",
          "/images/GlassAndAluminum/SlidingWindow/868SeriesThree(3)TracksWithSecurityScreen/IMG_6464.webp"
        ]
      },
      {
        name: "900 Series",
        img: [
          "/images/GlassAndAluminum/SlidingWindow/900Series/image1.webp",
          "/images/GlassAndAluminum/SlidingWindow/900Series/image2.webp"
        ]
      },
      {
        name: "900 Series Three (3) Tracks",
        img: [
          "/images/GlassAndAluminum/SlidingWindow/900SeriesThree(3)Tracks/IMG_6465.webp",
          "/images/GlassAndAluminum/SlidingWindow/900SeriesThree(3)Tracks/IMG_20220911_171504.webp",
          "/images/GlassAndAluminum/SlidingWindow/900SeriesThree(3)Tracks/IMG_20220911_171537.webp",
          "/images/GlassAndAluminum/SlidingWindow/900SeriesThree(3)Tracks/IMG_20220911_171552.webp",
        ]
      },
    ]
    },
  },
  {
    isDropDownOpen: false,
    series: {
      seriesTitle: "YC 50 Series Awning",
      seriesList: [],
      img: ["/images/GlassAndAluminum/YC50SeriesAwning/IMG_6448.webp",
            "/images/GlassAndAluminum/YC50SeriesAwning/IMG_6450.webp",
            "/images/GlassAndAluminum/YC50SeriesAwning//IMG_6473.webp",
            "/images/GlassAndAluminum/YC50SeriesAwning/IMG_20220911_171303.webp",
            "/images/GlassAndAluminum/YC50SeriesAwning//IMG_20220911_171322.webp",
            "/images/GlassAndAluminum/YC50SeriesAwning/IMG_20220911_171345.webp",
            "/images/GlassAndAluminum/YC50SeriesAwning/IMG_20220911_171402.webp",
            "/images/GlassAndAluminum/YC50SeriesAwning/IMG_20220911_171436.webp",
      ] 
    },
  },
  {
    isDropDownOpen: false,
    series: {
      seriesTitle: "130 Series Sliding with Security Screen",
      seriesList: [],
      img: ["/images/GlassAndAluminum/130SeriesSlidingWithSecurityScreen/IMG_6444.webp",
            "/images/GlassAndAluminum/130SeriesSlidingWithSecurityScreen/IMG_6445.webp",
            "/images/GlassAndAluminum/130SeriesSlidingWithSecurityScreen/IMG_6446 (1).webp"
      ]
    },
  },
  {
    isDropDownOpen: false,
    series: {
      seriesTitle: "85 Series Awning Window with Security Screen",
      seriesList: [],
      img: ["/images/GlassAndAluminum/85SeriesAwningWindowWithSecurityScreen/IMG_6452.webp",
          "/images/GlassAndAluminum/85SeriesAwningWindowWithSecurityScreen/IMG_6453.webp"
      ]
    },
  },
  {
    isDropDownOpen: false,
    series: {
      seriesTitle: "Roll Up Screen",
      seriesList: [],
      img: ["/images/GlassAndAluminum/RollUpScreen/IMG_6458.webp"]
    },
  },
  {
    isDropDownOpen: false,
    series: {
      seriesTitle: "Sliding Door",
      seriesList: [{
        name: "900 Series",
        img: ["/images/GlassAndAluminum/SlidingDoor/900Series/305398059_131743259591440_3191313701467848932_n.webp",
            "/images/GlassAndAluminum/SlidingDoor/900Series/Capture.webp"
        ]
      }],


    }
  },
  

  
]);

const selectedSeries = ref(null);
const selectedSeriesImages = ref([]);



function toggleDropdown(index) {
  allSeries.value[index].isDropDownOpen = !allSeries.value[index].isDropDownOpen
}

// Show the clicked series' data
function showSeriesData(seriesData) {
  // If a specific series list item is clicked
  if (seriesData.name && seriesData.img) {
    selectedSeries.value = {
      seriesTitle: seriesData.name,
      description: "Stylish, Light-Filled Fixed Casement Design",
    };
    selectedSeriesImages.value = seriesData.img;
  } else if (seriesData.series) {
    // If a series with subitems is clicked
    selectedSeries.value = seriesData.series;
    selectedSeriesImages.value = seriesData.series.img;
  }
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
