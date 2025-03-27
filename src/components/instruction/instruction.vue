<template>
  <div class="min-vh-100 p-4">
    <h1 class="text-center mb-4">{{ selectedInstruction?.title }}</h1>
    <div class="d-flex justify-content-center align-items-center">
      <div class="card shadow-lg w-75">
        <div class="card-body p-4">
          <p class="p-3 mb-0">{{ selectedInstruction?.desc }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useInstructionStore } from '../../stores/useInstructions.js'
import { useRoute } from 'vue-router'
import { computed } from 'vue'
// stores
const instructionStore = useInstructionStore()
// route
const route = useRoute()

// computed functions
const selectedInstruction = computed(() => {
  const id = Number(route.query.id)
  return instructionStore.instructions.find((i) => i.id === id)
})
</script>
