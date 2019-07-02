<template>
  <div class="order-item">
    <div class="order-information">
      <span class="bold">出发</span> <input type="text" placeholder="请选择出发日期"> <span class="bold">&nbsp;&nbsp;&nbsp;&nbsp;成人</span>
      <select name="">
        <option v-for="item in 9" :value="item">{{item}}</option>
      </select>
      &nbsp;&nbsp;&nbsp;&nbsp;<span class="bold">儿童</span>
      <select name="">
        <option v-for="item in 9" :value="item">{{item}}</option>
      </select>
      &nbsp;&nbsp;&nbsp;0-120厘米（含）
      <span class="size right">总价 <span class="lighter">_ _</span> <a class="start-book" href="#">开始预订</a> </span>
    </div>
    <el-collapse-transition>
      <div v-show="show" class="matter">
      <div class="optional">
        <h2>可选资源</h2>
        <div style="width:9.9rem;padding-left:0.1rem;box-sizing: border-box">
          <div class="similarity">
            <span class="light-blue-bg">保险</span> <a class="hover-change" href="#">平安旅行境内长线保险 尊贵型</a>
            <span class="person">
              成人 <span class="red-text">¥77</span>
              <span class="bold">儿童</span> <span class="red-text">¥77</span>
            </span>
            &nbsp;&nbsp;_ _&nbsp;&nbsp;&nbsp;&nbsp;
            <select name="">
              <option v-for="item in 9" :value="item">{{item}}</option>
            </select>&nbsp;&nbsp;份
            <span class="red-text text-num">¥154</span> <i class="fa fa-check-circle text-num" aria-hidden="true"></i>
            <a class="right-bottom1" href="#">选择其他保险</a>
          </div>
          <div class="blue-bg-content">
            <i class="fa  fa-exclamation-circle"></i>请您付款后24小时内提供出行人证件信息，否则将自动为您退订此保险。
          </div>
          <div class="similarity">
            <span class="light-blue-bg">单房差</span> <a class="hover-change"  href="#">单房差</a>
            <span class="red-text person">¥480</span>
            &nbsp;&nbsp;_ _&nbsp;&nbsp;&nbsp;&nbsp;
            <select name="">
              <option v-for="item in 9" :value="item">{{item}}</option>
            </select>&nbsp;&nbsp;人
            <span class="red-text text-num">&nbsp;_ _</span> <i class="fa fa-ok-sign"></i>
          </div>
        </div>
      </div>
      <div>
        <h2>费用安排</h2>
        <ul>
          <li>1. 往返机票、燃油附加费（以实际收费标准为准）、机场建设费。</li>
          <li>2. 行程所列酒店住宿费用。</li>
          <li>3. 酒店押金需客人前台付，酒店房型默认为双标床，如需大床房，请提前告知，我司可根据酒店房态尽量安排，不保证哦！</li>
          <li>4. 行程内所列餐食(具体请参考行程推荐，自理除外)。</li>
          <li>5. 当地中文导游服务。</li>
          <li>6. 8人以下司机兼导游。</li>
          <li>7. 行程中所列景点首道大门票，蜈支洲、呀诺达、槟榔谷、亚龙湾。</li>
          <li>8. 儿童价特殊说明：2岁以上1.2米以下儿童只含半价正餐+车位，其他超高费用需自理。由于成人价格是按团队进行报价，如童按成人提交无任何费用可退，请知晓。</li>
        </ul>
      </div>
      <div>
        <h2>自理费用</h2>
        <ul>
          <li>1. 由于跟团推荐的自费项目门票，已经为旅行社折扣价格，所以客人自行购买自费项目的门票，需要补导游80元/人/项目的费用方可跟车参加。</li>
          <li>2. 单人出行必须选择单房差，3成人及以上出行如不补单房差选择加床，全程入住福朋喜来登酒店需现补400元/人差价现补给导游方可安排加床。</li>
          <li>3. 因交通延阻、罢工、天气、飞机、机器故障、航班取消或更改时间等不可抗力原因所导致的额外费用。</li>
          <li>4. 酒店内洗衣、理发、电话、传真、收费电视、饮品、烟酒等个人消费。</li>
          <li>5. 以上“费用包含”中不包含的其它项目。</li>
        </ul>
      </div>
    </div>
    </el-collapse-transition>
  </div>
</template>
<script>

  export default {
    props:['show'],

  }
</script>


<style scoped>
  .order-item {
    width: 100%;
    border: 0.03rem solid #F8B551;
  }

  .order-information {
    background: #FFFCF4;
    line-height: 0.64rem;
    padding:0 0.2rem;
  }

  .bold{
    font-weight: bold;
  }
  input,select{
    height:0.32rem;
    border:0.01rem solid #7D7D7D;
    padding:0 0.1rem;
  }
  .right{
    float:right;
    font-size: 0.18rem;
  }
  .start-book{
    margin-left: 0.4rem;
    display: inline-block;
    width:1.22rem;
    text-align: center;
    color:#fff;
    line-height:0.42rem;
    background: #F19149;
    border-radius:0.04rem;
  }
  .matter{
    padding:0 0.2rem 0.14rem;
  }
  .matter>div{
    display: flex;
    padding-top: 0.1rem;
    padding-bottom: 0.1rem;
  }
  .matter h2{
    font-weight: normal;
    font-size: 0.18rem;
    width:1.18rem;
    text-indent: 1em;
  }
  .matter ul li{
    line-height: 0.22rem;
  }
  .optional{
    margin-top: 0.1rem;
    border-bottom:0.01rem solid #E5E5E5;
  }

  .light-blue-bg{
    display: inline-block;
    width:0.8rem;
    line-height:0.32rem;
    text-align: center;
    background: #DEF2F7;
  }
  .hover-change{
    display: inline-block;
    color:#666;
    margin-left: 0.5rem;
    width:2.32rem;
  }
  .hover-change:hover{
    color:#F9A400;
  }
  .red-text{
    color:#FF4401;
  }
  .person{
    display: inline-block;
    width:1.27rem;
    text-align: center;
  }
  .text-num{
    margin-left: 0.4rem;
  }
  .fa-check-circle{
    color:#80C269;
    font-size: 0.2rem;
  }
  .right-bottom1{
    float:right;
    width:1.08rem;
    line-height:0.3rem;
    text-align: center;
    color:#fff;
    background: #00A0E9;
  }
  .blue-bg-content{
    margin: 0.1rem 0;
    background: #DEF2F7;
    line-height: 0.3rem;
    height: 0.3rem;
    font-size:0.12rem;
  }
  .blue-bg-content .fa{
    color:#00A0E9;
    font-size: 0.2rem;
    transform: translate(-0.1rem,0.03rem);
    text-indent: 1em;
  }

</style>
