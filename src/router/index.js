import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ProgramView from '@/views/ProgramView'
import InfrastructureView from '@/views/InfrastructureView'
import FoodView from '@/views/FoodView'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/program',
    name: 'program',
    component: ProgramView
  },
  {
    path: '/infrastructure',
    name: 'Infrastructure',
    component: InfrastructureView
  },
  {
    path: '/food',
    name: 'Food',
    component: FoodView
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
