export default defineNuxtConfig({
  modules: ['@nuxtjs/tailwindcss', '@nuxt/image'],
  components: true,
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
          href: '/images/logo/secondary-logo.svg' // Path to the favicon
        },
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/icon?family=Material+Icons'
        }
      ],
      script:[{
       src:"https://cdn.jsdelivr.net/npm/flowbite@2.5.2/dist/flowbite.min.js",
        type: 'text/javascript',
      }]
    },
  },
  plugins: [
    // Registering the baguettebox plugin
    '~/plugins/baguettebox.js',
  ],
})
