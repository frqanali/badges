<template>
  <h1>{{ headingLabel }}</h1>
  <div class="col-10">
    <div class="row">
      <div class="col-6">
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
      </div>
      <div class="col-6">
        <div class="input-group mb-3">
          <input
            v-model="newsStore.singlenews.newstitle_en"
            type="text"
            class="form-control"
            placeholder="News Title"
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
            v-model="newsStore.singlenews.pio"
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
            v-model="newsStore.singlenews.pio_en"
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
        v-model="newsStore.singlenews.newsdescription"
        class="form-control"
        aria-label="With textarea"
        :placeholder="$t('content')"
      ></textarea>
    </div>
    <div class="input-group">
      <textarea
        v-model="newsStore.singlenews.newsdescription_en"
        class="form-control"
        aria-label="With textarea"
        placeholder="content"
      ></textarea>
    </div>
    <!-- Image Upload Input -->
    <div class="input-group my-3">
      <input
        type="file"
        ref="imageInput"
        class="form-control"
        accept="image/*"
        @change="handleImageChange"
        aria-label="Upload image"
      />
    </div>
    <div v-if="newsStore.imagePreview" class="my-3">
      <img :src="newsStore.imagePreview" alt="Image Preview" class="img-fluid" />
    </div>

    <div class="container d-flex my-5">
      <button type="button" class="btn btn-color btn-lg" @click="handleSubmit">
        {{ buttonLabel }}
      </button>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useNewsStore } from '@/stores/useNews'

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
</script>

<style scoped>
.btn-color {
  color: aliceblue;
  background-color: #23486a;
}
</style>
