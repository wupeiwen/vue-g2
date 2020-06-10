/*
 * @Author: wupeiwen <javapeiwen2010@gmail.com>
 * @Date: 2020-06-09 17:14:06
 * @LastEditors: wupeiwen <javapeiwen2010@gmail.com>
 * @LastEditTime: 2020-06-10 09:43:01
 */ 
import Vue from 'vue'
import App from './App.vue'
import '@/components/registerG2Components.js'

Vue.config.productionTip = false

new Vue({
  render: h => h(App)
}).$mount('#app')
