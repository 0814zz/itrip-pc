<template>
    <div class="navbox1">
      <el-tabs v-model="activeName">
        <el-tab-pane :label="menu.menu1" name="first">
          <Navbox1_1 :links="links.link1" :formShow="formShow.title1" :Show_2_2="Show_2_2.title1"></Navbox1_1>
        </el-tab-pane>
        <el-tab-pane :label="menu.menu2" name="second">
          <Navbox1_1 :links="links.link2" :formShow="formShow.title2" :Show_2_2="Show_2_2.title2"></Navbox1_1>
        </el-tab-pane>
        <el-tab-pane :label="menu.menu3" name="third">
          <Navbox1_1 :links="links.link3" :formShow="formShow.title3" :Show_2_2="Show_2_2.title3"></Navbox1_1>
        </el-tab-pane>
      </el-tabs>
    </div>
</template>
<script>
  import Navbox1_1 from './navbox1-1.vue'

  export default {
    props:[
      'menu',
      'linkshow',
      'dropdown',
      'formShow',
      'Show_2_2'
    ],
    components:{
      Navbox1_1,
    },
    data() {
      return {
        activeName: 'first',
        links:{
          link1:["温泉","亲子","自由行","名胜古迹","都市购物"],
          link2:["泰国","马尔代夫","夏威夷","美国","东南亚"],
          link3:["三亚","厦门","山东","桂林","东北"],
        },
      };
    },
    methods: {

    }
  };
</script>


<style scoped>
  .navbox1{
    width:4.7rem;
    height:3.7rem;
    font-size: 0.16rem;
  }
  .navbox1>>>.el-tabs__header{
     padding:0 0.34rem 0 0.2rem;
   }

  .navbox1>>>.el-tabs__item {
    /*padding: 0;*/
    height: 43px;
    /*width:1.24rem;*/
  }
  .navbox1>>> .el-tabs--top .el-tabs__item.is-top:nth-child(2) {
    padding-left: 12px;
  }
  .navbox1>>>.el-tabs__active-bar {
    height: 0.03rem;
    background-color: #1AB2DB;
  }
</style>
