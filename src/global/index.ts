import { App } from "vue"
import registerElement from "./registerElement"
import registerFilter from "./registerFilter"

export default function registerApp(app: App): void {
  registerElement(app)
  registerFilter(app)
}
