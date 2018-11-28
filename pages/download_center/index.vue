<template>
  <div>
    <div  class="download_bgimg1">
      <div class="clearfix pt5 container">
        <div class="tc fl rel wow fadeIn" data-wow-duration="6s">
          <img src="/down_img/box.png" alt="图片加载中.." class="mt160">
          <img src="/down_img/star.png" alt="图片加载中.." class="abs animate-bounce-down">
        </div>
        <div class="tl white fr mr205 div1" @load="loading()">
          <p class="mb116 wow fadeInUp" data-wow-duration="0.5s">
            <img src="/down_img/text1.png" alt="文字加载中.." class="w50">
          </p>
          <p class="bgYellow black borR20 tc mar0 rel wow fadeInUp" data-wow-duration="1s" data-wow-delay="1s">
            <img src="/down_img/download.png" class="mid"> <a href="javascript:" id="a" class="mid">下载星移盒子APP</a>
            <img src="/down_img/app.png" class="app_abs">
          </p>
        </div>
      </div>
    </div>
    <div class="download_bgimg2">
        <div class="clearfix container download_div1">
          <div class="fl wow fadeInLeft mt156" data-wow-duration="0.5s" data-wow-delay="0.5s">
            <p><img src="/down_img/text2.png" alt="文字加载中.."></p>
            <p class="grey mt45 font24">带你发现更大的游戏世界</p>
          </div>
          <img src="/down_img/img8.png" alt="文字加载中.." class="fr wow fadeInRight" data-wow-duration="2s" data-wow-delay="0.5s">
        </div>
    </div>
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
  head(){
    return{
      title:'下载中心'
    }
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
    height: 100%;
    background: url(/down_img/banner.png);
  }
  .download_bgimg2{
    width: 100%;
    height: 100%;
    background: url(/down_img/download_bgimg2.png);
  }
  .borR20{
    border-radius:35px;
    width: 317px;
    line-height: 70px;
  }
  .download_div1{
    padding: 115px 0;
    height: 875px;
  }
  body .mar0{
    margin: 0;
  }
  .abs{
    position: absolute;
    top: 112px;
    right: 28px;
  }
  /*上下移动动画*/
  @-webkit-keyframes bounce-down {
      25% {
          -webkit-transform: translateY(-10px);
      }
      50%, 100% {
          -webkit-transform: translateY(0);
      }
      75% {
          -webkit-transform: translateY(10px);
      }
  }
  @keyframes bounce-down {
      25% {
          transform: translateY(-10px);
      }
      50%, 100% {
          transform: translateY(0);
      }
      75% {
          transform: translateY(10px);
      }
  }
  .animate-bounce-down{
      -webkit-animation: bounce-down 1.5s linear infinite;
      animation: bounce-down 1.5s linear infinite;
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
      -webkit-animation: bounce-up 1.4s linear infinite;
      animation: bounce-up 1.4s linear infinite;
  }
  .rel{
    position: relative;
  }
  .pt5{
    /*padding-top: 145px;*/
  }
  .mb116{
    margin: 242px 0 67px 0;
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
