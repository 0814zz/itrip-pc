<template>
  <div class="navbox5">
    <el-tabs v-model="activeName">
      <el-tab-pane label="热门游记" name="first">
        <Navbox5_1></Navbox5_1>
      </el-tab-pane>
      <el-tab-pane label="精华游记" name="second">
        <Navbox5_2 :radioShow="false"></Navbox5_2>
      </el-tab-pane>
      <el-tab-pane label="行程计划" name="third">
        <Navbox3_3 :linkShow="false"></Navbox3_3>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>
<script>
  import Navbox5_1 from './navbox5-1.vue'
  import Navbox5_2 from './navbox5-2.vue'
  import Navbox3_3 from './navbox3-3.vue'
    export default {
      components:{
        Navbox5_1,
        Navbox5_2,
        Navbox3_3,
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
    }
</script>


<style scoped>
  .navbox5{
    width:4.7rem;
    height:3.7rem;
    font-size: 0.16rem;
  }
  .navbox5>>>.el-tabs__header{
    padding:0 0.34rem 0 0.2rem;
  }

  .navbox5>>>.el-tabs__item {
    padding: 0;
    height: 43px;
    width:1.24rem;
  }

</style>
