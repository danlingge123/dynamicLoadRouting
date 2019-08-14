import router from "@/router.js"
import asyncRouter from '@/js/routersArr.js'
import store from '@/store.js'
router.beforeEach(async (to, from, next) => {
    store.commit('getToken');
    console.log('进入钩子');
    if (store.state.token) {
        if(to.path=='/login'){
            next('/');
        }else 
        if(store.state.asyncRouters.length==0){
            let a = await store.dispatch('getRole');
            store.commit('setRouters', a.data.level);
            router.addRoutes(store.state.asyncRouters);
            console.log(store.state.asyncRouters);
            console.log(14142);
            next({ ...to, replace: true });  
        }else{
          
            next();
            console.log("结束");
        }      
    }
    else if (to.name == 'login') {
        next();
        console.log(14142);
    } else {
        console.log(14142);
        next('/login');
    }


})