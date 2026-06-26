<template>
  <div>
    <AppHeader :isHeroWhite="usesDarkNavigation" />

      <slot />
      
    <AppFooter/>

  </div>
</template>

<script setup>
import { computed, useRoute, useRuntimeConfig, useHead, watch } from '#imports'

const route = useRoute()
const config = useRuntimeConfig()
const usesDarkNavigation = computed(() => route.path === '/aluminum-series')

const updateHead = () => {
  const canonical = config.public.siteUrl + route.path

  useHead({
    link: [
      { rel: 'canonical', href: canonical }
    ]
  })
}

// Watch for route changes and update head elements
watch(route, updateHead)

// Initial head setup
updateHead()
</script>
<style>
html {
  scroll-behavior: smooth;
}
</style>
