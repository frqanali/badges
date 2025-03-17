import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import dashboard from '@/layout/dashboard.vue'
import DashBoard from '@/views/DashBoard.vue'
import staticNews from '@/components/news/staticNews.vue'
import addNews from '@/components/news/addNews.vue'
import Login from '../views/Login.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/login',
      name: 'login',
      component: Login,
    },
    {
      path: '/dashboard',
      component: DashBoard,
      meta: { layout: dashboard },
    },
    {
      path: '/staticNews',
      component: staticNews,
      meta: { layout: dashboard }, // we will add auth later
    },
    {
      path: '/addNews',
      component: addNews,
      meta: { layout: dashboard }, // we will add auth later
    },
  ],
})

export default router
