import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Erro from '@/views/Erro'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path:'/login',
      name:'login',
      component:()=>import('@/views/Login.vue')
    }
  ]
})