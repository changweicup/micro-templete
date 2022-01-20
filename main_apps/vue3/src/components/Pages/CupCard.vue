<template>
  <div class="cup-card">
    <div class="cup-card-body">
      <slot></slot>
    </div>
  </div>
</template>
<script lang="ts" setup>
</script>
<style lang="scss" scoped>
.cup-card {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  color: rgba(0, 0, 0, 0.85);
  font-size: 14px;
  font-variant: tabular-nums;
  line-height: 1.5715;
  list-style: none;
  font-feature-settings: "tnum", "tnum";
  position: relative;
  background: #fff;
  border-radius: 2px;
}
.cup-card-body {
  box-sizing: border-box;
  padding: 20px 24px 8px;
}
</style>
