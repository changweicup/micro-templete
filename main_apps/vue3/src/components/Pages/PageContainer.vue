<template>
  <div
    class="page-container"
    :style="{
      top: ThemeConfig.isTagsMenu ? '57px' : '15px',
      height: ThemeConfig.isTagsMenu ? 'calc(100% - 57px)' : 'calc(100% - 15px)',
    }"
  >
    <slot></slot>
  </div>
</template>
<script setup lang="ts">
import { ThemeConfig } from '@/themeConfig'
</script>

<style lang="scss" scoped>
.page-container {
  position: relative;
  box-sizing: border-box;
  margin: 0px 15px 15px 15px;
  width: 100%;
}
</style>
