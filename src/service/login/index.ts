import { chhRequest } from "../index"

import { IAccount, IDataType, ILoginResult } from "./type"

enum LoginAPI {
  AccountLogin = "/login",
  UserInfo = "/users/", // 用法: /users/1
  UserMenus = "/role/" // 用法: role/1/menu
}

/* 用户登陆接口 */
export function accountLogin(account: IAccount) {
  return chhRequest.post<IDataType<ILoginResult>>({
    url: LoginAPI.AccountLogin,
    data: account
  })
}

/* 获取用户信息 */
export function getUserInfoById(id: number) {
  return chhRequest.get<IDataType>({
    url: LoginAPI.UserInfo + id,
    showLoading: false
  })
}

/* 获取用户的菜单权限 */
export function getUserMenuByRoleId(id: number) {
  return chhRequest.get<IDataType>({
    url: LoginAPI.UserMenus + id + "/menu",
    showLoading: false
  })
}
