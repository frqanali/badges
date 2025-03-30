<template>
  <div class="container mt-4">
    <h3 class="mb-4">ادارة الاخبار</h3>
    <div class="table-responsive">
      <table class="table table-bordered table-hover align-middle text-center">
        <thead class="table-primary">
          <tr>
            <th>#</th>
            <th>اسم الخبر</th>
            <th>الوصف</th>
            <th>اجراءات</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(news, index) in newsStore.newsList" :key="news.id">
            <td>{{ index + 1 }}</td>
            <td>{{ news.title }}</td>
            <td>{{ news.pio }}</td>
            <td>
              <button class="btn btn-sm btn-warning ms-2">تعديل</button>
              <button class="btn btn-sm btn-danger" @click="newsStore.deleteNews(news.id)">
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
import { useNewsStore } from '@/stores/useNews'
import { ref } from 'vue'
// stores
const newsStore = useNewsStore()

const onClickHandler = (page) => {
  console.log(page)
}

const currentPage = ref(1)

onMounted(() => {
  newsStore.getAllNews()
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
