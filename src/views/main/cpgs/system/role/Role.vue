<template>
  <div class="role">
    <page-content :searchContentConfig="searchContentConfig" pageName="role" />
  </div>
</template>

<script lang="ts">
/* 通用 */
import { defineComponent } from "vue"
/* 组件 */
import pageContent from "@/components/content/pageContent"
/* 配置 */
import { searchContentConfig } from "./config/content"
export default defineComponent({
  name: "Role",
  components: {
    pageContent
  },
  setup() {
    return {
      searchContentConfig
    }
  }
})
</script>

<style scoped></style>
