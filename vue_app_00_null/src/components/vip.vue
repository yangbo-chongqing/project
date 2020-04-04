<template>
  <div>
    <tit></tit>
    <div>
      <div class="fa">
        <img src="//cdnmusic.migu.cn/v3/static/img/music/service/platinum-1.jpg" alt />
        <div class="btnopen">立即开通</div>
      </div>
      <img src="//cdnmusic.migu.cn/v3/static/img/music/service/platinum-2.jpg" alt />
      <img src="//cdnmusic.migu.cn/v3/static/img/music/service/platinum-3.jpg" alt />
      <img src="//cdnmusic.migu.cn/v3/static/img/music/service/platinum-4.jpg" alt />
      <img src="//cdnmusic.migu.cn/v3/static/img/music/service/platinum-5.jpg" alt />
      <img src="//cdnmusic.migu.cn/v3/static/img/music/service/platinum-6.jpg" alt />
      <div class="fa">
        <img src="//cdnmusic.migu.cn/v3/static/img/music/service/platinum-7.jpg" alt />
        <div class="btnopen1">立即开通</div>
      </div>
    </div>
    <bottom></bottom>
  </div>
</template>
<script>
import tit from "./exam/tit";
import bottom from "./exam/bottom";
export default {
  components: { tit, bottom }
};
</script>
<style  scoped>
img {
  width: 100%;
  min-width: 1240px;
}
.btnopen {
  width: 222px;
  height: 50px;
  background: #e91e63;
  border-radius: 25px;
  text-align: center;
  line-height: 50px;
  color: #fff;
  font-size: 20px;
  position: absolute;
  left: 43.5%;
  bottom: 13.6%;
  cursor: pointer;
}
.fa {
  position: relative;
  min-width: 1240px;
}
.btnopen1 {
  width: 222px;
  height: 50px;
  background: #e91e63;
  border-radius: 25px;
  text-align: center;
  line-height: 50px;
  color: #fff;
  font-size: 20px;
  margin: 4rem 44.5% 4rem;
  cursor: pointer;
}
</style>