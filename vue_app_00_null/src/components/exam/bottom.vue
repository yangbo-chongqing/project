<template>
  <div class="bottom">
    <div class="top">
      <div>
        <div style="border:1 solid red">
          <p class="pfont">咪咕音乐家族</p>
          <ul class="ulst">
            <li>
              <a href>IVR</a>
            </li>
            <li>
              <a href>企业彩铃</a>
            </li>
            <li>
              <a href>个性彩铃</a>
            </li>
          </ul>
        </div>
        <div style="border:1 solid red">
          <p class="pfont">联系我们</p>
          <ul class="ulst">
            <li>
              <a href>业务合作</a>
            </li>
            <li>
              <a href>开放平台</a>
            </li>
            <li>
              <a href>常见问题</a>
            </li>
            <li>
              <a href>咪咕音乐人合作</a>
            </li>
          </ul>
        </div>
      </div>
      <div>
        <div>
          <p class="pfont">关注我们</p>
        </div>
        <div>
          <a href>
            <img class="pic" src="../../img/微信.png" alt />
          </a>
          <a href>
            <img class="pic" src="../../img/微博.png" alt />
          </a>
        </div>
      </div>
      <div>
        <p class="pfont">咪咕客户端</p>
        <ul class="liimg">
          <li>
            <img width="110px" src="//cdnmusic.migu.cn/v3/static/img/download/pc/ecode.png" alt />
            <p class="lip">咪咕音乐</p>
          </li>
          <li>
            <img
              width="110px%"
              src="//cdnmusic.migu.cn/v3/static/img/common/footer/miguvideo_ewm.jpg"
              alt
            />
            <p class="lip">咪咕视频</p>
          </li>
        </ul>
      </div>
    </div>
    <div class="bottomb">
      <div class="blfont">
        <ul class="ulst">
          <li>
            <a href>咪咕文化</a>|
          </li>
          <li>
            <a href>咪咕音乐简介</a>|
          </li>
          <li>
            <a href>版权声明</a>|
          </li>
          <li>
            <a href>新闻动态</a>|
          </li>
          <li>
            <a href>友情链接</a>|
          </li>
          <li>
            <a href>网站地图</a>|
          </li>
          <li>
            <a href>服务协议</a>|
          </li>
          <li>
            <a href>隐私权政策</a>|
          </li>
        </ul>
      </div>
      <div>
        <ul class="ulst blfont">
          <li>蜀ICP备15012512号-1</li>
          <li>川网文[2012]0762-026</li>
          <li>网络视听许可证0112648号</li>
          <li>增值业务许可证A2.B1.B2-20100001</li>
        </ul>
      </div>
      <div class="blfont">Copyright © 2005 - 2020 咪咕音乐有限公司</div>
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style  scoped>
.bottom {
  /*整体外部div*/
  width: 100%;
}
.top {
  /*上边一个外层div*/
  display: flex;
  justify-content: space-around;
  background: #1a1a1a;
}
.ulst li {
  /*消除li 的点 并 横向展开*/
  list-style: none;
  display: inline;
  white-space: nowrap;
  margin-right: 2rem;
}
.ulst li a,
.lip {
  color: #fff;
  font-size: 12px;
}
.lip {
  text-align: center;
}
.pfont {
  /*每段div 顶部字体*/
  color: #898989;
  font-size: 12px;
  margin-top: 36px;
  margin-bottom: 35px;
}
.pic {
  width: 40px;
  margin-right: 22px;
}
.liimg li {
  list-style: none;
  margin-right: 2rem;
  float: left;
}
.blfont,
.blfont > ul > li > a {
  color: #898989;
  font-size: 12px;
}
.bottomb {
  background: #161616;
  padding-top: 2rem;
  text-align: center;
}
</style>