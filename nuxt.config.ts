export default defineNuxtConfig({
  modules: ['@nuxtjs/tailwindcss', '@nuxt/image'],
  compatibilityDate: "2024-04-03",
  devtools: { enabled: true },
  components: true,
  tailwindcss: {
    cssPath: '~/assets/css/tailwind.css',
  },
  app: {
    head: {
      title: 'RV Rioflorido Construction',
      htmlAttrs: {
        lang: 'en',
      },
      meta: [
        { name: 'description', content: 'Rioflorido Construction' },
        {
          name: 'google-site-verification',
          content: 'kIURHvlriUlkIoMsREThIoqa3NTgfcSz10RSV0tXbQc',
        },
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
      script:[
        {
       src:"https://cdn.jsdelivr.net/npm/flowbite@2.5.2/dist/flowbite.min.js",
        type: 'text/javascript',
      },
      {
        src: "https://www.google.com/recaptcha/api.js",
        async: true,
        defer: true,
      }
    ]
    },
  },
  plugins: [
    // Registering the baguettebox plugin
    '~/plugins/baguettebox.js',
  ],
})
