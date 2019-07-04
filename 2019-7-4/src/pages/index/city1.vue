<template>
  <div class="container">
    <div style="padding-left: 0.1rem; width:25%;">
      <h3>热门城市</h3>
      <ul class="cityLink hotCity">
        <li v-for="(item,index) in city.city"><a href="#">{{item}}</a></li>
      </ul>
      <h3>热门景点</h3>
      <ul class="cityLink">
        <li v-for="(item,index) in city.scenery"><a href="#">{{item}}</a></li>
      </ul>
    </div>
    <div class="rightShow">
      <ul class="cityShow">
        <li v-for="(item,index) in rightShow">
          <el-image :src="item.src"></el-image>
          <div class="rightTop">力荐</div>
          <span class="tit">{{item.title}}</span>
          <span class="iconStar">
            <i v-for="item in 5" class="fa fa-star" aria-hidden="true"></i>
            <span class="gradeStar">
              <i v-for="(item,index) in item.mark" :key="index" class="fa fa-star grade" aria-hidden="true"></i>
            </span>
          </span>
          <p>{{item.num1}}去过 {{item.num2}}人想去</p>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>

  export default {
    data() {
      return {
        city: {
          city: ['西藏', '云南', '四川', '海南', '江苏', '浙江', '新疆', '陕西', '山西', '广西',
            '宁夏', '河南', '湖北', '湖南', '青海', '贵州', '内蒙古', '安徽', '山东', '广东',
            '江西', '河北', '甘肃', '福建', '辽宁', '黑龙江', '安徽', '山东'],
          scenery: [
            '丽江', '马尔代夫', '三亚', '九寨沟', '普陀山', '少林寺', '乌镇', '鼓浪屿', '九华山',
            '五台山', '凤凰古城', '迪拜', '灵山大佛', '世纪欢乐园', '大同悬空寺', '西湖', '周庄', '爱琴海'],
        },
        rightShow: [
          {src: "static/images/img/lygl01_0314.jpg", title: "稻城亚丁", num1: "1023", num2: "987", mark: 3},
          {src: "static/images/img/lygl02_0314.jpg", title: "九寨沟", num1: "562", num2: "876", mark: 2},
          {src: "static/images/img/lygl03_0314.jpg", title: "青海湖", num1: "721", num2: "560", mark: 1},
          {src: "static/images/img/lygl04_0314.jpg", title: "乌镇", num1: "902", num2: "683", mark: 2},
          {src: "static/images/img/lygl05_0314.jpg", title: "婺源", num1: "896", num2: "596", mark: 5},
          {src: "static/images/img/lygl06_0314.jpg", title: "香格里拉", num1: "632", num2: "803", mark: 1},
        ]
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

  .container {
    display: flex;
    padding:0.04rem 0;
  }

  .cityLink {
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    width:90%;
    margin-left: -0.1rem;
    padding: 0 0.3rem 0.2rem 0;
    text-align: center;
    color:#666;
  }
  .hotCity{
    width: 84%;
    margin-left: 0;
  }
  .cityLink li {
    width: 33.3%;
    margin-top: 0.1rem;
    box-sizing: border-box;
  }
  .cityLink li a{
    width:100%;
    height:100%;
  }
  .cityLink li a:hover{
    background: #FFBA00;
    color:#fff;
    padding:0.04rem 0.08rem;
    border-radius: 0.06rem;
  }

  .hotCity li {
    width: 0.6rem;
  }
  .rightShow {
    width: 75%;
  }
  .cityShow {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    padding-right:0.04rem
  }
  .cityShow li{
    width:32.6%;
    height:2.54rem;
    border:0.01rem solid #ddd;
    margin-bottom: 0.06rem;
    cursor: pointer;
    transition: all 0.3s;
    position: relative;
    overflow: hidden;
  }
  .cityShow li:hover{
    margin-top: -0.04rem;
    box-shadow: 0 0.06rem 0.06rem rgba(0,0,0,0.4);
  }
  .cityShow .rightTop{
    position: absolute;
    top:-0.13rem;
    right:-0.31rem;
    text-align: center;
    padding-top: 0.2rem;
    width:0.8rem;
    height:0.2rem;
    background: #FFC600;
    font-size: 0.12rem;
    color:#fff;
    transform: rotate(45deg);
  }
  .cityShow li .el-image{
    width:100%;
  }
  .cityShow li .tit{
    font-size: 0.18rem;
    margin-left: 0.04rem;
  }
  .cityShow li p{
    margin:0.1rem 0.04rem;
  }
  .cityShow li i{
    font-size: 0.22rem;
    margin: 0.02rem 0.01rem 0 0;
  }
  .cityShow li .iconStar{
    position: relative;
    top:0.02rem;
    margin-left: 0.1rem;
    color:#E3E3E3;
  }
  .gradeStar{
    position: absolute;
    left:0;
  }
  .grade{
    color:#FFBA00;
  }
</style>
