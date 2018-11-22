<template>
    <div>
    	<no-ssr>
        	<swiper :options="swiperOption" class="swiper_container">
                <swiper-slide><img src="/games_center/banner.png" alt=""></swiper-slide>
                <swiper-slide><img src="/games_center/banner.png" alt=""></swiper-slide>
                <swiper-slide><img src="/games_center/banner.png" alt=""></swiper-slide>
                <swiper-slide><img src="/games_center/banner.png" alt=""></swiper-slide>
                <swiper-slide><img src="/games_center/banner.png" alt=""></swiper-slide>
                <swiper-slide><img src="/games_center/banner.png" alt=""></swiper-slide>
                <swiper-slide><img src="/games_center/banner.png" alt=""></swiper-slide>
                <swiper-slide><img src="/games_center/banner.png" alt=""></swiper-slide>
                <swiper-slide><img src="/games_center/banner.png" alt=""></swiper-slide>
                <div class="swiper-pagination" slot="pagination"></div>
                <div class="swiper-button-prev" slot="button-prev"></div>
                <div class="swiper-button-next" slot="button-next"></div>
            </swiper>
        </no-ssr>
    	<div class="center">
    		<div class="container">
    			<div class="content_left">
    				<div class="content_left_top">
    					<div class="warp">
    						<div class="title">热门标签</div>
		    				<ul class="listtitle">
		    					<li><a href="javascript:void(0);" @click="change_listtitle(0)">棋牌</a></li>
		    					<li><a href="javascript:void(0);" @click="change_listtitle(1)">篮球</a></li>
		    					<li><a href="javascript:void(0);" @click="change_listtitle(2)">单机</a></li>
		    					<li><a href="javascript:void(0);" @click="change_listtitle(3)">免费</a></li>
		    					<li><a href="javascript:void(0);" @click="change_listtitle(4)">职业</a></li>
		    				</ul>
    					</div>
    				</div>
    				<div class="content_left_bottom">
						<div class="title">开服</div>
						<table>
							<thead>
								<tr>
									<td>游戏名称</td>
									<td>开服时间</td>
									<td>新服名称</td>
								</tr>
							</thead>
							<tbody>
								<tr v-for="item in 20" :key="item">
									<td>王者归来...</td>
									<td>10.29 14:00</td>
									<td>王者归来...</td>
								</tr>
							</tbody>
							<tfoot>
								<tr>
									<td colspan="3">
										<span @click="change_tablepages(0)"></span>
										<span @click="change_tablepages(1)" class="active"></span>
										<span @click="change_tablepages(2)"></span>
									</td>
								</tr>
							</tfoot>
						</table>
    				</div>
    			</div>
    			<div class="content_right">
    				<div class="gametitle">
    					<a href="javascript:void(0);" @click="change_gametitle(0)" class="active">所有游戏</a>
    					<a href="javascript:void(0);" @click="change_gametitle(1)">热门游戏</a>
    					<a href="javascript:void(0);" @click="change_gametitle(2)">手机游戏</a>
    					<a href="javascript:void(0);" @click="change_gametitle(3)">网页游戏</a>
    				</div>
    				<div class="gamecontent">
    					<ul>
    						<li v-for="item in 15" :key="item">
    							<div class="divcontent">
    								<div class="imgdiv">
    									<img src="/games_center/gamelist1.png" alt="">
    									<div class="pos_info" @click="img_active">
    										<div class="info"><nuxt-link to="/games_center/infos">查看详情 >></nuxt-link></div>
    									</div>
    								</div>
	    							<p class="title text_overflow">剑灵</p>
	    							<p class="content">上线时间：2017-10-28</p>
	    							<p class="content">运营代理商：星移盒子</p>
    							</div>
    						</li>
    					</ul>
    				</div>
    			</div>
    			<div class="clear"></div>
    		</div>
    	</div>
    </div>
</template>

