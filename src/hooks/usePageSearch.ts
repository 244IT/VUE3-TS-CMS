import { ref } from "vue"
import PageContent from "@/components/content/pageContent"

export default function usePageSearch(): any {
  const pageContentRef = ref<InstanceType<typeof PageContent>>()
  const onReset = () => {
    pageContentRef.value?.getListData()
  }

  const onSearch = (queryInfo: any) => {
    console.log(queryInfo)
    pageContentRef.value?.getListData(queryInfo)
  }
  return [pageContentRef, onReset, onSearch]
}
