<script setup>
import { ref, computed } from 'vue'
import Home from './components/home.vue'
import CV from './components/cv.vue'
import NotFound from './components/not-found.vue'

const routes = {
  '/': Home,
  '/cv': CV
}

const currentPath = ref(window.location.hash)

window.addEventListener('hashchange', () => {
  currentPath.value = window.location.hash
})

const currentView = computed(() => {
  return routes[currentPath.value.slice(1) || '/'] || NotFound
})
</script>

<template>
  <component :is="currentView" />
</template>