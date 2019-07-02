<template>
  <div id="box" @scroll="scrollEvent">
    <header>
      <Head></Head>
    </header>
    <section>
      <!-- video视频 -->
      <Video></Video>
      <!-- 房型列表-->
      <Cost :cost="navShow"></Cost>
      <!-- 酒店详情、点评-->
      <Comment></Comment>
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
  import Video from './tavern/hoteldetail-video'
  import Cost from './tavern/hoteldetail-cost'
  import Comment from './tavern/hoteldetail-comment'

  export default {
    data() {
      return {
        navShow: false
      }
    },
    components: {
      Head,
      Foot1,
      Foot2,
      Foot3,
      Video,
      Cost,
      Comment
    },
    methods:{
      scrollEvent: function () {
        var T = $(".nav-location").offset().top;
        // var Top = $("#box").scrollTop();
        console.log(T)
        // console.log(Top)
        if (T > 0) {
          this.navShow = false
        } else {
          this.navShow = true
        }
        console.log(this.navShow)
      }
    },
    mounted() {
      $(function () {
        var H = document.documentElement.clientHeight;
        $("#box").css("height", H);
        $(".i-main ul li").click(function () {
          var index = $(this).index();
          $(".i-main ul li").removeClass("i-main-active").eq(index).addClass("i-main-active").end()
            .eq(index + 3).addClass("i-main-active");
        })
      })
    }
  }
</script>

<style scoped>
  #box {
    overflow: auto;
  }
</style>
