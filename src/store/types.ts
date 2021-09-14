import { ILoginState } from "./login/types"
import { IProductState } from "./main/product/types"
import { ISystemState } from "./main/system/types"

export interface IRootState {
  name: string
  age: number
  entireDepartment: any[]
  entireRole: any[]
  entireMenu: any[]
}

export interface IRootWithModule {
  loginModule: ILoginState
  systemModule: ISystemState
  productModule: IProductState
}

export type IStoreType = IRootState & IRootWithModule
