<template>
  <component :is="layout" class="fontType">
    <RouterView />
    <div>
      <slot />
      <!-- This renders the child pages -->

      <!-- Back to Top Button -->
      <button class="btn back-to-top" v-show="showButton" @click="scrollToTop">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="35"
          height="35"
          fill="#3b6790"
          class="bi bi-arrow-up-circle"
          viewBox="0 0 16 16"
        >
          <path
            fill-rule="evenodd"
            d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8m15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0m-7.5 3.5a.5.5 0 0 1-1 0V5.707L5.354 7.854a.5.5 0 1 1-.708-.708l3-3a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708L8.5 5.707z"
          />
        </svg>
      </button>
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
  padding: 4px 4px;
  border-radius: 50%;
  cursor: pointer;
  padding: 10px 15px;

  transition: opacity 0.2s ease-in-out;
}
.back-to-top:hover {
  fill: #3b6790;
  transform: scale(1.1);
}
</style>
