<template>
  <div class="cw-menu">
    <div class="cw-menu-wrap">
      <div class="cw-menu--horizontal">
        <div class="cw-menu-item" @mouseenter="handleMenuEnter" @mouseleave="handleMenuLeave">菜单</div>
        <div class="cw-menu-item">菜单</div>
        <div class="cw-menu-item">菜单</div>
        <div class="cw-menu-item">菜单</div>
      </div>
      <transition name="slide-fade">
        <div class="cw-menu-drawer" v-show="menuDrawer"></div>
      </transition>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const menuDrawer = ref(false)

const handleMenuEnter = () => {
  menuDrawer.value = true
}

const handleMenuLeave = () => {
  menuDrawer.value = false
}
</script>

<style lang="scss" scoped>
.cw-menu--horizontal {
    display: flex;
    flex-wrap: nowrap;
    border-bottom: solid 1px var(--el-menu-border-color);
    border-right: none;
}

.cw-menu--horizontal>.cw-menu-item {
    display: inline-flex;
    justify-content: center;
    align-items: center;
    height: 60px;
    margin: 0;
    border-bottom: 2px solid transparent;
    color: var(--el-menu-text-color);
}
.cw-menu-item {
    line-height: 56px;
    font-size: var(--el-menu-item-font-size);
    padding: 0 20px;
    list-style: none;
    cursor: pointer;
    position: relative;
    transition: border-color var(--el-transition-duration),background-color var(--el-transition-duration),color var(--el-transition-duration);
    box-sizing: border-box;
    white-space: nowrap;
}
.cw-menu-item:hover {
  border-bottom: 3px solid var(--el-color-primary)
}
.cw-menu-wrap {
  position: relative;
}
.cw-menu-drawer {
  position: absolute;
  top: 64px;
  z-index: 1000;
  height: 400px;
  width: 1000px;
  background: #ffffff;
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, .1);
}
.slide-fade-enter-active {
  transition: all .2s ease;
}
.slide-fade-leave-active {
  transition: all .2s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.slide-fade-enter, .slide-fade-leave-to{
  transform: translateX(5px);opacity: 0;
}
</style>
