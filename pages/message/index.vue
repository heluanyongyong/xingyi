<template>
	<div class="bggray">
		<div class="container">
			<div class="title">消息管理</div>
			<div class="top">
				<div class="top_left">
					<div>
						<a @click="change_messageType(0)" href="javascript:void(0)" class="active">全部消息(3)</a>
						<div class="pos active"></div>
					</div>
					<div>
						<a @click="change_messageType(1)" href="javascript:void(0)">系统消息(2)</a>
						<div class="pos"></div>
					</div>
					<div>
						<a @click="change_messageType(2)" href="javascript:void(0)">服务消息(1)</a>
						<div class="pos"></div>
					</div>
				</div>
				<div class="top_right">
					<label for="select_all"><input @click="select_all" type="checkbox" name="" v-model="all_checkbox" id="select_all"><span>全选</span></label>
					<button>标记已读</button>
					<button>批量删除</button>
				</div>
				<div class="clear"></div>
			</div>
			<div class="center">
				<ul>
					<li class="active" @click="goto_message">
						<input @click.stop="select_one(0)" v-model="default_checkboxs[0]" class="checkbox" type="checkbox" name="" id="">
						<img src="/message/message_active.png" alt="">
						<span class="type">服务消息</span>
						<span class="info">星移网络科技提醒您充值成功</span>
						<span class="time">11.20</span>
					</li>
					<li v-for="item in 9" :key="item" @click="goto_message">
						<input @click.stop="select_one(item)" v-model="default_checkboxs[item]" class="checkbox" type="checkbox" name="" id="">
						<img src="/message/message_default.png" alt="">
						<span class="type">服务消息</span>
						<span class="info">星移网络科技提醒您充值成功</span>
						<span class="time">11.20</span>
					</li>
				</ul>
			</div>
			<div class="bottom">
				<el-pagination
					@current-change="handleCurrentChange"
					background
					layout="prev, pager, next"
					:total="1000">
				</el-pagination>
			</div>
		</div>
	</div>
</template>
<style scoped lang="styl">
@import '~assets/public.styl'
.container
	background #fff
	padding 40px
	font-size 14px
	.title
		font-size 28px
		color #333
	.top
		margin-top 20px
		border-bottom 1px solid rgb(189,189,189)
		padding-bottom 15px
		.top_left
			float left
			font-size 16px
			div
				position relative
				margin-right 50px
				display inline-block
				a
					padding 0 20px
					color #999
				.pos
					display none
					position absolute
					bottom -17px
					left 0
					width 100%
					height 3px
					background #FD8F24
					&:before
						content ''
						position absolute
						bottom 0
						left 50%
						transform translateX(-50%)
						width 0
						height 0
						border-width 8px
						border-style solid
						border-color transparent transparent #FD8F24 transparent
				.active
					display block
		.top_right
			float right
			label,input,button,span
				vertical-align middle
			input
				width 15px
				height 15px
				border-radius 3px
			span
				margin-left 3px
			button
				margin-left 15px
				padding 2px 4px
				border-radius 3px
				color #999
				background rgb(248,248,248)
				border 1px solid rgb(189,189,189)
				&:hover
					background #FD8F24
					border 1px solid #FD8F24
					color white
	.center
		ul
			padding 5px 0
			li
				border-bottom 1px solid rgb(221,221,221)
				padding  15px
				color #999
				vertical-align middle
				img,input,span
					vertical-align middle
				.checkbox
					width 18px
					height 18px
					cursor pointer
					vertical-align bottom
				img
					margin-left 15px
					cursor pointer
					width 22px
				.type
					cursor pointer
					margin-left 10px
				.info
					cursor pointer
					margin-left 30px
				.time
					float right
				&.active
					.type,.info
						color #333
					.time
						color #666
				&:hover
					.type,.info
						color #FD8F24
					.time
						color #FD8F24
	.bottom
		text-align center
		margin-top 30px
		color pink
</style>
<script>
export default{
	head(){
		return{
			title:'消息列表'
		}
	},
	mounted(){
		// 初始化，所有的表单默认不选中
		for(var i=0;i<$('.center li input').length;i++){
			this.default_checkboxs[i]=false;
		}
	},
	data(){
		return{
			// 表单组的选中和全选按钮的选中
			default_checkboxs:[],
			all_checkbox:false
		}
	},
	methods:{
		change_messageType(index){
			$('.top_left').find('a').eq(index).addClass('active').parent().find('.pos').addClass('active').parent().siblings().find('a').removeClass('active').parent().find('.pos').removeClass('active');
			$('.center ul').fadeOut().fadeIn(500);
		},
		// 点击全选按钮
		select_all(){
			// 全选按钮状态的改变
			this.all_checkbox=!this.all_checkbox;
			// 按钮组状态的改变
			this.default_checkboxs.forEach((data,i)=>{this.default_checkboxs[i]=this.all_checkbox});
		},
		// 单击按钮组按钮
		select_one(index){
			// 按钮组单个按钮状态改变
			this.default_checkboxs[index]=!this.default_checkboxs[index];
		},
		goto_message(){
			this.$router.push('/message/infos');
		},
		change_page(){
			console.log('hello world');
		},
		handleCurrentChange(){
			$('.center ul').fadeOut().fadeIn(500);
		}
	},
	watch:{
		default_checkboxs(){
			// 监听按钮组状态，若全为选中或者不选中：改变全选按钮的状态
			this.default_checkboxs.indexOf(false)<0?this.all_checkbox=true:this.all_checkbox=false;
		}
	}
}
</script>