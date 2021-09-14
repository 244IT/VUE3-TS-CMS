<template>
  <chh-echart height="400px" :option="option"></chh-echart>
</template>

<script setup lang="ts">
import { defineProps } from "vue"
import * as echarts from "echarts"
/* 组件 */
import ChhEchart from "@/components/common/echart"
/* type */
import { IDataType } from "../types"
const props = defineProps<{ pieData: IDataType[] }>()
const option: echarts.EChartsOption = {
  tooltip: {
    trigger: "item"
  },
  legend: {
    orient: "horizontal",
    left: "left"
  },
  series: [
    {
      name: "访问来源",
      type: "pie",
      radius: "50%",
      data: props.pieData,
      emphasis: {
        itemStyle: {
          shadowBlur: 10,
          shadowOffsetX: 0,
          shadowColor: "rgba(0, 0, 0, 0.5)"
        }
      }
    }
  ]
}
</script>

<style scoped lang="scss"></style>
