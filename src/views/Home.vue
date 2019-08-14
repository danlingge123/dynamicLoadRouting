<template>
  <div class="home">
     <p>hello</p>
     
      <router-link  to='/one'>第一路由</router-link>
      <router-link  to='/two'>第二路由</router-link>
      <!-- <router-link v-for="prod in asyncRouters" :to='prod.path' :key='prod.name'>{{prod.name}}</router-link> -->
  </div>
</template>

<script>
import{mapState,mapGetters,mapMutations} from 'vuex'
import routers from '@/js/routersArr'
export default {
  name: 'home',
  data(){
    return{
    
    }
  },
  async mounted(){
      //  let b= await this.$http.admin();
      //  let c= this.routerFilter(routers,b.data.level);
      //  this.setRouters(c); //当前路由设置到仓库
  },
  computed:{
     ...mapState([
      'asyncRouters'
     ])
  },
  components: {
  },
  methods:{
      ...mapMutations([
         'setRouters'
      ]),
  
     }
  
}
</script>
