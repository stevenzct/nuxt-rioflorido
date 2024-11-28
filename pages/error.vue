<template>
    <div>
        <section id="hero-section" class="h-screen">
      <div
        class="h-full w-full flex flex-col items-end justify-end"
        id="container-text"
      >
        <div class="w-full">
          <div class="max-w-screen-2xl mx-auto px-4 py-8">
            <h1
              class="tracking-wide text-gray-900 text-4xl md:text-7xl font-neue-montreal font-bold leading-[100%] lg:leading-[94%]"
            >
              404 error page not found {{ error.statusCode }}
            </h1>
          </div>

          <div class="w-auto border-b border-[#19191954]"></div>
        </div>

        <div class="w-full">
          <div
            class="max-w-screen-2xl mx-auto px-4 py-8 grid lg:grid-cols-2 sm:grid-cols-1 lg:flex justify-between"
          >
            <p
              class="font-neue-montreal font-normal text-gray-900 pb-2 w-auto md:w-[706px] text-[20px] md:text-[24px]"
            >
            Oops! The page you're looking for can't be found. {{ error.nessage }}
            </p>

            <NuxtLink to="/">
              <button
              type="button"
              class="font-neue-montreal font-bold h-[55px] rounded-[4px] text-gray-900 text-[16px] bg-white border border-gray-400 px-8 py-3.5 my-4 md:w-[200px] transition ease-out duration-300 hover:bg-gray-900 hover:text-white"
            >
              Back to home
            </button>
            </NuxtLink>
           
          </div>
        </div>
      </div>
    </section>
    </div>
</template>

<script setup>
  defineProps([error])

</script>

<style scoped>
 #hero-section{
   /* background-image: url("../assets/images/home/1-landing.webp"); */
   background:
    url("/images/404-error/404-error.webp");
  overflow: hidden;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: 50%;
 }

</style>