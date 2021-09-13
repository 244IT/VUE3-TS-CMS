import { ref } from "vue"
import PageModal from "@/components/content/pageModal"

type CallbackFn = () => void
export default function usePageModel(
  createCB?: CallbackFn,
  editCB?: CallbackFn
) {
  const pageModalRef = ref<InstanceType<typeof PageModal>>()
  const defaultInfo = ref<any>({})
  const onCreate = () => {
    defaultInfo.value = {}
    if (pageModalRef.value) {
      pageModalRef.value.showDialog = true
    }
    createCB && createCB()
  }
  const onEdit = (value: any) => {
    defaultInfo.value = value
    if (pageModalRef.value) {
      pageModalRef.value.showDialog = true
    }
    editCB && editCB()
  }
  return [pageModalRef, defaultInfo, onCreate, onEdit]
}
