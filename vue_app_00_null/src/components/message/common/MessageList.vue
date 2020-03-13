<template>
  <div>
    <!--h1>消息列表子组件 MessageList.vue</h1-->
     <!--3:调用(一条消息)子组件-->
     <message v-for="(item,i) of list.data"
       :key="i"
       :imgurl="require('../../../assets/a_7.png')"
       :title="item.title"
       :subtitle="item.subtitle"
       :sendtime="item.time"
     ></message>
  </div>
</template>
<script>
//<!--1:引入(一条消息)子组件-->
import Message from "./Message.vue"
//1.1:加载json文件
import mlist from "../json/messagelist.json"
export default {
  data(){
    return {//将mlist对象保存data供模板显示
      list:mlist
    }
  },
  components:{//<!--2:注册(一条消息)子组件-->
    "message":Message
  }
}
</script>

