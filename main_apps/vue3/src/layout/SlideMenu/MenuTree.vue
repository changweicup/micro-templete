<template>
  <div v-if="!commonStore.isCollapse">
    <template v-for="item in menuList">
      <el-sub-menu
        v-if="item.children && item.children.length > 0"
        :key="item.name"
        :index="item.name"
      >
        <template #title>
          <Icon :name="item.icon"></Icon>
          <span>{{ item.title }}</span>
        </template>
        <menu-tree :menuList="item.children"></menu-tree>
      </el-sub-menu>
      <el-menu-item v-else :key="item.path" :index="item.path" @click="handleMenuClick(item)">
        <template #title>
          <Icon :name="item.icon"></Icon>
          <span>{{ item.title }}</span>
        </template>
      </el-menu-item>
    </template>
  </div>
  <div v-if="commonStore.isCollapse">
    <template v-for="item in menuList">
      <template v-if="item.children && item.children.length > 0">
        <el-popover :key="item.name" placement="right" :width="200" trigger="hover">
          <template #reference>
            <div class="icon-sub-menu" :key="item.name">
              <Icon :name="item.icon"></Icon>
            </div>
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
      <div class="icon-menu-item icon-active" v-else :key="item.path" @click="handleMenuClick(item)">
        <Icon :name="item.icon"></Icon>
      </div>
    </template>
  </div>
</template>
<script lang="ts" setup>
import { defineProps } from 'vue'
import { RouteLocationRaw, useRouter } from 'vue-router'
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
  border-radius: 2px;
}
:deep(.el-menu-item:hover) {
  border-left: 3px solid var(--el-color-primary);
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
