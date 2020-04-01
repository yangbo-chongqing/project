<template>
  <div>
    <tit></tit>
    <div class="titstyle">
      <div class="tit2">
        <div>
          <ul class="ulstyle1">
            <li class="firstfont">热门歌单</li>
            <li class="muchfont" @click="do1">小清新</li>
            <li class="muchfont" @click="do2">电视剧</li>
            <li class="muchfont" @click="do1">民谣</li>
            <li class="muchfont" @click="do2">旅行</li>
            <li class="muchfont" @click="do1">思念</li>
          </ul>
        </div>
        <div style="display:flex">
          <div class="juli">
            <div class="firstfont">主题</div>
            <div>
              <ul class="ulstyle">
                <li @click="do2">经典红歌</li>
                <li @click="do1">红歌</li>
                <li @click="do2">中国风</li>
                <li @click="do1">爱情</li>
                <li @click="do2">儿童歌曲</li>
                <li @click="do1">KTV</li>
                <li @click="do2">小清新</li>
                <li @click="do1">游戏</li>
                <li @click="do2">动漫</li>
              </ul>
            </div>
          </div>
          <div class="juli">
            <div class="firstfont">语种</div>
            <ul class="ulstyle">
              <li @click="do1">韩语</li>
              <li @click="do2">国语</li>
              <li @click="do1">粤语</li>
              <li @click="do2">英语</li>
              <li @click="do1">日语</li>
              <li @click="do2">葡语</li>
              <li @click="do1">意语</li>
              <li @click="do2">小语种</li>
            </ul>
          </div>
          <div class="juli">
            <div class="firstfont">场景</div>
            <ul class="ulstyle">
              <li @click="do1">旅行</li>
              <li @click="do2">驾车</li>
              <li @click="do1">夜店</li>
              <li @click="do2">睡前</li>
              <li @click="do1">安眠</li>
              <li @click="do2">清晨</li>
              <li @click="do1">夜晚</li>
              <li @click="do2">散步</li>
              <li @click="do1">派对</li>
            </ul>
          </div>
          <div class="juli">
            <div class="firstfont">心情</div>
            <ul class="ulstyle">
              <li @click="do1">欢快</li>
              <li @click="do2">怀旧</li>
              <li @click="do1">寂寞</li>
              <li @click="do2">励志</li>
              <li @click="do1">思念</li>
              <li @click="do2">伤感</li>
              <li @click="do1">期待</li>
              <li @click="do2">幸福</li>
            </ul>
          </div>
          <div class="juli">
            <div class="firstfont">流派</div>
            <ul class="ulstyle">
              <li @click="do1">流行</li>
              <li @click="do2">摇滚</li>
              <li @click="do1">爵士</li>
              <li @click="do2">电子</li>
              <li @click="do1">乡村</li>
              <li @click="do2">古典</li>
              <li @click="do1">民谣</li>
              <li @click="do2">纯音乐</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <div class="centerall">
      <div class="center2top">
        <div>
          <h3 class="bigfont">全部歌单</h3>
        </div>
        <div class="btn">
          <RadioGroup type="button" v-model="aa" size="small">
            <Radio label="推荐" on-change="do1"></Radio>
            <Radio label="最热" on-change="do2"></Radio>
          </RadioGroup>
        </div>
      </div>
      <div class="bottomall" v-if="this.aa=='推荐'">
        <midpic
          style="margin:0"
          v-for="(item,index) of pig5"
          :key="index"
          :pig="item"
          :read="'154.7W'"
          :font="'大牌新歌超强推荐'"
        ></midpic>
      </div>
      <div class="bottomall" v-if="this.aa=='最热'">
        <midpic
          style="margin:0"
          v-for="(item,index) of pig6"
          :key="index"
          :pig="item"
          :read="'154.7W'"
          :font="'大牌新歌超强推荐'"
        ></midpic>
      </div>
    </div>
    <div class="last">
      <span class="lastfont">&lt;</span>
      <span class="yuan">1</span>
      <span class="lastfont">&gt;</span>
    </div>
    <bottom></bottom>
  </div>
