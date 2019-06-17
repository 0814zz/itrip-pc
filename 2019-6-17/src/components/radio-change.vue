<template>
  <div>
    <div class="i-reg-top">
      <el-radio v-model="radio" label="1" @change="isShow=!isShow">手机注册</el-radio>
      <el-radio v-model="radio" label="2" @change="isShow=!isShow">邮箱注册</el-radio>
    </div>
    <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
      <div v-show="!isShow">
        <el-form-item label="手机号" prop="phone">
          <el-input v-model="ruleForm.phone" placeholder="请输入手机号码"></el-input>
        </el-form-item>
      </div>
      <div v-show="isShow">
        <el-form-item label="邮箱号" prop="email">
          <el-input v-model="ruleForm.email" placeholder="请输入邮箱号码"></el-input>
        </el-form-item>
      </div>
    </el-form>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        isShow: false,
        radio: '1',
        ruleForm: {
          phone: '',
          pwd: '',
          email:'',
          verification: '',
          activation: '',
          agreement: '',
          register: ''
        },
        rules: {
          phone: [
            {required: true, message: '请输入手机号码', trigger: 'blur'},
            {max: 11, message: '以13开头的11位数字', trigger: 'blur'},
          ],
          pwd: [
            {required: true, message: '请输入密码', trigger: 'blur'},
            {min: 6, max: 8, message: '以字母开头的6-18位字符、数字、下划线', trigger: 'blur'}
          ],
          email: [
            {required: true, message: '请输入邮箱号码', trigger: 'blur'},
            {max: 11, message: '以数字、字母开头下划线开头的13位字符，中间使用@qq,以.com结尾', trigger: 'blur'},
          ],
        }
      }
    }
  }
</script>

<style scoped>

</style>
