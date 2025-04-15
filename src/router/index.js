import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import dashboard from '@/layout/dashboard.vue'
import DashBoard from '@/views/DashBoard.vue'
import staticNews from '@/components/news/staticNews.vue'
import addNews from '@/components/news/addNews.vue'
import allNews from '@/components/news/allNews.vue'
import allServices from '@/components/service/allServices.vue'
import addService from '@/components/service/addService.vue'
import allInstructions from '@/components/instruction/allInstructions.vue'
import addInstruction from '@/components/instruction/addInstruction.vue'
import Login from '../views/Login.vue'
import loader from '@/components/loader.vue'

import InstructionView from '../views/InstructionView.vue'
import singleNews from '@/components/publicNews/singleNews.vue'
import singleService from '@/components/publicServices/singleService.vue'
import singleInstr from '@/components/publicInstruction/singleInstr.vue'
import { useAuthStore } from '@/stores/useAuth.js'
import applicationForm from '@/components/staticForm/applicationForm.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/applicationForm',
      name: 'applicationForm',
      component: applicationForm,
    },
    {
      path: '/singleNews',
      name: 'singleNews',
      component: singleNews,
    },
    {
      path: '/singleIntr',
      name: 'singleIntr',
      component: singleInstr,
    },
    {
      path: '/qr-result',
      name: 'qrResult',
      component: () => import('@/views/qrResult.vue'),
    },

    {
      path: '/singleService',
      name: 'singleService',
      component: singleService,
    },
    {
      path: '/login',
      name: 'login',
      component: Login,
    },
    {
      path: '/loader',
      name: 'loader',
      component: loader,
    },
    {
      path: '/dashboard',
      name: 'dashboard',
      component: DashBoard,
      meta: { requireAuth: true, layout: dashboard },
    },
    {
      path: '/staticNews',
      component: staticNews,
      meta: { layout: dashboard },
    },
    {
      path: '/allNews',
      component: allNews,
      meta: { requireAuth: true, layout: dashboard },
    },
    {
      path: '/addNews',
      component: addNews,
      meta: { requireAuth: true, layout: dashboard },
    },
    {
      path: '/addService',
      name: 'addService',
      component: addService,
      meta: { requireAuth: true, layout: dashboard },
    },
    {
      path: '/allServices',
      component: allServices,
      meta: { requireAuth: true, layout: dashboard },
    },
    {
      path: '/addInstruction',
      name: 'addInstruction',
      component: addInstruction,
      meta: { requireAuth: true, layout: dashboard },
    },
    {
      path: '/allInstructions',
      component: allInstructions,
      meta: { requireAuth: true, layout: dashboard },
    },
    {
      path: '/instruction',
      name: 'instruction',
      component: InstructionView,
    },
  ],
  scrollBehavior() {
    return { top: 0 }
  },
})

router.beforeEach((to, from, next) => {
  const authStore = useAuthStore()

  // if the route requires auth and user is not logged in re direct to login
  if (to.meta.requireAuth && !authStore.token) {
    next({ name: 'login' })
  } else {
    next()
  }
})

export default router
