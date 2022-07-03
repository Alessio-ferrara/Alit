<template>
  <div class="container-fluid mt-3 p-0">
    <div
      class="p-5 text-center bg-image min-vh-50 mt-3"
      style="height: 70vw; max-height: 70vh; object-fit: scale-down"
    ></div>
    <!--  /jumbotron -->
    <div class="container">
      <div class="row">
        <!-- description -->
        <div class="col-md-6 col-sm-12 mt-3">
          <div id="presentation" class="lead text-justify">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit
            laborum nobis aspernatur ad ullam sed, vitae repudiandae velit
            magnam eos quos, perspiciatis aliquam dolores odit itaque et totam
            nulla saepe? Lorem ipsum dolor sit amet consectetur adipisicing
            elit. Quam dolor iure rerum vel enim id ab praesentium, suscipit
            laboriosam incidunt modi assumenda a asperiores veritatis sapiente
            impedit dolores quia necessitatibus. Lorem, ipsum dolor sit amet
            consectetur adipisicing elit. Sunt assumenda culpa aliquid
            accusantium officia adipisci sit consequuntur, neque iste cupiditate
            magni nobis tempore quae recusandae, dignissimos vitae soluta facere
            consequatur!
          </div>
          <!-- Collapsed content -->
          <div class="collapse mt-3" id="moreDetails">
            More details about tirana to be displayed after the click of the
            user.
          </div>
        </div>
        <!-- GoogleMapAPI -->
        <div class="col-md-6 col-sm-12 mt-3">
          <!-- maps api with the key AIzaSyDX_OSdMYc79SeKrOLBh7VqZ5_n-mdexew -->
          <google-map :lat="lat" :lang="lng" />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.text-white {
  padding-top: 40px !important;
}
.bg-image {
  background-image: url(@/static/images/landing.png);
}
#presentation {
  text-align: justify;
}
#presentation:after {
  text-align: justify;
}
.mask .text-white {
  margin-left: 0;
  margin-top: 15% !important;
}
.left {
  float: left;
  padding: 0 20px 20px 0;
}
.right {
  float: right;
  padding: 0 0 20px 20px;
}
</style>

<script>
import GoogleMap from "./GoogleMap.vue";

import "../assets/jumbotron.css";

export default {
  name: "CustomPage",
  components: {
    GoogleMap,
  },
  data() {
    // tirana coordinates
    const lat = "41.327953";
    const lng = "19.819025";
    return {
      lat,
      lng,
    };
  },
};
</script>
