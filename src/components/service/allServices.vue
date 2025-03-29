<template>
  <h1>جميع services</h1>
  <h2>تم جلب جميع services</h2>
</template>

<script setup>
import { onMounted } from 'vue'
import { useServiceStore } from '@/stores/useService'
// stores
const serviceStore = useServiceStore()

onMounted(() => {
  serviceStore.getAllServices()
})
</script>
