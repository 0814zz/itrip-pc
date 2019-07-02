<template>
  <div class="container tabs">
    <el-tabs v-model="activeName">
      <el-tab-pane label="旅游攻略" name="first"><City1></City1></el-tab-pane>
      <el-tab-pane label="旅游攻略" name="second"><City1></City1></el-tab-pane>
      <el-tab-pane label="旅游攻略" name="third"><City1></City1></el-tab-pane>
    </el-tabs>

    <div class="more">
      <a href="#">更多旅游攻略 ></a>
    </div>
  </div>
</template>
<script>
  import City1 from './city1.vue'

  export default {

    components: {
      City1
    },
    data() {
      return {
        activeName: 'first',
        activeNames1:'firstOne',
        activeNames2:'firstTwo',
      }
    },
  }
</script>


<style>
  @media (min-width: 1200px) {
    .container {
      width: 1160px;
    }
  }

  .tabs {
    position: relative;
  }

  .el-tabs__nav-scroll {
    margin-top: 0.04rem;
  }

  .el-tabs__active-bar {
    height: 0.04rem;
    background-color: #1448AD;
  }

  .el-tabs__item {
    padding: 0 28px;
    height: 45px;
    font-size: 0.16rem;
    font-weight: bold;
  }

  .el-tabs--top .el-tabs__item.is-top:nth-child(2) {
    padding-left: 10px;
  }

  .el-tabs--top .el-tabs__item.is-top:last-child {
    padding-right: 10px;
  }

  .el-tabs__nav-wrap::after {
    background-color: #ccc;
  }

  .el-tabs__header {
    margin-bottom: 16px;
  }

  .more {
    position: absolute;
    right: 0.1rem;
    top: 0.14rem;
  }

  .more a:hover {
    color: #FFC466;
  }

</style>
