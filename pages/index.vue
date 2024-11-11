<template>
  <div class="overflow-hidden bg-white">
    <!-- hero section  -->
    <section id="hero-section" class="h-screen">
      <div class="h-full w-full flex flex-col items-end justify-end" id="container-text">
        <div class="w-full">
          <div class="max-w-screen-2xl mx-auto px-4 py-8 sm:py-3">
            <h1
              class="text-white text-[30px] sm:text-[37px] md:text-[70px] lg:text-[90px] font-neue-montreal font-bold  leading-[94%]"
              id="h1-headline">
              Design, Build, Construct
            </h1>
          </div>
  
          <div class="w-auto border-b border-gray-100" id="line-hero"></div>
        </div>
  
        <div class="w-full">
          <div class="max-w-screen-2xl mx-auto px-4 py-8 grid lg:grid-cols-2 sm:grid-cols-1 lg:flex justify-between">
            <p class="font-neue-montreal font-normal text-white pb-2 w-auto md:w-[706px] text-[20px] md:text-[24px] ">
              Your Dream Home Starts Here: Comprehensive Construction Solutions
              by Expert Civil Engineers.
            </p>
  
            <button type="button"
              class="font-neue-montreal font-bold h-[55px] rounded-[4px] text-gray-900 text-[16px] bg-white border border-gray-400 px-8 py-3.5 my-4 md:w-[200px] transition ease-out duration-300 hover:bg-gray-900 hover:text-white">
              Explore Projects
            </button>
          </div>
        </div>
      </div>
    </section>
  
    <!-- intro section  -->
    <section id="intro-section" class="h-96 md:h-screen">
      <div class="h-96 md:h-full w-full flex items-center justify-center" id="container-intro">
        <div class="max-w-screen-2xl mx-auto px-4">
          <h1 class="font-neue-montreal font-bold leading-[137%] indent-0 md:indent-[200px]  text-gray-900 text-start text-[24px] md:text-[48px]" id="intro-text">
            RV Rioflorido Construction is an all-in-one contractor for general
            construction, dedicated to providing quality, safe, and reliable
            services as quickly as possible. Construction is more than just our
            business - it is who we are.
          </h1>
        </div>
      </div>
    </section>
  
    <!-- projects section -->
    <section id="projects-section" class=" ">
  
      <div class="h-full w-full">
        <div
          class="max-w-screen-2xl mx-auto px-4 py-4 pt-10 md:py-16 grid lg:grid-cols-2 sm:grid-cols-1 lg:flex justify-between">
          <h1 class="font-neue-montreal font-bold leading-[137%] text-4xl md:text-7xl text-gray-900">
            Our Projects
          </h1>
  
          <button type="button" id="explore-projects"
          
            class="text-gray-900 font-neue-montreal font-bold h-[55px] rounded-[4px] text-[16px] md:w-[200px] bg-white border border-gray-400 px-8 my-3 md:my-6 transition ease-out duration-300 hover:bg-gray-900 hover:text-white">
            View All
          </button>
        </div>
  
  
  
        <div class="max-w-screen-2xl px-4 2xl:px-0 mx-auto  flex justify-between">
          <swiper :slidesPerView="1" :spaceBetween="20" :navigation="{
                                                  nextEl: '.next-test',
                                                  prevEl: '.prev-test',
                                                  }" :pagination="{
                                                              clickable: true,
                                                              }" :breakpoints="breakpoints" :modules="modules"
            class="mySwiper">
            <!-- swiper slide 1 -->
            <swiper-slide class="">
              <div class="max-w-md bg-white rounded-lg">
                <a href="#">
                  <img class="rounded-t-lg"
                    src="../assets/images/all-images/buildings/Lucena, Rances Residence/IMG_E0210 (1).webp" alt="" />
                </a>
                <div class="p-4 md:p-8 pb-12 md:pb-14">
                  <div class="inline-flex items-center">
                    <div class="my-auto">
                      <span class="material-icons">location_on</span> <!-- Classic Material Icon -->
                    </div>
                    <h5
                      class=" ms-2 mb-2 text-2xl font-bold  text-gray-900 dark:text-white font-neue-montreal text-[24px] leading-[122%]">
                      Lucena City
                    </h5>
                  </div>
  
                  <p class="mb-3 font-neue-montreal font-normal text-gray-700 dark:text-gray-400">
                    Two (2) Storey Residential Building with 408 sqm floor area and 5-bedrooms.
                  </p>
  
                  <div class="flex items-start">
                    <p class="my-auto font-neue-montreal font-normal ">
                      Rances Residence
                    </p>
                    <button type="button" 
                      class=" font-neue-montreal font-bold rounded-[4px]  ms-auto text-gray-900 bg-white border border-gray-400 px-8 py-3.5 transition ease-out duration-300 hover:bg-gray-900 hover:text-white  ">
                      View Project
                    </button>
                  </div>
  
                </div>
              </div>
            </swiper-slide>
  
            <!-- swiper slide 2 -->
            <swiper-slide class="">
              <div class="max-w-md bg-white rounded-lg">
                <a href="#">
                  <img class="rounded-t-lg"
                    src="../assets/images/all-images/buildings/Nueva Vizcaya Project - Commercial Building/1688207351599-01 (2).webp"
                    alt="" />
                </a>
                <div class="p-4 md:p-8 pb-12 md:pb-14">
                  <div class="inline-flex items-center">
                    <div class="my-auto">
                      <span class="material-icons">location_on</span> <!-- Classic Material Icon -->
                    </div>
                    <h5
                      class="  ms-2 mb-2 text-2xl font-bold  text-gray-900 dark:text-white font-neue-montreal text-[24px] leading-[122%]">
                      Nueva Vizcaya
                    </h5>
                  </div>
  
                  <p class="mb-3 font-neue-montreal font-normal text-gray-700 dark:text-gray-400">
                    Five (5) Units, Two (2) Storey Commercial Building with 187 sqm total floor area.
                  </p>
  
                  <div class="flex items-start">
                    <p class="my-auto font-neue-montreal font-normal">
                      Commercial Building
                    </p>
                    <button type="button"
                      class="font-neue-montreal font-bold rounded-[4px] ms-auto text-gray-900   bg-white border border-gray-400 px-8 py-3.5 transition ease-out duration-300 hover:bg-gray-900 hover:text-white">
                      View Project
                    </button>
                  </div>
  
                </div>
              </div>
            </swiper-slide>
  
            <!-- swiper slide 3 -->
            <swiper-slide class="">
              <div class=" max-w-md bg-white rounded-lg">
                <a href="#">
                  <img class="rounded-t-lg"
                    src="../assets/images/all-images/buildings/Quezon City Project - Sir Manny Apartment/1704532065427.webp"
                    alt="" />
                </a>
                <div class="p-4 md:p-8 pb-12 md:pb-14">
                  <div class="inline-flex items-center">
                    <div class="my-auto">
                      <span class="material-icons">location_on</span> <!-- Classic Material Icon -->
                    </div>
                    <h5
                      class=" ms-2 mb-2 text-2xl font-bold  text-gray-900 dark:text-white font-neue-montreal text-[24px] leading-[122%]">
                      Quezon City
                    </h5>
                  </div>
  
                  <p class="mb-3 font-neue-montreal font-normal text-gray-700 dark:text-gray-400">
                    Two (2) Storey Residential/Apartment Building with 95 sqm floor area and 4-bedrooms.
                  </p>
  
                  <div class="flex items-start">
                    <p class="my-auto font-neue-montreal font-normal">
                      Manny Apartment
                    </p>
                    <button type="button"
                      class="font-neue-montreal font-bold rounded-[4px] ms-auto text-gray-900 bg-white border border-gray-400 px-8 py-3.5 transition ease-out duration-300 hover:bg-gray-900 hover:text-white">
                      View Project
                    </button>
                  </div>
  
                </div>
              </div>
            </swiper-slide>
  
            <!-- ----------------------------------- -->
            <!-- swiper slide 4 -->
            <swiper-slide class="">
              <div class="max-w-md bg-white rounded-lg">
                <a href="#">
                  <img class="rounded-t-lg"
                    src="../assets/images/all-images/buildings/Lucena City Project - Joel _ Arlyn Residence/IMG_E7836.webp"
                    alt="" />
                </a>
                <div class="p-4 md:p-8 pb-12 md:pb-14">
                  <div class="inline-flex items-center">
                    <div class="my-auto">
                      <span class="material-icons">location_on</span> <!-- Classic Material Icon -->
                    </div>
                    <h5
                      class="  ms-2 mb-2 text-2xl font-bold  text-gray-900 dark:text-white font-neue-montreal text-[24px] leading-[122%]">
                      Lucena City
                    </h5>
                  </div>
  
                  <p class="mb-3 font-neue-montreal font-normal text-gray-700 dark:text-gray-400">
                    Two (2) Storey Residential/Apartment Building with 170 sqm floor area and 4-units.
                  </p>
  
                  <div class="flex items-start">
                    <p class="my-auto font-neue-montreal font-normal">
                      Joel Residence
                    </p>
                    <button type="button"
                      class="font-neue-montreal font-bold rounded-[4px] ms-auto text-gray-900 bg-white  border border-gray-400 px-8 py-3.5 transition ease-out duration-300 hover:bg-gray-900 hover:text-white">
                      View Project
                    </button>
                  </div>
  
                </div>
              </div>
            </swiper-slide>
  
            <!-- swiper slide 5 -->
            <swiper-slide class="">
              <div class="max-w-md bg-white rounded-lg">
                <a href="#">
                  <img class="rounded-t-lg"
                    src="../assets/images/all-images/buildings/Lucena City Project - Sadia Residence/IMG_E7855.webp"
                    alt="" />
                </a>
                <div class="p-4 md:p-8 pb-12 md:pb-14">
                  <div class="inline-flex items-center">
                    <div class="my-auto">
                      <span class="material-icons">location_on</span> <!-- Classic Material Icon -->
                    </div>
                    <h5
                      class="  ms-2 mb-2 text-2xl font-bold  text-gray-900 dark:text-white font-neue-montreal text-[24px] leading-[122%]">
                      Lucena City
                    </h5>
                  </div>
  
                  <p class="font-neue-montreal mb-3 font-normal text-gray-700 dark:text-gray-400">
                    Two (2) Storey Residential Building with 128 sqm floor area and 3-bedrooms.
                  </p>
  
                  <div class="flex items-start">
                    <p class="my-auto font-neue-montreal font-normal">
                      Sadia Residence
                    </p>
                    <button type="button"
                      class="font-neue-montreal font-bold rounded-[4px]  ms-auto text-gray-900 bg-white border border-gray-400 px-8 py-3.5 transition ease-out duration-300 hover:bg-gray-900 hover:text-white">
                      View Project
                    </button>
                  </div>
  
                </div>
              </div>
            </swiper-slide>
  
            <!-- swiper slide 6 -->
            <swiper-slide class="">
              <div class=" max-w-md bg-white rounded-lg">
                <a href="#">
                  <img class="rounded-t-lg"
                    src="../assets/images/all-images/buildings/Lucena, Tamayo Residence/IMG_E7835.webp" alt="" />
                </a>
                <div class="p-4 md:p-8 pb-12 md:pb-14">
                  <div class="inline-flex items-center">
                    <div class="my-auto">
                      <span class="material-icons">location_on</span> <!-- Classic Material Icon -->
                    </div>
                    <h5
                      class="font-neue-montreal ms-2 mb-2 text-2xl font-bold  text-gray-900 dark:text-white font-neue-montreal text-[24px] leading-[122%]">
                      Quezon City
                    </h5>
                  </div>
  
                  <p class="font-neue-montreal mb-3 font-normal text-gray-700 dark:text-gray-400">
                    Two (2) Storey Residential/Apartment Building with 95 sqm floor area and 4-bedrooms.
                  </p>
  
                  <div class="flex items-start">
                    <p class="my-auto font-neue-montreal font-normal">
                      Rances Residence
                    </p>
                    <button type="button" 
                      class="font-neue-montreal font-bold rounded-[4px] ms-auto text-gray-900 bg-white border border-gray-400 px-8 py-3.5 transition ease-out duration-300 hover:bg-gray-900 hover:text-white">
                      View Project
                    </button>
                  </div>
  
                </div>
              </div>
            </swiper-slide>
          </swiper>
        </div>
        <div class="max-w-screen-2xl mx-auto py-4 md:py-12 px-4 ">
          <div class="flex justify-end gap-2">
            <button
              class="text-black bg-white font-medium rounded-full text-lg p-4 text-center inline-flex items-center prev-test">
              <!-- SVG Icon -->
              <svg class="w-6 h-6" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1"
                  d="M13 5H1m0 0L5 1m-4 4L5 9" />
              </svg>
              <span class="sr-only">Icon description</span>
            </button>
  
            <button
              class="text-black bg-white font-medium rounded-full text-lg p-4 text-center inline-flex items-center  next-test">
              <!-- SVG Icon -->
              <svg class="w-6 h-6" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1"
                  d="M1 5h12m0 0L9 1m4 4L9 9" />
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
        <div class="max-w-screen-2xl mx-auto px-4 py-4 pt-10 md:py-16">
          <h1 class="font-neue-montreal font-bold text-4xl md:text-7xl py-4 lg:py-16 text-gray-900 leading-[150%] tracking-wide ">
            Our Experts
          </h1>
  
          <div class="grid grid-cols-1 md:grid-cols-2 max-w-screen-2xl gap-x-20 mx-auto pb-8">
            <div class="">
              <img src="../assets/images/all-images/buildings/About Us/Group 463.webp" class="object-fill rounded-md"
                alt="about-us-img">
            </div>
  
            <div>
              <h3 class="font-neue-montreal font-bold text-gray-900 text-start text-[24px] lg:text-[40px] py-4 md:py-0 leading-[137%]">
                Our team led by seasoned civil engineers, excels in planning, design, construction and more. We
                specialized in crafting homes with enduring quality and personalized excellence.
              </h3>
              <button type="button"
                class="text-gray-900 font-neue-montreal font-bold h-[55px] rounded-[4px] text-[16px] md:w-[200px] bg-white border border-gray-400 px-8  md:my-6 transition ease-out duration-300 hover:bg-gray-900 hover:text-white">
                More about us
              </button>
            </div>
  
            <div>
  
            </div>
          </div>
        </div>
      </div>
    </section>
  
    <!-- get in touch -->
    <section id="get-in-touch" class="h-96 md:h-screen">
      <div class="h-96 md:h-full w-full flex flex-col justify-center items-start">
  
        <div class="max-w-screen-2xl mx-auto px-4 py-4 pt-10 md:py-16 pb-8">
  
          <h1 class="font-neue-montreal font-bold text-4xl md:text-7xl text-start  py-4 text-gray-900 leading-[94%] tracking-wide" >
            Your Home, Our Expertise
          </h1>
  
          <h3 class="font-neue-montreal font-[600] leading-[137%] text-gray-900 text-start text-[24px]  md:text-[40px] xs:w-auto lg:w-4/5 py-4 md:py-0"
            id="h3-subheadline-years">
            Elevate Your Projects with Precision, Reliability, and a Proven Track Record of Seven Years in Construction
            Excellence.
          </h3>
  
          <button type="button"
            class="text-gray-900 font-neue-montreal font-bold h-[55px] rounded-[4px] text-[16px] md:w-[200px] bg-white border border-gray-400 px-8  md:my-6 transition ease-out duration-300 hover:bg-gray-900 hover:text-white">
            Get in touch
          </button>
  
        </div>
      </div>
    </section>
  
    <!-- footer -->
    <footer id="footer" class="h-full md:h-96 bg-[#252324]">
      <div class="grid lg:grid-cols-3 grid-cols-1 justify-between max-w-screen-2xl mx-auto py-8 ">
        <div class=" px-4  bg-[#252324] w-auto py-4 ">
  
          <!-- image logo -->
          <NuxtLink to="/" class="flex items-center space-x-3 py-4 rtl:space-x-reverse">
            <img src="/assets/images/logo/RV.png" class="logo" alt="RV Logo" />
          </NuxtLink>
  
          <!-- socials links -->
  
          <button
            class="mr-4 group bg-[#252324] hover:bg-white border border-gray-9d rounded-full  p-4 text-center inline-flex items-center transition-all duration-300 ease-in-out">
            <!-- SVG Icon -->
            <a href="#"
              class="inline-flex items-center justify-center group-hover:text-black text-white transition-colors duration-300 ease-in-out">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"
                class="w-4 h-4 fill-current group-hover:text-black">
                <path
                  d="M512 256C512 114.6 397.4 0 256 0S0 114.6 0 256C0 376 82.7 476.8 194.2 504.5V334.2H141.4V256h52.8V222.3c0-87.1 39.4-127.5 125-127.5c16.2 0 44.2 3.2 55.7 6.4V172c-6-.6-16.5-1-29.6-1c-42 0-58.2 15.9-58.2 57.2V256h83.6l-14.4 78.2H287V510.1C413.8 494.8 512 386.9 512 256h0z" />
              </svg>
            </a>
            <span class="sr-only">Facebook Icon</span>
          </button>
  
          <button
            class="mr-4 group bg-[#252324] hover:bg-white border border-gray-9d rounded-full p-4 text-center inline-flex items-center transition-all duration-300 ease-in-out">
            <!-- SVG Icon (Instagram-like) -->
            <a href="#"
              class="inline-flex items-center justify-center group-hover:text-black text-white transition-colors duration-300 ease-in-out">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"
                class="w-4 h-4 fill-current group-hover:text-black">
                <path
                  d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" />
              </svg>
            </a>
            <span class="sr-only">Instagram Icon</span>
          </button>
  
          <button
            class="mr-4 group bg-[#252324] hover:bg-white border border-gray-9d rounded-full p-4 text-center inline-flex items-center transition-all duration-300 ease-in-out">
            <!-- SVG Icon (Email) -->
            <a href="#"
              class="inline-flex items-center justify-center group-hover:text-black text-white transition-colors duration-300 ease-in-out">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"
                class="w-4 h-4 fill-current group-hover:text-black">
                <path
                  d="M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48L48 64zM0 176L0 384c0 35.3 28.7 64 64 64l384 0c35.3 0 64-28.7 64-64l0-208L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z" />
              </svg>
            </a>
            <span class="sr-only">Email Icon</span>
          </button>
  
          <button
            class="mr-4 group bg-[#252324] hover:bg-white border border-gray-9d rounded-full p-4 text-center inline-flex items-center transition-all duration-300 ease-in-out">
            <!-- SVG Icon (Phone Contact) -->
            <a href="#"
              class="inline-flex items-center justify-center group-hover:text-black text-white transition-colors duration-300 ease-in-out">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"
                class="w-4 h-4 fill-current group-hover:text-black">
                <path
                  d="M164.9 24.6c-7.7-18.6-28-28.5-47.4-23.2l-88 24C12.1 30.2 0 46 0 64C0 311.4 200.6 512 448 512c18 0 33.8-12.1 38.6-29.5l24-88c5.3-19.4-4.6-39.7-23.2-47.4l-96-40c-16.3-6.8-35.2-2.1-46.3 11.6L304.7 368C234.3 334.7 177.3 277.7 144 207.3L193.3 167c13.7-11.2 18.4-30 11.6-46.3l-40-96z" />
              </svg>
            </a>
            <span class="sr-only">Phone Icon</span>
          </button>
  
          <!-- subheadline -->
          <h6 class="text-white font-neue-montreal text-[18px] font-normal leading-[138%] w-auto lg:w-96 py-4">
            Committed to Your Success, We Strive to Engineer Solutions Tailored Exclusively for You
          </h6>
  
  
        </div>
  
  
        <div class="block lg:flex flex-col  justify-center items-center px-4 py-auto lg:py-4  bg-[#252324]">
  
          <div class="text-start ">
            <h3 class="text-white font-neue-montreal font-normal text-[29px]  md:text-[40px] leading-[150%]">
              Home
            </h3>
  
            <h3 class="text-white font-neue-montreal font-normal text-[29px]  md:text-[40px] leading-[150%]">
              Projects
            </h3>
  
            <h3 class="text-white font-neue-montreal font-normal  text-[29px]  md:text-[40px] leading-[150%]">
              Services
            </h3>
  
            <h3 class="text-white font-neue-montreal font-normal text-[29px]  md:text-[40px] leading-[150%] ">
              About
            </h3>
          </div>
  
  
        </div>
  
  
        <div class="block lg:flex justify-start items-end flex-col px-4 py-4 lg:py-0 bg-[#252324]">
  
          <div class="pb-4 lg:pb-0">
            <button type="button"
              class="text-white font-neue-montreal font-bold h-[55px] rounded-[4px] text-[16px] md:w-[200px] bg-black border border-gray-400 px-8  md:my-6 transition ease-out duration-300 hover:bg-white hover:text-gray-900">
              Get in touch
            </button>
          </div>
  
          <p class="text-[#8B8B8B] font-neue-montreal font-normal text-[14px] ">
            2024 Rioflorido. All rights reserved.
          </p>
  
          <p class="text-[#8B8B8B] font-neue-montreal font-normal text-[14px]">
            Privacy Policy
          </p>
        </div>
  
  
  
  
  
      </div>
  
  
    </footer>
  
  
  </div>
