<template>
  <div class="container">
    <div style="display: flex; width:100%;justify-content: space-between; line-height: 0.3rem">
      <h3>旅游局合作</h3>
      <a href="#">
        更多旅游局合作 >
      </a>
    </div>
    <div class="showBox">
      <ul class="logoShow">
        <li v-for="(item,index) in logo" :key="index">
          <el-image :src="item.src"></el-image>
          <p>{{item.txt}}</p>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>

  export default {
    data(){
      return{
        logo:[
          {src:"static/images/icon/Liuzhou.jpg",txt:"柳州旅游局"},
          {src:"static/images/icon/jp_jiuzhou.jpg",txt:"日本国家旅游局"},
          {src:"static/images/icon/Nanjing.jpg",txt:"南京旅游局"},
          {src:"static/images/icon/letianlogo.jpg",txt:"乐天旅游局"},
          {src:"static/images/icon/jiangsulogo.jpg",txt:"以色列旅游局"},
          {src:"static/images/icon/Liuzhou.jpg",txt:"柳州旅游局"},
          {src:"static/images/icon/jp_jiuzhou.jpg",txt:"日本国家旅游局"},
          {src:"static/images/icon/Nanjing.jpg",txt:"南京旅游局"},
          {src:"static/images/icon/letianlogo.jpg",txt:"乐天旅游局"},
          {src:"static/images/icon/jiangsulogo.jpg",txt:"以色列旅游局"},
          {src:"static/images/icon/Liuzhou.jpg",txt:"柳州旅游局"},
          {src:"static/images/icon/jp_jiuzhou.jpg",txt:"日本国家旅游局"},
          {src:"static/images/icon/Nanjing.jpg",txt:"南京旅游局"},
          {src:"static/images/icon/letianlogo.jpg",txt:"乐天旅游局"},
          {src:"static/images/icon/jiangsulogo.jpg",txt:"以色列旅游局"},
          {src:"static/images/icon/Liuzhou.jpg",txt:"柳州旅游局"},
          {src:"static/images/icon/jp_jiuzhou.jpg",txt:"日本国家旅游局"},
          {src:"static/images/icon/Nanjing.jpg",txt:"南京旅游局"},
          {src:"static/images/icon/letianlogo.jpg",txt:"乐天旅游局"},
          {src:"static/images/icon/jiangsulogo.jpg",txt:"以色列旅游局"},
          {src:"static/images/icon/Liuzhou.jpg",txt:"柳州旅游局"},
          {src:"static/images/icon/jp_jiuzhou.jpg",txt:"日本国家旅游局"},
          {src:"static/images/icon/Nanjing.jpg",txt:"南京旅游局"},
          {src:"static/images/icon/letianlogo.jpg",txt:"乐天旅游局"},
          {src:"static/images/icon/jiangsulogo.jpg",txt:"以色列旅游局"},
          {src:"static/images/icon/Liuzhou.jpg",txt:"柳州旅游局"},
          {src:"static/images/icon/jp_jiuzhou.jpg",txt:"日本国家旅游局"},
          {src:"static/images/icon/Nanjing.jpg",txt:"南京旅游局"},
          {src:"static/images/icon/letianlogo.jpg",txt:"乐天旅游局"},
          {src:"static/images/icon/jiangsulogo.jpg",txt:"以色列旅游局"},
          {src:"static/images/icon/Liuzhou.jpg",txt:"柳州旅游局"},
          {src:"static/images/icon/jp_jiuzhou.jpg",txt:"日本国家旅游局"},
          {src:"static/images/icon/Nanjing.jpg",txt:"南京旅游局"},
          {src:"static/images/icon/letianlogo.jpg",txt:"乐天旅游局"},
          {src:"static/images/icon/jiangsulogo.jpg",txt:"以色列旅游局"},
          {src:"static/images/icon/Liuzhou.jpg",txt:"柳州旅游局"},
          {src:"static/images/icon/jp_jiuzhou.jpg",txt:"日本国家旅游局"},
          {src:"static/images/icon/Nanjing.jpg",txt:"南京旅游局"},
          {src:"static/images/icon/letianlogo.jpg",txt:"乐天旅游局"},
          {src:"static/images/icon/jiangsulogo.jpg",txt:"以色列旅游局"}
        ],
      }
    },
    mounted(){
      $(function () {
        var top = 0;
        setInterval(function () {
          if (top > -3.2) {
            top -= 0.80;
          } else {
            top = 0;
          }
          $(".logoShow").animate({"top":top+"rem"});
        }, 3000);
      })
    }

  }
</script>


<style scoped>
  @media (min-width: 1200px) {
    .container {
      width: 1150px;
    }
  }
  .showBox{
    margin: 0.4rem 0;
    height:1.6rem;
    position: relative;
    overflow: hidden;
  }
  .logoShow{
    width:10.60rem;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    position: absolute;
    top:0;
    left: 50%;
    transform: translateX(-50%);
    /*transition:all 0.3s;*/
  }
  .logoShow li{
    width:12%;
    text-align: center;
    font-size: 0.12rem;
    margin: 0.1rem 0 0.1rem;
  }

</style>
