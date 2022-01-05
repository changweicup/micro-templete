<template>
  <div class="header-box-wrap">
    <div
      class="layout-header"
      :style="{
        'height': `${commonConfig.HeaderHeight}px`,
        'line-height': `${commonConfig.HeaderHeight}px`,
      }"
    >
      <div
        class="header-icon-name"
        :style="{
          width: `${commonConfig.SlideMenuWidth}px`
        }"
      >
        <div>
          <span>麒 麟</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { commonConfig } from '../commonConfig'

</script>

<style lang="scss" scoped>
.layout-header {
  position: fixed;
  width: 100%;
  background: #fff;
  box-shadow: 0 2px 8px #f0f1f2;
  padding: 0 20px;
  z-index: 100;
}
.header-box-wrap {
  .header-icon-name {
    display: flex;
  }
}
</style>
