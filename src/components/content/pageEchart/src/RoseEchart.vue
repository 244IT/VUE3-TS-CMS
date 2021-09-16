<template>
  <chh-echart :option="option"></chh-echart>
</template>

<script setup lang="ts">
import { defineProps, computed } from "vue"
/* 组件 */
import ChhEchart from "@/components/common/echart"
/* type */
import { IDataType } from "../types"
const props = defineProps<{ roseData: IDataType[] }>()
const option = computed(() => {
  return {
    legend: {
      top: "bottom"
    },
    toolbox: {
      show: true,
      feature: {
        mark: { show: true },
        dataView: { show: true, readOnly: false },
        restore: { show: true },
        saveAsImage: { show: true }
      }
    },
    series: [
      {
        name: "面积模式",
        type: "pie",
        radius: [10, 120],
        center: ["50%", "50%"],
        roseType: "area",
        itemStyle: {
          borderRadius: 8
        },
        data: props.roseData
      }
    ]
  }
})
</script>

<style scoped lang="scss"></style>
