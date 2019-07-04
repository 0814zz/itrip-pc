<template>
    <div class="navbox3-3">
      <Navbox2_3 :linkShow="false"></Navbox2_3>
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
  .navbox3-3 {
    height: 3rem;
    padding:0.12rem 0.34rem 0.26rem 0.2rem;
    box-sizing: border-box;
    text-align: left;
  }

</style>
