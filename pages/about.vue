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
              Designed by Engineers, Perfected for you
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
              With a foundation in civil engineering, we construct homes that
              are built to endure and designed to inspire.
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

    <!-- about section -->
    <section id="contacts-section" ref="contactsSection" class="h-auto bg-white">
      <div class="h-full w-full">
        <div class="max-w-screen-2xl mx-auto px-4 py-16 lg:py-32 w-full">
          <div class="grid grid-cols-1 md:grid-cols-2 gap-x-20">
            <div class="">
              <img
                src="../assets/images/all-images/buildings/About Us/Group 463.webp"
                class="object-fill rounded-md"
                alt="about-us-img"
              />
            </div>

            <div>
              <h1
                class="font-neue-montreal font-bold text-4xl md:text-7xl py-4 lg:py-0 pb-0 lg:pb-4 text-gray-900 leading-[150%] tracking-wide"
              >
                About us
              </h1>

              <h3
                class="font-neue-montreal font-bold text-gray-900 text-start text-[18px] lg:text-[40px] py-0 lg:py-4 md:py-0 leading-[137%]"
              >
                RV Rioflorido Construction was established on June 21, 2022, as
                a one-stop construction firm dedicated to providing economical
                and high-quality construction services in the fastest way
                possible. Engr. Rioflorido, the owner of this firm, together
                with his wife, also a civil engineer, has been gaining expertise
                since 2016. His passion for construction led to the creation of
                his own company.
              </h3>
            </div>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-2 gap-x-20 py-12 lg:py-32 gap-y-8">
            <div>
              <div
                class="block w-full p-8 lg:p-16 h-full lg:h-[400px] bg-white border border-gray-200 rounded-lg shadow hover:bg-[#F5F9FC] dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
              >
                <h3
                  class="mb-2 font-neue-montreal font-bold text-4xl md:text-[48px] text-gray-900 leading-[150%] tracking-wide"
                >
                  Our Mission
                </h3>
                <p class="font-neue-montreal  text-[18px]  md:text-[24px]  font-normal text-gray-700 dark:text-gray-400">
                  RV Rioflorido Construction is committed to providing
                  high-quality, safe, and reliable services through advanced and
                  innovative planning and building techniques, achieving
                  customers' satisfaction.
                </p>
              </div>
            </div>

            <div>
              <div
                class="block w-full p-8 lg:p-16 h-full  lg:h-[400px] bg-white border border-gray-200 rounded-lg shadow hover:bg-[#F5F9FC] dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
              >
                <h3
                  class="mb-2 font-neue-montreal font-bold text-4xl md:text-[48px] text-gray-900 leading-[150%] tracking-wide"
                >
                Our Vision
                </h3>
                <p class="font-neue-montreal  text-[18px]  md:text-[24px]  font-normal text-gray-700 dark:text-gray-400">
                    RV Rioflorido Construction aspires to become the best construction company in the Philippines, building not just structures but also improving the lives of every Filipino, providing jobs, and contributing to the country's economic development.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref } from 'vue';

// Reference to the contacts section
const contactsSection = ref(null);

// Method to scroll to the contacts section
const scrollToContacts = () => {
  if (contactsSection.value) {
    contactsSection.value.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  }
};
</script>

<style scoped>

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
    url("../assets/images/about/hero-about.webp") lightgray -0.587px -555.735px /
      100% 210.526% no-repeat;
  overflow: hidden;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: 50%;
}


</style>
