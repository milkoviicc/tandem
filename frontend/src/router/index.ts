import { createRouter, createWebHistory } from 'vue-router'
import Landing from '../views/landing.vue'
import Login from '../views/login.vue'
import Register from '../views/register.vue'
import TandemUp from '../views/tandem-up.vue'
import Pricing from '@/views/pricing.vue'

const routes = [
  { path: '/', name: 'Landing', component: Landing },
  { path: '/login', name: 'Login', component: Login, meta: { hideNavbar: true} },
  { path: '/register', name: 'Register', component: Register, meta: { hideNavbar: true}},
  { path: '/register/pricing', name: 'Register Pricing', component: Pricing, meta: { hideNavbar: true}},
  { path: '/register/tandem-up', name: 'Tandem Up', component: TandemUp, meta: { hideNavbar: true }},
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
