<template>
  <div>
    <div class="calendar top-calendar" id='calendar' style="width:498px;height:415px;margin:0 auto;">
    </div>
  </div>
</template>

<script>
  export default {
    
    mounted() {

      var calender = new $Calendar("calendar");
      var data = function (e) {
        var data = [];
        var date = new Date();
        for (var i = 0; i < 30; i++) {
          var time = new Date(date.getFullYear(), date.getMonth(), date.getDate() + i + 1);
          if (Math.random() > 0.5) {
            data.push({
              time: time,
              text: "￥5999起"
            })
          }
        }
        return data;
      }();
      calender.setData({
        data: data,
        click: function (e) {

          console.debug(e);
          $(".all_resource").slideToggle();
        }
      });
    }
  }
</script>

<style scoped>

</style>
