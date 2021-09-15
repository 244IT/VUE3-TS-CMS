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
const props = defineProps<{ barData: IDataType[]; barXData: IDataType[] }>()
const option: echarts.EChartsOption = {
  xAxis: {
    type: "category",
    data: props.barXData
  },
  yAxis: {
    type: "value"
  },
  series: [
    {
      data: props.barData,
      type: "bar",
      showBackground: true,
      backgroundStyle: {
        color: "rgba(180, 180, 180, 0.2)"
      }
    }
  ]
}
</script>

<style scoped lang="scss"></style>
