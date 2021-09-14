<template>
  <div class="page-model">
    <el-dialog
      title="新建用户"
      v-model="showDialog"
      width="30%"
      destroy-on-close
      center
    >
      <chh-form v-bind="modalConfig" v-model="formData"> </chh-form>
      <slot></slot>
      <template #footer>
        <span class="dialog-footer">
          <el-button @click="showDialog = false">取 消</el-button>
          <el-button type="primary" @click="onConfirm">确 定</el-button>
        </span>
      </template>
    </el-dialog>
    <chh-form />
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, watch } from "vue"
import { useStore } from "vuex"

import ChhForm from "@/components/common/form"

export default defineComponent({
  props: {
    pageName: {
      type: String,
      require: true
    },
    modalConfig: {
      type: Object,
      reuqired: true
    },
    defaultInfo: {
      typeof: Object,
      default: () => ({})
    },
    othreInfo: {
      typeof: Object,
      default: () => ({})
    }
  },
  components: {
    ChhForm
  },
  setup(props: any) {
    const showDialog = ref(false)
    const formData = ref<any>({})

    watch(
      () => props.defaultInfo,
      (newValue: any) => {
        for (const item of props.modalConfig?.formItems) {
          formData.value[`${item.field}`] = newValue[`${item.field}`]
        }
      }
    )

    /* 新建/编辑点击确认 */
    const store = useStore()
    const onConfirm = () => {
      showDialog.value = false
      // 如果defaultInfo有值，则为编辑
      if (Object.keys(props.defaultInfo).length) {
        store.dispatch("systemModule/editListItemAction", {
          pageName: props.pageName,
          editData: { ...formData.value, ...props.othreInfo },
          id: props.defaultInfo.id
        })
      } else {
        store.dispatch("systemModule/createListItemAction", {
          pageName: props.pageName,
          newData: { ...formData.value, ...props.othreInfo }
        })
      }
    }

    return {
      showDialog,
      formData,
      onConfirm
    }
  }
})
</script>

<style scoped></style>
