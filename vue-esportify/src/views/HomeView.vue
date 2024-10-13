<template>
<section class="video-section container">
    <video autoplay muted loop id="background-video">
      <source src="@/assets/videos/Gaming-Video-01.mp4" type="video/mp4">
    </video>
</section>
    
<section class="gallery-section black-background-color-1">

</section class="event-section white-background-color-1">

<section>

</section>
</template>
  
  <script>
  export default {
    name: 'Home'
  }
  </script>
  
<style scoped>

section {
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 3rem;
  color: white;
  scroll-snap-align: start;
  scroll-behavior: smooth;
  z-index: 1;
  display: block;
}

.video-section {
    width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 3rem;
  color: white;
  scroll-snap-align: start;
  scroll-behavior: smooth;
  z-index: 1;
  border-bottom: 4px solid #7000FF;
  display: block;
}


.gallery-section {
  border-bottom: 2px solid;
  border-top: 2px solid;
  border-color: #7000FF;
}

.event-section {
    position: relative; 
}

.video-background-container {
  position: relative;
  height: 100vh;
  overflow: hidden;
}
#background-video {
  position: absolute;
  top: 50%;
  left: 49.8%;
  min-width: 100%;
  min-height: 100%;
  width: auto;
  height: auto;
  z-index: -1;
  transform: translate(-50%, -50%);
}

</style>