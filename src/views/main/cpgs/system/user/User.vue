<template>
  <div class="user">
    <page-search :searchFormConfig="searchFormConfig" />
    <page-content :searchListConfig="searchListConfig" pageName="user" />
  </div>
</template>

<script lang="ts">
/* 通用 */
import { defineComponent } from "vue"
/* 组件 */
import PageSearch from "@/components/content/pageSearch"
import PageContent from "@/components/content/pageContent"
/* 配置 */
import { searchFormConfig } from "./config/search"
import { searchListConfig } from "./config/table"
export default defineComponent({
  name: "User",
  components: {
    PageSearch,
    PageContent
  },
  setup() {
    /* table配置 */
    return {
      searchFormConfig,
      searchListConfig
    }
  }
})
</script>

<style scoped lang="scss"></style>
