<template>
  <div class="tit">
    <div class>
      <a href>
        <img style="width:100%;" src="//cdnmusic.migu.cn/v3/static/img/common/logo.png" />
      </a>
    </div>
    <div>
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
  display: flex;
  justify-content: space-around;
  width: 100%;
  background: #070707;
  height: 70px;
  align-items: center; /*所有子元素垂直居中*/
}
.btn-seach {
  border-radius: 40px;
  background: #232323;
  height: 2rem;
}
ul > li {
  display: inline-block;
  margin-left: 2rem;
}
ul li img {
  width: 1rem;
}
.simg a {
  font-size: 14px;
  color: #ccc;
}
</style>