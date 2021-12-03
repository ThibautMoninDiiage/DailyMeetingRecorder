import Vue from 'vue'
import VueRouter from 'vue-router'
import Register from '../views/Register.vue'
import Login from '../views/Login.vue'
import Meeting from '../views/Meeting.vue'
import Project from '../views/Project.vue'
import ProjectDetail from '../views/ProjectDetail.vue';
import RecordingComponent from '../components/RecordingComponent'
import PageNotFound from '../views/PageNotFound';
import AuthenticationService from '../services/authenticationService'
import MeetingDetail from '../views/MeetingDetail.vue'


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
    component: ProjectDetail,
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/meetingDetail/:meetingId',
    name: 'meetingDetail',
    component: MeetingDetail,
    meta: {
      requiresAuth: true
    }
  },
  {
    path : '/record',
    name : 'RecordManager',
    component : RecordingComponent
  },
  {
    path: '/404',
    name: '404',
    component: PageNotFound
  },
  { 
    path: '*',
     beforeEnter: (to, from, next) => {
        next('/404') 
      } 
  },

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
})

router.beforeEach((to, from, next) => {
  if (to.meta.requiresAuth) {
    AuthenticationService.checkToken().then((isAuthorized) => {
      if(isAuthorized) {
        next();
      } else {
        next('/');
      }
    })
  } else {
    next();
  }
});


export default router
