<template>
	<div class="bggray">
		<div class="container">
			<div class="title">手机找回密码</div>
			<div class="center">
				<input type="text" placeholder="手机号码" class="input_text">
				<input class="input_text middle_input" type="text" placeholder="验证码">
		    	<button class="middle_button">获取验证码</button>
		    	<div class="clear"></div>
			</div>
			<div class="bottom">
				<button class="button_active" @click="next_modifyPassword">下一步</button>
			</div>
		</div>
	</div>
</template>
<style scoped lang="styl">
@import '~assets/public.styl'
.container
	background #fff
	padding 150px 400px 200px 400px
	text-align center
	.title
		font-size 20px
		font-weight bold
	.center
		margin 30px 0 15px 0
	.bottom
		.button_active
			font-size 16px
</style>
<script>
export default{
	head(){
		return{
			title:'找回密码'
		}
	},
	methods:{
		next_modifyPassword(){
			this.$router.push('/forget_password/password_modify');
		}
	}
}
</script>