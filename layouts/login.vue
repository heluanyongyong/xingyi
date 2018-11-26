<template>
	<div class="maindiv">
		<logintop></logintop>
		<nuxt class="loginmain" style="background:url('/login/banner.png');"/>
		<footbar></footbar>
	</div>
</template>

<style scoped lang="stylus">
@import '../assets/public.styl'
.maindiv
	min-width 1250px
.loginmain
	height 780px
	padding 100px 0
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
