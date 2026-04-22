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
    {
      path: '/axios2',
      name: 'axios2',
      component: () => import('../views/Test03View.vue'),
    },
    {
      path: '/grid',
      name: 'grid',
      component: () => import('../views/TestGridView.vue'),
    },
    {
      path: '/grid2',
      name: 'grid2',
      component: () => import('../views/Test04View.vue'),
    },
    {
      path: '/grid3',
      name: 'grid3',
      component: () => import('../views/Test05View.vue'),
    },
    {
      path: '/grid4',
      name: 'grid4',
      component: () => import('../views/Test06View.vue'),
    },
  ],
})

export default router
