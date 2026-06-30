<template>
  <div>
    <!-- Hero Section -->
    <section id="projects-hero" class="relative min-h-[340px] overflow-hidden lg:min-h-[520px]">
      <div class="absolute inset-0 bg-gradient-to-r from-white via-white/90 to-white/45"></div>
      <div class="relative flex min-h-[340px] w-full flex-col justify-end lg:min-h-[520px]">
        <div class="mx-auto w-full max-w-screen-2xl px-4 py-10 md:px-6 lg:px-8 lg:py-16 xl:px-10 2xl:px-12">
          <div class="max-w-4xl text-left">
            <div
              class="mb-5 inline-flex items-center gap-3 rounded-[4px] border border-gray-200 bg-white/90 px-4 py-3 font-neue-montreal text-sm font-bold uppercase tracking-wide text-gray-700 shadow-sm backdrop-blur"
            >
              <span class="material-icons text-[20px] text-gray-950">window</span>
              Glass and Aluminum Systems
            </div>
            <h1
              class="font-neue-montreal text-4xl font-bold leading-[100%] text-gray-950 md:text-7xl lg:text-8xl"
            >
              Aluminum Series
            </h1>
            <p class="mt-5 max-w-2xl font-neue-montreal text-lg leading-7 text-gray-700 md:text-2xl md:leading-9">
              Browse window, door, and screen configurations built for clean finishes, reliable function, and modern construction needs.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Windows Section -->
    <section class="h-auto bg-[#F5F9FC]">
      <div class="h-full w-full">
        <div class="mx-auto max-w-screen-2xl px-4 py-10 md:px-6 lg:px-8 lg:py-16 xl:px-10 2xl:px-12">
          <!-- button for small screen, navigation -->
          <div class="w-full">
            <button
              type="button"
              @click="toggleSidebar"
              class="my-4 inline-flex h-[55px] w-full items-center justify-center gap-3 rounded-[4px] border border-gray-300 bg-white font-neue-montreal text-[16px] font-bold text-gray-950 shadow-sm transition duration-300 ease-out hover:border-gray-950 hover:bg-gray-950 hover:text-white md:hidden"
            >
              <span class="material-icons text-[20px]">tune</span>
              Select Series
            </button>
          </div>

          <div class="grid gap-8 md:grid-cols-[280px_1fr] lg:grid-cols-[320px_1fr] lg:gap-12">
            <div
              v-if="isSidebarOpen"
              class="md:hidden fixed inset-0 bg-black/50 z-30"
              @click="isSidebarOpen = false"
            ></div>
            <div>
              <aside
                id="default-sidebar"
                ref="sidebar"
                class="fixed left-0 top-0 z-40 w-80 max-w-[86vw] transition-transform duration-300 ease-in-out md:sticky md:left-auto md:top-[100px] md:z-20 md:w-full md:max-w-none"
                :class="{
                  '-translate-x-full md:translate-x-0': !isSidebarOpen,
                  'translate-x-0': isSidebarOpen,
                }"
                aria-label="Sidebar"
              >
                <div
                  class="h-[100vh] overflow-y-auto border-r border-gray-200 bg-white px-4 py-6 shadow-xl md:h-auto md:max-h-[calc(100vh-130px)] md:rounded-[4px] md:border md:shadow-sm"
                >
                  <div>
                    <div class="mb-5 flex items-center justify-between gap-4 border-b border-gray-200 pb-5">
                      <div>
                        <p class="font-neue-montreal text-xs font-bold uppercase tracking-wide text-gray-500">
                          Filter catalog
                        </p>
                        <h2 class="font-neue-montreal text-xl font-bold text-gray-950">
                          Select Series
                        </h2>
                      </div>
                      <span class="material-icons flex h-10 w-10 items-center justify-center rounded-[4px] bg-gray-950 text-[21px] text-white md:hidden">tune</span>
                    </div>

                    <ul class="space-y-3 font-medium">
                      <button class="w-full" @click="resetFilter()">
                        <li>
                          <a
                            href="#"
                            class="group flex items-center justify-between rounded-[4px] border border-gray-200 bg-gray-950 px-4 py-3 text-white transition duration-300 ease-out hover:bg-gray-800"
                          >
                            <span class="flex items-center gap-3">
                              <span class="material-icons text-[20px]">widgets</span>
                              <span class="font-neue-montreal text-base font-bold tracking-wide">All Series</span>
                            </span>
                            <span class="material-icons text-[18px] opacity-80">restart_alt</span>
                          </a>
                        </li>
                      </button>

                      <div
                        v-for="seriesData in allSeries"
                        :key="seriesData.series.seriesTitle"
                      >
                        <li
                          v-if="seriesData.series.seriesList.length === 0"
                          :key="'no-items-' + seriesData.series.seriesTitle"
                        >
                          <a
                            href="#"
                            class="group flex items-center gap-3 rounded-[4px] border border-gray-200 bg-white px-4 py-3 text-gray-900 transition duration-300 ease-out hover:border-gray-950 hover:shadow-sm"
                            @click="showSeriesData(seriesData)"
                          >
                            <span class="material-icons text-[20px] text-gray-600 group-hover:text-gray-950">{{ getSeriesIcon(seriesData.series.seriesTitle) }}</span>
                            <span class="font-neue-montreal text-base font-bold tracking-wide">
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
                            class="group flex w-full items-center gap-3 rounded-[4px] border border-gray-200 bg-white px-4 py-3 text-base text-gray-900 transition duration-300 ease-out hover:border-gray-950 hover:shadow-sm"
                            :class="{
                              'border-gray-950 shadow-sm': seriesData.isDropDownOpen,
                            }"
                            @click="toggleDropdown(seriesData)"
                          >
                            <span class="material-icons text-[20px] text-gray-600 group-hover:text-gray-950">{{ getSeriesIcon(seriesData.series.seriesTitle) }}</span>
                            <span class="flex-1 text-left">
                              <span class="block font-neue-montreal text-base font-bold tracking-wide text-gray-950">
                                {{ seriesData.series.seriesTitle }}
                              </span>
                              <span class="block font-neue-montreal text-xs font-medium text-gray-500">
                                {{ seriesData.series.seriesList.length }} options
                              </span>
                            </span>
                            <span
                              class="material-icons text-[22px] text-gray-500 transition-transform duration-300 ease-in-out"
                              :class="{
                                'rotate-180': seriesData.isDropDownOpen,
                              }"
                            >
                              keyboard_arrow_down
                            </span>
                          </button>

                          <ul
                            v-if="seriesData.isDropDownOpen"
                            class="space-y-2 px-2 py-3 transition-all duration-300 ease-in-out transform origin-top"
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
                                class="group flex w-full items-start gap-3 rounded-[4px] border border-transparent px-3 py-2.5 leading-[1] text-gray-700 transition duration-300 ease-out hover:border-gray-200 hover:bg-gray-50"
                              >
                                <input
                                  :id="
                                    seriesData.series.seriesTitle +
                                    seriesList.id
                                  "
                                  type="checkbox"
                                  :checked="isChecked(seriesList.name)"
                                  @change="toggleFilter(seriesList.name)"
                                  class="mt-0.5 h-4 w-4 cursor-pointer rounded border-gray-400 bg-white text-gray-950 accent-gray-950 focus:outline-none focus:ring-0"
                                />
                                <label
                                  :for="
                                    seriesData.series.seriesTitle +
                                    seriesList.id
                                  "
                                  class="cursor-pointer font-neue-montreal text-sm font-bold leading-snug text-gray-700 transition duration-300 group-hover:text-gray-950"
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
            <div class="gallery space-y-12">
              <div v-for="group in groupedNames" :key="group.seriesTitle" class="space-y-5">
                <div class="flex items-end justify-between gap-4 border-b border-gray-200 pb-4">
                  <div>
                    <p class="font-neue-montreal text-xs font-bold uppercase tracking-wide text-gray-500">
                      Series group
                    </p>
                    <h1
                      class="font-neue-montreal text-[28px] font-extrabold uppercase leading-[107%] text-gray-950 md:text-5xl"
                    >
                      {{ group.seriesTitle }}
                    </h1>
                  </div>
                  <span class="hidden rounded-[4px] bg-white px-3 py-2 font-neue-montreal text-sm font-bold text-gray-600 shadow-sm sm:inline-flex">
                    {{ group.items.length }} item<span v-if="group.items.length > 1">s</span>
                  </span>
                </div>

                <div v-for="name in group.items" :key="name.id" class="rounded-[4px] border border-gray-200 bg-white p-4 shadow-sm md:p-6">
                  <div class="mb-5 flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
                    <div>
                      <h2
                        class="font-neue-montreal text-[24px] font-bold leading-[107%] text-gray-950 md:text-4xl"
                      >
                        {{ name.name }}
                      </h2>
                      <p
                        class="mt-3 max-w-3xl font-neue-montreal text-[18px] font-normal leading-7 text-gray-600 md:text-[22px] md:leading-8"
                      >
                        {{ name.subheadline }}
                      </p>
                    </div>
                    <span class="inline-flex w-fit items-center gap-2 rounded-[4px] bg-[#F5F9FC] px-3 py-2 font-neue-montreal text-sm font-bold text-gray-700">
                      <span class="material-icons text-[18px]">photo_library</span>
                      {{ name.img.length }} {{ name.img.length === 1 ? "photo" : "photos" }}
                    </span>
                  </div>

                  <!-- Loop through the images array and display each image -->
                  <div class="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
                    <a
                      v-for="(image, index) in name.img"
                      :key="index + image"
                      :href="image"
                      class="image-item group overflow-hidden rounded-[4px] bg-gray-100"
                    >
                      <img
                        :src="image"
                        :alt="`Image ${index + 1} for ${name.name}`"
                        class="h-64 w-full rounded-[4px] object-cover transition duration-500 ease-out group-hover:scale-105 lg:h-80"
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
  closeAllDropdowns();
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

const getSeriesIcon = (title) => {
  const normalizedTitle = title.toLowerCase();

  if (normalizedTitle.includes("door")) return "door_sliding";
  if (normalizedTitle.includes("security") || normalizedTitle.includes("screen")) return "grid_on";
  if (normalizedTitle.includes("awning")) return "open_in_new";
  if (normalizedTitle.includes("sliding")) return "view_carousel";

  return "window";
};

const closeAllDropdowns = () => {
  allSeries.value.forEach((seriesData) => {
    seriesData.isDropDownOpen = false;
  });
};

// Toggle dropdown visibility
const toggleDropdown = (selectedSeries) => {
  allSeries.value.forEach((seriesData) => {
    seriesData.isDropDownOpen =
      seriesData === selectedSeries ? !seriesData.isDropDownOpen : false;
  });
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
useHead({
  title: "Aluminum Series | RV Rioflorido",
  meta: [
    {
      name: "description",
      content:
        "Explore our Aluminum Series, featuring a wide range of sliding windows, awning windows, and security screens. Discover the perfect solution for your space.",
    },
  ], 
})
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
