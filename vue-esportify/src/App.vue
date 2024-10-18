<template>
  <header>
    <NavbarComponent />
  </header>

  <main>
    <RouterView />
  </main>

  <footer>
    <FooterComponent />
  </footer>
</template>

<script scoped>
import NavbarComponent from './components/NavbarComponent.vue';
import FooterComponent from './components/FooterComponent.vue';

export default {
  components: {
    NavbarComponent,
    FooterComponent
  },
};

</script>

<style scoped>
html {

}

header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

</style>
