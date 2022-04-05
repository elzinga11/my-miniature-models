/* eslint-disable */

<template>
<div style="height: 100vh">
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
  <!-- <div style="margin-top: -8px !important; margin-left: 15px; margin-right: 15px; padding-bottom: 15px !important" class="md-form mt-0">
    <input class="form-control" type="text" placeholder="Search" aria-label="Search">
  </div> -->

  <p style="text-align: left; font-size:20px; padding-left: 30px;">Shopping Cart</p>
  <div style="display: flex; flex-wrap: wrap; overflow: scroll; padding-left: 20px;">
    <div v-for="temple in cart" :key="temple.city">
        <img class="item" style=" cursor: pointer" v-bind:src="temple.img" v-on:click="addToCart(temple)"/>
        <div style="display: flex; justify-content: center;">
        <p>{{temple.city}}</p>
        <p style="padding-left: 10px; padding-right: 5px">${{temple.price}}</p>
        <p style="padding-right: 25px;"> x {{temple.count}}</p>
        <p style="font-size: 15px; cursor: pointer; border: .5px solid gray; padding: 2px 5px;" v-on:click="removeFromCart(temple)">Remove</p>
        </div>
    </div>
  </div>

  <p style="text-align: left; font-size:20px; padding-left: 30px; padding-bottom: 100px">Total: ${{totalPrice}}</p>
  
  <footer class="page-footer">
    <div style="margin-top:10px">
      <a style="color: black" href="https://github.com/elzinga11/myminiaturemodels.git">GitHub</a>
    </div>
  </footer>
  </div>
</template>

<script>
  export default {
  // eslint-disable-next-line
  name: 'Products',
  computed: {
    cart() {
      return this.$root.$data.cart;
    },
    totalPrice(){
      let total = 0;
      for(let i=0; i<this.$root.$data.cart.length; i++){
        total+=this.$root.$data.cart[i].price * this.$root.$data.cart[i].count;
      }
      return total.toFixed(2);
    }
  },
  methods: {
    removeFromCart(temple){
        this.$root.$data.cart = this.$root.$data.cart.filter(temp => (temp !== temple));
    }
  }
}
</script>

