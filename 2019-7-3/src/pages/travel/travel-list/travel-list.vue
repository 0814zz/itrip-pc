<template>
  <div>
    <Head></Head>
    <div class="container" style="margin-top: 0.34rem">
      <!--位置-->
      <div class="top-box">
        <div class="location">
          <div>
            <i class="fa fa-map-marker"></i>&nbsp;北京市&nbsp;
            <i class="fa fa-angle-down"></i>
          </div>
          <div>
            <i class="fa fa-fire"></i>北京市
            <!--<input style="border: none;outline:none;width:0.5rem" type="text" value="北京市" id="citySelect_two">-->
            <i class="fa fa-angle-down"></i>
          </div>
        </div>
        <div class="search-right">
          <div class="allproduct">&nbsp;全部产品&nbsp;
            <i class="fa fa-angle-down"></i>
          </div>
          <input type="text" placeholder="景点\地区\关键词">
          <div class="search-icon"><i class="fa fa-search"></i></div>
        </div>
      </div>

      <!--选择路线-->
      <div>
        <p style="line-height: 0.4rem; margin-top: 0.1rem">旅游>北京旅游</p>
        <div class="tabs_travel">
          <el-tabs v-model="activeName" type="border-card">
            <el-tab-pane label="北京旅游" name="first">
              <Travel_list_tabs></Travel_list_tabs>
            </el-tab-pane>
            <el-tab-pane label="出发地参团" name="second">
              <Travel_list_tabs></Travel_list_tabs>
            </el-tab-pane>
          </el-tabs>
        </div>
      </div>

      <!--列表-->
      <div style="position: relative">
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
        <div class="selling-empty"></div>
      </div>
      <div>
        <div class="paging">
          <el-pagination background layout="prev, pager, next" :total="50"></el-pagination>
        </div>
      </div>



    </div>

     
    <Foot1></Foot1>
    <Foot3></Foot3>

  </div>
</template>
<script>
  import Head from "@/components/header/head"
  import Foot1 from "@/components/footer/foot-1"
  import Foot3 from "@/components/footer/foot-3"
  import Travel_list_tabs from './travel-list-tabs.vue'


  export default {
    components: {
      Head,
      Foot1,
      Foot3,
      Travel_list_tabs,
    },
    data() {
      return {
        activeName: 'first',
        travel_list: [
          {
            src: "static/images/img/trl01_0316.jpg", title: "游圣诞小镇密云1日自由行·南山滑雪畅玩+古北水镇夜景",
            p1:"独览“全球不容错过的25处风景之首”，欣赏星空下的古北水镇迷人夜色",p2:"二、三、四、五、六",
            num:"356"
          },
          {
            src: "static/images/img/trl02_0316.jpg", title: "北京1日自由行·八达岭长城＋十三陵定陵＋ 奥运场馆一日游",
            p1:"带你领略京都之美。",p2:"一、二、三、四、五、六",
            num:"158"
          },
          {
            src: "static/images/img/trl03_0316.jpg", title: "北京5日自由行(4钻)·不含交通王府井四星+5折故宫门票+接送",
            p1:"王府井长安街，吃喝玩乐旅游样样行。。",p2:"一、二、三、四、五、六、日",
            num:"890"
          },
          {
            src: "static/images/img/trl05_0316.jpg", title: "北京5日自由行(5钻)·不含交通金茂威斯汀冬季促销 元旦春节",
            p1:"不到700晚就可以住威斯汀，你没看错，还赠双早哦。",p2:"一、二、三、四、五、六、日",
            num:"1687"
          },
          {
            src: "static/images/img/trl06_0316.jpg", title: "昌平2日自由行(4钻)·九华山庄贵宾楼 观景阳台私汤+赠娱乐大礼包",
            p1:"自带独立观景阳台专属温泉池，足不出户即可恣意享受温泉之乐 ",p2:"二、四、六",
            num:"395"
          },
          {
            src: "static/images/img/travel-scenic-spot-01.png", title: "宿古北之光】古北水镇2日1晚跟团游·水镇夜景+温泉+老北京涮肉+儿童游乐...",
            p1:"5星古北之光温泉酒店住宿+老北京铜锅涮肉+温泉，冬天出游从里到外都暖暖的！",p2:"二、三、四、五、六、日",
            num:"2669"
          },

        ]
      }
    },
    mounted() {

    }


  }
</script>


