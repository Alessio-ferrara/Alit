<template>
  <div class="container-fluid">
    <div class="container">
      <div class="text-center display-4 mt-4">Points of interest</div>
      <p class="text-center text-muted mb-3">
        Page to see all the points of interest (POI) related to a specific group
      </p>
      <grid-cards :items="pois" :name="'poi'" />
    </div>
  </div>
</template>

<style scoped>
#EventGroup {
  max-height: 100vh;
}
</style>

<script>
import "../assets/style.css";
import GridCards from "../components/GridCards.vue";

export default {
  name: "PoisPage",
  components: { GridCards },
  data() {
    return {};
  },
  async asyncData({ $axios }) {
    // get all the data from the backend and pass it to the component in order to be printed
    const { data } = await $axios.get("api/pois/list");
    return {
      pois: data,
    };
  },
};
</script>
