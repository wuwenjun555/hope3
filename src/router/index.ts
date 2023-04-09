import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import pages from '@/pages'

export const routes: Array<RouteRecordRaw> = [
  { path: '/login', name: 'login', component: pages.Login },
  { path: '/home', name: 'home', component: pages.Home },
  { path: '/about', name: 'about', component: pages.About },
  { path: '/try', name: 'try', component: pages.Try },
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
