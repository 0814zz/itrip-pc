<template>
    <div class="navbox3-2">
      <el-form ref="form" :model="form" label-width="70px">
        <el-form-item label="航程类型">
        <el-radio-group v-model="form.radio">
          <el-radio label="1">单程</el-radio>
          <el-radio label="2">往返</el-radio>
          <el-radio label="3">多程</el-radio>
        </el-radio-group>
        </el-form-item>
        <div class="form-right">
          <el-form-item label="出发城市">
            <el-col :span="22">
              <el-input placeholder="北京" v-model="form.start1" style="width: 100%;"></el-input>
            </el-col>
          </el-form-item>
          <el-form-item label="第一程日期" class="right-data">
            <el-col :span="22">
              <el-date-picker class="data-right" type="date" placeholder="yy-mm-dd" v-model="form.date1" style="width: 100%;"></el-date-picker>
            </el-col>
          </el-form-item>
        </div>
        <div class="form-right">
          <el-form-item label="中转城市">
            <el-col :span="22">
              <el-input placeholder="上海" v-model="form.start2" style="width: 100%;"></el-input>
            </el-col>
          </el-form-item>
          <el-form-item label="第二程日期" class="right-data">
            <el-col :span="22">
              <el-date-picker class="data-right" type="date" placeholder="yy-mm-dd" v-model="form.date2" style="width: 100%;"></el-date-picker>
            </el-col>
          </el-form-item>
        </div>
        <el-form-item label="到达城市">
          <el-input v-model="form.end" placeholder="广州"></el-input>
        </el-form-item>
      </el-form>
      <div class="link">
          <a href="#" v-for="(item,index) in links">{{item}}&nbsp;&nbsp;&nbsp;</a>
      </div>
      <el-button class="btn-search">搜索行程 ></el-button>
    </div>
</template>
<script>

    export default {
      data() {
        return {
          form: {
            end: '',
            start1: '',
            start2: '',
            data1: '',
            date2: '',
            radio:'1',
          },
          links:["温泉","亲子","自由行","名胜古迹","都市购物"],
        }
      },
    }
</script>


<style scoped>
  a:hover{
    color:#F9A400;
  }
  .navbox3-2 {
    height: 3rem;
    padding:0.12rem 0.34rem 0.26rem 0.2rem;
    box-sizing: border-box;
    text-align: left;

  }
  .form-right{
    display: flex;
    /*justify-content:space-between;*/
    width:100%;
  }
  .navbox3-2>>>.el-form-item__label{
    color:#333;
  }
  .navbox3-2>>>.right-data .el-form-item__label{
    padding: 0 10px 0 0;
  }
  .navbox3-2>>>.el-input__inner{
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
  .el-radio {
    margin-right: 10px;
    font-weight: bold;
  }
  .navbox3-2>>>.el-form-item__label {
    word-break: keep-all ;
  }
  .navbox3-2>>>.el-radio__label {
    padding-left: 4px;
  }
  .data-right>>> .el-input__inner{
    transform: translateX(0.12rem);
  }
  .data-right>>>.el-input__prefix, .el-input__suffix {
    position: absolute;
    top: 0;
    left:0.16rem;
  }
</style>
