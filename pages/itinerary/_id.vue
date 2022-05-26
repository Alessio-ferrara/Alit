<template>
  <div class="card w-50 container-fluid mt-5 pt-5 ">
    <div class="card-body row border-3">
      <div class="row">
      <h5 class="card-title lead text-black fw-semibold">{{ itinerary.name }}</h5>
        <hr />
        <div class="row">
          <div class="col-md-4">
            <span class="badge bg-danger text-white p-2 mb-3">{{itinerary.duration }} hours</span>
            <itinerary-component :items="itinerary.point_of_interests" :poi_start="itinerary.poi_start"  :poi_end="itinerary.poi_end" :name="'it'" />
          </div>
        <div id="itinerary" class="col-md-8 mt-5 pt-5">
          <div class="lead text-justify">
            {{itinerary.description}}</div>
        </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
span {
  display: inline-block;
  width: 75px;
}

#itinerary {
  border-left: dotted rgb(44, 42, 43);
}
</style>
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
