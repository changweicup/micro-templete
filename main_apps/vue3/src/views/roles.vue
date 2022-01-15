<template>
  <PageCard>
    <transition name="fade">
      <div class="menu" :style="isChange ? 'width: 100px' : 'width: 200px'">
        宽度实验
          <el-button @click="change">
    按钮
  </el-button>
      </div>
    </transition>
  </PageCard>
</template>

<script lang="ts" setup>
import PageCard from '@/components/Pages/PageCard.vue'
import { ref } from 'vue'

const isChange = ref(true)
const open = ref('open')

const close = ref('close')

const change = () => {
  isChange.value = !isChange.value
}
</script>
<style lang="scss" scoped>
.open {
  width: 200px;
  background: blue;
}
.menu {
  height: 10vh;
  background: yellow;
  transition-property: all;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 1s;
}
.close {
  width: 100px;
  background: yellow;
}
.fade-enter-active {
  transition: all 2s linear;
  background: red;
}
.fade-leave-active {
  transition: all 2s;
  background: black;
}
</style>
