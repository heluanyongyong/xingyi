<template>
	<div>
		<div class="loginheader">
			<ul>
				<li><img @click="click_logo" src="/login/logo.png" alt=""></li>
				<li class="line"></li>
				<li><span>{{login_state}}</span></li>
			</ul>
			<div class="clear"></div>
		</div>
	</div>
</template>
<style scoped lang="styl">
@import '../assets/public.styl'
.loginheader
	container()
	height 60px
	overflow hidden
	ul
		width 100%
		height 100%
		float left
		li
			float left
			color #555
			margin-right 25px
			/*若宽度发生改变、行高也应发生相应改变*/
			line-height 60px
			font-size 22px
			font-weight 700
			vertical-align middle
			&.line
				height 100%
				width 1px
				background rgba(238,238,238,1)
			img
				cursor pointer
				width 110px
				vertical-align middle
</style>
<script>
export default{
	data(){
		return{
			login_state:'登录'
		}
	},
	methods:{
		click_logo(){
			this.$router.push('/download_center');
		}
	},
	// 路由监听改变状态
	watch:{
		$route(to,from){
			switch(to.path){
				case '/login/register':this.login_state='注册';break;
				case '/login/phone_bind':this.login_state='注册';break;
				default:this.login_state='登录';break;
			}
		}
	}
}
</script>