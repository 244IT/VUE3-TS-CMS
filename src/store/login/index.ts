import { Module } from "vuex"
import router from "@/router"

import {
  accountLogin,
  getUserInfoById,
  getUserMenuByRoleId
} from "../../service/login"

import localCache from "@/utils/cache"
import { mapMenusToRoutes, firstMenu } from "@/utils/mapMenus"
import { ILoginState } from "./types"
import { IRootState } from "../types"

const loginModule: Module<ILoginState, IRootState> = {
  namespaced: true,
  state() {
    return {
      token: "",
      userInfo: "",
      userMenus: "",
      activeMenu: ""
    }
  },
  getters: {},
  mutations: {
    saveToken(state, token: string) {
      state.token = token
    },
    saveUserInfo(state, userInfo: any) {
      state.userInfo = userInfo
    },
    saveUserMenu(state, userMenus: any) {
      state.userMenus = userMenus
      const routes = mapMenusToRoutes(userMenus)
      console.log(routes)
      routes.forEach((route) => {
        router.addRoute("main", route)
      })
    },
    saveActiveMene(state, menu: any) {
      state.activeMenu = menu
      localCache.setCache("activeMenu", menu)
    }
  },
  actions: {
    /* 登陆相关操作 */
    async accountLoginAction({ commit }, payload: any) {
      // 用户登陆
      const result = await accountLogin(payload)
      console.log(result)
      const { id, token } = result.data
      commit("saveToken", token)
      localCache.setCache("token", token)
      // 获取用户信息
      const userInfoResult = await getUserInfoById(id)
      const userInfo = userInfoResult.data
      commit("saveUserInfo", userInfo)
      localCache.setCache("userInfo", userInfo)
      // 获取用户的菜单权限
      const userMenus = await getUserMenuByRoleId(userInfo.role.id)
      commit("saveUserMenu", userMenus.data)
      localCache.setCache("userMenus", userMenus.data)

      // 获取默认激活的菜单id
      // const activeMenu = firstMenu
      // commit("saveActiveMene", activeMenu)
      // 跳转到系统首页
      router.push("/main")
    },
    /* 初始化数据 */
    initLoginData({ commit }) {
      console.log("initLoginData")
      const token = localCache.getCache("token")
      if (token) {
        commit("saveToken", token)
      }
      const userInfo = localCache.getCache("userInfo")
      if (userInfo) {
        commit("saveUserInfo", userInfo)
      }
      const userMenus = localCache.getCache("userMenus")
      if (userMenus) {
        commit("saveUserMenu", userMenus)
      }
      console.log("firstMenu")
      console.log(firstMenu)
      const activeMenu = localCache.getCache("activeMenu") ?? firstMenu

      if (activeMenu) {
        commit("saveActiveMene", activeMenu)
      }
    }
  }
}

export default loginModule
