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
              Aluminum Series
            </h1>
          </div>
        </div>
      </div>
    </section>

    <!-- Windows Section -->
    <section class="h-auto">
      <div class="h-full w-full">
        <div class="max-w-screen-2xl px-4 mx-auto py-10 lg:py-16">
          <!-- button for small screen, navigation -->
          <div class="w-full">
            <button
              type="button"
              @click="toggleSidebar"
              class="font-neue-montreal font-bold h-[55px] rounded-[4px] md:hidden text-gray-900 text-[16px] bg-white border border-gray-400 my-4 w-full transition ease-out duration-300 hover:bg-gray-900 hover:text-white"
            >
              Select Series
            </button>
          </div>

          <div class="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            <div
              v-if="isSidebarOpen"
              class="md:hidden fixed inset-0 bg-black/50 z-30"
              @click="isSidebarOpen = false"
            ></div>
            <div>
              <aside
                id="default-sidebar"
                ref="sidebar"
                class="fixed md:sticky top-0 md:top-[100px] left-0 md:left-auto z-20 w-72 lg:w-80 transition-transform duration-300 ease-in-out"
                :class="{
                  '-translate-x-full md:translate-x-0': !isSidebarOpen,
                  'translate-x-0': isSidebarOpen,
                }"
                aria-label="Sidebar"
              >
                <div
                  class="h-[100vh] lg:h-[90vh] px-3 py-8 overflow-y-auto bg-[#ffffff] dark:bg-gray-800 lg:rounded-md"
                >
                  <div>
                    <h2
                      class="ms-5 text-xl py-4 font-semibold whitespace-nowrap dark:text-white"
                    >
                      Select Series
                    </h2>
                    <hr class="pb-3 w-full" />

                    <ul class="space-y-2 font-medium">
                      <button class="w-full" @click="resetFilter()">
                        <li>
                          <a
                            href="#"
                            class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white bg-gray-100 dark:hover:bg-gray-700 group"
                          >
                            <span
                              class="ms-3 font-neue-montreal font-bold text-base tracking-wide"
                            >
                              All Series
                            </span>
                          </a>
                        </li>
                      </button>

                      <div
                        v-for="(seriesData, index) in allSeries"
                        :key="seriesData.series.seriesTitle"
                      >
                        <li
                          v-if="seriesData.series.seriesList.length === 0"
                          :key="'no-items-' + seriesData.series.seriesTitle"
                        >
                          <a
                            href="#"
                            class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
                            @click="showSeriesData(seriesData)"
                          >
                            <span
                              class="ms-3 font-neue-montreal font-bold text-base tracking-wide"
                            >
                              {{ seriesData.series.seriesTitle }}
                            </span>
                          </a>
                        </li>

                        <li
                          v-else-if="seriesData.series.seriesList.length >= 1"
                          :key="'with-items-' + seriesData.series.seriesTitle"
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
                              :class="{
                                'rotate-180': seriesData.isDropDownOpen,
                              }"
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
                              v-for="seriesList in seriesData.series.seriesList"
                              :key="seriesList.id"
                            >
                              <div
                                class="flex items-start leading-[1] w-full pl-5 p-2 text-gray-700 transition duration-75 rounded-lg group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                              >
                                <input
                                  :id="
                                    seriesData.series.seriesTitle +
                                    seriesList.id
                                  "
                                  type="checkbox"
                                  :checked="isChecked(seriesList.name)"
                                  @change="toggleFilter(seriesList.name)"
                                  class="w-4 h-4 text-gray-500 bg-white border-gray-400 dark:bg-gray-600 dark:border-gray-500 dark:text-gray-400 focus:outline-none focus:ring-0 cursor-pointer"
                                />
                                <label
                                  :for="
                                    seriesData.series.seriesTitle +
                                    seriesList.id
                                  "
                                  class="text-gray-700 font-medium transition duration-75 ms-2 cursor-pointer"
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
                </div>
              </aside>
            </div>

            <!-- Gallery Section -->
            <div class="lg:col-span-2 gallery">
              <div v-for="group in groupedNames" :key="group.seriesTitle">
                <h1
                  class="font-neue-montreal uppercase font-extrabold text-[24px] md:text-4xl pb-1 leading-[107%] text-gray-900"
                >
                  {{ group.seriesTitle }}
                </h1>
                <div v-for="name in group.items" :key="name.id">
                  <h1
                    class="font-neue-montreal font-bold text-[24px] md:text-4xl pb-1 leading-[107%] text-gray-700"
                  >
                    {{ name.name }}
                  </h1>
                  <p
                    class="font-neue-montreal font-normal text-gray-700 w-auto text-[20px] leading-[107%] pb-6 md:text-[24px]"
                  >
                    {{ name.subheadline }}
                  </p>

                  <!-- Loop through the images array and display each image -->
                  <div class="grid grid-cols-2 gap-4 lg:grid-cols-4 pb-12">
                    <a
                      v-for="(image, index) in name.img"
                      :key="index + image"
                      :href="image"
                      class="image-item"
                    >
                      <img
                        :src="image"
                        :alt="`Image ${index + 1} for ${name.name}`"
                        class="w-full h-60 lg:h-80 object-cover rounded-lg"
                      />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref, computed, watch, onMounted } from "vue";
