<template>
	<div class="main_div">
		<logintop></logintop>
		<nuxt class="loginmain" style="background:url('/login/banner.png');"/>
		<footbar class="footer"></footbar>
	</div>
</template>

<style scoped lang="stylus">
@import '../assets/public.styl'
/*.main_div
	position fixed
	width 100%
	height 100%*/
.loginmain
	padding 110px 0
	background-size 100% 100% !important
</style>

<script>
import footbar from '../components/footbar.vue'
import logintop from '../components/logintop.vue'
export default{
	components:{
		footbar,
		logintop
	}
}
</script>
