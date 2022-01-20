<template>
  <div class="header-avatar">
        <el-dropdown>
          <el-avatar @error="errorHandler" :size="30">
            <img src="../../assets/logo.png" />
          </el-avatar>
          <template #dropdown>
            <el-dropdown-menu>
              <el-dropdown-item>个人中心</el-dropdown-item>
            </el-dropdown-menu>
          </template>
        </el-dropdown>
      </div>
</template>
<script setup lang="ts">

const errorHandler = () => true

</script>
<style lang="scss" scoped>
  .header-avatar {
    display: flex;
    align-items: center;
    padding: 0 10px;
    cursor: pointer;
  }
</style>
