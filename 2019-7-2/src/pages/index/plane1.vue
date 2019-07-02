<template>
  <div class="plane1">
    <ul class="left-ul">
      <li v-for="item in 12">
        <h2>北京<span class="ticket-arr"></span>纽约</h2>
        <p class="item-time">12月05日 - 12月12日</p>
        <p style="margin-top: 0.06rem">仅剩 264 席</p>
        <p class="i-price"><em>&yen;</em><span>885</span><i>起</i></p>
      </li>
    </ul>
    <div style="width:2.78rem; height:5.1rem;cursor: pointer">
      <el-image class="right-src" src="static/images/img/ticket278518-xxx1201.jpg"></el-image>
    </div>
  </div>
</template>
<script>

  export default {}
</script>


<style scoped>
  .plane1 {
    box-sizing: border-box;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: space-between;
  }

  .left-ul {
    width: 74.9%;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    color:#666;
  }

  .left-ul li {
    width: 24%;
    height: 1.66rem;
    margin-bottom: 0.06rem;
    position: relative;
    cursor: pointer;
    box-sizing: border-box;
    padding: 0.20rem 0.18rem;
    border: 0.02rem solid #e9e9e9;
  }
  .left-ul li:hover{
    border: 0.02rem solid #ffca60;
  }
  /*li内文字*/
  h2{
    font-weight: normal;
  }
  .ticket-arr {
    display: inline-block;
    width: 0.19rem;
    height: 0.14rem;
    margin: 0 0.04rem;
    background: url("../../../static/images/img/i-arrow1201_03.png") center no-repeat;
  }
  .item-time {
    font-size: 0.14rem;
    margin-top: 0.05rem;
  }
  .i-price {
    display: block;
    text-align: right;
    margin-top: 5px;
    font-size: 30px;
    color: #ff4401;
  }
  .i-price em {
    color: #666;
    vertical-align: 10px;
    font-size: 14px;
    margin-right: 5px;
    font-style: normal;
  }
  .i-price i {
    color: #666;
    font-size: 14px;
    font-style: normal;
  }
  /*右边图片*/
  .right-src{
    width:100%;
    height:100%;
  }
</style>
