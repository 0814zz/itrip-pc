<template>
    <div class="container">
      <!-- 底部 -->
      <footer>
        <div class="foot-warp">
          <p>
            Copyright©1999-2016, ctrip.com. All rights reserved.
            <el-divider direction="vertical"></el-divider>
            <span><a href="#">ICP证：沪B2</a></span>
          </p>
          <p>
            <el-image src="@/../static/images/icon/hui1126.png"></el-image>
            <span>沪公网备310105020000xx号</span>
          </p>
          <p>
            旅游违法行为举报电话12318
            <el-divider direction="vertical"></el-divider>
            服务质量投诉电话 962020
            <el-divider direction="vertical"></el-divider>
            <span><a href="#">北京市旅游网站落实诚信建设主体责任承诺书</a></span>
          </p>
          <ul>
            <li v-for="(item,index) in footicon">
              <a href="#">
                <el-image :src="item.src"></el-image>
              </a>
            </li>
          </ul>
        </div>
      </footer>
    </div>
</template>

<script>
    export default {
        data(){
          return{
            footicon: [
              {src: "static/images/icon/icon1126_11.jpg"},
              {src: "static/images/icon/icon1126_13.jpg"},
              {src: "static/images/icon/icon1126_15.jpg"},
              {src: "static/images/icon/icon1126_17.jpg"},
              {src: "static/images/icon/icon1126_19.jpg"},
              {src: "static/images/icon/icon1126_21.jpg"},
              {src: "static/images/icon/icon1126_23.jpg"},
              {src: "static/images/icon/icon1126_25.jpg"},
              {src: "static/images/icon/icon1126_27.jpg"},
            ]
          }
        }
    }
</script>

<style scoped>
  /*登录和注册的底部*/
  footer {
    border-top: 0.01rem solid #ccc;
  }

  .foot-warp {
    padding: 0.15rem 0.27rem;
    text-align: center;
  }

  .foot-warp p {
    line-height: 24px;
  }

  .foot-warp p, .foot-warp a {
    color: #8d8d8d;
    font-size: 0.12rem;
  }

  .foot-warp p .el-divider--vertical {
    color: #8d8d8d;
    width: 0.015rem;
  }

  .foot-warp p:nth-of-type(2) .el-image {
    margin-bottom: -0.07rem;
  }

  .foot-warp ul {
    display: flex;
    justify-content: space-between;
    margin: 0 auto;
    width: 90%;
  }

  .foot-warp ul li {
    border: 0.01rem solid #ccc;
    margin: 10px 14px 20px 0;
  }

  .foot-warp ul li .el-image {
    height: 0.32rem;
    display: block;
  }
</style>
