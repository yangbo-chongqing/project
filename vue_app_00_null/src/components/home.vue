<template>
  <div>
    <tit></tit>
    <lunbo></lunbo>
    <pic
      v-for="(item,index) in pig"
      :key="index"
      :pig="item"
      :read="read[index]"
      :font="font[index]"
    ></pic>
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
        "http://d.musicapp.migu.cn/ugcdata/playListimg/9e254b35-18fe-470e-b3b7-0985536d96ee.jpg"
      ],
      read: ["173W", "121W"],
      font: ["享受阳光，追随阳光", "工作必备：轻快华语"]
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