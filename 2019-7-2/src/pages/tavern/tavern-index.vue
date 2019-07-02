<template>
  <div>
    <header>
      <Head></Head>
    </header>
    <section>
      <div class="container">
        <div class="tavern-head one">
          <!-- 左边列表 -->
          <div class="tavern-head-left">
            <el-tabs v-model="activeName">
              <el-tab-pane label="国内酒店" name="first">
                <el-form ref="form" :model="form" label-width="70px">
                  <el-form-item label="目的地" placeholder="三亚">
                    <el-col :span="22">
                      <el-input v-model="form.name"></el-input>
                    </el-col>
                  </el-form-item>
                  <el-form-item label="入住时间">
                    <el-col :span="8">
                      <el-date-picker type="date" placeholder="待定" v-model="form.date1"
                                      style="width: 100%;"></el-date-picker>
                    </el-col>
                    <el-form-item label="退房时间">
                      <el-col :span="10">
                        <el-date-picker type="date" placeholder="待定" v-model="form.date2"
                                        style="width: 100%;"></el-date-picker>
                      </el-col>
                    </el-form-item>
                  </el-form-item>
                  <el-form-item label="酒店级别">
                    <el-select v-model="form.region" placeholder="不限">
                      <el-option label="不限" value="shanghai"></el-option>
                      <el-option label="五星级/豪华" value="beijing"></el-option>
                      <el-option label="四星级/高档" value="beijing"></el-option>
                      <el-option label="三星级/舒适" value="beijing"></el-option>
                      <el-option label="二星级以下/经济" value="beijing"></el-option>
                    </el-select>
                  </el-form-item>
                  <el-form-item label="关键词">
                    <el-col :span="22">
                      <el-input v-model="form.resource" placeholder="海岛"></el-input>
                    </el-col>
                  </el-form-item>
                  <div class="tavern-left-link">
                    <a href="#">温泉、</a>
                    <a href="#">亲子、</a>
                    <a href="#">自由行、</a>
                    <a href="#">名声古迹、</a>
                    <a href="#">都市购物</a>
                  </div>
                  <el-form-item class="tavern-left-button">
                    <el-col :offset="12">
                      <router-link to="/tavern-list">
                        <el-button type="primary">搜索行程></el-button>
                      </router-link>
                    </el-col>
                  </el-form-item>
                </el-form>
              </el-tab-pane>
              <el-tab-pane label="海外酒店" name="second">
                <el-form ref="form" :model="form" label-width="70px">
                  <el-form-item label="目的地" placeholder="三亚">
                    <el-col :span="22">
                      <el-input v-model="form.name"></el-input>
                    </el-col>
                  </el-form-item>
                  <el-form-item label="入住时间">
                    <el-col :span="8">
                      <el-date-picker type="date" placeholder="待定" v-model="form.date1"
                                      style="width: 100%;"></el-date-picker>
                    </el-col>
                    <el-form-item label="退房时间">
                      <el-col :span="11">
                        <el-date-picker type="date" placeholder="待定" v-model="form.date2"
                                        style="width: 100%;"></el-date-picker>
                      </el-col>
                    </el-form-item>
                  </el-form-item>
                  <el-form-item label="每间人数">
                    <el-select v-model="form.region" placeholder="2成人">
                      <el-option label="3成人" value="shanghai"></el-option>
                      <el-option label="4成人" value="beijing"></el-option>
                      <el-option label="5成人" value="beijing"></el-option>
                      <el-option label="6成人" value="beijing"></el-option>
                      <el-option label="7成人" value="beijing"></el-option>
                      <el-option label="8成人" value="beijing"></el-option>
                    </el-select>
                  </el-form-item>
                  <el-form-item label="关键词">
                    <el-col :span="22">
                      <el-input v-model="form.resource" placeholder="海岛"></el-input>
                    </el-col>
                  </el-form-item>
                  <el-form-item class="tavern-left-button tavern-second-btn">
                    <el-col :offset="12">
                      <router-link to="/tavern-list">
                        <el-button type="primary">搜索行程></el-button>
                      </router-link>
                    </el-col>
                  </el-form-item>
                </el-form>
              </el-tab-pane>
              <el-tab-pane label="酒店团购" name="third">
                <div class="tavern-third-p">
                  <p>热门城市:
                    <a href="#">上海</a>&nbsp;<a href="#">广州</a>&nbsp;<a href="#">深圳</a>&nbsp;<a href="#">北京</a>&nbsp;
                    <a href="#">成都</a>&nbsp;<a href="#">杭州</a>&nbsp;<a href="#">苏州</a>&nbsp;<a href="#">青岛</a>
                  </p>
                  <p>
                    热门团购:
                    <a href="#">度假公寓</a>&nbsp;<a href="#">别墅轰趴</a>&nbsp;<a href="#">住店游玩</a>&nbsp;<a href="#">情侣房</a>&nbsp;<a
                    href="#">火车票</a>&nbsp;
                  </p>
                </div>
                <el-form ref="form" :model="form" label-width="70px" class="tavern-third-box">
                  <el-form-item label="关键词">
                    <el-col :span="22">
                      <el-input v-model="form.name" placeholder="(选填)商圈/景区/酒店品牌/酒店名称"></el-input>
                    </el-col>
                  </el-form-item>
                  <el-form-item label="目的地" placeholder="">
                    <el-col :span="22">
                      <el-input v-model="form.name"></el-input>
                    </el-col>
                  </el-form-item>
                  <el-form-item class="tavern-left-button">
                    <el-col :offset="12">
                      <router-link to="/tavern-list">
                        <el-button type="primary">搜索行程></el-button>
                      </router-link>
                    </el-col>
                  </el-form-item>
                </el-form>
              </el-tab-pane>
            </el-tabs>
          </div>
          <!-- 右边轮播图 -->
          <div class="tavern-head-right">
            <router-link to="/tavern-hotelDetail">
              <el-carousel height="4.2rem">
                <el-carousel-item v-for="item in 3" :key="item"></el-carousel-item>
              </el-carousel>
            </router-link>
          </div>
        </div>
      </div>
      <!-- 主体内容 -->
      <Tavern1></Tavern1>
    </section>
    <!-- 电梯导航开始 -->
    <div class="i-floor">
      <ul>
        <li class="act">
          <!--<span>i旅行</span>-->
          <span>i旅行</span>
        </li>
        <li>
          <!--<span>海外<br>酒店</span>-->
          <span>海外<br>酒店</span>
        </li>
        <li>
          <!--<span>热门城<br>市酒店</span>-->
          <span>热门城<br>市酒店</span>
        </li>
        <li>
          <!--<span>当季热<br>门目的地</span>-->
          <span>当季热<br>门目的地</span>
        </li>
        <li>
          <!--<span>特色酒<br>店推荐</span>-->
          <span>特色酒<br>店推荐</span>
        </li>
      </ul>
    </div>
    <!-- 电梯导航结束 -->
    <!-- 底部 -->
    <footer>
      <Foot1></Foot1>
      <Foot3></Foot3>
    </footer>

  </div>

