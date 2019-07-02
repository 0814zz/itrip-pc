<template>
    <div class="container ad">
      <el-image class="ad-left" :src="ad.src1"></el-image>
      <el-image class="ad-rigft" :src="ad.src2"></el-image>
    </div>
</template>
<script>
    export default {
      props:[
        'ad'
      ]
    }
</script>


<style scoped>
  @media (min-width: 1200px) {
    .container {
      width: 1150px;
    }
  }
    .ad{
      display: flex;
      justify-content: space-between;
    }
    .ad-left{
      width:24.5%;
      cursor: pointer;
    }
    .ad-rigft{
      width:74.6%;
      cursor: pointer;
    }
</style>
