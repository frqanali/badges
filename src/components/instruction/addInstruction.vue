<template>
  <h1>{{ Title }}</h1>
  <div class="col-5">
    <div class="input-group mb-3">
      <input
        v-model="instructionStore.singleinstruction.ruletitle"
        type="text"
        class="form-control"
        placeholder="العنوان"
        aria-label="Recipient's username"
        aria-describedby="basic-addon2"
      />
    </div>

    <div class="input-group">
      <textarea
        v-model="instructionStore.singleinstruction.ruledescription"
        class="form-control"
        aria-label="With textarea"
        :placeholder="$t('content')"
      ></textarea>
    </div>

    <div class="container d-flex my-5">
      <button type="button" class="btn btn-color btn-lg" @click="handleSubmit">
        {{ buttonLabel }}
      </button>
    </div>
  </div>
</template>

<script setup>
import { useInstructionStore } from '@/stores/useInstructions'
import { computed } from 'vue'
// stores
const instructionStore = useInstructionStore()

// functions
const handleSubmit = () => {
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
</script>

<style scoped>
.btn-color {
  color: aliceblue;
  background-color: #23486a;
}
</style>
