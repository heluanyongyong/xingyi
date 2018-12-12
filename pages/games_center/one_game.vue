<template>
	<div>
		<div class="w100">
			<nuxt-link to="/games_center/infos"><img src="/games_center/banner1.png" alt=""></nuxt-link>
		</div>
		<div class="tc ptb3">
			<nuxt-link to="/games_center/infos"><img src="/games_center/game.png" alt=""></nuxt-link>
		</div>
	</div>
</template>
<style scoped>
  img{
  	cursor:pointer;
  }
</style>
<script>
export default{
	head(){
		return{
			title:'游戏中心'
		}
	}
}
</script>