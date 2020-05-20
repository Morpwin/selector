import Vue from 'vue'
import App from './App.vue'
import store from './store'
import router from './router'
import './assets/css/reset.css'
// import 'lib-flexible/flexible'
import "./assets/js/rem.js"

Vue.config.productionTip = false

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')
