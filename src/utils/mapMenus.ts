import { RouteRecordRaw } from "vue-router"

import { IBreadcrumb } from "@/components/common/breadcrumb/types"

let firstMenu: any = null

export function mapMenusToRoutes(userMenus: any[]): RouteRecordRaw[] {
  const routes: RouteRecordRaw[] = []

  // 1.先去加载默认所有的routes
  const allRoutes: RouteRecordRaw[] = []
  const routeFiles = require.context("../router/main", true, /\.ts/)
  console.log("routeFiles")
  console.log(routeFiles)
  routeFiles.keys().forEach((key) => {
    const route = require("../router/main" + key.split(".")[1])
    allRoutes.push(route.default)
  })

  // 2.根据菜单获取需要添加的routes
  // userMenus:
  // type === 1 -> children -> type === 1
  // type === 2 -> url -> route
  const _recurseGetRoute = (menus: any[]): void => {
    for (const menu of menus) {
      if (menu.type === 2) {
        const route = allRoutes.find((route) => route.path === menu.url)
        if (route) routes.push(route)
        if (!firstMenu) {
          firstMenu = menu
        }
      } else {
        _recurseGetRoute(menu.children)
      }
    }
  }

  _recurseGetRoute(userMenus)

  return routes
}

export function pathMapBreadcrumbs(
  userMenus: any[],
  currentPath: string
): IBreadcrumb[] {
  const breadcrumbs: IBreadcrumb[] = []
  pathMapToMenu(userMenus, currentPath, breadcrumbs)
  return breadcrumbs
}

// /main/system/role  -> type === 2 对应menu
export function pathMapToMenu(
  userMenus: any[],
  currentPath: string,
  breadcrumbs?: IBreadcrumb[]
): any {
  for (const menu of userMenus) {
    if (menu.type === 1) {
      const findMenu = pathMapToMenu(menu.children ?? [], currentPath)
      if (findMenu) {
        breadcrumbs?.push({ name: menu.name })
        breadcrumbs?.push({ name: findMenu.name })
        return findMenu
      }
    } else if (menu.type === 2 && menu.url === currentPath) {
      return menu
    }
  }
}

export function mapMenuToPermissions(userMenus: any[]): string[] {
  const permissions: string[] = []
  const _recurseGetPermission = (menus: any[]) => {
    for (const menu of menus) {
      if (menu.type === 1 || menu.type === 2) {
        _recurseGetPermission(menu.children ?? [])
      } else {
        permissions.push(menu.permission)
      }
    }
  }
  _recurseGetPermission(userMenus)
  return permissions
}

export function mapMenuToLeftKeys(menuList: any[]): number[] {
  const leftKeys: number[] = []
  console.log("mapMenuToLeftKeys")
  console.log(menuList)
  const _recurseGetLeftKey = (menus: any[]): void => {
    for (const menu of menus) {
      if (menu.children) {
        _recurseGetLeftKey(menu.children)
      } else {
        leftKeys.push(menu.id)
      }
    }
  }
  _recurseGetLeftKey(menuList)
  return leftKeys
}

export { firstMenu }
