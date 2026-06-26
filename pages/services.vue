<template>
  <div>
    <AppHeader :isHeroWhite="true" />
    <!-- hero section  -->
    <section id="hero-section" class="relative overflow-hidden bg-[#f5f9fc]">
      <div class="absolute inset-x-0 top-0 h-24 bg-white"></div>
      <div class="relative h-auto w-full pt-24 md:pt-36 lg:pt-40" id="container-text">
        <div class="w-full">
          <div
            class="mx-auto grid max-w-screen-2xl grid-cols-1 gap-10 px-4 pb-16 pt-10 md:px-6 md:pb-24 lg:grid-cols-[0.95fr_1.05fr] lg:items-center lg:gap-16 lg:px-8 lg:pb-32 xl:px-10 2xl:px-12"
          >
            <div class="max-w-3xl">
              <div
                class="mb-6 inline-flex items-center gap-3 rounded-[4px] border border-gray-200 bg-white px-4 py-3 text-sm font-bold uppercase tracking-wide text-gray-700 shadow-sm"
              >
                <span class="material-icons text-[20px] text-gray-950">engineering</span>
                Professional Construction Services
              </div>
              <h1
                class="font-neue-montreal text-4xl font-bold leading-[105%] text-gray-950 md:text-6xl lg:text-7xl lg:leading-[96%]"
              >
                Build with Confidence, Backed by Professionals
              </h1>

              <!-- <div v-for="(service, index) in services" :key="service">
                <p
                  class="font-neue-montreal font-bold text-gray-900 w-auto text-[20px] md:text-[24px]"
                >
                  {{ service }}
                </p>
                <hr
                  v-if="index < services.length - 1"
                  class="h-px my-4 bg-[#E8E8E8] border-0"
                />
              </div> -->
              <div>
                <p
                  class="mt-6 max-w-2xl font-neue-montreal text-[20px] font-normal leading-8 text-gray-700 md:text-[28px] md:leading-10"
                >
                  Our Team manages Everything: Design, Documentation, Construction, and Finishing Touches—Bringing Clarity and Craft to Every Step.
                </p>
              </div>

              <div class="mt-8 flex">
                <NuxtLink to="#services-section">
                  <button
                    type="button"
                    id="view-services"
                    class="inline-flex h-[55px] w-full items-center justify-center rounded-[4px] bg-gray-950 px-8 font-neue-montreal text-[16px] font-bold text-white transition ease-out duration-300 hover:bg-gray-800 sm:w-auto md:w-[200px]"
                  >
                    View our Services
                  </button>
                </NuxtLink>
              </div>
            </div>

            <div class="relative">
              <div class="absolute -left-4 top-8 hidden h-24 w-24 border-l border-t border-gray-300 lg:block"></div>
              <div class="absolute -bottom-4 -right-4 hidden h-24 w-24 border-b border-r border-gray-300 lg:block"></div>
              <img
                class="aspect-[4/3] w-full rounded-[4px] object-cover shadow-xl"
                src="/images/services/image-1.webp"
                alt="Construction service project"
              />
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- services swiper -->
    <!-- Add 'gallery' class to enable BaguetteBox -->
    <section id="services-section" ref="servicesSection" class="bg-[#F5F9FC]">
      <div class="h-auto w-full py-16 lg:py-32">
        <div class="max-w-screen-2xl mx-auto px-4 md:px-6 lg:px-8 xl:px-10 2xl:px-12">
          <h1
            class="font-neue-montreal font-bold text-4xl md:text-7xl text-gray-900"
          >
            Construction Work
          </h1>
          <p
            class="font-neue-montreal font-normal text-gray-900 w-auto md:w-[706px] text-[20px] md:text-[24px]"
          >
            Our seasoned professionals specialize in delivering excellence
            across Structural, Architectural, Plumbing, Electrical, and
            Mechanical Works.
          </p>
        </div>

        <div class="gallery max-w-screen-2xl mx-auto px-4 md:px-6 lg:px-8 xl:px-10 2xl:px-12 py-8 lg:pt-16">
          <swiper
            :slidesPerView="1"
            :spaceBetween="20"
            :navigation="{
              nextEl: '.construction-next',
              prevEl: '.construction-prev',
            }"
            :pagination="{ clickable: true }"
            :breakpoints="breakpoints"
            :modules="modules"
            class="mySwiper flex justify-between"
          >
            <swiper-slide
              v-for="(image, index) in constructionImages"
              :key="index"
            >
              <div class="max-w-full bg-white rounded-lg">
                <a :href="image.src">
                  <img class="rounded-lg object-cover aspect-[772/940]" :src="image.src" :alt="image.alt" />
                </a>
              </div>
            </swiper-slide>
          </swiper>
        </div>

        <div class="max-w-screen-2xl mx-auto py-2 lg:py-8 px-4 md:px-6 lg:px-8 xl:px-10 2xl:px-12">
          <div class="flex justify-end gap-2">
            <button
              class="text-black bg-white font-medium rounded-full text-lg p-4 text-center inline-flex items-center construction-prev"
            >
              <!-- SVG Icon -->
              <svg
                class="w-6 h-6"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 10"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="1"
                  d="M13 5H1m0 0L5 1m-4 4L5 9"
                />
              </svg>
              <span class="sr-only">Icon description</span>
            </button>

            <button
              class="text-black bg-white font-medium rounded-full text-lg p-4 text-center inline-flex items-center construction-next"
            >
              <!-- SVG Icon -->
              <svg
                class="w-6 h-6"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 10"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="1"
                  d="M1 5h12m0 0L9 1m4 4L9 9"
                />
              </svg>
              <span class="sr-only">Icon description</span>
            </button>
          </div>
        </div>

        <!-- design plans signed and seal -->
        <div class="max-w-screen-2xl mx-auto px-4 md:px-6 lg:px-8 xl:px-10 2xl:px-12 pt-8 lg:pt-32">
          <h1
            class="font-neue-montreal font-bold text-4xl md:text-7xl text-gray-900"
          >
            Design plans
          </h1>
          <p
            class="font-neue-montreal font-normal text-gray-900 w-auto md:w-[706px] text-[20px] md:text-[24px]"
          >
            Complete sets of plans signed and sealed by professionals
          </p>
        </div>

        <div class="max-w-screen-2xl mx-auto px-4 md:px-6 lg:px-8 xl:px-10 2xl:px-12 py-8 lg:pt-16">
          <div class="gallery max-w-full bg-white rounded-lg">
            <a href="/images/services/design-plans/design1.webp">
              <img
                class="rounded-lg"
                src="/images/services/design-plans/design1.webp"
                alt="image-design-plans"
              />
            </a>
          </div>
        </div>

        <!-- glass and aluminum works -->
        <div class="max-w-screen-2xl mx-auto px-4 md:px-6 lg:px-8 xl:px-10 2xl:px-12 pt-8 lg:pt-32">
          <h1
            class="font-neue-montreal font-bold text-4xl md:text-7xl text-gray-900"
          >
            Glass and Aluminum Works
          </h1>
          <p
            class="font-neue-montreal font-normal text-gray-900 w-auto md:w-[706px] text-[20px] md:text-[24px]"
          >
            Expertly Tailored Glass and Aluminum Installations for Elegant
            Railings, Fencing, Windows, Doors and Gates.
          </p>
        </div>

        <!-- swiper goes here -->
        <div class="gallery max-w-screen-2xl mx-auto px-4 md:px-6 lg:px-8 xl:px-10 2xl:px-12 py-8 lg:pt-16">
          <swiper
            :slidesPerView="1"
            :spaceBetween="20"
            :navigation="{ nextEl: '.glass-next', prevEl: '.glass-prev' }"
            :pagination="{ clickable: true }"
            :breakpoints="breakpoints"
            :modules="modules"
            class="mySwiper flex justify-between"
          >
            <swiper-slide
              v-for="(image, index) in glassAndAluminumImages"
              :key="index"
            >
              <div class="max-w-full bg-white rounded-lg">
                <a :href="image.src">
                  <img class="rounded-lg" :src="image.src" :alt="image.alt" />
                </a>
              </div>
            </swiper-slide>
          </swiper>
        </div>

        <!-- button swiper -->
        <div class="max-w-screen-2xl mx-auto py-2 lg:py-8 px-4 md:px-6 lg:px-8 xl:px-10 2xl:px-12">
          <div class="flex justify-end gap-2">
            <button
              class="text-black bg-white font-medium rounded-full text-lg p-4 text-center inline-flex items-center glass-prev"
            >
              <!-- SVG Icon -->
              <svg
                class="w-6 h-6"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 10"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="1"
                  d="M13 5H1m0 0L5 1m-4 4L5 9"
                />
              </svg>
              <span class="sr-only">Icon description</span>
            </button>

            <button
              class="text-black bg-white font-medium rounded-full text-lg p-4 text-center inline-flex items-center glass-next"
            >
              <!-- SVG Icon -->
              <svg
                class="w-6 h-6"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 10"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="1"
                  d="M1 5h12m0 0L9 1m4 4L9 9"
                />
              </svg>
              <span class="sr-only">Icon description</span>
            </button>
          </div>
        </div>

        <!-- windows -->
        <div class="max-w-screen-2xl mx-auto px-4 md:px-6 lg:px-8 xl:px-10 2xl:px-12 pt-8 lg:pt-32">
          <div class="grid grid-cols-1 lg:grid-cols-2 lg:flex justify-between">
            <div>
              <h1
                class="font-neue-montreal font-bold text-4xl md:text-7xl text-gray-900"
              >
                Aluminum Series
              </h1>
              <p
                class="font-neue-montreal font-normal text-gray-900 w-auto md:w-[706px] text-[20px] md:text-[24px]"
              >
                Expertly crafted windows designed to meet the specific needs and
                vision of your construction project
              </p>
            </div>

            <div>
              <NuxtLink to="/aluminum-series">
                <button
                  type="button"
                  id="explore-projects"
                  class="text-gray-900 font-neue-montreal font-bold h-[55px] rounded-[4px] text-[16px] md:w-[200px] bg-white border border-gray-400 px-8 my-3 md:my-6 transition ease-out duration-300 hover:bg-gray-900 hover:text-white"
                >
                  View All
                </button>
              </NuxtLink>
            </div>
          </div>
        </div>

        <!--image for aluminum series -->
        <div
          class="max-w-screen-2xl mx-auto px-4 md:px-6 lg:px-8 xl:px-10 2xl:px-12 py-8 lg:pt-16 flex justify-center"
        >
          <div class="gallery w-auto rounded-lg">
            <a href="/images/services/aluminum-series/aluminum-series.webp">
              <img
                class="rounded-lg"
                src="/images/services/aluminum-series/aluminum-series.webp"
                alt="image-aluminum-series"
              />
            </a>
          </div>
        </div>

        <!-- Railings, Fencing and Gate-->
        <div class="max-w-screen-2xl mx-auto px-4 md:px-6 lg:px-8 xl:px-10 2xl:px-12 pt-8 lg:pt-16">
          <h1
            class="font-neue-montreal font-bold text-4xl md:text-7xl text-gray-900"
          >
            Railings, Fencing and Gate
          </h1>
          <p
            class="font-neue-montreal font-normal text-gray-900 w-auto md:w-[706px] text-[20px] md:text-[24px]"
          >
            Experience Superior Design and Durability with Our Custom Railings,
            Fencing, and Gates
          </p>
        </div>

        <!-- swiper goes here -->
        <div class="gallery max-w-screen-2xl mx-auto px-4 md:px-6 lg:px-8 xl:px-10 2xl:px-12 py-8 lg:pt-16">
      <swiper
        :slidesPerView="1"
        :spaceBetween="20"
        :navigation="{ nextEl: '.railings-next', prevEl: '.railings-prev' }"
        :pagination="{ clickable: true }"
        :breakpoints="breakpoints"
        :modules="modules"
        class="mySwiper flex justify-between"
      >
        <swiper-slide v-for="(image, index) in railingsFencingGateImages" :key="index">
          <div class="max-w-full bg-white rounded-lg">
            <a :href="image.src">
              <img class="rounded-lg" :src="image.src" :alt="image.alt" />
            </a>
          </div>
        </swiper-slide>
      </swiper>
    </div>

        <!-- button swiper -->
        <div class="max-w-screen-2xl mx-auto py-2 lg:py-8 px-4 md:px-6 lg:px-8 xl:px-10 2xl:px-12">
          <div class="flex justify-end gap-2">
            <button
              class="text-black bg-white font-medium rounded-full text-lg p-4 text-center inline-flex items-center railings-prev"
            >
              <!-- SVG Icon -->
              <svg
                class="w-6 h-6"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 10"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="1"
                  d="M13 5H1m0 0L5 1m-4 4L5 9"
                />
              </svg>
              <span class="sr-only">Icon description</span>
            </button>

            <button
              class="text-black bg-white font-medium rounded-full text-lg p-4 text-center inline-flex items-center railings-next"
            >
              <!-- SVG Icon -->
              <svg
                class="w-6 h-6"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 10"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="1"
                  d="M1 5h12m0 0L9 1m4 4L9 9"
                />
              </svg>
              <span class="sr-only">Icon description</span>
            </button>
          </div>
        </div>

        <!-- cabinets -->
        <div class="max-w-screen-2xl mx-auto px-4 md:px-6 lg:px-8 xl:px-10 2xl:px-12 pt-8 lg:pt-16">
          <h1
            class="font-neue-montreal font-bold text-4xl md:text-7xl text-gray-900"
          >
            Modular Cabinets
          </h1>
          <p
            class="font-neue-montreal font-normal text-gray-900 w-auto md:w-[706px] text-[20px] md:text-[24px]"
          >
            Expertly crafted to deliver durability, functionality, and seamless
            design solutions for any space
          </p>
        </div>

        <!-- swiper goes here -->
        <div class="gallery max-w-screen-2xl mx-auto px-4 md:px-6 lg:px-8 xl:px-10 2xl:px-12 py-8 lg:pt-16">
          <swiper
            :slidesPerView="1"
            :spaceBetween="20"
            :navigation="{ nextEl: '.cabinet-next', prevEl: '.cabinet-prev' }"
            :pagination="{ clickable: true }"
            :breakpoints="breakpoints"
            :modules="modules"
            class="mySwiper flex justify-between"
          >
            <swiper-slide v-for="(image, index) in modularCabinetsImages" :key="index">
              <div class="max-w-full bg-white rounded-lg">
                <a :href="image.src">
                  <img class="rounded-lg" :src="image.src" :alt="image.alt" />
                </a>
              </div>
            </swiper-slide>
          </swiper>
        </div>

        <!-- button swiper -->
        <div class="max-w-screen-2xl mx-auto py-2 lg:py-8 px-4 md:px-6 lg:px-8 xl:px-10 2xl:px-12 lg:hidden">
          <div class="flex justify-end gap-2">
            <button
              class="text-black bg-white font-medium rounded-full text-lg p-4 text-center inline-flex items-center cabinet-prev"
            >
              <!-- SVG Icon -->
              <svg
                class="w-6 h-6"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 10"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="1"
                  d="M13 5H1m0 0L5 1m-4 4L5 9"
                />
              </svg>
              <span class="sr-only">Icon description</span>
            </button>

            <button
              class="text-black bg-white font-medium rounded-full text-lg p-4 text-center inline-flex items-center cabinet-next"
            >
              <!-- SVG Icon -->
              <svg
                class="w-6 h-6"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 10"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="1"
                  d="M1 5h12m0 0L9 1m4 4L9 9"
                />
              </svg>
              <span class="sr-only">Icon description</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { Swiper, SwiperSlide } from 'swiper/vue'
