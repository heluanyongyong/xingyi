<template>
	<div>
		<div class="center" style="background-image:url('/games_list/bgimg.png')">
			<div class="container">
				<div class="top">
					<div class="top_content">
						<div class="top1_left">
							<img src="/games_list/games1.png" alt="">
						</div>
						<div class="top1_center">
							<h3 class="title">天命奇御</h3>
							<ul>
								<li>在线人数：<span>123456</span></li>
								<li>游戏类型：<span>角色</span></li>
							</ul>
							<ul>
								<li>更新时间：<span>2017-10-23</span></li>
								<!-- <li>状态：<span>公测</span></li> -->
							</ul>
						</div>
						<div class="top1_right">
							<img src="/games_list/erweima.png" alt="">
						</div>
					</div>
					<div class="clear"></div>
				</div>
				<div class="game_list">
					<ul>
						<li><a href="javascript:void(0)" @click="change_list(0)" class="active">游戏介绍</a></li>
						<li><a href="javascript:void(0)" @click="change_list(1)">特色玩法</a></li>
						<li><a href="javascript:void(0)" @click="change_list(2)">技术亮点</a></li>
						<li><a href="javascript:void(0)" @click="change_list(3)">角色设定</a></li>
					</ul>
				</div>
				<div class="game_content" ref="divs">
					<!-- 游戏介绍 -->
					<div class="info info1 active">
						不羁少年柴朔风意外识破一场阴谋而引祸上身。绝处逢生的他竟成为「天命之人」，从此肩负起江湖血、天下命，开启仗剑豪情的侠客之路。游戏中具有高自由度任务由你探索、刺激实时战斗等你挑战、丰富支线剧情更将触发无数精彩奇遇，你的抉择将颠覆你的命运，改写不同结局。玩家可以任意游走于多条主线，挑战悬赏解谜，结识红颜知己、习得各派武功，每个抉择都可能颠覆命运，创造精采多重结局。是睥睨天下或淡入尘俗？唯有踏入江湖，剑写天命！
					</div>
					<!-- 特色玩法 -->
					<div class="info info2">
						<ul class="ul_left">
							<li v-for="item in 3" :key="item">
								<i></i>
								<span>后起之秀</span>
								<span>2018.10.22</span>
							</li>
						</ul>
						<ul class="ul_right">
							<li v-for="item in 3" :key="item">
								<i></i>
								<span>后起之秀</span>
								<span>2018.10.23</span>
							</li>
						</ul>
						<div class="clear"></div>
					</div>
					<!-- 技术亮点 -->
					<div class="info info3">
						不羁少年柴朔风意外识破一场阴谋而引祸上身。绝处逢生的他竟成为「天命之人」，从此肩负起江湖血、天下命，开启仗剑豪情的侠客之路。游戏中具有高自由度任务由你探索、刺激实时战斗等你挑战、丰富支线剧情更将触发无数精彩奇遇，你的抉择将颠覆你的命运，改写不同结局。玩家可以任意游走于多条主线，挑战悬赏解谜，结识红颜知己、习得各派武功，每个抉择都可能颠覆命运，创造精采多重结局。是睥睨天下或淡入尘俗？唯有踏入江湖，剑写天命！
					</div>
					<!-- 角色设定 -->
					<div class="info info4">
						<a href="javascript:void(0)" class="pos_icon pos_left"><img @click="info4_img_prev" src="/games_list/left.png" alt=""></a>
						<div class="info4_content">
							<div class="info4_inner">
								<div class="left">
									<img src="/games_list/peopel1.png" alt="">
								</div>
								<div class="right">
									<h3 class="title">暗月马戏团</h3>
									<p>
										1暗月马戏团在艾泽拉斯的大地上，以经久不衰的演出及稀有道具赢得了足够的尊重。艾鲁作为团长，也是神话般的存在，他的时光瞬移节目总能让年轻的法师观众们报以热烈的追捧。然而艾鲁最后一次前往时光之穴搜集“时光砂”时，却意外的穿越到了一个叫做三国的时代。
									</p>
								</div>
								<div class="clear"></div>
							</div>
							<div class="info4_inner">
								<div class="left">
									<img src="/games_list/peopel1.png" alt="">
								</div>
								<div class="right">
									<h3 class="title">暗月马戏团</h3>
									<p>
										2暗月马戏团在艾泽拉斯的大地上，以经久不衰的演出及稀有道具赢得了足够的尊重。艾鲁作为团长，也是神话般的存在，他的时光瞬移节目总能让年轻的法师观众们报以热烈的追捧。然而艾鲁最后一次前往时光之穴搜集“时光砂”时，却意外的穿越到了一个叫做三国的时代。
									</p>
								</div>
								<div class="clear"></div>
							</div>
							<div class="info4_inner">
								<div class="left">
									<img src="/games_list/peopel1.png" alt="">
								</div>
								<div class="right">
									<h3 class="title">暗月马戏团</h3>
									<p>
										3暗月马戏团在艾泽拉斯的大地上，以经久不衰的演出及稀有道具赢得了足够的尊重。艾鲁作为团长，也是神话般的存在，他的时光瞬移节目总能让年轻的法师观众们报以热烈的追捧。然而艾鲁最后一次前往时光之穴搜集“时光砂”时，却意外的穿越到了一个叫做三国的时代。
									</p>
								</div>
								<div class="clear"></div>
							</div>
							<div class="info4_inner">
								<div class="left">
									<img src="/games_list/peopel1.png" alt="">
								</div>
								<div class="right">
									<h3 class="title">暗月马戏团</h3>
									<p>
										4暗月马戏团在艾泽拉斯的大地上，以经久不衰的演出及稀有道具赢得了足够的尊重。艾鲁作为团长，也是神话般的存在，他的时光瞬移节目总能让年轻的法师观众们报以热烈的追捧。然而艾鲁最后一次前往时光之穴搜集“时光砂”时，却意外的穿越到了一个叫做三国的时代。
									</p>
								</div>
								<div class="clear"></div>
							</div>
						</div>
						<a href="javascript:void(0)" class="pos_icon pos_right"><img @click="info4_img_next" src="/games_list/right.png" alt=""></a>
						<div class="clear"></div>
					</div>
				</div>
				<div class="bottom">
					<ol class="imglist">
						<li><a href="javascript:void(0)" @click="change_imglist(0,'/games_list/favor1.png')" class="active">游戏壁纸</a></li>
						<li><a href="javascript:void(0)" @click="change_imglist(1,'/games_list/favor2.png')">游戏截图</a></li>
					</ol>
					<div class="clear"></div>
					<div class="imgs_content">
						<ul>
							<li><img @click="click_img" src="/games_list/favor1.png" alt=""></li>
							<li><img @click="click_img" src="/games_list/favor1.png" alt=""></li>
							<li><img @click="click_img" src="/games_list/favor1.png" alt=""></li>
							<li><img @click="click_img" src="/games_list/favor1.png" alt=""></li>
							<li><img @click="click_img" src="/games_list/favor1.png" alt=""></li>
						</ul>
					</div>
					<!-- 弹框 -->
					<el-dialog
						:visible.sync="modal_change"
						width="1000px"
						>
						<div class="dialog">
							<div class="imgs_container">
								<div class="img">
									<img :src="dialog_imgSrc" alt="">
									<img :src="dialog_imgSrc" alt="">
									<img :src="dialog_imgSrc" alt="">
								</div>
								<img src="/games_list/left_small.png" alt="" class="left" @click="bigimg_prev">
								<img src="/games_list/right_small.png" alt="" class="right" @click="bigimg_next">
							</div>
						</div>
					</el-dialog>
					<div class="clear"></div>
				</div>
			</div>
		</div>
	</div>
