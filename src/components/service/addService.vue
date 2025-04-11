<template>
  <h1>{{ headingLabel }}</h1>
  <div class="col-10">
    <div class="row">
      <div class="col-6">
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
      </div>
      <div class="col-6">
        <div class="input-group mb-3">
          <input
            v-model="serviceStore.singleservice.servicetitle_en"
            type="text"
            class="form-control"
            placeholder="service title"
            aria-label="Recipient's username"
            aria-describedby="basic-addon2"
          />
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-6">

<div class="input-group mb-3">
  <input
    v-model="serviceStore.singleservice.pio"
    type="text"
    class="form-control"
    :placeholder="$t('about')"
    aria-label="Username"
  />
</div>
</div>
<div class="col-6">
  <div class="input-group mb-3">
  <input
    v-model="serviceStore.singleservice.pio_en"
    type="text"
    class="form-control"
    placeholder="about"
    aria-label="Username"
  />
</div>
</div>

    </div>


    <div class="input-group mb-3">
      <textarea
        v-model="serviceStore.singleservice.servicedescription"
        class="form-control"
        aria-label="With textarea"
        :placeholder="$t('content')"
      ></textarea>
    </div>
    <div class="input-group mb-3">
      <textarea
        v-model="serviceStore.singleservice.servicedescription_en"
        class="form-control"
        aria-label="With textarea"
        placeholder="content"
      ></textarea>
    </div>
    <div class="input-group mb-3">
      <span class="input-group-text" id="basic-addon-link">🔗</span>
      <input
        v-model="serviceStore.singleservice.links"
        type="url"
        class="form-control"
        placeholder="https://example.com"
        aria-label="Hyperlink"
        aria-describedby="basic-addon-link"
      />
    </div>

    <div class="input-group my-3">
      <input
        type="file"
        class="form-control"
        accept="image/*"
        @change="handleImageChange"
        aria-label="Upload image"
      />
    </div>
    <div v-if="imagePreview" class="my-3">
      <img :src="imagePreview" alt="Image Preview" class="img-fluid" />
    </div>
    <div class="input-group my-3">
      <input
        type="file"
        class="form-control"
        accept="application/pdf"
        @change="handlePdfUpload2"
        aria-label="Upload PDF"
      />
    </div>

    <div v-if="pdfName2" class="my-2">
      <p><strong>Selected PDF:</strong> {{ pdfName2 }}</p>
    </div>
    <div class="container d-flex my-5">
      <button type="button" class="btn btn-color btn-lg" @click="handleSubmit">
        {{ buttonLabel }}
      </button>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'

import { useServiceStore } from '@/stores/useService'

const serviceStore = useServiceStore()
// Holds the image preview URL
const imagePreview = ref(null)
const pdfName2 = ref(null)

const handlePdfUpload2 = (event) => {
  const file = event.target.files[0]
  if (file && file.type === 'application/pdf') {
    pdfName2.value = file.name
    serviceStore.service2.pdf = file // store the file if needed
  } else {
    pdfName2.value = null
    alert('Please select a valid PDF file.')
  }
}

const handleImageChange = (event) => {
  const file = event.target.files[0]
  if (file) {
    const reader = new FileReader()
    reader.onload = () => {
      imagePreview.value = reader.result // Set image preview
    }
    reader.readAsDataURL(file)
    serviceStore.setUploadedImage(file) // Set the uploaded file in the store
  }
}
const handleSubmit = () => {
  if (serviceStore.serviceId) {
    serviceStore.editService()
  } else {
    serviceStore.createService()
  }
}

const headingLabel = computed(() => {
  return serviceStore.serviceId ? 'تعديل الخدمة' : 'اضافة خدمة جديد'
})

const buttonLabel = computed(() => {
  return serviceStore.serviceId ? 'تعديل' : 'اضافة'
})
</script>

<style scoped>
.btn-color {
  color: aliceblue;
  background-color: #23486a;
}
</style>
