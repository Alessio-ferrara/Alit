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
          <div class="text-white text-left mt-3 ml-3 pt-3">
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
          <h3
            class="display-6"
          >Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur quibusdam saepe minus ad, quae eveniet fugit alias reprehenderit perspiciatis</h3>
          <!-- Buttons trigger collapse -->
          <a
            class="btn btn-danger"
            data-mdb-toggle="collapse"
            href="#moreDetails"
            role="button"
            aria-expanded="false"
            aria-controls="moreDetails"
          >More details</a>
          <!-- Collapsed content -->
          <div
            class="collapse mt-3"
            id="moreDetails"
          >More details about tirana to be displayed after the click of the user.</div>
        </div>
        <!-- GoogleMapAPI -->
        <div class="col-md-6 col-sm-12 mt-3">
          <!-- maps api with the key AIzaSyDX_OSdMYc79SeKrOLBh7VqZ5_n-mdexew -->
          <iframe
            width="650"
            height="450"
            frameborder="0"
            style="border:0"
            src="https://www.google.com/maps/embed/v1/place?key=AIzaSyDX_OSdMYc79SeKrOLBh7VqZ5_n-mdexew&q=Tirana,AL"
            allowfullscreen
          ></iframe>
          <!-- <GoogleMap /> -->
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
img {
  height: 300px;
}
.jumbotron {
  background-image: linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)),
    url("https://images.unsplash.com/photo-1546448396-6aef80193ceb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1051&q=80");
  background-repeat: no-repeat;
  margin-bottom: 0px;
  background-position: center;
  background-size: cover;
  min-height: 100vh;
}
.text-white {
  margin-left: 5% !important;
  margin-top: 15% !important;
}
.container-fluid {
  padding-top: 55px;
}
p {
  text-align: left;
}
</style>

<script>
// import GoogleMap from "./GoogleMap.vue"
export default {
  name: "CustomPage",
  // components: {
  //   GoogleMap
  // },
  // center: { lat: 45.508, lng: -73.587 },
  // props: {
  //   title: {
  //     type: String,
  //     required: true,
  //   },
  //   image: {
  //     type: String,
  //     required: true,
  //   },
  //   description: {
  //     type: String,
  //     required: true,
  //   },
  // },
};
</script>
