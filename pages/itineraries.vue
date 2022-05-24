<template>
  <div class="container-fluid">
    <div class="container">
      <!-- passing everything to the component that will automatically display all the event groups at the top and elle the events fetched -->
      <p
          class="text-center text-muted mb-3"
      >Page to see all the itineraries</p>
      <grid-cards :items="itineraries" :name="'itinerary'"/>
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
import GridCards from "../components/GridCards.vue"


export default {
  name: 'ItinerariesPage',
  components: {
    GridCards,
  },
  data() {
    return {}
  },
  async asyncData({ $axios }) {
    const { data } = await $axios.get('api/itineraries/');
    console.log(data)
    return {
      itineraries : data
    }
  },
}
</script>
