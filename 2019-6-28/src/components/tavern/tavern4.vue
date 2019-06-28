<template>
  <div>
    <div class="points-list-body">
      <div>
        <el-image :src="leftquarter" class="left-img"></el-image>
      </div>
      <div class="list-body-column">
        <div class="column">
          <router-link to="/hotelDetail">
            <ul class="column-ele">
              <li v-for="(item,index) in quarterImg" class="column-ele-li">
                <el-image :src="item.src"></el-image>
                <div class="column-ele-return">
                  <span>返现</span>
                </div>
                <div class="column-ele-title-box">
                  <div class="column-ele-title">
                    <div class="column-ele-title-num">
                      <span>{{item.title}}</span>
                      <span>共有{{item.room}}间酒店</span>
                    </div>
                  </div>
                </div>
                <div class="column-ele-title column-ele-text column-ele-title-num">
                  <div>
                    ￥
                    <span class="money">{{item.money}}</span>
                    起
                  </div>
                  <div class="reserve-box">
                    <span class="reserve">立即预定</span>
                  </div>
                </div>
                <div class="points-shouqing"></div>
              </li>
            </ul>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        leftquarter: '',
        quarterImg: []
      }
    },
    mounted() {
      $(function () {
        $(".nav-tabs3").find('li').click(function () {
          $(".nav-tabs3").find('li').removeClass('active3');
          $(this).addClass('active3');
        })
        //  手风琴
        $(" .points-list-hotel-body ul").find("li").mouseover(function (index) {
          $(" .points-list-hotel-body ul").find("li").css("opacity", "0.5");
          $(this).css("opacity", "1")
        }).mouseout(function () {
          $(" .points-list-hotel-body ul").find("li").css("opacity", "1");
        })
      });
      this.$axios
        .get("static/textData/tavern.json")
        .then(res => {
          this.leftquarter = res.data.quarter.leftSrc;
          this.quarterImg = res.data.quarter.urlImg;
        })
        .catch(err => {
          console.log(err);
        });
    }
  }
</script>

<style scoped>
  /* 组件 */
  .points-list-body {
    margin-top: 0.37rem;
    display: flex;
  }

  .left-img {
    width: 279px;
    height: 520px;
  }

  .list-body-column {
    height: 5.2rem;
    width: 100%;
  }

  .column {
    width: 100%;
    height: 100%;
    padding-left: 0.2rem;
    box-sizing: border-box;
  }

  .column-ele {
    display: flex;
    width: 100%;
    height: 100%;
    justify-content: space-between;
    flex-wrap: wrap;
    position: relative;
  }

  .column-ele li {
    border: 0.01rem solid #333;
    background-color: #fff;
  }

  .column-ele li:nth-of-type(1), .column-ele li:nth-of-type(2), .column-ele li:nth-of-type(3) {
    margin-bottom: 0.2rem;
  }

  .column-ele-li {
    position: relative;
  }

  .column-ele-return {
    width: 0;
    height: 0;
    position: absolute;
    top: 0;
    right: 0;
    z-index: 1;
    border-right: 20px solid #ff002a;
    border-top: 20px solid #ff002a;
    border-left: 20px solid transparent;
    border-bottom: 20px solid transparent;
  }

  .column-ele-li:nth-of-type(6) .column-ele-return, .column-ele-li:nth-of-type(6) .el-image, .column-ele-li:nth-of-type(6) .column-ele-text .money {
    mix-blend-mode: luminosity;
  }

  .column-ele-return span {
    width: 0.3rem;
    height: 0.3rem;
    position: absolute;
    top: -15px;
    right: -17px;
    color: #fff;
    transform: rotate(45deg);
  }

  .column-ele-title {
    font-size: 0.18rem;
    padding: 0.05rem 0 0 0.12rem;
    display: block;
    width: 100%;

  }

  .column-ele-title-num {
    display: flex;
  }

  .column-ele-title span:nth-of-type(2) {
    font-size: 0.12rem;
    margin-left: auto;
    padding-right: 0.25rem;
  }

  .column-ele-text {
    font-size: 0.14rem;
  }

  .reserve-box {
    margin-top: 0.1rem;
  }

  .column-ele-text .reserve {
    background-color: #EB6100;
    color: #fff;
    padding: 0.03rem;
    margin-left: 1rem;
  }

  .column-ele-text .money {
    font-size: 0.34rem;
    color: #ff0000;
  }

  .column-ele li:hover {
    box-shadow: 0 0.04rem 0.04rem #666;
    margin-top: -0.06rem;
  }

  .column-ele li:nth-of-type(6) .points-shouqing {
    background: url('../../../static/images/img/shouqing.png');
    bottom: 0;
    right: 0;
    position: absolute;
    width: 153px;
    height: 121px;
  }

  .column-ele li:hover .points-shouqing {
    bottom: 0.03rem;
  }

  /* 组件 */
</style>
