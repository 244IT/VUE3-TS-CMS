<template>
  <div class="base-echart" :style="{ width, height }" ref="baseEchartRef"></div>
</template>

<script setup lang="ts">
import { ref, onMounted, withDefaults, defineProps } from "vue"
import useEchart from "../hooks/useEchart"
import * as echarts from "echarts"

const baseEchartRef = ref<HTMLElement>()

const props = withDefaults(
  defineProps<{
    width?: string
    height?: string
    option: echarts.EChartsOption
  }>(),
  {
    width: "100%"
  }
)

onMounted(() => {
  const { setOptions } = useEchart(baseEchartRef.value!)
  setOptions(props.option)
})
</script>

<style scoped lang="scss"></style>
