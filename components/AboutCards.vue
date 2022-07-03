<template>
  <!--this component contains code for displaying the cards section on the about us page-->
  <span class="row mt-3"> 
    <h1 class="text-center text-danger fw-light mt-3">{{about_us_data.cards_title}}</h1>
    <!--displaying about us content that was retrieved from the database-->
     <div class="col-12 card mt-4">
          <div class="card-body">
            <p class="lead text-danger m-3">{{about_us_data.museum_title}}</p>

            <div class="mr-3">
              <nuxt-img
                  v-bind:src="'/' + about_us_data.museum_image"
                  v-bind:alt="about_us_data.museum_title"
                  class="rounded"
                  format="webp"
                  style="float: left"
              />
              <!--we use v-bind to bind database information to html element attributes -->
            </div>
            <p id="description" class="text-black p-3 h5 lead text-justify">
              {{about_us_data.museum_description}}
            </p>
          </div>
        </div>
        <div class="col-12 card">
          <div class="card-body">
            <p class="lead text-danger m-3">{{about_us_data.tourism_title}}</p>
            <div class="mr-3">
              <nuxt-img
                  v-bind:src="'/' + about_us_data.tourism_image"
                  v-bind:alt="about_us_data.tourism_title"
                  class="rounded"
                  format="webp"
                  style="float: right"
              />
            </div>
            <p id="description" class="text-black p-3 h5 lead">
                  {{about_us_data.tourism_description}}
            </p>
          </div>
        </div>
        <div class="col-12 card">
          <div class="card-body">
            <p class="lead text-danger m-3">{{about_us_data.festivals_title}}</p>
            <div class="mr-3">
              <nuxt-img
                  v-bind:src="'/' + about_us_data.festivals_image"
                  v-bind:alt="about_us_data.festivals_title"
                  class="rounded"
                  format="webp"
                  style="float: left"
              />
            </div>
            <p id="description" class="text-black p-3 h5 lead text-justify">
              {{about_us_data.festivals_description}}
            </p>
          </div>
        </div>
        <div class="col-12 card">
          <div class="card-body">
            <p class="lead text-danger m-3">{{about_us_data.nightlife_title}}</p>
            <div class="mr-3">
              <nuxt-img
                  v-bind:src="'/' + about_us_data.nightlife_image"
                  v-bind:alt="about_us_data.nightlife_title"
                  class="rounded"
                  format="webp"
                  style="float: right"
              />
            </div>
            <p id="description" class="text-black p-3 h5 lead">
              {{about_us_data.nightlife_description}}
            </p>
          </div>
        </div>
  </span>
</template>

<style scoped>
.row{
  margin-left: 0;
}
img {
  height: 80vh !important;
  max-height: 80vh;
}
#content {
  background-color: white;
}
#content .col-12 {
  /* margin-bottom: 15vh; */
  margin-bottom: 8vh;
}
#content img {
  height: 25vh !important;
  max-width: 30vh !important;
  /* float: left; */
  margin: 5px;
}
p {
  color: whitesmoke;
}
.card{
  align-content: space-around;
  align-items: center
}
.media {
  justify-content: space-evenly;
}
</style>

<script>

export default {
  name: "About-Cards",
  props: {
    about_us_data: {
      //the about us data contains the about us cards info
      //it is retrieved from the database and passed on to this component
      //when it is called
      type: Object,
      required: true,
    },
  },
};
</script>