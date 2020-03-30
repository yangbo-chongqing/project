<template>
  <div>
    <tit></tit>
    <div class="titstyle">
      <div class="tit2">
        <div>
          <ul class="ulstyle1">
            <li class="firstfont">热门歌单</li>
            <li class="muchfont">小清新</li>
            <li class="muchfont">电视剧</li>
            <li class="muchfont">民谣</li>
            <li class="muchfont">旅行</li>
            <li class="muchfont">思念</li>
          </ul>
        </div>
        <div style="display:flex">
          <div class="juli">
            <div class="firstfont">主题</div>
            <div>
              <ul class="ulstyle">
                <li>经典红歌</li>
                <li>红歌</li>
                <li>中国风</li>
                <li>爱情</li>
                <li>儿童歌曲</li>
                <li>KTV</li>
                <li>小清新</li>
                <li>游戏</li>
                <li>动漫</li>
              </ul>
            </div>
          </div>
          <div class="juli">
            <div class="firstfont">语种</div>
            <ul class="ulstyle">
              <li>韩语</li>
              <li>国语</li>
              <li>粤语</li>
              <li>英语</li>
              <li>日语</li>
              <li>小语种</li>
            </ul>
          </div>
          <div class="juli">
            <div class="firstfont">场景</div>
            <ul class="ulstyle">
              <li>旅行</li>
              <li>驾车</li>
              <li>夜店</li>
              <li>睡前</li>
              <li>安眠</li>
              <li>清晨</li>
              <li>夜晚</li>
              <li>散步</li>
              <li>派对</li>
            </ul>
          </div>
          <div class="juli">
            <div class="firstfont">心情</div>
            <ul class="ulstyle">
              <li>欢快</li>
              <li>怀旧</li>
              <li>寂寞</li>
              <li>励志</li>
              <li>思念</li>
              <li>伤感</li>
              <li>期待</li>
              <li>幸福</li>
            </ul>
          </div>
          <div class="juli">
            <div class="firstfont">流派</div>
            <ul class="ulstyle">
              <li>流行</li>
              <li>摇滚</li>
              <li>爵士</li>
              <li>电子</li>
              <li>乡村</li>
              <li>古典</li>
              <li>民谣</li>
              <li>纯音乐</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import tit from "./exam/tit.vue";
export default {
  components: { tit }
};
</script>
<style scoped>
.titstyle {
  background: #f2f2f2;
  padding: 2rem 5%;
  text-align: center;
  min-width: 1180px;
}
.ulstyle1 li {
  list-style: none;
  display: inline-block;
  margin-right: 2%;
}
.ulstyle li {
  list-style: none;
  margin-right: 12%;
  float: left;
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
  cursor: pointer;
}
.ulstyle li:hover {
  color: #e91e63;
  cursor: pointer;
}
.juli {
  margin-right: 2%;
}
</style>