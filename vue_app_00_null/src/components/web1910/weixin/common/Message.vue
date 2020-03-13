<template>
  <div class="rootstyle">
    <!-- 左侧：图片；大小标题； -->
    <div class="leftimgtxt">
      <img :src="imgurl"  class="imgstyle" alt="">
      <div class="lefttitle">
        <!-- 父标题 -->
        <span class="title">{{title}}</span>
        <!-- 子标题 -->
        <span class="subtitle">{{subtitle}}</span>
      </div>
    </div>
    <!-- 右侧：发送时间 -->
    <span class="sendtime">{{sendtime}}</span>
  </div>
</template>
<script>
//接受父组件传递的数据
export default {
  props:{
    //声明父组件传递的数据
    imgurl:{default:""},//左侧图片默认值
    title:{default:""},  //默认值为空字符串
    subtitle:{default:""},
    sendtime:{default:""}
  }
}
</script>
<style scoped>
/* 1:一条消息元素 */
.rootstyle{
  display:flex;     /*弹性布局*/
  justify-content: space-between; /*子元素两端对齐*/
  align-items: center;   /*子元素垂直居中*/
}
/* 2：左侧图片与标题父元素 */
.leftimgtxt{
  display: flex   /*子元素水平排列*/
}
/* 3：左侧图片宽度和高度 */
.imgstyle{
  width:50px;
  height:50px
}
/* 4：左侧标题与子标题父元素 */
.lefttitle{
  display: flex;/*弹性布局*/
  flex-direction: column;/*子元素按列排列*/
  justify-content: center;/*居中对齐*/
  margin-left:7px;  /*标题和图片有7px间距*/
}
/* 5：左侧标题 */
.title{
  color:#000;  /*颜色与大小*/
  font-size:17px;
}
/* 6：左侧子标题 */
.subtitle{
  color:gray;
  margin-top:4px; /*子标题与父标题保持间距*/
}
/* 右侧发送时间 */
.sendtime{
  color:gray
}
</style>