<template>
  <div id="page" class="container-fluid">
    <div class="container">
      <div class="text-center display-4 mt-4">{{content.title}}</div>
      <p class="text-center text-muted mb-3">
        {{content.description}}
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
import BreadCrumb from "~/components/BreadCrumb.vue";
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
    const content = await $axios.get("api/content/itinerary");
    console.log(content.data)
    return {
      content: content.data,
      itineraries: data,
      crumbs: [
        { name: "Home", path: "/" },
        { name: "Itineraries", path: "/itineraries" },
      ],
    };
  },
  head() {
    return {
      title: "Itineraries of Tirana",
      meta: [
        { charset: "utf-8" },
        {
          hid: "description",
          name: "description",
          content:
            "Tirana, as an important city in many aspects, offers a variety of possible itineraries, which you can discover here thematically grouped as: Historic, Nature, Youth and Religious.",
        },
      ],
    };
  },
};
</script>