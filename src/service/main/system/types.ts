export interface IUserListResult<T> {
  list: T
  totalCount: number
}
export interface IUserListItem {
  id: number
  name: string
  realname: string
  cellphone: number
  enable: number
  departmentId: number
  roleId: number
  createAt: string
  updateAt: string
}

export interface IList {
  offset?: number
  size?: number
}
