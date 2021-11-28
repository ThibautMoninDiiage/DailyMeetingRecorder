import Vue from 'vue'
import VueRouter from 'vue-router'
import Register from '../views/Register.vue'
import Login from '../views/Login.vue'
import Meeting from '../views/Meeting.vue'
import Project from '../views/Project.vue'
import ProjectSelected from '../views/ProjectSelected.vue';

Vue.use(VueRouter)

const routes = [
  {
    path : '/',
    name : 'Home',
    component : Login
  },
  {
    path : '/register',
    name : 'Register',
    component : Register
  },
  {
    path : '/login',
    name : 'Login',
    component : Login
  },
  {
    path: '/meeting',
    name: 'Meeting',
    component: Meeting
  },
  {
    path: '/project',
    name: 'Project',
    component: Project
  },
  {
    path: '/projectSelected',
    name: 'ProjectSelected',
    component: ProjectSelected
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
