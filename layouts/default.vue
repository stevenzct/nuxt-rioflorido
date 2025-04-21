<template>
  <div>
    <AppHeader/>

      <slot />
      
    <AppFooter/>

  </div>
</template>

<script setup>
useSeoMeta({
  description: 'Your Dream Home Starts Here, Experienced Civil Engineers Delivering Complete Construction Solutions',
  ogTitle: 'RV Rioflorido Construction',
  ogDescription: 'Your Dream Home Starts Here, Experienced Civil Engineers Delivering Complete Construction Solutions',
  ogImage: '/images/logo/thumbnail-logo.png',
  ogUrl: 'https://rioflorido3213.netlify.app/',
  twitterTitle: 'RV Rioflorido Construction',
  twitterDescription: 'Your Dream Home Starts Here, Experienced Civil Engineers Delivering Complete Construction Solutions',
  twitterImage: '/images/logo/thumbnail-logo.png',
  twitterCard: 'summary'
})

useHead({
  title: 'RV Rioflorido Construction',
  htmlAttrs: {
        lang: 'en',
  },   
  link: [
    { rel: 'icon', type: 'image/x-icon', href: '/images/logo/secondary-logo.svg' },
  ]
})
</script>