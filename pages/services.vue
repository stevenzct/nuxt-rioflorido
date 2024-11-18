<template>
  <div class="">
    <!-- hero section  -->
    <section id="hero-section" class="h-screen">
      <div
        class="h-full w-full flex flex-col items-end justify-end"
        id="container-text"
      >
        <div class="w-full">
          <div class="max-w-screen-2xl mx-auto px-4 py-8">
            <h1
              class="tracking-wide text-white text-4xl md:text-7xl font-neue-montreal font-bold leading-[100%] lg:leading-[94%]"
            >
              Excellence in Every Structure
            </h1>
          </div>

          <div class="w-auto border-b border-[#F3F4F654]"></div>
        </div>

        <div class="w-full">
          <div
            class="max-w-screen-2xl mx-auto px-4 py-8 grid lg:grid-cols-2 sm:grid-cols-1 lg:flex justify-between"
          >
            <p
              class="font-neue-montreal font-normal text-white pb-2 w-auto md:w-[706px] text-[20px] md:text-[24px]"
            >
              Leveraging the expertise of experienced civil engineers, we
              deliver custom construction solutions that exceed industry
              standards.
            </p>

            <button
              type="button"
              @click="scrollToContacts"
              class="font-neue-montreal font-bold h-[55px] rounded-[4px] text-gray-900 text-[16px] bg-white border border-gray-400 px-8 py-3.5 my-4 md:w-[200px] transition ease-out duration-300 hover:bg-gray-900 hover:text-white"
            >
              Scroll
            </button>
          </div>
        </div>
      </div>
    </section>
    <!-- services swiper -->
    <section id="services-section" ref="servicesSection" class="bg-[#F5F9FC]">
      <div class="h-auto w-full py-16 lg:py-32">
        <div class="max-w-screen-2xl mx-auto px-4">
          <h1
            class="font-neue-montreal font-bold leading-[137%] text-4xl md:text-7xl text-gray-900"
          >
            Construction Work
          </h1>

          <p
            class="font-neue-montreal font-normal text-gray-900  w-auto md:w-[706px] text-[20px] md:text-[24px]"
          >
            Our seasoned professionals specialize in delivering excellence
            across Structural, Architectural, Plumbing, Electrical, and
            Mechanical Works.
          </p>
        </div>

        <div class="max-w-screen-2xl mx-auto px-4 pt-8 lg:pt-16 ">
          <swiper
            :slidesPerView="1"
            :spaceBetween="20"
            :navigation="{
              nextEl: '.next-test',
              prevEl: '.prev-test',
            }"
            :pagination="{
              clickable: true,
            }"
            :breakpoints="breakpoints"
            :modules="modules"
            class="mySwiper flex justify-between"
          >
            <!-- swiper slide 1 -->
            <swiper-slide class="">
              <div class="max-w-lg bg-white rounded-lg">
                <a href="#">
                  <img
                    class="rounded-lg"
                    src="../assets/images/services/construction-work/image-1.webp"
                    alt=""
                  />
                </a>
              </div>
            </swiper-slide>

            <!-- swiper slide 2 -->
            <swiper-slide class="">
              <div class="max-w-lg bg-white rounded-lg">
                <a href="#">
                  <img
                    class="rounded-lg"
                    src="../assets/images/services/construction-work/image-2.webp"
                    alt=""
                  />
                </a>
              </div>
            </swiper-slide>

            <!-- swiper slide 3 -->
            <swiper-slide class="">
              <div class="max-w-lg bg-white rounded-lg">
                <a href="#">
                  <img
                    class="rounded-lg"
                    src="../assets/images/services/construction-work/image-3.webp"
                    alt=""
                  />
                </a>
              </div>
            </swiper-slide>


          </swiper>
        </div>

        <!-- button swiper -->
        <div class="max-w-screen-2xl mx-auto py-8 px-4">
          <div class="flex justify-end gap-2">
            <button
              class="text-black bg-white font-medium rounded-full text-lg p-4 text-center inline-flex items-center prev-test"
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
              class="text-black bg-white font-medium rounded-full text-lg p-4 text-center inline-flex items-center next-test"
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

<script>
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import { Navigation } from "swiper/modules";

// Define the component
export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    // Swiper breakpoints setup
    const breakpoints = {

      // 360: {
      //   slidesPerView: 2,
      // },
      640: {
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
      breakpoints,
      modules: [Navigation],
    };
  },
};
</script>

<style scoped>
#hero-section {
  background-image: url("../assets/images/services/hero-services.webp");
  overflow: hidden;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: 50%;
}
</style>