</template>
<script>
import tit from "./exam/tit.vue";
import midpic from "./exam/midpic";
import bottom from "./exam/bottom";
export default {
  data() {
    return {
      aa: "推荐",
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
        "http://cdnmusic.migu.cn/picture/2020/0320/1921/AM12db4988293672febd045f1d2ab030d2.jpg",
        "http://cdnmusic.migu.cn/picture/2020/0115/0856/AS95a5058dcbc68cc333a23bc71accca94.jpg",
        "http://cdnmusic.migu.cn/picture/2020/0115/0856/AS95a5058dcbc68cc333a23bc71accca94.jpg",
        "http://cdnmusic.migu.cn/picture/2020/0114/1449/AS0dc098c1e2baa732436f0cae8b69efd9.jpg",
        "http://cdnmusic.migu.cn/picture/2019/1122/1714/ASb2facf82646a4022a3d88dd1a817a90f.jpg",
        "http://cdnmusic.migu.cn/picture/2019/1114/0007/ASa398bdd402804980a100afdaffeb31b6.jpg",
        "http://cdnmusic.migu.cn/picture/2020/0114/2242/AS284139d4221e685eee10eb614b06cd75.jpg",
        "http://cdnmusic.migu.cn/picture/2019/1120/0842/AS13c35805cdd64fc594daf9be7b90acb4.jpg",
        "http://cdnmusic.migu.cn/picture/2019/1031/0448/AS4ea31939bb554246a38848f2ff084a48.jpg"
      ],
      pig6: [
        "http://cdnmusic.migu.cn/picture/2020/0320/1921/AM12db4988293672febd045f1d2ab030d2.jpg",
        "http://cdnmusic.migu.cn/picture/2020/0115/0856/AS95a5058dcbc68cc333a23bc71accca94.jpg",
        "http://cdnmusic.migu.cn/picture/2020/0115/0856/AS95a5058dcbc68cc333a23bc71accca94.jpg",
        "http://cdnmusic.migu.cn/picture/2020/0114/1449/AS0dc098c1e2baa732436f0cae8b69efd9.jpg",
        "http://cdnmusic.migu.cn/picture/2019/1122/1714/ASb2facf82646a4022a3d88dd1a817a90f.jpg",
        "http://cdnmusic.migu.cn/picture/2019/1114/0007/ASa398bdd402804980a100afdaffeb31b6.jpg",
        "http://cdnmusic.migu.cn/picture/2020/0114/2242/AS284139d4221e685eee10eb614b06cd75.jpg",
        "http://cdnmusic.migu.cn/picture/2019/1120/0842/AS13c35805cdd64fc594daf9be7b90acb4.jpg",
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
        "http://cdnmusic.migu.cn/picture/2019/1031/0448/AS4ea31939bb554246a38848f2ff084a48.jpg"
      ]
    };
  },
  components: { tit, midpic, bottom },
  methods: {
    do1() {
      this.aa = "推荐";
    },
    do2() {
      this.aa = "最热";
    }
  }
};
</script>
<style scoped>
.titstyle {
  background: #f2f2f2;
  padding: 2rem 5%; /*顶部div样式*/
  text-align: center;
  min-width: 1180px;
}
.ulstyle1 li {
  list-style: none;
  display: inline-block; /* li 消除热门歌单前边的点  并横向显示*/
  margin-right: 2%;
}
.ulstyle li {
  list-style: none;
  margin-right: 12%;
  float: left; /* li 消除 各选项前边的点  每个左对齐 并保持间距 并横向显示*/
  width: 20%;
  text-align: left;
}

.firstfont {
  color: #999;
  margin-right: 50px;
}
.muchfont {
  color: #333;
  padding: 3px 8px;
}
.tit2 {
  margin: 0 5%;
}
.muchfont:hover {
  color: #e91e63;
  cursor: pointer; /* 增加悬浮效果*/
}
.ulstyle li:hover {
  color: #e91e63;
  cursor: pointer;
}
.juli {
  margin-right: 2%;
  border-right: 1px solid #eaeaea;
}
.center2top {
  display: flex;
  justify-content: space-between;
}
.bigfont {
  font-size: 32px;
  color: #333;
  line-height: 60px;
}
.centerall {
  margin: 1rem 10%;
}
.btn {
  line-height: 60px;
}
.bottomall {
  /*下部多图片 外层*/
  display: flex;
  margin-top: 2rem;
  flex-flow: row wrap;
  justify-content: space-between;
}
.last {
  /*换页*/
  display: flex;
  text-align: center;
  justify-content: center;
  margin-bottom: 1rem;
}
.lastfont {
  margin: 0 8.4px;
  color: #ccc;
  margin-top: 5px;
}
.yuan {
  background: #e91e63;
  color: #fff;
  border-radius: 50%;
  margin: 0 0.6em;
  width: 33px;
  padding-top: 0.3rem;
  height: 33px;
  text-align: center;
  justify-content: center;
  display: inline-block;
}
</style>