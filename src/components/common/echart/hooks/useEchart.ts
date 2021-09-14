import * as echarts from "echarts"

export default function useEchart(el: HTMLElement) {
  const echartInstance = echarts.init(el)

  const setOptions = (option: echarts.EChartsOption) => {
    echartInstance.setOption(option)
  }

  return {
    setOptions,
    echartInstance
  }
}
