<template>
  <component :is="layout" class="fontType">
    <RouterView />
  </component>
</template>

<script setup>
import { computed } from 'vue'
import blank from './layout/blank.vue'
import { useRoute } from 'vue-router'
import { RouterView } from 'vue-router'
const route = useRoute()
const layout = computed(() => route.meta.layout || blank)
</script>
<style>
@import url('https://fonts.googleapis.com/css2?family=Almarai:wght@400;700&display=swap');
.fontType {
  font-family: 'Almarai', sans-serif;
}
</style>
