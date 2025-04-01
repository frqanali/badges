<template>
  <h1>اضافة خدمة جديدة</h1>
  <div class="col-5">
    <div class="input-group mb-3">
      <input
        v-model="serviceStore.singleservice.servicetitle"
        type="text"
        class="form-control"
        :placeholder="$t('servicename')"
        aria-label="Recipient's username"
        aria-describedby="basic-addon2"
      />
    </div>

    <div class="input-group mb-3">
      <input
        v-model="serviceStore.singleservice.pio"
        type="text"
        class="form-control"
        :placeholder="$t('about')"
        aria-label="Username"
      />
    </div>

    <div class="input-group">
      <textarea
        v-model="serviceStore.singleservice.servicedescription"
        class="form-control"
        aria-label="With textarea"
        :placeholder="$t('content')"
      ></textarea>
    </div>

    <div class="container d-flex my-5">
      <button type="button" class="btn btn-color btn-lg" @click="serviceStore.createService">
        {{ $t('send') }}
      </button>
    </div>
  </div>
</template>

<script setup>
import { useServiceStore } from '@/stores/useService'

const serviceStore = useServiceStore()
</script>

<style scoped>
.btn-color {
  color: aliceblue;
  background-color: #23486a;
}
</style>