</template>
<style scoped lang="stylus">
@import '~assets/public.styl'
.center
	background-size 100% 121%
	padding-bottom 60px
	.container
		container()
		overflow hidden
		.top
			margin-top 60px
			padding 30px 33px
			background #fff
			.top_content
				div
					float left
					&.top1_left
						line-height 0
						width 130px
						img
							width 100%
					&.top1_center
						margin 10px 29px
						.title
							bold()
							color #FD8F24
							font-size 20px
							margin-top 10px
						ul
							margin-top 7px
							float left
							width 200px
							li
								line-height 30px
								font-size 14px
								span
									color #fd8f24
					&.top1_right
						line-height 0
						float right
						width 130px
						img
							width 100%
		.game_list
			height 50px
			background #f3f3f3
			font-size 16px
			bold()
			ul
				float left
				margin-left 1px
				li
					float left
					width 160px
					line-height 50px
					text-align left
					&:first-child
						margin-left 35px
					a
						color #000
						&.active
							color #FD8F24
		.game_content
			background #fff
			font-size 14px
			.info
				padding 28px 35px
				display none
			.active
				display block
			.info1,.info3
				line-height 25px
			.info2
				padding 25px 35px 35px 35px
				ul
					width 44%
					&.ul_left
						float left
					&.ul_right
						float right
					li
						border-bottom 1px dashed rgb(225,225,225)
						line-height 40px
						i
							width 10px
							height 10px
							background #fd8f24
							display inline-block
							transform rotate(45deg)
							margin-right 5px
						span
							&:last-child
								float right
			.info4
				margin 0 35px
				position relative
				.pos_icon
					position absolute
					top 50%
					transform translateY(-50%)
					img
						cursor pointer
				.pos_left
					left 0
				.pos_right
					right 0
				.info4_content
					overflow hidden
					width 100%
					height 185px
					float left
					position relative
					.info4_inner
						public_img_lunbo()
						.left
							float left
							/*left+right的宽度之和不能超过100*/
							width 25%
							margin 0 2.5%
						.right
							float left
							width 55%
							margin 0 5%
							.title
								margin-top 10px
								font-size 24px
								color #FD8F24
							/*行数溢出*/
							p
								margin-top 15px
								position relative
								line-height 25px
								max-height 100px
								overflow hidden
		.bottom
			margin-top 25px
			background #fff
			padding 30px
			ol
				float left
				margin-left 1px
				li
					float left
					width 120px
					&:first-child
						margin-left 5px
					a
						color #000
						font-size 15px
						&.active
							color #FD8F24
			.imgs_content
				width 100%
				height 145px
				margin-top 15px
				overflow hidden
				ul
					width 100%
					height 100%
					li
						float left
						width 20%
						text-align center
						img
							width 95%
							cursor pointer
			.dialog
				padding 40px
				.imgs_container
					height 604px
					position relative
					overflow hidden
					.img
						height 100%
						img
							public_img_lunbo()
					.left,.right
						position absolute
						top 50%
						transform translateY(-50%)
					.left
						left 50px
					.right
						right 50px
