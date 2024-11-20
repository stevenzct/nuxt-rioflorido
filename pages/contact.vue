<template>
  <div class="">
    <!-- Hero Section -->
    <section id="contact-hero" class="h-[300px] lg:h-[494px]">
      <div class="h-full w-full flex flex-col justify-end">
        <div class="max-w-screen-2xl mx-auto px-4 py-8 w-full">
          <div class="text-left">
            <h1
              class="lg:py-8 text-black text-4xl md:text-7xl lg:text-8xl font-neue-montreal font-bold "
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
                  class="font-neue-montreal font-normal leading-[94%] text-[28px] md:text-[38px] block py-2 lg:py-6 px-0 w-full text-sm text-gray-700 bg-transparent border-0 border-b-[3px] md:border-b-4 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-black focus:outline-none focus:ring-0 focus:border-gray-600 peer"
                  placeholder=" "
                  required
                />

                <label
                  for="floating_first_name"
                  class="font-neue-montreal font-bold leading-[94%] text-[28px] md:text-[48px] text-black absolute duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-black peer-focus:dark:text-black peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
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
                  class="font-neue-montreal font-normal leading-[94%] text-[28px] md:text-[38px] block py-2 lg:py-6 px-0 w-full text-sm text-gray-700 bg-transparent border-0 border-b-[3px] md:border-b-4 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-black focus:outline-none focus:ring-0 focus:border-gray-600 peer"
                  placeholder=" "
                  required
                />

                <label
                  for="floating_email"
                  class="font-neue-montreal font-bold leading-[94%] text-[28px] md:text-[48px] text-black absolute duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-black peer-focus:dark:text-black peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
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
                    class="font-neue-montreal font-normal leading-[94%] text-[28px] md:text-[38px] block py-2 lg:py-6 px-0 w-full text-sm text-gray-700 bg-transparent border-0 border-b-[3px] md:border-b-4 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-black focus:outline-none focus:ring-0 focus:border-gray-600 peer"
                    placeholder=" "
                    required
                  />

                  <label
                    for="project_name"
                    class="font-neue-montreal font-bold leading-[94%] text-[28px] md:text-[48px] text-black absolute duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-black peer-focus:dark:text-black peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
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

       
      </div>
    </section>
  </div>
</template>

<script setup></script>

<style scoped>
#contact-hero {
  background: url(../assets/images/projects/abstract.webp);
    overflow: hidden;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: 100%;
}
</style>
