<template>
  <div class="nav-header">
    <i
      class="fold-menu"
      :class="isFold ? 'el-icon-s-unfold' : 'el-icon-s-fold'"
      @click="onFold"
    ></i>
    <div class="content">
      <breadcrumb :breadcrumbs="breadcrumbs" />
      <user-info />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, computed } from "vue"
import { useRoute } from "vue-router"

import { useStore } from "@/store"
import { pathMapBreadcrumbs } from "@/utils/mapMenus"

import UserInfo from "./UserInfo.vue"
import Breadcrumb from "@/components/common/breadcrumb"
export default defineComponent({
  emits: ["onFold"],
  components: {
    UserInfo,
    Breadcrumb
  },
  setup(prop, { emit }) {
    const isFold = ref(false)
    const onFold = () => {
      isFold.value = !isFold.value
      emit("onFold", isFold.value)
    }

    // 面包屑的数据: [{name: , path: }]
    const store = useStore()
    const breadcrumbs = computed(() => {
      const userMenus = store.state.loginModule.userMenus
      const route = useRoute()
      const currentPath = route.path
      return pathMapBreadcrumbs(userMenus, currentPath)
    })
    console.log("breadcrumbs")
    console.log(breadcrumbs)
    return {
      onFold,
      isFold,
      breadcrumbs
    }
  }
})
</script>

<style scoped lang="scss">
.nav-header {
  display: flex;
  width: 100%;

  .fold-menu {
    font-size: 30px;
    cursor: pointer;
  }

  .content {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex: 1;
    padding: 0 20px;
  }
}
</style>
