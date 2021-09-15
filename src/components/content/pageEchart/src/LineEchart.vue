<template>
  <chh-echart :option="option"></chh-echart>
</template>

<script setup lang="ts">
import { defineProps } from "vue"
import * as echarts from "echarts"
/* 组件 */
import ChhEchart from "@/components/common/echart"
/* type */
import { IDataType } from "../types"
const props = defineProps<{ lineData: IDataType[]; lineXData: IDataType[] }>()
const option: echarts.EChartsOption = {
  xAxis: {
    type: "category",
    data: props.lineXData
  },
  yAxis: {
    type: "value"
  },
  series: [
    {
      data: props.lineData,
      type: "line"
    }
  ]
}
</script>

<style scoped lang="scss"></style>