<script>
export default{
	head: {
	    title:'游戏中心'
	},
	mounted(){
	},
    data(){
    	return{
    		// 轮播器配置
    		swiperOption: {
                spaceBetween: 30,
                centeredSlides: true,
                autoplay: {
                    delay: 3500,
                    disableOnInteraction: false
                },
                pagination: {
                    el: '.swiper-pagination',
                    clickable: true
                },
                navigation: {
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev'
                }
            }
    	}
    },
    computed:{
    	mySwiper(){
    		return this.$refs.mySwiper.swiper;
    	}
    },
    methods:{
    	// 改变游戏列表、游戏列表颜色切换，游戏标签初始化(默认颜色)
    	change_gametitle(index){
    		$('.gametitle').find('a').eq(index).addClass('active').siblings().removeClass('active');
    		$('.listtitle li a').removeClass('active');
    		$('.gamecontent').fadeOut().fadeIn(500);
    	},
    	// 改变游戏标签列表、游戏标签颜色切换
    	change_listtitle(index){
    		$('.listtitle li').eq(index).find('a').addClass('active').parent('li').siblings().find('a').removeClass('active');
    		$('.gamecontent').fadeOut().fadeIn(500);
    	},
    	change_tablepages(index){
    		$('.content_left_bottom tfoot span').eq(index).addClass('active').siblings().removeClass('active');
    		$('.content_left_bottom tbody').fadeOut().fadeIn(250);
    	},
    	img_active(){
    		this.$router.push('/games_center/infos');
    	}
    }
}
</script>

<style scoped lang="styl">
@import '~assets/public.styl'
/*轮播器*/
.swiper_container
	line-height 0
	width 100%
	img
		width 100%
.center
	padding 50px 0 45px 0
	background rgba(248,248,248,1)
	.container
		container()
		.content_left
			float left
			width 25%
			public_content_left()
				width 92%
				background white
				color #666666
				font-size 22px
				margin-left -5px
			.content_left_top
				public_content_left()
				.warp
					padding 30px 40px
					.title
						bold()
						margin-bottom 20px
						letter-spacing 2px
					li
						height 40px
						line-height 40px
						font-size 18px
						padding-left 20px
						a
							color #333333
							&.active
								color #FD8F24
							&:hover
								color #FD8F24
			.content_left_bottom
				/*若改变此处，需要改变右边边对应上边距*/
				margin-top 43px
				public_content_left()
				.title
					padding 20px 0 10px 15px
					bold()
					letter-spacing 6px
				table
					width 100%
					public_tr(col,font,bg,pd)
						color col
						font-size font
						background bg
						width (100%/3)
						text-align center
						td
							width (100/3)%
							padding pd 0
					public_td()
						td:first-child
							padding-left 5px
						td:last-child
							padding-right 5px
					thead
						tr
							public_tr(#333,16px,#efefef,15px)
							td
								bold()
								font-size 15px
							public_td()
					tbody
						tr
							public_tr(#666,13px,#fff,7px)
							&:hover
								td
									color #FD8F24
									cursor pointer
							td
								font-size 12px
							public_td()
					tfoot
						tr
							td
								text-align center
								padding-bottom 10px
								span
									width 10px
									height 10px
									background #d3d3d3
									border-radius 50%
									display inline-block
									&.active
										width 25px
										border-radius 10px
										background #FD8F24


		.content_right
			float right
			width 75%
			.gametitle
				a
					margin-right 50px
					color #010101
					font-size 20px
					&.active
						color #FD8F24
					&:hover
						color #FD8F24
			.gamecontent
				ul
					li
						float left
						width 20%
						/*若改变此处，需要改变左边对应上边距*/
						margin-top 25px
						.divcontent
							width 95%
							margin 0 2.5%
							background white
							.imgdiv
								line-height 0
								position relative
								&:hover
									.pos_info
										opacity 1
								img
									width 100%
								.pos_info
									transition all 0.5s
									opacity 0
									position absolute
									width 100%
									height 100%
									background rgba(0,0,0,0.6)
									top 0 
									left 0
									text-align center
									.info
										margin-top 110px
										a
											transition all 0.5s
											color #fff
											&:hover
												color #FD8F24
							p
								text-align center
								margin-top 6px
								&.title
									font-size 18px
									bold()
									margin 15px 0 10px 0
									padding 0 20px
								&.content
									font-size 13px
									color #666
									&:last-child
										padding-bottom 15px
</style>

