import { createApp } from "vue"
import App from "./App.vue"
import "normalize.css"
import "./assets/css/index.scss"

import router from "./router"
import store from "./store"
import { initStore } from "./store"

import registerApp from "./global"

const app = createApp(App)
app.use(registerApp)
app.use(initStore)
app.use(store)
app.use(router)

app.mount("#app")
