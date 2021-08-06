<template>
  <div class="login-account">
    <el-form label-width="60px" :rules="rules" :model="account" ref="formRef">
      <el-form-item label="账号" prop="name">
        <el-input v-model="username" />
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input v-model="password" show-password />
      </el-form-item>
    </el-form>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive } from "vue"

export default defineComponent({
  setup() {
    const user = reactive({
      username: "",
      password: ""
    })

    return {
      user
    }
  }
})
</script>

<style scoped></style>
