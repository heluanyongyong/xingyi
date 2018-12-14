<template>
	<div>
		<div class="w100">
			<nuxt-link to="/games_center/infos"><img src="/games_center/banner1.png" alt="" class="w100"></nuxt-link>
		</div>
		<div class="tc ptb3">
			<nuxt-link to="/games_center/infos"><img src="/games_center/game.png" alt=""></nuxt-link>
		</div>
		<!-- <el-row>
			<el-col :xs="24" :lg="24" :md="24" class="w100">
				<nuxt-link to="/games_center/infos"><img src="/games_center/banner1.png" alt=""></nuxt-link>
			</el-col>
		</el-row>
		<el-row>
			<el-col class="tc ptb3" :xs="24" :lg="24" :md="24">
				<nuxt-link to="/games_center/infos"><img src="/games_center/game.png" alt=""></nuxt-link>
			</el-col>
		</el-row> -->
	</div>
</template>
<style scoped>
  img{
  	cursor:pointer;
  }
</style>
<script>
export default{
	// layout:'null',
	head(){
		return{
			title:'游戏中心'
		}
	}
}
</script>