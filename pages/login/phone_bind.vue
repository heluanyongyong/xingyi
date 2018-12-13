<template>
	<div class="out_big">
		<div class="container">
			<div class="phonebind_div">
				<div class="phonebind_top">绑定手机号码</div>
				<div class="phonebind_center">
					<input v-model="phone" class="input_text" type="text" placeholder="手机号码">
					<input v-model="imgRegister" v-if="imgisShow" class="input_text middle_input" type="text" placeholder="图片验证码">
	    			<img v-if="imgisShow" class="middle_button" :src="imgUrl" @click="getImg">
	    			<p class="info">{{info}}</p>
	    			<input v-model="messageRegister" class="input_text middle_input" type="text" placeholder="短信验证码">
	    			<button @click="get_message" class="middle_button">获取验证码</button>
	    			<div class="clear"></div>
	    			<p class="info2">{{info2}}</p>
				</div>
				<button class="button_active" @click="check_register">下一步</button>
			</div>
		</div>
	</div>
</template>
<style scoped lang="styl">
@import '~assets/public.styl'
input:hover
	border 1px solid #FD8F24
.phonebind_div
	public_login_container()
	.phonebind_top
		font-size 18px
		border-bottom 1px solid #EEE
		padding-bottom 20px
		bold()
	.phonebind_center
		padding 15px 0 5px 0
		img
			cursor pointer
		.info,.info2
			color #FF4747
			margin-left 15px
.dialog
	padding 80px
	.dialog-content
		img
			float left
			width 50px
		span
			margin-top 5px
			float right
			font-size 24px
	.dialog-bottom
		text-align center
		button
			width 150px
			background #FD8F24
			color #FFFEFE
			border-radius 5px
			height 45px
			margin-top 40px
</style>
<script>
export default{
	layout:'login',
	head(){
		return{
			title:'绑定手机'
		}
	},
	mounted(){
	},
	data() {
    	return{
    		phone:'',//手机号码
    		imgisShow:false,//图片验证码默认不显示
    		imgRegister:'',//图片验证码所输入的内容
    		imgRegisterAgain:true,//是否可以发送图形短信验证请求（若已成功、则不可再次发送）
    		imgUrl:'',//验证图片url
    		info:'',//提示信息
    		messageRegister:'',//短信验证码输入的内容
    		info2:'',//提示信息
    	}
    },
	methods:{
		// 获取图形验证码
		getImg(){
			this.$axios.post('http://39.108.131.18:8090/src/Main/makeImageAuth',{
				"sign":"",
			    "inmap":{
			        "telephone":this.phone
			    },
			    "inlist":null
			}).then((res)=>{
				this.imgUrl=res.data.data+'?'+Math.random();
			}).catch((err)=>{
				console.log(err);
			});
		},
		// 获取短信验证码
		get_message(){
			if(this.phone.length!=11){
				this.info='您输入的手机号格式有误,请重新输入';
				return;
			}
			if(this.imgRegisterAgain){
				this.$axios.post('http://192.168.108.24:4546/user/getVerifyCode',{
					"phone":this.phone,
				    "imageAuth":this.imgRegister,
				    "requestType":"xyGameRequest"
				}).then((res)=>{
					if(res.data.code!=200){
						$('.info').css('color','#FF4747');
						this.info=res.data.msg;
					}else{
						$('.info').css('color','green');
						this.info='短信验证码已发送，请注意查收';
						this.imgRegisterAgain=false;
					}
				}).catch((err)=>{
					console.log(err);
				});
			}
		},
		check_register(){
			this.$axios.post('http://192.168.108.24:4546/user/SMSVerification',{
				"phone":this.phone,
				"SMSCode":this.messageRegister,
				"requestType":"xyGameRequest"
			}).then((res)=>{
				if(res.data.code!=200){
					$('.info2').css('color','#FF4747');
					this.info2=res.data.msg;
				}else{
					$('.info2').css('color','green');
					this.info2='手机号码验证成功,2秒后跳转到注册页面'
					setTimeout(()=>{
						this.$router.push({
							path:'/login/register',
							query:{
								phone:this.phone,
								code:this.messageRegister
							}
						});
					},2000);
				}
			}).catch((err)=>{
				console.log(err);
			});
		}
	},
	watch:{
		phone(){
			this.info='';
			this.imgRegisterAgain=true;
			if(this.phone.length==11){
				this.imgisShow=true;
				this.getImg();
			}else{
				this.imgisShow=false;
			}
		},
		imgRegister(){
			this.info='';
		}
	}
}
</script>