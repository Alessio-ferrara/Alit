<template>
  <div class="container-fluid mt-3 p-0">
    <div
      class="p-5 text-center bg-image min-vh-50 mt-3"
      style="
      background-image: url('https://images.unsplash.com/photo-1624305740286-dbbccc54fb96?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1865&q=80');
      height: 70vh;
    "
    >
      <div class="mask" style="background-color: rgba(0, 0, 0, 0.3);">
        <div class="d-flex h-100">
          <div class="text-white mt-3 ml-3 pt-3">
            <h1 class="display-1">Tirana</h1>
            <hr />
            <p class="lead">Discover more about the gorgeous capital city of Albania.</p>
          </div>
        </div>
      </div>
    </div>
    <!--  /jumbotron -->
    <div class="container">
      <div class="row">
        <!-- description -->
        <div class="col-md-6 col-sm-12 mt-3">
          <div class="lead text-justify">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit laborum nobis aspernatur ad ullam sed, vitae repudiandae velit magnam eos quos, perspiciatis aliquam dolores odit itaque et totam nulla saepe?
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam dolor iure rerum vel enim id ab praesentium, suscipit laboriosam incidunt modi assumenda a asperiores veritatis sapiente impedit dolores quia necessitatibus.
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sunt assumenda culpa aliquid accusantium officia adipisci sit consequuntur, neque iste cupiditate magni nobis tempore quae recusandae, dignissimos vitae soluta facere consequatur!
          </div>
          <!-- Collapsed content -->
          <div
            class="collapse mt-3"
            id="moreDetails"
          >More details about tirana to be displayed after the click of the user.</div>
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
  padding-top: 40px!important;
}
.mask .text-white {
    margin-left:  0;
    margin-top: 15% !important;
  }
</style>


<script>
import GoogleMap from "./GoogleMap.vue"

import '../assets/jumbotron.css';

export default {
  name: "CustomPage",
  components: {
    GoogleMap
  },
  data(){
    // tirana coordinates
  const lat=  "41.327953"
  const lng=  "19.819025"
  return{
    lat,
    lng
  }
  }
};
</script>
