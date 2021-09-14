import { createStore, useStore as useVuexStore } from "vuex"
import type { Store } from "vuex"
import loginModule from "./login"
import systemModule from "./main/system"
import { getList } from "@/service/main/system"
import { IRootState, IStoreType } from "./types"
const store = createStore<IRootState>({
  state() {
    return {
      name: "james",
      age: 12,
      entireDepartment: [],
      entireRole: [],
      entireMenu: []
    }
  },
  mutations: {
    saveEntireDepartment(state, list) {
      state.entireDepartment = list
    },
    saveEntireRole(state, list) {
      state.entireRole = list
    },
    saveEntireMenu(state, list) {
      state.entireMenu = list
    }
  },
  getters: {},
  actions: {
    async getInitialDataAction({ commit }) {
      // 1.请求部门,角色数据,菜单数据
      const departmentResult = await getList("/department/list", {
        offset: 0,
        size: 1000
      })
      const { list: departmentList } = departmentResult.data
      const roleResult = await getList("/role/list", {
        offset: 0,
        size: 1000
      })
      const { list: roleList } = roleResult.data
      const menuResult = await getList("/menu/list", {})
      const { list: menuList } = menuResult.data
      commit("saveEntireDepartment", departmentList)
      commit("saveEntireRole", roleList)
      commit("saveEntireMenu", menuList)
    }
  },
  modules: {
    loginModule,
    systemModule
  }
})

export function initStore(): void {
  // 获取登录数据
  store.dispatch("loginModule/initLoginData")
}

export function useStore(): Store<IStoreType> {
  return useVuexStore()
}

export default store
