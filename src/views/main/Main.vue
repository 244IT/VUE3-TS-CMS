<template>
  <el-container class="main">
    <el-aside :width="isCollapse ? '60px' : '210px'">
      <nav-menu :collapse="isCollapse" />
    </el-aside>
    <el-container>
      <el-header>
        <nav-header @onFold="onFold" />
      </el-header>
      <el-main> MAIN </el-main>
    </el-container>
  </el-container>
</template>

<script lang="ts">
import NavHeader from "@/components/content/navHeader/NavHeader.vue"
import NavMenu from "@/components/content/navMenu/NavMenu.vue"
import { defineComponent, ref } from "vue"

export default defineComponent({
  components: { NavMenu, NavHeader },
  setup() {
    let isCollapse = ref(false)
    const onFold = (isFold: boolean) => {
      console.log("富组件")
      isCollapse.value = isFold
    }
    return {
      onFold,
      isCollapse
    }
  }
})
</script>

<style scoped lang="scss">
.main {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

.main-content,
.page {
  height: 100%;
}

.page-content {
  height: calc(100% - 48px);
}

.el-header,
.el-footer {
  display: flex;
  color: #333;
  text-align: center;
  align-items: center;
}

.el-header {
  height: 48px !important;
}

.el-aside {
  overflow-x: hidden;
  overflow-y: auto;
  line-height: 200px;
  text-align: left;
  cursor: pointer;
  background-color: #001529;
  transition: width 0.3s linear;
  scrollbar-width: none; /* firefox */
  -ms-overflow-style: none; /* IE 10+ */

  &::-webkit-scrollbar {
    display: none;
  }
}

.el-main {
  color: #333;
  text-align: center;
  background-color: #f0f2f5;
}
</style>
