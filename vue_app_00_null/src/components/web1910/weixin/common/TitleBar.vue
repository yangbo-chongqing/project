<template>
  <div class="page-head">
    <!-- 左侧文字 -->
    <span>{{leftTitle}}</span>
    <!-- 右侧两张图片 -->
    <div class="right-head">
      <div class="searchdiv">
        <img style="width:25px" :src="rightFirstImg" alt="">
      </div>
      <div class="searchdiv">
        <img style="width:25px;margin-left:20px;margin-right:15px;" :src="rightSecondImg" alt="">
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props:{
    //声明接受父组件的数据
    //左侧的标题
    leftTitle:{
      default:""
    },
    //右侧的图片
    rightFirstImg:{default:""},
    rightSecondImg:{default:""}
  }
}
</script>
<style scoped>
  /* 1:外层父元素弹性布局 */
  .page-head{
    display:flex;/*指定布局方式为：弹性布局*/
    position:fixed;/*定位方式：固定定位 */
    z-index: 999;/* 显示元素的上方*/
    width:100%;/*填满父元素*/
    justify-content: space-between;/* 子元素两端对齐*/
    align-items: center; /*子元素垂直居中*/
    background-color: #3e3a39;
    padding-left:7px;
    padding-right:7px;/*内边距*/
    color: aliceblue;
    height:48px;
    font-size:18px;
  }
  /* 2：右侧元素弹性布局 */
  .right-head{
    display: flex;
  }
</style>>

</style>