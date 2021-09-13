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
      entireRole: []
    }
  },
  mutations: {
    saveEntireDepartment(state, list) {
      state.entireDepartment = list
    },
    saveEntireRole(state, list) {
      state.entireRole = list
    }
  },
  getters: {},
  actions: {
    async getInitialDataAction({ commit }) {
      // 1.请求部门和角色数据
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
      commit("saveEntireDepartment", departmentList)
      commit("saveEntireRole", roleList)
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
  // 获取部门和角色列表
  store.dispatch("getInitialDataAction")
}

export function useStore(): Store<IStoreType> {
  return useVuexStore()
}

export default store
