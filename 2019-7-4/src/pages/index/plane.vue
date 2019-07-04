<template>
  <div class="container tabs plane">
    <el-tabs v-model="activeName">

      <el-tab-pane label="国际特价机票" name="first">
        <el-tabs class="navItems" v-model="activeNames1">
          <el-tab-pane label="北京" name="firstOne"><Plane1></Plane1></el-tab-pane>
          <el-tab-pane label="上海" name="secondOne"><Plane1></Plane1></el-tab-pane>
          <el-tab-pane label="深圳" name="thirdOne"><Plane1></Plane1></el-tab-pane>
        </el-tabs>
      </el-tab-pane>

      <el-tab-pane label="国内特价机票" name="second">
        <el-tabs class="navItems" v-model="activeNames2">
          <el-tab-pane label="精选" name="firstTwo"><Plane1></Plane1></el-tab-pane>
          <el-tab-pane label="周边当地游" name="secondTwo"><Plane1></Plane1></el-tab-pane>
        </el-tabs>
      </el-tab-pane>
    </el-tabs>

    <div class="more">
      <a href="#">更多特价机票 ></a>
    </div>
  </div>
</template>
<script>
  import Plane1 from './plane1.vue'

  export default {

    components: {
      Plane1
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
  /*二级按钮*/
  .navItems .el-tabs__item {
    padding: 0 4px;
    margin-right: 20px;
    margin-left: 6px;
    height: 24px;
    line-height: 24px;
    font-size: 0.14rem;
    font-weight: normal;
  }

  .navItems .el-tabs__item.is-active {
    background: #FFC466;
    color: #fff;
    border-radius: 0.04rem;
  }

  .navItems .el-tabs__nav-wrap::after {
    background-color: #fff;
  }

  /*内容区域*/
  .navItems .el-tabs__content {
    padding:0.04rem;
    box-sizing: border-box;
    height: 5.28rem;
  }
  .navItems .el-tabs__nav-scroll {
    margin-top: 0;
  }

  .navItems .el-tabs__active-bar {
    height: 0;
    background-color: #fff;
  }
  .more {
    position: absolute;
    right: 0.1rem;
    top: 0.14rem;
  }

  .plane a:hover {
    color: #FFC466;
  }

</style>
