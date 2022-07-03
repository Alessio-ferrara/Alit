<template>
  <div id="page" class="container-fluid">
    <div class="container">
      <div class="text-center display-4 mt-4">
        {{ content.title }}
      </div>
      <p class="text-center text-muted mb-3">{{ content.description }}</p>
      <!-- We use select to generate the breadcrumbs correctly -->
      <bread-crumb :crumbs="crumbs" @selected="selected" />
      <!-- We pass the pois from the database and we specify the name, so that we can handle them correctly in the component that is dynamic -->

      <grid-cards :items="services" :name="'service'" />
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
  components: { GridCards, BreadCrumb },
  name: "ServicesPage",
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
    const { data } = await $axios.get("api/services/");
    //Get the content from the database in order to not have hardcoded text in the website
    const content = await $axios.get("api/content/service");
    return {
      content: content.data,
      services: data,
      crumbs: [
        { name: "Home", path: "/" },
        { name: "Services", path: "/services" },
      ],
    };
  },
  head() {
    return {
      title: "Services of Tirana",
      meta: [
        { charset: "utf-8" },
        {
          hid: "description",
          name: "description",
          content:
            "Discover here the variety of the services you can find in Tirana, including pharmacies, hospitals, hotels, restaurants, shopping centers.",
        },
      ],
    };
  },
};
</script>
