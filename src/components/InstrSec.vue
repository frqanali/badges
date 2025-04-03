<template>
  <div class="d-flex align-items-center p-4" id="sec-5">
    <div class="container p-4">
      <h2 class="text-center mb-4">{{ $t('instructions') }}</h2>

      <div class="row row-cols-1 row-cols-md-4 g-4">
        <div
          class="col"
          v-for="instruction in instructionStore.instructionList.splice(0, 4)"
          :key="instruction.id"
        >
          <div class="card h-100 p-3">
            <div class="card-body">
              <h5 class="card-title">{{ instruction.title }}</h5>
            </div>
            <button type="button " class="btn btn-color mb-3" @click="handleSubmit(instruction.id)">
              {{ $t('more') }}
            </button>
            <div class="card-footer">
              <small class="text-body-secondary">Last updated 3 mins ago</small>
            </div>
          </div>
        </div>
      </div>
      <div class="d-flex justify-content-center mt-3">
        <router-link to="/singleNews"
          ><button class="btn btn-colorr">{{ $t('readmore') }}</button>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script setup>
// imports
import { useRouter } from 'vue-router'
import { useInstructionStore } from '../stores/useInstructions.js'
import { onMounted } from 'vue'

// router
const router = useRouter()
// stores
const instructionStore = useInstructionStore()

// functions
const handleSubmit = (id) => {
  router.push({ path: '/instruction', query: { id } })
}

// onmounted
onMounted(() => {
  instructionStore.getAllinstructions()
})
</script>

<style scoped>
.card {
  border: 2px solid #4c7b8b;
  border-radius: 10px;
  box-shadow: #23486a;
}
.btn-color {
  color: aliceblue;
  background-color: #23486a;
}
.btn-colorr {
  background-color: transparent;
  border: 2px solid #3b6790;
  border-radius: 5px;
}
</style>
