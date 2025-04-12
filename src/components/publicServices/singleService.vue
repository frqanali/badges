<template>
  <div class="container mt-5">
    <div class="row g-4">
      <!-- service news section -->
      <div class="col-lg-8 col-md-7 col-12">
        <div class="border w-100 p-3 d-flex flex-column gap-3">
          <div
            class="d-flex justify-content-center align-items-center overflow-hidden border m-0"
            v-if="serviceStore.singleservice.image"
          >
            <img :src="serviceStore.singleservice.image" alt="service Image" class="fixed-image" />
          </div>
          <div class="d-flex flex-column gap-2">
            <h3 class="card-title" style="text-align: justify">
              {{
                locale === 'ar'
                  ? serviceStore.singleservice.servicetitle
                  : serviceStore.singleservice.servicetitle_en
              }}
            </h3>
            <p class="card-text" style="text-align: justify">
              {{
                locale === 'ar'
                  ? serviceStore.singleservice.servicedescription
                  : serviceStore.singleservice.servicedescription_en
              }}
            </p>
            <button class="btn btn-color" @click="goToService">الانتقال الى الخدمة</button>
            <button class="btn btn-color">تحميل الملف</button>
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
              {{ locale === 'ar' ? services.title : services.title_en }}
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

<script setup>
import { ref } from 'vue'
import { onMounted } from 'vue'
import { useRoute } from 'vue-router'
import { useServiceStore } from '@/stores/useService'
import { useI18n } from 'vue-i18n'

const { locale } = useI18n()
// route & store & variables
const serviceStore = useServiceStore()
const currentPage = ref(1)
const route = useRoute()

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

const goToService = () => {
  window.open(serviceStore.singleservice.links, '_blank')
}
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
  max-width: 100%;
  height: auto;
  max-height: 300px; /* أو الحجم اللي يناسبك */
  object-fit: contain;
}
</style>
