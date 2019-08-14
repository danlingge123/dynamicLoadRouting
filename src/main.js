import Vue from 'vue'
import http from './plugins/ajax'
import App from './App.vue'
import router from './router'
import store from './store'
import 'ant-design-vue/dist/antd.less'
import antd from 'ant-design-vue'
import './js/routerConfig'

Vue.use(antd);
Vue.prototype.$http=http;
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
