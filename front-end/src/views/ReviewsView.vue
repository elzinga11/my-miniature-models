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

  <!-- <div style="margin-top: -8px !important; margin-left: 15px; margin-right: 15px; padding-bottom: 15px !important" class="md-form mt-0">
    <input class="form-control" type="text" placeholder="Search" aria-label="Search">
  </div> -->
  <p style="font-size:20px; padding-top: 5px; font-family:Didot;">~ Reviews ~</p>

  <div style="overflow: scroll; max-height: 72vh; padding-left:30px; padding-right: 30px; padding-bottom: 20px;">
    <!-- <img class="item" src="/images/slcwithcloche.jpg" /> -->
    <div style="display: flex; flex-direction: column; margin: auto; width: 60vw; padding-bottom: 20px;">
      <p>Add Review</p>
      <input v-model="name" style="margin-bottom: 5px;" placeholder="Name">
      <textarea  v-model="description" placeholder="Review"></textarea>
      <div style="margin-left: auto; margin-top: 5px">
        <button style="width: 75px; margin-right: 5px" @click="clear">Clear</button>
        <button style="width: 75px" @click="addReview">Add</button>
      </div>
    </div>
    <div v-for="review of reviews" style="text-align: left;" :key="review._id">
      <div style="display: flex">
        <p style="padding-right: 5px; font-size: 18px">{{review.name}}</p>
        <button @click="deleteReview(review)" style="margin-left:auto; margin-bottom: 10px;" v-if="review.associatedUsername === username">Delete</button>
      </div>
      <p style="margin-top: -10px; font-size: 15px; padding-left: 10px;">{{review.description}}</p>
      <p style="margin-top: -10px; font-size: 15px; padding-left: 10px;">-{{review.date}}</p>
    <!-- <p>Ammon</p>
    <p style="margin-top: -10px; font-size: 15px; padding-left: 10px;">I gifted one to my parents and they loved it! I got the one with the display case and it looks amazing, would buy again!</p>

    <p>Matt</p>
    <p style="margin-top: -10px; font-size: 15px; padding-left: 10px;">I wanted a few temples to hand out and these worked perfectly.</p>

    <p>Carla</p>
    <p style="margin-top: -10px; font-size: 15px;  padding-left: 10px;">I can't wait to see what the ones with lights look like. I've gotten a few of these as presents and they are always a hit!</p> -->
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
  import axios from 'axios';
  export default {
  // eslint-disable-next-line
  name: 'Reviews',
  data() {
    this.getReviews();
    return {
      name: "",
      description: "",
      username: this.$root.$data.username,
      reviews: []
    }
  },
  computed: {
  },
  methods: {
    async addReview() {
      try {
        const date = new Date();
        await axios.post('/api/review', {
          name: this.name,
          description: this.description,
          date: date.toDateString(),
          associatedUsername: this.username
        });
        this.getReviews();
      } catch (error) {
        console.log(error);
      }
    },
    clear(){
      this.name = "";
      this.description = "";
    },
    async deleteReview(review) {
      try {
        await axios.delete("/api/review/" + review._id);
        this.getReviews();
        return true;
      } catch (error) {
        console.log(error);
      }
    },
    async getReviews() {
      try {
        let response = await axios.get("/api/review");
        this.reviews = response.data;
        return true;
      } catch (error) {
        console.log(error);
      }
    },
  }
}
</script>