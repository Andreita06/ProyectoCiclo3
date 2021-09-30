import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../views/Login.vue'

Vue.use(VueRouter)

const routes = [
  // Diferentes rutas
  {
    path: '/',
    name: 'Login',
    component: Login
  },  
  {
    path: '/insmascota',
    name: 'InsMascota',
    component: () => import('../views/InsMascota.vue')
  },
  {
    path: '/inscripcion',
    name: 'Inscripcion',
    component: () => import('../views/Inscripcion.vue')
  },
  {
    path: '/consulta',
    name: 'Consulta',
    component: () => import('../views/Consulta.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
