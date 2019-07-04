<template>
  <div>
    <div class="tabs1">
      <ul class="left-ul">
        <li :class="{move:!bol}" v-for="item in content">
          <el-image :src="item.src" :class="{conImage:!bol}"></el-image>
          <div v-if="bol" class="textBg">
            <h3 class="title1">{{item.title}}</h3>
            <p>{{item.p}}</p>
          </div>
          <div v-if="!bol" class="text">
            <h3 class="title2">{{item.title}}</h3>
            <div class="txtpos">
              <span class="yen">&yen;</span><span class="price">{{item.price}}</span><span class="rise">起</span>
              <div class="text-right">
                已售 <span>{{item.num}}</span>
              </div>
            </div>

          </div>
        </li>
      </ul>
      <div style="width:2.78rem; height:5.2rem;cursor: pointer">
        <el-image class="right-src" :src="rightSrc"></el-image>
      </div>
    </div>
  </div>

</template>
<script>

  export default {
    props: [
      'content',
      'rightSrc',
      'compo'
    ],
    mounted() {

    },
    computed:{
      bol:function () {
        if(this.compo==="false"){
          return false
        }else {
          return true
        }
      }

    }

  }
</script>


<style scoped>
  .tabs1 {
    box-sizing: border-box;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: space-between;
  }

  .left-ul {
    width: 75.1%;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
  }

   .left-ul li {
    color: #fff;
    width: 32.6%;
    height: 2.57rem;
    margin-bottom: 0.06rem;
    overflow: hidden;
    position: relative;
    cursor: pointer;
     border:0.01rem solid #ccc;
     box-sizing: border-box;
  }
   .move:hover{
     margin-top: -0.04rem;
     box-shadow: 0 0.04rem 0.04rem rgba(0,0,0,0.5);
   }
   /*文字定位*/
  .text{
    background: #fff;
    color:#333;
  }
  .txtpos{
    position: relative;
  }
  .yen{
    position: absolute;
    left:0.15rem;
    bottom: 0.12rem;
  }
  .price{
    margin-left: 0.3rem;
    font-size: 0.34rem;
    color:#FF5518;
  }
  .rise{
    margin-left: 0.1rem;
    position: relative;
    top: -0.02rem;
  }
  .text-right{
    position: absolute;
    right:0.2rem;
    bottom:0.06rem;
  }

  /*文字动画*/
  .textBg {
    background-color: rgba(0, 0, 0, 0.5);
    position: absolute;
    bottom: -0.88rem;
    left: 0;
    padding: 0.1rem;
    box-sizing: border-box;
    transition: all 0.5s;
  }

  .left-ul li:hover .textBg {
    bottom: 0;
  }

  .title2{
    font-weight: normal;
    margin-top: -0.04rem;
  }
  p {
    margin-top: 0.1rem;
  }
  /*图片调整*/
  .conImage{
    height:1.78rem;
  }
  .el-image{
    width:100%;
  }
  .right-src{
    height:100%;
  }

</style>
