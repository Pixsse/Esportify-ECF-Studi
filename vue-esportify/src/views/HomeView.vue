<template>
  <section class="video-section position-relative">
    <div class="container h-100 d-flex flex-column justify-content-center align-items-start text-white">
      <div class="row">
        <div class="col-lg-8 col-md-6 col-12 col-12 text-left">
          <h1 class="title font-oswald-bold">Welcome to ESPORTIFY</h1>
          <p class="font-regular-regular lead">Join a community of gamers, participate in tournaments, and track your performance on our brand-new online platform. 
            Whether you're an amateur or a pro, Esportify gives you the chance to compete against the best, take part in exciting video game competitions, 
            and chat with fellow enthusiasts. Sign up, track your stats, and earn exclusive rewards while living your passion for e-sports.
          </p>
          <p class="font-regular-regular lead">Ready to step into the arena? Join us today!</p>
          <p class="font-regular-regular mb-5"></p>
          <!-- Buttons -->
          <button @click="Login" class="btn btn-lg font-oswald-bold mr-2 signup-btn">Sign Up</button>
          <button @click="Event" class="btn btn-lg font-oswald-bold event-btn">Event</button>
        </div>
      </div>
    </div>
    <!-- Background Video -->
    <video autoplay muted loop id="background-video">
      <source src="@/assets/videos/Gaming-Video-01.mp4" type="video/mp4">
    </video>
  </section>

  <!-- Gallery Section -->
  <section class="gallery-section py-5 text-center black-background-color-1 d-flex align-items-center">
    <div class="container">
      <h2 class="font-oswald-bold display-4 text-white">GALLERY</h2>
      <div class="gallery-separator mx-auto"></div>
    </div>
    <div class="d-flex justify-content-center align-items-center carrousel-component" >
      <CarouselHomeComponent />
    </div>

  </section>

  <!-- Event Section -->
  <section class="event-section py-5 text-center white-background-color-1">
    <div class="container">
      <h2 class="font-oswald-bold display-4 purple-text-color-1">EVENT</h2>
      <div class="event-separator mx-auto"></div>
    </div>
  </section>
</template>

  
<script>
import CarouselHomeComponent from '@/components/home/Carousel-Home-Component.vue';
import { autoScrollToTop } from '@/utils/utils';

export default {
  name: 'Home',

  components: {
    CarouselHomeComponent,
  },
  methods: {
    Login() {
      this.$router.push('/sign-up')
      autoScrollToTop();
    },
    Event() {
      this.$router.push('/event')
      autoScrollToTop();
    },
  },
}
</script>
  
<style scoped>

/* SECTION GLOBAL */
section {
  width: 100%;
  height: 100vh;
  display: flex;
  font-size: 3rem;
  color: white;
  z-index: 1;
}

/* VIDEO SECTION */
.video-section {
  position: relative;
  overflow: hidden; 
  z-index: 1;
}

.title {
  font-size: 70px;
  margin-bottom: 50px;
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


/* GALLERY SECTION */
.gallery-section {
  position: relative;
  align-items: start;
  text-align: center;
  display: flex;
  align-content: center;
  flex-direction: column;
}

.gallery-separator {
  width: 150px;
  height: 2px;
  background-color: #fff;
  margin-top: 10px;
  margin-bottom: 20px;
}

.carrousel-component {
  position: relative;
  align-items: center;
  text-align: center;
  display: flex;
  align-content: center;
}

/* EVENT SECTION */
.event-section {
  position: relative; 
}

.event-separator {
  width: 150px;
  height: 2px;
  background-color: #7000FF;
  margin-top: 10px;
  margin-bottom: 20px;
}



/* ID */
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