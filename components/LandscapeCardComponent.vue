<template>
  <span>
    <div v-if="name == 'itinerary'" class="card h-200">
    <!-- if we are displaying itineraries we display the cards -->
      <div class="card-body row border-3">
        <div class="col-lg-8 col-md-12">
          <h1 class="card-title text-black text-left display-6">{{ item.name }}</h1>
          <h3 class="card-text text-muted">
            <!-- basge to give information on the duration of the itinerary, displaying the text correctly depending on the hours -->
            <mark
              v-if="item.duration > 1"
              class="text-danger h4"
            >{{item.duration }} hours</mark>
            <mark v-else class="text-danger h4">{{item.duration }} hour</mark>
            <hr />
            <p class="text-muted lead mt-3" >{{ item.short_description }}</p>
          </h3>
        </div>
        <!-- /left part of the card -->
        <div id="itinerary" class="col-lg-4 col-md-12">
          <!-- call to itinerary component passing the starting and ending point and displaying the "short" itinerary version -->
          <itinerary-component :poi_start="item.poi_start" :poi_end="item.poi_end" />
        </div>
        <!-- /right part of the card -->
      </div>
    </div>
  </span>
</template>

<style scoped>
.card:hover {
  cursor: pointer;
  box-shadow: 0 10px 15px -3px rgb(0 0 0 / 20%), 0 4px 6px -2px rgb(0 0 0 / 15%) !important;
}
</style>

<script>
import ItineraryComponent from "~/components/ItineraryComponent";
import "../assets/itinerary.css";
export default {
  name: "LandscapeCardComponent",
  components : {
    ItineraryComponent
  },
  props: {
    item: {
      type: Object,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
  }
};
</script>
