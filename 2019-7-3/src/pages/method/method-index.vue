<template>
  <div>
    <!-- 头部 -->
    <header>
      <Head></Head>
    </header>

    <!-- 主体内容 -->
    <section class="container">
      <!-- banner -->
      <div class="method-index-head">
        <div class="method-head-left">
          <router-link to="methodDetail">
            <div class="method-list-menu">
              <div class="border-hover">
                <div class="menu-theme">主题旅游</div>
                <div class="menu-sub">
                  <span>爸妈游</span>
                  <span>上海迪士尼</span>
                  <span>蜜月游</span>
                </div>
                <span> > </span>
                <div class="list-menu-border"></div>
                <div class="menu-more">
                  <div class="menu-list">
                    <div class="menu-theme menu-them-none">周边旅游</div>
                    <div class="menu-sub">
                      <span>爸妈游</span>
                      <span>上海迪士尼</span>
                      <span>蜜月游</span>
                    </div>
                  </div>
                  <div class="menu-list">
                    <div class="menu-theme menu-them-none">国内旅游</div>
                    <div class="menu-sub">
                      <span>爸妈游</span>
                      <span>上海迪士尼</span>
                      <span>蜜月游</span>
                    </div>
                  </div>
                  <div class="menu-list">
                    <div class="menu-theme menu-them-none">国外旅游</div>
                    <div class="menu-sub">
                      <span>爸妈游</span>
                      <span>上海迪士尼</span>
                      <span>蜜月游</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="method-list-menu">
              <div class="border-hover">
                <div class="menu-theme">热门旅游</div>
                <div class="menu-sub">
                  <span>爸妈游</span>
                  <span>上海迪士尼</span>
                  <span>蜜月游</span>
                </div>
                <span> > </span>
                <div class="list-menu-border"></div>
                <div class="menu-more">
                  <div class="menu-list">
                    <div class="menu-theme menu-them-none">周边旅游</div>
                    <div class="menu-sub">
                      <span>爸妈游</span>
                      <span>上海迪士尼</span>
                      <span>蜜月游</span>
                    </div>
                  </div>
                  <div class="menu-list">
                    <div class="menu-theme menu-them-none">国内旅游</div>
                    <div class="menu-sub">
                      <span>爸妈游</span>
                      <span>上海迪士尼</span>
                      <span>蜜月游</span>
                    </div>
                  </div>
                  <div class="menu-list">
                    <div class="menu-theme menu-them-none">国外旅游</div>
                    <div class="menu-sub">
                      <span>爸妈游</span>
                      <span>上海迪士尼</span>
                      <span>蜜月游</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="method-list-menu">
              <div class="border-hover">
                <div class="menu-theme">主题公园</div>
                <div class="menu-sub">
                  <span>爸妈游</span>
                  <span>上海迪士尼</span>
                  <span>蜜月游</span>
                </div>
                <span> > </span>
                <div class="list-menu-border"></div>
                <div class="menu-more">
                  <div class="menu-list">
                    <div class="menu-theme menu-them-none">周边旅游</div>
                    <div class="menu-sub">
                      <span>爸妈游</span>
                      <span>上海迪士尼</span>
                      <span>蜜月游</span>
                    </div>
                  </div>
                  <div class="menu-list">
                    <div class="menu-theme menu-them-none">国内旅游</div>
                    <div class="menu-sub">
                      <span>爸妈游</span>
                      <span>上海迪士尼</span>
                      <span>蜜月游</span>
                    </div>
                  </div>
                  <div class="menu-list">
                    <div class="menu-theme menu-them-none">国外旅游</div>
                    <div class="menu-sub">
                      <span>爸妈游</span>
                      <span>上海迪士尼</span>
                      <span>蜜月游</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="method-list-menu">
              <div class="border-hover">
                <div class="menu-theme">周边旅游</div>
                <div class="menu-sub">
                  <span>爸妈游</span>
                  <span>上海迪士尼</span>
                  <span>蜜月游</span>
                </div>
                <span> > </span>
                <div class="list-menu-border"></div>
                <div class="menu-more">
                  <div class="menu-list">
                    <div class="menu-theme menu-them-none">周边旅游</div>
                    <div class="menu-sub">
                      <span>爸妈游</span>
                      <span>上海迪士尼</span>
                      <span>蜜月游</span>
                    </div>
                  </div>
                  <div class="menu-list">
                    <div class="menu-theme menu-them-none">国内旅游</div>
                    <div class="menu-sub">
                      <span>爸妈游</span>
                      <span>上海迪士尼</span>
                      <span>蜜月游</span>
                    </div>
                  </div>
                  <div class="menu-list">
                    <div class="menu-theme menu-them-none">国外旅游</div>
                    <div class="menu-sub">
                      <span>爸妈游</span>
                      <span>上海迪士尼</span>
                      <span>蜜月游</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </router-link>
        </div>
        <div class="method-head-right">
          <div class="method-search">
            <div class="search">
              <input type="text" placeholder="景点\地区\关键词...">
              <i class="fa fa-search" aria-hidden="true"></i>
            </div>
            <div class="method-search-list">
              <i class="fa fa-map-marker" aria-hidden="true"></i>
              <input type="text" placeholder="北京市">
              <i class="fa fa-angle-down" aria-hidden="true"></i>
            </div>
          </div>
          <div class="banner-box">
            <div class="banner">
              <router-link to="/methodDetail">
                <el-carousel height="2.4rem">
                  <el-carousel-item v-for="item in 4" :key="item"></el-carousel-item>
                </el-carousel>
              </router-link>
            </div>
            <div class="strategy-right">
              <router-link to="/methodDetail">
                <el-image src="../../../static/images/img/strategy/strategy-00.png"></el-image>
                <el-image src="../../../static/images/img/strategy/strategy-01.png"></el-image>
              </router-link>
            </div>
          </div>
        </div>
      </div>
      <!-- 地图 -->
      <div class="travel-body">
        <router-link to="/methodDetail">
          <div id="linkForChina" style="width:7.40rem;height: 6rem;"></div>
        </router-link>
        <div class="localtion-mes">
          <router-link to="methodDetail">
            <span class="title">青 海</span>
            <br>
            预计游玩人数： 1.6w人次/天 拥堵 <br>
            建议游玩：4-10天
            <br>
            <br>
            茶卡盐湖 可可西里 孟达天池 互助北山 金银滩
            <br>
            <br>
            年保玉则 同仁 三江源
            <br>
            <br>
            <p>
              青海省为我国青藏高原上的重要省份之一，因境内有全国最大的内陆咸水湖──青海湖，而得省名。
            </p>
            <br>
            <br>
            <p>
              青海湖是中国最大的内陆咸水湖，面积4573平方公里，湖面高出海平面3,260米，是泰山顶峰的2倍。
            </p>
            <br>
            <br>
            <p>
              最佳季节：5月-10月适宜。青海是高原大陆性气候，春秋两季有沙尘污染，形成扬尘天气。7月的青海湖边有大片油菜花，黄色的花海和一望无际的蓝色湖水，景色美不胜收，那时的气温不超过18摄氏度，气候舒适宜人。
            </p>
          </router-link>
        </div>
      </div>
      <!-- 月度推荐 -->
      <div class="strategy-list">
        <div class="strategy-list-header">
          <div>
            月度推荐 <span> ● </span><span>开启滑雪之旅，这个冬天不太冷</span>
          </div>
          <img src="../../../static/images/img/strategy/strategy-02.png" alt="">
        </div>
        <div class="strategy-list-body">
          <div>
            <router-link to="methodDetail">
              <ul class="tabs-header">
                <li><span>一月</span><span class="icon-tab"></span><span>●</span></li>
                <li><span>二月</span><span class="icon-tab"></span><span>●</span></li>
                <li><span>三月</span><span class="icon-tab"></span><span>●</span></li>
                <li><span>四月</span><span class="icon-tab"></span><span>●</span></li>
                <li class="tabs-active"><span>五月</span><span class="icon-tab"></span><span>●</span></li>
                <li><span>六月</span><span class="icon-tab"></span><span>●</span></li>
                <li><span>七月</span><span class="icon-tab"></span><span>●</span></li>
                <li><span>八月</span><span class="icon-tab"></span><span>●</span></li>
                <li><span>九月</span><span class="icon-tab"></span><span>●</span></li>
                <li><span>十月</span><span class="icon-tab"></span><span>●</span></li>
                <li><span>十一月</span><span class="icon-tab tab-num"></span><span class="tab-num">●</span></li>
                <li><span>十二月</span><span class="icon-tab tab-num"></span><span class="tab-num">●</span></li>
              </ul>
            </router-link>
          </div>
          <div class="tabs-body">
           <router-link to="methodDetail">
             <ul>
               <li v-for="item in monthly">
                 <el-image :src="item.src"></el-image>
                 <span>{{item.title}}</span>
               </li>
             </ul>
           </router-link>
          </div>
        </div>
      </div>


      <!-- 热门目的地 -->
      <div class="strategy-list">
        <div class="strategy-list-header">
          <div>
            热门目的地 <span> ● </span><span>走过多少地方  最美的还是这里</span>
          </div>
          <img src="../../../static/images/img/strategy/strategy-02.png" alt="">
        </div>
        <div class="strategy-list-body">
          <div>
            <router-link to="methodDetail">
              <ul class="destination">
                <li class="des-active"><span>当季游玩</span></li>
                <li><span>温馨蜜月</span></li>
                <li><span>海岛撒欢</span></li>
                <li><span>血拼购物</span></li>
              </ul>
            </router-link>
          </div>
          <div class="tabs-body">
           <router-link to="methodDetail">
             <ul>
               <li v-for="item in destination">
                 <el-image :src="item.src"></el-image>
                 <span>{{item.title}}</span>
               </li>
             </ul>
           </router-link>
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

  export default {
    data(){
      return{
        monthly:[
          {src:"../../../static/images/img/strategy/city/aomen.JPG",title:'澳门'},
          {src:"../../../static/images/img/strategy/city/chongqing.jpg",title:'重庆'},
          {src:"../../../static/images/img/strategy/city/dalian.jpg",title:'大连'},
          {src:"../../../static/images/img/strategy/city/daocheng.JPG",title:'稻城'},
          {src:"../../../static/images/img/strategy/city/dunhuang.jpg",title:'敦煌'},
          {src:"../../../static/images/img/strategy/city/gaoxing.jpg",title:'高雄'},
          {src:"../../../static/images/img/strategy/city/guilin.jpg",title:'桂林'},
          {src:"../../../static/images/img/strategy/city/ningxia.jpg",title:'宁夏'},
          {src:"../../../static/images/img/strategy/city/guiyang.jpg",title:'贵阳'},
          {src:"../../../static/images/img/strategy/city/hangzhou.jpg",title:'杭州'},
          {src:"../../../static/images/img/strategy/city/hulunbeier.jpg",title:'呼伦贝尔'},
          {src:"../../../static/images/img/strategy/city/guilin.jpg",title:'吉林'},
          {src:"../../../static/images/img/strategy/city/lianyungang.jpg",title:'连云港'},
          {src:"../../../static/images/img/strategy/city/lijiang.JPG",title:'丽江'},
          {src:"../../../static/images/img/strategy/city/nanjing.jpg",title:'南京'},
          {src:"../../../static/images/img/strategy/city/ningbo.jpg",title:'宁波'},
        ],
        destination:[
          {src:"../../../static/images/img/strategy/city/pingyao.jpg",title:'平遥'},
          {src:"../../../static/images/img/strategy/city/rizhao.jpg",title:'日照'},
          {src:"../../../static/images/img/strategy/city/shanghai.jpg",title:'上海'},
          {src:"../../../static/images/img/strategy/city/suzhou.jpg",title:'苏州'},
          {src:"../../../static/images/img/strategy/city/taibei.jpg",title:'台北'},
          {src:"../../../static/images/img/strategy/city/weihai.jpg",title:'威海'},
          {src:"../../../static/images/img/strategy/city/wuxi.jpg",title:'无锡'},
          {src:"../../../static/images/img/strategy/city/wuzhen.jpg",title:'乌镇'},
          {src:"../../../static/images/img/strategy/city/xiamen.jpg",title:'厦门'},
          {src:"../../../static/images/img/strategy/city/xian.jpg",title:'西安'},
          {src:"../../../static/images/img/strategy/city/xianggang.JPG",title:'香港'},
          {src:"../../../static/images/img/strategy/city/xining.jpg",title:'西宁'},
          {src:"../../../static/images/img/strategy/city/yangshuo.jpg",title:'阳朔'},
          {src:"../../../static/images/img/strategy/city/yangzhou.jpg",title:'扬州'},
          {src:"../../../static/images/img/strategy/city/yili.JPG",title:'伊犁'},
          {src:"../../../static/images/img/strategy/city/zhangjiajie.jpg",title:'张家界'},
        ]
      }
    },
    components: {
      Head,
      Foot1,
      Foot2,
      Foot3,
    },
    mounted() {
      $(function () {
        var myChart = echarts.init(document.getElementById("linkForChina"));
        var option = {
          baseOption: {
            timeline: {
              axisType: 'category',
              realtime: false,
              loop: false,
              autoPlay: false,
              playInterval: 10,
              controlStyle: {
                position: 'left'
              },
              data: [
                '2016/11/19', '2016/11/20', '2016/11/21'
              ],
              timelinePlayChange: function () {
                console.debug("dasdasd");
              }
            },
            title: {
              text: '预计三天内全国旅游景点旅游人数图',
              subtext: 'http://qmjie.sinaapp.com/apple/',
              left: 'center'
            },
            tooltip: {
              trigger: 'item',
              formatter: function (params) {
                var MAP_VALUE_DIC = {
                  '5': '畅通',
                  '10': '缓慢',
                  '15': '拥堵'
                }
                if (params.seriesType) {
                  return params.name + ': ' + MAP_VALUE_DIC[params.value];
                } else {
                  return params.name;
                }
                console.log(params);
              }
            },

            visualMap: {
              type: 'piecewise',
              splitNumber: 3,
              piecewise: [
                {
                  value: 1,
                  label: '旅游人数<5w',
                  color: 'orangered'
                }, {
                  value: 5,
                  label: '5w<旅游人数<15w',
                  color: 'yellow'
                }, {
                  value: 15,
                  label: '15w<旅游人数',
                  color: 'lightskyblue'
                }

              ],
              min: 0,
              max: 20,
              left: 'right',
              top: 'middle',
              calculable: true,
              show: true,
              seriesIndex: 0,
              inRange: {
                color: ['yellow', 'lightskyblue']
              },
              formatter: function (value) {
                if (value < 5) {
                  return '旅游人数<5w';
                } else if (value > 5 && value < 15) {
                  return '5w<旅游人数<15w';
                } else {
                  return '15w>旅游人数';
                }
              }
            }
          },
          options: [
            {
              series: [{
                name: '全国旅游人数统计',
                type: 'map',
                mapType: 'china',
                animationDelay: function (idx) {
                  return idx * 10 + 10;
                },
                label: {
                  normal: {
                    show: false
                  },
                  emphasis: {
                    show: true
                  }
                },
                data: [
                  {
                    name: '重庆',
                    value: 50
                  }, {
                    name: '云南',
                    value: 50
                  }, {
                    name: '辽宁',
                    value: 50
                  }, {
                    name: '黑龙江',
                    value: 50
                  }, {
                    name: '广西',
                    value: 50
                  }, {
                    name: '甘肃',
                    value: 50
                  }, {
                    name: '山西',
                    value: 50
                  }, {
                    name: '陕西',
                    value: 50
                  }, {
                    name: '吉林',
                    value: 50
                  }, {
                    name: '贵州',
                    value: 50
                  }, {
                    name: '新疆',
                    value: 50
                  }, {
                    name: '青海',
                    value: 50
                  }, {
                    name: '西藏',
                    value: 50
                  }, {
                    name: '四川',
                    value: 50
                  }, {
                    name: '宁夏',
                    value: 50
                  }, {
                    name: '海南',
                    value: 50
                  }, {
                    name: '台湾',
                    value: 50
                  }, {
                    name: '香港',
                    value: 50
                  }, {
                    name: '澳门',
                    value: 50
                  }, {
                    name: '上海',
                    value: 20
                  }, {
                    name: '安徽',
                    value: 20
                  }, {
                    name: '江苏',
                    value: 20
                  }, {
                    name: '浙江',
                    value: 20
                  }, {
                    name: '北京',
                    value: 10
                  }, {
                    name: '天津',
                    value: 10
                  }, {
                    name: '河北',
                    value: 10
                  }, {
                    name: '河南',
                    value: 10
                  }, {
                    name: '内蒙古',
                    value: 10
                  }, {
                    name: '湖南',
                    value: 10
                  }, {
                    name: '山东',
                    value: 10
                  }, {
                    name: '江西',
                    value: 10
                  }, {
                    name: '湖北',
                    value: 10
                  }, {
                    name: '福建',
                    value: 10
                  }, {
                    name: '广东',
                    value: 10
                  }]
              }]
            },
            {
              series: [{
                name: '全国旅游人数统计',
                type: 'map',
                mapType: 'china',
                label: {
                  normal: {
                    show: false
                  },
                  emphasis: {
                    show: true
                  }
                },
                data: [
                  {
                    name: '重庆',
                    value: 25
                  }, {
                    name: function (e) {
                      var name = "云南";
                      name.prototype = {apram: "", params: "param"};
                      return name;
                    }, value: 25
                  }, {
                    name: '辽宁',
                    value: 25
                  }, {
                    name: '黑龙江',
                    value: 25
                  }, {
                    name: '广西',
                    value: 25
                  }, {
                    name: '甘肃',
                    value: 25
                  }, {
                    name: '山西',
                    value: 25
                  }, {
                    name: '陕西',
                    value: 25
                  }, {
                    name: '吉林',
                    value: 25
                  }, {
                    name: '贵州',
                    value: 25
                  }, {
                    name: '新疆',
                    value: 25
                  }, {
                    name: '青海',
                    value: 25
                  }, {
                    name: '西藏',
                    value: 25
                  }, {
                    name: '四川',
                    value: 25
                  }, {
                    name: '宁夏',
                    value: 25
                  }, {
                    name: '海南',
                    value: 25
                  }, {
                    name: '台湾',
                    value: 25
                  }, {
                    name: '香港',
                    value: 25
                  }, {
                    name: '澳门',
                    value: 25
                  }, {
                    name: '上海',
                    value: 4
                  }, {
                    name: '安徽',
                    value: 4
                  }, {
                    name: '江苏',
                    value: 4
                  }, {
                    name: '浙江',
                    value: 4
                  }, {
                    name: '北京',
                    value: 10
                  }, {
                    name: '天津',
                    value: 10
                  }, {
                    name: '河北',
                    value: 10
                  }, {
                    name: '河南',
                    value: 10
                  }, {
                    name: '内蒙古',
                    value: 10
                  }, {
                    name: '湖南',
                    value: 10
                  }, {
                    name: '山东',
                    value: 10
                  }, {
                    name: '江西',
                    value: 10
                  }, {
                    name: '湖北',
                    value: 10
                  }, {
                    name: '福建',
                    value: 10
                  }, {
                    name: '广东',
                    value: 10
                  }]
              }]
            },
            {
              series: [{
                name: '全国旅游人数统计',
                type: 'map',
                mapType: 'china',
                label: {
                  normal: {
                    show: false
                  },
                  emphasis: {
                    show: true
                  }
                },
                data: [
                  {
                    name: '重庆',
                    value: 10
                  }, {
                    name: '云南',
                    value: 10
                  }, {
                    name: '辽宁',
                    value: 10
                  }, {
                    name: '黑龙江',
                    value: 10
                  }, {
                    name: '广西',
                    value: 10
                  }, {
                    name: '甘肃',
                    value: 10
                  }, {
                    name: '山西',
                    value: 10
                  }, {
                    name: '陕西',
                    value: 10
                  }, {
                    name: '吉林',
                    value: 10
                  }, {
                    name: '贵州',
                    value: 10
                  }, {
                    name: '新疆',
                    value: 10
                  }, {
                    name: '青海',
                    value: 10
                  }, {
                    name: '西藏',
                    value: 10
                  }, {
                    name: '四川',
                    value: 10
                  }, {
                    name: '宁夏',
                    value: 10
                  }, {
                    name: '海南',
                    value: 10
                  }, {
                    name: '台湾',
                    value: 10
                  }, {
                    name: '香港',
                    value: 10
                  }, {
                    name: '澳门',
                    value: 10
                  }, {
                    name: '上海',
                    value: 4
                  }, {
                    name: '安徽',
                    value: 4
                  }, {
                    name: '江苏',
                    value: 4
                  }, {
                    name: '浙江',
                    value: 4
                  }, {
                    name: '北京',
                    value: 25
                  }, {
                    name: '天津',
                    value: 25
                  }, {
                    name: '河北',
                    value: 25
                  }, {
                    name: '河南',
                    value: 25
                  }, {
                    name: '内蒙古',
                    value: 25
                  }, {
                    name: '湖南',
                    value: 25
                  }, {
                    name: '山东',
                    value: 25
                  }, {
                    name: '江西',
                    value: 25
                  }, {
                    name: '湖北',
                    value: 25
                  }, {
                    name: '福建',
                    value: 25
                  }, {
                    name: '广东',
                    value: 25
                  }]
              }]
            }
          ]
        };
        myChart.setOption(option);
        myChart.on("click", function (e) {
          $(".localtion-mes strong").html(e.name);
        });

        //  月度推荐
        $(".tabs-header").find("li").click(function () {
          $(".tabs-header").find("li").removeClass("tabs-hover");
          $(this).addClass("des-active")
        }).hover(function () {
          $(".tabs-header").find("li").removeClass("tabs-hover");
          $(this).addClass("tabs-hover")
        },function () {
          $(".tabs-header").find("li").removeClass("tabs-hover");
        })

        // 目的地
        $(".destination").find("li").click(function () {
          $(".destination").find("li").removeClass("des-active");
          $(this).addClass("des-active")
        }).hover(function () {
          $(".destination").find("li").removeClass("des-hover");
          $(this).addClass("des-hover")
        },function () {
          $(".destination").find("li").removeClass("des-hover");
        })



      });

    }
  }
