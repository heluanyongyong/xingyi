<template>
	<div class="bgColor ptb3" @click="isShow=false">
		<!-- 头部导航 -->
		<div class="clearfix head_box container">
			<img src="/recharge_img/banner.png">
			<ul class="head_ul clearfix">
				<li @click="headChange(0)" class="clickColor">
					充值到游戏
                    <div class="arrow-down b"></div>
				</li>
				<li @click="headChange(1)">
					充值到金元宝
                   <div class="arrow-down"></div>
				</li>
				<li @click="headChange(2)">
				   金元宝充值到游戏
				   <div class="arrow-down"></div>
				</li>
			</ul>
		</div>
		<div class="bgWhite container ptb3">
			<div class="recharge_box">
				<!-- 充值到游戏 -->
				<div>
					<table class="w100 margin">
						<tbody>
							<tr class="one">
								<td>充值账号：</td>
								<td>
                                    <input type="text" value="星移" disabled class="read" required="required" @blur="textChange('.read')"><span @click="remove('.read')">更改帐号</span>
								</td>
							</tr>
							<tr class="two">
								<td>充值游戏：</td>
								<td>	
								   	<!-- 选择游戏 -->
									<div class="dis rel" @click.stop="isShow=!isShow">
										<div class="select_box">
											<span class="oranges game1">请选择游戏</span>
			                                <em class="border"></em>
										</div>
										<!-- <img src="/recharge_img/img.png" class="abs_select"  v-show="isShow"> -->
										<ul class="abs_select select1" v-show="isShow">
											<li @click="selectGame(0,'.select1','.game1')">
												<img src="/recharge_img/game.png" class="mid">
												<span>寻宝达人</span>
											</li>
										</ul>
										<img src="/recharge_img/triangle.png" class="abs_triangle" v-show="isShow">
									</div>
									<!-- 选择服区 -->
									<!-- <div class="dis ml40">
										<div class="select_box">
											<span class="oranges">请选择游戏</span>
			                                <em class="border"></em>
										</div>
									</div> -->
								</td>
							</tr>
							<tr class="three">
								<td>
									<div>选择金额：</div>
                                    <div>(单位/元)</div>
								</td>
								<td>
									<p>
										<span @click="chooseMoney(0)">10</span>
										<span @click="chooseMoney(1)">20</span>
										<span @click="chooseMoney(2)">30</span>
										<span @click="chooseMoney(3)">50</span>
										<span @click="chooseMoney(4)">66</span>
										<span @click="chooseMoney(5)" class="bg_yes">88</span>
										<span @click="chooseMoney(6)">100</span><br>
										<span @click="chooseMoney(7)">150</span>
										<span @click="chooseMoney(8)">200</span>
										<span @click="chooseMoney(9)">300</span>
										<span @click="chooseMoney(10)">500</span>
										<span @click="chooseMoney(11)">520</span>
										<span @click="chooseMoney(12)">1000</span>
										<span @click="chooseMoney(13)">1314</span>
									</p>
									<p class="other">
										<em class="font18">其他</em>&nbsp;<input type="text" name="num" class="tc inputText textOne" @click="inputText()" placeholder="请输入整数值" @keyup="moneyChange('.textOne')">
									</p>
								</td>
							</tr>
							<tr class="four">
								<td>支付方式：</td>
							    <td class="tabTit">
							    	<button @click="tabChange(0,'.game1')">微信支付</button>
							    	<button @click="tabChange(1,'.game1')">支付宝支付</button>
							    	<button @click="tabChange(2,'.game1')">网银支付</button>
							    	<nuxt-link to="/on_recharge/record" tag="a" class="oranges">充值记录</nuxt-link>
							    </td>
							</tr>
						</tbody>
					</table>
					<!-- 未选择游戏时的提示文字 -->
					<div class="gameHint tc ptb3 oranges none">请选择游戏</div>
					<ul class="tc tabBd">
						<!-- 微信支付 -->
						<li class="none">
							<p class="font12 mb10 bg_yes">微信支付:<span class="orange">88.00</span>元</p>
							<p><img src="/recharge_img/ewm.png" class="imgA"></p>
						</li>
						<!-- 支付宝支付 -->
						<li class="none">
							<p class="font12 mb10">支付宝支付：<span class="orange">88.00</span>元</p>
							<p><img src="/recharge_img/ewm.png"></p>
						</li>
						<!-- 网银支付 -->
						<li class="clearfix none">
							<div class="fl ml1 font18">选择银行：</div>
							<div class="five fl ml2">
								<p>
									<span><input type="radio" name="bank"><img src="/recharge_img/img1.png"></span>
									<span><input type="radio" name="bank"><img src="/recharge_img/img2.png"></span>
									<span><input type="radio" name="bank"><img src="/recharge_img/img3.png"></span>
								</p>
								<p>
									<span><input type="radio" name="bank"><img src="/recharge_img/img4.png"></span>
									<span><input type="radio" name="bank"><img src="/recharge_img/img5.png"></span>
									<span><input type="radio" name="bank"><img src="/recharge_img/img6.png"></span>
								</p>
								<p>
									<span><input type="radio" name="bank"><img src="/recharge_img/img7.png"></span>
									<span><input type="radio" name="bank"><img src="/recharge_img/img8.png"></span>
									<span><input type="radio" name="bank"><img src="/recharge_img/img9.png"></span>
								</p>
								<p>
									<span><input type="radio" name="bank"><img src="/recharge_img/img10.png"></span>
									<span><input type="radio" name="bank"><img src="/recharge_img/img11.png"></span>
									<span><input type="radio" name="bank"><img src="/recharge_img/img12.png"></span>
								</p>
							</div>
							<div><button id="but">立即充值</button></div>
						</li>
					</ul>
				</div>
				<!-- 充值到金元宝 -->
				<div class="none">
					<table class="w100 margin">
						<tbody>
							<tr class="one">
								<td>充值账号：</td>
								<td class="item">
                                    <input type="text" value="星移" disabled class="read2" required="required" @blur="textChange('.read2')"><span @click="remove('.read2')">更改帐号</span>
                                    <em class="my">我的金元宝：</em>
									<em class="asset">10000</em>
								</td>
							</tr>
							<tr class="three">
								<td>
									<div>选择金额：</div>
                                    <div>(单位/元)</div>
                                </td>
								<td>
									<p>
										<span @click="chooseMoney(14)">10</span>
										<span @click="chooseMoney(15)">20</span>
										<span @click="chooseMoney(16)">30</span>
										<span @click="chooseMoney(17)">50</span>
										<span @click="chooseMoney(18)">66</span>
										<span @click="chooseMoney(19)" class="bg_yes">88</span>
										<span @click="chooseMoney(20)">100</span><br>
										<span @click="chooseMoney(21)">150</span>
										<span @click="chooseMoney(22)">200</span>
										<span @click="chooseMoney(23)">300</span>
										<span @click="chooseMoney(24)">500</span>
										<span @click="chooseMoney(25)">520</span>
										<span @click="chooseMoney(26)">1000</span>
										<span @click="chooseMoney(27)">1314</span>
									</p>
									<p class="other">
										<em class="font18">其他</em>&nbsp;<input type="text" name="num" class="tc inputText textTwo" @click="inputText()" placeholder="请输入整数值" @keyup="moneyChange('.textTwo')">
									</p>
								</td>
							</tr>
							<tr>
								<td>金元宝说明：</td>
								<td><span class="oranges">金元宝比例1:1，例如充值100元得100金元宝；</span></td>
							</tr>
							<tr class="four">
								<td>支付方式：</td>
							    <td class="tabTit">
							    	<button @click="tabChange(3)">微信支付</button>
							    	<button @click="tabChange(4)">支付宝支付</button>
							    	<button @click="tabChange(5)">网银支付</button>
							    	<nuxt-link to="/on_recharge/record" tag="a" class="oranges">充值记录</nuxt-link>
							    </td>
							</tr>
						</tbody>
					</table>
					<ul class="tc tabBd">
						<!-- 微信支付 -->
						<li class="none">
							<p class="font12 mb10">微信支付:<span class="orange">88.00</span>金元宝</p>
							<p><img src="/recharge_img/ewm.png" class="imgA"></p>
						</li>
						<!-- 支付宝支付 -->
						<li class="none">
							<p class="font12 mb10">支付宝支付：<span class="orange">88.00</span>金元宝</p>
							<p><img src="/recharge_img/ewm.png" class="imgA"></p>
						</li>
						<!-- 网银支付 -->
						<li class="clearfix none">
							<div class="fl ml1 font18">选择银行：</div>
							<div class="five fl ml2">
								<p>
									<span><input type="radio" name="bankbank"><img src="/recharge_img/img1.png"></span>
									<span><input type="radio" name="bankbank"><img src="/recharge_img/img2.png"></span>
									<span><input type="radio" name="bankbank"><img src="/recharge_img/img3.png"></span>
								</p>
								<p>
									<span><input type="radio" name="bankbank"><img src="/recharge_img/img4.png"></span>
									<span><input type="radio" name="bankbank"><img src="/recharge_img/img5.png"></span>
									<span><input type="radio" name="bankbank"><img src="/recharge_img/img6.png"></span>
								</p>
								<p>
									<span><input type="radio" name="bank"><img src="/recharge_img/img7.png"></span>
									<span><input type="radio" name="bank"><img src="/recharge_img/img8.png"></span>
									<span><input type="radio" name="bank"><img src="/recharge_img/img9.png"></span>
								</p>
								<p>
									<span><input type="radio" name="bank"><img src="/recharge_img/img10.png"></span>
									<span><input type="radio" name="bank"><img src="/recharge_img/img11.png"></span>
									<span><input type="radio" name="bank"><img src="/recharge_img/img12.png"></span>
								</p>
							</div>
							<div><button id="but">立即充值</button></div>
						</li>
					</ul>
				</div>
				<!-- 金元宝充值到游戏 -->
				<div class="none">
					<table class="w100 margin">
						<tbody>
							<tr class="one">
								<!-- <td>充值账号：</td>
								<td class="item">
                                    <input type="text" value="星移" disabled class="read2" required="required" @blur="textChange2()"><span @click="remove2()">更改帐号</span>
                                    <em class="my">我的金元宝：</em>
									<em class="asset">10000</em>
									<nuxt-link to="/on_recharge/record" tag="a" class="oranges ml40" @click="del(this)">充值记录</nuxt-link>
								</td> -->
								<td>我的金元宝：</td>
								<td>
									<span>100</span>
									<nuxt-link to="/on_recharge/record" tag="a" class="oranges ml40" @click="del(this)">充值记录</nuxt-link>
								</td>	
							</tr>
							<tr class="two">
								<td>充值游戏：</td>
								<td>						
									<!-- 选择游戏 -->
									<div class="dis rel" @click.stop="isShow=!isShow">
										<div class="select_box">
											<span class="oranges game2">请选择游戏</span>
			                                <em class="border"></em>
										</div>
										<!-- <img src="/recharge_img/img.png" class="abs_select"  v-show="isShow"> -->
										<ul class="abs_select select2" v-show="isShow">
											<li @click="selectGame(0,'.select2','.game2')">
												<img src="/recharge_img/game.png" class="mid">
												<span>寻宝达人</span>
											</li>
										</ul>
										<img src="/recharge_img/triangle.png" class="abs_triangle" v-show="isShow">
									</div>
									<!-- 选择服区 -->
									<!-- <div class="dis ml40">
										<div class="select_box">
											<span class="oranges">请选择游戏</span>
			                                <em class="border"></em>
										</div>
									</div> -->
								</td>
							</tr>
							<tr class="three">
								<td>选择金元宝：</td>
								<td>
									<p>
										<span @click="chooseMoney(28)">10</span>
										<span @click="chooseMoney(29)">20</span>
										<span @click="chooseMoney(30)">30</span>
										<span @click="chooseMoney(31)">50</span>
										<span @click="chooseMoney(32)">66</span>
										<span @click="chooseMoney(33)" class="bg_yes">88</span>
										<span @click="chooseMoney(34)">100</span><br>
										<span @click="chooseMoney(35)">150</span>
										<span @click="chooseMoney(36)">200</span>
										<span @click="chooseMoney(37)">300</span>
										<span @click="chooseMoney(38)">500</span>
										<span @click="chooseMoney(39)">520</span>
										<span @click="chooseMoney(40)">1000</span>
										<span @click="chooseMoney(41)">1314</span>
									</p>
									<p class="other">
										<em class="font18">其他</em>&nbsp;<input type="text" name="num" class="tc inputText textThree" placeholder="请输入整数值" @click="inputText()" @keyup="moneyChange('.textThree')">
									</p>

								</td>
							</tr>
						</tbody>
					</table>
					<!-- 未选择游戏时的提示文字 -->
					<div class="gameHint tc ptb3 oranges none">请选择游戏</div>
					<div class="tc" @click="nowRecharge('.game2')"><button id="but">立即充值</button></div>
				</div>
			</div>
			<!-- 提示 -->
			<div class="tc ptb3 hint"></div>
		</div>
		<!-- 信息完善认证 -->
		<div class="none">
			<!-- 背景框 -->
		    <div class="modal"></div>
		    <!-- 内容 -->
			<form class="modal_box tl" method="post" action="">
				<p class="font24 grey ">信息完善</p>
				<p><input type="text" name="" placeholder="真实姓名"></p>
				<p><input type="text" name="" placeholder="身份证号码"></p>
				<p><input type="text" name="" placeholder="手机号码"></p>
				<p><input type="text" name="" placeholder="验证码" id="num"><input type="button" name="" value="获取验证码" id="num_but"></p>
				<p><input type="button" name="" value="确定" class="white bgOrange"></p>
			</form>
		</div>
	</div>
