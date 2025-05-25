<template>
  <div>
    <AppHeader/>

      <slot />
      
    <AppFooter/>

  </div>
</template>

<script setup>
// useSeoMeta({
//   title: 'RV Rioflorido Construction',
//   description: 'Your Dream Home Starts Here, Experienced Civil Engineers Delivering Complete Construction Solutions',
//   ogTitle: 'RV Rioflorido Construction',
//   ogDescription: 'Your Dream Home Starts Here, Experienced Civil Engineers Delivering Complete Construction Solutions',
//   ogImage: '/thumbnail-logo.png',
//   ogUrl: 'https://rioflorido.nuxt.dev',
//   twitterTitle: 'RV Rioflorido Construction',
//   twitterDescription: 'Your Dream Home Starts Here, Experienced Civil Engineers Delivering Complete Construction Solutions',
//   twitterImage: '/thumbnail-logo.png',
//   twitterCard: 'summary_large_image',
// })
import { useRoute, useRuntimeConfig, useHead } from '#imports'

const route = useRoute()
const config = useRuntimeConfig()


const canonical = config.public.siteUrl + route.path

useHead({
  link: [
    { rel: 'canonical', href: canonical }
  ],
  script: [
    {
      hid: 'org-jsonld', // unique ID for the script
      type: 'application/ld+json',
      innerHTML: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Organization",
        name: "RV Rioflorido Construction",
        url: "https://rioflorido.nuxt.dev",
        logo: "https://rioflorido.nuxt.dev/thumbnail-logo.png",
        sameAs: [
          "https://www.facebook.com/profile.php?id=100083308930581"
        ],
        contactPoint: {
          "@type": "ContactPoint",
          telephone: "+63-917-144-1538",
          contactType: "Customer Service",
          areaServed: "PH",
          availableLanguage: ["English", "Filipino"]
        }
      }),
      tagPosition: 'head'
    }
  ],
  __dangerouslyDisableSanitizersByTagID: {
    'org-jsonld': ['innerHTML']
  }
})
</script>
<style>
html {
  scroll-behavior: smooth;
}
</style>