import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import dashboard from '@/layout/dashboard.vue'
import DashBoard from '@/views/DashBoard.vue'
import staticNews from '@/components/news/staticNews.vue'
import addNews from '@/components/news/addNews.vue'
import allNews from '@/components/news/allNews.vue'
import addService from '@/components/service/addService.vue'
import Login from '../views/Login.vue'
import InstructionView from '../views/InstructionView.vue'
import singleNews from '@/components/publicNews/singleNews.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/singleNews',
      name: 'singleNews',
      component: singleNews,
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
      meta: { layout: dashboard },
    },
    {
      path: '/allNews',
      component: allNews,
      meta: { layout: dashboard },
    },
    {
      path: '/addNews',
      component: addNews,
      meta: { layout: dashboard },
    },
    {
      path: '/addService',
      component: addService,
      meta: { layout: dashboard },
    },
    {
      path: '/instruction',
      name: 'instruction',
      component: InstructionView,
    },
  ],
})

export default router
