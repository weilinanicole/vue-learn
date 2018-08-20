import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)
import Home from '../views/home.vue'
import Demo from '../views/demo.vue'
export default new Router({
  routes: [
    {
      path: '/',
      redirect:'/home'
    },
    {
      path:'/home',
      component:Home
    },
    {
      path:'/demo',
      component:Demo
    },
  ]
})
