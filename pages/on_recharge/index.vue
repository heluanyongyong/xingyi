<template>
	<div class="bgColor ptb3">
		<div class="bgWhite ptb3 container">
			<!-- 头部导航 -->
			<div class="clearfix head_box">
				<ul class="head_ul clearfix fl tc">
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
				<div class="fr font18"><nuxt-link to="/on_recharge/record" tag="a">
					充值记录>>
				</nuxt-link></div>
			</div>
			<div class="recharge_box">
				<!-- 充值到游戏 -->
				<div>
					<table class="w100 margin">
						<tbody>
							<tr class="one">
								<td>充值账号：</td>
								<td>
                                    <input type="text" value="星移" disabled class="read" required="required" @blur="textChange()"><span @click="remove()">更改帐号</span>
								</td>
							</tr>
							<tr class="two">
								<td>充值游戏：</td>
								<td>						
									<el-select v-model="value" placeholder="请选择">
									    <el-option
									      v-for="item in options"
									      :key="item.value"
									      :label="item.label"
									      :value="item.value">
									    </el-option>
									</el-select>
									<el-select v-model="value6" placeholder="请选择">
									    <el-option
									      v-for="item in serving"
									      :key="item.value"
									      :label="item.label"
									      :value="item.value">
									    </el-option>
									</el-select>
								</td>
							</tr>
							<tr class="three">
								<td>选择金额：</td>
								<td>
									<p>
										<span @click="chooseMoney(0)">10</span>
										<span @click="chooseMoney(1)">20</span>
										<span @click="chooseMoney(2)">30</span>
										<span @click="chooseMoney(3)">50</span>
										<span @click="chooseMoney(4)">100</span>
										<span @click="chooseMoney(5)">200</span>
										<span @click="chooseMoney(6)">300</span><br>
										<span @click="chooseMoney(7)">500</span>
										<span @click="chooseMoney(8)">1000</span>
										<span @click="chooseMoney(9)">2000</span>
										<span @click="chooseMoney(10)">3000</span>
										<span @click="chooseMoney(11)">5000</span>
										<span @click="chooseMoney(12)">1000</span>
										<span @click="chooseMoney(13)">2000</span>
									</p>
									<p class="other">
										<em class="font18">其他</em>&nbsp;<input type="text" name="num" class="tc inputText textOne" @click="inputText()" placeholder="请输入整数值" @keyup="textOne()">
									</p>
								</td>
							</tr>
							<tr class="four">
								<td>支付方式：</td>
							    <td class="tabTit">
							    	<button @click="tabChange(0)">微信支付</button>
							    	<button @click="tabChange(1)">支付宝支付</button>
							    	<button @click="tabChange(2)">网银支付</button>
							    </td>
							</tr>
						</tbody>
					</table>
					<ul class="tc tabBd">
						<!-- 微信支付 -->
						<li class="none">
							<p class="font12 mb10 bg_yes">微信支付:<span class="orange">0</span>元</p>
							<p><img src="/recharge_img/phone.png" class="imgA"></p>
						</li>
						<!-- 支付宝支付 -->
						<li class="none">
							<p class="font12 mb10">支付宝支付<span class="orange">0</span>元</p>
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
								<td>我的金元宝：</td>
								<td><span>100</span></td>
							</tr>
							<tr class="three">
								<td>选择金额：</td>
								<td>
									<p>
										<span @click="chooseMoney(14)">10</span>
										<span @click="chooseMoney(15)">20</span>
										<span @click="chooseMoney(16)">30</span>
										<span @click="chooseMoney(17)">50</span>
										<span @click="chooseMoney(18)">100</span>
										<span @click="chooseMoney(19)">200</span>
										<span @click="chooseMoney(20)">300</span><br>
										<span @click="chooseMoney(21)">500</span>
										<span @click="chooseMoney(22)">1000</span>
										<span @click="chooseMoney(23)">2000</span>
										<span @click="chooseMoney(24)">3000</span>
										<span @click="chooseMoney(25)">5000</span>
										<span @click="chooseMoney(26)">1000</span>
										<span @click="chooseMoney(27)">2000</span>
									</p>
									<p class="other">
										<em class="font18">其他</em>&nbsp;<input type="text" name="num" class="tc inputText textTwo" @click="inputText()" placeholder="请输入整数值" @keyup="textTwo()">
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
							    </td>
							</tr>
						</tbody>
					</table>
					<ul class="tc tabBd">
						<!-- 微信支付 -->
						<li class="none">
							<p class="font12 mb10">微信支付:<span class="orange">0</span>金元宝</p>
							<p><img src="/recharge_img/phone.png" class="imgA"></p>
						</li>
						<!-- 支付宝支付 -->
						<li class="none">
							<p class="font12 mb10">支付宝支付<span class="orange">0</span>金元宝</p>
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
								<td>充值账号：</td>
								<td>
                                    <input type="text" value="星移" disabled class="read2" required="required" @blur="textChange2()"><span @click="remove2()">更改帐号</span>
                                    <em class="my">我的金元宝：</em>
									<em class="asset">10000</em>
								</td>	
							</tr>
							<tr class="two">
								<td>充值游戏：</td>
								<td>						
									<el-select v-model="value" placeholder="请选择">
									    <el-option
									      v-for="item in options"
									      :key="item.value"
									      :label="item.label"
									      :value="item.value">
									    </el-option>
									</el-select>
									<el-select v-model="value6" placeholder="请选择">
									    <el-option
									      v-for="item in serving"
									      :key="item.value"
									      :label="item.label"
									      :value="item.value">
									    </el-option>
									  </el-select>
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
										<span @click="chooseMoney(32)">100</span>
										<span @click="chooseMoney(33)">200</span>
										<span @click="chooseMoney(34)">300</span><br>
										<span @click="chooseMoney(35)">500</span>
										<span @click="chooseMoney(36)">1000</span>
										<span @click="chooseMoney(37)">2000</span>
										<span @click="chooseMoney(38)">3000</span>
										<span @click="chooseMoney(39)">5000</span>
										<span @click="chooseMoney(40)">1000</span>
										<span @click="chooseMoney(41)">2000</span>
									</p>
									<p class="other">
										<em class="font18">其他</em>&nbsp;<input type="text" name="num" class="tc inputText textThree" @click="inputText()" @keyup="textThree()">
									</p>
								</td>
							</tr>
						</tbody>
					</table>
					<div class="tc"><button id="but">立即充值</button></div>
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
			<div class="modal_box tl">
				<p class="font24 grey ">信息完善</p>
				<p><input type="text" name="" placeholder="真实姓名"></p>
				<p><input type="text" name="" placeholder="身份证号码"></p>
				<p><input type="text" name="" placeholder="手机号码"></p>
				<p><input type="text" name="" placeholder="验证码" id="num"><input type="button" name="" value="获取验证码" id="num_but"></p>
				<p><input type="button" name="" value="确定" class="white bgOrange"></p>
			</div>
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
      options: [{
                value: '选项1',
                label: '泡泡堂'
              }, {
                value: '选项2',
                label: '跳跳堂'
              }, {
                value: '选项3',
                label: '欢乐麻将'
              }, {
                value: '选项4',
                label: '欢乐斗地主'
              }, {
                value: '选项5',
                label: '绝地求生'
              }],
              value: '',
        serving: [{
                 value: '选项1',
                 label: '一区'
               }, {
                 value: '选项2',
                 label: '二区'
               }, {
                 value: '选项3',
                 label: '三区'
               }, {
                 value: '选项4',
                 label: '四区'
               }, {
                 value: '选项5',
                 label: '五区'
               }, {
                 value: '选项6',
                 label: '六区'
               }],
               value6: ''
    }
  },
  methods:{
  	// 头部导航切换
    headChange(index){
    	$('.head_ul>li').eq(index).addClass('clickColor').siblings().removeClass('clickColor');
    	$(".head_ul>li").children('div').hide().eq(index).show();
    	$(".recharge_box>div").hide().eq(index).show();
    },
  	// 充值到游戏：点击span移除输入框的禁用属性并改变span标签颜色
  	remove(){
  		var text=$(".read").val()
  		$(".read").removeAttr("disabled").val('').focus().val(text).siblings().css("color","#999");
  	},
  	// 金元宝充值到游戏
  	remove2(){
  		var text2=$(".read2").val()
  		$(".read2").removeAttr("disabled").val('').focus().val(text2).siblings("span").css("color","#999");
  	},
  	// 充值到游戏：充值账号的内容被修改
  	textChange(){
  		// 当内容为空时
  		if ($(".read").val()==="") {
  		  //移除输入框的禁用属性，改变span的提示内容 
  		  $(".read").removeAttr("disabled").siblings().text("请完善账号").css("color","#FD8F24");
  		}
  		else {
  		  $(".read").attr("disabled","disabled").siblings().text("更改帐号").css("color","#FD8F24");
  		}
  	},
  	// 金元宝充值到游戏
  	textChange2(){
  		if ($(".read2").val()==="") {
  		  $(".read2").removeAttr("disabled").siblings("span").text("请完善账号").css("color","#FD8F24");
  		}
  		else {
  		  $(".read2").attr("disabled","disabled").siblings("span").text("更改帐号").css("color","#FD8F24");
  		}
  	},
    // 额度选择状态
    chooseMoney(index){
    	// 点击当前额度添加被选状态的类
    	$('.three>td').children('p').children('span').eq(index).addClass('bg_yes').siblings().removeClass('bg_yes');
    	$('.other').css("border","none")
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
  	tabChange(index){
        $('.tabTit>button').eq(index).addClass('bg_yes').siblings().removeClass('bg_yes');
        $(".tabBd>li").hide().eq(index).show();      
  	},
  	// 充值到游戏输入框
  	textOne(){
       // 其他金额输入框的要求 仅数字
		var reg = $(".textOne").val().match(/\d+\.?\d{0,10}/);
		// 当输入值不为空
		if (reg!=null) {
			// 支付额度获取输入的值并向下取整
			$(".orange").text(Math.floor($(".textOne").val())+".00")
			// 当支付额度不为0或输入值为NaN时
          if ($(".orange").text()===0 || $(".textOne").val()==="NaN" || $(".textOne").val()<=0) {
          	// 清空输入值，支付额度为0，显示手机图片
          	$(".textOne").val("")
			$(".orange").text("0")
          	$(".imgA").attr("src","/recharge_img/phone.png")
          }else{
          	$(".imgA").attr("src","/recharge_img/ewm.png")
          }
		}else{
			$(".textOne").val("")
			$(".orange").text("0")
			$(".imgA").attr("src","/recharge_img/phone.png")
		}
  	},
  	// 充值到金元宝输入框
  	textTwo(){
       // 其他金额输入框的要求 仅数字
		var reg = $(".textTwo").val().match(/\d+\.?\d{0,10}/);
		// 当输入值不为空
		if (reg!=null) {
			// 支付额度获取输入的值并向下取整
			$(".orange").text(Math.floor($(".textTwo").val())+".00")
			// 当支付额度为0或输入值为NaN时
          if ($(".orange").text()===0 || $(".textTwo").val()==="NaN" || $(".textTwo").val()<=0) {
          	// 清空输入值，支付额度为0，显示手机图片
          	$(".textTwo").val("")
			$(".orange").text("0")
          	$(".imgA").attr("src","/recharge_img/phone.png")
          }else{
          	$(".imgA").attr("src","/recharge_img/ewm.png")
          }	
		}else{
			$(".textTwo").val("")
			$(".orange").text("0")
			$(".imgA").attr("src","/recharge_img/phone.png")
		}
  	},
  	// 金元宝充值到游戏输入框
  	textThree(){
       // 其他金额输入框的要求 仅数字
		var reg = $(".textThree").val().match(/\d+\.?\d{0,10}/);
		// 对输入带小数点的值向下取整
		$(".textThree").val(Math.floor($(".textThree").val()))
		console.log(item.value)
  	}
  }			
}
</script>

