<template>
  <div class="chh-card">
    <el-card class="box-card">
      <template #header>
        <div class="card-header">
          <span>{{ title }}</span>
        </div>
      </template>
      <div class="item">
        <slot></slot>
      </div>
    </el-card>
  </div>
</template>

<script setup lang="ts">
import { defineProps, withDefaults } from "vue"

/* 定义props */
const props = withDefaults(
  defineProps<{
    title?: string
  }>(),
  {
    title: ""
  }
)
</script>

<style scoped lang="scss">
.card-header {
  display: flex;
  justify-content: flex-start;
}
.item {
  margin-bottom: 10px;
}
</style>