<style scoped>
  @media (min-width: 1200px) {
    .container {
      width: 1160px;
    }
  }

  /*顶部搜索*/
  .top-box div {
    display: flex;
  }

  .top-box {
    width: 100%;
    display: flex;
    justify-content: space-between;
  }

  .location > div, .allproduct {
    width: 1.28rem;
    text-align: center;
    height: 0.57rem;
    padding: 0.16rem 0.28rem;
    box-sizing: border-box;
    border-radius: 0.06rem;
    border: 0.02rem solid #1AB2DB;
    cursor: pointer;
    margin-right: 0.04rem;
  }

  .location > div .fa, .allproduct .fa {
    position: relative;
    top: 0.03rem;
  }

  .allproduct {
    margin-right: -0.02rem;
    width: 1.4rem;
    padding: 0.16rem 0.3rem;
    border: 0.03rem solid #FFCC00;
    border-radius: 0;
  }

  .search-right > input {
    width: 6.8rem;
    text-indent: 1em;
    border: 0.03rem solid #FFCC00;
    outline: none;
  }

  .search-icon {
    font-size: 0.25rem;
    background: #FFCC00;
    width: 0.5rem;
    height: 0.57rem;
    color: #fff;
    padding: 0.13rem;
    box-sizing: border-box;
    cursor: pointer;
  }

  .tabs_travel > > > .el-tabs--border-card > .el-tabs__content {
    padding: 0 0.1rem;

  }

  .tabs_travel > > > .el-tabs--border-card {
    background: #FFF;
    border: 1px solid #DCDFE6;
    box-shadow: none;
  }

  /*列表*/
  .travel-ul>li{
    display: flex;
    height:1.73rem;
    padding:0.15rem 0 0.27rem;
    border-bottom:0.01rem solid #ccc;
    position: relative;
  }
  .image-left{
    position: relative;
    overflow: hidden;
  }
  .right-top{
    position: absolute;
    top:-0.12rem;
    right:-0.42rem;
    text-align: center;
    color:#fff;
    background: #FFC600;
    width:1rem;
    padding-top:0.2rem;
    line-height:0.2rem;
    transform: rotate(45deg);
  }
  .travel-ul>li h2{
    font-size: 0.24rem;
    font-weight: normal;
  }
  .center-text{
    padding-left:0.16rem;
  }
  .center-text>p,.center-text>div{
    padding-left: 0.12rem;
  }
  .center-text>div{
    height: 0.26rem;
    padding-top: 0.13rem;
  }
  .center-text>div span{
    border:0.01rem solid #ccc;
    font-size: 0.16rem;
    padding:0.01rem;
    margin-right: 0.04rem;
  }
  .center-text>div span:nth-of-type(n+4){
    background: #B9E8F4;
  }
  .center-text p{
    line-height: 0.3rem;
  }
  .center-text p span{
    color:#00CC66;
  }
  .evaluate{
    position: absolute;
    right: 0;
    bottom: 0.28rem;
    width:1.43rem;
    text-align: right;
  }

  .evaluate>div>span{
    font-size: 0.34rem;
    color:#FF0000;
  }

  .gray-box{
    height:0.52rem;
    background: #F6F6F6;
    border:0.01rem solid #ccc;
    display: flex;
  }
  .gray-box>div:first-of-type{
    width:0.51rem;
    border-right:0.01rem dashed #ccc;
    padding:0.04rem;
    box-sizing: border-box;
  }
  .gray-box>div:first-of-type>span{
    font-size: 0.36rem;
  }
  .gray-box>div:last-of-type{
    padding: 0.06rem 0 0 0.1rem;
    box-sizing: border-box;
  }
  .gray-box>div:last-of-type span{
    color:#999;
  }

  /*最后一个去色*/
  .travel-ul>li:last-of-type{
    filter: grayscale(100%);
  }
  .selling-empty {
    background: url(../../../../static/images/img/shouqing.png);
    bottom: 0;
    left:38%;
    position: absolute;
    width: 1.53rem;
    height: 1.21rem;
    filter: grayscale(0%);
  }

  /*分页*/
  /* 分页 */
  .paging {
    display: flex;
  }
  .paging .el-pagination {
    margin-left: auto;
    padding: 0.3rem 0;
  }
  .paging >>> .el-pagination.is-background .el-pager li:not(.disabled).active {
    background-color: #BABABA;
    color: #FFF;
  }
  .paging >>> .el-pagination.is-background .el-pager li:hover {
    color: #606266;
  }
</style>
