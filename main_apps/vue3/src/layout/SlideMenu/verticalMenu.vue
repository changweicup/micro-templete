<template>
  <div class="slide-menu"
     :style="{
         'top': `${commonConfig.HeaderHeight}px`,
         'height': `calc(100vh - ${commonConfig.HeaderHeight}px)`,
         'width': `${commonConfig.SlideMenuWidth}px`
       }"
  >
    <el-menu
      class="el-menu-vertical-demo"
      :default-active="activeIndex"
    >
     <MenuTree :menuList="menus"/>
    </el-menu>
  </div>
</template>

<script lang="ts" setup>
import { onMounted, ref } from 'vue'
import { commonConfig } from '../commonConfig'
import { menus } from '../../router/menu'
import MenuTree from './MenuTree.vue'

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
}
.el-menu {
  border-right: none;
}
.el-menu-vertical-demo {
  width: 100%;
  height: 100%;
}
</style>
