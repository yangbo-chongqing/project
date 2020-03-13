<template>
  <div class="page-tabbar">
    <div class="page-wrap">
      <!-- 1:调用顶部标题子组件 -->
      <TitleBar leftTitle="微信(100)" :rightFirstImg="require('../../../assets/ic_search.png')" :rightSecondImg="require('../../../assets/ic_add.png')"></TitleBar>
      <!-- 2:调整布局：保留标题子组件高度 -->
      <div style="margin-top:48px"></div>
      <!-- 3：消息列表面板 -->
      <mt-tab-container v-model="active"> 
        <mt-tab-container-item id="message"><messageList>
          </messageList>
        </mt-tab-container-item>
      </mt-tab-container>
      <!-- 4：底部导航条 -->
      <mt-tabbar v-model="active" fixed> <!-- fixed 固定导航条-->
        <!-- 按钮一：微信 -->
        <mt-tab-item id="message" @click.native="change(0)">
          <TabbarIcon 
          :focused="list[0].isSelect"
          :selectedImg="require('../../../assets/ic_weixin_selected.png')"
          :normalImg="require('../../../assets/ic_weixin_normal.png')"></TabbarIcon>
          微信
        </mt-tab-item>
        <!-- 按钮二：通讯录 -->
        <mt-tab-item id="contact" @click.native="change(1)">
          <TabbarIcon
          :focused="list[1].isSelect"
          :selectedImg="require('../../../assets/ic_contacts_selected.png')"
          :normalImg="require('../../../assets/ic_contacts_normal.png')">
          </TabbarIcon>
          通讯录
        </mt-tab-item>
        <!-- 按钮三：我 -->
        <mt-tab-item id="find" @click.native="change(2)">
           <TabbarIcon
          :focused="list[2].isSelect"
          :selectedImg="require('../../../assets/ic_find_selected.png')"
          :normalImg="require('../../../assets/ic_find_normal.png')">
          </TabbarIcon>
          发现
        </mt-tab-item>
        <!-- 按钮四：发现 -->
        <mt-tab-item id="me" @click.native="change(3)">
           <TabbarIcon
          :focused="list[3].isSelect"
          :selectedImg="require('../../../assets/ic_me_selected.png')"
          :normalImg="require('../../../assets/ic_me_normal.png')">
          </TabbarIcon>
          我
        </mt-tab-item>
      </mt-tabbar>
    </div>
  </div>
</template>
<script>
// 1:引入顶部标题子组件
import TitleBar from "./common/TitleBar.vue"
// 1.1引入消息列表组件
import messageList from "./common/messageList.vue"
import TabbarIcon from "./common/TabbarIcon.vue"
export default {
  data(){
    return{
      active:"message",
      list:[
        {isSelect:true}, //按钮状态
        {isSelect:false},
        {isSelect:false},
        {isSelect:false}
      ]
    }
  },
  // 2:注册顶部标题子组件
  components:{
    TitleBar,messageList,TabbarIcon
  },
  methods:{
    change(idx){
      // 1:创建变量size 表示数组长度
      var size = this.list.length
      // 2：创建数组遍历数据list每个元素
      for(var i=0;i<size;i++){
      // 3：判断如果参数下载idx与当前按钮下表相同
      if(i==idx){
      this.list[i].isSelect=true;
      }else{
        this.list[i].isSelect=false;
        // 4：当前元素选中状态true
        // 5：其他元素默认状态false
      }
      }
    }
  }
}
</script>
<style  scoped>
/*最外层父元素*/
.page-tabbar{
  overflow:hidden;  /*溢出就隐藏*/
}
/* 内层元素 */
.page-wrap{
  overflow: auto;/*数据多出的隐藏*/
    padding-bottom: 60px; /*底部导航栏空间*/
}
.mint-tabbar > .mint-tab-item.is-selected{
  background-color:transparent;
  color:#45c081 /*覆盖mint-ui组件中 按钮文字选中的样式*/
}
.mint-tabbar > .mint-tab-item{
  color:#999;  /*覆盖组件中未选中的文字样式*/
}
</style>