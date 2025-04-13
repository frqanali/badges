<template>
  <div class="d-flex align-items-center p-4" id="sec-5">
    <div class="container p-4">
      <h2 class="text-center my-5 underline-text">{{ $t('instructions') }}</h2>

      <div class="row row-cols-1 row-cols-md-4 g-4 mt-3">
        <div
          class="col"
          v-for="instruction in instructionStore.fourinstructionList"
          :key="instruction.id"
        >
          <div class="card h-100 p-3">
            <div class="card-body">
              <h5 class="card-title">
                {{ locale === 'ar' ? instruction.title : instruction.title_en }}
              </h5>
            </div>
            <router-link :to="{ name: 'singleIntr', query: { id: instruction.id } }"
              ><button type="button " class="btn btn-color mb-3">
                {{ $t('more') }}
              </button></router-link
            >

            <div class="card-footer">
              <small class="text-body-secondary">الضوابط والتعليمات</small>
            </div>
          </div>
        </div>
      </div>
      <div class="d-flex justify-content-center mt-3">
        <router-link to="/singleIntr"
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
import { useI18n } from 'vue-i18n'

const { locale } = useI18n()
// router
const router = useRouter()
// stores
const instructionStore = useInstructionStore()

// functions
const handleSubmit = (id) => {
  router.push({ path: '/instruction', query: { id } })
}

// onmounted
onMounted(async () => {
  await instructionStore.getAllinstructions()
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
.underline-text {
  display: inline-block;
  position: relative;
  width: 100%; /* Ensures it takes up the full width of the parent */
  text-align: center; /* Centers the text itself */
}

.underline-text::after {
  content: '';
  position: absolute;
  left: 50%;
  bottom: -10px;
  width: 23%; /* Same width as text */
  height: 3px;
  background-color: #4c7b8b;
  transform: translateX(-50%); /* Center the underline */
}
</style>
