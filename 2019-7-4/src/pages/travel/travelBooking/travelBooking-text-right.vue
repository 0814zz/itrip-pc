<template>
    <div class="banner-right-content">
      <div>
        <div class="top-information">
          <div>编号：11037168</div>
          <div class="top-information-nav" @click="fn1">出发地：北京 <i v-show="downShow1" class="fa fa-angle-up"></i><i v-show="!downShow1" class="fa fa-angle-down"></i>
            <ul v-show="downShow1" class="start-price">
              <li>上海<span> &yen;2029</span></li>
              <li>天津<span> &yen;2029</span></li>
              <li>南京<span> &yen;2029</span></li>
              <li>厦门<span> &yen;2029</span></li>
              <li>深圳<span> &yen;2029</span></li>
              <li>无锡<span> &yen;2029</span></li>
              <li>重庆<span> &yen;2029</span></li>
              <li>大连<span> &yen;2029</span></li>
              <li>扬州<span> &yen;2029</span></li>
              <li>广州<span> &yen;2029</span></li>
              <li>珠海<span> &yen;2029</span></li>
              <li>贵阳<span> &yen;2029</span></li>
            </ul>
          </div>
          <div class="top-information-nav" @click="fn2">更多路线<i v-show="downShow2" class="fa fa-angle-up"></i><i v-show="!downShow2" class="fa fa-angle-down"></i>
            <ul v-show="downShow2"  class="more-route">
              <li>北京自助游</li>
              <li>北京跟团游</li>
              <li>上海自助游</li>
              <li>上海跟团游</li>
            </ul>
          </div>
        </div>
        <div>
          <h1>三亚5日4晚半自助游(5钻)·【壕减3000】喜来登品牌海景房</h1>
          <i class="rating-stars"></i>
        </div>
        <div class="light-bg">
          <div class="money">
            <span class="price">&yen;2801</span>/人起&nbsp;
            <div class="label">
              <div>已省600元</div>
              <div>更多优惠<i class="fa fa-angle-down"></i></div>
              <div class="hide-txt">
                注意：如果领取到的是i旅行合作卡，凭卡号（即用户名）和密码登陆i旅行个人帐户后，您可以在“我的i旅行－我的票券”中查看您的抵用券信息，包括金额、有效期、使用范围、是否限额等
              </div>
            </div>
            <span class="line-through">&yen;5399</span>
            <span class="score">4.9</span>
            <span class="score fen">分</span>
            <span class="comment">271条点评</span>
            <span class="last-txt">1126人出游</span>
          </div>
          <div class="light-bg-bottom">
            <div>特卖汇</div>
            <div><span>登陆</span> 后查看更多优惠</div>
          </div>
        </div>
        <div class="flex-row text1">
          <h4>产品特色</h4>
          <ul class="characteristic">
            <li class="active">旅游狂欢趴</li>
            <li>4个景点</li>
            <li>三亚湾</li>
            <li>蜈支洲岛</li>
            <li>高端游</li>
            <li>初游推荐</li>
          </ul>
        </div>
        <div  class="flex-row text2">
          <h4>服务保障</h4>
          <div><i class="fa fa-check-circle"></i>无购物</div>
          <div><i class="fa fa-check-circle"></i>成团保障</div>
        </div>
        <div class="flex-row text3">
          <h4>行程概要</h4>
          <div class="text3-span">
            <span>呀诺达雨林文化旅游区</span><i class="fa fa-angle-right"></i><span>槟榔谷</span><i class="fa fa-angle-right"></i><span>亚龙湾</span><i class="fa fa-angle-right"></i><span>蜈支洲岛</span><i class="fa fa-angle-right"></i><span>自由活动</span>
          </div>
        </div>
        <div class="text4">
          <h4>产品经理推荐</h4>
          <ul>
            <li><i class="fa fa-star"></i>【迎新特惠】全程喜来登/温德姆国际品牌海景房 举步可至私家沙滩 最.高减3000</li>
            <li><i class="fa fa-star"></i>【纯玩行程】“情人岛”蜈支洲一整天,5A景点槟榔谷 带您海岛亲海+雨林洗肺！</li>
            <li><i class="fa fa-star"></i>【轻奢体验】全程空调旅游大巴,15%空车率,专业导游带团,承诺全程100%无购物</li>
          </ul>
          <div class="tips"><i class="fa fa-exclamation-circle" aria-hidden="true"></i> 因航班行程不同，产品特色、服务保障、行程概要、产品经理推荐均以实际选择的线路类型所包含的内容为准。</div>
        </div>
      </div>
    </div>
</template>
<script>

    export default {
      data(){
        return{
          downShow1:false,
          downShow2:false,
        }
      },
      mounted(){
        $(".characteristic li").click(function () {
          $(".characteristic li").removeClass("active");
          $(this).addClass("active");
        })
      },
      methods:{
        fn1:function(){
          this.downShow1=!this.downShow1
        },
        fn2:function(){
          this.downShow2=!this.downShow2
        },
      }

    }