</template>

<script>

  import Head from '@/components/header/head'
  import Tavern1 from './tavern/tavern1'
  import Foot1 from '@/components/footer/foot-1'
  import Foot3 from '@/components/footer/foot-3'

  export default {
    components: {
      Head,
      Tavern1,
      Foot1,
      Foot3
    },
    data() {
      return {
        activeName: 'first',
        form: {
          name: '',
          region: '',
          date1: '',
          date2: '',
          type: [],
          resource: '',
          desc: ''
        }
      };
    },
    updated() {
      $(function () {
        /*电梯*/
        var h1 = $('.one').offset().top;
        var h2 = $('.two').offset().top;
        var h3 = $('.three').offset().top;
        var h4 = $('.four').offset().top;
        var h5 = $('.five').offset().top;

        /*给按钮改变样式*/
        function change(numy) {
          $('.i-floor ul li').eq(numy).addClass('act').siblings().removeClass('act');
        };

        function userscroll() {
          var iScroll = $(document).scrollTop();  //当前距离顶部

          if (iScroll + 30 >= h5) {
            change(4);              //进行按钮选中状态改变
          } else if (iScroll + 30 >= h4) {
            change(3);
          }else if (iScroll + 30 >= h3) {
            change(2);
          } else if (iScroll + 30 >= h2) {
            change(1);
          } else if (iScroll + 30 >= h1) {    //当接近第一个盒子时淡入
            $('.i-floor').fadeIn();
            change(0);
          } else {
            $('.i-floor').fadeOut();           //脱离范围内淡出
          }
        }

        $(document).scroll(userscroll);   //监听用户滚动

        var arrTop = [h1, h2, h3, h4,h5];

        $('.i-floor ul li').click(function () {
          var numy = $(this).index();
          change(numy);  //执行点击后的改变

          $(document).off();   //停止文档监听
          $('html,body').stop().animate({'scrollTop': arrTop[numy]}, 500, function () {
            $(document).scroll(userscroll); //过渡动画结束后重新监听
          });
        });

      })
    }
  }
