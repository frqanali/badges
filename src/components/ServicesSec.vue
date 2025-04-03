<template>
  <div class="container mt-5" id="sec-4">
    <h2 class="text-center mb-4">{{ $t('services') }}</h2>
    <div class="row g-3 justify-content-center">
      <div class="col-md-6 me-6 ms-6" v-for="service in serviceStore.serviceList" :key="service.id">
        <div class="card backgrounds">
          <div class="card-body">
            <h5 class="card-title">{{ service.title }}</h5>
            <p class="card-text">
              {{ service.pio }}
            </p>
            <router-link :to="{ name: 'singleService', query: { id: service.id } }">
              <button class="btn btn-color">{{ $t('go') }}</button>
            </router-link>
          </div>
        </div>
      </div>
    </div>
    <div class="d-flex justify-content-center">
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

// stores
const serviceStore = useServiceStore()

// on mounted
onMounted(async () => {
  await serviceStore.getAllServices()
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
</style>
