<template>
  <div class="user">
    <div class="user-search">
      <page-search :searchFormConfig="searchFormConfig" />
      <page-table :searchListConfig="searchListConfig" />
    </div>
  </div>
</template>

<script lang="ts">
/* 通用 */
import { computed, defineComponent, ref } from "vue"
import { useStore } from "@/store"
/* 组件 */
import PageSearch from "@/components/content/pageSearch"
import PageTable from "@/components/content/pageTable"
/* 配置 */
import { searchFormConfig } from "./config/search"
import { searchListConfig } from "./config/table"
export default defineComponent({
  name: "User",
  components: {
    PageSearch,
    PageTable
  },
  setup() {
    const store = useStore()
    /* 定义表单数据 */
    const formData = ref({
      id: "",
      name: "",
      password: "",
      sport: "",
      createTime: ""
    })

    /* table配置 */
    return {
      formData,
      searchFormConfig,
      searchListConfig
    }
  }
})
</script>

<style scoped lang="scss"></style>
