import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  
  routes: [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    
    component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
  },
  {
    path: '/login',
    name: 'login',
    
    component: () => import(/* webpackChunkName: "about" */ './views/Login.vue')
  },
  {
    path: '/register',
    name: 'register',
    
    component: () => import(/* webpackChunkName: "about" */ './views/Register.vue')
  },
  {
    path: '/profile',
    name: 'profile',
    
    component: () => import(/* webpackChunkName: "about" */ './views/Profile.vue')
  }
]

});



export default router;
