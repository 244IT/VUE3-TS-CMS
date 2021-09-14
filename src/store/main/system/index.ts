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
  users: "/users/list",
  role: "/role/list",
  goods: "/goods/list",
  menu: "/menu/list"
}

const systemModule: Module<ISystemState, IRootState> = {
  namespaced: true,
  state() {
    return {
      usersList: [], // 用户列表
      usersCount: 0, // 用户数量
      roleList: [], // 角色列表
      roleCount: 0, // 角色数量
      goodsList: [], // 商品列表
      goodsCount: 0, // 商品数量
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
    saveUsersList(state, usersList) {
      state.usersList = usersList
    },
    saveUsersCount(state, usersCount) {
      state.usersCount = usersCount
    },
    saveRoleList(state, roleList) {
      state.roleList = roleList
    },
    saveRoleCount(state, roleCount) {
      state.roleCount = roleCount
    },
    saveGoodsList(state, goodsList) {
      state.goodsList = goodsList
    },
    saveGoodsCount(state, goodsCount) {
      state.goodsCount = goodsCount
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
      const result = await getList(url, pageQuery)

      const { list, totalCount } = result.data

      commit(`save${_firstToUpper(pageName)}List`, list)
      commit(`save${_firstToUpper(pageName)}Count`, totalCount)
    },

    /* 删除列表项 */
    async deleteListItemAction({ dispatch }, payload: any) {
      const { pageName, id } = payload
      const url = `/${pageName}/${id}`
      // 删除请求
      await deleteListItem(url)
      // 重新获取列表
      dispatch("getListAction", {
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
      const url = `/${pageName}`
      await createListItem(url, newData)

      // 重新获取列表
      dispatch("getListAction", {
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
      const url = `/${pageName}/${id}`
      await editListItem(url, editData)

      // 重新获取列表
      dispatch("getListAction", {
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
