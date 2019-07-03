<template>
  <div class="navbox1-1">
    <div v-show="formShow&&Show_2_2">
      <el-form ref="form" :model="form" label-width="70px">
        <el-form-item label="目的地">
          <el-input  v-model="form.name1" placeholder="三亚"></el-input>
        </el-form-item>
        <div class="form-right">
          <el-form-item label="入住时间">
            <el-col :span="23">
              <el-date-picker type="date" placeholder="2019.11" v-model="form.date1" style="width: 100%;"></el-date-picker>
            </el-col>
          </el-form-item>
          <el-form-item label="退房时间" class="right-data">
            <el-col :span="24">
              <el-date-picker type="date" placeholder="2019.12" v-model="form.date2" style="width: 100%;"></el-date-picker>
            </el-col>
          </el-form-item>
        </div>
        <el-form-item label="酒店级别">
          <el-select v-model="form.region" placeholder="不限">
            <el-option label="不限" value="shanghai"></el-option>
            <el-option label="五星级/豪华" value="beijing"></el-option>
            <el-option label="四星级/高档" value="beijing"></el-option>
            <el-option label="三星级/舒适" value="beijing"></el-option>
            <el-option label="三星级以下/经济" value="beijing"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="关键词">
          <el-input v-model="form.name2" placeholder="海岛"></el-input>
        </el-form-item>
      </el-form>
      <div class="link">
          <a href="#" v-for="(item,index) in links">{{item}}&nbsp;&nbsp;&nbsp;</a>
      </div>
      <el-button class="btn-search">搜索行程 ></el-button>
    </div>
    <div v-show="!formShow">
      <Navbox2_3 :linkShow="false"></Navbox2_3>
    </div>
    <div v-show="!Show_2_2">
      <Navbox3_2 :radioShow="false"></Navbox3_2>
    </div>
  </div>
</template>
<script>
  import Navbox2_3 from './navbox2-3.vue'
  import Navbox3_2 from './navbox3-2.vue'
//  import { City } from '../../../static/js/cityselect.js'
  export default {
    components:{
      Navbox2_3,
      Navbox3_2,

    },
    props:[
      'links',
      'formShow',
      'Show_2_2'
    ],
    data() {
      return {
        form: {
          name1: '上海市',
          name2: '',
          region: '不限',
          date1: '2019.11',
          date2: '2019.12',
        },
      }
    },
    methods: {
      onSubmit() {
        console.log('submit!');
      }
    },
    mounted(){

    },

  }
</script>


<style scoped>
  /*@import "../../../static/js/cityselect.css";*/
  .navbox1-1 a:hover{
    color:#F9A400;
  }
  .navbox1-1 {
    height: 3rem;
    padding:0.12rem 0.34rem 0.26rem 0.2rem;
    box-sizing: border-box;
    text-align: left;
  }
  .form-right{
    display: flex; justify-content:space-between;width:100%;
  }
  .navbox1-1>>>.right-data .el-form-item__label{
    padding: 0 10px 0 0;
  }
  .navbox1-1>>>.el-input__inner{
    height:0.32rem;
  }

  .el-form-item {
    margin-bottom: 8px;
  }
  .link{
    color:#1AB2DB;
    text-align: right;
    font-size: 0.14rem;
    line-height: 0.44rem;
    height: 0.44rem;
    padding-right: 0.4rem;
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




</style>
