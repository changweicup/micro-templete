import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Layout from '../layout/index.vue'

export const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Layout',
    redirect: '/home',
    component: Layout,
    children: [
      {
        path: 'home',
        name: 'Home',
        component: () => import('../views/home.vue'),
        meta: {
          title: '首页'
        }
      },
      {
        path: 'app-vue2/:page*',
        name: 'app-vue2',
        component: () =>
          import(/* webpackChunkName: "vue2" */ '../views/vue2.vue'),
        meta: {
          title: 'app-vue2'
        }
      },
      {
        path: 'app-vue3/:page*',
        name: 'app-vue3',
        component: () =>
          import(/* webpackChunkName: "vue3" */ '../views/vue3.vue'),
        meta: {
          title: 'app-vue3'
        }
      }
    ]
  },
  {
    path: '/authority',
    redirect: 'Roles',
    component: Layout,
    name: 'Authority',
    children: [
      {
        path: 'roles',
        name: 'Roles',
        component: () => import('../views/roles.vue'),
        meta: {
          title: '角色管理'
        }
      },
      {
        path: 'users',
        name: 'Users',
        component: () => import('../views/users.vue'),
        meta: {
          title: '用户管理'
        }
      },
      {
        path: 'resource',
        name: 'Resource',
        component: () => import('../views/resource.vue'),
        meta: {
          title: '资源管理'
        }
      }
    ]
  }
]

const router = createRouter({
  // 设置主应用基础路由为main-vue3(用于后续部署)，则子应用基础路由(baseroute)为/main-vue3/xxx
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
