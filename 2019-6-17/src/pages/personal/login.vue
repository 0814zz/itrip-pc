<template>
  <div class="container">
    <!-- 头部 -->
    <header>
      <div>
        <el-image src="static/images/img/i-LOGO-02-01.png"></el-image>
      </div>
    </header>
    <!-- 主体 -->
    <div class="body">
      <!-- 左侧和中间 -->
      <section>
        <div class="left-phone">
          <el-image src="static/images/img/left-phone.png"></el-image>
        </div>
        <div class="right-message">
          <span>使用</span>
          <el-image src="static/images/img/i-LOGO-02-01.png"></el-image>
          <span>客户端</span><br>
          <span>手机扫描安全登录</span>
        </div>
        <div class="right-message gary">
          <span>1.打开手机i旅行客户端并登录i旅行账号</span><br>
          <span>2.在i旅行登录页点击右上角扫码安全登录</span><br>
          <span>3.手机扫描安全登录</span>
        </div>
      </section>
      <!-- 右侧表单 -->
      <aside>
        <!-- 头部 -->
        <div class="login-header">
          <div>
            <span>会员登录&nbsp;&nbsp;</span>
            <span><router-link to="/register">立即注册</router-link></span>
            <span>，享积分换礼、返现等专属优惠！</span>
          </div>
          <div class="right-erweima-nor">
            <el-image src="static/images/img/erweima.png" class="right-normal"></el-image>
          </div>
          <div class="right-erweima-act">
            <el-image src="static//images/img/diannao.png" class="right-active" style="display: none"></el-image>
          </div>
        </div>
        <!-- 主体表单 -->
        <div class="login-body">
          <div id="staticOption">
            <div class="body-title">
              <el-radio v-model="radio" label="1" @change="isShow=!isShow"><span>普通登录</span></el-radio>
              <el-radio v-model="radio" label="2" @change="isShow=!isShow"><span>手机动态密码登录</span></el-radio>
            </div>
            <div class="body-form">
              <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
                <el-form-item prop="telephone">
                  <el-col :span="18">
                    <el-input placeholder="请输入注册手机/注册邮箱" v-model="ruleForm.telephone">
                      <el-button slot="prepend"><i class="fa fa-user" aria-hidden="true"></i></el-button>
                    </el-input>
                  </el-col>
                </el-form-item>
                <el-form-item prop="lock">
                  <el-col :span="18">
                    <el-input placeholder="请输入密码" v-model="ruleForm.lock">
                      <el-button slot="prepend"><i class="fa fa-lock" aria-hidden="true"></i></el-button>
                    </el-input>
                  </el-col>
                </el-form-item>
                <!-- 验证码 -->
                <div v-show="!isShow">
                  <el-form-item prop="verification" class="i_check">
                    <el-row>
                      <el-col :span="8">
                        <el-input v-model="ruleForm.verification" placeholder="验证码"></el-input>
                      </el-col>
                      <el-col :span="5" :offset="2">
                        <div class="i-register-ver">
                          {{msg}}
                        </div>
                      </el-col>
                      <el-col :span="5" :offset="1"><span @click="idCode" class="change">换一张</span></el-col>
                    </el-row>
                  </el-form-item>
                </div>
                <!-- 动态获取验证码 -->
                <div v-show="isShow">
                  <el-form-item>
                    <el-button type="warning" @click="submitForm('ruleForm')" class="verification-btn">获取验证码</el-button>
                  </el-form-item>
                </div>
                <el-form-item prop="checked">
                  <el-col :span="8" :offset="1">
                    <el-checkbox v-model="ruleForm.checked"><span>30天内自动登录</span></el-checkbox>
                  </el-col>
                  <el-col :span="7" :offset="4">
                    <span class="forget">忘记密码？</span>
                  </el-col>
                </el-form-item>
                <el-form-item>
                  <el-button type="danger" @click="submitForm('ruleForm')" class="login-btn">登录</el-button>
                </el-form-item>
              </el-form>
            </div>
          </div>
          <div id="actionOption">
            <el-image src="static/images/img/phone-erwema.png" class="phone-erweima"></el-image>
            <el-image src="static/images/img/richScan.png" class="phone-richScan"></el-image>
            <el-image src="static/images/img/erweima_1126.jpg" class="action-code"></el-image>
          </div>
        </div>

        <!-- 底部 -->
        <div class="login-footer">
          <div class="foot-message">
            您也可以用合作网站的账号登录去i旅行网
          </div>
          <div class="foot-label">
            <a href="#">
              <el-image src="static/images/img/icon-sina.png"></el-image>
              <span>新浪微博</span>
            </a>
            <a href="#">
              <el-image src="static/images/img/icon-QQ.png"></el-image>
              <span>QQ</span>
            </a>
            <a href="#">
              <el-image src="static/images/img/icon-Wechat.png"></el-image>
              <span>微信</span>
            </a>
            <a href="#">
              <el-image src="static/images/img/icon-Baidu.png"></el-image>
              <span>百度</span>
            </a>
          </div>
        </div>
      </aside>
    </div>
    <!-- 底部 -->
    <Foot4></Foot4>
  </div>
