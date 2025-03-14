import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import dashboard from '@/layout/dashboard.vue'
import DashBoard from '@/views/DashBoard.vue'
import staticNews from '@/components/news/staticNews.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
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
  ],
})

export default router
