<template>
  <chh-echart :option="option"></chh-echart>
</template>

<script setup lang="ts">
import { defineProps, computed } from "vue"
/* 组件 */
import ChhEchart from "@/components/common/echart"
/* type */
import { IDataType } from "../types"
const props = defineProps<{ lineData: IDataType[]; lineXData: IDataType[] }>()
const option = computed(() => {
  return {
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
})
</script>

<style scoped lang="scss"></style>
