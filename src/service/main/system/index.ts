import { chhRequest } from "../../index"
import { IDataType } from "../../type"
import { IUserListResult, IUserListItem, IList } from "./type"

// enum SystemApi {
//   UserList = "/users/list"
// }

/* 获取用户信息 */
export function getList(list: IList, url: string) {
  console.log("---getUserList")
  console.log(list, url)
  return chhRequest.post<IDataType<IUserListResult<IUserListItem>>>({
    url,
    data: list
  })
}
