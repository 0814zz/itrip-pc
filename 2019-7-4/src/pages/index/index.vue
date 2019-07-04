<template>
  <div>
    <Head></Head>
    <!--轮播-->
    <div class="bannerBox">
      <el-carousel class="banner" height="4.7rem">
        <el-carousel-item v-for="item in 4" :key="item">
        </el-carousel-item>
      </el-carousel>
      <!--导航盒子-->
      <div class="navBox">
        <Navbox></Navbox>
      </div>
    </div>
    <!--特卖汇-->
    <div class="one" style="margin-top: 0.18rem">
      <Tabs :tabData="allData.data1"></Tabs>
    </div>
    <!--酒店-->
    <div class="two" style="margin-top: 0.1rem">
      <Tabs :tabData="allData.data2"></Tabs>
    </div>

    <!--广告图片-->
    <div style="margin-top: 0.2rem">
      <adPic :ad="ad.ad1"></adPic>
    </div>

    <!--机票-->
    <div class="three" style="margin-top: 0.3rem">
      <Plane></Plane>
    </div>

    <!--旅游攻略-->
    <div class="four">
      <City></City>
    </div>

    <!--广告图片-->
    <div style="margin-top: 0.3rem">
      <adPic :ad="ad.ad2"></adPic>
    </div>
    <!--旅游局合作-->
    <div style="margin-top:0.16rem">
      <Cooperate></Cooperate>
    </div>
    <Foot1></Foot1>
    <Foot2></Foot2>
    <Foot3></Foot3>

    <!-- 电梯导航开始 -->
    <div class="i-floor">
      <ul>
        <li class="act">
          <i class="fa fa-globe"></i>
          <span>特卖汇</span>
        </li>
        <li>
          <i class="fa fa-hospital-o"></i>
          <span>酒店</span>
        </li>
        <li>
          <i class="fa fa-plane"></i>
          <span>机票</span>
        </li>
        <li>
          <i class="fa fa-book"></i>
          <span>攻略</span>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
  import Head from "@/components/header/head"
  import Navbox from "./navbox/navbox.vue"
  import Tabs from "./tabs"
  import Cooperate from "./cooperate"
  import Plane from "./plane"
  import City from "./city"
  import adPic from "./adPic/adPic"
  import Foot1 from "@/components/footer/foot-1"
  import Foot2 from "@/components/footer/foot-2"
  import Foot3 from "@/components/footer/foot-3"

  export default {
    components: {
      Head,
      Navbox,
      Tabs,
      Cooperate,
      Plane,
      City,
      adPic,
      Foot1,
      Foot2,
      Foot3,

    },
    data() {
      return {
        allData: {},
        ad: {
          ad1: {src1: "static/images/img/jd_bottom_xxx1130_11.jpg", src2: "static/images/img/jd_bottom_xxx1130.jpg"},
          ad2: {src1: "static/images/img/gl_bottom_xxx1130_07.jpg", src2: "static/images/img/gl_bottom_xxx1130.jpg"},
        }
      }
    },
    mounted() {         //在挂载后执行
      this.$axios.get('static/textData/index.json')
        .then(res => {
          this.allData = res.data;
        }).catch(function (error) { // 请求失败处理
        console.log(error);
      });
    },
    updated(){
      /*电梯跳转*/
      $(function () {
        /*电梯*/
        var h1 = $('.one').offset().top;
        var h2 = $('.two').offset().top;
        var h3 = $('.three').offset().top;
        var h4 = $('.four').offset().top;
//        var iWH = 10;
        function change(numy) {
          $('.i-floor ul li').eq(numy).addClass('act').siblings().removeClass('act');
        };

        function userscroll() {
          var iScroll = $(document).scrollTop();

          if (iScroll + 30 >= h4) {
            change(3);
          } else if (iScroll + 30 >= h3) {
            change(2);
          } else if (iScroll + 30 >= h2) {
            change(1);
          } else if (iScroll + 30 >= h1) {
            $('.i-floor').fadeIn();
            change(0);
          } else {
            $('.i-floor').fadeOut();
          }
        }

        $(document).scroll(userscroll);

        var arrTop = [h1, h2, h3, h4];

        $('.i-floor ul li').click(function () {
          var numy = $(this).index();
          change(numy);

          $(document).off();
          $('html,body').stop().animate({'scrollTop': arrTop[numy]}, 500, function () {
            $(document).scroll(userscroll);
          });
        });
      });
    }

  }
</script>


<style scoped>
  .bannerBox {
    position: relative;
    border-top: 0.01rem solid #eee;
  }

  /*轮播*/
  .el-carousel__item {
    height: 4.7rem;
    width: 100%;
  }

  .el-carousel__item:nth-of-type(1) {
    background: url("../../../static/images/img/i_banner_01.jpg") center no-repeat;
    background-size: 17.83rem 4.7rem;
  }

  .el-carousel__item:nth-of-type(2) {
    background: url("../../../static/images/img/i_banner_02.jpg") center no-repeat;
    background-size: 17.83rem 4.7rem;
  }

  .el-carousel__item:nth-of-type(3) {
    background: url("../../../static/images/img/i_banner_03.jpg") center no-repeat;
    background-size: 17.83rem 4.7rem;
  }

  .el-carousel__item:nth-of-type(4) {
    background: url("../../../static/images/img/i_banner_04.jpg") center no-repeat;
    background-size: 17.83rem 4.7rem;
  }

  .el-carousel{
    width: 100%;
  }
  .el-carousel >>> .el-carousel__button {
    width: 0.13rem;
    height: 0.13rem;
    border-radius: 50%;
    border: 0.01rem solid #1ab2db;
    opacity: 1;
    position: absolute;
    margin-left: 5.4rem;
    top:-0.1rem;
  }
  .el-carousel>>>.el-carousel__indicator--horizontal {
    display: inline-block;
    padding: 12px 10px;
  }
  .el-carousel >>> .el-carousel__indicator.is-active button {
    background-color: #1AB2DB;
  }

  .navBox {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-102%, -50%);
    z-index: 3;
  }

  /* floor 开始 */
  .i-floor {
    top: 50%;
    left: 50%;
    margin-left: -670px;
    display: none;
    position: fixed;
    margin-top: -100px;
    width: 60px;
    height: 200px;
    background-color: #f6f6f6;
    cursor: pointer;
    z-index: 9999;
  }

  .i-floor > ul > li {
    width: 60px;
    height: 50px;
    text-align: center;
    position: relative;
    border-bottom: 1px solid #ccc;
    font: normal 16px/30px "微软雅黑";
  }

  .i-floor > ul > li:last-child {
    border-bottom: none;
  }

  .i-floor > ul > li > i {
    font-size: 28px;
    line-height: 50px;
    color: #ccc;
  }

  .i-floor > ul > li span {
    top: 0;
    left: 0;
    width: 60px;
    line-height: 50px;
    height: 50px;
    display: none;
    color: #fff;
    font-size: 14px;
    background: #1448ad;
    position: absolute;
  }

  .i-floor > ul > li.act span {
    display: block;
    -webkit-transition: all .5s linear 0s;
    -moz-transition: all .5s linear 0s;
    -o-transition: all .5s linear 0s;
    -ms-transition: all .5s linear 0s;
    transition: all .5s linear 0s;
  }
</style>
