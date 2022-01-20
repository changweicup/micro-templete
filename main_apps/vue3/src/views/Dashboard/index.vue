<template>
<div>
<el-row :gutter="15">
    <el-col :span="6">
       <CupCard class="crad-item">
        <div></div>
      </CupCard>
    </el-col>
    <el-col :span="6">
       <CupCard class="crad-item">
        <div></div>
      </CupCard>
    </el-col>
    <el-col :span="6">
       <CupCard class="crad-item">
        <div></div>
      </CupCard>
    </el-col>
    <el-col :span="6">
       <CupCard class="crad-item">
        <div></div>
      </CupCard>
    </el-col>
  </el-row>
  <el-row>
    <el-col :span="24">
      <CupCard class="crad-item-1">
        <div></div>
      </CupCard>
    </el-col>
  </el-row>
  <el-row :gutter="15">
    <el-col :span="12">
      <CupCard class="crad-item-2">
        <div></div>
      </CupCard>
    </el-col>
    <el-col :span="12">
      <CupCard class="crad-item-2">
        <div></div>
      </CupCard>
    </el-col>
  </el-row>
  <el-row>
    <el-col :span="24">
      <CupCard class="crad-item-3">
        <div></div>
      </CupCard>
    </el-col>
  </el-row>
</div>
</template>
<script lang="ts" setup>
</script>
<style lang="scss" scoped>
.el-row {
  margin-bottom: 15px;
}
.el-row:last-child {
  margin-bottom: 0;
}

.crad-item {
  height: 180px;
}
.crad-item-1 {
  height: 400px;
}
.crad-item-2 {
  height: 510px;
}
.crad-item-3 {
  height: 600px;
}
</style>
