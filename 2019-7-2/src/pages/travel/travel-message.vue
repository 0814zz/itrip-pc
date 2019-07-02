<template>
  <div>
    <div id="fullpage">
      <div class="section">
        <Head></Head>
      </div>
      <div class="section">第二屏</div>
      <div class="section">
        <div class="slide">第三屏的第一屏</div>
        <div class="slide">第三屏的第二屏</div>
        <div class="slide">第三屏的第三屏</div>
        <div class="slide">第三屏的第四屏</div>
      </div>
      <div class="section"></div>
      <div class="section">
        <Foot1></Foot1>
        <Foot3></Foot3>
      </div>
    </div>
     


  </div>
</template>
<script>
  import Head from "@/components/header/head"
  import Foot1 from "@/components/footer/foot-1"
  import Foot3 from "@/components/footer/foot-3"
  import {FullPage} from "../../../static/js/fullPage.min.js"


  export default {
    components: {
      Head,
      Foot1,
      Foot3,
    },
    mounted() {
      $('#fullpage').fullpage({

        sectionsColor:['#333','#666','#999','#ccc','#eee'],
//
//        verticalCentered:true,    //内容是否垂直居中

        navigation:true,    //是否显示项目导航
//        navigationPosition:"right",      //项目导航的位置，可选 left 或 right
        navigationColor:"#fff",         //项目导航的颜色
//        slidesNavigation:true,          //是否显示左右滑块的项目导航
//
////            slidesNavPosition:bottom,       //左右滑块的项目导航的位置，可选 top 或 bottom
//        controlArrowColor:"#000",        //左右滑块的箭头的背景颜色

      });
    }

  }
</script>


<style scoped>
  @import "../../../static/css/jquery.fullPage.css";

</style>
