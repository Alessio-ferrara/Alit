<template>
  <div class="container-fluid">
    <div class="container">
      <!-- passing everything to the component that will automatically display all the event groups at the top and elle the events fetched -->
      <div class="text-center display-4 mt-4">
        Services
        <!-- shall display the eventItem.name whose index == the one received from props -->
      </div>
      <p
        class="text-center text-muted mb-3"
      >Page to see all the services related to a specific group</p>
      <GridCards />
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
  name: 'ServicesPage',
  // components: {
  //   CustomPage,
  // },
  data() {
    return {}
  },
  async asyncData({ $axios }) {
    // get all the data from the backend and pass it to the component in order to be printed
    const { data } = []
    const title = "Milan"
    const image = "ciao"
    const details = "details"
    const description = "description"
    return {
      title,
      description,
      image,
      details
    }
  },
}
</script>
