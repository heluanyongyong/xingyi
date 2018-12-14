<template>
	<div class="bggray">
		<div class="container">
			<div class="title">手机找回密码</div>
			<modify></modify>
			<!-- <div class="center">
				<input v-model="phone" type="text" placeholder="手机号码" class="input_text">
				<input v-model="imgRegister" v-if="imgisShow" class="input_text middle_input" type="text" placeholder="图片验证码">
	    		<img v-if="imgisShow" class="middle_button" :src="imgUrl" @click="getImg">
	    		<p class="info">{{info}}</p>
				<input v-model="messageRegister" class="input_text middle_input" type="text" placeholder="短信验证码">
		    	<button @click="get_message" class="middle_button">获取验证码</button>
		    	<input v-model="newpasaword" type="password" placeholder="新密码" class="input_text">
		    	<input v-model="renewpasaword" type="password" placeholder="确认新密码" class="input_text">
		    	<p class="info2">{{info2}}</p>
		    	<div class="clear"></div>
			</div>
			<div class="bottom">
				<button class="button_active" @click="submit">确定</button>
			</div> -->
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
		font-size 28px
		font-weight 500
		color #333
</style>
<script>
import modify from '../../components/password/modify.vue'
export default{
	components:{
		modify
	},
	head(){
		return{
			title:'找回密码'
		}
	}
}
</script>