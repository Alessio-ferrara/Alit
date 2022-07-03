<template>
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
                  </div>
                  <div class="media-body text-dark float-right lead text-right">
                    <h5 class="lead text-success">{{about_us_data.visitors_number}}</h5>
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
      type: Object,
      required: true,
    },
  },
};
</script>