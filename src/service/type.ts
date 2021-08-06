import { AxiosRequestConfig, AxiosResponse } from "axios"

export interface CHHRequestInterceptors {
  requestInterceptor?: (config: AxiosRequestConfig) => AxiosRequestConfig
  requestInterceptorCatch?: (err: any) => any
  responseInterceptor?: (res: AxiosResponse) => AxiosResponse
  responseInterceptorCatch?: (err: any) => any
}

export interface CHHRequestConfig extends AxiosRequestConfig {
  interceptors?: CHHRequestInterceptors
  showLoading?: boolean
}

// export interface CHHRequestConfig extends AxiosRequestConfig {
//   interceptors?: {
//     requestInterceptor?: (config: AxiosRequestConfig) => AxiosRequestConfig
//     requestInterceptorCatch?: (err: any) => any
//     responseInterceptor?: (res: AxiosResponse) => AxiosResponse
//     responseInterceptorCatch?: (err: any) => any
//   }
// }
