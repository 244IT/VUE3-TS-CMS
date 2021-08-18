import { ILoginState } from "./login/types"
import { ISystemState } from "./main/system/types"

export interface IRootState {
  name: string
  age: number
}

export interface IRootWithModule {
  loginModule: ILoginState
  systemModule: ISystemState
}

export type IStoreType = IRootState & IRootWithModule
