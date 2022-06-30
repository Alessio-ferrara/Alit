<template>
  <div id="page" class="container-fluid">
    <div class="container">
      <div class="text-center display-4 mt-4">Points of interest</div>
      <p class="text-center text-muted mb-3">
        Page to see all the points of interest (POI) related to a specific group
      </p>
      <bread-crumb :crumbs="crumbs" @selected="selected" />
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
import BreadCrumb from '~/components/BreadCrumb.vue';
import "../assets/style.css";
import GridCards from "../components/GridCards.vue";

export default {
  name: "PoisPage",
  components: { GridCards, BreadCrumb },
  data() {
    return {};
  },
  methods: {
    selected(crumbPath) {
      this.$router.push(crumbPath);
    },
  },
  async asyncData({ $axios }) {
    // get all the data from the backend and pass it to the component in order to be printed
    const { data } = await $axios.get("api/pois/list");
    return {
      pois: data,
      crumbs: [
        { name: "Home", path: "/" },
        { name: "Point of Interests", path: "" },
      ],
    };
  },
  head() {
    return {
      title: "Points of Interest of Tirana",
      meta: [
        { charset: "utf-8" },
        {
          hid: "description",
          name: "description",
          content:
            "Here you can find some of the most interesting places of Tirana, such as Skanderbeg Square, Arena Kombetare, Piramida, Reja, National Historic Museum, Polytechnic University of Tirana, Dajti Mount Park, Gran Park Tirana, and House of Leaves.",
        },
      ],
    };
  },
};
</script>
