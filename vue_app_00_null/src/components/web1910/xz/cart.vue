<template>
  <div>
    <!-- 1：顶部全选复选框 -->
    <div class="selectall">
      全选<input type="checkbox" v-model="allcb" @change="selectAll">
    </div>
    <!-- 2：购物车商品列表 -->
    <div class="cartItem" v-for="(item,i) of list" :key="i">
      <div class="leftImgTxt">
        <input type="checkbox" @change="changeItem" v-model="item.cb">
        <div class="title">{{item.lname}}</div>
        <div class="title">{{item.price}}</div>
      </div>
      <mt-button @click="del(item.id)">删除</mt-button>
    </div>
    <!-- 3：一组按钮 -->
    <div>
      购物车中商品数量<span style="color:red">{{$store.getters.getCartCount}}</span>
      <!-- 亮哥的发量 <span style="color:red">
        {{$store.getters.getFa}}
      </span>
      <mt-button @click="sub">掉一根</mt-button> -->
      <mt-button @click="delm">删除选中商品</mt-button>
      <mt-button>清空购物车</mt-button>
    </div>
  </div>
</template>
<script>
export default {
  data(){
    return {
      list:[],//购物车列表信息
      allcb:false //全选框状态
    }
  },
  created(){
    // 组件创建成功后 获取购物车列表信息
    this.loadMore()
  },
  methods:{
    sub(){
      // 功能：修改全局共享数据fa
      this.$store.commit("subFa")
    },
    delm(){
      // 功能：删除选中商品
      // 1：判断商品数量 如果数量为0 this.list
      if(this.list.length==0){
      // 2：显示确认框   当前没有可删除商品
        this.$messagebox("消息","当前没有可删除商品")
      // 3：返回
        return
      }
      // 4：创建变量str  目的拼接字符串 "2,3,4"
      var str="";
      // 5：创建循环遍历数组 this.list
        for(var i of this.list){
          if(i.cb==true){
            // 6：判断当前商品是否为选中状态 cb==true 获取id拼接字符串str+","
            str+=i.id+","
          }
        }
      // 7：判断：如果用户没有选中商品str.length==0
      if(str.length==0){
      // 8：显示确认框 请选者要删除的商品
        this.$messagebox("请选择需要删除的商品")
        return;
      }
      // 8.1：截取字符串   "2,3,"=>"2,3"
      str= str.substring(0,str.length-1)
      // 9：显示确认交互框 是否删除指定数据
      // 10：创建变量 url obj
      // 11：发送ajax请求删除指定数据
      this.$messagebox.confirm("是否删除指定商品?").then(res=>{
        var url="delm";
        var obj={id:str}
        this.axios.get(url,{params:obj}).then(res=>{
          // 重新请求数据，刷新页面
          this.loadMore();
          this.$toast("删除成功")
        })
      }).catch(err=>{})
    },
    selectAll(){
      // 功能：全选按钮状态修改操作
      // 1:获取全选按钮状态
      var cb=this.allcb
      // 2：创建循环遍历所有商品状态赋值
      for(var item of this.list){
        item.cb=cb
      }
    },
    changeItem(){
      // 功能：商品状态修改操作
      // 功能一：累加商品状态为true
      var sum=0;
      for(var item of this.list ){
        if(item.cb)sum++;
      }
      // 功能二：判断如果商品总数量与true总量相同
      if(this.list.length==sum){
        this.allcb=true;
      }else{
        this.allcb=false;
      }
    },
    del(id){
      // 1：显示交互对话框
      this.$messagebox.confirm("是否删除该商品").then(res=>{
        //点击确认按钮
         // 2：如果用户选中确认
      // 3：创建变量url 保存中间人删除程序的地址 /del
      var url ="del";
      // 4：创建变量obj 保存id
      var obj={id};
      // 5：发送ajax请求
      this.axios.get(url,{params:obj}).then(res=>{
        if(res.data.code==1){
          this.$toast("删除成功")
          this.loadMore()
        }
      })
      // 6：获取返回结果 重新加载数据
      }).catch(err=>{
      })
    },
    loadMore(){
      console.log(11)
      //发送请求获取购物车数据
      // 1：创建变量url
      var url="findcart";
      // 2：发送ajax请求并且获取服务器返回数据
      this.axios.get(url).then(res=>{
        if(res.data.code==-2){
          this.$toast("请登录")
          this.$router.push("/login")
        }else{
        //  this.list=res.data.data
        // 5.1:获取服务器中购物车列表，临时保存变量rows
        var rows= res.data.data
        // 5.2创建循环遍历数组 在每个商品中添加cb属性
        for(var item of rows){
          item.cb=false
        }
        this.list=rows
        }
      })
      var sum=0;
        for(var item of this.list){
          sum+=item.count
        }
        this.$store.commit("addCart",sum)
      // 3：获取服务器返回数据 code==-2 提示请登录 跳转到login
      // 4：获取服务器返回数据  code==1 将服务器返回购物车列表保存list
      // 5：在模板中创建循环显示购物车列表
    }
  }
}
</script>
<style scoped>
/* 1:一个商品项目元素 */
.cartItem{
  display:flex;/*弹性布局*/
  justify-content: space-between;/*子元素两端对齐*/
  align-items: center;/*子元素垂直居中*/
  border-bottom:1px solid #555;
  margin-top:25px;
}
/* 2：左侧【商品名称与价格】 */
.leftImgTxt{
  display: flex;
  align-items: center;
}
.title{
  margin-left:15px;
}
</style>