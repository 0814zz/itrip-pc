<template>
  <div>
    <!-- 头部 -->
    <header>
      <Head></Head>
    </header>
    <!-- 主体内容 -->
    <section class="container">
      <!-- 二级导航 -->
      <div class="method-detail-header">
        <div>
          <router-link to="method-index"><span>攻略</span></router-link>&nbsp;&nbsp;<span class="arrow-address">></span>&nbsp;&nbsp;<span>成都</span>
        </div>
        <div>
          <router-link to="travelBooking"><span>立即购买&nbsp;&nbsp;></span></router-link>
        </div>
      </div>
    </section>
    <section>
      <!-- video  banner -->
      <div class="method-detail-banner">
        <video preload="auto" controls="controls" autoplay="autoplay" loop="loop">
          <source src="../../../static/images/video/methodDetail.webm"/>
        </video>
        <div class="method-detail-banner-box">
          <p>成都</p>
          <p>去成都的街头，感受悠然自在的闲适，领略恬静优雅的质朴</p>
          <p>这是一座你来了就不想走的城市</p>
        </div>
      </div>
    </section>
    <section class="container">
      <!-- 指南 -->
      <div class="methodDetail-guide-box one">
        <div class="guide-title">
          <div></div>
          <span>指南</span>
          <p><span>必游</span>·必玩·必吃</p>
        </div>
        <div class="guide-body">
          <ul>
            <li v-for="item in guide">
              <el-image :src="item.srcImg"></el-image>
              <div class="guide-body-list-box">
                <div class="guide-body-list guide-top">
                  <div class="guide-body-list-title">
                    <span>{{item.title}}</span>
                    <el-image :src="item.rankingImg"></el-image>
                    <span>第{{item.ranking}}名</span>
                  </div>
                  <div class="guide-body-list-score">
                    <el-rate v-model="value1" disabled></el-rate>
                    <span>{{item.score}}分</span>
                    <span>(999+点评)</span>
                  </div>
                </div>
                <div class="guide-body-list guide-body-list-p">
                  <p>{{item.txt}}</p>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <!-- 统计 -->
      <div>
        <div class="guide-title statistics-title two">
          <div></div>
          <span>统计</span>
        </div>
        <div class="statistics-map">
          <div id="main" style="width: 9.4rem;height: 6rem;"></div>
        </div>
      </div>
    </section>
    <!-- 游记标题 -->
    <div class="three travels-box">
      <section class="container">
        <div>
          <div class="guide-title travels-title">
            <div></div>
            <span>游记</span>
          </div>
        </div>
      </section>
      <!-- 游记banner -->
      <div class="travels-carousel">
        <el-carousel height="7.1rem">
          <el-carousel-item v-for="item in 3" :key="item"></el-carousel-item>
        </el-carousel>
      </div>
    </div>

    <!-- 行程 -->
    <section class="container">
      <div class="four">
        <div>
          <div class="guide-title trip-title">
            <div></div>
            <span>行程</span>
          </div>
        </div>
        <!--列表-->
        <ul class="travel-ul">
          <li v-for="(item,index) in travel_list">
            <div class="image-left">
              <el-image :src="item.src"></el-image>
              <div class="right-top">力推</div>
            </div>
            <div class="center-text">
              <h2>{{item.title}}</h2>
              <div>
                <span>无购物</span>
                <span>无自费</span>
                <span>成员保障</span>
                <span>爸妈放心游</span>
                <span>北京烤鸭</span>
              </div>
              <p><span>北京出发</span>&nbsp;{{item.p1}}</p>
              <p>班期：每周{{item.p2}}</p>
              <p>供应商：由 苏打苏塔旅行社 直售，并提供咨询/预定/售后服务</p>
            </div>
            <div class="evaluate">
              <div>
                &yen;<span>{{item.num}}</span>起
              </div>
              <div class="gray-box">
                <div>
                  <span>5</span>分
                </div>
                <div>
                  <p>256人<span>出游</span></p>
                  <p>69条<span>点评</span></p>
                </div>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </section>

    <!-- 底部 -->
    <footer>
      <Foot1></Foot1>
      <Foot2></Foot2>
      <Foot3></Foot3>
    </footer>

    <!-- 电梯 -->
    <div class="i-floor">
      <ul>
        <li class="act">
          <i class="fa fa-globe"></i>
          <span>指南</span>
        </li>
        <li>
          <i class="fa fa-hospital-o"></i>
          <span>统计</span>
        </li>
        <li>
          <i class="fa fa-plane"></i>
          <span>游记</span>
        </li>
        <li>
          <i class="fa fa-book"></i>
          <span>行程</span>
        </li>
      </ul>
    </div>

  </div>