</template>

<script>
export default {
  name: 'internetbank',
  head(){
		return{
			title:'在线充值'
		}
	},
  data () {
    return {
      isShow: false,
    }
  },
  methods:{
  	// 选择游戏
  	selectGame(index,perent,child){
  		var perent=$(""+perent)
  		var child=$(""+child)
  		child.text(perent.children('li').eq(index).children('span').text())
        $('.gameHint').hide()
  	},
  	// 头部导航切换
    headChange(index){
    	$('.head_ul>li').eq(index).addClass('clickColor').siblings().removeClass('clickColor');
    	$(".head_ul>li").children('div').hide().eq(index).show();
    	$(".recharge_box>div").hide().eq(index).show();
    },
  	// 点击span移除输入框的禁用属性并改变span标签颜色
  	remove(name){
  		var name=$(""+name);
  		var text=name.val()
  		name.removeAttr("disabled").val('').focus().val(text).siblings().css("color","#999");
  	},
  	// 充值账号的内容被修改
  	textChange(name){
  		var name=$(""+name);
  		// 当内容为空时
  		if (name.val()==="") {
  		  //移除输入框的禁用属性，改变span的提示内容 
  		  name.removeAttr("disabled").siblings('span').text("请完善账号").css("color","#FD8F24");
  		}
  		else {
  		  name.attr("disabled","disabled").siblings('span').text("更改帐号").css("color","#FD8F24");
  		}
  	},
    // 额度选择状态
    chooseMoney(index){
    	// 点击当前额度添加被选状态的类
    	$('.three>td').children('p').children('span').eq(index).addClass('bg_yes').siblings().removeClass('bg_yes');
    	$('.other').css("border","1px solid #DBDBDB")
    	// 获取被选择的支付额度
    	$(".orange").text($('.three>td').children('p').children('span').eq(index).text()+".00")
    	if ($(".orange").text()===0) {
    		// 额度为0时显示手机图片
    		$(".imgA").attr("src","/recharge_img/phone.png")
    	}else{
    		// 否则显示对应的支付二维码
    		$(".imgA").attr("src","/recharge_img/ewm.png")
    	}
    	$(".inputText").val("")
    },
    // 其他金额输入框被点击时
    inputText(){
        $('.three>td').children('p').children('span').removeClass('bg_yes');
        $('.other').css("border","1px solid #FD8F24")
    },
    // 支付方式切换
  	tabChange(index,name){
  		var name=$(""+name)
  		// 当充值游戏未选择时
       if (name.text()=="请选择游戏") {
       	// 显示文字提示
       	$('.gameHint').show()
       }else{
       	$('.tabTit>button').eq(index).addClass('bg_yes').siblings().removeClass('bg_yes');
        $(".tabBd>li").hide().eq(index).show();
        $('.gameHint').hide()
       }         
  	},
  	// 其他金额输入框
  	moneyChange(name){
  		var name=$(""+name);
       // 其他金额输入框的要求 仅数字
		var reg = name.val().match(/\d+\.?\d{0,10}/);
		// 当输入值不为空
		if (reg!=null) {
			// 支付额度获取输入的值并向下取整
			$(".orange").text(Math.floor(name.val())+".00")
			// 当支付额度为0或输入值为NaN时
          if ($(".orange").text()===0 || name.val()==="NaN" || name.val()<=0) {
          	// 清空输入值，支付额度为0，显示手机图片
          	name.val("")
			$(".orange").text("0")
          	$(".imgA").attr("src","/recharge_img/phone.png")
          }else{
          	$(".imgA").attr("src","/recharge_img/ewm.png")
          }	
		}else{
			name.val("")
			$(".orange").text("0")
			$(".imgA").attr("src","/recharge_img/phone.png")
		}
  	},
  	// 金元宝充值到游戏-立即充值
  	nowRecharge(name){
  	   var name=$(""+name);
       if (name.text()=="请选择游戏") {
       	$('.gameHint').show()
       	console.log(222)
       }
  	}
  }			
}
</script>

