import { defineStore } from 'pinia'
import { RouteLocationNormalized } from 'vue-router'
import { TAGS_ROUTES } from '../../utils/storeKeys'

const whiteList = ['Redirect', 'login']

export type RouteItem = Partial<RouteLocationNormalized> & {
  fullPath: string;
};

export type ITabsViewState = {
  tabsList: RouteItem[];
};

export const useTabsViewStore = defineStore({
  id: 'app-tabs-view',
  state: (): ITabsViewState => ({
    tabsList: []
  }),
  getters: {},
  actions: {
    initTabs (routes: any) {
      this.tabsList = routes
    },
    addTabs (route: any): boolean {
      // 添加标签页
      if (whiteList.includes(route.name)) return false
      const isExists = this.tabsList.some((item) => item.fullPath === route.fullPath)
      if (!isExists) {
        this.tabsList.push(route)
      }
      return true
    },
    closeLeftTabs (route: { fullPath: string; }) {
      // 关闭左侧
      const index = this.tabsList.findIndex((item) => item.fullPath === route.fullPath)
      this.tabsList.splice(0, index)
    },
    closeRightTabs (route: { fullPath: string; }) {
      // 关闭右侧
      const index = this.tabsList.findIndex((item) => item.fullPath === route.fullPath)
      this.tabsList.splice(index + 1)
    },
    closeOtherTabs (route: { fullPath: string; }) {
      // 关闭其他
      this.tabsList = this.tabsList.filter((item) => item.fullPath === route.fullPath)
    },
    closeCurrentTab (route: { fullPath: string; }) {
      // 关闭当前页
      const index = this.tabsList.findIndex((item) => item.fullPath === route.fullPath)
      this.tabsList.splice(index, 1)
    },
    closeAllTabs () {
      // 关闭全部
      this.tabsList = []
      localStorage.removeItem(TAGS_ROUTES)
    }
  }
})
