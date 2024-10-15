<template>
  <section>
    <div class="container h-100 d-flex justify-content-center">
      <div class="row w-100">
        <div class="col-lg-4 col-md-6 mx-auto">
          <div>
            <h2 class="text-center purple-text-color-1 font-oswald-bold">Sign In</h2>
            <hr class="title-underline purple-background-color-1 mb-5">

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
              <button type="submit" class="btn btn-block">Sign In</button>
              
            </form>
            <hr />
            <div class="text-center font-regular-regular">
              <p>Don't have an account? <a class="purple-text-color-1" href="#" @click.prevent="signUp">Sign Up</a></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
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

  h2 {
    font-size: 48px;
  }

  section {
    height: 86vh;
  }
  
.title-underline{
  width: 100px;
  height: 3px;
  margin: 0 auto 20px auto; 
}

  .container {
    height: 100vh;
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
    margin-top: 25px;
    padding: 5px;
    width: 100%;
    height: auto;
    color: #FFFFFF;
    background-color: #7000FF;
    font-family: Oswald;
    font-weight: 700;
    font-size: 25px;
    border-radius: 10px;
  }
  
  button:hover {
    color: #7000FF;
    background-color: #9c9c9c;
  }

  a {
    text-decoration: none;
  }
  
  a:hover {
    text-decoration: underline;
  }
  </style>
  