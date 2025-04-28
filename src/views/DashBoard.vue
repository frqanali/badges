<template>
  <div class="d-felx justify-content-center text-center">
    <h1>اهلا بعودتك {{ authStore.userInfo }}</h1>
    <h2 v-if="newsStore.visitorCount !== null" class="mt-3">
      عدد الزوار الكلي:
      {{ newsStore.visitorCount }} <br />
      عدد الزوار اليوم :
      {{ newsStore.todayVisitorCount }}
    </h2>
  </div>
</template>

<script setup>
import { useAuthStore } from '@/stores/useAuth'
import { useNewsStore } from '@/stores/useNews'

// stores
const authStore = useAuthStore()
const newsStore = useNewsStore()
</script>