import BaguetteBox from "baguettebox.js";

const isSidebarOpen = ref(false); // Reactive property for sidebar visibility
const sidebar = ref(null); // Ref for the sidebar element

const toggleSidebar = () => {
  isSidebarOpen.value = !isSidebarOpen.value;
};
const allSeries = ref([
  {
    isDropDownOpen: false,
    series: {
      seriesTitle: "YC 38 Series New Panel",
      seriesList: [
        {
          id: 1,
          name: "Fixed Casement Combination",
          subheadline: "Seamless Fixed and Operable Windows for Any Space",
          img: [
            "/images/GlassAndAluminum/YC38SeriesNewPanel/FixedCasementCombination/IMG_6480.webp",
            "/images/GlassAndAluminum/YC38SeriesNewPanel/FixedCasementCombination/IMG_6482.webp",
            "/images/GlassAndAluminum/YC38SeriesNewPanel/FixedCasementCombination/IMG_20220911_170857.webp",
            "/images/GlassAndAluminum/YC38SeriesNewPanel/FixedCasementCombination/IMG_20220911_170925.webp",
          ],
        },
        {
          id: 2,
          name: "Fixed Casement or Awning Combination",
          subheadline: "Versatile Window Combinations for Every Need",
          img: [
            "/images/GlassAndAluminum/YC38SeriesNewPanel/FixedCasementOrAwningCombination/IMG_20220911_133706.webp",
            "/images/GlassAndAluminum/YC38SeriesNewPanel/FixedCasementOrAwningCombination/IMG_20220911_133804.webp",
            "/images/GlassAndAluminum/YC38SeriesNewPanel/FixedCasementOrAwningCombination/IMG_20220911_134308.webp",
            "/images/GlassAndAluminum/YC38SeriesNewPanel/FixedCasementOrAwningCombination/IMG_20220911_170832.webp",
          ],
        },
        {
          id: 3,
          name: "Fixed Casement or Awning Combination French Type",
          subheadline: "Elegant French-Style Window Solutions",
          img: [
            "/images/GlassAndAluminum/YC38SeriesNewPanel/FixedCasementOrAwningCombinationFrenchType/D2F4BCA9-81C2-4CC6-B2A7-997A22B7BDF0.webp",
            "/images/GlassAndAluminum/YC38SeriesNewPanel/FixedCasementOrAwningCombinationFrenchType/F1.webp",
            "/images/GlassAndAluminum/YC38SeriesNewPanel/FixedCasementOrAwningCombinationFrenchType/F2.webp",
          ],
        },
      ],
    },
  },
  {
    isDropDownOpen: false,
    series: {
      seriesTitle: "Sliding Window",
      seriesList: [
        {
          id: 4,
          name: "798 series",
          subheadline: "High-Performance Sliding Windows for Modern Homes",
          img: [
            "/images/GlassAndAluminum/SlidingWindow/798Series/IMG_6471.webp",
          ],
        },
        {
          id: 5,
          name: "868 Series Three (3) Tracks with Security Screen",
          subheadline:
            "Enhanced Security and Smooth Operation with Triple Tracks",
          img: [
            "/images/GlassAndAluminum/SlidingWindow/868SeriesThree(3)TracksWithSecurityScreen/IMG_6455.webp",
            "/images/GlassAndAluminum/SlidingWindow/868SeriesThree(3)TracksWithSecurityScreen/IMG_6464.webp",
          ],
        },
        {
          id: 6,
          name: "900 Series",
          subheadline: "Effortless Sliding Windows for Maximum Ventilation",
          img: [
            "/images/GlassAndAluminum/SlidingWindow/900Series/image1.webp",
            "/images/GlassAndAluminum/SlidingWindow/900Series/image2.webp",
          ],
        },
        {
          id: 7,
          name: "900 Series Three (3) Tracks",
          subheadline:
            "Triple Track Sliding Windows for Superior Functionality",
          img: [
            "/images/GlassAndAluminum/SlidingWindow/900SeriesThree(3)Tracks/IMG_6465.webp",
            "/images/GlassAndAluminum/SlidingWindow/900SeriesThree(3)Tracks/IMG_20220911_171504.webp",
            "/images/GlassAndAluminum/SlidingWindow/900SeriesThree(3)Tracks/IMG_20220911_171537.webp",
            "/images/GlassAndAluminum/SlidingWindow/900SeriesThree(3)Tracks/IMG_20220911_171552.webp",
          ],
        },
        {
          id: 8,
          name: "130 Series Sliding with Security Screen",
          subheadline: "Reliable Sliding Windows with Built-in Security",
          img: [
            "/images/GlassAndAluminum/130SeriesSlidingWithSecurityScreen/IMG_6444.webp",
            "/images/GlassAndAluminum/130SeriesSlidingWithSecurityScreen/IMG_6445.webp",
            "/images/GlassAndAluminum/130SeriesSlidingWithSecurityScreen/IMG_6446 (1).webp",
          ],
        },
      ],
    },
  },
  {
    isDropDownOpen: false,
    series: {
      seriesTitle: "Sliding Door",
      seriesList: [
        {
          id: 9,
          name: "900 series",
          subheadline:
            "Stylish, Smooth-Gliding Sliding Doors for Seamless Living",
          img: [
            "/images/GlassAndAluminum/SlidingDoor/900Series/305398059_131743259591440_3191313701467848932_n.webp",
            "/images/GlassAndAluminum/SlidingDoor/900Series/Capture.webp",
          ],
        },
      ],
    },
  },
  {
    isDropDownOpen: false,
    series: {
      seriesTitle: "Awning Windows",
      seriesList: [
        {
          id: 10,
          name: "YC 50 Series Awning",
          subheadline: "Efficient, Durable Awning Windows for Any Space",
          img: [
            "/images/GlassAndAluminum/YC50SeriesAwning/IMG_6448.webp",
            "/images/GlassAndAluminum/YC50SeriesAwning/IMG_6450.webp",
            "/images/GlassAndAluminum/YC50SeriesAwning/IMG_6473.webp",
            "/images/GlassAndAluminum/YC50SeriesAwning/IMG_20220911_171303.webp",
            "/images/GlassAndAluminum/YC50SeriesAwning/IMG_20220911_171322.webp",
            "/images/GlassAndAluminum/YC50SeriesAwning/IMG_20220911_171345.webp",
            "/images/GlassAndAluminum/YC50SeriesAwning/IMG_20220911_171402.webp",
            "/images/GlassAndAluminum/YC50SeriesAwning/IMG_20220911_171436.webp",
          ],
        },
        {
          id: 11,
          name: "85 Series Awning Window with Security Screen",
          subheadline:
            "Secure, Stylish Awning Windows for Uncompromised Comfort",
          img: [
            "/images/GlassAndAluminum/85SeriesAwningWindowWithSecurityScreen/IMG_6452.webp",
            "/images/GlassAndAluminum/85SeriesAwningWindowWithSecurityScreen/IMG_6453.webp",
          ],
        },
      ],
    },
  },
  {
    isDropDownOpen: false,
    series: {
      seriesTitle: "Security Screen",
      seriesList: [
        {
          id: 12,
          name: "Roll-Up Screen",
          subheadline: "Reliable Protection with a Retractable Screen",
          img: ["/images/GlassAndAluminum/RollUpScreen/IMG_6458.webp"],
        },
      ],
    },
  },
]);

