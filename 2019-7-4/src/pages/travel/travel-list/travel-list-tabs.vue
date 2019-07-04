<template>
  <div class="choice">
    <div class="itinerary">已选择路线：</div>
    <div class="option-list">游玩路线：&nbsp;&nbsp;
      <p><span>北京一地</span><span>北京一地</span><span>北京+天津</span>
        <span>北京+承德</span><span>北京+秦皇岛</span></p>
      <div>多选+</div>
    </div>
    <div class="option-list">行程天数：&nbsp;&nbsp;
      <p><span>1日</span><span>2日</span><span>3日</span>
        <span>4日</span><span>5日</span><span>6日</span><span>7日</span></p>
      <div>多选+</div>
    </div>
    <div class="option-list">出发日期：&nbsp;&nbsp;
      <p><span>1月</span><span>2月</span><span>3月</span>
        <span>4月</span><span>5月</span><span>6月</span><span>7月</span></p>
      <div>多选+</div>
    </div>
    <div class="option-list">出发城市：&nbsp;&nbsp;
      <p><span>北京</span><span>天津</span>
        <span>承德</span><span>秦皇岛</span></p>
      <div>多选+</div>
    </div>
  </div>
</template>
<script>

  export default {}
</script>


<style scoped>

  .choice>div{
    border-bottom:0.01rem dashed #999;
    line-height: 0.32rem;
    display: flex;
    margin-top: 0.02rem;
  }
  .option-list{
    color:#999;
  }
  .option-list p,.itinerary{
    color:#666;
  }
  .option-list>div{
    height:0.24rem;
    line-height:0.24rem;
    margin: 0.02rem 0.04rem 0 auto;
    border:0.01rem solid #ccc;
    border-radius: 0.04rem;
    padding: 0 0.02rem;
    color:#333;
    cursor: pointer;
  }
  .choice .itinerary{
    line-height: 0.4rem;
  }
  .option-list span{
    margin-right:0.36rem ;
  }
  .option-list:last-of-type{
    border-bottom: none;
    padding-bottom: 0.02rem;
  }
</style>
