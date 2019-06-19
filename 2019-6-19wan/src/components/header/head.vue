<template>
  <div>
    <el-header class="head-blue">
      <div class="container head-context">
        <div class="logo">
          <el-image src="static/images/icon/logo74×34.png"></el-image>
        </div>
        <div class="head-blue-right">
          <span><a href="#">客服中心</a></span>
          <el-divider direction="vertical"></el-divider>
          <span><a href="#">24小时热线：400-855-6666</a></span>
          <!--右侧两图标-->
          <span class="head-right-icon">
            <span class="head-icon-box1" @mouseenter="QRshow1" @mouseleave="QRhide1">
              <i class="fa fa-mobile" aria-hidden="true"></i>
              <transition name="el-zoom-in-top">
                <div v-show="show1" class="head-icon-abs">
                  <el-image src="static/images/img/erweima_1126.jpg"></el-image>
                  <p>手机扫码快速下载，APP享受最多50%优惠力度</p>
                </div>
              </transition>
            </span>
            <span class="head-icon-box2" @mouseenter="QRshow2" @mouseleave="QRhide2">
              <i class="fa fa-comments" aria-hidden="true"></i>
              <transition name="el-zoom-in-top">
                <div v-show="show2" class="head-icon-abs">
                  <el-image src="static/images/img/erweima_1126.jpg"></el-image>
                  <p>手机扫码快速下载，APP享受最多50%优惠力度</p>
                </div>
              </transition>
            </span>

          </span>
        </div>
      </div>
    </el-header>
    <el-header class="head-black">
      <div class="container head-context">
        <ul class="header-nav">
          <li v-for="(item ,index) in topNav" :class="{active:item.bol}" @click="change(index)">
            <router-link :to="item.url">
              <i class="fa" :class="item.icon" aria-hidden="true"></i>
              {{item.page}}
            </router-link>
          </li>
        </ul>
        <div class="right-link">
          <span><router-link to="/login">登录</router-link></span>
          <el-divider direction="vertical"></el-divider>
          <span><router-link to="/register">注册</router-link></span>
        </div>
      </div>
    </el-header>
  </div>
</template>
<script>


  export default {
    data(){
      return{
        show1:false,
        show2:false,
        topNav:[
          {url:'/index',icon:'fa-home',page:'首页',bol:true},
          {url:'/travel-index',icon:'fa-globe',page:'旅游',bol:false},
          {url:'/tavern-index',icon:'fa-hospital-o',page:'酒店',bol:false},
          {url:'/flyTicket-index',icon:'fa-plane',page:'机票',bol:false},
          {url:'/methodDetail',icon:'fa-book',page:'攻略',bol:false},
        ]
      }
    },
    methods:{
      QRshow1(){
        this.show1=true;
      },
      QRhide1(){
        this.show1=false
      },
      QRshow2(){
        this.show2=true;
      },
      QRhide2(){
        this.show2=false
      },
      change(index){
        console.log(index);
        for(var i=0; i<this.topNav.length;i++){
          this.topNav[i].bol=false;
        }
        this.topNav[index].bol=true;
      }
    },


  }
</script>


<style scoped>
  @media (min-width: 1200px) {
    .container {
      width: 1160px;
    }
  }
  a{
    display:block;
    width:100%;
    height:100%;
  }

  .el-divider{
    margin-top: 0.04rem;
  }

  .head-blue {
    background: #1448AD;
    color: #fff;
  }

  .head-black {
    background: #000;
    color: #fff;
    border-bottom: 0.01rem solid #fff;
  }

  .head-context {
    height: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }

  .logo {
    width: 0.74rem;
    height: 0.34rem;
  }

  .head-blue-right {
    display: flex;
    flex-direction: row;
    line-height:0.26rem;
  }

  .head-right-icon {
    margin-left: 0.4rem;
  }

  .head-icon-box1 {
    position: relative;
    font-size: 0.22rem;
  }

  .head-icon-box2 {
    position: relative;
    margin-left: 0.2rem;
    font-size: 0.2rem;
  }

  .head-icon-abs {
    position: absolute;
    right: -0.2rem;
    top: 0.26rem;
    background: #fff;
    color: #333;
    font-size: 0.12rem;
    padding: 0.2rem;
  }

  .head-icon-abs .el-image {
    width: 1.04rem;
    height: 1.04rem;
  }

  /*头部导航*/
  .header-nav{
    display: flex;
    justify-content: space-between;
    font-size:0.16rem;
    font-weight: bold;
    text-align: center;
    height:100%;
  }
  .header-nav li{
    line-height:0.6rem;
    width:0.96rem;
  }
  .header-nav li.active{
    background: #1AB2DB;
  }
  .header-nav li:hover{
    background: #1AB2DB;
  }
  .header-nav .fa{
    font-size: 0.23rem;
    margin-right: 0.09rem;
    margin-top: 0.02rem;
  }
  .right-link{
    display: flex;
    flex-direction: row;
  }
</style>
