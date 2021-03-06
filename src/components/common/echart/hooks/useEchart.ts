import * as echarts from "echarts"
import chinaMapData from "../data/china.json"

echarts.registerMap("china", chinaMapData)
export default function useEchart(el: HTMLElement) {
  const echartInstance = echarts.init(el)

  const setOptions = (option: echarts.EChartsOption) => {
    echartInstance.setOption(option)
  }

  // 监听window尺寸的变化
  window.addEventListener("resize", () => {
    echartInstance.resize()
  })

  return {
    setOptions,
    echartInstance
  }
}
