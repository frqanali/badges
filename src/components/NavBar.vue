<template>
  <nav class="navbar navbar-expand-lg body sticky-top" dir="ltr">
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
          <!-- Conditional rendering of language text -->
          {{ locale === 'ar' ? 'EN' : 'AR' }}
        </button>
        <ul class="dropdown-menu" aria-labelledby="languageDropdown">
          <li><button class="dropdown-item" @click="switchLanguage('en')">English</button></li>
          <li><button class="dropdown-item" @click="switchLanguage('ar')">عربي</button></li>
        </ul>
      </div>
      <div v-if="authStore.token" @click="router.push('/dashboard')" class="homeButton">
        <i class="bi bi-house-door-fill"></i>
      </div>

      <div class="collapse navbar-collapse" id="navbarText">
        <ul class="navbar-nav mx-auto pe-5 ps-2">
          <li class="nav-item">
            <a class="nav-link active fs-5 pointer" @click.prevent="navigateTo('sec-6')">
              {{ $t('contactUs') }}
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link active fs-5 pointer" @click.prevent="navigateTo('sec-5')">
              {{ $t('instructions') }}
            </a>
          </li>

          <li class="nav-item">
            <a class="nav-link active fs-5 pointer" @click.prevent="navigateTo('sec-4')">
              {{ $t('services') }}
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link active fs-5 pointer" @click.prevent="navigateTo('sec-3')">
              {{ $t('news') }}
            </a>
          </li>

          <li class="nav-item">
            <a class="nav-link active fs-5 pointer" @click.prevent="navigateTo('sec-2')">
              {{ $t('whoWeAre') }}
            </a>
          </li>
        </ul>

        <a class="navbar-brand logo-large" href="#">
          <router-link to="/">
            <img
              src="/src/assets/white_text_transparent.png"
              alt="Logo"
              width="150"
              height="35"
              class="me-3 mb-1"
              loading="lazy"
            />
          </router-link>

          <router-link to="/">
            <img src="/src/assets/GzLogoFi.png" alt="Logo" width="70" height="70" loading="lazy" />
          </router-link>
        </a>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { onMounted } from 'vue'
import { useI18n } from 'vue-i18n'
import { useRouter, useRoute } from 'vue-router'
import { useAuthStore } from '@/stores/useAuth'
import { useNewsStore } from '@/stores/useNews'

// stores
const newsStore = useNewsStore()
const authStore = useAuthStore()
const { locale } = useI18n()
const router = useRouter()
const route = useRoute()
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
const navigateTo = (sectionId) => {
  if (route.path !== '/') {
    // Navigate to home first
    router.push('/').then(() => {
      // Wait for navigation to complete, then scroll
      setTimeout(() => {
        document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' })
      }, 500) // Adjust delay if needed
    })
  } else {
    // If already on home, just scroll
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' })
  }
}
</script>

<style>
.navbar .container-fluid {
  margin: 0;
  padding: 0;
}
.homeButton {
  color: white;
  cursor: pointer;
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

.pointer {
  cursor: pointer;
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
  .navbar-collapse {
    text-align: right; /* Ensures text alignment also follows */
  }
}
</style>
