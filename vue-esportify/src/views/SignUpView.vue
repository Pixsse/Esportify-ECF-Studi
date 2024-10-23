<template>
    <section>
        <div class="container py-5">
      <div class="row justify-content-center">
        <div class="col-lg-6 col-md-8">
          <div>
            <div class="card-body p-5">

              <h2 class="font-oswald-bold display-4 purple-text-color-1 text-center">Sign Up</h2>
              <div class="sign-separator mx-auto"></div>
              
              <form @submit.prevent="submitForm">
                <div class="mb-3 font-oswald-regular">
                  <label for="username" class="form-label">Username</label>
                  <input
                    type="text"
                    class="form-control"
                    id="username"
                    v-model="form.username"
                    placeholder="Enter your username"
                    required
                  />
                </div>
                <div class="mb-3 font-oswald-regular">
                  <label for="email" class="form-label">Email</label>
                  <input
                    type="email"
                    class="form-control"
                    id="email"
                    v-model="form.email"
                    placeholder="Enter your email"
                    required
                  />
                </div>
                <div class="mb-3 font-oswald-regular">
                  <label for="password" class="form-label">Password</label>
                  <input
                    type="password"
                    class="form-control"
                    id="password"
                    v-model="form.password"
                    placeholder="Enter your password"
                    required
                  />
                </div>
                <div class="mb-3 font-oswald-regular">
                  <label for="confirmPassword" class="form-label">Confirm Password</label>
                  <input
                    type="password"
                    class="form-control"
                    id="confirmPassword"
                    v-model="form.confirmPassword"
                    placeholder="Confirm your password"
                    required
                  />
                </div>
                <button type="submit" class="btn signup-btn w-100 mt-3 font-oswald-bold">Sign Up</button>
              </form>
              <div class="text-left mt-3">
                <p class="font-regular-regular">
                  Already have an account? 
                  <router-link class="signup-link" to="/sign-in">Sign In</router-link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </section>
</template>
  
<script>
  export default {

    name: 'SignUp',

    data() {
      return {
        form: {
          username: '',
          email: '',
          password: '',
          confirmPassword: ''
        }
      };
    },
    methods: {
      submitForm() {
        if (this.form.password !== this.form.confirmPassword) {
          alert("Passwords do not match");
          return;
        }
 
        console.log("Form submitted:", this.form);
      }
    }
  };
</script>
  
<style scoped>

section {
    padding-top: 75px;
    height: 100vh;
}

.sign-separator {
  width: 150px;
  height: 2px;
  background-color: #7000FF;
  margin-top: 10px;
  margin-bottom: 75px;
}
  
.form-label {
  font-weight: bold;
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
  background-color: #ffffff;
  color: #7000FF;
}

.signup-link {
  text-decoration: none;
  color: #7000FF;
}
  
</style>