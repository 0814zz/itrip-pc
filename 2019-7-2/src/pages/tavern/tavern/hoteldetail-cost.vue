<template>
  <div>
    <div class="container">
      <!-- 费用头部 -->
      <div class="container i-main nav-location">
        <ul>
          <li class="i-main-active"><a href="#anchor1">房型列表</a></li>
          <li><a href="#anchor2">酒店详情</a></li>
          <li><a href="#anchor3">酒店点评（6258）</a></li>
        </ul>
      </div>
      <div v-show="cost" class="container i-main" id="fixed-top">
        <ul>
          <li class="i-main-active"><a href="#anchor1">房型列表</a></li>
          <li><a href="#anchor2">酒店详情</a></li>
          <li><a href="#anchor3">酒店点评（6258）</a></li>
        </ul>
      </div>




      <!-- 费用主体 -->
      <div class="i_con">
        <div class="check-in-time">
          <el-row>
            <el-col :span="4">
              <el-date-picker v-model="input1" suffix-icon="el-icon-date" type="date"
                              placeholder="入住 2019-6-28"></el-date-picker>
            </el-col>
            <el-col :span="4" :offset="1">
              <el-date-picker v-model="input2" suffix-icon="el-icon-date" type="date"
                              placeholder="入住 2019-6-28"></el-date-picker>
            </el-col>
            <el-col :span="2" :offset="1">
              <el-button type="primary">重新搜索</el-button>
            </el-col>
          </el-row>
        </div>
        <div class="hotel_detail-sort">
          <div class="btn-serach-div active">
            含早餐
            <span></span>
            <i class="fa fa-check" aria-hidden="true"></i>
          </div>
          <div class="btn-serach-div">
            立刻确认
            <span></span>
            <i class="fa fa-check" aria-hidden="true"></i>
          </div>
          <div class="btn-serach-div">
            免费取消
            <span></span>
            <i class="fa fa-check" aria-hidden="true"></i>
          </div>
          <div class="btn-serach-div active">
            可预订
            <span></span>
            <i class="fa fa-check" aria-hidden="true"></i>
          </div>
          <div class="select-group">
            <el-row>
              <el-col :span="6" :offset="1">
                <el-select v-model="value1" placeholder="可用优惠券">
                  <el-option v-for="item in options1" :key="item.value1" :label="item.label"
                             :value="item.value1"></el-option>
                </el-select>
              </el-col>
              <el-col :span="4" :offset="1">
                <el-select v-model="value2" placeholder="床型">
                  <el-option v-for="item in options2" :key="item.value2" :label="item.label"
                             :value="item.value2"></el-option>
                </el-select>
              </el-col>
              <el-col :span="4" :offset="1">
                <el-select v-model="value3" placeholder="支付类型">
                  <el-option v-for="item in options3" :key="item.value3" :label="item.label"
                             :value="item.value3"></el-option>
                </el-select>
              </el-col>
            </el-row>
          </div>
        </div>
        <!-- 房型列表 -->
        <div class="house-list">
          <div id="anchor1" style="transform: translateY(-0.8rem)"></div>
          <div class="house-title">
            <ul class="house-head">
              <li>房型</li>
              <li></li>
              <li>床型</li>
              <li>早餐</li>
              <li>宽带</li>
              <li>政策</li>
              <li>房价(含服务费)</li>
              <li></li>
            </ul>
          </div>
          <div class="house-box">
            <div class="house-title house-txt">
              <div class="left-house">
                <div class="left-house-box">
                  <el-image src="static/images/img/hotelD01_0315.jpg"></el-image>
                  <br>
                  <span>豪华大床房 <br>查看详情</span>
                </div>
              </div>
              <ul class="house-right">
                <li v-for="item in houses">
                  <div class="house-right-msg">
                    <p>{{item.name}}直营
                      <span>{{item.label_1}}</span>
                      <span>{{item.label_2}}</span>
                      {{item.bed}}
                    </p>
                    <p>{{item.green}}</p>
                  </div>
                  <div>{{item.food}}</div>
                  <div>{{item.broadband}}</div>
                  <div>{{item.policy}}</div>
                  <div><i class="house-money">¥</i><em class="house-price">{{item.price}}</em>起</div>
                  <div><span>预定</span></div>
                </li>
              </ul>
            </div>
            <div class="house_detail_fold">
              <div class="house-open">
                展开全部房型
                <i class="fa fa-chevron-down" aria-hidden="true"></i>
              </div>
              <div class="house-close">
                收起
                <i class="fa fa-chevron-up" aria-hidden="true"></i>
              </div>
            </div>
          </div>
          <div class="house-box">
            <div class="house-title house-txt">
              <div class="left-house">
                <div class="left-house-box">
                  <el-image src="static/images/img/hotelD01_0315.jpg"></el-image>
                  <br>
                  <span>豪华大床房 <br>查看详情</span>
                </div>
              </div>
              <ul class="house-right">
                <li v-for="item in houses">
                  <div class="house-right-msg">
                    <p>{{item.name}}直营
                      <span>{{item.label_1}}</span>
                      <span>{{item.label_2}}</span>
                      {{item.bed}}
                    </p>
                    <p>{{item.green}}</p>
                  </div>
                  <div>{{item.food}}</div>
                  <div>{{item.broadband}}</div>
                  <div>{{item.policy}}</div>
                  <div><i class="house-money">¥</i><em class="house-price">{{item.price}}</em>起</div>
                  <div><span>预定</span></div>
                </li>
              </ul>
            </div>
            <div class="house_detail_fold">
              <div class="house-open2">
                展开全部房型
                <i class="fa fa-chevron-down" aria-hidden="true"></i>
              </div>
              <div class="house-close2">
                收起
                <i class="fa fa-chevron-up" aria-hidden="true"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    props:[
      "cost"
    ],
    data() {
      return {
        navShow: false,
        input1: '',
        input2: '',
        value1: '',
        value2: '',
        value3: '',
        options1: [
          {value1: '选项1', label: '暂无可用优惠券'},
        ],
        options2: [
          {value2: '选项1', label: '不限'},
          {value2: '选项2', label: '到店付'},
          {value2: '选项3', label: '担保'},
          {value2: '选项4', label: '在线付'},
          {value2: '选项5', label: '闪住'},
        ],
        options3: [
          {value3: '选项1', label: '不限'},
          {value3: '选项2', label: '大床'},
          {value3: '选项3', label: '双床'},
          {value3: '选项4', label: '单人床'},
          {value3: '选项5', label: '多床'},
        ],
        houses: [
          {
            name: 'i旅行',
            label_1: "代理",
            label_2: '礼',
            green: '预定满意度 100%',
            bed: '大床',
            food: '无早',
            broadband: '免费',
            policy: '不可取消',
            price: '2699'
          },

          {
            name: 'i旅行',
            label_1: "代理",
            label_2: '礼',
            green: '预定满意度 100%',
            bed: '大床',
            food: '单早',
            broadband: '免费',
            policy: '不可取消',
            price: '2699'
          },
          {
            name: 'i旅行',
            label_1: "代理",
            label_2: '礼',
            green: '预定满意度 100%',
            bed: '大床',
            food: '单早',
            broadband: '免费',
            policy: '不可取消',
            price: '2699'
          },
          {
            name: 'i旅行',
            label_1: "代理",
            label_2: '礼',
            green: '预定满意度 100%',
            bed: '大床',
            food: '单早',
            broadband: '免费',
            policy: '不可取消',
            price: '2699'
          },
          {
            name: 'i旅行',
            label_1: "代理",
            label_2: '礼',
            green: '预定满意度 100%',
            bed: '大床',
            food: '单早',
            broadband: '免费',
            policy: '不可取消',
            price: '2699'
          },
          {
            name: 'i旅行',
            label_1: "代理",
            label_2: '礼',
            green: '预定满意度 100%',
            bed: '大床',
            food: '单早',
            broadband: '免费',
            policy: '不可取消',
            price: '2699'
          }
        ]
      }
    },
    mounted() {
      $(function () {
        // 点击房价列表
        $(".i-main .first-list").find("li").click(function () {
          $(".i-main .first-list").find("li").removeClass("i-main-active");
          $(this).addClass("i-main-active")
        });



        // 点击含早餐
        $(".hotel_detail-sort").find(".btn-serach-div").click(function () {
          $(this).toggleClass("active")
        });
        // 点击展开
        $(".house-open").click(function () {
          $(".house-close").css("display", "block");
          $(".house-txt ul li:nth-of-type(6)").css("display", "flex");
          $(this).css("display", "none")
        });
        $(".house-open2").click(function () {
          $(".house-close2").css("display", "block");
          $(".house-txt ul li:nth-of-type(6)").css("display", "flex");
          $(this).css("display", "none")
        });
        // 点击收起
        $(".house-close").click(function () {
          $(".house-open").css("display", "block");
          $(".house-txt ul li:nth-of-type(6)").css("display", "none");
          $(this).css("display", "none")
        });
        $(".house-close2").click(function () {
          $(".house-open2").css("display", "block");
          $(".house-txt ul li:nth-of-type(6)").css("display", "none");
          $(this).css("display", "none")
        })
      })
    }
  }
