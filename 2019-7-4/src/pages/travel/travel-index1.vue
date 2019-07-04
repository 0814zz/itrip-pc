<template>
  <div class="container">
    <div class="top">
      <div class="icon">
        <el-image :src="icon"></el-image>
      </div>
      <div class="title">
        <h2>{{title}}</h2>
        <div>
          <el-image :src="tips"></el-image>
        </div>
      </div>
      <div class="rightLink">
        <a href="#">{{more}}</a>
      </div>
    </div>
    <div class="content">
      <div class="leftImg">
        <el-image :src="leftSrc"></el-image>
      </div>

        <ul class="ulImg">
          <li v-for="(item,index) in rightData">
            <router-link to="travel-list">
            <div class="rightTop">力荐</div>
            <el-image fit="contain" :src="item.src"></el-image>
            <h3>{{item.describe}}</h3>
            <p class="price">&yen;<span>{{item.price}}</span>起</p>
            <div class="selling-empty"></div>
            </router-link>
          </li>
        </ul>

    </div>
  </div>
</template>
<script>

  export default {
    props: [
      'travelData'
    ],


    data() {
      return {
        icon: '',
        more: '',
        tips: '',
        leftSrc: '',
        rightData: [],
        title:''
      }
    },
    mounted(){
      console.log(this.travelData)
    },

    watch: {
      travelData: function (val) {
        this.title = val.title;
        this.icon = val.icon;
        this.tips = val.tips;
        this.more = val.more;
        this.leftSrc = val.leftSrc;
        this.rightData = val.rightData;
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

  .top {
    display: flex;
    width: 100%;
  }

  h2 {
    font-weight: normal;
    color: #666;
    margin-bottom: 0.04rem;
  }

  .title {
    margin-left: 0.2rem;
  }

  .rightLink {
    margin-left: auto;
    padding-right: 0.1rem;
    display: flex;
  }

  .rightLink a {
    font-size: 0.15rem;
    margin-top: 0.3rem;
    color: #666;
  }

  .rightLink a:hover {
    color: #fd821b;
  }

  /*展示内容*/
  .content {
    width: 99.2%;
    margin: 0.12rem auto 0;
    display: flex;
    justify-content: space-between;
  }

  .leftImg {
    cursor: pointer;
  }

  .ulImg {
    width: 74.6%;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
  }

  .ulImg li {
    width: 32.2%;
    border: 0.01rem solid #ddd;
    height: 2.53rem;
    position: relative;
    overflow: hidden;
    background: #fff;
    cursor: pointer;
    transition: all 0.3s;
  }

  .ulImg li:nth-of-type(n+4) {
    margin-top: 0.05rem;
  }

  .ulImg li:last-of-type .el-image {
    filter: grayscale(100%);
  }

  .ulImg li:last-of-type .rightTop {
    background: #666;
  }

  .ulImg li:last-of-type .price span {
    color: #333;
  }
  .ulImg li:hover {
    position: relative;
    top:-0.04rem;
    box-shadow: 0 0.04rem 0.04rem rgba(0, 0, 0, 0.4);
  }

  .ulImg li:last-of-type .selling-empty {
    background: url(../../../static/images/img/shouqing.png);
    bottom: 0;
    right: 0;
    position: absolute;
    width: 1.53rem;
    height: 1.21rem;
  }

  .rightTop {
    position: absolute;
    top: -0.13rem;
    right: -0.31rem;
    text-align: center;
    padding-top: 0.2rem;
    width: 0.8rem;
    height: 0.2rem;
    background: #FFC600;
    font-size: 0.12rem;
    color: #fff;
    transform: rotate(45deg);
    z-index: 1;
  }

  h3 {
    font-size: 0.18rem;
    font-weight: normal;
    text-indent: 0.5em;
    line-height: 0.36rem;
  }

  .price {
    margin-top: 0.02rem;
    text-indent: 1em;
  }

  .price span {
    font-size: 0.32rem;
    color: #FF0000;
  }
</style>
