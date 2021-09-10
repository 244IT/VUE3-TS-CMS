import { Module } from "vuex"

import { getList } from "../../../service/main/system"

import { ISystemState } from "./types"
import { IRootState } from "../../types"

const mapToUrl: any = {
  user: "/users/list",
  role: "/role/list"
}

const systemModule: Module<ISystemState, IRootState> = {
  namespaced: true,
  state() {
    return {
      userList: [],
      userCount: 0,
      roleList: [],
      roleCount: 0
    }
  },
  getters: {
    /* 获取列表数据 */
    pageListData(state) {
      return (pageName: string) => {
        return {
          pageList: (state as any)[`${pageName}List`],
          pageCount: (state as any)[`${pageName}Count`]
        }
      }
    }
  },
  mutations: {
    saveUserList(state, userList) {
      state.userList = userList
    },
    saveUserCount(state, userCount) {
      state.userCount = userCount
    },
    saveRoleList(state, roleList) {
      state.roleList = roleList
    },
    saveRoleCount(state, roleCount) {
      state.roleCount = roleCount
    }
  },
  actions: {
    /* 获取列表 */
    async getList({ commit }, payload: any) {
      const { pageName, pageQuery } = payload
      const url = mapToUrl[pageName]
      // 用户登陆
      const result = await getList(pageQuery, url)

      const { list, totalCount } = result.data

      commit(`save${_firstToUpper(pageName)}List`, list)
      commit(`save${_firstToUpper(pageName)}Count`, totalCount)
    }
  }
}

/* 首字母转大写 */
const _firstToUpper = (text: string) => {
  return text
    .split("")
    .map((item, index) => {
      if (index === 0) {
        return item.toLocaleUpperCase()
      }
      return item
    })
    .join("")
}

export default systemModule