</script>


<style scoped>
  .banner-right-content{
    /*background: #ddd;*/
    border:0.01rem solid #E5E5E5;
    padding:0 0.1rem;
    box-sizing: border-box;
    height:100%;
  }

  .top-information{
    display: flex;
    width:100%;
    justify-content: space-between;
  }
  .top-information>div{
    text-align: center;
    width:33.333%;
    line-height: 0.27rem;
    border-right:0.01rem solid #E5E5E5;
    border-bottom:0.01rem solid #E5E5E5;
    position: relative;
  }
  .top-information>div:last-of-type{
    border-right: none;
  }
  .top-information-nav{
    position: relative;
    cursor: pointer;
  }
  .top-information-nav .fa{
    position: absolute;
    right:0.1rem;
    top:20%;
  }
  .top-information ul{
    width:100%;
    position: absolute;
    top:0.27rem;
    left:-0.01rem;
    border:0.01rem solid #E5E5E5;
    display: flex;
    flex-wrap: wrap;
    background: #fff;
  }
  .top-information ul>li{
    width:49%;
  }
  .start-price li span{
    color:#FF4401;
  }
  h1 {
    font: 28px/40px "microsoft yahei";
    margin: 10px 0 20px 0;
  }
  .light-bg{
    background: #FEF6E8;
    width:100%;
    padding:0 0.1rem;
    box-sizing: border-box;
    color:#666;
  }
  .money{
    display: flex;
    height:0.8rem;
    line-height:0.96rem;
    border-bottom:0.01rem solid #E5E5E5;
    /*overflow: hidden;*/
  }

  .price{
    font-size: 0.34rem;
    color:#FF4401;
    margin-left: 0.06rem;
    margin-top: -0.06rem;
  }
  .label{
    width:0.8rem;
    height: 0.4rem;
    border:0.01rem solid #FF4401;
    margin: 0.2rem;
    color:#FF4401;
  }
  .label>div{
    line-height:0.2rem;
    text-align: center;
  }
  .label>div.hide-txt{
    width:2rem;
    height:1.2rem;
    border:0.01rem solid #1AB2DB;
    color:#666;
    margin-top: 0.01rem;
    display: none;
  }
  .label:hover .hide-txt{
    display: block;
  }
  .label>div:first-of-type{
    background: #FF4401;
    color:#fff;
  }
  .label>div:last-of-type{
    background: #fff;
  }
  .line-through{
    text-decoration: line-through;
  }
  .score{
    color:#1448AD;
    font-size: 0.34rem;
    margin: -0.06rem 0 0 0.56rem;
  }
  .fen{
    font-size: 0.14rem;
    margin: 0;
  }
  .comment{
    margin-left: 0.15rem;
    text-decoration:underline;
    cursor: pointer;
  }
  .last-txt{
    margin-left: 0.15rem;
  }
  .light-bg-bottom{
    height:0.8rem;
    padding-left: 0.06rem;
  }
  .light-bg-bottom>div:first-of-type{
    color:#FF4401;
    padding-top: 0.08rem;
  }
  .light-bg-bottom>div:last-of-type{
    padding-top:0.16rem;
  }
  .light-bg-bottom>div:last-of-type span{
    color:#1448AD;
  }
  .characteristic{
    display: flex;
    justify-content: space-between;
    width:62%;
  }
  .characteristic>li{
    border:0.01rem solid #BFBFBF;
    padding:0.02rem 0.04rem;
    background-color:#eee;
    cursor: pointer;
  }
  .characteristic .active{
    background:#86A5DF ;
    color:#fff;
  }
  .flex-row{
    display: flex;
  }
  h4{
    line-height:0.26rem;
    margin-right: 0.2rem;
  }
  .text1{
    margin-top: 0.4rem;
  }
  .text2{
    margin-top: 0.18rem;
    line-height:0.26rem;
  }
  .text2>div{
    margin-right: 0.1rem;
  }
  .text2 .fa{
    font-size: 0.18rem;
    color:#80C26A;
    transform: translateY(0.01rem);
  }
  .text3{
    margin-top: 0.2rem;
  }
  .text3-span{
    margin-top: 0.02rem;
  }
  .text3-span>span{
    border:0.01rem solid #BFBFBF;
    padding:0.02rem 0.04rem;
    margin-right: 0.03rem;
    margin-left: 0.02rem;
  }
  .text3-span>span:first-of-type{
    margin-left: 0;
  }
  .text4{
    margin-top: 0.3rem;
  }
  .text4>ul{
    padding-left:0.24rem;
  }
  .text4>ul li{
    line-height: 0.22rem;
  }
  .tips{
    margin-top: 0.4rem;
    padding-left:0.18rem;
    font-size: 0.12rem;
  }
  .tips .fa{
    color:#FA6363;
    font-size: 0.14rem;
  }

</style>
