<template>
  <div>
    <!-- hero section  -->
    <section id="hero-section" class="h-screen">
      <div class="h-full w-full flex flex-col items-end justify-end" id="container-text">
        <div class="w-full">
          <div class="max-w-screen-2xl mx-auto px-4 py-8">
            <h1
              class="tracking-wide text-white text-4xl md:text-7xl font-neue-montreal font-bold leading-[100%] lg:leading-[94%]">
              Excellence in Every Structure
            </h1>
          </div>
          <div class="w-auto border-b border-[#F3F4F654]"></div>
        </div>
        <div class="w-full">
          <div class="max-w-screen-2xl mx-auto px-4 py-8 grid lg:grid-cols-2 sm:grid-cols-1 lg:flex justify-between">
            <p class="font-neue-montreal font-normal text-white pb-2 w-auto lg:w-[980px] text-[20px] md:text-[24px]">
              We provide general construction services, including structural, architectural, plumbing, and electrical work. Our services also include signed and sealed design plans, building permit processing, glass and aluminum works such as railings, fencing, and gates, as well as stainless steel works, modular cabinets, and repair or renovation works.
            </p>

            <button type="button" @click="scrollToServices"
              class="font-neue-montreal font-bold h-[55px] rounded-[4px] text-gray-900 text-[16px] bg-white border border-gray-400 px-8 py-3.5 my-4 md:w-[200px] transition ease-out duration-300 hover:bg-gray-900 hover:text-white">
              Scroll
            </button>
          </div>
        </div>
      </div>
    </section>

    <!-- services swiper -->
    <!-- Add 'gallery' class to enable BaguetteBox -->
    <section id="services-section" ref="servicesSection" class="bg-[#F5F9FC]">
      <div class="h-auto w-full py-16 lg:py-32">
        <div class="max-w-screen-2xl mx-auto px-4">
          <h1 class="font-neue-montreal font-bold text-4xl md:text-7xl text-gray-900">
            Construction Work
          </h1>
          <p class="font-neue-montreal font-normal text-gray-900 w-auto md:w-[706px] text-[20px] md:text-[24px]">
            Our seasoned professionals specialize in delivering excellence
            across Structural, Architectural, Plumbing, Electrical, and
            Mechanical Works.
          </p>
        </div>

        <div class="gallery max-w-screen-2xl mx-auto px-4 py-8 lg:pt-16">
          <swiper :slidesPerView="1" :spaceBetween="20" :navigation="{
            nextEl: '.construction-next',
            prevEl: '.construction-prev',
          }" :pagination="{ clickable: true }" :breakpoints="breakpoints" :modules="modules"
            class="mySwiper flex justify-between">
            <!-- swiper slide 1 -->
            <swiper-slide>
              <div class="max-w-full bg-white rounded-lg">
                <a href="/images/services/construction-work/image-1.webp">
                  <img class="rounded-lg" src="/images/services/construction-work/image-1.webp" alt="image-1" />
                </a>
              </div>
            </swiper-slide>

            <!-- swiper slide 2 -->
            <swiper-slide>
              <div class="max-w-full bg-white rounded-lg">
                <a href="/images/services/construction-work/image-2.webp">
                  <img class="rounded-lg" src="/images/services/construction-work/image-2.webp" alt="image-2" />
                </a>
              </div>
            </swiper-slide>

            <!-- swiper slide 3 -->
            <swiper-slide>
              <div class="max-w-full bg-white rounded-lg">
                <a href="/images/services/construction-work/image-3.webp">
                  <img class="rounded-lg" src="/images/services/construction-work/image-3.webp" alt="image-3" />
                </a>
              </div>
            </swiper-slide>
          </swiper>
        </div>

        <div class="max-w-screen-2xl mx-auto py-2 lg:py-8 px-4 lg:hidden">
          <div class="flex justify-end gap-2">
            <button
              class="text-black bg-white font-medium rounded-full text-lg p-4 text-center inline-flex items-center construction-prev">
              <!-- SVG Icon -->
              <svg class="w-6 h-6" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none"
                viewBox="0 0 14 10">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1"
                  d="M13 5H1m0 0L5 1m-4 4L5 9" />
              </svg>
              <span class="sr-only">Icon description</span>
            </button>

            <button
              class="text-black bg-white font-medium rounded-full text-lg p-4 text-center inline-flex items-center construction-next">
              <!-- SVG Icon -->
              <svg class="w-6 h-6" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none"
                viewBox="0 0 14 10">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1"
                  d="M1 5h12m0 0L9 1m4 4L9 9" />
              </svg>
              <span class="sr-only">Icon description</span>
            </button>
          </div>
        </div>

        <!-- design plans signed and seal -->
        <div class="max-w-screen-2xl mx-auto px-4 pt-8 lg:pt-32">
          <h1 class="font-neue-montreal font-bold text-4xl md:text-7xl text-gray-900">
            Design plans signed and sealed
          </h1>
          <p class="font-neue-montreal font-normal text-gray-900 w-auto md:w-[706px] text-[20px] md:text-[24px]">
            Seamless, Professionally Certified Designs for Your Building Project
            (Full sets)
          </p>
        </div>

        <div class="max-w-screen-2xl mx-auto px-4 py-8 lg:pt-16">
          <div class="gallery max-w-full bg-white rounded-lg">
            <a href="/images/services/design-plans/design1.webp">
              <img class="rounded-lg" src="/images/services/design-plans/design1.webp" alt="image-design-plans" />
            </a>
          </div>
        </div>

        <!-- glass and aluminum works -->
        <div class="max-w-screen-2xl mx-auto px-4 pt-8 lg:pt-32">
          <h1 class="font-neue-montreal font-bold text-4xl md:text-7xl text-gray-900">
            Glass and Aluminum Works
          </h1>
          <p class="font-neue-montreal font-normal text-gray-900 w-auto md:w-[706px] text-[20px] md:text-[24px]">
            Expertly Tailored Glass and Aluminum Installations for Elegant
            Railings, Fencing, Windows, Doors and Gates.
          </p>
        </div>

        <!-- swiper goes here -->
        <div class="gallery max-w-screen-2xl mx-auto px-4 py-8 lg:pt-16">
          <swiper :slidesPerView="1" :spaceBetween="20" :navigation="{ nextEl: '.glass-next', prevEl: '.glass-prev' }"
            :pagination="{ clickable: true }" :breakpoints="breakpoints" :modules="modules"
            class="mySwiper flex justify-between">
            <!-- swiper slide 1 -->
            <swiper-slide>
              <div class="max-w-full bg-white rounded-lg">
                <a href="/images/services/glass-and-aluminum/glass1.webp">
                  <img class="rounded-lg" src="/images/services/glass-and-aluminum/glass1.webp" alt="glass-1" />
                </a>
              </div>
            </swiper-slide>

            <!-- swiper slide 2 -->
            <swiper-slide>
              <div class="max-w-full bg-white rounded-lg">
                <a href="/images/services/glass-and-aluminum/glass2.webp">
                  <img class="rounded-lg" src="/images/services/glass-and-aluminum/glass2.webp" alt="glass-2" />
                </a>
              </div>
            </swiper-slide>

            <!-- swiper slide 3 -->
            <swiper-slide>
              <div class="max-w-full bg-white rounded-lg">
                <a href="/images/services/glass-and-aluminum/glass3.webp">
                  <img class="rounded-lg" src="/images/services/glass-and-aluminum/glass3.webp" alt="glass-3" />
                </a>
              </div>
            </swiper-slide>

            <!-- swiper slide 4 -->
            <swiper-slide>
              <div class="max-w-full bg-white rounded-lg">
                <a href="/images/services/glass-and-aluminum/glass4.webp">
                  <img class="rounded-lg" src="/images/services/glass-and-aluminum/glass4.webp" alt="glass-4" />
                </a>
              </div>
            </swiper-slide>

            <!-- swiper slide 5 -->
            <swiper-slide>
              <div class="max-w-full bg-white rounded-lg">
                <a href="/images/services/glass-and-aluminum/glass5.webp">
                  <img class="rounded-lg" src="/images/services/glass-and-aluminum/glass5.webp" alt="glass-5" />
                </a>
              </div>
            </swiper-slide>
            <!-- swiper slide 6 -->
            <swiper-slide>
              <div class="max-w-full bg-white rounded-lg">
                <a href="/images/services/glass-and-aluminum/glass6.webp">
                  <img class="rounded-lg" src="/images/services/glass-and-aluminum/glass6.webp" alt="glass-6" />
                </a>
              </div>
            </swiper-slide>
          </swiper>
        </div>

        <!-- button swiper -->
        <div class="max-w-screen-2xl mx-auto py-2 lg:py-8 px-4">
          <div class="flex justify-end gap-2">
            <button
              class="text-black bg-white font-medium rounded-full text-lg p-4 text-center inline-flex items-center glass-prev">
              <!-- SVG Icon -->
              <svg class="w-6 h-6" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none"
                viewBox="0 0 14 10">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1"
                  d="M13 5H1m0 0L5 1m-4 4L5 9" />
              </svg>
              <span class="sr-only">Icon description</span>
            </button>

            <button
              class="text-black bg-white font-medium rounded-full text-lg p-4 text-center inline-flex items-center glass-next">
              <!-- SVG Icon -->
              <svg class="w-6 h-6" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none"
                viewBox="0 0 14 10">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1"
                  d="M1 5h12m0 0L9 1m4 4L9 9" />
              </svg>
              <span class="sr-only">Icon description</span>
            </button>
          </div>
        </div>

        <!-- windows -->
        <div class="max-w-screen-2xl mx-auto px-4 pt-8 lg:pt-32">
          <div class="grid grid-cols-1 lg:grid-cols-2 lg:flex justify-between">
            <div>
              <h1 class="font-neue-montreal font-bold text-4xl md:text-7xl text-gray-900">
                Aluminum Series
              </h1>
              <p class="font-neue-montreal font-normal text-gray-900 w-auto md:w-[706px] text-[20px] md:text-[24px]">
                Expertly crafted windows designed to meet the specific needs and
                vision of your construction project
              </p>
            </div>

            <div>
              <NuxtLink to="/windows2">
                <button type="button" id="explore-projects"
                  class="text-gray-900 font-neue-montreal font-bold h-[55px] rounded-[4px] text-[16px] md:w-[200px] bg-white border border-gray-400 px-8 my-3 md:my-6 transition ease-out duration-300 hover:bg-gray-900 hover:text-white">
                  View All
                </button>
              </NuxtLink>
            </div>
          </div>
        </div>

        <!--image for aluminum series -->
        <div class="max-w-screen-2xl mx-auto px-4 py-8 lg:pt-16 flex justify-center">
          <div class="gallery w-auto rounded-lg">
            <a href="/images/services/aluminum-series/aluminum-series.webp">
              <img class="rounded-lg" src="/images/services/aluminum-series/aluminum-series.webp"
                alt="image-aluminum-series" />
            </a>
          </div>
        </div>

        <!-- Railings, Fencing and Gate-->
        <div class="max-w-screen-2xl mx-auto px-4 pt-8 lg:pt-16">
          <h1 class="font-neue-montreal font-bold text-4xl md:text-7xl text-gray-900">
            Railings, Fencing and Gate
          </h1>
          <p class="font-neue-montreal font-normal text-gray-900 w-auto md:w-[706px] text-[20px] md:text-[24px]">
            Experience Superior Design and Durability with Our Custom Railings,
            Fencing, and Gates
          </p>
        </div>

        <!-- swiper goes here -->
        <div class="gallery max-w-screen-2xl mx-auto px-4 py-8 lg:pt-16">
          <swiper :slidesPerView="1" :spaceBetween="20"
            :navigation="{ nextEl: '.railings-next', prevEl: '.railings-prev' }" :pagination="{ clickable: true }"
            :breakpoints="breakpoints" :modules="modules" class="mySwiper flex justify-between">
            <!-- swiper slide 1 -->
            <swiper-slide>
              <div class="max-w-full bg-white rounded-lg">
                <a href="/images/services/railings-fencing-gate/gate1.webp">
                  <img class="rounded-lg" src="/images/services/railings-fencing-gate/gate1.webp" alt="gate-1" />
                </a>
              </div>
            </swiper-slide>

            <!-- swiper slide 2 -->
            <swiper-slide>
              <div class="max-w-full bg-white rounded-lg">
                <a href="/images/services/railings-fencing-gate/railings1.webp">
                  <img class="rounded-lg" src="/images/services/railings-fencing-gate/railings1.webp"
                    alt="railings-1" />
                </a>
              </div>
            </swiper-slide>

            <!-- swiper slide 3 -->
            <swiper-slide>
              <div class="max-w-full bg-white rounded-lg">
                <a href="/images/services/railings-fencing-gate/fencing1.webp">
                  <img class="rounded-lg" src="/images/services/railings-fencing-gate/fencing1.webp" alt="fencing-1" />
                </a>
              </div>
            </swiper-slide>

            <!-- swiper slide 4 -->
            <swiper-slide>
              <div class="max-w-full bg-white rounded-lg">
                <a href="/images/services/railings-fencing-gate/railings2.webp">
                  <img class="rounded-lg" src="/images/services/railings-fencing-gate/railings2.webp"
                    alt="railings-2" />
                </a>
              </div>
            </swiper-slide>

            <!-- swiper slide 5 -->
            <swiper-slide>
              <div class="max-w-full bg-white rounded-lg">
                <a href="/images/services/railings-fencing-gate/railings3.webp">
                  <img class="rounded-lg" src="/images/services/railings-fencing-gate/railings3.webp"
                    alt="railings-3" />
                </a>
              </div>
            </swiper-slide>
          </swiper>
        </div>

        <!-- button swiper -->
        <div class="max-w-screen-2xl mx-auto py-2 lg:py-8 px-4">
          <div class="flex justify-end gap-2">
            <button
              class="text-black bg-white font-medium rounded-full text-lg p-4 text-center inline-flex items-center railings-prev">
              <!-- SVG Icon -->
              <svg class="w-6 h-6" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none"
                viewBox="0 0 14 10">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1"
                  d="M13 5H1m0 0L5 1m-4 4L5 9" />
              </svg>
              <span class="sr-only">Icon description</span>
            </button>

            <button
              class="text-black bg-white font-medium rounded-full text-lg p-4 text-center inline-flex items-center railings-next">
              <!-- SVG Icon -->
              <svg class="w-6 h-6" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none"
                viewBox="0 0 14 10">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1"
                  d="M1 5h12m0 0L9 1m4 4L9 9" />
              </svg>
              <span class="sr-only">Icon description</span>
            </button>
          </div>
        </div>

        <!-- cabinets -->
        <div class="max-w-screen-2xl mx-auto px-4 pt-8 lg:pt-16">
          <h1 class="font-neue-montreal font-bold text-4xl md:text-7xl text-gray-900">
            Modular Cabinets
          </h1>
          <p class="font-neue-montreal font-normal text-gray-900 w-auto md:w-[706px] text-[20px] md:text-[24px]">
            Expertly crafted to deliver durability, functionality, and seamless
            design solutions for any space
          </p>
        </div>

        <!-- swiper goes here -->
        <div class="gallery max-w-screen-2xl mx-auto px-4 py-8 lg:pt-16">
          <swiper :slidesPerView="1" :spaceBetween="20"
            :navigation="{ nextEl: '.cabinet-next', prevEl: '.cabinet-prev' }" :pagination="{ clickable: true }"
            :breakpoints="breakpoints" :modules="modules" class="mySwiper flex justify-between">
            <!-- swiper slide 1 -->
            <swiper-slide>
              <div class="max-w-full bg-white rounded-lg">
                <a href="/images/services/modular-cabinets/cabinet1.webp">
                  <img class="rounded-lg" src="/images/services/modular-cabinets/cabinet1.webp" alt="cabinet-1" />
                </a>
              </div>
            </swiper-slide>

            <!-- swiper slide 2 -->
            <swiper-slide>
              <div class="max-w-full bg-white rounded-lg">
                <a href="/images/services/modular-cabinets/cabinet2.webp">
                  <img class="rounded-lg" src="/images/services/modular-cabinets/cabinet2.webp" alt="cabinet-2" />
                </a>
              </div>
            </swiper-slide>

            <!-- swiper slide 3 -->
            <swiper-slide>
              <div class="max-w-full bg-white rounded-lg">
                <a href="/images/services/modular-cabinets/cabinet3.webp">
                  <img class="rounded-lg" src="/images/services/modular-cabinets/cabinet3.webp" alt="cabinet-3" />
                </a>
              </div>
            </swiper-slide>
          </swiper>
        </div>

        <!-- button swiper -->
        <div class="max-w-screen-2xl mx-auto py-2 lg:py-8 px-4 lg:hidden">
          <div class="flex justify-end gap-2">
            <button
              class="text-black bg-white font-medium rounded-full text-lg p-4 text-center inline-flex items-center cabinet-prev">
              <!-- SVG Icon -->
              <svg class="w-6 h-6" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none"
                viewBox="0 0 14 10">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1"
                  d="M13 5H1m0 0L5 1m-4 4L5 9" />
              </svg>
              <span class="sr-only">Icon description</span>
            </button>

            <button
              class="text-black bg-white font-medium rounded-full text-lg p-4 text-center inline-flex items-center cabinet-next">
              <!-- SVG Icon -->
              <svg class="w-6 h-6" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none"
                viewBox="0 0 14 10">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1"
                  d="M1 5h12m0 0L9 1m4 4L9 9" />
              </svg>
              <span class="sr-only">Icon description</span>
            </button>
          </div>
        </div>


      </div>
    </section>
  </div>
