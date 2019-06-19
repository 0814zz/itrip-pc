<template>
  <div class="container">
    <!-- 海外酒店 -->
    <div class="points-list points-margin">
      <div class="points-list-header">
        <div class="points-list-left left-overseas">
          <span>海外酒店</span>
        </div>
        <ul class="nav nav-tabs nav-tabs1">
          <li class="active1"><span>普吉酒店</span></li>
          <li><span>曼谷酒店</span></li>
          <li><span>首尔酒店</span></li>
          <li><span>清迈酒店</span></li>
          <li><span>新加坡酒店</span></li>
        </ul>
        <div class="header-list-right">
          <router-link to="tavern-list">更多海外酒店 ></router-link>
        </div>
      </div>
      <Tavern2></Tavern2>
    </div>
    <!-- 热门城市酒店 -->
    <div class="points-list points-margin">
      <div class="points-list-header">
        <div class="points-list-left left-city">
          <span>热门城市酒店</span>
        </div>
        <ul class="nav nav-tabs  nav-tabs2">
          <li class="active2"><span>北京</span></li>
          <li><span>上海</span></li>
          <li><span>广州</span></li>
          <li><span>南京</span></li>
          <li><span>杭州</span></li>
        </ul>
        <div class="header-list-right">
          <router-link to="tavern-list">更多热门城市酒店 ></router-link>
        </div>
      </div>
      <Tavern3></Tavern3>
    </div>
    <div class="travel-ad-body points-margin">
      <el-image src="static/images/img/travel-ad-01.png"></el-image>
      <el-image src="static/images/img/travel-ad-02.png"></el-image>
    </div>
    <!-- 当季热门目的地 -->
    <div class="points-list points-margin">
      <div class="points-list-header">
        <div class="points-list-left left-quarter">
          <span>当季热门目的地</span>
        </div>
        <ul class="nav nav-tabs  nav-tabs3">
          <li class="active3"><span>美食</span></li>
          <li><span>赏花</span></li>
          <li><span>登山</span></li>
          <li><span>古镇</span></li>
          <li><span>度假</span></li>
        </ul>
        <div class="header-list-right">
          <router-link to="tavern-list">更多当季热门目的地 ></router-link>
        </div>
      </div>
      <Tavern4></Tavern4>
    </div>
    <!-- 特色酒店推荐 -->
    <div class="points-list points-margin points-list-hotel">
      <div class="points-list-header">
        <div class="points-list-left left-characteristic">
          <span>特色酒店推荐</span>
        </div>
      </div>
      <div class="points-list-hotel-body">
        <ul>
          <li class="points-list-active">
            <el-image src="static/images/img/tavern/tese/travel-accordion-1.jpg"></el-image>
            <div>青旅酒店</div>
          </li>
          <li>
            <el-image src="static/images/img/tavern/tese/travel-accordion-2.jpg"></el-image>
            <div>古镇酒店</div>
          </li>
          <li>
            <el-image src="static/images/img/tavern/tese/travel-accordion-3.jpg"></el-image>
            <div>亲子酒店</div>
          </li>
          <li>
            <el-image src="static/images/img/tavern/tese/travel-accordion-4.jpg"></el-image>
            <div>情侣酒店</div>
          </li>
          <li>
            <el-image src="static/images/img/tavern/tese/travel-accordion-5.jpg"></el-image>
            <div>依山酒店</div>
          </li>
          <li>
            <el-image src="static/images/img/tavern/tese/travel-accordion-6.JPG"></el-image>
            <div>最美酒店</div>
          </li>
        </ul>

      </div>
    </div>
  </div>
</template>

<script>
  import Tavern2 from './tavern2'
  import Tavern3 from './tavern3'
  import Tavern4 from './tavern4'
  export default {
    components:{
      Tavern2,
      Tavern3,
      Tavern4
    },
  }
</script>

<style scoped>

  .points-list {
    height: 5.95rem;
    width: 100%;
  }

  .points-margin {
    margin: 0.3rem 0.2rem 0.5rem 0.2rem;
  }

  .points-list-header {
    width: 100%;
    height: 0.39rem;
    display: flex;
    border-bottom: 0.01rem solid #ddd;
  }

  .points-list-left {
    font-size: 0.24rem;
    color: #333;
    font-weight: bold;
  }

  .points-list-left span {
    line-height: 0.39rem;
    padding: 0.05rem 0 0.07rem 0.1rem;
  }

  .left-overseas span {
    border-left: 0.05rem solid #1448AD;
  }

  .left-city span {
    border-left: 0.05rem solid #00A0e9;
  }

  .left-quarter span {
    border-left: 0.05rem solid #e7a54d;

  }

  .left-characteristic span {
    border-left: 0.05rem solid #8fc31f;
  }

  .nav-tabs {
    display: flex;
  }

  .nav-tabs li {
    margin-top: 0.08rem;
  }

  .nav-tabs li:first-child {
    margin-left: 2.6rem;
  }

  .nav-tabs li span {
    margin: 0.1rem 0.2rem 0 0;
    padding: 0.11rem;
    font-weight: bold;
    font-size: 0.16rem;
    cursor: pointer;
  }

  .nav-tabs .active1 span{
    background-color: #003399;
  }
  .nav-tabs .active2 span {
    background-color: #00A0e9;
  }

  .nav-tabs .active3 span {
    background-color: #e7a54d;
  }
  .nav-tabs .active1 span,.nav-tabs .active2 span,.nav-tabs .active3 span{
    color: #fff;
    border-top-left-radius: 0.04rem;
    border-top-right-radius: 0.04rem;
  }
  .header-list-right {
    margin-left: auto;
    line-height: 0.39rem;
  }

  .header-list-right span:hover {
    color: #ffac0e;
  }
  .column-ele-btn {
    background-color: #eb6100;
    color: #fff;
    padding: 0.03rem;
    font-size: 0.14rem;
    cursor: pointer;
    margin-left: 1rem;
  }

  .column-ele li:nth-of-type(6) .el-image {
    mix-blend-mode: luminosity;
  }

  .travel-ad-body {
    display: flex;
  }

  .travel-ad-body .el-image {
    height: 1.8rem;
  }

  .travel-ad-body .el-image:nth-of-type(2) {
    margin-right: -0.38rem;
    margin-left: 0.15rem;
    width: 9rem;
  }

  .points-list-hotel {
    height: 3.8rem;
    width: 100%;
  }

  /* 特色酒店推荐 */
  .points-list-hotel-body {
    height: 3rem;
    width: 100%;
    margin-top: 0.3rem;
  }

  .points-list-hotel-body ul li {
    float: left;
    text-align: center;
    vertical-align: middle;
    position: relative;
    box-sizing: border-box;
    color: #fff;
  }

  .points-list-hotel-body ul li .el-image {
    height: 3rem;
    width: 4rem;
  }

  .points-list-hotel-body ul {
    display: flex;
    flex-wrap: nowrap;
    width: 12rem;
  }

  .points-list-hotel-body ul li div:last-of-type {
    font-size: 30px;
    line-height: 40px;
    width: 30px;
    display: inline-block;
    position: absolute;
    top: 20%;
    transform: translateX(-0.15rem);
  }

  .points-list-hotel-body ul li {
    transition: all 0.5s;
    width: 4rem;
    overflow: hidden;
  }
  .points-list-hotel-body ul li:hover {
    width: 10rem;
  }
</style>
