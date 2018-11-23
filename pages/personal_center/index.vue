<template>
	<div class="bgColor clearfix ptb3">
		<div class="container bgWhite clearfix">
			<div class="fl div_left">
				<h1>个人中心</h1>
				<ul class="ul_left">
					<li @click="listChange(0)" class="active">我的账号</li>
					<li @click="listChange(1)">账号问题</li>
					<li @click="listChange(2)">修改密码</li>
				</ul>
			</div>
			<div class="fl div_right clearfix">
				<ul class="ul_right">
					<!-- 我的账号 -->
					<li class="list1">
						<!--注册登录-->
						<div>
							<dl class="clearfix">
								<dd><img src="/personal_img/header.png"></dd>
								<dd>
									<p><em>账号：</em><span>星移盒子</span></p>
									<p><em>真实姓名：</em><span>星移盒子</span></p>
								</dd>
							    <dd>
							    	<p><em>手机号码：</em><span>星移盒子</span></p>
									<p><em>身份证号码：</em><span>星移盒子</span></p>
							    </dd>
							</dl>
							<div class="listNone">
								<p class="p font20">账号安全保护</p>
								<ul class="clearfix">
									<li><img src="/personal_img/name.png"></li>
									<li>
										<p class="font24">实名认证</p>
										<p class="font16 gray">根据国家有关规定，您在进入游戏时需要进行实名及防沉迷验证</p>
									</li>
									<li id="fristLi" @click="listChange(1)">防沉迷规则</li>
								</ul>
								<ul class="clearfix">
									<li><img src="/personal_img/phone.png"></li>
									<li>
										<p class="font24">安全手机</p>
										<p class="font16 gray">手机是保护账号安全最重要的手段，请不要泄露您的手机号和手机验证码。</p>
									</li>
									<li @click="show=!show">设置</li>
								</ul>
								<ul class="clearfix">
									<li><img src="/personal_img/sub.png"></li>
									<li>
										<p class="font24">密码设置</p>
										<p class="font16 gray">密码设置 修改原密码，找回密码等功能在此。</p>
									</li>
									<li @click="listChange(2)">设置</li>
								</ul>
							</div>
						</div>
						<!--第三方登录-->
						<div class="none">
							<dl class="clearfix">
								<dd><img src="/personal_img/header.png"></dd>
								<dd>
									<p><em>账号：</em><span>星移盒子</span></p>
									<p><em>真实姓名：</em><span>星移盒子</span></p>
								</dd>
							    <dd>
							    	<p><em>手机号码：</em><span>星移盒子</span></p>
									<p><em>身份证号码：</em><span>星移盒子</span></p>
							    </dd>
							</dl>
							<div class="listNone">
								<p class="p font20">账号安全保护</p>
								<ul class="clearfix">
									<li><img src="/personal_img/name.png"></li>
									<li>
										<p class="font24">实名认证</p>
										<p class="font16 gray">根据国家有关规定，您在进入游戏时需要进行实名及防沉迷验证</p>
									</li>
									<li @click="isShow=!isShow">设置</li>
								</ul>
								<ul class="clearfix">
									<li><img src="/personal_img/phone.png"></li>
									<li>
										<p class="font24">安全手机</p>
										<p class="font16 gray">手机是保护账号安全最重要的手段，请不要泄露您的手机号和手机验证码。</p>
									</li>
									<li @click="show=!show">设置</li>
								</ul>
								<ul class="clearfix">
									<li><img src="/personal_img/sub.png"></li>
									<li>
										<p class="font24">密码设置</p>
										<p class="font16 gray">密码设置 修改原密码，找回密码等功能在此。</p>
									</li>
									<li @click="listChange(2)">设置</li>
								</ul>
							</div>
						</div>
					</li>
					<!-- 账号问题 -->
					<li class="list1 none">
						<dl class="clearfix">
							<dd><img src="/personal_img/header.png"></dd>
							<dd>
								<p><em>账号：</em><span>星移盒子</span></p>
								<p><em>真实姓名：</em><span>星移盒子</span></p>
							</dd>
						    <dd>
						    	<p><em>手机号码：</em><span>星移盒子</span></p>
								<p><em>身份证号码：</em><span>星移盒子</span></p>
						    </dd>
						</dl>
						<div>
							<p class="p font20">中国游戏中心防沉迷系统说明：</p>
                            <ol class="olMg">
                            	<li>成年玩家一次注册成功,将永久解除防沉迷限制，我们将对你的身份资料进行严格保密。注册成功后请退出服务器重新登陆。</li>
                            	<li>对于未进行防沉迷身份提交的玩家，系统将统一视其为未成年玩家（法定年龄未满18岁）。</li>
                            	<li>未成年玩家玩游戏时间累计满3个小时后，所有的游戏收益（积分，经验值、金币等）减半，满5小时后收益为0，累计下线时间超过5小时后，游戏收益恢复正常。成年玩家无此限制。</li>
                            	<li>请尽量提交真实姓名及身份证号,一旦发现为虚假注册后,将重新视其帐号为未成年玩家。</li>
                            	<li>如想查询本人及监护人身份证是否已提交，可进行致电查询，联系电话：0755-28810101。</li>
                            	<li>帐号丢失后，如无帐保，可将您注册的真实姓名的身份证复印件传真至客服核实后,即可重新取回丢失的帐号，但已有帐保的帐号则还是以帐保信息为准。</li>
                            	<li>您也可以移位到客服申诉通道进行帐号申诉。</li>
                            </ol>
						</div>
					</li>
					<!-- 修改密码 -->
					<li class="tc list2 none">
						<p class="font36 black mb49">星移盒子</p>
						<form class="tr w462" method="post">
							<p><span>原密码</span><input type="text" name=""  placeholder="请输入原密码"></p>
							<p><span>新密码</span><input type="text" name="" placeholder="8-16位数字或者是字母加数字"></p>
							<p><span>确认密码</span><input type="text" name="" placeholder="请与新密码保持一致"></p>
							<p class="caution"></p>
							<p class="mt45"><input type="submit" name="" value="确认" class="bgOrange white"></p>
						</form>
					</li>
				</ul>
			</div>
		</div>
		<!-- 实名认证 -->
		<div v-show="isShow">
		    <div class="modal" @click="isShow=!isShow"></div>
			<div class="modal_box tl">
				<p class="font24 grey">实名认证</p>
				<p><input type="text" name="" placeholder="真实姓名"></p>
				<p><input type="text" name="" placeholder="身份证号码"></p>
				<p><button class="active1" @click="isShow=!isShow">确定</button></p>
			</div>
		</div>   
		<!-- 安全手机设置原号码-->
		<div v-show="show">
		    <div class="modal" @click="show=!show"></div>
			<div class="modal_box tl">
				<p class="font24 grey">安全手机设置</p>
				<p><input type="text" name="" placeholder="手机号码" disabled="disabled"></p>
				<p><input type="text" name="" placeholder="验证码" id="num"><input type="button" name="" value="获取验证码" id="but"></p>
				<p><button class="active1" @click="ifshow()">下一步</button></p>
			</div>
		</div>
		<!-- 安全手机设置新号码-->
		<div v-show="fShow">
		    <div class="modal" @click="fShow=!fShow"></div>
			<div class="modal_box tl">
				<p class="font24 grey">安全手机设置</p>
				<p><input type="text" name="" placeholder="新的手机号码"></p>
				<p><input type="text" name="" placeholder="验证码" id="num"><input type="button" name="" value="获取验证码" id="but"></p>
				<p><button class="active1" @click="fShow=!fShow">确定</button></p>
			</div>
		</div>
	</div>
