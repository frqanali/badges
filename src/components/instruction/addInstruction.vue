<template>
  <loader v-if="instructionStore.loader" />
  <div v-else class="container mt-4">
    <h1 class="mb-4">{{ Title }}</h1>

    <div class="row">
      <!-- Arabic Title -->
      <div class="col-md-6 mb-3">
        <div class="input-group">
          <input
            v-model="instructionStore.singleinstruction.ruletitle"
            type="text"
            class="form-control"
            placeholder="العنوان"
            aria-label="Arabic Title"
          />
        </div>
        <div class="text-danger small mt-1" v-if="instructionStore.v$.ruletitle.$error">
          هذا الحقل مطلوب
        </div>
      </div>

      <!-- English Title -->
      <div class="col-md-6 mb-3">
        <div class="input-group">
          <input
            v-model="instructionStore.singleinstruction.ruletitle_en"
            type="text"
            class="form-control"
            placeholder="Title"
            aria-label="English Title"
          />
        </div>
        <div class="text-danger small mt-1" v-if="instructionStore.v$.ruletitle_en.$error">
          هذا الحقل مطلوب
        </div>
      </div>
    </div>

    <div class="row">
      <!-- Arabic Description -->
      <div class="col-md-6 mb-3">
        <div class="input-group">
          <textarea
            v-model="instructionStore.singleinstruction.ruledescription"
            class="form-control custom-textarea"
            :placeholder="$t('content')"
            aria-label="Arabic Description"
          ></textarea>
        </div>
        <div class="text-danger small mt-1" v-if="instructionStore.v$.ruledescription.$error">
          هذا الحقل مطلوب
        </div>
      </div>

      <!-- English Description -->
      <div class="col-md-6 mb-3">
        <div class="input-group">
          <textarea
            v-model="instructionStore.singleinstruction.ruledescription_en"
            class="form-control custom-textarea"
            placeholder="content"
            aria-label="English Description"
          ></textarea>
        </div>
        <div class="text-danger small mt-1" v-if="instructionStore.v$.ruledescription_en.$error">
          هذا الحقل مطلوب
        </div>
      </div>
    </div>

    <!-- Submit Button -->
    <div class="d-flex justify-content-center mt-4">
      <button type="button" class="btn btn-color btn-lg px-5" @click="handleSubmit">
        {{ buttonLabel }}
      </button>
    </div>
  </div>
</template>

<script setup>
import { useInstructionStore } from '@/stores/useInstructions'
import { computed } from 'vue'
import { onBeforeRouteLeave } from 'vue-router'
import Swal from 'sweetalert2'
import loader from '@/components/loader.vue'

// stores
const instructionStore = useInstructionStore()

// functions
const handleSubmit = async () => {
  const validation = instructionStore.v$
  const isValid = await validation.$validate()
  console.log('validation error:', instructionStore.v$.$error)

  if (!isValid) {
    Swal.fire({ icon: 'error', Title: 'error', text: 'validation error' })
    return
  }
  if (instructionStore.instructionId) {
    instructionStore.editInstruction()
  } else {
    instructionStore.createinstruction()
  }
}

// computed functions
const Title = computed(() => {
  return instructionStore.instructionId ? 'تعديل الضوابط' : 'اضافة ضوابط وتعليمات جديدة'
})

const buttonLabel = computed(() => {
  return instructionStore.instructionId ? 'تعديل ' : 'اضافة'
})

onBeforeRouteLeave(() => {
  if (instructionStore.instructionId) {
    instructionStore.instructionId = null
  }
  instructionStore.resetForm()
})
</script>

<style scoped>
.btn-color {
  color: aliceblue;
  background-color: #23486a;
}
.custom-textarea {
  width: 100%; /* Ensure it takes up full width of the parent */
  height: 200px; /* Adjust the height as needed */
  resize: both; /* Optional: allows the user to resize it manually */
}
</style>
