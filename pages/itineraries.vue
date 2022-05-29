<template>
  <div id="page" class="container-fluid">
    <div class="container">
      <div class="text-center display-4 mt-4">Itineraries</div>
      <p class="text-center text-muted mb-3">
        Page to see all the itineraries available on the website
      </p>
      <bread-crumb :crumbs="crumbs" @selected="selected" />
      <hr />
    </div>
    <row-grid-cards :items="itineraries" :name="'itinerary'" />
  </div>
</template>

<style scoped>
#EventGroup {
  max-height: 100vh;
}
</style>

<script>
import BreadCrumb from '~/components/BreadCrumb.vue';
// import CustomPage from '~/components/CustomPage.vue'
import "../assets/style.css";
import RowGridCards from "../components/RowGridComponent.vue";

export default {
  name: "ItinerariesPage",
  components: {
    RowGridCards,
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
  async asyncData({ $axios }) {
    const { data } = await $axios.get("api/itineraries/");
    return {
      itineraries: data,
      crumbs: [
        { name: "Home", path: "/" },
        { name: "Itineraries", path: "" },
      ],
    };
  },
};
</script>
