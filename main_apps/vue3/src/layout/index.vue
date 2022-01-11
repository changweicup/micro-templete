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
          marginLeft: `${!commonStore.isCollapse ? commonConfig.SlideMenuWidth : '40' }px`,
          width: `calc(100% - ${(commonStore.isCollapse ? 40 : commonConfig.SlideMenuWidth) + 30}px)`
        }"
      >
        <TagView></TagView>
        <div
          class="micro-content"
          :style="{
          }"
        >
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
}
.micro-content {
  position: relative;
  box-sizing: border-box;
  margin: 0px 15px 15px 15px;
      top: 42px;

  width: 100%;
}
</style>
