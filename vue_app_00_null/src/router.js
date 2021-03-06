import Vue from 'vue' //引入Vue对象
import Router from 'vue-router'//引入路由
//1:引入Exam01.vue 组件
import tit from "./components/exam/tit.vue"
import home from "./components/home.vue"
import bangdan from './components/bangdan.vue'
import geshou from "./components/geshou.vue";
import gedan from "./components/gedan.vue"
import vip from './components/vip.vue'
Vue.use(Router)
export default new Router({
  routes: [
    //配置组件
    { path: '/tit', component: tit },
    { path: '', component: home },
    { path: '/top', component: bangdan },
    { path: '/singer', component: geshou },
    { path: '/song', component: gedan },
    { path: '/vip', component: vip }
  ]
})



