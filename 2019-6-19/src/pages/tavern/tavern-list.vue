<template>
  <div>
    <header>
      <Head></Head>
    </header>
    <section class="container">
      <!-- 位置 -->
      <div class="tavern-list-head ">
        您所在的位置：
        <span>酒店预订 ></span>
        北京酒店
      </div>
      <!-- 表格 -->
      <div class="tavern-list-tabs">
        <div class="tavern-list-box">
          <div class="tavern-tabs-title">
            目的地：&nbsp;<el-input v-model="input1" placeholder="北京市" class="city"></el-input>&nbsp;&nbsp;
          </div>
          <div class="tavern-tabs-title">
            <div class="tavern-tabs-data">
              <span>入住：</span><el-date-picker type="date" placeholder="2019-6-27" v-model="form.date1"></el-date-picker>&nbsp;&nbsp;
            </div>
          </div>
          <div class="tavern-tabs-title">
            <div class="tavern-tabs-data">
              <span>退房：</span><el-date-picker type="date" placeholder="2019-7-3" v-model="form.date2"></el-date-picker>&nbsp;&nbsp;
            </div>
          </div>
          <div class="tavern-tabs-title">
            关键词：&nbsp;<el-input v-model="input4"></el-input>&nbsp;&nbsp;
          </div>
          <div>&nbsp;<el-button type="primary">搜索</el-button>&nbsp;&nbsp;</div>
        </div>
        <ul class="tavern-list-msg">
          <li>
            位置：
            <el-checkbox-group v-model="checkList1">
              <el-checkbox label="天安门、王..."></el-checkbox>
              <el-checkbox label="中关村、五..."></el-checkbox>
              <el-checkbox label="西单、金融..."></el-checkbox>
              <el-checkbox label="首都机场"></el-checkbox>
              <el-checkbox label="亚运村"></el-checkbox>
            </el-checkbox-group>
          </li>
          <li>
            价格：
            <el-checkbox-group v-model="checkList2">
              <el-checkbox label="￥150以下"></el-checkbox>
              <el-checkbox label="￥150-300"></el-checkbox>
              <el-checkbox label="￥301-450"></el-checkbox>
              <el-checkbox label="￥450以上"></el-checkbox>
            </el-checkbox-group>
          </li>
          <li>
            星级：
            <el-checkbox-group v-model="checkList3">
              <el-checkbox label="二星级及以..."></el-checkbox>
              <el-checkbox label="三星级/舒适"></el-checkbox>
              <el-checkbox label="四星级/高档"></el-checkbox>
              <el-checkbox label="五星级/高档"></el-checkbox>
            </el-checkbox-group>
          </li>
          <li>
            特色：
            <el-checkbox-group v-model="checkList4">
              <el-checkbox label="休闲度假"></el-checkbox>
              <el-checkbox label="青年旅社"></el-checkbox>
              <el-checkbox label="精品酒店"></el-checkbox>
              <el-checkbox label="商务出行"></el-checkbox>
              <el-checkbox label="会"></el-checkbox>
            </el-checkbox-group>
          </li>
        </ul>
      </div>
      <!-- 选择 -->
      <div class="choice">
        <span class="choice-num">8</span>&nbsp;&nbsp;&nbsp;家酒店&nbsp;&nbsp;&nbsp;&nbsp;您已选择：
        <el-tag v-for="item in tags" :key="item.name" closable :type="item.type">
          {{item.name}}
        </el-tag>
      </div>
      <!-- 评价 -->
      <div class="evaluate">
        <el-radio-group v-model="radio1" size="medium">
          <el-radio-button label="最受欢迎"></el-radio-button>
          <el-radio-button label="评分"></el-radio-button>
          <el-radio-button label="价格"></el-radio-button>
          <el-radio-button label="星级"></el-radio-button>
        </el-radio-group>
        <el-checkbox-group v-model="checkList5">
          <el-checkbox label="立即确认"></el-checkbox>
          <el-checkbox label="可订"></el-checkbox>
          <el-checkbox label="促销"></el-checkbox>
          <el-checkbox label="在线付"></el-checkbox>
          <el-checkbox label="闪住"></el-checkbox>
          <el-checkbox label="钟点房"></el-checkbox>
        </el-checkbox-group>
      </div>
      <!-- 推荐 -->
      <div>
        <ul>
          <li v-for="(item,index) in first">
            <div>
              <el-image :src="item.src"></el-image>

            </div>
          </li>

        </ul>
      </div>
    </section>
    <footer>
      <foot1></foot1>
      <foot3></foot3>
    </footer>
  </div>
