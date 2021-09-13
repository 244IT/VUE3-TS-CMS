<template>
  <div class="user">
    <page-search
      :searchFormConfig="searchFormConfig"
      @onReset="onReset"
      @onSearch="onSearch"
    />
    <page-content
      :searchContentConfig="searchContentConfig"
      pageName="user"
      ref="pageContentRef"
    />
  </div>
</template>

<script lang="ts">
/* 通用 */
import { defineComponent } from "vue"
/* 组件 */
import PageSearch from "@/components/content/pageSearch"
import PageContent from "@/components/content/pageContent"
/* 配置 */
import { searchFormConfig } from "./config/form"
import { searchContentConfig } from "./config/content"
/* hooks */
import usePageSearch from "@/hooks/usePageSearch"
export default defineComponent({
  name: "User",
  components: {
    PageSearch,
    PageContent
  },
  setup() {
    const [pageContentRef, onReset, onSearch] = usePageSearch()
    return {
      searchFormConfig,
      searchContentConfig,
      onReset,
      onSearch,
      pageContentRef
    }
  }
})
</script>

<style scoped lang="scss"></style>
