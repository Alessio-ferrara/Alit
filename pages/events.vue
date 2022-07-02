<template>
  <div id="page" class="container-fluid">
    <div class="container">
      <events-list :changeSelection="changeSelection" />
      <p class="text-center text-muted mb-3">
        {{content.description}}
      </p>
      <bread-crumb :crumbs="crumbs" @selected="selected" />
      <grid-cards
        v-if="events[selection].length"
        :items="events[selection]"
        :name="'event'"
      />
      <!-- TODO We should change this to be styled better -->
      <div v-else class="text-center text-muted mt-3">
        <div class="alert alert-info" role="alert">
          <i class="fa fa-lg fa-warning">&nbsp;</i>
          No events matching the choice were found. Try again later &#9203;
        </div>
      </div>
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
// import CustomPage from '~/components/CustomPage.vue'
import "../assets/style.css";
import EventsList from "../components/EventsList.vue";
import GridCards from "../components/GridCards.vue";

export default {
  name: "EventsPage",
  components: {
    GridCards,
    EventsList,
    BreadCrumb,
  },
  data() {
    return {
      selection: "all_events",
    };
  },
  
  async asyncData({ $axios }) {
    // get all the data from the backend and pass it to the component in order to be printed
    const { data } = await $axios.get("api/events/");
    const content = await $axios.get("api/content/event");
    return {
      content: content.data,
      events: data,
      crumbs: [
        { name: "Home", path: "/" },
        { name: "Events", path: "/events" },
      ],
    };
  },
  methods: {
    changeSelection: function (choose) {
      this.selection = choose;
    },
    selected(crumbPath) {
      this.$router.push(crumbPath);
    },
  },
  head() {
    return {
      title: "Events in Tirana",
      meta: [
        { charset: "utf-8" },
        {
          hid: "description",
          name: "description",
          content:
            "With the diversity of places, culture and history, in Tirana you can always find something to do. Here you can find a list of events to attend, furthemore grouped in summer and winter events to easily search according to the time of the visit there.",
        },
      ],
    };
  },
};
</script>
