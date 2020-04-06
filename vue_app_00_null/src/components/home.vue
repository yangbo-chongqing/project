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
            <middlepic
              style="width:100%"
              :pig="'http://d.musicapp.migu.cn/ugcdata/playListimg/08b95a51-0581-4375-b092-74e77230d9e6.jpg'"
              :read="'1554.7W'"
              :font="'大牌新歌超强推荐'"
            ></middlepic>
          </div>
        </div>
        <!-- 遍历创建10个有动画效果的小图片 -->
        <div class="rpic">
          <pic
            class="topitem"
            v-for="(item,index) in a"
            :key="index"
            :pig="item.name"
            :read="read[index]"
            :font="font[index]"
          ></pic>
        </div>
      </div>
    </div>
    <div class="top2">
      <div>
        <ul class="newsli">
          <li @click="call1" :class="{fontcolor:this.n==1}">华语</li>
          <li @click="call2" :class="{fontcolor:this.n==2}">欧美</li>
          <li @click="call3" :class="{fontcolor:this.n==3}">日韩</li>
        </ul>
      </div>
      <div class="center2">
        <!-- 左侧组合图片加透明效果 -->
        <div class="newbigp">
          <img
            src="http://cdnmusic.migu.cn/picture/2020/0328/0935/ASd2b771a886940401aadd2095cbf78a00.jpg"
            alt
          />
          <img
            src="http://cdnmusic.migu.cn/picture/2020/0327/2335/ASb01be8bab152847678252e1b1f01fe6e.jpg"
            alt
          />
          <img
            src="http://cdnmusic.migu.cn/picture/2020/0327/1135/AS58b256fb43f60a0b63ec3bfda2815d06.jpg"
            alt
          />
          <img
            src="http://cdnmusic.migu.cn/picture/2020/0327/1156/AS2fa39b78d0f721f74be24945968a9b20.jpg"
            alt
          />
          <img
            src="http://cdnmusic.migu.cn/picture/2020/0326/2335/AS5dc2fa0f03fc612d8aa944c754be0fff.jpg"
            alt
          />
          <img
            src="http://cdnmusic.migu.cn/picture/2020/0319/1635/ASf9e48903c3e6cf6b1faa5fb8df78602f.jpg"
            alt
          />
          <div class="tou">
            <p>新&nbsp;歌&nbsp;推&nbsp;荐</p>
            <p class="tuoyuan">全部播放</p>
          </div>
        </div>
        <div class="song">
          <div v-if="n==3">
            <smallpic
              style="width:50%"
              v-for="(item,index) in pig2"
              :key="index"
              :pig="item"
              :smallread="'素晴らしき嘘(电视剧《不知道就好的事》主题曲)'"
              :smalltime="'03:25'"
              :smallsinger="'宇多田ヒカル / 椎名林檎'"
            ></smallpic>
          </div>
          <div v-if="n==2">
            <smallpic
              style="width:50%"
              v-for="(item,index) in pig3"
              :key="index"
              :pig="item"
              :smallread="'Last Time I Say Sorry How To Be Lonely(Clean)'"
              :smalltime="'03:13'"
              :smallsinger="'Lauren Jauregui /Tainy'"
            ></smallpic>
          </div>
          <div v-if="n==1">
            <smallpic
              style="width:50%"
              v-for="(item,index) in pig4"
              :key="index"
              :pig="item"
              :smallread="'没那么难(电视剧《全世界最好的你》片尾曲)'"
              :smalltime="'04:51'"
              :smallsinger="'摩登兄弟刘宇宁'"
            ></smallpic>
          </div>
        </div>
      </div>
    </div>
    <div class="top22">
      <div class="top2t">
        <h2>新碟上架</h2>
        <a href class="top2tf">更多&gt;</a>
      </div>
      <div class="lastblock">
        <bigpic
          style="margin-left:10px"
          v-for="(item,index) of pig5"
          :key="index"
          :pig="item"
          :read="'154.7W'"
          :font="'大牌新歌超强推荐'"
        ></bigpic>
      </div>
    </div>
    <div>
      <bottom></bottom>
    </div>
  </div>
