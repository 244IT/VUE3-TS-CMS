import { ref } from "vue"
import PageModal from "@/components/content/pageModal"

type CallbackFn = (value?: any) => void
export default function usePageModel(
  createCB?: CallbackFn,
  editCB?: CallbackFn
): any[] {
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
    editCB && editCB(value)
  }
  return [pageModalRef, defaultInfo, onCreate, onEdit]
}
