import Vue from 'vue'
import VueRouter from 'vue-router'
import MainPage from '@/pages/MainPage.vue'
import DishesPage from '@/pages/DishesPage.vue'
import IngredientsPage from "@/pages/IngredientsPage.vue"
import CooksPage from "@/pages/CooksPage.vue"

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'main',
    component: MainPage,
    meta: {requiresAuth: false}
  },
  {
    path: '/dishes',
    name: 'dishes',
    component: DishesPage,
    meta: {requiresAuth: true}
  },
  {
    path: '/ingredients',
    name: 'ingredients',
    component: IngredientsPage,
    meta: {requiresAuth: true}
  },
  {
    path: '/cooks',
    name: 'cooks',
    component: CooksPage,
    meta: {requiresAuth: true}
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  const token = store.state.login.token
  if (to.meta.requiresAuth && !token) {
      next("/login")
  } else {
      next()
  }
})

export default router
