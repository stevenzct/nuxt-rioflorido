<template>
  <header>
    <nav
      :class="[
        'fixed w-full z-40 top-0 start-0',
        { 'bg-white': isScrolled || isScrolledY || isHeroWhite },
      ]"
      ref="nav"
    >
      <div
        class="max-w-screen-2xl flex flex-wrap items-center justify-between mx-auto px-4 py-4 md:px-6 lg:px-8 xl:px-10 2xl:px-12"
      >
        <NuxtLink
          to="/"
          prefetch
          class="flex items-center space-x-3 rtl:space-x-reverse"
        >
          <img src="/images/logo/main-logo.svg" class="logo" alt="RV Logo" />
        </NuxtLink>
        <div class="flex items-center gap-4 md:order-2 md:gap-5 rtl:space-x-reverse">
          <a
            v-if="isAdminAuthReady && !isAdminSession"
            :href="loginUrl"
            :class="[
              isScrolled || isScrolledY || isHeroWhite
                ? 'text-black'
                : 'text-white',
              'relative hidden font-neue-montreal font-normal md:inline-block group',
            ]"
          >
            Login
            <span
              :class="[
                {
                  'bg-black': isScrolled || isScrolledY || isHeroWhite,
                  'bg-white': !isScrolled && !isScrolledY && !isHeroWhite,
                  'scale-x-100': $route.path === '/admin/login',
                  'scale-x-0': $route.path !== '/admin/login',
                },
                'absolute bottom-0 left-0 w-full h-[2px] transform origin-bottom-right transition-transform duration-200 ease-out',
                $route.path !== '/admin/login'
                  ? 'group-hover:scale-x-100 group-hover:origin-bottom-left'
                  : '',
              ]"
            ></span>
          </a>
          <button
            v-else-if="isAdminAuthReady && isAdminSession"
            type="button"
            :disabled="isSigningOut"
            :class="[
              isScrolled || isScrolledY || isHeroWhite
                ? 'text-black'
                : 'text-white',
              'relative hidden font-neue-montreal font-normal md:inline-block group disabled:cursor-not-allowed disabled:opacity-60',
            ]"
            @click="openLogoutConfirmation"
          >
            Logout
            <span
              :class="[
                {
                  'bg-black': isScrolled || isScrolledY || isHeroWhite,
                  'bg-white': !isScrolled && !isScrolledY && !isHeroWhite,
                  'scale-x-0': true,
                },
                'absolute bottom-0 left-0 w-full h-[2px] transform origin-bottom-right transition-transform duration-200 ease-out group-hover:scale-x-100 group-hover:origin-bottom-left',
              ]"
            ></span>
          </button>
          <NuxtLink to="/contact" prefetch class="inline-block" aria-label="Contact">
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
            :aria-label="isNavbarOpen ? 'Close main menu' : 'Open main menu'"
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
          ref="navbarMenu"
          :class="[
            'items-center justify-between',
            isNavbarOpen ? 'flex' : 'hidden',
            'w-full md:flex md:w-auto md:order-1',
          ]"
          id="navbar-sticky"
        >
          <ul
            ref="navbarLinks"
            id="navbar-links"
            class="flex flex-col md:p-0 mt-4 font-neue-montreal font-normal md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0"
          >
            <li>
              <NuxtLink
                to="/"
                prefetch
                :class="[
                  isScrolled || isScrolledY || isHeroWhite
                    ? 'text-black'
                    : 'text-white',
                  'relative inline-block group',
                ]"
                @click="toggleNavbar"
                aria-current="page"
              >
                Home
                <span
                  :class="[
                    {
                      'bg-black': isScrolled || isScrolledY || isHeroWhite,
                      'bg-white': !isScrolled && !isScrolledY && !isHeroWhite,
                      'scale-x-100': $route.path === '/',
                      'scale-x-0': $route.path !== '/',
                    },
                    'absolute bottom-0 left-0 w-full h-[2px] transform origin-bottom-right transition-transform duration-200 ease-out',
                    $route.path !== '/'
                      ? 'group-hover:scale-x-100 group-hover:origin-bottom-left'
                      : '',
                  ]"
                ></span>
              </NuxtLink>
            </li>
            <li>
              <NuxtLink
                to="/projects"
                prefetch
                :class="[
                  isScrolled || isScrolledY || isHeroWhite
                    ? 'text-black'
                    : 'text-white',
                  'relative inline-block group',
                ]"
                @click="toggleNavbar"
              >
                Projects
                <span
                  :class="[
                    {
                      'bg-black': isScrolled || isScrolledY || isHeroWhite,
                      'bg-white': !isScrolled && !isScrolledY && !isHeroWhite,
                      'scale-x-100': $route.path === '/projects',
                      'scale-x-0': $route.path !== '/projects',
                    },
                    'absolute bottom-0 left-0 w-full h-[2px] transform origin-bottom-right transition-transform duration-200 ease-out',
                    $route.path !== '/projects'
                      ? 'group-hover:scale-x-100 group-hover:origin-bottom-left'
                      : '',
                  ]"
                ></span>
              </NuxtLink>
            </li>
            <li>
              <NuxtLink
                to="/services"
                prefetch
                :class="[
                  isScrolled || isScrolledY || isHeroWhite
                    ? 'text-black'
                    : 'text-white',
                  'relative inline-block group',
                ]"
                @click="toggleNavbar"
              >
                Services
                <span
                  :class="[
                    {
                      'bg-black': isScrolled || isScrolledY || isHeroWhite,
                      'bg-white': !isScrolled && !isScrolledY && !isHeroWhite,
                      'scale-x-100': $route.path === '/services',
                      'scale-x-0': $route.path !== '/services',
                    },
                    'absolute bottom-0 left-0 w-full h-[2px] transform origin-bottom-right transition-transform duration-200 ease-out',
                    $route.path !== '/services'
                      ? 'group-hover:scale-x-100 group-hover:origin-bottom-left'
                      : '',
                  ]"
                ></span>
              </NuxtLink>
            </li>
            <li>
              <NuxtLink
                to="/about"
                prefetch
                :class="[
                  isScrolled || isScrolledY || isHeroWhite
                    ? 'text-black'
                    : 'text-white',
                  'relative inline-block group',
                ]"
                @click="toggleNavbar"
              >
                About
                <span
                  :class="[
                    {
                      'bg-black': isScrolled || isScrolledY || isHeroWhite,
                      'scale-x-100': $route.path === '/about',
                      'scale-x-0': $route.path !== '/about',
                    },
                    // Responsive span colour when NOT SCROLLED and route is active
                    !isScrolled &&
                    !isScrolledY &&
                    !isHeroWhite &&
                    $route.path === '/about'
                      ? 'bg-black md:bg-white'
                      : '',
                    'absolute bottom-0 left-0 w-full h-[2px] transform origin-bottom-right transition-transform duration-200 ease-out',
                    $route.path !== '/about'
                      ? 'group-hover:scale-x-100 group-hover:origin-bottom-left'
                      : '',
                  ]"
                ></span>
              </NuxtLink>
            </li>
            <li v-if="isAdminAuthReady && !isAdminSession" class="md:hidden">
              <a
                :href="loginUrl"
                :class="[
                  isScrolled || isScrolledY || isHeroWhite
                    ? 'text-black'
                    : 'text-white',
                  'relative inline-block group',
                ]"
                @click="toggleNavbar"
              >
                Login
                <span
                  :class="[
                    {
                      'bg-black': isScrolled || isScrolledY || isHeroWhite,
                      'bg-white': !isScrolled && !isScrolledY && !isHeroWhite,
                      'scale-x-100': $route.path === '/admin/login',
                      'scale-x-0': $route.path !== '/admin/login',
                    },
                    'absolute bottom-0 left-0 w-full h-[2px] transform origin-bottom-right transition-transform duration-200 ease-out',
                    $route.path !== '/admin/login'
                      ? 'group-hover:scale-x-100 group-hover:origin-bottom-left'
                      : '',
                  ]"
                ></span>
              </a>
            </li>
            <li v-else-if="isAdminAuthReady && isAdminSession" class="md:hidden">
              <button
                type="button"
                :disabled="isSigningOut"
                :class="[
                  isScrolled || isScrolledY || isHeroWhite
                    ? 'text-black'
                    : 'text-white',
                  'relative inline-block group disabled:cursor-not-allowed disabled:opacity-60',
                ]"
                @click="openLogoutConfirmation"
              >
                Logout
                <span
                  :class="[
                    {
                      'bg-black': isScrolled || isScrolledY || isHeroWhite,
                      'bg-white': !isScrolled && !isScrolledY && !isHeroWhite,
                      'scale-x-0': true,
                    },
                    'absolute bottom-0 left-0 w-full h-[2px] transform origin-bottom-right transition-transform duration-200 ease-out group-hover:scale-x-100 group-hover:origin-bottom-left',
                  ]"
                ></span>
              </button>
            </li>
            <li v-if="isAdminSession">
              <NuxtLink
                to="/admin/projects"
                prefetch
                :class="[
                  isScrolled || isScrolledY || isHeroWhite
                    ? 'text-black'
                    : 'text-white',
                  'relative inline-block group',
                ]"
                @click="toggleNavbar"
              >
                Admin Projects
                <span
                  :class="[
                    {
                      'bg-black': isScrolled || isScrolledY || isHeroWhite,
                      'bg-white': !isScrolled && !isScrolledY && !isHeroWhite,
                      'scale-x-100': $route.path === '/admin/projects',
                      'scale-x-0': $route.path !== '/admin/projects',
                    },
                    'absolute bottom-0 left-0 w-full h-[2px] transform origin-bottom-right transition-transform duration-200 ease-out',
                    $route.path !== '/admin/projects'
                      ? 'group-hover:scale-x-100 group-hover:origin-bottom-left'
                      : '',
                  ]"
                ></span>
              </NuxtLink>
            </li>
            <li
              class="2xl:hidden xl:hidden lg:hidden md:hidden sm:block"
              id="contact-mobile"
              @click="toggleNavbar"
            >
              <NuxtLink to="/contact" prefetch class="block w-full"
                >Get in Touch</NuxtLink
              >
            </li>
          </ul>
        </div>
      </div>
    </nav>

    <div
      v-if="isLogoutModalOpen"
      class="relative z-50"
      aria-labelledby="logout-modal-title"
      role="dialog"
      aria-modal="true"
    >
      <div class="fixed inset-0 bg-gray-500/75 transition-opacity"></div>

      <div class="fixed inset-0 z-50 w-screen overflow-y-auto">
        <div class="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
          <div class="relative transform overflow-hidden rounded-lg bg-white px-4 pb-4 pt-5 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg sm:p-6">
            <div class="sm:flex sm:items-start">
              <div class="mx-auto flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-red-100 sm:mx-0 sm:h-10 sm:w-10">
                <span class="material-icons text-[22px] text-red-600">logout</span>
              </div>
              <div class="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
                <h3
                  id="logout-modal-title"
                  class="text-base font-semibold leading-6 text-gray-900"
                >
                  Log out of admin?
                </h3>
                <div class="mt-2">
                  <p class="text-sm text-gray-500">
                    You will need to sign in again before managing project records.
                  </p>
                </div>
              </div>
            </div>
            <div class="mt-5 sm:mt-4 sm:flex sm:flex-row-reverse">
              <button
                type="button"
                class="inline-flex w-full justify-center rounded-md bg-red-600 px-3 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-red-500 disabled:cursor-not-allowed disabled:opacity-60 sm:ml-3 sm:w-auto"
                :disabled="isSigningOut"
                @click="signOut"
              >
                {{ isSigningOut ? "Logging out..." : "Logout" }}
              </button>
              <button
                type="button"
                class="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 transition hover:bg-gray-50 disabled:cursor-not-allowed disabled:opacity-60 sm:mt-0 sm:w-auto"
                :disabled="isSigningOut"
                @click="closeLogoutConfirmation"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
