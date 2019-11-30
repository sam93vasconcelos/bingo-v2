import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Sorteio from '../views/Sorteio.vue'
import Cartela from '../views/Cartela.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/sorteio',
    name: 'sorteio',
    component: Sorteio
  },
  {
    path: '/cartela',
    name: 'cartela',
    component: Cartela
  }
]

const router = new VueRouter({
  routes
})

export default router
