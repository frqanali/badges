<template>
  <div class="container mt-5" id="sec-4">
    <h2 class="text-center my-5 underline-text">{{ $t('services') }}</h2>
    <div class="row g-3 justify-content-center">
      <div class="row">
        <div class="col-md-6 me-6 ms-6 mb-4">
          <div class="card backgrounds">
            <div class="card-body">
              <h5 class="card-title">{{ $t('gzapp2') }}</h5>
              <p class="card-text">{{ $t('gzapp2') }}</p>
              <a href="https://gz-amn.ur.gov.iq/" target="_blank" rel="noopener noreferrer">
                <button class="btn btn-color">{{ $t('go') }}</button>
              </a>
            </div>
          </div>
        </div>
        <div class="col-md-6 me-6 ms-6">
          <div class="card backgrounds">
            <div class="card-body">
              <h5 class="card-title">{{ $t('gzapp') }}</h5>
              <p class="card-text">{{ $t('gzapp') }}</p>
              <a href="https://gzoffice.ur.gov.iq/" target="_blank" rel="noopener noreferrer">
                <button class="btn btn-color">{{ $t('go') }}</button>
              </a>
            </div>
          </div>
        </div>

        <div class="col-md-6 mb-5">
          <div class="card backgrounds">
            <div class="card-body">
              <h5 class="card-title">{{ $t('gzapp1') }}</h5>
              <p class="card-text">{{ $t('gzapp1') }}</p>
              <a href="https://gzspecial.ur.gov.iq/" target="_blank" rel="noopener noreferrer">
                <button class="btn btn-danger">{{ $t('go') }}</button>
              </a>
            </div>
          </div>
        </div>
      </div>

      <div v-if="serviceStore.pinnedServicesList.length > 0" class="container">
        <div class="row">
          <div
            class="col-md-6 mb-4"
            v-for="service in serviceStore.pinnedServicesList"
            :key="service.id"
          >
            <div class="card backgrounds h-100">
              <div class="card-body">
                <h5 class="card-title">{{ locale === 'ar' ? service.title : service.title_en }}</h5>
                <p class="card-text">
                  {{ truncateWords(service.pio, 10) }}
                </p>
                <router-link :to="{ name: 'singleService', query: { id: service.id } }">
                  <button class="btn btn-color">{{ $t('go') }}</button>
                </router-link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div v-else class="container">
        <div class="row">
          <div class="col-md-6 mb-4" v-for="service in serviceStore.serviceList" :key="service.id">
            <div class="card backgrounds h-100">
              <div class="card-body">
                <h5 class="card-title">{{ locale === 'ar' ? service.title : service.title_en }}</h5>
                <p class="card-text">
                  {{ truncateWords(service.pio, 10) }}
                </p>
                <router-link :to="{ name: 'singleService', query: { id: service.id } }">
                  <button class="btn btn-color">{{ $t('go') }}</button>
                </router-link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="d-flex justify-content-center mt-3">
      <router-link to="/singleService"
        ><button class="btn btn-colorr">{{ $t('readmore') }}</button>
      </router-link>
    </div>
  </div>
</template>

<script setup>
// imports
import { useServiceStore } from '@/stores/useService'
import { onMounted } from 'vue'
import { useI18n } from 'vue-i18n'

const { locale } = useI18n()
const truncateWords = (text, wordLimit = 5) => {
  if (!text) return ''
  const words = text.split(' ')
  return words.length > wordLimit ? words.slice(0, wordLimit).join(' ') + '...' : text
}

// stores
const serviceStore = useServiceStore()

// on mounted
onMounted(async () => {
  await serviceStore.getPinnedService()
  if (serviceStore.pinnedServicesList.length == 0) {
    await serviceStore.getAllServices()
  }
})
</script>
<style scoped>
.btn-color {
  color: aliceblue;
  background-color: #3b6790;
}
.btn-colorr {
  background-color: transparent;
  border: 2px solid #3b6790;
  border-radius: 5px;
}

.backgrounds {
  background: #f5f7f8;
  border: 2px solid #e8eaeb;
}
.card {
  border: 2px solid #4c7b8b;
  border-radius: 10px;
  box-shadow: #23486a;
  transition:
    transform 0.3s ease,
    box-shadow 0.3s ease;
}

.card:hover {
  border-color: aliceblue;
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.2);
  transform: scale(1.05);
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
  width: 12%; /* Same width as text */
  height: 3px;
  background-color: #4c7b8b;
  transform: translateX(-50%); /* Center the underline */
}
</style>
