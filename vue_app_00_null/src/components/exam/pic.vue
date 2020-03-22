<template>
  <div>
    <div class="fpic"></div>
    <img
      src="http://d.musicapp.migu.cn/ugcdata/playListimg/7c5113ba-f115-4ab4-aadc-f29363492f13.jpg"
      alt
    />
  </div>
</template>
<style  scoped>
.fpic {
  width: 150px;
  background-image: url(http://d.musicapp.migu.cn/ugcdata/playListimg/7c5113ba-f115-4ab4-aadc-f29363492f13.jpg);
  height: 150px;
  background-size: 100%;
}
.fpic:hover {
  background-size: 120%;
}
img {
  width: 12%;
  opacity: 1;
  padding: 0;
  margin: 0;
  transform: scale(1);
  transition: transform 1s ease 0s;
}
img:hover {
  opacity: 0.9;
  transform: scale(1.05);
}
</style>