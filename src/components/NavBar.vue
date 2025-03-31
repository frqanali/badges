<template>
  <nav class="navbar navbar-expand-lg body" dir="ltr">
    <div class="container-fluid background">
      <router-link to="/" class="fw-bold fontType ps-4 pt-3 mb-3 contact-info no-underline">
        {{ $t('gzoffice') }}
      </router-link>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarText"
        aria-controls="navbarText"
        aria-expanded="false"
        aria-label="Toggle navigation"
        style="margin-top: 5px; margin-right: 10px"
      >
        <span class="navbar-toggler-icon" style="filter: invert(100%)"></span>
      </button>

      <div class="dropdown">
        <button
          class="navbar-brand btn dropdown-toggle"
          type="button"
          id="languageDropdown"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            fill="currentColor"
            class="bi bi-globe"
            viewBox="0 0 16 16"
          >
            <path
              d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m7.5-6.923c-.67.204-1.335.82-1.887 1.855A8 8 0 0 0 5.145 4H7.5zM4.09 4a9.3 9.3 0 0 1 .64-1.539 7 7 0 0 1 .597-.933A7.03 7.03 0 0 0 2.255 4zm-.582 3.5c.03-.877.138-1.718.312-2.5H1.674a7 7 0 0 0-.656 2.5zM4.847 5a12.5 12.5 0 0 0-.338 2.5H7.5V5zM8.5 5v2.5h2.99a12.5 12.5 0 0 0-.337-2.5zM4.51 8.5a12.5 12.5 0 0 0 .337 2.5H7.5V8.5zm3.99 0V11h2.653c.187-.765.306-1.608.338-2.5zM5.145 12q.208.58.468 1.068c.552 1.035 1.218 1.65 1.887 1.855V12zm.182 2.472a7 7 0 0 1-.597-.933A9.3 9.3 0 0 1 4.09 12H2.255a7 7 0 0 0 3.072 2.472M3.82 11a13.7 13.7 0 0 1-.312-2.5h-2.49c.062.89.291 1.733.656 2.5zm6.853 3.472A7 7 0 0 0 13.745 12H11.91a9.3 9.3 0 0 1-.64 1.539 7 7 0 0 1-.597.933M8.5 12v2.923c.67-.204 1.335-.82 1.887-1.855q.26-.487.468-1.068zm3.68-1h2.146c.365-.767.594-1.61.656-2.5h-2.49a13.7 13.7 0 0 1-.312 2.5m2.802-3.5a7 7 0 0 0-.656-2.5H12.18c.174.782.282 1.623.312 2.5zM11.27 2.461c.247.464.462.98.64 1.539h1.835a7 7 0 0 0-3.072-2.472c.218.284.418.598.597.933M10.855 4a8 8 0 0 0-.468-1.068C9.835 1.897 9.17 1.282 8.5 1.077V4z"
            />
          </svg>
        </button>
        <ul class="dropdown-menu" aria-labelledby="languageDropdown">
          <li><button class="dropdown-item" @click="switchLanguage('en')">English</button></li>
          <li><button class="dropdown-item" @click="switchLanguage('ar')">عربي</button></li>
        </ul>
      </div>

      <div class="collapse navbar-collapse" id="navbarText">
        <ul class="navbar-nav mx-auto pe-5 ps-2">
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
            <a class="nav-link active fs-5" href="#sec-5" v-smooth-scroll>{{
              $t('instructions')
            }}</a>
          </li>
        </ul>

        <a class="navbar-brand logo-large" href="#">
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
.body,
html {
  margin: 0;
  padding: 0;
}
.contact-info {
  font-size: 1.2rem;
  color: white; /* Makes the text white */
}
.no-underline {
  text-decoration: none;
}
@media (max-width: 768px) {
  .dropdown {
    position: absolute;
    top: 15px; /* Adjust as needed */
    left: 275px;
    right: 320px; /* Center the dropdown on smaller devices */
    text-align: center;
  }
  .logo-large {
    display: none;
  }
}
</style>
