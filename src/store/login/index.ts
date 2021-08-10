import { Module } from "vuex"

import { accountLoginRequest } from "../../service/login"
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
    }
  },
  actions: {
    async accountLoginAction({ commit }, payload: any) {
      console.log("accountLoginAction", payload)
      const result = await accountLoginRequest(payload)
      console.log(result)
      const { id, token } = result.data
      commit("saveToken", token)
    }
  }
}

export default loginModule
