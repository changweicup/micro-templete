<template>
  <PageCard>
    <div class="home">
      <img alt="Vue logo" src="../assets/logo.png">
      <HelloWorld msg="主应用 - Vue@3.x + TypeScript"/>
    </div>
  </PageCard>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import HelloWorld from '@/components/HelloWorld.vue'
import PageCard from '@/components/Pages/PageCard.vue'

export default defineComponent({
  name: 'Home',
  components: {
    HelloWorld,
    PageCard
  }
})
</script>
