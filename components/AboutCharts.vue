<template>
    <span class="row mb-3">
        <div class="col-xl-3 col-md-6 col-12 mb-2">
          <div class="card">
            <div class="card-content">
              <div class="card-body">
                <div class="media d-flex">
                  <div class="align-self-center text-left">
                    <i
                      class="fa-solid fa-2xl fa-chart-line text-success float-left"
                    ></i>
                  </div>
                  <div class="media-body text-dark float-right lead text-right">
                    <h5 class="lead text-success">6.000.000</h5>
                    <span>Visitors per year</span>
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
                      class="fa-regular fa-2xl fa-comment text-warning float-left"
                    ></i>
                  </div>
                  <div class="media-body text-dark float-right lead text-right">
                    <h5 class="lead text-warning">15.780</h5>
                    <span>Monthly posts</span>
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
                      class="fa-regular fa-2xl fa-eye text-primary float-left"
                    ></i>
                  </div>
                  <div class="media-body text-dark float-right lead text-right">
                    <h5 class="lead text-primary">132</h5>
                    <span>Monthly users</span>
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
                      class="fa fa-2xl fa-location-dot text-danger float-left"
                    ></i>
                  </div>
                  <div class="media-body text-dark float-right lead text-right">
                    <h5 class="lead text-danger">180</h5>
                    <span>Attractions</span>
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
  data(){}
};
</script>