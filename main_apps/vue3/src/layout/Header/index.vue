<template>
  <div
    class="header-box-wrap"
    :style="{
      height: `${ThemeConfig.HeaderHeight}px`,
      lineHeight: `${ThemeConfig.HeaderHeight}px`,
    }"
  >
    <div class="header-title" :style="{
      width: `${ThemeConfig.SlideMenuWidth}px`,
    }">
      <span>{{ ThemeConfig.title }}</span>
    </div>
    <div
      class="header-content"
    ></div>
    <div class="header-actions">
      <Notice />
      <HelpDoc />
      <Avatar />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ThemeConfig } from '../../themeConfig'
import Notice from './notice.vue'
import Avatar from './avatar.vue'
import HelpDoc from './helpDoc.vue'

</script>

<style lang="scss" scoped>
.header-box-wrap {
  position: fixed;
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  box-shadow: 0 1px 4px rgba(0, 21, 41, 0.08);
  width: 100%;
  background: #fff;
  z-index: 100;

  .header-title {
    padding: 0 23px;
    color: var(--el-color-primary);
    font-size: 26px;
    font-weight: bold;
    overflow: hidden;
  }
  .header-content {
    padding: 0 20px;
  }
  .header-actions {
    display: flex;
    align-items: center;
  }
}
</style>
