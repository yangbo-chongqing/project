<template>
  <div>
    <message class="itemstyle" v-for="(item,i) of rows" :key="i" 
    :imgurl="require('../../../../assets/a_7.png')"
    :title="item.title"
    :subtitle="item.subtitle"
    :sendtime="item.time">

    </message>
  </div>
</template>
<script>
import Message from "./Message.vue"
// 1.1引入json文件
import messagelistjson from "../json/messagelist.json"
export default {
  data(){
    return {
      //messagejson.json{"data":[...]}
      rows:messagelistjson.data//将json中的数组赋值给rows
    }
  },
  created(){
    console.log(this.rows)
  },
  components:{
    message:Message           //左侧标签名称：组件对象
  }
}
</script>
<style scoped>
  /* 一条消息底部添加一条 灰色下划线 */
  .itemstyle{
    padding:5px;
    border-bottom:1px solid #d9d9d9;
  }
</style>