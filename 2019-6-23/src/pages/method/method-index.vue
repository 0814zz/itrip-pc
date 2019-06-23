<template>
    <div>
      <!-- 头部 -->
      <header>
        <Head></Head>
      </header>

      <!-- 主体内容 -->

      <section class="container">

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
    export default {
      components: {
        Head,
        Foot1,
        Foot2,
        Foot3,
      },
    }
</script>

<style scoped>
  @media (min-width: 1200px) {
    .container {
      width: 1160px;
    }
  }
  section{
    width: 100%;

    height: 6rem;
    background-color: #D8D8D8;
  }
</style>
