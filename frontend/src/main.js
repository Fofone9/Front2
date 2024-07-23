import Vue from 'vue'
import App from './App.vue'
import components from "@/components/UI"
import router from "@/router/index"
import store from "@/store"
import axios from "@/plugins/axios"
import directives from '@/directives'
Vue.config.productionTip = false
Vue.use(axios)

components.forEach(element => {
  Vue.component(element.name, element)
});

directives.forEach(directive => {
  Vue.directive(directive.name, directive)
})
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
