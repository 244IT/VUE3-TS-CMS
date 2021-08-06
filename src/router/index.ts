import { createRouter, createWebHistory } from "vue-router"
import type { RouteRecordRaw } from "vue-router"

const routes: RouteRecordRaw[] = [
  {
    path: "/",
    redirect: "/home"
  },
  {
    path: "/login",
    component: () => import("../components/Login.vue")
  },
  {
    path: "/home",
    component: () => import("../components/Home.vue")
  }
]
const router = createRouter({
  routes,
  history: createWebHistory()
})

export default router
