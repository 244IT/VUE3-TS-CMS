<template>
  <div class="user-info">
    <el-dropdown>
      <span class="el-dropdown-link">
        <el-avatar
          class="avatar"
          size="small"
          src="https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png"
        ></el-avatar>
        <span>{{ name }}</span>
      </span>
      <template #dropdown>
        <el-dropdown-menu>
          <el-dropdown-item icon="el-icon-circle-close" @click="onLoginOut"
            >退出登录</el-dropdown-item
          >
          <el-dropdown-item divided>用户信息</el-dropdown-item>
          <el-dropdown-item>系统管理</el-dropdown-item>
        </el-dropdown-menu>
      </template>
    </el-dropdown>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from "vue"
import router from "@/router"
import { useStore } from "@/store"
import localCache from "@/utils/cache"
export default defineComponent({
  setup() {
    const store = useStore()
    const name = computed(() => store.state.loginModule.userInfo.name)
    /* 退出登陆 */
    const onLoginOut = () => {
      localCache.deleteCache("token")
      router.push("/main")
    }

    return {
      name,
      onLoginOut
    }
  }
})
</script>

<style scoped lang="scss">
.user-info {
  .avatar {
    margin-right: 10px;
  }
}
.el-dropdown-link {
  cursor: pointer;
  display: flex;
  align-items: center;
}
</style>
