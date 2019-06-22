<template>
    <div>
      <header>
        <Head></Head>
      </header>
      <section>
        <!-- video视频 -->
        <Video></Video>
        <!-- 房型列表-->
       <Cost></Cost>
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
  import Video from '@/components/tavern/hoteldetail-video'
  import Cost from '@/components/tavern/hoteldetail-cost'
  import Comment from '@/components/tavern/hoteldetail-comment'
    export default {
      components: {
        Head,
        Foot1,
        Foot2,
        Foot3,
        Video,
        Cost,
        Comment
      },
    }
</script>

<style scoped>

</style>
