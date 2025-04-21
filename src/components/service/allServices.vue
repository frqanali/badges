<template>
  <div class="container mt-4">
    <h3 class="mb-4">ادارة الخدمات</h3>
    <div class="table-responsive">
      <table class="table table-bordered table-hover align-middle text-center">
        <thead class="table-primary">
          <tr>
            <th>#</th>
            <th>اسم الخدمة</th>
            <th>الوصف</th>
            <th>اجراءات</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(service, index) in serviceStore.serviceList" :key="service.id">
            <td>{{ index + 1 }}</td>
            <td>{{ service.title }}</td>
            <td>
              {{ service.pio }}
            </td>
            <td style="max-width: 200px" class="text-truncate">
              <button
                class="btn btn-sm btn-success ms-2"
                @click="serviceStore.routerEditService(service.id)"
              >
                <i class="bi bi-pencil-square"></i>
              </button>
              <button
                v-if="service.serviceflag"
                class="btn btn-sm btn-warning ms-2"
                @click="serviceStore.pinServices(service.id, false)"
              >
                <i class="bi bi-pin-angle"></i>
              </button>
              <button
                v-if="!service.serviceflag"
                class="btn btn-sm btn-warning ms-2"
                @click="serviceStore.pinServices(service.id, true)"
              >
                <i class="bi bi-pin-fill"></i>
              </button>
              <button class="btn btn-sm btn-danger" @click="serviceStore.deleteService(service.id)">
                <i class="bi bi-trash3-fill"></i>
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <!-- 🔄 Pagination -->
    <vue-awesome-paginate
      v-if="serviceStore.totalServices > 0"
      :total-items="serviceStore.totalServices"
      :items-per-page="5"
      :max-pages-shown="5"
      :show-breakpoint-buttons="false"
      v-model="currentPage"
      @click="onClickHandler"
    />
  </div>
</template>

<script setup>
import { onMounted } from 'vue'
import { useServiceStore } from '@/stores/useService'
import { ref } from 'vue'

// stores
const serviceStore = useServiceStore()

const onClickHandler = (page) => {
  serviceStore.getAllServices(page)
}

const currentPage = ref(1)

onMounted(() => {
  serviceStore.getAllServices()
})
</script>

<style>
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
</style>
