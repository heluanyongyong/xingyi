<template>
	<div>
		<header>
			<img src="/mobile/game_center/banner.png" alt="">
		</header>
		<section>
			<h2>寻宝达人</h2>
			<img src="/mobile/game_center/games.png" alt="">
		</section>
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
	line-height 0
	img
		width 100%
section
	line-height 0
	padding 4% 4% 6% 4%
	h2
		font(64px)
		line-height 1
		font-weight lighter
	img
		width 100%
		margin-top 4%
</style>