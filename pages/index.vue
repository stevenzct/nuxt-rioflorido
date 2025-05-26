<template>
  <div class="overflow-hidden bg-white">
    <!-- hero section  -->
    <section id="hero-section" class="h-screen" loading="lazy">
      <div
        class="h-full w-full flex flex-col items-end justify-end"
        id="container-text"
      >
        <div class="w-full">
          <div class="max-w-screen-2xl mx-auto px-4 py-8">
            <h1
              class="text-white text-3xl md:text-7xl lg:text-8xl  font-neue-montreal font-bold"
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
              Your Dream Home Starts Here, Experienced Civil Engineers Delivering Complete Construction Solutions
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
          RV Rioflorido Construction is an all-in one contractor for general construction dedicated to providing quality, safe, and reliable services in the fastest way possible because construction is more than our business it is who we are.
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
              class="text-gray-900 font-neue-montreal font-bold h-[55px] rounded-[4px] text-[16px] w-full md:w-[200px] bg-white border border-gray-400 px-8 my-3 md:my-6 transition ease-out duration-300 hover:bg-gray-900 hover:text-white"
            >
              View All
            </button>
          </NuxtLink>
        </div>

        <div
          class="max-w-screen-2xl px-4 mx-auto "
        >
          <swiper
            :slidesPerView="3"
            :spaceBetween="32"
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
            <swiper-slide v-for="p in projects" :key="p.id">
              <ProjectCard :project="p" />
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
            Our Team
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
              <NuxtLink to="/about">
                <button
                type="button"
                class="text-gray-900 font-neue-montreal font-bold h-[55px] rounded-[4px] text-[16px] md:w-[200px] bg-white border border-gray-400 px-8 md:my-6 transition ease-out duration-300 hover:bg-gray-900 hover:text-white"
              >
                More about us
              </button>
              </NuxtLink>
              

             
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
              class="text-gray-900 font-neue-montreal font-bold h-[55px] rounded-[4px] text-[16px] md:w-[200px] bg-white border border-gray-400 px-8 md:my-4 transition ease-out duration-300 hover:bg-gray-900 hover:text-white"
            >
              Get in touch
            </button>
          </NuxtLink>
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
import ProjectCard from '~/components/ProjectCard.vue'

// references
const projectsSection = ref(null)

// fetch projects data
const { data: projects } = await useFetch('/api/projects')

// scroll to projects section method
const scrollToProjects = () => {
  if (projectsSection.value) {
    projectsSection.value.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    })
  }
}

// swiper breakpoints
const breakpoints = {
  100: { slidesPerView: 1 },
  360: { slidesPerView: 1 },
  640: { slidesPerView: 1 },
  768: { slidesPerView: 2 },
  1024: { slidesPerView: 3 },
}

// swiper modules to pass to component
const modules = [Navigation]
useHead({
  title: "Home | RV Rioflorido",
  meta: [
    {
      name: "description",
      content: "Welcome to RV Rioflorido, your premier destination for exceptional construction services. Explore our portfolio, learn about our team, and get in touch for your next project.",
    }
  ] 
})
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
  linear-gradient(180deg, rgba(0, 0, 0, 0.20) 15.94%, rgba(0, 0, 0, 0.00) 48.14%),
                        linear-gradient(180deg, rgba(0, 0, 0, 0.00) 43.11%, rgba(0, 0, 0, 0.20) 68.98%, rgba(0, 0, 0, 0.20) 100%),
                        linear-gradient(180deg, rgba(0, 0, 0, 0.00) 57.63%, rgba(0, 0, 0, 0.20) 70.1%),
                        linear-gradient(219deg, rgba(0, 0, 0, 0.00) 44.54%, rgba(0, 0, 0, 0.20) 89.98%),
                        linear-gradient(212deg, rgba(0, 0, 0, 0.00) 47.21%, rgba(0, 0, 0, 0.20) 89.01%),
                        linear-gradient(180deg, rgba(0, 0, 0, 0.00) 59.79%, rgba(0, 0, 0, 0.20) 77.9%),
                        url("../assets/images/home/hero1.webp");;


      
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