import 'swiper/css'
import { Navigation } from 'swiper/modules'

// Define references
const servicesSection = ref(null)

// Scroll to Services section
// const scrollToServices = () => {
//   if (servicesSection.value) {
//     servicesSection.value.scrollIntoView({
//       behavior: 'smooth',
//       block: 'start',
//     })
//   }
// }

// Swiper breakpoints
const breakpoints = {
  360: {
    slidesPerView: 1,
  },
  400: {
    slidesPerView: 2,
  },
  768: {
    slidesPerView: 2,
  },
  1024: {
    slidesPerView: 3,
  },
}

// Image data
const constructionImages = [
  {
    src: '/images/services/construction-work/image-1.webp',
    alt: 'image-1',
  },
  {
    src: '/images/services/construction-work/image-2.webp',
    alt: 'image-2',
  },
  {
    src: '/images/services/construction-work/image-3.webp',
    alt: 'image-3',
  },
  {
    src: '/images/services/construction-work/image-4.webp',
    alt: 'image-4',
  },
  {
    src: '/images/services/construction-work/image-5.webp',
    alt: 'image-5',
  }
]

const glassAndAluminumImages = [
  {
    src: '/images/services/glass-and-aluminum/glass1.webp',
    alt: 'glass-1',
  },
  {
    src: '/images/services/glass-and-aluminum/glass2.webp',
    alt: 'glass-2',
  },
  {
    src: '/images/services/glass-and-aluminum/glass3.webp',
    alt: 'glass-3',
  },
  {
    src: '/images/services/glass-and-aluminum/glass4.webp',
    alt: 'glass-4',
  },
  {
    src: '/images/services/glass-and-aluminum/glass5.webp',
    alt: 'glass-5',
  },
  {
    src: '/images/services/glass-and-aluminum/glass6.webp',
    alt: 'glass-6',
  },
]

const railingsFencingGateImages = [
  { src: '/images/services/railings-fencing-gate/gate1.webp', alt: 'gate-1' },
  { src: '/images/services/railings-fencing-gate/railings1.webp', alt: 'railings-1' },
  { src: '/images/services/railings-fencing-gate/fencing1.webp', alt: 'fencing-1' },
  { src: '/images/services/railings-fencing-gate/railings2.webp', alt: 'railings-2' },
  { src: '/images/services/railings-fencing-gate/railings3.webp', alt: 'railings-3' },
]

const modularCabinetsImages = [
  { src: '/images/services/modular-cabinets/cabinet1.webp', alt: 'cabinet-1' },
  { src: '/images/services/modular-cabinets/cabinet2.webp', alt: 'cabinet-2' },
  { src: '/images/services/modular-cabinets/cabinet3.webp', alt: 'cabinet-3' },
]

// Swiper modules
const modules = [Navigation]

// Page metadata
useHead({
  title: 'Services | RV Rioflorido',
  meta: [
    {
      name: 'description',
      content:
        'Explore our comprehensive range of services designed to elevate your living spaces and elevate your lifestyle.',
    },
  ],
})
</script>

<style scoped></style>
