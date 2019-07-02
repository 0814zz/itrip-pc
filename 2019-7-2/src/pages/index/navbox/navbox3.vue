<template>
  <div class="navbox3">
    <el-tabs v-model="activeName">
      <el-tab-pane label="国内机票" name="first">
        <Navbox3_1></Navbox3_1>
      </el-tab-pane>
      <el-tab-pane label="国际机票" name="second">
        <Navbox3_2 :radioShow="true"></Navbox3_2>
      </el-tab-pane>
      <el-tab-pane label="发现低价" name="third">
        <Navbox3_3></Navbox3_3>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>
<script>
  import Navbox3_1 from './navbox3-1.vue'
  import Navbox3_2 from './navbox3-2.vue'
  import Navbox3_3 from './navbox3-3.vue'

  export default {
    components:{
      Navbox3_1,
      Navbox3_2,
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

  };
</script>


<style scoped>
  .navbox3{
    width:4.7rem;
    height:3.7rem;
    font-size: 0.16rem;
  }
  .navbox3>>>.el-tabs__header{
    padding:0 0.34rem 0 0.2rem;
  }

  .navbox3>>>.el-tabs__item {
    padding: 0;
    height: 43px;
    width:1.24rem;
  }

</style>
