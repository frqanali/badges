<template>
  <h1>اضافة ضوابط وتعليمات جديدة</h1>
  <div class="col-5">
    <div class="input-group mb-3">
      <input
        v-model="instructionStore.singleinstruction.instructiontitle"
        type="text"
        class="form-control"
        placeholder="العنوان"
        aria-label="Recipient's username"
        aria-describedby="basic-addon2"
      />
    </div>

    <div class="input-group">
      <textarea
        v-model="instructionStore.singleinstruction.instructiondescription"
        class="form-control"
        aria-label="With textarea"
        :placeholder="$t('content')"
      ></textarea>
    </div>

    <div class="container d-flex my-5">
      <button
        type="button"
        class="btn btn-color btn-lg"
        @click="instructionStore.createinstruction"
      >
        {{ $t('send') }}
      </button>
    </div>
  </div>
</template>

<script setup>
import { useInstructionStore } from '@/stores/useInstructions'

const instructionStore = useInstructionStore()
</script>

<style scoped>
.btn-color {
  color: aliceblue;
  background-color: #23486a;
}
</style>
