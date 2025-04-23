<template>
  <div>
    <AppHeader/>

      <slot />
      
    <AppFooter/>

  </div>
</template>

<script setup>
useSeoMeta({
  title: 'RV Rioflorido Construction',
  description: 'Your Dream Home Starts Here, Experienced Civil Engineers Delivering Complete Construction Solutions',
  ogTitle: 'RV Rioflorido Construction',
  ogDescription: 'Your Dream Home Starts Here, Experienced Civil Engineers Delivering Complete Construction Solutions',
  ogImage: '/thumbnail-logo.png',
  ogUrl: '[og:url]',
  twitterTitle: 'RV Rioflorido Construction',
  twitterDescription: 'Your Dream Home Starts Here, Experienced Civil Engineers Delivering Complete Construction Solutions',
  twitterImage: '/thumbnail-logo.png',
  twitterCard: 'summary_large_image',
})
</script>