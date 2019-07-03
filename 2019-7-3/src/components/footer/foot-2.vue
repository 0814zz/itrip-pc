<template>
    <div class="foot2">
      <div class="container">
        <div>
          <ul class="foot2-ul1">
            <li>
              <div>
                <el-image src="static/images/icon/i_serve_11.png"></el-image>
              </div>
              <div>
                <h3>贴心的服务</h3>
                <p>业内领先服务标准 用户保障服务</p>
              </div>
            </li>
            <li>
              <div>
                <el-image src="static/images/icon/i_price_11.png"></el-image>
              </div>
              <div>
                <h3>优质的价格</h3>
                <p>极具竞争力的价格 无任何隐形消费</p>
              </div>
            </li>
            <li>
              <div>
                <el-image src="static/images/icon/i_num_11.png"></el-image>
              </div>
              <div>
                <h3>4008-xxx-6666</h3>
                <p>24小时客服热线 无时不刻在您身边</p>
              </div>
            </li>
          </ul>
        </div>
        <div class="foot2-content foot2-content1">
          <h4>旅游资讯</h4>
          <ul class="foot2-nav">
            <li><a href="#">宾馆索引</a></li>
            <li><a href="#">攻略索引</a></li>
            <li><a href="#">机票索引</a></li>
            <li><a href="#">网站导航</a></li>
            <li><a href="#">机票索引</a></li>
            <li><a href="#">网站导航</a></li>
            <li><a href="#">机票索引</a></li>
            <li><a href="#">网站导航</a></li>
            <li><a href="#">企业差旅索引</a></li>
          </ul>
        </div>
        <div class="foot2-content foot2-content2">
          <h4>加盟合作</h4>
          <ul class="foot2-nav">
            <li><a href="#">宾馆索引</a></li>
            <li><a href="#">攻略索引</a></li>
            <li><a href="#">机票索引</a></li>
            <li><a href="#">网站导航</a></li>
            <li><a href="#">机票索引</a></li>
            <li><a href="#">网站导航</a></li>
            <li><a href="#">机票索引</a></li>
            <li><a href="#">网站导航</a></li>
            <li><a href="#">企业差旅索引</a></li>
          </ul>
        </div>
        <div class="foot2-content">
          <h4>关于我们</h4>
          <ul class="foot2-nav">
            <li><a href="#">宾馆索引</a></li>
            <li><a href="#">攻略索引</a></li>
            <li><a href="#">机票索引</a></li>
            <li><a href="#">网站导航</a></li>
            <li><a href="#">机票索引</a></li>
            <li><a href="#">网站导航</a></li>
            <li><a href="#">机票索引</a></li>
            <li><a href="#">网站导航</a></li>
            <li><a href="#">企业差旅索引</a></li>
          </ul>
        </div>
      </div>
    </div>
</template>
<script>

    export default {}
</script>


<style scoped>
  .foot2{
    background: #000;
    color:#fff;
  }
  @media (min-width: 1200px) {
    .container {
      width: 1170px;
    }
  }
  .foot2 a:hover{
    color:#FFCC00;
  }
  .container{
    border-bottom:0.01rem solid #333;
    padding:0.37rem 0;
    display: flex;
    justify-content: space-between;
  }
  .foot2-ul1{
    display: flex;
    padding-left: 0.1rem;
    height:1.9rem;
    flex-direction: column;
    justify-content: space-between;
  }
  .foot2-ul1 li{
    display: flex;
  }
  .foot2-ul1 li .el-image{
    margin-top: 0.08rem;
    margin-right: 0.1rem;
  }
  h3{
    font-weight: normal;
    font-size: 0.18rem;
  }
  p{
    line-height: 0.28rem;
    font-size: 0.12rem;
  }
  .foot2-content{
    width:22%;
  }
  .foot2-content1{
    margin-left: 1rem;
  }
  h4{
    font-size: 0.14rem;
    font-weight: bold;
  }
  .foot2-nav{
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    width:1.34rem;
  }
  .foot2-nav li{
    margin-top: 0.12rem;
    font-size: 0.12rem;
  }

</style>
