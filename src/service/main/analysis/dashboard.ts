import { chhRequest } from "../../index"

enum DashboardAPI {
  categoryGoodsCount = "/goods/category/count",
  categoryGoodsSale = "/goods/category/sale",
  categoryGoodsFavor = "/goods/category/favor",
  addressGoodsSale = "/goods/address/sale",
  topTenGoodsSale = "/goods/sale/top10",
  goodsCount = "/goods/amount/list"
}

export function getCategoryGoodsCount(): any {
  return chhRequest.get({
    url: DashboardAPI.categoryGoodsCount
  })
}

export function getCategoryGoodsSale(): any {
  return chhRequest.get({
    url: DashboardAPI.categoryGoodsSale
  })
}

export function getCategoryGoodsFavor(): any {
  return chhRequest.get({
    url: DashboardAPI.categoryGoodsFavor
  })
}

export function getAddressGoodsSale(): any {
  return chhRequest.get({
    url: DashboardAPI.addressGoodsSale
  })
}

export function getTopTenGoodSale(): any {
  return chhRequest.get({
    url: DashboardAPI.topTenGoodsSale
  })
}

export function getGoodsCount(): any {
  return chhRequest.get({
    url: DashboardAPI.goodsCount
  })
}
