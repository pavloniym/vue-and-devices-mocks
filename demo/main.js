import Vue from 'vue'
import Demo from './components'

Vue.config.productionTip = false

new Vue({
  render: h => h(Demo),
}).$mount('#app')
