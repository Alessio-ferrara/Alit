<template>
  <div class="container-fluid">
    <div class="container">
      <div class="text-center display-4">
        Events
        <hr />
      </div>
      <p class="text-center text-muted">
        short descritption
      </p>
      <EventsList />
    </div>
  </div>
</template>


<script>
// import CustomPage from '~/components/CustomPage.vue'
import '../assets/style.css';
import EventsList from "../components/EventsList.vue"
export default {
  name: 'EventsPage',
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
