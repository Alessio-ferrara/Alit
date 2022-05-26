<template>
  <div>
    <div id="details" class="container mt-4">
      <h1 class="mt-2 d-flex align-items-center">
        {{ itinerary.name }}
        &nbsp;
        <span class="badge bg-danger">{{ itinerary.duration }}</span>
      </h1>
      <!-- <div class="label inline text-danger">{{ poi.poi_type.name }}</div> -->
      <hr />
      <div class="row">
        <!-- description -->
        <div class="col-md-6 col-sm-12 mt-3">
          <div class="lead text-justify">
            {{itinerary.description}}</div>
          <br />
        </div>
        <itinerary-component :items="itinerary.point_of_interests" :poi_start="itinerary.poi_start"  :poi_end="itinerary.poi_end" />
      </div>
    </div>
  </div>
</template>


<script>
// import CustomPage from '~/components/CustomPage.vue'
import "../../assets/style.css";
import "../../assets/details.css";
import ItineraryComponent from "~/components/ItineraryComponent";

export default {
  name: "ItineraryPage",
  components: {
    ItineraryComponent,
  },
  data() {
    return {};
  },
  async asyncData({ route, $axios }) {
    const { id } = route.params;
    const { data } = await $axios.get(`api/itineraries/${id}`);
    console.log(data);
    return {
      itinerary: data,
    };
  },
};
</script>
