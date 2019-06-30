<template>
  <div class="nav-box">
    <el-tabs type="border-card" tab-position="left" v-model="activeName">
      <el-tab-pane label="旅游" name="first">
        <Navbox1 :menu="menu.navbox1" :formShow="formShow.navbox1" :Show_2_2="Show_2_2.navbox1"></Navbox1>
      </el-tab-pane>
      <el-tab-pane label="酒店" name="second">
        <Navbox1 :menu="menu.navbox2" :formShow="formShow.navbox2" :Show_2_2="Show_2_2.navbox2"></Navbox1>
      </el-tab-pane>
      <el-tab-pane label="机票" name="third">
        <Navbox3></Navbox3>
      </el-tab-pane>
      <el-tab-pane label="门票" name="fourth">
        <Navbox4></Navbox4>
      </el-tab-pane>
      <el-tab-pane label="攻略" name="fifth">
        <Navbox5></Navbox5>
      </el-tab-pane>
    </el-tabs>
  </div>

</template>

<script>
  import Navbox1 from './navbox1'
  import Navbox3 from './navbox3'
  import Navbox4 from './navbox4'
  import Navbox5 from './navbox5'
  export default {
    components:{
      Navbox1,
      Navbox3,
      Navbox4,
      Navbox5,
    },
    data() {
      return {
        activeName: 'first',
        //菜单
        menu:{
          navbox1:{menu1:'特卖汇',menu2:'国内旅游',menu3:'出境旅游'},
          navbox2:{menu1:'国内酒店',menu2:'海外酒店',menu3:'酒店团购'},
        },

        //2-2更换组件
        Show_2_2:{
          navbox1:{title1:true,title2:true,title3:true,},
          navbox2:{title1:true,title2:false,title3:true,},
        },
        //2-3更换组件
        formShow:{
          navbox1:{title1:true,title2:true,title3:true,},
          navbox2:{title1:true,title2:true,title3:false,},
        }


      };
    },

  };
</script>

<style>
  .nav-box{
    padding:0.02rem;
    width:5.56rem;
    height:3.74rem;
    box-shadow: 0 0 0.03rem rgba(26, 178, 219, 0.71);
    background-color: rgba(26, 207, 249, 0.71);
    text-align: center;
    box-sizing: border-box;
  }

  .el-tabs--border-card {
    border:none;
  }
  .el-tabs--left .el-tabs__nav-wrap.is-left.is-scrollable, .el-tabs--left .el-tabs__nav-wrap.is-right.is-scrollable, .el-tabs--right .el-tabs__nav-wrap.is-left.is-scrollable, .el-tabs--right .el-tabs__nav-wrap.is-right.is-scrollable {
    padding-top: 0;
  }
  .el-tabs--left{
    height:100%;
  }
  .el-tabs__item {
    padding: 0 22px;
    height: 45px;

  }
  .el-tabs--left.el-tabs--border-card .el-tabs__header.is-left {
    border-right:none;
  }
  .el-tabs__nav-prev,.el-tabs__nav-next{
    display: none;
  }
  .el-tabs--border-card>.el-tabs__header {
    background-color: #1AB2DB;
    border-bottom: none;
    margin: 0;
    height:100%;
  }
  .el-tabs--border-card>.el-tabs__header .el-tabs__item{
    color:#fff;
    font-weight: bold;
    font-size: 0.16rem;
  }
  .el-tabs--border-card>.el-tabs__header .el-tabs__item:not(.is-disabled):hover {
    color: #1AB2DB;
  }
  .el-tabs--left.el-tabs--border-card .el-tabs__item.is-left {
    border-left: 0.06rem solid #1AB2DB;
  }
  .el-tabs--left.el-tabs--border-card .el-tabs__item.is-left:hover {
    color:#fff;
  }
  .el-tabs--border-card>.el-tabs__header .el-tabs__item.is-active:hover {
    color: #409EFF;
    font-weight: bold;
  }
  .el-tabs--border-card>.el-tabs__header .el-tabs__item.is-active {
    color: #409EFF;
    font-weight: bold;
  }
  .el-tabs--left.el-tabs--border-card .el-tabs__item.is-left.is-active {
    border-top-color:#409EFF;
    border-bottom-color:#409EFF;
    border-left:0.06rem solid #FFC600;
  }
  .nav-box .el-tabs__nav-scroll {
    margin-top: 0;
  }

  /*右侧内容*/
  .el-tabs--border-card>.el-tabs__content {
    padding: 0;
  }
  .el-tabs--left .el-tabs__header.is-left {
    margin-right:0;
  }
</style>




