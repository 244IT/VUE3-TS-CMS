<template>
  <div class="statistic-panel">
    <el-card>
      <div class="header">
        <span>{{ panelData.name }}</span>

        <el-tooltip :content="panelData.tips" placement="top">
          <i class="el-icon-warning-outline"></i>
        </el-tooltip>
      </div>
      <div class="content" ref="contentRef">
        {{ panelData.value }}
      </div>
      <div class="bottom">{{ panelData.name }} {{ panelData.value }}</div>
    </el-card>
  </div>
</template>

<script setup lang="ts">
import { defineProps, withDefaults, ref } from "vue"
import { IDataType } from "../types"

const contentRef = ref<InstanceType<typeof HTMLElement>>()
withDefaults(
  defineProps<{
    panelData: IDataType
  }>(),
  {}
)
</script>

<style scoped lang="scss">
.statistic-panel {
  .header {
    font-size: 14px;
    color: rgba(0, 0, 0, 0.45);
    display: flex;
    justify-content: space-between;
  }

  .content {
    padding: 10px 0;
    border-bottom: 1px solid #f0f0f0;
    font-size: 26px;
    color: rgba(0, 0, 0, 0.85);
    text-align: start;
  }

  .bottom {
    padding-top: 10px;
    color: rgba(0, 0, 0, 0.85);
    font-size: 14px;
    text-align: start;
  }
}
</style>
