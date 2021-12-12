<template>
  <div>
    <Header>
      <div class="header-box-wrap">
        <div class="header-icon">
          <el-icon
            :color="headerColor"
            :size="16"
            style="cursor: pointer;"
            @mouseenter="handleHeaderEnter"
            @mouseleave="handleHeaderLeave"
          >
            <Grid />
          </el-icon>
        </div>
        <div style="width: 300px;">
          <span>开发管理平台</span>
        </div>
        <div>
          <Horizontal />
        </div>
      </div>
    </Header>
    <div class="layout-center">
      <transition name="slide-fade">
        <SlideMenu v-show="menuShow" @mouseenter="handleMenuEnter" @mouseleave="handleMenuLeave"></SlideMenu>
      </transition>
      <transition name="el-fade-in-linear">
        <PageCard @mouseenter="handleMenuLeave"></PageCard>
      </transition>
    </div>
  </div>
</template>

<script lang="ts" setup>
import Header from './Header.vue'
import SlideMenu from '../Menu/VerticalMenu.vue'
import Horizontal from '../Menu/HorizontalMenu.vue'
import PageCard from '../PageCard.vue'
import { Grid } from '@element-plus/icons-vue'
import { ref } from 'vue'

const headerColor = ref('#303133')
const menuShow = ref(false)

const handleHeaderEnter = () => {
  headerColor.value = '#1890ff'
  menuShow.value = true
}

const handleHeaderLeave = () => {
  headerColor.value = '#303133'
}

const handleMenuEnter = () => {
  menuShow.value = true
}

const handleMenuLeave = () => {
  menuShow.value = false
}

</script>

<style lang="scss" scoped>
.header-box-wrap {
  display: flex;
  align-items: center;
  height: inherit;

  .header-icon {
    margin-right: 10px;
    padding-top: 5px;
  }
}
.layout-center {
  display: flex;
  justify-content: space-between;
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
