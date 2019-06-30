<template>
    <div class="foot1">
      <div class="container">
        <div class="download-left">
          <h2>下载 <el-image src="static/images/icon/logo74×34.png" style="transform: translateY(0.04rem)"></el-image> 手机客户端</h2>
          <p>特价机票、一折酒店、出行安全保障、预约担保<br/>
            最佳旅行路线、吃喝玩乐享在手</p>
          <div class="download">立刻下载</div>
        </div>
        <div class="code-right">
          <div>
            <el-image src="static/images/icon/i_wechat_11.jpg"></el-image>
            <p>微信公众号平台</p>
          </div>
          <div><el-image src="static/images/icon/i_wechat_11.jpg"></el-image>
            <p>APP下载</p></div>
        </div>
      </div>
    </div>
</template>
<script>

    export default {}
</script>


<style scoped>
  @media (min-width: 1200px) {
    .container {
      width: 1170px;
    }
  }
  .container{
    display: flex;
    justify-content: space-between;
  }
  .foot1{
    height:2.09rem;
    background: #1448AE;
    padding-top: 0.3rem;
    box-sizing: border-box;
    color:#fff;
  }
  h2{
    font-size: 0.23rem;
    font-weight: normal;
  }
  .download-left p{
    line-height: 0.25rem;
    font-size: 0.15rem;
    font-weight:lighter;
  }
  .download{
    cursor: pointer;
    font-size: 0.16rem;
    background: #fff;
    color:#1448AE;
    text-align: center;
    margin-top:0.14rem ;
    width:1.39rem;
    line-height:0.33rem;
    border-radius: 0;
  }
  .code-right{
    display: flex;
  }
  .code-right>div{
    margin-left: 0.33rem;
  }
  .code-right p{
    font-size: 0.12rem;
    text-align: center;
    line-height: 0.25rem;
  }
</style>
