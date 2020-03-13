<template>
  <div>
    <!-- 接受三个参数 -->
    <!-- focused 选中状态：true false -->
    <!-- seletcedImg  选中图片 -->
    <!-- normalImg 默认图片 -->
    <img :src="focused?selectedImg:normalImg" class="imgstyle" alt="">
  </div>
</template>
<script>
export default {
  props:{
    focused:false, //默认为未选中状态
    selectedImg:{default:""},
    normalImg:{default:""}
  }
}
</script>
<style scoped>
  .imgstyle{
    width:30px;
    height:30px;
  }
</style>