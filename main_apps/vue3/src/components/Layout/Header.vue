<template>
  <div class="layout-header">
    <slot></slot>
  </div>
</template>

<script lang="ts">
export default {

}
</script>

<style lang="scss" scoped>
.layout-header{
  position: fixed;
  z-index: 10;
  width: 100%;
  background: #fff;
  box-shadow: 0 2px 8px #f0f1f2;
  height: 64px;
  line-height: 64px;
  padding: 0 20px;
  z-index: 100;
}

</style>
