<template>
  <div class="container">
    <div class="left-nav">
      <router-link to="travel-list">
        <ul class="left-nav-ul">
          <li v-for="(item,index) in leftNav" :key="index">
            <div>
              <h4>{{item.title}}</h4>
              <p>
                <a v-for="(item,index) in item.link" :key="index" href="#">{{item}}</a>
              </p>
              <span class="right-arror">></span>
            </div>
            <ul class="left-nav-ul-ul">
              <li><h4>周边旅游</h4>
                <p>
                  <a href="#">爸妈游</a>&nbsp;<a href="#">上海迪士尼</a>&nbsp;<a href="#">蜜月游</a>&nbsp;<a href="#">徒步</a>&nbsp;<a
                  href="#"> 越野自驾</a>
                </p>
              </li>
              <li><h4>国内旅游</h4>
                <p>
                  <a href="#">爸妈游</a>&nbsp;<a href="#">上海迪士尼</a>&nbsp;<a href="#">蜜月游</a>&nbsp;<a href="#">徒步</a>&nbsp;<a
                  href="#"> 越野自驾</a>
                </p>
              </li>
              <li><h4>国外旅游</h4>
                <p>
                  <a href="#">爸妈游</a>&nbsp;<a href="#">上海迪士尼</a>&nbsp;<a href="#">蜜月游</a>&nbsp;<a href="#">徒步</a>&nbsp;<a
                  href="#"> 越野自驾</a>
                </p>
              </li>
            </ul>
          </li>
        </ul>
      </router-link>
    </div>
    <div class="right-box">
      <div class="search-box">
        <div style="display: flex"><input class="search" type="text" placeholder="景点\地区\关键词..."><i class="fa fa-search"></i></div>
        <div class="place">
          <i class="fa fa-map-marker"></i>
          <input style="border: none;outline:none;width:0.5rem" type="text" value="北京市" >
          <i class="fa fa-angle-down"></i></div>
      </div>
      <div class="search-link">热门搜索:
        <a href="#">景点活动</a>
        <a href="#">香山</a>
        <a href="#">八达岭</a>
        <a href="#">凤凰岭</a>
        <a href="#">野生动物园</a>
      </div>
      <div>
        <el-carousel class="travel-banner" width="7.72rem" height="3.02rem">
          <el-carousel-item v-for="item in 4" :key="item">
          </el-carousel-item>
        </el-carousel>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        leftNav: [
          {title: '主题旅游', link: ['爸妈游', '上海迪士尼', '蜜月游', '徒步', '越野自驾']},
          {title: '热门旅游', link: ['北京', '天津', '五台山', '承德', '平遥']},
          {title: '主题公园', link: ['上海迪士尼', '北京动物园', '苏州园林']},
          {title: '周边旅游', link: ['密云', '保定', '怀柔', '固安', '燕郊']},
          {title: '国内旅游', link: ['天津', '上海', '青岛', '潍坊', '淄博']},
          {title: '国外旅游', link: ['美国', '加拿大', '新加坡', '澳大利亚', '非洲']},
        ]
      }
    },
    mounted(){
    },


  }
</script>


