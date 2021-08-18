import { chhRequest } from "../../index"
import { IDataType } from "../../type"
import { IUserListResult, IUserListItem, IList } from "./type"

enum SystemApi {
  UserList = "/users/list"
}

/* 获取用户信息 */
export function getUserList(list: IList) {
  return chhRequest.post<IDataType<IUserListResult<IUserListItem>>>({
    url: SystemApi.UserList,
    data: list
  })
}
