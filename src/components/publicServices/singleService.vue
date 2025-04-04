<template>
  <div class="container mt-5">
    <div class="row g-4">
      <!-- service news section -->
      <div class="col-lg-8 col-md-7 col-12">
        <div class="border w-100 p-3 d-flex flex-column gap-3">
          <div
            style="
              display: flex;
              justify-content: center;
              align-items: center;
              width: 400px; /* Set your preferred fixed width */
              height: 400px; /* Set your preferred fixed height */
              overflow: hidden;
              border: 1px solid #ddd; /* Optional: Adds a border for visualization */
              margin: 0 auto; /* Centers the div horizontally */
            "
          >
            <img
              :src="
                serviceStore.singleservice.image
                  ? `data:image/png;base64,${serviceStore.singleservice.image}`
                  : '/src/assets/GzLogoFi.png'
              "
              alt="service Image"
              class="fixed-image"
            />
          </div>
          <div class="d-flex flex-column gap-2">
            <h3 class="card-title">
              {{ serviceStore.singleservice.title }}
            </h3>
            <p class="card-text">
              {{ serviceStore.singleservice.description }}
            </p>
          </div>
          <div class="d-flex justify-content-end">
            <router-link to="/">
              <button class="btn btn-color">{{ $t('back') }}</button>
            </router-link>
          </div>
        </div>
      </div>
      <!-- pagination section -->
      <div class="col-lg-4 col-md-5 col-12">
        <div class="card">
          <div class="card-header">{{ $t('latestservices') }}</div>
          <ul class="list-group list-group-flush p-0">
            <li
              v-for="services in serviceStore.serviceList"
              :key="services.id"
              class="list-group-item"
              @click="serviceStore.getSingleService(services.id)"
            >
              {{ services.title }}
            </li>
          </ul>
          <div class="card-footer">
            <vue-awesome-paginate
              :total-items="serviceStore.totalServices"
              :items-per-page="5"
              :max-pages-shown="5"
              :show-breakpoint-buttons="false"
              v-model="currentPage"
              @click="onClickHandler"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { onMounted } from 'vue'
import { useRoute } from 'vue-router'
import { useServiceStore } from '@/stores/useService'

const onClickHandler = (page) => {
  serviceStore.getAllServices(page)
}

onMounted(async () => {
  await serviceStore.getAllServices()

  if (route.query.id) {
    serviceStore.getSingleService(route.query.id)
  } else {
    if (serviceStore.serviceList.length > 0) {
      serviceStore.getSingleService(serviceStore.serviceList[0].id)
    }
  }
})

const serviceStore = useServiceStore()
const currentPage = ref(1)
const route = useRoute()
</script>

<style>
.list-group-item:hover {
  background-color: #f0f0f0; /* light gray */
  cursor: pointer;
  transition: background-color 0.3s ease;
}
.pagination-container {
  display: flex;
  column-gap: 5px;
}

.paginate-buttons {
  height: 35px;
  width: 30px;

  cursor: pointer;

  background-color: rgb(242, 242, 242);

  border: 1px solid rgb(217, 217, 217);

  color: black;
}

.paginate-buttons:hover {
  background-color: #d8d8d8;
}

.active-page {
  background-color: #3498db;

  border: 1px solid #3498db;

  color: white;
}

.active-page:hover {
  background-color: #2988c8;
}
.btn-color {
  color: aliceblue;
  background-color: #23486a;
}
.fixed-image {
  width: 100%;
  height: 100%;
  object-fit: cover; /* Ensures the image covers the div without stretching */
}
</style>
