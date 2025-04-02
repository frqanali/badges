<template>
    <div>
      <slot />

      <i class="bi bi-arrow-up-circle back-to-top" @click="scrollToTop" v-show="showButton"></i>
    </div>
</template>

<script setup>

import { ref, onMounted, onUnmounted } from 'vue'

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
