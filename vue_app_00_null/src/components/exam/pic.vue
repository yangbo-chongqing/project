<template>
  <div class="fpic">
    <a href>
      <div class="imgp" @mousemove="play" @mouseout="unplay">
        <img
          class="firstimg"
          src="http://d.musicapp.migu.cn/ugcdata/playListimg/7c5113ba-f115-4ab4-aadc-f29363492f13.jpg"
          alt
        />
        <p>
          <img src="../../img/耳机.png" alt />
          {{read}}
        </p>
        <img
          id="p3"
          class="lastimg"
          src="//cdnmusic.migu.cn/v3/static/img/common/default/btn-play.png"
          alt
        />
      </div>
    </a>
  </div>
</template>
<script>
export default {
  props: ["pig", "read"],
  methods: {
    play() {
      let p3 = document.getElementById("p3");
      p3.style.display = "block";
    },
    unplay() {
      let p3 = document.getElementById("p3");
      p3.style.display = "none";
    }
  }
};
</script>
<style  scoped>
.fpic {
  overflow: hidden;
  width: 160px;
}
.firstimg {
  width: 100%;
  opacity: 1;
  padding: 0;
  margin: 0;
  transform: scale(1);
  transition: transform 1s ease 0s;
}
.firstimg:hover {
  opacity: 0.9;
  transform: scale(1.05);
}
.fpic p img {
  width: 0.7rem;
}
.imgp {
  position: relative;
  width: 160px;
  overflow: hidden;
}
.fpic p {
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
  position: absolute;
  top: 35%;
  left: 35%;
  width: 30%;
  display: none;
}
</style>