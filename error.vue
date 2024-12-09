<template>
  <div>
    <section id="hero-section" class="h-screen">
      <div class="h-full w-full" id="container-text">
        <div class="w-full">
          <div class="max-w-screen-2xl mx-auto px-4 pt-60">
            <div class="flex justify-center">
              <img src="/images/404-error/kawaii-cat.gif" alt="sad-cat" class="md:w-64 h-auto" />
            </div>

            <h1
              class="tracking-wide text-center pt-4 pb-2 text-gray-900 text-4xl md:text-7xl font-neue-montreal font-bold leading-[100%] lg:leading-[94%]"
            >
              Error {{ error.statusCode }} !
            </h1>

            <p
              class="text-center  font-neue-montreal font-normal text-gray-700 md:text-[24px]"
            >
              Oops! The page you're looking for <br> can't be found.
              <!-- Check if error.message exists -->
              {{ error.message }}
            </p>

            <div class="flex justify-center py-4">
              <NuxtLink to="/">
                <button
                  type="button"
                  class="font-neue-montreal font-bold h-[55px] rounded-[4px] text-gray-900 text-[16px] bg-white border border-gray-400 px-8 transition ease-out duration-300 hover:bg-gray-900 hover:text-white"
                  @click="handleClearError"
                >
                  Back to Home
                </button>
              </NuxtLink>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
defineProps(["error"]);

const handleClearError = () => clearError({ redirect: "/" });
</script>

<style scoped>
#hero-section {
  /* Uncomment and update the background image path as needed */
  background-color: #f5efe1;
  overflow: hidden;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: 50%;
}
</style>
