<template>
  <header>
    <nav
      :class="[
        'fixed w-full z-40 top-0 start-0',
        { 'bg-white': isScrolled || isScrolledY || isHeroWhite },
      ]"
      ref="nav"
    >
      <div class="max-w-screen-2xl flex flex-wrap items-center justify-between mx-auto p-4">
        <NuxtLink to="/" class="flex items-center space-x-3 rtl:space-x-reverse">
          <img src="/assets/images/logo/main-logo.svg" class="logo" alt="RV Logo" />
        </NuxtLink>
        <div class="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
          <NuxtLink to="/contact" class="inline-block" aria-label="Contact">
            <button
              type="button"
              id="get-in-touch"
              class="font-neue-montreal font-bold text-base w-48 h-14 rounded-[4px] px-8 py-3.5 transition ease-out duration-300"
              :class="[
                isScrolled || isScrolledY || isHeroWhite
                  ? 'text-gray-900 bg-white border border-gray-400 hover:bg-gray-900 hover:text-white'
                  : 'text-white border border-white',
              ]"
            >
              Get in Touch
            </button>
          </NuxtLink>
          <button
            @click.prevent.stop="toggleNavbar"
            type="button"
            class="transition ease-in-out delay-150 inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
            aria-controls="navbar-sticky"
            :aria-expanded="isNavbarOpen"
          >
            <span class="sr-only">Open main menu</span>
            <!-- Hamburger Icon (visible when navbar is closed) -->
            <svg
              v-if="!isNavbarOpen"
              class="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
            <!-- Close Icon (visible when navbar is open) -->
            <svg
              v-else
              class="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
        <div
          :class="[
            'items-center justify-between',
            isNavbarOpen ? 'flex' : 'hidden',
            'w-full md:flex md:w-auto md:order-1',
          ]"
          id="navbar-sticky"
        >
          <ul
            id="navbar-links"
            class="flex flex-col md:p-0 mt-4 font-neue-montreal font-normal md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0"
          >
            <li>
              <NuxtLink
                to="/"
                :class="[
                  isScrolled || isScrolledY || isHeroWhite ? 'text-black' : 'text-white',
                  'relative inline-block group',
                ]"
                @click="toggleNavbar"
                aria-current="page"
              >
                Home
                <span
                  :class="[
                    isScrolled || isScrolledY || isHeroWhite ? 'bg-black' : 'bg-white',
                    'absolute bottom-0 left-0 w-full h-[2px] transform scale-x-0 origin-bottom-right transition-transform duration-200 ease-out group-hover:scale-x-100 group-hover:origin-bottom-left',
                  ]"
                ></span>
              </NuxtLink>
            </li>
            <li>
              <NuxtLink
                to="/projects"
                :class="[
                  isScrolled || isScrolledY || isHeroWhite ? 'text-black' : 'text-white',
                  'relative inline-block group',
                ]"
                @click="toggleNavbar"
              >
                Projects
                <span
                  :class="[
                    isScrolled || isScrolledY || isHeroWhite ? 'bg-black' : 'bg-white',
                    'absolute bottom-0 left-0 w-full h-[2px] transform scale-x-0 origin-bottom-right transition-transform duration-200 ease-out group-hover:scale-x-100 group-hover:origin-bottom-left',
                  ]"
                ></span>
              </NuxtLink>
            </li>
            <li>
              <NuxtLink
                to="/services"
                :class="[
                  isScrolled || isScrolledY || isHeroWhite ? 'text-black' : 'text-white',
                  'relative inline-block group',
                ]"
                @click="toggleNavbar"
              >
                Services
                <span
                  :class="[
                    isScrolled || isScrolledY || isHeroWhite ? 'bg-black' : 'bg-white',
                    'absolute bottom-0 left-0 w-full h-[2px] transform scale-x-0 origin-bottom-right transition-transform duration-200 ease-out group-hover:scale-x-100 group-hover:origin-bottom-left',
                  ]"
                ></span>
              </NuxtLink>
            </li>
            <li>
              <NuxtLink
                to="/about"
                :class="[
                  isScrolled || isScrolledY || isHeroWhite ? 'text-black' : 'text-white',
                  'relative inline-block group',
                ]"
                @click="toggleNavbar"
              >
                About
                <span
                  :class="[
                    isScrolled || isScrolledY || isHeroWhite ? 'bg-black' : 'bg-white',
                    'absolute bottom-0 left-0 w-full h-[2px] transform scale-x-0 origin-bottom-right transition-transform duration-200 ease-out group-hover:scale-x-100 group-hover:origin-bottom-left',
                  ]"
                ></span>
              </NuxtLink>
            </li>
            <li
              class="2xl:hidden xl:hidden lg:hidden md:hidden sm:block"
              id="contact-mobile"
              @click="toggleNavbar"
            >
              <NuxtLink to="/contact" class="block w-full">Get in Touch</NuxtLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </header>
</template>

<script>
export default {
  props: {
    isHeroWhite: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      isScrolled: false, // Track scroll state for nav bar
      isNavbarOpen: false, // Track navbar open state
      scrollPosition: 0, // Tracks scroll position dynamically
    };
  },
  computed: {
    isScrolledY() {
      return this.scrollPosition > 50;
    },
    // Computed property for `isScrolledY`, making it reactive
  },
  methods: {
    toggleNavbar() {
      this.isNavbarOpen = !this.isNavbarOpen;
    },
    closeNavbar(event) {
      if (this.isNavbarOpen && !this.$refs.nav.contains(event.target)) {
        this.isNavbarOpen = false;
      }
    },
    handleScroll() {
      this.scrollPosition = window.scrollY;
      this.isScrolled = this.scrollPosition > 20; // Update isScrolled based on scroll position
    },
  },
  mounted() {
    // Add event listener for scroll event
    window.addEventListener("scroll", this.handleScroll);
    this.handleScroll(); // Run once when mounted to capture initial scroll position

    // Close the navbar when clicking outside
    document.addEventListener("click", this.closeNavbar);
  },
  beforeUnmount() {
    // Clean up event listeners
    window.removeEventListener("scroll", this.handleScroll);
    document.removeEventListener("click", this.closeNavbar);
  },
};
</script>

<style scoped>

nav {
  font-family: "Montreal Book", serif;
  transition: background-color 0.3s ease;
  font-size: 20px;
}

@media screen and (max-width: 768px) {
  nav {
    font-size: 37px;
    font-family: Montreal Medium;
    background: white;
  }

  .text-white {
    color: black;
  }

  #navbar-links {
    border: none;
  }

  #contact-mobile {
    font-size: 16px;
    border: 1px solid #c9c9c9;
    padding: 18px;
    border-radius: 4px;
    width: 100%;
    text-align: center;
    height: 60px;
  }

  ul {
    width: 100%;
  }

  #get-in-touch {
    display: none;
  }
}
</style>