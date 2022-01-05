<template>
  <span class="icon-comp">
    <el-icon v-if="type === 'el-icon'" :style="{ 'font-size': size + 'px' }">
      <component :is="name" />
    </el-icon>
  </span>
</template>

<script setup lang="ts">
import { defineProps } from 'vue'
defineProps({
  type: {
    type: String,
    default: 'el-icon'
  },
  size: {
    type: String,
    default: '14'
  },
  color: {
    type: String,
    default: '#333'
  },
  theme: {
    type: String,
    default: 'outline'
  },
  strokeWidth: {
    type: Number,
    default: 3
  },
  name: {
    type: String,
    default: 'el-Menu-icon'
  },
  className: {
    type: String,
    default: 'icon'
  }
})
</script>
<style lang="scss" scoped>
  .icon-comp {
    display: flex;
    align-items: center;
    vertical-align: middle;
    text-align: center;
    margin: 0 0 0 5px;
  }
</style>
