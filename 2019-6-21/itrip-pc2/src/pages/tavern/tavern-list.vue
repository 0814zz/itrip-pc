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
            目的地：&nbsp;<el-input v-model="input1" placeholder="北京市" class="city" id="citySelect"></el-input>&nbsp;&nbsp;
          </div>
          <div class="tavern-tabs-title">
            <div class="tavern-tabs-data">
              <span>入住：</span>
              <el-date-picker type="date" placeholder="2019-6-27" v-model="form.date1"></el-date-picker>&nbsp;&nbsp;
            </div>
          </div>
          <div class="tavern-tabs-title">
            <div class="tavern-tabs-data">
              <span>退房：</span>
              <el-date-picker type="date" placeholder="2019-7-3" v-model="form.date2"></el-date-picker>&nbsp;&nbsp;
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
            <label class="bui-radios-label">
              <input type="radio" name="position"/><i class="bui-radios"></i>天安门、王...&nbsp;&nbsp;&nbsp;&nbsp;
            </label>
            <label class="bui-radios-label">
              <input type="radio" name="position" checked="checked"/><i class="bui-radios"></i>中关村、五...&nbsp;&nbsp;&nbsp;&nbsp;
            </label>
            <label class="bui-radios-label">
              <input type="radio" name="position"/><i class="bui-radios"></i>西单、金融...&nbsp;&nbsp;&nbsp;&nbsp;
            </label>
            <label class="bui-radios-label">
              <input type="radio" name="position"/><i class="bui-radios"></i>首都机场&nbsp;&nbsp;&nbsp;&nbsp;
            </label>
            <label class="bui-radios-label">
              <input type="radio" name="position"/><i class="bui-radios"></i>亚运村
            </label>
          </li>
          <li>
            价格：
            <label class="bui-radios-label">
              <input type="radio" name="price"/><i class="bui-radios"></i>￥150以下&nbsp;&nbsp;&nbsp;&nbsp;
            </label>
            <label class="bui-radios-label">
              <input type="radio" name="price" checked="checked"/><i class="bui-radios"></i>￥150-300&nbsp;&nbsp;&nbsp;&nbsp;
            </label>
            <label class="bui-radios-label">
              <input type="radio" name="price"/><i class="bui-radios"></i>￥301-450&nbsp;&nbsp;&nbsp;&nbsp;
            </label>
            <label class="bui-radios-label">
              <input type="radio" name="price" checked="checked"/><i class="bui-radios"></i>￥450以上&nbsp;&nbsp;&nbsp;&nbsp;
            </label>
          </li>
          <li>
            星级：
            <label class="bui-radios-label">
              <input type="radio" name="star"/><i class="bui-radios"></i>二星级及以...&nbsp;&nbsp;&nbsp;&nbsp;
            </label>
            <label class="bui-radios-label">
              <input type="radio" name="star" checked="checked"/><i class="bui-radios"></i>三星级/舒适&nbsp;&nbsp;&nbsp;&nbsp;
            </label>
            <label class="bui-radios-label">
              <input type="radio" name="star"/><i class="bui-radios"></i>四星级/高档&nbsp;&nbsp;&nbsp;&nbsp;
            </label>
            <label class="bui-radios-label">
              <input type="radio" name="star" checked="checked"/><i class="bui-radios"></i>五星级/高档&nbsp;&nbsp;&nbsp;&nbsp;
            </label>
          </li>
          <li>
            特色：
            <label class="bui-radios-label">
              <input type="radio" name="characteristic"/><i class="bui-radios"></i>休闲度假&nbsp;&nbsp;&nbsp;&nbsp;
            </label>
            <label class="bui-radios-label">
              <input type="radio" name="characteristic" checked="checked"/><i class="bui-radios"></i>青年旅社&nbsp;&nbsp;&nbsp;&nbsp;
            </label>
            <label class="bui-radios-label">
              <input type="radio" name="characteristic" checked="checked"/><i class="bui-radios"></i>精品酒店&nbsp;&nbsp;&nbsp;&nbsp;
            </label>
            <label class="bui-radios-label">
              <input type="radio" name="characteristic"/><i class="bui-radios"></i>商务出行&nbsp;&nbsp;&nbsp;&nbsp;
            </label>
            <label class="bui-radios-label">
              <input type="radio" name="characteristic"/><i class="bui-radios"></i>会&nbsp;&nbsp;&nbsp;&nbsp;
            </label>
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
        <div class="checkbox-group">
          <label class="bui-checkbox-label">
            <input type="checkbox" name="choice" checked="checked"/><i class="bui-checkbox"></i>立即确认&nbsp;&nbsp;&nbsp;&nbsp;
          </label>
          <label class="bui-checkbox-label">
            <input type="checkbox" name="choice"/><i class="bui-checkbox"></i>可订&nbsp;&nbsp;&nbsp;&nbsp;
          </label>
          <label class="bui-checkbox-label">
            <input type="checkbox" name="choice"/><i class="bui-checkbox"></i>促销&nbsp;&nbsp;&nbsp;&nbsp;
          </label>
          <label class="bui-checkbox-label">
            <input type="checkbox" name="choice"/><i class="bui-checkbox"></i>在线付&nbsp;&nbsp;&nbsp;&nbsp;
          </label>
          <label class="bui-checkbox-label">
            <input type="checkbox" name="choice"/><i class="bui-checkbox"></i>闪住&nbsp;&nbsp;&nbsp;&nbsp;
          </label>
          <label class="bui-checkbox-label">
            <input type="checkbox" name="choice" checked="checked"/><i class="bui-checkbox"></i>钟点房&nbsp;&nbsp;&nbsp;&nbsp;
          </label>
        </div>
      </div>
      <!-- 推荐 -->
      <div class="tavern-recommend-box">
        <router-link to="/hotelDetail">
          <ul class="tavern-list-recommend">
            <li v-for="(item,index) in arr" class="tavern-li">
              <div class="tavern-list-left">
                <el-image :src="item.src"></el-image>
                <div class="column-ele-return">
                  <span>力荐</span>
                </div>
              </div>
              <div class="tavern-recommend-center">
                <span class="tavern-recommend-title">{{item.title}}</span>
                <div class="tavern-recommend-diamonds">
                  <i class="fa fa-diamond" aria-hidden="true"></i>
                  <i class="fa fa-diamond" aria-hidden="true"></i>
                  <i class="fa fa-diamond" aria-hidden="true"></i>
                  <i class="fa fa-diamond" aria-hidden="true"></i>
                  <i class="fa fa-diamond" aria-hidden="true"></i>
                  <span class="item">商务出行</span>
                  <span class="item">会议酒店</span>
                  <span class="item">精品酒店</span>
                </div>
                <span class="tavern-recommend-txt">{{item.txt}}</span>
                <div class="tavern-recommend-traffic">
                  <span>交通地图</span>
                  <span>周边街景</span>
                  <i class="fa fa-wifi" aria-hidden="true"></i>
                  <i class="fa fa-cutlery" aria-hidden="true"></i>
                  <i class="fa fa-product-hunt" aria-hidden="true"></i>
                </div>
              </div>
              <div class="tavern-recommend-right">
                <div class="right-leftBox">
                  <p><span>{{item.fraction}}</span>/5分</p>
                  <p><span>{{item.user}}</span>%用户推荐</p>
                  <p>源自<span>{{item.people}}</span>位住客点评</p>
                </div>
                <div class="right-rightBox">
                  <p>￥<span>{{item.price}}</span>起</p>
                  <span class="right-btn">查看详情</span>
                </div>
              </div>
              <div class="points-shouqing"></div>
            </li>
          </ul>
        </router-link>
      </div>
      <!-- 分页 -->
      <div class="paging">
        <el-pagination background layout="prev, pager, next" :total="100"></el-pagination>
      </div>
    </section>
    <footer>
      <Foot1></Foot1>
      <Foot3></Foot3>
    </footer>
  </div>
