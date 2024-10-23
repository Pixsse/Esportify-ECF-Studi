<template>
  <section>
    <div class="container py-5">
      <div class="row justify-content-center">
        <div class="col-lg-6 col-md-8">
          <div>
            <div class="card-body p-5">
              <h2 class="font-oswald-bold display-4 purple-text-color-1 text-center">Sign In</h2>
              <div class="sign-separator mx-auto"></div>

              <form @submit.prevent="submitForm">
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
                <button type="submit" class="btn signin-btn w-100 mt-3 font-oswald-bold">Sign In</button>
              </form>

              <div class="text-left mt-3">
                <p class="font-regular-regular">
                  Don't have an account? 
                  <router-link class="signin-link" to="/sign-up">Sign Up</router-link>
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
  name: 'SignIn',
  data() {
    return {
      form: {
        email: '',
        password: ''
      }
    };
  },
  methods: {
    submitForm() {
      // Handle sign-in logic here
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

.signin-btn {
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

.signin-btn:hover {
  border: 2px solid;
  background-color: #ffffff;
  color: #7000FF;
}

.signin-link {
  text-decoration: none;
  color: #7000FF;
}
</style>
