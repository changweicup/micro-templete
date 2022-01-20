<template>
  <div class="special-button-wrapper">
    <slot></slot>
  </div>
</template>
<script lang="ts" setup>

</script>
<style lang="scss" scoped>
.special-button-wrapper {
  height: 30px;
  width: 120px;
  background-color: var(--el-color-primary-light-3);
  color: #ffffff;
  line-height: 30px;
  position: relative;
  display: inline-block;
  font-weight: 400;
  white-space: nowrap;
  text-align: center;
  text-shadow: 0 -1px 0 rgb(0 0 0 / 12%);
  box-shadow: 0 2px 0 rgb(0 0 0 / 5%);
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
  user-select: none;
  touch-action: manipulation;
  padding: 4px 15px;
  font-size: 15px;
  border-radius: 2px;
  border: 1px solid #d9d9d9;
}
</style>
