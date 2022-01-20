<template>
  <div>
    <Header></Header>
    <div class="layout-content">
      <SlideMenu></SlideMenu>
      <div
        class="micro-layout-container"
        :style="{
          top: `${ThemeConfig.HeaderHeight}px`,
          minHeight: `calc(100vh - ${ThemeConfig.HeaderHeight}px)`,
          marginLeft: `${!commonStore.isCollapse ? ThemeConfig.SlideMenuWidth : ThemeConfig.SlideMenuMinWidth}px`,
          width: `calc(100% - ${(commonStore.isCollapse ? ThemeConfig.SlideMenuMinWidth : ThemeConfig.SlideMenuWidth) + 30}px)`
        }"
      >
        <TagView v-if="ThemeConfig.isTagsMenu"></TagView>
        <PageContainer>
          <router-view v-slot="{ Component }">
            <transition name="el-fade-in-linear" mode="out-in" appear>
              <component :is="Component" />
            </transition>
          </router-view>
        </PageContainer>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import Header from './Header/index.vue'
import SlideMenu from './SlideMenu/verticalMenu.vue'
import TagView from './TagView/index.vue'
import { ThemeConfig } from '../themeConfig'
import { useCommonStore } from '@/stores/modules/commonStore'
import PageContainer from '../components/Pages/PageContainer.vue'

const commonStore = useCommonStore()

</script>

<style lang="scss" scoped>
.layout-content {
  display: flex;
  justify-content: space-between;
}
.micro-layout-container {
  position: relative;
  transition-property: all;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 0.5s;
}
</style>
