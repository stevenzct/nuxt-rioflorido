<template>
  <div class="overflow-hidden bg-white">
    <!-- hero section  -->
    <section id="hero-section" class="h-screen">
      <div
        class="h-full w-full flex flex-col items-end justify-end"
        id="container-text"
      >
        <div class="w-full">
          <div class="max-w-screen-2xl mx-auto px-4 py-8">
            <h1
              class="text-white text-[30px] sm:text-[37px] md:text-[70px] lg:text-[90px] font-neue-montreal font-bold leading-[94%]"
            >
              Design, Build, Construct
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
              Your Dream Home Starts Here: Comprehensive Construction Solutions
              by Expert Civil Engineers.
            </p>

            <button
              type="button"
              @click="scrollToProjects"
              class="font-neue-montreal font-bold h-[55px] rounded-[4px] text-gray-900 text-[16px] bg-white border border-gray-400 px-8 py-3.5 my-4 md:w-[200px] transition ease-out duration-300 hover:bg-gray-900 hover:text-white"
            >
              Explore Projects
            </button>
          </div>
        </div>
      </div>
    </section>

    <!-- intro section  -->
    <section id="intro-section" class="h-96 md:h-screen">
      <div
        class="h-96 md:h-full w-full flex items-center justify-center"
        id="container-intro"
      >
        <div class="max-w-screen-2xl mx-auto px-4">
          <h1
            class="font-neue-montreal font-bold leading-[137%] indent-0 md:indent-[200px] text-gray-900 text-start text-[24px] md:text-[48px]"
            id="intro-text"
          >
            RV Rioflorido Construction is an all-in-one contractor for general
            construction, dedicated to providing quality, safe, and reliable
            services as quickly as possible. Construction is more than just our
            business - it is who we are.
          </h1>
        </div>
      </div>
    </section>

    <!-- projects section -->
    <section id="projects-section" ref="projectsSection"  class="h-auto">
      <div class="h-full w-full py-8 lg:py-16 ">
        <div
          class="max-w-screen-2xl mx-auto px-4 py-4 pt-10 md:py-16 grid lg:grid-cols-2 sm:grid-cols-1 lg:flex justify-between"
        >
          <h1
            class="font-neue-montreal font-bold leading-[137%] text-4xl md:text-7xl text-gray-900"
          >
            Our Projects
          </h1>

          <NuxtLink to="/projects">
            <button
              type="button"
              id="explore-projects"
              class="text-gray-900 font-neue-montreal font-bold h-[55px] rounded-[4px] text-[16px] md:w-[200px] bg-white border border-gray-400 px-8 my-3 md:my-6 transition ease-out duration-300 hover:bg-gray-900 hover:text-white"
            >
              View All
            </button>
          </NuxtLink>
        </div>

        <div
          class="max-w-screen-2xl px-4 mx-auto flex justify-between "
        >
          <swiper
            :slidesPerView="1"
            :spaceBetween="20"
            :navigation="{
              nextEl: '.next-project',
              prevEl: '.prev-project',
            }"
            :pagination="{
              clickable: true,
            }"
            :breakpoints="breakpoints"
            :modules="modules"
            class="mySwiper"
          >
            <!-- swiper slide 1 -->
            <swiper-slide class="">
              <div class="max-w-full bg-white rounded-lg">
                <a href="#">
                  <img
                    class="rounded-t-lg"
                    src="../assets/images/all-images/buildings/Lucena, Rances Residence/IMG_E0210 (1).webp"
                    alt=""
                  />
                </a>
                <div class="p-4 md:p-8 pb-12 md:pb-14">
                  <div class="inline-flex items-center">
                    <div class="my-auto">
                      <span class="material-icons">location_on</span>
                      <!-- Classic Material Icon -->
                    </div>
                    <h5
                      class="ms-2 mb-2 text-2xl font-bold text-gray-900 dark:text-white font-neue-montreal text-[24px] leading-[122%]"
                    >
                      Lucena City
                    </h5>
                  </div>

                  <p
                    class="mb-3 font-neue-montreal font-normal text-gray-700 dark:text-gray-400"
                  >
                    Two (2) Storey Residential Building with 408 sqm floor area
                    and 5-bedrooms.
                  </p>

                  <div class="flex items-start">
                    <p class="my-auto font-neue-montreal font-normal">
                      Rances Residence
                    </p>
                    <button
                      type="button"
                      class="font-neue-montreal font-bold rounded-[4px] ms-auto text-gray-900 bg-white border border-gray-400 px-8 py-3.5 transition ease-out duration-300 hover:bg-gray-900 hover:text-white"
                    >
                      View Project
                    </button>
                  </div>
                </div>
              </div>
            </swiper-slide>

            <!-- swiper slide 2 -->
            <swiper-slide class="">
              <div class="max-w-full bg-white rounded-lg">
                <a href="#">
                  <img
                    class="rounded-t-lg"
                    src="../assets/images/all-images/buildings/Nueva Vizcaya Project - Commercial Building/1688207351599-01 (2).webp"
                    alt=""
                  />
                </a>
                <div class="p-4 md:p-8 pb-12 md:pb-14">
                  <div class="inline-flex items-center">
                    <div class="my-auto">
                      <span class="material-icons">location_on</span>
                      <!-- Classic Material Icon -->
                    </div>
                    <h5
                      class="ms-2 mb-2 text-2xl font-bold text-gray-900 dark:text-white font-neue-montreal text-[24px] leading-[122%]"
                    >
                      Nueva Vizcaya
                    </h5>
                  </div>

                  <p
                    class="mb-3 font-neue-montreal font-normal text-gray-700 dark:text-gray-400"
                  >
                    Five (5) Units, Two (2) Storey Commercial Building with 187
                    sqm total floor area.
                  </p>

                  <div class="flex items-start">
                    <p class="my-auto font-neue-montreal font-normal">
                      Commercial Building
                    </p>
                    <button
                      type="button"
                      class="font-neue-montreal font-bold rounded-[4px] ms-auto text-gray-900 bg-white border border-gray-400 px-8 py-3.5 transition ease-out duration-300 hover:bg-gray-900 hover:text-white"
                    >
                      View Project
                    </button>
                  </div>
                </div>
              </div>
            </swiper-slide>

            <!-- swiper slide 3 -->
            <swiper-slide class="">
              <div class="max-w-full bg-white rounded-lg">
                <a href="#">
                  <img
                    class="rounded-t-lg"
                    src="../assets/images/all-images/buildings/Quezon City Project - Sir Manny Apartment/1704532065427.webp"
                    alt=""
                  />
                </a>
                <div class="p-4 md:p-8 pb-12 md:pb-14">
                  <div class="inline-flex items-center">
                    <div class="my-auto">
                      <span class="material-icons">location_on</span>
                      <!-- Classic Material Icon -->
                    </div>
                    <h5
                      class="ms-2 mb-2 text-2xl font-bold text-gray-900 dark:text-white font-neue-montreal text-[24px] leading-[122%]"
                    >
                      Quezon City
                    </h5>
                  </div>

                  <p
                    class="mb-3 font-neue-montreal font-normal text-gray-700 dark:text-gray-400"
                  >
                    Two (2) Storey Residential/Apartment Building with 95 sqm
                    floor area and 4-bedrooms.
                  </p>

                  <div class="flex items-start">
                    <p class="my-auto font-neue-montreal font-normal">
                      Manny Apartment
                    </p>
                    <button
                      type="button"
                      class="font-neue-montreal font-bold rounded-[4px] ms-auto text-gray-900 bg-white border border-gray-400 px-8 py-3.5 transition ease-out duration-300 hover:bg-gray-900 hover:text-white"
                    >
                      View Project
                    </button>
                  </div>
                </div>
              </div>
            </swiper-slide>

            <!-- ----------------------------------- -->
            <!-- swiper slide 4 -->
            <swiper-slide class="">
              <div class="max-w-full bg-white rounded-lg">
                <a href="#">
                  <img
                    class="rounded-t-lg"
                    src="../assets/images/all-images/buildings/Lucena City Project - Joel _ Arlyn Residence/IMG_E7836.webp"
                    alt=""
                  />
                </a>
                <div class="p-4 md:p-8 pb-12 md:pb-14">
                  <div class="inline-flex items-center">
                    <div class="my-auto">
                      <span class="material-icons">location_on</span>
                      <!-- Classic Material Icon -->
                    </div>
                    <h5
                      class="ms-2 mb-2 text-2xl font-bold text-gray-900 dark:text-white font-neue-montreal text-[24px] leading-[122%]"
                    >
                      Lucena City
                    </h5>
                  </div>

                  <p
                    class="mb-3 font-neue-montreal font-normal text-gray-700 dark:text-gray-400"
                  >
                    Two (2) Storey Residential/Apartment Building with 170 sqm
                    floor area and 4-units.
                  </p>

                  <div class="flex items-start">
                    <p class="my-auto font-neue-montreal font-normal">
                      Joel Residence
                    </p>
                    <button
                      type="button"
                      class="font-neue-montreal font-bold rounded-[4px] ms-auto text-gray-900 bg-white border border-gray-400 px-8 py-3.5 transition ease-out duration-300 hover:bg-gray-900 hover:text-white"
                    >
                      View Project
                    </button>
                  </div>
                </div>
              </div>
            </swiper-slide>

            <!-- swiper slide 5 -->
            <swiper-slide class="">
              <div class="max-w-full bg-white rounded-lg">
                <a href="#">
                  <img
                    class="rounded-t-lg"
                    src="../assets/images/all-images/buildings/Lucena City Project - Sadia Residence/IMG_E7855.webp"
                    alt=""
                  />
                </a>
                <div class="p-4 md:p-8 pb-12 md:pb-14">
                  <div class="inline-flex items-center">
                    <div class="my-auto">
                      <span class="material-icons">location_on</span>
                      <!-- Classic Material Icon -->
                    </div>
                    <h5
                      class="ms-2 mb-2 text-2xl font-bold text-gray-900 dark:text-white font-neue-montreal text-[24px] leading-[122%]"
                    >
                      Lucena City
                    </h5>
                  </div>

                  <p
                    class="font-neue-montreal mb-3 font-normal text-gray-700 dark:text-gray-400"
                  >
                    Two (2) Storey Residential Building with 128 sqm floor area
                    and 3-bedrooms.
                  </p>

                  <div class="flex items-start">
                    <p class="my-auto font-neue-montreal font-normal">
                      Sadia Residence
                    </p>
                    <button
                      type="button"
                      class="font-neue-montreal font-bold rounded-[4px] ms-auto text-gray-900 bg-white border border-gray-400 px-8 py-3.5 transition ease-out duration-300 hover:bg-gray-900 hover:text-white"
                    >
                      View Project
                    </button>
                  </div>
                </div>
              </div>
            </swiper-slide>

            <!-- swiper slide 6 -->
            <swiper-slide class="">
              <div class="max-w-full bg-white rounded-lg">
                <a href="#">
                  <img
                    class="rounded-t-lg"
                    src="../assets/images/all-images/buildings/Lucena, Tamayo Residence/IMG_E7835.webp"
                    alt=""
                  />
                </a>
                <div class="p-4 md:p-8 pb-12 md:pb-14">
                  <div class="inline-flex items-center">
                    <div class="my-auto">
                      <span class="material-icons">location_on</span>
                      <!-- Classic Material Icon -->
                    </div>
                    <h5
                      class="font-neue-montreal ms-2 mb-2 text-2xl font-bold text-gray-900 dark:text-white font-neue-montreal text-[24px] leading-[122%]"
                    >
                      Quezon City
                    </h5>
                  </div>

                  <p
                    class="font-neue-montreal mb-3 font-normal text-gray-700 dark:text-gray-400"
                  >
                    Two (2) Storey Residential/Apartment Building with 95 sqm
                    floor area and 4-bedrooms.
                  </p>

                  <div class="flex items-start">
                    <p class="my-auto font-neue-montreal font-normal">
                      Rances Residence
                    </p>
                    <button
                      type="button"
                      class="font-neue-montreal font-bold rounded-[4px] ms-auto text-gray-900 bg-white border border-gray-400 px-8 py-3.5 transition ease-out duration-300 hover:bg-gray-900 hover:text-white"
                    >
                      View Project
                    </button>
                  </div>
                </div>
              </div>
            </swiper-slide>
          </swiper>
        </div>
        <div class="max-w-screen-2xl mx-auto py-4 md:py-12 px-4">
          <div class="flex justify-end gap-2">
            <button
              class="text-black bg-white font-medium rounded-full text-lg p-4 text-center inline-flex items-center prev-project"
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
              class="text-black bg-white font-medium rounded-full text-lg p-4 text-center inline-flex items-center next-project"
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

    <!-- about us -->
    <section id="about-us" class="">
      <div class="h-full w-full">
        <div class="max-w-screen-2xl mx-auto px-4  pt-10 py-16">
          <h1
            class="font-neue-montreal font-bold text-4xl md:text-7xl py-4 lg:py-16 text-gray-900 leading-[150%] tracking-wide"
          >
            Our Experts
          </h1>

          <div
            class="grid grid-cols-1 md:grid-cols-2 max-w-screen-2xl gap-x-20 mx-auto pb-0 lg:pb-8"
          >
            <div class="">
              <img
                src="../assets/images/all-images/buildings/About Us/Group 463.webp"
                class="object-fill rounded-md"
                alt="about-us-img"
              />
            </div>

            <div>
              <h3
                class="font-neue-montreal font-bold text-gray-900 text-start text-[24px] lg:text-[40px] py-4 md:py-0 leading-[137%]"
              >
                Our team led by seasoned civil engineers, excels in planning,
                design, construction and more. We specialized in crafting homes
                with enduring quality and personalized excellence.
              </h3>
              <button
                type="button"
                class="text-gray-900 font-neue-montreal font-bold h-[55px] rounded-[4px] text-[16px] md:w-[200px] bg-white border border-gray-400 px-8 md:my-6 transition ease-out duration-300 hover:bg-gray-900 hover:text-white"
              >
                More about us
              </button>

             
            </div>

            <div></div>
          </div>
        </div>
      </div>
    </section>

    <!-- get in touch -->
    <section id="get-in-touch" class="h-auto md:h-screen py-8">
      <div
        class="h-96 md:h-full w-full flex flex-col justify-center items-start"
      >
        <div class="max-w-screen-2xl mx-auto px-4  py-16 ">
          <h1
            class="font-neue-montreal font-bold text-4xl md:text-7xl text-start py-0  text-gray-900  tracking-wide"
          >
            Your Home, Our Expertise
          </h1>

          <h3
            class="font-neue-montreal font-normal leading-[137%] text-gray-900 text-start text-[24px] md:text-[40px] xs:w-auto lg:w-4/5 py-4 "
            id="h3-subheadline-years"
          >
            Elevate Your Projects with Precision, Reliability, and a Proven
            Track Record of Seven Years in Construction Excellence.
          </h3>

          <NuxtLink to="/contact" class="w-full">
            <button
              type="button"
              class="text-gray-900 font-neue-montreal font-bold h-[55px] rounded-[4px] text-[16px] md:w-[200px] bg-white border border-gray-400 px-8 md:my-6 transition ease-out duration-300 hover:bg-gray-900 hover:text-white"
            >
              Get in touch
            </button>
          </NuxtLink>
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
import { ref } from 'vue';

