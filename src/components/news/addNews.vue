<template>
  <loader v-if="newsStore.loader" />
  <div v-else class="container mt-4">
    <h1 class="text-center mb-4">{{ headingLabel }}</h1>

    <!-- Titles -->
    <div class="row mb-3">
      <!-- Arabic News Title -->
      <div class="col-md-6 mb-3">
        <label class="form-label">{{ $t('newsTitle') }}</label>
        <input
          v-model="newsStore.singlenews.newstitle"
          type="text"
          class="form-control"
          :placeholder="$t('newsTitle')"
          aria-label="Arabic News Title"
          @blur="newsStore.v$.newstitle.$touch"
        />
        <div class="text-danger small mt-1" v-if="newsStore.v$.newstitle.$error">
          هذا الحقل مطلوب
        </div>
      </div>

      <!-- English News Title -->
      <div class="col-md-6 mb-3">
        <label class="form-label">News Title (English)</label>
        <input
          v-model="newsStore.singlenews.newstitle_en"
          type="text"
          class="form-control"
          placeholder="News Title"
          aria-label="English News Title"
          @blur="newsStore.v$.newstitle_en.$touch"
        />
        <div class="text-danger small mt-1" v-if="newsStore.v$.newstitle_en.$error">
          هذا الحقل مطلوب
        </div>
      </div>
    </div>

    <!-- About -->
    <div class="row mb-3">
      <!-- Arabic About -->
      <div class="col-md-6 mb-3">
        <label class="form-label">{{ $t('about') }}</label>
        <input
          v-model="newsStore.singlenews.pio"
          type="text"
          class="form-control"
          :placeholder="$t('about')"
          aria-label="About Arabic"
          @blur="newsStore.v$.pio.$touch"
        />
        <div class="text-danger small mt-1" v-if="newsStore.v$.pio.$error">هذا الحقل مطلوب</div>
      </div>

      <!-- English About -->
      <div class="col-md-6 mb-3">
        <label class="form-label">About (English)</label>
        <input
          v-model="newsStore.singlenews.pio_en"
          type="text"
          class="form-control"
          placeholder="About"
          aria-label="About English"
          @blur="newsStore.v$.pio_en.$touch"
        />
        <div class="text-danger small mt-1" v-if="newsStore.v$.pio_en.$error">هذا الحقل مطلوب</div>
      </div>
    </div>

    <!-- Content (Arabic) -->
    <div class="mb-3">
      <label class="form-label">{{ $t('content') }}</label>
      <textarea
        v-model="newsStore.singlenews.newsdescription"
        class="form-control"
        rows="4"
        :placeholder="$t('content')"
        aria-label="Arabic Content"
        @blur="newsStore.v$.newsdescription.$touch"
      ></textarea>
      <div class="text-danger small mt-1" v-if="newsStore.v$.newsdescription.$error">
        هذا الحقل مطلوب
      </div>
    </div>

    <!-- Content (English) -->
    <div class="mb-3">
      <label class="form-label">Content (English)</label>
      <textarea
        v-model="newsStore.singlenews.newsdescription_en"
        class="form-control"
        rows="4"
        placeholder="Content"
        aria-label="English Content"
        @blur="newsStore.v$.newsdescription_en.$touch"
      ></textarea>
      <div class="text-danger small mt-1" v-if="newsStore.v$.newsdescription_en.$error">
        هذا الحقل مطلوب
      </div>
    </div>

    <!-- Image Upload -->
    <div class="mb-3">
      <label class="form-label">Upload Image</label>
      <input
        type="file"
        ref="imageInput"
        class="form-control"
        accept="image/*"
        @change="handleImageChange"
        aria-label="Upload Image"
      />
    </div>

    <!-- Image Preview -->
    <div v-if="newsStore.imagePreview" class="text-center mb-4">
      <img
        :src="newsStore.imagePreview"
        alt="Image Preview"
        class="img-fluid rounded border"
        style="max-height: 300px"
      />
    </div>

    <!-- Submit Button -->
    <div class="d-flex justify-content-center mb-5">
      <button type="button" class="btn btn-color btn-lg px-5" @click="handleSubmit">
        <i class="bi bi-save me-2"></i> {{ buttonLabel }}
      </button>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useNewsStore } from '@/stores/useNews'
import { onBeforeRouteLeave } from 'vue-router'
import Swal from 'sweetalert2'
import loader from '@/components/loader.vue'

// Importing the useNewsStore from Pinia
const newsStore = useNewsStore()
// Holds the image preview URL

const handleImageChange = (event) => {
  const file = event.target.files[0]
  if (file) {
    newsStore.reader.onload = () => {
      newsStore.imagePreview = newsStore.reader.result // Set image preview
    }
    newsStore.reader.readAsDataURL(file)
    newsStore.setUploadedImage(file) // Set the uploaded file in the store
  }
}

const handleSubmit = async () => {
  const validation = newsStore.v$
  const isValid = await validation.$validate()
  console.log('validation error:', newsStore.v$.$error)

  if (!isValid) {
    Swal.fire({ icon: 'error', title: 'يرجى ملئ الحقول المطلوبة' })
    return
  }
  if (newsStore.newsId) {
    newsStore.editNews()
  } else {
    newsStore.createNews()
  }
}

const headingLabel = computed(() => {
  return newsStore.newsId ? 'تعديل الخبر' : 'اضافة خبر جديد'
})

const buttonLabel = computed(() => {
  return newsStore.newsId ? 'تعديل' : 'اضافة'
})

onBeforeRouteLeave(() => {
  if (newsStore.newsId) {
    newsStore.newsId = null
  }
  newsStore.clearItems()
})
</script>

<style scoped>
.btn-color {
  color: aliceblue;
  background-color: #23486a;
}
</style>
