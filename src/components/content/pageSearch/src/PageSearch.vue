<template>
  <div class="page-search">
    <chh-form v-bind="searchFormConfig" v-model="formData">
      <template #header>
        <h2 class="header">高级检索</h2>
      </template>
      <template #footer>
        <div class="handle-btns">
          <el-button icon="el-icon-refresh">重置</el-button>
          <el-button type="primary" icon="el-icon-search">搜索</el-button>
        </div>
      </template>
    </chh-form>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue"
import ChhForm from "@/components/common/form"

export default defineComponent({
  props: {
    searchFormConfig: {
      type: Object,
      reuqired: true
    }
  },
  components: {
    ChhForm
  },
  setup() {
    const formData = ref({
      id: "",
      name: "",
      password: "",
      sport: "",
      createTime: ""
    })

    return {
      formData
    }
  }
})
</script>

<style scoped>
.page-search {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  padding: 20px;
  border-radius: 10px;
  background-color: #fff;
}
.user-search-item {
  padding: 10px 30px;
  display: flex;
  align-items: center;
}
.handle-btns {
  text-align: right;
  padding: 0 50px 20px 0;
}
</style>
