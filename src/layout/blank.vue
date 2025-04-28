<template>
  <div>
    <NavBar />
    <div class="p-0 m-0 min-vh-100">
      <slot></slot>
    </div>
    <FooterBar />
  </div>
</template>

<script setup>
import NavBar from '@/components/NavBar.vue'
import FooterBar from '@/components/FooterBar.vue'
import { onMounted } from 'vue'
import { useNewsStore } from '@/stores/useNews'
const newsStore = useNewsStore()

onMounted(() => {
  newsStore.sendIpToApi()
})
</script>
