import { createI18n } from 'vue-i18n'

// ✅ Define translations
const messages = {
  en: {
    services: 'services',
  },
  ar: {
    services: 'الخدمات',
  },
}

// ✅ Create Vue I18n Instance
const i18n = createI18n({
  legacy: false, // Use Composition API
  locale: 'ar', // Default language
  fallbackLocale: 'en', // Fallback language
  messages,
})

export default i18n
