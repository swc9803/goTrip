import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/pages/Home'
import Travel from '@/pages/Travel'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/travel',
    name: 'Travel',
    component: Travel
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
