<template>
	<div class="bggray">
		<div class="container">
			<div class="top">
				<span>消息列表</span>
				<nuxt-link class="active" to="/message">&lt;&nbsp;返回</nuxt-link>
			</div>
			<div class="div_content">
				<div class="time">2018-11-12</div>
				<p class="title">星移提醒您游戏充值成功</p>
				<p class="info">尊敬的张三用户，您于2018年11月12日成功充值100元到糖泡泡游戏，星移祝贺您游戏愉快，更多资讯疑问请关注星移网络科技有限公司官方网站；</p>
				<p class="info">尊敬的张三用户，您于2018年11月12日成功充值100元到糖泡泡游戏，星移祝贺您游戏愉快，更多资讯疑问请关注星移网络科技有限公司官方网站；尊敬的张三用户，您于2018年11月12日成功充值100元到糖泡泡游戏，星移祝贺您游戏愉快，更多资讯疑问请关注星移网络科技有限公司官方网站；</p>
			</div>
		</div>
	</div>
</template>
<style scoped lang="styl">
@import '~assets/public.styl'
.top
	font-size 16px
	a
		margin-left 5px
.div_content
	margin-top 5px
	background #fff
	min-height 600px
	padding 40px
	color #333
	.time
		text-align right
		color #666
		font-size 15px
	p.title
		font-size 18px
		margin-top 25px
		margin-bottom 20px
		text-align center
	p.info
		font-size 15px
		text-align left
		text-indent 2rem
		margin-top 10px
</style>
<script>
export default{
	head(){
		return{
			title:'消息详情'
		}
	},
}
</script>