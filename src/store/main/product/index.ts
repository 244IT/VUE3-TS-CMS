// import { Module } from "vuex"

// import { getList } from "../../../service/main/system"

// import { IProductState } from "./types"
// import { IRootState } from "../../types"

// const mapToUrl: any = {
//   goods: "/goods/list"
// }

// const productModule: Module<IProductState, IRootState> = {
//   namespaced: true,
//   state() {
//     return {
//       goodList: [],
//       goodCount: 0
//     }
//   },
//   getters: {
//     /* 获取列表数据 */
//     pageListData(state) {
//       return (pageName: string) => {
//         return {
//           pageList: (state as any)[`${pageName}List`],
//           pageCount: (state as any)[`${pageName}Count`]
//         }
//       }
//     }
//   },
//   mutations: {
//     saveGoodrList(state, goodList) {
//       state.goodList = goodList
//     },
//     saveGoodCount(state, goodCount) {
//       state.goodCount = goodCount
//     }
//   },
//   actions: {
//     /* 获取列表 */
//     async getList({ commit }, payload: any) {
//       const { pageName, pageQuery } = payload
//       const url = mapToUrl[pageName]
//       console.log("url" + url)
//       // 用户登陆
//       const result = await getList(pageQuery, url)

//       const { list, totalCount } = result.data

//       commit(`save${_firstToUpper(pageName)}List`, list)
//       commit(`save${_firstToUpper(pageName)}Count`, totalCount)
//     }
//   }
// }

// /* 首字母转大写 */
// const _firstToUpper = (text: string) => {
//   return text
//     .split("")
//     .map((item, index) => {
//       if (index === 0) {
//         return item.toLocaleUpperCase()
//       }
//       return item
//     })
//     .join("")
// }

// export default productModule
