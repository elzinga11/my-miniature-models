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
  <hr>
  <div style="overflow: scroll; max-height: 72vh;" class="about">
    <div class="rounded-circle"
      style="padding: 10px; float: left; margin-top: 30px; margin:auto; width: 100%; height: 100%;">
      <img style="border-radius: 10%; width: 100%" src="/images/slcwithcloche.jpg" />
    </div>
    <p class="rightBox fontSize" style="margin:auto; padding-top: 15px; font-family:Didot; padding-top: 20px; padding-right: 20px; padding-bottom: 30px;">
      My Miniature Models is all about bringing the temple to your home. By engraving the date you or your loved one was sealed, it is the perfect way to remember and celebrate that perfect day. Feel free to send us a message with any questions!</p>
  </div>


  <footer class="page-footer">
    <div style="margin-top:10px">
      <a style="color: black" href="https://github.com/elzinga11/my-miniature-models.git">GitHub</a>
    </div>
  </footer>
</div>
</template>
