import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/pages/Home'
import Scenery from '@/pages/Scenery'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/scenery',
    name: 'Scenery',
    component: Scenery
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
