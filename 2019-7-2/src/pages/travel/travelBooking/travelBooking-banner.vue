<template>
    <div>
      <div>
        <el-carousel height="4rem">
          <el-carousel-item v-for="item in 4" :key="item">
          </el-carousel-item>
        </el-carousel>
      </div>
      <div>
        <div @click="calendar_click" class="calendar">
          <Calendar></Calendar>
        </div>
      </div>
    </div>
</template>
<script>
  import Calendar from 'vue-calendar-component';
    export default {
      components: {
        Calendar
      },
      data(){
        return{
          weekday:["日","一","二","三","四","五","六"],
          day:[],
        }
      },
      methods:{
        calendar_click:function () {
          this.$emit('calendar_click');
        }
      },
      mounted(){

      }
    }
</script>


<style scoped>
  /*轮播图*/
  .el-carousel{
    width: 100%;
  }
  .el-carousel >>> .el-carousel__button {
    width: 0.13rem;
    height: 0.13rem;
    border-radius: 50%;
    border: 0.01rem solid #1ab2db;
    opacity: 1;
    position: absolute;
    margin-left: 5.4rem;
    top:-0.1rem;
  }
  .el-carousel>>>.el-carousel__indicator--horizontal {
    display: inline-block;
    padding: 12px 10px;
  }
  .el-carousel >>> .el-carousel__indicator.is-active button {
    background-color: #1AB2DB;
  }
  .el-carousel__item:nth-of-type(1) {
    background: url("../../../../static/images/img/t_banner05_500400_xxx1209.jpg") center no-repeat;
  }
  .el-carousel__item:nth-of-type(2) {
    background: url("../../../../static/images/img/t_banner01_500400_xxx1209.jpg") center no-repeat;
  }
  .el-carousel__item:nth-of-type(3) {
    background: url("../../../../static/images/img/t_banner02_500400_xxx1209.jpg") center no-repeat;
  }
  .el-carousel__item:nth-of-type(4) {
    background: url("../../../../static/images/img/t_banner03_500400_xxx1209.jpg") center no-repeat;
  }
  .el-carousel__item:nth-of-type(5) {
    background: url("../../../../static/images/img/t_banner04_500400_xxx1209.jpg") center no-repeat;
  }




  .calendar>>>.wh_container{
    max-width: 1000px;
    margin: auto;
  }
  .calendar>>>.wh_content_all{
    background-color: #fff;
    width: 100%;
    height: 3.39rem;
    border:0.02rem solid #1AB2DB;
    box-sizing: border-box;
  }
  .calendar>>>.wh_top_changge{
    display: flex;
    background: #3399CC;
  }
  .calendar>>>.wh_content_item, .wh_content_item_tag {
    color: #333;
  }
  .calendar>>>.wh_content_item .wh_chose_day{
    background: #ddd;
    border-radius: 100px;
  }
  .calendar>>>.wh_content_item .wh_item_date:hover{
    background: #eee;
    border-radius: 100px;
  }
  .calendar>>>.wh_content_item .wh_isToday{
    background: #3399CC;
    color:#fff;
    border-radius: 100px;
  }


</style>
