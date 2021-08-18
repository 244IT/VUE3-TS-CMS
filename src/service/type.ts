import { AxiosRequestConfig, AxiosResponse } from "axios"

export interface CHHRequestInterceptors<T = AxiosResponse> {
  requestInterceptor?: (config: AxiosRequestConfig) => AxiosRequestConfig
  requestInterceptorCatch?: (err: any) => any
  responseInterceptor?: (res: T) => T
  responseInterceptorCatch?: (err: any) => any
}

export interface CHHRequestConfig<T = AxiosResponse>
  extends AxiosRequestConfig {
  interceptors?: CHHRequestInterceptors<T>
  showLoading?: boolean
}

export interface IDataType<T = any> {
  code: number
  data: T
}
