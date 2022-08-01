import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ProgramView from '@/views/ProgramView'
import InfrastructureView from '@/views/InfrastructureView'
import FoodView from '@/views/FoodView'
import ScheduleView from '@/views/ScheduleView'
import PriceView from '@/views/PriceView'
import Years23View from '@/views/Kindergarden/Years23View'
import Years34View from '@/views/Kindergarden/Years34View'
import Years45View from '@/views/Kindergarden/Years45View'
import Years56View from '@/views/Kindergarden/Years56View'

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
  },
  {
    path: '/3-4year',
    name: '3-4years',
    component: Years34View
  },
  {
    path: '/4-5year',
    name: '4-5years',
    component: Years45View
  },
  {
    path: '/5-6year',
    name: '5-6years',
    component: Years56View
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
