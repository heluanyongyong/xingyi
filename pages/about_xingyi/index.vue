<template>
	<div id="app" class="bgColor">
		<div class="height"><img src="/about_img/about.png" alt="图片加载中..." class="w100"></div>
	  <!-- <ul class="mg15 ul bgWhite clearfix">
	  	<li><nuxt-link to="/about_xingyi/synopsis" tag="span">公司简介</nuxt-link></li>
	  	<li><nuxt-link to="/about_xingyi/prog" tag="span">发展历程</nuxt-link></li>
	  	<li><nuxt-link to="/about_xingyi/culture" tag="span">企业文化</nuxt-link></li>
	  	<li><nuxt-link to="/about_xingyi/team" tag="span">团队介绍</nuxt-link></li>
	  	<li><nuxt-link to="/about_xingyi/honor" tag="span">企业荣誉</nuxt-link></li>
	  </ul> -->
	  	<div class="w100 bgWhite">
		  	<ul class="ul clearfix container">
			  	<li @click="tabChange(0)" class="add" title="公司简介">公司简介</li>
			  	<li @click="tabChange(1)" title="发展历程">发展历程</li>
			  	<li @click="tabChange(2)" title="企业文化">企业文化</li>
		  	</ul>
	  	</div>
	    <ul class="container ptb3 changeBox">
	    	<li class="clearfix">
		        <!-- 公司简介 -->
				<img src="/about_img/company.png" alt="图片加载中..." class="fl">
				<div class="fr mt2 w">
					<p class="tc font36">星移网络</p>
					<p class="textIn pt3 font16 grey">
					 深圳星移网络科技有限公司成立于2017年，是一家集软件开发、运营推广、营销策划、新媒体传
	                 播为主的移动互联网公司。星移网络以规范、专业、创新、共赢的经营理念，高效贴心的服务，团结协
	                 作、敬业负责、服务奉献、求实进取的企业精神，始终贯彻以追求合作伙伴最大利益为目标，竭诚为合
	                 作伙伴提供最大程度的保障。我们将立志打造最精良的优秀团队，并为合作伙伴提供最优秀、最科学、
	                 最专业的服务，以获得合作者的信任和支持，打造属于我们自己的品牌。
					</p>
				</div>
	    	</li>
	    	<li class="clearfix none">
	    		<dl class="grey font36 dl_left wrBorder1 clearfix fl">
	    			<dd>2017-1</dd>
	    		</dl>
	    		<dl class="dl_right tl fr">
	    			<dd class="clearfix">
	    				<div>
	    					<div>深圳星移网络科技有限公司成立</div>
	    					<p>2017年1月6日，深圳星移网络科技有限公司正式成立</p>
	    				</div>
	    				<img src="/about_img/logo.png" alt="图片加载中.." class="mid">
	    			</dd>
	    		</dl> 
	    	</li>
	    	<li class="clearfix culture none">
		    	<!-- 企业文化 -->
				<h2 class="tc">星移盒子</h2>
				<!-- 价值观 -->
				<div class="clearfix">
				   <img src="/about_img/money.png" class="fl">
				   <div class="fl">
				   	   <h3>价值观</h3>
	                   <p>勤奋：天道酬勤，既要做到肢体勤奋，也要做到思想勤奋；并且方向明确，专心致志，坚持不懈。</p>
	                   <p>务实：不操他人该操之心，恪守本职，独挡一面，做到最好。</p>
	                   <p>简单：思维简洁，以把事情做好为唯一宗旨；以自我繁琐的千倍付出，换取用户认知与操作简洁的一滴。</p>
	                   <p>细致：思考问题没有遗漏；修改问题不厌其烦；解决问题不留尾巴。</p>
				   </div>
				</div>
				<div class="clearfix">
					<!-- 使命 -->
					<div class="clearfix fl w580">
						<img src="/about_img/mission.png" class="fl">
						<div>
							<h3>使命</h3>
							<p>凝聚我们力量，收获明日辉煌！</p>
						</div>
					</div>
					<!-- 愿景 -->
					<div class="clearfix fl w580">
						<img src="/about_img/hope.png" class="fl">
						<div>
							<h3>愿景</h3>
							<p>立志成为全球第一游戏CP让团队中的每一个人都令人尊敬成就一段没有遗憾的人生</p>
						</div>
					</div>
				</div>
	    	</li>
	    </ul>	  
	</div>
</template>

<script>
export default {
  name: 'About',
  head(){
		return{
			title:'关于星移'
		}
	},
  data () {
    return {
    }
  },
  methods:{
      tabChange(index){
           $('.ul li').eq(index).addClass('add').siblings().removeClass('add')
           $('.changeBox li').eq(index).show().siblings().hide()
      }
  }
}
</script>

<style scoped>
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
.height{
	line-height: 0;
}
#font36{
	font-size: 36px;
}
.ul li{
	width: 175px;
    line-height: 60px;
	float: left;
	font-size: 18px;
	color: #333333;
}
.ul li:hover{
	color: #FD8F24;
}
.ul .add{
	font-size: 20px;
	color: #FD8F24;
}
/*公司简介*/
.textIn{
	text-indent: 2em;
}
.w{
	width: 720px;
}

/*发展历程*/
.dl_left dd{
    border-bottom: 1px solid #E0E0E0;
    text-align: center;
    width: 170px;
    margin: 20px 30px 20px 0;
    padding: 70px 0;
}
.dl_right{
	width: 886px;
	height: 173px;
}
.dl_right dd{
    background-color: white;
    margin-bottom: 50px;
    padding: 20px;
}
.dl_right div{
	float: left;
	width: 538px;
}
.dl_right img{
	float: right;
	width: 183px;

}
.dl_right p{
	font-size: 18px;
	margin-top: 30px;
	color: #999999;
}
.mg3{
	margin-top: 3rem;
}
.dl_right div{
	font-size: 32px;
	margin-bottom: 30px;
}
/*企业文化*/
.culture img{
	margin-right: 60px;
}
h2{
	margin-bottom: 70px;
}
.culture p{
	font-size: 16px;
	color: #666666;
	margin-bottom: 5px;
}
.w580{
	width: 580px;
	margin-top: 100px;
}
h3{
	margin-bottom: 20px;
}
</style>