<template>
  <div>
    <h3>mintui练习组件</h3>
    <button @click="openToast">显示消息框</button>
    <button @click="openAlert">显示确认框</button>
  </div>
</template>
<script>
export default {
  // 添加一组函数
  methods:{
    // 添加显示消息提示框函数
    openToast(){
      // 显示提示框，默认3s结束
      //this 为当前组件对象 Exam01.vue
      this.$toast({
        message:"添加成功",//显示的文字
        position:"top",//显示的位置
        iconClass:"iconfont icon-football_name"
      })
    },
    // 添加显示确认消息函数
    openAlert(){
      // 确认消息    确定
      // this.$messagebox("消息","用户名格式不正确")
      // 确认消息     确定  取消
      // this.$messagebox.confirm("是否删除指定数据")
      // .then(res=>{console.log("确认")})//确认时执行输出
      // .catch(err=>{console.log("取消")})//取消时执行输出
      // 输出框
      this.$messagebox.prompt("请输入东哥的年龄")
      .then((value)=>{console.log(value)})
      .catch((err)=>{console.log(err)})
    }
  }
}
</script>>