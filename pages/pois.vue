<template>
  <div id="page" class="container-fluid">
    <div class="container">
      <div class="text-center display-4 mt-4">{{ content.title }}</div>
      <p class="text-center text-muted mb-3">
        {{ content.description }}
      </p>
      <!-- We use select to generate the breadcrumbs correctly -->
      <bread-crumb :crumbs="crumbs" @selected="selected" />
      <!-- We pass the pois from the database and we specify the name, so that we can handle them correctly in the component that is dynamic -->
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
import BreadCrumb from "~/components/BreadCrumb.vue";
import "../assets/style.css";
import GridCards from "../components/GridCards.vue";

export default {
  name: "PoisPage",
  components: { GridCards, BreadCrumb },
  data() {
    return {
      content: [],
    };
  },
  methods: {
    selected(crumbPath) {
      this.$router.push(crumbPath);
    },
  },
  async asyncData({ $axios }) {
    // get all the data from the backend and pass it to the component in order to be printed
    const { data } = await $axios.get("api/pois/list");
    //Get the data of the content from the backend in order to not have static data in the page.
    const content = await $axios.get("api/content/poi");
    return {
      pois: data,
      content: content.data,
      crumbs: [
        { name: "Home", path: "/" },
        { name: "Point of Interests", path: "/pois" },
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
