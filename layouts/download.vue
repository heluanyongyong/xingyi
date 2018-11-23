<template>
	<div class="main">
		<topbar></topbar>
		<nuxt/>
	</div>
</template>
<style scoped lang="stylus">
@import '../assets/public.styl'
.main
	min-width 1250px
</style>
<script>
import topbar from '../components/topbar.vue'
export default{
	components:{
		topbar
	}
}
</script>