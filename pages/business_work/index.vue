<template>
	<div>
		<div class="top">
			<img src="/shangwuhezuo/banner.png" alt="">
		</div>
		<!-- <div class="center">
			<div class="container">
				<h2 class="title">合作伙伴</h2>
				<div class="canvas">
					<img src="/shangwuhezuo/xuebi.png" alt="">
				</div>
			</div>
		</div> -->
		<div class="bottom">
			<div class="container">
				<p class="title black">商务合作</p>
				<div class="left">
					<p class="p1">星移信息</p>
					<p>全球授权（客户端/页游端/手游端）</p>
					<p>全球引进（高质量手游端游戏/知名IP联合开发/其他相关合作业务）</p>
					<p>Tel: +86-755-86958281</p>
					<p>Email: xuhua@mokylin.com</p>
				</div>
				<div class="right">
					<p class="p1">星移信息</p>
					<p class="d1">公司名称<input type="text"></p>
					<div>
						<p class="d1 d2_l">您的姓名<input type="text"></p>
						<p class="d1 d2_r">您的电话<input type="text"></p>
					</div>
					<div class="clear"></div>
					<p class="d1 d3">请输入留言<input type="text"></p>
					<div class="button"><button @click="modal_change = true">提交</button></div>
					<el-dialog
						:visible.sync="modal_change"
						width="500px"
						:show-close="false"
						:close-on-click-modal="false"
						>
						<div class="dialog">
							<div class="dialog-content">
								<img src="/login/pass.png" alt=""><span>提交成功</span>
							</div>
							<div class="clear"></div>
							<div class="dialog-bottom">
								<button @click="click_success">我知道了</button>
							</div>
						</div>
					</el-dialog>
				</div>
				<div class="clear"></div>
			</div>
		</div>
	</div>
</template>
<style scoped lang="stylus">
@import '~assets/public.styl'
.title
	font-size 28px
	letter-spacing 1px
	margin-bottom 40px
.top
	img
		width 100%
.center
	background rgba(248,248,248,1)
	.container
		text-align center
		padding 80px 0
		.canvas
			width 100%
			/*text-align center*/
			margin 0 auto
			img
				width 100%
.bottom
	p.title
		font-size 28px
	background #fff
	.container
		font-size 14px
		text-align center
		padding 40px 0 60px 0
		.p1
			font-size 16px
			margin-bottom 15px
		.left
			float left
			text-align left
			margin-top 100px
			color #666
			p
				line-height 28px
		.right
			float right
			padding 30px 50px
			width 570px
			border 1px solid rgb(238,238,238)
			text-align left
			color #666
			public_inputWidth(size)
				input
					width size
					/*border 1px solid red*/
					height 50px
					padding 0 15px
			.d1
				border-bottom 1px solid rgb(208,208,208)
				/*padding-bottom 10px*/
				/*margin-bottom 20px*/
				public_inputWidth(404px)
			.d2_l
				width 42%
				float left
				public_inputWidth(132px)
			.d2_r
				width 42%
				float right
				public_inputWidth(132px)
			.d3
				public_inputWidth(388px)
			.button
				text-align center
				margin 35px 0 10px 0
				button
					background transparent
					border 1px solid rgb(217,217,217)
					width 175px
					height 50px
					font-size 16px
					&:hover
						background #FD8F24
						color #fff
</style>
<script>
export default{
	head(){
		return{
			title:'商务合作'
		}
	},
	data(){
		return{
			modal_change: false
		}
	},
	methods:{
		click_success(){
			this.modal_change=false;
			$('input').val('');
		}
	}
}
</script>