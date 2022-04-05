import Vue from 'vue'
import App from './App.vue'
import router from './router'
import BootstrapVue from 'bootstrap-vue/dist/bootstrap-vue.esm';
import 'bootstrap-vue/dist/bootstrap-vue.css';
import 'bootstrap/dist/css/bootstrap.css';
import '../src/css/styles.css'
import temples from '../src/temple'

Vue.config.productionTip = false

Vue.use(BootstrapVue)

let data = {
  temples: temples,
  cart: []
}
console.log(data)
console.log(temples)

new Vue({
  router,
  data,
  render: h => h(App)
}).$mount('#app')
