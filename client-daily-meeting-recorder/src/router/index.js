import Vue from 'vue'
import VueRouter from 'vue-router'
import Register from '../views/Register.vue'
import Login from '../views/Login.vue'
import Meeting from '../views/Meeting.vue'
import Project from '../views/Project.vue'
import projectDetail from '../views/ProjectDetail.vue';
import RecordingComponent from '../components/RecordingComponent'

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
    path: '/meeting/:projectId',
    name: 'Meeting',
    component: Meeting
  },
  {
    path: '/project',
    name: 'Project',
    component: Project
  },
  {
    path: '/projectDetail/:projectId',
    name: 'projectDetail',
    component: projectDetail,
    meta: {requiresAuth: true}
  },
  {
    path : '/record',
    name : 'RecordManager',
    component : RecordingComponent
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  console.log(to.path)
  if(routes.find(route => route.path === to.path)){
    if (to.meta.requiresAuth) {
      if (!sessionStorage.getItem("jwt")) {
        next("/");
      } else {
        next();
      }
    } else {
      next();
    }
  }
  else{
    next();
  }
  
});

export default router
