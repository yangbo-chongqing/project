<template>
  <div class="page-head">
     <!--src/components/message/common/Title.vue-->
     <!--顶部导航条-->
     <!--(1)左侧保存一个字符串-->
     <span>{{leftTitle}}</span>
     <div class="right-head">
      <!--(2)右侧保存二张图片-->
        <div @click="search" class="imgdiv">
          <!--右侧第一张图片-->
          <img :src="rightFirstImg" style="width:25px;"/>
        </div>
      <!--(3)图片绑定点击事件11:45-->
        <div @click="add3" class="imgdiv" style="margin-left:20px;">
          <!--右侧第二张图片-->
          <img :src="rightSecondImg"  style="width:25px;margin-right:15px;"/>
        </div>
     </div>
  </div>
</template>
<script>
export default {
  //声明接收父组件传递数据
  props:{
    leftTitle:{default:""},//第一个数据:字符串
    rightFirstImg:{default:""},//右侧图片1
    rightSecondImg:{default:""},//右侧图片2
    search:{type:Function},//声明函数:类型检测
    add3:{type:Function}//类型检测
  }   
}
</script>
<style scoped>
  /*1:scoped 防止样式冲突*/
  /* 自动为选择器加一随机数*/
  /*2:最外层父元素*/
  .page-head{
     display: flex;/*移动端项目首选布局flex*/
     position: fixed;/*顶部导航条固定定位*/
     z-index:999;/*显示在元素上面*/
     width:100%;/*宽度与父元素相同*/
     justify-content: space-between;
     /*子元素两端对齐*/
     align-items: center;/*垂直居中*/
     background-color:#3e3a39;/*背景颜色*/
     height:48px;/*高度*/
     padding-left:7px;/*内边距*/
     padding-right:7px;
     color:#fff;  /*文字颜色*/
     font-size:18px; /*文字大小*/
  }
  /*3:右侧图片*/
  .right-head{
    display: flex;/*子元素水平排列*/
  }
  /*4:图片单独处理*/
  .imgdiv{
    display:flex;        /*弹性布局*/
    align-items: center; /*垂直居中*/
    height:48px;         /*高度48px;*/
  }

</style>