</template>

<script>
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import { Navigation } from "swiper/modules";
import { ref } from "vue";
// Define the component
export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  data() {
    return {};
  },
  setup() {
    // Declare references and methods
    const servicesSection = ref(null);

    // Scroll to Projects section
    const scrollToServices = () => {
      if (servicesSection.value) {
        servicesSection.value.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    };
    // Swiper breakpoints setup
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
    };

    // Return the data that needs to be used in the template
    return {
      servicesSection,
      scrollToServices,
      breakpoints,
      modules: [Navigation],
    };
  },
};
</script>

<style scoped>
#hero-section {
  /* background-image: url("../assets/images/services/hero-services.webp"); */
  overflow: hidden;
  background:
    linear-gradient(180deg, rgba(0, 0, 0, 0.20) 15.94%, rgba(0, 0, 0, 0.00) 48.14%),
    linear-gradient(180deg, rgba(0, 0, 0, 0.00) 43.11%, rgba(0, 0, 0, 0.20) 68.98%, rgba(0, 0, 0, 0.20) 100%),
    linear-gradient(180deg, rgba(0, 0, 0, 0.00) 57.63%, rgba(0, 0, 0, 0.20) 70.1%),
    linear-gradient(219deg, rgba(0, 0, 0, 0.00) 44.54%, rgba(0, 0, 0, 0.20) 89.98%),
    linear-gradient(212deg, rgba(0, 0, 0, 0.00) 47.21%, rgba(0, 0, 0, 0.20) 89.01%),
    linear-gradient(180deg, rgba(0, 0, 0, 0.00) 59.79%, rgba(0, 0, 0, 0.20) 77.9%),
    url("../assets/images/services/hero-services.webp");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: 50%;
}
@media (max-width: 990px) {
  #hero-section{
    background:
    linear-gradient(180deg, rgba(0, 0, 0, 0.20) 104.94%, rgba(0, 0, 0, 0.00) 48.14%),
    linear-gradient(180deg, rgba(0, 0, 0, 0.00) 9.11%, rgba(0, 0, 0, 0.20) 68.98%, rgba(0, 0, 0, 0.20) 100%),
    linear-gradient(180deg, rgba(0, 0, 0, 0.00) 19.63%, rgba(0, 0, 0, 0.20) 70.1%),
    linear-gradient(219deg, rgba(0, 0, 0, 0.00) 10.54%, rgba(0, 0, 0, 0.20) 89.98%),
    linear-gradient(212deg, rgba(0, 0, 0, 0.00) 22.21%, rgba(0, 0, 0, 0.20) 89.01%),
    linear-gradient(180deg, rgba(0, 0, 0, 0.00) 2%, rgba(0, 0, 0, 0.20) 77.9%),
    url("../assets/images/services/hero-services.webp");
    background-position: 50%
  }
}
</style>
