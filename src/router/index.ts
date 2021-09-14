import { createRouter, createWebHistory } from "vue-router"
import type { RouteRecordRaw } from "vue-router"

import localCache from "@/utils/cache"
import { firstMenu } from "@/utils/mapMenus"

const routes: RouteRecordRaw[] = [
  {
    path: "/",
    redirect: "/main"
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
  },
  {
    path: "/:pathMatch(.*)*",
    component: () => import("@/views/notFount/NotFount.vue")
  }
]
const router = createRouter({
  routes,
  history: createWebHistory()
})

router.beforeEach((to) => {
  // 跳转到其他页面，校验token
  if (to.path !== "/login") {
    const token = localCache.getCache("token")
    if (!token) {
      return "/login"
    }
  }

  if (to.path === "/main") {
    return firstMenu.url
  }
})

export default router
