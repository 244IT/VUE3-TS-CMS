import { createStore, useStore as useVuexStore } from "vuex"
import type { Store } from "vuex"
import loginModule from "./login"
import systemModule from "./main/system"
import { IRootState, IStoreType } from "./types"
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
    loginModule,
    systemModule
  }
})

export function initStore() {
  store.dispatch("loginModule/initLoginData")
}

export function useStore(): Store<IStoreType> {
  return useVuexStore()
}

export default store
