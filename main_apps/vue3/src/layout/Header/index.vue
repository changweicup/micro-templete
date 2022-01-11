<template>
  <div
    class="header-box-wrap"
    :style="{
      height: `${commonConfig.HeaderHeight}px`,
      lineHeight: `${commonConfig.HeaderHeight}px`,
    }"
  >
    <div class="header-title" :style="{
      width: `${commonConfig.SlideMenuWidth}px`,
    }">
      <div>
        <span>麒 麟</span>
      </div>
    </div>
    <div
      class="header-content"
      :style="{
        marginLeft: `${commonConfig.SlideMenuWidth}px`,
        width: `calc(100% - ${commonConfig.SlideMenuWidth}px)`,
      }"
    ></div>
  </div>
</template>

<script lang="ts" setup>
import { commonConfig } from '../commonConfig'

</script>

<style lang="scss" scoped>
.header-box-wrap {
  position: fixed;
  box-sizing: border-box;
  display: flex;
  box-shadow: 0 1px 4px rgba(0, 21, 41, 0.08);
  width: 100%;
  background: #fff;
  z-index: 100;

  .header-title {
    padding: 0 20px;
  }
  .header-content {
    padding: 0 20px;
  }
}
</style>
