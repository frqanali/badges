<template>
  <div class="container mt-5" id="sec-3">
    <h2 class="text-center my-5 underline-text">{{ $t('news') }}</h2>

    <div class="col">
      <!--loading skeleton-->
      <div v-if="loading">
        <!-- Repeat skeletons to match number of expected slides -->
        <div class="card mb-4">
          <div class="row">
            <div class="col my-5 mx-5 order-2 order-md-1">
              <div class="card-body">
                <div class="skeleton-title mb-3"></div>
                <div class="skeleton-button"></div>
              </div>
            </div>
            <div class="col-md-6 d-flex order-1 order-md-2">
              <div class="skeleton-img w-100"></div>
            </div>
          </div>
        </div>
      </div>
      <!-- News pinned item -->
      <div
        v-else
        id="carouselExampleFade"
        class="carousel slide carousel-fade"
        data-bs-ride="carousel"
      >
        <div class="carousel-inner">
          <div
            class="carousel-item"
            :class="{ active: index === 0 }"
            v-for="(news, index) in newsStore.pinnedNewsList"
            :key="news.id"
          >
            <div class="card mb-4">
              <div class="row">
                <div class="col my-5 mx-5 order-2 order-md-1">
                  <div class="card-body">
                    <h5 class="card-title fs-3" style="text-align: justify">
                      {{ news.title }}
                    </h5>
                    <router-link :to="{ name: 'singleNews', query: { id: news.id } }">
                      <button class="btn btn-color mt-4">{{ $t('more') }}</button>
                    </router-link>
                  </div>
                </div>

                <div class="col-md-6 d-flex order-1 order-md-2">
                  <img
                    :src="
                      news.image
                        ? `data:image/png;base64,${news.image}`
                        : '/src/assets/GzLogoFi.png'
                    "
                    class="newsImg1 img-fluid"
                    :class="locale === 'ar' ? 'ltr-radius' : 'rtl-radius'"
                    alt="News Image"
                    loading="lazy"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <button
          class="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleFade"
          data-bs-slide="prev"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="50"
            height="50"
            class="bi bi-arrow-left-short"
            viewBox="0 0 16 16"
          >
            <path
              fill-rule="evenodd"
              d="M12 8a.5.5 0 0 1-.5.5H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5a.5.5 0 0 1 .5.5"
            />
          </svg>
        </button>
        <button
          class="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleFade"
          data-bs-slide="next"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="50"
            height="50"
            class="bi bi-arrow-right-short"
            viewBox="0 0 16 16"
          >
            <path
              fill-rule="evenodd"
              d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8"
            />
          </svg>
        </button>
      </div>

      <div class="row" v-if="loadingThree">
        <div class="col-md-4 mb-4" v-for="n in 3" :key="n">
          <div class="card">
            <div class="skeleton-img-top w-100"></div>
            <div class="card-body">
              <div class="skeleton-title mb-2"></div>
              <div class="skeleton-text mb-2"></div>

              <div class="skeleton-button"></div>
            </div>
          </div>
        </div>
      </div>

      <div class="row" v-else>
        <!-- News Item 1 -->
        <div class="col-md-4 mb-4" v-for="news in newsStore.threeNewsList" :key="news.id">
          <div class="card">
            <img
              :src="news.image ? `data:image/png;base64,${news.image}` : '/src/assets/GzLogoFi.png'"
              class="card-img-top img-fluid newsImg"
              alt="News Image 1"
              loading="lazy"
            />
            <div class="card-body">
              <h5 class="card-title" style="text-align: justify">{{ news.title }}</h5>
              <p class="card-text">{{ truncateWords(news.pio, 10) }}</p>
              <router-link :to="{ name: 'singleNews', query: { id: news.id } }">
                <button class="btn btn-color">{{ $t('more') }}</button>
              </router-link>
            </div>
          </div>
        </div>
      </div>
      <div class="d-flex justify-content-center">
        <router-link to="/singleNews"
          ><button class="btn btn-colorr">{{ $t('readmore') }}</button>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script setup>
// imports
import { useNewsStore } from '@/stores/useNews'
import { onMounted, ref } from 'vue'
import { useI18n } from 'vue-i18n'

// stores & i18n
const newsStore = useNewsStore()
const { locale } = useI18n()

// reactive variables
const loading = ref(true)
const loadingThree = ref(true)
// on mounted
onMounted(async () => {
  await newsStore.threeNews()
  loadingThree.value = false
  await newsStore.getPinnedNews()
  loading.value = false
})
// methods
const truncateWords = (text, wordLimit = 5) => {
  if (!text) return ''
  const words = text.split(' ')
  return words.length > wordLimit ? words.slice(0, wordLimit).join(' ') + '...' : text
}
</script>

<style scoped>
.card {
  height: 100%; /* Ensures uniform height */
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border: 2px solid #4c7b8b;
  border-radius: 10px;
  box-shadow: #23486a;
  transition:
    transform 0.3s ease,
    box-shadow 0.3s ease;
}

.card-body {
  flex-grow: 1; /* Allows the text content to fill the available space */
}

.newsImg1 {
  width: 100%; /* Ensures images are the same width */
  height: 400px; /* Ensures images are the same height */
  object-fit: cover; /* Prevents image distortion */
}

.ltr-radius {
  border-top-left-radius: 8px;
  border-bottom-left-radius: 8px;
}

.rtl-radius {
  border-top-right-radius: 8px;
  border-bottom-right-radius: 8px;
}

.newsImg {
  height: 200px; /* Ensures images are the same height */
  object-fit: cover; /* Prevents image distortion */
  margin: auto;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}

.btn-color {
  color: aliceblue;
  background-color: #23486a;
}
.btn-colorr {
  background-color: transparent;
  border: 2px solid #3b6790;
  border-radius: 5px;
}
.carousel-control-prev,
.carousel-control-next {
  width: 80px;
  display: flex;
  justify-content: center;
}
.underline-text {
  display: inline-block;
  position: relative;
  width: 100%; /* Ensures it takes up the full width of the parent */
  text-align: center; /* Centers the text itself */
}

.underline-text::after {
  content: '';
  position: absolute;
  left: 50%;
  bottom: -10px;
  width: 10%; /* Same width as text */
  height: 3px;
  background-color: #4c7b8b;
  transform: translateX(-50%); /* Center the underline */
}

.skeleton-title {
  height: 30px;
  width: 80%;
  background-color: #ddd;
  border-radius: 4px;
  animation: pulse 1.5s infinite;
}

.skeleton-button {
  height: 35px;
  width: 100px;
  background-color: #ccc;
  border-radius: 8px;
  animation: pulse 1.5s infinite;
}

.skeleton-text {
  height: 50px;
  width: 90%;
  background-color: #e0e0e0;
  border-radius: 4px;
  animation: pulse 1.5s infinite;
}

.skeleton-img-top {
  height: 200px;
  background-color: #ddd;
  border-radius: 8px;
  animation: pulse 1.5s infinite;
}

.skeleton-img {
  height: 400px;
  background-color: #ddd;
  border-radius: 8px;
  animation: pulse 1.5s infinite;
}

@keyframes pulse {
  0% {
    background-color: #e0e0e0;
  }
  50% {
    background-color: #f0f0f0;
  }
  100% {
    background-color: #e0e0e0;
  }
}
</style>
