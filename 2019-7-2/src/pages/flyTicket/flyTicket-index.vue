<template>
  <div>
    <!-- 头部 -->
    <header>
      <Head></Head>
    </header>

    <!-- 主体 -->
    <section class="container">
      <!-- banner -->
      <div>
        <div class="banner-box">
          <el-carousel height="470px">
            <el-carousel-item v-for="item in 4" :key="item"></el-carousel-item>
          </el-carousel>
        </div>
        <div class="banner-menu">
          <Navbox></Navbox>
        </div>
      </div>

      <div class="flyTicket-box">
        <!-- 机票价格趋势查询 -->
        <div>
          <div class="plane-ticket-title">
            <div class="left title-plane"></div>
            <div class="title-center">
              <span>机票价格趋势查询</span>
              <span class="center-plane"></span>
            </div>
            <div class="title-right">
              <el-row>
                <el-col :span="2"><span>城市</span></el-col>
                <el-col :span="8">
                  <el-input v-model="input1" placeholder="出发城市"></el-input>
                </el-col>
                <el-col :span="1"><span>-</span></el-col>
                <el-col :span="8">
                  <el-input v-model="input2" placeholder="达到城市"></el-input>
                </el-col>
                <el-col :span="3" :offset="1">
                  <el-button type="primary">搜索</el-button>
                </el-col>
              </el-row>
            </div>
          </div>
          <div class="plane-ticket-body">
            <div class="flodline" id="flodline"></div>
          </div>
        </div>

        <!-- 航空公司促销 -->
        <div>
          <div class="plane-ticket-title">
            <div class="left title-aviation"></div>
            <div class="title-center center-aviation">
              <span>航空公司促销</span>
              <span class="center-aviation"></span>
            </div>
            <div class="title-right right-aviation">
              <span>更多促销信息&nbsp;></span>
            </div>
          </div>
          <div class="aviation-body">
           <router-link to="flyTicket-list">
             <ul>
               <li v-for="item in aviation">
                 <el-image :src="item.src"></el-image>
               </li>
             </ul>
           </router-link>
          </div>
        </div>

        <!-- 特价机票汇总 -->
        <div>
          <div class="plane-ticket-title title-ticket-box">
            <div class="left title-ticket"></div>
            <div class="title-center center-ticket">
              <div>
                <span>特价机票汇总</span>
                <span class="center-ticket"></span>
              </div>
            </div>
            <div class="title-ticket-body">
              <el-row>
                <el-col :span="4">
                  <el-select v-model="value1" placeholder="北京出发">
                    <el-option v-for="item in options1" :key="item.value" :label="item.label"
                               :value="item.value"></el-option>
                  </el-select>
                </el-col>
                <el-col :span="4" :offset="1">
                  <el-select v-model="value2" placeholder="全部月份">
                    <el-option v-for="item in options2" :key="item.value" :label="item.label"
                               :value="item.value"></el-option>
                  </el-select>
                </el-col>
                <ul class="choice-ticket">
                  <li><span>热门</span></li>
                  <li><span>国内特价机票</span></li>
                  <li><span>国外特价机票</span></li>
                  <li><span>亚洲</span></li>
                  <li><span>欧洲</span></li>
                  <li><span>美洲</span></li>
                  <li><span>非洲</span></li>
                </ul>
              </el-row>
            </div>
            <div class="title-right right-ticket">
              <span>更多特价机票&nbsp;></span>
            </div>
          </div>
          <div class="ticket-summary-body">
            <ul class="ul-list1">
              <li v-for="item in ul1">
                <a href="#">
                  <div>
                    <span>
                    {{item.start}}
                    <img src="" alt="">
                    {{item.end}}
                  </span>
                  </div>
                 <div>
                   <span>04月15日</span>
                   <span>{{item.discount}}折</span>
                 </div>
                </a>
                <span class="money">&yen;{{item.money}}</span>
              </li>
            </ul>
            <ul class="ul-list1">
              <li v-for="item in ul2">
                <a href="#">
                  <div>
                    <span>
                    {{item.start}}
                    <img src="" alt="">
                    {{item.end}}
                  </span>
                  </div>
                  <div>
                    <span>04月15日</span>
                    <span>{{item.discount}}折</span>
                  </div>
                </a>
                <span class="money">&yen;{{item.money}}</span>
              </li>
            </ul>
            <ul class="ul-list1">
              <li v-for="item in ul3">
                <a href="#">
                  <div>
                    <span>
                    {{item.start}}
                    <img src="" alt="">
                    {{item.end}}
                  </span>
                  </div>
                  <div>
                    <span>04月15日</span>
                    <span>{{item.discount}}折</span>
                  </div>
                </a>
                <span class="money">&yen;{{item.money}}</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>


    <!-- 底部 -->
    <footer>
      <Foot1></Foot1>
      <Foot2></Foot2>
      <Foot3></Foot3>
    </footer>
  </div>
