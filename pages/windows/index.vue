<template>
  <div>
    <section id="windows-hero" class="h-[300px] lg:h-[494px]">
      <div class="h-full w-full flex flex-col justify-end">
        <div class="max-w-screen-2xl mx-auto px-4 py-8 w-full">
          <div class="text-left">
            <h1
              class="lg:py-8 text-black text-4xl md:text-7xl lg:text-8xl font-neue-montreal font-bold"
            >
              Glass and Aluminum
            </h1>
          </div>
        </div>
      </div>
    </section>

    <!-- windows section -->
    <section class="h-auto">
      <div class="h-full w-full">
        <div class="max-w-screen-2xl px-4 mx-auto py-10 lg:py-16">
          <div class="w-full">
            <button
              type="button"
              data-drawer-target="default-sidebar"
              data-drawer-toggle="default-sidebar"
              aria-controls="default-sidebar"
              aria-hidden="true"
              class="font-neue-montreal font-bold h-[55px] rounded-[4px] md:hidden text-gray-900 text-[16px] bg-white border border-gray-400 my-4 w-full transition ease-out duration-300 hover:bg-gray-900 hover:text-white"
            >
              Select Series
            </button>
          </div>

          <div class="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            <div>
              <!-- sidenav -->
              <aside
                id="default-sidebar"
                class="fixed md:static top-0 left-0 md:top-auto md:left-auto z-40 w-72 lg:w-80 h-screen transition-transform -translate-x-full md:translate-x-0"
                aria-label="Sidebar"
              >
                <div
                  class="h-full px-3 py-8 overflow-y-auto bg-[#ffffff] dark:bg-gray-800 lg:rounded-md"
                >
                  <div>
                    <h2
                      class="ms-5 text-xl py-4 font-semibold whitespace-nowrap dark:text-white"
                    >
                      Select Series
                    </h2>
                    <!-- line -->
                    <hr class="pb-3 w-full" />
                  </div>

                  <!-- list series/ variant -->
                   <li>
                    
                   </li>
                </div>
              </aside>
            </div>

            <!-- gallery section -->
            <div class="lg:col-span-2">
              <h1
                class="font-neue-montreal font-bold text-[28px] md:text-4xl text-gray-900"
              >
                <!-- series here -->
              </h1>

              <p
                class="font-neue-montreal pb-6 font-normal text-gray-700 w-auto text-[20px] md:text-[24px]"
              >
                <!-- variant -->
              </p>

              <!-- images -->
              <div class="grid grid-cols-2 gap-4 lg:grid-cols-4 gallery"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup></script>

<style scoped>
#windows-hero {
  background: url(/images/projects/abstract.webp);
  overflow: hidden;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: 8%;
}
</style>
