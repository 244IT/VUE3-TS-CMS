<template>
  <div class="user-table">
    <chh-table
      :listData="listData.pageList"
      :listCount="listData.pageCount"
      v-bind="searchContentConfig"
      v-model:page="pageInfo"
    >
      <!-- 固定插槽 -->
      <template #headerHandler>
        <el-button v-if="isCreate" size="mini" type="primary" @click="onCreate"
          >新建用户</el-button
        >
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
      <template #updateAt="scope">
        <strong>{{ $filter.format(scope.row.updateAt) }}</strong>
      </template>
      <template #handler="scope">
        <div class="handle-btns">
          <el-button
            v-if="isUpdate"
            icon="el-icon-edit"
            size="mini"
            type="text"
            @click="onEdit(scope.row)"
            >编辑</el-button
          >
          <el-button
            v-if="isDelete"
            icon="el-icon-delete"
            size="mini"
            type="text"
            @click="onDelete(scope.row)"
            >删除</el-button
          >
        </div>
      </template>
      <!-- 跨组件插槽 -->
      <template
        v-for="item in otherPropSlots"
        :key="item.prop"
        #[item.slotName]="scope"
      >
        <template v-if="item.slotName">
          <slot :name="item.slotName" :row="scope.row"></slot>
        </template>
      </template>
      <!-- <template #footer></template> -->
    </chh-table>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed, watch, ref } from "vue"
import { useStore } from "@/store"
/* 组件 */
import ChhTable from "@/components/common/table"
/* hooks */
import usePermission from "@/hooks/usePermission"
export default defineComponent({
  components: {
    ChhTable
  },
  emits: ["onEdit", "onCreate"],
  props: {
    searchContentConfig: {
      type: Object,
      reuqired: true
    },
    pageName: {
      type: String,
      required: true
    }
  },
  setup(props, { emit }) {
    const store = useStore()
    /* 获取权限 */
    const isCreate = usePermission(props.pageName, "create")
    const isQuery = usePermission(props.pageName, "query")
    const isDelete = usePermission(props.pageName, "delete")
    const isUpdate = usePermission(props.pageName, "update")

    /* 新建/编辑用户 */
    const onCreate = () => {
      emit("onCreate")
    }
    const onEdit = (value: any) => {
      emit("onEdit", value)
    }

    /* 监听页数和当前页 */
    const pageInfo = ref({ currentPage: 0, pageSize: 10 })
    watch(pageInfo, () => {
      console.log("改变了")
      console.log(pageInfo)
      getListData()
    })

    /* 删除列表项 */
    const onDelete = (item: any) => {
      console.log(item)
      console.log("ondelete")
      store.dispatch(
        `${props.searchContentConfig?.module}/deleteListItemAction`,
        {
          pageName: props.pageName,
          id: item.id
        }
      )
    }

    /* 获取列表数据 */
    const getListData = (queryInfo?: any) => {
      if (!isQuery) return
      store.dispatch(`${props.searchContentConfig?.module}/getListAction`, {
        pageQuery: {
          offset: pageInfo.value.currentPage * pageInfo.value.pageSize,
          size: pageInfo.value.pageSize,
          ...queryInfo
        },
        pageName: props.pageName
      })
    }
    getListData()
    /* 获取初始化列表数据 */
    const listData = computed(() =>
      store.getters[`${props.searchContentConfig?.module}/pageListData`](
        props.pageName
      )
    )
    /* 其他插槽 */
    const otherPropSlots = props.searchContentConfig?.propList.filter(
      (item: any) => {
        if (item.slotName === "status") return false
        if (item.slotName === "createAt") return false
        if (item.slotName === "updateAt") return false
        if (item.slotName === "handler") return false
        return true
      }
    )
    return {
      listData,
      getListData,
      pageInfo,
      otherPropSlots,
      isCreate,
      isUpdate,
      isDelete,
      onDelete,
      onEdit,
      onCreate
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
