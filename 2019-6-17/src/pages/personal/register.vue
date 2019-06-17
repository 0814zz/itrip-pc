<template>
  <div class="container">
    <!-- 头部 -->
    <header>
      <div>
        <el-image src="static/images/img/i-LOGO-02-01.png"></el-image>
      </div>
      <div class="head-right">
        <span><router-link to="/login">登录</router-link></span>
        <el-divider direction="vertical"></el-divider>
        <span><a href="#">客服中心</a></span>
      </div>
    </header>
    <!-- 主体 -->
    <section>
      <aside class="i-register-left">
        <div class="i-reg-top">
            <el-radio v-model="radio" label="1" @change="isShow=!isShow">手机注册</el-radio>
            <el-radio v-model="radio" label="2" @change="isShow=!isShow">邮箱注册</el-radio>
        </div>
        <div class="i-teg-bottom">
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
            <el-form-item label="登录密码" prop="pwd">
              <el-input v-model="ruleForm.pwd" placeholder="请输入密码"></el-input>
            </el-form-item>
            <el-form-item label="验证码" prop="verification" class="i_check">
              <el-row>
                <el-col :span="10">
                  <el-input v-model="ruleForm.verification" placeholder="请输入验证码"></el-input>
                </el-col>
                <el-col :span="5" :offset="2">
                  <div class="i-register-ver">
                    {{msg}}
                  </div>
                </el-col>
                <el-col :span="5" :offset="1"><span @click="idCode" class="change">换一张</span></el-col>
              </el-row>
            </el-form-item>
            <el-form-item label="激活码" prop="activation">
              <el-row>
                <el-col :span="10">
                  <el-input v-model="ruleForm.activation" placeholder="请输入激活码"></el-input>
                </el-col>
                <el-col :span="8" :offset="2">
                  <div class="i-register-act">
                    <span>获取激活码</span>
                  </div>
                </el-col>
              </el-row>
            </el-form-item>
            <el-form-item prop="agreement">
              <span> 我已经阅读并同意遵守 <span class="i-reg-check">《i旅行用户服务协议》</span></span>
            </el-form-item>
            <el-form-item prop="register">
              <el-button type="primary" @click="submitForm('ruleForm')" class="reg-btn">同意协议并注册</el-button>
            </el-form-item>
          </el-form>
        </div>


      </aside>
      <aside class="i-register-right">
        <el-image src="static/images/img/register393590_xxx1205_03.jpg"></el-image>
      </aside>
    </section>
    <!-- 底部 -->
    <Foot4></Foot4>
  </div>
</template>

<script>
  import Foot4 from '@/components/footer/foot-4'

  export default {
    data() {
      return {
        msg:'nD3s',
        isShow:false,
        checked: true,
        footicon: [
          {src: "static/images/icon/icon1126_11.jpg"},
          {src: "static/images/icon/icon1126_13.jpg"},
          {src: "static/images/icon/icon1126_15.jpg"},
          {src: "static/images/icon/icon1126_17.jpg"},
          {src: "static/images/icon/icon1126_19.jpg"},
          {src: "static/images/icon/icon1126_21.jpg"},
          {src: "static/images/icon/icon1126_23.jpg"},
          {src: "static/images/icon/icon1126_25.jpg"},
          {src: "static/images/icon/icon1126_27.jpg"},
        ],
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
        },
      }
    },

    components: {
      Foot4
    },
    methods: {
      // 验证码
      idCode:function(){
        var arr = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z','a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z','0','1','2','3','4','5','6','7','8','9'];
        var str = '';
        for(var i = 0 ; i < 4 ; i ++ )
          str += arr[Math.floor(Math.random() * arr.length)];
        this.msg = str;
      },
      // 注册按钮
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          console.log(1111);
          if (valid) {
            window.location.href=('#/login')
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
    }
  }
</script>

<style scoped>
  /* 头部 */
  header {
    height: 131px;
    border-bottom: 0.02rem solid #ccc;
    display: flex;
  }

  header .el-image {
    width: 2.45rem;
    margin: -0.12rem 0 0 0.27rem;
  }

  .head-right {
    text-align: right;
    margin-left: auto;
    width: 4rem;
    margin-top: 0.9rem;
    color: #666;
  }

  .head-right span:nth-of-type(1) a {
    color: #0066cc;
  }

  .head-right .el-divider--vertical {
    background-color: #666;
    width: 0.02rem;
  }

  .head-right span:nth-of-type(2) a:hover {
    color: #ffac0e;
  }

  /* 主体 */
  section {
    display: flex;
  }

  /* 主体左侧 */
  .i-register-left{
    margin-top: 0.5rem;
  }
  .i-reg-top {
    margin-left: 1rem;
    margin-top: 0.4rem;
  }

  .i-reg-top .el-radio {
    padding-right: 0.7rem;
  }

  .i-teg-bottom {
    margin-top: 0.5rem;
  }

  .i-register-ver {
    background-color: lightgray;
    text-align: center;
    font-size: 0.18rem;
  }

  .i-register-act {
    margin-top: 0.08rem;
    height: 0.25rem;
    line-height: 0.25rem;
    background-color: #00a0e9;
    text-align: center;
    color: #ffffff;
  }
  .i-register-act span{
    cursor: pointer
  }
.change{
  color: #ffffff;
  background-color: #00a0e9;
  cursor: pointer;
  padding: 0.05rem 0.1rem;
  border-radius: 0.04rem;
  font-size: 0.16rem;

}
.i-reg-check{
  color: #1a479c;
}
.i-teg-bottom .el-button{
  font-size: 0.2rem;
}
.reg-btn{
  padding: 0.1rem 1rem;
}
  /* 主体右侧 */
  .i-register-right {
    margin-left: auto;
  }

</style>
