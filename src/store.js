import Vue from 'vue'
import Vuex from 'vuex'
import http from '@/plugins/ajax'
import asyncRouters from '@/js/routersArr'
Vue.use(Vuex)
//权限筛选
function routerFilter(routers,role){
  let list=[];
   for(let value of Object.values(routers)) {
       
       if(value.meta.role==role){
         list.push(value);
       }
   }
  list.push( {path:'/404',component:()=>import('@/views/Erro.vue')},{ path: '*',redirect: '/404'})
   return list;   
}
export default new Vuex.Store({
  state: {
    token:false,
    asyncRouters:[],
  },
  getters:{
     
  },
  mutations: {
    getToken(state){
      state.token=localStorage.getItem('token');
   },
    setRouters(state,routers){
      state.asyncRouters=routerFilter(asyncRouters,routers);
    }
  },
  actions: {
       getRole (){
        return http.admin();
      },
      // getRouter({commit}){
      //   let list= routerFilter(asyncRouters,a.data.level);
      //   commit('setRouters',list);
      // }
  }

})
