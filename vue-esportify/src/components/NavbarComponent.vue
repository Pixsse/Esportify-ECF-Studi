<template>
<nav class="navbar navbar-expand-lg fixed-top" :class="{'navbar-transparent': isHomePage && !hasScrolled, 'navbar-colored': hasScrolled}">
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
      hasScrolled: false,
      isHomePage: true
    };
  },
  mounted() {
    if (this.$route.name === '/') 
    {
      this.isHomePage = true;
    } 
    else 
    {
      this.isHomePage = false;
    }
    window.addEventListener("scroll", this.handleScroll);
  },
  beforeDestroy() {
    window.removeEventListener("scroll", this.handleScroll);
  },
  methods: {
    handleScroll() {
      const scrollPosition = window.scrollY;
      const threshold = window.innerHeight * 0.2;

      this.hasScrolled = scrollPosition > threshold;
    }
  }
};
</script>

<style scoped>

li {
  text-decoration: none;
}

.navbar {

}

.nav-link {
  color: white;
  text-decoration: none;
  transition: color 0.3s ease;
}

.navbar-colored {
  border-bottom: 4px solid;
  border-color: #7000FF;
  background-color: #040404;
  transition: background-color 0.3s ease-out;
}

.navbar-transparent {
  border-color: transparent;
  background-color: transparent;
  border-bottom: 4px solid;
  transition: background-color 0.3s ease-in;
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
  border-radius: 8px;
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
  height: 50px;
  width: 2px;
  background-color: #fff;
  margin: 0 20px;
}
</style>