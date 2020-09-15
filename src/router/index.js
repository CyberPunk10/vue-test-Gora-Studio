import Vue from 'vue'
import VueRouter from 'vue-router'
// import Login from '../views/Login.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/about',
    name: 'About',
    meta: {
      layout: 'main'
    },
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/',
    name: 'login',
    meta: {
      layout: 'empty'
    },
    component: () => import('../views/Login.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
