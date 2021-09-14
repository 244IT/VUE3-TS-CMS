<template>
  <div class="role">
    <page-content
      :searchContentConfig="searchContentConfig"
      pageName="role"
      @onCreate="onCreate"
      @onEdit="onEdit"
    />
    <page-modal
      :modalConfig="modalConfig"
      :othreInfo="othreInfo"
      :defaultInfo="defaultInfo"
      ref="pageModalRef"
      pageName="role"
    >
      <div class="role-tree">
        <el-tree
          :data="entireMenu"
          show-checkbox
          node-key="id"
          :props="{ children: 'children', label: 'name' }"
          @check="onCheckMenu"
        >
        </el-tree>
      </div>
    </page-modal>
  </div>
</template>

<script lang="ts">
/* 通用 */
import { computed, defineComponent, ref } from "vue"
import { useStore } from "vuex"
/* 组件 */
import pageContent from "@/components/content/pageContent"
import pageModal from "@/components/content/pageModal"
/* 配置 */
import { searchContentConfig } from "./config/content"
import { modalConfig } from "./config/model"
/* hooks */
import usePageModal from "@/hooks/usePageModal"

export default defineComponent({
  name: "Role",
  components: {
    pageContent,
    pageModal
  },
  setup() {
    const [pageModalRef, defaultInfo, onCreate, onEdit] = usePageModal()
    /* 初始化菜单 */
    const store = useStore()
    const entireMenu = computed(() => store.state.entireMenu)

    /* 选择菜单权限 */
    const othreInfo = ref({})
    const onCheckMenu = (data: any, checkData: any) => {
      const checkedKeys = checkData.checkedKeys
      const halfCheckedKeys = checkData.halfCheckedKeys
      const menuList = [...checkedKeys, ...halfCheckedKeys]
      othreInfo.value = { menuList }
    }

    return {
      searchContentConfig,
      modalConfig,
      pageModalRef,
      defaultInfo,
      onCreate,
      onEdit,
      entireMenu,
      onCheckMenu,
      othreInfo
    }
  }
})
</script>

<style scoped lang="scss">
.role-tree {
  margin-left: 20px;
}
</style>