</style>
<script>
export default{
	head(){
		return{
			title:'游戏详情'
		}
	},
	data(){
		return{
			// 放大图片及其初始值
			modal_change: false,
			dialog_imgSrc:'/games_list/favor1.png',
			// 自定义轮播器限制频率
			click_flag:true,
			// 轮播器配置
    		swiperOption: {
                spaceBetween: 30,
                centeredSlides: true,
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
	methods:{
		change_list(index){
			$('.center .game_list ul li').eq(index).find('a').addClass('active').parent('li').siblings().find('a').removeClass('active');
			$('.center .game_content>div').eq(index).addClass('active').siblings().removeClass('active');
			var _index=index+1;
			$(`.info${_index}`).hide().fadeIn(500);
		},
		change_imglist(index,name){
			$('.imglist li').eq(index).find('a').addClass('active').parent('li').siblings().find('a').removeClass('active');
			$('.imgs_content ul').hide().slideDown(500);
			$('.imgs_content ul img').attr('src',name);
			this.dialog_imgSrc=name;
		},
		click_img(){
			this.modal_change=true;
		},
		info4_img_prev(){
			if(this.click_flag){
				$('.info4_content').prepend($('.info4_content .info4_inner:last-child'));
				this.public_initClick(500);
			}
		},
		info4_img_next(){
			if(this.click_flag){
				$('.info4_content').append($('.info4_content .info4_inner:first-child'));
				this.public_initClick(500);
			}
		},
		bigimg_prev(){
			if(this.click_flag){
				$('.imgs_container .img').prepend($('.imgs_container .img img:last-child'));
				this.public_initClick(800);
			}
		},
		bigimg_next(){
			if(this.click_flag){
				$('.imgs_container .img').append($('.imgs_container .img img:first-child'));
				this.public_initClick(900);
			}
		},
		public_initClick(time){
			this.click_flag=false;
			setTimeout(()=>{this.click_flag=true},time);
		}
	}
}
</script>