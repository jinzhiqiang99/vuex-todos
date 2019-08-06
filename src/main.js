import Vue from 'vue'
import App from './App.vue'

// 引入css
import './assets/base.css'
import './assets/index.css'

// 引入store
import store from './store'

import axios from 'axios'

Vue.config.productionTip = false

new Vue({
  store,
  render: function(h) {
    return h(App)
  }
}).$mount('#app')

// 演示跨域问题
axios.get('myapi/movie/in_theaters').then(res => {
  console.log(res)
})
