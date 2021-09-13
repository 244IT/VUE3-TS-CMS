import { chhRequest } from "../../index"
import { IDataType } from "../../type"
import { IUserListResult, IUserListItem, IList } from "./type"

/* 获取列表 */
export function getList(list: IList, url: string): any {
  return chhRequest.post<IDataType<IUserListResult<IUserListItem>>>({
    url,
    data: list
  })
}

/* 删除列表项 */
export function deleteListItem(url: string): any {
  return chhRequest.delete<IDataType>({
    url
  })
}

/* 新建列表项 */
export function createListItem(url: string, data: any): any {
  return chhRequest.post<IDataType>({
    url,
    data
  })
}

/* 编辑列表项 */
export function editListItem(url: string, data: any): any {
  return chhRequest.patch<IDataType>({
    url,
    data
  })
}
