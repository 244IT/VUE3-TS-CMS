<template>
  <div class="nav-menu">
    <div class="logo">
      <img class="img" src="~@/assets/img/login/logo.svg" alt="logo" />
      <span v-if="!collapse" class="title">Vue3+TS</span>
    </div>

    <el-menu
      :default-active="activeMenu.id + ''"
      class="el-menu-vertical"
      :collapse="collapse"
    >
      <template v-for="item in userMenus" :key="item.id">
        <!-- 二级菜单 -->
        <template v-if="item.type === 1">
          <!-- 二级菜单的可以展开的标题 -->
          <el-submenu :index="item.id + ''">
            <template #title>
              <i v-if="item.icon" :class="item.icon"></i>
              <span>{{ item.name }}</span>
            </template>
            <!-- 遍历里面的item -->
            <template v-for="subitem in item.children" :key="subitem.id">
              <el-menu-item
                :index="subitem.id + ''"
                @click="onMenuItem(subitem)"
              >
                <i v-if="subitem.icon" :class="subitem.icon"></i>
                <span>{{ subitem.name }}</span>
              </el-menu-item>
            </template>
          </el-submenu>
        </template>
        <!-- 一级菜单 -->
        <template v-else-if="item.type === 2">
          <el-menu-item :index="item.id + ''">
            <i v-if="item.icon" :class="item.icon"></i>
            <span>{{ item.name }}</span>
          </el-menu-item>
        </template>
      </template>
    </el-menu>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from "vue"
import { useRouter } from "vue-router"

import { useStore } from "@/store"
export default defineComponent({
  props: {
    collapse: {
      type: Boolean,
      default: false
    }
  },
  setup() {
    const store = useStore()
    const router = useRouter()
    const userMenus = computed(() => store.state.loginModule.userMenus)
    const activeMenu = computed(() => store.state.loginModule.activeMenu)
    const onMenuItem = (item: any) => {
      console.log("onMenuItem", item)
      // 缓存点击的菜单
      store.commit("loginModule/saveActiveMene", item)
      router.push({
        path: item.url ?? "/not-found"
      })
    }
    return {
      userMenus,
      activeMenu,
      onMenuItem
    }
  }
})
</script>

<style scoped lang="scss">
.nav-menu {
  height: 100%;
  background-color: #001529;

  .logo {
    display: flex;
    height: 28px;
    padding: 12px 10px 8px 10px;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;

    .img {
      height: 100%;
      margin: 0 10px;
    }

    .title {
      font-size: 16px;
      font-weight: 700;
      color: white;
    }
  }

  .el-menu {
    border-right: none;
    background-color: #0c2135;
  }

  // 目录
  .el-submenu {
    background-color: #001529 !important;
    // 二级菜单 ( 默认背景 )
    .el-menu-item {
      padding-left: 50px !important;
      background-color: #0c2135 !important;
    }
    .el-submenu__title span {
      color: #fff;
    }
  }

  ::v-deep .el-submenu__title {
    background-color: #001529 !important;
  }
  .el-menu-item {
    span {
      color: #fff;
    }
  }
  // hover 高亮
  .el-menu-item:hover {
    color: #fff !important; // 菜单
  }

  .el-menu-item.is-active {
    color: #fff !important;
    background-color: #0a60bd !important;
  }
}
.el-menu {
  .el-menu-item {
    background-color: #0c2135;
    color: #fff;
  }
  .el-menu-item.is-active {
    color: var(--el-color-primary);
  }
}
.el-menu-vertical:not(.el-menu--collapse) {
  width: 100%;
  height: calc(100% - 48px);
}
</style>
