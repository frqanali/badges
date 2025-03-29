<template>
  <h1>اضافة خبر جديد</h1>
  <div class="col-5">
    <div class="input-group mb-3">
      <input
        v-model="newsStore.singlenews.newstitle"
        type="text"
        class="form-control"
        :placeholder="$t('newsTitle')"
        aria-label="Recipient's username"
        aria-describedby="basic-addon2"
      />
    </div>

    <div class="input-group mb-3">
      <input
        v-model="newsStore.singlenews.pio"
        type="text"
        class="form-control"
        :placeholder="$t('about')"
        aria-label="Username"
      />
    </div>

    <div class="input-group">
      <textarea
        v-model="newsStore.singlenews.newsdescription"
        class="form-control"
        aria-label="With textarea"
        :placeholder="$t('content')"
      ></textarea>
    </div>

    <!-- Image Upload Input -->
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

    <div class="container d-flex my-5">
      <button type="button" class="btn btn-color btn-lg" @click="newsStore.createNews">
        {{ $t('send') }}
      </button>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useNewsStore } from '@/stores/useNews'

// Importing the useNewsStore from Pinia
const newsStore = useNewsStore()
// Holds the image preview URL
const imagePreview = ref(null)

const handleImageChange = (event) => {
  const file = event.target.files[0]
  if (file) {
    const reader = new FileReader()
    reader.onload = () => {
      imagePreview.value = reader.result // Set image preview
    }
    reader.readAsDataURL(file)
    newsStore.setUploadedImage(file) // Set the uploaded file in the store
  }
}
</script>

<style scoped>
.btn-color {
  color: aliceblue;
  background-color: #23486a;
}
</style>
