<template>
	<div>
		<div class="container">
			<div class="register_div">
				<div class="register_top">
					<span class="span_left">欢迎注册星移帐号</span>
					<span class="span_right">已有帐号？<nuxt-link to="/login" class="active">立即登录</nuxt-link></span>
				</div>
				<div class="register_content">
					<input v-model="gamename" class="input_text" type="text" placeholder="请输入昵称">
					<input v-model="password" class="input_text" type="text" placeholder="请输入密码">
					<input v-model="repassword" class="input_text" type="text" placeholder="再次确认密码">
					<input v-model="username" class="input_text" type="text" placeholder="请输入真实姓名">
					<input v-model="usercode" class="input_text" type="text" placeholder="请输入身份证号码">
					<input v-model="friendid" class="input_text" type="text" placeholder="邀请人ID号(选填)">
					<div class="check_read">
						<input type="checkbox" class="input_checkbox">
						<span class="agree">我已同意</span><span class="sign">《</span><nuxt-link to="/login/agreement" class="active">星移网络用户服务协议和用户隐私政策</nuxt-link><span class="sign">》</span>
					</div>
					<!-- <model msg="恭喜您成功注册星移帐号" btn="我知道了" name="确定"></model> -->
					<button class="button_active" @click="submit">确定</button>
				</div>
			</div>
		</div>
	</div>
</template>
<style scoped lang="styl">
@import '~assets/public.styl'
input:hover
	border 1px solid #FD8F24
.container
	margin-top -95px !important
.register_div
	public_login_container()
	.register_top
		border-bottom 1px solid rgb(238,238,238)
		padding-bottom 20px
		.span_left
			color #666
			font-size 22px
		.span_right
			color #999
			float right
			padding-top 4px
	.register_content
		padding 25px 0 0 0
		.check_read
			margin 15px 0
			input,span,a
				vertical-align middle
			.agree
				margin-left 5px
			a
				font-size 15px
			.sign
				color
</style>
<script>
import model from '../../components/dialog/confirm.vue'
export default{
	layout:'login',
	created(){
		this.phone=this.$route.query.phone;
		this.code=this.$route.query.code;
		console.log(this.phone);
		console.log(this.code);
	},
	components:{
		model
	},
	head(){
		return{
			title:'注册'
		}
	},
	data(){
		return{
			phone:'',//手机号码，来自路由传参-手机绑定
			code:'',//短信验证码，来自路由传参-短信验证码
			gamename:'',//昵称
			password:'',//首次输入密码
			repassword:'',//再次输入密码
			username:'',//真实姓名
			usercode:'',//身份证号码
			friendid:'',//邀请人id
		}
	},
	methods:{
		submit(){
			var msg='';
			console.log(this.$md5(this.password));
			// if(this.gamename){

			// }
		}
	}
}
</script>