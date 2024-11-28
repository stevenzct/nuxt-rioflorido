export default defineNuxtConfig({
  modules: ['@nuxtjs/tailwindcss', '@nuxt/image'],
  components: [
    { path: '~/components', pathPrefix: false }
  ],
  tailwindcss: {
    cssPath: '~/assets/css/tailwind.css',
  },
  app: {
    head: {
      title: 'RV Rioflorido Construction',
      meta: [
        { name: 'description', content: 'Rioflorido Construction' }
      ],
      link: [
        {
          rel: 'icon', // Corrected rel value
          type: 'image/x-icon', // Corrected type value
          href: '/images/logo/secondary-logo.ico' // Path to the favicon
        },
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/icon?family=Material+Icons'
        }
      ],
    },
  },
  plugins: [
    // Registering the baguettebox plugin
    '~/plugins/baguettebox.js',
  ],
})
