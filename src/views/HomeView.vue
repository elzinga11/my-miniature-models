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
  <div class="news">
    <img class="trademark" style="max-width: 400px; margin-top: 13px"
    src="images/updated.png" />
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
  <router-link to="/shopping"><img class="shoppingCart" src="/images/shoppingcart.png"/></router-link>
  <!-- <div style="margin-top: -8px !important; margin-left: 15px; margin-right: 15px; padding-bottom: 15px !important" class="md-form mt-0">
    <input class="form-control" type="text" placeholder="Search" aria-label="Search">
  </div> -->
  <div style="text-align: center;" class="background-box">
    <ul style="display: inline-block;">
      <li class="iconSize">
        <div class="icon">
        <router-link style="font-family: unset; font-weight: 400"  to="/products"><img src="images/image.png"></router-link>  
        </div>
        <p>Mini Temple</p>
      </li>
      <li class="iconSize">
        <div class="icon">
          <router-link style="font-family: unset; font-weight: 400"  to="/products"><img src="images/image.png"></router-link>  
        </div>
        <p>With Display Case</p>
     </li>
      <li class="iconSize">
        <div class="icon">
        <router-link style="font-family: unset; font-weight: 400"  to="/products"><img src="images/image.png"></router-link>  
        </div>
        <p>With Lights</p>
      </li>
    </ul>
  </div>

  <div style="margin-top: 115px; height: 100%; background-size: auto 100%; background-image: url('images/slcwithcloche.jpg'); background-repeat: no-repeat; background-position: center top;">
  </div>
  
  <footer class="page-footer">
    <div style="margin-top:10px">
      <a style="color: black" href="https://github.com/elzinga11/my-miniature-models.git">GitHub</a>
    </div>
  </footer>
  </div>
</template>

<script>

</script>

<style>
body{
  min-width: 400px;
}
  
  .box{
      margin: 10px;
      text-align: center;
  }
  ul {
    list-style-type: none;
    margin: 0;
    padding: 0;
    overflow: hidden;
  }
  
  li {
    float: left;
  }
  
  li a {
  padding:10px;
    display: block;
    color: black;
    text-align: center;
    text-decoration: none;
    margin-left: 5px;
  }

  li a img {
    max-width: 15px;
  }
  
  /* Change the link color to #111 (black) on hover */
  li a:hover {
    color: rgb(99, 99, 99);
  }

  .trademark:hover{
    color: rgb(99, 99, 99);
  }

  .nav-link{
    font-family: Didot;
    font-size: 18px;
  }
  .nav-item{
    float: right;
  }

  nav{
    /* border-bottom: 1px solid lightgray; */
    padding-bottom: 10px !important;
  }

  .socialmedia{
    height: 25px;
  }

  footer {
    border-top: 1px solid gainsboro;
    text-align: center;
    padding: 3px;
    background-color: rgb(175, 187, 204);
    color: white;
    position: fixed;
    bottom: 0px;
    top: 93%;
    width: 100%;
  }


.news{
  text-align: center;
  background-color: rgb(173, 173, 173);
  height: 50px;
  width: 100%;
  margin-top:15px;
}
.background-box{
    text-align: center;
    background-color: rgb(175, 187, 204);
    height: 125px;
    width: 100%;
}
.rightBox{
    width: 55%;
}

.shoppingCart{
  opacity: .85;
  top: 105px;
  position: absolute;
  width: 40px;
  right: 95px;
}