const filterNames = ref([]);
const groupedNames = computed(() => {
  const grouped = {};

  filteredNames.value.forEach((item) => {
    if (!grouped[item.seriesTitle]) {
      grouped[item.seriesTitle] = {
        seriesTitle: item.seriesTitle,
        items: [],
      };
    }
    grouped[item.seriesTitle].items.push(item);
  });

  return Object.values(grouped);
});

// Reset filter logic
const resetFilter = () => {
  filterNames.value = [];
};

// Toggle filter names
const toggleFilter = (name) => {
  if (filterNames.value.includes(name)) {
    filterNames.value = filterNames.value.filter((item) => item !== name);
  } else {
    filterNames.value.push(name);
  }
};

// Check if a name is selected
const isChecked = (name) => {
  return filterNames.value.includes(name);
};

// Toggle dropdown visibility
const toggleDropdown = (index) => {
  allSeries.value[index].isDropDownOpen =
    !allSeries.value[index].isDropDownOpen;
};

// Computed property to filter names
const filteredNames = computed(() => {
  if (filterNames.value.length === 0) {
    return allSeries.value.flatMap((series) =>
      series.series.seriesList.map((item) => ({
        ...item,
        seriesTitle: series.series.seriesTitle,
      }))
    );
  }

  return allSeries.value
    .flatMap((series) =>
      series.series.seriesList.map((item) => ({
        ...item,
        seriesTitle: series.series.seriesTitle,
      }))
    )
    .filter((name) => filterNames.value.includes(name.name));
});

// Watcher to re-initialize BaguetteBox when filteredNames change
watch(filteredNames, () => {
  nextTick(() => {
    BaguetteBox.run(".gallery");
  });
});

onMounted(() => {
  // ... other onMounted logic (BaguetteBox, etc.)
  document.addEventListener("click", handleClickOutside);
});

// BeforeUnmount, remove the listener to avoid memory leaks:
onBeforeUnmount(() => {
  document.removeEventListener("click", handleClickOutside);
});

const handleClickOutside = (event) => {
  if (isSidebarOpen.value && window.innerWidth >= 768) {
    // Only on desktop and when open
    if (sidebar.value && !sidebar.value.contains(event.target)) {
      isSidebarOpen.value = false;
    }
  }
};
</script>

<style scoped>
#projects-hero {
  background: url(../assets/images/projects/abstract.webp);
  overflow: hidden;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: 8%;
}

::-webkit-scrollbar {
  width: 10px;
  height: 5px;
}

::-webkit-scrollbar-track {
  box-shadow: inset 0 0 5px rgb(216, 216, 216);
  border-radius: 4px;
}

/* Handle */
::-webkit-scrollbar-thumb {
  background: #c1c1c1;
  border-radius: 10px;
}
</style>
