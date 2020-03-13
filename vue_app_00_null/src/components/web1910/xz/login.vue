<template>
<div> 
  用户名：<mt-field placeholder="请输入用户名" v-model="uname"></mt-field>
  <br>
  密　码：<mt-field placeholder="请输入密码" v-model="upwd"></mt-field>
  <mt-button size="large" @click="login">登录</mt-button>
</div>
</template>
<script>
export default {
  data(){
    return{
      uname:"tom",
      upwd:"123"
    }
  },
  methods:{
    login(){
      // 1:创建正则表达式用于验证用户名和密码
      var reg=/^[a-zA-Z0-9]{3,11}$/
      // 2： 获取用户名和密码
      var n=this.uname
      var p=this.upwd
      // 3：验证用户名格式，并提示错误
      if(!reg.test(n)){
        this.$messagebox("消息","输入用户名格式错误")
        return
      }
      // 4：验证密码格式，并提示错误
      if(!reg.test(p)){
        this.$messagebox("消息","输入密码格式错误")
        return
      }
      // 5：创建URL变量，保存请求服务器地址
      var url="login"
      // 6：创建obj变量，保存请求时参数
      var obj={
        uname:n,upwd:p
      }
      // 7：发送ajax请求
      this.axios.get(url,{params:obj}).then(res=>{    
      // 8：接受服务器返回结果
      // 9：如果-1 提示用户名密码错误
      // 10：如果1 跳转商品列表组件 /Product
      if(res.data.code==-1){
        this.$messagebox("消息","用户名或密码错误")
      }else{
        this.$toast("登录成功")
        this.$router.push("/Product")
      }
      })
    }
  }
}
</script>