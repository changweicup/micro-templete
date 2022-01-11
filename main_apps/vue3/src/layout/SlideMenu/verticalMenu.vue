<template>
  <div
    class="slide-menu"
    :style="{
      'height': `100vh`,
      marginTop: `${commonConfig.HeaderHeight}px`,
      'width': `${commonStore.isCollapse ? '40' : commonConfig.SlideMenuWidth}px`
    }"
  >
    <el-scrollbar
      :style="{
        'height': `calc(100% - ${commonConfig.HeaderHeight + 40}px)`
      }"
    >
      <el-menu
        class="el-menu-vertical"
        :default-active="activeIndex"
        :style="{
          'height': `calc(100% - ${commonConfig.HeaderHeight + 24}px)`
        }"
      >
        <MenuTree :menuList="menus" />
      </el-menu>
    </el-scrollbar>
    <div class="slide-menu-collapse">
      <Icon name="Fold" :color="commonConfig.PrimaryColor" size="22" @click="handleCollapse"></Icon>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { onMounted, ref } from 'vue'
import { commonConfig } from '../commonConfig'
import { menus } from '../../router/menu'
import MenuTree from './MenuTree.vue'
import Icon from '@/components/Icon/index.vue'
import { useCommonStore } from '@/stores/modules/commonStore'

const commonStore = useCommonStore()

const activeIndex = ref()

onMounted(() => {
  getActiveIndex()
})

const getActiveIndex = () => {
  // location.pathname的值通常为：/main-angular11/app-vue2/page2，我们只取`/app-vue2/page2`
  const pathArr = location.pathname.match(/\/app-.+/) || [location.pathname]
  activeIndex.value = pathArr ? pathArr[0].replace(/\/$/, '') : '/'

  // 去除斜线后缀，如：/app-vue2/ 转换为 /app-vue2
  if (activeIndex.value !== '/') {
    activeIndex.value = activeIndex.value.replace(/\/$/, '')
  }
}

const handleCollapse = () => {
  commonStore.setCollapse(!commonStore.isCollapse)
}
</script>

<style lang="scss" scoped>
:deep(.el-menu--inline) {
  background: #fafafa;
}

:deep(.el-menu-item.is-active) {
  border-left: 3px solid var(--el-color-primary);
  background-color: var(--el-color-primary-light-9);
  color: var(--el-color-primary);
}
:deep(.el-menu-item:hover) {
  border-left: 3px solid var(--el-color-primary);
}
.slide-menu {
  position: fixed;
  background: #fff;
  border-right: 1px solid #f0f0f0;
  box-shadow: 2px 0 8px 0 rgba(29,35,41,.05);
}
.el-menu {
  border-right: none;
}
.el-menu-vertical {
  width: 100%;
}
.slide-menu-collapse {
  margin-top: 8px;
  cursor: pointer;
}
</style>
