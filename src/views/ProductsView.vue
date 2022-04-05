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

  <!-- <div style="height: 60px; background-color: transparent;" class="background-box">
    <div style="display: flex; justify-content: center">
      <p class="fontSize" ><img style="margin-top: 20px; max-height: 50px;" class="imageText"  src="/images/minitemplepng.png"></p>
    </div>
  </div> -->
<!-- <div style="display: flex; flex-direction: row; overflow: scroll; justify-content: center;">
  <img class="item" src="/images/slc.jpg" v-on:click="addToCart('saltlake')"/>
  <img class="item" src="/images/mttimp.jpg" />
</div> -->

<div style="display: flex; flex-direction: row; overflow: scroll; justify-content: center;">
  <div v-for="temple in miniTemples.types" :key="temple.city">
    <img class="item" style=" cursor: pointer" v-bind:src="temple.img" v-on:click="addToCart(temple)"/>
    <div style="display: flex; justify-content: center;">
      <p>{{temple.city}}</p>
      <p style="padding-left: 10px; padding-right: 25px">${{miniTemples.price}}</p>
      <p style="font-size: 15px; cursor: pointer; border: .5px solid gray; padding: 2px 5px;" v-on:click="addToCart(temple)">Add to Cart</p>
    </div>
  </div>
</div>

<div style="height: 60px; margin-top: 20px; background-color: transparent;" class="background-box">
  <p class="fontSize" ><img style="margin-top: 20px; max-height: 50px;" class="imageText" src="/images/displaycase.png"></p>
</div>

<div style="display: flex; flex-direction: row; overflow: scroll; justify-content: center; padding-bottom: 100px">
  <div v-for="temple in displayCase.types" :key="temple.city">
    <img class="item" style=" cursor: pointer" v-bind:src="temple.img" v-on:click="addToCart(temple)"/>
    <div style="display: flex; justify-content: center;">
      <p>{{temple.city}}</p>
      <p style="padding-left: 10px; padding-right: 25px">${{displayCase.price}}</p>
      <p style="font-size: 15px; cursor: pointer; border: .5px solid gray; padding: 2px 5px;" v-on:click="addToCart(temple)">Add to Cart</p>
    </div>
  </div>
</div>
  <footer class="page-footer">
    <div style="margin-top:10px">
      <a style="color: black" href="https://github.com/elzinga11/my-miniature-models.git">GitHub</a>
    </div>
  </footer>
</div>

</template>

<script>
  export default {
  // eslint-disable-next-line
  name: 'Products',
  computed: {
    miniTemples() {
      return this.$root.$data.temples[0];
    },
    displayCase() {
      return this.$root.$data.temples[1];
    },
  },
  methods: {
    addToCart(temple){
      let alreadyExists = false;
      this.$root.$data.cart.filter((temp) => {
        if(temp.city === temple.city && temp.price === temple.price){
          alreadyExists = true;
          console.log("here")
          temp.count += 1;
          return;
        }
      })
      if(alreadyExists === true){
        return;
      }
      temple.count = 1;
      this.$root.$data.cart.push(temple);
      alreadyExists = false;
    }
  }
}
</script>
