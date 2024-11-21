<template>
  <div>
    <!-- hero section  -->
    <section id="hero-section" class="h-screen">
      <div
        class="h-full w-full flex flex-col items-end justify-end"
        id="container-text"
      >
        <div class="w-full">
          <div class="max-w-screen-2xl mx-auto px-4 py-8">
            <h1
              class="tracking-wide text-white text-4xl md:text-7xl lg:text-8xl font-neue-montreal font-bold leading-[100%] lg:leading-[94%]"
            >
              Lucena City
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
              Five (5) Bedroom Two (2) Storey Residential House with 408 sqm
              total floor area. (Rances Residence)
            </p>

            <button
              type="button"
              @click="scrollToServices"
              class="font-neue-montreal font-bold h-[55px] rounded-[4px] text-gray-900 text-[16px] bg-white border border-gray-400 px-8 py-3.5 my-4 md:w-[200px] transition ease-out duration-300 hover:bg-gray-900 hover:text-white"
            >
              Scroll
            </button>
          </div>
        </div>
      </div>
    </section>

    <!-- image gallery -->
    <section id="image-gallery-section" ref="image-gallerySection">
      <div class="h-auto w-full py-16 lg:py-32">
        <div class="max-w-screen-2xl mx-auto px-4 ">
            
               <div class="grid grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-8">
                <img
                    class="rounded-lg"
                    src="../assets/images/all-images/buildings/Lucena, Rances Residence/rances1.webp"
                    alt="image-1"
                  />

                  <img
                    class="rounded-lg"
                    src="../assets/images/all-images/buildings/Lucena, Rances Residence/rances2.webp"
                    alt="image-1"
                  />

                  <img
                    class="rounded-lg"
                    src="../assets/images/all-images/buildings/Lucena, Rances Residence/rances3.webp"
                    alt="image-1"
                  />
               </div>

               <div class="grid grid-cols-2 lg:grid-cols-4 gap-4 py-4 lg:py-8 lg:gap-8">
                <img
                    class="rounded-lg"
                    src="../assets/images/all-images/buildings/Lucena, Rances Residence/rances4.webp"
                    alt="image-1"
                  />

                  <img
                    class="rounded-lg"
                    src="../assets/images/all-images/buildings/Lucena, Rances Residence/rances5.webp"
                    alt="image-1"
                  />

                  <img
                    class="rounded-lg"
                    src="../assets/images/all-images/buildings/Lucena, Rances Residence/rances6.webp"
                    alt="image-1"
                  />

                  <img
                    class="rounded-lg"
                    src="../assets/images/all-images/buildings/Lucena, Rances Residence/rances7.webp"
                    alt="image-1"
                  />
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
  background-image: url("../assets/images/all-images/buildings/Lucena, Rances Residence/Rances-residence1.webp");
  overflow: hidden;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: 50%;
}
</style>
