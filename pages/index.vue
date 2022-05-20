<template>
<!-- passing the static data to the jumbotron -->
  <custom-page :title="title" :image="image" :description="description" :details="details" />
</template>

<!--- KRISTINA'S FIRST COMMIT :P --->

<script>
import CustomPage from '~/components/CustomPage.vue'
export default {
  name: 'IndexPage',
  components: {
    CustomPage,
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
