import { createRouter, createWebHistory } from '@ionic/vue-router';
import Tabs from '../views/Tabs.vue'

const routes= [
  {
    path: '/',
    component: Tabs,
    redirect: '/home'
  },
  {
    path: '/',
    component: Tabs,
    children: [
      {
        path: 'home',
        component: () => import('@/views/Home.vue')
      },
      {
        path: 'commune',
        component: () => import('@/views/Commune.vue')
      },
      {
        path: 'departement',
        component: () => import('@/views/Departement.vue')
      },
      {
        path: 'region',
        component: () => import('@/views/Region.vue')
      }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