// Define the component
export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    // Declare references and methods
    const projectsSection = ref(null);

    // Scroll to Projects section
    const scrollToProjects = () => {
      if (projectsSection.value) {
        projectsSection.value.scrollIntoView({
          behavior: 'smooth',
          block: 'start',
        });
      }
    };

    // Swiper breakpoints setup
    const breakpoints = {
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
      projectsSection,
      scrollToProjects,
      breakpoints,
      modules: [Navigation],
    };
  },
};
</script>

<style scoped>
.swiper-slide {
  display: flex;
  align-items: center;
  justify-content: center;
}

#hero-section {
  /* background-image: url("../assets/images/home/1-landing.webp"); */
  background:
    linear-gradient(180deg, rgba(0, 0, 0, 0) 49.71%, rgba(0, 0, 0, 0.2) 61.73%),
    linear-gradient(
      0deg,
      var(--gradient-home, rgba(0, 0, 0, 0.2)) 0%,
      var(--gradient-home, rgba(0, 0, 0, 0.2)) 100%
    ),
    linear-gradient(
      0deg,
      var(--gradient-home2, rgba(0, 0, 0, 0)) 0%,
      var(--gradient-home2, rgba(0, 0, 0, 0)) 100%
    ),
    url("../assets/images/home/watermark-landing.webp") lightgray -0.587px -555.735px /
      100% 210.526% no-repeat;
  overflow: hidden;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: 50%;
}

#intro-section {
  background-image: url("../assets/images/home/abstract-intro.webp");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: 50%;
}

#get-in-touch {
  background-image: url("../assets/images/home/abstract-get-in-touch.webp");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: 50%;
}

#projects-section {
  background-color: #f5f9fc;
}

@media screen and (max-width: 556px) {
  #intro-text {
    text-indent: 0;
    text-align: justify;
  }
}
</style>
