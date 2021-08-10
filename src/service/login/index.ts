import { chhRequest } from "../index"

import { IAccount, IDataType, ILoginResult } from "./type"

enum LoginAPI {
  AccountLogin = "/login"
}

export function accountLoginRequest(account: IAccount) {
  return chhRequest.post<IDataType<ILoginResult>>({
    url: LoginAPI.AccountLogin,
    data: account,
    interceptors: {
      responseInterceptor(res) {
        return res
      }
    }
  })
}
