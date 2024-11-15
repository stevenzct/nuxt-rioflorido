<template>
  <div class="">
    <!-- Hero Section -->
    <section id="contact-hero" class="h-[300px] lg:h-[494px]">
      <div class="h-full w-full flex flex-col justify-end">
        <div class="max-w-screen-2xl mx-auto px-4 py-8 w-full">
          <div class="text-left">
            <h1
              class="lg:py-8 text-black text-[30px] sm:text-[37px] md:text-[50px] lg:text-[90px] font-neue-montreal font-bold leading-[1.09]"
            >
              Here is how to get in touch with us.
            </h1>
          </div>
        </div>
      </div>
    </section>

    <!-- form section -->
    <section id="forms-section" class="h-auto">
      <div class="h-full w-full">
        <div class="max-w-screen-2xl px-4 mx-auto py-10 lg:py-16">
          <form class="max-w-screen-2xl mx-auto">
            <!-- name -->
            <div class="w-full lg:w-10/12">
              <div class="relative mb-5 group py-3">
                <input
                  type="text"
                  name="floating_first_name"
                  id="floating_first_name"
                  class="font-neue-montreal font-normal leading-[94%] text-[28px] md:text-[38px] block py-2 lg:py-6 px-0 w-full text-sm text-gray-700 bg-transparent border-0 border-b-[3px] md:border-b-4 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                  placeholder=" "
                  required
                />

                <label
                  for="floating_first_name"
                  class="font-neue-montreal font-bold leading-[94%] text-[28px] md:text-[48px] text-black absolute duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >
                  Your name
                </label>
              </div>

              <!-- email -->
              <div class="relative mb-5 group py-3">
                <input
                  type="email"
                  name="floating_email"
                  id="floating_email"
                  class="font-neue-montreal font-normal leading-[94%] text-[28px] md:text-[38px] block py-2 lg:py-6 px-0 w-full text-sm text-gray-700 bg-transparent border-0 border-b-[3px] md:border-b-4 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                  placeholder=" "
                  required
                />

                <label
                  for="floating_email"
                  class="font-neue-montreal font-bold leading-[94%] text-[28px] md:text-[48px] text-black absolute duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >
                  Your Email
                </label>
              </div>

              <!-- Tell us the project -->
              <div class="">
                <div class="relative mb-5 group py-3">
                  <input
                    type="text"
                    name="project_name"
                    id="project_name"
                    class="font-neue-montreal font-normal leading-[94%] text-[28px] md:text-[38px] block py-2 lg:py-6 px-0 w-full text-sm text-gray-700 bg-transparent border-0 border-b-[3px] md:border-b-4 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                    placeholder=" "
                    required
                  />

                  <label
                    for="project_name"
                    class="font-neue-montreal font-bold leading-[94%] text-[28px] md:text-[48px] text-black absolute duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                  >
                    Tell us the project
                  </label>
                </div>
              </div>

              <div class="flex justify-end">
                <button
                  type="submit"
                  class="font-neue-montreal font-bold h-[55px] rounded-[4px] text-gray-900 text-[16px] bg-white border border-gray-400 px-8 py-3.5 my-4 md:w-[200px] transition ease-out duration-300 hover:bg-gray-900 hover:text-white"
                >
                  Send message
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>

    <!-- contacts section -->
    <section id="contacts-section" class="h-auto bg-[#F5F9FC]">
      <div class="h-full w-full">
        <!-- links contact -->
        <div
          class="max-w-screen-2xl mx-auto px-4 py-16 w-full grid grid-cols-1 lg:grid-cols-3 gap-8"
        >
          <!-- phone contacts -->
          <div>
            <p
              class="font-neue-montreal font-normal text-[18px] text-[#494949]"
            >
              Call us
            </p>

            <hr />
            <p class="font-neue-montreal font-bold text-[24px] md:text-[32px]">
              <a class="relative group" href="tel:+63427108762">042 710 8762 Telephone
                <span
                  :class="[
                    'bg-black',
                    'absolute bottom-0 left-0 w-full h-[1px] transform scale-x-0 origin-bottom-right transition-transform duration-200 ease-out group-hover:scale-x-100 group-hover:origin-bottom-left',
                  ]"
                >
                </span>
              </a>
            </p>

            <p class="font-neue-montreal font-bold text-[24px] md:text-[32px]">
              <a class="relative group" href="tel:+639171441538">0917-144-1538 Globe
                <span
                  :class="[
                    'bg-black',
                    'absolute bottom-0 left-0 w-full h-[1px] transform scale-x-0 origin-bottom-right transition-transform duration-200 ease-out group-hover:scale-x-100 group-hover:origin-bottom-left',
                  ]"
                >
                </span>
              </a>
            </p>

            <p class="font-neue-montreal font-bold text-[24px] md:text-[32px]">
              <a class="relative group" href="tel:+639696012447">0969-601-2447 Smart
                <span
                  :class="[
                    'bg-black',
                    'absolute bottom-0 left-0 w-full h-[1px] transform scale-x-0 origin-bottom-right transition-transform duration-200 ease-out group-hover:scale-x-100 group-hover:origin-bottom-left',
                  ]"
                >
                </span>
              </a>
            </p>

            <p
              class="font-neue-montreal font-normal text-[16px] text-[#696969]"
            >
              If you prefer to talk in person
            </p>
          </div>

          <!-- email -->
          <div>
            <p
              class="font-neue-montreal font-normal text-[18px] text-[#494949]"
            >
              Send a text
            </p>

            <hr />
            <p class="font-neue-montreal font-bold text-[24px] md:text-[32px]">
              <a
                href="mailto:rv.riocon@gmail.com"
                class="relative group"
                aria-label="Email RV Rioflorido Construction"
              >
                rv.riocon@gmail.com

                <span
                  :class="[
                    'bg-black',
                    'absolute bottom-0 left-0 w-full h-[1px] transform scale-x-0 origin-bottom-right transition-transform duration-200 ease-out group-hover:scale-x-100 group-hover:origin-bottom-left',
                  ]"
                >
                </span>
              </a>
            </p>

            <p
              class="font-neue-montreal font-normal text-[16px] text-[#696969]"
            >
              Tell us all about the project
            </p>
          </div>

          <!-- social  -->
          <div>
            <p
              class="font-neue-montreal font-normal text-[18px] text-[#494949]"
            >
              Follow us on social media
            </p>

            <hr />
            <p class="font-neue-montreal font-bold text-[24px] md:text-[32px]">
              <a
                class="relative group"
                href="https://www.facebook.com/profile.php?id=100083308930581"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit our Facebook page"
              >
                Facebook

                <span
                  :class="[
                    'bg-black',
                    'absolute bottom-0 left-0 w-full h-[1px] transform scale-x-0 origin-bottom-right transition-transform duration-200 ease-out group-hover:scale-x-100 group-hover:origin-bottom-left',
                  ]"
                >
                </span>
              </a>
            </p>

            <p
              class="font-neue-montreal font-normal text-[16px] text-[#696969]"
            >
              If you want to keep updated
            </p>
          </div>
        </div>

        <!-- google maps -->
        <div
          class="max-w-screen-2xl mx-auto px-4 py-8 lg:py-16 lg:pb-32 w-full"
        >
          <h1
            class="py-4 lg:py-8 text-black text-[30px] sm:text-[37px] md:text-[50px] lg:text-[90px] font-neue-montreal font-bold leading-[1.09]"
          >
            Come to visit us
          </h1>

          <div
            class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-32"
          >
            <div class="col-auto lg:col-span-2">
              <!-- lg:w-[800px]  lg:h-[600px]-->
              <div
                class="rounded-[8px] border border-[#AFAFAF] w-auto h-auto lg:h-[600px]"
              >
                <iframe
                  class="w-full h-full rounded-[8px]"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d59289.13798008383!2d121.53447561174838!3d13.96195652884703!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x338ec621225f0f6f%3A0x500a1b2099ef52f5!2s1!5e1!3m2!1sen!2sph!4v1731546977870!5m2!1sen!2sph&zoom=19"
                  style="border: 0"
                  allowfullscreen=""
                  loading="lazy"
                  referrerpolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>

            <div
              class="lg:flex lg:flex-col lg:items-start lg:justify-center lg:content-start"
            >
              <h3
                class="font-neue-montreal font-bold text-gray-900 text-start text-[24px] lg:text-[40px] leading-[137%]"
              >
                Office Address
              </h3>

              <p
                class="font-neue-montreal font-normal text-[18px] text-[#494949]"
              >
                Maharlika Highway, Lucena City
              </p>

              <button
                type="button"
                class="font-neue-montreal font-bold h-[55px] rounded-[4px] text-gray-900 text-[16px] bg-white border border-gray-400 px-8 py-3.5 my-4 md:w-[240px] transition ease-out duration-300 hover:bg-gray-900 hover:text-white"
              >
                Find us on Google Maps
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup></script>

<style scoped>
#contact-hero {
  background: url(../assets/images/projects/abstract-hero.webp) lightgray 0px -50.902px /
    100% 437.247% no-repeat;
  overflow: hidden;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: 100%;
}
</style>
