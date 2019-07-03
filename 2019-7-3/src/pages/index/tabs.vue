<template>
  <div class="container tabs">
    <el-tabs v-model="activeName">
      <el-tab-pane v-for="(item,index) in Nav" :key="index" :label="item.title" :name="item.num">
        <!--<el-tabs class="navItems" v-model="item.activeNames">-->
          <!--<el-tab-pane v-for="(item,index) in item.nav1" :key="index" :label="item.title"-->
                       <!--:name="item.num">-->
            <!--<Tabs1_1 :content="item.content" :rightSrc="item.rightSrc"></Tabs1_1>-->
          <!--</el-tab-pane>-->
        <!--</el-tabs>-->
        <Tabs1 :item="item"></Tabs1>
      </el-tab-pane>
    </el-tabs>
    <div class="more">
      <a href="#">{{more}}</a>
    </div>
  </div>
</template>
<script>
  import Tabs1 from './tabs1.vue'

  export default {
    props:[
      'tabData'
    ],
    components: {
      Tabs1,
    },
    data() {
      return {
        activeName: 'first',
        Nav:[],
        more:''
      }
    },
    watch: {
      tabData: function (val) {
        this.Nav=val.Nav;
        this.more=val.more;
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

  /*二级导航*/
  .navItems .el-tabs__nav-scroll {
    margin-top: 0;
  }

  .navItems .el-tabs__active-bar {
    height: 0;
    background-color: #fff;
  }

  /*!*二级按钮*!*/
  /*.navItems .el-tabs__item {*/
    /*padding: 0 4px;*/
    /*margin-right: 20px;*/
    /*margin-left: 6px;*/
    /*height: 24px;*/
    /*line-height: 24px;*/
    /*font-size: 0.14rem;*/
    /*font-weight: normal;*/
  /*}*/

  /*.navItems .el-tabs__item.is-active {*/
    /*background: #FFC466;*/
    /*color: #fff;*/
    /*border-radius: 0.04rem;*/
  /*}*/

  /*.navItems .el-tabs__nav-wrap::after {*/
    /*background-color: #fff;*/
  /*}*/

  /*!*内容区域*!*/
  /*.navItems .el-tabs__content {*/
    /*height: 5.22rem;*/
  /*}*/

  .more {
    position: absolute;
    right: 0.1rem;
    top: 0.66rem;
  }

  .tabs a:hover {
    color: #FFC466;
  }

</style>