<style scoped>
  @media (min-width: 1200px) {
    .container {
      width: 1180px;
    }
  }

  .container {
    padding-top: 0.3rem;
    display: flex;
    height: 4.06rem;
    justify-content: space-between;
  }

  .left-nav-ul a:hover {
    color: #FFCC00;
  }

  .left-nav-ul {
    border: 0.02rem solid #1AB2DB;
    padding: 0 0.06rem;
    box-sizing: border-box;
    width: 3.92rem;
  }

  .left-nav-ul > li > div {
    border-bottom: 0.01rem solid #ccc;
    border-top: 0.02rem solid #fff;
    padding: 0.08rem 0 0.04rem 0.16rem;
    position: relative;
    background: #fff;
    z-index: 3;
  }

  .left-nav-ul h4 {
    color: #3399CC;
    font-size: 0.16rem;
    font-weight: normal;
  }

  .left-nav-ul p {
    color: #666;
    line-height: 0.3rem;
  }

  .left-nav-ul p a {
    margin-right: 0.1rem;
  }

  .right-arror {
    position: absolute;
    top: 40%;
    right: 1%;
    font-size: 0.16rem;
  }

  .left-nav-ul-ul {
    padding: 0.1rem 0.2rem 0.1rem 0.14rem;
    border: 0.02rem solid #1AB2DB;
    position: absolute;
    top: -0.02rem;
    right: -3.46rem;
    display: none;
    z-index: 2;
    background: #fff;
  }

  .left-nav-ul-ul h4 {
    color: #333;
    font-weight: bold;
  }

  .left-nav-ul > li:hover .left-nav-ul-ul {
    display: block;
  }

  .left-nav-ul > li:hover > div {
    border-left: 0.04rem solid #FFCC00;
    width: 96%;
  }

  .left-nav-ul > li:hover {
    position: relative;
    left: -0.06rem;
    width: 103%;
    z-index: 3;
    border: 0.01rem solid #1AB2DB;
    border-right: none;
  }

  .left-nav-ul > li:first-of-type:hover {
    border-top: none;
  }

  .left-nav-ul > li:last-of-type:hover {
    border-bottom: none;
  }

  .left-nav-ul > li:hover .right-arror {
    right: 0.14rem;
    font-weight: bold;
  }

  .right-box{
    width:65.5%;
    padding-top:0.1rem;
  }
  .search-box{
    display: flex;
    width:100%;
   justify-content: space-between;
    margin-left: auto
  }

  .search{
    width:5.9rem;
    height:0.6rem;
    border:0.04rem solid #FFCC00;
    border-right:none;
    outline: none;
    text-indent: 1em;
    box-sizing: border-box;
  }
  .fa-search{
    width:0.6rem;
    line-height: 0.6rem;
    height: 0.6rem;
    font-size: 0.26rem;
    color:#fff;
    background: #FFCC00;
    text-align: center;
    box-sizing: border-box;
    cursor: pointer;
  }
  .place{
    color:#333;
    line-height:0.6rem;
    cursor: pointer;
  }
  .place .fa{
    position: relative;
    top: 0.02rem;
    color:#999;
    font-size: 0.2rem;
  }
  .fa-angle-down{
    margin-left: 0.2rem;
  }
  .search-link{
    line-height:0.35rem;
    color:#999;
  }
  .search-link a{
    margin-left: 0.2rem;
    color:#333
  }

  /*轮播*/
  .el-carousel__item:nth-of-type(1) {
    background: url("../../../static/images/img/travel_message/travel/banner/1.jpg") center no-repeat;
    background-size: 7.72rem 3.02rem;
  }

  .el-carousel__item:nth-of-type(2) {
    background: url("../../../static/images/img/travel_message/travel/banner/2.jpg") center no-repeat;
    background-size: 7.72rem 3.02rem;
  }

  .el-carousel__item:nth-of-type(3) {
    background: url("../../../static/images/img/travel_message/travel/banner/3.jpg") center no-repeat;
    background-size: 7.72rem 3.02rem;
  }

  .el-carousel__item:nth-of-type(4) {
    background: url("../../../static/images/img/travel_message/travel/banner/4.jpg") center no-repeat;
    background-size: 7.72rem 3.02rem;
  }

  .el-carousel{
    width: 100%;
  }
  .el-carousel >>> .el-carousel__button {
    width: 0.13rem;
    height: 0.13rem;
    border-radius: 50%;
    border: 0.01rem solid #1ab2db;
    background: none;
    opacity: 1;
    position: absolute;
    margin-left: 2.8rem;
    margin-top: 0.1rem;
    top:-0.1rem;
  }
  .el-carousel>>>.el-carousel__indicator--horizontal {
    display: inline-block;
    padding: 12px 10px;
  }
  .el-carousel >>> .el-carousel__indicator.is-active button {
    background-color: #1AB2DB;
  }


</style>
