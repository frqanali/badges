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
            <td>{{ service.pio }}</td>
            <td>
              <button
                class="btn btn-sm btn-warning ms-2"
                @click="serviceStore.editService(service.id)"
              >
                تعديل
              </button>
              <button class="btn btn-sm btn-danger" @click="serviceStore.deleteService(service.id)">
                حذف
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <!-- 🔄 Pagination -->
    <vue-awesome-paginate
      :total-items="50"
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
  console.log(page)
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
