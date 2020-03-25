<template>
  <div>
    <tit></tit>
    <div class="center">
      <div>
        <Menu :theme="theme2" :open-names="['1']" accordion>
          <Submenu name="1">
            <template slot="title">
              <Icon type="ios-paper" />咪咕尖叫榜
            </template>
            <MenuItem name="1-1">尖叫新歌榜</MenuItem>
          </Submenu>
          <Submenu name="2">
            <template slot="title">
              <Icon type="ios-people" />咪咕官方榜
            </template>
            <MenuItem name="2-1">音乐榜</MenuItem>
            <MenuItem name="2-2">影视榜</MenuItem>
            <MenuItem name="2-3">内地榜</MenuItem>
            <MenuItem name="2-4">港台榜</MenuItem>
            <MenuItem name="2-5">欧美榜</MenuItem>
            <MenuItem name="2-6">日韩榜</MenuItem>
          </Submenu>
          <Submenu name="3">
            <template slot="title">
              <Icon type="ios-stats" />咪咕特色榜
            </template>
            <MenuItem name="3-1">彩铃榜</MenuItem>
            <MenuItem name="3-2">原创榜</MenuItem>
            <MenuItem name="3-3">KTV榜</MenuItem>
            <MenuItem name="3-4">网络榜</MenuItem>
            <MenuItem name="3-5">新专辑榜</MenuItem>
            <MenuItem name="3-6">MV榜</MenuItem>
          </Submenu>
          <Submenu name="4">
            <template slot="title">
              <Icon type="ios-stats" />全球权威榜
            </template>
            <MenuItem name="4-1">美国ITunes榜</MenuItem>
            <MenuItem name="4-2">美国billboard榜</MenuItem>
            <MenuItem name="4-3">Hito中文榜</MenuItem>
            <MenuItem name="4-4">中国TOP排行榜</MenuItem>
            <MenuItem name="4-5">韩国Melon榜</MenuItem>
            <MenuItem name="4-6">英国UK榜</MenuItem>
          </Submenu>
          <Submenu name="5">
            <template slot="title">
              <Icon type="ios-stats" />咪咕乐·榜
            </template>
            <MenuItem name="5-1">2020</MenuItem>
            <MenuItem name="5-2">2019</MenuItem>
            <MenuItem name="5-3">2018</MenuItem>
          </Submenu>
        </Menu>
      </div>
      <div class="centerall">
        <div class="centertop">
          <div>
            <img
              src="//cdnmusic.migu.cn/picture/2020/0323/1742/ASb89a677687f0d7121f8ab41cca7ce3db.jpg"
              alt
            />
          </div>
          <div class="topthr">
            <div>
              <h1 style="color:#333;margin-bottom:5px">尖叫新歌榜</h1>
              <span>更新时间：2020-03-24</span>
            </div>
            <div class="but">
              <a href class="bor" style="background:#e91e63;color:#fff">
                <img src="../img/播放.png" alt /> 播放选中歌曲
              </a>
              <a href class="bor">
                <img src="../img/添加.png" alt /> 添加到
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import tit from "./exam/tit.vue";
export default {
  data() {
    return {
      theme2: "dark"
    };
  },
  components: {
    tit
  }
};
</script>
<style scoped>
.center {
  margin: 3rem 6%; /*外层*/
  display: flex;
}
.centertop {
  display: flex; /*右侧外二*/
}
.centertop img:first-of-type {
  width: 180px; /*大图片*/
}
.centerall {
  /*右侧最外层*/
  margin: 0 5%;
}
.bor {
  border-radius: 30px;
  border: 1px solid #666;
  margin: 0 18.2px 0 0;
  padding: 5px 18.2px;
  color: #666;
}
.but .bor img {
  width: 1rem;
}
.topthr {
  margin-left: 2rem;
}
.but {
  margin-top: 30%;
}
</style>