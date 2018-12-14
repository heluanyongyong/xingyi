<template>
	<div>
		<el-row>
			<el-col class="top1" :xs="0" :lg="24">
				<el-row class="container">
					<el-col :xs="0" :lg="24">
						<div class="top1_left">星移网络科技有限公司</div>
						<ul class="top1_right">
							<li v-if="account!='true'">
								<nuxt-link to="/login">登录</nuxt-link>
								 | 
								<nuxt-link to="/login/phone_bind">注册</nuxt-link>
							</li>
							<li v-if="account=='true'" style="position: relative">
								<img class="img1" src="/games_center/pic1.png" alt="" @click="$router.push('/personal_center')">
								<img src="/games_center/vip.png" style="position: absolute;bottom: 4px;left: 10px;width: 16%">
								<span><nuxt-link to="/personal_center">星移盒子</nuxt-link></span>
							</li>
							<li v-if="account=='true'">
								<img src="/games_center/message.png" alt="" @click="$router.push('/message')">
								<span><nuxt-link to="/message">消息</nuxt-link></span>
							</li>
							<li v-if="account=='true'">
								<img src="/games_center/tuichu.png" alt="" @click="logout">
								<span><nuxt-link @click.native="logout" to="/download_center">退出</nuxt-link></span>
							</li>
							<li>
								<div class="pos_div">
									<input type="text" placeholder="请输入内容" @keydown="start_search">
									<img src="/games_center/search.png" alt="" class="inner_img" @click="$router.push('/grabble')">
								</div>
							</li>
						</ul>
					</el-col>	
				</el-row>
			</el-col>
			<!-- <el-col class="top1" :xs="24" :lg="0">
			</el-col> -->
	    </el-row>
	    <el-row>
	    	<el-col class="_top1" :xs="0" :lg="24" ></el-col>
	    </el-row>
	    <el-row>
	    	<el-col class="top2" :xs="0" :lg="24">
	    		<el-row class="container">
	    			<el-col :xs="0" :lg="24">
	    				<img class="navimg" src="/games_center/logo.png" alt="" @click="click_logo">
	    				<div class="game_list">
	    					<ul>
	    						<li>
	    							<div class="top"><nuxt-link @click.native="change_list(0)" to="/games_center/one_game">游戏中心</nuxt-link></div>
	    							<div class="bottom"><nuxt-link @click.native="change_list(0)" to="/games_center/one_game">游戏中心</nuxt-link></div>
	    						</li>
	    						<li>
	    							<div class="top"><nuxt-link @click.native="change_list(1)" to="/download_center">下载中心</nuxt-link></div>
	    							<div class="bottom"><nuxt-link @click.native="change_list(1)" to="/download_center">下载中心</nuxt-link></div>
	    						</li>
	    						<li>
	    							<div class="top"><nuxt-link @click.native="change_list(2)" to="/on_recharge">在线充值</nuxt-link></div>
	    							<div class="bottom"><nuxt-link @click.native="change_list(2)" to="/on_recharge">在线充值</nuxt-link></div>
	    						</li>
	    						<li>
	    							<div class="top"><nuxt-link @click.native="change_list(3)" to="/about_xingyi">关于星移</nuxt-link></div>
	    							<div class="bottom"><nuxt-link @click.native="change_list(3)" to="/about_xingyi">关于星移</nuxt-link></div>
	    						</li>
	    						<li>
	    							<div class="top"><nuxt-link @click.native="change_list(4)" to="/business_work">商务合作</nuxt-link></div>
	    							<div class="bottom"><nuxt-link @click.native="change_list(4)" to="/business_work">商务合作</nuxt-link></div>
	    						</li>
	    						<li>
	    							<div class="top"><nuxt-link @click.native="change_list(5)" to="/contact_us">联系我们</nuxt-link></div>
	    							<div class="bottom"><nuxt-link @click.native="change_list(5)" to="/contact_us">联系我们</nuxt-link></div>
	    						</li>
	    						<li>
	    							<div class="top"><nuxt-link @click.native="change_list(6)" to="/join_us">加入星移</nuxt-link></div>
	    							<div class="bottom"><nuxt-link @click.native="change_list(6)" to="/join_us">加入星移</nuxt-link></div>
	    						</li>
	    					</ul>
	    				</div>
	    			</el-col>
	    		</el-row>
	    		<el-row>
	    			<el-col :xs="12" :lg="0">
	    				<img class="navimg" src="/games_center/logo.png" alt="" @click="click_logo">
	    				<div class="game_list">
	    					<ul>
	    						<li>
	    							<div class="top"><nuxt-link @click.native="change_list(0)" to="/games_center/one_game">游戏中心</nuxt-link></div>
	    							<div class="bottom"><nuxt-link @click.native="change_list(0)" to="/games_center/one_game">游戏中心</nuxt-link></div>
	    						</li>
	    						<li>
	    							<div class="top"><nuxt-link @click.native="change_list(1)" to="/download_center">下载中心</nuxt-link></div>
	    							<div class="bottom"><nuxt-link @click.native="change_list(1)" to="/download_center">下载中心</nuxt-link></div>
	    						</li>
	    						<li>
	    							<div class="top"><nuxt-link @click.native="change_list(2)" to="/on_recharge">在线充值</nuxt-link></div>
	    							<div class="bottom"><nuxt-link @click.native="change_list(2)" to="/on_recharge">在线充值</nuxt-link></div>
	    						</li>
	    						<li>
	    							<div class="top"><nuxt-link @click.native="change_list(3)" to="/about_xingyi">关于星移</nuxt-link></div>
	    							<div class="bottom"><nuxt-link @click.native="change_list(3)" to="/about_xingyi">关于星移</nuxt-link></div>
	    						</li>
	    						<li>
	    							<div class="top"><nuxt-link @click.native="change_list(4)" to="/business_work">商务合作</nuxt-link></div>
	    							<div class="bottom"><nuxt-link @click.native="change_list(4)" to="/business_work">商务合作</nuxt-link></div>
	    						</li>
	    						<li>
	    							<div class="top"><nuxt-link @click.native="change_list(5)" to="/contact_us">联系我们</nuxt-link></div>
	    							<div class="bottom"><nuxt-link @click.native="change_list(5)" to="/contact_us">联系我们</nuxt-link></div>
	    						</li>
	    						<li>
	    							<div class="top"><nuxt-link @click.native="change_list(6)" to="/join_us">加入星移</nuxt-link></div>
	    							<div class="bottom"><nuxt-link @click.native="change_list(6)" to="/join_us">加入星移</nuxt-link></div>
	    						</li>
	    					</ul>
	    				</div>
	    			</el-col>
	    		</el-row>
	    	</el-col>
	    </el-row> 
    	<el-row>
    		<el-col class="_top2" :xs="24" :lg="24"></el-col>
    	</el-row>
	</div>
