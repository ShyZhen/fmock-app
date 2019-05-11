// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import 'mint-ui/lib/style.css'
import './assets/iconfont/iconfont.js'
import router from './router/index.js'
import App from './App.vue'
import store from './store/index'

// import './axios/index'
import './vue-resource/index'

Vue.config.productionTip = false;

new Vue({
  // el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
}).$mount('#app');
