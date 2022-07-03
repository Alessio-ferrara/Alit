template>
  <span class="row mt-3"> 
    <!-- <hr/> -->
    <h1 class="text-center text-danger fw-light mt-3">{{about_us_data.cards_title}}</h1>
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
            <p class="lead text-danger m-3">{{about_us_data.festivals_title}}</p>
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
</style>

<script>
import about_us from "~/pages/about_us";

export default {
  name: "About-Cards",
  props: {
    about_us_data: {
      type: Object,
      required: true,
    },
  },
};
</script>