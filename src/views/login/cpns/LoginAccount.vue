<template>
  <div class="login-account">
    <el-form label-width="60px" :rules="rules" :model="user" ref="formRef">
      <el-form-item label="账号" prop="name">
        <el-input v-model="user.name" />
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input v-model="user.password" show-password />
      </el-form-item>
    </el-form>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, ref } from "vue"
import { useStore } from "vuex"
import { ElForm } from "element-plus"

import localCache from "@/utils/cache"
import { rules } from "../config"

export default defineComponent({
  setup() {
    const store = useStore()
    const user = reactive({
      name: localCache.getCache("username") ?? "",
      password: localCache.getCache("password") ?? ""
    })
    const formRef = ref<InstanceType<typeof ElForm>>()

    /* 账号登陆逻辑 */
    const loginAction = (isKeepPassword: boolean) => {
      formRef.value?.validate((valid) => {
        if (valid) {
          console.log("登陆")
          // 校验通过，执行登陆逻辑
          if (isKeepPassword) {
            localCache.setCache("password", user.password)
          } else {
            localCache.deleteCache("password")
          }
          localCache.setCache("username", user.name)

          // 2.开始进行登录验证
          store.dispatch("loginModule/accountLoginAction", { ...user })
        }
      })
    }

    return {
      user,
      rules,
      loginAction,
      formRef
    }
  }
})
</script>

<style scoped></style>
