import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  linkActiveClass: 'active',
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue'),
    },
    {
      path: '/mount',
      name: 'mount',
      component: () => import('../views/Test01View.vue'),
    },
    {
      path: '/axios',
      name: 'axios',
      component: () => import('../views/Test02View.vue'),
    },
  ],
})

export default router
