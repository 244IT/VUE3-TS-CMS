import { Module } from "vuex"
import router from "@/router"

import {
  accountLogin,
  getUserInfoById,
  getUserMenuByRoleId
} from "../../service/login"

import localCache from "@/utils/cache"
import { ILoginState } from "./types"
import { IRootState } from "../types"

const loginModule: Module<ILoginState, IRootState> = {
  namespaced: true,
  state() {
    return {
      token: "",
      userInfo: "",
      userMenus: ""
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
      // 跳转到系统首页
      router.push("/main")
    },

    initLoginData({ commit }) {
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
    }
  }
}

export default loginModule