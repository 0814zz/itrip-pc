<template>
    <div>
      <div class="i-tv">
        <video class="video" autoplay="autoplay" preload="auto" loop="loop">
          <source src="../../../static/images/video/travel/video.webm" type="video/webm"/>
          <source src="../../../static/images/video/travel/video.mp4" type="video/mp4"/>
        </video>
      </div>
    </div>
</template>

<script>
    export default {
        // name: "hoteldetail-video"
    }
</script>

<style scoped>
.i-tv{
  width: 100%;
  height: 5rem;
  background-color: #dedede;
}
  .video{
    width: 100%;
    height: 100%;
    box-sizing: border-box;
  }
</style>
