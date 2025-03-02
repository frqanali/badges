<template>
  <nav class="navbar navbar-expand-lg">
    <div class="container-fluid background">
      <a class="navbar-brand fw-bold fontType ps-4" href="#">{{ $t('gzoffice') }}</a>
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
        <ul class="navbar-nav mx-auto ps-5">
          <li class="nav-item">
            <a class="nav-link active fs-5" href="#sec-2" v-smooth-scroll>{{ $t('whoWeAre') }}</a>
          </li>
          <li class="nav-item">
            <a class="nav-link active fs-5" href="#sec-3" v-smooth-scroll>{{ $t('news') }}</a>
          </li>
          <li class="nav-item">
            <a class="nav-link active fs-5" href="#sec-4" v-smooth-scroll>{{ $t('services') }}</a>
          </li>
        </ul>
        <div>
          <button class="navbar-brand btn" @click="changeLan('en')">English</button>
          <button class="navbar-brand btn pe-5" @click="changeLan('ar')">عربي</button>
        </div>
        <a class="navbar-brand" href="#">
          <img
            src="/src/assets/white_text_transparent.png"
            alt="Logo"
            width="150"
            height="35"
            class="me-3 mb-1"
            loading="lazy"
          />
          <img src="/src/assets/GzLogoFi.png" alt="Logo" width="70" height="70" loading="lazy" />
        </a>
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

<style>
.navbar,
.container-fluid {
  margin: 0;
  padding: 0;
}

.navbar-nav {
  margin: 0;
  padding: 0;
}

.background {
  background: #23486a;
}

.navbar-brand {
  color: white;
}

.nav-link {
  color: white !important; /* Force the text color to be white */
}
.navbar-brand.btn {
  font-size: 0.85rem;
  padding: 5px 10px;
  border-radius: 3px;
}
</style>