</template>

<script>
  import Head from '@/components/header/head'
  import Foot1 from '@/components/footer/foot-1'
  import Foot3 from '@/components/footer/foot-3'

  export default {
    components: {
      Head,
      Foot1,
      Foot3,
    },
    data() {
      return {
        input1: '',
        input2: '',
        input3: '',
        input4: '',
        data1: '',
        data2: '',
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
          {name: '北京', type: 'info'},
        ],
        radio1: '最受欢迎',
        arr: []
      }
    },
    methods: {},
    mounted() {
      this.$axios
        .get("static/textData/tavern-list.json")
        .then(res => {
          this.arr = res.data.recommend
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

  /*.cityinput{*/
  /*border: none;*/
  /*}*/
  /*.el-input>>>.el-input__inner:hover{*/
  /*!*outline: none;*!*/
  /*border: none;*/
  /*}*/
  .tavern-tabs-data {
    display: flex;
  }

  .tavern-tabs-data span {
    line-height: 0.4rem;
  }

  .tavern-tabs-title .el-input {
    width: 1.5rem;
  }

  .el-input >>> .el-input__icon {
    margin-left: -0.2rem;
    display: none;
  }

  .el-input >>> .el-input--prefix .el-input__inner {
    padding-left: 0;
  }

  .tavern-list-msg li {
    display: flex;
    color: #666;
    margin: 0.1rem 0.1rem 0 0.1rem;
    padding-bottom: 0.1rem;
    border-bottom: 0.01rem dashed #666;
  }

  .tavern-list-msg li:nth-of-type(4) {
    border-bottom: none;
  }

  /*隐藏input*/
  label.bui-radios-label input[type="radio"], label.bui-checkbox-label input[type="checkbox"] {
    position: absolute;
    opacity: 0;
    visibility: hidden;
  }

  /*自定义radio checkbox*/
  label.bui-radios-label .bui-radios, label.bui-checkbox-label .bui-checkbox {
    display: inline-block;
    position: relative;
    width: 13px;
    height: 13px;
    background-color: #fff;
    border: 1px solid #979797;
    vertical-align: -2px;
    margin-right: 5px;
  }

  /*单选框选中后，自定义radio,checkbox的样式*/
  label.bui-radios-label input[type="radio"]:checked + .bui-radios:after, label.bui-checkbox-label input[type="checkbox"]:checked + .bui-checkbox:after {
    box-sizing: content-box;
    content: "";
    border: 0.02rem solid #424242;
    border-left: 0;
    border-top: 0;
    height: 7px;
    left: 4px;
    position: absolute;
    top: 1px;
    transform: rotate(45deg) scaleY(1);
    width: 3px;
  }

  label.bui-radios-label input[type="radio"]:checked + .bui-radios, label.bui-checkbox-label input[type="checkbox"]:checked {
    background-color: #DEDEDE;
    border: 1px solid #424242;
  }

  /* 选择 */
  .choice {
    margin-bottom: 0.1rem;
  }

  .choice-num {
    color: #FF0000;
  }

  .el-tag.el-tag--info {
    background-color: #DDDDDD;
  }

  .el-tag__close .el-icon-close:before {
    font-weight: bold;
  }

  /* 评价 */
  .el-radio-button >>> .el-radio-button__orig-radio:checked + .el-radio-button__inner {
    background-color: #fff;
    color: #333333;
  }

  .el-radio-button--medium >>> .el-radio-button__inner:hover {
    color: #333333;
  }

  .evaluate {
    padding: 0.1rem;
    background-color: #EEEEEE;
    display: flex;
    margin-bottom: 0.3rem;
  }

  .evaluate .checkbox-group {
    margin-left: auto;
    margin-top: 0.1rem;
    padding-left: 0.1rem;
  }

  input[type="checkbox"] + label::before {
    content: "\a0"; /*不换行空格*/
    display: inline-block;
    vertical-align: .2em;
    width: .8em;
    height: .8em;
    margin-right: .2em;
    border-radius: .2em;
    background-color: silver;
    text-indent: .15em;
    line-height: .65; /*行高不加单位，子元素将继承数字乘以自身字体尺寸而非父元素行高*/
  }

  /* 推荐 */
  .tavern-recommend-box, .tavern-list-left .el-image {
    width: 100%;
  }

  .tavern-list-recommend li {
    padding-bottom: 0.15rem;
    border-bottom: 0.01rem solid #ccc;
    margin-bottom: 0.15rem;
    display: flex;
    position: relative;
  }

  /* 左边 */
  .tavern-list-left {
    width: 24.5%;
    position: relative;
  }

  .column-ele-return {
    width: 0;
    height: 0;
    position: absolute;
    top: 0;
    right: 0;
    z-index: 1;
    border-right: 20px solid #FFC600;
    border-top: 20px solid #FFC600;
    border-left: 20px solid transparent;
    border-bottom: 20px solid transparent;
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

  /* 中间 */
  .tavern-recommend-center {
    margin-left: 0.25rem;
    width: 41.5%;
  }

  .tavern-recommend-center .tavern-recommend-title {
    font-size: 0.24rem;
  }

  .tavern-recommend-diamonds {
    margin-top: 0.2rem;
  }

  .tavern-recommend-diamonds i {
    color: #FF0000;
  }

  .tavern-recommend-diamonds .item {
    background-color: #66ccff;
    color: #fff;
    padding: 0.02rem;
    border: 0.01rem solid #ccc;
  }

  .tavern-recommend-diamonds .item:nth-of-type(1) {
    margin-left: 0.05rem;
  }

  .tavern-recommend-txt {
    line-height: 0.25rem;
    margin-top: 0.15rem;
    display: block;
  }

  .tavern-recommend-traffic i {
    color: #3399cc;
    margin-top: 0.15rem;
  }

  .tavern-recommend-traffic span {
    color: #3399cc;
    cursor: pointer;
  }

  .tavern-recommend-traffic span:hover {
    text-decoration: underline;
    cursor: pointer;
    color: #2d729f;
  }

  /* 右边 */
  .tavern-recommend-right {
    width: 30%;
    margin-left: auto;
    margin-top: 0.8rem;
    display: flex;
  }

  .right-leftBox {
    padding: 0.15rem;
    text-align: right;
    width: 40%;
    background-color: #EAF5FA;
  }

  .right-leftBox p:nth-of-type(1) span {
    font-size: 0.35rem;
    color: #3399cc;
  }

  .right-rightBox {
    width: 50%;
    margin-left: auto;
    text-align: right;
  }

  .right-rightBox p span {
    font-size: 0.34rem;
    color: #FF0000;
  }

  .right-rightBox .right-btn {
    width: 80%;
    background-color: #FF9933;
    padding: 0.15rem 0;
    cursor: pointer;
    text-align: center;
    display: block;
    font-size: 0.2rem;
    margin-top: 0.1rem;
    margin-left: auto;
    color: #fff;
    border-radius: 0.05rem;
  }

  /* 去色 */
  .tavern-list-recommend li:last-child .column-ele-return {
    border-right: 20px solid #C4C4C4;
    border-top: 20px solid #C4C4C4;
  }

  .tavern-list-recommend li:last-child .right-rightBox .right-btn {
    background-color: #A7A7A7;
  }

  .tavern-list-recommend li:last-child .right-leftBox {
    background-color: #F3F3F3;
  }

  .tavern-list-recommend li:last-child .tavern-recommend-diamonds .item {
    background-color: #BABABA;
  }

  .tavern-list-recommend li:last-child .right-leftBox p:nth-of-type(1) span,
  .tavern-list-recommend li:last-child .tavern-recommend-traffic span:hover,
  .tavern-list-recommend li:last-child .tavern-recommend-traffic span,
  .tavern-list-recommend li:last-child .tavern-recommend-traffic i,
  .tavern-list-recommend li:last-child .right-rightBox p span {
    color: #A7A7A7;
  }

  .tavern-list-recommend li:last-child .right-rightBox .right-btn {
    background-color: #A7A7A7;
  }

  .tavern-list-recommend .tavern-li:last-child .tavern-recommend-diamonds i {
    color: #363636;
  }

  .tavern-li:last-child .tavern-list-left .el-image {
    mix-blend-mode: luminosity;
  }

  .tavern-list-recommend li:nth-of-type(9) .points-shouqing {
    background: url('../../../static/images/img/shouqing.png');
    bottom: 0;
    right: 50%;
    position: absolute;
    margin-right: 0.2rem;
    width: 153px;
    height: 121px;
    z-index: 2;
  }

  /* 分页 */
  .paging {
    display: flex;
  }

  .paging .el-pagination {
    margin-left: auto;
    padding: 0.3rem 0;
  }

  .paging >>> .el-pagination.is-background .el-pager li:not(.disabled).active {
    background-color: #BABABA;
    color: #FFF;
  }

  .paging >>> .el-pagination.is-background .el-pager li:hover {
    color: #606266;
  }

</style>
