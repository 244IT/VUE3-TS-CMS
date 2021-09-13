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
      @onCreate="onCreate"
      @onEdit="onEdit"
    />

    <page-modal
      ref="pageModalRef"
      pageName="user"
      :modalConfig="modalConfig"
      :defaultInfo="defaultInfo"
    ></page-modal>
  </div>
</template>

<script lang="ts">
/* 通用 */
import { defineComponent } from "vue"
/* 组件 */
import PageSearch from "@/components/content/pageSearch"
import PageContent from "@/components/content/pageContent"
import PageModal from "@/components/content/pageModal"
/* 配置 */
import { searchFormConfig } from "./config/form"
import { searchContentConfig } from "./config/content"
import { modalConfig } from "./config/model"
/* hooks */
import usePageSearch from "@/hooks/usePageSearch"
import usePageModel from "@/hooks/usePageModal"
export default defineComponent({
  name: "User",
  components: {
    PageSearch,
    PageContent,
    PageModal
  },
  setup() {
    /* 重置和搜索 */
    const [pageContentRef, onReset, onSearch] = usePageSearch()

    /* 编辑不显示密码 */
    const createCallback = () => {
      const passwordItem = modalConfig.formItems?.find(
        (item) => item.field === "password"
      )
      passwordItem!.isHidden = false
    }
    const editCallback = () => {
      const passwordItem = modalConfig.formItems?.find(
        (item) => item.field === "password"
      )
      passwordItem!.isHidden = true
    }
    const [pageModalRef, defaultInfo, onCreate, onEdit] = usePageModel(
      createCallback,
      editCallback
    )

    return {
      searchFormConfig,
      searchContentConfig,
      modalConfig,
      onReset,
      onSearch,
      pageContentRef,
      pageModalRef,
      defaultInfo,
      onCreate,
      onEdit
    }
  }
})
</script>

<style scoped lang="scss"></style>
