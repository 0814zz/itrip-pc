<template>
  <div>
    <!-- 头部 -->
    <header>
      <Head></Head>
    </header>

    <!-- 主体 -->
    <section class="container">
      <div class="flyTicket-list-body">
        <!-- 头部—表单 -->
        <div class="flyTicket-list-title">
          <el-row>
            <el-col :span="2">
              <el-select v-model="value1" placeholder="单程">
                <el-option v-for="item in options1" :key="item.value" :label="item.label"
                           :value="item.value"></el-option>
              </el-select>
            </el-col>
            <el-col :span="2">
              <el-select v-model="value2" placeholder="舱位">
                <el-option v-for="item in options2" :key="item.value" :label="item.label"
                           :value="item.value"></el-option>
              </el-select>
            </el-col>
            <el-col :span="4">
              <el-input placeholder="从  出发城市" suffix-icon="fa fa-map-marker" v-model="input1">
                <i class="" aria-hidden="true"></i>
              </el-input>
            </el-col>
            <el-col :span="1">
              <a href="#" class="img-change">
                <el-image src="../../../static/images/icon/turnfly3921_1xxx1206.png"></el-image>
              </a>
            </el-col>
            <el-col :span="5">
              <el-input placeholder="从  到达城市" suffix-icon="fa fa-map-marker" v-model="input2">
                <i class="" aria-hidden="true"></i>
              </el-input>
            </el-col>
            <el-col :span="7">
              <el-date-picker v-model="value3" type="daterange" range-separator="至" start-placeholder="开始日期"
                              end-placeholder="结束日期"></el-date-picker>
            </el-col>
            <el-col :span="1">
              <el-button>
                <i class="fa fa-search" aria-hidden="true"></i>
              </el-button>
            </el-col>
          </el-row>
          <div class="title-position">
            <span>历史查询：单程&nbsp;北京&nbsp;-&nbsp;上海&nbsp;2016-10-25</span>
          </div>
        </div>

        <div class="flyTicket-list-subject">
          <!-- 列表-左边 -->
          <div class="flight-left">
            <div class="left-top">
              <p>筛选</p>
              <p>共60条航空信息&nbsp;&nbsp;&nbsp;清空全部</p>
            </div>
            <div class="left-list">
              <div class="left-list-out">
                <i class="fa fa-clock-o" aria-hidden="true"></i>
                <p>起飞时段</p>
                <i class="fa fa-angle-right" aria-hidden="true"></i>
              </div>
              <div class="left-list-in">
                <el-checkbox v-model="checked">上午(6-12点)</el-checkbox>
                <p>
                  &yen;
                  <span>400</span>
                </p>
              </div>
            </div>


            <!--<div class="left-ul-list">-->
            <!--<div class="left-ul-li">-->
            <!--<i class="fa fa-clock-o" aria-hidden="true"></i>-->
            <!--<p>起飞时段</p>-->
            <!--<span class="right-arrow">-->
            <!--<i class="fa fa-angle-right" aria-hidden="true"></i>-->
            <!--</span>-->
            <!--<div>-->
            <!--<ul class="flight-left-in">-->
            <!--<li>-->
            <!--<el-checkbox v-model="checked">上午(6-12点)</el-checkbox>-->

            <!--</li>-->
            <!--</ul>-->
            <!--</div>-->
            <!--</div>-->
            <!--</div>-->
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
    components: {
      Head,
      Foot1,
      Foot2,
      Foot3,
    },
    data() {
      return {
        options1: [{
          value: '选项1',
          label: '单程'
        }, {
          value: '选项2',
          label: '往返'
        }, {
          value: '选项3',
          label: '联程'
        }],
        options2: [{
          value: '选项1',
          label: '不限'
        }, {
          value: '选项2',
          label: '经济舱'
        }, {
          value: '选项3',
          label: '商务舱'
        },
          {
            value: '选项4',
            label: '头等舱'
          }],
        value1: '',
        value2: '',
        input1: '',
        input2: '',
        value3: '',
        checked: true
      }
    }
  }
</script>

<style scoped>
  @media (min-width: 1200px) {
    .container {
      width: 1160px;
    }
  }

  .flyTicket-list-body {
    margin: 0.28rem 0;
  }

  /* 头部--表单 */
  .el-col {
    margin-right: 0.12rem;
  }

  .el-col:last-child {
    margin-left: 0.12rem;
  }

  .img-change {
    text-align: center;
    display: block;
    margin-top: 0.15rem;
  }

  .el-select >>> .el-input__inner, .el-input >>> .el-input__inner, .el-input__inner {
    border: 0.02rem solid #1AB2DB;
    border-radius: 0;
    height: 0.5rem;
    line-height: 0.5rem;
  }

  .el-date-editor >>> .el-range-separator {
    line-height: 0.4rem;
  }

  .el-button {
    background-color: #1AB2DB;
    height: 0.5rem;
    width: 0.5rem;
    line-height: 0.3rem;
    border-radius: 0;
  }

  .el-button >>> .fa .fa-search {
    color: #fff;
  }

  .el-input >>> .el-input__suffix {
    font-size: 0.2rem;
  }

  .el-date-editor >>> .el-range__icon {
    font-size: 0.2rem;
  }

  .fa-search:before {
    color: #fff;
    font-size: 0.28rem;
    margin-left: -0.1rem;
  }

  .title-position {
    margin: 0.1rem 0 0.28rem;
    color: #666;
  }

  /* 主体内容 */
  .flyTicket-list-subject {
    width: 100%;
  }

  /* 列表左边 */
  .flight-left {
    width: 18%;
  }

  .left-top {
    border: 0.01rem solid #E5E5E5;
    padding: 0.12rem 0.1rem;
    color: #666;
  }
  .left-list{

    width: 100%;
  }
  .left-list-out{

    display: flex;
    color: #666;
    padding: 0 0.15rem;
    height: 0.52rem;
    line-height: 0.52rem;
    border-bottom: 0.01rem solid #CFCFCF;
    border-left: 0.01rem solid #CFCFCF;
    border-right: 0.01rem solid #CFCFCF;
  }
  .left-list-out i{
    font-size: 0.25rem;
    line-height: 0.52rem;
  }
  .left-list-out i:nth-of-type(1){
    color: #CFCFCF;
    width: 18%;
  }
  .left-list-out p{
    width: 75%;
  }
  .left-list-in{
    width: 2rem;
  }

  /*.left-top p:nth-of-type(1) {*/
  /*font-size: 0.18rem;*/
  /*margin-bottom: 0.05rem;*/
  /*}*/

  /*.left-ul-list .left-ul-li {*/
  /*color: #666;*/
  /*display: flex;*/
  /*padding: 0 0.15rem;*/
  /*height: 0.52rem;*/
  /*line-height: 0.52rem;*/
  /*border-bottom: 0.01rem solid #CFCFCF;*/
  /*border-left: 0.01rem solid #CFCFCF;*/
  /*border-right: 0.01rem solid #CFCFCF;*/
  /*}*/

  /*.left-ul-list .left-ul-li i {*/
  /*line-height: 0.52rem;*/
  /*width: 20%;*/
  /*}*/
  /*.left-ul-list .left-ul-li i:nth-of-type(1) {*/
  /*font-size: 0.25rem;*/
  /*color: #CFCFCF;*/
  /*}*/
  /*.fa-angle-right:before {*/
  /*color: #333;*/
  /*font-size: 0.25rem;*/
  /*}*/
  /*.left-ul-list .left-ul-li p {*/
  /*width: 70%;*/
  /*margin-top: 0.025rem;*/
  /*}*/

</style>
