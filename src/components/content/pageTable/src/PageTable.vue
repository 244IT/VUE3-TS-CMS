<template>
  <div class="user-table">
    <chh-table :listData="userList" v-bind="searchListConfig">
      <template #headerHandler>
        <el-button size="mini" type="primary">新建用户</el-button>
      </template>
      <template #status="scope">
        <el-button
          size="mini"
          plain
          :type="scope.row.enable ? 'success' : 'danger'"
          >{{ scope.row.enable ? "启用" : "禁用" }}</el-button
        >
      </template>
      <template #createAt="scope">
        <strong>{{ scope.row.createAt }}</strong>
      </template>
      <template #handler>
        <div class="handle-btns">
          <el-button icon="el-icon-edit" size="mini" type="text"
            >编辑</el-button
          >
          <el-button icon="el-icon-delete" size="mini" type="text"
            >删除</el-button
          >
        </div>
      </template>
      <!-- <template #footer></template> -->
    </chh-table>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from "vue"
import { useStore } from "@/store"
import ChhTable from "@/components/common/table"

export default defineComponent({
  components: {
    ChhTable
  },
  props: {
    searchListConfig: {
      type: Object,
      reuqired: true
    }
  },
  setup(props) {
    const store = useStore()
    /* 发送请求，获取用户列表 */
    store.dispatch("systemModule/getUserList", {
      offset: 0,
      size: 10
    })
    const userList = computed(() => store.state.systemModule.userList)
    // const userCount = computed(() => store.state.systemModule.userCount)
    return {
      userList
    }
  }
})
</script>

<style scoped lang="scss">
.user-table {
  border-radius: 10px;
  margin-top: 20px;
  overflow: hidden;
}
</style>
