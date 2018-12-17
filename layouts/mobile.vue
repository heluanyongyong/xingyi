<template>
	<div>
		<header>
			<div class="contentHead">
				<img class="left" src="/mobile/game_center/logo.png" alt=""><!--
				--><input type="text" placeholder="请输入关键词"><!--
				--><img class="right" src="/mobile/game_center/header.png" alt="">
			</div>
			<no-ssr>
				<div class="navHeader">
					<swiper :options="swiperOption" class="nav">
						<swiper-slide class="navItem"><nuxt-link to="/mobile/game_center">游戏中心</nuxt-link></swiper-slide>
						<swiper-slide class="navItem"><nuxt-link to="/mobile/game_center">下载中心</nuxt-link></swiper-slide>
						<swiper-slide class="navItem"><nuxt-link to="/mobile/game_center">在线充值</nuxt-link></swiper-slide>
						<swiper-slide class="navItem"><nuxt-link to="/mobile/game_center">关于星移</nuxt-link></swiper-slide>
						<swiper-slide class="navItem"><nuxt-link to="/mobile/game_center">商务合作</nuxt-link></swiper-slide>
						<swiper-slide class="navItem"><nuxt-link to="/mobile/game_center">联系我们</nuxt-link></swiper-slide>
						<swiper-slide class="navItem"><nuxt-link to="/mobile/game_center">加入星移</nuxt-link></swiper-slide>
					</swiper>
					<img src="/mobile/game_center/list.png" alt="">
				</div>
			</no-ssr>
		</header>
		<nuxt/>
		<footer>
			<ul class="navUl">
				<li>游戏中心</li>
				<li class="limit">|</li>
				<li>下载中心</li>
				<li class="limit">|</li>
				<li>在线充值</li>
				<li class="limit">|</li>
				<li>关于星移</li>
				<li class="limit">|</li>
				<li>商务合作</li>
				<li class="limit">|</li>
				<li>联系我们</li>
				<li class="limit">|</li>
				<li>加入星移</li>
			</ul>
			<ul>
				<li>营业执照</li>
				<li class="limit">|</li>
				<li>网络文化经营许可证</li>
				<li class="limit">|</li>
				<li>计算机软件著作权登记证书</li>
				<li class="limit">|</li>
				<li>增值电信业务经营许可证</li>
			</ul>
			<p>Copyright © 2017 p9yi.xyz   All rights reserved. 粤ICP备17045789号</p>
		</footer>
	</div>
</template>
<script>
export default{
	data() {
    	return {
    		swiperOption: {
    			slidesPerView: 3.5,
    			spaceBetween: 30,
    			freeMode: true,
    			pagination: {
    				el: '.swiper-pagination',
    				clickable: true
    			}
    		}
    	}
    }
}
</script>
<style scoped lang="styl">
font(size)
	font-size size
	@media (max-width 950px)
		font-size size*0.95
	@media (max-width 900px)
		font-size size*0.9
	@media (max-width 850px)
		font-size size*0.85
	@media (max-width 800px)
		font-size size*0.8
	@media (max-width 750px)
		font-size size*0.75
	@media (max-width 700px)
		font-size size*0.69
	@media (max-width 650px)
		font-size size*0.63
	@media (max-width 600px)
		font-size size*0.56
	@media (max-width 550px)
		font-size size*0.50
	@media (max-width 500px)
		font-size size*0.44
	@media (max-width 450px)
		font-size size*0.38
	@media (max-width 400px)
		font-size size*0.32
	@media (max-width 350px)
		font-size size*0.28
header
	.contentHead
		width 100%
		padding 4%
		*
			vertical-align middle
		img.left
			width 29%
		input
			margin 0 6%
			width 50%
			height auto
			background rgba(243,243,243,1)
			color #aeaeae
			border-radius 50px
			padding 2% 5% 2% 10%
			font(36px)
			outline none
		img.right
			width 9%
	.navHeader
		position relative
		.nav
			font(48px)
			text-align center
			margin 0 11% 2% 3%
		img
			position absolute
			right 6.5%
			top 50%
			transform translateY(-50%) translateX(50%)
			z-index 100
			width 5%
footer
	padding 3% 4%
	background #111315
	color #888888
	width 100%
	font(24px)
	text-align center
	ul
		li
			margin 0 auto
			display inline-block
			&.limit
				margin 0 0.2%
		&.navUl
			font(27px)
			margin-bottom 0.5%
</style>