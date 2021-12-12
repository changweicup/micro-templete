import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Home from '../views/home.vue'
import Layout from '../components/Layout/index.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/layout',
    name: 'Home',
    component: Layout
  },
  {
    path: '/app-vue2/:page*',
    name: 'app-vue2',
    component: () => import(/* webpackChunkName: "vue2" */ '../views/vue2.vue')
  },
  {
    path: '/app-vue3/:page*',
    name: 'app-vue3',
    component: () => import(/* webpackChunkName: "vue3" */ '../views/vue3.vue')
  }
]

const router = createRouter({
  // 设置主应用基础路由为main-vue3(用于后续部署)，则子应用基础路由(baseroute)为/main-vue3/xxx
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
