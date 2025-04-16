<template>
  <loader v-if="serviceStore.loader" />

  <div v-else class="container mt-4">
    <h1 class="text-center mb-4">{{ headingLabel }}</h1>

    <!-- Service Titles -->
    <div class="row mb-3">
      <!-- Arabic -->
      <div class="col-md-6 mb-3">
        <label class="form-label">{{ $t('servicename') }}</label>
        <input
          v-model="serviceStore.singleservice.servicetitle"
          type="text"
          class="form-control"
          :placeholder="$t('servicename')"
          aria-label="Arabic Service Title"
          @blur="serviceStore.v$.servicetitle.$touch"
        />
        <div class="text-danger small mt-1" v-if="serviceStore.v$.servicetitle.$error">
          هذا الحقل مطلوب
        </div>
      </div>

      <!-- English -->
      <div class="col-md-6 mb-3">
        <label class="form-label">Service Title (English)</label>
        <input
          v-model="serviceStore.singleservice.servicetitle_en"
          type="text"
          class="form-control"
          placeholder="Service title"
          aria-label="English Service Title"
          @blur="serviceStore.v$.servicetitle_en.$touch"
        />
        <div class="text-danger small mt-1" v-if="serviceStore.v$.servicetitle_en.$error">
          هذا الحقل مطلوب
        </div>
      </div>
    </div>

    <!-- About -->
    <div class="row mb-3">
      <!-- Arabic -->
      <div class="col-md-6 mb-3">
        <label class="form-label">{{ $t('about') }}</label>
        <input
          v-model="serviceStore.singleservice.pio"
          type="text"
          class="form-control"
          :placeholder="$t('about')"
          aria-label="About Arabic"
          @blur="serviceStore.v$.pio.$touch"
        />
        <div class="text-danger small mt-1" v-if="serviceStore.v$.pio.$error">هذا الحقل مطلوب</div>
      </div>

      <!-- English -->
      <div class="col-md-6 mb-3">
        <label class="form-label">About (English)</label>
        <input
          v-model="serviceStore.singleservice.pio_en"
          type="text"
          class="form-control"
          placeholder="About"
          aria-label="About English"
          @blur="serviceStore.v$.pio_en.$touch"
        />
        <div class="text-danger small mt-1" v-if="serviceStore.v$.pio_en.$error">
          هذا الحقل مطلوب
        </div>
      </div>
    </div>

    <!-- Content -->
    <div class="mb-3">
      <label class="form-label">{{ $t('content') }}</label>
      <textarea
        v-model="serviceStore.singleservice.servicedescription"
        class="form-control"
        rows="4"
        :placeholder="$t('content')"
        aria-label="Arabic Content"
        @blur="serviceStore.v$.servicedescription.$touch"
      ></textarea>
      <div class="text-danger small mt-1" v-if="serviceStore.v$.servicedescription.$error">
        هذا الحقل مطلوب
      </div>
    </div>

    <div class="mb-3">
      <label class="form-label">Content (English)</label>
      <textarea
        v-model="serviceStore.singleservice.servicedescription_en"
        class="form-control"
        rows="4"
        placeholder="Content"
        aria-label="English Content"
        @blur="serviceStore.v$.servicedescription_en.$touch"
      ></textarea>
      <div class="text-danger small mt-1" v-if="serviceStore.v$.servicedescription_en.$error">
        هذا الحقل مطلوب
      </div>
    </div>

    <!-- Link Input -->
    <div class="mb-3">
      <label class="form-label">Service Link</label>
      <div class="input-group">
        <span class="input-group-text">🔗</span>
        <input
          v-model="serviceStore.singleservice.links"
          type="url"
          class="form-control"
          placeholder="https://example.com"
          aria-label="Hyperlink"
        />
      </div>
    </div>

    <!-- Image Upload -->
    <div class="mb-3">
      <label class="form-label">Upload Image</label>
      <input
        type="file"
        class="form-control"
        accept="image/*"
        @change="handleImageChange"
        aria-label="Upload Image"
      />
    </div>

    <!-- Image Preview -->
    <div v-if="imagePreview" class="text-center mb-4">
      <img
        :src="imagePreview"
        alt="Image Preview"
        class="img-fluid rounded border"
        style="max-height: 300px"
      />
    </div>

    <!-- PDF Upload -->
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

    <!-- Submit Button -->
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
import { onBeforeRouteLeave } from 'vue-router'
import Swal from 'sweetalert2'
import loader from '@/components/loader.vue'

const serviceStore = useServiceStore()
// Holds the image preview URL
const imagePreview = ref(null)
const pdfName2 = ref(null)

const handlePdfUpload2 = (event) => {
  const file = event.target.files[0]
  if (file && file.type === 'application/pdf') {
    pdfName2.value = file.name
    serviceStore.setUploadedPdf(file) // ✅ Use the new store function
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
const handleSubmit = async () => {
  const validation = serviceStore.v$
  const isValid = await validation.$validate()
  console.log('validation error:', serviceStore.v$.$error)

  if (!isValid) {
    Swal.fire({ icon: 'error', title: 'يرجى ملئ الحقول المطلوبة' })
    return
  }
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

onBeforeRouteLeave(() => {
  if (serviceStore.serviceId) {
    serviceStore.serviceId = null
  }
  serviceStore.clearItems()
})
</script>

<style scoped>
.btn-color {
  color: aliceblue;
  background-color: #23486a;
}
</style>
