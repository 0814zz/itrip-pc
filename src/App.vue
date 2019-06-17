<template>
  <div id="app">
    <!--<img src="./assets/logo.png">-->
    <router-view/>
  </div>
</template>

<script>
export default {
  // // 创建前
  // beforeCreate:function () {
  //   this.$router.push("/")   //路由重定向
  // },
}
</script>

<style>
  *{
    padding: 0;
    margin: 0;
  }
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #333;
}
  a{
    color:inherit;
    text-decoration: none;
  }
  ul,li{
    list-style: none;
  }
  html{
    font-size: 6.25em;
  }
  body{
    font-size: 0.14rem;
  }
  @media (min-width: 768px) {
    .container {
      width: 750px;
    }
  }
  @media (min-width: 992px) {
    .container {
      width: 970px;
    }
  }

  @media (min-width: 1200px) {
    .container {
      width: 1200px;
    }
  }
  .container {
    margin: 0 auto;
    padding: 0;
  }
</style>