</template>
<script>
import tit from "./exam/tit.vue";
import lunbo from "./exam/lunbo.vue";
import pic from "./exam/pic.vue";
import bottom from "./exam/bottom";
import middlepic from "./exam/middlepic";
import smallpic from "./exam/smallpic";
import bigpic from "./exam/bigpic";
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
      pig2: [
        "http://cdnmusic.migu.cn/picture/2020/0115/0856/AS95a5058dcbc68cc333a23bc71accca94.jpg",
        "http://cdnmusic.migu.cn/picture/2020/0115/0856/AS95a5058dcbc68cc333a23bc71accca94.jpg",
        "http://cdnmusic.migu.cn/picture/2020/0114/1449/AS0dc098c1e2baa732436f0cae8b69efd9.jpg",
        "http://cdnmusic.migu.cn/picture/2019/1122/1714/ASb2facf82646a4022a3d88dd1a817a90f.jpg",
        "http://cdnmusic.migu.cn/picture/2019/1114/0007/ASa398bdd402804980a100afdaffeb31b6.jpg",
        "http://cdnmusic.migu.cn/picture/2020/0114/2242/AS284139d4221e685eee10eb614b06cd75.jpg",
        "http://cdnmusic.migu.cn/picture/2019/1120/0842/AS13c35805cdd64fc594daf9be7b90acb4.jpg",
        "http://cdnmusic.migu.cn/picture/2019/1031/0448/AS4ea31939bb554246a38848f2ff084a48.jpg"
      ],
      pig3: [
        "http://cdnmusic.migu.cn/picture/2020/0326/2342/AS7a5c2b524d66fa9197da87fe881bb63e.jpg",
        "http://cdnmusic.migu.cn/picture/2020/0326/2342/ASb66efcef91cc2e7af9e38bf810a0f852.jpg",
        "http://cdnmusic.migu.cn/picture/2020/0320/1114/AS6c73863971b14447d3f066bc8890c449.jpg",
        "http://cdnmusic.migu.cn/picture/2020/0317/0049/AS48aac90d151bc2b7b699ca0875fd8b08.jpg",
        "http://cdnmusic.migu.cn/picture/2020/0326/2342/ASe104fef3bae8e023027278c5aa968445.jpg",
        "http://cdnmusic.migu.cn/picture/2020/0326/1156/ASfd5b4841555ade630f7bba4209232a17.jpg",
        "http://cdnmusic.migu.cn/picture/2020/0319/2335/ASd434f482a460342295f2cfb33f540f65.jpg",
        "http://cdnmusic.migu.cn/picture/2020/0315/2228/ASc3155f98b5589fdb306ede9189005640.jpg"
      ],
      pig4: [
        "http://cdnmusic.migu.cn/picture/2020/0328/0935/ASd2b771a886940401aadd2095cbf78a00.jpg",
        "http://cdnmusic.migu.cn/picture/2020/0319/1635/ASf9e48903c3e6cf6b1faa5fb8df78602f.jpg",
        "http://d.musicapp.migu.cn/ugcdata/playListimg/dae6b45e-2897-4206-829f-82d629905937.jpg",
        "http://d.musicapp.migu.cn/ugcdata/playListimg/5b7378e6-61fc-4393-92e6-0e712112eb6b.jpg",
        "http://d.musicapp.migu.cn/ugcdata/playListimg/ea108456-943b-4960-bb9c-4e31e09fc2d3.jpg",
        "http://d.musicapp.migu.cn/ugcdata/playListimg/4134e3aa-b31c-49b6-8ee3-f8c613b1ff67.jpg",
        "http://d.musicapp.migu.cn/ugcdata/playListimg/7c5113ba-f115-4ab4-aadc-f29363492f13.jpg",
        "http://d.musicapp.migu.cn/ugcdata/playListimg/9e254b35-18fe-470e-b3b7-0985536d96ee.jpg"
      ],
      pig5: [
        "http://cdnmusic.migu.cn/picture/2020/0327/2156/AS211c954ab48fa7e04d971d70d2bd72d6.jpg",
        "http://cdnmusic.migu.cn/picture/2020/0327/2049/ASfd006591460c3dc03aaec8a08ad05dc4.jpg",
        "http://cdnmusic.migu.cn/picture/2020/0328/2149/AS8a2217955978d2b7077751f2498bd70c.jpg",
        "http://cdnmusic.migu.cn/picture/2020/0330/0900/AS6c777b9094c6f892778115e499c37f77.jpg",
        "http://cdnmusic.migu.cn/picture/2020/0326/1428/AS021c3e5a34845b981196f8b4a406e06a.jpg",
        "http://cdnmusic.migu.cn/picture/2020/0330/1514/AS3511020d68816c927d530f446590bf69.jpg",
        "http://cdnmusic.migu.cn/picture/2020/0327/1335/AS56cdf2f661901eecf2dae456f723a770.jpg",
        "http://cdnmusic.migu.cn/picture/2020/0326/1556/AS59c9dd8cc4afb59b18003a116f863fad.jpg",
        "http://cdnmusic.migu.cn/picture/2020/0320/1921/AM00f11fb553caab8d8d0420180f6a3108.jpg",
        "http://cdnmusic.migu.cn/picture/2020/0324/1635/AS5752fbf1869e6075892c4d1dbb782a59.jpg",
        "http://cdnmusic.migu.cn/picture/2020/0320/1921/AMc0f5970332ee1c25a3eda2348c4d45f2.jpg",
        "http://cdnmusic.migu.cn/picture/2020/0320/1921/AM12db4988293672febd045f1d2ab030d2.jpg"
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
      ],
      val: 1,
      n: 1,
      a: ""
    };
  },
  components: {
    tit,
    lunbo,
    pic,
    bottom,
    middlepic,
    smallpic,
    bigpic
  },
  methods: {
    call1() {
      this.n = 1;
    },
    call2() {
      this.n = 2;
    },
    call3() {
      this.n = 3;
    },
    go() {
      var url = "user";
      this.axios.get(url).then(res => {
        this.a = res.data;
      });
    }
  },
  mounted() {
    this.go();
  }
};
</script>
<style  scoped>
.top2 {
  /* 歌单推荐最外层div */
  margin: 3% 8%;
  min-width: 1200px;
}
.top22 {
  /* 歌单推荐最外层div */
  margin: 3% 8%;
  max-width: 1800px;
  min-width: 1200px;
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
  margin-right: 0.5rem;
  margin-top: 1rem;
}
.newsli li {
  /*第三部分国家选项*/
  list-style: none;
  display: inline-block;
  margin-right: 26px;
  cursor: pointer;
}
.newsli {
  margin-left: 360px;
}
.newsli li:hover {
  color: #e91e63;
}
.newbigp {
  /*第三部分 左侧组合图形*/
  width: 335px;
  font-size: 0;
  position: relative;
}
.newbigp > img {
  width: 50%;
}
.tou {
  /*第三部分左侧透明覆盖部分*/
  width: 100%;
  height: 414px;
  background: rgba(0, 0, 0, 0.6);
  position: absolute;
  top: 0;
  font-size: 24px;
  color: aliceblue;
  outline: #ee7ae9 solid;
  outline-width: 5px;
  z-index: 1;
}
.tou p {
  margin-top: 2rem;
  margin-left: 2rem;
}
.tuoyuan {
  /*第三部分左侧  右下角全部播放按钮*/
  position: absolute;
  right: 2rem;
  bottom: 1rem;
  color: #fff;
  padding: 0.5rem 1rem;
  font-size: 16px;
  border: 1px solid #fff;
  border-radius: 20px;
  cursor: pointer;
}
.center2 {
  position: relative;
  display: flex;
}
.song {
  /*第三部分右侧小图片*/
  background: #f2f2f2;
  width: 100%;
}
.fontcolor {
  color: #e91e63;
}
.lastblock {
  /*最后一块新碟上架*/
  display: flex;
  margin-top: 2rem;
  flex-flow: row wrap;
  justify-content: space-between;
}
.lastblock::after {
  content: "";
  width: 220px;
}
</style>