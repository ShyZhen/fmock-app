// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import 'mint-ui/lib/style.css'
import './assets/iconfont/iconfont.js'
import env from '../src/global/env.js'
import router from './router/index.js'
import VueResource from 'vue-resource';
import App from './App.vue'

Vue.use(VueResource);
Vue.http.options = env.VUE_RESOURCE_OPTION;

Vue.config.productionTip = false;


new Vue({
  // el: '#app',
  router,
  components: { App },
  template: '<App/>'
}).$mount('#app');
