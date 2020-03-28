<template>
  <div>
    <!-- 引入头部分 -->
    <tit></tit>
    <!-- 引入轮播图 -->
    <lunbo></lunbo>
    <!-- 歌单推荐部分 -->
    <div class="top2">
      <!-- 歌单推荐文字 -->
      <div class="top2t">
        <h2>歌单推荐</h2>
        <a href class="top2tf">更多&gt;</a>
      </div>
      <!-- 左侧大图 -->
      <div class="topce">
        <div>
          <img src="http://cdnmusic.migu.cn/v3/static/img/index/just_listen.png" alt />
          <div style="width:100%">
            <pic
              style="width:100%"
              :pig="'http://d.musicapp.migu.cn/ugcdata/playListimg/08b95a51-0581-4375-b092-74e77230d9e6.jpg'"
              :read="'154W'"
              :font="'大牌新歌超强推荐'"
            ></pic>
          </div>
        </div>
        <div class="rpic">
          <pic
            class="topitem"
            v-for="(item,index) in pig"
            :key="index"
            :pig="item"
            :read="read[index]"
            :font="font[index]"
          ></pic>
        </div>
      </div>
    </div>
    <bottom></bottom>
  </div>
</template>
<script>
import tit from "./exam/tit.vue";
import lunbo from "./exam/lunbo.vue";
import pic from "./exam/pic.vue";
import bottom from "./exam/bottom";
export default {
  data() {
    return {
      pig: [
        "http://d.musicapp.migu.cn/ugcdata/playListimg/7c5113ba-f115-4ab4-aadc-f29363492f13.jpg",
        "http://d.musicapp.migu.cn/ugcdata/playListimg/9e254b35-18fe-470e-b3b7-0985536d96ee.jpg",
        "http://d.musicapp.migu.cn/ugcdata/playListimg/9e254b35-18fe-470e-b3b7-0985536d96ee.jpg",
        "http://d.musicapp.migu.cn/ugcdata/playListimg/7e60bbac-8304-453c-a7b6-fdcc39d591ed.jpg",
        "http://d.musicapp.migu.cn/ugcdata/playListimg/e1efaa62-14ab-40b5-bc84-5fcbc651aaed.jpg",
        "http://d.musicapp.migu.cn/ugcdata/playListimg/186ae92f-50f3-4c2d-af16-a93d9344ccee.jpg",
        "http://d.musicapp.migu.cn/ugcdata/playListimg/dae6b45e-2897-4206-829f-82d629905937.jpg",
        "http://d.musicapp.migu.cn/ugcdata/playListimg/5b7378e6-61fc-4393-92e6-0e712112eb6b.jpg",
        "http://d.musicapp.migu.cn/ugcdata/playListimg/ea108456-943b-4960-bb9c-4e31e09fc2d3.jpg",
        "http://d.musicapp.migu.cn/ugcdata/playListimg/4134e3aa-b31c-49b6-8ee3-f8c613b1ff67.jpg"
      ],
      read: [
        "173W",
        "121W",
        "757W",
        "889W",
        "424W",
        "141W",
        "114W",
        "135W",
        "147W",
        "161W",
        "223W"
      ],
      font: [
        "享受阳光，追随阳光",
        "工作必备：轻快华语",
        "民谣情歌|探寻此中人",
        "怀旧经典，不变的情",
        "不一样的音乐",
        "漫步在此间中",
        "独角戏,心事洒落长夜",
        "风轻歌暖,美好环环相扣",
        "沿着心中的路，缓缓前行",
        "不再无聊，开车必备"
      ]
    };
  },
  components: {
    tit,
    lunbo,
    pic,
    bottom
  }
};
</script>
<style  scoped>
.top2 {
  /* 歌单推荐最外层div */
  margin: 3% 5%;
}
.top2t {
  /* 歌曲推荐 及返回 部分样式 */
  display: flex;
  justify-content: space-between;
  color: #333;
  font-size: 16px;
}
.top2tf {
  font-size: 14px;
  color: #999;
}
.topce {
  display: flex;
}
.rpic {
  display: flex;
  margin-left: 2rem;
  justify-content: space-between;
  flex-flow: row wrap; /*当行溢出时 换行*/
}
.topitem {
  margin-right: 2rem;
  margin-top: 1rem;
}
</style>