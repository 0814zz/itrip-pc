<template>
  <div id="box" @scroll="scrollEvent">
    <Head></Head>
    <div class="container">
      <!--banner和日历-->
      <div class="banner">
        <TravelBooking_banner @calendar_click="calendar_click"></TravelBooking_banner>
      </div>
      <!--商品信息-->
      <div class="text-right">
        <TravelBooking_text_right></TravelBooking_text_right>
      </div>
    </div>
    <!--出发订单-->
    <div class="container order">
      <TravelBooking_order :show="show"></TravelBooking_order>
    </div>
    <!--锚链接-->
    <div class="container i-main nav-location">
      <ul>
        <li class="i-main-active"><a href="#anchor1">费用</a></li>
        <li><a href="#anchor2">预订须知</a></li>
        <li><a href="#anchor3">用户点评（271）</a></li>
      </ul>
    </div>
    <div v-show="navShow" class="container i-main" id="fixed-top">
      <ul>
        <li class="i-main-active"><a href="#anchor1">费用</a></li>
        <li><a href="#anchor2">预订须知</a></li>
        <li><a href="#anchor3">用户点评（271）</a></li>
      </ul>
    </div>

    <TravelBooking_comment></TravelBooking_comment>
    <!--<TravelBooking_cost></TravelBooking_cost>-->
    <Foot1></Foot1>
    <Foot2></Foot2>
    <Foot3></Foot3>
  </div>

</template>
<script>
  import Head from "@/components/header/head"
  import TravelBooking_banner from './travelBooking-banner'
  import TravelBooking_text_right from './travelBooking-text-right'
  import TravelBooking_order from './travelBooking-order'
  import TravelBooking_comment from './travelBooking-comment.vue'
  import Foot1 from "@/components/footer/foot-1"
  import Foot2 from "@/components/footer/foot-2"
  import Foot3 from "@/components/footer/foot-3"

  export default {
    components: {
      Head,
      TravelBooking_banner,
      TravelBooking_text_right,
      TravelBooking_order,
      TravelBooking_comment,
      Foot1,
      Foot2,
      Foot3,
    },
    data() {
      return {
        show: false,
        navShow: false
      }
    },
    methods: {
      calendar_click: function () {
        this.show = !this.show;
      },
      scrollEvent: function () {
        var T = $(".nav-location").offset().top;
        var Top = $(window).scrollTop();
        if (T > Top) {
          this.navShow = false
        } else {
          this.navShow = true
        }
      }
    },

    mounted() {
      var H=document.documentElement.clientHeight;
      $("#box").css("height",H);
      $(document.body).css({
        "overflow-x": "hidden",
        "overflow-y": "hidden"
      });
      $(".i-main ul li").click(function () {
        var index=$(this).index();
        $(".i-main ul li").removeClass("i-main-active").eq(index).addClass("i-main-active").end()
          .eq(index+3).addClass("i-main-active");
      })
    },
  }

</script>


<style scoped>

  #box {
    overflow: auto;
  }

  .container {
    margin-top: 0.31rem;
    display: flex;
    justify-content: space-between;
  }

  .banner {
    width: 5rem;
    height: 7.39rem;
  }

  .text-right {
    width: 6.99rem;
  }

  .anchor-ul li {
    height: 0.7rem;
  }

  /*锚链接*/
  .i-main {
    margin-top: 0.3rem;
    background-color: #fff;
    border-bottom: 0.01rem solid #E5E5E5;
  }

  .i-main ul {
    font-size: 0.28rem;
    color: #484848;
    display: flex;
    /*cursor: pointer;*/
  }

  .i-main ul li {
    border: 0.01rem solid #ccc;
    line-height: 0.33rem;
    overflow: hidden;
  }

  .i-main ul li a {
    display: inline-block;
    height: 0.71rem;
    box-sizing: border-box;
    padding: 0.2rem 0.3rem;
  }

  .i-main ul .i-main-active {
    border-top: 0.1rem solid #00A0E9;
    background-color: #EDF6F8;
    line-height: 0.16rem;
    height: 0.62rem;
    font-weight: bold;
  }

  #fixed-top {
    position: fixed;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    margin: 0 0 0 -0.1rem;
    z-index: 9;
    border-bottom: none;
    box-shadow: 0 0.03rem 0.06rem rgba(0, 0, 0, 0.2);
  }


</style>
