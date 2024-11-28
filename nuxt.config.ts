// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  // compatibilityDate: '2024-04-03',
  // devtools: { enabled: true },
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
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/icon?family=Material+Icons',
      },
    ],
  },
},
plugins: [
  // Registering the baguettebox plugin
  '~/plugins/baguettebox.js',
],
})