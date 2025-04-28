<template>
  <div class="d-felx justify-content-center text-center">
    <h1>اهلا بعودتك {{ authStore.userInfo }}</h1>
    <div></div>
  </div>
</template>

<script setup>
import { useAuthStore } from '@/stores/useAuth'

// stores
const authStore = useAuthStore()

</script>
