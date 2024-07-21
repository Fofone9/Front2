import Vue from 'vue'
import App from './App.vue'
import components from "@/components/UI"
import router from "@/router/index"
Vue.config.productionTip = false
components.forEach(element => {
  Vue.component(element.name, element)
});

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
