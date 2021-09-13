import { chhRequest } from "../../index"
import { IDataType } from "../../type"
import { IUserListResult, IUserListItem, IList } from "./type"

/* 获取商品信息 */
export function getList(list: IList, url: string) {
  console.log("---getProductList")
  console.log(list, url)
  return chhRequest.post<IDataType<IUserListResult<IUserListItem>>>({
    url,
    data: list
  })
}
