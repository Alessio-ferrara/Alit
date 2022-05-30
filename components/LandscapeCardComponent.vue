<template>
  <span>
    <div v-if="name == 'itinerary'" class="card h-200">
      <div class="card-body row border-3">
        <div class="col-lg-8 col-md-12">
          <h1 class="card-title text-black text-left display-6">{{ item.name }}</h1>
          <h3 class="card-text text-muted">
            <span
              v-if="item.duration > 1"
              class="badge bg-danger text-white p-2"
            >{{item.duration }} hours</span>
            <span v-else class="badge bg-danger text-white p-2">{{item.duration }} hour</span>
            <hr />
            <p class="text-muted lead mt-3">{{ item.description }}</p>
          </h3>
        </div>
        <!-- left part of the card -->
        <div id="itinerary" class="col-lg-4 col-md-12">
          <itinerary-component :poi_start="item.poi_start" :poi_end="item.poi_end" />
        </div>
        <!-- right part of the card -->
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
