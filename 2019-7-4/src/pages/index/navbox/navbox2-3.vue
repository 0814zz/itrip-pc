<template>
  <div class="navbox2-3">
    <p>热门城市：
      <a href="#">上海</a> &nbsp;<a href="#">广州</a> &nbsp;<a href="#">深圳</a> &nbsp;<a href="#">北京</a>
      &nbsp;<a href="#">成都</a> &nbsp;<a href="#">杭州</a> &nbsp;<a href="#">苏州</a> &nbsp;<a href="#">青岛</a>
    </p>
    <p v-show="linkShow">热门活动：
      <a href="#">门票特权日</a>&nbsp;<a href="#">早秋赏景</a>&nbsp;<a href="#">国庆提前订</a>&nbsp;
      <a href="#">旅行WiFi</a>&nbsp;<a href="#">日本旅行卡</a>
    </p>
    <p>热门团购：
      <a href="#">度假公寓</a> &nbsp;<a href="#">别墅轰趴</a> &nbsp;<a href="#">住店游玩</a>&nbsp;
      <a href="#">情侣酒店</a> &nbsp;<a href="#">火车票专享</a>
    </p>
    <p v-show="linkShow">热门推荐：
      <a href="#">东方盐湖城</a> &nbsp;<a href="#">长隆海洋王国</a> &nbsp;<a href="#">圆明园</a>&nbsp;
      <a href="#">印象武隆</a>
    </p>
    <hr style="width:100%; height:0.01rem;border:none; border-top:1px dashed #ccc;margin: 0.14rem 0 0.3rem 0.3rem"/>
    <div class="form-group">
      关键词：&nbsp;&nbsp;<input class="search" type="text" placeholder="(选填)商圈/景区/酒店品牌/酒店名称/关键字">
    </div>
    <div class="form-group">
      目的地：&nbsp;&nbsp;<input class="search" type="text" placeholder="">
    </div>
    <el-button class="btn-search">搜索行程 ></el-button>

  </div>
</template>
<script>

    export default {
      props:[
        'linkShow'
      ]
    }
</script>


<style scoped>
  /*推荐页面*/
p{
  width: 102%;
}
  .navbox2-3{
    font-size: 0.14rem;
    line-height: 0.3rem;
    height: 3rem;
    box-sizing: border-box;
    text-align: left;
  }
  a{
    color:#1AB2DB;
  }
  .form-group{
    margin: 0.22rem 0;
    text-align: right;
  }
  .search{
    width:3.38rem;
    height:0.32rem;
    text-indent: 1em;
    border-radius: 0.04rem;
    border:0.01rem solid #ddd;
    outline:none;
  }
  .btn-search{
    width:1.57rem;
    height:0.33rem;
    background: #1AB2DB;
    color:#fff;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-left: auto;
    margin-top: 0.05rem;
  }
  .el-button{
    padding:0;
  }
  .navbox2-3 a:hover{
    color:#F9A400;
  }

</style>
