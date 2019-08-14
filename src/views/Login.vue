<template>
  <div class="one">
        <p>这里是登陆页面 </p>
     <a-button type="primary" @click="go">点击登陆</a-button>

     </div>
</template>

<script>
import{mapGetters,mapMutations} from 'vuex'
import routers from '@/js/routersArr'
export default {
  name: 'one',
  components: {
  },
  mounted(){
  },
  methods:{
      ...mapGetters([
         'getToken',
      ]),
      ...mapMutations([
         'setRouters'
      ]),
     
      async go(){
       let a= await this.$http.token();
       localStorage.setItem('token',a.data.token);
       let b= await this.$store.dispatch('getRole');
       this.$store.commit('setRouters', b.data.level);
       this.$router.addRoutes(this.$store.state.asyncRouters);
       this.$router.push('/');
       
      },
  }
}
</script>