<style scoped>
/*头部切换*/
.head_ul .b{
	display: block;
}
.head_ul li{
     float: left;
     height: 38px;
     font-size: 20px;
     color: #333;
     margin: 43px 0 20px 216px;
}
.head_ul li:hover{
	color: #FD8F24;
	border-bottom: 3px solid #FD8F24;
}
.head_ul .clickColor{
	color: #FD8F24;
	border-bottom: 3px solid #FD8F24;
}
.head_ul div{
	display: none;
	position: absolute;
    left: 125px;
}
/*游戏选择*/
.dis{
  display: inline-block;
}
.select_box{
	width: 273px;
	line-height: 55px;
    border: 1px solid #FD8F24;
    border-radius: 5px;
    padding-left: 20px;
    font-size: 18px;
    margin: 0;
/*    position: relative;*/
    background: url(/recharge_img/down.png) no-repeat right 15px center;
    cursor:pointer;
}
.abs_select{
	border: 1px solid rgba(220,220,220,1);
	padding: 10px;
	background-color: rgba(255,255,255,1);
	position: absolute;
	top: 72px;
	box-shadow:0px 3px 7px 0px rgba(0, 0, 0, 0.35);
}
.abs_select>li{
    height: 40px;
   
    line-height: 40px;
	width: 253px;
	color: #333;
	font-size: 18px;
}
.abs_select>li:hover{
	color: #FD8F24;
}
.abs_triangle{
	position: absolute;
	left: 50px;
    bottom: -17px
}
.border{
	display: inline-block;
	width: 1px;
	height: 30px;
	background:rgba(253,143,36,1);
	margin: 13px 52px 0 0;
	float: right;
}
.ml40{
	margin-left: 40px;
}
td .asset{
	font-size: 26px;
	font-weight: bold;
	color: #FD8F24;
}
.my{
	margin-left: 75px;
}
.hint{
	font-size: 14px;
	color: red;
}
a:hover{
	color:#FD8F24;
}
.margin{
	margin: 0 73px;
}
/*充值内容*/
td,input{
	font-size: 18px;
	color:#333;
}
li>p{
	font-size: 24px;
}
.rel{
	position: relative;
}
.abs{
	position: absolute;
	top: 35px;
	left: 10px;
}
input{
	outline: none;
	border: 1px solid #DBDBDB;
	line-height: 48px;
	width: 206px;	
}
.read,.read2{
	height: 48px;
}
button{
	width: 155px;
	line-height: 48px;
	font-size: 18px;
	color: #333;
	outline: none;
	border: 1px solid #DBDBDB;
	background-color: rgba(252,252,252,1);
	padding: -1px 10px;
}
input{
	padding: 0 10px;
}
.one span{
	font-size: 18px;
	color: #FD8F24;
	margin-left: 22px;
}
 .two input, .two button{
 	border: 1px solid #FD8F24;
 }
 .two button{
 	border-left: none;
 	background-color: #FFF0DA;
 }
 .other input{
 	width: 287px;
 	height: 38px;
 	line-height: 38px;
 	margin-left: 10px;
 }
 .three span{
 	background-color: rgba(252,252,252,1);
 	width: 113px;
 	height: 48px;
 	line-height: 48px;
 	display: inline-block;
 	text-align: center;
 	margin-right: 15px;
 	overflow: hidden;
 	border: 1px solid #DBDBDB
 }
 .three span:hover,.tabTit button:hover{
 	/*background: url(/recharge_img/yes.png) no-repeat right -1px top;*/
 	border: 1px solid #FD8F24;
 	background-color: #F8F8F8;
 }
 .three p{
 	margin-bottom: 10px;
 }
 .three p:last-child{
 	width: 368px;
 	border: 1px solid #DBDBDB;
 	background-color: #F8F8F8;
 	padding: 5px 0;
 	margin: 0;
 	padding-left: 10px;
 	font-size: 9px;
 	height: 48px;
 }
 .four button{
 	background-color: #fff;
 	margin-right: 20px;
 	padding: 0 24px;
 }
 .five img{
 	vertical-align: middle;
 	margin: 0 26px 17px 10px;
 }
 .five input{
 	vertical-align: middle;
 	width: 18px;
 	height: 18px;
 }
 td{
 	padding: 10px;
 }
 tr{
 	width: 100%;
 }
