<template>
  <div class="goods">
    <page-content :searchContentConfig="searchContentConfig" pageName="good">
      <template #image="scope">
        <el-image
          style="width: 60px; height: 60px"
          :src="scope.row.imgUrl"
          :preview-src-list="[scope.row.imgUrl]"
        ></el-image>
      </template>
      <template #oldPrice="scope">{{ "¥" + scope.row.oldPrice }}</template>
      <template #newPrice="scope">{{ "¥" + scope.row.newPrice }}</template>
    </page-content>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue"
/* 组件 */
import PageContent from "@/components/content/pageContent"
/* 配置 */
import { searchContentConfig } from "./config/content"

export default defineComponent({
  name: "Goods",
  components: {
    PageContent
  },
  setup() {
    return {
      searchContentConfig
    }
  }
})
</script>

<style scoped></style>
