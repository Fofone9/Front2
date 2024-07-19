import Vue from 'vue'
import App from './App.vue'
import components from "@/components/UI"
Vue.config.productionTip = false

components.forEach(element => {
  Vue.component(element.name, element)
});

new Vue({
  render: h => h(App)
}).$mount('#app')
