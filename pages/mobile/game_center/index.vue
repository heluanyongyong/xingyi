<template>
	<div class="main">
		<header>
			<img class="left" src="/mobile/game_center/logo.png" alt=""><!--
			--><input type="text" placeholder="请输入关键词"><!--
			--><img class="right" src="/mobile/game_center/header.png" alt="">
		</header>
	</div>
</template>
<script>
export default{
	layout:'mobile'
}
</script>
<style scoped lang="styl">
font(size)
	font-size size
	@media (max-width 900px)
		font-size size*0.9
	@media (max-width 800px)
		font-size size*0.8
	@media (max-width 700px)
		font-size size*0.7
	@media (max-width 600px)
		font-size size*0.6
	@media (max-width 500px)
		font-size size*0.5
	@media (max-width 400px)
		font-size size*0.4
	
.main
	header
		width 100%
		padding 2% 4%
		background red
		*
			vertical-align middle
		img.left
			width 20%
		input
			margin 0 6%
			width 60%
			height auto
			background #AEAEAE
			border-radius 25px
			padding 0 5% 0 10%
			font(24px)
		img.right
			width 6%
</style>