</template>

<script>
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from "swiper/vue";
import 'swiper/css';

import { Navigation } from "swiper/modules";


// Import Swiper styles
// import "swiper/css/pagination";

// import "./style.css";

// Import required modules
// import { Pagination } from "swiper/modules";

export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    return {
      modules: [Navigation],
    };
  },
  data() {
    return {
      breakpoints: {
        '640': {
          slidesPerView: 2,
          // spaceBetween: 20,
        },
        '768': {
          slidesPerView: 2,
          // spaceBetween: 40,
        },
        '1024': {
          slidesPerView: 3,
          // spaceBetween: 50,
        },
      }
    }
  }
};
</script>

<style scoped>
#line-hero {
  border-color: rgb(243 244 246 / 33%);
}




.swiper-slide {
  display: flex;
  align-items: center;
  justify-content: center;
}



#h3-subheadline-years {
  /* font-family: "Neue Montreal";
  font-style: normal;
  font-weight: 400;
  line-height: 138%; */
  /* 40.02px */

}

#hero-section {
  /* background-image: url("../assets/images/home/1-landing.webp"); */
  background: linear-gradient(180deg,
      rgba(0, 0, 0, 0) 49.71%,
      rgba(0, 0, 0, 0.2) 61.73%),
    linear-gradient(0deg,
      var(--gradient-home, rgba(0, 0, 0, 0.2)) 0%,
      var(--gradient-home, rgba(0, 0, 0, 0.2)) 100%),
    linear-gradient(0deg,
      var(--gradient-home2, rgba(0, 0, 0, 0)) 0%,
      var(--gradient-home2, rgba(0, 0, 0, 0)) 100%),
    url("../assets/images/home/1-landing.webp") lightgray -0.587px -555.735px / 100% 210.526% no-repeat;
  overflow: hidden;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: 50%;
}

#h1-headline {
  /* font-family: "Neue Montreal";
  font-style: normal;
  font-weight: 500;
  line-height: 109%;
  text-transform: capitalize; */
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
  background-color: #F5F9FC;
}

#h3-our-team {
  /* font-family: "Neue Montreal";
  font-style: normal;
  font-weight: 500;
  line-height: 137%; */
}



@media screen and (max-width: 556px) {


  #intro-text {
    text-indent: 0;
    text-align: justify;
  }
}
</style>
