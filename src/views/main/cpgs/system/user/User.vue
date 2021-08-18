<template>
  <div class="user">
    <div class="user-search">
      <page-search :searchFormConfig="searchFormConfig" />
    </div>
    <div class="user-table">
      <chh-table :listData="userList" :propList="propList">
        <template #status="scope">
          <el-button size="mini">{{
            scope.row.enable ? "启用" : "禁用"
          }}</el-button>
        </template>
        <template #createAt="scope">
          <strong>{{ scope.row.createAt }}</strong>
        </template>
      </chh-table>
    </div>
  </div>
</template>

<script lang="ts">
/* 通用 */
import { computed, defineComponent, ref } from "vue"
import { useStore } from "@/store"
/* 组件 */
import PageSearch from "@/components/content/pageSearch"
import ChhTable from "@/components/common/table"
/* 配置 */
import { searchFormConfig } from "./config/search"
export default defineComponent({
  name: "User",
  components: {
    PageSearch,
    ChhTable
  },
  setup() {
    const store = useStore()
    /* 定义表单数据 */
    const formData = ref({
      id: "",
      name: "",
      password: "",
      sport: "",
      createTime: ""
    })
    /* 发送请求，获取用户列表 */
    store.dispatch("systemModule/getUserList", {
      offset: 0,
      size: 10
    })
    const userList = computed(() => store.state.systemModule.userList)
    const userCount = computed(() => store.state.systemModule.userCount)
    /* table配置 */
    const propList = [
      { prop: "name", label: "用户名", minWidth: "100" },
      { prop: "realname", label: "真实姓名", minWidth: "100" },
      { prop: "cellphone", label: "手机号码", minWidth: "100" },
      { prop: "enable", label: "状态", minWidth: "100", slotName: "status" },
      {
        prop: "createAt",
        label: "创建时间",
        minWidth: "250",
        slotName: "createAt"
      },
      {
        prop: "updateAt",
        label: "更新时间",
        minWidth: "250",
        slotName: "updateAt"
      }
    ]
    return {
      formData,
      searchFormConfig,
      userList,
      userCount,
      propList
    }
  }
})
</script>

<style scoped lang="scss">
.user-search {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  padding: 20px;
  background-color: #fff;
  border-radius: 10px;
}

.user-search-item {
  padding: 10px 30px;
  display: flex;
  align-items: center;
}

.user-table {
  border-radius: 10px;
  margin-top: 20px;
  overflow: hidden;
}
</style>
