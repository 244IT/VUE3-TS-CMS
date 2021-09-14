<template>
  <div class="role">
    <page-content
      :searchContentConfig="searchContentConfig"
      pageName="role"
      @onCreate="onCreate"
      @onEdit="onEdit"
    />
    <page-modal
      ref="pageModalRef"
      pageName="role"
      :modalConfig="modalConfig"
      :othreInfo="othreInfo"
      :defaultInfo="defaultInfo"
    >
      <div class="role-tree">
        <el-tree
          ref="elTreeRef"
          show-checkbox
          node-key="id"
          :data="entireMenu"
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
import { computed, defineComponent, ref, nextTick } from "vue"
import { useStore } from "vuex"
/* 组件 */
import { ElTree } from "element-plus"
import pageContent from "@/components/content/pageContent"
import pageModal from "@/components/content/pageModal"
/* 配置 */
import { searchContentConfig } from "./config/content"
import { modalConfig } from "./config/model"
/* hooks */
import usePageModal from "@/hooks/usePageModal"
/* 工具 */
import { mapMenuToLeftKeys } from "@/utils/mapMenus"

export default defineComponent({
  name: "Role",
  components: {
    pageContent,
    pageModal
  },
  setup() {
    /* 编辑菜单权限回显 */
    const elTreeRef = ref<InstanceType<typeof ElTree>>()
    const editCallback = (value: any) => {
      const leafKeys = mapMenuToLeftKeys(value.menuList)
      nextTick(() => {
        elTreeRef.value?.setCheckedKeys(leafKeys, false)
      })
    }
    const [pageModalRef, defaultInfo, onCreate, onEdit] = usePageModal(
      undefined,
      editCallback
    )
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
      othreInfo,
      elTreeRef
    }
  }
})
</script>

<style scoped lang="scss">
.role-tree {
  margin-left: 20px;
}
</style>