</script>

<style scoped>
  @media (min-width: 1200px) {
    .container {
      width: 1160px;
    }
  }

  /* 主体内容 */
  section {
    width: 100%;
  }

  /* banner */
  .method-index-head {
    margin-top: 0.4rem;
    width: 100%;
    display: flex;
  }

  .method-head-left {
    width: 22.5%;
    height: 2rem;
  }

  .method-list-menu:first-child {
    border-top: 0.02rem solid #1AB2DB;
  }

  .method-list-menu {
    position: relative;
    border-left: 0.02rem solid #1AB2DB;
    border-right: 0.02rem solid #1AB2DB;
  }

  .menu-theme {
    font-size: 0.16rem;
    color: #1AB2DB;
    padding: 0.14rem 0 0.08rem 0.22rem;
  }

  .menu-sub {
    padding: 0 0 0.1rem 0.22rem;
    color: #666;
  }

  .menu-sub span:hover {
    color: #FFCC00;
    cursor: pointer;
  }

  .border-hover > span {
    position: absolute;
    right: 0.1rem;
    top: 40%;
    font-size: 0.16rem;
    color: #AAAAAA;
  }

  .list-menu-border {
    border-bottom: 0.01rem solid #ccc;
    margin: 0 0.05rem 0 0.05rem;
  }

  .method-list-menu .menu-more {
    display: none;
    width: 3.81rem;
    background: #fff;
    top: -0.02rem;
    right: -3.79rem;
    position: absolute;
  }

  .menu-them-none {
    color: #333;

  }

  .method-list-menu .menu-more .menu-list:first-child {
    border-left: none;
    border-top: 0.02rem solid #1ab2db;
  }

  .method-list-menu .menu-more .menu-list {
    border-left: 0.02rem solid #1ab2db;
    border-right: 0.02rem solid #1ab2db;
  }

  .method-list-menu .menu-more .menu-list:last-child {
    border-bottom: 0.02rem solid #1ab2db;
  }

  .method-list-menu:last-child {
    border-bottom: 0.02rem solid #1AB2DB;
  }

  .method-list-menu:hover {
    border-left: 0.02rem solid #1ab2db;
    border-top: 0.02rem solid #1ab2db;
    border-bottom: 0.02rem solid #1ab2db;
    border-right: none;
  }

  .method-list-menu:hover .border-hover {
    border-left: 0.04rem solid #ffcc00;
  }

  .method-list-menu:hover .menu-them-none {
    font-weight: 900;
  }

  .method-list-menu:hover .menu-more {
    z-index: 5;
    display: block;
  }

  .method-list-menu:hover .list-menu-border {
    display: none;
  }

  .method-head-right {
    width: 78%;
    margin-left: 0.2rem;
  }

  .method-search, .method-search-list {
    display: flex;
  }

  .search {
    width: 100%;
    position: relative;
  }

  .search input {
    width: 91%;
    height: 0.4rem;
    border: 0.03rem solid rgb(255, 204, 0);
    outline: none;
    padding-left: 0.1rem;
    border-right: none;
  }

  .search i {
    width: 0.44rem;
    height: 0.46rem;
    background-color: #ffcc00;
    font-size: 0.26rem;
    color: #fff;
    text-align: center;
    line-height: 0.4rem;
    position: absolute;
  }

  .method-search-list {
    position: relative;
  }

  .method-search-list input {
    border: none;
    width: 1rem;
    outline: none;
  }

  .method-search-list i {
    margin-top: 0.15rem;
    color: #999999;
  }

  .method-search-list i:nth-of-type(1) {
    margin-right: 0.05rem;
  }

  .method-search-list i:nth-of-type(2) {
    position: absolute;
    right: 0.2rem;
  }

  .banner-box {
    width: 100%;
    display: flex;
    margin-top: 0.1rem;
  }

  .banner {
    width: 78%;
    margin-right: auto;
    box-sizing: border-box;
  }

  .el-carousel__item:nth-of-type(1) {
    background: url("../../../static/images/img/strategy/strategy-05.jpg") no-repeat center;
    background-size: 100%;
  }

  .el-carousel__item:nth-of-type(2) {
    background: url("../../../static/images/img/strategy/strategy-06.jpg") no-repeat center;
    background-size: 100%;
  }

  .el-carousel__item:nth-of-type(3) {
    background: url("../../../static/images/img/strategy/strategy-07.jpg") no-repeat center;
    background-size: 100%;
  }

  .el-carousel__item:nth-of-type(4) {
    background: url("../../../static/images/img/strategy/strategy-08.jpg") no-repeat center;
    background-size: 100%;
  }

  .el-carousel >>> .el-carousel__button {
    width: 0.13rem;
    height: 0.13rem;
    border-radius: 50%;
    border: 0.01rem solid #1ab2db;
    opacity: 1;
    position: absolute;
    margin-left: 2.2rem;
    top: 0;
    background-color: transparent;
  }

  .el-carousel >>> .el-carousel__indicator--horizontal {
    display: inline-block;
    padding: 0.12rem 0.1rem;
  }

  .el-carousel >>> .el-carousel__indicator.is-active button {
    background-color: #1AB2DB;
  }

  .strategy-right {
    margin-left: auto;
    width: 20.7%;
  }

  .strategy-right .el-image {
    width: 100%;
  }

  /* 地图 */
  .travel-body {
    width: 100%;
    display: flex;
    margin-bottom: 0.8rem;
  }

  .localtion-mes {
    margin-top: 1.5rem;
    margin-left: 0.2rem;
    line-height: 0.22rem;
    color: #666666;
  }

  .localtion-mes .title {
    font-size: 0.3rem;
    line-height: 0.4rem;
  }

  /* 月度推荐 */
  .strategy-list {
    margin-bottom: 0.67rem;
  }

  .strategy-list-header {
    border-left: 0.09rem solid #00a0e9;
    font-size: 0.22rem;
    padding-left: 0.11rem;
  }

  .strategy-list-header div {
    color: #666666;
  }

  .strategy-list-header div span:nth-of-type(1) {
    color: #cccccc;
    font-size: 0.3rem;
  }

  .strategy-list-header div span:nth-of-type(2) {
    color: #00a0e9;
  }

  .strategy-list-body {
    margin-top: 0.37rem;
  }

  .tabs-header {
    display: flex;
    border-bottom: 0.01rem solid #CCC;
    padding-bottom: 0.15rem;
    justify-content: space-between;
  }

  .tabs-header li {
    position: relative;
  }

  .tab-num {
    transform: translateX(0.05rem);
  }

  .tabs-header .tabs-active .icon-tab,.tabs-hover .icon-tab {
    display: block;
    border-left: 0.08rem solid transparent;
    border-top: 0.08rem solid #1AB2DB;
    border-right: 0.08rem solid transparent;
    position: absolute;
    bottom: -0.08rem;
    left: 0.2rem;
  }

  .tabs-header li span:nth-of-type(3) {
    position: absolute;
    top: 0.38rem;
    left: 0.24rem;
    color: #ccc;
  }

  .tabs-header li span:nth-of-type(1) {
    padding: 0.06rem 0.14rem;
    display: block;
    text-align: center;
    border-radius: 0.03rem;
  }

  .tabs-header .tabs-active span:nth-of-type(1),.tabs-hover span:nth-of-type(1) {
    color: #fff;
    background-color: #1AB2DB;
  }

  .tabs-header .tabs-active span:nth-of-type(3), .tabs-header .tabs-hover span:nth-of-type(3){
    color: #1AB2DB;
  }

  .tabs-header li:nth-of-type(1) {
    margin-left: 0.6rem;
  }

  .tabs-header li:nth-of-type(12) {
    margin-right: 0.6rem;
  }

  .tabs-body {
    width: 100%;

  }

  .tabs-body ul {
    display: flex;
    padding: 0.3rem 0.16rem 0;
    justify-content: space-between;
    flex-wrap: wrap;
  }

  .tabs-body ul li {
    position: relative;
    margin-bottom: 0.1rem;
  }

  .tabs-body li .el-image {
    width: 1.3rem;
    height: 1.3rem;
  }

  .tabs-body li span {
    display: block;
    width: 1.3rem;
    height: 0.3rem;
    text-align: center;
    line-height: 0.3rem;
    color: #fff;
    background-color: rgba(0, 0, 0, 0.33);
    position: absolute;
    top: 1rem;
    z-index: 4;
  }
  .destination{
    display: flex;
  }
  .destination li span{
    padding: 0.05rem 0.08rem;
    border-radius: 0.03rem;
    display: block;
  }
  .destination .des-active,.destination .des-hover{
    border-radius: 0.03rem;
    background-color: #1AB2DB;
    color: #fff;
  }
  .destination li{
    margin-right: 0.1rem;
  }
  .destination li:nth-of-type(1){
    margin-left: 0.5rem;
  }
</style>
