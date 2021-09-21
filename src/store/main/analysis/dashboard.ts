import { Module } from "vuex"

import {
  getCategoryGoodsCount,
  getCategoryGoodsSale,
  getCategoryGoodsFavor,
  getAddressGoodsSale,
  getGoodsCount
} from "@/service/main/analysis/dashboard"

import { IDashboardState } from "./types"
import { IRootState } from "../../types"

const dashboardModule: Module<IDashboardState, IRootState> = {
  namespaced: true,
  state() {
    return {
      categoryGoodsCount: [],
      categoryGoodsSale: [],
      categoryGoodsFavor: [],
      addressGoodsSale: [],
      topTenGoodsSale: [],
      goodsCount: []
    }
  },
  getters: {},
  mutations: {
    changeCategoryGoodsCount(state, list) {
      state.categoryGoodsCount = list
    },
    changeCategoryGoodsSale(state, list) {
      state.categoryGoodsSale = list
    },
    changeCategoryGoodsFavor(state, list) {
      state.categoryGoodsFavor = list
    },
    changeAddressGoodsSale(state, list) {
      state.addressGoodsSale = list
    },
    changeTopTenGoodsSale(state, list) {
      state.topTenGoodsSale = list
    },
    changeGoodsCount(state, list) {
      state.goodsCount = list
    }
  },
  actions: {
    async getDashboardDataAction({ commit }) {
      const goodsCountResult = await getGoodsCount()
      commit("changeGoodsCount", goodsCountResult.data)
      const addressGoodsResult = await getAddressGoodsSale()
      commit("changeAddressGoodsSale", addressGoodsResult.data)
      const categoryCountResult = await getCategoryGoodsCount()
      commit("changeCategoryGoodsCount", categoryCountResult.data)
      const categorySaleResult = await getCategoryGoodsSale()
      commit("changeCategoryGoodsSale", categorySaleResult.data)
      const categoryFavorResult = await getCategoryGoodsFavor()
      commit("changeCategoryGoodsFavor", categoryFavorResult.data)
      // const topTenGoodsResult = await getTopTenGoodSale()
      // commit("changeTopTenGoodsSale", topTenGoodsResult.data)
    }
  }
}

export default dashboardModule
