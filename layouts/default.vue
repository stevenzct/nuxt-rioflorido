<template>
  <div>
    <header>
      <nav
        :class="['fixed w-full z-20 top-0 start-0', { 'bg-white': isScrolled }]"
        ref="nav"
      >
        <div
          class="max-w-screen-2xl flex flex-wrap items-center justify-between mx-auto p-4"
        >
          <NuxtLink
            to="/"
            class="flex items-center space-x-3 rtl:space-x-reverse"
          >
            <img src="/assets/images/logo/RV.png" class="logo" alt="RV Logo" />
          </NuxtLink>
          <div
            class="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse"
          >
            <button
              type="button"
              id="get-in-touch"
              class=" font-neue-montreal font-bold px-8 py-3.5 transition ease-out duration-300"
              :class="[
                isScrolled
                  ? 'text-gray-900 bg-white border border-gray-400 hover:bg-gray-900 hover:text-white'
                  : 'text-white border border-white' ,
              ]"
            >
              Get in Touch
            </button>
          
            <button
              @click="toggleNavbar"
              type="button"
              class="transition ease-in-out delay-150 inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
              aria-controls="navbar-sticky"
              :aria-expanded="isNavbarOpen"
            >
              <span class="sr-only">Open main menu</span>
              <svg
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
              class="flex flex-col md:p-0 mt-4 font-medium md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0"
            >
              <li>
                <NuxtLink
                  to="/"
                  :class="[isScrolled ? 'text-black' : 'text-white']"
                  aria-current="page"
                  >Home</NuxtLink
                >
              </li>
              <li>
                <NuxtLink
                  to="/projects"
                  :class="[isScrolled ? 'text-black' : 'text-white']"
                  >Projects</NuxtLink
                >
              </li>
              <li>
                <NuxtLink
                  to="/services"
                  :class="[isScrolled ? 'text-black' : 'text-white']"
                  >Services</NuxtLink
                >
              </li>
              <li>
                <NuxtLink
                  to="/about"
                  :class="[isScrolled ? 'text-black' : 'text-white']"
                  >About</NuxtLink
                >
              </li>
              <li
                class="2xl:hidden xl:hidden lg:hidden md:hidden sm:block"
                id="contact-mobile"
              >
                <NuxtLink to="/">Get in Touch</NuxtLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>

    <!-- output the page content -->
    <div>
      <slot />
    </div>
  </div>
</template>

<style scoped>
.logo {
  width: 100%;
  height: auto;
}
#get-in-touch {
  font-size: 16px;
  width: 200px;
  height: 55px;
  border-radius: 4px;
  /* border: 1px solid #FFF; */
  /* font-family: "Neue Montreal"; */
  font-size: 16px;
  /* font-style: normal;
  font-weight: 500; */
}

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

<script>
export default {
  data() {
    return {
      isNavbarOpen: false,
      isScrolled: false, // Track scroll state
    };
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
  },
  mounted() {
    const nav = this.$refs.nav;

    const handleScroll = () => {
      this.isScrolled = window.pageYOffset > 20; // Update isScrolled based on scroll position
    };

    window.addEventListener("scroll", handleScroll);
    this.handleScroll = handleScroll;

    // Close the navbar when clicking outside
    document.addEventListener("click", this.closeNavbar);
  },
  beforeUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
    document.removeEventListener("click", this.closeNavbar);
  },
};
</script>
