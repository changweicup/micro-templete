<template>
  <div class="tag-box-wrap">
    <div class="tags-main-box">
      <Draggable :list="tabsList" animation="300" item-key="fullPath" class="flex">
        <template #item="{ element }">
          <div
            class="tabs-card-scroll-item"
            :id="`tag${element.fullPath.split('/').join('\/')}`"
            :class="{ 'active-item': state.activeKey === element.path }"
            @click.stop="linkTo(element)"
          >
            <div>
              <span>{{ element.meta.title }}</span>
            </div>
            <div style="margin-left: 10px" v-if="element.meta.title !== '首页'">
              <Icon name="Close" @click.stop="closeTabItem(element)"></Icon>
            </div>
          </div>
        </template>
      </Draggable>
    </div>
  </div>
</template>
<script lang="ts" setup>
import {
  computed,
  reactive,
  watch
} from 'vue'
import Icon from '@/components/Icon/index.vue'
import Draggable from 'vuedraggable'
import { TAGS_ROUTES } from '@/utils/storeKeys'
import { useTabsViewStore, RouteItem } from '@/stores/modules/tabsView'
import { RouteLocationNormalizedLoaded, useRoute, useRouter } from 'vue-router'
import { storage } from '@/utils/storage.ts'
import { ElMessage } from 'element-plus'

const tabsViewStore = useTabsViewStore()
const route = useRoute()
const router = useRouter()

const state = reactive({
  activeKey: route.fullPath
})

// 获取简易的路由对象
const getSimpleRoute = (route: RouteLocationNormalizedLoaded): RouteItem => {
  const { fullPath, hash, meta, name, params, path, query } = route
  return { fullPath, hash, meta, name, params, path, query }
}

// 在页面关闭或刷新之前，保存数据
window.addEventListener('beforeunload', () => {
  storage.set(TAGS_ROUTES, JSON.stringify(tabsList.value))
})

let cacheRoutes: RouteItem[] = []
const simpleRoute = getSimpleRoute(route)
try {
  const routesStr = storage.get(TAGS_ROUTES) as string | null | undefined
  cacheRoutes = routesStr ? JSON.parse(routesStr) : [simpleRoute]
} catch (e) {
  cacheRoutes = [simpleRoute]
}

// 将最新的路由信息同步到 localStorage 中
const routes = router.getRoutes()

cacheRoutes.forEach((cacheRoute) => {
  const route = routes.find((route) => route.path === cacheRoute.path)
  if (route) {
    cacheRoute.meta = route.meta || cacheRoute.meta
    cacheRoute.name = (route.name || cacheRoute.name) as string
  }
})

// 初始化标签页
tabsViewStore.initTabs(cacheRoutes)

// 标签页列表
const tabsList: any = computed(() => tabsViewStore.tabsList)
console.log(tabsList.value)

const whiteList: string[] = []

// 监听路由1
watch(
  () => route.fullPath,
  (to) => {
    if (whiteList.includes(route.name as string)) return
    state.activeKey = to
    tabsViewStore.addTabs(getSimpleRoute(route))
    // updateNavScroll(true)
  },
  { immediate: true }
)

// 关闭当前页面
const removeTab = (route: { fullPath: any }) => {
  if (tabsList.value.length === 1) {
    return ElMessage({
      showClose: true,
      message: '这已经是最后一页，不能再关闭了！',
      type: 'warning'
    })
  }
  tabsViewStore.closeCurrentTab(route)
  // 如果关闭的是当前页
  if (state.activeKey === route.fullPath) {
    const currentRoute = tabsList.value[Math.max(0, tabsList.value.length - 1)]
    state.activeKey = currentRoute.fullPath
    router.push(currentRoute)
  }
}

// 删除tab
const closeTabItem = (e: { fullPath: any }) => {
  const { fullPath } = e
  const routeInfo = tabsList.value.find((item: { fullPath: any }) => item.fullPath === fullPath)
  removeTab(routeInfo)
}

// tags 跳转页面
const linkTo = (e: { fullPath: any }) => {
  const { fullPath } = e
  if (fullPath === route.fullPath) return
  state.activeKey = fullPath
  router.push({ path: fullPath })
}
</script>
<style lang="scss" scoped>
.tag-box-wrap {
  position: fixed;
  box-sizing: border-box;
  height: 42px;
  width: 100%;
  background-color: transparent;
  z-index: 100;
  padding: 6px 15px;
}

.tags-main-box {
  display: flex;
  flex-direction: row;
}
.tabs-card-scroll-item {
  display: flex;
  align-items: center;
  box-sizing: border-box;
  background: #fff;
  height: 30px;
  line-height: 30px;
  font-size: 14px;
  border-radius: 2px;
  padding: 0 20px;
  margin-right: 6px;
  cursor: pointer;
  box-shadow: 0 0 #0000, 0 0 #0000, 0 1px 2px 0 rgba(0, 0, 0, 0.05);
}
.active-item {
  color: var(--el-color-primary);
  background-color: var(--el-color-primary-light-9);
  border-color: var(--el-primary-primary-color-hover);
}
.flex {
  display: flex;
}
</style>
