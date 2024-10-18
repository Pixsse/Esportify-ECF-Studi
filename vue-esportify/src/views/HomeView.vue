<template>
<section class="video-section">
  <div class="left-aligned-text">
    <h1 class="title font-oswald-bold">Welcome to ESPORTIFY </h1>
    <p class="font-regular-regular">Join a community of gamers, participate in tournaments, and track your performance on our brand-new online platform. 
      Whether you're an amateur or a pro, Esportify gives you the chance to compete against the best, take part in exciting video game competitions, 
      and chat with fellow enthusiasts. Sign up, track your stats, and earn exclusive rewards while living your passion for e-sports.
    </p>
    <p class="font-regular-regular mb-5">Ready to step into the arena? Join us today!</p>
    <button class="signup-btn font-oswald-bold">Sign Up</button>
    <button class="event-btn font-oswald-bold">Event</button>
  </div>
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
  font-size: 3rem;
  color: white;
  z-index: 1;
}

.video-section {
  position: relative;
  overflow: hidden; 
  z-index: 1;
}

.title {
  font-size: 70px;
  margin-bottom: 50px;
}

.left-aligned-text {
  position: absolute;
  padding-right: 500px;
  top: 50%;
  left: 35%;
  transform: translate(-40%, -50%);
  color: white;
  font-size: 15px;
  text-align: left;
  z-index: 1;
}

.event-btn {
  border: 2px solid;
  border-color: #ffffff;
  background-color: #ffffff00;
  color: #ffffff;
  padding: 10px 50px;
  margin-right: 20px;
  cursor: pointer;
  font-size: 21px;
  border-radius: 8px;
  transition: background-color 0.3s ease;
}

.event-btn:hover {
  border: 2px solid #ffffff;
  border-color: #ffffff;
  background-color: #ffffff;
  color: #7000FF;
}

.signup-btn {
  background-color: #7000FF;
  color: #ffffff;
  padding: 10px 50px;
  margin-right: 30px;
  border: 2px solid;
  border-color: #7000FF;
  cursor: pointer;
  font-size: 21px;
  border-radius: 8px;
  transition: background-color 0.3s ease;
  transition: border-color 0.3s ease;
}

.signup-btn:hover {
  border: 2px solid;
  border-color: #ffffff;
  background-color: #ffffff;
  color: #7000FF;
}

.gallery-section {
  position: relative; 
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