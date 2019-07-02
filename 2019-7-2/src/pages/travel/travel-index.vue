<template>
  <div>
    <Head></Head>
    <!--轮播-->
    <div>
      <Travel_banner_nav></Travel_banner_nav>
    </div>
    <!--出境旅游-->
    <div class="one" style="margin-top: 0.15rem">
      <Travel_index1 :travelData="travelData.travel1"></Travel_index1>
    </div>
    <div class="two" style="margin-top: 0.5rem">
      <Travel_index1 :travelData="travelData.travel2"></Travel_index1>
    </div>
    <!--广告图片-->
    <div style="margin-top: 0.5rem">
      <adPic :ad="ad.ad1"></adPic>
    </div>
    <div  class="three" style="margin-top: 0.5rem">
      <Travel_index1 :travelData="travelData.travel3"></Travel_index1>
    </div>
    <div class="four" style="margin-top: 0.5rem">
      <Travel_index1 :travelData="travelData.travel4"></Travel_index1>
    </div>
    <!--广告图片-->
    <div style="margin-top: 0.4rem; margin-bottom: 0.4rem">
      <adPic :ad="ad.ad2"></adPic>
    </div>


    <Foot1></Foot1>
    <Foot3></Foot3>

    <!-- 电梯导航开始 -->
    <div class="i-floor">
      <ul>
        <li class="act">
          <!--<i class="fa fa-globe"></i>-->
          <span>出境<br/>旅游</span>
        </li>
        <li>
          <!--<i class="fa fa-hospital-o"></i>-->
          <span>国内<br/>旅游</span>
        </li>
        <li>
          <!--<i class="fa fa-plane"></i>-->
          <span>周边<br/>当地游</span>
        </li>
        <li>
          <!--<i class="fa fa-book"></i>-->
          <span>当地<br/>旅游</span>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
  import Head from "@/components/header/head"
  import Travel_banner_nav from "./travel-banner-nav.vue"
  import Travel_index1 from "./travel-index1.vue"
  import adPic from "../index/adPic/adPic"
  import Foot1 from "@/components/footer/foot-1"
  import Foot3 from "@/components/footer/foot-3"

  export default {
    components: {
      Head,
      Travel_banner_nav,
      adPic,
      Travel_index1,
      Foot1,
      Foot3,

    },
    data() {
      return {
        ad: {
          ad1: {src1: "static/images/img/travel-ad-01.png", src2: "static/images/img/travel-ad-02.png"},
          ad2: {src1: "static/images/img/travel_message/travel/guanggao-21.png", src2: "static/images/img/travel_message/travel/guanggao-22.png"},
        },
        travelData:{},
      }
    },
    mounted() {         //在挂载后执行
      this.$axios.get('static/textData/travel.json')
        .then(res => {
          this.travelData = res.data;
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
        } else if (iScroll + 10 >= h1) {
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

  .el-carousel > > > .el-carousel__button {
    width: 0.14rem;
    height: 0.14rem;
    border-radius: 50%;
    border: 0.01rem solid #1ab2db;
    opacity: 1;
    position: absolute;
    margin-left: 5.1rem;
    top: -0.1rem;
  }

  .el-carousel > > > .el-carousel__indicator--horizontal {
    display: inline-block;
    padding: 12px 10px;
  }

  .el-carousel > > > .el-carousel__indicator.is-active button {
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
    margin-left: -660px;
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
    position: absolute;
    top: 0;
    left: 0;
    width: 60px;
    line-height: 16px;
    height: 50px;
    color: #666;
    font-size: 12px;
    background: #E5E5E5;
    padding-top: 0.08rem;
    box-sizing: border-box;
  }

  .i-floor > ul > li.act span {
    display: block;
    background: #1448ad;
    color:#fff;
    -webkit-transition: all .5s linear 0s;
    -moz-transition: all .5s linear 0s;
    -o-transition: all .5s linear 0s;
    -ms-transition: all .5s linear 0s;
    transition: all .5s linear 0s;
  }
</style>
