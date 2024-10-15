<template>
    <div class="container h-100 d-flex align-items-center justify-content-center">
      <div class="row w-100">
        <div class="col-lg-4 col-md-6 mx-auto">
          <div class="card shadow-lg p-4">
            <h3 class="text-center mb-4">Sign In</h3>
            <form @submit.prevent="handleSignIn">
              <div class="form-group">
                <label for="email">Email address</label>
                <input
                  type="email"
                  class="form-control"
                  id="email"
                  v-model="email"
                  placeholder="Enter email"
                  required
                />
              </div>
              <div class="form-group">
                <label for="password">Password</label>
                <input
                  type="password"
                  class="form-control"
                  id="password"
                  v-model="password"
                  placeholder="Enter password"
                  required
                />
              </div>
              <button type="submit" class="btn btn-primary btn-block">Sign In</button>
              <div class="text-center mt-3">
                <a href="#" @click.prevent="forgotPassword">Forgot password?</a>
              </div>
            </form>
            <hr />
            <div class="text-center">
              <p>Don't have an account? <a href="#" @click.prevent="signUp">Sign Up</a></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        email: '',
        password: ''
      };
    },
    methods: {
      handleSignIn() {
        // Logique de connexion ici
        if (this.email && this.password) {
          alert(`Logged in with ${this.email}`);
        }
      },
      forgotPassword() {
        alert("Redirect to forgot password");
      },
      signUp() {
        alert("Redirect to sign-up page");
      }
    }
  };
  </script>
  
  <style scoped>
  html, body {
    height: 100%;
    margin: 0;
    padding: 0;
  }
  
  .container {
    height: 100vh; /* Pour centrer verticalement et horizontalement */
  }
  
  .card {
    border-radius: 10px;
    padding: 20px;
    background-color: #fff;
  }
  
  h3 {
    color: #333;
  }
  
  .btn-block {
    width: 100%;
  }
  
  a {
    color: #007bff;
    text-decoration: none;
  }
  
  a:hover {
    text-decoration: underline;
  }
  </style>
  