<template>
  <!--this component contains code for displaying the charts section on the about us page-->
  <span class="row mb-3">
        <div class="col-xl-3 col-md-6 col-12 mb-2">
          <div class="card">
            <div class="card-content">
              <div class="card-body">
                <div class="media d-flex">
                  <div class="align-self-center text-left">
                    <i
                      v-bind:class=about_us_data.visitors_icon
                    ></i>
                    <!-- the icon class is also saved and retrieved from the database-->
                    <!-- this decision was made to facilitate the modification of frontend content
                         by just changing the seeder values, without having to go back into the vue code-->
                    <!-- we use v-bind to bind it to the class attribute of the icon-->
                  </div>
                  <div class="media-body text-dark float-right lead text-right">
                    <h5 class="lead text-success">{{about_us_data.visitors_number}}</h5>
                    <!--display content retrieved from the database-->
                    <span>{{about_us_data.visitor_title}}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-xl-3 col-md-6 col-12 mb-2">
          <div class="card">
            <div class="card-content">
              <div class="card-body">
                <div class="media d-flex">
                  <div class="align-self-center text-left">
                    <i
                        v-bind:class=about_us_data.posts_icon
                    ></i>
                  </div>
                  <div class="media-body text-dark float-right lead text-right">
                    <h5 class="lead text-warning">{{about_us_data.posts_number}}</h5>
                    <span>{{about_us_data.posts_title}}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-xl-3 col-md-6 col-12 mb-2">
          <div class="card">
            <div class="card-content">
              <div class="card-body">
                <div class="media d-flex">
                  <div class="align-self-center text-left">
                    <i
                        v-bind:class=about_us_data.users_icon
                    ></i>
                  </div>
                  <div class="media-body text-dark float-right lead text-right">
                    <h5 class="lead text-primary">{{about_us_data.users_number}}</h5>
                    <span>{{about_us_data.users_title}}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-xl-3 col-md-6 col-12 mb-2">
          <div class="card">
            <div class="card-content">
              <div class="card-body">
                <div class="media d-flex">
                  <div class="align-self-center text-left">
                    <i
                        v-bind:class=about_us_data.attractions_icon
                    ></i>
                  </div>
                  <div class="media-body text-dark float-right lead text-right">
                    <h5 class="lead text-danger">{{about_us_data.attractions_number}}</h5>
                    <span>{{about_us_data.attractions_title}}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
    </span>
</template>

<style scoped>
#intro {
  font-weight: normal;
  color: white;
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
.media {
  justify-content: space-evenly;
}
</style>

<script>
export default {
  name: "About-Charts",
  props: {
    about_us_data: {
      //the about us data contains the about us charts info
      //it is retrieved from the database and passed on to this component
      //when it is called
      type: Object,
      required: true,
    },
  },
};
</script>