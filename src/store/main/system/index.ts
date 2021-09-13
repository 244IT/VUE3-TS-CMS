import { Module } from "vuex"

import {
  createListItem,
  deleteListItem,
  editListItem,
  getList
} from "../../../service/main/system"

import { ISystemState } from "./types"
import { IRootState } from "../../types"

const mapToUrl: any = {
  user: "/users/list",
  role: "/role/list",
  good: "/goods/list",
  menu: "/menu/list"
}

const systemModule: Module<ISystemState, IRootState> = {
  namespaced: true,
  state() {
    return {
      userList: [], // 用户列表
      userCount: 0, // 用户数量
      roleList: [], // 角色列表
      roleCount: 0, // 角色数量
      goodList: [], // 商品列表
      goodCount: 0, // 商品数量
      menuList: [], // 菜单列表
      menuCount: 0 // 菜单数量
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
    },
    saveGoodList(state, goodList) {
      state.goodList = goodList
    },
    saveGoodCount(state, goodCount) {
      state.goodCount = goodCount
    },
    saveMenuList(state, menuList) {
      state.menuList = menuList
    },
    saveMenuCount(state, menuCount) {
      state.menuCount = menuCount
    }
  },
  actions: {
    /* 获取列表 */
    async getListAction({ commit }, payload: any) {
      const { pageName, pageQuery } = payload
      const url = mapToUrl[pageName]
      // 用户登陆
      const result = await getList(pageQuery, url)

      const { list, totalCount } = result.data

      commit(`save${_firstToUpper(pageName)}List`, list)
      commit(`save${_firstToUpper(pageName)}Count`, totalCount)
    },

    /* 删除列表项 */
    async deleteListItemAction({ dispatch }, payload: any) {
      const { pageName, id } = payload
      const url = mapToUrl[pageName]
      // 删除请求
      await deleteListItem(`${url}/${id}`)
      console.log("deleteListItem")
      // 重新获取列表
      dispatch("getList", {
        pageName,
        pageQuery: {
          offset: 0,
          size: 10
        }
      })
    },

    /* 新增列表 */
    async createListItemAction({ dispatch }, payload: any) {
      const { pageName, newData } = payload
      const url = mapToUrl[pageName]
      await createListItem(url, newData)

      // 重新获取列表
      dispatch("getList", {
        pageName,
        pageQuery: {
          offset: 0,
          size: 10
        }
      })
    },

    /* 编辑列表 */
    async editListItemAction({ dispatch }, payload: any) {
      const { pageName, editData, id } = payload
      const url = `${mapToUrl[pageName]}/${id}`
      await editListItem(url, editData)

      // 重新获取列表
      dispatch("getList", {
        pageName,
        pageQuery: {
          offset: 0,
          size: 10
        }
      })
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
