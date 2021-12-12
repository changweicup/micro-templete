<template>
  <div class="slide-menu">
    <el-menu
      default-active="2"
      class="el-menu-vertical-demo"
      @open="handleOpen"
      @close="handleClose"
    >
      <el-sub-menu index="1">
        <template #title>
          <el-icon>
            <location />
          </el-icon>
          <span>Navigator One</span>
        </template>
        <el-menu-item index="1-1">item one</el-menu-item>
        <el-menu-item index="1-2">item two</el-menu-item>
        <el-sub-menu index="1-4">
          <template #title>
            <span>item four</span>
          </template>
          <el-menu-item index="1-4-1">item one</el-menu-item>
        </el-sub-menu>
      </el-sub-menu>
      <el-menu-item index="2">
        <el-icon>
          <icon-menu />
        </el-icon>
        <template #title>Navigator Two</template>
      </el-menu-item>
      <el-menu-item index="3" disabled>
        <el-icon>
          <document />
        </el-icon>
        <template #title>Navigator Three</template>
      </el-menu-item>
      <el-menu-item index="4">
        <el-icon>
          <setting />
        </el-icon>
        <template #title>Navigator Four</template>
      </el-menu-item>
    </el-menu>
  </div>
</template>

<script lang="ts" setup>
import { defineComponent, ref } from 'vue'
import {
  Location,
  Document,
  Menu as IconMenu,
  Setting
} from '@element-plus/icons-vue'

const handleOpen = (key: string, keyPath: string) => {
  console.log(key, keyPath)
}
const handleClose = (key: string, keyPath: string) => {
  console.log(key, keyPath)
}
</script>

<style lang="scss" scoped>
::v-deep .el-menu--inline {
  background: #fafafa;
}

::v-deep .el-menu-item.is-active {
  border-right: 3px solid var(--el-color-primary);
}
.el-menu-item:hover {
  border-right: 3px solid var(--el-color-primary);
}
.slide-menu {
  position: fixed;
  top: 64px;
  width: 235px;
  background: #fff;
  height: calc(100vh - 64px);
  z-index: 99;
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
