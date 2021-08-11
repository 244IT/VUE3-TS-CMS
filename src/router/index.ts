import { createRouter, createWebHistory } from "vue-router"
import type { RouteRecordRaw } from "vue-router"

import localCache from "@/utils/cache"

const routes: RouteRecordRaw[] = [
  {
    path: "/",
    redirect: "/login"
  },
  {
    path: "/login",
    name: "login",
    component: () => import("@/views/login/Login.vue")
  },
  {
    path: "/main",
    name: "main",
    component: () => import("@/views/main/Main.vue")
  }
]
const router = createRouter({
  routes,
  history: createWebHistory()
})

router.beforeEach((to, from) => {
  // 跳转到其他页面，校验token
  if (to.path !== "/login") {
    const token = localCache.getCache("token")
    if (!token) {
      return "/login"
    }
  }
})

export default router
