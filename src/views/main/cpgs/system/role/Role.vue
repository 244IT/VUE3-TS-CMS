<template>
  <div class="role">
    <page-content :searchListConfig="searchListConfig" pageName="role" />
  </div>
</template>

<script lang="ts">
/* 通用 */
import { defineComponent } from "vue"
/* 组件 */
import pageContent from "@/components/content/pageContent"
/* 配置 */
import { searchListConfig } from "./config/content"
export default defineComponent({
  name: "Role",
  components: {
    pageContent
  },
  setup() {
    return {
      searchListConfig
    }
  }
})
</script>

<style scoped></style>
