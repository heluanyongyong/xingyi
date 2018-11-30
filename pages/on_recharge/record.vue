<template>
	<div class="bgColor ptb3">
		<div class="container bgWhite padding">
			<div class="mb33 font28 black">充值记录</div>
			<div class="wBtBorder box">
				<ul class="top_ul clearfix">
					<li @click="liChange(0)" class="liClick">充值到游戏</li>
					<li @click="liChange(1)">充值到金元宝</li>
					<li @click="liChange(2)">金元宝充游戏</li>
				</ul>
			</div>
			<!-- 充值到游戏 -->
			<table class="black">
				<thead class="font18">
					<tr>
						<th>日期</th>
						<th>交易方式</th>
						<th>充值金额</th>
						<th>充值帐号</th>
						<th>充值游戏</th>
						<th>游戏区服</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td>2018-11-10</td>
						<td>微信支付</td>
						<td><span>2000</span>元</td>
						<td>星移多多</td>
						<td>绝地求生</td>
						<td>风云3区</td>
					</tr>
					<tr>
						<td>2018-11-10</td>
						<td>微信支付</td>
						<td><span>2000</span>元</td>
						<td>星移多多</td>
						<td>绝地求生</td>
						<td>风云3区</td>
					</tr>
					<tr>
						<td>2018-11-10</td>
						<td>微信支付</td>
						<td><span>2000</span>元</td>
						<td>星移多多</td>
						<td>绝地求生</td>
						<td>风云3区</td>
					</tr>
					<tr>
						<td>2018-11-10</td>
						<td>微信支付</td>
						<td><span>2000</span>元</td>
						<td>星移多多</td>
						<td>绝地求生</td>
						<td>风云3区</td>
					</tr>
				</tbody>
			</table>
			<!-- 充值到金元宝 -->
			<table class="black none">
				<thead class="font18">
					<tr>
						<th>日期</th>
						<th>交易方式</th>
						<th>充值金额</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td>2018-11-10</td>
						<td>微信支付</td>
						<td><span>2000</span>元</td>
					</tr>
					<tr>
						<td>2018-11-10</td>
						<td>微信支付</td>
						<td><span>2000</span>元</td>
					</tr>
					<tr>
						<td>2018-11-10</td>
						<td>微信支付</td>
						<td><span>2000</span>元</td>
					</tr>
					<tr>
						<td>2018-11-10</td>
						<td>微信支付</td>
						<td><span>2000</span>元</td>
					</tr>
				</tbody>
			</table>
			<!-- 金元宝充游戏 -->
			<table class="black none">
				<thead class="font18">
					<tr>
						<th>日期</th>
						<th>充值金额</th>
						<th>充值帐号</th>
						<th>充值游戏</th>
						<th>游戏区服</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td>2018-11-10</td>
						<td><span>2000</span>元</td>
						<td>星移多多</td>
						<td>绝地求生</td>
						<td>风云3区</td>
					</tr>
					<tr>
						<td>2018-11-10</td>
						<td><span>2000</span>元</td>
						<td>星移多多</td>
						<td>绝地求生</td>
						<td>风云3区</td>
					</tr>
					<tr>
						<td>2018-11-10</td>
						<td><span>2000</span>元</td>
						<td>星移多多</td>
						<td>绝地求生</td>
						<td>风云3区</td>
					</tr>
					<tr>
						<td>2018-11-10</td>
						<td><span>2000</span>元</td>
						<td>星移多多</td>
						<td>绝地求生</td>
						<td>风云3区</td>
					</tr>
				</tbody>
			</table>
			<div class="tc">
				<el-pagination
				  background
				  layout="prev, pager, next"
				  :page-size="20"
				  :total="100">
				</el-pagination>
			</div>
		</div>
	</div>
</template>

<script>
export default {
  name: 'honor',
  head(){
		return{
			title:'充值记录'
		}
	},
  data () {
    return {
    	
    }
  },
  methods:{
  	liChange(index){
  		$('.top_ul>li').eq(index).addClass('liClick').siblings().removeClass('liClick');
        $("table").hide().eq(index).show();
  	  }
  }
}
</script>

<style scoped>
.padding{
	padding: 50px 46px 50px 60px;
}
.mb33{
	margin-bottom: 33px;
}
.box{
	height: 52px;
}
.top_ul li{
	float: left;
	font-size: 22px;
	color: #999;
	margin-right: 133px;
	padding-bottom: 16px;
}
.top_ul li:hover{
	color: #FD8F24;
	border-bottom: 3px solid #FD8F24;
}
.top_ul .liClick{
   color: #FD8F24;
   border-bottom: 3px solid #FD8F24;
}
table{
	width: 100%;
	text-align: center;
	margin-top: 17px;
	margin-bottom: 45px;
}
th{
   padding: 16px 0;
   background-color: #F5F5F5;
   font-weight: 500;
   color: #333;
}
td{
	font-size: 14px;
	padding: 16px 0;
	color: #5e5e5e;
	border-bottom: 1px solid #DDDDDD
}
</style>