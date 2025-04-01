<template>
  <component :is="layout" class="fontType">
    <RouterView />
    <div>
      <slot />
      <!-- This renders the child pages -->

      <!-- Back to Top Button -->

      <i class="bi bi-arrow-up-circle back-to-top" @click="scrollToTop" v-show="showButton"></i>
    </div>
  </component>
</template>

<script setup>
import { computed } from 'vue'
import blank from './layout/blank.vue'
import { useRoute } from 'vue-router'
import { RouterView } from 'vue-router'
import { ref, onMounted, onUnmounted } from 'vue'

const route = useRoute()
const layout = computed(() => route.meta.layout || blank)
const showButton = ref(false)

const handleScroll = () => {
  showButton.value = window.scrollY > 200
}

const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' })
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Almarai:wght@400;700&display=swap');
.fontType {
  font-family: 'Almarai', sans-serif;
}
.back-to-top {
  position: fixed;
  bottom: 100px;
  right: 15px;
  cursor: pointer;
  font-size: 2.92rem; /* Adjust icon size */
  border-radius: 50%;
  color: #3b6790;
  background-color: transparent;
  transition: all 0.3s ease-in-out;
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.back-to-top:hover {
  background-color: #3b6790;
  color: #fff;
  transform: scale(1.1);
}
</style>
