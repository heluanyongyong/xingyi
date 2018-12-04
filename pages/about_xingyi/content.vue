<template>
	<div class="w400 ptb3">
		<el-form :model="ruleForm2" status-icon :rules="rules2" ref="ruleForm2" label-width="100px" class="demo-ruleForm">
		  <el-form-item label="密码" prop="pass">
		    <el-input type="password" v-model="ruleForm2.pass" autocomplete="off"></el-input>
		  </el-form-item>
		  <el-form-item label="确认密码" prop="checkPass">
		    <el-input type="password" v-model="ruleForm2.checkPass" autocomplete="off"></el-input>
		  </el-form-item>
		  <el-form-item label="姓名" prop="name">
		    <el-input v-model.number="ruleForm2.name"></el-input>
		  </el-form-item>
		  <el-form-item>
		    <el-button type="primary" @click="submitForm('ruleForm2')">提交</el-button>
		    <!-- <el-button @click="resetForm('ruleForm2')">重置</el-button> -->
		  </el-form-item>
		</el-form>
	</div>
</template>

<script>
  export default {
    data() {
      var checkName = (rule, value, callback) => {
        if (!value) {
          return callback(new Error('姓名不能为空'));
        }
        setTimeout(() => {
            var targ = /^[\u4E00-\u9FA5]{2,4}$/;
                if( !targ.test(value)){
                  callback(new Error('请正确填写姓名'));
                }else{
                callback();
            }
        }, 1000);
      };
      var validatePass = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入密码'));
        } else {
          if (this.ruleForm2.checkPass !== '') {
            this.$refs.ruleForm2.validateField('checkPass');
          }
          callback();
        }
      };
      var validatePass2 = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请再次输入密码'));
        } else if (value !== this.ruleForm2.pass) {
          callback(new Error('两次输入密码不一致!'));
        } else {
          callback();
        }
      };
      return {
        ruleForm2: {
          pass: '',
          checkPass: '',
          name: ''
        },
        rules2: {
          pass: [
            { validator: validatePass, trigger: 'blur' },
            {min: 8, max: 16, message: '密码至少为8位', trigger: 'blur'},
          ],
          checkPass: [
            { validator: validatePass2, trigger: 'blur' }
          ],
          name: [
            { validator: checkName, trigger: 'blur' }
          ]
        }
      };
    },
    methods: {
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            alert('submit!');
            $('input').val('')
            $('.el-input__inner').css('border-color','#dcdfe6').siblings('span').remove()
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      }
    }
  }
</script>

<style scoped>
 .w400{
 	width: 400px;
 }
</style>
<style>
    .el-form-item__label {
    	font-size: 16px;
    	color: #333;
    }
    .el-input__suffix{
    	right: -88px;
    }
	.el-input__inner,.el-button{
		width: 400px;
		height: 50px;
	}
	.el-button--primary{
		background-color: rgba(253,143,36,1);
		border-color: rgba(253,143,36,1);
	}
	.el-button--primary:focus, .el-button--primary:hover{
		background-color: rgba(253,143,36,1);
		border-color: rgba(253,143,36,1);
	}
</style>