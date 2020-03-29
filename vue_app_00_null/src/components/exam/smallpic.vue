<template>
  <div class="fpic" @mousemove="play" @mouseout="unplay">
    <div style="margin-left:20px;padding-top:10px">
      <div style class="imgp">
        <img class="firstimg" v-bind:src="pig" alt />
      </div>
      <div class="fonts">
        <span class="font">{{smallread}}</span>
        <span class="font2">{{smalltime}}</span>
        <span class="font1">{{smallsinger}}</span>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: ["pig", "smallread", "smalltime", "smallsinger"], //父传子的参数
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
  width: 210px; /* 图片放大时不会影响其他布局*/
  display: inline-block;
}
.firstimg {
  width: 100%;
  border-radius: 4%;
  opacity: 1;
  padding: 0;
  margin: 0;
  transform: scale(1); /*图片变大动画*/
  transition: transform 1s ease 0s;
  cursor: pointer;
}
.firstimg:hover {
  opacity: 0.9;
  transform: scale(1.05);
}
.fpic p img {
  width: 0.7rem;
}
.imgp {
  width: 80px;
  float: left;
}

.play {
  display: none;
}
.font {
  /*图片下的文字内容*/
  color: #333;
  font-size: 14px;
  width: 100%;
  justify-content: center;
}
a {
  text-decoration: none;
}
.fonts {
  display: flex;
  flex-direction: column;
  justify-content: center;
  float: left;
  margin-top: 5px;
  margin-left: 10px;
}
.fonts:hover {
  background: rgba(0, 0, 0, 0.05);
}
.font2 {
  margin-left: 150%;
}

.font1:hover {
  color: #e91e63;
  cursor: pointer;
}
.font:hover {
  color: #e91e63;
  cursor: pointer;
}
</style>