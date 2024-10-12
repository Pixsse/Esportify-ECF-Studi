<template>
<nav class="navbar navbar-expand-lg black-background-color-1 fixed-top">
  <div class="container-fluid">
    
    <h1 class="home-title white-text-color-1 font-gagalin">
      <router-link class="nav-link" to="/">ESPORTIFY</router-link>
    </h1>
    
    <div class="separator"></div>

    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
          <li class="nav-item font-oswald-bold"><router-link class="nav-link" to="/event">Event</router-link></li>
          <li class="nav-item font-oswald-bold"><a class="nav-link" href="mailto:esportify@example.com">Contact</a></li>
      </ul>

      <div class="button-nav-right">
        <button class="login-btn font-oswald-bold">Login</button>
      </div>
    </div>

  </div>
</nav>
</template>

<script>
export default {
  data() {
    return {
      isScrolled: false,
    };
  },
  computed: {
    // Ajoute une classe à la navbar selon la route et si on a scrollé
    navBarClass() {
      return this.$route.path === '/' && !this.isScrolled
        ? 'navbar-transparent'
        : 'navbar-colored';
    },
  },
  mounted() {
    // Gestion du scroll pour changer la classe de la navbar
    window.addEventListener('scroll', this.handleScroll);
  },
  beforeDestroy() {
    window.removeEventListener('scroll', this.handleScroll);
  },
  methods: {
    handleScroll() {
      this.isScrolled = window.scrollY > 50;
    },
  },
};
</script>

<style scoped>

li {
  text-decoration: none;
}

.navbar {
  width: 100%;
  height: 100px; /* Hauteur de la navbar */
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 0 20px;
  border-bottom: 4px solid;
  border-color: #7000FF;
  z-index: 1000;
}

.nav-link {
  color: white;
  text-decoration: none; /* Enlève le soulignement */
  transition: color 0.3s ease; /* Ajoute une transition pour le survol */
}

ul li a:hover {
  color: #7000FF;
}

.nav-item {
  font-size: 25px;
  margin-left: 25px;
}

.home-title {
  text-decoration: none;
  font-size: 62px;
  margin-left: 10px;
  margin-right: 10px;
}

.login-btn {
  background-color: #7000FF;
  color: #ffffff;
  padding: 5px 35px;
  margin-right: 20px;
  border: none;
  cursor: pointer;
  font-size: 21px;
  border-radius: 11px;
  transition: background-color 0.3s ease;
}

.login-btn:hover {
  background-color: #ffffff;
  color: #7000FF;
}

.button-nav-right {
  margin-left: auto;
}

.separator {
  height: 50px; /* Ajuster la hauteur de la barre */
  width: 2px; /* Épaisseur de la barre */
  background-color: #fff; /* Couleur de la barre */
  margin: 0 20px; /* Espacement autour de la barre */
}
</style>