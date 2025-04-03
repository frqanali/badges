<template>
  <h1>الاخبار المثبتة</h1>
  <h2>اضافة الاخبار المثبتة في الصفحة</h2>
</template>

<script setup>
import { useNewsStore } from '@/stores/useNews'
import { onMounted } from 'vue'

// stores
const newsStore = useNewsStore()

//onMounted
onMounted(() => {
  newsStore.getPinnedNews()
})
</script>
