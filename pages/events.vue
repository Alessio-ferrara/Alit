<template>
  <div class="container-fluid">
    <div class="container">
      <!-- passing everything to the component that will automatically display all the event groups at the top and elle the events fetched -->
      <events-list/>
      <p
        class="text-center text-muted mb-3"
      >Page to see all the events related to a specific category</p>
      <grid-cards :items="events" :name="'event'"/>
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
import '../assets/style.css';
import EventsList from "../components/EventsList.vue"
import GridCards from "../components/GridCards.vue"


export default {
  name: 'EventsPage',
  components: {
    GridCards,
    EventsList,
  },
  data() {
    return {
      // events: data
    }
  },
  async asyncData({ $axios }) {
    // get all the data from the backend and pass it to the component in order to be printed
    const { data } = await $axios.get('api/events/list');
    return {
      events : data
    }
  },
}
</script>
