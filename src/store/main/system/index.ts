import { Module } from "vuex"

import { getUserList } from "../../../service/main/system"

import { ISystemState } from "./types"
import { IRootState } from "../../types"

const systemModule: Module<ISystemState, IRootState> = {
  namespaced: true,
  state() {
    return {
      userList: [],
      userCount: 0
    }
  },
  getters: {},
  mutations: {
    saveUserList(state, userList) {
      state.userList = userList
    },
    saveUserCount(state, userCount) {
      state.userCount = userCount
    }
  },
  actions: {
    /* 获取列表 */
    async getUserList({ commit }, payload: any) {
      // 用户登陆
      const result = await getUserList(payload)
      console.log(result)
      const { list, totalCount } = result.data
      console.log("getUserList")
      console.log(list)
      console.log(totalCount)
      commit("saveUserList", list)
      commit("saveUserCount", totalCount)
    }
  }
}

export default systemModule
