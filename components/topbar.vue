<template>
	<div>
		<div class="top1">
			<div class="container">
				<div class="top1_left">星移网络科技有限公司</div>
				<ul class="top1_right">
					<li v-if="account!='true'">
						<nuxt-link to="/login">登录</nuxt-link>
						 | 
						<nuxt-link to="/login/register">注册</nuxt-link>
					</li>
					<li v-if="account=='true'">
						<img src="/games_center/pic1.png" alt="" @click="$router.push('/personal_center')">
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
			</div>
    	</div>
    	<div class="_top1"></div>
    	<div class="top2">
			<div class="container">
				<img class="navimg" src="/games_center/logo.png" alt="" @click="click_logo">
				<div class="game_list">
					<ul>
						<li>
							<div class="top"><nuxt-link @click.native="change_list(0)" to="/games_center">游戏中心</nuxt-link></div>
							<div class="bottom"><nuxt-link @click.native="change_list(0)" to="/games_center">游戏中心</nuxt-link></div>
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
							<div class="top"><nuxt-link @click.native="change_list()" to="/join_us">加入星移</nuxt-link></div>
							<div class="bottom"><nuxt-link @click.native="change_list()" to="/join_us">加入星移</nuxt-link></div>
						</li>
					</ul>
				</div>
			</div>
    	</div>
    	<div class="_top2"></div>
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
top1_h=50px
.top1
	fixed_top()
	font-size 15px
	height top1_h
	background rgba(248,248,248,1)
	color #777
	.top1_left
		line-height top1_h
		float left
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
				&:hover
					color #FD8F24
			img,a,span
				vertical-align middle
			img
				margin-right 2px
				&:last-child
					margin-right 1px
			.pos_div
				width 160px
				position relative
				input
					box-sizing content-box
					font-size 12px
					width 100px
					height 30px
					border-radius 10px
					padding 0 40px 0 20px
				.inner_img
					width 10px
					position absolute
					right 15px
					top 50%
					transform translateY(-50%)
					cursor pointer
._top1
	height top1_h
top2_h=80px
.top2
	fixed_top()
	height top2_h
	background rgba(255,255,255,1)
	border-top 1px solid #e1e1e1
	.navimg
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
					font-size 18px
					color #888
					/*路由颜色*/
					&.nuxt-link-active
						color #FD8F24
						border-bottom 5px solid #FD8F24
						padding-bottom 25px
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
			window.location.reload();
		},
		change_list(index){
			$('.game_list ul li').eq(index).addClass('active').siblings().removeClass('active');
		}
	}
}
</script>