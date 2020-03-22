<template>
  <swiper :options="swiperOption">
    <swiper-slide v-for="(item,i) of jpg" :key="i">
      <img :src="item" alt class="img" />
    </swiper-slide>

    <div class="swiper-pagination" slot="pagination"></div>
    <div class="swiper-button-prev" slot="button-prev"></div>
    <div class="swiper-button-next" slot="button-next"></div>
  </swiper>
</template>
<script>
export default {
  data() {
    return {
      jpg: [
        "http://cdnmusic.migu.cn/tycms_picture/20/03/80/200320114638346_1400x350_9724.jpg",
        "http://cdnmusic.migu.cn/tycms_picture/20/03/82/20032211244430_1400x350_8915.jpg",
        "http://cdnmusic.migu.cn/tycms_picture/20/03/80/200320205205215_1400x350_6774.jpg",
        "http://cdnmusic.migu.cn/tycms_picture/20/03/79/200319225329853_1400x350_9775.jpg",
        "http://cdnmusic.migu.cn/tycms_picture/20/03/80/200320230249154_1400x350_8337.jpg"
      ],
      swiperOption: {
        pagination: {
          el: ".swiper-pagination",
          clickable: true // 允许点击小圆点跳转
        },
        autoplay: {
          delay: 3000,
          disableOnInteraction: false // 手动切换之后继续自动轮播
        },
        loop: true,
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev"
        }
      }
    };
  }
};
</script>
<style  scoped>
.img {
  width: 100%;
  min-width: 1024px;
}
</style>