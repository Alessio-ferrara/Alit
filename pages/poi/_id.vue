<template>
  <div>
    <carousel-component :images="poi.poi_images" />
    <bread-crumb :crumbs="crumbs" @selected="selected" />
    <div id="details" class="container mt-4">
      <h1 class="mt-2 d-flex align-items-center">
        {{ poi.name }}
        &nbsp;
        <span class="badge bg-danger">{{ poi.poi_type.name }}</span>
      </h1>
      <!-- <div class="label inline text-danger">{{ poi.poi_type.name }}</div> -->
      <hr />
      
      <div class="row">
        <!-- description -->
        <div class="col-md-6 col-sm-12 mt-3">
          <div class="lead text-justify">
            {{ poi.description }}
            <div
              class="collapse mt-3 lead text-muted col-md-12"
              id="moreDetails"
            >
              More details that will be displayed on the website after the click
              of the user.
            </div>
          </div>
          <br />
          <!-- Buttons trigger collapse -->
        </div>
        <!-- GoogleMapAPI -->
        <div class="col-md-6 col-sm-12 mt-3">
          <!-- maps api with the key AIzaSyDX_OSdMYc79SeKrOLBh7VqZ5_n-mdexew -->
          <google-map :lat="poi.lat" :lang="poi.lang" />
        </div>
        <div class="row">
          <div class="col-md-8 col-sm-12">
            <a
              class="col-lg-3 btn btn-danger"
              data-mdb-toggle="collapse"
              href="#moreDetails"
              role="button"
              aria-expanded="false"
              aria-controls="moreDetails"
            >
              <i class="fa fa-circle-info"></i>
              Show more details
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.badge{
  border-radius: 10px;
}
</style>

<script>
// import CustomPage from '~/components/CustomPage.vue'
import "../../assets/style.css";
import "../../assets/details.css";
import CarouselComponent from "~/components/CarouselComponent.vue";
import BreadCrumb from "~/components/BreadCrumb.vue";

export default {
  name: "PoiPage",
  components: {
    CarouselComponent,
    BreadCrumb,
  },
  data() {
    return {};
  },
  methods: {
    selected(crumbPath) {
      this.$router.push(crumbPath);
    },
  },
  async asyncData({ route, $axios }) {
    const { id } = route.params;
    const { data } = await $axios.get(`api/pois/poi/${id}`);
    return {
      poi: data,
      crumbs: [
        { name: "Home", path: "/" },
        { name: "Point of Interests", path: "/pois" },
        { name: data.name, path: "" },
      ],
    };
  },
};
</script>