</script>

<style scoped>

  .i-main {
    margin-top: 0.3rem;
    /*width: 100%;*/
    background-color: #fff;
    border-bottom: 0.01rem solid #E5E5E5;
  }

  .i-main ul {
    font-size: 0.28rem;
    color: #484848;
    display: flex;
    cursor: pointer;
  }

  .i-main ul li {
    border: 0.01rem solid #ccc;
    padding: 0.2rem 0.3rem;
    height: 0.31rem;
    line-height: 0.33rem;
  }

  .i-main ul .i-main-active {
    border-top: 0.1rem solid #00A0E9;
    height: 0.22rem;
    font-weight: bold;
    background-color: #EDF6F8;
    line-height: 0.16rem;
  }



  /* 费用主体 */
  .i_con {
    margin-bottom: 0.2rem;
  }

  .check-in-time {
    margin-top: 0.2rem;
    margin-left: 0.1rem;
  }

  .el-input >>> .el-input__inner {
    border: 0.02rem solid #ccc;
    border-radius: 0;
  }

  .hotel_detail-sort {
    width: 100%;
    margin: 0.2rem 0.2rem 0 0;
    display: flex;
  }

  .hotel_detail-sort .btn-serach-div {
    padding: 0.1rem 0.12rem;
    margin-left: 0.1rem;
    border: 0.01rem solid #DDDDDD;
    position: relative;
    cursor: pointer;
  }

  .hotel_detail-sort .active {
    border: 0.01rem solid #3399CC;
  }

  .btn-serach-div i {
    color: #fff;
    position: absolute;
    right: 0;
    bottom: 0;
    z-index: 1;
  }

  .hotel_detail-sort .active span {
    position: absolute;
    right: 0;
    bottom: 0;
    border-top: 25px solid transparent;
    border-right: 25px solid #00a0e9;
    z-index: -1;
  }

  .select-group {
    margin-left: 0.3rem;
  }

  .el-select >>> .el-input__inner {
    border-radius: 0;
  }

  .el-select >>> .el-input__inner:focus {
    border: 0.01rem solid #DCDFE6;
  }

  /* 房型列表 */
  .house-list {
    width: 100%;
    margin-top: 0.2rem;
    border: 0.01rem solid #CCCCCC;
  }

  .house-title .house-head {
    width: 100%;
    display: flex;
  }

  .house-title .house-head li {
    width: 15%;
    background-color: #EDF6F8;
    line-height: 0.4rem;
  }

  .house-title .house-head li:nth-of-type(1), .left-house {
    padding-left: 0.1rem;
  }

  .house-txt {
    display: flex;
    justify-content: space-between;
    border-top: 0.01rem dashed #CCCCCC;
  }

  .house-txt ul {
    width: 86%;
  }

  .house-txt ul li:nth-of-type(1) {
    border-top: none;
  }

  .house-txt ul li {
    display: flex;
    padding: 0.06rem 0.8rem 0.14rem 0;
    justify-content: space-between;
    border-top: 0.01rem dashed #CCCCCC;
    border-bottom: 0.01rem dashed #CCCCCC;
  }

  .left-house {
    width: 13%;
  }

  .left-house-box {
    width: 1rem;
    text-align: center;
  }

  .left-house-box .el-image {
    width: 100%;
    height: 1rem;
    margin-top: 0.2rem;
  }

  .left-house-box span {
    cursor: pointer;
  }

  .left-house-box span:hover {
    color: #FBA62C;
  }

  .house-right-msg p span {
    color: #fff;
    padding: 0.009rem 0.03rem;
  }

  .house-right-msg p span:nth-of-type(1) {
    background-color: #B2D9E1;
    margin-left: 0.15rem;
  }

  .house-right div:nth-of-type(2), .house-right div:nth-of-type(3), .house-right div:nth-of-type(4) {
    padding-left: 0.3rem;
  }

  .house-right-msg p span:nth-of-type(2) {
    background-color: #FBA62C;
  }

  .house-right div:nth-of-type(5) {
    position: relative;
    left: 0.22rem;
  }

  .house-money {
    position: absolute;
    top: 0.05rem;
    left: -0.1rem;
    font-weight: lighter;
  }

  .house-price {
    font-size: 0.34rem;
    color: #FF3300;
  }

  .house-right div:nth-of-type(6) {
    margin-top: 0.1rem;
  }

  .house-right div:nth-of-type(6) span {
    background-color: #1AB2DB;
    padding: 0.05rem 0.15rem;
    color: #fff;
  }

  .house-txt ul li:nth-of-type(6) {
    display: none;
  }

  .house_detail_fold {
    margin-left: 88%;
    padding: 0.1rem 0;
    text-align: left;
  }

  .house-close, .house-close2 {
    display: none;
    padding-left: 0.57rem;
  }

  .house_detail_fold:hover {
    color: #FBA62C;
  }


  #fixed-top {
    position: fixed;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    margin: 0 0 0 -0.1rem;
    z-index: 9;
    border-bottom: none;
    box-shadow: 0 0.03rem 0.06rem rgba(0, 0, 0, 0.2);
  }
</style>
