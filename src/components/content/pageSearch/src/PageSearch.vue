<template>
  <div class="page-search">
    <chh-form v-bind="searchFormConfig" v-model="formData">
      <template #header>
        <h2 class="header">高级检索</h2>
      </template>
      <template #footer>
        <div class="handle-btns">
          <el-button icon="el-icon-refresh" @click="onReset">重置</el-button>
          <el-button type="primary" icon="el-icon-search" @click="onSearch"
            >搜索</el-button
          >
        </div>
      </template>
    </chh-form>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue"
import ChhForm from "@/components/common/form"

export default defineComponent({
  emits: ["onSearch", "onReset"],
  props: {
    searchFormConfig: {
      type: Object,
      reuqired: true
    }
  },
  components: {
    ChhForm
  },
  setup(props, { emit }) {
    /* 表单字段 */
    const formItems = props.searchFormConfig?.formItems ?? []
    const originFormData: any = {}
    for (let prop of formItems) {
      originFormData[prop.field] = ""
    }
    const formData = ref(originFormData)

    /* 点击重置 */
    const onReset = () => {
      for (let prop of Object.keys(originFormData)) {
        formData.value[prop] = ""
      }
      emit("onReset")
    }

    /* 点击搜索 */
    const onSearch = () => {
      let isEmpty = true
      for (let prop in formData.value) {
        if (formData.value[prop] !== "") {
          isEmpty = false
        }
      }
      // 为空不搜索
      if (isEmpty) return

      emit("onSearch", formData.value)
    }

    return {
      formData,
      onReset,
      onSearch
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
