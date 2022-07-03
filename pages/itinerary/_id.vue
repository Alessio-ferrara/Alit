<template>
  <div>
    <carousel-component :images="itinerary.poi_images" />
    <div id="details" class="container mt-4">
      <bread-crumb :crumbs="crumbs" @selected="selected" />
      <h1 class="mt-2 mb-2">
        {{ itinerary.name }}
        <br />
      </h1>
      <hr />
      <div class="row mt-4">
        <!-- description -->
        <div class="col-lg-8 col-sm-12 text-justify">
          <div id="presentation" class="lead">
            <br />
            {{ itinerary.description }}
          </div>
          <br />
        </div>
        <div id="side-info" class="col-lg-4 col-sm-12 mb-3">
          <div>
            <itinerary-component
              :items="itinerary.point_of_interests"
              :poi_start="itinerary.poi_start"
              :poi_end="itinerary.poi_end"
              :name="'it'"
            />
            <p class="text-center text-muted fs-6 mt-2">
              <i class="fa-solid fa-hand-pointer"></i>
              <br />
               Click to get additional information
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
@media screen and (max-width: 1000px) {
  .row {
    display: flex;
    flex-direction: column-reverse;
  }
}
span {
  display: inline-block;
  width: 75px;
}
#side-info {
  /* max-height: 20vh;
  margin-bottom: 10%; */
  border-left: none;
}
#presentation {
  text-align: justify;
}
#presentation:after {
  text-align: justify;
}
</style>
<script>
// import CustomPage from '~/components/CustomPage.vue'
import "../../assets/style.css";
import "../../assets/details.css";
import ItineraryComponent from "~/components/ItineraryComponent";
import CarouselComponent from "~/components/CarouselComponent.vue";
import BreadCrumb from "~/components/BreadCrumb.vue";

export default {
  name: "ItineraryPage",
  components: {
    ItineraryComponent,
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
    const { data } = await $axios.get(`api/itineraries/${id}`);
    return {
      itinerary: data,
      crumbs: [
        { name: "Home", path: "/" },
        { name: "Itineraries", path: "/itineraries" },
        { name: data.name, path: "" },
      ],
    };
  },
};
</script>