<style scoped>
select{
	width: 275px;
	height: 55px;
	outline: none;
	appearance:none;
    -moz-appearance:none;
    -webkit-appearance:none;
    border: 1px solid #FD8F24;
    padding-left: 15px;
    font-size: 18px;
    background: url(/recharge_img/down.png) no-repeat right 15px center;
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
.head_ul .b{
	display: block;
}
/*向下箭头*/
.arrow-down{
	width:0;
	height:0;
	border-left:10px solid transparent;
	border-right:10px solid transparent;
	border-top:10px solid #FD8F24;
}
/*头部导航*/
.head_box{
	line-height: 82px;
    padding-right: 45px;
    margin-bottom: 64px;
    border-bottom: 1px solid #E7E7E7;
}
.head_ul li{
     float: left;
     width: 260px;
     height: 82px;
     line-height: 82px;
     font-size: 26px;
     color: #999;
     border-left: 1px solid white;
     position: relative; 
}
.head_ul li:hover{
	background-color: #FD8F24;
	color: white;
}
.head_ul .clickColor{
	background-color: #FD8F24;
	color: white;
}
.head_ul div{
	display: none;
	position: absolute;
    left: 125px;
}
/*充值详情*/
.margin{
	margin: 0 73px;
}
td,button,input{
	font-size: 18px;
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
input,button{
	outline: none;
	border: 1px solid #DBDBDB;
	height: 50px;
	line-height: 48px;	
}
button{
	padding: -1px 10px;
}
input{
	padding: 0 10px;
}
.one span{
	font-size: 22px;
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
 	background-color: #F8F8F8;
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
 	height: 52px;
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


/*.tabTit button:hover{
	background: url(/recharge_img/yes.png) no-repeat right -1px top;
 	border: 1px solid #FD8F24;
}*/
</style>