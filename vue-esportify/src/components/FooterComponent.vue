<template>
    <div class="footer black-background-color-1">
      <div class="footer-container">
        
        <div class="footer-links font-oswald-light">
          <router-link @click="goToTop" to="/">Home</router-link>
          <router-link @click="goToTop" to="/event">Event</router-link>
          <router-link @click="goToTop" to="/sign-in">Login</router-link>
          <a href="mailto:esportify@example.com">Contact</a>
        </div>
  
        <div class="footer-copyright">
          <p>&copy; 2024 ESPORTIFY. All right reserved.</p>
        </div>
      </div>
    </div>
</template>
  
<script>

import { autoScrollToTop } from '@/utils/utils';

export default {
  name: "FooterComponent",

  methods: {
    goToTop() {
      autoScrollToTop();
    }
  }
};
  
</script>
  
  <style scoped>

  .footer {
    height: auto;
    width: 100%;
    color: white;
    padding: 2rem 0;
    text-align: center;
    border-top: 4px solid;
    border-color: #7000FF;
    z-index: 10000;
  }
  
  .footer-container {
    max-width: 1200px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  
  .footer-links {
    margin-bottom: 1.5rem;
  }
  
  .footer-links a {
    color: white;
    text-decoration: none;
    margin: 0 15px;
    font-size: 1rem;
  }
  
  .footer-links a:hover {
    text-decoration: underline;
    color: #7000FF;
  }
  
  .footer-copyright {
    margin-top: 1.5rem;
    font-size: 0.9rem;
    opacity: 0.8;
  }
  </style>