<template>
    <div class="navbox4">
      <Navbox2_3 :linkShow="true"></Navbox2_3>
    </div>
</template>
<script>
  import Navbox2_3 from './navbox2-3.vue'
    export default {
    components:{
      Navbox2_3,
    }
    }
</script>


<style scoped>
  .navbox4 {
    /*height: 3rem;*/
    padding:0.22rem 0.34rem 0.26rem 0.2rem;
    box-sizing: border-box;
    text-align: left;
  }

</style>
