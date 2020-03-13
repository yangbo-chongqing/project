<template>
  <div>
    Sub05
    <!-- 子组件，用于显示数据 -->
    <h1>{{msg}}</h1>
  </div>
</template>
<script>
export default {
  props:{   //声明接受父组件数据
    msg:{default:""}  //消息数据
  }
}
</script>