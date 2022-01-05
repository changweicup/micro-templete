<template>
  <div>
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
</template>
<script lang="ts" setup>
import { defineProps } from 'vue'
import { RouteLocationRaw, useRouter } from 'vue-router'
import { MenuRecordRaw } from '../../router/menu'
import Icon from '@/components/Icon/index.vue'

defineProps({
  menuList: {
    type: Array as () => Array<MenuRecordRaw>,
    default: () => []
  }
})

const router = useRouter()

const handleMenuClick = (item: { path: RouteLocationRaw }) => {
  if (item.path) {
    router.push(item.path)
  }
}

</script>
<style scoped>
</style>
