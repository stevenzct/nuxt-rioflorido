<template>
    <div>
         <!-- footer -->
    <footer class="h-full md:h-96 bg-[#252324]">
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
            <h3>
              <NuxtLink to="/"
                class="relative group text-white font-neue-montreal font-normal text-[29px] md:text-[40px] leading-[150%] "
                aria-current="page">
                Home
                <span :class="[
                  'bg-white',
                  'absolute bottom-0 left-0 w-full h-[2px] transform scale-x-0 origin-bottom-right transition-transform duration-200 ease-out group-hover:scale-x-100 group-hover:origin-bottom-left'
                ]">
                </span>

              </NuxtLink>

            </h3>

            <h3>
              <NuxtLink to="/"
                class="relative group text-white font-neue-montreal font-normal text-[29px]  md:text-[40px] leading-[150%]">Projects

                <span :class="[
                  'bg-white',
                  'absolute bottom-0 left-0 w-full h-[2px] transform scale-x-0 origin-bottom-right transition-transform duration-200 ease-out group-hover:scale-x-100 group-hover:origin-bottom-left'
                ]">
                </span>

              </NuxtLink>
            </h3>

            <h3>
              <NuxtLink to="/"
                class="relative group text-white font-neue-montreal font-normal text-[29px]  md:text-[40px] leading-[150%]">Services

                <span :class="[
                  'bg-white',
                  'absolute bottom-0 left-0 w-full h-[2px] transform scale-x-0 origin-bottom-right transition-transform duration-200 ease-out group-hover:scale-x-100 group-hover:origin-bottom-left'
                ]">
                </span>

              </NuxtLink>
            </h3>

            <h3>
              <NuxtLink to="/"
                class="relative group text-white font-neue-montreal font-normal text-[29px]  md:text-[40px] leading-[150%]"> About

                <span :class="[
                  'bg-white',
                  'absolute bottom-0 left-0 w-full h-[2px] transform scale-x-0 origin-bottom-right transition-transform duration-200 ease-out group-hover:scale-x-100 group-hover:origin-bottom-left'
                ]">
                </span>
              </NuxtLink>
            </h3>

          </div>


        </div>


        <div class="block lg:flex justify-start items-end flex-col px-4 py-4 lg:py-0 bg-[#252324]">

          <div class="pb-4 lg:pb-0">
            <button type="button"
              class="text-white font-neue-montreal font-bold h-[55px] rounded-[4px] text-[16px] md:w-[200px] bg-[#252324] border border-gray-400 px-8  md:my-6 transition ease-out duration-300 hover:bg-white hover:text-gray-900">
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