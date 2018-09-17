import Vue from 'vue'
import App from './App.vue'
import './components/g2/index'
import './components/g2Components/index'

Vue.config.productionTip = false

new Vue({
  render: h => h(App)
}).$mount('#app')
