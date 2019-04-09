import Vue from 'vue'
import App from './App.vue'
import router from './route/admin'
import store from './store/admin'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
