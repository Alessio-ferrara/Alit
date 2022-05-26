<template>
  <div id="page" class="container-fluid">
    <!-- <div class="container pt-4 mt-5">
      <p class="text-center mb-3 display-5">
        Itineraries
      </p>
      <br>
      <row-grid-cards :items="itineraries" :name="'itinerary'"/>
    </div> -->
    <div class="container">
      <div class="text-center display-4 mt-4">Itineraries</div>
      <p class="text-center text-muted mb-3">
        Page to see all the itineraries available on the website
      </p>
      <hr/>
    </div>
    <row-grid-cards :items="itineraries" :name="'itinerary'"/>
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