</script>

<style scoped>
  .tavern-head {
    width: 100%;
    height: 4.2rem;
    margin: 0.3rem 0.2rem 0.2rem 0.2rem;
    display: flex;
  }

  .tavern-head-left {
    height: 4.2rem;
    width:32%;
    border: 0.02rem solid #1ab2db;
    box-sizing: border-box;
    padding: 0 0.1rem;
    overflow: hidden;
  }

  .tavern-head-left .el-tabs >>> .el-tabs__item {
    font-size: 0.24rem;
    box-sizing: border-box;
    padding: 0 0.1rem;
    color: #999;
  }

  .tavern-head-left .el-tabs >>> .el-tabs__active-bar {
    height: 0.03rem;
    background-color: #1AB2DB;
  }

  .tavern-head-left .el-tabs >>> .el-tabs__active-bar:nth-of-type(1) {
    margin-left: 0.1rem;
  }

  .tavern-head-left .el-tabs >>> .el-tabs__item:hover {
    color: #1AB2DB;
  }

  .tavern-head-left .el-tabs >>> .el-tabs__item.is-top:nth-child(2) {
    padding-left: 0.15rem;
  }

  .tavern-head-left .el-tabs >>> .el-tabs__nav-wrap::after {
    height: 0.03rem;
    background-color: #CCCCCC;
    text-align: center;
    width: 92%;
    position: absolute;
    left: 0.15rem;
  }

  .el-form {
    margin-left: 0.1rem;
  }

  .tavern-left-link {
    margin-left: 0.5rem;
    color: #1AB2DB;
  }

  .tavern-left-link a:hover, .tavern-third-p a:hover {
    color: #ffac0e;
  }

  .tavern-left-button {
    margin-top: 0.2rem;
  }

  .tavern-second-btn {
    margin-top: 0.3rem;
  }

  .tavern-third-p {
    border-bottom: 0.01rem dashed #ccc;
    padding-bottom: 0.2rem;
  }

  .tavern-third-p p {
    margin: 0.15rem 0 0 0.1rem;
  }

  .tavern-third-box {
    padding-top: 0.2rem;
  }

  /* 右边轮播图 */
  .tavern-head-right {
    width: 67%;
    height: 4.2rem;
    margin-left: auto;
    position: relative;
  }

  .el-carousel__item:nth-of-type(1) {
    background: url("../../../static/images/img/tavern/banner/1.jpg") no-repeat center;
    background-size: 100%;
  }

  .el-carousel__item:nth-of-type(2) {
    background: url("../../../static/images/img/tavern/banner/2.jpg") no-repeat center;
    background-size: 100%;
  }

  .el-carousel__item:nth-of-type(3) {
    background: url("../../../static/images/img/tavern/banner/3.jpg") no-repeat center;
    background-size: 100%;
  }

  .el-carousel >>> .el-carousel__button {
    width: 0.13rem;
    height: 0.13rem;
    border-radius: 50%;
    border: 0.01rem solid #1ab2db;
    opacity: 1;
    position: absolute;
    margin-left: 3.2rem;
    top: -0.1rem;
    background-color: transparent;
  }

  .el-carousel >>> .el-carousel__indicator--horizontal {
    display: inline-block;
    padding: 12px 10px;
  }

  .el-carousel >>> .el-carousel__indicator.is-active button {
    background-color: #1AB2DB;
  }

  /* 电梯 */
  .i-floor {
    top: 50%;
    left: 50%;
    margin-left: -6.7rem;
    display: none;
    position: fixed;
    margin-top: -1rem;
    width: 0.6rem;
    height: 3.23rem;
    background-color: #E5E5E5;
    cursor: pointer;
    z-index: 99;
    color: #333;
  }

  .i-floor > ul > li {
    width: 0.6rem;
    height: 0.5rem;
    text-align: center;
    position: relative;
    padding-top: 0.13rem;
    border-bottom: 0.02rem solid #E5E5E5;
    color: #333;
    font-size: 0.12rem;
  }

  .i-floor > ul > li:last-child {
    border-bottom: none;
  }

  .i-floor > ul > li:nth-of-type(1) span{
    position: absolute;
    top:0.22rem;
    left: 0.18rem;
  }

  .i-floor >ul >li:hover,.i-floor >ul >li.act{
    background-color: #003399;
    color: #fff;
  }
  .i-floor > ul > li.act span {
    display: block;
  }

</style>
