<template>
  <div>
    <!-- banner -->
    <div class="travel-model">
      <div class="bg"></div>
      <div class="model-panel">
        <div class="model-panel-head">
          <div class="model-header">
            <span>观看完整视频</span>
            <span>
              <i class="fa fa-times" aria-hidden="true"></i>
            </span>
          </div>
        </div>
        <div class="model-body">
          <video class="video" preload="auto" loop="loop" controls>
            <source src="../../../static/images/video/travel/video1.mp4"/>
          </video>
        </div>
      </div>
    </div>
    <div class="i-tv">
      <div class="video-plugin ">
        <div class="video-message">
          <div>三亚喜来登度假酒店</div>
          <div>Sheraton Sanya Resort</div>
          <div>【 亚龙湾 】国家旅游度假区，亚龙湾高尔夫球场对面</div>
          <div>
            <ul>
              <li><span>●&nbsp;</span>东南亚风情&nbsp;&nbsp;</li>
              <li><span>●&nbsp;</span>休闲度假&nbsp;&nbsp;</li>
              <li><span>●&nbsp;</span>亲子时刻&nbsp;&nbsp;</li>
              <li><span>●&nbsp;</span>会议酒店&nbsp;&nbsp;</li>
            </ul>
          </div>
          <div>
            <i class="fa fa-play-circle-o" aria-hidden="true"></i>
            <span>查看完整视频</span>
          </div>
        </div>
        <video class="video" preload="auto" loop="loop" controls>
          <source src="../../../static/images/video/travel/video1.mp4"/>
        </video>
      </div>
    </div>

  </div>
</template>

<script>
  export default {
    data() {
      return {}
    },
    methods: {},
    mounted() {
      $(function () {
        $(".video-message div:nth-of-type(5)").click(function () {
          $(".travel-model").css("display", "block")
        });
        $(".model-header i").click(function () {
          $(".travel-model").css("display", "none")
        });
        $(".model-body video").click(function () {
          console.log("111")
          // $(".model-body video").css("border"," 0.2rem solid red")
        })
      })
    }
  }
</script>

<style scoped>
  /*隐藏的视频*/
  .travel-model {
    width: 100%;
    height: 100%;
    position: absolute;
    display: none;
  }

  .travel-model .bg {
    width: inherit;
    height: inherit;
    background: rgba(255, 255, 255, 0.5);
  }

  .model-panel {
    width: 50%;
    height: 63.9%;
    background-color: #000;
    position: absolute;
    top: 16%;
    left: 25%;
    z-index: 5;
  }

  .model-panel-head {
    width: 100%;
    background-color: #F5F5F5;
  }

  .model-header {
    padding: 0.2rem;
    display: flex;
    color: #666;
  }

  .model-panel-head span:nth-of-type(1) {
    font-size: 0.18rem;
  }

  .model-panel-head span:nth-of-type(2) {
    margin-left: auto;
  }

  .model-panel-head span:nth-of-type(2) i {
    font-size: 0.26rem;
  }

  .model-panel-head span:nth-of-type(2) i:hover {
    border-radius: 50%;
    width: 0.25rem;
    height: 0.25rem;
    color: #fff;
    text-align: center;
    background-color: #FF0000;
    box-sizing: border-box;
  }

  .model-body {
    padding: 0 0.1rem;
  }

  .model-body video {
    width: 100%;
  }

  /* 显示的banner */
  .i-tv {
    width: 100%;
    height: 5rem;
  }

  .i-tv .video-plugin {
    overflow: hidden;
    position: relative;
    height: inherit;
    width: 100%;
  }

  .video-message {
    width: 50%;
    height: 3rem;
    position: absolute;
    top: 20%;
    left: 25%;
    z-index: 3;
    text-align: center;
    color: #fff;
  }

  .video-message div:nth-of-type(1) {
    font-size: 0.42rem;

  }

  .video-message div:nth-of-type(2) {
    font-size: 0.36rem;
  }

  .video-message div:nth-of-type(3) {
    font-size: 0.2rem;
    margin-top: 0.05rem;
  }

  .video-message div:nth-of-type(4) ul {
    display: flex;
    justify-content: center;
    margin-top: 0.2rem;
    font-size: 0.2rem;
  }

  .video-message div:nth-of-type(4) ul span {
    font-size: 0.2rem;
  }

  .video-message div:nth-of-type(5) {
    position: relative;
    margin-top: 0.2rem;
  }

  .video-message div:nth-of-type(5) i {
    font-size: 0.56rem;
  }

  .video-message div:nth-of-type(5) span {
    font-size: 0.16rem;
    margin-left: 0.3rem;
    position: absolute;
    bottom: 0.15rem;
  }

  .i-tv .video {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    top: -95%;
    z-index: -1;
    width: 180%;
    height: 1550px;
    overflow: hidden;
  }


</style>
