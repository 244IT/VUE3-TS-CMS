import { useStore } from "vuex"

export default function usePermission(
  pageName: string,
  handleName: string
): boolean {
  const store = useStore()
  const permission = store.state.loginModule.permissions
  const verifyPermission = `system:${pageName}:${handleName}`
  return permission.includes(verifyPermission)
}
