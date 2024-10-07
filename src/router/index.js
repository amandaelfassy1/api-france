import { createRouter, createWebHistory } from '@ionic/vue-router';
import Tabs from '../views/MainTabs.vue'

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
        component: () => import('@/views/HomeView.vue')
      },
      {
        path: 'commune',
        component: () => import('@/views/CommuneView.vue')
      },
      {
        path: 'departement',
        component: () => import('@/views/DepartementView.vue')
      },
      {
        path: 'region',
        component: () => import('@/views/RegionView.vue')
      }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
