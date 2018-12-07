<template>
  <div>
    <!-- 一 -->
    <div  class="download_bgimg1" @load="loading()">
      <div class="pt5 clearfix ma20">
        <!-- 左边盒子 -->
        <div class="tc wow fadeIn clearfix fl mt192 rel" data-wow-duration="6s">
             <img src="/down_img/img1.png" class="img1_abs fl animate-bounce-down1">
             <img src="/down_img/img2.png" class="img2_abs fl animate-bounce-down2">
             <img src="/down_img/logo.png" class="logo_abs animate-bounce-down">
             <img src="/down_img/img3.png" class="img3_abs">
             <img src="/down_img/img4.png" class="img4_abs animate-bounce-down3">
        </div>
        <!-- 右边盒子 -->
        <div class="fr">
          <img src="/down_img/text1.png" alt="文字加载中.." class="mt170 wow fadeInUp" data-wow-duration="0.5s">
          <p class="bgYellow black borR20 tc mar0 rel wow fadeInUp" data-wow-duration="1s" data-wow-delay="1s">
            <img src="/down_img/download.png" class="mid"> <a href="javascript:" id="a" class="mid">下载星移盒子APP</a>
            <img src="/down_img/app.png" class="app_abs">
          </p>
        </div>
      </div>
    </div>
    <!-- 二 -->
    <div class="download_bgimg2">
        <div class="clearfix container">
          <div class="fl wow fadeInLeft mt156" data-wow-duration="0.5s" data-wow-delay="0.5s">
            <p><img src="/down_img/text2.png" alt="文字加载中.."></p>
            <p class="grey mt45 font24">带你发现更大的游戏世界</p>
          </div>
          <img src="/down_img/img8.png" alt="文字加载中.." class="fr wow fadeInRight" data-wow-duration="2s" data-wow-delay="0.5s">
        </div>
    </div>
    <!-- 三 -->
    <div class="bgBlack tc">
      <div class="container pd175">
        <p><img src="/down_img/text3.png" alt="文字加载中.." class="mb125 wow fadeIn"></p>
        <ul class="clearfix">
          <li class="wow fadeInUp" data-wow-delay="0.6s">
            <p><a href="javascript:"><img src="/down_img/strategy.png" alt="图片加载中.."></a></p>
            <p><a href="javascript:">游戏攻略</a></p>
          </li>
          <li class="wow fadeInUp" data-wow-delay="0.8s">
            <p><a href="javascript:"><img src="/down_img/interflow.png" alt="图片加载中.."></a></p>
            <p><a href="javascript:">游戏社交</a></p>
          </li>
          <li class="wow fadeInUp" data-wow-delay="1s">
            <p><a href="javascript:"><img src="/down_img/consult.png" alt="图片加载中.."></a></p>
            <p><a href="javascript:">游戏咨询</a></p>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DownloadCenter',
  head:{
      title:'下载中心',
      link: [
        { rel: 'shortcut icon', type: 'image/x-icon', href: 'logo.ico' }
      ]
  },
  mounted(){
    this.$wowinit();
  },
  data () {
    return {
      
    }
  }
}
</script>
<style scoped lang="styl">

@css{
  .ma20{
    margin: 0 20%;
  }
  .logo_abs{
    position: absolute;
    left: 210px;
    top: -80px;
    z-index: 10;
  }
  .img1_abs{
    position: absolute;
    left: -185px;
    bottom: -300px;
  }
  .img2_abs{
    position: absolute;
    left: -157px;
    bottom: -192px;
    z-index: 13;
  }
  .img3_abs{
    position: absolute;
    left: 40px;
    z-index: 3;
  }
  .img4_abs{
    position: absolute;
    right: -635px;
    bottom: -385px;
    z-index: 13;
  }
  .mt192{
    margin-top: 235px;
  }
  .app_abs{
    position: absolute;
    left: 80px;
    top: 75px;
    display: none;
  }
  .borR20:hover .app_abs{
    display: block;
  }
  .mr205{
    margin-right: 205px;
  }
  .download_bgimg1{
    width: 100%;
    height: 875px;
    background: url(/down_img/banner.png) no-repeat;
    background-size: 100% 877px;
  }
  .download_bgimg2{
    width: 100%;
    height: 875px;
    padding: 115px 0;
    background: url(/down_img/download_bgimg2.png);
    background-size: 100% 877px;
  }
  .borR20{
    border-radius:35px;
    width: 317px;
    line-height: 70px;
  }
  body .mar0{
    margin: 0;
  }
  .mt90{
    margin: 110px 0 0 186px;
  }
  .mt170{
    margin: 190px 0 92px 0;
  }
  /*上下移动动画*/
  @-webkit-keyframes bounce-down {
      25% {
          -webkit-transform: translateY(-4px);
      }
      /*50%, 100% {
          -webkit-transform: translateY(0);
      }*/
      75% {
          -webkit-transform: translateY(4px);
      }
  }
  @keyframes bounce-down {
      25% {
          transform: translateY(-4px);
      }
      75% {
          transform: translateY(4px);
      }
  }
  .animate-bounce-down{
      -webkit-animation: bounce-down 2.2s linear infinite;
      animation: bounce-down 2.2s linear infinite;
  }
  .animate-bounce-down1{
      -webkit-animation: bounce-down 2.8s linear infinite;
      animation: bounce-down 2.8s linear infinite;
  }
  .animate-bounce-down2{
      -webkit-animation: bounce-down 2.6s linear infinite;
      animation: bounce-down 2.6s linear infinite;
  }
  .animate-bounce-down3{
      -webkit-animation: bounce-down 2.8s linear infinite;
      animation: bounce-down 2.8s linear infinite;
  }
  @-webkit-keyframes bounce-up {
      25% {
          -webkit-transform: translateY(10px);
      }
      50%, 100% {
          -webkit-transform: translateY(0);
      }
      75% {
          -webkit-transform: translateY(-10px);
      }
  }
  @keyframes bounce-up {
      25% {
          transform: translateY(10px);
      }
      50%, 100% {
          transform: translateY(0);
      }
      75% {
          transform: translateY(-10px);
      }
  }
  .animate-bounce-up{
      -webkit-animation: bounce-up 1.8s linear infinite;
      animation: bounce-up 1.8s linear infinite;
  }
  .rel{
    position: relative;
  }
  li a{
    color: #fff;
    font-size: 24px;
  }
  li{
    float: left;
    margin-top: 115px;
  }
  li:nth-child(2){
    margin: 124px 230px 0 230px;
  }
  .bgYellow{
    background-color: #FDD300
  }
  .mt45{
    margin-top: 45px;
  }
  #a{
    color: black;
    font-size:20px;
  }
  .font24 a{
    color: #999
  }
  .pd175{
    padding: 155px 0;
  }
  .mt160{
    margin: 252px 0 189px 0;
  }
  .mt156{
    margin-top: 156px;
  }
}
</style>
