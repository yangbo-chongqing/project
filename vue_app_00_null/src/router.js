import Vue from 'vue' //引入Vue对象
import Router from 'vue-router'//引入路由
//1:引入Exam01.vue 组件
import tit from "./components/exam/tit.vue"

Vue.use(Router)
export default new Router({
  routes: [
    //配置组件
    { path: '/tit', component: tit },

  ]
})



