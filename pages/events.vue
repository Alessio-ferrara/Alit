<template>
  <div id="page" class="container-fluid">
    <div class="container">
      <events-list :changeSelection="changeSelection" />
      <p
        class="text-center text-muted mb-3"
      >Page to see all the events related to a specific category</p>
      <grid-cards v-if="events[selection].length" :items="events[selection]" :name="'event'" />
      <!-- We should change this to be styled better -->
      <div v-else class="text-center text-muted mt-3">
        <div class="alert alert-info" role="alert">
          <i class="fa fa-warning"></i>
          No events matching the choice were found. Try again later
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
// import CustomPage from '~/components/CustomPage.vue'
import "../assets/style.css";
import EventsList from "../components/EventsList.vue";
import GridCards from "../components/GridCards.vue";

export default {
  name: "EventsPage",
  components: {
    GridCards,
    EventsList,
  },
  data() {
    return {
      selection: "all_events",
    };
  },
  async asyncData({ $axios }) {
    // get all the data from the backend and pass it to the component in order to be printed
    const { data } = await $axios.get("api/events/");
    return {
      events: data,
    };
  },
  methods: {
    changeSelection: function (choose) {
      this.selection = choose;
    },
  },
};
</script>
