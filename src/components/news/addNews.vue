<template>
  <h1 class="text-center my-4">{{ headingLabel }}</h1>
  <div class="container">
    <div class="row mb-3">
      <div class="col-md-6">
        <label class="form-label">{{ $t('newsTitle') }}</label>
        <div class="input-group">
          <input
            v-model="newsStore.singlenews.newstitle"
            type="text"
            class="form-control"
            :placeholder="$t('newsTitle')"
            aria-label="Arabic News Title"
          />
        </div>
      </div>
      <div class="col-md-6">
        <label class="form-label">News Title (English)</label>
        <div class="input-group">
          <input
            v-model="newsStore.singlenews.newstitle_en"
            type="text"
            class="form-control"
            placeholder="News Title"
            aria-label="English News Title"
          />
        </div>
      </div>
    </div>

    <div class="row mb-3">
      <div class="col-md-6">
        <label class="form-label">{{ $t('about') }}</label>
        <div class="input-group">
          <input
            v-model="newsStore.singlenews.pio"
            type="text"
            class="form-control"
            :placeholder="$t('about')"
            aria-label="About Arabic"
          />
        </div>
      </div>
      <div class="col-md-6">
        <label class="form-label">About (English)</label>
        <div class="input-group">
          <input
            v-model="newsStore.singlenews.pio_en"
            type="text"
            class="form-control"
            placeholder="about"
            aria-label="About English"
          />
        </div>
      </div>
    </div>

    <div class="mb-3">
      <label class="form-label">{{ $t('content') }}</label>
      <textarea
        v-model="newsStore.singlenews.newsdescription"
        class="form-control"
        rows="4"
        aria-label="Arabic Content"
        :placeholder="$t('content')"
      ></textarea>
    </div>

    <div class="mb-3">
      <label class="form-label">Content (English)</label>
      <textarea
        v-model="newsStore.singlenews.newsdescription_en"
        class="form-control"
        rows="4"
        aria-label="English Content"
        placeholder="content"
      ></textarea>
    </div>

    <div class="mb-3">
      <label class="form-label">Upload Image</label>
      <input
        type="file"
        ref="imageInput"
        class="form-control"
        accept="image/*"
        @change="handleImageChange"
        aria-label="Upload image"
      />
    </div>

    <div v-if="newsStore.imagePreview" class="my-3 text-center">
      <img
        :src="newsStore.imagePreview"
        alt="Image Preview"
        class="img-fluid rounded border"
        style="max-height: 300px"
      />
    </div>

    <div class="d-flex justify-content-center my-4">
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

const handleSubmit = () => {
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