table .bg_yes{
 	background: url(/recharge_img/yes.png) no-repeat right -1px top;
 	border: 1px solid #FD8F24;
 	background-color: #F8F8F8;
 }
 .sub{
 	font-size: 10px;
 	background-color: #FD8F24;
 	border: none;
 	color: white;
    text-align: center;
    padding: 1% 10%;
    margin-top: 30px;
    border-radius: 10px;
 }
 .orange{
 	color: #FD8F24;
 	margin-left: 10px;
 }
 .mb10{
 	margin-bottom: 10px;
 }
.ml1{
	margin-left: 82px;
}
.ml2{
	margin-left: 35px;
}
.tabBd{
	margin-top: 20px;
}
#but{
	width:300px;
	height:60px;
	background:rgba(253,143,36,1);
	border-radius:6px;
	color: white;
	margin-top: 85px;
}
/*信息完善*/
.modal_box{
	height: 540px;
}
.modal_box input{
	width: 398px;
	height: 50px;
}
.modal_box p:nth-child(1){
	padding-bottom: 23px;
	border-bottom: 1px solid #EEEEEE;
	margin-right: 63px;
	margin-bottom: 33px
}
.modal_box p:nth-child(6){
	margin-top: 30px
}
.modal_box p{
    margin-bottom: 17px;
}
#num{
	width: 254px;
}
#num_but{
	width: 144px;
	background-color: white;
	color: #FD8F24;
	border-left: none;
}



/*向上三角*/
.arrow-up{
    width:0;
    height:0;
    border-left:30px solid transparent;
    border-right:30px solid transparent;
    border-bottom:30px solid #f00;
}
</style>