</template>

<script>
export default {
  name: 'personal',
  head(){
		return{
			title:'个人中心'
		}
	},
  data () {
    return {
      // 实名认证
      isShow: false,
      // 旧号码更改
      show:false,
      // 新号码更改
      fShow:false
    }
  },
    methods:{
		listChange(index){
	      $('.ul_left>li').eq(index).addClass('active').siblings().removeClass('active');
	      $(".ul_right>li").hide().eq(index).show();
		},
		ifshow(){
           this.show=false
           this.fShow=true
		}
    }
}
</script>

<style scoped>
span{
	cursor: pointer;
}
.caution{
	color: red;
	font-size: 16px;
}
/*模态框*/
.modal_box input{
	padding-left: 10px;
}
.modal_box p:nth-child(3){
	margin: 17px 0 31px 0;
}
#num{
   width: 255px;
}
#but{
	width: 145px;
	height: 51px;
	background-color: white;
	color: #FD8F24;
	border-left: none;
	padding-left: 0;
}
/*左边列表样式*/
h1{
	padding: 55px 0 30px 42px;
}
.div_left{
	width: 258px;
	height: 764px;
}
.div_right{
	width: 818px;
	border-left: 1px solid #DDDDDD;
	padding: 89px 43px 0 80px;
}
.ul_left li{
	width: 258px;
	height: 73px;
	line-height: 73px;
	color: #666666;
	text-align: center;
	font-size: 22px;
	border-bottom: 1px solid white;
}
.ul_left li:hover{
	color: white;
	background-color: #FD8F24;
}
.ul_left .active{
	color: white;
	background-color: #FD8F24;
}
.active1{
	color: white;
	background-color: #FD8F24;
}
/*修改密码样式*/
span{
	font-size: 16px;
	text-align: right;
	margin-right: 13px;
}
input,button{
	width: 398px;
	padding-left: 10px;
	height: 50px;
	line-height: 50px;
	border: 1px solid #D6D6D6;
}
p{
   margin-bottom: 17px;
}
.w462{
	width: 510px;
}
.list2{
	height: 764px;
}
.mb49{
	margin-bottom: 49px;
}
.mt45{
	margin-top: 44px;
}
/*我的账号样式*/
.list1{
  width: 818px;
}
dd{
	float: left;
	margin-right: 45px;
}
dd p{
	margin-top: 30px;
}
em{
	font-size: 20px;
	color: #999;
}
span{
	font-size: 24px;
}
.p{
	background-color: #EFEFEF;
	line-height: 60px;
	padding-left: 26px;
	margin: 44px 0;
	color: #333;
}
.listNone li{
	float: left;
	margin-bottom: 72px;
}
.listNone li:nth-child(2){
	margin: 20px 0 0 23px;
}
.listNone li:last-child{
	width: 100px;
	height: 40px;
	line-height: 40px;
	color: white;
	background-color: #FD8F24;
	font-size: 18px;
	text-align: center;
	float: right;
	margin-top: 40px;
}
#fristLi{
	background-color: white;
	color: #666666;
	border: 1px solid #EFEFEF;
	width: 121px;
}
.olMg li{
   margin: 0 0 8px 20px;
   font-size: 16px;
   color: #666666
}
</style>