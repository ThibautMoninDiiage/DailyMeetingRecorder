import Vue from 'vue'
import VueRouter from 'vue-router'
import Register from '../views/Register.vue'
import Meeting from '../views/Meeting.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/register',
    name: 'Register',
    component: Register
  },
  {
    path: '/meeting',
    name: 'Meeting',
    component: Meeting
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
