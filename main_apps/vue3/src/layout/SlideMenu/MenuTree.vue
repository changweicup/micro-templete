<template>
  <div class="menu-item-wrap" v-for="item in menuList" :key="item.path">
    <el-sub-menu
      v-if="item.children && item.children.length > 0 && !commonStore.isCollapse"
      :key="item.name"
      :index="item.name"
    >
      <template #title>
        <Icon :name="item.icon"></Icon>
        <span>{{ item.title }}</span>
      </template>
      <menu-tree :menuList="item.children"></menu-tree>
    </el-sub-menu>
    <template v-if="item.children && item.children.length > 0 && commonStore.isCollapse">
      <el-popover :key="item.name" placement="right-start" :width="200" trigger="hover">
        <template #reference>
          <el-menu-item :key="item.path" :index="item.path">
            <template #title>
              <Icon :name="item.icon"></Icon>
              <span v-show="!commonStore.isCollapse">{{ item.title }}</span>
            </template>
          </el-menu-item>
        </template>
        <div
          v-for="ele in item.children"
          :key="ele.path"
          class="icon-menu-detail-item icon-active"
          @click="handleMenuClick(ele)"
        >
          <Icon :name="ele.icon"></Icon>
          <span class="icon-menu-title">{{ ele.title }}</span>
        </div>
      </el-popover>
    </template>
    <el-menu-item
      v-if="!item.children || item.children.length === 0"
      :key="item.path"
      :index="item.path"
      :class="route.path === item.path ? 'is-active' : ''"
      @click="handleMenuClick(item)"
    >
      <template #title>
        <Icon :name="item.icon"></Icon>
        <span v-show="!commonStore.isCollapse">{{ item.title }}</span>
      </template>
    </el-menu-item>
  </div>
</template>
<script lang="ts" setup>
import { defineProps } from 'vue'
import { RouteLocationRaw, useRouter, useRoute } from 'vue-router'
import { MenuRecordRaw } from '../../router/menu'
import Icon from '@/components/Icon/index.vue'
import { useCommonStore } from '@/stores/modules/commonStore'

defineProps({
  menuList: {
    type: Array as () => Array<MenuRecordRaw>,
    default: () => []
  }
})

const commonStore = useCommonStore()
const router = useRouter()
const route = useRoute()

const handleMenuClick = (item: { path: RouteLocationRaw }) => {
  if (item.path) {
    router.push(item.path)
  }
}

</script>
<style scoped lang="scss">
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
:deep(.el-menu-item) {
  border-left: 3px solid #ffffff;
  border-radius: 2px;
}
:deep(.el-sub-menu) {
  border-left: 3px solid #ffffff;
  border-radius: 2px;
}
.icon-sub-menu {
  display: flex;
  justify-content: center;
  height: 56px;
  line-height: 56px;
  cursor: pointer;
  width: 60px;
}

.icon-menu-item {
  display: flex;
  justify-content: center;
  cursor: pointer;
  height: 56px;
  line-height: 56px;
  width: 60px;
}

.icon-menu-detail-item {
  display: flex;
  box-sizing: border-box;
  padding: 0 15px;
  cursor: pointer;
  height: 48px;
  line-height: 48px;
}

.icon-active:hover {
  background: var(--el-color-primary-light-9);
  color: var(--el-color-primary);
  border-radius: 2px;
}
.icon-menu-title {
  margin-left: 10px;
}
</style>
