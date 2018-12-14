<template>
	<div>
		<div class="center">
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
		</div>
	</div>
</template>
<style scoped lang="styl">
@import '~assets/public.styl'
.title
	font-size 28px
	font-weight 500
	color #333
.center
	margin 30px 0 15px 0
	img
		cursor pointer
	.info,.info2
		color #FF4747
.bottom
	.button_active
		font-size 16px
</style>
<script>
export default{
	data(){
		return{
			phone:'',//手机号码
			imgisShow:false,//是否显示图片验证码
			imgUrl:'',//验证图片url
			imgRegister:'',//图片验证码
			imgRegisterAgain:true,//是否可以发送图形短信验证请求（若已成功、则不可再次发送）
			messageRegister:'',//短信验证码
			newpasaword:'',//新密码
			renewpasaword:'',//确认新密码
			info:'',//提示信息
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
				console.log(res.data);
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
				this.$axios.post('http://192.168.108.24:4546/updateUser/updatePwdGetCode',{
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
		submit(){
			// 前端验证
			var msg='';
			if(this.phone.length!=11){
				msg+=' 手机号码格式有误 ';
			}
			if(this.newpasaword==''){
				msg+=' 您还未输入新密码 ';
			}
			if(this.renewpasaword!=this.newpasaword){
				msg+=' 两次新密码输入不一致 ';
			}
			if(this.messageRegister==''){
				msg+=' 您还未输入短信验证码 ';
			}
			if(msg!=''){
				this.info2=msg;
			}else{
				this.$axios.post('http://192.168.108.24:4546/updateUser/updatePwd',{
					phone:this.phone,
				    pwd:this.$md5(this.newpasaword),
				    rePwd:this.$md5(this.renewpasaword),
				    code:this.messageRegister,
				    requestType:"xyGameRequest"
				}).then((res)=>{
					if(res.data.code!=200){
						$('.info2').css('color','#FF4747');
						this.info2=res.data.msg;
					}else{
						$('.info2').css('color','green');
						this.info2='密码修改成功,2秒后跳转到登陆页面'
						setTimeout(()=>{
							this.$router.push('/login');
						},2000);
					}
				}).catch((err)=>{
					console.log(err);
				});
			}
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