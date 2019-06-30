<template>
  <div>
    <div class="points-list-body">
      <div>
        <el-image :src="leftcity" class="left-img"></el-image>
      </div>
      <div class="list-body-column">
        <div class="column">
          <router-link to="/hotelDetail">
            <ul class="column-ele">
              <li v-for="(item,index) in cityImg" class="column-ele-li">
                <el-image :src="item.src"></el-image>
                <div class="column-ele-return">
                  <span>返现</span>
                </div>
                <div class="column-ele-title">
                  <span>{{item.title}}</span>
                </div>
                <div class="column-ele-title column-ele-text">
                  ￥
                  <span class="money">{{item.money}}</span>
                  起
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
        leftcity: '',
        cityImg: [],
      }
    },
    mounted() {
      $(function () {
        $(".nav-tabs2").find('li').click(function () {
          $(".nav-tabs2").find('li').removeClass('active2');
          $(this).addClass('active2');
        })
      });
      this.$axios
        .get("static/textData/tavern.json")
        .then(res => {
          this.leftcity = res.data.city.leftSrc;
          this.cityImg = res.data.city.urlImg;
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

  .column-ele-li:nth-of-type(6) .column-ele-return,.column-ele-li:nth-of-type(6) .el-image,.column-ele-li:nth-of-type(6) .column-ele-text .money{
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
  }

  .column-ele-title .right-txt {
    font-size: 0.12rem;
    margin-left: 1.18rem;
  }

  .column-ele-text {
    font-size: 0.14rem;
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
