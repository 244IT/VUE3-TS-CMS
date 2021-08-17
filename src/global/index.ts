import { App } from "vue"
import registerElement from "./registerElement"

export default function registerApp(app: App): void {
  registerElement(app)
}
