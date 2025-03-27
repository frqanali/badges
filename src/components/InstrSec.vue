<template>
  <div class="d-flex align-items-center p-4">
    <div class="container p-4">
      <h2 class="text-center mb-4">{{ $t('instructions') }}</h2>

      <div class="row row-cols-1 row-cols-md-4 g-4">
        <div class="col" v-for="instruction in instructionStore.instructions" :key="instruction.id">
          <div class="card h-100 p-3">
            <div class="card-body">
              <h5 class="card-title">{{ instruction.title }}</h5>
            </div>
            <button
              type="button"
              class="btn btn-primary mb-3"
              @click="handleSubmit(instruction.id)"
            >
              {{ $t('more') }}
            </button>
            <div class="card-footer">
              <small class="text-body-secondary">Last updated 3 mins ago</small>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router'
import { useInstructionStore } from '../stores/useInstructions.js'

const instructionStore = useInstructionStore()
const router = useRouter()

const handleSubmit = (id) => {
  router.push({ path: '/instruction', query: { id } })
}
</script>
