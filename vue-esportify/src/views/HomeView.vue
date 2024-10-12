<template>
<section>
    <video autoplay muted loop id="background-video">
      <source src="./Gaming-Video-01.mp4" type="video/mp4">
    </video>
</section>
    
<section>

</section>

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
    height: 100vh;
}

.video-background-container {
  position: relative; /* Pour que le contenu soit superposé à la vidéo */
  height: 100vh; /* Occupe toute la hauteur de la fenêtre */
  overflow: hidden; /* Coupe la partie de la vidéo qui dépasse du conteneur */
}

#background-video {
  position: absolute;
  top: 50%;
  left: 50%;
  min-width: 100%;
  min-height: 100%;
  width: auto;
  height: auto;
  z-index: -1; /* Place la vidéo derrière le contenu */
  transform: translate(-50%, -50%); /* Centre la vidéo dans la page */
}

</style>