import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import pages from '@/pages'

export const routes: Array<RouteRecordRaw> = [
  { path: '/home', component: pages.Home },
  { path: '/about', component: pages.About },
  {
    path: '/',
    name: 'app',
    meta: {
      title: 'App',
    },
    component: () => import('@/App.vue'),
  },

  // 替代vue2中的'*'通配符路径
  { path: '/:pathMatch(.*)*', redirect: '/' },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

export default router
