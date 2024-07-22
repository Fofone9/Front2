import Vue from 'vue'
import App from './App.vue'
import components from "@/components/UI"
import router from "@/router/index"
import store from "@/store"


Vue.config.productionTip = false
components.forEach(element => {
  Vue.component(element.name, element)
});

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
