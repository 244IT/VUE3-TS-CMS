<template>
  <div class="menu">
    <page-content
      :searchContentConfig="searchContentConfig"
      pageName="menu"
    ></page-content>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue"
/* 组件 */
import PageContent from "@/components/content/pageContent"
/* 配置 */
import { searchContentConfig } from "./config/content"

export default defineComponent({
  name: "Menu",
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
