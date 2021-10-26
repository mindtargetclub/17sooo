import Vue from 'vue'
import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify'
import Print from 'vue-print-nb'

Vue.use(Print); //註冊

Vue.config.productionTip = false 

new Vue({
  router,
  vuetify,
  print,
  render: h => h(App)
}).$mount('#app')