import { gsap } from "gsap";
import { useSupabaseClient } from "~/composables/useSupabaseClient";
import { notifyAdminSignedOut } from "~/utils/adminAuthEvents";

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
      isAdminSession: false,
      isAdminAuthReady: false,
      isSigningOut: false,
      isLogoutModalOpen: false,
      adminAuthSubscription: null,
      navbarTimeline: null,
    };
  },
  computed: {
    isScrolledY() {
      return this.scrollPosition > 50;
    },
    loginPath() {
      return {
        path: "/admin/login",
        query: { fresh: "1" },
      };
    },
    loginUrl() {
      return "/admin/login?fresh=1";
    },
    // Computed property for `isScrolledY`, making it reactive
  },
  methods: {
    toggleNavbar() {
      if (this.isNavbarOpen) {
        this.animateNavbarClose();
        return;
      }

      this.isNavbarOpen = true;
      this.$nextTick(this.animateNavbarOpen);
    },
    getMobileNavbarElements() {
      const menu = this.$refs.navbarMenu;
      const links = this.$refs.navbarLinks
        ? Array.from(this.$refs.navbarLinks.children)
        : [];

      return { menu, links };
    },
    shouldAnimateNavbar() {
      return (
        window.matchMedia("(max-width: 767px)").matches &&
        !window.matchMedia("(prefers-reduced-motion: reduce)").matches
      );
    },
    clearNavbarAnimationStyles() {
      const { menu, links } = this.getMobileNavbarElements();

      if (menu) {
        gsap.set(menu, { clearProps: "height,overflow,opacity,visibility" });
      }

      if (links.length) {
        gsap.set(links, { clearProps: "opacity,transform,visibility" });
      }
    },
    animateNavbarOpen() {
      const { menu, links } = this.getMobileNavbarElements();

      if (!menu || !this.shouldAnimateNavbar()) {
        this.clearNavbarAnimationStyles();
        return;
      }

      this.navbarTimeline?.kill();
      gsap.killTweensOf([menu, ...links]);

      const expandedHeight = menu.scrollHeight;
      this.navbarTimeline = gsap
        .timeline({
          defaults: { ease: "power3.out" },
          onComplete: () => {
            this.clearNavbarAnimationStyles();
            this.navbarTimeline = null;
          },
        })
        .fromTo(
          menu,
          { height: 0, autoAlpha: 0, overflow: "hidden" },
          { height: expandedHeight, autoAlpha: 1, duration: 0.45 },
          0,
        )
        .fromTo(
          links,
          { autoAlpha: 0, y: -14 },
          { autoAlpha: 1, y: 0, duration: 0.38, stagger: 0.055 },
          0.08,
        );
    },
    animateNavbarClose() {
      const { menu, links } = this.getMobileNavbarElements();

      if (!menu || !this.shouldAnimateNavbar()) {
        this.isNavbarOpen = false;
        this.clearNavbarAnimationStyles();
        return;
      }

      this.navbarTimeline?.kill();
      gsap.killTweensOf([menu, ...links]);

      this.navbarTimeline = gsap
        .timeline({
          defaults: { ease: "power2.inOut" },
          onComplete: () => {
            this.isNavbarOpen = false;
            this.$nextTick(this.clearNavbarAnimationStyles);
            this.navbarTimeline = null;
          },
        })
        .to(links, {
          autoAlpha: 0,
          y: -10,
          duration: 0.18,
          stagger: { each: 0.025, from: "end" },
        })
        .to(
          menu,
          { height: 0, autoAlpha: 0, overflow: "hidden", duration: 0.28 },
          0.04,
        );
    },
    closeNavbar(event) {
      if (this.isNavbarOpen && !this.$refs.nav.contains(event.target)) {
        this.animateNavbarClose();
      }
    },
    handleNavbarResize() {
      if (window.matchMedia("(min-width: 768px)").matches) {
        this.navbarTimeline?.kill();
        this.navbarTimeline = null;
        this.isNavbarOpen = false;
        this.clearNavbarAnimationStyles();
      }
    },
    handleScroll() {
      this.scrollPosition = window.scrollY;
      this.isScrolled = this.scrollPosition > 20; // Update isScrolled based on scroll position
    },
    async loadAdminSession() {
      try {
        const supabase = useSupabaseClient();
        await this.verifyAdminSession(supabase);

        const { data } = supabase.auth.onAuthStateChange((_event, session) => {
          this.verifyAdminSession(supabase, session);
        });

        this.adminAuthSubscription = data.subscription;
      } catch (error) {
        this.isAdminSession = false;
        this.isAdminAuthReady = true;
      }
    },
    async verifyAdminSession(supabase, currentSession = null) {
      try {
        const session =
          currentSession ||
          (
            await supabase.auth.getSession()
          ).data.session;

        if (!session?.access_token) {
          this.isAdminSession = false;
          this.isAdminAuthReady = true;
          return;
        }

        const admin = await $fetch("/api/admin/me", {
          headers: {
            Authorization: `Bearer ${session.access_token}`,
          },
        });

        this.isAdminSession = Boolean(admin?.isAdmin);
      } catch (error) {
        this.isAdminSession = false;
      } finally {
        this.isAdminAuthReady = true;
      }
    },
    openLogoutConfirmation() {
      this.isNavbarOpen = false;
      this.isLogoutModalOpen = true;
    },
    closeLogoutConfirmation() {
      if (this.isSigningOut) {
        return;
      }

      this.isLogoutModalOpen = false;
    },
    async signOut() {
      try {
        this.isSigningOut = true;
        const supabase = useSupabaseClient();
        await supabase.auth.signOut();
        notifyAdminSignedOut();
        this.isAdminSession = false;
        this.isAdminAuthReady = true;
        this.isNavbarOpen = false;
        this.isLogoutModalOpen = false;

        await navigateTo("/admin/login", { replace: true });
      } finally {
        this.isSigningOut = false;
      }
    },
  },
  mounted() {
    // Add event listener for scroll event
    window.addEventListener("scroll", this.handleScroll);
    this.handleScroll(); // Run once when mounted to capture initial scroll position

    // Close the navbar when clicking outside
    document.addEventListener("click", this.closeNavbar);
    window.addEventListener("resize", this.handleNavbarResize);

    this.loadAdminSession();
  },
  beforeUnmount() {
    // Clean up event listeners
    window.removeEventListener("scroll", this.handleScroll);
    document.removeEventListener("click", this.closeNavbar);
    window.removeEventListener("resize", this.handleNavbarResize);
    this.navbarTimeline?.kill();
    this.clearNavbarAnimationStyles();
    this.adminAuthSubscription?.unsubscribe();
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
    margin-top: 16px;
  }

  ul {
    width: 100%;
  }

  #get-in-touch {
    display: none;
  }
}
</style>
