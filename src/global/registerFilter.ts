import { App } from "vue"
import { formatUtcTime } from "@/utils/timeFormat"

export default function (app: App) {
  app.config.globalProperties.$filter = {
    format(value: string) {
      return formatUtcTime(value)
    }
  }
}
