<template>
  <div>
    <h3>Exam04</h3>
    <!-- 添加面板组件 -->
    <mt-tab-container v-model="active">
    <!-- 1：父元素 -->
      <mt-tab-container-item id="tab1">
        生鲜面板
      </mt-tab-container-item>
    <!-- 2：生鲜面板 tab -->
      <mt-tab-container-item id="tab2">
        酒
      </mt-tab-container-item>
    <!-- 3：酒面板 tab2 -->
      <mt-tab-container-item id="tab3">
        化妆品
      </mt-tab-container-item>
    </mt-tab-container>
    <!-- 添加底部导航条 -->
    <!-- 1:父元素 -->
    <mt-tabbar v-model="active">
    <!-- 2:按钮组 -->
      <mt-tab-item id="tab1">
        <img src="../../../assets/01.png" alt="" slot="icon">
        生鲜
      </mt-tab-item>
      <mt-tab-item id="tab2">
        <img src="../../../assets/02.png" alt="" slot="icon">
        酒
      </mt-tab-item>
      <mt-tab-item id="tab3">
        <img src="../../../assets/03.png" alt="" slot="icon">
        化妆品
      </mt-tab-item>
    </mt-tabbar>
  </div>
</template>
<script>
export default {
  data(){
    return{
      active:"tab2" //显示面板二  酒
    }
  }
}
</script>