</template>

<script>
  import Head from '@/components/header/head'
  import foot1 from '@/components/footer/foot-1'
  import foot3 from '@/components/footer/foot-3'

  export default {
    components: {
      Head,
      foot1,
      foot3,
    },
    data() {
      return {
        input1: '',
        input2: '',
        input3: '',
        input4: '',
        data1:'',
        data2:'',
        form: {
          date1: '',
          date2: '',
        },
        checkList1: ['天安门、王...'],
        checkList2: ['￥150-300'],
        checkList3: ['三星级/舒适'],
        checkList4: ['青年旅社'],
        checkList5: ['可订'],
        tags: [
          { name: '北京', type: 'info' },
        ],
        radio1:'最受欢迎',
        first:[]
      }
    },
    methods: {},
    mounted(){
      this.$axios
        .get("static/textData/tavern-list.json")
        .then(res => {
          this.first = res.data.recommend.first
          // console.log(res.data.recommend.first)
        })
        .catch(err => {
          console.log(err);
        });
    }
  }
</script>

<style scoped>

  @media (min-width: 1200px) {
    .container {
      width: 1170px;
    }
  }

  /* 位置 */
  .tavern-list-head {
    color: #333;
    margin: 0.3rem 0;
  }

  .tavern-list-head span {
    color: #337AB7;
    cursor: pointer;
  }

  /* 表格 */
  .tavern-list-tabs {
    width: 100%;
    border: 2px solid #999;
    border-top: 5px solid #1ab2db;
    margin-bottom: 0.2rem;
  }

  .tavern-list-box {
    display: flex;
    padding: 0.1rem;
    background-color: #eee;
  }
  .tavern-tabs-data{
    display: flex;
  }
  .tavern-tabs-data span{
    line-height: 0.4rem;
  }
  .tavern-tabs-title .el-input {
    width: 1.5rem;
  }
  .el-input>>>.el-input__icon{
    margin-left: -0.2rem;
    display: none;
  }
  .el-input>>>.el-input--prefix .el-input__inner{
    padding-left: 0;
  }

  .tavern-list-msg li{
    display: flex;
    color: #666;
    margin: 0.1rem 0.1rem 0 0.1rem;
    padding-bottom: 0.1rem;
    border-bottom:0.01rem dashed #666 ;
  }
  .tavern-list-msg li:nth-of-type(4){
    border-bottom:none;
  }
  .el-checkbox-group>>>.el-checkbox__input.is-checked .el-checkbox__inner, .el-checkbox__input.is-indeterminate .el-checkbox__inner{
    background-color: #DEDEDE;
    border-color: #B2B2B2;
  }
  .el-checkbox__input .is-checked.el-checkbox__inner::after{
    border: 0.001rem solid #424242;
  }
  .el-checkbox-group>>>.el-checkbox__label{
    color: #606266;
  }
  /* 选择 */
  .choice{
    margin-bottom: 0.1rem;
  }
  .choice-num{
    color: #FF0000;
  }
  .el-tag.el-tag--info{
    background-color: #DDDDDD;
  }
  .el-tag__close .el-icon-close:before{
    font-weight: bold;
  }
  /* 评价 */
  .el-radio-button>>>.el-radio-button__orig-radio:checked+.el-radio-button__inner{
    background-color: transparent;
    color: #333333;
  }
  .evaluate{
    padding: 0.1rem;
    background-color: #EEEEEE;
    display: flex;
    margin-bottom: 0.3rem;
  }
  .evaluate .el-checkbox-group{
    margin-left: auto;
    margin-top: 0.1rem;
    padding-left: 0.1rem;
  }
  /* 推荐 */

</style>
