<template>
  <div>
    <h2>Exam03</h2>
    <!-- 第一个组件：开关组件 -->
    <mt-switch v-model="val2" @change="handle2">是否接受消息</mt-switch>
    <!-- 第二个组件：单选列表 -->
    <mt-radio title="东哥喜欢吃什么" :options="list" v-model="v3">
    </mt-radio>
    <mt-button @click="handle3">
      获取单选列表中的选中值
    </mt-button>
  </div>
</template>
<script>
export default {
  data(){
    return {
      val2:true,//开关组件状态
      v3:"", //单选列表 -->  选中值
      list:[  //单选列表
        {label:"早上",value:"红油火锅"},
        {label:"中午",value:"麻辣火锅"},
        {label:"晚上",value:"大补火锅"}]
    }
  },
  methods:{
    handle2(){
      // 获取开关组件状态
      console.log(this.val2)
    },
    handle3(){
      this.$toast(this.v3)
    }
  }
}
</script>
