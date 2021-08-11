import CHHRequest from "./network"
import { BASE_URL, TIME_OUT } from "./config"

const chhRequest = new CHHRequest({
  timeout: TIME_OUT,
  baseURL: BASE_URL,
  interceptors: {
    requestInterceptor(config) {
      console.log("请求拦截")
      // 携带token的拦截
      const token = ""
      if (token) {
        config.headers.Authorization = `Bearer ${token}`
      }

      return config
    },
    requestInterceptorCatch(err) {
      return err
    },
    responseInterceptor(config) {
      console.log("响应拦截")
      return config
    },
    responseInterceptorCatch(err) {
      return err
    }
  }
})

export { chhRequest }