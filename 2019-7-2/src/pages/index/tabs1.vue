<template>
  <div>
    <el-tabs class="navItems" v-model="Item.activeNames">
      <!--<el-tab-pane v-for="(item,index) in Item.nav1" :key="index" :label="item.title"-->
      <!--:name="item.num">-->
      <!--<Tabs1_1 :content="item.content" :rightSrc="item.rightSrc" :compo="item.show"></Tabs1_1>-->
      <!--</el-tab-pane>-->

      <el-tab-pane v-for="(item,index) in arr" :key="index" :label="item.title"
                   :name="item.num">
        <Tabs1_1 :content="item.content" :rightSrc="item.rightSrc" :compo="item.show"></Tabs1_1>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>
<script>
  import Tabs1_1 from './tabs1-1.vue'

  export default {
    props: [
      'item'
    ],
    data() {
      return {
        Item: this.item,
        activeName1: 'first1',
        activeName2: 'second1',
        activeName3: 'third1',
        activeName4: 'fourth1',
        arr:this.item.nav1,
      }
    },
    mounted() {

      $("#tab-first1").click();
    },

    components: {
      Tabs1_1
    },
    computed: {

      },


  }
</script>


<style>
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
    padding: 0.04rem;
    box-sizing: border-box;
    height: 5.28rem;
  }

</style>