/* Box-sizing reset: //w3bits.com/?p=3225 */
html {
    box-sizing: border-box;
  }
  
  *,
  *:before,
  *:after {
    box-sizing: inherit;
  }
  
  /* The Masonry Container */
  .masonry {
    margin: 1.5em auto;
    max-width: 90%;
    column-gap: 1.5em;
  }
  
  /* The Masonry Brick */
  .item {
    background-color: #eee;
    display: inline-block;
    margin: 0 0 1em;
    width: 100%;
    padding: 10px;
  }

  .icon{
    display: block;
    margin-left: auto;
    margin-right: auto;
    height: 100px; 
    width: 100px; 
    border-radius: 50%; 
    background-color: rgb(173, 173, 173);
  }

  .icon:hover{
    cursor: pointer;
    background-color: rgb(151, 151, 151);
  }
  
  /* Masonry on large screens */
  @media only screen and (min-width: 992px) {
    .masonry {
      column-count: 4;
    }
    .fontSize{
        font-size:20px;
    }
    .iconSize{
      margin:7vw;
      margin-top: 50px
    }
    .iconSize .icon img{
      max-width:75px;
      margin-top: 5px;
    }
  
    .icon{
      display: block;
      margin-left: auto;
      margin-right: auto;
      height: 150px; 
      width: 150px; 
      border-radius: 50%; 
      background-color: rgb(173, 173, 173);
    }
    .iconSize p{
      font-family: papyrus; 
      margin-top: 8px; 
    }

    .imageText{
      margin-bottom: 10px;
    }

    .shoppingCart{
      right: 25px !important;
    }
  
  }
  
  /* Masonry on medium-sized screens */
  @media only screen and (max-width: 991px) and (min-width: 780px) {
    .masonry {
      column-count: 3;
    }
    .fontSize{
        font-size:18px;
    }
    .iconSize{
      margin:7vw;
      margin-top: 50px
    }
    .iconSize .icon img{
      max-width:75px;
      margin-top: 5px;
    }

    .iconSize p{
      font-family: papyrus; 
      margin-top: 8px; 
    }
  
    .icon{
      display: block;
      margin-left: auto;
      margin-right: auto;
      height: 150px; 
      width: 150px; 
      border-radius: 50%; 
      background-color: rgb(173, 173, 173);
    }

    .imageText{
      margin-bottom: 10px;
    }
  }


  /* Masonry on small screens */
  @media only screen and (max-width: 779px) and (min-width: 500px) {
    .masonry {
      column-count: 2;
    }
    .fontSize{
        font-size:20px;
    }
    .about div{
        padding-left: 25px;
        float: none !important;
        text-align: center !important;
        width: 90% !important;
    }
    .about p{
        margin-left: 25px;
        text-align: center;
        width: 90% !important;
        margin-top: 15px !important;
        float: none !important;
    }
    .about{
        max-height: 76vh;
        overflow: scroll;
    }

    .iconSize{
      margin:5vw;
      margin-top: 75px
    }
    .iconSize .icon img{
      max-width:50px;
      margin-top: 5px;
    }
    .iconSize p{
      font-family: papyrus; 
      margin-top: 8px; 
    }

    .icon{
      display: block;
      margin-left: auto;
      margin-right: auto;
      /* height: 150px; 
      width: 150px; 
      border-radius: 50%; 
      background-color: rgb(173, 173, 173); */
    }
    .imageText{
      max-height: 40px !important;
    }
  }
    @media only screen and (max-width: 499px){

          .about div{
              padding-left: 25px;
              float: none !important;
              text-align: center !important;
              width: 90% !important;
          }
          .about p{
              margin-left: 25px;
              text-align: center;
              width: 90% !important;
              margin-top: 15px !important;
              float: none !important;
          }
          .about{
              max-height: 76vh;
              overflow: scroll;
          }

          .fontSize{
            font-size:20px;
        }

          .icon{
            display: block;
            margin-left: auto;
            margin-right: auto;
            /* height: 150px; 
            width: 150px; 
            border-radius: 50%; 
            background-color: rgb(173, 173, 173); */
          }

          .iconSize{
            margin:2vw;
            margin-top: 75px
          }
          .iconSize .icon img{
            max-width:50px;
            margin-top: 5px;
          }
          .iconSize p{
            font-size:14px;
            font-family: papyrus; 
            margin-top: 8px; 
          }

          .imageText{
            max-height: 30px !important;
          }
    }
</style>

