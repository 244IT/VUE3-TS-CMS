<template>
  <el-container class="main">
    <el-aside width="200px">
      <nav-menu />
    </el-aside>
    <el-container>
      <el-header>Header</el-header>
      <el-main> </el-main>
    </el-container>
  </el-container>
</template>

<script lang="ts">
import NavMenu from "@/components/content/navMenu/NavMenu.vue"
import { defineComponent } from "vue"

export default defineComponent({
  components: { NavMenu },
  setup() {
    return {}
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
