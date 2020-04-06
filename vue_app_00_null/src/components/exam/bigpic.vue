<template>
  <div class="fpic">
    <a href>
      <div class="imgp" @mousemove="play" @mouseout="unplay">
        <img class="firstimg" style="border-radius:4%" v-bind:src="pig" alt />
        <p>
          <img src="../../img/erji.png" alt />
          {{read}}
        </p>
        <img
          :class="{lastimg:true,play:live}"
          src="//cdnmusic.migu.cn/v3/static/img/common/default/btn-play.png"
          alt
        />
        <span class="font">{{font}}</span>
      </div>
    </a>
  </div>
</template>
<script>
export default {
  props: ["pig", "read", "font", "key"], //父传子的参数
  data() {
    return {
      live: true
    };
  },
  methods: {
    play() {
      this.live = false;
    },
    unplay() {
      this.live = true;
    }
  }
};
</script>
<style  scoped>
.fpic {
  overflow: hidden;
  width: 220px; /* 图片放大时不会影响其他布局*/
  margin: 0;
  padding: 0;
  background-image: url(//cdnmusic.migu.cn/v3/static/img/index/album-cover.png);
  background-repeat: no-repeat;
  background-size: 200px 180px;
  margin: 0;
  padding: 0;
}
.firstimg {
  width: 100%;
  opacity: 1;
  padding: 0;
  margin: 0;
  transform: scale(1); /*图片变大动画*/
  transition: transform 1s ease 0s;
}
.firstimg:hover {
  transform: scale(1.05);
}
.fpic p img {
  width: 0.7rem;
}
.imgp {
  position: relative;
  width: 180px;
  overflow: hidden;
}
.fpic p {
  /*图片中的文本框及耳机图标*/
  font-size: 12px;
  width: 40%;
  position: absolute;
  top: 0.7rem;
  margin: 0;
  right: 1rem;
  color: rgba(240, 248, 255, 0.87);
  border-radius: 12px;
  background-color: rgba(0, 0, 0, 0.4);
  padding: 0 8px;
  line-height: 24px;
}
.lastimg {
  /*播放图标 */
  position: absolute;
  top: 35%;
  left: 35%;
  width: 30%;
}
.play {
  display: none;
}
.font {
  /*图片下的文字内容*/
  color: #666;
  margin-top: 15px;
  font-size: 14px;
  width: 100%;
  white-space: nowrap;
  overflow: hidden;

  text-overflow: ellipsis;
}
a {
  text-decoration: none;
}
.twopic {
  position: absolute;
  left: 12px;
  height: 88%;
}
</style>