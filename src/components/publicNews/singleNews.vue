<template>
  <div class="container mt-5 d-flex flex-row align-items-center gap-5">
    <div class="border w-100 p-3 d-flex flex-column gap-3">
      <div>
        <img src="/src/assets/GzLogoFi.png" class="img-fluid" alt="News Image 1" loading="lazy" />
      </div>
      <div class="d-flex flex-column gap-2">
        <h5 class="card-title">
          مكتب هويات المنطقة الخضراء يطلق الاستمارة الإلكترونية الجديدة بالتعاون مع مركز البيانات
          الوطني
        </h5>
        <p class="card-text">
          في إطار تبسيط الإجراءات وتطوير الخدمات المقدمة، يعلن مكتب هويات المنطقة الخضراء عن إطلاق
          الاستمارة الإلكترونية الجديدة الخاصة بإصدار وتجديد هويات الدخول إلى المنطقة الخضراء، وذلك
          بالتعاون مع مركز البيانات الوطني التابع للأمانة العامة لمجلس الوزراء، عبر منصة أور للخدمات
          الإلكترونية.
        </p>
      </div>
      <div class="d-flex justify-content-end">
        <router-link to="/">
          <button class="btn">رجوع</button>
        </router-link>
      </div>
    </div>

    <div class="test1">pagination</div>
  </div>
</template>

<script setup></script>

<style scoped>
.test1 {
  width: 75%;
  height: 100px;
  background-color: blue;
}
</style>
