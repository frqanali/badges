<script setup></script>

<template>
  <nav class="navbar navbar-expand-lg bg-body-tertiary">
    <div class="container-fluid">
      <a class="navbar-brand fw-bold fontType ;" href="#">مكتب اصدار هويات المنطقة الخضراء</a>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarText"
        aria-controls="navbarText"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarText">
        <ul class="navbar-nav mx-auto">
          <li class="nav-item">
            <a class="nav-link active fs-5" aria-current="page" href="#">من نحن</a>
          </li>
          <li class="nav-item">
            <a class="nav-link active fs-5" aria-current="page" href="#">الاخبار</a>
          </li>
          <li class="nav-item">
            <a class="nav-link active fs-5" href="#sec-4" v-smooth-scroll>{{ $t('services') }}</a>
          </li>
        </ul>

        <a class="navbar-brand" href="#">
          <img src="/public/image2.png" alt="Logo" width="150" height="35" class="me-3 mb-1" />
          <img src="/public/GzLogoFi.png" alt="Logo" width="70" height="70" class="" />
        </a>

        <div>
          <button class="btn btn-sm" @click="changeLan('en')">English</button>
          <button class="btn btn-sm" @click="changeLan('ar')">Arabic</button>
        </div>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { useI18n } from 'vue-i18n'

const { locale } = useI18n()
const changeLan = (lan) => {
  locale.value = lan
}
</script>
