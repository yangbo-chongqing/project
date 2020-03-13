<template>
  <div>
    <h3>表单组件</h3>
    <!-- 添加用户名输入框 -->
    <mt-field label="用户名" placeholder="请输入用户名" v-model="uname" :attr="{maxlength:10,autofocus:true}"></mt-field>  
    <!-- 添加密码输入框 -->
    <mt-field label="密码" placeholder="请输入密码" v-model="upwd"> </mt-field>
    <!-- 登录按钮 -->
    <mt-button @click="login">登录</mt-button>
  </div>
</template>
<script>
export default {
  data(){     //组件共享数据保存data
    return{
      uname:"",//双向绑定用户名
      upwd:"" 
    }
  },
  methods:{
    login(){
      // 功能：用户登录任务
      // 1：创建正则表达式验证用户名和密码格式  规则：字母数字3-12
      var reg=/^[0-9a-zA-Z]{3,12}$/  //^匹配开始，$匹配结束
      // 2：获取用户输入用户名
      var u=this.uname
      // 3：获取用户输入密码
      var p=this.upwd
      // 4：通过正则表达式验证用户名 如果不正确 弹出确认消息“用户名格式不正确”
      if(!reg.test(u)){
        this.$messagebox("消息","用户名不正确")
      }
      // 5：通过正则表达式验证密码 如果不正确 弹出确认消息“密码格式不正确”
      if(!reg.test(p)){
        this.$messagebox("消息","密码不正确")
      }
      // 6：输入正确  通过ajax请求服务器帮助完成登录任务

    }
  }
}
</script>