</template>

<script>
  import Head from '@/components/header/head'
  import Foot1 from '@/components/footer/foot-1'
  import Foot2 from '@/components/footer/foot-2'
  import Foot3 from '@/components/footer/foot-3'

  export default {
    data() {
      return {
        guide: [],
        value1: 4,
        travel_list: [
          {
            src: "static/images/img/trl01_0316.jpg", title: "成都+乐山+峨眉山+都江堰+青城山5日4晚跟团游(4钻)·双飞纯玩 华美达+熊猫...",
            p1: "【住舒适】温德姆旗下5星金府华美达+峨眉山熊猫王子，真纯玩，无虚假", p2: "二、三、四、五、六",
            num: "2588"
          },
          {
            src: "static/images/img/trl02_0316.jpg", title: " 成都4日自由行(4钻)·【不含大交通】武侯智选假日8折·赠接机",
            p1: "【自由行专享】国际连锁品牌高级酒店8折限量特惠，含双早，赠送接机！", p2: "二、三、四、五、六、日",
            num: "2039"
          },
          {
            src: "static/images/img/trl03_0316.jpg", title: " 成都+九寨沟+黄龙5日4晚跟团游(5钻)·纯玩-200 错峰减 新九宾 赠晚会&自助餐...",
            p1: "赠：风情晚会+藏式土火锅，品尝当地特色餐+星级自助餐", p2: "三、四、五、六、日",
            num: "3089"
          },
          {
            src: "static/images/img/trl05_0316.jpg", title: "成都4日3晚半自助游(4钻)·【酒店精选】熊猫基地 赠川剧+盖碗茶&火锅",
            p1: "【特别赠送】，蜀九香火锅（2成人起）&川剧+盖碗茶！多重礼遇，不容错过！", p2: "二、三、四、五、六、日",
            num: "2901"
          },
        ]
      }
    },
    components: {
      Head,
      Foot1,
      Foot2,
      Foot3,
    },
    mounted() {
      this.$axios
        .get("static/textData/methodDetail.json")
        .then(res => {
          this.guide = res.data.guide
        })
        .catch(err => {
          console.log(err)
        });
    },
    updated() {
      var myChart = echarts.init(document.getElementById('main'));
      var option = ({
        title: {
          x: 'center',
          text: '成都最近1~2月各旅游景点人数',
          textStyle: {
            fontSize: '18',
            color: '#4c4c4c',
            fontWeight: 'bolder'
          }
        },
        tooltip: {
          trigger: 'axis'
        },
        toolbox: {
          show: true,
          feature: {
            dataZoom: {
              yAxisIndex: 'none'
            },
            dataView: {readOnly: false},
            magicType: {type: ['line', 'bar']}
          }
        },
        xAxis: {
          type: 'category',
          boundaryGap: false,
          data: ['03-01', '03-10', '03-20', '03-30', '04-01', '04-10', '04-20', '04-30', '05-01', '05-10', '05-20', '05-30'],
          axisLabel: {
            interval: 0
          }
        },
        yAxis: {
          type: 'value'
        },
        series: [
          {
            name: '杜甫草堂',
            type: 'line',
            data: [723, 642, 618, 745, 648, 649, 700, 745, 618, 765, 779, 600],
            itemStyle: {
              normal: {
                lineStyle: {
                  color: '#6be6c1'
                }
              }
            },
            markLine: {data: [{type: 'average', name: '平均值'}]}
          },
          {
            name: '都江堰',
            type: 'line',
            data: [443, 352, 418, 345, 448, 349, 300, 352, 418, 445, 348, 449, 300],
            itemStyle: {
              normal: {
                lineStyle: {
                  color: '#626c91'
                }
              }
            },
            markLine: {data: [{type: 'average', name: '平均值'}]}
          }
          ,
          {
            name: '黄龙溪古镇 ',
            type: 'line',
            data: [143, 452, 718, 885, 848, 890, 900, 972, 998, 825, 888, 949, 800],
            itemStyle: {
              normal: {
                lineStyle: {
                  color: '#3fb1e3'
                }
              }
            },
            markLine: {data: [{type: 'average', name: '平均值'}]}
          }
        ]
      });
      myChart.setOption(option);

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
  @media (min-width: 1200px) {
    .container {
      width: 1170px;
    }
  }

  .method-detail-header {
    display: flex;
    width: 100%;
    color: #999;
    margin: 0.1rem 0;
  }

  .method-detail-header div:first-child {
    margin-left: 0.2rem;
    margin-top: 0.1rem;
  }

  .method-detail-header div:first-child .arrow-address {
    color: #333333;
  }

  .method-detail-header div:first-child .router-link, .method-detail-header div:first-child span:nth-of-type(2) {
    cursor: pointer;
  }

  .method-detail-header div:nth-of-type(2) {
    margin-left: auto;
    display: block;
    padding: 0.08rem 0.3rem;
    background-color: #FFCC00;
    color: #fff;
    border-radius: 0.05rem;
  }
  .method-detail-header div:nth-of-type(2):hover{
    color: #fff;
  }

  /*  banner */
  .method-detail-banner {
    width: 100%;
    height: 5.5rem;
    overflow: hidden;
    position: relative;
  }

  .method-detail-banner-box {
    width: 100%;
    position: relative;
    top: 0;
    left: 0;
    z-index: 1;
    color: #fff;
  }

  .method-detail-banner-box p:nth-of-type(1) {
    font-size: 0.6rem;
    position: absolute;
    top: -4.3rem;
    left: 45%;
  }

  .method-detail-banner-box p:nth-of-type(2), .method-detail-banner-box p:nth-of-type(3) {
    font-size: 0.36rem;
  }

  .method-detail-banner-box p:nth-of-type(2) {
    position: absolute;
    top: -3rem;
    left: 20%;
  }

  .method-detail-banner-box p:nth-of-type(3) {
    position: absolute;
    top: -2.4rem;
    left: 32%;
  }

  /* 指南 */
  .guide-title {
    font-size: 0.36rem;
    display: flex;
    margin-bottom: 0.2rem;
  }

  .guide-title div {
    width: 0.09rem;
    background-color: #00A0E9;
  }

  .guide-title span {
    margin-left: 0.1rem;
  }

  .guide-title p {
    margin-left: 0.15rem;
  }

  .guide-title p span {
    color: #00A0E9;
  }

  .guide-body {
    width: 100%;
    height: 7.2rem;
  }

  .guide-body ul {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;

  }

  .guide-body ul li {
    width: 30%;
    border: 0.01rem solid #CCCCCC;
    margin-bottom: 0.35rem;
    transition: all 0.2s;
  }

  .el-rate >>> .el-rate__icon {
    margin-right: 0;
  }

  .guide-body-list-box {
    padding: 0.1rem 0;
    background-color: #fff;
  }

  .guide-body-list {
    padding: 0 0.2rem;
  }

  .guide-top {
    border-bottom: 0.01rem solid #ccc;
  }

  .guide-body-list-title {
    display: flex;
    position: relative;
  }

  .guide-body-list-title span:nth-of-type(1) {
    font-size: 0.18rem;
    font-weight: 500;
  }

  .guide-body-list-title .el-image {
    margin-left: auto;

  }

  .guide-body-list-title span:nth-of-type(2) {
    position: absolute;
    right: 0.045rem;
    top: 0.05rem;
    font-size: 0.12rem;
    color: #fff;
  }

  .guide-body-list-score {
    display: flex;
    margin: 0.08rem 0;
  }

  .guide-body-list-score span:nth-of-type(1) {
    margin-left: 0.1rem;
    color: #FFBA00;
  }

  .guide-body-list-score span:nth-of-type(2) {
    margin-left: 0.05rem;
    color: #333;
    font-size: 0.12rem;
    margin-top: 0.02rem;
  }

  .guide-body-list-p {
    margin-top: 0.08rem;
    font-size: 0.12rem;
    letter-spacing: 0.02rem
  }

  .guide-body ul li:hover {
    box-shadow: 0.05rem 0.05rem 0.1rem #bbbbbb;
  }

  /* 统计 */
  .statistics-title div {
    background-color: #626C91;
  }

  .statistics-map {
    width: 80%;
    margin: 0 auto;
  }

  /* 游记 */
  .travels-box {
    margin-bottom: 0.35rem;
  }

  .travels-title div {
    background-color: #EC6941;
  }

  .travels-carousel {
    width: 100%;
  }

  .el-carousel__item:nth-of-type(1) {
    background: url("../../../static/images/img/banner_0313_04.jpg") no-repeat center 0;
    background-size: 100%;
  }

  .el-carousel__item:nth-of-type(2) {
    background: url("../../../static/images/img/banner_0313_03.jpg") no-repeat center 0;
    background-size: 100%;
  }

  .el-carousel__item:nth-of-type(3) {
    background: url("../../../static/images/img/banner_0313_02.jpg") no-repeat center 0;
    background-size: 100%;
  }

  .el-carousel >>> .el-carousel__button {
    width: 0.13rem;
    height: 0.13rem;
    border-radius: 50%;
    /*border: 0.01rem solid #1ab2db;*/
    opacity: 1;
    background-color: #EC6941;
    position: absolute;
    margin-left: 5.5rem;
    top: -0.1rem;
  }

  .el-carousel >>> .el-carousel__indicator--horizontal {
    display: inline-block;
    padding: 12px 10px;
  }

  .el-carousel >>> .el-carousel__indicator.is-active button {
    background-color: #EC6941;
    transform: scale(1.5);
  }

  /* 电梯开始 */
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

  /* 行程 */
  /*列表*/
  .travel-ul > li {
    display: flex;
    height: 1.73rem;
    padding: 0.15rem 0 0.27rem;
    border-bottom: 0.01rem solid #ccc;
    position: relative;
  }

  .image-left {
    position: relative;
    overflow: hidden;
  }

  .right-top {
    position: absolute;
    top: -0.12rem;
    right: -0.42rem;
    text-align: center;
    color: #fff;
    background: #FFC600;
    width: 1rem;
    padding-top: 0.2rem;
    line-height: 0.2rem;
    transform: rotate(45deg);
  }

  .travel-ul > li h2 {
    font-size: 0.24rem;
    font-weight: normal;
  }

  .center-text {
    padding-left: 0.16rem;
  }

  .center-text > p, .center-text > div {
    padding-left: 0.12rem;
  }

  .center-text > div {
    height: 0.26rem;
    padding-top: 0.13rem;
  }

  .center-text > div span {
    border: 0.01rem solid #ccc;
    font-size: 0.16rem;
    padding: 0.01rem;
    margin-right: 0.04rem;

  }

  .center-text > div span:nth-of-type(n+4) {
    background: #1AB2DB;
    color: #fff;
    border: none;
  }

  .center-text p {
    line-height: 0.3rem;
  }

  .center-text p span {
    color: #00CC66;
    font-weight: bold;
  }

  .evaluate {
    position: absolute;
    right: 0;
    bottom: 0.28rem;
    width: 1.43rem;
    text-align: right;
  }

  .evaluate > div > span {
    font-size: 0.34rem;
    color: #FF0000;
  }

  .gray-box {
    height: 0.52rem;
    background: #F6F6F6;
    border: 0.01rem solid #ccc;
    display: flex;
  }

  .gray-box > div:first-of-type {
    width: 0.51rem;
    border-right: 0.01rem dashed #ccc;
    padding: 0.04rem;
    box-sizing: border-box;
  }

  .gray-box > div:first-of-type > span {
    font-size: 0.36rem;
    color: #999999;
  }

  .gray-box > div:last-of-type {
    padding: 0.06rem 0 0 0.1rem;
    box-sizing: border-box;
  }

  .gray-box > div:last-of-type span {
    color: #999;
  }
</style>
