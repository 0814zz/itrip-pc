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
        <div class="flyTicket-list-title container">
          <div class="flyTicket-list-title-box">
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
          </div>
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
                <p class="time">起飞时段</p>
                <i class="fa fa-angle-right" aria-hidden="true"></i>
                <div class="left-list-in">
                  <ul>
                    <li>
                      <el-checkbox v-model="checked1">上午(6-12点)</el-checkbox>
                      <p class="money">
                        &yen;
                        <span>400</span>
                      </p>
                    </li>
                    <li>
                      <el-checkbox v-model="checked2">中午(12-18点)</el-checkbox>
                      <p class="money">
                        &yen;
                        <span>568</span>
                      </p>
                    </li>
                    <li>
                      <el-checkbox v-model="checked3">晚上(18-24点)</el-checkbox>
                      <p class="money">
                        &yen;
                        <span>400</span>
                      </p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div class="left-list">
              <div class="left-list-out">
                <i class="fa fa-check-circle" aria-hidden="true"></i>
                <p class="time">航空公司</p>
                <i class="fa fa-angle-right" aria-hidden="true"></i>
                <div class="left-list-in">
                  <ul>
                    <li>
                      <el-checkbox v-model="aviation1">东方航空</el-checkbox>
                      <p class="money">
                        &yen;
                        <span>400</span>
                      </p>
                    </li>
                    <li>
                      <el-checkbox v-model="aviation2">海南航空</el-checkbox>
                      <p class="money">
                        &yen;
                        <span>627</span>
                      </p>
                    </li>
                    <li>
                      <el-checkbox v-model="aviation3">河北航空</el-checkbox>
                      <p class="money">
                        &yen;
                        <span>760</span>
                      </p>
                    </li>
                    <li>
                      <el-checkbox v-model="aviation4">吉祥航空</el-checkbox>
                      <p class="money">
                        &yen;
                        <span>740</span>
                      </p>
                    </li>
                    <li>
                      <el-checkbox v-model="aviation5">南京</el-checkbox>
                      <p class="money">
                        &yen;
                        <span>760</span>
                      </p>
                    </li>
                    <li>
                      <el-checkbox v-model="aviation6">上海</el-checkbox>
                      <p class="money">
                        &yen;
                        <span>500</span>
                      </p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div class="left-list">
              <div class="left-list-out">
                <i class="fa fa-bookmark" aria-hidden="true"></i>
                <p class="time">报销凭证</p>
                <i class="fa fa-angle-right" aria-hidden="true"></i>
                <div class="left-list-in">
                  <ul>
                    <li>
                      <el-checkbox v-model="reim1">行程单</el-checkbox>
                      <p class="money">
                        &yen;
                        <span>495</span>
                      </p>
                    </li>
                    <li>
                      <el-checkbox v-model="reim2">发票</el-checkbox>
                      <p class="money">
                        &yen;
                        <span>568</span>
                      </p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div class="left-list">
              <div class="left-list-out">
                <i class="fa fa-flag" aria-hidden="true"></i>
                <p class="time">起飞机场</p>
                <i class="fa fa-angle-right" aria-hidden="true"></i>
                <div class="left-list-in">
                  <ul>
                    <li>
                      <el-checkbox v-model="take1">首都</el-checkbox>
                      <p class="money">
                        &yen;
                        <span>495</span>
                      </p>
                    </li>
                    <li>
                      <el-checkbox v-model="take2">南苑</el-checkbox>
                      <p class="money">
                        &yen;
                        <span>568</span>
                      </p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div class="left-list">
              <div class="left-list-out">
                <i class="fa fa-coffee" aria-hidden="true"></i>
                <p class="time">舱位</p>
                <i class="fa fa-angle-right" aria-hidden="true"></i>
                <div class="left-list-in">
                  <ul>
                    <li>
                      <el-checkbox v-model="space1">经济舱</el-checkbox>
                      <p class="money">
                        &yen;
                        <span>495</span>
                      </p>
                    </li>
                    <li>
                      <el-checkbox v-model="space2">公务/头等舱</el-checkbox>
                      <p class="money">
                        &yen;
                        <span>595</span>
                      </p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div class="left-list">
              <div class="left-list-out">
                <i class="fa fa-plane" aria-hidden="true"></i>
                <p class="time">计划机型</p>
                <i class="fa fa-angle-right" aria-hidden="true"></i>
                <div class="left-list-in">
                  <ul>
                    <li>
                      <el-checkbox v-model="plane1">中型机</el-checkbox>
                      <p class="money">
                        &yen;
                        <span>495</span>
                      </p>
                    </li>
                    <li>
                      <el-checkbox v-model="plane2">大型机</el-checkbox>
                      <p class="money">
                        &yen;
                        <span>695</span>
                      </p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <!-- 列表右边 -->
          <div class="flight-right-box">
            <div class="flight-right">
              <div class="flight-right-tab">
                <div class="i_prevDate left-but">
                  <span><</span>
                </div>
                <div class="i_calendar_tab_list">
                  <ul class="leftul">
                    <li>
                      <div>
                        <span>&yen;380</span><br/>
                        <span>11-20&nbsp;周日</span>
                      </div>
                    </li>
                    <li>
                      <div>
                        <span>&yen;350</span><br/>
                        <span>11-21&nbsp;周一</span>
                      </div>
                    </li>
                    <li>
                      <div>
                        <span>&yen;360</span><br/>
                        <span>11-22&nbsp;周二</span>
                      </div>
                    </li>
                    <li>
                      <div>
                        <span>&yen;390</span><br/>
                        <span>11-23&nbsp;周三</span>
                      </div>
                    </li>
                    <li>
                      <div>
                        <span>&yen;420</span><br/>
                        <span>11-24&nbsp;周四</span>
                      </div>
                    </li>
                    <li>
                      <div>
                        <span>&yen;320</span><br/>
                        <span>11-25&nbsp;周五</span>
                      </div>
                    </li>
                    <li>
                      <div>
                        <span>&yen;330</span><br/>
                        <span>11-26&nbsp;周六</span>
                      </div>
                    </li>
                    <li>
                      <div>
                        <span>&yen;360</span><br/>
                        <span>11-27&nbsp;周日</span>
                      </div>
                    </li>
                    <li>
                      <div>
                        <span>&yen;370</span><br/>
                        <span>11-28&nbsp;周一</span>
                      </div>
                    </li>
                    <li>
                      <div>
                        <span>&yen;360</span><br/>
                        <span>11-29&nbsp;周二</span>
                      </div>
                    </li>
                    <li>
                      <div>
                        <span>&yen;360</span><br/>
                        <span>11-30&nbsp;周三</span>
                      </div>
                    </li>
                    <li>
                      <div>
                        <span>&yen;360</span><br/>
                        <span>11-30&nbsp;周三</span>
                      </div>
                    </li>
                    <li>
                      <div>
                        <span>&yen;360</span><br/>
                        <span>11-30&nbsp;周三</span>
                      </div>
                    </li>
                    <li>
                      <div>
                        <span>&yen;360</span><br/>
                        <span>11-30&nbsp;周三</span>
                      </div>
                    </li>
                    <li>
                      <div>
                        <span>&yen;360</span><br/>
                        <span>11-30&nbsp;周三</span>
                      </div>
                    </li>
                    <li>
                      <div>
                        <span>&yen;360</span><br/>
                        <span>11-30&nbsp;周三</span>
                      </div>
                    </li>
                    <li>
                      <div>
                        <span>&yen;360</span><br/>
                        <span>11-30&nbsp;周三</span>
                      </div>
                    </li>
                    <li>
                      <div>
                        <span>&yen;360</span><br/>
                        <span>11-30&nbsp;周三</span>
                      </div>
                    </li>
                    <li>
                      <div>
                        <span>&yen;360</span><br/>
                        <span>11-30&nbsp;周三</span>
                      </div>
                    </li>
                    <li>
                      <div>
                        <span>&yen;360</span><br/>
                        <span>11-30&nbsp;周三</span>
                      </div>
                    </li>
                    <li>
                      <div>
                        <span>&yen;360</span><br/>
                        <span>11-30&nbsp;周三</span>
                      </div>
                    </li>
                    <li>
                      <div>
                        <span>&yen;360</span><br/>
                        <span>11-30&nbsp;周三</span>
                      </div>
                    </li>
                    <li>
                      <div>
                        <span>&yen;360</span><br/>
                        <span>11-30&nbsp;周三</span>
                      </div>
                    </li>
                    <li>
                      <div>
                        <span>&yen;360</span><br/>
                        <span>11-30&nbsp;周三</span>
                      </div>
                    </li>
                    <li>
                      <div>
                        <span>&yen;360</span><br/>
                        <span>11-30&nbsp;周三</span>
                      </div>
                    </li>
                    <li>
                      <div>
                        <span>&yen;360</span><br/>
                        <span>11-30&nbsp;周三</span>
                      </div>
                    </li>
                    <li>
                      <div>
                        <span>&yen;360</span><br/>
                        <span>11-30&nbsp;周三</span>
                      </div>
                    </li>
                    <li>
                      <div>
                        <span>&yen;360</span><br/>
                        <span>11-30&nbsp;周三</span>
                      </div>
                    </li>
                    <li>
                      <div>
                        <span>&yen;360</span><br/>
                        <span>11-30&nbsp;周三</span>
                      </div>
                    </li>
                    <li>
                      <div>
                        <span>&yen;360</span><br/>
                        <span>11-30&nbsp;周三</span>
                      </div>
                    </li>
                    <li>
                      <div>
                        <span>&yen;360</span><br/>
                        <span>11-30&nbsp;周三</span>
                      </div>
                    </li>
                    <li>
                      <div>
                        <span>&yen;360</span><br/>
                        <span>11-30&nbsp;周三</span>
                      </div>
                    </li>
                    <li>
                      <div>
                        <span>&yen;360</span><br/>
                        <span>11-30&nbsp;周三</span>
                      </div>
                    </li>
                    <li>
                      <div>
                        <span>&yen;360</span><br/>
                        <span>11-30&nbsp;周三</span>
                      </div>
                    </li>
                    <li>
                      <div>
                        <span>&yen;360</span><br/>
                        <span>11-30&nbsp;周三</span>
                      </div>
                    </li>
                    <li>
                      <div>
                        <span>&yen;360</span><br/>
                        <span>11-30&nbsp;周三</span>
                      </div>
                    </li>
                    <li>
                      <div>
                        <span>&yen;360</span><br/>
                        <span>11-30&nbsp;周三</span>
                      </div>
                    </li>
                    <li>
                      <div>
                        <span>&yen;360</span><br/>
                        <span>11-30&nbsp;周三</span>
                      </div>
                    </li>
                    <li>
                      <div>
                        <span>&yen;360</span><br/>
                        <span>11-30&nbsp;周三</span>
                      </div>
                    </li>
                    <li>
                      <div>
                        <span>&yen;360</span><br/>
                        <span>11-30&nbsp;周三</span>
                      </div>
                    </li>
                  </ul>
                </div>
                <div class="i_next_date right-btn">
                  <span>></span>
                </div>
              </div>
              <div class="flight-right-con">
                <div class="flight-sort">
                  <div class="flight-sort-box">
                    <el-row>
                      <el-col>
                        <el-select v-model="value4" placeholder="南方航空">
                          <el-option v-for="item in sort1" :key="item.value" :label="item.label"
                                     :value="item.value"></el-option>
                        </el-select>
                      </el-col>
                      <el-col>
                        <el-select v-model="value5" placeholder="起飞机场">
                          <el-option v-for="item in sort2" :key="item.value" :label="item.label"
                                     :value="item.value"></el-option>
                        </el-select>
                      </el-col>
                      <el-col>
                        <el-select v-model="value6" placeholder="起飞时段">
                          <el-option v-for="item in sort3" :key="item.value" :label="item.label"
                                     :value="item.value"></el-option>
                        </el-select>
                      </el-col>
                      <el-col>
                        <el-select v-model="value7" placeholder="舱位">
                          <el-option v-for="item in sort4" :key="item.value" :label="item.label"
                                     :value="item.value"></el-option>
                        </el-select>
                      </el-col>
                      <el-col>
                        <el-select v-model="value8" placeholder="起飞机场">
                          <el-option v-for="item in sort5" :key="item.value" :label="item.label"
                                     :value="item.value"></el-option>
                        </el-select>
                      </el-col>
                    </el-row>
                  </div>
                </div>
                <div class="sort-line">
                  <ul>
                    <li class="sort-info">航班信息</li>
                    <li class="sort-start">出发时间</li>
                    <li class="sort-time">到达时间</li>
                    <li class="sort-stage">准点率</li>
                    <li class="sort-price">最低价格</li>
                  </ul>
                </div>
                <div class="sort-list">
                  <ul>
                    <li v-for="item in flight">
                      <div class="sort-list-detail">
                        <p class="sort-info-list">
                          <span>中国南方航空</span>
                          <span>{{item.number}}</span>
                        </p>
                        <p class="sort-start-list">
                          <span>{{item.start}}</span><br>
                          <span>首都国际机场T3</span>
                        </p>
                        <p class="sort-longarr">
                          <span>{{item.time}}</span>
                          <i></i>
                        </p>
                        <p class="sort-start-list sort-time-list">
                          <span>{{item.end}}</span><br>
                          <span>浦东国际机场T2</span>
                        </p>
                        <p class="sort-stage-list">
                          <em>准点率</em>
                          <em>{{item.rate}}</em>
                        </p>
                        <p class="sort-price-list">
                          <span>&yen;</span>
                          <span>{{item.money}}</span>
                          <span>起</span>
                        </p>
                        <button class="sort-btnsubmit">
                          <span>订票</span>
                          <i class="fa fa-angle-down" aria-hidden="true"></i>
                        </button>
                        <button class="sort-btnsubmit-in">
                          <span>收起</span>
                          <i class="fa fa-angle-up" aria-hidden="true"></i>
                        </button>
                      </div>
                      <div class="sort-list-detail-in">
                        <div class="sort-detail-warp">
                          <div class="detail-warp">
                            <div class="detail-warp-info">
                              行程单
                              <span>|</span>
                              <span>退改&yen;362起</span>
                            </div>
                            <div class="detail-warp-sale">
                              <span>6.2折</span>
                            </div>
                            <div class="detail-warp-price">
                              <span>&yen;</span>
                              <span>1050</span>
                            </div>
                            <button>选定</button>
                          </div>
                          <div class="detail-warp">
                            <div class="detail-warp-info">
                              行程单
                              <span>|</span>
                              <span>退改&yen;362起</span>
                            </div>
                            <div class="detail-warp-sale">
                              <span>5.6折</span>
                            </div>
                            <div class="detail-warp-price">
                              <span>&yen;</span>
                              <span>625</span>
                            </div>
                            <button>选定</button>
                          </div>
                          <div class="detail-warp">
                            <div class="detail-warp-info">
                              行程单
                              <span>|</span>
                              <span><span class="free">免费</span>改期</span>
                            </div>
                            <div class="detail-warp-sale">
                              <span>9.3折</span>
                            </div>
                            <div class="detail-warp-price">
                              <span>&yen;</span>
                              <span>769</span>
                            </div>
                            <button>选定</button>
                          </div>
                          <div class="detail-warp">
                            <div class="detail-warp-info">
                              行程单
                              <span>|</span>
                              <span><span class="free">免费</span>改期</span>
                            </div>
                            <div class="detail-warp-sale">
                              <span>全折</span>
                            </div>
                            <div class="detail-warp-price">
                              <span>&yen;</span>
                              <span>956</span>
                            </div>
                            <button>选定</button>
                          </div>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>

              </div>
            </div>
            <div class="paging">
              <el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange"
                             :current-page.sync="currentPage3" :page-size="100"
                             layout="prev, pager, next, jumper"
                             :total="2500">
              </el-pagination>
            </div>
            <div class="statement">
              <div class="statement-title">
                <p>航班信息免责声明:</p>
                <p>i旅行网 提供的各类航班相关的信息，包括但不限于舱位价格、餐食、起降准点率等，来源于中国航信、全国各大
                  机场、航空公司及相关部门公布数据。由于这些信息可能随时变化，以及网络传输问题，携程提供的此类信息可能并非
                  最新或存在误差，因此仅供旅客作为一般参考，任何公司或个人不能将此作为i旅行做出任何承诺或做出任何保证的依据。
                </p>
              </div>
              <div class="i_shengming_pic">
                <p class="i_sm_wf">
                  <span>数据信息由</span><br>
                  <span>中国明航信息网络股份有限公司提供</span>
                </p>
                <el-image src="../../../static/images/icon/i_shengming_pic_03.png"></el-image>
              </div>
            </div>
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
        value1: '', value2: '', value3: '',
        input1: '', input2: '',
        checked1: false, checked2: false, checked3: false,
        aviation1: false, aviation2: false, aviation3: false, aviation4: false, aviation5: false, aviation6: false,
        reim1: false, reim2: false,
        take1: false, take2: false,
        space1: false, space2: false,
        plane1: false, plane2: false,
        sort1: [{
          value: '选项1',
          label: '东方航空'
        }, {
          value: '选项2',
          label: '海南航空'
        }, {
          value: '选项3',
          label: '华夏航空'
        }, {
          value: '选项4',
          label: '四川航空'
        }, {
          value: '选项5',
          label: '南方航空'
        }],
        value4: '',
        sort2: [{
          value: '选项1',
          label: '首都'
        }, {
          value: '选项2',
          label: '南苑'
        }],
        value5: '',
        sort3: [{
          value: '选项1',
          label: '6-12点'
        }, {
          value: '选项2',
          label: '12-18点'
        }, {
          value: '选项3',
          label: '18-24点'
        }],
        value6: '',
        sort4: [{
          value: '选项1',
          label: '经济舱'
        }, {
          value: '选项2',
          label: '公务/头等舱'
        }],
        value7: '',
        sort5: [{
          value: '选项1',
          label: '首都'
        }, {
          value: '选项2',
          label: '南苑'
        }],
        value8: '',
        flight: [
          {number: 'MU3924A321（中）', start: '06:35', time: '2小时15分', end: '08:50', rate: '56%', money: '1050'},
          {number: 'CA3202 A321（中）', start: '06:35', time: '2小时15分', end: '08:50', rate: '50%', money: '760'},
          {number: 'HO1252A321（中）', start: '06:35', time: '2小时15分', end: '08:50', rate: '49', money: '359'},
          {number: 'HU7619 波音-787', start: '07:00', time: '2小时20分', end: '09:20', rate: '89%', money: '630'},
          {number: 'ZH4905 波音737-800（中）', start: '07:15', time: '2小时15分', end: '09:30', rate: '83%', money: '560'},
          {number: 'NS8178 波音737-800（中）', start: '08:35', time: '2小时10分', end: '10:45', rate: '57%', money: '515'},
          {number: 'MF8178 波音737-800（中）', start: '09:00', time: '2小时20分', end: '11:20', rate: '72%', money: '368'},
          {number: 'CA1531 波音737-800（中）', start: '10:30', time: '2小时10分', end: '12:40', rate: '79%', money: '760'},
          {number: 'CZ3166 321(中)', start: '10:50', time: '2小时30分', end: '13:20', rate: '59%', money: '666'},
          {number: 'CZ3166 321(中)', start: '11:30', time: '2小时20分', end: '13:50', rate: '69%', money: '866'},
          {number: 'CZ3166 321(中)', start: '12:00', time: '2小时10分', end: '14:10', rate: '70%', money: '956'},
        ],
        currentPage3: 5,
      }
    },
    methods: {
      handleSizeChange(val) {
        console.log(`每页 ${val} 条`);
      },
      handleCurrentChange(val) {
        console.log(`当前页: ${val}`);
      }
    },
    mounted() {
      $(function () {
        $(window).scroll(function () {
          if ($(window).scrollTop() > 190) {
            $('.flyTicket-list-title-box').addClass("sticky");
          } else {
            $('.flyTicket-list-title-box').removeClass("sticky");
          }
        });

        $(".i_calendar_tab_list ul li").find('div').click(function () {
          $(".i_calendar_tab_list ul li").find('div').removeClass('active');
          $(this).addClass('active');
        }).hover(function () {
          $(".i_calendar_tab_list ul li").removeClass('hover-active');
          $(this).addClass('hover-active');
        }, function () {
          $(this).removeClass('hover-active');
        });

        $(function () {
          var left = 0;
          $(".left-but").click(function () {
            if(left>-30){
              left -= 8.65;
              console.log(left);
              $(".leftul").css("left",left+"rem")
            }
          });
          $(".right-btn").click(function () {
            if(left<-1){
              left += 8.65;
              console.log(left);
              $(".leftul").css("left",left+"rem")
            }

          });

        });


        $(".sort-btnsubmit").click(function () {
          $(this).next().css("display", "block");
          $(this).css("display", "none");
          $(this).parent().next().css("display", "block");
        });
        $(".sort-btnsubmit-in").click(function () {
          $(this).prev().css("display", "block");
          $(this).css("display", "none");
          $(this).parent().next().css("display", "none");
          // $(".sort-btnsubmit").css("display","block");
          // $(this).css("display","none")
          // $(".sort-list-detail-in").css("display","none");
        })
      })
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
  .flyTicket-list-title-box {
    background-color: #fff;
  }

  .flyTicket-list-title-box .el-col {
    margin-right: 0.12rem;
  }

  .flyTicket-list-title-box .el-col:last-child {
    margin-left: 0.12rem;
  }

  .img-change {
    text-align: center;
    display: block;
    margin-top: 0.15rem;
  }

  .flyTicket-list-title-box .el-select >>> .el-input__inner, .el-input >>> .el-input__inner, .el-input__inner {
    border: 0.02rem solid #1AB2DB;
    border-radius: 0;
    height: 0.5rem;
    line-height: 0.5rem;
  }

  .flyTicket-list-title-box .el-date-editor >>> .el-range-separator {
    line-height: 0.4rem;
  }

  .flyTicket-list-title-box .el-button {
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

  .sticky {
    position: fixed;
    top: 0;
    left: 1.6rem;
    z-index: 999;
    width: 12rem;
    margin: 0 auto;
    box-shadow: 0 3px 10px rgba(153, 153, 153, 0.5);
  }

  /* 主体内容 */
  .flyTicket-list-subject {
    width: 100%;
    display: flex;
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

  .left-list {
    width: 100%;
  }

  .left-list-out {
    display: flex;
    color: #666;
    padding: 0 0.15rem;
    height: 0.52rem;
    line-height: 0.52rem;
    border-bottom: 0.01rem solid #CFCFCF;
    border-left: 0.01rem solid #CFCFCF;
    border-right: 0.01rem solid #CFCFCF;
    position: relative;
    background-color: #fff;
  }

  .left-list-out i {
    font-size: 0.25rem;
    line-height: 0.52rem;
  }

  .left-list-out i:nth-of-type(1) {
    color: #CFCFCF;
    width: 25%;
  }

  .left-list-out .time {
    width: 75%;
  }

  .left-list-in {
    width: 2rem;
    position: absolute;
    left: 2.075rem;
    top: 0;
    display: none;
    z-index: 99;
  }

  .left-list-in ul li {
    width: 100%;
    display: flex;
    padding-left: 0.1rem;
    background-color: #fff;
  }

  .el-checkbox >>> .el-checkbox__input.is-checked + .el-checkbox__label {
    color: #666;
  }

  .el-checkbox >>> .el-checkbox__inner {
    background-color: #F6F6F6;
    border-color: #ccc;
  }

  .el-checkbox >>> .el-checkbox__input.is-checked .el-checkbox__inner {
    background-color: #F6F6F6;
    border-color: #ccc;
  }

  .el-checkbox >>> .el-checkbox__input.is-checked .el-checkbox__inner:hover {
    border-color: #ccc;
  }

  .el-checkbox >>> .el-checkbox__input.is-checked .el-checkbox__inner:focus {
    background-color: #F6F6F6;
    border-color: #ccc;
  }

  .el-checkbox >>> .el-checkbox__input.is-focus .el-checkbox__inner {
    border-color: #ccc;
  }

  .el-checkbox >>> .el-checkbox__inner::after {
    -webkit-box-sizing: content-box;
    box-sizing: content-box;
    content: "";
    border: 0.015rem solid #666;
    border-left: 0;
    border-top: 0;
    height: 0.07rem;
    left: 0.04rem;
    position: absolute;
    top: 0.01rem;
    width: 0.04rem;
  }

  .el-checkbox {
    margin-right: 0;
    width: 70%;
  }

  .left-list-in ul li {
    border-left: 0.01rem solid #CFCFCF;
    border-right: 0.01rem solid #CFCFCF;
  }

  .left-list-in ul li:nth-of-type(1) {
    border-top: 0.01rem solid #CFCFCF;
    border-left: none;
    padding-right: 0.01rem;
  }

  .left-list-in ul li:last-child {
    border-bottom: 0.01rem solid #CFCFCF;
  }

  .left-list-in ul li .money {
    margin-left: auto;
    padding-right: 0.1rem;
  }

  .left-list-in ul li .money span {
    font-size: 0.22rem;
    color: #ffba02;
  }

  .left-list-out:hover .left-list-in {
    display: block;
  }

  .left-list-out:hover i:nth-of-type(2) {
    transform: rotateY(-180deg);
  }

  /* 列表右侧 */
  .flight-right-box {
    width: 80%;
    margin-left: 0.1rem;
  }

  .flight-right {

    border: 0.01rem solid #ccc;

  }

  .flight-right-tab {
    width: 80%;
    height: 0.7rem;
    font-size: 0.12rem;
    text-align: center;
    cursor: pointer;
  }

  .flight-right-tab, .i_calendar_tab_list ul {
    display: flex;
    width: 100%;
    color: #666;
  }

  .i_prevDate, .i_next_date {
    width: 0.33rem;
    height: 0.7rem;
    line-height: 0.7rem;
    font-size: 0.18rem;
    border: 0.01rem solid #ccc;
    color: #999;
  }

  .i_prevDate span, .i_next_date span {
    display: block;
    text-align: center;
    width: 100%;
    height: 100%;
    background-color: #f6f6f6;
  }

  .i_prevDate span:hover, .i_next_date span:hover {
    background-color: rgba(250, 224, 157, 0.51);
  }

  .i_calendar_tab_list {
    width: 8.6rem;
    height: 0.72rem;
    position: relative;
    overflow: hidden;
  }

  .i_calendar_tab_list ul {
    width: 999999rem;
    height: 0.72rem;
    position: absolute;
    top: 0;
    left: -0.09rem;
    transition: all 0.3s;
  }

  .i_calendar_tab_list ul li {
    width: 1.08rem;
    height: 0.7rem;
  }

  .i_calendar_tab_list ul li div {
    width: 100%;
    height: 100%;
    background-color: #f6f6f6;
    border: 0.01rem solid #ccc;
  }

  .i_calendar_tab_list ul li div span:nth-of-type(1) {
    font-size: 0.24rem;
    color: rgb(255, 186, 2);
    line-height: 0.44rem;
  }

  .i_calendar_tab_list ul li .active, .i_calendar_tab_list ul li .hover-active {
    background-color: #fff;
    border-top: 0.02rem solid #1AB2DB;
  }

  .flight-right-con {
    padding: 0.15rem 0.26rem;
  }

  .flight-sort .el-row {
    display: flex;
  }

  .el-col-24 {
    margin-right: 0.15rem;
    width: 13%;
  }

  .sort-line ul {
    width: 100%;
    display: flex;
    padding-top: 0.1rem;
    border-bottom: 0.02rem solid #ccc;
  }

  .sort-line ul li {
    font-size: 0.16rem;
    height: 0.36rem;
    line-height: 0.36rem;
    text-align: center;
    color: #666883;
  }

  .sort-info {
    width: 1.3rem;
    margin-right: 0.2rem;
  }

  .sort-start {
    width: 1.1rem;
    margin-right: 0.75rem;
  }

  .sort-time {
    width: 1.4rem;
    margin-right: 0.25rem;
  }

  .sort-stage {
    width: 0.65rem;
    margin-right: 0.2rem;
  }

  .sort-price {
    width: 1.2rem;
  }

  .sort-list ul li {
    border-bottom: 0.01rem solid #ccc;
  }

  .sort-list-detail {
    display: flex;
    padding: 0.2rem 0;
  }

  .sort-info-list span {
    display: block;
  }

  .sort-info-list {
    width: 1.3rem;
    font-size: 0.14rem;
    margin-right: 0.2rem;
  }

  .sort-info-list span:nth-of-type(1) {
    height: 0.22rem;
    line-height: 0.22rem;
    width: 1.1rem;
    padding-left: 0.3rem;
    background: url("../../../static/images/icon/flight_logo1714_1207_03.jpg") no-repeat 0.12rem 0.03rem;
  }

  .sort-info-list span:nth-of-type(2) {
    text-align: center;
  }

  .sort-start-list {
    width: 1.2rem;
    font-size: 0.14rem;
    text-align: center;
  }

  .sort-start-list span:nth-of-type(1) {
    font-size: 0.24rem;
    color: #666666;
  }

  .sort-start-list span:nth-of-type(2) {
    font-size: 0.12rem;
  }

  .sort-longarr span {
    font-size: 0.12rem;
    margin-left: 0.1rem;
  }

  .sort-longarr i {
    display: block;
    width: 0.75rem;
    height: 0.1rem;
    margin-top: 0.04rem;
    background: url("../../../static/images/icon/longarr6609_1207.png") no-repeat center center;
  }

  .sort-time-list {
    margin: 0 0.25rem 0 0.05rem;
  }

  .sort-stage-list {
    width: 0.65rem;
    text-align: center;
    margin-right: 0.3rem;
  }

  .sort-stage-list em {
    display: block;
    line-height: 0.24rem;
  }

  .sort-price-list {
    width: 1.2rem;
    text-align: center;
  }

  .sort-price-list span:nth-of-type(1) {
    font-size: 0.12rem;
    vertical-align: 0.13rem;
  }

  .sort-price-list span:nth-of-type(2) {
    color: #ff4401;
    font-size: 0.34rem;
  }

  .sort-price-list span:nth-of-type(3) {
    font-size: 0.12rem;
  }

  .sort-btnsubmit {
    width: 0.76rem;
    height: 0.38rem;
    background: #1ab2db;
    color: #fff;
    border: none;
    margin-left: 0.5rem;
    border-radius: 0.03rem;

  }

  .sort-btnsubmit-in {
    position: absolute;
    left: 11.36rem;
    display: none;
    width: 0.76rem;
    height: 0.38rem;
    background: #fff;
    color: #1ab2db;
    border: none;
    border: 0.02rem solid #1ab2db;
    margin-left: 0.5rem;
    border-radius: 0.03rem;
  }

  .sort-list-detail-in {
    position: relative;
    top: 0;
    left: 0;
    width: 0.86rem;
    display: none;
  }

  .sort-detail-warp {
    margin-bottom: 0.15rem;
  }

  .detail-warp {
    display: flex;
    margin-left: 1.7rem;
    width: 6.9rem;
    height: 0.45rem;
    line-height: 0.45rem;
    border-bottom: 0.01rem dotted #ccc;
  }

  .detail-warp-info {
    width: 1.9rem;
    color: #666;
    text-align: left;
    margin-left: 0.15rem;
    font-size: 0.12rem;
  }

  .detail-warp-info span:nth-of-type(1) {
    margin: 0 0.05rem;
  }

  .free {
    color: #33CC33;
  }

  .detail-warp-sale {
    margin-left: 1rem;
    width: 0.75rem;
  }

  .detail-warp-price {
    margin-left: 0.4rem;
    display: flex;
    width: 0.5rem;
    color: #ff4401;
    font-size: 0.28rem;
  }

  .detail-warp-price span:nth-of-type(1) {
    font-size: 0.14rem;
    color: #666;
    margin-right: 0.05rem;
    vertical-align: 0.06rem;
  }

  .detail-warp-price span:nth-of-type(2) {
    font-weight: lighter;
  }

  .detail-warp button {
    margin-left: 1.2rem;
    width: 0.76rem;
    height: 0.38rem;
    border: none;
    background: #1ab2db;
    color: #fff;
    border-radius: 0.03rem;
  }

  .paging {
    padding: 0.5rem 0 0.3rem;
    margin-left: 45%;
  }

  .statement-title p:nth-of-type(1) {
    line-height: 0.3rem;
  }

  .statement-title p:nth-of-type(2) {
    font-size: 0.12rem;
    line-height: 0.24rem;
  }

  .i_shengming_pic {
    width: 100%;
    display: flex;
    margin-bottom: -0.1rem;
  }

  .i_shengming_pic, .i_shengming_pic .el-image {
    margin-left: auto;
  }

  .i_sm_wf {
    font-size: 0.12rem;
    margin-left: 72%;
    text-align: right;
  }

</style>