</template>

<script>
  import Head from '@/components/header/head'
  import Foot1 from '@/components/footer/foot-1'
  import Foot2 from '@/components/footer/foot-2'
  import Foot3 from '@/components/footer/foot-3'
  import Navbox from '@/pages/index/navbox/navbox'

  export default {
    data() {
      return {
        input1: '',
        input2: '',
        aviation: [
          {src: "../../../static/images/img/flyTicket_xxx1202_10.jpg"},
          {src: "../../../static/images/img/ftyj01_0315_03.jpg"},
          {src: "../../../static/images/img/ftyj01_0315_05.jpg"},
          {src: "../../../static/images/img/ftyj01_0315_07.jpg"}
        ],
        options1: [{
          value: '选项1',
          label: '北京出发'
        }, {
          value: '选项2',
          label: '上海'
        }, {
          value: '选项3',
          label: '成都'
        }, {
          value: '选项4',
          label: '广州'
        }, {
          value: '选项5',
          label: '厦门'
        },
          {
            value: '选项6',
            label: '港澳台'
          },
          {
            value: '选项7',
            label: '其他城市'
          },
        ],
        value1: '',
        options2: [{
          value: '选项1',
          label: '全部月份'
        }, {
          value: '选项3',
          label: '1月'
        }, {
          value: '选项4',
          label: '2月'
        }, {
          value: '选项5',
          label: '3月'
        },
          {
            value: '选项6',
            label: '4月'
          },
          {
            value: '选项7',
            label: '5月'
          },
          {
            value: '选项8',
            label: '6月'
          },
          {
            value: '选项9',
            label: '7月'
          },
          {
            value: '选项10',
            label: '8月'
          },
          {
            value: '选项11',
            label: '9月'
          },
          {
            value: '选项12',
            label: '10月'
          },
          {
            value: '选项13',
            label: '11月'
          },
          {
            value: '选项2',
            label: '12月'
          },
        ],
        value2: '',
        ul1: [
          {start: '北京', end: '吉隆坡', discount: '0.54', money: '16166'},
          {start: '北京', end: '札幌', discount: '0.6', money: '869'},
          {start: '北京', end: '马尼拉', discount: '0.6', money: '914'},
          {start: '北京', end: '香港', discount: '0.6', money: '946'},
          {start: '北京', end: '新加坡', discount: '0.6', money: '1046'},
          {start: '北京', end: '兰卡威', discount: '0.6', money: '1059'},
          {start: '北京', end: '甲米', discount: '0.6', money: '1087'},
          {start: '北京', end: '曼谷', discount: '0.54', money: '1093'},
        ],
        ul2: [
          {start: '北京', end: '普吉', discount: '0.8', money: '1139'},
          {start: '北京', end: '胡志明市', discount: '0.8', money: '1178'},
          {start: '北京', end: '清迈', discount: '0.8', money: '1215'},
          {start: '北京', end: '符拉迪沃斯...', discount: '0.8', money: '1246'},
          {start: '北京', end: '巴厘岛', discount: '0.8', money: '1263'},
          {start: '北京', end: '暹粒', discount: '0.8', money: '1269'},
          {start: '北京', end: '斗湖', discount: '0.8', money: '1360'},
          {start: '北京', end: '福冈', discount: '0.8', money: '1365'},
        ],
        ul3: [
          {start: '北京', end: '广州', discount: '0.4', money: '763'},
          {start: '北京', end: '深圳', discount: '0.4', money: '792'},
          {start: '北京', end: '三亚', discount: '0.4', money: '625'},
          {start: '北京', end: '乌鲁木齐', discount: '0.4', money: '625'},
          {start: '北京', end: '上海', discount: '0.4', money: '430'},
          {start: '北京', end: '青岛', discount: '0.4', money: '220'},
          {start: '北京', end: '成都', discount: '0.4', money: '770'},
          {start: '北京', end: '大连', discount: '0.4', money: '170'},
        ]
      }
    },
    components: {
      Head,
      Foot1,
      Foot2,
      Foot3,
      Navbox
    },
    mounted() {
      $(function () {
        var myChart = echarts.init(document.getElementById("flodline"));
        var option = ({
          title: {
            x: 'left',
            text: '机票价格走势图',
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
            data: ['12-01', '12-10', '12-20', '12-30', '01-01', '01-10', '01-20', '01-30', '02-01', '02-10', '02-20', '02-30'],
            axisLabel: {
              interval: 0
            }
          },
          yAxis: {
            type: 'value'
          },
          series: [
            {
              name: '北京-上海',
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
              name: '北京-长沙',
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
              name: '北京-深圳',
              type: 'line',
              data: [943, 752, 718, 885, 848, 890, 900, 972, 998, 825, 888, 949, 800],
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
      });

    }
  }
</script>

<style scoped>
  .el-carousel {
    margin-top: -0.08rem;
  }

  .el-carousel__item:nth-of-type(1) {
    background: url("../../../static/images/img/fly01_banner0315.jpg") no-repeat center;
    background-size: 100%;
  }

  .el-carousel__item:nth-of-type(2) {
    background: url("../../../static/images/img/fly02_banner0315.jpg") no-repeat center;
    background-size: 100%;
  }

  .el-carousel__item:nth-of-type(3) {
    background: url("../../../static/images/img/fly03_banner0315.jpg") no-repeat center;
    background-size: 100%;
  }

  .el-carousel__item:nth-of-type(4) {
    background: url("../../../static/images/img/fly04_banner0315.jpg") no-repeat center;
    background-size: 100%;
  }

  .el-carousel >>> .el-carousel__button {
    width: 0.13rem;
    height: 0.13rem;
    border-radius: 50%;
    opacity: 1;
    border: 0.01rem solid #1AB2DB;
    background-color: transparent;
    position: absolute;
    margin-left: 4.8rem;
    top: -0.2rem;
  }

  .el-carousel >>> .el-carousel__indicator--horizontal {
    display: inline-block;
    padding: 12px 10px;
  }

  .el-carousel >>> .el-carousel__indicator.is-active button {
    background-color: #1AB2DB;
  }

  .banner-box {
    position: relative;
    z-index: -1;
  }

  .banner-menu {
    position: absolute;
    top: 1.6rem;
    left: 2rem;
    z-index: 1;
  }

  .flyTicket-box {
    margin: 0.2rem;
  }

  /* 机票价格查询 */
  .plane-ticket-title {
    width: 100%;
    display: flex;
  }

  .left {
    width: 0.5rem;
    height: 0.5rem;
    border-radius: 0.1rem;
    margin-right: 0.1rem;
  }

  .plane-ticket-title .title-plane {
    background: url("../../../static/images/icon/flyTicket_xxx1202_03.png") no-repeat center #f75232;
  }

  .title-center {
    width: 35%;
  }

  .title-center span:nth-of-type(1) {
    font-size: 0.22rem;
    color: #333;
  }

  .title-center span:nth-of-type(2) {
    width: 100%;
    height: 0.24rem;
  }

  .center-plane {
    display: block;
    background: url("../../../static/images/icon/flyword_xxx1202_06.png") no-repeat;
  }

  .title-right {
    margin-left: auto;
    cursor: pointer;
  }

  .title-right span {
    margin-top: 0.1rem;
    display: block;
    text-align: center;
  }

  .title-right .el-input >>> .el-input__inner:focus {
    border-color: #ccc;
  }

  .flodline {
    width: 900px;
    height: 500px;
    margin: 0.2rem auto 0.5rem;
  }

  /* 航空公司促销 */
  .title-aviation {
    background: url("../../../static/images/icon/flyTicket_xxx1202_07.png") no-repeat center #96EA3C;
  }

  .center-aviation {
    background: url("../../../static/images/icon/flyword_xxx1202_07.png") no-repeat 0 0.28rem;
  }

  .right-aviation {
    margin-top: 0.08rem;
  }

  .right-aviation span:hover {
    color: #FFC466;
  }

  .aviation-body {
    margin-top: 0.2rem;
  }

  .aviation-body ul {
    display: flex;
    justify-content: space-between;
  }

  .aviation-body ul .el-image {
    width: 100%;
    transition: all 0.2s linear;
  }

  .aviation-body ul .el-image:hover {
    margin-top: -0.05rem;
  }

  /* 特价机票汇总 */
  .title-ticket-box {
    margin-top: 0.2rem;
  }

  .title-ticket {
    background: url("../../../static/images/icon/flyTicket_xxx1202_09.png") no-repeat center #96EA3C;
  }

  .center-ticket {
    width: 20%;
    background: url("../../../static/images/icon/flyword_xxx1202_24.png") no-repeat 0 0.28rem;
  }

  .right-ticket span {
    margin-top: 0.15rem;
  }

  .title-ticket-body, .choice-ticket, .center-ticket {
    display: flex;
  }

  .title-ticket-body .el-select >>> .el-input__inner:focus {
    border-color: #ccc;
  }

  .title-ticket-body .el-select >>> .el-input__inner {
    border-color: #ccc;
  }

  .title-ticket-body {
    width: 66%;
  }

  .choice-ticket li span {
    display: block;
    padding: 0.05rem;
    margin: 0.05rem 0.05rem 0 0;
    cursor: pointer;
  }

  .choice-ticket li:nth-of-type(1) {
    margin-left: 0.1rem;
  }

  .choice-ticket li span:hover {
    background-color: #FFC466;
    border-radius: 0.03rem;
  }

  .right-ticket {
    margin-top: -0.05rem;
  }

  .right-ticket:hover {
    color: #FFC466;
  }

  .ticket-summary-body {
    width: 100%;
    margin-top: 0.15rem;
    display: flex;
  }

  .ticket-summary-body .ul-list1 {
    width: 33%;
    padding: 0.1rem;
    border-right: 0.01rem dashed #ccc;
    background-color: #F8F8F8;
    border-top: 0.01rem solid #ccc;
    border-bottom: 0.01rem solid #ccc;
  }

  .ticket-summary-body .ul-list1 img {
    width: 0.2rem;
    height: 0.2rem;
    background: url("../../../static/images/icon/fly_sale_sum_xxx1203_02.png") no-repeat 0 0.05rem;
    display: inline-block;
  }
  .ticket-summary-body .ul-list1 li{
    display: flex;
    width: 100%;
  }
  .ticket-summary-body .ul-list1 li a{
    display: flex;
    line-height: 0.3rem;
  margin-bottom: 0.15rem;
  }
  .ticket-summary-body .ul-list1 li a div:nth-of-type(1),.ticket-summary-body .ul-list1 li a div:nth-of-type(2){
    width: 1.4rem;
  }
  .ticket-summary-body .ul-list1 li a div:nth-of-type(2) span:nth-of-type(1){
      margin: 0 0.1rem;
    }
  .ticket-summary-body .ul-list1 li a div:nth-of-type(2) span:nth-of-type(2){
    margin-right: 0.1rem;
  }
  .ticket-summary-body .ul-list1 li .money{
    font-size: 0.2rem;
    color: #FF4401;
    margin-left: 0.2rem;
    margin-top: 0.01rem;
  }
  .ticket-summary-body .ul-list1 li a {
    margin-bottom: 0.15rem;
  }
  .ticket-summary-body .ul-list1 li a:hover {
    color: #1abfea;
  }
</style>
