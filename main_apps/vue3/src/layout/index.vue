<template>
  <div>
    <Header></Header>
    <div class="layout-content">
      <SlideMenu></SlideMenu>
      <div
        class="micro-layout-container"
        :style="{
          top: `${commonConfig.HeaderHeight}px`,
          minHeight: `calc(100vh - ${commonConfig.HeaderHeight}px)`,
          marginLeft: `${!commonStore.isCollapse ? commonConfig.SlideMenuWidth : commonConfig.SlideMenuMinWidth}px`,
          width: `calc(100% - ${(commonStore.isCollapse ? commonConfig.SlideMenuMinWidth : commonConfig.SlideMenuWidth) + 30}px)`
        }"
      >
        <TagView></TagView>
        <div class="micro-content">
          <router-view v-slot="{ Component }">
            <transition name="el-fade-in-linear" mode="out-in" appear>
              <component :is="Component" />
            </transition>
          </router-view>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import Header from './Header/index.vue'
import SlideMenu from './SlideMenu/verticalMenu.vue'
import TagView from './TagView/index.vue'
import { commonConfig } from './commonConfig'
import { useCommonStore } from '@/stores/modules/commonStore'

const commonStore = useCommonStore()

</script>

<style lang="scss" scoped>
.layout-content {
  display: flex;
  justify-content: space-between;
}
.micro-layout-container {
  position: relative;
  background: #f0f2f5;
  transition-property: all;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 1s;
}
.micro-content {
  position: relative;
  box-sizing: border-box;
  margin: 0px 15px 15px 15px;
  top: 42px;
  height: calc(100% - 42px);
  width: 100%;
}
</style>
