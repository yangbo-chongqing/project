<template>
  <div class="tit">
    <div>
      <a href>
        <img style="width:100%;" src="//cdnmusic.migu.cn/v3/static/img/common/logo.png" />
      </a>
    </div>
    <div class="titfont">
      <ul>
        <li>
          <a href>音乐</a>
        </li>
        <li>
          <a href>现场</a>
        </li>
        <li>
          <a href>我的</a>
        </li>
      </ul>
    </div>
    <div class="btn-seach">
      <input type="text" placeholder="搜索歌曲、歌手、MV" />
      <img style="width:20px;" src="../../img/搜索.png" alt />
    </div>
    <div class="simg">
      <ul>
        <li>
          <a href>
            <img src="../../img/皇冠.png" alt />白金会员
          </a>
        </li>
        <li>
          <a href>
            <img src="../../img/客户端.png" alt />客户端
          </a>
        </li>
        <li>
          <a href>
            <img src="../../img/登录.png" alt />登录
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>
<style  scoped>
.tit {
  /*整体父级*/
  display: flex;
  justify-content: space-around;
  width: 100%;
  background: #070707;
  height: 70px;
  align-items: center; /*所有子元素垂直居中*/
}
.btn-seach {
  /*搜索父级*/
  border-radius: 40px; /*搜索栏出现圆弧*/
  background: #232323;
  height: 2rem;
  width: 15%;
  position: relative;
}
.btn-seach input {
  /*搜索下的输入框*/
  background: #232323;
  border: 0;
  align-content: center;
  height: 100%;
  margin-left: 2rem;
  outline: none; /*去掉input的轮廓*/
  font-size: 16px;
  color: rgba(240, 236, 236, 0.9);
}
.btn-seach img {
  /*搜索下的图标*/
  position: absolute; /*搜索图标针对搜索栏的定位*/
  left: 88%;
  top: 15%;
  opacity: 0.4;
  filter: alpha(opacity=40);
}
ul > li {
  display: inline-block;
  margin-left: 2rem;
  line-height: 70px;
}
ul li img {
  width: 1.5rem;
}
.simg a {
  font-size: 14px;
  color: #ccc;
}
.titfont {
  position: relative;
  left: -5rem;
}
.titfont a {
  font-size: 20px;
  color: #dedede;
}
</style>