<template>
  <div class="user-table">
    <chh-table :listData="list" v-bind="searchListConfig">
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
        <strong>{{ $filter.format(scope.row.createAt) }}</strong>
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
    },
    pageName: {
      type: String
    }
  },
  setup(props) {
    const store = useStore()
    console.log("pageContent")
    console.log(props.pageName)
    /* 发送请求，获取用户列表 */
    store.dispatch("systemModule/getList", {
      pageQuery: {
        offset: 0,
        size: 10
      },
      pageName: props.pageName
    })
    const list = computed(() =>
      store.getters[`systemModule/pageListData`](props.pageName)
    )
    // const userCount = computed(() => store.state.systemModule.userCount)
    return {
      list
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