</template>
<style scoped lang="stylus">
@import '~assets/public.styl'
fixed_top()
	margin 0 auto
	width 100%
	position fixed
	z-index 555
public_placehoder()
top1_h=32px
.top1
	fixed_top()
	font-size 15px
	height top1_h
	background rgba(248,248,248,1)
	color #777
	.top1_left
		line-height top1_h
		float left
		font-size 13px
	.top1_right
		float right
		height top1_h
		li
			float left
			height top1_h
			margin-left 15px
			line-height top1_h
			a
				color #777
				font-size 12px
				&:hover
					color #FD8F24
			img,a
				vertical-align middle
			img
				margin-right 2px
				margin-top 2px
				&:last-child
					margin-right 1px
			.img1
				width 18px
				margin-top 0
			.pos_div
				width 160px
				position relative
				input
					box-sizing content-box
					font-size 12px
					width 80px
					height 22px
					border-radius 10px
					padding 0 40px 0 20px
					border 1px solid rgb(227,227,227)
				.inner_img
					width 10px
					position absolute
					right 32px
					top 50%
					transform translateY(-50%)
					cursor pointer
._top1
	height top1_h
top2_h=65px
.top2
	overflow hidden
	fixed_top()
	height top2_h
	background rgba(255,255,255,1)
	border-top 1px solid #e1e1e1
	.navimg
		margin-left 6px
		cursor pointer
		width 120px
		margin-top 12px
	.game_list
		float right
		height top2_h
		width 80%
		ul
			height top2_h
			float right
			li
				display inline-block
				margin 0 30px
				line-height top2_h
				text-align right
				position relative
				width 72px
				height 80px
				overflow hidden
				.top,.bottom
					position absolute
					transition all 0.5s
					left 0
					cursor default
				.top
					top 0
				.bottom
					top 100%
					a
						color #FD8F24
				&.active
					.top,.bottom
						transition none
				&:hover
					.top
						top -100%
					.bottom
						top 0
				a
					font-size 17px
					color #5e5e5e
					/*路由颜色*/
					&.nuxt-link-active
						color #FD8F24
						border-bottom 5px solid #FD8F24
						padding-bottom 18px
._top2
	height top2_h
</style>
<script>
export default{
	mounted(){
		this.account=sessionStorage.getItem('account');
		// 当前路由不触发样式
		var routes=['games_center','download_center','on_recharge','about_xingyi','business_work','contact_us','join_us'];
		routes.forEach((data,index)=>{
			if(this.$route.path.indexOf(data)>0)
				$('.game_list ul li').eq(index).addClass('active')
		});
	},
	data(){
		return{
			account:''
		}
	},
	methods:{
		click_logo(){
			this.$router.push('/download_center');
		},
		start_search(e){
			if(e.keyCode==13){
				this.$router.push('/grabble');
			}
		},
		logout(){
			sessionStorage.setItem('account',"");
			this.$router.push('/download_center');
			// this.$axios.post('/http://192.168.108.24:4546/user/logOut',{

			// }).then((res)=>{

			// }).catch((err)=>{
			// 	console.log(err);
			// });
			window.location.reload();
		},
		change_list(index){
			$('.game_list ul li').eq(index).addClass('active').siblings().removeClass('active');
		}
	}
}
</script>