<template>
  <nav class="navbar navbar-expand-lg" dir="ltr">
    <div class="container-fluid background">
      <a class="navbar-brand fw-bold fontType ps-4 pe-5" href="#">{{ $t('gzoffice') }}</a>
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
      <div>
        <button class="navbar-brand btn" @click="switchLanguage('en')">English</button>
        <button class="navbar-brand btn" @click="switchLanguage('ar')">عربي</button>
      </div>

      <div class="collapse navbar-collapse" id="navbarText">
        <ul class="navbar-nav mx-auto">
          <li class="nav-item">
            <a class="nav-link active fs-5" href="#sec-2" v-smooth-scroll>{{ $t('whoWeAre') }}</a>
          </li>
          <li class="nav-item">
            <a class="nav-link active fs-5" href="#sec-3" v-smooth-scroll>{{ $t('news') }}</a>
          </li>
          <li class="nav-item">
            <a class="nav-link active fs-5" href="#sec-4" v-smooth-scroll>{{ $t('services') }}</a>
          </li>
          <li class="nav-item">
            <a class="nav-link active fs-5" href="#sec-5" v-smooth-scroll>{{  $t('instructions') }}</a>
          </li>
        </ul>

        <form class="d-flex" role="search">
          <input
            class="form-control me-5 search-input"
            type="search"
            :placeholder="$t('search')"
            aria-label="Search"
          />
        </form>

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
import { onMounted } from 'vue'
import { useI18n } from 'vue-i18n'

const { locale } = useI18n()

const switchLanguage = (lang) => {
  locale.value = lang
  updateTextDirection(lang)
}

const updateTextDirection = (lang) => {
  document.documentElement.setAttribute('dir', lang === 'ar' ? 'rtl' : 'ltr')
}

onMounted(() => {
  document.documentElement.setAttribute('dir', 'rtl')
})
</script>

<style>
.navbar .container-fluid {
  margin: 0;
  padding: 0;
}
.search-input {
  width: 200px;
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
  text-align: right !important;
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
