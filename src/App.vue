<script setup lang="ts">
  import { useRoute } from 'vue-router'
  import { computed } from 'vue'
  import Navbar from './components/navbar.vue'
import { MotionComponent } from '@vueuse/motion'

  const route = useRoute()

  const isNavbarHidden = computed(() => {
    return route.matched.some((r) => r.meta.hideNavbar)
  })
</script>

<template>
  <Navbar v-if="!isNavbarHidden" />
  <MotionComponent :initial="{opacity: 0}" :enter="{opacity: 1}" :leave="{opacity: 0}" :transition="{duration: 0.4, ease: 'easeInOut'}" :key="route.fullPath">
    <router-view />
  </MotionComponent>
</template>