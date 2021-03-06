import Vue from 'vue'
import VueRouter from 'vue-router'
import Beranda from '../views/Beranda.vue'
import Tentang from '../views/Tentang.vue'
import Kelas from '../views/Kelas.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Beranda',
    component: Beranda
  },
  {
    path: '/tentang',
    name: 'Tentang',
    component: Tentang
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    //component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/kelas',
    name: 'Kelas',
    component: Kelas
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
