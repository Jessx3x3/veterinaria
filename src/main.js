import Vue from 'vue'
import App from './App.vue'
import router from './router'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import x5GMaps from 'x5-gmaps'
// Option 1: Just your key
Vue.use(x5GMaps, 287941377406)
// Option 2: With libraries

Vue.config.productionTip = false

Vue.use(BootstrapVue)
Vue.use(IconsPlugin)
//Vue.use(x5GMaps, 'YOUR_GOOGLE_KEY')
//Vue.use(x5GMaps, { key: 'YOUR_GOOGLE_KEY', libraries: ['places'] })

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
