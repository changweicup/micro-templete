<template>
  <div>
    <Header></Header>
    <div class="layout-content">
      <SlideMenu></SlideMenu>
      <div
        class="micro-layout-container"
        :style="{
          'top': `${commonConfig.HeaderHeight}px`,
          'left': `${commonConfig.SlideMenuWidth}px`,
          'min-height': `calc(100vh - ${commonConfig.HeaderHeight}px)`,
          'width': `calc(100% - ${commonConfig.SlideMenuWidth}px)`
        }"
      >
        <TagView></TagView>
        <div
          class="micro-content"
          :style="{
            'height': `calc(100% - 60px)`,
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
  margin: 0px 20px 20px 20px;
  top: 42px;
}
</style>
