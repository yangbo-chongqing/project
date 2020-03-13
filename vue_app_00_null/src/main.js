import Vue from 'vue'       //vue实例对象
import App from './App.vue' //根组件
import router from './router'//路由模块
import ViewUI from 'view-design';//引入view UI组件
Vue.use(ViewUI)
import 'view-design/dist/styles/iview.css'

//功能一：引入和配置mint-ui组件库
// 1:引入mint-ui所有组件
import MintUI from "mint-ui"
// 2:单独引入mint-ui样式文件
import "mint-ui/lib/style.css"
// 3:将mint-ui对象注册Vue实例
Vue.use(MintUI);
// 功能二：引入图标字体中样式文件，使所有自定义组件都可使用
import "./font/iconfont.css"
// 功能三：引入axios库
// 1：引入axios库
import axios from "axios"
// 2：配置访问服务器基础路径
axios.defaults.baseURL="http://127.0.0.1:4000/"
// 3：配置保存session数据
axios.defaults.withCredentials=true
// 4：注册
Vue.prototype.axios=axios;

// 功能四：引入全局对象vuex存储数据
// 1：引入vuex
import Vuex from "vuex"
// 2：注册vuex  
Vue.use(Vuex);
// 3：创建存储对象
var store= new Vuex.Store({
  state:{
    //全局共享数据
    fa:12, // 亮哥头发数量
    cartCount:0,//购物车中商品数量
  },
  mutations:{
    // 所有修改全局共享数据函数
    subFa(state){
      state.fa--
    },
    subCart(state){state.cartCount--},
    addCart(state,n){state.cartCount=n},
    clearCart(state){state.cartCount=0}
  },
  getters:{
    // 所有获取全局共享数函数
    getFa(state){return state.fa},
    getCartCount(state){return state.cartCount}
    
  }
})
// 4：将存储对象添加vue实例中
//以下代码必须放在main.js最后
new Vue({
  router,         //路由对象
  render: h => h(App),
  store
}).$mount('#app')