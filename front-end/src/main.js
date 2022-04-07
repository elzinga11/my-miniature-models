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
  firstName: "",
  lastName: "",
  username: "",
  loggedIn: Boolean,
  temples: temples,
  cart: []
}
console.log(data)
console.log(temples)

data.loggedIn = false;

new Vue({
  router,
  data,
  render: h => h(App)
}).$mount('#app')
