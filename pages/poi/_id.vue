<template>
  <div>
    <carousel-component :images="poi.poi_images" />
    <div class="container">
      <h1 class="display-3 mt-2">{{ poi.name }}</h1>
      <h2 class="text-danger">{{ poi.poi_type.name }}</h2>
      <hr />
      <div class="row">
        <!-- description -->
        <div class="col-md-6 col-sm-12 mt-3">
          <h1 class="h-1 lead">{{ poi.description }}</h1>
          <br />
          <!-- Buttons trigger collapse -->

          <!-- Collapsed content -->
          <div class="collapse mt-3" id="moreDetails">
            More details about tirana to be displayed after the click of the
            user.
          </div>
        </div>
        <!-- GoogleMapAPI -->
        <div class="col-md-6 col-sm-12 mt-3">
          <!-- maps api with the key AIzaSyDX_OSdMYc79SeKrOLBh7VqZ5_n-mdexew -->
          <google-map :lat="poi.lat" :lang="poi.lang" />
        </div>
        <div class="row">
          <a
            class="col-3 btn btn-danger"
            data-mdb-toggle="collapse"
            href="#moreDetails"
            role="button"
            aria-expanded="false"
            aria-controls="moreDetails"
            >Visit info</a
          >
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
h2,
h1 {
  display: inline;
}
h2 {
  margin-left: 2% !important;
}
</style>

<script>
// import CustomPage from '~/components/CustomPage.vue'
import "../../assets/style.css";
import "../../assets/details.css";
import CarouselComponent from "~/components/CarouselComponent.vue";

export default {
  name: "PoiPage",
  components: {
    CarouselComponent,
  },
  data() {
    return {};
  },
  async asyncData({ route, $axios }) {
    const { id } = route.params;
    const { data } = await $axios.get(`api/pois/poi/${id}`);
    console.log(data);
    return {
      poi: data,
    };
  },
};
</script>
