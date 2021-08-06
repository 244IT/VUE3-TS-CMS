import { createApp } from "vue"
import App from "./App.vue"

import router from "./router"
import store from "./store"

import registerApp from "./global"
import { chhRequest } from "./service"

const app = createApp(App)

registerApp(app)
app.use(router)
app.use(store)
app.mount("#app")

interface IDataType {
  data: any
  returnCode: string
  success: boolean
}

chhRequest
  .request<IDataType>({
    url: "/home/multidata",
    method: "GET",
    interceptors: {
      requestInterceptor(config) {
        console.log("单个请求请求拦截")
        return config
      },
      responseInterceptor(res) {
        console.log("单个请求响应拦截")
        return res
      }
    }
  })
  .then((res) => {
    console.log(res.data)
    console.log(res.returnCode)
    console.log(res.success)
  })
