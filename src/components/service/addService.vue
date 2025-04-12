<template>
  <h1 class="text-center my-4">{{ headingLabel }}</h1>
  <div class="container">
    <div class="row mb-3">
      <div class="col-md-6">
        <label class="form-label">{{ $t('servicename') }}</label>
        <div class="input-group">
          <input
            v-model="serviceStore.singleservice.servicetitle"
            type="text"
            class="form-control"
            :placeholder="$t('servicename')"
            aria-label="Arabic Service Title"
          />
        </div>
      </div>
      <div class="col-md-6">
        <label class="form-label">Service Title (English)</label>
        <div class="input-group">
          <input
            v-model="serviceStore.singleservice.servicetitle_en"
            type="text"
            class="form-control"
            placeholder="service title"
            aria-label="English Service Title"
          />
        </div>
      </div>
    </div>

    <div class="row mb-3">
      <div class="col-md-6">
        <label class="form-label">{{ $t('about') }}</label>
        <input
          v-model="serviceStore.singleservice.pio"
          type="text"
          class="form-control"
          :placeholder="$t('about')"
          aria-label="About Arabic"
        />
      </div>
      <div class="col-md-6">
        <label class="form-label">About (English)</label>
        <input
          v-model="serviceStore.singleservice.pio_en"
          type="text"
          class="form-control"
          placeholder="about"
          aria-label="About English"
        />
      </div>
    </div>

    <div class="mb-3">
      <label class="form-label">{{ $t('content') }}</label>
      <textarea
        v-model="serviceStore.singleservice.servicedescription"
        class="form-control"
        rows="4"
        aria-label="Arabic Content"
        :placeholder="$t('content')"
      ></textarea>
    </div>

    <div class="mb-3">
      <label class="form-label">Content (English)</label>
      <textarea
        v-model="serviceStore.singleservice.servicedescription_en"
        class="form-control"
        rows="4"
        aria-label="English Content"
        placeholder="content"
      ></textarea>
    </div>

    <div class="mb-3">
      <label class="form-label">Service Link</label>
      <div class="input-group">
        <span
          class="input-group-text rounded-end rounded-start-0 border-start-0 border-end"
          id="basic-addon-link"
          >🔗</span
        >
        <input
          v-model="serviceStore.singleservice.links"
          type="url"
          class="form-control"
          placeholder="https://example.com"
          aria-label="Hyperlink"
          aria-describedby="basic-addon-link"
        />
      </div>
    </div>

    <div class="mb-3">
      <label class="form-label">Upload Image</label>
      <input
        type="file"
        class="form-control"
        accept="image/*"
        @change="handleImageChange"
        aria-label="Upload image"
      />
    </div>

    <div v-if="imagePreview" class="my-3 text-center">
      <img
        :src="imagePreview"
        alt="Image Preview"
        class="img-fluid rounded border"
        style="max-height: 300px"
      />
    </div>

    <div class="mb-3">
      <label class="form-label">Upload PDF File</label>
      <input
        type="file"
        class="form-control"
        accept="application/pdf"
        @change="handlePdfUpload2"
        aria-label="Upload PDF"
      />
    </div>

    <div v-if="pdfName2" class="mb-3">
      <p><strong>Selected PDF:</strong> {{ pdfName2 }}</p>
    </div>

    <div class="d-flex justify-content-center my-4">
      <button type="button" class="btn btn-color btn-lg px-5" @click="handleSubmit">
        <i class="bi bi-save me-2"></i> {{ buttonLabel }}
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
