import './assets/main.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import 'bootstrap-icons/font/bootstrap-icons.css'
import i18n from './locals/i18n'

// import the package
import VueAwesomePaginate from 'vue-awesome-paginate'
// import the necessary css file
import 'vue-awesome-paginate/dist/style.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

const app = createApp(App)
app.use(i18n)
app.use(VueAwesomePaginate)
app.use(createPinia())
app.use(router)

app.mount('#app')
