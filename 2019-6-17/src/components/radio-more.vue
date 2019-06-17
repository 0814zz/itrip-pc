<template>
  <div>
    <el-radio-group v-model="radio"  @change="fn">
      <el-radio label="1">备选项</el-radio>
      <el-radio label="2">备选项</el-radio>
      <el-radio label="3">备选项</el-radio>
    </el-radio-group>
    <ul>
      <li v-show="show1">内容一</li>
      <li v-show="show2">内容二</li>
      <li v-show="show3">内容三</li>
    </ul>
  </div>

</template>

<script>
  export default {
    data () {
      return {
        radio: '1',
        isShow:[true,false,false],
      };
    },
    computed:{
      show1(){return this.isShow[0]},
      show2(){return this.isShow[1]},
      show3(){return this.isShow[2]}
    },
    methods:{
      fn:function () {
        this.isShow=this.isShow.map(function (el) {
          el=false;
          return el;
        });
        this.isShow[parseInt(this.radio)-1]=true;
      }
    },
  }
</script>
