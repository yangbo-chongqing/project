<template>
  <div>Fa06.vue 父组件
    <!-- 3:调用子组件 -->
    <Sub05 :msg="msg2"></Sub05> 
  </div>
</template>  
<script>
// 1:引入指定子组件
import Sub05 from "./Sub05.vue"
export default {
  data(){
    return{
      msg2:"今天2月10日"
    }
  },
  // 2:注册子组件
  components:{
    Sub05
  }
}
</script>