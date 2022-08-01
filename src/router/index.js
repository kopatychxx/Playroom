import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ProgramView from '@/views/ProgramView'
import InfrastructureView from '@/views/InfrastructureView'
import FoodView from '@/views/FoodView'
import ScheduleView from '@/views/ScheduleView'
import PriceView from '@/views/PriceView'
import Years23View from '@/views/Kindergarden/Years23View'

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
  },
  {
    path: '/schedule',
    name: 'Schedule',
    component: ScheduleView
  },
  {
    path: '/price',
    name: 'Price',
    component: PriceView
  },
  {
    path: '/2-3year',
    name: '2-3years',
    component: Years23View
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
