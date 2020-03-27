<template>
  <div class="all">
    <tit></tit>
    <div class="center">
      <div style="margin-bottom:1rem">
        <!-- 遍历创建属地 -->
        <span
          @click="act1(index)"
          v-for="(item,index) in guojia"
          :key="index"
          :class="{wfont:n!==index,rfont:n==index}"
        >{{item}}</span>
      </div>
      <!-- 遍历创建性别 -->
      <div style="margin-bottom:1rem">
        <span
          @click="act2(index)"
          v-for="(item,index) in zuz"
          :key="index"
          :class="{wfont:i!==index,rfont:i==index}"
        >{{item}}</span>
      </div>
      <div>
        <!-- 遍历创建点击A-z并添加点击效果 -->
        <span
          @click="act(index)"
          v-for="(item,index) in zmu"
          :key="index"
          :class="{wfont:m!==index,rfont:m==index}"
        >{{item}}</span>
      </div>
    </div>
    <div>
      <div class="bottom1">
        <!-- 遍历创建头像 -->
        <a href class="tou" v-for="(item,index) in names" :key="index">
          <div>
            <img class="pic" :src="img[index]" alt />
            <p>{{item}}</p>
          </div>
        </a>
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
import bottom from "./exam/bottom.vue";
export default {
  components: {
    tit,
    bottom
  },
  data() {
    return {
      active: false,
      i: 0,
      n: 0,
      m: 0,
      zmu: [
        "A",
        "B",
        "C",
        "D",
        "E",
        "F",
        "G",
        "H",
        "I",
        "J",
        "K",
        "L",
        "M",
        "N",
        "O",
        "P",
        "Q",
        "R",
        "S",
        "T",
        "U",
        "V",
        "W",
        "X",
        "Y",
        "Z"
      ],
      guojia: ["华语", "欧美", "日韩"],
      zuz: ["男", "女", "组合"],
      names: [
        "周杰伦",
        "林俊杰",
        "陈奕迅",
        "李荣浩",
        "毛不易",
        "薛之谦",
        "张杰",
        "林宥嘉",
        "许嵩",
        "华晨宇",
        "蔡徐坤",
        "易烊千玺",
        "胡夏",
        "李剑青",
        "吴亦凡",
        "吴奇",
        "单南杰",
        "王嘉尔",
        "陈立农",
        "萧敬腾"
      ],
      img: [
        "http://cdnmusic.migu.cn/tycms_picture/20/01/13/200113091431588_none_3606.jpg",
        "http://cdnmusic.migu.cn/tycms_picture/20/01/07/20010715153048_none_8344.jpg",
        "http://cdnmusic.migu.cn/tycms_picture/20/01/07/200107212927191_none_9496.jpg",
        "http://cdnmusic.migu.cn/tycms_picture/20/01/10/200110134546801_none_6813.jpg",
        "http://cdnmusic.migu.cn/tycms_picture/20/01/07/200107175835110_none_5687.jpg",
        "http://cdnmusic.migu.cn/tycms_picture/19/11/321/191117005937115_none_2015.jpg",
        "http://cdnmusic.migu.cn/tycms_picture/20/01/07/20010716370317_none_8138.jpg",
        "http://cdnmusic.migu.cn/tycms_picture/20/01/10/20011013454609_none_8465.jpg",
        "http://cdnmusic.migu.cn/tycms_picture/20/01/07/200107151554370_none_897.jpg",
        "http://cdnmusic.migu.cn/tycms_picture/20/01/07/200107151539800_none_4500.jpg",
        "http://cdnmusic.migu.cn/tycms_picture/20/02/32/200201163605846_none_9826.jpg",
        "http://cdnmusic.migu.cn/tycms_picture/20/01/22/200122102928540_none_6999.jpg",
        "http://cdnmusic.migu.cn/tycms_picture/19/11/322/191118090559531_none_5208.jpg",
        "http://cdnmusic.migu.cn/tycms_picture/20/02/50/200219104048556_none_5097.jpg",
        "http://cdnmusic.migu.cn/tycms_picture/20/01/07/200107151526899_none_1573.jpg",
        "http://cdnmusic.migu.cn/tycms_picture/20/03/79/20031912140618_200x200_8309.png",
        "http://cdnmusic.migu.cn/tycms_picture/20/03/79/200319121431249_200x200_5088.png",
        "http://cdnmusic.migu.cn/tycms_picture/20/01/13/200113091425764_none_953.jpg",
        "http://cdnmusic.migu.cn/tycms_picture/20/01/10/20011018584974_none_4415.jpg",
        " http://cdnmusic.migu.cn/tycms_picture/20/01/07/200107111132202_none_6246.jpg"
      ]
    };
  },
  methods: {
    act(index) {
      this.m = index; //点击改变参数为自身序号,让样式判断执行
    },
    act1(index) {
      this.n = index;
    },
    act2(index) {
      this.i = index;
    }
  }
};
</script>
<style scoped>
.center {
  margin: 2rem 12rem;
}
.wfont {
  font-size: 14px; /*按钮字体在未选中状态下的样式*/
  border-radius: 26px;
  padding: 0.3em 0.8em;
  height: 26px;
  line-height: 26px;
  color: #000;
  cursor: pointer;
  margin-left: 5px;
}
.rfont {
  /*按钮字体在选中状态下的字体*/
  font-size: 14px;
  border-radius: 26px;
  padding: 0.3em 0.8em;
  height: 26px;
  line-height: 26px;
  background: #e91e63;
  color: #fff;
  cursor: pointer;
  margin-left: 5px;
}
.tou {
  /*头像内部文字及图片样式*/
  width: 200px;
  height: 200px;
  background: #f8f8f8;
  text-align: center;
  justify-content: center;
  margin: 0 0 1rem 2rem;
  color: #333;
}
.pic {
  /*头像图片样式*/
  border-radius: 110px;
  width: 70%;
  margin-top: 1rem;
}
.bottom1 {
  /*头像外层div样式*/
  display: flex;
  margin: 2rem 12rem;
  flex-wrap: wrap;
  margin-bottom: 1rem;
}
.tou:hover {
  color: #e91e63;
  background: #eeeeee;
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
.all {
  min-width: 1024px;
}
</style>