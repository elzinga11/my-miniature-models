<template>
<div>
<div class="socialmedia">
    <ul>
      <li>
        <a href='pages/products.html'><img src="images/pintrest.png"></a>
      </li>
      <li>
        <a href='pages/about.html'><img src="images/facebook.png"></a>
      </li>
      <li>
        <a href='pages/reviews.html'><img src="images/instagram.png"></a>
      </li>
    </ul>
  </div>
    <div>
    <b-navbar toggleable="lg" type="light">
      <b-navbar-brand><router-link style="font-family: unset; font-weight: 400"  to="/"><img class="trademark" style="max-width: 225px; margin-top: 12px"
        src="/images/mmmlogo.png" /></router-link></b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <b-nav-item><router-link style="font-family: unset; font-weight: 400"  to="/products">Products</router-link></b-nav-item>
          <b-nav-item><router-link style="font-family: unset; font-weight: 400"  to="/about">About</router-link></b-nav-item>
          <b-nav-item><router-link style="font-family: unset; font-weight: 400"  to="/reviews">Reviews</router-link></b-nav-item>
        </b-navbar-nav>
       </b-collapse>
  </b-navbar>
  </div>
    <router-link to="/shopping"><img style="top:42px" class="shoppingCart" src="/images/shoppingcart.png"/></router-link>
  <div style="margin: 30px">
  <div v-if="!loggedIn" style="display: flex; justify-content: center; margin: auto; flex-direction: column; max-width: 500px;">
      <h2>Register</h2>
      <input v-model="username" placeholder="Username">
      <input type="password" v-model="password" placeholder="Password">
      <input v-model="firstName" placeholder="First Name">
      <input v-model="lastName" placeholder="Last Name">
      <div style="margin-left: auto;">
        <button style="width: 100px; margin-right: 5px;" @click="register" :disabled="canRegister">Register</button>
        <button style="width: 100px" @click="login" :disabled="canLogin">Login</button>
      </div>
  </div>
    <div v-if="loggedIn" style="display: flex; justify-content: center; margin: auto; flex-direction: column; max-width: 500px;">
      <div v-if="loginSucceeded">
        <h2>Welcome back {{firstName}} {{lastName}}</h2>
      </div>
      <div v-else>
        <h2>Login failed</h2>
      </div>
  </div>
  </div>

</div>

</template>

<script>
  import axios from 'axios';
  export default {
  // eslint-disable-next-line
  name: 'Login',
  data() {
    this.signOut();
    return {
      username: "",
      password: "",
      firstName: this.$root.$data.firstName,
      lastName: this.$root.$data.lastName,
      users: [],
      test: true,
      loginSucceeded: true
    }
  },
  computed: {
    loggedIn(){
      this.getUsers();
      return this.$root.$data.loggedIn;
    },
    canRegister(){
      if(this.username && this.password && this.firstName && this.lastName){
        return false;
      }
      else{
        return true;
      }
    },
    canLogin(){
      if(this.username && this.password){
        return false;
      }
      else{
        return true;
      }
    }
  },
  methods: {
    async register() {
      try {
        await axios.post('/api/users', {
          username: this.username,
          password: this.password,
          firstName: this.firstName,
          lastName: this.lastName
        });
        this.getUsers();
        this.login();
      } catch (error) {
        console.log(error);
      }
    },
    async login() {
      try {
        this.getUsers();
        for(let user of this.users){
          if(this.username === user.username && this.password === user.password){
            this.loginSucceeded = true;
            this.$root.$data.loggedIn = true;
            this.$root.$data.loggedIn = true;
            this.firstName = user.firstName;
            this.lastName = user.lastName;
            this.$root.$data.firstName = user.firstName;
            this.$root.$data.lastName = user.lastName;
            this.$root.$data.username = user.username;
          }
        }
        if(this.$root.$data.loggedIn === false){
          this.$root.$data.loggedIn = true;
          this.loginSucceeded = false;
          setTimeout(() => {
            this.$root.$data.loggedIn = false;
          }, 1000)
        }
      } catch (error) {
        console.log(error);
      }
    },
    async getUsers() {
      try {
        let response = await axios.get("/api/users");
        this.users = response.data;
        return true;
      } catch (error) {
        console.log(error);
      }
    },
    signOut(){
      this.$root.$data.loggedIn = false;
      this.$root.$data.firstName = "";
      this.$root.$data.lastName = "";
      this.$root.$data.username = "";
    }
  }
}
// this.signOut();

</script>


<style scoped>
    input{
        margin-bottom: 2px;
    }
</style>