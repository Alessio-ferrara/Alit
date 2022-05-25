<template>
  <div class="container-fluid">
    <div class="container pt-4 mt-5">
      <!-- passing everything to the component that will automatically display all the event groups at the top and elle the events fetched -->
      <p class="text-center mb-3 display-5">
        ITINERARIES
      </p>
      <br>
      <row-grid-cards :items="itineraries" :name="'itinerary'"/>
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
import RowGridCards from "../components/RowGridComponent.vue"


export default {
  name: 'ItinerariesPage',
  components: {
    RowGridCards,
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
