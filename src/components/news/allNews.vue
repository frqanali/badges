<template>
  <h1>جميع الاخبار</h1>
  <h2>تم جلب جميع الاخبار</h2>
</template>

<script setup>
import { onMounted } from 'vue'
import { useNewsStore } from '@/stores/useNews'
// stores
const newsStore = useNewsStore()

onMounted(() => {
  newsStore.getAllNews()
})
</script>
