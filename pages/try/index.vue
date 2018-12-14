<template>
	<div class="header">
		<!-- <h1>hahahah </h1> -->
		<el-row :gutter="10" class="hidden-xs-only">
			<!-- xs移动端 -->
			<!-- lg PC端 -->
		  <!-- <el-col :xs="8" :lg="10" :md="10"><div class="grid-content bg-purple">1</div></el-col>
		  <el-col :xs="0" :lg="2" :md="2"><div class="grid-content bg-purple-light hidden-xs-only">2</div></el-col>
		  <el-col :xs="12" :lg="2" :md="2"><div class="grid-content bg-purple1">3</div></el-col>
		  <el-col :xs="4" :lg="10" :md="10"><div class="grid-content bg-purple-light1">4</div></el-col> -->
		  <h1>hahahah </h1>
		</el-row>
	</div>
</template>
<style scoped>
    .el-col {
      border-radius: 4px;
    }
    .bg-purple-dark {
      background: #99a9bf;
    }
    .bg-purple {
      background: red;
    }
    .bg-purple-light {
      background: blue;
    }
    .bg-purple1 {
      background: green;
    }
    .bg-purple-light1 {
      background: black;
    }
    .grid-content {
      border-radius: 4px;
      min-height: 36px;
      color: white;
    }
    .header{
    	padding: 5px;
    	overflow: hidden;
    }
</style>
<script>
// import 'element-ui/lib/theme-chalk/display.css';
export default{
	layout:'null',
	head(){
		return{
			title:'游戏中心'
		}
	}
}
</script>