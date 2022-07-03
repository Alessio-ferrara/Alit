<template>
  <div>
    <!-- We pass all the images to a carousel component we created in order to display them on the top -->
    <carousel-component :images="poi.poi_images" />
    <div id="details" class="container mt-4">
      <bread-crumb :crumbs="crumbs" @selected="selected" />
      <h1 class="mt-2">
        {{ poi.name }}
        &nbsp;
        <span class="badge bg-danger">{{ poi.poi_type.name }}</span>
      </h1>
      <hr />

      <div class="row">
        <!-- description -->
        <div class="col-md-6 col-sm-12 mt-3">
          <div id="presentation" class="lead text-justify">
            {{ poi.description }}
            <br />
            <br />
            <div style="fontweight: 900">Visit information:</div>
            {{ poi.visit_info }}
          </div>
          <br />
        </div>
        <!-- GoogleMapAPI -->
        <div class="col-md-6 col-sm-12 mt-3">
          <!-- maps api -->
          <google-map :lat="poi.lat" :lang="poi.lang" />
        </div>
      </div>
      <div v-if="poi.events.length">
        <h2 style="fontWeight:900, margin:0">Events</h2>
        <grid-cards
          v-if="poi.events.length"
          :items="poi.events"
          :name="'event'"
        />
      </div>
    </div>
  </div>
</template>

<style scoped>
.badge {
  border-radius: 10px;
}
#presentation {
  text-align: justify;
}
#presentation:after {
  text-align: justify;
}
#details h2 {
  margin: 0 !important;
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
    //Get the information about a point specified by the poi_id
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
