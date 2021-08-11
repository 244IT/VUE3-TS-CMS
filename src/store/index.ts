import { createStore } from "vuex"

import loginModule from "./login"
import { IRootState } from "./types"
const store = createStore<IRootState>({
  state() {
    return {
      name: "james",
      age: 12
    }
  },
  mutations: {},
  getters: {},
  actions: {},
  modules: {
    loginModule
  }
})

export function initStore() {
  store.dispatch("loginModule/initLoginData")
}

export default store