</template>

<script>
  import Foot4 from '@/components/footer/foot-4'
  import jquery from 'jquery'

  export default {
    data() {
      return {
        footicon: [
          {src: "@/../static/images/icon/icon1126_11.jpg"},
          {src: "@/../static/images/icon/icon1126_13.jpg"},
          {src: "@/../static/images/icon/icon1126_15.jpg"},
          {src: "@/../static/images/icon/icon1126_17.jpg"},
          {src: "@/../static/images/icon/icon1126_19.jpg"},
          {src: "@/../static/images/icon/icon1126_21.jpg"},
          {src: "@/../static/images/icon/icon1126_23.jpg"},
          {src: "@/../static/images/icon/icon1126_25.jpg"},
          {src: "@/../static/images/icon/icon1126_27.jpg"},
        ],
        radio: '1',
        isShow: false,
        qrCode: false,
        msg: 'nD3s',
        ruleForm: {
          phone: '',
          pwd: '',
          email: '',
          telephone: '',
          lock: '',
          verification: '',
          checked: ''
        },
        rules: {
          telephone: [
            {required: true, message: '请输入注册的手机号或邮箱号', trigger: 'blur'},
            {max: 11, message: '以数字、字母开头下划线开头的13位字符，中间使用@qq,以.com结尾，或以13开头的11位数字', trigger: 'blur'},
          ],
          lock: [
            {required: true, message: '请输入密码', trigger: 'blur'},
            {min: 6, max: 18, message: '以数字、字母开头，6-18位字符', trigger: 'blur'},
          ],
        },
      }
    },
    components: {
      Foot4,
      jquery
    },

    methods: {
      // 验证码
      idCode: function () {
        var arr = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
        var str = '';
        for (var i = 0; i < 4; i++)
          str += arr[Math.floor(Math.random() * arr.length)];
        this.msg = str;
      },
      // 登录按钮
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            window.location.href = ('#/index');
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
    },
    mounted(){
      $(function(){
        /*二维码动画*/
        $('.right-erweima-nor .el-image').click(function () {
          $(this).hide().next($('.right-active').css('display','block'));
          $('.phone-erweima').css('display','block').animate({'left':'-2rem'},1000);
          $('.phone-richScan').css({'animation-delay':'10s','display':'block'}).animate({'left':'-1.3rem'},2000);
          $('.action-code').css('display','block')
        });
        $('.right-erweima-act .el-image').click(function () {
          $(this).hide().next($('.right-normal').css('display','block'));
          $('.action-code').css('display','none').next($('.phone-erweima').css({'display':'none','left':'0.3rem'}).next($('.phone-richScan').css({'display':'none','left':'1rem'})));
        });
      })
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

  /* 主体 */
  .body {
    display: flex;
  }

  /* 左侧和中间 */
  .left-phone .el-image {
    width: 2.49rem;
    height: 3.21rem;
    margin: 1.5rem 0 0 1rem;
  }

  .right-message {
    margin-top: -3rem;
    margin-left: 4rem;
  }

  .right-message {
    font-size: 0.24rem;
    color: blue;
  }

  .right-message .el-image {
    width: 0.75rem;
    vertical-align: middle;
  }

  .gary {
    font-size: 0.14rem;
    color: #999;
    margin-top: 0.5rem;
  }

  /* 右侧表单 */
  aside {
    width: 5rem;
    height: 6.45rem;
    background-color: #eee;
    margin-left: auto;
  }

  .login-header {
    position: relative;
    margin: 0.5rem 0.24rem 0.8rem;
    border-bottom: 1px solid #ccc;
    padding-bottom: 0.05rem;
  }

  .login-header span:nth-of-type(1) {
    font-size: 0.24rem;
    color: #333;
  }

  .login-header div {
    margin-left: 0.25rem;
  }

  .login-header span:nth-of-type(2):hover {
    color: #1b189a;
    text-decoration: underline;
  }

  .right-erweima-nor,.right-erweima-act{
    position: absolute;
    top: -0.5rem;
    right: -0.24rem;
  }


  /* 表单主体 */
  .body-title {
    margin: -0.35rem 0 0.2rem 1.16rem;
  }

  .body-form {
    margin-top: 0.3rem;
  }

  #actionOption {
    position: relative;
  }

  .phone-erweima {
    width: 3rem;
    height: 4.26rem;
    position: absolute;
    top: -4.2rem;
    left: 0.3rem;
    z-index: 2;

    /*left: -2rem;*/
    display: none;
  }

  .phone-richScan {
    width: 1.27rem;
    height: 1.12rem;
    position: absolute;
    top: -3.82rem;
    z-index: 3;
    left: 1rem;
    /*left: -1.3rem;*/
    display: none;
  }

  .action-code {
    width: 3.5rem;
    position: absolute;
    top: -4rem;
    left: 0.9rem;
    z-index: 1;
    display: none;
  }

  .el-radio >>> span {
    font-weight: bold;
    color: #333;
  }

  .el-radio >>> .el-radio__input.is-checked .el-radio__inner {
    border-color: #999;
    background: #999;
  }

  .el-input-group__prepend button.el-button {
    font-size: 0.25rem;
  }

  .el-button >>> .fa-user:before, .el-button >>> .fa-lock:before {
    color: #666;
  }

  .el-button {
    padding: 0.09rem 0.1rem;
  }

  .lock {
    margin-bottom: 0.5rem;
  }

  .i-register-ver {
    background-color: lightgray;
    text-align: center;
    font-size: 0.2rem;
  }

  .el-checkbox__label span, .forget {
    font-weight: bold;
    color: #333;
  }

  .el-checkbox >>> .el-checkbox__input.is-checked .el-checkbox__inner {
    border-color: #999;
    background: #999;
  }

  .el-checkbox >>> .el-checkbox__inner:hover {
    background: #999;
    border-color: #999;
  }

  .
  .change {
    font-size: 0.16rem;
    background-color: lightgray;
    cursor: pointer;
    /*padding: 0.05rem 0.05rem;*/
    border-radius: 0.04rem;
  }

  .verification-btn {
    padding: 0.13rem 1rem;
    margin-bottom: -0.2rem;
    margin-left: 0.13rem;
  }

  .login-btn {
    padding: 0.13rem 1.34rem;
    margin-bottom: 0.4rem;
  }

  /* 主体底部 */
  .login-footer {
    border-top: 0.01rem solid #ccc;
  }

  .foot-message {
    margin: 0.2rem;
    color: #333399;
  }

  .foot-label {
    margin-left: 0.8rem;
  }

  .foot-label .el-image {
    transform: translateY(0.07rem);
    width: 0.25rem;
    height: 0.25rem;
  }

  .foot-label a {
    margin-right: 0.2rem;
  }

  .foot-label a span {
    color: #337AB7;
    margin-left: 0.02rem;
  }

  .foot-label a span:hover {
    text-decoration: underline;
  }
</style>
