<template>
  <div class="container mt-5">
    <div class="row g-4">
      <!-- single news section -->
      <div class="col-lg-8 col-md-7 col-12">
        <div class="border w-100 p-3 d-flex flex-column gap-3">
          <div style="display: flex; justify-content: center">
            <img
              src="/src/assets/GzLogoFi.png"
              class="img-fluid"
              alt="News Image 1"
              loading="lazy"
              style="width: 300px; height: auto"
            />
          </div>

          <div class="d-flex flex-column gap-2">
            <h3 class="card-title">
              مكتب هويات المنطقة الخضراء يطلق الاستمارة الإلكترونية الجديدة بالتعاون مع مركز
              البيانات الوطني
            </h3>
            <p class="card-text">
              في إطار تبسيط الإجراءات وتطوير الخدمات المقدمة، يعلن مكتب هويات المنطقة الخضراء عن
              إطلاق الاستمارة الإلكترونية الجديدة الخاصة بإصدار وتجديد هويات الدخول إلى المنطقة
              الخضراء، وذلك بالتعاون مع مركز البيانات الوطني التابع للأمانة العامة لمجلس الوزراء،
              عبر منصة أور للخدمات الإلكترونية.
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
          <div class="card-header">{{ $t('latestnews') }}</div>
          <ul class="list-group list-group-flush p-0">
            <li class="list-group-item">الخبر الاول</li>
            <li class="list-group-item">الخبر الثاني</li>
            <li class="list-group-item">الخبر الثالث</li>
          </ul>
          <div class="card-footer">
            <vue-awesome-paginate
              :total-items="50"
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

const onClickHandler = (page) => {
  console.log(page)
}

const currentPage = ref(1)
</script>

<style scoped>
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
  background-color: #3b6790;
}
</style>
